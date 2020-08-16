<template>
    <div id="app">
        <nav class="navbar" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
                <a class="navbar-item">
                    <h1 v-if="store">{{store.header_title}}</h1>
                    <h1 v-else><a class="loader"></a> {{text_load}}</h1>
                </a>
            </div>
            <div class="navbar-menu">
                <div class="navbar-end">
                    <div class="navbar-item">
                        <div v-if="store" class="buttons">
                            <button @click="saveSettings" type="button" class="button is-primary">{{store.text_button_save}}</button>
                            <a :href="store.back_page_modules" class="button is-light"> {{store.text_back_page_modules}} </a>
                        </div>
                        <div v-else><a class="loader"></a> {{text_load}}</div>
                    </div>
                </div>
            </div>
        </nav>

        <div v-if="store" class="container is-fluid">
            <br>
            <nav class="breadcrumb" aria-label="breadcrumbs">
                <ul>
                    <li v-for="(breadcrumb, index) in store.breadcrumbs" :key="index">
                        <a :href="breadcrumb.href">{{breadcrumb.title}}</a>
                    </li>
                </ul>
            </nav>
            <div class="columns is-variable is-1">
                <div class="column is-2">
                    <div class="box">
                        <div class="tabs is-small">
                            <ul class="main_tabs">
                                <li v-for="(tab, routePath) in store.tabsLink" :key="routePath" :class="isTabActive(routePath)">
                                    <a @click.prevent="setTabActive(routePath)" :class="{'link_route_off': isRouteStatus(routePath) === 'off'}"> {{tab}} </a>
                                </li>
                                <li>
                                    <br>
                                    <div class="field has-addons">
                                        <div class="control is-expanded">
                                            <input class="input is-small" v-model="newRoute" type="text" placeholder="Добавить route">
                                        </div>
                                        <div class="control">
                                            <button type="button" class="button is-primary is-small" @click.prevent="addPageSetting">Добавить</button>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="column is-7">
                    <div class="wrap_button_info">
                        <button @click.prevent="reserActive" type="button" class="button is-info is-small">[Инфо]</button>
                    </div>
                    <div v-if="activeRoute" class="box">
                        <div v-for="(tab, routePath) in store.tabsData" :key="routePath">
                            <TabPage
                                    v-if="isTabActive(routePath)"
                                    v-bind:routePath="routePath"
                                    v-bind:tabPage="tab"
                                    v-on:remove="removePage"
                            />

                        </div>
                    </div>
                    <div v-else class="box">
                        <ExampleCode></ExampleCode>
                    </div>
                </div>
                <div class="column is-3">
                    <div class="box">
                        <div class="field">
                            <label class="label">{{store.text_apikey}}</label>
                            <div class="control">
                                <input class="input" type="text" name="dadatapro_api_key" :placeholder="store.text_apikey" v-model=store.apikey>
                            </div>
                        </div>

                        <div class="notification is-warning is-light" v-html="store.text_apikey_notification"></div>

                        <label class="label">{{store.text_status}}</label>

                        <div class="switch-field">
                            <input
                                    type="radio" id="module-on" name="dadatapro_status"
                                    v-model=store.status value="1" :checked="store.status"/>
                            <label for="module-on">Вкл</label> <input
                                type="radio" id="module-off" name="dadatapro_status"
                                v-model=store.status value="0" :checked="!store.status"/>
                            <label for="module-off">Выкл</label>
                        </div>
                    </div>

                    <div class="box">
                        <div class="notification is-warning is-light" v-for="(name, index) in store.link_to_dadata" :key="index">
                            Посмотреть ключи для группы
                            <a :href="`https://dadata.ru/suggestions/usage/${name}/#response`" target="_blank">{{name}}</a>
                        </div>
                    </div>

                    <div class="box">
                        <div class="buttons are-small">
                            <button class="button is-danger is-rounded is-fullwidth" @click="resetConfig">Сбросить все настройки</button>
                        </div>
                        <p class="is-size-7" v-html="store.cooperate"></p>
                    </div>
                </div>
            </div>
        </div>
        <div v-else class="container">
            <br>
            <div class="box">
                <h1><a class="loader"></a> {{text_load_data}}</h1>
            </div>
        </div>
    </div>
</template>

<script>
  import TabPage     from './components/TabPage.vue';
  import ExampleCode from './components/ExampleCode';

  const axios = require('axios').default;
  //import requestData from './../config/request.js';

  export default {
    name: 'App',
    components: {
      TabPage,
      ExampleCode
    },
    data: () => {
      return {
        store: null,
        newRoute: '',
        activeRoute: '',
        exampleCode: true,
        text_load: 'Loading...',
        text_load_data: 'Loading data...'
      };
    },
    methods: {
      exampleCodeToggle() {
        this.exampleCode = !this.exampleCode;
      },
      reserActive() {
        this.activeRoute = '';
        this.setTabActive('reset');
      },
      removePage(route) {
        this.activeRoute = '';
        this.$delete(this.store.tabsData, route);
        this.$delete(this.store.tabsLink, route);
      },
      addPageSetting() {
        if(this.newRoute === '') {
          alert('Нужно вписать route для страницы настроек!');
        } else if(Object.keys(this.store.tabsLink).filter(route => route === this.newRoute).length > 0) {
          alert('Такой route уже существует!');
        } else {
          this.$set(this.store.tabsLink, this.newRoute, this.newRoute);
          this.$set(this.store.tabsData, this.newRoute, {
            javascript: '',
            css: '',
            status: 'off',
            tab_active: true
          });
          this.setTabActive(this.newRoute);
          this.newRoute = '';
        }
      },
      isRouteStatus(route) {
        return this.store.tabsData[route].status === 'off' ? 'off' : 'on';
      },
      isTabActive(route) {
        if(this.store.tabsData[route]['tab_active']) {
          this.activeRoute = route;
          return 'is-active';
        }
        return '';
        //return (this.store.tabsData[route]['tab_active'] ? 'is-active' : '');
      },
      setTabActive(route) {
        for(let key in this.store.tabsData) {
          if(key === route) {
            this.$set(this.store.tabsData[key], 'tab_active', true);
          } else {
            this.$set(this.store.tabsData[key], 'tab_active', false);
          }
        }
      },
      saveSettings() {
        let store = {
          'tabsData': this.store.tabsData,
          'status': this.store.status,
          'apikey': this.store.apikey
        };
        axios({
          url: this.$root.settings.link_save + `&timestamp=${new Date().getTime()}`,
          method: 'post',
          headers: {
            'X-Requested-With': 'XMLHttpRequest',
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=UTF-8'
          },
          data: store
        }).then(response => {
          if(response.data.ok) {
            alert(response.data.ok);
          }
        }).catch(error => {
          console.log(error);
        });
      },
      resetConfig() {
        let reset = confirm('Сбросить текущие настройки, к настройкам по умолчанию?');
        if(reset) {
          this.store = null;
          axios.get(this.$root.settings.link_reset + `&timestamp=${new Date().getTime()}`).then(response => {
            setTimeout(() => {
              if(response.data) {
                this.store = response.data;
              }
            }, 1000);
          }).catch(error => {
            console.log(error);
          });
        }
      }
    },
    mounted() {
      //this.store = requestData;
      // console.log(this.store);
      axios.get(this.$root.settings.link_settings + `&timestamp=${new Date().getTime()}`).then(response => {
        //console.log(response);
        setTimeout(() => this.store = response.data, 1000);
      }).catch(error => {
        console.log(error);
      });
    }
  };
</script>
