webpackJsonp([16],{A37p:function(t,a,e){"use strict";var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("fragment",[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("h1",[t._v("Crear Campaña")])]),e("div",{staticClass:"col-12"},[e("form",{attrs:{enctype:"multipart/form-data"},on:{submit:function(a){return a.preventDefault(),t.handleForm(a)}}},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"title"}},[t._v("Titulo de la campaña")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.titulo,expression:"form.titulo"}],staticClass:"form-control",attrs:{type:"text",name:"title",id:"title",placeholder:"Título de la campaña"},domProps:{value:t.form.titulo},on:{input:function(a){a.target.composing||t.$set(t.form,"titulo",a.target.value)}}})]),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"image"}},[t._v("Subir Imágen")]),e("input",{staticClass:"form-control",attrs:{type:"file",name:"image",id:"image"}})]),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"description"}},[t._v("Descripción de la campaña")]),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.descripcion,expression:"form.descripcion"}],staticClass:"form-control",attrs:{name:"description",id:"description",cols:"30",rows:"10"},domProps:{value:t.form.descripcion},on:{input:function(a){a.target.composing||t.$set(t.form,"descripcion",a.target.value)}}})]),e("div",{staticClass:"form-group"},[e("button",{staticClass:"btn btn-primary mr-3",attrs:{type:"submit"}},[t._v("Subir Campaña")]),e("button",{staticClass:"btn border border-dark",attrs:{type:"submit"}},[t._v("Ver Campaña")])])])])])])};r._withStripped=!0;var i={render:r,staticRenderFns:[]};a.a=i},SRDA:function(t,a,e){"use strict";a.a={data:function(){return{form:{titulo:"",descripcion:"",imagen:""}}},methods:{handleForm:function(){}}}},wpS5:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var r=e("SRDA"),i=e("A37p"),o=e("VU/8")(r.a,i.a,!1,null,null,null);o.options.__file="resources/nuxt/pages/campaings/create.vue",a.default=o.exports}});