(this["webpackJsonpproject-flashcards"]=this["webpackJsonpproject-flashcards"]||[]).push([[0],{32:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),a=c(18),s=c.n(a),i=c(4),j=c(0);var d=function(){return Object(j.jsx)("header",{className:"jumbotron bg-dark",children:Object(j.jsxs)("div",{className:"container text-white",children:[Object(j.jsx)("h1",{className:"display-4",children:"Flashcard-o-matic"}),Object(j.jsx)("p",{className:"lead",children:"Discover The Flashcard Difference."})]})})},u=c(2);var o=function(){return Object(j.jsx)("div",{children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)(i.c,{children:[Object(j.jsxs)(i.a,{exact:!0,path:"/Project-Qualifed-Flashcards-1",children:[Object(j.jsx)(d,{}),Object(j.jsx)(u.b,{to:"/Project-Qualifed-Flashcards-1/decks/new",children:Object(j.jsx)("button",{className:"bg-dark lead text-white",children:"New Deck"})})]}),Object(j.jsx)(i.a,{path:"/Project-Qualifed-Flashcards-1",children:Object(j.jsx)(d,{})})]})})})};var b=function(){return Object(j.jsxs)("div",{className:"NotFound",children:[Object(j.jsx)("h1",{children:"Not Found"}),Object(j.jsx)(u.b,{to:"/Project-Qualifed-Flashcards-1",children:"Return to Home"})]})},l=c(3),h=c(5),O=c.n(h),f=c(10),x=c(20),p=["cards"],m=Object({NODE_ENV:"production",PUBLIC_URL:"/Project-Qualifed-Flashcards-1",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).API_BASE_URL||"https://joshuasorby.github.io/Project-Qualifed-Flashcards-1/",v=new Headers;function k(e){e.cards;return Object(x.a)(e,p)}function w(e,t,c){return y.apply(this,arguments)}function y(){return(y=Object(f.a)(O.a.mark((function e(t,c,n){var r;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t,c);case 3:if(!((r=e.sent).status<200||r.status>399)){e.next=6;break}throw new Error("".concat(r.status," - ").concat(r.statusText));case 6:if(204!==r.status){e.next=8;break}return e.abrupt("return",null);case 8:return e.next=10,r.json();case 10:return e.abrupt("return",e.sent);case 13:if(e.prev=13,e.t0=e.catch(0),"AbortError"===e.t0.name){e.next=18;break}throw console.error(e.t0.stack),e.t0;case 18:return e.abrupt("return",Promise.resolve(n));case 19:case"end":return e.stop()}}),e,null,[[0,13]])})))).apply(this,arguments)}function g(){return(g=Object(f.a)(O.a.mark((function e(t){var c;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c="".concat(m,"/decks?_embed=cards"),e.next=3,w(c,{signal:t},[]);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function S(){return(S=Object(f.a)(O.a.mark((function e(t,c){var n,r;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(m,"/decks"),r={method:"POST",headers:v,body:JSON.stringify(k(t)),signal:c},e.next=4,w(n,r,{});case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function F(e,t){return N.apply(this,arguments)}function N(){return(N=Object(f.a)(O.a.mark((function e(t,c){var n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(m,"/decks/").concat(t,"?_embed=cards"),e.next=3,w(n,{signal:c},{});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function E(){return(E=Object(f.a)(O.a.mark((function e(t,c){var n,r;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(m,"/decks/").concat(t.id,"?_embed=cards"),r={method:"PUT",headers:v,body:JSON.stringify(k(t)),signal:c},e.next=4,w(n,r,t);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function P(e,t){return Q.apply(this,arguments)}function Q(){return(Q=Object(f.a)(O.a.mark((function e(t,c){var n,r;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(m,"/decks/").concat(t),r={method:"DELETE",signal:c},e.next=4,w(n,r);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function I(){return(I=Object(f.a)(O.a.mark((function e(t,c,n){var r,a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(m,"/cards"),c.deckId=Number(t),a={method:"POST",headers:v,body:JSON.stringify(c),signal:n},e.next=5,w(r,a,c);case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function C(){return(C=Object(f.a)(O.a.mark((function e(t,c){var n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(m,"/cards/").concat(t),e.next=3,w(n,{signal:c},{});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function D(){return(D=Object(f.a)(O.a.mark((function e(t,c){var n,r;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(m,"/cards/").concat(t.id),r={method:"PUT",headers:v,body:JSON.stringify(t)},e.next=4,w(n,r,t);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}v.append("Content-Type","application/json");var A=function(){var e=Object(i.f)(),t=Object(n.useState)(""),c=Object(l.a)(t,2),r=c[0],a=c[1],s=Object(n.useState)(""),d=Object(l.a)(s,2),b=d[0],h=d[1];return Object(j.jsxs)("div",{children:[Object(j.jsx)(o,{}),Object(j.jsxs)("nav",{children:[Object(j.jsx)(u.b,{to:"/Project-Qualifed-Flashcards-1",children:"Home"})," / ",Object(j.jsx)("p",{children:"Create Deck"})]}),Object(j.jsxs)("form",{onSubmit:function(t){t.preventDefault(),function(e,t){return S.apply(this,arguments)}({name:r,description:b}).then(e.push("/Project-Qualifed-Flashcards-1"))},children:[Object(j.jsxs)("div",{className:"d-flex flex-column m-3",children:[Object(j.jsx)("label",{htmlFor:"name",children:Object(j.jsx)("input",{className:"d-flex w-75",type:"text",id:"name",name:"name",onChange:function(e){return a(e.target.value)},value:r})}),Object(j.jsx)("label",{htmlFor:"desc"}),Object(j.jsx)("textarea",{className:"d-flex w-75",id:"desc",name:"desc",onChange:function(e){return h(e.target.value)},value:b})]}),Object(j.jsx)("button",{type:"submit",children:"Submit"}),Object(j.jsx)(u.b,{to:"/Project-Qualifed-Flashcards-1",children:Object(j.jsx)("button",{type:"button",children:"cancel"})})]})]})};var T=function(e){return e.decks.map((function(e){return Object(j.jsx)("li",{children:Object(j.jsxs)("div",{className:"border p-3 m-3",children:[Object(j.jsxs)("div",{className:"w-100 p-4 d-flex flex-row justify-content-between",children:[Object(j.jsx)("h3",{children:e.name}),Object(j.jsxs)("p",{children:[e.cards.length," cards"]})]}),Object(j.jsx)("p",{children:e.description}),Object(j.jsxs)("div",{name:"buttons",className:"d-flex-row",children:[Object(j.jsx)(u.b,{to:"/Project-Qualifed-Flashcards-1/decks/".concat(e.id),children:Object(j.jsx)("button",{children:"view"})}),Object(j.jsx)(u.b,{to:"/Project-Qualifed-Flashcards-1/decks/".concat(e.id,"/study"),children:Object(j.jsx)("button",{children:"study"})}),Object(j.jsx)("button",{onClick:function(){window.confirm("Are you sure you want to delete this deck?")&&P(e.id).then(window.location.reload())},children:"Delete"})]})]})},e.id)}))};var _=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),c=t[0],r=t[1];return Object(n.useEffect)((function(){(function(e){return g.apply(this,arguments)})().then(r)}),[]),Object(j.jsx)("div",{className:"d-flex justify-content-center",children:Object(j.jsx)("ul",{children:Object(j.jsx)(T,{decks:c,deckList:""})})})};var H=function(e){var t=e.cardList,c=Object(i.h)().url;return t.map((function(e){return Object(j.jsxs)("li",{className:"border",children:[Object(j.jsxs)("div",{className:"row p-3",children:[Object(j.jsx)("p",{className:"col",children:e.front}),Object(j.jsx)("p",{className:"col",children:e.back})]}),Object(j.jsxs)(u.b,{to:"".concat(c,"/cards/").concat(e.id,"/edit"),children:[" ",Object(j.jsx)("button",{children:"Edit"})," "]}),Object(j.jsx)("button",{children:"Delete"})]},e.id)}))};var B=function(){var e=Object(n.useState)({}),t=Object(l.a)(e,2),c=t[0],r=t[1],a=Object(n.useState)([]),s=Object(l.a)(a,2),d=s[0],o=s[1],b=Object(i.g)().deckId;return Object(n.useEffect)((function(){try{F(b).then((function(e){return r(e)}))}catch(e){if("AbortError"!==e)throw e}}),[b]),Object(n.useEffect)((function(){try{F(b).then((function(e){return o(e.cards)}))}catch(e){if("AbortError"!==e)throw e}}),[b]),Object(j.jsxs)("div",{children:[Object(j.jsxs)("nav",{children:[Object(j.jsx)(u.b,{to:"/Project-Qualifed-Flashcards-1",children:"Home"})," / ",Object(j.jsx)("p",{children:c.name})," "]}),Object(j.jsx)("ul",{children:Object(j.jsx)(H,{cardList:d})})]})};var L=function(e){var t=e.deckId,c=Object(n.useState)([]),r=Object(l.a)(c,2),a=r[0],s=r[1];return Object(n.useEffect)((function(){F(t).then(s)}),[t]),Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{children:a.name}),Object(j.jsx)("p",{children:a.description})]})};var R=function(e){var t=e.deckId,c=Object(i.h)().url,n=Object(i.f)();return Object(j.jsxs)("div",{className:"flex-column d-flex justify-content-center",children:[Object(j.jsx)(L,{deckId:t}),Object(j.jsxs)("div",{className:"justify-content-center",children:[Object(j.jsxs)(u.b,{to:"".concat(c,"/edit"),children:[" ",Object(j.jsx)("button",{children:"edit"})," "]}),Object(j.jsx)("button",{children:"study"}),Object(j.jsxs)(u.b,{to:"".concat(c,"/cards/new"),children:[" ",Object(j.jsx)("button",{children:"Add cards"})," "]}),Object(j.jsx)("button",{onClick:function(){window.confirm("Are you sure you want to delete this deck?")&&(P(t),n.push("/Project-Qualifed-Flashcards-1"))},children:"delete"}),Object(j.jsx)(B,{deckId:t})]})]})};var J=function(){var e=Object(i.g)().deckId;return Object(j.jsxs)("div",{children:[Object(j.jsx)(o,{}),Object(j.jsx)(R,{deckId:e})]})};var U=function(e){var t=e.handleSubmit,c=e.handleFront,n=e.handleBack,r=e.front,a=e.back,s=Object(i.f)();return Object(j.jsxs)("form",{onSubmit:t,children:[Object(j.jsxs)("div",{className:"d-flex flex-column m-3",children:[Object(j.jsx)("label",{htmlFor:"front",children:Object(j.jsx)("textarea",{className:"d-flex w-75",id:"front",name:"front",onChange:c,value:r})}),Object(j.jsx)("label",{htmlFor:"back"}),Object(j.jsx)("textarea",{className:"d-flex w-75",id:"back",name:"back",onChange:n,value:a})]}),Object(j.jsx)("button",{type:"submit",children:"Save"}),Object(j.jsx)("button",{type:"button",onClick:s.goBack,children:"cancel"})]})};var K=function(){var e=Object(i.f)(),t=Object(n.useState)([]),c=Object(l.a)(t,2),r=c[0],a=c[1],s=Object(i.g)().deckId,o=Object(n.useState)(""),b=Object(l.a)(o,2),h=b[0],O=b[1],f=Object(n.useState)(""),x=Object(l.a)(f,2),p=x[0],m=x[1];return Object(n.useEffect)((function(){try{F(s).then((function(e){return a(e)}))}catch(e){if("AbortError"!==e)throw e}}),[s]),Object(j.jsxs)("div",{children:[Object(j.jsx)(d,{}),Object(j.jsxs)("nav",{children:[Object(j.jsx)(u.b,{to:"/Project-Qualifed-Flashcards-1",children:"Home"})," / ",Object(j.jsx)(u.b,{to:"/Project-Qualifed-Flashcards-1/decks/".concat(r.id),children:r.name})," / ",Object(j.jsx)("p",{children:"Add Card"})]}),Object(j.jsx)(U,{handleBack:function(e){return m(e.target.value)},handleFront:function(e){return O(e.target.value)},handleSubmit:function(t){t.preventDefault(),function(e,t,c){I.apply(this,arguments)}(s,{front:h,back:p,deckId:s}),e.push("/Project-Qualifed-Flashcards-1")}})]})};var W=function(){var e=Object(i.f)(),t=Object(i.g)().deckId,c=Object(n.useState)({id:"",name:"",description:"",cards:""}),r=Object(l.a)(c,2),a=r[0],s=r[1];Object(n.useEffect)((function(){F(t).then(s)}),[t]);var d=Object(n.useState)(""),b=Object(l.a)(d,2),h=b[0],O=b[1],f=Object(n.useState)(""),x=Object(l.a)(f,2),p=x[0],m=x[1];return Object(n.useEffect)((function(){O(a.name)}),[a]),Object(n.useEffect)((function(){m(a.description)}),[a]),Object(j.jsxs)("div",{children:[Object(j.jsx)(o,{}),Object(j.jsxs)("nav",{children:[Object(j.jsx)(u.b,{to:"/Project-Qualifed-Flashcards-1",children:"Home"})," / ",Object(j.jsxs)(u.b,{to:"./",children:[" ",Object(j.jsx)("p",{children:a.name})]}),Object(j.jsx)("p",{children:"Edit Deck"})]}),Object(j.jsxs)("form",{onSubmit:function(c){c.preventDefault(),console.log("1"),function(e,t){E.apply(this,arguments)}({name:h,description:p,id:t}),e.goBack()},children:[Object(j.jsxs)("div",{className:"d-flex flex-column m-3",children:[Object(j.jsx)("label",{htmlFor:"name",children:Object(j.jsx)("input",{className:"d-flex w-75",type:"text",id:"name",name:"name",onChange:function(e){return O(e.target.value)},value:h})}),Object(j.jsx)("label",{htmlFor:"desc"}),Object(j.jsx)("textarea",{className:"d-flex w-75",id:"desc",name:"desc",onChange:function(e){return m(e.target.value)},value:p})]}),Object(j.jsx)("button",{type:"submit",children:"Submit"}),Object(j.jsx)(u.b,{to:"/Project-Qualifed-Flashcards-1",children:Object(j.jsx)("button",{type:"button",children:"cancel"})})]})]})};var M=function(){var e=Object(i.g)().deckId,t=Object(i.f)(),c=Object(n.useState)([]),r=Object(l.a)(c,2),a=r[0],s=r[1],d=Object(i.g)().cardId,u=Object(n.useState)(""),o=Object(l.a)(u,2),b=o[0],h=o[1],O=Object(n.useState)(""),f=Object(l.a)(O,2),x=f[0],p=f[1];return Object(n.useEffect)((function(){try{(function(e,t){return C.apply(this,arguments)})(d).then((function(e){return s(e)}))}catch(e){if("AbortError"!==e)throw e}}),[d]),Object(n.useEffect)((function(){h(a.front)}),[a]),Object(n.useEffect)((function(){p(a.back)}),[a]),Object(j.jsx)(U,{handleBack:function(e){return p(e.target.value)},handleFront:function(e){return h(e.target.value)},handleSubmit:function(c){c.preventDefault(),function(e,t){D.apply(this,arguments)}({front:b,back:x,id:d,deckId:Number(e)}),t.push("../")},front:b,back:x})};var V=function(){var e=Object(i.g)().deckId,t=Object(n.useState)([]),c=Object(l.a)(t,2),r=c[0],a=c[1],s=Object(n.useState)(),u=Object(l.a)(s,2),o=u[0],b=u[1],h=Object(n.useState)(),O=Object(l.a)(h,2),f=O[0],x=O[1],p=Object(n.useState)(0),m=Object(l.a)(p,2),v=m[0],k=m[1],w=Object(n.useState)("front"),y=Object(l.a)(w,2),g=y[0],S=y[1],N=Object(i.f)();return Object(n.useEffect)((function(){try{F(e).then((function(e){return b(e.name)}))}catch(t){if("AbortError"!==t)throw t}}),[e]),Object(n.useEffect)((function(){F(e).then((function(e){return a(e.cards)}))}),[e]),Object(n.useEffect)((function(){try{F(e).then((function(e){return x(e.description)}))}catch(t){if("AbortError"!==t)throw t}}),[e]),r.length<2?Object(j.jsxs)("div",{children:[Object(j.jsx)(d,{}),Object(j.jsx)("h1",{children:o}),Object(j.jsx)("p",{children:f}),Object(j.jsx)("h3",{children:"Not Enough Cards"})]}):Object(j.jsxs)("div",{children:[Object(j.jsx)(d,{}),Object(j.jsx)("h1",{children:o}),Object(j.jsx)("p",{children:f}),Object(j.jsxs)("p",{children:["card ",v+1," of ",r.length]}),Object(j.jsx)("p",{children:r[v][g]}),Object(j.jsx)("button",{onClick:function(){return S("back")},children:"Flip"}),"back"===g&&v<r.length-1?Object(j.jsx)("button",{onClick:function(){S("front"),k(v+1)},children:"Next"}):"back"===g?Object(j.jsx)("button",{onClick:function(){window.confirm('Restart cards?\n\nClicking "cancel" will return you to the homepage')?window.location.reload():N.push("/Project-Qualifed-Flashcards-1")},children:"Next"}):void 0]})};var q=function(){return Object(j.jsx)("div",{className:"app-routes",children:Object(j.jsxs)(i.c,{children:[Object(j.jsxs)(i.a,{exact:!0,path:"/Project-Qualifed-Flashcards-1",children:[Object(j.jsx)(o,{}),Object(j.jsx)(_,{})]}),Object(j.jsx)(i.a,{path:"/Project-Qualifed-Flashcards-1/decks/new",children:Object(j.jsx)(A,{})}),Object(j.jsx)(i.a,{path:"/Project-Qualifed-Flashcards-1/decks/:deckId/cards/new",children:Object(j.jsx)(K,{})}),Object(j.jsx)(i.a,{exact:!0,path:"/Project-Qualifed-Flashcards-1/decks/:deckId",children:Object(j.jsx)(J,{})}),Object(j.jsx)(i.a,{path:"/Project-Qualifed-Flashcards-1/decks/:deckId/edit",children:Object(j.jsx)(W,{})}),Object(j.jsx)(i.a,{path:"/Project-Qualifed-Flashcards-1/decks/:deckId/study",children:Object(j.jsx)(V,{})}),Object(j.jsxs)(i.a,{path:"/Project-Qualifed-Flashcards-1/decks/:deckId/cards/:cardId/edit",children:[Object(j.jsx)(o,{}),Object(j.jsx)(M,{})]}),Object(j.jsx)(i.a,{children:Object(j.jsx)(b,{})})]})})};s.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(u.a,{children:Object(j.jsx)(q,{})})}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.f07e4bb2.chunk.js.map