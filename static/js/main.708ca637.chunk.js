(this["webpackJsonpwidget-quiz"]=this["webpackJsonpwidget-quiz"]||[]).push([[0],{32:function(e){e.exports=JSON.parse('[{"questionText":"4 + 5","answerOptions":[{"answerText":"11","isCorrect":false},{"answerText":"18","isCorrect":false},{"answerText":"9","isCorrect":true},{"answerText":"19","isCorrect":false}]},{"questionText":"1 + 1","answerOptions":[{"answerText":"11","isCorrect":false},{"answerText":"15","isCorrect":false},{"answerText":"71","isCorrect":false},{"answerText":"2","isCorrect":true}]},{"questionText":"1 + 1","answerOptions":[{"answerText":"11","isCorrect":false},{"answerText":"15","isCorrect":false},{"answerText":"71","isCorrect":false},{"answerText":"2","isCorrect":true}]}]')},48:function(e){e.exports=JSON.parse('[{"questionText":"4 - 5","answerOptions":[{"answerText":"11","isCorrect":false},{"answerText":"18","isCorrect":false},{"answerText":"-1","isCorrect":true},{"answerText":"19","isCorrect":false}]},{"questionText":"1 - 1","answerOptions":[{"answerText":"11","isCorrect":false},{"answerText":"15","isCorrect":false},{"answerText":"71","isCorrect":false},{"answerText":"0","isCorrect":true}]},{"questionText":"11 - 1","answerOptions":[{"answerText":"11","isCorrect":false},{"answerText":"15","isCorrect":false},{"answerText":"71","isCorrect":false},{"answerText":"10","isCorrect":true}]}]')},58:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){"use strict";n.r(t);var r,a=n(0),i=n.n(a),s=n(10),c=n.n(s),o=(n(58),n(9)),l=n(116),u=n(71),d=n(107),j=n(113),b=n(114),x=n(26),f=n.n(x),h=n(38),O=n.n(h),p=n(110),g=n(39),w=n(40).a.h3(r||(r=Object(g.a)(["\n  padding: 4px;\n  margin: 0;\n  width: 100px;\n  text-align: center;\n  border-radius: 0%;\n  font-size: 36px;\n  border: 1px solid black;\n  font-family: 'Open Sans', sans-serif;\n  background: black;\n  color: white;\n  border-radius: 12px;\n  right: 10px;\n  position: relative;\n"]))),v=n(2);O()(f.a);var m=Object(d.a)({root:{width:"100%",position:"relative",top:"30px"}}),T=function(e){var t=e.duration,n=m(),r=i.a.useState(100),s=Object(o.a)(r,2),c=s[0],l=s[1],u=Object(a.useState)(t),d=Object(o.a)(u,2),j=d[0],b=d[1],x=Object(a.useState)("green"),h=Object(o.a)(x,2),O=h[0],g=h[1],T=Math.floor(t/100);Object(a.useEffect)((function(){var e=setInterval((function(){0!==j&&(b(j-1),j%T===0&&l(c-1),C())}),1e3);return function(){clearInterval(e)}}),[j]);var C=function(){j===Math.round(t/2)?g("yellow"):g(60===j?"red":"green")};return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("div",{className:n.root,children:Object(v.jsx)(p.a,{variant:"determinate",value:c,classes:{colorPrimary:O},style:{height:"5px"}})}),Object(v.jsx)("div",{style:{display:"flex",justifyContent:"flex-end",position:"relative",zIndex:"10"},children:Object(v.jsx)(w,{children:f.a.duration(j,"seconds").format("hh:mm:ss")})})]})},C=n(112),y=n(115),S=n(117),M=(Object(d.a)({root:{flexGrow:1},paper:{padding:2,textAlign:"center",color:"secondary"}}),function(e){var t=e.heading;return Object(v.jsx)(v.Fragment,{children:Object(v.jsx)(j.a,{style:{background:"transparent",backdropFilter:"blur(4px)"},children:Object(v.jsx)(b.a,{children:Object(v.jsx)(y.a,{variant:"h3",children:t})})})})}),k=Object(d.a)({root:{width:75,"& .MuiInputBase-root":{fontSize:"3rem"}}}),q=function(e){var t=e.duration,n=k(),r=Object(a.useState)(0),i=Object(o.a)(r,2),s=i[0],c=i[1],l=Object(a.useState)(0),u=Object(o.a)(l,2),d=u[0],b=u[1],x=Object(a.useState)(0),f=Object(o.a)(x,2),h=f[0],O=f[1],p=Object(a.useState)(""),g=Object(o.a)(p,2),w=g[0],m=g[1],q=Object(a.useState)(!1),F=Object(o.a)(q,2),z=F[0],E=F[1],A=function(){var e=[10,100,1e3],t=e[Math.floor(Math.random()*e.length)],n=0;switch(t){case 10:n=Math.round(9*Math.random());break;case 100:n=10+Math.round(89*Math.random());break;case 1e3:n=100+Math.round(899*Math.random());break;default:n=Math.round(10*Math.random())}var r=t-n;O(t),b(r),c(n)};Object(a.useEffect)((function(){A()}),[]);return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(M,{heading:"Course Introduction"}),Object(v.jsx)(T,{duration:t}),Object(v.jsx)(j.a,{style:{padding:"50px",textAlign:"center",marginTop:"3%",height:"100%",background:"transparent",backdropFilter:"blur(4px)"},children:Object(v.jsxs)(C.a,{children:[Object(v.jsx)(y.a,{variant:"h3",display:"inline",children:s}),Object(v.jsx)(y.a,{variant:"h3",display:"inline",children:"+"}),Object(v.jsx)(y.a,{variant:"h3",display:"inline",children:Object(v.jsx)(S.a,{multiline:!1,rowsMax:1,className:n.root,inputProps:{style:{padding:0,border:"".concat(z?"2px":"1px"," solid ").concat(z?"red":"black")},maxLength:(h-s).toString().length,inputMode:"numeric"},error:z,value:w,onChange:function(e){return function(e){var t=Number(e.target.value);m(e.target.value),""===e.target.value?E(!1):t!==d?E(!0):(m(""),E(!1),A())}(e)}})}),Object(v.jsx)(y.a,{variant:"h3",display:"inline",children:"="}),Object(v.jsx)(y.a,{variant:"h3",display:"inline",children:h})]})})]})},F=(n(67),function(e){return Object(v.jsx)(u.a,{variant:"outlined",style:{display:"flex",flexDirection:"row"},children:Object(v.jsx)(E,{})})}),z=Object(d.a)({root:{width:900},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:12},inside:{flexDirection:"row",display:"flex",height:"60%",alignContent:"center",justifyContent:"center",marign:"0px 20px"},button:{width:"100%",height:"100%"}});function E(){var e=z(),t=(e.bullet,Object(a.useState)(!0)),n=Object(o.a)(t,2),r=n[0],i=n[1];return Object(a.useEffect)((function(){setTimeout((function(){i(!1)}),3e3)})),Object(v.jsx)(j.a,{className:[e.root,"dashboard-background"],children:Object(v.jsx)(b.a,{children:r?Object(v.jsx)(l.a,{variant:"rect",width:"100%",height:"20%",children:Object(v.jsx)("div",{style:{paddingTop:"10%"}})}):Object(v.jsx)(q,{duration:300})})})}n(68),n(32),n(48),n(33);n(69);function A(e){var t=e.domElement,n=(t.getAttribute("data-title"),t.getAttribute("data-course"),t.getAttribute("data-exercise")),r=Object(a.useState)(),i=Object(o.a)(r,2),s=(i[0],i[1]),c=Object(a.useState)(""),l=Object(o.a)(c,2),u=(l[0],l[1],Object(a.useState)([])),d=Object(o.a)(u,2);d[0],d[1];return Object(a.useEffect)((function(){s(!1)}),[n]),Object(v.jsx)(F,{})}var I=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,118)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),i(e),s(e)}))};document.querySelectorAll(".quiz_widget").forEach((function(e){c.a.render(Object(v.jsx)(i.a.StrictMode,{children:Object(v.jsx)(A,{domElement:e})}),e)})),I()}},[[70,1,2]]]);
//# sourceMappingURL=main.708ca637.chunk.js.map