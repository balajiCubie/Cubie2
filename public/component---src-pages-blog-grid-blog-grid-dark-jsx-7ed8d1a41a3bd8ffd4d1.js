"use strict";(self.webpackChunkvie_gatsby=self.webpackChunkvie_gatsby||[]).push([[7419],{5389:function(e,t){t.Z=function(e){var t=[];if(!e.parentNode)return t;for(var a=e.parentNode.firstChild;a;)1===a.nodeType&&a!==e&&t.push(a),a=a.nextSibling;return t}},5090:function(e,t,a){a.d(t,{_:function(){return n},z:function(){return r}});var l=a(5389),r=function(e){(0,l.Z)(e.target.parentElement).filter((function(e){return e.classList.contains("show")})).forEach((function(e){e.classList.remove("show"),e.childNodes[0]&&e.childNodes[0].setAttribute("aria-expanded",!1),e.childNodes[1]&&e.childNodes[1].classList.remove("show")})),e.target.parentElement.classList.toggle("show"),e.target.setAttribute("aria-expanded",!0),e.target.parentElement.childNodes[1].classList.toggle("show")},n=function(e){document.getElementById("navbarSupportedContent").classList.toggle("show-with-trans")}},1650:function(e,t,a){var l=a(7294),r=a(1082);t.Z=function(e){var t=e.blogs;return l.createElement("section",{className:"blog-pg blog section-padding pt-0"},l.createElement("div",{className:"container"},l.createElement("div",{className:"posts"},l.createElement("div",{className:"row"},t.map((function(e){return l.createElement("div",{className:"col-lg-4",key:e.id},l.createElement("div",{className:"item mb-80 wow fadeInUp","data-wow-delay":".3s"},l.createElement("div",{className:"img"},l.createElement("img",{src:e.image,alt:""})),l.createElement("div",{className:"cont"},l.createElement("div",null,l.createElement("div",{className:"info"},l.createElement(r.rU,{to:"/blog/blog-dark",className:"date"},l.createElement("span",null,l.createElement("i",null,e.date.day),e.date.month)),l.createElement("span",null,"/"),e.tags.map((function(e,t){return l.createElement(r.rU,{key:t,to:"/blog/blog-dark/",className:"tag"},l.createElement("span",null,e))}))),l.createElement("h5",null,l.createElement(r.rU,{to:"/blog-details/blog-details-dark"},e.title.substr(0,55)+"...")),l.createElement("div",{className:"btn-more"},l.createElement(r.rU,{to:"/blog-details/blog-details-dark",className:"simple-btn"},"Read More"))))))})),l.createElement("div",{className:"pagination"},l.createElement("span",{className:"active"},l.createElement(r.rU,{to:"/blog/blog-dark"},"1")),l.createElement("span",null,l.createElement(r.rU,{to:"/blog/blog-dark"},"2")),l.createElement("span",null,l.createElement(r.rU,{to:"/blog/blog-blogwindow.theme}"},l.createElement("i",{className:"fas fa-angle-right"}))))))))}},2057:function(e,t,a){var l=a(7294),r=a(1082),n=a(2806);t.Z=function(e){var t=e.hideBGCOLOR;return l.createElement("footer",{className:t?"":"sub-bg"},l.createElement("div",{className:"container"},l.createElement("div",{className:"row"},l.createElement("div",{className:"col-lg-4"},l.createElement("div",{className:"item md-mb50"},l.createElement("div",{className:"title"},l.createElement("h5",null,"Contact Us")),l.createElement("ul",null,l.createElement("li",null,l.createElement("span",{className:"icon pe-7s-map-marker"}),l.createElement("div",{className:"cont"},l.createElement("h6",null,"Officeal Address"),l.createElement("p",null,"504 White St . Dawsonville, GA 30534 , New York"))),l.createElement("li",null,l.createElement("span",{className:"icon pe-7s-mail"}),l.createElement("div",{className:"cont"},l.createElement("h6",null,"Email Us"),l.createElement("p",null,"support@gmail.com"))),l.createElement("li",null,l.createElement("span",{className:"icon pe-7s-call"}),l.createElement("div",{className:"cont"},l.createElement("h6",null,"Call Us"),l.createElement("p",null,"+87986451666")))))),l.createElement("div",{className:"col-lg-4"},l.createElement("div",{className:"item md-mb50"},l.createElement("div",{className:"title"},l.createElement("h5",null,"Recent News")),l.createElement("ul",null,l.createElement("li",null,l.createElement("div",{className:"img"},l.createElement(r.rU,{to:"/blog-details/blog-details-dark"},l.createElement("img",{src:"/img/blog/1.jpg",alt:""}))),l.createElement("div",{className:"sm-post"},l.createElement(r.rU,{to:"/blog-details/blog-details-dark"},l.createElement("p",null,"The Start-Up Ultimate Guide to Make Your WordPress Journal.")),l.createElement(r.rU,{to:"/blog/blog-dark"},l.createElement("span",{className:"date"},"14 sep 2022")))),l.createElement("li",null,l.createElement("div",{className:"img"},l.createElement(r.rU,{to:"/blog-details/blog-details-dark"},l.createElement("img",{src:"/img/blog/2.jpg",alt:""}))),l.createElement("div",{className:"sm-post"},l.createElement(r.rU,{to:"/blog-details/blog-details-dark"},l.createElement("p",null,"The Start-Up Ultimate Guide to Make Your WordPress Journal.")),l.createElement(r.rU,{to:"/blog/blog-dark"},l.createElement("span",{className:"date"},"14 sep 2022")))),l.createElement("li",null,l.createElement("div",{className:"subscribe"},l.createElement("input",{type:"text",placeholder:"Type Your Email"}),l.createElement("span",{className:"subs pe-7s-paper-plane"})))))),l.createElement("div",{className:"col-lg-4"},l.createElement("div",{className:"item"},l.createElement("div",{className:"logo"},l.createElement("img",{src:n.E8,alt:""})),l.createElement("div",{className:"social"},l.createElement("a",{href:"#0"},l.createElement("i",{className:"fab fa-facebook-f"})),l.createElement("a",{href:"#0"},l.createElement("i",{className:"fab fa-twitter"})),l.createElement("a",{href:"#0"},l.createElement("i",{className:"fab fa-instagram"})),l.createElement("a",{href:"#0"},l.createElement("i",{className:"fab fa-youtube"}))),l.createElement("div",{className:"copy-right"},l.createElement("p",null,"© 2022, Vie Template. Made with passion by",l.createElement(r.rU,{to:"https://themeforest.net/user/themescamp/portfolio",target:"_blank"},"ThemesCamp"),".")))))))}},5233:function(e,t,a){a.d(t,{Z:function(){return s}});var l=a(7294),r=function(){Pace.on("start",(function(){document.querySelector("#preloader").classList.remove("isdone"),document.querySelector(".loading").classList.remove("isdone")})),Pace.on("done",(function(){document.querySelector("#preloader").classList.add("isdone"),document.querySelector(".loading").classList.add("isdone")})),document.querySelector("body").classList.contains("pace-done")&&(document.querySelector("#preloader").classList.add("isdone"),document.querySelector(".loading").classList.add("isdone")),window.addEventListener("load",(function(){document.querySelector("#preloader").classList.add("isdone"),document.querySelector(".loading").classList.add("isdone"),document.querySelector(".pace-running.pace-running")&&document.querySelector(".pace-running.pace-running").classList.remove("pace-running")}))},n=a(2806),s=function(){return l.useEffect((function(){var e=document.querySelector("body");n.QP?(r(),e.classList.contains("hideX")&&e.classList.remove("hideX")):e.classList.add("hideX")}),[]),l.createElement(l.Fragment,null,l.createElement("div",{className:!0===n.QP?"showX":"hideX"},l.createElement("div",{className:"loading"},l.createElement("span",null,"L"),l.createElement("span",null,"o"),l.createElement("span",null,"a"),l.createElement("span",null,"d"),l.createElement("span",null,"i"),l.createElement("span",null,"n"),l.createElement("span",null,"g")),l.createElement("div",{id:"preloader"})))}},2699:function(e,t,a){var l=a(7294),r=a(1082),n=a(2806),s=a(5090);t.Z=function(e){var t=e.lr,a=e.nr,o=e.theme;return l.createElement("nav",{ref:a,className:"navbar navbar-expand-lg change "+("themeL"===o?"light":"")},l.createElement("div",{className:"container"},l.createElement(r.rU,{to:"/",className:"logo"},o&&"themeL"===o?l.createElement("img",{ref:t,src:n.Q1,alt:"logo"}):l.createElement("img",{ref:t,src:n.E8,alt:"logo"})),l.createElement("button",{className:"navbar-toggler",type:"button",onClick:s._,"data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},l.createElement("span",{className:"icon-bar"},l.createElement("i",{className:"fas fa-bars"}))),l.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},l.createElement("ul",{className:"navbar-nav ml-auto"},l.createElement("li",{className:"nav-item dropdown",onClick:s.z},l.createElement("span",{className:"nav-link dropdown-toggle","data-toggle":"dropdown",role:"button","aria-haspopup":"true","aria-expanded":"false"},"Home"),l.createElement("div",{className:"dropdown-menu"},l.createElement(r.rU,{to:"/homepage/home1-dark",className:"dropdown-item"},"Main Home"))),l.createElement("li",{className:"nav-item"},l.createElement(r.rU,{to:"/about/about-dark",className:"nav-link"},"About")),l.createElement("li",{className:"nav-item dropdown",onClick:s.z},l.createElement("span",{className:"nav-link dropdown-toggle","data-toggle":"dropdown",role:"button","aria-haspopup":"true","aria-expanded":"false"},"Works"),l.createElement("div",{className:"dropdown-menu"},l.createElement(r.rU,{to:"/showcase/showcase-dark",className:"dropdown-item"},"Showcase Parallax"),l.createElement(r.rU,{to:"/showcase4/showcase4-dark",className:"dropdown-item"},"Showcase Carousel"),l.createElement(r.rU,{to:"/showcase3/showcase3-dark",className:"dropdown-item"},"Showcase Circle"),l.createElement(r.rU,{to:"/works/works-dark",className:"dropdown-item"},"Portfolio Masonry"),l.createElement(r.rU,{to:"/works2/works2-dark",className:"dropdown-item"},"Portfolio Filtering"),l.createElement(r.rU,{to:"/works3/works3-dark",className:"dropdown-item"},"Portfolio Gallery"))),l.createElement("li",{className:"nav-item dropdown",onClick:s.z},l.createElement("span",{className:"nav-link dropdown-toggle","data-toggle":"dropdown",role:"button","aria-haspopup":"true","aria-expanded":"false"},"Blog"),l.createElement("div",{className:"dropdown-menu"},l.createElement(r.rU,{to:"/blog/blog-dark",className:"dropdown-item"},"Blog Standerd"),l.createElement(r.rU,{to:"/blog-list/blog-list-dark",className:"dropdown-item"},"Blog List"),l.createElement(r.rU,{to:"/blog-grid/blog-grid-dark",className:"dropdown-item"},"Blog Grid"),l.createElement(r.rU,{to:"/blog-details/blog-details-dark",className:"dropdown-item"},"Blog Details"))),l.createElement("li",{className:"nav-item"},l.createElement(r.rU,{to:"/contact/contact-dark",className:"nav-link"},"Contact"))))))}},9899:function(e,t,a){var l=a(7294);t.Z=function(e){var t=e.title,a=e.paragraph,r=e.className;return l.createElement("section",{className:"page-header "+(r&&r)},l.createElement("div",{className:"container"},l.createElement("div",{className:"row justify-content-center"},l.createElement("div",{className:"col-lg-7 col-md-9"},l.createElement("div",{className:"cont text-center"},l.createElement("h1",{className:"mb-10 color-font"},t),l.createElement("p",null,a))))))}},3422:function(e,t,a){a.d(t,{Z:function(){return n}});var l=a(7294),r=function(){var e,t;e=document.querySelector(".cursor-inner"),t=document.querySelector(".cursor-outer"),window.onmousemove=function(a){t.style.transform="translate("+a.clientX+"px, "+a.clientY+"px)",e.style.transform="translate("+a.clientX+"px, "+a.clientY+"px)",a.clientY,a.clientX},document.querySelector(".cursor-pointer")&&(document.querySelector(".cursor-pointer").addEventListener("mouseenter",(function(){e.classList.add("cursor-hover"),t.classList.add("cursor-hover")})),document.querySelector(".cursor-pointer").addEventListener("mouseleave",(function(){e.classList.remove("cursor-hover"),t.classList.remove("cursor-hover")})),e.style.visibility="visible",t.style.visibility="visible"),document.querySelectorAll("a").forEach((function(a){a.addEventListener("mouseenter",(function(){e.classList.add("cursor-hover"),t.classList.add("cursor-hover")}))})),document.querySelectorAll("a").forEach((function(a){a.addEventListener("mouseleave",(function(){e.classList.remove("cursor-hover"),t.classList.remove("cursor-hover")}))})),e.style.visibility="visible",t.style.visibility="visible"},n=function(){return l.useEffect((function(){r()}),[]),l.createElement(l.Fragment,null,l.createElement("div",{className:"mouse-cursor cursor-outer"}),l.createElement("div",{className:"mouse-cursor cursor-inner"}))}},5354:function(e,t,a){a.d(t,{Z:function(){return n}});var l=a(7294),r=function(){var e=document.querySelector(".progress-wrap path"),t=e.getTotalLength();e.style.transition=e.style.WebkitTransition="none",e.style.strokeDasharray=t+" "+t,e.style.strokeDashoffset=t,e.getBoundingClientRect(),e.style.transition=e.style.WebkitTransition="stroke-dashoffset 10ms linear";var a=function(){var a=window.pageYOffset,l=document.documentElement.scrollHeight-window.innerHeight,r=t-a*t/l;e.style.strokeDashoffset=r};a(),window.addEventListener("scroll",a);var l=document.querySelector(".progress-wrap");window.addEventListener("scroll",(function(){window.pageYOffset>150?l.classList.add("active-progress"):document.querySelector(".progress-wrap").classList.remove("active-progress")})),l.addEventListener("click",(function(e){return e.preventDefault(),window.scrollTo({top:0,behavior:"smooth"}),!1}))},n=function(){return l.useEffect((function(){r()}),[]),l.createElement("div",{className:"progress-wrap cursor-pointer"},l.createElement("svg",{className:"progress-circle svg-content",width:"100%",height:"100%",viewBox:"-1 -1 102 102"},l.createElement("path",{d:"M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"})))}},5942:function(e,t,a){var l=a(7294),r=a(1082),n=a(3422),s=a(5354),o=a(5233);t.Z=function(e){var t=e.children,a=e.useSkin,c=e.mobileappstyle;return l.useEffect((function(){window.theme="dark";var e=document.querySelector('link[href="/css/light.css"]'),t=document.querySelector('link[href="/css/dark.css"]');if(e){if(!t){var l=document.createElement("link");l.rel="stylesheet",l.href="/css/dark.css",document.head.appendChild(l)}e.remove()}if(a){var r=document.createElement("link");r.rel="stylesheet",r.href="/css/arch-skin-dark.css",document.head.appendChild(r)}if(c){var n=document.createElement("link");n.rel="stylesheet",n.href="/css/mobile-app-dark.css",document.head.appendChild(n)}}),[a,c]),l.createElement(l.Fragment,null,l.createElement(n.Z,null),l.createElement(o.Z,null),t,l.createElement(s.Z,null),l.createElement(r.Xf,{src:"/js/wowInit.js"}))}},8086:function(e,t,a){a.r(t),a.d(t,{Head:function(){return m}});var l=a(7294),r=a(5607),n=a(5942),s=a(2699),o=a(1650),c=a(9899),i=a(2057),m=function(){return l.createElement(l.Fragment,null,l.createElement("title",null,"Vie - Blog Grid Dark"))};t.default=function(){var e=l.useRef(null),t=l.useRef(null);return l.useEffect((function(){var t=e.current;window.pageYOffset>300?t.classList.add("nav-scroll"):t.classList.remove("nav-scroll"),window.addEventListener("scroll",(function(){window.pageYOffset>300?t.classList.add("nav-scroll"):t.classList.remove("nav-scroll")}))}),[e]),l.createElement(n.Z,null,l.createElement("div",{className:"circle-bg"},l.createElement("div",{className:"circle-color fixed"},l.createElement("div",{className:"gradient-circle"}),l.createElement("div",{className:"gradient-circle two"}))),l.createElement(s.Z,{nr:e,lr:t}),l.createElement(c.Z,{title:"Our News.",paragraph:"All the most current news and events of our creative team."}),l.createElement(o.Z,{blogs:r}),l.createElement(i.Z,null))}},2806:function(e){e.exports=JSON.parse('{"E8":"/img/logo-light.png","Q1":"/img/logo-dark.png","QP":true}')},5607:function(e){e.exports=JSON.parse('[{"id":1,"title":"How to use solid color combine with simple furnitures.","image":"/img/blog/b1.jpg","tags":["WordPress","Themeforest","Vie"],"date":{"day":"07","month":"August"}},{"id":2,"title":"How to use solid color combine with simple furnitures.","image":"/img/blog/b2.jpg","tags":["WordPress"],"date":{"day":"07","month":"August"}},{"id":3,"title":"How to use solid color combine with simple furnitures.","image":"/img/blog/b3.jpg","tags":["WordPress","Themeforest","Vie"],"date":{"day":"07","month":"August"}},{"id":4,"title":"How to use solid color combine with simple furnitures.","image":"/img/blog/b4.jpg","tags":["WordPress","Themeforest","Vie"],"date":{"day":"07","month":"August"}},{"id":5,"title":"How to use solid color combine with simple furnitures.","image":"/img/blog/b2.jpg","tags":["WordPress"],"date":{"day":"07","month":"August"}},{"id":6,"title":"How to use solid color combine with simple furnitures.","image":"/img/blog/b3.jpg","tags":["WordPress","Themeforest","Vie"],"date":{"day":"07","month":"August"}}]')}}]);
//# sourceMappingURL=component---src-pages-blog-grid-blog-grid-dark-jsx-7ed8d1a41a3bd8ffd4d1.js.map