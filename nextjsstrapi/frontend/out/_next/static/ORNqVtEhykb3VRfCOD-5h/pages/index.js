(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"2Eek":function(e,t,n){e.exports=n("W7oM")},"2mql":function(e,t,n){"use strict";var r=n("TOwV"),a={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},o={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},i={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},c={};function u(e){return r.isMemo(e)?i:c[e.$$typeof]||a}c[r.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},c[r.Memo]=i;var s=Object.defineProperty,p=Object.getOwnPropertyNames,f=Object.getOwnPropertySymbols,l=Object.getOwnPropertyDescriptor,d=Object.getPrototypeOf,b=Object.prototype;e.exports=function e(t,n,r){if("string"!==typeof n){if(b){var a=d(n);a&&a!==b&&e(t,a,r)}var i=p(n);f&&(i=i.concat(f(n)));for(var c=u(t),y=u(n),m=0;m<i.length;++m){var v=i[m];if(!o[v]&&(!r||!r[v])&&(!y||!y[v])&&(!c||!c[v])){var h=l(n,v);try{s(t,v,h)}catch(j){}}}}return t}},"4bdI":function(e,t,n){n("Ui4e"),e.exports=n("WEpk").Object.freeze},FbiP:function(e,t,n){e.exports=n("4bdI")},RNiq:function(e,t,n){"use strict";n.r(t);var r=n("0iUn"),a=n("sLSF"),o=n("MI3g"),i=n("a7VT"),c=n("Tit0"),u=n("ln6h"),s=n.n(u),p=n("2Eek"),f=n.n(p),l=n("FbiP"),d=n.n(l);var b=n("q1tI"),y=n.n(b),m=n("lTCR"),v=n.n(m),h=(n("YFqc"),n("lqOT")),j=n("mrSG"),O=n("2mql"),g=n.n(O),w=n("ttZb"),S=n("17x9"),P=n.n(S);function R(e){var t=e.children,n=e.query,r=Object(j.e)(e,["children","query"]),a=Object(w.useQuery)(n,r);return t&&a?t(a):null}function T(e){var t=Object(w.useMutation)(e.mutation,e),n=t[0],r=t[1];return e.children?e.children(n,r):null}function E(e){var t=Object(w.useSubscription)(e.subscription,e);return e.children&&t?e.children(t):null}(R||(R={})).propTypes={client:P.a.object,children:P.a.func.isRequired,fetchPolicy:P.a.string,notifyOnNetworkStatusChange:P.a.bool,onCompleted:P.a.func,onError:P.a.func,pollInterval:P.a.number,query:P.a.object.isRequired,variables:P.a.object,ssr:P.a.bool,partialRefetch:P.a.bool,returnPartialData:P.a.bool},(T||(T={})).propTypes={mutation:P.a.object.isRequired,variables:P.a.object,optimisticResponse:P.a.oneOfType([P.a.object,P.a.func]),refetchQueries:P.a.oneOfType([P.a.arrayOf(P.a.oneOfType([P.a.string,P.a.object])),P.a.func]),awaitRefetchQueries:P.a.bool,update:P.a.func,children:P.a.func.isRequired,onCompleted:P.a.func,onError:P.a.func,fetchPolicy:P.a.string},(E||(E={})).propTypes={subscription:P.a.object.isRequired,variables:P.a.object,children:P.a.func,onSubscriptionData:P.a.func,onSubscriptionComplete:P.a.func,shouldResubscribe:P.a.oneOfType([P.a.func,P.a.bool])};var C=n("qVdT"),$=function(){return{}},N=function(){return!1};function q(e){return e.displayName||e.name||"Component"}function x(e,t){for(var n={},r=0,a=e.variables;r<a.length;r++){var o=a[r],i=o.variable,c=o.type;if(i.name&&i.name.value){var u=i.name.value,s=t[u];"undefined"===typeof s?"NonNullType"!==c.kind&&(n[u]=void 0):n[u]=s}}return n}var I=function(e){function t(t){var n=e.call(this,t)||this;return n.withRef=!1,n.setWrappedInstance=n.setWrappedInstance.bind(n),n}return Object(j.c)(t,e),t.prototype.getWrappedInstance=function(){return Object(C.b)(this.withRef,2),this.wrappedInstance},t.prototype.setWrappedInstance=function(e){this.wrappedInstance=e},t}(y.a.Component);var M=y.a.createElement;function k(){var e,t,n=(e=["\n  {\n    restaurants {\n      id\n      name\n      description,\n      categories {\n          id,\n          name\n      }\n    }\n  }\n"],t||(t=e.slice(0)),d()(f()(e,{raw:{value:d()(t)}})));return k=function(){return n},n}var F=function(e,t){var n=e.data,r=(n.loading,n.error),a=n.restaurants;e.search;if(r)return"Error loading restaurants";if(a&&a.length){var o=a;return 0!=o.length?M("div",null,M("div",{className:"h-100"},o.map((function(e){return M("div",{key:e.id},e.name,M("ul",null,e.categories.map((function(e){return M("li",{key:e.id},e.name)}))))})))):M("h1",null,"No Restaurants Found")}return M("h1",null,"Loading")},W=v()(k());F.getInitialProps=function(e){var t,n;return s.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return e.req,r.next=3,s.a.awrap(fetch("https://api.github.com/repos/zeit/next.js"));case 3:return t=r.sent,r.next=6,s.a.awrap(t.json());case 6:return n=r.sent,r.abrupt("return",{stars:n.stargazers_count});case 8:case"end":return r.stop()}}))};var _=function(e,t){switch(void 0===t&&(t={}),Object(h.f)(e).type){case h.c.Mutation:return function(e,t){void 0===t&&(t={});var n=Object(h.f)(e),r=t.options,a=void 0===r?$:r,o=t.alias,i=void 0===o?"Apollo":o,c=a;return"function"!==typeof c&&(c=function(){return a}),function(r){var a=i+"("+q(r)+")",o=function(o){function i(){return null!==o&&o.apply(this,arguments)||this}return Object(j.c)(i,o),i.prototype.render=function(){var a=this.props,o=c(a);return t.withRef&&(this.withRef=!0,a=Object.assign({},a,{ref:this.setWrappedInstance})),!o.variables&&n.variables.length>0&&(o.variables=x(n,a)),y.a.createElement(T,Object(j.a)({ignoreResults:!0},o,{mutation:e}),(function(e,n){var o,i,c=n.data,u=Object(j.e)(n,["data"]),s=Object.assign(u,c||{}),p=t.name||"mutate",f=t.name?p+"Result":"result",l=((o={})[p]=e,o[f]=s,o);if(t.props){var d=((i={})[p]=e,i[f]=s,i.ownProps=a,i);l=t.props(d)}return y.a.createElement(r,Object(j.a)({},a,l))}))},i.displayName=a,i.WrappedComponent=r,i}(I);return g()(o,r,{})}}(e,t);case h.c.Subscription:return function(e,t){void 0===t&&(t={});var n=Object(h.f)(e),r=t.options,a=void 0===r?$:r,o=t.skip,i=void 0===o?N:o,c=t.alias,u=void 0===c?"Apollo":c,s=t.shouldResubscribe,p=a;"function"!==typeof p&&(p=function(){return a});var f,l=i;return"function"!==typeof l&&(l=function(){return i}),function(r){var a=u+"("+q(r)+")",o=function(o){function i(e){var t=o.call(this,e)||this;return t.state={resubscribe:!1},t}return Object(j.c)(i,o),i.prototype.componentDidUpate=function(e){s&&this.setState({resubscribe:s(e,this.props)})},i.prototype.render=function(){var o=this,i=this.props,c=l(i),u=c?Object.create(null):p(i);return!c&&!u.variables&&n.variables.length>0&&(u.variables=x(n,i)),y.a.createElement(E,Object(j.a)({},u,{displayName:a,skip:c,subscription:e,shouldResubscribe:this.state.resubscribe}),(function(e){var n,a,u=e.data,s=Object(j.e)(e,["data"]);if(t.withRef&&(o.withRef=!0,i=Object.assign({},i,{ref:o.setWrappedInstance})),c)return y.a.createElement(r,Object(j.a)({},i,{}));var p=Object.assign(s,u||{}),l=t.name||"data",d=((n={})[l]=p,n);if(t.props){var b=((a={})[l]=p,a.ownProps=i,a);d=f=t.props(b,f)}return y.a.createElement(r,Object(j.a)({},i,d))}))},i.displayName=a,i.WrappedComponent=r,i}(I);return g()(o,r,{})}}(e,t);case h.c.Query:default:return function(e,t){void 0===t&&(t={});var n=Object(h.f)(e),r=t.options,a=void 0===r?$:r,o=t.skip,i=void 0===o?N:o,c=t.alias,u=void 0===c?"Apollo":c,s=a;"function"!==typeof s&&(s=function(){return a});var p,f=i;return"function"!==typeof f&&(f=function(){return i}),function(r){var a=u+"("+q(r)+")",o=function(o){function i(){return null!==o&&o.apply(this,arguments)||this}return Object(j.c)(i,o),i.prototype.render=function(){var o=this,i=this.props,c=f(i),u=c?Object.create(null):Object(j.a)({},s(i));return!c&&!u.variables&&n.variables.length>0&&(u.variables=x(n,i)),y.a.createElement(R,Object(j.a)({},u,{displayName:a,skip:c,query:e}),(function(e){e.client;var n,a,u=e.data,s=Object(j.e)(e,["client","data"]);if(t.withRef&&(o.withRef=!0,i=Object.assign({},i,{ref:o.setWrappedInstance})),c)return y.a.createElement(r,Object(j.a)({},i,{}));var f=Object.assign(s,u||{}),l=t.name||"data",d=((n={})[l]=f,n);if(t.props){var b=((a={})[l]=f,a.ownProps=i,a);d=p=t.props(b,p)}return y.a.createElement(r,Object(j.a)({},i,d))}))},i.displayName=a,i.WrappedComponent=r,i}(I);return g()(o,r,{})}}(e,t)}}(W,{props:function(e){return{data:e.data}}})(F),D=y.a.createElement,z=function(e){function t(e){return Object(r.a)(this,t),Object(o.a)(this,Object(i.a)(t).call(this,e))}return Object(c.a)(t,e),Object(a.a)(t,[{key:"render",value:function(){return D("div",{className:"container-fluid"},D(_,{search:""}))}}]),t}(y.a.Component);t.default=z},TOwV:function(e,t,n){"use strict";e.exports=n("qT12")},Ui4e:function(e,t,n){var r=n("93I4"),a=n("6/1s").onFreeze;n("zn7N")("freeze",(function(e){return function(t){return e&&r(t)?e(a(t)):t}}))},W7oM:function(e,t,n){n("nZgG");var r=n("WEpk").Object;e.exports=function(e,t){return r.defineProperties(e,t)}},nZgG:function(e,t,n){var r=n("Y7ZC");r(r.S+r.F*!n("jmDH"),"Object",{defineProperties:n("fpC5")})},qT12:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r="function"===typeof Symbol&&Symbol.for,a=r?Symbol.for("react.element"):60103,o=r?Symbol.for("react.portal"):60106,i=r?Symbol.for("react.fragment"):60107,c=r?Symbol.for("react.strict_mode"):60108,u=r?Symbol.for("react.profiler"):60114,s=r?Symbol.for("react.provider"):60109,p=r?Symbol.for("react.context"):60110,f=r?Symbol.for("react.async_mode"):60111,l=r?Symbol.for("react.concurrent_mode"):60111,d=r?Symbol.for("react.forward_ref"):60112,b=r?Symbol.for("react.suspense"):60113,y=r?Symbol.for("react.memo"):60115,m=r?Symbol.for("react.lazy"):60116;function v(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case a:switch(e=e.type){case f:case l:case i:case u:case c:case b:return e;default:switch(e=e&&e.$$typeof){case p:case d:case s:return e;default:return t}}case m:case y:case o:return t}}}function h(e){return v(e)===l}t.typeOf=v,t.AsyncMode=f,t.ConcurrentMode=l,t.ContextConsumer=p,t.ContextProvider=s,t.Element=a,t.ForwardRef=d,t.Fragment=i,t.Lazy=m,t.Memo=y,t.Portal=o,t.Profiler=u,t.StrictMode=c,t.Suspense=b,t.isValidElementType=function(e){return"string"===typeof e||"function"===typeof e||e===i||e===l||e===u||e===c||e===b||"object"===typeof e&&null!==e&&(e.$$typeof===m||e.$$typeof===y||e.$$typeof===s||e.$$typeof===p||e.$$typeof===d)},t.isAsyncMode=function(e){return h(e)||v(e)===f},t.isConcurrentMode=h,t.isContextConsumer=function(e){return v(e)===p},t.isContextProvider=function(e){return v(e)===s},t.isElement=function(e){return"object"===typeof e&&null!==e&&e.$$typeof===a},t.isForwardRef=function(e){return v(e)===d},t.isFragment=function(e){return v(e)===i},t.isLazy=function(e){return v(e)===m},t.isMemo=function(e){return v(e)===y},t.isPortal=function(e){return v(e)===o},t.isProfiler=function(e){return v(e)===u},t.isStrictMode=function(e){return v(e)===c},t.isSuspense=function(e){return v(e)===b}},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])}},[["vlRD",1,2,0,3]]]);