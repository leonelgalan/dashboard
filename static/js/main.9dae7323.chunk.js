(this.webpackJsonpdashboard=this.webpackJsonpdashboard||[]).push([[0],{33:function(e,a,t){e.exports=t(46)},38:function(e,a,t){},45:function(e,a,t){},46:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(17),c=t.n(l),o=(t(38),t(7)),m=t(10),s=t(14),i=t(5),u=t(12),v=t(28),d=t(24),p=t(29),E=t.n(p),g=t(13),h="CHANGE_FILTER";function f(e){return{type:h,payload:e}}var b=t(1),N=t.n(b),C=["a","b","c"],y={letter:"a",options:[],text:"",yes:!1},k=(N.a.string,N.a.arrayOf(N.a.string),N.a.string,N.a.bool,{letter:"A",options:void 0,yes:void 0,text:void 0});function O(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,a=arguments.length>1?arguments[1]:void 0,t=a.type,n=a.payload;switch(t){case h:return Object(g.a)({},e,{},n);default:return e}}var x=function(e){return Object(u.combineReducers)({router:Object(s.b)(e),settings:O})},F=Object(i.a)(),j=v.composeWithDevTools;t(25),t(44);var w=t(31),S=function(e){var a=e.value,t=e.onChange;return r.a.createElement("div",{className:"form-group col-md-3"},r.a.createElement("label",{htmlFor:"letterFilter"},"Select Letter"),r.a.createElement("select",{id:"letterFilter",className:"form-control",value:a,onChange:t},C.map((function(e){return r.a.createElement("option",{key:e,value:e},e.toUpperCase())}))))};S.defaultProps={value:"",onChange:function(){}};var L=S,T=t(32),D=function(e){var a=e.value,t=e.onChange,l=Object(n.useState)(a),c=Object(T.a)(l,2),o=c[0],m=c[1];return r.a.createElement("div",{className:"form-group col-md-3"},r.a.createElement("label",{htmlFor:"queryFilter"},"Search"),r.a.createElement("div",{className:"input-group"},r.a.createElement("input",{type:"text",id:"queryFilter",className:"form-control",value:o,onChange:function(e){var a=e.target.value;m(a)},placeholder:"Search","aria-label":"Search Query","aria-describedby":"button-addon"}),r.a.createElement("div",{className:"input-group-append"},r.a.createElement("button",{type:"button",id:"button-addon",className:"btn btn-outline-secondary",onClick:function(){t({value:o})}},r.a.createElement("span",{role:"img","aria-label":"Search Icon"},"\ud83d\udd0e")))))};D.defaultProps={value:"",onChange:function(){}};var P=D,q=function(e){var a=e.value,t=e.onChange;return r.a.createElement("div",{className:"form-group col-md-3"},r.a.createElement("label",{htmlFor:"optionsFilter"},"Options"),r.a.createElement("select",{id:"optionsFilter",multiple:!0,className:"form-control",value:a,onChange:t},C.map((function(e){return r.a.createElement("option",{key:e,value:e},"Option ".concat(e.toUpperCase()))}))))};q.defaultProps={value:[],onChange:function(){}};var Y=q,B=function(e){var a=e.value,t=e.onChange;return r.a.createElement("div",{className:"form-group col-md-3"},r.a.createElement("div",{className:"form-check"},r.a.createElement("input",{id:"featuredFilter",type:"checkbox",className:"form-check-input",checked:a,onChange:t}),r.a.createElement("label",{className:"form-check-label",htmlFor:"featuredFilter"},"Yes")))};B.defaultProps={value:!1,onChange:function(){}};var I=B,U=function(e){var a=e.letter,t=e.options,n=e.text,l=e.yes,c=e.onChangeLetter,o=e.onChangeOptions,m=e.onChangeText,s=e.onChangeYes;return r.a.createElement("div",{className:"row bg-light"},r.a.createElement(P,{value:n,onChange:function(e){var a=e.value;m(a)}}),r.a.createElement(L,{value:a,onChange:function(e){var a=e.target.value;c(a)}}),r.a.createElement(Y,{value:t,onChange:function(e){var a=e.target.options,t=Object(w.a)(a).filter((function(e){return e.selected})).map((function(e){return e.value}));o(t)}}),r.a.createElement(I,{value:l,onChange:function(e){var a=e.target.checked;s(a)}}))};U.defaultProps=Object(g.a)({},k,{onChangeLetter:function(){},onChangeOptions:function(){},onChangeText:function(){},onChangeYes:function(){}});var W=U,A=Object(m.c)((function(e,a){return Object(g.a)({},e.settings,{},a)}),(function(e){return{onChangeLetter:function(a){return e(f({letter:a}))},onChangeOptions:function(a){return e(f({options:a}))},onChangeText:function(a){return e(f({text:a}))},onChangeYes:function(a){return e(f({yes:a}))}}}))(W),G=function(e){var a=e.letter;return r.a.createElement("p",null,"Selected Letter: ".concat(a.toUpperCase()))},H=Object(m.c)((function(e){return{letter:e.settings.letter}}))(G),J=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(A,null),r.a.createElement("h1",null,"Summary"),r.a.createElement(H,null),r.a.createElement("p",null,"Magna cernantur doctrina te mandaremus quem ipsum senserit irure."),r.a.createElement("p",null,"Nam ipsum senserit an proident nam quis possumus."))},M=t(9),R=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(A,null),r.a.createElement("h1",null,"Data"),r.a.createElement(H,null),r.a.createElement(M.a,{to:"/"},"Go Back Home"),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement("span",null,"Chart")),r.a.createElement("div",{className:"col-md-6"},r.a.createElement("span",null,"Chart"))))},Q=function(){return r.a.createElement("nav",{className:"col-md-2 d-none d-md-block bg-light sidebar vh-100"},r.a.createElement("div",{className:"sidebar-sticky"},r.a.createElement("ul",{className:"nav nav-pills flex-column py-3"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(M.b,{exact:!0,to:"/",className:"nav-link"},"Summary")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(M.b,{to:"/data",className:"nav-link"},"Data")))))},$=function(){return r.a.createElement("nav",{className:"navbar navbar-expand-md navbar-dark bg-dark"},r.a.createElement("span",{className:"navbar-brand"},"Dashboard"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarCollapse","aria-controls":"navbarCollapse","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarCollapse"},r.a.createElement("ul",{className:"navbar-nav mr-auto d-md-none"},r.a.createElement("li",{className:"nav-item active"},r.a.createElement(M.b,{exact:!0,to:"/",className:"nav-link"},"Summary",r.a.createElement("span",{className:"sr-only"},"(current)"))),r.a.createElement("li",{className:"nav-item"},r.a.createElement(M.b,{to:"/data",className:"nav-link"},"Data")))))},_=(t(45),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(u.createStore)(x(F),e,j(Object(u.applyMiddleware)(Object(d.a)(F),E.a)))}()),z=function(){return r.a.createElement(m.a,{store:_},r.a.createElement(s.a,{history:F},r.a.createElement(r.a.Fragment,null,r.a.createElement($,null),r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row"},r.a.createElement(Q,null),r.a.createElement("main",{role:"main",className:"col-md-9 ml-sm-auto col-lg-10"},r.a.createElement(o.a,{exact:!0,path:"/",component:J}),r.a.createElement(o.a,{path:"/data",component:R})))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[33,1,2]]]);
//# sourceMappingURL=main.9dae7323.chunk.js.map