(this.webpackJsonpdashboard=this.webpackJsonpdashboard||[]).push([[0],{36:function(e,a,t){e.exports=t(51)},41:function(e,a,t){},50:function(e,a,t){},51:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(19),c=t.n(l),o=(t(41),t(7)),m=t(17),s=t(15),i=t(10),u=t(5),d=t(13),v=t(32),p=t(28),h=t(33),E=t.n(h),f=t(11),g="CHANGE_FILTER";var b=t(1),N=t.n(b),C=["a","b","c"],y={letter:"a",options:[],text:"",yes:!1},O=(N.a.string,N.a.arrayOf(N.a.string),N.a.string,N.a.bool,{text:i.d,options:i.a,letter:i.d,yes:i.b});function j(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,a=arguments.length>1?arguments[1]:void 0,t=a.type,n=a.payload;switch(t){case g:return Object(f.a)({},e,{},n);default:return e}}var k=function(e){return Object(d.combineReducers)({router:Object(s.b)(e),settings:j})},x=Object(u.a)(),F=v.composeWithDevTools;t(29),t(49);var w=t(21),S=function(e,a){return function(t){var n=function(n){var l=Object(i.e)(e),c=Object(w.a)(l,2),o=c[0],m=c[1];return r.a.createElement(t,Object.assign({},a(o,m),n))};return n.displayName="withQueryParams(".concat(t.displayName||t.name||"Component",")"),n}},P=t(35),L=function(e){var a=e.value,t=e.onChange;return r.a.createElement("div",{className:"form-group col-md-3"},r.a.createElement("label",{htmlFor:"letterFilter"},"Select Letter"),r.a.createElement("select",{id:"letterFilter",className:"form-control",value:a,onChange:t},C.map((function(e){return r.a.createElement("option",{key:e,value:e},e.toUpperCase())}))))};L.defaultProps={value:"",onChange:function(){}};var T=L,D=function(e){var a=e.value,t=e.onChange,l=Object(n.useState)(a),c=Object(w.a)(l,2),o=c[0],m=c[1];return r.a.createElement("div",{className:"form-group col-md-3"},r.a.createElement("label",{htmlFor:"queryFilter"},"Search"),r.a.createElement("div",{className:"input-group"},r.a.createElement("input",{type:"text",id:"queryFilter",className:"form-control",value:o,onChange:function(e){var a=e.target.value;m(a)},placeholder:"Search","aria-label":"Search Query","aria-describedby":"button-addon"}),r.a.createElement("div",{className:"input-group-append"},r.a.createElement("button",{type:"button",id:"button-addon",className:"btn btn-outline-secondary",onClick:function(){t({value:o})}},r.a.createElement("span",{role:"img","aria-label":"Search Icon"},"\ud83d\udd0e")))))};D.defaultProps={value:"",onChange:function(){}};var q=D,Y=function(e){var a=e.value,t=e.onChange;return r.a.createElement("div",{className:"form-group col-md-3"},r.a.createElement("label",{htmlFor:"optionsFilter"},"Options"),r.a.createElement("select",{id:"optionsFilter",multiple:!0,className:"form-control",value:a,onChange:t},C.map((function(e){return r.a.createElement("option",{key:e,value:e},"Option ".concat(e.toUpperCase()))}))))};Y.defaultProps={value:[],onChange:function(){}};var B=Y,I=function(e){var a=e.value,t=e.onChange;return r.a.createElement("div",{className:"form-group col-md-3"},r.a.createElement("div",{className:"form-check"},r.a.createElement("input",{id:"featuredFilter",type:"checkbox",className:"form-check-input",checked:a,onChange:t}),r.a.createElement("label",{className:"form-check-label",htmlFor:"featuredFilter"},"Yes")))};I.defaultProps={value:!1,onChange:function(){}};var U=I,W=function(e){var a=e.letter,t=e.options,n=e.text,l=e.yes,c=e.onChangeLetter,o=e.onChangeOptions,m=e.onChangeText,s=e.onChangeYes;return r.a.createElement("div",{className:"row bg-light"},r.a.createElement(q,{value:n,onChange:function(e){var a=e.value;m(a)}}),r.a.createElement(T,{value:a,onChange:function(e){var a=e.target.value;c(a)}}),r.a.createElement(B,{value:t,onChange:function(e){var a=e.target.options,t=Object(P.a)(a).filter((function(e){return e.selected})).map((function(e){return e.value}));o(t)}}),r.a.createElement(U,{value:l,onChange:function(e){var a=e.target.checked;s(a)}}))};W.defaultProps=Object(f.a)({},y,{onChangeLetter:function(){},onChangeOptions:function(){},onChangeText:function(){},onChangeYes:function(){}});var G=W,H=S(O,(function(e,a){return{letter:e.letter,options:e.options,text:e.text,yes:e.yes,onChangeLetter:function(t){return a(Object(f.a)({},e,{letter:t}))},onChangeOptions:function(t){return a(Object(f.a)({},e,{options:t}))},onChangeText:function(t){return a(Object(f.a)({},e,{text:t}))},onChangeYes:function(t){return a(Object(f.a)({},e,{yes:t}))}}}))(G),J=function(e){var a=e.letter;return r.a.createElement("p",null,"Selected Letter: ".concat(a.toUpperCase()))};J.defaultProps={letter:y.letter};var M=J,Q=S(O,(function(e){return{letter:e.letter}}))(M),R=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(H,null),r.a.createElement("h1",null,"Summary"),r.a.createElement(Q,null),r.a.createElement("p",null,"Magna cernantur doctrina te mandaremus quem ipsum senserit irure."),r.a.createElement("p",null,"Nam ipsum senserit an proident nam quis possumus."))},A=t(22),$=t(14),_=function(e){var a=e.to,t=e.children,n=Object(A.a)(e,["to","children"]);return(r.a.createElement($.a,Object.assign({},n,{to:function(e){return"".concat(a).concat(e.search)}}),t))},z=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(H,null),r.a.createElement("h1",null,"Data"),r.a.createElement(Q,null),r.a.createElement(_,{to:"/"},"Go Back Home"),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement("span",null,"Chart")),r.a.createElement("div",{className:"col-md-6"},r.a.createElement("span",null,"Chart"))))},K=function(e){var a=e.exact,t=e.to,n=e.children,l=Object(A.a)(e,["exact","to","children"]);return r.a.createElement(o.a,{path:t,exact:a,children:function(e){var c=e.match;return(r.a.createElement($.b,Object.assign({exact:a},l,{to:function(e){return"".concat(t).concat(e.search)}}),n,!!c&&r.a.createElement("span",{className:"sr-only"},"(current)")))}})},V=function(){return r.a.createElement("nav",{className:"col-md-2 d-none d-md-block bg-light sidebar vh-100"},r.a.createElement("div",{className:"sidebar-sticky"},r.a.createElement("ul",{className:"nav nav-pills flex-column py-3"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(K,{exact:!0,to:"/",className:"nav-link"},"Summary")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(K,{to:"/data",className:"nav-link"},"Data")))))},X=function(){return r.a.createElement("nav",{className:"navbar navbar-expand-md navbar-dark bg-dark"},r.a.createElement("span",{className:"navbar-brand"},"Dashboard"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarCollapse","aria-controls":"navbarCollapse","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarCollapse"},r.a.createElement("ul",{className:"navbar-nav mr-auto d-md-none"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(K,{exact:!0,to:"/",className:"nav-link"},"Summary")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(K,{to:"/data",className:"nav-link"},"Data")))))},Z=(t(50),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(d.createStore)(k(x),e,F(Object(d.applyMiddleware)(Object(p.a)(x),E.a)))}()),ee=function(){return r.a.createElement(m.a,{store:Z},r.a.createElement(s.a,{history:x},r.a.createElement(i.c,{history:x},r.a.createElement(r.a.Fragment,null,r.a.createElement(X,null),r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row"},r.a.createElement(V,null),r.a.createElement("main",{role:"main",className:"col-md-9 ml-sm-auto col-lg-10"},r.a.createElement(o.a,{exact:!0,path:"/",component:R}),r.a.createElement(o.a,{path:"/data",component:z}))))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(ee,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[36,1,2]]]);
//# sourceMappingURL=main.e3671354.chunk.js.map