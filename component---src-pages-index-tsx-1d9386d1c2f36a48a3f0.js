"use strict";(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[691],{9113:function(A,t,e){e.r(t),e.d(t,{default:function(){return V}});var r=e(9953),n=e(7246),o=e(2602),i=e(9850),a=e(5528),s=e(7749),l=e(6931),c=e(6794),g=e(9010);function f(A){var t,e,r,n,o,f,u,p,b=A.post,w=null===(t=b.frontmatter)||void 0===t||null===(e=t.heroImageFile)||void 0===e||null===(r=e.childImageSharp)||void 0===r?void 0:r.gatsbyImageData,m=null===(n=b.frontmatter)||void 0===n?void 0:n.heroImageLink,d=null===(o=b.frontmatter)||void 0===o?void 0:o.title,Q=null===(f=b.frontmatter)||void 0===f?void 0:f.description,h=b.slug||"";return(0,g.tZ)(i.rj,{templateColumns:["1fr","1fr 1fr"],gap:"8",bg:""},(0,g.tZ)(i.xu,null,(0,g.tZ)(i.rU,{as:s.Link,to:h},(0,g.tZ)(i.xu,{rounded:"xl",overflow:"hidden"},m&&(0,g.tZ)(a.Ee,{src:m,alt:(null===(u=b.frontmatter)||void 0===u?void 0:u.heroImageAlt)||""}),!m&&w&&(0,g.tZ)(l.G,{image:w,alt:(null===(p=b.frontmatter)||void 0===p?void 0:p.heroImageAlt)||""})))),(0,g.tZ)(i.kC,{flexDir:"column",justifyContent:"space-around"},(0,g.tZ)(i.rU,{as:s.Link,to:h},(0,g.tZ)(i.X6,{as:"h2",size:["lg","2xl"],lineHeight:"1.24",mb:"2"},d)),Q&&(0,g.tZ)(i.xv,{fontSize:["md","xl"],mb:"2"},Q),(0,g.tZ)(c.l,{post:b})))}function u(A){var t,e,r=A.post,n=(null==r||null===(t=r.frontmatter)||void 0===t?void 0:t.title)||(null==r?void 0:r.slug),o=(null==r||null===(e=r.frontmatter)||void 0===e?void 0:e.description)||r.excerpt;return(0,g.tZ)("li",{key:null==r?void 0:r.slug},(0,g.tZ)(i.xu,{as:"article",my:"12",itemScope:!0,itemType:"http://schema.org/Article"},(null==r?void 0:r.slug)&&(0,g.tZ)(i.xu,{as:"header",mb:"2"},(0,g.tZ)(i.X6,{as:"h3",size:"xl",mb:"2"},(0,g.tZ)(i.rU,{as:s.Link,to:null==r?void 0:r.slug,itemProp:"url"},(0,g.tZ)("span",{itemProp:"headline"},n))),(0,g.tZ)(c.l,{post:r})),(0,g.tZ)("section",null,(0,g.tZ)(i.xv,{itemProp:"description"},o))))}var p=e(130);function b(A){var t=A.posts;return(0,g.tZ)(i.rj,{templateColumns:"repeat("+t.length+", 1fr)",gap:"8"},t.map((function(A){return(0,g.tZ)(p.R,{post:A,key:A.id})})))}var w=e(4520),m=e(3214),d=e(3368),Q=e(416),h=e(7225),B=e.n(h);function E(A,t){var e=Object.keys(A);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(A);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(A,t).enumerable}))),e.push.apply(e,r)}return e}function C(A){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?E(Object(e),!0).forEach((function(t){y(A,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(e)):E(Object(e)).forEach((function(t){Object.defineProperty(A,t,Object.getOwnPropertyDescriptor(e,t))}))}return A}function I(A){return I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(A){return typeof A}:function(A){return A&&"function"==typeof Symbol&&A.constructor===Symbol&&A!==Symbol.prototype?"symbol":typeof A},I(A)}function y(A,t,e){return t in A?Object.defineProperty(A,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):A[t]=e,A}function v(A,t){if(null==A)return{};var e,r,n=function(A,t){if(null==A)return{};var e,r,n={},o=Object.keys(A);for(r=0;r<o.length;r++)e=o[r],t.indexOf(e)>=0||(n[e]=A[e]);return n}(A,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(A);for(r=0;r<o.length;r++)e=o[r],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(A,e)&&(n[e]=A[e])}return n}function k(A){return function(A){if(Array.isArray(A))return D(A)}(A)||function(A){if("undefined"!=typeof Symbol&&null!=A[Symbol.iterator]||null!=A["@@iterator"])return Array.from(A)}(A)||function(A,t){if(!A)return;if("string"==typeof A)return D(A,t);var e=Object.prototype.toString.call(A).slice(8,-1);"Object"===e&&A.constructor&&(e=A.constructor.name);if("Map"===e||"Set"===e)return Array.from(A);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return D(A,t)}(A)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function D(A,t){(null==t||t>A.length)&&(t=A.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=A[e];return r}function x(A){return t=A,(t-=0)==t?A:(A=A.replace(/[\-_\s]+(.)?/g,(function(A,t){return t?t.toUpperCase():""}))).substr(0,1).toLowerCase()+A.substr(1);var t}var M=["style"];function Z(A){return A.split(";").map((function(A){return A.trim()})).filter((function(A){return A})).reduce((function(A,t){var e,r=t.indexOf(":"),n=x(t.slice(0,r)),o=t.slice(r+1).trim();return n.startsWith("webkit")?A[(e=n,e.charAt(0).toUpperCase()+e.slice(1))]=o:A[n]=o,A}),{})}var O=!1;try{O=!0}catch(q){}function j(A){return A&&"object"===I(A)&&A.prefix&&A.iconName&&A.icon?A:Q.parse.icon?Q.parse.icon(A):null===A?null:A&&"object"===I(A)&&A.prefix&&A.iconName?A:Array.isArray(A)&&2===A.length?{prefix:A[0],iconName:A[1]}:"string"==typeof A?{prefix:"fas",iconName:A}:void 0}function Y(A,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?y({},A,t):{}}var P=r.forwardRef((function(A,t){var e=A.icon,r=A.mask,n=A.symbol,o=A.className,i=A.title,a=A.titleId,s=A.maskId,l=j(e),c=Y("classes",[].concat(k(function(A){var t,e=A.beat,r=A.fade,n=A.beatFade,o=A.bounce,i=A.shake,a=A.flash,s=A.spin,l=A.spinPulse,c=A.spinReverse,g=A.pulse,f=A.fixedWidth,u=A.inverse,p=A.border,b=A.listItem,w=A.flip,m=A.size,d=A.rotation,Q=A.pull,h=(y(t={"fa-beat":e,"fa-fade":r,"fa-beat-fade":n,"fa-bounce":o,"fa-shake":i,"fa-flash":a,"fa-spin":s,"fa-spin-reverse":c,"fa-spin-pulse":l,"fa-pulse":g,"fa-fw":f,"fa-inverse":u,"fa-border":p,"fa-li":b,"fa-flip":!0===w,"fa-flip-horizontal":"horizontal"===w||"both"===w,"fa-flip-vertical":"vertical"===w||"both"===w},"fa-".concat(m),null!=m),y(t,"fa-rotate-".concat(d),null!=d&&0!==d),y(t,"fa-pull-".concat(Q),null!=Q),y(t,"fa-swap-opacity",A.swapOpacity),t);return Object.keys(h).map((function(A){return h[A]?A:null})).filter((function(A){return A}))}(A)),k(o.split(" ")))),g=Y("transform","string"==typeof A.transform?Q.parse.transform(A.transform):A.transform),f=Y("mask",j(r)),u=(0,Q.icon)(l,C(C(C(C({},c),g),f),{},{symbol:n,title:i,titleId:a,maskId:s}));if(!u)return function(){var A;!O&&console&&"function"==typeof console.error&&(A=console).error.apply(A,arguments)}("Could not find icon",l),null;var p=u.abstract,b={ref:t};return Object.keys(A).forEach((function(t){P.defaultProps.hasOwnProperty(t)||(b[t]=A[t])})),F(p[0],b)}));P.displayName="FontAwesomeIcon",P.propTypes={beat:B().bool,border:B().bool,beatFade:B().bool,bounce:B().bool,className:B().string,fade:B().bool,flash:B().bool,mask:B().oneOfType([B().object,B().array,B().string]),maskId:B().string,fixedWidth:B().bool,inverse:B().bool,flip:B().oneOf([!0,!1,"horizontal","vertical","both"]),icon:B().oneOfType([B().object,B().array,B().string]),listItem:B().bool,pull:B().oneOf(["right","left"]),pulse:B().bool,rotation:B().oneOf([0,90,180,270]),shake:B().bool,size:B().oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:B().bool,spinPulse:B().bool,spinReverse:B().bool,symbol:B().oneOfType([B().bool,B().string]),title:B().string,titleId:B().string,transform:B().oneOfType([B().string,B().object]),swapOpacity:B().bool},P.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var F=function A(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof e)return e;var n=(e.children||[]).map((function(e){return A(t,e)})),o=Object.keys(e.attributes||{}).reduce((function(A,t){var r=e.attributes[t];switch(t){case"class":A.attrs.className=r,delete e.attributes.class;break;case"style":A.attrs.style=Z(r);break;default:0===t.indexOf("aria-")||0===t.indexOf("data-")?A.attrs[t.toLowerCase()]=r:A.attrs[x(t)]=r}return A}),{attrs:{}}),i=r.style,a=void 0===i?{}:i,s=v(r,M);return o.attrs.style=C(C({},o.attrs.style),a),t.apply(void 0,[e.tag,C(C({},o.attrs),s)].concat(k(n)))}.bind(null,r.createElement),T=e(9909),z=e(4665),R=e(8769);var X=(0,w.m$)(T.E.div,{shouldForwardProp:function(A){return(0,z.Z)(A)||(0,w.x9)(A)}}),H={name:"13udsys",styles:"height:100%"},S={name:"vmp508",styles:"opacity:0.25;height:100%"},G={name:"6th7w1",styles:"html{scroll-behavior:smooth;}"},L=function(A){var t=A.scrollToRef;return(0,g.tZ)(i.xu,{bg:"gray.800",zIndex:1},(0,g.tZ)(g.xB,{styles:G}),(0,g.tZ)(i.kC,{height:"100vh",minH:["initial","960px"]},(0,g.tZ)(i.kC,{position:"relative",justifyContent:["start","center"],flexDirection:"column",maxW:"1512px",width:"100vw",pt:["4","0"],px:["4","12","32"]},(0,g.tZ)(i.kC,{position:"absolute",top:"0",left:"0",height:"100vh",minHeight:["initial","960px"],flexDirection:["column","row"]},(0,g.tZ)(i.xu,{w:["100%","35%"],h:["500px","initial"]},(0,g.tZ)(l.S,{css:S,loading:"eager",src:"../../images/tea.jpg",alt:"Tea",__imageData:e(1954)})),(0,g.tZ)(i.xu,{w:["100%","65%"]},(0,g.tZ)(l.S,{css:H,loading:"eager",src:"../../images/oleg.jpg",alt:"Oleg Luchanskii",__imageData:e(8691)}))),(0,g.tZ)(i.xu,{zIndex:1},(0,g.tZ)(X,{transition:{duration:.5,easings:["easeIn"],delay:.2},initial:{opacity:0,scale:1,y:-32},animate:{opacity:1,scale:1,y:0}},(0,g.tZ)(i.X6,{as:"h1",fontSize:["56px","64px","120px"],color:"white",mb:"4"},"Oleg",(0,g.tZ)("br",null),"Luchanskii")),(0,g.tZ)(X,{transition:{duration:.5,easings:["easeIn"],delay:.5},initial:{opacity:0,scale:1,x:-32},animate:{opacity:1,scale:1,x:0},mb:"8"},(0,g.tZ)(i.xu,null,(0,g.tZ)(m.iJ,null,(0,g.tZ)(i.rU,{href:"https://github.com/Luchanso/resume/raw/master/eu/Oleg%20Luchanskii%20Resume.pdf",_hover:{textDecor:"none"}},(0,g.tZ)(d.zx,{color:"black",mr:["0","4"],mb:["4","0"],w:["full","initial"]},"Resume EU")),(0,g.tZ)(i.rU,{href:"https://github.com/Luchanso/resume/raw/master/us/Oleg%20Luchanskii%20Resume.pdf",_hover:{textDecor:"none"}},(0,g.tZ)(d.zx,{color:"black",w:["full","initial"]},"Resume US"))))),(0,g.tZ)(X,{transition:{duration:.5,easings:["easeIn"],delay:.75},initial:{opacity:0,scale:1,x:-32},animate:{opacity:1,scale:1,x:0}},(0,g.tZ)(i.Ug,{spacing:"5"},(0,g.tZ)(i.rU,{color:"white",href:"https://fb.com/oleg.loutchansky"},(0,g.tZ)(P,{icon:R.neY,size:"2x"})),(0,g.tZ)(i.rU,{color:"white",href:"https://www.instagram.com/luchanso/"},(0,g.tZ)(P,{icon:R.Zzi,size:"2x"})),(0,g.tZ)(i.rU,{color:"white",href:"https://github.com/luchanso/"},(0,g.tZ)(P,{icon:R.zhw,size:"2x"})),(0,g.tZ)(i.rU,{color:"white",href:"https://telegram.me/luchanso"},(0,g.tZ)(P,{icon:R.Uv8,size:"2x"})))),(0,g.tZ)(X,{pos:"absolute",mt:"4",transition:{duration:1.2,easings:["easeIn"],repeat:1/0,repeatType:"mirror"},initial:{opacity:.8,scale:1,y:-8},animate:{opacity:1,scale:1,y:0}},(0,g.tZ)(i.rU,{href:"#products",onClick:function(){var A;null==t||null===(A=t.current)||void 0===A||A.scrollIntoView({behavior:"smooth"})},color:"white"},"Scroll down ↓"))))))},K=function(A){var t=A.title,e=A.icon,r=A.description,n=A.link,o=(0,m.ff)("gray.100","gray.700");return(0,g.tZ)(i.kC,{flexDir:"column",justifyContent:"space-between",p:"4",rounded:"xl",bg:o},(0,g.tZ)(i.xu,null,e&&(0,g.tZ)(a.Ee,{src:e,w:"16",rounded:"xl",h:"16",mb:"4"}),(0,g.tZ)(i.X6,{size:"md",mb:"4"},t),(0,g.tZ)(i.xv,{mb:"4"},r)),n&&(0,g.tZ)(i.rU,{href:n,textDecor:"underline",target:"_blank"},n))},N=e.p+"static/qa-4e7264be525edd3bc3e31fef83b81b52.png",U=e.p+"static/vpn-9f0423f09136b43b40c92aeb5c7704d5.png",J=e.p+"static/fastup-0befde6251c1a9d88fc63545018709f1.png",W=(0,r.forwardRef)((function(A,t){return(0,g.tZ)(i.W2,{maxW:"container.xl",my:"32",ref:t},(0,g.tZ)(i.X6,{my:"8",textAlign:"center"},"Products I've created"),(0,g.tZ)(i.rj,{templateColumns:["1fr","1fr","1fr 1fr","1fr 1fr 1fr"],gap:"8"},(0,g.tZ)(K,{link:"https://qadeck.vercel.app",title:"Question Deck",icon:N,description:"Questions game. Discover the dark side of your friends"}),(0,g.tZ)(K,{link:"https://twitter-free-checkmark.vercel.app",title:"Twitter Blue Checkmark",icon:"data:image/png;base64,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",description:"Make free twitter blue checkmark"}),(0,g.tZ)(K,{title:"Mera",icon:"data:image/png;base64,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",description:"The place where you can find and book sports mentors all over the world"}),(0,g.tZ)(K,{title:"VPN",icon:U,description:"Private smart VPN SaaS for Russia"}),(0,g.tZ)(K,{title:"PornHub Client",icon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAL7SURBVHgB7dQBAQAgDMCga/9AtrtBBiE4+2YHSLoDZAkAwgQAYQKAMAFAmAAgTAAQJgAIEwCECQDCBABhAoAwAUCYACBMABAmAAgTAIQJAMIEAGECgDABQJgAIEwAECYACBMAhAkAwgQAYQKAMAFAmAAgTAAQJgAIEwCECQDCBABhAoAwAUCYACBMABAmAAgTAIQJAMIEAGECgDABQJgAIEwAECYACBMAhAkAwgQAYQKAMAFAmAAgTAAQJgAIEwCECQDCBABhAoAwAUCYACBMABAmAAgTAIQJAMIEAGECgDABQJgAIEwAECYACBMAhAkAwgQAYQKAMAFAmAAgTAAQJgAIEwCECQDCBABhAoAwAUCYACBMABAmAAgTAIQJAMIEAGECgDABQJgAIEwAECYACBMAhAkAwgQAYQKAMAFAmAAgTAAQJgAIEwCECQDCBABhAoAwAUCYACBMABAmAAgTAIQJAMIEAGECgDABQJgAIEwAECYACBMAhAkAwgQAYQKAMAFAmAAgTAAQJgAIEwCECQDCBABhAoAwAUCYACBMABAmAAgTAIQJAMIEAGECgDABQJgAIEwAECYACBMAhAkAwgQAYQKAMAFAmAAgTAAQJgAIEwCECQDCBABhAoAwAUCYACBMABAmAAgTAIQJAMIEAGECgDABQJgAIEwAECYACBMAhAkAwgQAYQKAMAFAmAAgTAAQJgAIEwCECQDCBABhAoAwAUCYACBMABAmAAgTAIQJAMIEAGECgDABQJgAIEwAECYACBMAhAkAwgQAYQKAMAFAmAAgTAAQJgAIEwCECQDCBABhAoAwAUCYACBMABAmAAgTAIQJAMIEAGECgDABQJgAIEwAECYACBMAhAkAwgQAYQKAMAFAmAAgTAAQJgAIEwCECQDCBABhAoAwAUCYACBMABAmAAgTAIQJAMIEAGECgDABQJgAIEwAECYACBMAhAkAwgQAYQKAMAFAmAAgTAAQJgAIEwCECQDCBABhAoAwAUCYACBMABD2AY+1BLaKhkEFAAAAAElFTkSuQmCC",description:"Browser for adult, based on TOR network for avoid IPC blockings and spy, with password protection"}),(0,g.tZ)(K,{title:"FastupKit",icon:J,description:"Tools for Hackathons and medium size projects",link:"https://github.com/fastup-kit"})))})),V=function(A){var t,e,a,s=A.data,l=A.location,c=null===(t=s.site)||void 0===t||null===(e=t.siteMetadata)||void 0===e?void 0:e.title,p=s.allMdx.nodes,w=[],m=[],d=(0,r.useRef)(null);return p.forEach((function(A){var t;null!==(t=A.frontmatter)&&void 0!==t&&t.favorite?a=A:m.length<3?m.push(A):w.push(A)})),0===p.length?(0,g.tZ)(r.Fragment,null,(0,g.tZ)(o.Z,{title:"Oleg Luchanskii"}),(0,g.tZ)(L,{scrollToRef:d}),(0,g.tZ)(n.Z,{location:l,title:c},(0,g.tZ)("p",null,"No blog posts found."))):(0,g.tZ)(r.Fragment,null,(0,g.tZ)(o.Z,{title:"Oleg Luchanskii"}),(0,g.tZ)(L,{scrollToRef:d}),(0,g.tZ)(W,{ref:d}),(0,g.tZ)(n.Z,{location:l,title:c},a&&(0,g.tZ)(f,{post:a}),(0,g.tZ)(i.xu,{my:"16"},(0,g.tZ)(b,{posts:m})),(0,g.tZ)(i.W2,{maxW:"container.md"},(0,g.tZ)("ol",{style:{listStyle:"none"}},w.map((function(A){return(0,g.tZ)(u,{post:A,key:A.id})}))))))}},8691:function(A){A.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#687848","images":{"fallback":{"src":"/static/c2705e485388fb90b4b2297e73ebd3ad/3fd2e/oleg.jpg","srcSet":"/static/c2705e485388fb90b4b2297e73ebd3ad/4a00f/oleg.jpg 756w,\\n/static/c2705e485388fb90b4b2297e73ebd3ad/facf2/oleg.jpg 1512w,\\n/static/c2705e485388fb90b4b2297e73ebd3ad/3fd2e/oleg.jpg 3024w","sizes":"(min-width: 3024px) 3024px, 100vw"},"sources":[{"srcSet":"/static/c2705e485388fb90b4b2297e73ebd3ad/0531b/oleg.webp 756w,\\n/static/c2705e485388fb90b4b2297e73ebd3ad/dd848/oleg.webp 1512w,\\n/static/c2705e485388fb90b4b2297e73ebd3ad/95aac/oleg.webp 3024w","type":"image/webp","sizes":"(min-width: 3024px) 3024px, 100vw"}]},"width":3024,"height":3024}')},1954:function(A){A.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#182808","images":{"fallback":{"src":"/static/2fce4d6f7999d963bf9690d55225b451/72bc0/tea.jpg","srcSet":"/static/2fce4d6f7999d963bf9690d55225b451/ff69b/tea.jpg 600w,\\n/static/2fce4d6f7999d963bf9690d55225b451/798b1/tea.jpg 1200w,\\n/static/2fce4d6f7999d963bf9690d55225b451/72bc0/tea.jpg 2400w","sizes":"(min-width: 2400px) 2400px, 100vw"},"sources":[{"srcSet":"/static/2fce4d6f7999d963bf9690d55225b451/fbb93/tea.webp 600w,\\n/static/2fce4d6f7999d963bf9690d55225b451/4d2e9/tea.webp 1200w,\\n/static/2fce4d6f7999d963bf9690d55225b451/0750a/tea.webp 2400w","type":"image/webp","sizes":"(min-width: 2400px) 2400px, 100vw"}]},"width":2400,"height":1491}')}}]);
//# sourceMappingURL=component---src-pages-index-tsx-1d9386d1c2f36a48a3f0.js.map