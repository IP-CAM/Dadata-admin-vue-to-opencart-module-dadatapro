<template>
    <div>
        <article v-if="message" class="message is-small" :class="statusMessage">
            <div class="message-body" v-html="message"></div>
        </article>
        <div class="columns is-variable is-1">
            <div v-if="tabPage.data" class="column is-6">
                <div v-for="(groups, groupKey) in tabPage.data" :key="groupKey">
                    <article class="message" style="margin-bottom: .75rem;">
                        <div class="message-body is-size-7">
                            Группа настроек {{groupKey.toUpperCase()}}
                        </div>
                    </article>
                    <table class="table is-fullwidth" :class="{'is-hidden': tabPage.status !== 'default'}">
                        <thead>
                        <tr>
                            <th class="is-size-7">Возвращаемые ключи</th>
                            <th class="is-size-7 td_label">Записать в поле</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="(group, index) in groups" :key="groupKey + index">
                            <td>
                                <div class="field has-addons wrap-control-queue">
                                    <p class="control">
                                        <label class="button is-small custom-checkbox"> <input
                                                type="checkbox" class="is-hidden"
                                                v-model="group.status" true-value="on" false-value="off"
                                        >
                                            <span></span>
                                        </label>
                                    </p>
                                    <div class="control control-fullwidth">
                                        <input
                                                v-if="group.newElement === undefined"
                                                class="input is-small" type="text" placeholder="Ключ или группа ключей"
                                                :id="groupKey + index"
                                                v-model="group.helper_keys"
                                                :disabled="group.status === 'off'"
                                        > <input
                                            v-else
                                            class="input is-small" type="text" placeholder="Селектор, перед которым произойдет вставка эелемнта"
                                            :id="groupKey + index"
                                            v-model="group.awaiting"
                                            :disabled="group.status === 'off'"
                                    >
                                    </div>
                                    <p v-if="group.prefetch !== undefined && group.clear !== undefined" class="control">
                                        <span class="select is-small">
                                            <select v-model="group.clear" :disabled="group.status === 'off'">
                                                <option :selected="group.clear === true" value="true">Очищать</option>
                                                <option :selected="group.clear === false" value="false">Не очищать</option>
                                            </select>
                                        </span>
                                    </p>
                                    <p v-if="group.prefetch !== undefined" class="control control-queue">
                                        <button
                                                @click="setActiveWrap('prefetchWrap' + groupKey + index)"
                                                :disabled="group.status === 'off'"
                                                type="button" class="button is-small">
                                            <span class="icon">
                                                <i class="icon-attach"></i>
                                            </span>
                                        </button>
                                        <span :class="getActiveWrap('prefetchWrap' + groupKey + index) ? 'prefetch-active' : 'is-hidden'">
                                            <div class="field">
                                                <button type="button" class="button is-small" @click="setActiveWrap('')">x</button>
                                                <label class="label is-small">prefetch: function(target) {</label>
                                                <div class="control">
                                                    <textarea
                                                            class="textarea is-small js_codemirror" placeholder="Объект настроек"
                                                            v-model=group.prefetch
                                                    ></textarea>
                                                </div>
                                                <label class="label is-small">}</label>
                                            </div>
                                        </span>
                                    </p>
                                </div>
                                <div v-if="group.newElement !== undefined" class="field has-addons wrap-control-queue">

                                    <div class="buttons has-addons is-centered are-small wrap-button-group">
                                        <button
                                                @click="setActiveWrap('reload' + groupKey + index)"
                                                :disabled="group.status === 'off'"
                                                type="button" class="button">
                                            reload
                                        </button>
                                        <button
                                                @click="setActiveWrap('onSelected' + groupKey + index)"
                                                :disabled="group.status === 'off'"
                                                type="button" class="button">
                                            onSelected
                                        </button>
                                        <button
                                                @click="setActiveWrap('newElement' + groupKey + index)"
                                                :disabled="group.status === 'off'"
                                                type="button" class="button">
                                            newElement
                                        </button>
                                    </div>
                                    <span :class="getActiveWrap('reload' + groupKey + index) ? 'prefetch-active' : 'is-hidden'">
                                        <div class="field">
                                            <button type="button" class="button is-small" @click="setActiveWrap('')">x</button>
                                            <label class="label is-small">reload: function(store, helper) {</label>
                                            <div class="control">
                                                    <textarea
                                                            class="textarea is-small js_codemirror" placeholder="Объект настроек"
                                                            v-model=group.reload
                                                    ></textarea>
                                            </div>
                                            <label class="label is-small">}</label>
                                        </div>
                                    </span>
                                    <span :class="getActiveWrap('onSelected' + groupKey + index) ? 'prefetch-active' : 'is-hidden'">
                                        <div class="field">
                                            <button type="button" class="button is-small" @click="setActiveWrap('')">x</button>
                                            <label class="label is-small">onSelected: function(suggest, helper) {</label>
                                            <div class="control">
                                                    <textarea
                                                            class="textarea is-small js_codemirror" placeholder="Объект настроек"
                                                            v-model=group.onSelected
                                                    ></textarea>
                                            </div>
                                            <label class="label is-small">}</label>
                                        </div>
                                    </span>
                                    <span :class="getActiveWrap('newElement' + groupKey + index) ? 'prefetch-active' : 'is-hidden'">
                                        <div class="field">
                                            <button type="button" class="button is-small" @click="setActiveWrap('')">x</button>
                                            <label class="label is-small">newElement: helper.create(</label>
                                            <div class="control">
                                                    <textarea
                                                            class="textarea is-small js_codemirror" placeholder="Объект настроек"
                                                            v-model=group.newElement
                                                    ></textarea>
                                            </div>
                                            <label class="label is-small">)</label>
                                        </div>
                                    </span>
                                </div>
                            </td>
                            <td class="is-size-7 td_label">
                                <label :for="groupKey + index">{{group.label}}</label>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    <br>
                </div>
            </div>
            <div v-else class="column is-7">
                <article class="message" style="margin-bottom: .75rem;">
                    <div class="message-body is-size-7">
                        Настройки JavaScript
                    </div>
                </article>
                <div v-if="!isStatus('off')" class="custom_page_codemirror">
                    <Codemirror :value="tabPage.javascript" :options="codemirrorJavascript" @input="onCmCodeChangeJavascript"></Codemirror>
                </div>
            </div>
            <div v-if="tabPage.data" class="column is-6">
                <label class="label">{{tabPage.text_status}}</label>
                <div class="switch-field">
                    <input
                            type="radio"
                            :id="'page_status_default' + this._uid"
                            :name="'route_status' + this._uid"
                            v-model=status value="default"
                            :checked="isStatus('default')"/>
                    <label :for="'page_status_default' + this._uid">Default</label> <input
                        type="radio"
                        :id="'page_status_javascript' + this._uid"
                        :name="'route_status' + this._uid"
                        v-model=status value="javascript"
                        :checked="isStatus('javascript')"/>
                    <label :for="'page_status_javascript' + this._uid">JavaScript</label> <input
                        type="radio"
                        :id="'page_status_off' + this._uid"
                        :name="'route_status' + this._uid"
                        v-model=status value="off"
                        :checked="isStatus('off')"/> <label :for="'page_status_off' + this._uid">Off</label>
                </div>
                <article class="message" style="margin-bottom: .75rem;">
                    <div class="message-body is-size-7">
                        Вызов/Инициализация, только скопировать
                    </div>
                </article>
                <div class="codemirror-readonly">
                    <Codemirror :value="initName(routePath)" :options="codemirrorJavascriptReadonly"></Codemirror>
                </div>
                <br>
                <article class="message" style="margin-bottom: .75rem;">
                    <div class="message-body is-size-7">
                        Настройки JavaScript
                    </div>
                </article>
                <div v-if="isStatus('javascript')">
                    <Codemirror :value="tabPage.javascript" :options="codemirrorJavascript" @input="onCmCodeChangeJavascript"></Codemirror>
                </div>
                <br>
                <article class="message" style="margin-bottom: .75rem;">
                    <div class="message-body is-size-7">
                        Настройки Css
                    </div>
                </article>
                <div v-if="!isStatus('off')">
                    <Codemirror :value="tabPage.css" :options="codemirrorCss" @input="onCmCodeChangeCss"></Codemirror>
                </div>
            </div>
            <div v-else class="column is-5">
                <label class="label">Статус страницы</label>
                <div class="columns is-variable">
                    <div class="column">
                        <div class="switch-field">
                            <input
                                    type="radio"
                                    :id="'page_status_javascript' + this._uid"
                                    :name="'route_status' + this._uid"
                                    v-model=status value="javascript"
                                    :checked="isStatus('javascript')"/>
                            <label :for="'page_status_javascript' + this._uid">JavaScript</label> <input
                                type="radio"
                                :id="'page_status_off' + this._uid"
                                :name="'route_status' + this._uid"
                                v-model=status value="off"
                                :checked="isStatus('off')"/> <label :for="'page_status_off' + this._uid">Off</label>
                        </div>
                    </div>
                    <div class="column is-narrow">
                        <button type="button" class="button is-danger is-small" @click.prevent="removeThis">Удалить настройку</button>
                    </div>
                </div>

                <article class="message" style="margin-bottom: .75rem;">
                    <div class="message-body is-size-7">
                        Вызов/Инициализация, только скопировать
                    </div>
                </article>
                <div class="codemirror-readonly">
                    <Codemirror :value="initName(routePath)" :options="codemirrorJavascriptReadonly"></Codemirror>
                </div>
                <br>
                <article class="message" style="margin-bottom: .75rem;">
                    <div class="message-body is-size-7">
                        Настройки Css
                    </div>
                </article>
                <div v-if="!isStatus('off')">
                    <Codemirror :value="tabPage.css" :options="codemirrorCss" @input="onCmCodeChangeCss"></Codemirror>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import Codemirror from './Codemirror';

  const axios = require('axios').default;

  export default {
    name: 'TabPage',
    components: {Codemirror},
    props: {
      routePath: String,
      tabPage: Object
    },
    data() {
      return {
        activeWrap: '',
        statusMessage: '',
        message: '',
        codemirrorJavascriptReadonly: {
          readOnly: true,
          tabSize: 2,
          styleActiveLine: true,
          lineNumbers: true,
          lineWrapping: true,
          line: true,
          foldGutter: true,
          styleSelectedText: true,
          mode: "text/javascript",
          keyMap: "sublime",
          matchBrackets: true,
          showCursorWhenSelecting: true,
          theme: "monokai"
        },
        codemirrorJavascript: {
          tabSize: 2,
          styleActiveLine: true,
          lineNumbers: true,
          lineWrapping: true,
          line: true,
          foldGutter: true,
          styleSelectedText: true,
          mode: "text/javascript",
          keyMap: "sublime",
          matchBrackets: true,
          showCursorWhenSelecting: true,
          theme: "monokai",
          extraKeys: {Ctrl: "autocomplete"},
          hintOptions: {
            completeSingle: false
          }
        },
        codemirrorCss: {
          tabSize: 2,
          styleActiveLine: true,
          lineNumbers: true,
          lineWrapping: true,
          line: true,
          foldGutter: true,
          styleSelectedText: true,
          mode: "text/css",
          keyMap: "sublime",
          matchBrackets: true,
          showCursorWhenSelecting: true,
          theme: "monokai",
          extraKeys: {Ctrl: "autocomplete"},
          hintOptions: {
            completeSingle: false
          }
        },
        isCodemirrorJs: false,
        isCodemirrorCss: false
      };
    },
    methods: {
      removeThis() {
        this.$emit('remove', this.routePath);
      },
      initName(route) {
        let res = route.split('/');
        let funcName = 'dadata' + res.map(n => n[0].toUpperCase() + n.slice(1)).join('');
        return `if('${funcName}' in window) {\n    ${funcName}();\n}`;
      },
      isStatus(name) {
        return this.status === name;
      },
      setActiveWrap(name) {
        this.activeWrap = name;
      },
      getActiveWrap(name) {
        return this.activeWrap === name ? true : false;
      },
      onCmCodeChangeJavascript(newValue) {
        this.tabPage.javascript = newValue;
      },
      onCmCodeChangeCss(newValue) {
        this.tabPage.css = newValue;
      },
      getMessage() {
        if(this.status !== 'off' && this.statusMessage === '') {
          this.message = `<a class="loader"></a>`;
          axios.get(this.$root.settings.link_message + `&route_name=${this.routePath}&timestamp=${new Date().getTime()}`).then(response => {
            setTimeout(() => {
              if(response.data) {
                if(response.data.danger) {
                  this.statusMessage = 'is-danger';
                  this.message = response.data.danger;
                } else if(response.data.success) {
                  this.statusMessage = 'is-success';
                  this.message = response.data.success;
                } else {
                  this.statusMessage = '';
                  this.message = '';
                }
              }
            }, 1000);
          }).catch(error => {
            console.log(error);
          });
        } else if(this.status === 'off') {
          this.statusMessage = '';
          this.message = '';
        }
      }
    },
    computed: {
      status: {
        get() {
          return this.tabPage.status;
        },
        set(val) {
          this.tabPage.status = val;
          this.getMessage();
        }
      }
    },
    mounted: function() {
      this.$nextTick(function() {
        this.getMessage();
      });
    }
  };
</script>
