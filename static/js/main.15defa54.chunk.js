(this.webpackJsonppenpal=this.webpackJsonppenpal||[]).push([[0],{28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var a,i=n(1),s=n.n(i),r=n(22),c=n.n(r),l=n(7),o=(n(28),n(2)),d=(n(29),n(30),n(0)),h=function(){return Object(d.jsx)("div",{})},j=(n(32),n(11)),u=n(15),b=(n(33),function(e){var t=e.children,n=Object(u.a)(e,["children"]);return Object(d.jsx)("button",Object(j.a)(Object(j.a)({className:"custom-button"},n),{},{children:t}))}),p=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("header",{children:Object(d.jsx)("h1",{children:"Welcome to PenPal!"})}),Object(d.jsxs)("main",{children:[Object(d.jsx)("p",{children:"PenPal! is your hub for connecting to penpals. Whether you prefer a Traditional penpal experience or completely Online, we're the place for you! Register now to begin matching with penpals and get writing, or Sign In if you're an existing user."}),Object(d.jsx)("p",{children:"Letters await!"}),Object(d.jsx)("form",{action:"/signin",children:Object(d.jsx)(b,{type:"submit",children:"Sign In"})})]})]})};function O(){return(O=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function m(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function x(e,t){var n=e.title,s=e.titleId,r=m(e,["title","titleId"]);return i.createElement("svg",O({xmlns:"http://www.w3.org/2000/svg",width:"32.000000pt",height:"32.000000pt",viewBox:"0 0 32.000000 32.000000",preserveAspectRatio:"xMidYMid meet",ref:t,"aria-labelledby":s},r),n?i.createElement("title",{id:s},n):null,a||(a=i.createElement("g",{transform:"translate(0.000000,32.000000) scale(0.100000,-0.100000)",fill:"#000000",stroke:"none"})))}var f=i.forwardRef(x),g=(n.p,n(34),function(){return Object(d.jsxs)("div",{className:"header",children:[Object(d.jsx)(l.b,{className:"logo-container",to:"/home",children:Object(d.jsx)(f,{className:"logo"})}),Object(d.jsxs)("div",{className:"options",children:[Object(d.jsx)(l.b,{className:"option",to:"/profile",children:"Profile"}),Object(d.jsx)(l.b,{className:"option",to:"/matches",children:"Find a Penpal!"}),Object(d.jsx)(l.b,{className:"option",to:"/signout",children:"Sign Out"})]})]})}),v=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)(g,{}),Object(d.jsx)("main",{children:Object(d.jsx)("p",{children:"This is a test for now!"})})]})},y=n(9),w=n(12),C=n(13),S=n(16),N=n(14),P=(n(40),function(e){var t=e.handleChange,n=e.label,a=Object(u.a)(e,["handleChange","label"]);return Object(d.jsxs)("div",{className:"group",children:[Object(d.jsx)("input",Object(j.a)({className:"form-input",onChange:t},a)),n?Object(d.jsx)("label",{className:"".concat(a.value.length?"shrink":""," form-input-label"),children:n}):null]})}),k=(n(41),function(e){Object(S.a)(n,e);var t=Object(N.a)(n);function n(e){var a;return Object(w.a)(this,n),(a=t.call(this,e)).handleSubmit=function(e){e.preventDefault(),a.setState({email:"",password:""})},a.handleChange=function(e){var t=e.target,n=t.value,i=t.name;a.setState(Object(y.a)({},i,n))},a.state={email:"",password:""},a}return Object(C.a)(n,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"sign-in",children:[Object(d.jsx)("h2",{children:"Already Have An Account?"}),Object(d.jsx)("span",{children:"Sign in with your email and password"}),Object(d.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(d.jsx)(P,{name:"email",type:"email",handleChange:this.handleChange,value:this.state.email,label:"email",required:!0}),Object(d.jsx)(P,{name:"password",type:"password",handleChange:this.handleChange,value:this.state.password,label:"password",required:!0}),Object(d.jsx)("div",{className:"buttons",children:Object(d.jsx)(b,{type:"submit",children:"Sign In"})})]})]})}}]),n}(s.a.Component)),q=(n(42),function(e){Object(S.a)(n,e);var t=Object(N.a)(n);function n(e){var a;return Object(w.a)(this,n),(a=t.call(this,e)).handleSubmit=function(e){e.preventDefault(),a.setState({email:"",password:"",radio:"",address:""})},a.handleChange=function(e){var t=e.target,n=t.value,i=t.name;a.setState(Object(y.a)({},i,n))},a.state={email:"",password:"",radio:"",address:""},a}return Object(C.a)(n,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"sign-up",children:[Object(d.jsx)("h2",{children:"New to PenPal?"}),Object(d.jsx)("span",{children:"Sign up here!"}),Object(d.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(d.jsx)(P,{name:"email",type:"email",handleChange:this.handleChange,value:this.state.email,label:"Email",required:!0}),Object(d.jsx)(P,{name:"password",type:"password",handleChange:this.handleChange,value:this.state.password,label:"Password",required:!0}),Object(d.jsx)("span",{children:"What is your preferred penpal experience? (You may change this later.)"}),Object(d.jsx)(P,{name:"radio",type:"radio",handleChange:this.handleChange,value:"Online",label:"Online - Email",required:!0}),Object(d.jsx)(P,{name:"radio",type:"radio",handleChange:this.handleChange,value:"Traditional",label:"Traditional - Physical Address",required:!0}),"Traditional"===this.state.radio?Object(d.jsx)(P,{name:"address",type:"text",handleChange:this.handleChange,value:this.state.address,label:"Address",required:!0}):Object(d.jsx)("div",{}),Object(d.jsx)("div",{className:"buttons",children:Object(d.jsx)(b,{type:"submit",children:"Sign Up"})})]})]})}}]),n}(s.a.Component)),A=(n(43),function(){return Object(d.jsxs)("div",{className:"sign-in-and-sign-up",children:[Object(d.jsx)(k,{}),Object(d.jsx)(q,{})]})}),E=(n(44),function(){return Object(d.jsxs)("div",{className:"sign-out",children:[Object(d.jsx)("h2",{children:"Thanks for writing!"}),Object(d.jsx)("h1",{children:"See you next time!"})]})});var I=function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(h,{}),Object(d.jsxs)(o.c,{children:[Object(d.jsx)(o.a,{exact:!0,path:"/",component:p}),Object(d.jsx)(o.a,{exact:!0,path:"/signin",component:A}),Object(d.jsx)(o.a,{exact:!0,path:"/home",component:v}),Object(d.jsx)(o.a,{exact:!0,path:"/signout",component:E})]})]})};c.a.render(Object(d.jsx)(l.a,{children:Object(d.jsx)(I,{})}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.15defa54.chunk.js.map