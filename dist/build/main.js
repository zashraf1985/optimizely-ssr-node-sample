(()=>{"use strict";var e={1508:(e,t,a)=>{var i=a(7294),n=a(3935),r=a(3727),d=a(4575),o=a.n(d),s=a(3913),l=a.n(s),u=a(2205),c=a.n(u),f=a(8585),y=a.n(f),v=a(9754),p=a.n(v),b=a(5977),m=a(2150),I=a(1506),k=a.n(I);var _=function(e){c()(r,e);var t,a,n=(t=r,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,i=p()(t);if(a){var n=p()(this).constructor;e=Reflect.construct(i,arguments,n)}else e=i.apply(this,arguments);return y()(this,e)});function r(){var e;return o()(this,r),console.log("Counter.constructor()"),(e=n.call(this)).increment=e.increment.bind(k()(e)),e.state={count:0},e}return l()(r,[{key:"increment",value:function(){console.log("Counter.increment()"),this.setState({count:this.state.count+1})}},{key:"render",value:function(){var e=this;return console.log("Counter.render()"),i.createElement("div",{className:"ui-counter"},i.createElement("div",null,i.createElement(m.QA,{experiment:"big_buy_button_test",autoUpdate:!0},i.createElement(m.Oi,{variation:"variation_1"},i.createElement("p",{className:"ui-counter__title"},"Counter Widget (Variation 1)")),i.createElement(m.Oi,{variation:"variation_2"},i.createElement("p",{className:"ui-counter__title"},"Counter Widget (Variation 2)")),i.createElement(m.Oi,{default:!0},i.createElement("p",{className:"ui-counter__title"},"Counter Widget (Variation Default)")))),i.createElement("div",{className:"ui-counter__body"},i.createElement("p",{className:"ui-counter__body__name"},this.props.name),i.createElement("p",{className:"ui-counter__body__count"},this.state.count),i.createElement("button",{className:"ui-counter__body__button",onClick:function(){return e.increment()},disabled:30===this.state.count},"Increment")))}}]),r}(i.Component);var g=!1;"undefined"!=typeof process&&(g="true"===process.env.IS_SERVER_SIDE);var R;R=g?{datafile:{version:"4",rollouts:[{experiments:[{status:"Running",audienceIds:[],variations:[{variables:[],id:"18419990161",key:"18419990161",featureEnabled:!0}],id:"18406080164",key:"18406080164",layerId:"16108441245",trafficAllocation:[{entityId:"18419990161",endOfRange:1e4}],forcedVariations:{}}],id:"16108441245"},{experiments:[{status:"Running",audienceIds:[],variations:[{variables:[{id:"17903790893",value:""},{id:"17893211989",value:""}],id:"18410200058",key:"18410200058",featureEnabled:!0}],id:"18408210133",key:"18408210133",layerId:"17884040970",trafficAllocation:[{entityId:"18410200058",endOfRange:1e4}],forcedVariations:{}}],id:"17884040970"},{experiments:[{status:"Running",audienceIds:[],variations:[{variables:[],id:"18427410069",key:"18427410069",featureEnabled:!0}],id:"18409960251",key:"18409960251",layerId:"17907090111",trafficAllocation:[],forcedVariations:{}}],id:"17907090111"},{experiments:[{status:"Running",audienceIds:[],variations:[{variables:[{id:"18691071302",value:"0"}],id:"18616522283",key:"18616522283",featureEnabled:!0}],id:"18683540672",key:"18683540672",layerId:"18608871481",trafficAllocation:[{entityId:"18616522283",endOfRange:1e4}],forcedVariations:{}}],id:"18608871481"},{experiments:[{status:"Running",audienceIds:[],variations:[{variables:[],id:"18610741968",key:"18610741968",featureEnabled:!0}],id:"18641662485",key:"18641662485",layerId:"18608881875",trafficAllocation:[],forcedVariations:{}}],id:"18608881875"},{experiments:[{status:"Running",audienceIds:[],variations:[{variables:[],id:"18628382594",key:"18628382594",featureEnabled:!0}],id:"18683521295",key:"18683521295",layerId:"18622222848",trafficAllocation:[],forcedVariations:{}}],id:"18622222848"},{experiments:[{status:"Running",audienceIds:[],variations:[{variables:[{id:"19732624478",value:"Not Enabled"},{id:"19734884008",value:"false"}],id:"18651202400",key:"18651202400",featureEnabled:!0}],id:"18622212233",key:"18622212233",layerId:"18630362526",trafficAllocation:[],forcedVariations:{}}],id:"18630362526"},{experiments:[{status:"Running",audienceIds:[],variations:[{variables:[{id:"18920432514",value:"false"}],id:"18639782478",key:"18639782478",featureEnabled:!0}],id:"18647302449",key:"18647302449",layerId:"18658421516",trafficAllocation:[{entityId:"18639782478",endOfRange:1e4}],forcedVariations:{}}],id:"18658421516"}],typedAudiences:[{id:"17904951382",conditions:["and",["or",["or",{value:null,type:"custom_attribute",name:"as",match:"exists"}]]],name:"Audience one"}],anonymizeIP:!0,projectId:"16127820949",variables:[],featureFlags:[{experimentIds:[],rolloutId:"16108441245",variables:[],id:"16137770343",key:"cute-feature"},{experimentIds:[],rolloutId:"17884040970",variables:[{defaultValue:"",type:"string",id:"17893211989",key:"name"},{defaultValue:"",type:"string",id:"17903790893",key:"age"}],id:"17864261029",key:"another_feature"},{experimentIds:[],rolloutId:"17907090111",variables:[],id:"17886410048",key:"hack_demo"},{experimentIds:["18639731563"],rolloutId:"18608871481",variables:[{defaultValue:"0",type:"integer",id:"18691071302",key:"height"}],id:"18624532074",key:"new_tab_bar"},{experimentIds:["18634842318"],rolloutId:"18622222848",variables:[],id:"18624743251",key:"search_filter"},{experimentIds:["18637602682"],rolloutId:"18608881875",variables:[],id:"18646022147",key:"warning_popup_2"},{experimentIds:["18616763092"],rolloutId:"18630362526",variables:[{defaultValue:"Not Enabled",type:"string",id:"19732624478",key:"str_var"},{defaultValue:"false",type:"boolean",id:"19734884008",key:"var1"}],id:"18647752452",key:"big_buy_button"},{experimentIds:["18651792024"],rolloutId:"18658421516",variables:[{defaultValue:"false",type:"boolean",id:"18920432514",key:"isWhatever"}],id:"18649752518",key:"spell_check"}],experiments:[{status:"Running",audienceIds:[],variations:[{variables:[],id:"16132090063",key:"variation_1"},{variables:[],id:"16120470043",key:"variation_2"}],id:"16128270092",key:"playground-test",layerId:"16124200173",trafficAllocation:[{entityId:"16120470043",endOfRange:5e3},{entityId:"16132090063",endOfRange:1e4}],forcedVariations:{}},{status:"Running",audienceIds:[],variations:[{variables:[],id:"17926820959",key:"variation_1"},{variables:[],id:"17955120307",key:"variation_2"},{variables:[],id:"17949280662",key:"v3"}],id:"17953001516",key:"abtest2",layerId:"17936470921",trafficAllocation:[{entityId:"17926820959",endOfRange:3333},{entityId:"17949280662",endOfRange:5e3},{entityId:"17955120307",endOfRange:8333},{entityId:"17949280662",endOfRange:1e4}],forcedVariations:{}},{status:"Running",audienceIds:[],variations:[{variables:[{id:"19732624478",value:"variation one"},{id:"19734884008",value:"true"}],id:"18630142331",key:"variation_1",featureEnabled:!0},{variables:[],id:"18637591406",key:"variation_2",featureEnabled:!1}],id:"18616763092",key:"big_buy_button_test",layerId:"18639732177",trafficAllocation:[{entityId:"18630142331",endOfRange:5e3},{entityId:"18637591406",endOfRange:1e4}],forcedVariations:{}},{status:"Running",audienceIds:[],variations:[{variables:[],id:"18630481975",key:"variation_1"},{variables:[],id:"18687311728",key:"variation_2"}],id:"18622672360",key:"liquid-ui",layerId:"18647852837",trafficAllocation:[{entityId:"18630481975",endOfRange:5e3},{entityId:"18687311728",endOfRange:1e4}],forcedVariations:{}},{status:"Running",audienceIds:[],variations:[{variables:[],id:"18630512464",key:"variation_1"},{variables:[],id:"18649143144",key:"variation_2"}],id:"18622672361",key:"weekly-discount",layerId:"18651672966",trafficAllocation:[{entityId:"18630512464",endOfRange:5e3},{entityId:"18649143144",endOfRange:1e4}],forcedVariations:{}},{status:"Running",audienceIds:[],variations:[{variables:[],id:"18622373509",key:"variation_1",featureEnabled:!1},{variables:[],id:"18649632341",key:"variation_2",featureEnabled:!0}],id:"18634842318",key:"search_filter_test",layerId:"18641982587",trafficAllocation:[{entityId:"18622373509",endOfRange:5e3},{entityId:"18649632341",endOfRange:1e4}],forcedVariations:{}},{status:"Running",audienceIds:[],variations:[{variables:[],id:"18643751940",key:"variation_1",featureEnabled:!1},{variables:[],id:"18679741978",key:"variation_2",featureEnabled:!0}],id:"18637602682",key:"warning_popup_2_test",layerId:"18651742053",trafficAllocation:[{entityId:"18643751940",endOfRange:5e3},{entityId:"18679741978",endOfRange:1e4}],forcedVariations:{}},{status:"Running",audienceIds:[],variations:[{variables:[{id:"18691071302",value:"50"}],id:"18636111678",key:"classic",featureEnabled:!0},{variables:[{id:"18691071302",value:"100"}],id:"18655091927",key:"modern",featureEnabled:!0}],id:"18639731563",key:"new_tab_bar_test",layerId:"18624492384",trafficAllocation:[{entityId:"18636111678",endOfRange:5e3},{entityId:"18655091927",endOfRange:1e4}],forcedVariations:{}},{status:"Running",audienceIds:[],variations:[{variables:[],id:"18647872366",key:"variation_1"},{variables:[],id:"18628532729",key:"variation_2"}],id:"18645982061",key:"funky-theme",layerId:"18624623621",trafficAllocation:[{entityId:"18628532729",endOfRange:5e3},{entityId:"18647872366",endOfRange:1e4}],forcedVariations:{}},{status:"Running",audienceIds:[],variations:[{variables:[],id:"18622582830",key:"variation_1"},{variables:[],id:"18608842889",key:"variation_2"}],id:"18647572421",key:"november-offer",layerId:"18647522346",trafficAllocation:[{entityId:"18608842889",endOfRange:5e3},{entityId:"18622582830",endOfRange:1e4}],forcedVariations:{}},{status:"Running",audienceIds:[],variations:[{variables:[],id:"18641592657",key:"variation_1",featureEnabled:!1},{variables:[{id:"18920432514",value:"false"}],id:"18628522380",key:"variation_2",featureEnabled:!0}],id:"18651792024",key:"spell_check_test",layerId:"18645592546",trafficAllocation:[{entityId:"18628522380",endOfRange:5e3},{entityId:"18641592657",endOfRange:1e4}],forcedVariations:{}}],audiences:[{id:"17904951382",conditions:'["or", {"match": "exact", "name": "$opt_dummy_attribute", "type": "custom_attribute", "value": "$opt_dummy_value"}]',name:"Audience one"},{conditions:'["or", {"match": "exact", "name": "$opt_dummy_attribute", "type": "custom_attribute", "value": "$opt_dummy_value"}]',id:"$opt_dummy_audience",name:"Optimizely-Generated Audience for Backwards Compatibility"}],groups:[],attributes:[{id:"17909010136",key:"as"}],botFiltering:!1,accountId:"8272261422",events:[{experimentIds:[],id:"18628161071",key:"buy-click"},{experimentIds:[],id:"18630443105",key:"help-click"},{experimentIds:[],id:"18635602459",key:"checkout-complete"},{experimentIds:[],id:"18642171978",key:"unsubscribe"},{experimentIds:[],id:"18645812462",key:"opt-in"}],revision:"59"}}:{sdkKey:"C21hgjpHCdKVKQscVvRh6e",datafileOptions:{autoUpdate:!0,updateInterval:5e3}};var h=(0,m.Fs)(R),E=function(e){c()(r,e);var t,a,n=(t=r,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,i=p()(t);if(a){var n=p()(this).constructor;e=Reflect.construct(i,arguments,n)}else e=i.apply(this,arguments);return y()(this,e)});function r(){return o()(this,r),console.log("App.constructor()"),n.call(this)}return l()(r,[{key:"render",value:function(){return console.log("App.render()"),console.log("IsServerSide: ".concat(g)),i.createElement(m.dH,{user:{id:"zeeshan"},optimizely:h,isServerSide:g,timeout:3e3},i.createElement("div",{className:"ui-app"},i.createElement(b.rs,null,i.createElement(b.AW,{path:"/",exact:!0,render:function(){return i.createElement(_,{name:"Button Click Count"})}}))))}}]),r}(i.Component);n.hydrate(i.createElement(r.VK,null,i.createElement(E,null)),document.getElementById("app"))}},t={};function a(i){if(t[i])return t[i].exports;var n=t[i]={exports:{}};return e[i].call(n.exports,n,n.exports,a),n.exports}a.m=e,a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var i in t)a.o(t,i)&&!a.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={179:0},t=[[1508,736]],i=()=>{};function n(){for(var i,n=0;n<t.length;n++){for(var r=t[n],d=!0,o=1;o<r.length;o++){var s=r[o];0!==e[s]&&(d=!1)}d&&(t.splice(n--,1),i=a(a.s=r[0]))}return 0===t.length&&(a.x(),a.x=()=>{}),i}a.x=()=>{a.x=()=>{},d=d.slice();for(var e=0;e<d.length;e++)r(d[e]);return(i=n)()};var r=n=>{for(var r,d,[s,l,u,c]=n,f=0,y=[];f<s.length;f++)d=s[f],a.o(e,d)&&e[d]&&y.push(e[d][0]),e[d]=0;for(r in l)a.o(l,r)&&(a.m[r]=l[r]);for(u&&u(a),o(n);y.length;)y.shift()();return c&&t.push.apply(t,c),i()},d=self.webpackChunkreact_ssr=self.webpackChunkreact_ssr||[],o=d.push.bind(d);d.push=r})(),a.x()})();
//# sourceMappingURL=main.js.map