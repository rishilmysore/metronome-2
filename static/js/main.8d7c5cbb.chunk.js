(this["webpackJsonprishil-app"]=this["webpackJsonprishil-app"]||[]).push([[0],{12:function(t,e,n){},13:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var a=n(1),i=n.n(a),r=n(3),s=n.n(r),c=(n(12),n(4)),o=n(5),u=n(7),p=n(6),l=(n(13),n.p+"static/media/Ding.f90b3976.mp3"),g=n.p+"static/media/Ding2.4d96deca.mp3",b=n(0),d=function(t){Object(u.a)(n,t);var e=Object(p.a)(n);function n(t){var a;return Object(c.a)(this,n),(a=e.call(this,t)).BpmChange=function(t){var e=t.target.value;a.state.playing?(clearInterval(a.timer),a.timer=setInterval(a.startDing,60/e*1e3),a.setState({count:0,bpm:e})):a.setState({bpm:e})},a.startStop=function(){a.state.playing?(clearInterval(a.timer),a.setState({playing:!1})):(a.timer=setInterval(a.startDing,60/a.state.bpm*1e3),a.setState({count:0,playing:!0},a.startDing))},a.startDing=function(){var t=a.state;t.count%t.beatsPerMeasure===0?a.ding1.play():a.ding2.play(),a.setState((function(t){return{count:(t.count+1)%t.beatsPerMeasure}}))},a.state={playing:!1,count:0,bpm:100,beatsPerMeasure:4},a.ding1=new Audio(l),a.ding2=new Audio(g),a}return Object(o.a)(n,[{key:"render",value:function(){var t=this.state,e=t.playing,n=t.bpm;return Object(b.jsxs)("div",{className:"metronome",children:[Object(b.jsxs)("div",{className:"bpm-slider",children:[Object(b.jsxs)("div",{children:[" ",n," BPM "]}),Object(b.jsx)("input",{type:"range",min:"60",max:"240",value:n,onChange:this.BpmChange})]}),Object(b.jsx)("button",{onClick:this.startStop,children:e?"Stop":"Start"})]})}}]),n}(a.Component),m=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(e){var n=e.getCLS,a=e.getFID,i=e.getFCP,r=e.getLCP,s=e.getTTFB;n(t),a(t),i(t),r(t),s(t)}))};s.a.render(Object(b.jsx)(i.a.StrictMode,{children:Object(b.jsx)(d,{})}),document.getElementById("root")),m()}},[[15,1,2]]]);
//# sourceMappingURL=main.8d7c5cbb.chunk.js.map