webpackJsonp([169,164],{0:function(t,e,n){t.exports=n(83)},83:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function l(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0}),e.routeQuery=void 0;var u=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),i=n(3),f=r(i),c=n(14),p=n(27),s=r(p),d=n(21),h=r(d),y=n(24),b=r(y),m=function(t){function e(){return o(this,e),a(this,Object.getPrototypeOf(e).apply(this,arguments))}return l(e,t),u(e,[{key:"render",value:function(){var t=this.props.data.allMarkdown.edges,e=(0,h["default"])(this.props,"data.config.siteMetadata.title"),n=t.map(function(t){return t.node.frontmatter.draft!==!0?f["default"].createElement("li",{key:t.node.path},f["default"].createElement(c.Link,{to:t.node.path},t.node.frontmatter.title)):null});return f["default"].createElement(s["default"],{title:e},f["default"].createElement(b["default"],this.props,f["default"].createElement("h1",null,this.props.data.allMarkdown.totalCount," ","posts tagged with “",this.props.pathContext.tag,"”"),f["default"].createElement("ul",null,n),f["default"].createElement("p",null,f["default"].createElement(c.Link,{to:"/tags/"},"Browse all tags"))))}}]),e}(f["default"].Component);e["default"]=m;e.routeQuery='\n  {\n    config {\n      siteMetadata {\n        title\n      }\n    }\n    allMarkdown(first: 1000, tag: "<%= tag %>") {\n      totalCount\n      edges {\n        node {\n          id\n          path\n          frontmatter {\n            title\n            draft\n          }\n        }\n      }\n    }\n  }\n'}});
//# sourceMappingURL=tagPage-e57b0712.js.map