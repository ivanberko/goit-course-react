(this["webpackJsonpgoit-react-hw-01-components"]=this["webpackJsonpgoit-react-hw-01-components"]||[]).push([[0],{1:function(e,t,a){e.exports={button:"Button_button__2rlM_"}},10:function(e,t,a){e.exports=a(15)},15:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(3),l=a.n(c),r=a(4),u=a(5),i=a(6),s=a(9),d=a(8),m=function(e){var t=e.title,a=void 0===t?"":t,n=e.children;return o.a.createElement("section",null,o.a.createElement("h2",null,a),n)},b=function(e){var t=e.good,a=e.neutral,n=e.bad,c=e.total,l=e.positivePercentage;return o.a.createElement("div",null,o.a.createElement("p",null,"Good: ",t),o.a.createElement("p",null,"Neutral: ",a),o.a.createElement("p",null,"Bad: ",n),o.a.createElement("p",null,"Total: ",c),o.a.createElement("p",null,"Positive feedback: ",l))},v=a(1),p=function(e){var t=e.onLeaveFeedback;return o.a.createElement("div",null,o.a.createElement("button",{type:"button",name:"good",onClick:t,className:v.button},"Good"),o.a.createElement("button",{type:"button",name:"neutral",onClick:t,className:v.button},"Neutral"),o.a.createElement("button",{type:"button",name:"bad",onClick:t,className:v.button},"Bad"))},k=function(e){var t=e.message,a=void 0===t?"No feedback given":t;return o.a.createElement(o.a.Fragment,null,o.a.createElement("p",null,a))},E=a(7),h=function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={good:0,neutral:0,bad:0},e.onLeaveFeedback=function(t){var a=t.target.name;e.countTotalFeedback(),e.setState((function(e){return Object(r.a)({},a,e[a]+1)}))},e}return Object(i.a)(a,[{key:"countTotalFeedback",value:function(){var e=this.state;return e.good+e.neutral+e.bad}},{key:"countPositiveFeedbackPercentage",value:function(){var e=this.state.good;return this.countTotalFeedback()?"".concat(Math.round(e/this.countTotalFeedback()*100),"%"):"0%"}},{key:"render",value:function(){var e=this.state,t=e.good,a=e.neutral,n=e.bad;return o.a.createElement("main",{className:E.main},o.a.createElement(m,{title:"Please leave feedback"},o.a.createElement(p,{onLeaveFeedback:this.onLeaveFeedback})),o.a.createElement(m,{title:"Statistics"},this.countTotalFeedback()?o.a.createElement(b,{good:t,neutral:a,bad:n,total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage()}):o.a.createElement(k,null)))}}]),a}(n.Component);l.a.render(o.a.createElement(h,null),document.getElementById("root"))},7:function(e,t,a){e.exports={main:"App_main__2XhZi"}}},[[10,1,2]]]);
//# sourceMappingURL=main.2330217e.chunk.js.map