(this.webpackJsonpfactsolotl=this.webpackJsonpfactsolotl||[]).push([[0],{17:function(e,t,n){e.exports=n.p+"static/media/factsolotl.a8e53800.png"},18:function(e,t,n){e.exports=n(31)},28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(14),o=n.n(c),i=n(8),l=n(2),s=(n(28),n(3)),u=n(4),p=n(6),m=n(5),b=n(7),h=(n(29),n(30),function(e){function t(){return Object(s.a)(this,t),Object(p.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(u.a)(t,[{key:"submitZip",value:function(e){e.preventDefault(),this.props.onEnterZip(e)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:function(t){return e.submitZip(t)}},r.a.createElement("input",{type:"text",placeholder:"county",id:"county",ref:function(t){e.county=t}}),r.a.createElement("input",{type:"text",placeholder:"school name",id:"school",ref:function(t){e.school=t}}),r.a.createElement("input",{type:"text",placeholder:"zip",id:"zip",ref:function(t){e.zip=t}}),r.a.createElement("button",{className:"btn-floating btn-small waves-effect waves-light red lighten-1",type:"submit"},r.a.createElement("i",{className:"large material-icons prefix"},"search"))),r.a.createElement("p",null,"Enter your zip code to see contaminant info for your tap water. For demo purposes the zip code is 00000."))}}]),t}(r.a.Component)),d=Object(l.b)((function(e){return{Pb:e.resultPb}}),(function(e){return{onEnterZip:function(t){return e({type:"SUBMIT_ZIP",zip:t.target.zip.value})}}}))(h),f=function(e){function t(){return Object(s.a)(this,t),Object(p.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"County"),r.a.createElement("div",{className:"School"},r.a.createElement("p",null,"School:")),r.a.createElement("div",{className:"Pb"},"Lead: ",this.props.Pb))}}]),t}(r.a.Component),v=Object(l.b)((function(e){return{Pb:e.resultPb}}))(f),E=n(17),g=n.n(E),y=function(e){function t(){return Object(s.a)(this,t),Object(p.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"sliding-background"}),r.a.createElement("a",{href:"https://www.scientificamerican.com/article/biologys-beloved-amphibian-the-axolotl-is-racing-toward-extinction1/",target:"_blank"},r.a.createElement("img",{className:"App-logo",src:g.a,alt:"A pink cartoon axolotl"})));return""===this.props.Pb?r.a.createElement("span",null,e,r.a.createElement("header",{className:"App-header"},r.a.createElement(d,null))):r.a.createElement("span",null,e,r.a.createElement(v,null),r.a.createElement("header",{className:"App-header"},r.a.createElement(d,null)))}}]),t}(r.a.Component),j=Object(l.b)((function(e){return{Pb:e.resultPb}}))(y);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var O=n(12),w={id:"1",name:"Public Water System",zip:["00000","11111","22222"],ccr:{analytes:{lead:{range:"<0.001 - 0.008",avgConc:.004,units:"ppb",MCL:.01,MCLunits:"ppb",MRL:.001,MRLunits:"ppb"},copper:{range:"5.0 - 20.0",avgConc:10,units:"ppb",MCL:0,MCLunits:"ppb",MRL:0,MRLunits:"ppb"}}}},P={resultPb:""},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0,n="This zip code didn't match any public water systems in our database.",a=w.ccr.analytes.lead.avgConc+w.ccr.analytes.lead.units;switch(t.type){case"SUBMIT_ZIP":for(var r=0;r<w.zip.length;r++){var c=w.zip[r];return console.log(r),t.zip===c?Object(O.a)({},e,{resultPb:a}):Object(O.a)({},e,{resultPb:n})}break;default:return e}return e},z=Object(i.b)(k);z.subscribe((function(){return console.log(z.getState())}));o.a.render(r.a.createElement(l.a,{store:z},r.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[18,1,2]]]);
//# sourceMappingURL=main.1878104a.chunk.js.map