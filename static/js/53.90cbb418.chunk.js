"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[53],{53:function(e,t,r){r.r(t),r.d(t,{default:function(){return m}});var n,i,o,s=r(439),c=r(87),a=r(689),l=r(791),d=r(168),h=r(444),p=h.ZP.div(n||(n=(0,d.Z)(["\n  display: flex;\n  margin-top:15px;\n  border-bottom:2px solid gray\n"]))),x=h.ZP.img(i||(i=(0,d.Z)(["\nmargin-right:15px"]))),u=h.ZP.div(o||(o=(0,d.Z)(["\n  display: block;\n  margin-top:15px;\n  border-bottom:2px solid gray\n"]))),j=r(184),m=function(){var e,t,r=(0,a.UO)().movieId,n=(0,l.useState)(null),i=(0,s.Z)(n,2),o=i[0],d=i[1],h=o||[],m=h.title,v=h.name,f=h.release_date,g=h.vote_average,w=h.overview,b=h.poster_path,_=h.genres,k=(0,a.TH)();return(0,l.useEffect)((function(){fetch("https://api.themoviedb.org/3/movie/".concat(r,"?api_key=730d0afac1800da4f45c404259e14f12&language=en-US")).then((function(e){if(!e.ok)throw d("badRequest"),new Error(e.status);return e.json()})).then((function(e){d(e)}))}),[r]),(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(c.rU,{to:null!==(e=null===(t=k.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/",children:(0,j.jsx)("button",{children:"Go back"})}),"badRequest"===o&&(0,j.jsx)(x,{src:"https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg?w=2000",alt:"404",width:"300px"}),o&&"badRequest"!==o&&(0,j.jsxs)(j.Fragment,{children:[(0,j.jsxs)(p,{children:[b?(0,j.jsx)(x,{src:"https://image.tmdb.org/t/p/w500/".concat(b),alt:v||m,width:"300px"}):(0,j.jsx)(x,{src:"https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg?w=2000",alt:"404",width:"300px"}),(0,j.jsxs)("div",{children:[(0,j.jsxs)("h1",{children:[m||v," (",new Date(f).getFullYear(),")"]}),(0,j.jsxs)("p",{children:["Rating: ",g]}),(0,j.jsx)("h2",{children:"Overview "}),(0,j.jsx)("p",{children:w}),(0,j.jsx)("h3",{children:"Genres"}),(0,j.jsx)("p",{children:_.map((function(e){return e.name})).join(", ")})]})]}),(0,j.jsxs)(u,{children:[(0,j.jsx)("p",{children:"Additional Information"}),(0,j.jsxs)("ul",{children:[(0,j.jsx)("li",{children:(0,j.jsx)(c.rU,{to:"/movies/".concat(r,"/cast"),children:"Cast"})}),(0,j.jsx)("li",{children:(0,j.jsx)(c.rU,{to:"/movies/".concat(r,"/reviews"),children:"Reviews"})})]})]}),(0,j.jsx)(a.j3,{})]})]})}}}]);
//# sourceMappingURL=53.90cbb418.chunk.js.map