(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{185:function(e,n,a){"use strict";a.r(n);var t=a(0),r=a.n(t),c=a(21),o=a.n(c),m=a(187),i=(a(75),a(59)),l=a(60),s=a(68),u=a(61),p=a(69),f=a(188),d=a(189),E=a(186),w=(a(77),t.memo(function(){return t.createElement("div",{className:"header"},t.createElement(E.a,{to:"/",className:"header__btn btn--default"},"Meal planner"))})),h={name:"Sandwich",categories:[{name:"breakfast"}],ingredients:[{name:"Tomato",amount:2,unit:"pcs"}],description:"Chupa chups sugar plum cookie bear"},k={name:"Example day",recipes:new Map([[{name:"Breakfast"},[h]],[{name:"Dinner"},[h,h]]])},y={weeks:[{name:"First week",days:[k,k,k,k,k,k,k]}]},v=(a(81),a(62)),b=a.n(v),O=a(66),_=a.n(O),g=a(64),N=a.n(g),j=a(65),D=a.n(j),x=(a(83),function(e){return t.createElement("div",{className:"timeOfDay"},t.createElement("span",{className:"timeOfDay__name"},e.timeOfDay.name,":"),function(e){var n=e.map(function(e){return e.name});return t.createElement("span",{className:"timeOfDay__recipe"},n.join(", "))}(e.recipes))}),B=function(e){return t.createElement(b.a,null,t.createElement(N.a,{expandIcon:t.createElement(D.a,null)},e.day.name),t.createElement(_.a,null,t.createElement("div",null,function(e){var n=[];return e.forEach(function(e,a){var r=t.createElement(x,{timeOfDay:a,recipes:e,key:a.name});n.push(r)}),n}(e.day.recipes))))},C=function(e){return t.createElement("section",{className:"week"},t.createElement("h3",{className:"week__name"},e.week.name),e.week.days.map(function(e,n){return t.createElement(B,{day:e,key:"".concat(e.name,"_").concat(n)})}))},I=function(){return t.createElement("section",null,t.createElement(C,{week:(e=y.weeks,e[e.length-1])}));var e},J=function(e){function n(){return Object(i.a)(this,n),Object(s.a)(this,Object(u.a)(n).apply(this,arguments))}return Object(p.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"app"},r.a.createElement(w,null),r.a.createElement(f.a,null,r.a.createElement(d.a,{exact:!0,path:"/",component:I})))}}]),n}(t.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(m.a,null,r.a.createElement(J,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},70:function(e,n,a){e.exports=a(185)},75:function(e,n,a){},77:function(e,n,a){},81:function(e,n,a){},83:function(e,n,a){}},[[70,2,1]]]);
//# sourceMappingURL=main.f8c613d7.chunk.js.map