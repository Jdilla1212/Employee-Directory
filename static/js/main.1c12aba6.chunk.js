(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{20:function(e,t,c){},21:function(e,t,c){},40:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c(2),s=c.n(r),i=c(13),a=c.n(i),j=(c(20),c(4));c(21);var l=function(e){var t=e.children;return Object(n.jsx)("div",{className:"container",children:t})};var o=function(){return Object(n.jsxs)("nav",{className:"navbar",children:[Object(n.jsx)("h2",{children:"Employee Directory"}),Object(n.jsx)("h4",{children:"Search and sort employees by name!"})]})};var d=function(e){return Object(n.jsxs)("table",{className:"table",style:{margin:"auto"},children:[Object(n.jsx)("thead",{children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{scope:"col",children:"Profile Picture"}),Object(n.jsx)("th",{scope:"col",children:"Name"}),Object(n.jsx)("th",{scope:"col",children:"Email"}),Object(n.jsx)("th",{scope:"col",children:"Phone Number"})]})}),Object(n.jsx)("tbody",{children:e.children})]})},h=c(14),b=c.n(h),u={getEmployees:function(){return b.a.get("https://randomuser.me/api/")}};var O=function(e){return Object(n.jsx)(n.Fragment,{children:e.employees.length>0?e.employees.map((function(e){var t=e.name,c=e.email,r=e.phone,s=e.picture;return Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:Object(n.jsx)("img",{alt:void 0!==t?t.first:"",src:void 0!==s?s.large:""})}),Object(n.jsx)("td",{children:void 0!==t?t.first:""}),Object(n.jsx)("td",{children:c}),Object(n.jsx)("td",{children:r})]})})):Object(n.jsx)("tr",{})})};var m=function(){var e=Object(r.useState)([{}]),t=Object(j.a)(e,2),c=t[0],s=t[1],i=Object(r.useState)(""),a=Object(j.a)(i,2),h=a[0],b=a[1];return Object(r.useEffect)((function(){u.getEmployees().then((function(e){console.log(e.data),s(e.data.results)}))}),[]),Object(n.jsx)("div",{className:"App",children:Object(n.jsxs)(l,{children:[Object(n.jsx)(o,{}),Object(n.jsx)("input",{placeholder:"Search by employee name",value:h,onChange:function(e){return b(e.target.value)}}),Object(n.jsx)(d,{children:Object(n.jsx)(O,{employees:c})})]})})},p=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,41)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),n(e),r(e),s(e),i(e)}))};a.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(m,{})}),document.getElementById("root")),p()}},[[40,1,2]]]);
//# sourceMappingURL=main.1c12aba6.chunk.js.map