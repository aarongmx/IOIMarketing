webpackJsonp([3],{"+doR":function(t,e,i){"use strict";i.d(e,"a",function(){return s}),i.d(e,"b",function(){return r});var a="http://brand-wifi.mx",s=a+"/api",r=a+"/images"},"6Yt9":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container py-5"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-12"},[i("h1",[t._v("Mi Perfil")]),i("button",{staticClass:"btn btn-primary",on:{click:t.logout}},[t._v("Log out")])]),i("div",{staticClass:"col-12 col-lg-8 my-4 d-flex flex-column align-items-center justify-content-around flex-lg-row justify-content-lg-start"},[i("UserPicture",{attrs:{user:t.user,size:"some-huge"}}),i("div",{staticClass:"profile__data mt-2 mt-lg-0 text-center text-lg-left"},[i("h2",{staticClass:"h3"},[t._v(t._s(t.user.name))]),i("h3",{staticClass:"h6"},[t._v(t._s(t.user.email))]),i("h4",{staticClass:"h5"},[t._v(t._s(t.user.nickname))])])],1)])])};a._withStripped=!0;var s={render:a,staticRenderFns:[]};e.a=s},"9ht2":function(t,e,i){"use strict";var a=i("bxID"),s=i("YW4V"),r=!1;var n=function(t){r||i("WufB")},c=i("VU/8")(a.a,s.a,!1,n,"data-v-08a4f21e",null);c.options.__file="resources/nuxt/components/UserPicture.vue",e.a=c.exports},Oe8b:function(t,e,i){"use strict";var a=i("+doR"),s=i("9ht2");e.a={layout:"guest",middleware:"authenticated",data:function(){return{user:{picture:a.b+"/janeth.jpg",name:"Janeth Ávila Pérez",nickname:"janeth avila",email:"janeth_avila98@gmail.com"}}},components:{UserPicture:s.a},methods:{logout:function(){console.log("Bye")}}}},WufB:function(t,e,i){var a=i("d1nl");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,i("rjj0").default)("77895968",a,!1,{sourceMap:!1})},YW4V:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("fragment",[i("img",{class:"rounded-circle mr-lg-3 picture picture--"+t.size,attrs:{src:t.user.picture,alt:"Fotografía de "+t.user.name}}),t.seeLink?i("fragment",[i("nuxt-link",{attrs:{to:"/profile"}},[t._v(t._s(t.user.name))])],1):t._e()],1)};a._withStripped=!0;var s={render:a,staticRenderFns:[]};e.a=s},bxID:function(t,e,i){"use strict";e.a={props:{size:String,user:Object,seeLink:!1}}},d1nl:function(t,e,i){(t.exports=i("FZ+f")(!1)).push([t.i,".picture[data-v-08a4f21e]{-o-object-fit:cover;object-fit:cover;-o-object-position:center;object-position:center}.picture--small[data-v-08a4f21e]{width:32px;height:32px}.picture--medium[data-v-08a4f21e]{width:48px;height:48px}.picture--big[data-v-08a4f21e]{width:64px;height:64px}.picture--huge[data-v-08a4f21e]{width:128px;height:128px}.picture--some-huge[data-v-08a4f21e]{width:164px;height:164px}",""])},gu9e:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("Oe8b"),s=i("6Yt9"),r=i("VU/8")(a.a,s.a,!1,null,null,null);r.options.__file="resources/nuxt/pages/profile/index.vue",e.default=r.exports}});