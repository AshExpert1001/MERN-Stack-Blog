(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{12:function(e,t,a){e.exports=a.p+"static/media/loading.209c657f.gif"},29:function(e,t,a){e.exports=a(58)},34:function(e,t,a){},58:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(26),l=a.n(c),o=a(5),m=(a(34),a(1)),s=a(9),i=a(7),u=a.n(i);a(52);function d(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark"},r.a.createElement("div",{className:"container"},r.a.createElement(o.b,{className:"navbar-brand",to:"/"},"DEV-BLOG"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},r.a.createElement("ul",{className:"navbar-nav ml-auto"},r.a.createElement("li",{className:"nav-item active"},r.a.createElement(o.b,{className:"nav-link",to:"/"},"Home ",r.a.createElement("span",{className:"sr-only"},"(current)"))),r.a.createElement("li",{className:"nav-item"},r.a.createElement(o.b,{className:"nav-link",to:"add-article"},"Add Article"))))))}function p(){return r.a.createElement("div",null,r.a.createElement("footer",{className:"page-footer bg-dark text-white"},r.a.createElement("div",{className:"footer-copyright text-center py-3"},"\xa9 2020 DEV-BLOG. All rights reserved. Design & Developed by",r.a.createElement("a",{href:"http://ashexpert.cf/",className:"text-light"}," Ash Expert."))))}var b=a(12),E=a.n(b),f=function(e){var t=e.posts,a=Object(n.useState)([]),c=Object(m.a)(a,2),l=c[0],s=c[1],i=Object(n.useState)(""),d=Object(m.a)(i,2),p=d[0],b=d[1],f=function(e){u.a.delete("/articles/".concat(e)).then((function(e){return b(e.data)})).catch((function(e){return console.log(e)})),s(l.filter((function(t){return t._id!==e})))};return r.a.createElement("div",{className:"container my-3"},r.a.createElement("p",{className:"text-success"},p),t.length?t.map((function(e,t){return r.a.createElement("div",{className:"card my-2",key:t},r.a.createElement("div",{className:"card-body"},r.a.createElement(o.b,{to:{pathname:"/article/".concat(e._id)}},r.a.createElement("h5",{className:"card-title text-black"},e.title)),r.a.createElement("h6",{className:"card-subtitle mb-2 text-muted"},"Author: ",e.authorname),r.a.createElement("p",{className:"card-text"},e.article),r.a.createElement(o.b,{to:"/update/".concat(e._id),className:"btn btn-outline-success mr-2"},"Edit Article"),r.a.createElement("button",{onClick:function(){return f(e._id)},className:"btn btn-outline-danger"},"Delete Article")))})):r.a.createElement("div",{className:"text-center my-4"},r.a.createElement("img",{src:E.a,alt:"Loading...",style:{width:"80px"}})))},h=function(){var e=Object(n.useState)(""),t=Object(m.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(""),o=Object(m.a)(l,2),s=o[0],i=o[1],d=Object(n.useState)(""),p=Object(m.a)(d,2),b=p[0],E=p[1],f=Object(n.useState)(""),h=Object(m.a)(f,2),v=h[0],g=h[1];return r.a.createElement("div",{className:"container my-4"},r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t={title:a,article:s,authorname:b};u.a.post("articles/add",t).then((function(e){return g(e.data)})).catch((function(e){console.log(e)})),c(""),i(""),E("")},encType:"multipart/from-data",style:{width:"500px",margin:"auto auto"}},r.a.createElement("h1",{className:"text-success"},"Add Article"),r.a.createElement("p",{className:"text-success"},v),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"exampleFormControlInput1"},"Author Name"),r.a.createElement("input",{type:"text",value:b,onChange:function(e){return E(e.target.value)},className:"form-control",placeholder:"Author Name"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"exampleFormControlInput1"},"Article Title"),r.a.createElement("input",{type:"text",value:a,onChange:function(e){return c(e.target.value)},className:"form-control",placeholder:"Article Title"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"exampleFormControlTextarea1"},"Article Content"),r.a.createElement("textarea",{className:"form-control",value:s,onChange:function(e){return i(e.target.value)},rows:"7"})),r.a.createElement("button",{type:"submit",className:"btn btn-outline-success"},"Add Article")))},v=function(e){var t=Object(n.useState)(""),a=Object(m.a)(t,2),c=a[0],l=a[1],s=Object(n.useState)(""),i=Object(m.a)(s,2),d=i[0],p=i[1],b=Object(n.useState)(""),f=Object(m.a)(b,2),h=f[0],v=f[1];return Object(n.useEffect)((function(){u.a.get("/articles/".concat(e.match.params.id)).then((function(e){return[l(e.data.title),p(e.data.article),v(e.data.authorname)]})).catch((function(e){return console.log(e)}))}),[e]),r.a.createElement("div",{className:"container"},c&&d&&h?r.a.createElement("div",{className:"card my-2"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},c),r.a.createElement("h6",{className:"card-subtitle mb-2 text-muted"},"Author: ",h),r.a.createElement("p",{className:"card-text"},d),r.a.createElement(o.b,{to:"/",className:"btn btn-warning"},"Back To Home"))):r.a.createElement("div",{className:"text-center my-4"},r.a.createElement("img",{src:E.a,alt:"Loading...",style:{width:"80px"}})))},g=function(e){var t=Object(n.useState)(""),a=Object(m.a)(t,2),c=a[0],l=a[1],o=Object(n.useState)(""),s=Object(m.a)(o,2),i=s[0],d=s[1],p=Object(n.useState)(""),b=Object(m.a)(p,2),E=b[0],f=b[1],h=Object(n.useState)(""),v=Object(m.a)(h,2),g=v[0],N=v[1];return Object(n.useEffect)((function(){u.a.get("/articles/".concat(e.match.params.id)).then((function(e){return[l(e.data.title),d(e.data.article),f(e.data.authorname)]})).catch((function(e){return console.log(e)}))}),[e]),r.a.createElement("div",{className:"container my-4"},r.a.createElement("form",{onSubmit:function(t){t.preventDefault();var a={title:c,article:i,authorname:E};u.a.put("/articles/update/".concat(e.match.params.id),a).then((function(e){return N(e.data)})).catch((function(e){console.log(e)})),l(""),d(""),f("")},encType:"multipart/from-data",style:{width:"500px",margin:"auto auto"}},r.a.createElement("h1",{className:"text-primary"},"Update Article"),r.a.createElement("p",{className:"text-success"},g),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"exampleFormControlInput1"},"Author Name"),r.a.createElement("input",{type:"text",value:E,onChange:function(e){return f(e.target.value)},className:"form-control",placeholder:"Author Name"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"exampleFormControlInput1"},"Article Title"),r.a.createElement("input",{type:"text",value:c,onChange:function(e){return l(e.target.value)},className:"form-control",placeholder:"Article Title"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"exampleFormControlTextarea1"},"Article Content"),r.a.createElement("textarea",{className:"form-control",value:i,onChange:function(e){return d(e.target.value)},rows:"7"})),r.a.createElement("button",{type:"submit",className:"btn btn-outline-primary"},"Edit Article")))};var N=function(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){u.a.get("/articles").then((function(e){return c(e.data)})).catch((function(e){return console.log(e)}))}),[]),r.a.createElement("div",{className:""},r.a.createElement(d,null),r.a.createElement(s.a,{exact:!0,path:"/",render:function(){return r.a.createElement(f,{posts:a})}}),r.a.createElement(s.a,{path:"/article/:id",render:function(e){return r.a.createElement(v,Object.assign({},e,{posts:a}))}}),r.a.createElement(s.a,{path:"/update/:id",render:function(e){return r.a.createElement(g,Object.assign({},e,{posts:a}))}}),r.a.createElement(s.a,{path:"/add-article",component:h}),r.a.createElement(p,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(o.a,null,r.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[29,1,2]]]);
//# sourceMappingURL=main.0feb0635.chunk.js.map