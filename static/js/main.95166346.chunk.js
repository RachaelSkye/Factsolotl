(this.webpackJsonpfactsolotl=this.webpackJsonpfactsolotl||[]).push([[0],{1:function(e,t,a){e.exports={toggleOn:"Search_toggleOn__2GMPh",toggleOff:"Search_toggleOff__3MPn4",clickExpand:"Search_clickExpand__1KMdK",total:"Search_total__sZChh",searchHeader:"Search_searchHeader__1E-Ce",searchFooter:"Search_searchFooter__PSsCh",searchTitle:"Search_searchTitle__1I7ND",exceedanceToggle:"Search_exceedanceToggle__1rKxs",toggleBG:"Search_toggleBG__1THoe",exceedanceTitle:"Search_exceedanceTitle__29K3L",select:"Search_select__1gg29",detailBox:"Search_detailBox__2C408",searchToggle:"Search_searchToggle__2sYVV"}},20:function(e,t,a){},24:function(e,t,a){e.exports={leftLogo:"Logo_leftLogo__yKmfW"}},38:function(e,t,a){e.exports={list:"List_list__2JTWI",redBG:"List_redBG__3v7Jh",greenBG:"List_greenBG__1EYTT"}},39:function(e,t,a){e.exports=a.p+"static/media/pbdw.cb4189a5.pdf"},40:function(e,t,a){e.exports={map:"Map_map__2bGnQ",mapLabel:"Map_mapLabel__2chvM"}},45:function(e,t,a){e.exports={nav:"navbar_nav__3qFhO"}},46:function(e,t,a){e.exports=a.p+"static/media/bubbleF.ecb67f7a.png"},47:function(e,t,a){e.exports=a(79)},52:function(e,t,a){},7:function(e,t,a){e.exports={info:"Splash_info__1nnsE",fortyTwo:"Splash_fortyTwo__1N39g",content:"Splash_content__1LjUm",content2:"Splash_content2__1daBF",title:"Splash_title__3tXU1",legend:"Splash_legend__X0Aah",highlightMap:"Splash_highlightMap__29zCB"}},72:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(37),c=a.n(o),r=(a(52),a(13)),s=a(14),i=a(16),u=a(15),d=a(17),m=a(6),h=a(18),p=a.n(h),f=a(19),y=(a(72),function(e){var t;return"Yes"===e.exceedance?t="redBG pulse btn-floating btn waves-effect waves-dark red":"No"===e.exceedance&&(t="greenBG btn-floating btn waves-effect waves-dark white"),l.a.createElement("div",null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{id:"previewCard",className:"card"},l.a.createElement("div",{className:"details"},l.a.createElement("h4",null,e.name),l.a.createElement("label",null,"  ",e.sampleLocation),l.a.createElement("div",{className:"Info"},l.a.createElement("button",{onClick:e.clicked,id:"expand",className:t},l.a.createElement("i",{id:"chevron",className:"material-icons"},"expand_more")))))))}),g=a(38),E=function(e){var t=l.a.createElement("p",{style:{textAlign:"center"}},"Something went wrong!");return t=e.queried?e.schools.map((function(t){return l.a.createElement("div",null,l.a.createElement(y,{key:t.key,name:t.school_name,district:t.district,exceedance:t.action_level_exceedance,toggleDetails:t.toggleDetails,closeDetais:t.closeDetais,sampleLocation:t.school_site_name,clicked:function(){return e.onSchoolSelect(t.id)}}))})):l.a.createElement("div",{className:"card"},l.a.createElement("h4",null,"Return to search to see a list of sample previews by school here.")),l.a.createElement("div",{className:g.list},t)},v=a(20),b=a(39),_=a.n(b),S=function(e){var t=null;if(e.loadedSchool){var a=new Date(e.loadedSchool.sample_date),n=a.getFullYear(),o=a.getMonth()+1,c=a.getDate();t=l.a.createElement("div",{className:v.cardDetail},l.a.createElement("div",{id:"detailInset",className:"card"},l.a.createElement("button",{onClick:function(t){return e.closeDetails(t)},id:"closeBtn",className:" btn-floating btn waves-effect waves-dark white"},l.a.createElement("i",{id:"close",className:"material-icons"},"close")),l.a.createElement("h4",null,e.loadedSchool.school_name),l.a.createElement("p",null,"School district: ",e.loadedSchool.district),l.a.createElement("p",null,"Exceedance: ",e.loadedSchool.action_level_exceedance),l.a.createElement("p",null,"Lead concentration: ",e.loadedSchool.result," ppb"),l.a.createElement("p",null,"Sampled from: ",e.loadedSchool.school_site_name),l.a.createElement("p",null,"Date sampled: ",o,"/",c,"/",n),l.a.createElement("p",null,"Water system: ",e.loadedSchool.water_system_name)),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("h5",null,"Learn more about the EPA lead rule:"),l.a.createElement("iframe",{className:v.pdf,title:"dwFacts",src:_.a,width:"100%",height:"700px"}))}return t},C=a(1),w=a(7),N=a(40),x=a(41),k=function(e){function t(){return Object(r.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{id:"chart_div",className:N.map},l.a.createElement(x.a,{chartType:"GeoChart",data:[["County","Exceedances"],["Alameda County",63],["Alpine County",1],["Amador County",2],["Butte County",2],["Calaveras County",3],["Colusa County\t",0],["Contra Costa County",11],["Del Norte County",0],["El Dorado County",5],["Fresno County",17],["Glenn County",1],["Humboldt County",4],["Imperial County",7],["Inyo County",1],["Kern County\t",12],["Kings County",21],["Lake County",8],["Lassen County",0],["Los Angeles County",45],["Madera County",4],["Marin County",2],["Mariposa County",0],["Mendocino County",2],["Merced County",1],["Modoc County",0],["Mono County\t",0],["Monterey County",1],["Napa County",3],["Nevada County",7],["Orange County",17],["Placer County",13],["Plumas County",1],["Riverside County",17],["Sacramento County",15],["San Benito County",1],["San Bernardino County",27],["San Diego County",17],["San Francisco",18],["San Joaquin County",12],["San Luis Obispo County\t",6],["San Mateo County",11],["Santa Barbara County",3],["Santa Clara County\t",29],["Santa Cruz County",2],["Shasta County",5],["Sierra County",13],["Siskiyou County",7],["Solano County",7],["Sonoma County",0],["Stanislaus County",8],["Sutter County",1],["Tehama County",0],["Trinity County",2],["Tulare County",7],["Tuolumne County",1],["Ventura County",6],["Yolo County",4],["Yuba County",0]],options:{region:"US-CA",displayMode:"markers",resolution:"provinces",markerOpacity:.7,colorAxis:{colors:["green","yellow","orange","red"]},datalessRegionColor:"white",backgroundColor:{fill:"transparent"},legend:"none"},mapsApiKey:"AIzaSyDL0sPhoIQ-w6JtRXkZiIwc2izy2m26cPE"})))}}]),t}(l.a.Component),O=a(9),j=function(e){return l.a.createElement("div",{className:w.splash},l.a.createElement("div",{className:w.info},l.a.createElement("h2",{className:w.title},"Factsolotl"),l.a.createElement("p",{className:w.content},"The water quality fact finder."),l.a.createElement("h4",{className:w.content2},"Use Factsolotl to search for lead results from tap water samples taken at public schools across California from 2017 to 2019."),l.a.createElement(O.b,{to:"/search"},l.a.createElement("button",{className:"btn waves-effect waves-light green"},"Begin Search"))),l.a.createElement("div",{className:w.fortyTwo},l.a.createElement("h1",null,"Don't Panic"),l.a.createElement("p",null,"Stay informed.")),l.a.createElement("div",{className:w.legend},l.a.createElement("label",null,"The ",l.a.createElement("span",{className:w.highlightMap},"map")," shows the number of samples, per county, that had a lead result greater than 15ppb."),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("label",null,"Hover over a marker for info.")),l.a.createElement(k,null))},q=a(45),T=a(46),L=a.n(T),F=a(24),B=function(){return l.a.createElement("div",{className:F.logo},l.a.createElement("a",{href:"https://www.scientificamerican.com/article/biologys-beloved-amphibian-the-axolotl-is-racing-toward-extinction1/",rel:"noopener noreferrer",target:"_blank"},l.a.createElement("img",{className:F.leftLogo,src:L.a,alt:"A pink cartoon axolotl"})))},M=function(e){var t=l.a.createElement("button",{id:"home",type:"click",className:"btn-floating btn-large waves-effect waves-light transparent"},l.a.createElement("i",{id:"homeIcon",className:"material-icons"},"home"));return l.a.createElement("div",{className:q.nav},l.a.createElement(B,null),l.a.createElement(O.b,{to:"/",exact:!0},t))},D=a(10),A=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={schools:[],selectedschoolId:"",error:!1,loadedSchool:null,query1:"",query2:"",query3:"",exceedance:!1,exceedanceCheck:!1,total:0},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"queryHandler",value:function(e){var t=this,a="https://data.ca.gov/api/3/action/datastore_search?resource_id=5ebb2d68-1186-4937-acaf-8564c9a01ed6&q="+this.state.query1+", "+this.state.query2+", "+this.state.query3,n=a+", yes";""===this.state.query1&&""===this.state.query2&&""===this.state.query3?alert("Please select a year or enter an input in one of the search fields."):this.state.exceedance?this.state.exceedance&&p.a.get(n).then((function(a){var n=a.data.result.records,l=a.data.result.total;0===n.length&&alert("No schools matched this search");var o=n.map((function(e){return Object(m.a)({},e,{id:Object(f.v4)(),key:Object(f.v4)()})}));t.setState(Object(m.a)({},e,{schools:o,queried:!0,total:l}))})).catch((function(e){t.setState({error:!0})})):p.a.get(a).then((function(a){var n=a.data.result.records,l=a.data.result.total;0===n.length&&alert("No schools matched this search");var o=n.map((function(e){return Object(m.a)({},e,{id:Object(f.v4)(),key:Object(f.v4)()})}));t.setState(Object(m.a)({},e,{schools:o,queried:!0,total:l}))})).catch((function(e){t.setState({error:!0})}))}},{key:"schoolDetailsHandler",value:function(e,t){this.setState({selectedSchoolId:e});for(var a=this.state.schools,n=0;n<a.length;n++)a[n].id===e&&this.setState(Object(m.a)({},t,{loadedSchool:a[n]}))}},{key:"toggleDetails",value:function(e){this.setState(Object(m.a)({},e,{loadedSchool:null}))}},{key:"onToggleQuery",value:function(e){this.setState(Object(m.a)({},e,{exceedance:!this.state.exceedance}))}},{key:"handleYearFilter",value:function(e,t){this.setState(Object(m.a)({},t,{query3:e.target.value}))}},{key:"handleNameFilter",value:function(e,t){this.setState(Object(m.a)({},t,{query1:e.target.value}))}},{key:"handleCountyFilter",value:function(e,t){this.setState(Object(m.a)({},t,{query2:e.target.value}))}},{key:"handleNewSearch",value:function(e){this.setState(Object(m.a)({},e,{total:0}))}},{key:"render",value:function(){var e=this,t=this.state.exceedance?C.toggleOn:C.toggleOff,a=this.state.exceedance?C.toggleOff:C.toggleOn,n=this.state.exceedance?"Only show schools with an exceedance":"Search all schools",o=l.a.createElement("div",{className:C.detailBox},l.a.createElement(S,{id:this.state.selectedSchoolId,loadedSchool:this.state.loadedSchool,closeDetails:function(t){return e.toggleDetails(t)}})),c=l.a.createElement("div",{className:C.previewBox},l.a.createElement("h4",{className:C.clickExpand},"Click the down arrow for school sample details:"),l.a.createElement("p",{className:C.clickExpand},"Schools matching search:"," ",l.a.createElement("span",{className:C.total},this.state.total)),l.a.createElement(E,{error:this.state.error,schools:this.state.schools,selectedSchoolId:this.state.selectedSchoolId,onSchoolSelect:function(t){return e.schoolDetailsHandler(t)},loadedSchool:this.state.loadedSchool,queried:this.state.queried,toggleDetails:this.state.detailsSelected})),r=l.a.createElement("div",null,l.a.createElement("div",{className:C.searchHeader},l.a.createElement("h3",{className:C.searchTitle},"Search by school name and/or county."),l.a.createElement("div",{className:"row"},l.a.createElement("div",{id:"col1",className:"col-md-6"},l.a.createElement("h5",null,"Filter search by year and/or exceedance.")),l.a.createElement("div",{className:"col-md-6"},l.a.createElement("h5",null,"Your search will return a result for each sample taken that matches the search criteria."))),l.a.createElement("p",null,"Most schools will have several results and results with no exceedance (lead less than 15ppb) will look the same, with lead = 5ppb.")),l.a.createElement("div",{className:"footer"},l.a.createElement("div",{className:"card white"},l.a.createElement("div",{className:"card-content grey-text"},l.a.createElement("span",{className:C.exceedanceTitle},n),l.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e.queryHandler(e.state.query1,e.state.query2)}},l.a.createElement("div",{className:C.select},l.a.createElement("label",null,"Filter by year: "),l.a.createElement("select",{className:"browser-default",value:this.state.query3,onChange:function(t){return e.handleYearFilter(t)}},l.a.createElement("option",{value:""},"ALL YEARS"),l.a.createElement("option",{value:"2017"},"2017"),l.a.createElement("option",{value:"2018"},"2018"),l.a.createElement("option",{value:"2019"},"2019"))),l.a.createElement("div",null,l.a.createElement("input",{type:"text",placeholder:"Search...",value:this.state.query1,onChange:function(t){return e.handleNameFilter(t)}}),l.a.createElement("label",null,"Enter school name"),l.a.createElement("input",{type:"text",placeholder:"Search...",value:this.state.query2,onChange:function(t){return e.handleCountyFilter(t)}}),l.a.createElement("label",null,"Enter county")),l.a.createElement("div",{className:"card-action"},l.a.createElement("label",{className:C.toggleBG},l.a.createElement("span",null,"Filter by exceedance:"," "),l.a.createElement("div",{className:C.exceedanceToggle},l.a.createElement("span",{onClick:function(t){return e.onToggleQuery(t)},className:t},"On"),l.a.createElement("span",{onClick:function(t){return e.onToggleQuery(t)},className:a},"Off"))),l.a.createElement("button",{id:"search",className:"btn waves-effect waves-light green",type:"submit"},l.a.createElement("i",{className:"large material-icons prefix"},"search")))),this.state.total>0&&l.a.createElement(D.a,{to:{pathname:"/searchresults"}}),l.a.createElement("label",null,l.a.createElement("h6",{className:C.searchFooter},"Systems compare sample results from homes to EPA\u2019s action level of 0.015 mg/L (15 ppb). Exceeding the action level is not a violation. Violations can be assessed if a system does not perform certain required actions (e.g., public education or lead service line replacement) after the action level is exceeded. Other violations may also be assessed under the rule. For example, if samples are collected improperly, samples are not reported, or if treatment is done incorrectly.")),l.a.createElement("label",null," -The EPA Lead and Copper rule")))));return l.a.createElement(D.d,null,l.a.createElement(D.b,{path:"/",exact:!0,render:function(){return l.a.createElement("div",null,l.a.createElement(j,{seeMap:function(t){return e.toggleMap(t)},mapViewStatus:e.state.map,startSearch:function(t){return e.startSearch(t)}}))}}),l.a.createElement(D.b,{path:"/search",exact:!0,render:function(){return l.a.createElement("div",null,r)}}),l.a.createElement(D.b,{path:"/searchresults",exact:!0,render:function(){return l.a.createElement("div",{className:C.display},l.a.createElement(O.b,{to:"/search"},l.a.createElement("button",{id:"searchToggle",className:"waves-effect waves-dark btn-small   blue-grey",type:"click",onClick:function(t){return e.handleNewSearch(t)}},"New Search")),c,o)}}))}}]),t}(n.Component),I=(a(78),function(e){function t(){return Object(r.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement(O.a,null,l.a.createElement("div",{className:"App"},l.a.createElement("div",{className:"sliding-background"}),l.a.createElement("div",{className:"search container"},l.a.createElement(M,null),l.a.createElement(A,null))))}}]),t}(l.a.Component)),P=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function G(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}p.a.interceptors.request.use((function(e){return console.log(e),e}),(function(e){return console.log(e),Promise.reject(e)})),p.a.interceptors.response.use((function(e){return console.log(e),e}),(function(e){return console.log(e),Promise.reject(e)})),c.a.render(l.a.createElement(I,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/Factsolotl",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/Factsolotl","/service-worker.js");P?function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):G(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):G(e)}))}}()}},[[47,1,2]]]);
//# sourceMappingURL=main.95166346.chunk.js.map