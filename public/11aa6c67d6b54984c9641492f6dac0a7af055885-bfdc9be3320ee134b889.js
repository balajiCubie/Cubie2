"use strict";(self.webpackChunkvie_gatsby=self.webpackChunkvie_gatsby||[]).push([[168],{5389:function(e,t){t.Z=function(e){var t=[];if(!e.parentNode)return t;for(var a=e.parentNode.firstChild;a;)1===a.nodeType&&a!==e&&t.push(a),a=a.nextSibling;return t}},9836:function(e,t){t.Z=function(){var e,t=document.querySelectorAll(".gallery");t.length>=1&&t.forEach((function(t){e=new Isotope(t,{itemSelector:".items"})}));var a=document.querySelectorAll(".gallery-mons");a.length>=1&&a.forEach((function(t){e=new Isotope(t,{itemSelector:".items",masonry:{columnWidth:".width2"}})}));var l=document.querySelector(".filtering");if(l){var n=function(e){e.addEventListener("click",(function(t){matchesSelector(t.target,"span")&&(e.querySelector(".active").classList.remove("active"),t.target.classList.add("active"))}))};l.addEventListener("click",(function(t){if(matchesSelector(t.target,"span")){var a=t.target.getAttribute("data-filter");e.arrange({filter:a})}}));for(var r=document.querySelectorAll(".filtering"),c=0,s=r.length;c<s;c++){n(r[c])}}}},2608:function(e,t,a){var l=a(7294),n=a(2497),r=a(1082);t.Z=function(e){var t=e.img;return l.createElement("section",{className:"call-action section-padding sub-bg bg-img",style:{backgroundImage:"url("+(t||"/img/patrn.svg")+")"}},l.createElement("div",{className:"container"},l.createElement("div",{className:"row"},l.createElement("div",{className:"col-md-8 col-lg-9"},l.createElement("div",{className:"content sm-mb30"},l.createElement(n.Z,null,l.createElement("h6",{className:"wow words chars splitting","data-splitting":!0},"Let’s Talk"),l.createElement("h2",{className:"wow words chars splitting","data-splitting":!0},"about your ",l.createElement("br",null)," ",l.createElement("b",{className:"back-color"},"next project"),".")))),l.createElement("div",{className:"col-md-4 col-lg-3 valign"},l.createElement(r.rU,{to:"/contact/contact-dark",className:"butn bord curve wow fadeInUp","data-wow-delay":".5s"},l.createElement("span",null,"Get In Touch"))))))}},2057:function(e,t,a){var l=a(7294),n=a(1082),r=a(2806);t.Z=function(e){var t=e.hideBGCOLOR;return l.createElement("footer",{className:t?"":"sub-bg"},l.createElement("div",{className:"container"},l.createElement("div",{className:"row"},l.createElement("div",{className:"col-lg-4"},l.createElement("div",{className:"item md-mb50"},l.createElement("div",{className:"title"},l.createElement("h5",null,"Contact Us")),l.createElement("ul",null,l.createElement("li",null,l.createElement("span",{className:"icon pe-7s-map-marker"}),l.createElement("div",{className:"cont"},l.createElement("h6",null,"Officeal Address"),l.createElement("p",null,"504 White St . Dawsonville, GA 30534 , New York"))),l.createElement("li",null,l.createElement("span",{className:"icon pe-7s-mail"}),l.createElement("div",{className:"cont"},l.createElement("h6",null,"Email Us"),l.createElement("p",null,"support@gmail.com"))),l.createElement("li",null,l.createElement("span",{className:"icon pe-7s-call"}),l.createElement("div",{className:"cont"},l.createElement("h6",null,"Call Us"),l.createElement("p",null,"+87986451666")))))),l.createElement("div",{className:"col-lg-4"},l.createElement("div",{className:"item md-mb50"},l.createElement("div",{className:"title"},l.createElement("h5",null,"Recent News")),l.createElement("ul",null,l.createElement("li",null,l.createElement("div",{className:"img"},l.createElement(n.rU,{to:"/blog-details/blog-details-dark"},l.createElement("img",{src:"/img/blog/1.jpg",alt:""}))),l.createElement("div",{className:"sm-post"},l.createElement(n.rU,{to:"/blog-details/blog-details-dark"},l.createElement("p",null,"The Start-Up Ultimate Guide to Make Your WordPress Journal.")),l.createElement(n.rU,{to:"/blog/blog-dark"},l.createElement("span",{className:"date"},"14 sep 2022")))),l.createElement("li",null,l.createElement("div",{className:"img"},l.createElement(n.rU,{to:"/blog-details/blog-details-dark"},l.createElement("img",{src:"/img/blog/2.jpg",alt:""}))),l.createElement("div",{className:"sm-post"},l.createElement(n.rU,{to:"/blog-details/blog-details-dark"},l.createElement("p",null,"The Start-Up Ultimate Guide to Make Your WordPress Journal.")),l.createElement(n.rU,{to:"/blog/blog-dark"},l.createElement("span",{className:"date"},"14 sep 2022")))),l.createElement("li",null,l.createElement("div",{className:"subscribe"},l.createElement("input",{type:"text",placeholder:"Type Your Email"}),l.createElement("span",{className:"subs pe-7s-paper-plane"})))))),l.createElement("div",{className:"col-lg-4"},l.createElement("div",{className:"item"},l.createElement("div",{className:"logo"},l.createElement("img",{src:r.E8,alt:""})),l.createElement("div",{className:"social"},l.createElement("a",{href:"#0"},l.createElement("i",{className:"fab fa-facebook-f"})),l.createElement("a",{href:"#0"},l.createElement("i",{className:"fab fa-twitter"})),l.createElement("a",{href:"#0"},l.createElement("i",{className:"fab fa-instagram"})),l.createElement("a",{href:"#0"},l.createElement("i",{className:"fab fa-youtube"}))),l.createElement("div",{className:"copy-right"},l.createElement("p",null,"© 2022, Vie Template. Made with passion by",l.createElement(n.rU,{to:"https://themeforest.net/user/themescamp/portfolio",target:"_blank"},"ThemesCamp"),".")))))))}},4085:function(e,t,a){var l=a(4578),n=a(7294),r=a(8538),c=function(e){function t(){for(var t,a=arguments.length,l=new Array(a),r=0;r<a;r++)l[r]=arguments[r];return(t=e.call.apply(e,[this].concat(l))||this).renderArrows=function(){return n.createElement("div",{className:"arrows"},n.createElement("div",{className:"container"},n.createElement("div",{onClick:function(){return t.slider.slickNext()},className:"next cursor-pointer"},n.createElement("span",{className:"pe-7s-angle-right"})),n.createElement("div",{onClick:function(){return t.slider.slickPrev()},className:"prev cursor-pointer"},n.createElement("span",{className:"pe-7s-angle-left"}))))},t}return(0,l.Z)(t,e),t.prototype.render=function(){var e=this;return n.createElement("section",{className:"testimonials "+(this.props.withIMG?"section-padding bg-img":this.props.withCOLOR?"section-padding back-color":this.props.noPadding?"":"section-padding")+" "+(this.props.classText?this.props.classText:""),style:{backgroundImage:this.props.withIMG?"url(/img/testim-img.jpg)":"none"}},this.props.showHead&&n.createElement("div",{className:"container"},n.createElement("div",{className:"row justify-content-center"},n.createElement("div",{className:"col-lg-8 col-md-10"},n.createElement("div",{className:"sec-head  text-center"},n.createElement("h6",{className:"wow fadeIn","data-wow-delay":".5s"},"Testimonials"),n.createElement("h3",{className:"wow color-font"},"We love our clients from all over the world."))))),n.createElement("div",{className:"container-fluid position-re"},n.createElement("div",{className:"row wow fadeInUp","data-wow-delay":".5s"},n.createElement("div",{className:"col-lg-12"},n.createElement(r.Z,{className:"slic-item",ref:function(t){return e.slider=t},dots:!1,infinite:!0,arrows:!0,centerMode:!0,autoplay:!0,rows:1,slidesToScroll:1,slidesToShow:3,responsive:[{breakpoint:1024,settings:{slidesToShow:1,centerMode:!1}},{breakpoint:767,settings:{slidesToShow:1,centerMode:!1}},{breakpoint:480,settings:{slidesToShow:1,centerMode:!1}}]},n.createElement("div",{className:"item"},n.createElement("div",{className:"info valign"},n.createElement("div",{className:"cont"},n.createElement("div",{className:"author"},n.createElement("div",{className:"img"},n.createElement("img",{src:"/img/clients/1.jpg",alt:""})),n.createElement("h6",{className:"author-name color-font"},"Alex Regelman"),n.createElement("span",{className:"author-details"},"Co-founder, Colabrio")))),n.createElement("p",null,"I would highly recommend Vie Digital. I worked with the team on an animation for our ‘Click & Collect’ service.")),n.createElement("div",{className:"item"},n.createElement("div",{className:"info valign"},n.createElement("div",{className:"cont"},n.createElement("div",{className:"author"},n.createElement("div",{className:"img"},n.createElement("img",{src:"/img/clients/1.jpg",alt:""})),n.createElement("h6",{className:"author-name color-font"},"Alex Regelman"),n.createElement("span",{className:"author-details"},"Co-founder, Colabrio")))),n.createElement("p",null,"I would highly recommend Vie Digital. I worked with the team on an animation for our ‘Click & Collect’ service.")),n.createElement("div",{className:"item"},n.createElement("div",{className:"info valign"},n.createElement("div",{className:"cont"},n.createElement("div",{className:"author"},n.createElement("div",{className:"img"},n.createElement("img",{src:"/img/clients/1.jpg",alt:""})),n.createElement("h6",{className:"author-name color-font"},"Alex Regelman"),n.createElement("span",{className:"author-details"},"Co-founder, Colabrio")))),n.createElement("p",null,"I would highly recommend Vie Digital. I worked with the team on an animation for our ‘Click & Collect’ service.")),n.createElement("div",{className:"item"},n.createElement("div",{className:"info valign"},n.createElement("div",{className:"cont"},n.createElement("div",{className:"author"},n.createElement("div",{className:"img"},n.createElement("img",{src:"/img/clients/1.jpg",alt:""})),n.createElement("h6",{className:"author-name color-font"},"Alex Regelman"),n.createElement("span",{className:"author-details"},"Co-founder, Colabrio")))),n.createElement("p",null,"I would highly recommend Vie Digital. I worked with the team on an animation for our ‘Click & Collect’ service."))))),this.renderArrows()))},t}(n.Component);t.Z=c},1549:function(e,t,a){var l=a(7294),n=a(1082);t.Z=function(e){var t=e.sliderRef;return l.createElement("header",{ref:t,className:"slider-st valign position-re"},l.createElement("div",{className:"container"},l.createElement("div",{className:"row"},l.createElement("div",{className:"col-lg-6 valign"},l.createElement("div",{className:"cont md-mb50"},l.createElement("div",{className:"sub-title mb-5"},l.createElement("h6",null,"Digital Consulting Agency")),l.createElement("h1",{className:"mb-10 fw-600"},"Unique Business Consulting."),l.createElement("p",null,"We help our clients succeed by creating brand identities, digital experiences, and print materials."),l.createElement(n.rU,{to:"/about/about-dark",className:"butn bord curve mt-30"},l.createElement("span",null,"About Us")))),l.createElement("div",{className:"col-lg-6"},l.createElement("div",{className:"img"},l.createElement("img",{src:"/img/slid/001.jpg",alt:""}))))),l.createElement("div",{className:"line bottom left"}))}},5233:function(e,t,a){a.d(t,{Z:function(){return c}});var l=a(7294),n=function(){Pace.on("start",(function(){document.querySelector("#preloader").classList.remove("isdone"),document.querySelector(".loading").classList.remove("isdone")})),Pace.on("done",(function(){document.querySelector("#preloader").classList.add("isdone"),document.querySelector(".loading").classList.add("isdone")})),document.querySelector("body").classList.contains("pace-done")&&(document.querySelector("#preloader").classList.add("isdone"),document.querySelector(".loading").classList.add("isdone")),window.addEventListener("load",(function(){document.querySelector("#preloader").classList.add("isdone"),document.querySelector(".loading").classList.add("isdone"),document.querySelector(".pace-running.pace-running")&&document.querySelector(".pace-running.pace-running").classList.remove("pace-running")}))},r=a(2806),c=function(){return l.useEffect((function(){var e=document.querySelector("body");r.QP?(n(),e.classList.contains("hideX")&&e.classList.remove("hideX")):e.classList.add("hideX")}),[]),l.createElement(l.Fragment,null,l.createElement("div",{className:!0===r.QP?"showX":"hideX"},l.createElement("div",{className:"loading"},l.createElement("span",null,"L"),l.createElement("span",null,"o"),l.createElement("span",null,"a"),l.createElement("span",null,"d"),l.createElement("span",null,"i"),l.createElement("span",null,"n"),l.createElement("span",null,"g")),l.createElement("div",{id:"preloader"})))}},2699:function(e,t,a){var l=a(7294),n=a(1082),r=a(2806),c=a(5090);t.Z=function(e){var t=e.lr,a=e.nr,s=e.theme;return l.createElement("nav",{ref:a,className:"navbar navbar-expand-lg change "+("themeL"===s?"light":"")},l.createElement("div",{className:"container"},l.createElement(n.rU,{to:"/",className:"logo"},s&&"themeL"===s?l.createElement("img",{ref:t,src:r.Q1,alt:"logo"}):l.createElement("img",{ref:t,src:r.E8,alt:"logo"})),l.createElement("button",{className:"navbar-toggler",type:"button",onClick:c._,"data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},l.createElement("span",{className:"icon-bar"},l.createElement("i",{className:"fas fa-bars"}))),l.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},l.createElement("ul",{className:"navbar-nav ml-auto"},l.createElement("li",{className:"nav-item dropdown",onClick:c.z},l.createElement("span",{className:"nav-link dropdown-toggle","data-toggle":"dropdown",role:"button","aria-haspopup":"true","aria-expanded":"false"},"Home"),l.createElement("div",{className:"dropdown-menu"},l.createElement(n.rU,{to:"/homepage/home1-dark",className:"dropdown-item"},"Main Home"))),l.createElement("li",{className:"nav-item"},l.createElement(n.rU,{to:"/about/about-dark",className:"nav-link"},"About")),l.createElement("li",{className:"nav-item dropdown",onClick:c.z},l.createElement("span",{className:"nav-link dropdown-toggle","data-toggle":"dropdown",role:"button","aria-haspopup":"true","aria-expanded":"false"},"Works"),l.createElement("div",{className:"dropdown-menu"},l.createElement(n.rU,{to:"/showcase/showcase-dark",className:"dropdown-item"},"Showcase Parallax"),l.createElement(n.rU,{to:"/showcase4/showcase4-dark",className:"dropdown-item"},"Showcase Carousel"),l.createElement(n.rU,{to:"/showcase3/showcase3-dark",className:"dropdown-item"},"Showcase Circle"),l.createElement(n.rU,{to:"/works/works-dark",className:"dropdown-item"},"Portfolio Masonry"),l.createElement(n.rU,{to:"/works2/works2-dark",className:"dropdown-item"},"Portfolio Filtering"),l.createElement(n.rU,{to:"/works3/works3-dark",className:"dropdown-item"},"Portfolio Gallery"))),l.createElement("li",{className:"nav-item dropdown",onClick:c.z},l.createElement("span",{className:"nav-link dropdown-toggle","data-toggle":"dropdown",role:"button","aria-haspopup":"true","aria-expanded":"false"},"Blog"),l.createElement("div",{className:"dropdown-menu"},l.createElement(n.rU,{to:"/blog/blog-dark",className:"dropdown-item"},"Blog Standerd"),l.createElement(n.rU,{to:"/blog-list/blog-list-dark",className:"dropdown-item"},"Blog List"),l.createElement(n.rU,{to:"/blog-grid/blog-grid-dark",className:"dropdown-item"},"Blog Grid"),l.createElement(n.rU,{to:"/blog-details/blog-details-dark",className:"dropdown-item"},"Blog Details"))),l.createElement("li",{className:"nav-item"},l.createElement(n.rU,{to:"/contact/contact-dark",className:"nav-link"},"Contact"))))))}},4645:function(e,t,a){var l=a(7294),n=a(1082),r=a(9836);t.Z=function(e){var t=e.grid,a=e.filterPosition;return l.useEffect((function(){setTimeout((function(){(0,r.Z)()}),1e3)}),[]),l.createElement("section",{className:"portfolio section-padding pb-70"},l.createElement("div",{className:"container"},l.createElement("div",{className:"row justify-content-center"},l.createElement("div",{className:"col-lg-8 col-md-10"},l.createElement("div",{className:"sec-head text-center"},l.createElement("h6",{className:"wow fadeIn","data-wow-delay":".5s"},"Portfolio"),l.createElement("h3",{className:"wow color-font"},"Our Recent Web Design & ",l.createElement("br",null)," Some Past Projects."))))),l.createElement("div",{className:3===t?"container-fluid":"container"},l.createElement("div",{className:"row"},l.createElement("div",{className:"filtering "+("center"===a?"text-center":"left"===a?"text-left":"text-right")+" col-12"},l.createElement("div",{className:"filter"},l.createElement("span",{"data-filter":"*",className:"active"},"All"),l.createElement("span",{"data-filter":".brand"},"Branding"),l.createElement("span",{"data-filter":".web"},"Mobile App"),l.createElement("span",{"data-filter":".graphic"},"Creative"))),l.createElement("div",{className:"gallery full-width"},l.createElement("div",{className:(3===t?"col-lg-4 col-md-6":2===t?"col-md-6 lg-mr":"col-12")+" items graphic wow fadeInUp","data-wow-delay":".4s"},l.createElement("div",{className:"item-img"},l.createElement(n.rU,{to:"/project-details2/project-details2-dark",className:"imago wow"},l.createElement("img",{src:"/img/portfolio/portfolio/1/1.jpg",alt:"image"}),l.createElement("div",{className:"item-img-overlay"}))),l.createElement("div",{className:"cont"},l.createElement("h6",null,"Creativity Demand"),l.createElement("span",null,l.createElement(n.rU,{to:"/works/works-dark"},"Design"),", ",l.createElement(n.rU,{to:"/works/works-dark"},"WordPress")))),l.createElement("div",{className:(3===t?"col-lg-4 col-md-6":2===t?"col-md-6":"col-12")+" items web wow fadeInUp","data-wow-delay":".4s"},l.createElement("div",{className:"item-img"},l.createElement(n.rU,{to:"/project-details2/project-details2-dark",className:"imago wow"},l.createElement("img",{src:"/img/portfolio/portfolio/1/2.jpg",alt:"image"}),l.createElement("div",{className:"item-img-overlay"}))),l.createElement("div",{className:"cont"},l.createElement("h6",null,"Through The Breaking"),l.createElement("span",null,l.createElement("a",{href:"#0"},"Design"),", ",l.createElement("a",{href:"#0"},"WordPress")))),l.createElement("div",{className:(3===t?"col-lg-4 col-md-6":2===t?"col-md-6":"col-12")+" items brand wow fadeInUp","data-wow-delay":".4s"},l.createElement("div",{className:"item-img"},l.createElement(n.rU,{to:"/project-details2/project-details2-dark",className:"imago wow"},l.createElement("img",{src:"/img/portfolio/portfolio/1/3.jpg",alt:"image"}),l.createElement("div",{className:"item-img-overlay"}))),l.createElement("div",{className:"cont"},l.createElement("h6",null,"Create With Creatives"),l.createElement("span",null,l.createElement("a",{href:"#0"},"Design"),", ",l.createElement("a",{href:"#0"},"WordPress")))),l.createElement("div",{className:(3===t?"col-lg-4 col-md-6":2===t?"col-md-6":"col-12")+" items graphic wow fadeInUp","data-wow-delay":".4s"},l.createElement("div",{className:"item-img"},l.createElement(n.rU,{to:"/project-details2/project-details2-dark",className:"imago wow"},l.createElement("img",{src:"/img/portfolio/portfolio/1/4.jpg",alt:"image"}),l.createElement("div",{className:"item-img-overlay"}))),l.createElement("div",{className:"cont"},l.createElement("h6",null,"Energies of Love"),l.createElement("span",null,l.createElement("a",{href:"#0"},"Design"),", ",l.createElement("a",{href:"#0"},"WordPress")))),l.createElement("div",{className:(3===t?"col-lg-4 col-md-6":2===t?"col-md-6":"col-12")+" items web wow fadeInUp","data-wow-delay":".4s"},l.createElement("div",{className:"item-img"},l.createElement(n.rU,{to:"/project-details2/project-details2-dark",className:"imago wow"},l.createElement("img",{src:"/img/portfolio/portfolio/1/5.jpg",alt:"image"}),l.createElement("div",{className:"item-img-overlay"}))),l.createElement("div",{className:"cont"},l.createElement("h6",null,"See It Yourself"),l.createElement("span",null,l.createElement("a",{href:"#0"},"Design"),", ",l.createElement("a",{href:"#0"},"WordPress")))),l.createElement("div",{className:(3===t?"col-lg-4 col-md-6":2===t?"col-md-6":"col-12")+" items brand wow fadeInUp","data-wow-delay":".4s"},l.createElement("div",{className:"item-img"},l.createElement(n.rU,{to:"/project-details2/project-details2-dark",className:"imago wow"},l.createElement("img",{src:"/img/portfolio/portfolio/1/6.jpg",alt:"image"}),l.createElement("div",{className:"item-img-overlay"}))),l.createElement("div",{className:"cont"},l.createElement("h6",null,"Blast From The Past"),l.createElement("span",null,l.createElement("a",{href:"#0"},"Design"),", ",l.createElement("a",{href:"#0"},"WordPress"))))))))}},4976:function(e,t,a){var l=a(7294),n=a(3473);t.Z=function(e){var t=e.style,a=e.lines;return l.createElement("section",{className:"services bords section-padding "+("4item"===t?"lficon":a?"":"pt-0")},l.createElement("div",{className:"container"},l.createElement("div",{className:"row justify-content-center"},l.createElement("div",{className:"col-lg-8 col-md-10"},l.createElement("div",{className:"sec-head  text-center"},l.createElement("h6",{className:"wow fadeIn","data-wow-delay":".5s"},"Best Features"),l.createElement("h3",{className:"wow color-font"},"We are a new digital product development agency")))),l.createElement("div",{className:"row"},"4item"===t?n.map((function(e){return l.createElement("div",{key:e.id,className:"col-lg-6 wow fadeInLeft","data-wow-delay":(1===e.id?".5":2===e.id?".7":3===e.id?".9":"1.1")+"s"},l.createElement("div",{className:"item-box"},l.createElement("div",null,l.createElement("span",{className:"icon "+e.icon})),l.createElement("div",{className:"cont"},l.createElement("h6",null,e.title),l.createElement("p",null,e.content))))})):n.slice(0,3).map((function(e){return l.createElement("div",{key:e.id,className:"col-lg-4 wow fadeInLeft","data-wow-delay":".5s"},l.createElement("div",{className:"item-box md-mb50"},l.createElement("span",{className:"icon "+e.icon}),l.createElement("h6",null,e.title),l.createElement("p",null,e.content)))})))),a?l.createElement(l.Fragment,null,l.createElement("div",{className:"line top left"}),l.createElement("div",{className:"line bottom right"})):null)}},2497:function(e,t,a){var l=a(4578),n=a(7294),r=function(e){function t(){for(var t,a=arguments.length,l=new Array(a),r=0;r<a;r++)l[r]=arguments[r];return(t=e.call.apply(e,[this].concat(l))||this).target=n.createRef(),t.split=function(){t.target.current&&Splitting({target:t.target.current})},t.componentDidMount=t.split,t.componentDidUpdate=t.split,t}return(0,l.Z)(t,e),t.prototype.render=function(){return n.createElement("div",{ref:this.target},this.props.children)},t}(n.Component);t.Z=r},2770:function(e,t,a){var l=a(7294);t.Z=function(){return l.createElement("section",{className:"team section-padding"},l.createElement("div",{className:"container"},l.createElement("div",{className:"row justify-content-center"},l.createElement("div",{className:"col-lg-8 col-md-10"},l.createElement("div",{className:"sec-head text-center"},l.createElement("h6",{className:"wow fadeIn","data-wow-delay":".5s"},"Our Team"),l.createElement("h3",{className:"wow color-font"},"An original team of creators designers & dreamers."))))),l.createElement("div",{className:"container-fluid"},l.createElement("div",{className:"row"},l.createElement("div",{className:"col-lg-3 col-md-6"},l.createElement("div",{className:"item cir md-mb50"},l.createElement("div",{className:"img"},l.createElement("img",{src:"/img/team/1.jpg",alt:""}),l.createElement("div",{id:"circle1"},l.createElement("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"300px",height:"300px",viewBox:"0 0 300 300",enableBackground:"new 0 0 300 300",xmlSpace:"preserve"},l.createElement("defs",null,l.createElement("path",{id:"circlePath1",d:" M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "})),l.createElement("circle",{cx:"150",cy:"100",r:"75",fill:"none"}),l.createElement("g",null,l.createElement("use",{xlinkHref:"#circlePath1",fill:"none"}),l.createElement("text",{fill:"#fff"},l.createElement("textPath",{xlinkHref:"#circlePath1"},"CEO Manager CEO Manager CEO Manager"))))),l.createElement("div",{className:"info"},l.createElement("h6",null,"Ryan Hicks"),l.createElement("span",null,"Client Manager"))))),l.createElement("div",{className:"col-lg-3 col-md-6"},l.createElement("div",{className:"item cir md-mb50"},l.createElement("div",{className:"img"},l.createElement("img",{src:"/img/team/2.jpg",alt:""}),l.createElement("div",{id:"circle2"},l.createElement("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"300px",height:"300px",viewBox:"0 0 300 300",enableBackground:"new 0 0 300 300",xmlSpace:"preserve"},l.createElement("defs",null,l.createElement("path",{id:"circlePath2",d:" M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "})),l.createElement("circle",{cx:"150",cy:"100",r:"75",fill:"none"}),l.createElement("g",null,l.createElement("use",{xlinkHref:"#circlePath2",fill:"none"}),l.createElement("text",{fill:"#fff"},l.createElement("textPath",{xlinkHref:"#circlePath2"},"Interior Designer Interior Designer Interior Designer"))))),l.createElement("div",{className:"info"},l.createElement("h6",null,"Ryan Hicks"),l.createElement("span",null,"Client Manager"))))),l.createElement("div",{className:"col-lg-3 col-md-6"},l.createElement("div",{className:"item cir sm-mb50"},l.createElement("div",{className:"img"},l.createElement("img",{src:"/img/team/3.jpg",alt:""}),l.createElement("div",{id:"circle3"},l.createElement("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"300px",height:"300px",viewBox:"0 0 300 300",enableBackground:"new 0 0 300 300",xmlSpace:"preserve"},l.createElement("defs",null,l.createElement("path",{id:"circlePath3",d:" M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "})),l.createElement("circle",{cx:"150",cy:"100",r:"75",fill:"none"}),l.createElement("g",null,l.createElement("use",{xlinkHref:"#circlePath3",fill:"none"}),l.createElement("text",{fill:"#fff"},l.createElement("textPath",{xlinkHref:"#circlePath3"},"Landscape Designer Landscape Designer Landscape Designer"))))),l.createElement("div",{className:"info"},l.createElement("h6",null,"Ryan Hicks"),l.createElement("span",null,"Client Manager"))))),l.createElement("div",{className:"col-lg-3 col-md-6"},l.createElement("div",{className:"item cir"},l.createElement("div",{className:"img"},l.createElement("img",{src:"/img/team/4.jpg",alt:""}),l.createElement("div",{id:"circle4"},l.createElement("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"300px",height:"300px",viewBox:"0 0 300 300",enableBackground:"new 0 0 300 300",xmlSpace:"preserve"},l.createElement("defs",null,l.createElement("path",{id:"circlePath4",d:" M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "})),l.createElement("circle",{cx:"150",cy:"100",r:"75",fill:"none"}),l.createElement("g",null,l.createElement("use",{xlinkHref:"#circlePath4",fill:"none"}),l.createElement("text",{fill:"#fff"},l.createElement("textPath",{xlinkHref:"#circlePath4"},"Client Manager Client Manager Client Manager"))))),l.createElement("div",{className:"info"},l.createElement("h6",null,"Ryan Hicks"),l.createElement("span",null,"Client Manager"))))))))}},8907:function(e,t,a){var l=a(7294),n=a(7992);t.Z=function(){var e=l.useState(!1),t=e[0],a=e[1];return l.useEffect((function(){console.clear()}),[]),l.createElement("section",{className:"video bg-img parallaxie",style:{backgroundImage:"url(/img/bg-vid.jpg)"}},"undefined"!=typeof window&&l.createElement(n.Z,{channel:"vimeo",autoplay:!0,isOpen:t,videoId:"127203262",onClose:function(){return a(!1)}}),l.createElement("a",{className:"vid valign",onClick:function(e){e.preventDefault(),a(!0)}},l.createElement("div",{className:"vid-butn"},l.createElement("span",{className:"icon"},l.createElement("i",{className:"pe-7s-play"})))),l.createElement("div",{className:"container"},l.createElement("div",{className:"stauts"},l.createElement("div",{className:"item"},l.createElement("h4",null,"3",l.createElement("span",null,"K")," +"),l.createElement("h6",null,"Happy Clients")),l.createElement("div",{className:"item"},l.createElement("h4",null,"14",l.createElement("span",null,"K")," +"),l.createElement("h6",null,"Success Projects")))))}},3410:function(e,t,a){var l=a(7294),n=a(1082);t.Z=function(){return l.createElement("section",{className:"blog-list section-padding sub-bg"},l.createElement("div",{className:"container"},l.createElement("div",{className:"row"},l.createElement("div",{className:"col-lg-4"},l.createElement("div",{className:"head md-mb50"},l.createElement("h6",{className:"back-color"},"Get The Latest News"),l.createElement("h3",null,"What Our Trending News."),l.createElement("p",null,"We provide company and finance service for startups and company business."),l.createElement(n.rU,{to:"/blog/blog-dark"},l.createElement("span",null,"More Blog Posts")))),l.createElement("div",{className:"col-lg-7 offset-lg-1"},l.createElement("div",{className:"item wow fadeInUp","data-wow-delay":".3s"},l.createElement("div",{className:"img valign"},l.createElement("img",{src:"/img/blog/1.jpg",alt:""})),l.createElement("div",{className:"cont valign"},l.createElement("div",null,l.createElement("div",{className:"info"},l.createElement(n.rU,{to:"/blog/blog-dark",className:"date"},l.createElement("span",null,l.createElement("i",null,"06")," August")),l.createElement("span",null,"/"),l.createElement(n.rU,{to:"/blog/blog-dark",className:"tag"},l.createElement("span",null,"WordPress"))),l.createElement("h5",null,l.createElement(n.rU,{to:"/blog-details/blog-details-dark"},"How to use solid color combine with simple furnitures."))))),l.createElement("div",{className:"item wow fadeInUp","data-wow-delay":".5s"},l.createElement("div",{className:"img valign"},l.createElement("img",{src:"/img/blog/2.jpg",alt:""})),l.createElement("div",{className:"cont valign"},l.createElement("div",null,l.createElement("div",{className:"info"},l.createElement(n.rU,{to:"/blog/blog-dark",className:"date"},l.createElement("span",null,l.createElement("i",null,"06")," August")),l.createElement("span",null,"/"),l.createElement(n.rU,{to:"/blog/blog-dark",className:"tag"},l.createElement("span",null,"WordPress"))),l.createElement("h5",null,l.createElement(n.rU,{to:"/blog-details/blog-details-dark"},"How to use solid color combine with simple furnitures."))))),l.createElement("div",{className:"item wow fadeInUp","data-wow-delay":".3s"},l.createElement("div",{className:"img valign"},l.createElement("img",{src:"/img/blog/3.jpg",alt:""})),l.createElement("div",{className:"cont valign"},l.createElement("div",null,l.createElement("div",{className:"info"},l.createElement(n.rU,{to:"/blog/blog-dark",className:"date"},l.createElement("span",null,l.createElement("i",null,"06")," August")),l.createElement("span",null,"/"),l.createElement(n.rU,{to:"/blog/blog-dark",className:"tag"},l.createElement("span",null,"WordPress"))),l.createElement("h5",null,l.createElement(n.rU,{to:"/blog-details/blog-details-dark"},"How to use solid color combine with simple furnitures.")))))))))}},3422:function(e,t,a){a.d(t,{Z:function(){return r}});var l=a(7294),n=function(){var e,t;e=document.querySelector(".cursor-inner"),t=document.querySelector(".cursor-outer"),window.onmousemove=function(a){t.style.transform="translate("+a.clientX+"px, "+a.clientY+"px)",e.style.transform="translate("+a.clientX+"px, "+a.clientY+"px)",a.clientY,a.clientX},document.querySelector(".cursor-pointer")&&(document.querySelector(".cursor-pointer").addEventListener("mouseenter",(function(){e.classList.add("cursor-hover"),t.classList.add("cursor-hover")})),document.querySelector(".cursor-pointer").addEventListener("mouseleave",(function(){e.classList.remove("cursor-hover"),t.classList.remove("cursor-hover")})),e.style.visibility="visible",t.style.visibility="visible"),document.querySelectorAll("a").forEach((function(a){a.addEventListener("mouseenter",(function(){e.classList.add("cursor-hover"),t.classList.add("cursor-hover")}))})),document.querySelectorAll("a").forEach((function(a){a.addEventListener("mouseleave",(function(){e.classList.remove("cursor-hover"),t.classList.remove("cursor-hover")}))})),e.style.visibility="visible",t.style.visibility="visible"},r=function(){return l.useEffect((function(){n()}),[]),l.createElement(l.Fragment,null,l.createElement("div",{className:"mouse-cursor cursor-outer"}),l.createElement("div",{className:"mouse-cursor cursor-inner"}))}},5354:function(e,t,a){a.d(t,{Z:function(){return r}});var l=a(7294),n=function(){var e=document.querySelector(".progress-wrap path"),t=e.getTotalLength();e.style.transition=e.style.WebkitTransition="none",e.style.strokeDasharray=t+" "+t,e.style.strokeDashoffset=t,e.getBoundingClientRect(),e.style.transition=e.style.WebkitTransition="stroke-dashoffset 10ms linear";var a=function(){var a=window.pageYOffset,l=document.documentElement.scrollHeight-window.innerHeight,n=t-a*t/l;e.style.strokeDashoffset=n};a(),window.addEventListener("scroll",a);var l=document.querySelector(".progress-wrap");window.addEventListener("scroll",(function(){window.pageYOffset>150?l.classList.add("active-progress"):document.querySelector(".progress-wrap").classList.remove("active-progress")})),l.addEventListener("click",(function(e){return e.preventDefault(),window.scrollTo({top:0,behavior:"smooth"}),!1}))},r=function(){return l.useEffect((function(){n()}),[]),l.createElement("div",{className:"progress-wrap cursor-pointer"},l.createElement("svg",{className:"progress-circle svg-content",width:"100%",height:"100%",viewBox:"-1 -1 102 102"},l.createElement("path",{d:"M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"})))}},2806:function(e){e.exports=JSON.parse('{"E8":"/img/logo-light.png","Q1":"/img/logo-dark.png","QP":true}')},3473:function(e){e.exports=JSON.parse('[{"id":1,"icon":"pe-7s-paint-bucket","title":"Graphic Design","content":"Tempore corrupti temporibus fuga earum asperiores fugit laudantium."},{"id":2,"icon":"pe-7s-phone","title":"Web & Mobile Design","content":"Tempore corrupti temporibus fuga earum asperiores fugit."},{"id":3,"icon":"pe-7s-display1","title":"Social Media Marketing","content":"Tempore corrupti temporibus fuga earum asperiores fugit."},{"id":4,"icon":"pe-7s-diskette","title":"Document Legal Policy","content":"Tempore corrupti temporibus fuga earum asperiores fugit laudantium."}]')}}]);
//# sourceMappingURL=11aa6c67d6b54984c9641492f6dac0a7af055885-bfdc9be3320ee134b889.js.map