(this["webpackJsonpwidget-quiz"]=this["webpackJsonpwidget-quiz"]||[]).push([[0],{170:function(e,t,n){},171:function(e,t,n){},176:function(e,t,n){},177:function(e,t,n){},178:function(e,t,n){},179:function(e,t,n){"use strict";n.r(t);var r,a,i,c=n(0),s=n.n(c),o=n(12),l=n.n(o),u=(n(83),n(9)),d=n(228),j=n(229),b=n(181),h=n(218),f=n(223),O=n(224),x=n(47),m=n.n(x),p=n(61),g=n.n(p),v=n(221),w=n(16),y=n(33),C=n(17),S=(C.a.div(r||(r=Object(w.a)(["\n  animation: 1.5s "," 2;\n"])),Object(C.b)(a||(a=Object(w.a)(["",""])),y.shake)),C.a.h3(i||(i=Object(w.a)(["\n  padding: 4px;\n  margin: 0;\n  width: 100px;\n  text-align: center;\n  border-radius: 0%;\n  font-size: 36px;\n  border: ",";\n  font-family: 'Open Sans', sans-serif;\n  background: ",";\n  color: white;\n  border-radius: 12px;\n  right: 10px;\n  position: relative;\n"])),(function(e){return"1px solid ".concat(e.background)}),(function(e){return e.background}))),T=(n(166),n(2));g()(m.a);var k,N,q,z,F,M,I,E=Object(h.a)({root:{width:"100%",position:"relative",top:"35px"}}),B=function(e){var t=e.duration,n=e.updateDuration,r=E(),a=s.a.useState(100),i=Object(u.a)(a,2),o=i[0],l=i[1],d=Object(c.useState)(Number(t)),j=Object(u.a)(d,2),b=j[0],h=j[1],f=Object(c.useState)("#2962ff"),O=Object(u.a)(f,2),x=O[0],p=O[1],g=Math.floor(t/100);Object(c.useEffect)((function(){var e=setInterval((function(){0!==b&&(h(b-1),b%g===0&&l(o-1),w()),n(b)}),1e3);return function(){clearInterval(e)}}),[b]);var w=function(){60===Number(t)?(15===b&&p("#dd2c00"),b===Math.round(Number(t)/2)&&p("darkorange")):(b===Math.round(Number(t)/2)&&p("darkorange"),60===b&&p("#dd2c00"))};return Object(T.jsxs)("div",{style:{marginTop:"-10px"},children:[Object(T.jsx)("div",{className:r.root,children:Object(T.jsx)(v.a,{variant:"determinate",style:{height:"10px"},value:o})}),Object(T.jsx)("div",{style:{display:"flex",justifyContent:"flex-end",zIndex:"10"},children:Object(T.jsx)(S,{background:x,children:m.a.duration(b,"seconds").format("hh:mm:ss")})})]})},D=n(52),A=n(225),L=n(230),P=function(e){var t=e.heading;return Object(T.jsx)(T.Fragment,{children:Object(T.jsx)(f.a,{style:{background:"#fff",borderBottom:"3px solid #7482E8",marginBottom:"10px"},children:Object(T.jsx)(O.a,{children:Object(T.jsx)(D.a,{style:{fontWeight:600,color:"#5564CC"},variant:"h3",children:t})})})})},J=function(e){var t=e.children,n=e.className;return Object(T.jsx)(f.a,{style:{padding:"50px",textAlign:"center",marginTop:"3%",marginBottom:"5%",height:"100%",background:"#fff",backdropFilter:"blur(4px)",lineHeight:"2em",borderBottom:"3px solid #7482E8"},className:n,children:t})},R=C.a.div(k||(k=Object(w.a)(["\n  animation: 1.5s "," 1;\n"])),Object(C.b)(N||(N=Object(w.a)(["",""])),y.slideInRight)),W=C.a.div(q||(q=Object(w.a)(["\n  animation: 1s "," 1;\n"])),Object(C.b)(z||(z=Object(w.a)(["",""])),y.fadeInUp)),Y=C.a.div(F||(F=Object(w.a)(["\n  animation: 1s "," infinite;\n"])),Object(C.b)(M||(M=Object(w.a)(["",""])),y.flash)),U=C.a.section(I||(I=Object(w.a)(["\n  border: 1px solid black;\n"]))),G=(n(170),n(171),n(39)),H=n(50),V=(n.p,n(40)),_=n(6),K=n(70),Q=n(231),X=n(226),Z=n(227),$=n(51),ee=n.n($),te=Object(_.a)({paper:{border:"1px solid #d3d4d5"}})((function(e){return Object(T.jsx)(K.a,Object(V.a)({elevation:0,getContentAnchorEl:null,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"}},e))})),ne=Object(_.a)((function(e){return{root:{"&:focus":{backgroundColor:e.palette.primary.main,"& .MuiListItemIcon-root, & .MuiListItemText-primary":{color:e.palette.common.white}}}}}))(Q.a);function re(e){var t=e.setTime,n=s.a.useState(null),r=Object(u.a)(n,2),a=r[0],i=r[1],c=s.a.useState("300"),o=Object(u.a)(c,2),l=o[0],d=o[1],j=function(e){i(null);var n=e.currentTarget.dataset.duration;d(n),t(Number(n))};return Object(T.jsxs)("div",{children:[Object(T.jsx)(A.a,{"aria-controls":"customized-menu","aria-haspopup":"true",variant:"contained",color:"primary",onClick:function(e){i(e.currentTarget)},style:{marginTop:10,width:"100%"},children:Object(T.jsxs)(D.a,{variant:"h6",children:["Choose Timing : ",Number(l)/60," ","60"===l?"min":"mins"]})}),Object(T.jsxs)(te,{id:"customized-menu",anchorEl:a,keepMounted:!0,open:Boolean(a),onClose:function(){i(null)},children:[Object(T.jsxs)(ne,{"data-duration":"60",onClick:j,selected:"60"===l,children:[Object(T.jsx)(X.a,{children:Object(T.jsx)(ee.a,{fontSize:"small"})}),Object(T.jsx)(Z.a,{primary:"1 min"})]}),Object(T.jsxs)(ne,{"data-duration":"180",onClick:j,selected:"180"===l,children:[Object(T.jsx)(X.a,{children:Object(T.jsx)(ee.a,{fontSize:"small"})}),Object(T.jsx)(Z.a,{primary:"3 mins"})]}),Object(T.jsxs)(ne,{"data-duration":"300",onClick:j,selected:"300"===l,children:[Object(T.jsx)(X.a,{children:Object(T.jsx)(ee.a,{fontSize:"small"})}),Object(T.jsx)(Z.a,{primary:"5 mins"})]})]})]})}for(var ae={id:"sdkdf-34083xf-23nkf34",games:[]},ie=s.a.createContext(null),ce=(n.p,n.p+"static/media/question.06eaefea.svg"),se=(n.p,n.p,n.p,function e(t){Object(G.a)(this,e),this.value=t,this.next=null}),oe=function(){function e(t){Object(G.a)(this,e),this.rear=null,this.front=null,this.size=t,this.currentSize=0}return Object(H.a)(e,[{key:"isFull",value:function(){return this.currentSize>=this.size}},{key:"enqueue",value:function(e){var t=new se(e);if(this.currentSize+=1,null===this.rear)return this.rear=t,this.front=t,!0;this.rear.next=t,this.rear=t}},{key:"dequeue",value:function(){if(null!==this.front){var e=this.front;return this.front=this.front.next,this.currentSize-=1,e}this.rear=null}},{key:"clear",value:function(){this.front=null,this.rear=null,this.currentSize=0}}]),e}(),le=Object(h.a)({root:{width:75,"& .MuiInputBase-root":{fontSize:"3rem"}},currentScore:{position:"absolute",float:"left",top:0,left:0,width:50,height:50,backgroundColor:"#8D9EF8",borderBottomRightRadius:50},currentScoreText:{textAlign:"left",justifyContent:"center",paddingLeft:10,color:"white",fontWeight:700}}),ue=[{score:"24",freq:"5"},{score:"36",freq:"9"},{score:"41",freq:"12"},{score:"57",freq:"6"},{score:"62",freq:"8"},{score:"68",freq:"5"},{score:"72",freq:"14"},{score:"81",freq:"5"},{score:"93",freq:"3"}],de=ue.reduce((function(e,t){return e+Number(t.freq)}),0),je=function(e,t){var n=t/100*de;return function(e,t){var n=0,r=[];ue.forEach((function(e){r.push(Number(e.score))}));var a=[];ue.forEach((function(e){a.push(Number(e.freq))}));for(var i=0;i<r.length;i+=1){var c=n+a[i];if(t<c)return r[i];n=c}return r[r.length-1]}(0,Math.floor(n))},be=[],he=0;he<=100;he+=10)be.push(Number(je(0,he)));var fe={},Oe=new oe(10),xe={},me=function(e){e.duration;var t=le(),n=Object(c.useState)(0),r=Object(u.a)(n,2),a=r[0],i=r[1],s=Object(c.useState)(0),o=Object(u.a)(s,2),l=o[0],j=o[1],b=Object(c.useState)(0),h=Object(u.a)(b,2),f=h[0],O=h[1],x=Object(c.useState)(""),m=Object(u.a)(x,2),p=m[0],g=m[1],v=Object(c.useState)(!1),w=Object(u.a)(v,2),y=w[0],C=w[1],S=Object(c.useState)(300),k=Object(u.a)(S,2),N=(k[0],k[1]),q=Object(c.useState)(300),z=Object(u.a)(q,2),F=z[0],M=z[1],I=Object(c.useState)(0),E=Object(u.a)(I,2),G=E[0],H=E[1],V=Object(c.useState)(0),_=Object(u.a)(V,2),K=_[0],Q=_[1],X=Object(c.useState)(!0),Z=Object(u.a)(X,2),$=Z[0],ee=Z[1],te=Object(c.useState)(!1),ne=Object(u.a)(te,2),ae=ne[0],se=ne[1],oe=(new Date).toISOString(),ue=Object(c.useContext)(ie),de=ue.user,je=ue.setUser,he=function(){for(var e,t=0;;){var n=[10,100,1e3];switch(t=0,e=n[Math.floor(Math.random()*n.length)]){case 10:t=Math.round(9*Math.random());break;case 100:t=10+Math.round(89*Math.random());break;case 1e3:t=100+Math.round(899*Math.random())}if(t in fe===!1){if(Oe.isFull()){var r=Oe.dequeue();delete fe[r.value],Oe.enqueue(t),fe[t]=0}else fe[t]=0,Oe.enqueue(t);break}}var a=e-t;O(e),j(a),i(t)};Object(c.useEffect)((function(){window.onbeforeunload=function(e){var t=e||window.event;return t.preventDefault(),t&&(t.returnValue=""),""},he()}),[]);var me=function(e){var t=Number(e.target.value);g(e.target.value),""===e.target.value?C(!1):t!==l?C(!0):(setTimeout((function(){g(""),he()}),300),C(!1),H(G+1),Q(function(e){for(var t=Number(be.length-1),n=1;n<be.length;n+=1)if(Number(e)<be[n]){t=n;break}var r=t-1,a=(10*r+(e-be[r]+1)/(be[t]-be[r]+1)*10).toFixed(2);return a<0?0:a>100?100:a}(G)))};var pe=function(e){N(e),M(e)};return Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(P,{heading:"Course Introduction"}),$?Object(T.jsx)(T.Fragment,{children:Object(T.jsxs)(R,{children:[Object(T.jsxs)(J,{children:[Object(T.jsx)(D.a,{style:{fontWeight:400,color:"#5564CC",marginBottom:10},variant:"h4",children:"Rules for the game"}),Object(T.jsxs)("div",{style:{paddingTop:"5px",fontWeight:200,color:"#5564CC"},children:[Object(T.jsx)(D.a,{variant:"h6",children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."}),Object(T.jsx)(D.a,{variant:"h6",children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.."})]})]}),Object(T.jsxs)("div",{className:"start-game-container",children:[Object(T.jsx)(re,{setTime:pe}),Object(T.jsx)(A.a,{color:"primary",variant:"contained",style:{marginTop:10},onClick:function(){oe=(new Date).toISOString(),ee(!1),se(!0)},children:Object(T.jsx)(D.a,{variant:"h6",children:"Let's Go"})})]})]})}):ae?Object(T.jsxs)(T.Fragment,{children:[Object(T.jsxs)(W,{children:[Object(T.jsx)(B,{duration:F,updateDuration:function(e){return function(e){N(e),e<=0&&(se(!1),(xe=JSON.parse(JSON.stringify(de))).games.push({duration:F,startTime:oe,score:G}))}(e)}}),Object(T.jsxs)(J,{className:"question-section",children:[Object(T.jsx)("div",{className:t.currentScore,children:Object(T.jsxs)("div",{className:t.currentScoreText,children:[" ",G," "]})}),Object(T.jsxs)(d.a,{children:[Object(T.jsx)(D.a,{variant:"h3",display:"inline",style:{padding:5},children:a}),Object(T.jsx)(D.a,{variant:"h3",display:"inline",style:{padding:5},children:"+"}),Object(T.jsx)(D.a,{variant:"h3",display:"inline",style:{padding:5},children:Object(T.jsx)(L.a,{autoFocus:!0,multiline:!1,rowsMax:1,className:t.root,inputProps:{style:{padding:0,border:"".concat(y?"2px":"1px"," solid ").concat(y?"red":"black")},maxLength:(f-a).toString().length,inputMode:"numeric"},error:y,value:p,onChange:function(e){return me(e)}})}),Object(T.jsx)(D.a,{variant:"h3",display:"inline",style:{padding:5},children:"="}),Object(T.jsx)(D.a,{variant:"h3",display:"inline",style:{padding:5},children:f})]})]})]}),Object(T.jsx)("img",{src:ce,width:"250",height:"auto",className:"question-image"})]}):Object(T.jsxs)(R,{children:[Object(T.jsxs)(J,{children:[Object(T.jsx)(Y,{children:Object(T.jsx)(D.a,{variant:"h3",display:"inline",style:{textTransform:"uppercase",fontFamily:"'Press Start 2P', cursive",fontSize:"3em"},children:"Game Over"})}),Object(T.jsxs)(D.a,{variant:"h4",children:["Your score: ",G]}),Object(T.jsxs)(D.a,{variant:"h4",children:["Your percentile: ",K]}),de.games.length>0&&Object(T.jsx)(U,{children:Object(T.jsxs)(D.a,{variant:"h5",children:[Object(T.jsx)("div",{style:{borderBottom:"1px solid black"},children:"Previous Scores"}),Object(T.jsx)("div",{style:{maxHeight:"150px",overflowY:"auto"},children:de.games.map((function(e){return Object(T.jsxs)("li",{children:["Duration: ",Number(e.duration)/60,", Score: ",e.score]})}))})]})})]}),Object(T.jsxs)("div",{className:"start-game-container",children:[Object(T.jsx)(re,{setTime:pe}),Object(T.jsx)(A.a,{color:"primary",variant:"contained",style:{marginTop:10},onClick:function(){oe=(new Date).toISOString(),Oe.clear(),fe={},je(xe),g(""),xe={},H(0),se(!0),C(!1)},children:Object(T.jsx)(D.a,{variant:"h6",children:"REPLAY"})})]})]})]})},pe=(n(176),function(e){var t=Object(c.useState)(ae),n=Object(u.a)(t,2),r=n[0],a=n[1];return Object(T.jsx)(b.a,{variant:"outlined",style:{display:"flex",flexDirection:"row",backgroundColor:"#F5F7FA"},children:Object(T.jsx)(ie.Provider,{value:{user:r,setUser:a},children:Object(T.jsx)(ve,{})})})}),ge=Object(h.a)({root:{width:900,backgroundColor:"#F5F7FA"},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:12},inside:{flexDirection:"row",display:"flex",height:"60%",alignContent:"center",justifyContent:"center",marign:"0px 20px"},button:{width:"100%",height:"100%"}});function ve(){var e=ge(),t=(e.bullet,Object(c.useState)(!0)),n=Object(u.a)(t,2),r=n[0],a=n[1];return Object(c.useEffect)((function(){setTimeout((function(){a(!1)}),3e3)})),Object(T.jsx)(d.a,{container:!0,children:Object(T.jsx)(d.a,{item:!0,md:12,children:Object(T.jsx)(f.a,{className:" container",children:Object(T.jsx)(O.a,{className:"dashboard-background",children:r?Object(T.jsx)(j.a,{variant:"rect",width:"100%",height:"20%",children:Object(T.jsx)("div",{style:{paddingTop:"10%"}})}):Object(T.jsx)(T.Fragment,{children:Object(T.jsx)(me,{duration:5})})})})})})}n(177),n(55),n(69);n(178);function we(e){var t=e.domElement,n=(t.getAttribute("data-title"),t.getAttribute("data-course"),t.getAttribute("data-exercise")),r=Object(c.useState)(),a=Object(u.a)(r,2),i=(a[0],a[1]),s=Object(c.useState)(""),o=Object(u.a)(s,2),l=(o[0],o[1],Object(c.useState)([])),j=Object(u.a)(l,2);j[0],j[1];return Object(c.useEffect)((function(){i(!1)}),[n]),Object(T.jsx)(d.a,{container:!0,children:Object(T.jsx)(pe,{})})}var ye=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,232)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),i(e),c(e)}))};document.querySelectorAll(".quiz_widget").forEach((function(e){l.a.render(Object(T.jsx)(s.a.StrictMode,{children:Object(T.jsx)(we,{domElement:e})}),e)})),ye()},55:function(e){e.exports=JSON.parse('[{"questionText":"4 + 5","answerOptions":[{"answerText":"11","isCorrect":false},{"answerText":"18","isCorrect":false},{"answerText":"9","isCorrect":true},{"answerText":"19","isCorrect":false}]},{"questionText":"1 + 1","answerOptions":[{"answerText":"11","isCorrect":false},{"answerText":"15","isCorrect":false},{"answerText":"71","isCorrect":false},{"answerText":"2","isCorrect":true}]},{"questionText":"1 + 1","answerOptions":[{"answerText":"11","isCorrect":false},{"answerText":"15","isCorrect":false},{"answerText":"71","isCorrect":false},{"answerText":"2","isCorrect":true}]}]')},69:function(e){e.exports=JSON.parse('[{"questionText":"4 - 5","answerOptions":[{"answerText":"11","isCorrect":false},{"answerText":"18","isCorrect":false},{"answerText":"-1","isCorrect":true},{"answerText":"19","isCorrect":false}]},{"questionText":"1 - 1","answerOptions":[{"answerText":"11","isCorrect":false},{"answerText":"15","isCorrect":false},{"answerText":"71","isCorrect":false},{"answerText":"0","isCorrect":true}]},{"questionText":"11 - 1","answerOptions":[{"answerText":"11","isCorrect":false},{"answerText":"15","isCorrect":false},{"answerText":"71","isCorrect":false},{"answerText":"10","isCorrect":true}]}]')},83:function(e,t,n){}},[[179,1,2]]]);
//# sourceMappingURL=main.96b47333.chunk.js.map