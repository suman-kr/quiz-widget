(this["webpackJsonpwidget-quiz"]=this["webpackJsonpwidget-quiz"]||[]).push([[0],{175:function(e,t,n){},176:function(e,t,n){},178:function(e,t,n){},179:function(e,t,n){},180:function(e,t,n){},181:function(e,t,n){"use strict";n.r(t);var r,a,i,s=n(0),c=n.n(s),o=n(12),u=n.n(o),l=(n(88),n(9)),d=n(230),j=n(231),b=n(183),h=n(220),f=n(225),O=n(226),x=n(47),m=n.n(x),p=n(63),g=n.n(p),v=n(223),w=n(16),y=n(33),T=n(17),S=(T.a.div(r||(r=Object(w.a)(["\n  animation: 1.5s "," 2;\n"])),Object(T.b)(a||(a=Object(w.a)(["",""])),y.shake)),T.a.h3(i||(i=Object(w.a)(["\n  padding: 4px;\n  margin: 0;\n  width: 100px;\n  text-align: center;\n  border-radius: 0%;\n  font-size: 36px;\n  border: ",";\n  font-family: 'Open Sans', sans-serif;\n  background: ",";\n  color: white;\n  border-radius: 12px;\n  right: 10px;\n  position: relative;\n"])),(function(e){return"1px solid ".concat(e.background)}),(function(e){return e.background}))),C=(n(171),n(2));g()(m.a);var k,q,N,z,M,I,F,E=Object(h.a)({root:{width:"100%",position:"relative",top:"35px"}}),D=function(e){var t=e.duration,n=e.updateDuration,r=E(),a=c.a.useState(100),i=Object(l.a)(a,2),o=i[0],u=i[1],d=Object(s.useState)(Number(t)),j=Object(l.a)(d,2),b=j[0],h=j[1],f=Object(s.useState)("#2962ff"),O=Object(l.a)(f,2),x=O[0],p=O[1],g=Math.floor(t/100);Object(s.useEffect)((function(){var e=setInterval((function(){0!==b&&(h(b-1),b%g===0&&u(o-1),w()),n(b)}),1e3);return function(){clearInterval(e)}}),[b]);var w=function(){60===Number(t)?(15===b&&p("#dd2c00"),b===Math.round(Number(t)/2)&&p("darkorange")):(b===Math.round(Number(t)/2)&&p("darkorange"),60===b&&p("#dd2c00"))};return Object(C.jsxs)("div",{style:{marginTop:"-10px"},children:[Object(C.jsx)("div",{className:r.root,children:Object(C.jsx)(v.a,{variant:"determinate",style:{height:"10px"},value:o})}),Object(C.jsx)("div",{style:{display:"flex",justifyContent:"flex-end",zIndex:"10"},children:Object(C.jsx)(S,{background:x,children:m.a.duration(b,"seconds").format("hh:mm:ss")})})]})},L=n(51),A=n(227),P=n(232),B=function(e){var t=e.heading;return Object(C.jsx)(C.Fragment,{children:Object(C.jsx)(f.a,{style:{background:"transparent"},children:Object(C.jsx)(O.a,{children:Object(C.jsx)(L.a,{variant:"h3",children:t})})})})},R=function(e){var t=e.children,n=e.className;return Object(C.jsx)(f.a,{style:{padding:"50px",textAlign:"center",marginTop:"3%",height:"100%",background:"transparent",backdropFilter:"blur(4px)",lineHeight:"2em"},className:n,children:t})},J=T.a.div(k||(k=Object(w.a)(["\n  animation: 1.5s "," 1;\n"])),Object(T.b)(q||(q=Object(w.a)(["",""])),y.slideInRight)),Y=T.a.div(N||(N=Object(w.a)(["\n  animation: 1s "," 1;\n"])),Object(T.b)(z||(z=Object(w.a)(["",""])),y.fadeInUp)),U=T.a.div(M||(M=Object(w.a)(["\n  animation: 1s "," infinite;\n"])),Object(T.b)(I||(I=Object(w.a)(["",""])),y.flash)),G=T.a.section(F||(F=Object(w.a)(["\n  border: 1px solid black;\n"]))),H=(n(175),n(176),n(39)),_=n(50),V=(n.p,n(40)),W=n(6),K=n(75),Q=n(233),X=n(228),Z=n(229),$=n(73),ee=n.n($),te=n(72),ne=n.n(te),re=n(71),ae=n.n(re),ie=Object(W.a)({paper:{border:"1px solid #d3d4d5"}})((function(e){return Object(C.jsx)(K.a,Object(V.a)({elevation:0,getContentAnchorEl:null,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"}},e))})),se=Object(W.a)((function(e){return{root:{"&:focus":{backgroundColor:e.palette.primary.main,"& .MuiListItemIcon-root, & .MuiListItemText-primary":{color:e.palette.common.white}}}}}))(Q.a);function ce(e){var t=e.setTime,n=c.a.useState(null),r=Object(l.a)(n,2),a=r[0],i=r[1],s=c.a.useState("300"),o=Object(l.a)(s,2),u=o[0],d=o[1],j=function(e){i(null);var n=e.currentTarget.dataset.duration;d(n),t(Number(n))};return Object(C.jsxs)("div",{children:[Object(C.jsx)(A.a,{"aria-controls":"customized-menu","aria-haspopup":"true",variant:"contained",color:"primary",onClick:function(e){i(e.currentTarget)},style:{marginTop:10,width:"100%"},children:Object(C.jsxs)(L.a,{variant:"h6",children:["Choose Timing : ",Number(u)/60," mins"]})}),Object(C.jsxs)(ie,{id:"customized-menu",anchorEl:a,keepMounted:!0,open:Boolean(a),onClose:function(){i(null)},children:[Object(C.jsxs)(se,{"data-duration":"60",onClick:j,selected:"60"===u,children:[Object(C.jsx)(X.a,{children:Object(C.jsx)(ae.a,{fontSize:"small"})}),Object(C.jsx)(Z.a,{primary:"1 min"})]}),Object(C.jsxs)(se,{"data-duration":"180",onClick:j,selected:"180"===u,children:[Object(C.jsx)(X.a,{children:Object(C.jsx)(ne.a,{fontSize:"small"})}),Object(C.jsx)(Z.a,{primary:"3 min"})]}),Object(C.jsxs)(se,{"data-duration":"300",onClick:j,selected:"300"===u,children:[Object(C.jsx)(X.a,{children:Object(C.jsx)(ee.a,{fontSize:"small"})}),Object(C.jsx)(Z.a,{primary:"5 min"})]})]})]})}for(var oe={id:"sdkdf-34083xf-23nkf34",games:[]},ue=c.a.createContext(null),le=n.p+"static/media/quiz_board.bbfba0b2.svg",de=n.p+"static/media/question.06eaefea.svg",je=(n.p,n.p,n.p,function e(t){Object(H.a)(this,e),this.value=t,this.next=null}),be=function(){function e(t){Object(H.a)(this,e),this.rear=null,this.front=null,this.size=t}return Object(_.a)(e,[{key:"isFull",value:function(){for(var e=0,t=this.front;null!==t;){if((e+=1)===this.size)return!0;t=t.next}return!1}},{key:"enqueue",value:function(e){var t=new je(e);if(null===this.rear)return this.rear=t,this.front=t,!0;this.rear.next=t,this.rear=t}},{key:"dequeue",value:function(){if(null!==this.front){var e=this.front;return this.front=this.front.next,null===this.front&&(this.rear=null),e}}},{key:"clear",value:function(){this.front=null,this.rear=null}}]),e}(),he=Object(h.a)({root:{width:75,"& .MuiInputBase-root":{fontSize:"3rem"}},currentScore:{position:"absolute",float:"left",top:0,left:0,width:50,height:50,backgroundColor:"red",borderBottomRightRadius:50},currentScoreText:{textAlign:"left",justifyContent:"center",paddingLeft:10,color:"white",fontWeight:700}}),fe=[{score:"24",freq:"5"},{score:"36",freq:"9"},{score:"41",freq:"12"},{score:"57",freq:"6"},{score:"62",freq:"8"},{score:"68",freq:"5"},{score:"72",freq:"14"},{score:"81",freq:"5"},{score:"93",freq:"3"}],Oe=fe.reduce((function(e,t){return e+Number(t.freq)}),0),xe=function(e,t){var n=t/100*Oe;return function(e,t){var n=0,r=[];fe.forEach((function(e){r.push(Number(e.score))}));var a=[];fe.forEach((function(e){a.push(Number(e.freq))}));for(var i=0;i<r.length;i+=1){var s=n+a[i];if(t<s)return r[i];n=s}return r[r.length-1]}(0,Math.floor(n))},me=[],pe=0;pe<=100;pe+=10)me.push(Number(xe(0,pe)));var ge={},ve=new be(10),we=function(e){e.duration;var t=he(),n=Object(s.useState)(0),r=Object(l.a)(n,2),a=r[0],i=r[1],c=Object(s.useState)(0),o=Object(l.a)(c,2),u=o[0],j=o[1],b=Object(s.useState)(0),h=Object(l.a)(b,2),f=h[0],O=h[1],x=Object(s.useState)(""),m=Object(l.a)(x,2),p=m[0],g=m[1],v=Object(s.useState)(!1),w=Object(l.a)(v,2),y=w[0],T=w[1],S=Object(s.useState)(300),k=Object(l.a)(S,2),q=(k[0],k[1]),N=Object(s.useState)(300),z=Object(l.a)(N,2),M=z[0],I=z[1],F=Object(s.useState)(0),E=Object(l.a)(F,2),H=E[0],_=E[1],V=Object(s.useState)(0),W=Object(l.a)(V,2),K=W[0],Q=W[1],X=Object(s.useState)(!0),Z=Object(l.a)(X,2),$=Z[0],ee=Z[1],te=Object(s.useState)(!1),ne=Object(l.a)(te,2),re=ne[0],ae=ne[1],ie=(new Date).toISOString(),se=Object(s.useContext)(ue),oe=se.user,je=se.setUser,be=function(){for(var e,t=0;;){var n=[10,100,1e3];switch(t=0,e=n[Math.floor(Math.random()*n.length)]){case 10:t=Math.round(9*Math.random());break;case 100:t=10+Math.round(89*Math.random());break;case 1e3:t=100+Math.round(899*Math.random())}if(t in ge===!1){if(ve.isFull()){var r=ve.dequeue();delete ge[r.value],ve.enqueue(t),ge[t]=0}else ge[t]=0,ve.enqueue(t);break}}var a=e-t;O(e),j(a),i(t)};Object(s.useEffect)((function(){window.onbeforeunload=function(e){var t=e||window.event;return t.preventDefault(),t&&(t.returnValue=""),""},be()}),[]);var fe=function(e){var t=Number(e.target.value);g(e.target.value),""===e.target.value?T(!1):t!==u?T(!0):(setTimeout((function(){g(""),be()}),300),T(!1),_(H+1),Q(function(e){for(var t=Number(me.length-1),n=1;n<me.length;n+=1)if(Number(e)<me[n]){t=n;break}var r=t-1,a=(10*r+(e-me[r]+1)/(me[t]-me[r]+1)*10).toFixed(2);return a<0?0:a>100?100:a}(H)))},Oe=function(e){q(e),I(e)};return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(B,{heading:"Course Introduction"}),$?Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)("img",{src:le,width:"283",height:"auto",className:"quiz-image"}),Object(C.jsxs)(J,{children:[Object(C.jsxs)(R,{children:[Object(C.jsx)(L.a,{variant:"h3",children:"Rules for the game"}),Object(C.jsxs)("div",{style:{paddingTop:"5px"},children:[Object(C.jsx)(L.a,{variant:"h6",children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."}),Object(C.jsx)(L.a,{variant:"h6",children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.."})]})]}),Object(C.jsxs)("div",{className:"start-game-container",children:[Object(C.jsx)(ce,{setTime:Oe}),Object(C.jsx)(A.a,{color:"primary",variant:"contained",style:{marginTop:10},onClick:function(){ie=(new Date).toISOString(),ee(!1),ae(!0)},children:Object(C.jsx)(L.a,{variant:"h6",children:"Let's Go"})})]})]})]}):re?Object(C.jsxs)(C.Fragment,{children:[Object(C.jsxs)(Y,{children:[Object(C.jsx)(D,{duration:M,updateDuration:function(e){return function(e){q(e),e<=0&&(ae(!1),oe.games.push({duration:M,startTime:ie,score:H}))}(e)}}),Object(C.jsxs)(R,{className:"question-section",children:[Object(C.jsx)("div",{className:t.currentScore,children:Object(C.jsxs)("div",{className:t.currentScoreText,children:[" ",H," "]})}),Object(C.jsxs)(d.a,{children:[Object(C.jsx)(L.a,{variant:"h3",display:"inline",style:{padding:5},children:a}),Object(C.jsx)(L.a,{variant:"h3",display:"inline",style:{padding:5},children:"+"}),Object(C.jsx)(L.a,{variant:"h3",display:"inline",style:{padding:5},children:Object(C.jsx)(P.a,{autoFocus:!0,multiline:!1,rowsMax:1,className:t.root,inputProps:{style:{padding:0,border:"".concat(y?"2px":"1px"," solid ").concat(y?"red":"black")},maxLength:(f-a).toString().length,inputMode:"numeric"},error:y,value:p,onChange:function(e){return fe(e)}})}),Object(C.jsx)(L.a,{variant:"h3",display:"inline",style:{padding:5},children:"="}),Object(C.jsx)(L.a,{variant:"h3",display:"inline",style:{padding:5},children:f})]})]})]}),Object(C.jsx)("img",{src:de,width:"250",height:"auto",className:"question-image"})]}):Object(C.jsxs)(J,{children:[Object(C.jsxs)(R,{children:[Object(C.jsx)(U,{children:Object(C.jsx)(L.a,{variant:"h3",display:"inline",style:{textTransform:"uppercase",fontFamily:"'Press Start 2P', cursive",fontSize:"3em"},children:"Game Over"})}),Object(C.jsxs)(L.a,{variant:"h4",children:["Your score: ",H]}),Object(C.jsxs)(L.a,{variant:"h4",children:["Your percentile: ",K]}),oe.games.length>0&&Object(C.jsx)(G,{children:Object(C.jsxs)(L.a,{variant:"h5",children:[Object(C.jsx)("div",{style:{borderBottom:"1px solid black"},children:"Previous Scores"}),Object(C.jsx)("div",{style:{maxHeight:"150px",overflowY:"auto"},children:oe.games.map((function(e){return Object(C.jsxs)("li",{children:["Duration: ",Number(e.duration)/60,", Score: ",e.score]})}))})]})})]}),Object(C.jsxs)("div",{className:"start-game-container",children:[Object(C.jsx)(ce,{setTime:Oe}),Object(C.jsx)(A.a,{color:"primary",variant:"contained",style:{marginTop:10},onClick:function(){ie=(new Date).toISOString(),ve.clear(),ge={},je(oe),g(""),_(0),ae(!0),T(!1)},children:Object(C.jsx)(L.a,{variant:"h6",children:"REPLAY"})})]})]})]})},ye=(n(178),function(e){var t=Object(s.useState)(oe),n=Object(l.a)(t,2),r=n[0],a=n[1];return Object(C.jsx)(b.a,{variant:"outlined",style:{display:"flex",flexDirection:"row"},children:Object(C.jsx)(ue.Provider,{value:{user:r,setUser:a},children:Object(C.jsx)(Se,{})})})}),Te=Object(h.a)({root:{width:900},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:12},inside:{flexDirection:"row",display:"flex",height:"60%",alignContent:"center",justifyContent:"center",marign:"0px 20px"},button:{width:"100%",height:"100%"}});function Se(){var e=Te(),t=(e.bullet,Object(s.useState)(!0)),n=Object(l.a)(t,2),r=n[0],a=n[1];return Object(s.useEffect)((function(){setTimeout((function(){a(!1)}),3e3)})),Object(C.jsx)(d.a,{container:!0,children:Object(C.jsx)(d.a,{item:!0,md:12,children:Object(C.jsx)(f.a,{className:"dashboard-background container",children:Object(C.jsx)(O.a,{children:r?Object(C.jsx)(j.a,{variant:"rect",width:"100%",height:"20%",children:Object(C.jsx)("div",{style:{paddingTop:"10%"}})}):Object(C.jsx)(C.Fragment,{children:Object(C.jsx)(we,{duration:5})})})})})})}n(179),n(57),n(74);n(180);function Ce(e){var t=e.domElement,n=(t.getAttribute("data-title"),t.getAttribute("data-course"),t.getAttribute("data-exercise")),r=Object(s.useState)(),a=Object(l.a)(r,2),i=(a[0],a[1]),c=Object(s.useState)(""),o=Object(l.a)(c,2),u=(o[0],o[1],Object(s.useState)([])),j=Object(l.a)(u,2);j[0],j[1];return Object(s.useEffect)((function(){i(!1)}),[n]),Object(C.jsx)(d.a,{container:!0,children:Object(C.jsx)(ye,{})})}var ke=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,234)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),i(e),s(e)}))};document.querySelectorAll(".quiz_widget").forEach((function(e){u.a.render(Object(C.jsx)(c.a.StrictMode,{children:Object(C.jsx)(Ce,{domElement:e})}),e)})),ke()},57:function(e){e.exports=JSON.parse('[{"questionText":"4 + 5","answerOptions":[{"answerText":"11","isCorrect":false},{"answerText":"18","isCorrect":false},{"answerText":"9","isCorrect":true},{"answerText":"19","isCorrect":false}]},{"questionText":"1 + 1","answerOptions":[{"answerText":"11","isCorrect":false},{"answerText":"15","isCorrect":false},{"answerText":"71","isCorrect":false},{"answerText":"2","isCorrect":true}]},{"questionText":"1 + 1","answerOptions":[{"answerText":"11","isCorrect":false},{"answerText":"15","isCorrect":false},{"answerText":"71","isCorrect":false},{"answerText":"2","isCorrect":true}]}]')},74:function(e){e.exports=JSON.parse('[{"questionText":"4 - 5","answerOptions":[{"answerText":"11","isCorrect":false},{"answerText":"18","isCorrect":false},{"answerText":"-1","isCorrect":true},{"answerText":"19","isCorrect":false}]},{"questionText":"1 - 1","answerOptions":[{"answerText":"11","isCorrect":false},{"answerText":"15","isCorrect":false},{"answerText":"71","isCorrect":false},{"answerText":"0","isCorrect":true}]},{"questionText":"11 - 1","answerOptions":[{"answerText":"11","isCorrect":false},{"answerText":"15","isCorrect":false},{"answerText":"71","isCorrect":false},{"answerText":"10","isCorrect":true}]}]')},88:function(e,t,n){}},[[181,1,2]]]);
//# sourceMappingURL=main.b5854a11.chunk.js.map