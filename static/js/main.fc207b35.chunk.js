(this.webpackJsonpmovie_app_2021=this.webpackJsonpmovie_app_2021||[]).push([[0],{57:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n(0),c=n.n(s),r=n(29),i=n.n(r),o=n(8),j=n(2);var l=function(){return Object(a.jsx)("div",{className:"about__container",children:Object(a.jsx)("span",{children:'"About page"'})})},m=n(17),u=n.n(m),d=n(30),b=n(11),v=n(12),p=n(14),h=n(13),O=n(31),x=n.n(O);n(57);var _=function(e){var t=e.year,n=e.title,s=e.summary,c=e.poster,r=e.genres;return Object(a.jsx)(o.b,{to:{pathname:"/movie-detail",state:{year:t,title:n,summary:s,poster:c,genres:r}},children:Object(a.jsxs)("div",{className:"movie",children:[Object(a.jsx)("img",{src:c,alt:n,title:n}),Object(a.jsxs)("div",{className:"movie__data",children:[Object(a.jsx)("h3",{className:"movie__title",children:n}),Object(a.jsx)("h5",{className:"movie__year",children:t}),Object(a.jsx)("ul",{className:"movie__genres",children:r.map((function(e,t){return Object(a.jsx)("li",{className:"genres__genre",children:e},t)}))}),Object(a.jsxs)("p",{className:"movie__summary",children:[s.slice(0,180),"..."]})]})]})})},y=(n(63),function(e){Object(p.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(b.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={isLoading:!0,movies:[]},e.getMovies=Object(d.a)(u.a.mark((function t(){var n,a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.a.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating");case 2:n=t.sent,a=n.data.data.movies,e.setState({movies:a,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(v.a)(n,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,n=e.movies;return Object(a.jsx)("section",{className:"container",children:t?Object(a.jsx)("div",{className:"loader",children:Object(a.jsx)("span",{className:"loader__text",children:"Loading..."})}):Object(a.jsx)("div",{className:"movies",children:n.map((function(e){return Object(a.jsx)(_,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)}))})})}}]),n}(c.a.Component));var f=function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)(o.b,{to:"/",children:"Home"}),Object(a.jsx)(o.b,{to:"/about",children:"About"})]})},g=function(e){Object(p.a)(n,e);var t=Object(h.a)(n);function n(){return Object(b.a)(this,n),t.apply(this,arguments)}return Object(v.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.location,n=e.history;void 0===t.state&&n.push("/")}},{key:"render",value:function(){var e=this.props.location;return e.state?Object(a.jsx)("span",{children:e.state.title}):null}}]),n}(c.a.Component);var N=function(){return Object(a.jsxs)(o.a,{children:[Object(a.jsx)(f,{}),Object(a.jsx)(j.a,{path:"/",exact:!0,component:y}),Object(a.jsx)(j.a,{path:"/about",component:l}),Object(a.jsx)(j.a,{path:"/movie-detail",component:g})]})};i.a.render(Object(a.jsx)(N,{}),document.getElementById("root"))}},[[64,1,2]]]);
//# sourceMappingURL=main.fc207b35.chunk.js.map