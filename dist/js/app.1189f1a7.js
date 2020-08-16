(function(t){function e(e){for(var a,n,r=e[0],l=e[1],c=e[2],d=0,p=[];d<r.length;d++)n=r[d],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&p.push(i[n][0]),i[n]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);u&&u(e);while(p.length)p.shift()();return o.push.apply(o,c||[]),s()}function s(){for(var t,e=0;e<o.length;e++){for(var s=o[e],a=!0,r=1;r<s.length;r++){var l=s[r];0!==i[l]&&(a=!1)}a&&(o.splice(e--,1),t=n(n.s=s[0]))}return t}var a={},i={app:0},o=[];function n(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=t,n.c=a,n.d=function(t,e,s){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(s,a,function(e){return t[e]}.bind(null,a));return s},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var u=l;o.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"0433":function(t,e,s){},"323c":function(t,e,s){"use strict";var a=s("0433"),i=s.n(a);i.a},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("cca6"),s("a79d");var a=s("2b0e"),i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("nav",{staticClass:"navbar",attrs:{role:"navigation","aria-label":"main navigation"}},[s("div",{staticClass:"navbar-brand"},[s("a",{staticClass:"navbar-item"},[t.store?s("h1",[t._v(t._s(t.store.header_title))]):s("h1",[t._v(t._s(t.load_text))])])]),s("div",{staticClass:"navbar-menu"},[s("div",{staticClass:"navbar-end"},[s("div",{staticClass:"navbar-item"},[t.store?s("div",{staticClass:"buttons"},[s("button",{staticClass:"button is-primary",attrs:{type:"button"},on:{click:t.saveSettings}},[t._v(t._s(t.store.button_save_text))]),s("a",{staticClass:"button is-light",attrs:{href:t.store.back_page_modules}},[t._v(t._s(t.store.back_page_modules_text))])]):s("div",[t._v(t._s(t.load_text))])])])])]),t.store?s("div",{staticClass:"container is-fluid"},[s("br"),s("nav",{staticClass:"breadcrumb",attrs:{"aria-label":"breadcrumbs"}},[s("ul",t._l(t.store.breadcrumbs,(function(e,a){return s("li",{key:a},[s("a",{attrs:{href:e.href}},[t._v(t._s(e.title))])])})),0)]),s("div",{staticClass:"columns"},[s("div",{staticClass:"column is-two-thirds"},[s("div",{staticClass:"box"},[s("div",{staticClass:"tabs"},[s("ul",t._l(t.store.tabsLink,(function(e,a){return s("li",{key:a,class:t.isTabActive(a)},[s("a",{on:{click:function(e){return e.preventDefault(),t.setTabActive(a)}}},[t._v(t._s(e))])])})),0)]),t._l(t.store.tabsData,(function(e,a){return s("div",{key:a},[s("TabPage",{class:t.isTabActive(a)?t.isTabActive(a):"is-hidden",attrs:{routeName:a,tabPage:e,isTabActive:!!t.isTabActive(a)}})],1)}))],2)]),s("div",{staticClass:"column"},[s("div",{staticClass:"box"},[s("div",{staticClass:"field"},[s("label",{staticClass:"label"},[t._v(t._s(t.store.apikey_text))]),s("div",{staticClass:"control"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.store.apikey,expression:"store.apikey"}],staticClass:"input",attrs:{type:"text",name:"dadatapro_api_key",placeholder:t.store.apikey_text},domProps:{value:t.store.apikey},on:{input:function(e){e.target.composing||t.$set(t.store,"apikey",e.target.value)}}})])]),s("div",{staticClass:"notification is-warning is-light",domProps:{innerHTML:t._s(t.store.apikey_notification_text)}}),s("label",{staticClass:"label"},[t._v(t._s(t.store.status_text))]),s("div",{staticClass:"switch-field"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.store.status,expression:"store.status"}],attrs:{type:"radio",id:"module-on",name:"dadatapro_status",value:"1"},domProps:{checked:t.store.status,checked:t._q(t.store.status,"1")},on:{change:function(e){return t.$set(t.store,"status","1")}}}),s("label",{attrs:{for:"module-on"}},[t._v("Вкл")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.store.status,expression:"store.status"}],attrs:{type:"radio",id:"module-off",name:"dadatapro_status",value:"0"},domProps:{checked:!t.store.status,checked:t._q(t.store.status,"0")},on:{change:function(e){return t.$set(t.store,"status","0")}}}),s("label",{attrs:{for:"module-off"}},[t._v("Выкл")])])]),t._m(0),s("div",{staticClass:"box"},[s("p",{staticClass:"is-size-7",domProps:{innerHTML:t._s(t.store.cooperate)}})])])])]):s("div",{staticClass:"container"},[s("br"),s("div",{staticClass:"box"},[s("h1",[t._v(t._s(t.load_data_text))])])])])},o=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"box"},[s("div",{staticClass:"notification is-warning is-light"},[t._v("Посмотреть ключи для группы Ф.И.О: "),s("a",{attrs:{href:"https://dadata.ru/suggestions/usage/name/#response",target:"_blank"}},[t._v("Подсказки: ФИО")])]),s("div",{staticClass:"notification is-warning is-light"},[t._v("Посмотреть ключи для группы Email: "),s("a",{attrs:{href:"https://dadata.ru/suggestions/usage/email/#response",target:"_blank"}},[t._v("Подсказки: email")])]),s("div",{staticClass:"notification is-warning is-light"},[t._v("Посмотреть ключи для группы адресс: "),s("a",{attrs:{href:"https://dadata.ru/suggestions/usage/address/#response",target:"_blank"}},[t._v("Подсказки: адреса")])]),s("div",{staticClass:"notification is-warning is-light"},[t._v("Посмотреть ключи для группы организации: "),s("a",{attrs:{href:"https://dadata.ru/suggestions/usage/party/#response",target:"_blank"}},[t._v("Подсказки: организации ")])]),s("div",{staticClass:"notification is-warning is-light"},[t._v("Посмотреть ключи для группы адресс: "),s("a",{attrs:{href:"https://dadata.ru/suggestions/usage/address/#response",target:"_blank"}},[t._v("Подсказки: адреса")])])])}],n=(s("99af"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t.message?s("article",{staticClass:"message is-danger"},[s("div",{staticClass:"message-body",domProps:{innerHTML:t._s(t.message)}})]):t._e(),s("div",{staticClass:"columns"},[s("div",{staticClass:"column"},t._l(t.tabPage.data,(function(e,a){return s("div",{key:a},[s("article",{staticClass:"message",staticStyle:{"margin-bottom":".75rem"}},[s("div",{staticClass:"message-body is-size-7"},[t._v(" Группа настроек "+t._s(a.toUpperCase())+" ")])]),s("table",{staticClass:"table is-fullwidth",class:{"is-hidden":"default"!==t.tabPage.status}},[t._m(0,!0),s("tbody",t._l(e,(function(e,i){return s("tr",{key:a+i},[s("td",[s("div",{staticClass:"field has-addons wrap-control-queue"},[s("p",{staticClass:"control"},[s("label",{staticClass:"button is-small custom-checkbox"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.status,expression:"group.status"}],staticClass:"is-hidden",attrs:{type:"checkbox","true-value":"on","false-value":"off"},domProps:{checked:Array.isArray(e.status)?t._i(e.status,null)>-1:t._q(e.status,"on")},on:{change:function(s){var a=e.status,i=s.target,o=i.checked?"on":"off";if(Array.isArray(a)){var n=null,r=t._i(a,n);i.checked?r<0&&t.$set(e,"status",a.concat([n])):r>-1&&t.$set(e,"status",a.slice(0,r).concat(a.slice(r+1)))}else t.$set(e,"status",o)}}}),s("span")])]),s("div",{staticClass:"control control-fullwidth"},[void 0===e.newElement?s("input",{directives:[{name:"model",rawName:"v-model",value:e.helper_keys,expression:"group.helper_keys"}],staticClass:"input is-small",attrs:{type:"text",placeholder:"Ключ или группа ключей",id:a+i,disabled:"off"===e.status},domProps:{value:e.helper_keys},on:{input:function(s){s.target.composing||t.$set(e,"helper_keys",s.target.value)}}}):s("input",{directives:[{name:"model",rawName:"v-model",value:e.awaiting,expression:"group.awaiting"}],staticClass:"input is-small",attrs:{type:"text",placeholder:"Селектор, перед которым произойдет вставка эелемнта",id:a+i,disabled:"off"===e.status},domProps:{value:e.awaiting},on:{input:function(s){s.target.composing||t.$set(e,"awaiting",s.target.value)}}})]),void 0!==e.prefetch?s("p",{staticClass:"control control-queue"},[s("button",{staticClass:"button is-small",attrs:{disabled:"off"===e.status,type:"button"},on:{click:function(e){return t.setActiveWrap("prefetchWrap"+a+i)}}},[t._m(1,!0)]),s("span",{class:t.getActiveWrap("prefetchWrap"+a+i)?"prefetch-active":"is-hidden"},[s("div",{staticClass:"field"},[s("button",{staticClass:"button is-small",attrs:{type:"button"},on:{click:function(e){return t.setActiveWrap("")}}},[t._v("x")]),s("label",{staticClass:"label is-small"},[t._v("prefetch: function(target) {")]),s("div",{staticClass:"control"},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:e.prefetch,expression:"group.prefetch"}],staticClass:"textarea is-small js_codemirror",attrs:{placeholder:"Объект настроек"},domProps:{value:e.prefetch},on:{input:function(s){s.target.composing||t.$set(e,"prefetch",s.target.value)}}})]),s("label",{staticClass:"label is-small"},[t._v("}")])])])]):t._e()]),void 0!==e.newElement?s("div",{staticClass:"field has-addons wrap-control-queue"},[s("div",{staticClass:"buttons has-addons is-centered are-small wrap-button-group"},[s("button",{staticClass:"button",attrs:{disabled:"off"===e.status,type:"button"},on:{click:function(e){return t.setActiveWrap("reload"+a+i)}}},[t._v(" reload ")]),s("button",{staticClass:"button",attrs:{disabled:"off"===e.status,type:"button"},on:{click:function(e){return t.setActiveWrap("onSelected"+a+i)}}},[t._v(" onSelected ")]),s("button",{staticClass:"button",attrs:{disabled:"off"===e.status,type:"button"},on:{click:function(e){return t.setActiveWrap("newElement"+a+i)}}},[t._v(" newElement ")])]),s("span",{class:t.getActiveWrap("reload"+a+i)?"prefetch-active":"is-hidden"},[s("div",{staticClass:"field"},[s("button",{staticClass:"button is-small",attrs:{type:"button"},on:{click:function(e){return t.setActiveWrap("")}}},[t._v("x")]),s("label",{staticClass:"label is-small"},[t._v("reload: function(store, helper) {")]),s("div",{staticClass:"control"},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:e.reload,expression:"group.reload"}],staticClass:"textarea is-small js_codemirror",attrs:{placeholder:"Объект настроек"},domProps:{value:e.reload},on:{input:function(s){s.target.composing||t.$set(e,"reload",s.target.value)}}})]),s("label",{staticClass:"label is-small"},[t._v("}")])])]),s("span",{class:t.getActiveWrap("onSelected"+a+i)?"prefetch-active":"is-hidden"},[s("div",{staticClass:"field"},[s("button",{staticClass:"button is-small",attrs:{type:"button"},on:{click:function(e){return t.setActiveWrap("")}}},[t._v("x")]),s("label",{staticClass:"label is-small"},[t._v("onSelected: function(suggest, helper) {")]),s("div",{staticClass:"control"},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:e.onSelected,expression:"group.onSelected"}],staticClass:"textarea is-small js_codemirror",attrs:{placeholder:"Объект настроек"},domProps:{value:e.onSelected},on:{input:function(s){s.target.composing||t.$set(e,"onSelected",s.target.value)}}})]),s("label",{staticClass:"label is-small"},[t._v("}")])])]),s("span",{class:t.getActiveWrap("newElement"+a+i)?"prefetch-active":"is-hidden"},[s("div",{staticClass:"field"},[s("button",{staticClass:"button is-small",attrs:{type:"button"},on:{click:function(e){return t.setActiveWrap("")}}},[t._v("x")]),s("label",{staticClass:"label is-small"},[t._v("newElement: helper.create(")]),s("div",{staticClass:"control"},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:e.newElement,expression:"group.newElement"}],staticClass:"textarea is-small js_codemirror",attrs:{placeholder:"Объект настроек"},domProps:{value:e.newElement},on:{input:function(s){s.target.composing||t.$set(e,"newElement",s.target.value)}}})]),s("label",{staticClass:"label is-small"},[t._v(")")])])])]):t._e()]),s("td",{staticClass:"is-size-7 td_label"},[s("label",{attrs:{for:a+i}},[t._v(t._s(e.label))])])])})),0)]),s("br")])})),0),s("div",{staticClass:"column"},[s("label",{staticClass:"label"},[t._v(t._s(t.tabPage.status_text))]),s("div",{staticClass:"switch-field"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.status,expression:"status"}],attrs:{type:"radio",id:"page_status_default"+this._uid,name:"route_status"+this._uid,value:"default"},domProps:{checked:t.isStatus("default"),checked:t._q(t.status,"default")},on:{change:function(e){t.status="default"}}}),s("label",{attrs:{for:"page_status_default"+this._uid}},[t._v("Default")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.status,expression:"status"}],attrs:{type:"radio",id:"page_status_javascript"+this._uid,name:"route_status"+this._uid,value:"javascript"},domProps:{checked:t.isStatus("javascript"),checked:t._q(t.status,"javascript")},on:{change:function(e){t.status="javascript"}}}),s("label",{attrs:{for:"page_status_javascript"+this._uid}},[t._v("JavaScript")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.status,expression:"status"}],attrs:{type:"radio",id:"page_status_off"+this._uid,name:"route_status"+this._uid,value:"off"},domProps:{checked:t.isStatus("off"),checked:t._q(t.status,"off")},on:{change:function(e){t.status="off"}}}),t._v(" "),s("label",{attrs:{for:"page_status_off"+this._uid}},[t._v("Off")])]),t._m(2),s("div",{staticClass:"codemirror-readonly"},[s("Codemirror",{attrs:{value:t.initName(t.routeName),options:t.codemirrorJavascriptReadonly}})],1),s("br"),t._m(3),s("div",{class:{"is-hidden":!t.isStatus("javascript")}},[s("Codemirror",{attrs:{value:t.tabPage.javascript,options:t.codemirrorJavascript},on:{input:t.onCmCodeChangeJavascript}})],1),s("br"),t._m(4),s("div",{class:{"is-hidden":t.isStatus("off")}},[s("Codemirror",{attrs:{value:t.tabPage.css,options:t.codemirrorCss},on:{input:t.onCmCodeChangeCss}})],1)])])])}),r=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("thead",[s("tr",[s("th",{staticClass:"is-size-7"},[t._v("Возвращаемые ключи")]),s("th",{staticClass:"is-size-7 td_label"},[t._v("Записать в поле")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"icon"},[s("i",{staticClass:"icon-attach"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("article",{staticClass:"message",staticStyle:{"margin-bottom":".75rem"}},[s("div",{staticClass:"message-body is-size-7"},[t._v(" Вызов/Инициализация, только скопировать ")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("article",{staticClass:"message",staticStyle:{"margin-bottom":".75rem"}},[s("div",{staticClass:"message-body is-size-7"},[t._v(" Настройки JavaScript ")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("article",{staticClass:"message",staticStyle:{"margin-bottom":".75rem"}},[s("div",{staticClass:"message-body is-size-7"},[t._v(" Настройки Css ")])])}],l=(s("a15b"),s("d81d"),s("fb6a"),s("ac1f"),s("1276"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("textarea",{ref:"myCm"})}),c=[],u=s("56b3"),d=s.n(u),p=(s("f9d4"),s("7b00"),s("a7be"),s("7a7a"),s("31c5"),s("9948"),s("b933"),s("9b74"),s("f6b6"),s("3c98"),s("9c7b"),s("715d"),s("23de"),s("4ba6"),s("8c33"),s("7289"),s("2aed"),s("d72f"),s("0b6c"),s("9a48"),s("697e"),s("aedd"),s("164b"),s("4895"),s("cbc8"),s("8d70"),s("9f09"),s("a2c1"),{name:"Codemirror",props:{hidden:Boolean,value:String,options:Object},data:function(){return{myCodemirror:void 0}},mounted:function(){var t=this;this.myCodemirror=new d.a.fromTextArea(this.$refs.myCm,this.options),this.myCodemirror.setValue(this.value),this.myCodemirror.on("change",(function(e){t.$emit&&t.$emit("input",e.getValue())})),this.myCodemirror.on("focus",(function(t){t.refresh()}))}}),m=p,v=s("2877"),f=Object(v["a"])(m,l,c,!1,null,null,null),b=f.exports,h=s("bc3a").default,g={name:"TabPage",components:{Codemirror:b},props:{routeName:String,tabPage:Object},data:function(){return{activeWrap:"",message:"",blockMessage:!1,codemirrorJavascriptReadonly:{readOnly:!0,tabSize:2,styleActiveLine:!0,lineNumbers:!0,lineWrapping:!0,line:!0,foldGutter:!0,styleSelectedText:!0,mode:"text/javascript",keyMap:"sublime",matchBrackets:!0,showCursorWhenSelecting:!0,theme:"monokai"},codemirrorJavascript:{tabSize:2,styleActiveLine:!0,lineNumbers:!0,lineWrapping:!0,line:!0,foldGutter:!0,styleSelectedText:!0,mode:"text/javascript",keyMap:"sublime",matchBrackets:!0,showCursorWhenSelecting:!0,theme:"monokai",extraKeys:{Ctrl:"autocomplete"},hintOptions:{completeSingle:!1}},codemirrorCss:{tabSize:2,styleActiveLine:!0,lineNumbers:!0,lineWrapping:!0,line:!0,foldGutter:!0,styleSelectedText:!0,mode:"text/css",keyMap:"sublime",matchBrackets:!0,showCursorWhenSelecting:!0,theme:"monokai",extraKeys:{Ctrl:"autocomplete"},hintOptions:{completeSingle:!1}},isCodemirrorJs:!1,isCodemirrorCss:!1}},methods:{initName:function(t){var e=t.split("/"),s="dadata"+e.map((function(t){return t[0].toUpperCase()+t.slice(1)})).join("");return"if('".concat(s,"' in window) {\n    ").concat(s,"();\n}")},isStatus:function(t){return this.status===t},setActiveWrap:function(t){this.activeWrap=t},getActiveWrap:function(t){return this.activeWrap===t},onCmCodeChangeJavascript:function(t){this.tabPage.javascript=t},onCmCodeChangeCss:function(t){this.tabPage.css=t},changeMessage:function(t){var e=this;"off"!==t?""===this.message&&!1===this.blockMessage&&(this.blockMessage=!0,h.get(this.$root.settings.link_message+"&token=".concat(this.$root.settings.token,"&route_name=").concat(this.routeName,"&timestamp=").concat((new Date).getTime())).then((function(t){t.data&&t.data.layout_id&&(e.message=t.data.layout_id)})).catch((function(t){console.log(t)}))):(this.blockMessage=!1,this.message="")}},computed:{status:{get:function(){return this.changeMessage(this.tabPage.status),this.tabPage.status},set:function(t){this.changeMessage(t),this.tabPage.status=t}}}},_=g,C=(s("323c"),Object(v["a"])(_,n,r,!1,null,"6df86fb9",null)),y=C.exports,k=s("bc3a").default,w={name:"App",components:{TabPage:y},data:function(){return{store:null,load_text:"Loading...",load_data_text:"Loading data..."}},methods:{isTabActive:function(t){return this.store.activeItem===t?"is-active":""},setTabActive:function(t){this.store.activeItem=t},saveSettings:function(){k({url:this.$root.settings.link_save+"&token=".concat(this.$root.settings.token,"&timestamp=").concat((new Date).getTime()),method:"post",headers:{"Content-Type":"application/x-www-form-urlencoded","X-Requested-With":"XMLHttpRequest"},data:"store="+JSON.stringify(this.store)}).then((function(t){console.log(t)})).catch((function(t){console.log(t)}))}},mounted:function(){var t=this;k.get(this.$root.settings.link_settings+"&token=".concat(this.$root.settings.token,"&timestamp=").concat((new Date).getTime())).then((function(e){console.log(e),t.store=e.data,console.log(t.store)})).catch((function(t){console.log(t)}))}},x=w,S=Object(v["a"])(x,i,o,!1,null,null,null),P=S.exports;a["a"].prototype.codeMirrorInit=window.codeMirrorInit,a["a"].config.productionTip=!1,new a["a"]({data:{settings:window.module_settings},render:function(t){return t(P)},create:function(){}}).$mount("#app")}});
//# sourceMappingURL=app.1189f1a7.js.map