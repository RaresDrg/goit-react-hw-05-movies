"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[434],{959:function(e,n,r){r.d(n,{Z:function(){return i}});var t="ErrorAlert_Error__rwsaJ",a=r(184),i=function(e){var n=e.error;return(0,a.jsx)("p",{className:t,children:n})}},786:function(e,n,r){r.d(n,{Z:function(){return s}});var t=r(154),a="Loader_loader__WEzse",i=r(184),s=function(){return(0,i.jsx)(t.g4,{visible:!0,height:"80",width:"80",color:"#4fa94d",radius:"9",ariaLabel:"three-dots-loading",wrapperClass:a})}},434:function(e,n,r){r.r(n),r.d(n,{default:function(){return L}});var t=r(861),a=r(439),i=r(757),s=r.n(i),c=r(791),o=r(689),u=r(549),d=r(802),l=r(330),v=r(87),p="BackLink_backLink__FDlif",h=r(184),f=function(){var e,n,r=null!==(e=null===(n=(0,o.TH)().state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/movies";return(0,h.jsx)("div",{className:p,children:(0,h.jsxs)(v.rU,{to:r,children:[(0,h.jsx)(l.PjY,{}),(0,h.jsx)("span",{children:"Go back"})]})})},m="MovieCard_movieCard__K6i8b",x="MovieCard_movieimage__zaSk5",_="MovieCard_movieTitle__TaQF9",j="MovieCard_release_date__KfalS",k="MovieCard_genres__f5NlX",g="MovieCard_runtime__Z1peK",w="MovieCard_overview__paz5X",Z=function(e){var n=e.movieDetails,r=n.title,t=n.overview,a=n.genres,i=n.poster_path,s=n.release_date,c=i?"https://image.tmdb.org/t/p/w342".concat(i):"https://media.istockphoto.com/vectors/no-image-available-icon-vector-id1216251206?k=20&m=1216251206&s=170667a&w=0&h=A72dFkHkDdSfmT6iWl6eMN9t_JZmqGeMoAycP-LMAw4=";return(0,h.jsxs)("div",{className:m,children:[(0,h.jsx)("div",{className:x,children:(0,h.jsx)("img",{src:c,alt:"movies poster"})}),(0,h.jsxs)("div",{children:[(0,h.jsx)("h1",{className:_,children:r}),(0,h.jsxs)("div",{className:j,children:[(0,h.jsx)("p",{children:"Release Year: "}),(0,h.jsx)("p",{children:new Date(s).getFullYear()})]}),(0,h.jsxs)("div",{className:k,children:[(0,h.jsx)("p",{children:"Genres: "}),(0,h.jsx)("p",{children:a.map((function(e){return e.name})).join(", ")})]}),(0,h.jsxs)("div",{className:g,children:[(0,h.jsx)("p",{children:"Runtime: "}),(0,h.jsxs)("p",{children:[n.runtime," minutes"]})]}),(0,h.jsxs)("div",{className:w,children:[(0,h.jsx)("p",{children:"Overview"}),(0,h.jsx)("p",{children:t})]})]})]})},b=r(959),M=r(786),y="MovieAdditionalInfo_additional__UhZVq",N="MovieAdditionalInfo_navLink__5kGUM",C="MovieAdditionalInfo_navLinkActive__ieXNf",A=function(){return(0,h.jsxs)("section",{className:"container ".concat(y),children:[(0,h.jsx)("h2",{children:"Additional information"}),(0,h.jsxs)("ul",{children:[(0,h.jsx)("li",{children:(0,h.jsx)(v.OL,{to:"cast",className:function(e){return e.isActive?"".concat(N," ").concat(C):N},children:"Cast"})}),(0,h.jsx)("li",{children:(0,h.jsx)(v.OL,{to:"reviews",className:function(e){return e.isActive?"".concat(N," ").concat(C):N},children:"Reviews"})})]})]})},L=function(){var e=(0,c.useState)(null),n=(0,a.Z)(e,2),r=n[0],i=n[1],l=(0,c.useState)(null),v=(0,a.Z)(l,2),p=v[0],m=v[1],x=(0,c.useState)(!1),_=(0,a.Z)(x,2),j=_[0],k=_[1],g=(0,o.UO)().movieId;return(0,c.useEffect)((function(){var e=function(){var e=(0,t.Z)(s().mark((function e(){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,k(!0),e.next=4,u.Z.getMovieDetails(g);case 4:(n=e.sent)||m('We are sorry. There is no details about the movie"'),i(n),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),m(e.t0.response.data.status_message);case 12:return e.prev=12,k(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})));return function(){return e.apply(this,arguments)}}();e()}),[g]),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)("section",{className:"container",children:[(0,h.jsx)(f,{}),r&&(0,h.jsx)(Z,{movieDetails:r}),p&&(0,h.jsx)(b.Z,{error:p}),j&&(0,h.jsx)(M.Z,{})]}),r&&(0,h.jsx)(A,{}),(0,h.jsx)(c.Suspense,{fallback:(0,h.jsx)(d.Z,{children:"Loading subpage ..."}),children:(0,h.jsx)(o.j3,{})})]})}},549:function(e,n,r){var t=r(861),a=r(757),i=r.n(a),s=r(294);s.Z.defaults.baseURL="https://api.themoviedb.org/3";var c="051a3d8a53317eb2948f5da4b81e4296",o=function(){var e=(0,t.Z)(i().mark((function e(){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"/trending/movie/day",e.next=3,s.Z.get("".concat("/trending/movie/day","?api_key=").concat(c));case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=(0,t.Z)(i().mark((function e(n){var r,t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="/search/movie?query=".concat(n),e.next=3,s.Z.get("".concat(r,"&api_key=").concat(c));case 3:return t=e.sent,e.abrupt("return",t.data);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),d=function(){var e=(0,t.Z)(i().mark((function e(n){var r,t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="/movie/".concat(n),e.next=3,s.Z.get("".concat(r,"?api_key=").concat(c));case 3:return t=e.sent,e.abrupt("return",t.data);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,t.Z)(i().mark((function e(n){var r,t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="/movie/".concat(n,"/credits"),e.next=3,s.Z.get("".concat(r,"?api_key=").concat(c));case 3:return t=e.sent,e.abrupt("return",t.data);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),v=function(){var e=(0,t.Z)(i().mark((function e(n){var r,t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="/movie/".concat(n,"/reviews"),e.next=3,s.Z.get("".concat(r,"?api_key=").concat(c));case 3:return t=e.sent,e.abrupt("return",t.data);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p={getTrending:o,getSearchedMovies:u,getMovieDetails:d,getMovieCredits:l,getMovieReviews:v};n.Z=p}}]);
//# sourceMappingURL=434.a77cf5f5.chunk.js.map