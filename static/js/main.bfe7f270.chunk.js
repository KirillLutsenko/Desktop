(this.webpackJsonpDesktop=this.webpackJsonpDesktop||[]).push([[0],[,,,,,,,,,,,,function(t,n,e){},function(t,n,e){},,function(t,n,e){},function(t,n,e){},function(t,n,e){"use strict";e.r(n);var s=e(1),o=e.n(s),c=e(7),r=e.n(c),i=e(4),u=function(){return fetch("http://fs.mh.net.ua/ajax/lsjson.php?dir=global/video&idu=1").then((function(t){if(!t.ok)throw new Error("".concat(t.status," - ").concat(t.statusText));return t.json()})).then((function(t){return t}))},a=(e(12),e(13),e(0)),b=function(t){var n=t.icons;return Object(a.jsx)("div",{className:"desktop__icons icons",children:n.map((function(t){return Object(a.jsxs)("div",{className:"icons_icon icon",children:[Object(a.jsx)("div",{className:"icon__logo logo"}),Object(a.jsx)("span",{className:"icon__text",children:t.name})]},t.fid)}))})},j=e(5),d=(e(15),function(t){var n=t.icons,e=t.setIcons,o=Object(s.useState)(!1),c=Object(i.a)(o,2),r=c[0],b=c[1];return Object(a.jsxs)("div",{className:"desktop__sort-menu sort-menu",children:[Object(a.jsxs)("div",{className:"desktop__sort-buttons sort-buttons",children:[Object(a.jsx)("button",{className:"sort-buttons__button button",type:"button",onClick:function(){var t=n.sort((function(t,n){return t.name>n.name?1:-1}));e(Object(j.a)(t)),b(!0)},children:"Sort by name"}),Object(a.jsx)("button",{className:"sort-buttons__button button",type:"button",onClick:function(){var t=n.sort((function(t,n){return t.size-n.size}));e(Object(j.a)(t)),b(!0)},children:"Sort by size"}),Object(a.jsx)("button",{className:"sort-buttons__button button",type:"button",onClick:function(){var t=n.sort((function(t,n){return t.date-n.date}));e(Object(j.a)(t)),b(!0)},children:"Sort by date"})]}),r?Object(a.jsx)("button",{className:"sort-menu__reset-button button",type:"button",onClick:function(){u().then((function(t){return e(t)})),b(!1)},children:"Reset"}):Object(a.jsx)("div",{className:"sort-buttons__no-button"})]})}),l=(e(16),function(t){var n=t.icons,e=t.setIcons;return Object(a.jsxs)("div",{className:"app__desktop desktop",children:[Object(a.jsx)(b,{icons:n}),Object(a.jsx)(d,{icons:n,setIcons:e})]})});var f=function(){var t=Object(s.useState)([]),n=Object(i.a)(t,2),e=n[0],o=n[1];return Object(s.useEffect)((function(){u().then((function(t){return o(t)}))}),[]),Object(a.jsx)("div",{className:"app",children:e.length?Object(a.jsx)(l,{icons:e,setIcons:o}):Object(a.jsx)("span",{children:"Loading..."})})};r.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(f,{})}),document.getElementById("root"))}],[[17,1,2]]]);
//# sourceMappingURL=main.bfe7f270.chunk.js.map