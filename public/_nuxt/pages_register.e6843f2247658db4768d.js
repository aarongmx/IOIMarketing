webpackJsonp([5],{awYd:function(t,r,e){(t.exports=e("FZ+f")(!1)).push([t.i,"",""])},"b6U/":function(t,r,e){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var s=e("g+1D"),o=e("fiV0"),a=!1;var i=function(t){a||e("tPOF")},n=e("VU/8")(s.a,o.a,!1,i,null,null);n.options.__file="resources/nuxt/pages/register.vue",r.default=n.exports},fiV0:function(t,r,e){"use strict";var s=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"container"},[e("div",{staticClass:"row py-5"},[e("div",{staticClass:"col-12 col-lg-10 offset-lg-1"},[e("div",{staticClass:"card mb-3"},[e("div",{staticClass:"row no-gutters"},[e("div",{staticClass:"col-md-7 image"}),e("div",{staticClass:"col-md-5"},[e("div",{staticClass:"card-body py-5"},[e("h1",{staticClass:"card-title text-center h2"},[t._v("Registrarse")]),e("div",{staticClass:"text-center mt-4"},t._l(t.socialLinks,function(t,r){return e("a",{key:r,staticClass:"h4 text-black-50",attrs:{href:"/"+t.link}},[e("i",{class:"fab fa-"+t.icon+" mx-3"})])}),0),t._m(0),e("form",{attrs:{method:"post"},on:{submit:function(r){return r.preventDefault(),t.handleForm(r)}}},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[t._v("Usuario")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.register.usuario,expression:"register.usuario"}],staticClass:"form-control rounded-pill px-3",attrs:{type:"text",id:"inlineFormInputGroup",placeholder:"Usuario"},domProps:{value:t.register.usuario},on:{input:function(r){r.target.composing||t.$set(t.register,"usuario",r.target.value)}}})]),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[t._v("Correo")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.register.correo,expression:"register.correo"}],staticClass:"form-control rounded-pill px-3",attrs:{type:"text",id:"inlineFormInputGroup",placeholder:"Correo"},domProps:{value:t.register.correo},on:{input:function(r){r.target.composing||t.$set(t.register,"correo",r.target.value)}}})]),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[t._v("Contraseña")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.register.password,expression:"register.password"}],staticClass:"form-control rounded-pill px-3",attrs:{type:"password",name:"",id:"",placeholder:"Contraseña"},domProps:{value:t.register.password},on:{input:function(r){r.target.composing||t.$set(t.register,"password",r.target.value)}}})]),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:""}},[t._v("Contraseña")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.register.confirmacionPassword,expression:"register.confirmacionPassword"}],staticClass:"form-control rounded-pill px-3",attrs:{type:"password",name:"",id:"",placeholder:"Confirmar contraseña"},domProps:{value:t.register.confirmacionPassword},on:{input:function(r){r.target.composing||t.$set(t.register,"confirmacionPassword",r.target.value)}}})]),e("button",{staticClass:"btn btn-primary rounded-pill",attrs:{type:"submit"}},[t._v("Iniciar Sesión")])])])])])])])])])};s._withStripped=!0;var o={render:s,staticRenderFns:[function(){var t=this.$createElement,r=this._self._c||t;return r("div",{staticClass:"text-center py-2 mb-3"},[r("p",[this._v("O registrate con tu correo eléctronico")])])}]};r.a=o},"g+1D":function(t,r,e){"use strict";r.a={data:function(){return{socialLinks:[{link:"#",icon:"facebook"},{link:"#",icon:"google-plus-g"},{link:"#",icon:"mailchimp"}],register:{usuario:"",correo:"",password:"",confirmacionPassword:""}}},methods:{handleForm:function(){console.log(this.register.correo),console.log(this.register.password)}}}},tPOF:function(t,r,e){var s=e("awYd");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);(0,e("rjj0").default)("bc12f858",s,!1,{sourceMap:!1})}});