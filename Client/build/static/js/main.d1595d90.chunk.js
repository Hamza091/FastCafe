(this.webpackJsonpfast_cafe=this.webpackJsonpfast_cafe||[]).push([[0],{38:function(e,t,c){},39:function(e,t,c){},42:function(e,t,c){},65:function(e,t,c){},68:function(e,t,c){},69:function(e,t,c){},70:function(e,t,c){},71:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),r=c(15),j=c.n(r),i=(c(38),c(39),c(40),c(10)),d=c(3),l=c(19),a=c.n(l),b=c(31),h=c(21),x=(c(42),c(32)),O=c.n(x),o=c(9),u="Update_Login",m=function(e){return{type:u,payload:e}},f=c(0);var p=function(){var e=Object(n.useState)(""),t=Object(h.a)(e,2),c=t[0],s=t[1],r=Object(n.useState)(""),j=Object(h.a)(r,2),i=j[0],d=j[1],l=Object(o.b)();function x(){return(x=Object(b.a)(a.a.mark((function e(t){var n,s,r,j;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=document.querySelector(".chkbx"),s=n.checked,r=JSON.stringify({email:c,password:i,admin:s}),e.next=6,O.a.get("/api/login",{params:r});case 6:(j=e.sent).data.success?l(m(j.data)):alert("Invalid Credentials...");case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(f.jsxs)("div",{className:"main",children:[Object(f.jsx)("p",{className:"sign",children:"Sign in"}),Object(f.jsxs)("form",{className:"form1",children:[Object(f.jsx)("input",{className:"un ",type:"text",placeholder:"Email",onChange:function(e){s(e.target.value)}}),Object(f.jsx)("input",{className:"un",type:"password",placeholder:"Password",onChange:function(e){d(e.target.value)}}),Object(f.jsxs)("div",{className:"login",children:[Object(f.jsx)("button",{className:"submit",onClick:function(e){return function(e){return x.apply(this,arguments)}(e)},children:"Sign in"}),Object(f.jsxs)("div",{className:"checkbox",children:[Object(f.jsx)("input",{type:"checkbox",className:"chkbx"}),"Login as admin"]})]})]})]})};c(65);var v=function(){var e=Object(o.c)((function(e){return e.LoginReducer}));return Object(f.jsxs)("div",{className:"nav-container",children:[Object(f.jsx)("div",{className:"nav-logo",children:"FASTCafe"}),e.admin?Object(f.jsx)("div",{className:"nav-links",children:Object(f.jsx)(i.b,{to:"/",className:"link",children:Object(f.jsx)("p",{children:"Home"})})}):Object(f.jsxs)("div",{className:"nav-links",children:[Object(f.jsx)(i.b,{to:"/",className:"link",children:Object(f.jsx)("p",{children:"Home"})}),Object(f.jsx)(i.b,{to:"/items",className:"link",children:Object(f.jsx)("p",{children:"Items"})}),Object(f.jsx)(i.b,{to:"/",className:"link",children:Object(f.jsx)("p",{children:"Orders"})})]})]})};c(68);var N=function(){return Object(f.jsx)("div",{className:"customer-main",children:Object(f.jsxs)("div",{className:"contents",children:[Object(f.jsx)("button",{className:"btn btn-success btn-lg btn-txt",onClick:function(){console.log("check")},children:"Add Item"}),Object(f.jsx)("div",{className:"head",children:"Items"}),Object(f.jsx)("table",{id:"customers",children:Object(f.jsxs)("tr",{children:[Object(f.jsx)("th",{children:"Id"}),Object(f.jsx)("th",{children:"Name"}),Object(f.jsx)("th",{children:"Price"}),Object(f.jsx)("th",{children:"Quantity"}),Object(f.jsx)("th",{children:"Category"})]})})]})})};c(69);var k=function(){return Object(f.jsx)("div",{className:"customer-main",children:Object(f.jsxs)("div",{className:"contents",children:[Object(f.jsx)("button",{className:"btn btn-success btn-lg btn-txt",children:"Serve"}),Object(f.jsxs)("table",{id:"customers",children:[Object(f.jsxs)("tr",{children:[Object(f.jsx)("th",{children:"Company"}),Object(f.jsx)("th",{children:"Contact"}),Object(f.jsx)("th",{children:"Country"}),Object(f.jsx)("th",{children:"Company"}),Object(f.jsx)("th",{children:"Contact"}),Object(f.jsx)("th",{children:"Country"}),Object(f.jsx)("th",{children:"Actions"})]}),Object(f.jsxs)("tr",{children:[Object(f.jsx)("td",{children:"Alfreds sldkfj lksdjFutterkiste"}),Object(f.jsx)("td",{children:"Maria Anders"}),Object(f.jsx)("td",{children:"Germany"}),Object(f.jsx)("td",{children:"Alfreds Futterkiste"}),Object(f.jsx)("td",{children:"Maria Anders"}),Object(f.jsx)("td",{children:"Germany"}),Object(f.jsx)("td",{children:Object(f.jsxs)("div",{className:"form-check",children:[Object(f.jsx)("input",{className:"form-check-input",type:"checkbox",value:"",id:"flexCheckDefault"}),Object(f.jsx)("label",{className:"form-check-label",children:"Serve"})]})})]}),Object(f.jsxs)("tr",{children:[Object(f.jsx)("td",{children:"Alfreds Futterkiste"}),Object(f.jsx)("td",{children:"Maria Anders"}),Object(f.jsx)("td",{children:"Germany"}),Object(f.jsx)("td",{children:"Alfreds Futterkiste"}),Object(f.jsx)("td",{children:"Maria Anders"}),Object(f.jsx)("td",{children:"Germany"}),Object(f.jsx)("td",{children:Object(f.jsxs)("div",{className:"form-check",children:[Object(f.jsx)("input",{className:"form-check-input",type:"checkbox",value:"",id:"flexCheckDefault"}),Object(f.jsx)("label",{className:"form-check-label",children:"Serve"})]})})]}),Object(f.jsxs)("tr",{children:[Object(f.jsx)("td",{children:"Alfreds Futterkiste"}),Object(f.jsx)("td",{children:"Maria Anders"}),Object(f.jsx)("td",{children:"Germany"}),Object(f.jsx)("td",{children:"Alfreds Futterkiste"}),Object(f.jsx)("td",{children:"Maria Anders"}),Object(f.jsx)("td",{children:"Germany"}),Object(f.jsx)("td",{children:Object(f.jsxs)("div",{className:"form-check",children:[Object(f.jsx)("input",{className:"form-check-input",type:"checkbox",value:"",id:"flexCheckDefault"}),Object(f.jsx)("label",{className:"form-check-label",children:"Serve"})]})})]})]})]})})};c(70);var y=function(){return Object(f.jsx)("div",{className:"customer-main",children:Object(f.jsxs)("div",{className:"contents",children:[Object(f.jsx)("button",{className:"btn btn-success btn-lg btn-txt",children:"Add Item"}),Object(f.jsx)("div",{className:"head",children:"Items"}),Object(f.jsxs)("table",{id:"customers",children:[Object(f.jsxs)("tr",{children:[Object(f.jsx)("th",{children:"Company"}),Object(f.jsx)("th",{children:"Contact"}),Object(f.jsx)("th",{children:"Country"}),Object(f.jsx)("th",{children:"Company"}),Object(f.jsx)("th",{children:"Contact"}),Object(f.jsx)("th",{children:"Country"}),Object(f.jsx)("th",{children:"Actions"})]}),Object(f.jsxs)("tr",{children:[Object(f.jsx)("td",{children:"Alfreds sldkfj lksdjFutterkiste"}),Object(f.jsx)("td",{children:"Maria Anders"}),Object(f.jsx)("td",{children:"Germany"}),Object(f.jsx)("td",{children:"Alfreds Futterkiste"}),Object(f.jsx)("td",{children:"Maria Anders"}),Object(f.jsx)("td",{children:"Germany"}),Object(f.jsx)("td",{children:Object(f.jsxs)("div",{className:"btn-container",children:[Object(f.jsx)("button",{className:"btn btn-primary btn-lg btn-wid",children:"Update"}),Object(f.jsx)("button",{className:"btn btn-danger btn-lg btn-wid",children:"Delete"})]})})]}),Object(f.jsxs)("tr",{children:[Object(f.jsx)("td",{children:"Alfreds Futterkiste"}),Object(f.jsx)("td",{children:"Maria Anders"}),Object(f.jsx)("td",{children:"Germany"}),Object(f.jsx)("td",{children:"Alfreds Futterkiste"}),Object(f.jsx)("td",{children:"Maria Anders"}),Object(f.jsx)("td",{children:"Germany"}),Object(f.jsx)("td",{children:Object(f.jsxs)("div",{className:"btn-container",children:[Object(f.jsx)("button",{className:"btn btn-primary btn-lg btn-wid",children:"Update"}),Object(f.jsx)("button",{className:"btn btn-danger btn-lg btn-wid",children:"Delete"})]})})]}),Object(f.jsxs)("tr",{children:[Object(f.jsx)("td",{children:"Alfreds Futterkiste"}),Object(f.jsx)("td",{children:"Maria Anders"}),Object(f.jsx)("td",{children:"Germany"}),Object(f.jsx)("td",{children:"Alfreds Futterkiste"}),Object(f.jsx)("td",{children:"Maria Anders"}),Object(f.jsx)("td",{children:"Germany"}),Object(f.jsx)("td",{children:Object(f.jsxs)("div",{className:"btn-container",children:[Object(f.jsx)("button",{className:"btn btn-primary btn-lg btn-wid",children:"Update"}),Object(f.jsx)("button",{className:"btn btn-danger btn-lg btn-wid",children:"Delete"})]})})]})]})]})})};var g=function(){var e=Object(o.c)((function(e){return e.LoginReducer}));return Object(f.jsx)(i.a,{children:Object(f.jsxs)("div",{className:"App",children:[(null===e||void 0===e?void 0:e.success)?Object(f.jsx)(v,{}):null,(null===e||void 0===e?void 0:e.success)?(null===e||void 0===e?void 0:e.admin)?Object(f.jsx)(d.c,{children:Object(f.jsx)(d.a,{exact:!0,path:"/",children:Object(f.jsx)(y,{})})}):Object(f.jsxs)(d.c,{children:[Object(f.jsx)(d.a,{exact:!0,path:"/",children:Object(f.jsx)(k,{})}),Object(f.jsx)(d.a,{path:"/items",children:Object(f.jsx)(N,{})})]}):Object(f.jsx)(d.a,{exact:!0,path:"/",children:Object(f.jsx)(p,{})})]})})},A=c(22),C={success:!1},F=Object(A.a)({LoginReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return t.payload;default:return e}}}),w=Object(A.b)(F),M=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,72)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,r=t.getLCP,j=t.getTTFB;c(e),n(e),s(e),r(e),j(e)}))};j.a.render(Object(f.jsx)(s.a.StrictMode,{children:Object(f.jsx)(o.a,{store:w,children:Object(f.jsx)(g,{})})}),document.getElementById("root")),M()}},[[71,1,2]]]);
//# sourceMappingURL=main.d1595d90.chunk.js.map