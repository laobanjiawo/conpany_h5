webpackJsonp([2],{1248:function(t,e,a){"use strict";function o(t){a(1260)}Object.defineProperty(e,"__esModule",{value:!0});var l=a(1253),i=a(1262),r=a(0),n=o,s=Object(r.a)(l.a,i.a,i.b,!1,n,null,null);e.default=s.exports},1253:function(t,e,a){"use strict";var o=a(1);e.a={mixins:[o.a],components:{},name:"login",props:[],data:function(){return{form:{code:""},tryPlay:!1}},created:function(){},methods:{__initLoginPopup:function(){this.tryPlay=!1},__loginSuccess:function(){this.code="",!this.tryPlay&&this.__setLocal({remember:!!this.local.remember,un:this.local.remember?this.local.un:"",pwd:this.local.remember?this.local.pwd:""}),this.$f7.popup.close("#login"),this.__go(this.global.afterLoginRedirect),this.__setCall(this.global.afterLoginAction)}}}},1260:function(t,e,a){var o=a(1261);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);a(1244)("0fb87ace",o,!0,{})},1261:function(t,e,a){var o=a(1245);e=t.exports=a(1243)(!1),e.push([t.i,".login .blocklog{height:100px;background-image:url("+o(a(1246))+");background-repeat:no-repeat;background-position:50%;background-size:auto 100%}.login .code{position:absolute;right:20px;top:0;bottom:0;width:80px}",""])},1262:function(t,e,a){"use strict";a.d(e,"a",function(){return o}),a.d(e,"b",function(){return l});var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("f7-page",{staticClass:"login bg-color-white"},[a("f7-link",{staticClass:"pd_15",attrs:{"popup-close":"#login"}},[a("span",{staticClass:"ft_16 c_9"},[t._v("取消")])]),a("div",{staticClass:"blocklog"}),a("f7-list",{staticClass:"pr_15 mb_5",attrs:{"no-hairlines":"no-hairlines"}},[a("f7-list-input",{directives:[{name:"show",rawName:"v-show",value:!t.tryPlay,expression:" !tryPlay "}],attrs:{required:"required",validate:"validate",type:"text","floating-label":"floating-label",label:"用户名",placeholder:"用户名","clear-button":"clear-button",value:t.local.un},on:{input:function(e){t.local.un=e.target.value}}}),a("f7-list-input",{directives:[{name:"show",rawName:"v-show",value:!t.tryPlay,expression:" !tryPlay "}],attrs:{required:"required",validate:"validate",type:"password","floating-label":"floating-label",label:"密码",placeholder:"密码","clear-button":"clear-button",value:t.local.pwd},on:{input:function(e){t.local.pwd=e.target.value}}}),a("li",{staticClass:"item-content item-input"},[a("div",{staticClass:"item-inner"},[a("div",{staticClass:"item-title item-floating-label"},[t._v("验证码")]),a("div",{staticClass:"item-input-wrap"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.code,expression:"form.code"}],attrs:{required:"required",validate:"validate",type:"number"},domProps:{value:t.form.code},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.__setCall({fn:t.tryPlay?"__tryLogin":"__login",args:{un:t.local.un,pwd:t.local.pwd,code:t.form.code,cb:t.__loginSuccess}})},input:function(e){e.target.composing||t.$set(t.form,"code",e.target.value)}}}),a("span",{staticClass:"input-clear-button"}),a("img",{staticClass:"code",attrs:{src:t.user.codeimg},on:{click:function(e){return t.__setCall({fn:"__getcodeimg"})}}})])])]),a("li",{staticClass:"h_o"})],1),a("div",{directives:[{name:"show",rawName:"v-show",value:!t.tryPlay,expression:" !tryPlay "}],staticClass:"pd_15 ft_12"},[a("f7-checkbox",{attrs:{name:" remember ",checked:t.local.remember},on:{change:function(e){return t.__setLocal({remember:e.target.checked})}}}),a("span",{on:{click:function(e){return t.__setLocal({remember:!t.local.remember})}}},[t._v(" 记住密码")]),a("f7-link",{staticClass:"f_r",attrs:{"popup-open":"#forget"}},[a("span",{staticClass:"c_6"},[t._v("忘记密码")])])],1),a("f7-block",{staticClass:"mb_5"},[a("f7-button",{attrs:{round:"round",fill:"fill",large:"large"},on:{click:function(e){return t.__setCall({fn:t.tryPlay?"__tryLogin":"__login",args:{un:t.local.un,pwd:t.local.pwd,code:t.form.code,cb:t.__loginSuccess}})}}},[t._v("登录")])],1),a("div",{staticClass:"t_c"},[a("f7-button",{staticClass:"inlb",attrs:{color:"gray"},on:{click:function(e){t.tryPlay=!t.tryPlay}}},[t._v(t._s(t.tryPlay?"我要登录":"我要试玩"))]),a("f7-button",{staticClass:"inlb",attrs:{color:"gray","popup-open":"#register"}},[t._v("邀请注册")])],1),a("f7-toolbar",{staticClass:"t_c ft_14",attrs:{bottom:"bottom","bg-color":"white","no-border":"no-border"}},[a("f7-link",{attrs:{text:""}}),a("f7-link",{attrs:{text:"线路切换","popup-open":"#speed"}}),a("f7-link",{attrs:{text:""}})],1)],1)},l=[]}});