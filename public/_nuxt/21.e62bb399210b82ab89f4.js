webpackJsonp([21],{UwRp:function(t,a,s){"use strict";var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"card"},[s("div",{staticClass:"card-header"},[s("img",{staticClass:"rounded-circle user__picture",attrs:{src:t.imgUrl+"/"+t.user.imagen,alt:"Imágen del usuario "+t.user.nombre}}),s("p",{staticClass:"d-inline ml-2"},[t._v(t._s(t.user.nombre+" "+t.user.apellido_paterno))])]),s("img",{staticClass:"card-img-top",attrs:{src:t.campaing.image,alt:""+t.campaing.title}}),s("div",{staticClass:"card-body"},[s("h5",{staticClass:"card-title"},[t._v(t._s(t.campaing.title))]),s("p",{staticClass:"card-text text-truncate"},[t._v(t._s(t.campaing.description))])]),s("div",{staticClass:"card-footer"},[s("nuxt-link",{staticClass:"card-link",attrs:{to:"/campaings/"+t.campaing.slug}},[t._v("Ver Campaña")]),s("nuxt-link",{staticClass:"card-link",attrs:{to:"/campaings/"+t.campaing.slug}},[t._v("Editar")]),s("a",{staticClass:"card-link",attrs:{href:"#","data-toggle":"modal","data-target":"#deleteCampaing"}},[t._v("\n            Eliminar\n        ")])],1),t._m(0)])};e._withStripped=!0;var i={render:e,staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"modal fade",attrs:{id:"deleteCampaing",tabindex:"-1",role:"dialog","aria-labelledby":"deleteCampaing","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header"},[a("h5",{staticClass:"modal-title",attrs:{id:"deleteCampaing"}},[this._v("Eliminar Campaña")]),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[this._v("×")])])]),a("div",{staticClass:"modal-body"},[a("p",[this._v("¿Realmente desea eliminar esta campaña?")])]),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[this._v("Cancelar")]),a("button",{staticClass:"btn btn-primary",attrs:{type:"button"}},[this._v("Eliminar")])])])])])}]};a.a=i},"XZ+R":function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=s("XhAx"),i=s("UwRp"),r=!1;var n=function(t){r||s("pHFF")},l=s("VU/8")(e.a,i.a,!1,n,null,null);l.options.__file="resources/nuxt/components/Campaings/Card.vue",a.default=l.exports},XhAx:function(t,a,s){"use strict";a.a={props:{user:{type:Object,default:function(){return{picture:"https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",name:"Usuario"}}},campaing:{type:Object,default:function(){return{title:"Mi Campaña Publicitaria",image:"https://images.pexels.com/photos/1172207/pexels-photo-1172207.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",description:"lorem",slug:"campaña"}}}},data:function(){return{imgUrl:"http://brand-wifi.mx/images"}},methods:{deleteCampaing:function(){console.log("Eliminando")}}}},lN3F:function(t,a,s){(t.exports=s("FZ+f")(!1)).push([t.i,".user__picture{width:48px;height:48px;-o-object-fit:cover;object-fit:cover;-o-object-position:top;object-position:top}",""])},pHFF:function(t,a,s){var e=s("lN3F");"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);(0,s("rjj0").default)("6db98f7e",e,!1,{sourceMap:!1})}});