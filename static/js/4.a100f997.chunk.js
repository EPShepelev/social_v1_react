(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[4],{108:function(e,s,a){"use strict";a.r(s);a(0);var t=a(6),n=a(27),i=a(96),c=a.n(i),r=a(1),o=function(e){var s=e.id,a=e.name;return Object(r.jsxs)("div",{className:c.a.item,children:[Object(r.jsx)(n.a,{})," ",Object(r.jsx)(t.b,{className:c.a.itemLink,to:"/dialogs/".concat(s),children:a})]})},u=a(97),d=a.n(u),l=function(e){var s=e.text,a=e.isYours;return Object(r.jsx)("div",{className:a?d.a.message:d.a.messageRight,children:Object(r.jsx)("span",{children:s})})},m=a(98),p=a.n(m),_=a(48),g=a(95),b=a(99),j=a.n(b),x=function(e){var s=e.addMessage;return Object(r.jsx)("div",{className:j.a.postAdd__wrapper,children:Object(r.jsx)(g.a,{onSubmitClick:function(e){s(e.message)},btntext:"Add message",placeholder:"type..."})})},h=a(11),f=Object(h.b)((function(e){return{newMessageText:e.dialogs.newMessageText}}),(function(e){return{addMessage:function(s){e(Object(_.a)(s))}}}))(x),O=a(38),v=a(18);s.default=Object(v.c)(Object(h.b)((function(e){return{dialogsData:e.dialogs.dialogsData,messagesData:e.dialogs.messagesData,isAuth:e.auth.isAuth}})),O.a)((function(e){var s=e.dialogsData,a=e.messagesData;return Object(r.jsxs)("div",{className:p.a.wrapper,children:[Object(r.jsxs)("div",{className:p.a.dialogs,children:[Object(r.jsx)("div",{className:p.a.dialosItems,children:s.map((function(e){return Object(r.jsx)(o,{name:e.name},e.id)}))}),Object(r.jsx)("div",{className:p.a.messages,children:a.map((function(e){return Object(r.jsx)(l,{isYours:e.isYours,text:e.text},e.id)}))})]}),Object(r.jsx)(f,{})]})}))},94:function(e,s,a){e.exports={wrapper:"TextInputBase_wrapper__1WfeH",container:"TextInputBase_container__2BQBx",input:"TextInputBase_input__1M1i9",btn:"TextInputBase_btn__2YInT"}},95:function(e,s,a){"use strict";a(0);var t=a(20),n=function(e){var s={};return e.message?e.message.length>300&&(s.message="Max message siaze is about ".concat(300," symbols")):s.message="Type a message!",s},i=a(94),c=a.n(i),r=a(1);s.a=function(e){var s=e.btntext,a=e.placeholder,i=e.onSubmitClick;return Object(r.jsx)("div",{className:c.a.wrapper,children:Object(r.jsx)(t.c,{initialValues:{message:""},validate:n,onSubmit:function(e,s){var a=s.setSubmitting,t=s.resetForm;i(e),a(!1),t()},children:function(e){var n=e.values,i=e.errors,o=e.touched,u=e.handleChange,d=e.handleBlur,l=e.isSubmitting;return Object(r.jsxs)(t.b,{className:c.a.container,children:[Object(r.jsx)(t.a,{className:c.a.input,name:"message",component:"textarea",placeholder:a,value:n.message,onChange:u,onBlur:d}),i.message&&o.message&&i.message,Object(r.jsx)("button",{className:c.a.btn,type:"submit",disabled:l,children:s})]})}})})}},96:function(e,s,a){e.exports={item:"DialogItem_item__2z2Tl",itemLink:"DialogItem_itemLink__3HWgF"}},97:function(e,s,a){e.exports={message:"Message_message__kVpdt",messageRight:"Message_messageRight__2DNJl"}},98:function(e,s,a){e.exports={wrapper:"Dialogs_wrapper__1cRA8",dialogs:"Dialogs_dialogs__2xRSA",dialosItems:"Dialogs_dialosItems__17RdL"}},99:function(e,s,a){e.exports={postAdd__wrapper:"InputMessage_postAdd__wrapper__3a48y",postAdd__text:"InputMessage_postAdd__text___spU5",postAdd__btn:"InputMessage_postAdd__btn__3-V7k",color:"InputMessage_color__2Oy5B",font:"InputMessage_font__mNqo5"}}}]);
//# sourceMappingURL=4.a100f997.chunk.js.map