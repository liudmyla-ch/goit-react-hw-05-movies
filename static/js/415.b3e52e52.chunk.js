"use strict";(self.webpackChunknew=self.webpackChunknew||[]).push([[415],{415:function(e,n,t){t.r(n);var r=t(439),i=t(791),c=t(689),a=t(87),s=t(184);n.default=function(){var e=(0,i.useState)([]),n=(0,r.Z)(e,2),t=n[0],u=n[1],f=(0,c.TH)();return(0,i.useEffect)((function(){fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=730d0afac1800da4f45c404259e14f12").then((function(e){return e.json()})).then((function(e){return u(e.results)}))}),[]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h1",{children:"Trending today"}),(0,s.jsx)("ul",{children:t.map((function(e){var n=e.id,t=e.title,r=e.name;return(0,s.jsx)("li",{children:(0,s.jsx)(a.rU,{to:"/movies/".concat(n),state:{from:f},children:t||r})},n)}))})]})}}}]);
//# sourceMappingURL=415.b3e52e52.chunk.js.map