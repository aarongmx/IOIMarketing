webpackJsonp([15],{JvOM:function(r,t,s){"use strict";var o=function(){var r=this,t=r.$createElement,s=r._self._c||t;return s("div",{staticClass:"row"},[r._m(0),s("div",{staticClass:"col-12"},[s("form",{attrs:{method:"post"},on:{submit:function(t){return t.preventDefault(),r.handleForm(t)}}},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"password"}},[r._v("Contraseña")]),s("input",{directives:[{name:"model",rawName:"v-model",value:r.form.password,expression:"form.password"}],staticClass:"form-control",attrs:{type:"password",name:"password",id:"password"},domProps:{value:r.form.password},on:{input:function(t){t.target.composing||r.$set(r.form,"password",t.target.value)}}})]),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"confirm-password"}},[r._v("Confirmar Contraseña")]),s("input",{directives:[{name:"model",rawName:"v-model",value:r.form.confirmPassword,expression:"form.confirmPassword"}],staticClass:"form-control",attrs:{type:"password",name:"confirm-password",id:"confirm-password"},domProps:{value:r.form.confirmPassword},on:{input:function(t){t.target.composing||r.$set(r.form,"confirmPassword",t.target.value)}}})]),s("button",{staticClass:"btn btn-primary btn-lg",attrs:{type:"submit"}},[r._v("Confirmar")])])]),s("p",[r._v(r._s(r.errors))])])};o._withStripped=!0;var a={render:o,staticRenderFns:[function(){var r=this.$createElement,t=this._self._c||r;return t("div",{staticClass:"col-12"},[t("h1",[this._v("Recuperar Contraseña")])])}]};t.a=a},XUNX:function(r,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=s("pQnK"),a=s("JvOM"),e=s("VU/8")(o.a,a.a,!1,null,null,null);e.options.__file="resources/nuxt/pages/recovery-password/_token.vue",t.default=e.exports},pQnK:function(r,t,s){"use strict";var o=s("Xxa5"),a=s.n(o),e=s("exGp"),n=s.n(e);t.a={middleware:"notAuthenticated",data:function(){return{form:{password:"",confirmPassword:""},errors:""}},methods:{handleForm:function(){var r=n()(a.a.mark(function r(){var t;return a.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if(this.form.password===this.form.confirmPassword){r.next=4;break}this.errors="¡Las claves no coinciden!",r.next=9;break;case 4:return t=$nuxt.$axios.post("http://brand-wifi.mx/api/recover",{token:$nuxt.$route.params.token,password:this.form.password}),r.next=7,t.data;case 7:r.sent,$nuxt.$router.push({path:"/login"});case 9:case"end":return r.stop()}},r,this)}));return function(){return r.apply(this,arguments)}}()}}}});