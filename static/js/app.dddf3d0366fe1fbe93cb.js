webpackJsonp([0],[,,function(t,s,e){"use strict";e.d(s,"a",function(){return a});var a={name:{first:"John",last:"Doe"},position:"Software Developer",birth:{year:1990,location:"New York"},experience:[{company:"Company A",position:"Developer",timeperiod:"since January 2016",description:"Programming and watching cute cat videos."},{company:"Company B",position:"Frontend Developer",timeperiod:"January 2015 - December 2015",description:"Fulfillment of extremely important tasks."},{company:"Company C",position:"Trainee",timeperiod:"March 2014 - December 2014",description:"Making coffee and baking cookies."}],education:[{degree:"Master of Arts",timeperiod:"March 2012 - December 2013",description:"Major in Hacking and Computer Penetration, University A, New York, USA."},{degree:"Bachelor of Science",timeperiod:"March 2009 - December 2011",description:"Major in Engineering, University B, Los Angeles, USA."}],skills:[{name:"HTML5",level:"99"},{name:"CSS3",level:"95"},{name:"JavaScript",level:"97"},{name:"Node.js",level:"93"},{name:"Angular 2",level:"60"},{name:"TypeScript",level:"80"},{name:"ES.Next",level:"70"},{name:"Docker",level:"99"}],skillDescription:"Also proficient in Adobe Photoshop and Illustrator, grew up bilingual (English and Klingon).",contact:{email:"john.doe@email.com",phone:"0123 456789",street:"1234 Broadway",city:"New York",website:"johndoe.com",github:"johnyD"}}},function(t,s,e){"use strict";var a=e(0),i=e(40),n=e(28),r=e.n(n),c=e(27),o=e.n(c);a.a.use(i.a),s.a=new i.a({routes:[{path:"/",name:"home",component:o.a},{path:"/resume/:resumeid",name:"resume",component:r.a}]})},function(t,s,e){function a(t){e(17)}var i=e(1)(e(7),e(35),a,null,null);t.exports=i.exports},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e(0),i=e(4),n=e.n(i),r=e(3);a.a.config.productionTip=!1,new a.a({el:"#app",router:r.a,template:"<App/>",components:{App:n.a}})},function(t,s,e){"use strict";var a=e(30),i=(e.n(a),e(29)),n=(e.n(i),e(31)),r=(e.n(n),e(32));e.n(r)},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={name:"app"}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e(0);s.default=a.a.component("resume",{name:"app"})},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e(0),i=e(14);e(6);s.default=a.a.component("resume",{name:"app",mounted:function(){i.a()}})},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e(2),i=e(0);s.default=i.a.component("left-right",{name:"left-right",data:function(){return{person:a.a}}})},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e(2),i=e(0);s.default=i.a.component("material-dark",{name:"material-dark",data:function(){return{person:a.a}}})},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e(2),i=e(0);s.default=i.a.component("oblique",{name:"oblique",data:function(){return{person:a.a}}})},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e(2),i=e(0);s.default=i.a.component("side-bar",{name:"side-bar",data:function(){return{person:a.a}}})},,function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s,e){t.exports=e.p+"static/img/logo.1522a48.png"},function(t,s,e){t.exports=e.p+"static/img/resume-left-right.7426cd9.png"},function(t,s,e){t.exports=e.p+"static/img/resume-material-dark.f7ef15e.png"},function(t,s,e){t.exports=e.p+"static/img/resume-oblique.72046ae.png"},function(t,s,e){t.exports=e.p+"static/img/resume-side-bar.38870fa.png"},function(t,s,e){function a(t){e(18)}var i=e(1)(e(8),e(36),a,"data-v-6bc0d1ee",null);t.exports=i.exports},function(t,s,e){function a(t){e(21)}var i=e(1)(e(9),e(39),a,"data-v-ae36d252",null);t.exports=i.exports},function(t,s,e){function a(t){e(20)}var i=e(1)(e(10),e(38),a,"data-v-7974d9de",null);t.exports=i.exports},function(t,s,e){function a(t){e(19)}var i=e(1)(e(11),e(37),a,"data-v-78624d84",null);t.exports=i.exports},function(t,s,e){function a(t){e(15)}var i=e(1)(e(12),e(33),a,"data-v-145a34d9",null);t.exports=i.exports},function(t,s,e){function a(t){e(16)}var i=e(1)(e(13),e(34),a,"data-v-2c7a7025",null);t.exports=i.exports},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"resume",attrs:{id:"resume3"}},[e("div",{staticClass:"resume-header"},[e("div",{staticClass:"triangle"}),t._v(" "),e("div",{staticClass:"person-header"},[e("div",{staticClass:"person-wrapper"},[e("div",{staticClass:"person"},[e("div",{staticClass:"name"},[t._v(t._s(t.person.name.first)+" "+t._s(t.person.name.last))]),t._v(" "),e("div",{staticClass:"position"},[t._v(t._s(t.person.position))])]),t._v(" "),e("div",{staticClass:"img"})])])]),t._v(" "),e("div",{staticClass:"resume-content"},[e("div",{staticClass:"experience"},[e("h3",[t._v("Experience")]),t._v(" "),t._l(t.person.experience,function(s){return e("div",{staticClass:"experience-block"},[e("div",{staticClass:"row"},[e("span",{staticClass:"job-title"},[t._v(" "+t._s(s.position)+" ")]),t._v(" "),e("i",{staticClass:"material-icons"},[t._v("details")]),t._v(" "),e("span",{staticClass:"company"},[t._v(" "+t._s(s.company)+" ")])]),t._v(" "),e("div",{staticClass:"row"},[e("span",{staticClass:"time-period"},[t._v(" "+t._s(s.timeperiod))]),t._v(" "),e("span",{staticClass:"job-description"},[t._v(", "+t._s(s.description)+" ")])])])})],2),t._v(" "),e("div",{staticClass:"education"},[e("h3",[t._v("Education")]),t._v(" "),t._l(t.person.education,function(s){return e("div",{staticClass:"education-block"},[e("div",{staticClass:"row"},[e("span",{staticClass:"degree"},[t._v(t._s(s.degree))])]),t._v(" "),e("div",{staticClass:"row"},[e("span",{staticClass:"degree-description"},[t._v(t._s(s.description))])])])})],2),t._v(" "),e("div",{staticClass:"skill-section"},[e("h3",[t._v("Skills")]),t._v(" "),t._l(t.person.skills,function(s){return e("div",{staticClass:"skills"},[e("div",{staticClass:"skill-block"},[e("i",{staticClass:"material-icons"},[t._v("details")]),t._v(" "),e("span",{staticClass:"skill"},[t._v(t._s(s.name))])])])})],2),t._v(" "),e("div",{staticClass:"skills-other"},[e("span",[t._v(t._s(t.person.skillDescription)+" ")])]),t._v(" "),e("div",{staticClass:"contact"},[e("h3",[t._v("Contact")]),t._v(" "),e("a",{attrs:{href:"mailto:"+t.person.contact.email}},[t._v(" "+t._s(t.person.contact.email))]),t._v(" "),e("span",[t._v("; ")]),t._v(" "),e("a",{attrs:{href:"tel:"+t.person.contact.phone}},[t._v(t._s(t.person.contact.phone))]),t._v(" "),e("span",[t._v("; ")]),t._v(" "),e("span",[t._v(t._s(t.person.contact.street)+", "+t._s(t.person.contact.city))]),t._v(" "),e("span",[t._v("; ")]),t._v(" "),e("a",{attrs:{href:t.person.contact.website}},[t._v("\n              "+t._s(t.person.contact.website))]),t._v(" "),e("span",[t._v("; ")]),t._v(" "),e("a",{attrs:{href:"https://github.com/"+t.person.contact.github}},[t._v("\n                https://github.com/"+t._s(t.person.contact.github))])])])])},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"resume",attrs:{id:"resume2"}},[e("div",{staticClass:"top-row"},[e("span",{staticClass:"person-name"},[t._v("  "+t._s(t.person.name.first)+"  "+t._s(t.person.name.last)+"    ")]),t._v(" "),e("span",{staticClass:"person-position"},[t._v("  "+t._s(t.person.position)+"    ")])]),t._v(" "),e("div",{staticClass:"left-col"},[t._m(0),t._v(" "),e("div",{staticClass:"contact"},[e("h3",[t._v("Contact")]),t._v(" "),e("div",{staticClass:"contact-row"},[e("a",{attrs:{href:"mailto:"+t.person.contact.email}},[t._v(t._s(t.person.contact.email))])]),t._v(" "),t._m(1),t._v(" "),e("div",{staticClass:"contact-row"},[e("a",{attrs:{href:"'tel:'+person.contact.phone"}},[t._v(t._s(t.person.contact.phone))])]),t._v(" "),t._m(2),t._v(" "),e("div",{staticClass:"contact-row"},[t._v("\n                "+t._s(t.person.contact.street)+" "),e("br"),t._v(" "+t._s(t.person.contact.city)+"\n            ")]),t._v(" "),t._m(3),t._v(" "),e("div",{staticClass:"contact-row"},[e("a",{attrs:{href:"https://github.com/"+t.person.contact.github}},[t._v("https://github.com/"+t._s(t.person.contact.github))])])])]),t._v(" "),e("div",{staticClass:"right-col"},[e("div",{staticClass:"experience"},[e("h3",[t._v("Experience")]),t._v(" "),t._l(t.person.experience,function(s){return e("div",{staticClass:"experience-block"},[e("div",{staticClass:"row"},[e("span",{staticClass:"company"},[t._v(" "+t._s(s.company)+" -")]),t._v(" "),e("span",{staticClass:"job-title"},[t._v(" "+t._s(s.position)+" ")])]),t._v(" "),e("div",{staticClass:"row"},[e("span",{staticClass:"time-period"},[t._v(" "+t._s(s.timeperiod))])]),t._v(" "),e("div",{staticClass:"row"},[e("span",{staticClass:"job-description"},[t._v(" "+t._s(s.description)+" ")])])])})],2),t._v(" "),e("div",{staticClass:"education"},[e("h3",[t._v("Education")]),t._v(" "),t._l(t.person.education,function(s){return e("div",{staticClass:"education-block"},[e("div",{staticClass:"row"},[e("span",{staticClass:"degree"},[t._v(t._s(s.degree))])]),t._v(" "),e("div",{staticClass:"row"},[e("span",{staticClass:"degree-description"},[t._v(t._s(s.description))])])])})],2),t._v(" "),e("div",{staticClass:"skills-block"},[e("h3",[t._v("Skills")]),t._v(" "),e("div",{staticClass:"skills"},t._l(t.person.skills,function(s){return e("div",{staticClass:"skill"},[e("span",{staticClass:"skill-name"},[t._v(t._s(s.name))])])})),t._v(" "),e("span",{staticClass:"skills-other"},[t._v(" "+t._s(t.person.skillDescription)+" ")])])])])},staticRenderFns:[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"person-image"},[e("div",{staticClass:"image-centerer"},[e("div",{staticClass:"img"})])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"contact-row dots"},[e("i",{staticClass:"fa fa-circle",attrs:{"aria-hidden":"true"}}),t._v(" "),e("i",{staticClass:"fa fa-circle",attrs:{"aria-hidden":"true"}}),t._v(" "),e("i",{staticClass:"fa fa-circle",attrs:{"aria-hidden":"true"}})])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"contact-row dots"},[e("i",{staticClass:"fa fa-circle",attrs:{"aria-hidden":"true"}}),t._v(" "),e("i",{staticClass:"fa fa-circle",attrs:{"aria-hidden":"true"}}),t._v(" "),e("i",{staticClass:"fa fa-circle",attrs:{"aria-hidden":"true"}})])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"contact-row dots"},[e("i",{staticClass:"fa fa-circle",attrs:{"aria-hidden":"true"}}),t._v(" "),e("i",{staticClass:"fa fa-circle",attrs:{"aria-hidden":"true"}}),t._v(" "),e("i",{staticClass:"fa fa-circle",attrs:{"aria-hidden":"true"}})])}]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]}},function(t,s,e){t.exports={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"home"},[t._m(0),t._v(" "),t._m(1),t._v(" "),a("h3",{staticClass:"title"},[t._v("best-resume-ever")]),t._v(" "),a("div",{staticClass:"previews"},[a("div",{staticClass:"preview"},[a("router-link",{attrs:{to:"/resume/material-dark"}},[a("div",{staticClass:"preview-wrapper"},[a("img",{attrs:{src:e(24)}}),t._v(" "),a("span",[t._v("material-dark")])])])],1),t._v(" "),a("div",{staticClass:"preview"},[a("router-link",{attrs:{to:"/resume/left-right"}},[a("div",{staticClass:"preview-wrapper"},[a("img",{attrs:{src:e(23)}}),t._v(" "),a("span",[t._v("left-right")])])])],1),t._v(" "),a("div",{staticClass:"preview"},[a("router-link",{attrs:{to:"/resume/oblique"}},[a("div",{staticClass:"preview-wrapper"},[a("img",{attrs:{src:e(25)}}),t._v(" "),a("span",[t._v("oblique")])])])],1),t._v(" "),a("div",{staticClass:"preview"},[a("router-link",{attrs:{to:"/resume/side-bar"}},[a("div",{staticClass:"preview-wrapper"},[a("img",{attrs:{src:e(26)}}),t._v(" "),a("span",[t._v("side-bar")])])])],1)])])},staticRenderFns:[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("a",{attrs:{href:"https://github.com/salomonelli/best-resume-ever",target:"_blank"}},[e("img",{staticStyle:{position:"absolute",top:"0",right:"0",border:"0"},attrs:{src:"https://camo.githubusercontent.com/38ef81f8aca64bb9a64448d0d70f1308ef5341ab/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f6461726b626c75655f3132313632312e706e67",alt:"Fork me on GitHub","data-canonical-src":"https://s3.amazonaws.com/github/ribbons/forkme_right_darkblue_121621.png"}})])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"logo"},[a("img",{attrs:{src:e(22)}})])}]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"resume"},[e("div",{staticClass:"leftCol m_box"},[e("div",{staticClass:"shadow"}),t._v(" "),e("div",{staticClass:"heading",attrs:{id:"myselfpic"}}),t._v(" "),e("div",{staticClass:"section-headline"},[t._v("\n      Contact\n    ")]),t._v(" "),e("div",{staticClass:"item"},[t._m(0),t._v(" "),e("div",{staticClass:"text"},[e("ul",[e("li",[t._v(" Born "+t._s(t.person.birth.year)+" in "+t._s(t.person.birth.location))])])])]),t._v(" "),e("div",{staticClass:"item"},[t._m(1),t._v(" "),e("div",{staticClass:"text"},[e("ul",[e("li",[t._v(t._s(t.person.contact.street))]),t._v(" "),e("li",[t._v(t._s(t.person.contact.city))])])])]),t._v(" "),e("a",{attrs:{href:"tel:"+t.person.contact.phone}},[e("div",{staticClass:"item"},[t._m(2),t._v(" "),e("div",{staticClass:"text"},[t._v("\n          "+t._s(t.person.contact.phone)+"\n        ")])])]),t._v(" "),e("a",{attrs:{href:"mailto:"+t.person.contact.email}},[e("div",{staticClass:"item"},[t._m(3),t._v(" "),e("div",{staticClass:"text"},[t._v("\n          "+t._s(t.person.contact.email)+"\n        ")])])]),t._v(" "),e("a",{attrs:{href:"https://github.com/"+t.person.contact.github,target:"_blank"}},[e("div",{staticClass:"item"},[t._m(4),t._v(" "),e("div",{staticClass:"text"},[e("span",[t._v("@"+t._s(t.person.contact.github))]),t._v(" "),e("span",[t._v("github.com/"+t._s(t.person.contact.github))])])])]),t._v(" "),e("a",{attrs:{href:t.person.contact.website,target:"_blank"}},[e("div",{staticClass:"item"},[t._m(5),t._v(" "),e("div",{staticClass:"text"},[e("span",[t._v(t._s(t.person.contact.website))])])])]),t._v(" "),e("div",{staticClass:"item last"},[e("div",{staticClass:"section-headline"},[t._v("\n        Skills\n      ")]),t._v(" "),t._l(t.person.skills,function(s){return e("div",{staticClass:"skill"},[e("div",{staticClass:"right"},[e("span",[t._v(t._s(s.name)+" ")]),t._v(" "),e("div",{staticClass:"progress"},[e("div",{staticClass:"determinate",style:"width: "+s.level+"%;"},[e("i",{staticClass:"fa fa-circle"})])])])])})],2)]),t._v(" "),e("div",{staticClass:"rightCol"},[e("div",{staticClass:"title"},[e("h2",[t._v(t._s(t.person.name.first)+"  "+t._s(t.person.name.last))]),t._v(" "),e("div",[t._v(t._s(t.person.position))])]),t._v(" "),e("div",{staticClass:"section-headline"},[t._v("Working experience")]),t._v(" "),t._l(t.person.experience,function(s){return e("div",{staticClass:"block"},[e("div",{staticClass:"block-helper"}),t._v(" "),e("div",{staticClass:"headline"},[t._v(t._s(s.position)+" - "+t._s(s.company)),t._v(" "),e("div",{staticClass:"subheadline"},[t._v(t._s(s.timeperiod))]),t._v(" "),e("p",{staticClass:"info"},[t._v("\n          "+t._s(s.description)+"\n        ")])])])}),t._v(" "),e("div",{staticClass:"section-headline"},[t._v("Education")]),t._v(" "),t._l(t.person.education,function(s){return e("div",{staticClass:"block"},[e("div",{staticClass:"block-helper"}),t._v(" "),e("div",{staticClass:"headline"},[t._v(t._s(s.degree))]),t._v(" "),e("p",{staticClass:"info"},[t._v("\n        "+t._s(s.timeperiod)+", "+t._s(s.description)+"\n      ")])])})],2),t._v(" "),e("div",{staticStyle:{clear:"both"}})])},staticRenderFns:[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"icon"},[e("i",{staticClass:"material-icons"},[t._v("account_circle")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"icon"},[e("i",{staticClass:"material-icons"},[t._v("location_city")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"icon"},[e("i",{staticClass:"material-icons"},[t._v("phone")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"icon"},[e("i",{staticClass:"material-icons"},[t._v("email")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"icon"},[e("i",{staticClass:"fa fa-github"})])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"icon"},[e("i",{staticClass:"material-icons"},[t._v("language")])])}]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"resume",attrs:{id:"resume1"}},[e("div",{staticClass:"row text-center"},[e("span",{staticClass:"name"},[t._v(t._s(t.person.name.first)+"  "+t._s(t.person.name.last))])]),t._v(" "),e("div",{staticClass:"row text-center"},[e("p",{staticClass:"position center"},[t._v(t._s(t.person.position))])]),t._v(" "),t._m(0),t._v(" "),e("div",{staticClass:"left half"},[e("div",{staticClass:"experience"},[e("h3",[t._v("Experience")]),t._v(" "),t._l(t.person.experience,function(s){return e("div",{staticClass:"experience-block"},[e("span",{staticClass:"company"},[t._v(" "+t._s(s.company)+" ")]),t._v(" "),e("span",{staticClass:"job-title"},[t._v(" "+t._s(s.position)+" ")]),t._v(" "),e("span",{staticClass:"time-period"},[t._v(" "+t._s(s.timeperiod))]),t._v(" "),e("span",{staticClass:"job-description"},[t._v(" "+t._s(s.description)+" ")])])})],2),t._v(" "),e("div",{staticClass:"contact"},[e("h3",[t._v("Contact")]),t._v(" "),e("table",[e("tr",[e("td",[e("a",{attrs:{href:"mailto:"+t.person.contact.email}},[t._v(t._s(t.person.contact.email))])]),t._v(" "),t._m(1)]),t._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"tel:"+t.person.contact.phone}},[t._v(t._s(t.person.contact.phone))])]),t._v(" "),t._m(2)]),t._v(" "),e("tr",[e("td",[t._v(t._s(t.person.contact.street)+" "),e("br"),t._v(" "+t._s(t.person.contact.city))]),t._v(" "),t._m(3)]),t._v(" "),e("tr",[e("td",[e("a",{attrs:{href:t.person.contact.website}},[t._v(t._s(t.person.contact.website))])]),t._v(" "),t._m(4)]),t._v(" "),e("tr",[e("td",[e("a",{attrs:{href:"https://github.com/"+t.person.contact.github}},[t._v("https://github.com/"+t._s(t.person.contact.github))])]),t._v(" "),t._m(5)])])])]),t._v(" "),e("div",{staticClass:"right half"},[e("div",{staticClass:"education"},[e("h3",[t._v("Education")]),t._v(" "),t._l(t.person.education,function(s){return e("div",{staticClass:"education-block"},[e("span",{staticClass:"degree"},[t._v(t._s(s.degree))]),t._v(" "),e("span",{staticClass:"degree-description"},[t._v(t._s(s.description))])])})],2),t._v(" "),e("h3",[t._v("Skills")]),t._v(" "),e("div",{staticClass:"skills"},t._l(t.person.skills,function(s){return e("div",{staticClass:"skill-block"},[e("span",{staticClass:"skill"},[t._v(t._s(s.name))]),t._v(" "),e("div",{staticClass:"skill-bar"},[e("div",{staticClass:"level",style:"width: "+s.level+"%"})])])})),t._v(" "),e("span",{staticClass:"skills-other"},[t._v(" "+t._s(t.person.skillDescription)+" ")])])])},staticRenderFns:[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"row"},[e("div",{staticClass:"image center"},[e("div",{staticClass:"img"})])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("td",[e("i",{staticClass:"fa fa-envelope",attrs:{"aria-hidden":"true"}})])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("td",[e("i",{staticClass:"fa fa-phone",attrs:{"aria-hidden":"true"}})])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("td",[e("i",{staticClass:"fa fa-home",attrs:{"aria-hidden":"true"}})])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("td",[e("i",{staticClass:"fa fa-globe",attrs:{"aria-hidden":"true"}})])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("td",[e("i",{staticClass:"fa fa-github",attrs:{"aria-hidden":"true"}})])}]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"page-wrapper"},[e("div",{staticClass:"page"},[e("div",{staticClass:"page-inner"},[e(t.$route.params.resumeid,{tag:"component"})],1)])])},staticRenderFns:[]}}],[5]);
//# sourceMappingURL=app.dddf3d0366fe1fbe93cb.js.map