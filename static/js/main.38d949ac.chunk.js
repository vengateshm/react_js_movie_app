(this["webpackJsonpmovie-app"]=this["webpackJsonpmovie-app"]||[]).push([[0],{32:function(e,n,t){},53:function(e,n,t){"use strict";t.r(n);var i,c,o,a,r,s=t(1),l=t.n(s),d=t(23),j=t.n(d),p=(t(32),t(11)),x=t.n(p),b=t(24),h=t(5),u=t(2),v=t(3),O=t(0),f=v.a.div(i||(i=Object(u.a)(["\n    display: flex;\n    flex-direction: column;\n    padding: 10px;\n    width: 280px;\n    box-shadow: 0 3px 10px 0 #aaa;\n    cursor: pointer;\n"]))),g=v.a.img(c||(c=Object(u.a)(["\n    object-fit: cover;\n    height: 362px;\n"]))),w=v.a.span(o||(o=Object(u.a)(["\n    fomt-size: 18px;\n    font-weight: 600;\n    color: black;\n    margin: 15px 0;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    overflow: hidden;\n"]))),m=v.a.div(a||(a=Object(u.a)(["\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n"]))),y=v.a.span(r||(r=Object(u.a)(["\n    fomt-size: 16px;\n    font-weight: 500;\n    color: black;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    text-transform: capitalize;\n"])));var k,S,M,z,R,T,C,P,D,F,L,I,A,B,E,G=function(e){var n=e.movie,t=n.Title,i=n.Year,c=n.imdbID,o=n.Type,a=n.Poster;return Object(O.jsxs)(f,{onClick:function(){return e.onMovieSelect(c)},children:[Object(O.jsx)(g,{src:a}),Object(O.jsx)(w,{children:t}),Object(O.jsxs)(m,{children:[Object(O.jsxs)(y,{children:["Year: ",i]}),Object(O.jsxs)(y,{children:["Type: ",o]})]})]})},J=t(9),K=t.n(J),Y="6cb5427b",q=v.a.div(k||(k=Object(u.a)(["\n    display: flex;\n    flex-direction: row;\n    padding: 20px 30px;\n    justify-content: center;\n    border-bottom: 1px solid lightgray;\n"]))),H=v.a.img(S||(S=Object(u.a)(["\n    object-fit: cover;\n    height: 352px;\n"]))),N=v.a.span(M||(M=Object(u.a)(["\n    fomt-size: 18px;\n    font-weight: 600;\n    color: black;\n    margin: 15px 0;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    overflow: hidden;\n"]))),Q=v.a.div(z||(z=Object(u.a)(["\n    display: flex;\n    flex-direction: column;\n    margin: 20px;\n"]))),U=v.a.span(R||(R=Object(u.a)(["\n    fomt-size: 16px;\n    font-weight: 500;\n    color: black;\n    overflow: hidden;\n    margin: 4px 0;\n    text-transform: capitalize;\n    text-overflow: ellipsis;\n    & span {\n        opacity: 0.5;\n    }\n"]))),V=v.a.span(T||(T=Object(u.a)(["\n    font-size: 16px;\n    font-weight: 600;\n    color: black;\n    background: lightgray;\n    height: fit-content;\n    padding: 5px 10px;\n    border-radius: 50%;\n    cursor: pointer;\n    opacity: 0.8;\n"]))),W=function(e){var n=e.selectedMovie,t=Object(s.useState)(),i=Object(h.a)(t,2),c=i[0],o=i[1];return Object(s.useEffect)((function(){K.a.get("https://www.omdbapi.com/?i=".concat(n,"&apiKey=").concat(Y)).then((function(e){o(e.data)}))}),[n]),Object(O.jsx)(q,{children:c?Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(H,{src:null===c||void 0===c?void 0:c.Poster}),Object(O.jsxs)(Q,{children:[Object(O.jsxs)(N,{children:["Movie: ",null===c||void 0===c?void 0:c.Title]}),Object(O.jsxs)(U,{children:["IMDB Rating : ",Object(O.jsx)("span",{children:null===c||void 0===c?void 0:c.imdbRating})]}),Object(O.jsxs)(U,{children:["Language : ",Object(O.jsx)("span",{children:null===c||void 0===c?void 0:c.Language})]}),Object(O.jsxs)(U,{children:["Rated : ",Object(O.jsx)("span",{children:null===c||void 0===c?void 0:c.Rated})]}),Object(O.jsxs)(U,{children:["Released : ",Object(O.jsx)("span",{children:null===c||void 0===c?void 0:c.Released})]}),Object(O.jsxs)(U,{children:["Runtime : ",Object(O.jsx)("span",{children:null===c||void 0===c?void 0:c.Runtime})]}),Object(O.jsxs)(U,{children:["Genre : ",Object(O.jsx)("span",{children:null===c||void 0===c?void 0:c.Genre})]}),Object(O.jsxs)(U,{children:["Director : ",Object(O.jsx)("span",{children:null===c||void 0===c?void 0:c.Director})]}),Object(O.jsxs)(U,{children:["Actors : ",Object(O.jsx)("span",{children:null===c||void 0===c?void 0:c.Actors})]}),Object(O.jsxs)(U,{children:["Plot : ",Object(O.jsx)("span",{children:null===c||void 0===c?void 0:c.Plot})]})]}),Object(O.jsx)(V,{onClick:function(){return e.onMovieSelect()},children:"x"})]}):"Loading..."})},X=v.a.div(C||(C=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n"]))),Z=v.a.div(P||(P=Object(u.a)(["\n  display: flex;\n  flex-direction: row;\n  background-color: black;\n  color: white;\n  padding: 10px;\n  font-size: 25px;\n  font-weight: bold;\n  box-shadow: 0 3px 6px 0 #555;\n  justify-content: space-between;\n"]))),$=v.a.div(D||(D=Object(u.a)(["\n  display: flex;\n  flex-directions: row;\n  align-items: center;\n"]))),_=v.a.img(F||(F=Object(u.a)(["\n  width: 48px;\n  height: 48px;\n  margin: 15px;\n"]))),ee=v.a.div(L||(L=Object(u.a)(["\n  display: flex;\n  flex-direction: row;\n  padding: 10px 10px;\n  background-color: white;\n  width:50%;\n  border-radius: 6px;\n  align-items: center;\n"]))),ne=v.a.img(I||(I=Object(u.a)(["\n  width: 32px;\n  height: 32px;\n"]))),te=v.a.input(A||(A=Object(u.a)(["\n  color: black;\n  font-size: 16px;\n  font-weight: bold;\n  border: none;\n  outline: none;\n  margin-left: 15px;\n"]))),ie=v.a.div(B||(B=Object(u.a)(["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  padding: 30px;\n  gap: 24px;\n  justify-content: space-evenly;\n"]))),ce=v.a.img(E||(E=Object(u.a)(["\n  width: 120px;\n  height: 120px;\n  margin: 150px;\n  opacity: 50%;\n"]))),oe=function(){var e=Object(s.useState)(),n=Object(h.a)(e,2),t=n[0],i=n[1],c=Object(s.useState)(),o=Object(h.a)(c,2),a=o[0],r=o[1],l=Object(s.useState)(),d=Object(h.a)(l,2),j=d[0],p=d[1],u=Object(s.useState)(),v=Object(h.a)(u,2),f=v[0],g=v[1],w=function(){var e=Object(b.a)(x.a.mark((function e(n){var t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,K.a.get("https://www.omdbapi.com/?s=".concat(n,"&apiKey=").concat(Y));case 2:t=e.sent,p(t.data.Search);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),m=function(e){g(e)};return Object(O.jsxs)(X,{children:[Object(O.jsxs)(Z,{children:[Object(O.jsxs)($,{children:[Object(O.jsx)(_,{src:"/images/movie-icon.svg"}),"Movies App"]}),Object(O.jsxs)(ee,{children:[Object(O.jsx)(ne,{src:"/images/search-icon.svg"}),Object(O.jsx)(te,{placeholder:"Search Movie",value:t,onChange:function(e){clearTimeout(a),i(e.target.value);var n=setTimeout((function(){w(e.target.value)}),500);r(n)}})]})]}),f&&Object(O.jsx)(W,{selectedMovie:f,onMovieSelect:m}),Object(O.jsx)(ie,{children:(null===j||void 0===j?void 0:j.length)?j.map((function(e,n){return Object(O.jsx)(G,{movie:e,onMovieSelect:m},n)})):Object(O.jsx)(ce,{src:"/images/movie-icon.svg"})})]})},ae=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,54)).then((function(n){var t=n.getCLS,i=n.getFID,c=n.getFCP,o=n.getLCP,a=n.getTTFB;t(e),i(e),c(e),o(e),a(e)}))};j.a.render(Object(O.jsx)(l.a.StrictMode,{children:Object(O.jsx)(oe,{})}),document.getElementById("root")),ae()}},[[53,1,2]]]);
//# sourceMappingURL=main.38d949ac.chunk.js.map