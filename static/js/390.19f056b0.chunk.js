"use strict";(self.webpackChunknew=self.webpackChunknew||[]).push([[390],{390:function(e,t,n){n.r(t);var r=n(439),i=n(689),c=n(791),a=n(184);t.default=function(){var e=(0,i.UO)().movieId,t=(0,c.useState)([]),n=(0,r.Z)(t,2),s=n[0],o=n[1];return(0,c.useEffect)((function(){fetch("https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=730d0afac1800da4f45c404259e14f12&language=en-US")).then((function(e){return e.json().then((function(e){o(e.cast)}))}))}),[e]),(0,a.jsxs)(a.Fragment,{children:[" ",0===s.length&&(0,a.jsx)("p",{children:"There is nothing to view"}),s&&(0,a.jsx)("ul",{children:s.map((function(e){var t=e.character,n=e.name,r=e.profile_path,i=e.id;return(0,a.jsxs)("li",{children:[r?(0,a.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(r),alt:n,width:"200px"}):(0,a.jsx)("img",{src:"https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg?w=2000",alt:"404",width:"200px"}),(0,a.jsx)("p",{children:n}),(0,a.jsxs)("p",{children:["Character: ",t]})]},i)}))})]})}}}]);
//# sourceMappingURL=390.19f056b0.chunk.js.map