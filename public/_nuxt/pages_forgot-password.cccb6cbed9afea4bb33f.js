webpackJsonp([10],{"1h4M":function(t,e,a){var r=a("Oq8w");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,a("rjj0").default)("1d16103a",r,!1,{sourceMap:!1})},Oq8w:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,"",""])},VMw9:function(t,e,a){"use strict";var r=a("Xxa5"),s=a.n(r),n=a("exGp"),i=a.n(n);e.a={data:function(){return{email:""}},methods:{recoverPassword:function(){var t=i()(s.a.mark(function t(){var e,a;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,$nuxt.$axios.post("http://brand-wifi.mx/api/reset",email);case 2:return e=t.sent,t.next=5,e;case 5:a=t.sent,a.data,200===a.status&&(this.email="");case 9:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()}}},mnP8:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[t._m(0),a("div",{staticClass:"col-12"},[a("form",{attrs:{method:"post"},on:{submit:function(e){return e.preventDefault(),t.recoverPassword(e)}}},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"email"}},[t._v("Correo Electrónico")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",attrs:{type:"email",name:"email",id:"email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),t._m(1)])])])])};r._withStripped=!0;var s={render:r,staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-12"},[e("h1",[this._v("Ólvido su contraseña")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"form-group"},[e("button",{staticClass:"btn btn-primary rounded-pill",attrs:{type:"submit"}},[this._v("Enviar")])])}]};e.a=s},mwR8:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=a("VMw9"),s=a("mnP8"),n=!1;var i=function(t){n||a("1h4M")},o=a("VU/8")(r.a,s.a,!1,i,null,null);o.options.__file="resources/nuxt/pages/forgot-password.vue",e.default=o.exports}});