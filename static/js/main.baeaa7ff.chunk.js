(this["webpackJsonpmy-portfolio"]=this["webpackJsonpmy-portfolio"]||[]).push([[0],{23:function(e,t,s){},24:function(e,t,s){},26:function(e,t,s){},46:function(e,t,s){},47:function(e,t,s){"use strict";s.r(t);var a=s(2),c=s.n(a),n=s(17),i=s.n(n),l=(s(23),s(24),s(7)),r=s.n(l),o=s(18),j=s(5),m=(s(26),s(8)),d=s.n(m),h=s(0);function b(){var e=Object(a.useState)(""),t=Object(j.a)(e,2),s=t[0],c=t[1],n=Object(a.useState)(""),i=Object(j.a)(n,2),l=i[0],m=i[1],b=Object(a.useState)(""),p=Object(j.a)(b,2),g=p[0],O=p[1],u="name",x="email",N=function(e,t){switch(console.log(s.length,s),(!e.target.parentElement.classList.contains("active")&&e.target.value.length||!e.target.value.length)&&e.target.parentElement.classList.toggle("active"),t){case u:c(e.target.value);break;case x:m(e.target.value)}},f=function(){var e=Object(o.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(t=new FormData).append("message","clientside"),d()({method:"post",url:"http://localhost:4300/api/test.php",data:t,headers:{"Content-Type":"text/html; charset=UTF-8"}}).then((function(e){return console.log(e,t.get("message"))})).catch((function(e){return console.log(e)}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){f()}),[]),Object(h.jsxs)("main",{className:"home-page-container",children:[Object(h.jsxs)("section",{className:"hero-landing",children:[Object(h.jsx)("h3",{className:"opening-tag custom-tag",children:"Home"}),Object(h.jsxs)("div",{className:"hero-headers",children:[Object(h.jsxs)("h1",{className:"title-name indent",children:[Object(h.jsx)("span",{className:"opening-tag",children:"h1"}),"Randy Thio",Object(h.jsx)("span",{className:"closing-tag",children:"h1"})]}),Object(h.jsx)("h3",{className:"secondary-title-container closed-tag indent",children:Object(h.jsx)("span",{className:"secondary-title"})})]}),Object(h.jsxs)("div",{className:"clickable-links-container",children:[Object(h.jsxs)("a",{href:"/",className:"Portfolio closed-tag indent custom-tag",children:["Portfolio ",Object(h.jsx)("span",{className:"attr",children:"onClick"}),Object(h.jsx)("span",{className:"curly-brackets",children:"View"})]}),Object(h.jsxs)("a",{href:"/",className:"Resume closed-tag indent custom-tag",children:["Resume ",Object(h.jsx)("span",{className:"attr",children:"onClick"}),Object(h.jsx)("span",{className:"curly-brackets",children:"Download"})]}),Object(h.jsxs)("a",{href:"/",className:"Link closed-tag indent custom-tag",children:["Link ",Object(h.jsx)("span",{className:"attr",children:"to"}),Object(h.jsx)("span",{className:"curly-brackets",children:"LinkedIn"})," ",Object(h.jsx)("span",{className:"attr",children:"target"}),Object(h.jsx)("span",{className:"parenthesis",children:"_blank"})]}),Object(h.jsxs)("a",{href:"/",className:"Link closed-tag indent custom-tag",children:["Link ",Object(h.jsx)("span",{className:"attr",children:"to"}),Object(h.jsx)("span",{className:"curly-brackets",children:"Github"})," ",Object(h.jsx)("span",{className:"attr",children:"target"}),Object(h.jsx)("span",{className:"parenthesis",children:"_blank"})]})]}),Object(h.jsx)("h3",{className:"closing-tag custom-tag",children:"Home"})]}),Object(h.jsxs)("section",{className:"about-container",children:[Object(h.jsx)("h3",{className:"opening-tag custom-tag",children:"About"}),Object(h.jsxs)("div",{className:"about-me-wrapper",children:[Object(h.jsxs)("h3",{className:"about-me-title indent",children:[Object(h.jsx)("span",{className:"opening-tag",children:"h3"}),"ABOUT ME",Object(h.jsx)("span",{className:"closing-tag",children:"h3"})]}),Object(h.jsxs)("div",{className:"about-me-para indent",children:[Object(h.jsx)("h3",{className:"opening-tag ",children:"p"}),Object(h.jsx)("p",{className:"indent about-me-para-content",children:"I am a front end developer who passionate in building web apps. I enjoy using javascript/typescript and css to bring amazing designs to life. I look forward to furthering my skills and deepening my knowledge on web development."}),Object(h.jsx)("h3",{className:"closing-tag ",children:"p"})]})]}),Object(h.jsx)("h3",{className:"closing-tag custom-tag",children:"About"})]}),Object(h.jsxs)("section",{className:"portfolio-container",children:[Object(h.jsx)("h3",{className:"opening-tag custom-tag",children:"Portfolio"}),Object(h.jsxs)("div",{className:"portfolio-wrapper",children:[Object(h.jsx)("aside",{className:"comment indent curly-brackets",children:"/* These are some projects I\u2019ve worked on for the past year */"}),Object(h.jsxs)("div",{className:"portfolio-content",children:[Object(h.jsx)("div",{className:"item"}),Object(h.jsx)("div",{className:"item"}),Object(h.jsx)("div",{className:"item"}),Object(h.jsx)("div",{className:"item"}),Object(h.jsx)("div",{className:"item"}),Object(h.jsx)("div",{className:"item"})]})]}),Object(h.jsx)("h3",{className:"closing-tag custom-tag",children:"Portfolio"})]}),Object(h.jsxs)("section",{className:"contact-me-container",children:[Object(h.jsx)("h3",{className:"opening-tag custom-tag",children:"Contact me"}),Object(h.jsxs)("div",{className:"contact-me-wrapper",children:[Object(h.jsxs)("div",{className:"final-message-container",children:[Object(h.jsx)("span",{className:"opening-tag",children:"p"}),Object(h.jsx)("p",{className:"indent",children:"Want to get in touch with me. Send me a message. Like the site? Let me know."}),Object(h.jsx)("span",{className:"closing-tag",children:"p"})]}),Object(h.jsxs)("form",{action:"../../api/test.php/",method:"POST",className:"send-email-form",onSubmit:function(e){e.preventDefault();var t=new FormData;t.append("name",s),t.append("email",l),t.append("message",g),d()({method:"post",url:"http://localhost:4300/api/test.php",data:t,headers:{"Content-Type":"text/html; charset=UTF-8"}}).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)})),m(""),c(""),O("")},children:[Object(h.jsx)("h3",{className:"opening-tag",children:"form"}),Object(h.jsxs)("div",{className:"input-container",children:[Object(h.jsx)("input",{name:"name",type:"text",id:"name",onChange:function(e){N(e,"name")},value:s,required:!0}),Object(h.jsx)("label",{htmlFor:"name",children:"name"}),Object(h.jsx)("div",{className:"label-bg",children:"name"})]}),Object(h.jsxs)("div",{className:"input-container",children:[Object(h.jsx)("input",{type:"email",id:"email",name:"email",onChange:function(e){N(e,"email")},value:l,required:!0}),Object(h.jsx)("label",{htmlFor:"email",children:"email"}),Object(h.jsx)("div",{className:"label-bg",children:"email"})]}),Object(h.jsx)("textarea",{id:"message-input",name:"body",placeholder:"leave me a message...",rows:"9",value:g,onChange:function(e){return O(e.target.value)}}),Object(h.jsx)("div",{className:"closed-tag submit-butt",children:Object(h.jsx)("input",{type:"submit",id:"submit-form"})}),Object(h.jsx)("h3",{className:"closing-tag",children:"form"})]})]}),Object(h.jsx)("h3",{className:"closing-tag custom-tag",children:"Contact me"})]})]})}s(46);function p(){return Object(h.jsxs)("nav",{className:"nav-bar",children:[Object(h.jsx)("h1",{className:"logo",children:"Randy Thio"}),Object(h.jsxs)("div",{className:"nav-links",children:[Object(h.jsx)("span",{children:Object(h.jsx)("a",{href:"/",children:"Home"})}),Object(h.jsx)("span",{children:Object(h.jsx)("a",{href:"/",children:"About"})}),Object(h.jsx)("span",{children:Object(h.jsx)("a",{href:"/",children:"Portfolio"})}),Object(h.jsx)("span",{children:Object(h.jsx)("a",{href:"/",children:"Contact Me"})})]})]})}var g=function(){return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(p,{}),Object(h.jsx)(b,{})]})};i.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(g,{})}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.baeaa7ff.chunk.js.map