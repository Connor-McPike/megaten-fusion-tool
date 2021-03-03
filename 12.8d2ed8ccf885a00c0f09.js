(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"+wh5":function(n,l,e){"use strict";e.d(l,"a",(function(){return t}));var t=function(){function n(n,l){this.compConfig=n,this.gameAbbr=l,this.specialRecipes={},this.dlcDemons={},this.initImportedData(),this.updateDerivedData()}return n.prototype.initImportedData=function(){var n=this,l={},e={},t={},u={},i={},r={};this._inheritTypes={};for(var s=0,o=this.compConfig.demonData[this.gameAbbr];s<o.length;s++)for(var a=0,c=Object.entries(o[s]);a<c.length;a++){var p=c[a],m=p[0];l[m]={name:m,race:(A=p[1]).race,lvl:A.lvl,currLvl:A.lvl,price:Math.pow(A.stats.reduce((function(n,l){return l+n}),0),2)+2e3,inherit:A.inherits,stats:A.stats,resists:A.resists.split("").map((function(l){return n.compConfig.resistCodes[l]})),skills:A.skills,fusion:A.fusion||"normal",prereq:A.prereq||""}}for(var f=0,g=this.compConfig.enemyData[this.gameAbbr];f<g.length;f++)for(var d=0,b=Object.entries(g[f]);d<b.length;d++){var h=b[d],v=h[0],C=h[1],k=[];C.material&&"-"!==C.material&&k.push(C.material),C.gem&&"-"!==C.gem&&k.push(C.gem),C.drops&&(k=k.concat(C.drops)),k.length||k.push("-"),e[v]={name:v,race:C.race,lvl:C.lvl,currLvl:C.lvl,price:0,stats:C.stats.slice(0,2),estats:C.stats.slice(2),resists:C.resists.toLowerCase().split("").map((function(l){return n.compConfig.resistCodes[l]})),skills:C.skills.reduce((function(n,l){return n[l]=0,n}),{}),fusion:"normal",area:C.area,drop:k.join(", "),isEnemy:!0}}for(var y=0,O=this.compConfig.skillData[this.gameAbbr];y<O.length;y++)for(var I=0,w=Object.entries(O[y]);I<w.length;I++){var H=w[I],L=H[0],D=(A=H[1]).power||0,S=A.target||"",J=A.effect,F=A.effect;D?(F=D?A.damage+" ("+D.toString()+") dmg":"",F+=S?" to "+S.toLowerCase():"",F+=J?", "+J:""):S&&(F+=("support"===A.element?" for ":" to ")+S.toLowerCase()),t[L]={name:L,element:A.element,cost:A.cost||0,rank:A.rank||99,effect:F,learnedBy:[],transfer:[],level:0},A.card&&(t[L].transfer=A.card.split(", ").map((function(n){return{demon:n,level:l[n]?0:-100}})))}for(var T=0,j=Object.entries(this.compConfig.specialRecipes[this.gameAbbr]);T<j.length;T++){var A,E=j[T],R=E[0],Y=A=E[1];if(u[R]=Y,l[R].fusion="special",2===Y.length)for(var _=0,x=Y;_<x.length;_++){var N=x[_];r[N]||(r[N]=[]),r[N].push(R)}}for(var G=0,$=this.compConfig.races;G<$.length;G++)i[$[G]]={};for(var W=0,z=Object.entries(l);W<z.length;W++){var P=z[W],M=P[0],Z=P[1];"party"!==Z.fusion&&(i[Z.race][Z.lvl]=M);for(var U=0,q=Object.entries(Z.skills);U<q.length;U++){var B=q[U];t[B[0]].learnedBy.push({demon:M,level:B[1]})}}this.demons=l,this.enemies=e,this.skills=t,this.specialRecipes=u,this.invertedDemons=i,this.invertedSpecials=r,this._inheritTypes=this.compConfig.inheritTypes},n.prototype.updateDerivedData=function(){for(var n=this,l={},e={},t=[],u=0,i=Object.values(this.skills);u<i.length;u++){var r=i[u];r.learnedBy.length<1?r.rank=99:t.push(r)}for(var s=0,o=this.compConfig.races;s<o.length;s++)l[b=o[s]]=[],e[b]=[];for(var a=0,c=Object.entries(this.demons);a<c.length;a++){var p=c[a],m=p[0],f=p[1];"party"!==f.fusion&&(l[f.race].push(f.lvl),this.specialRecipes.hasOwnProperty(m)||e[f.race].push(f.lvl))}for(var g=0,d=this.compConfig.races;g<d.length;g++){var b;l[b=d[g]].sort((function(n,l){return n-l})),e[b].sort((function(n,l){return n-l}))}var h=Object.keys(this.demons).map((function(l){return n.demons[l]})),v=Object.keys(this.enemies).map((function(l){return n.enemies[l]}));this._allDemons=v.concat(h),this._allSkills=t,this.allIngredients=l,this.allResults=e},Object.defineProperty(n.prototype,"allDemons",{get:function(){return this._allDemons},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"allSkills",{get:function(){return this._allSkills},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"specialDemons",{get:function(){var n=this;return Object.keys(this.specialRecipes).map((function(l){return n.demons[l]}))},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"inheritHeaders",{get:function(){return this.compConfig.inheritElems},enumerable:!0,configurable:!0}),n.prototype.getDemon=function(n){return this.demons[n]||this.enemies[n]},n.prototype.getSkill=function(n){return this.skills[n]},n.prototype.getSkills=function(n){var l=this,e=this.compConfig.elemOrder,t=n.map((function(n){return l.skills[n]}));return t.sort((function(n,l){return 1e4*(e[n.element]-e[l.element])+n.rank-l.rank})),t},n.prototype.getIngredientDemonLvls=function(n){return this.allIngredients[n]||[]},n.prototype.getResultDemonLvls=function(n){return this.allResults[n]||[]},n.prototype.getSpecialNameEntries=function(n){return this.specialRecipes[n]||[]},n.prototype.getSpecialNamePairs=function(n){return[]},n.prototype.getInheritElems=function(n){return this._inheritTypes[n]},n.prototype.reverseLookupDemon=function(n,l){return this.invertedDemons[n][l]},n.prototype.reverseLookupSpecial=function(n){return this.invertedSpecials[n]||[]},n.prototype.isElementDemon=function(n){return!1},n}()},"3oXS":function(n,l,e){"use strict";e.d(l,"a",(function(){return g}));var t=e("CcnG"),u=e("dXIv"),i=e("DUID"),r=e("h6dA"),s=e("Ip0R"),o=e("n6IH"),a=e("ZYjt"),c=e("afYW"),p=t.nb({encapsulation:2,styles:[],data:{}});function m(n){return t.Jb(2,[(n()(),t.pb(0,0,null,null,3,"app-smt-skill-list",[],null,null,null,u.c,u.a)),t.Eb(4608,null,i.a,i.a,[[3,i.a]]),t.ob(2,8503296,null,0,r.a,[],{rowData:[0,"rowData"],elemOrder:[1,"elemOrder"],isPersona:[2,"isPersona"],transferTitle:[3,"transferTitle"]},null),t.Bb(131072,s.b,[t.h])],(function(n,l){var e=l.component;n(l,2,0,t.Ib(l,2,0,t.zb(l,3).transform(e.skills)),e.compConfig.elemOrder,!0,e.transferTitle)}),null)}function f(n){return t.Jb(0,[(n()(),t.pb(0,0,null,null,1,"app-skill-list-container",[],null,null,null,m,p)),t.ob(1,245760,null,0,o.a,[a.h,t.h,c.a],null,null)],(function(n,l){n(l,1,0)}),null)}var g=t.lb("app-skill-list-container",o.a,f,{},{},[])},ApX8:function(n,l,e){"use strict";e.d(l,"a",(function(){return d}));var t=e("CcnG"),u=e("FAMI"),i=e("DUID"),r=e("cEcl"),s=e("Ip0R"),o=e("gO3W"),a=e("ZYjt"),c=e("ZYCi"),p=e("afYW"),m=t.nb({encapsulation:2,styles:[],data:{}});function f(n){return t.Jb(2,[(n()(),t.pb(0,0,null,null,3,"app-smt-demon-list",[],null,null,null,u.b,u.a)),t.Eb(4608,null,i.a,i.a,[[3,i.a]]),t.ob(2,8503296,null,0,r.a,[],{rowData:[0,"rowData"],raceOrder:[1,"raceOrder"],inheritOrder:[2,"inheritOrder"],statHeaders:[3,"statHeaders"],resistHeaders:[4,"resistHeaders"],isEnemy:[5,"isEnemy"],hasCurrLvl:[6,"hasCurrLvl"]},null),t.Bb(131072,s.b,[t.h])],(function(n,l){var e=l.component;n(l,2,0,t.Ib(l,2,0,t.zb(l,3).transform(e.demons)),e.compConfig.raceOrder,e.inheritOrder,e.statHeaders,e.resistHeaders,e.showEnemies,!e.showEnemies)}),null)}function g(n){return t.Jb(0,[(n()(),t.pb(0,0,null,null,1,"app-demon-list-container",[],null,null,null,f,m)),t.ob(1,245760,null,0,o.a,[a.h,c.a,t.h,p.a],null,null)],(function(n,l){n(l,1,0)}),null)}var d=t.lb("app-demon-list-container",o.a,g,{},{},[])},IlY5:function(n,l,e){"use strict";e.d(l,"a",(function(){return t}));var t=function(){return function(){this.inheritHeaders=[],this.inherits=[],this.hasChance=!1,this.hasIcons=!0,this.hasLvls=!1}}()},LXGR:function(n,l,e){"use strict";e.d(l,"a",(function(){return t}));var t=function(){function n(){}return n.forRoot=function(){return{ngModule:n}},n}()},Q28Q:function(n,l,e){"use strict";e.d(l,"a",(function(){return i}));var t=e("mrSG"),u=e("QlaI"),i=function(n){function l(l,e,t){var u=n.call(this)||this;return u.elementDemons=[],u.lvlModifier=.5,u.initCharts(l,t),u}return t.c(l,n),l.prototype.initCharts=function(n,l){for(var e=n.races,t=n.table,i=[],r=0;r<e.length;r++)i.push(t[r].slice(l?0:r,l?r+1:e.length)),l||(i[r][0]="-");this.races=e,this.lvlModifier=l?4.25:.5,this.fissionChart=u.a.loadFissionTableJson(e,this.elementDemons,i),this.fusionChart=u.a.loadFusionTableJson(e,i),this.elementChart={}},l}(u.a)},W7vE:function(n,l,e){"use strict";var t=e("CcnG"),u=e("aq7X"),i=e("DUID"),r=e("Ip0R"),s=e("Lx9e"),o=e("ZYCi"),a=e("sA97"),c=e("afYW");e.d(l,"a",(function(){return g}));var p=t.nb({encapsulation:2,styles:[[".p3 div.element-icon{height:25px;background-size:25px;background-repeat:no-repeat;background-position:center;color:transparent}.p3 div.element-icon.slash{background-image:url(/megaten-fusion-tool/assets/images/p5/sword.png)}.p3 div.element-icon.strike{background-image:url(/megaten-fusion-tool/assets/images/p5/phys.png)}.p3 div.element-icon.pierce{background-image:url(/megaten-fusion-tool/assets/images/p5/gun.png)}.p3 div.element-icon.fire{background-image:url(/megaten-fusion-tool/assets/images/p5/fire.png)}.p3 div.element-icon.ice{background-image:url(/megaten-fusion-tool/assets/images/p5/ice.png)}.p3 div.element-icon.elec{background-image:url(/megaten-fusion-tool/assets/images/p5/elec.png)}.p3 div.element-icon.wind{background-image:url(/megaten-fusion-tool/assets/images/p5/wind.png)}.p3 div.element-icon.light{background-image:url(/megaten-fusion-tool/assets/images/p5/bless.png)}.p3 div.element-icon.dark{background-image:url(/megaten-fusion-tool/assets/images/p5/curse.png)}.p3 div.element-icon.lidark{background-image:url(/megaten-fusion-tool/assets/images/p5/trait.png)}.p3 div.element-icon.ailment{background-image:url(/megaten-fusion-tool/assets/images/p5/ailment.png)}.p3 div.element-icon.recovery{background-image:url(/megaten-fusion-tool/assets/images/p5/healing.png)}.p3 div.element-icon.all,.p3 div.element-icon.almighty{background-image:url(/megaten-fusion-tool/assets/images/p5/almighty.png)}.p3 div.element-icon.special,.p3 div.element-icon.support{background-image:url(/megaten-fusion-tool/assets/images/p5/support.png)}.p3 div.element-icon.passive{background-image:url(/megaten-fusion-tool/assets/images/p5/passive.png)}.p3 th.nav.active,.p3 th.nav.active a,.p3 th.title{color:#000;background-color:#4372aa}.p4 div.element-icon{height:25px;background-size:25px;background-repeat:no-repeat;background-position:center;color:transparent}.p4 div.element-icon.phys{background-image:url(/megaten-fusion-tool/assets/images/p5/phys.png)}.p4 div.element-icon.fire{background-image:url(/megaten-fusion-tool/assets/images/p5/fire.png)}.p4 div.element-icon.ice{background-image:url(/megaten-fusion-tool/assets/images/p5/ice.png)}.p4 div.element-icon.elec{background-image:url(/megaten-fusion-tool/assets/images/p5/elec.png)}.p4 div.element-icon.wind{background-image:url(/megaten-fusion-tool/assets/images/p5/wind.png)}.p4 div.element-icon.light{background-image:url(/megaten-fusion-tool/assets/images/p5/bless.png)}.p4 div.element-icon.dark{background-image:url(/megaten-fusion-tool/assets/images/p5/curse.png)}.p4 div.element-icon.ailment{background-image:url(/megaten-fusion-tool/assets/images/p5/ailment.png)}.p4 div.element-icon.recovery{background-image:url(/megaten-fusion-tool/assets/images/p5/healing.png)}.p4 div.element-icon.almighty{background-image:url(/megaten-fusion-tool/assets/images/p5/almighty.png)}.p4 div.element-icon.special,.p4 div.element-icon.support{background-image:url(/megaten-fusion-tool/assets/images/p5/support.png)}.p4 div.element-icon.passive{background-image:url(/megaten-fusion-tool/assets/images/p5/passive.png)}.p4 th.nav.active,.p4 th.nav.active a,.p4 th.title{color:#000;background-color:#ffe600}.p5 div.element-icon{height:25px;background-size:25px;background-repeat:no-repeat;background-position:center;color:transparent}"]],data:{}});function m(n){return t.Jb(2,[(n()(),t.pb(0,0,null,null,5,"app-demon-compendium",[],null,null,null,u.b,u.a)),t.Eb(4608,null,i.a,i.a,[[3,i.a]]),t.ob(2,278528,null,0,r.i,[t.s,t.t,t.k,t.D],{ngClass:[0,"ngClass"]},null),t.ob(3,245760,null,0,s.a,[o.a],{mainList:[0,"mainList"],hasSettings:[1,"hasSettings"],otherLinks:[2,"otherLinks"]},null),t.Cb(4,{title:0,link:1}),t.Ab(5,1)],(function(n,l){n(l,2,0,l.component.appCssClasses);var e=n(l,5,0,n(l,4,0,"Shadow List","shadows"));n(l,3,0,"persona",!1,e)}),null)}function f(n){return t.Jb(0,[(n()(),t.pb(0,0,null,null,1,"app-p4-compendium",[],null,null,null,m,p)),t.ob(1,49152,null,0,a.a,[c.a],null,null)],null,null)}var g=t.lb("app-p4-compendium",a.a,f,{},{},[])},afYW:function(n,l,e){"use strict";e.d(l,"a",(function(){return s}));var t=e("26FU"),u=e("+wh5"),i=e("Q28Q"),r=e("uoMG"),s=function(){function n(n,l){this.fissionCalculator=r.d,this.fusionCalculator=r.e,this.triFissionCalculator=r.f,this.triFusionCalculator=r.g;var e=l.url.split("/")[1],s=n.demonData[e]?e:"p4";this.appName=n.gameTitles[s]+" Fusion Calculator",this.compConfig=n,this.gameAbbr=s,this._compendium=new u.a(n,s),this._compendium$=new t.a(this._compendium),this.compendium=this._compendium$.asObservable(),this._fusionChart=new i.a(n.normalTable[s],n.races),this._fusionChart$=new t.a(this._fusionChart),this.fusionChart=this._fusionChart$.asObservable(),this._tripleChart=new i.a(n.normalTable[s],n.races,!0),this._squareChart$=new t.a({normalChart:this._fusionChart,tripleChart:this._tripleChart,raceOrder:n.raceOrder}),this.squareChart=this._squareChart$.asObservable()}return n.prototype.nextDlcDemons=function(n){},n}()},cFTR:function(n,l,e){"use strict";e.d(l,"a",(function(){return t}));var t=function(){function n(n,l){this.changeDetectorRef=n,this.fusionTrioService=l,this.subscriptions=[]}return n.prototype.ngOnInit=function(){var n=this;this.subscriptions.push(this.fusionTrioService.squareChart.subscribe((function(l){n.normChart=l.normalChart,n.tripChart=l.tripleChart})))},n.prototype.ngOnDestroy=function(){for(var n=0,l=this.subscriptions;n<l.length;n++)l[n].unsubscribe()},n}()},emSM:function(n,l,e){"use strict";e.d(l,"a",(function(){return f}));var t=e("CcnG"),u=e("7gfQ"),i=e("Ck8i"),r=e("ZYjt"),s=e("ZYCi"),o=e("cFTR"),a=e("uoMG"),c=t.nb({encapsulation:2,styles:[],data:{}});function p(n){return t.Jb(2,[(n()(),t.pb(0,0,null,null,1,"app-fusion-chart",[],null,null,null,u.b,u.a)),t.ob(1,770048,null,0,i.a,[r.h,s.a],{normChart:[0,"normChart"],tripChart:[1,"tripChart"],normTitle:[2,"normTitle"],tripTitle:[3,"tripTitle"]},null)],(function(n,l){var e=l.component;n(l,1,0,e.normChart,e.tripChart,"Normal Fusions","Triple Fusions")}),null)}function m(n){return t.Jb(0,[(n()(),t.pb(0,0,null,null,1,"app-triple-fusion-chart",[],null,null,null,p,c)),t.ob(1,245760,null,0,o.a,[t.h,a.c],null,null)],(function(n,l){n(l,1,0)}),null)}var f=t.lb("app-triple-fusion-chart",o.a,m,{},{},[])},g74h:function(n,l,e){"use strict";var t=e("CcnG"),u=e("cg0H"),i=e("0ZaJ"),r=e("secp"),s=e("d6X+"),o=e("gkkx"),a=e("IlY5"),c=e("rFU4"),p=e("wdG2"),m=e("LVD6"),f=e("DUID"),g=e("Hz2L"),d=e("qUFX"),b=e("Fhsl"),h=e("Ip0R"),v=e("wH70"),C=(e("+wh5"),function(){return function(){}}()),k=t.nb({encapsulation:2,styles:[],data:{}});function y(n){return t.Jb(2,[(n()(),t.pb(0,0,null,null,2,"app-demon-stats",[],null,null,null,u.b,u.a)),t.ob(1,49152,null,0,i.a,[],{title:[0,"title"],statHeaders:[1,"statHeaders"],stats:[2,"stats"]},null),t.Ab(2,2),(n()(),t.pb(3,0,null,null,15,"table",[["class","entry-table"]],null,null,null,null,null)),(n()(),t.pb(4,0,null,null,8,"thead",[],null,null,null,null,null)),(n()(),t.pb(5,0,null,null,2,"tr",[],null,null,null,null,null)),(n()(),t.pb(6,0,null,null,1,"th",[["class","title"],["colspan","2"]],null,null,null,null,null)),(n()(),t.Hb(-1,null,["Appearances"])),(n()(),t.pb(8,0,null,null,4,"tr",[],null,null,null,null,null)),(n()(),t.pb(9,0,null,null,1,"th",[],null,null,null,null,null)),(n()(),t.Hb(-1,null,["Areas"])),(n()(),t.pb(11,0,null,null,1,"th",[],null,null,null,null,null)),(n()(),t.Hb(-1,null,["Drops"])),(n()(),t.pb(13,0,null,null,5,"tbody",[],null,null,null,null,null)),(n()(),t.pb(14,0,null,null,4,"tr",[],null,null,null,null,null)),(n()(),t.pb(15,0,null,null,1,"td",[],null,null,null,null,null)),(n()(),t.Hb(16,null,["",""])),(n()(),t.pb(17,0,null,null,1,"td",[],null,null,null,null,null)),(n()(),t.Hb(18,null,["",""])),(n()(),t.pb(19,0,null,null,1,"app-demon-resists",[],null,null,null,r.b,r.a)),t.ob(20,49152,null,0,s.a,[],{resistHeaders:[0,"resistHeaders"],resists:[1,"resists"]},null),(n()(),t.pb(21,0,null,null,1,"app-demon-skills",[],null,null,null,c.b,c.a)),t.ob(22,638976,null,0,p.a,[],{compendium:[0,"compendium"],elemOrder:[1,"elemOrder"],skillLevels:[2,"skillLevels"]},null)],(function(n,l){var e=l.component,t="Lvl "+e.demon.lvl+" "+e.demon.race+" "+e.demon.name,u=n(l,2,0,"HP","MP").concat(e.compConfig.baseStats);n(l,1,0,t,u,e.demon.stats.concat(e.demon.estats)),n(l,20,0,e.compConfig.enemyResists,e.demon.resists),n(l,22,0,e.compendium,e.compConfig.elemOrder,e.demon.skills)}),(function(n,l){var e=l.component;n(l,16,0,e.demon.area),n(l,18,0,e.demon.drop)}))}var O=e("ZYCi"),I=e("ZYjt"),w=e("veAJ"),H=e("afYW");e.d(l,"a",(function(){return R}));var L=t.nb({encapsulation:2,styles:[],data:{}});function D(n){return t.Jb(0,[(n()(),t.pb(0,0,null,null,11,null,null,null,null,null,null,null)),(n()(),t.pb(1,0,null,null,1,"app-demon-stats",[],null,null,null,u.b,u.a)),t.ob(2,49152,null,0,i.a,[],{title:[0,"title"],statHeaders:[1,"statHeaders"],stats:[2,"stats"],inherit:[3,"inherit"],price:[4,"price"]},null),(n()(),t.pb(3,0,null,null,1,"app-demon-resists",[],null,null,null,r.b,r.a)),t.ob(4,49152,null,0,s.a,[],{resistHeaders:[0,"resistHeaders"],resists:[1,"resists"]},null),(n()(),t.pb(5,0,null,null,1,"app-demon-inherits",[],null,null,null,o.b,o.a)),t.ob(6,49152,null,0,a.a,[],{inheritHeaders:[0,"inheritHeaders"],inherits:[1,"inherits"],hasChance:[2,"hasChance"]},null),(n()(),t.pb(7,0,null,null,1,"app-demon-skills",[],null,null,null,c.b,c.a)),t.ob(8,638976,null,0,p.a,[],{compendium:[0,"compendium"],elemOrder:[1,"elemOrder"],skillLevels:[2,"skillLevels"]},null),(n()(),t.pb(9,0,null,null,2,"app-smt-fusions",[],null,null,null,m.b,m.a)),t.Eb(4608,null,f.a,f.a,[[3,f.a]]),t.ob(11,638976,null,0,g.a,[],{hasTripleFusion:[0,"hasTripleFusion"]},null)],(function(n,l){var e=l.component;n(l,2,0,"Lvl "+e.demon.lvl+" "+e.demon.race+" "+e.demon.name,e.compConfig.baseStats,e.demon.stats,e.demon.inherit,e.demon.price),n(l,4,0,e.compConfig.resistElems,e.demon.resists),n(l,6,0,e.compendium.inheritHeaders,e.compendium.getInheritElems(e.demon.inherit),!0),n(l,8,0,e.compendium,e.compConfig.elemOrder,e.demon.skills),n(l,11,0,!0)}),null)}function S(n){return t.Jb(0,[(n()(),t.pb(0,0,null,null,1,"app-demon-missing",[],null,null,null,d.b,d.a)),t.ob(1,49152,null,0,b.a,[],{name:[0,"name"]},null)],(function(n,l){n(l,1,0,l.component.name)}),null)}function J(n){return t.Jb(2,[(n()(),t.gb(16777216,null,null,1,null,D)),t.ob(1,16384,null,0,h.k,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(n()(),t.gb(16777216,null,null,1,null,S)),t.ob(3,16384,null,0,h.k,[t.O,t.L],{ngIf:[0,"ngIf"]},null)],(function(n,l){var e=l.component;n(l,1,0,e.demon),n(l,3,0,!e.demon)}),null)}var F=t.nb({encapsulation:2,styles:[],data:{}});function T(n){return t.Jb(0,[(n()(),t.pb(0,0,null,null,1,"app-demon-entry",[],null,null,null,J,L)),t.ob(1,49152,null,0,v.a,[],{name:[0,"name"],demon:[1,"demon"],compendium:[2,"compendium"],compConfig:[3,"compConfig"]},null)],(function(n,l){var e=l.component;n(l,1,0,e.name,e.demon,e.compendium,e.compConfig)}),null)}function j(n){return t.Jb(0,[(n()(),t.pb(0,0,null,null,1,"app-enemy-entry",[],null,null,null,y,k)),t.ob(1,49152,null,0,C,[],{name:[0,"name"],demon:[1,"demon"],compendium:[2,"compendium"],compConfig:[3,"compConfig"]},null)],(function(n,l){var e=l.component;n(l,1,0,e.name,e.demon,e.compendium,e.compConfig)}),null)}function A(n){return t.Jb(2,[(n()(),t.gb(16777216,null,null,1,null,T)),t.ob(1,16384,null,0,h.k,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(n()(),t.gb(16777216,null,null,1,null,j)),t.ob(3,16384,null,0,h.k,[t.O,t.L],{ngIf:[0,"ngIf"]},null)],(function(n,l){var e=l.component;n(l,1,0,!e.demon||!e.demon.isEnemy),n(l,3,0,e.demon&&e.demon.isEnemy)}),null)}function E(n){return t.Jb(0,[(n()(),t.pb(0,0,null,null,1,"app-demon-entry-container",[],null,null,null,A,F)),t.ob(1,245760,null,0,v.b,[O.a,I.h,w.a,H.a],null,null)],(function(n,l){n(l,1,0)}),null)}var R=t.lb("app-demon-entry-container",v.b,E,{},{},[])},gO3W:function(n,l,e){"use strict";e.d(l,"a",(function(){return i}));var t=e("mrSG"),u=e("i4tJ"),i=(e("afYW"),function(n){function l(l,e,t,u){var i=n.call(this,l,t,u)||this;return i.showAllies=!e.snapshot.data.showShadows,i.showEnemies=!i.showAllies,i.compConfig=u.compConfig,i.defaultSortFun=function(n,l){return 200*(i.compConfig.raceOrder[n.race]-i.compConfig.raceOrder[l.race])+l.lvl-n.lvl},i.appName="List of Personas - "+u.appName,i.statHeaders=i.compConfig.baseStats,i.resistHeaders=i.compConfig.resistElems,i.inheritOrder=i.compConfig.elemOrder,i.showEnemies&&(i.appName="List of Shadows - "+u.appName,i.statHeaders=i.compConfig.enemyStats,i.resistHeaders=i.compConfig.enemyResists,i.inheritOrder=null),i}return t.c(l,n),l}(u.a))},gkkx:function(n,l,e){"use strict";e.d(l,"a",(function(){return r})),e.d(l,"b",(function(){return v}));var t=e("CcnG"),u=e("Ip0R"),i=e("b7/z"),r=(e("IlY5"),t.nb({encapsulation:2,styles:[],data:{}}));function s(n){return t.Jb(0,[(n()(),t.pb(0,0,null,null,1,"th",[["class","title"]],[[1,"colspan",0]],null,null,null,null)),(n()(),t.Hb(-1,null,["Inheritable Skills"]))],null,(function(n,l){n(l,0,0,l.component.inheritHeaders.length)}))}function o(n){return t.Jb(0,[(n()(),t.pb(0,0,null,null,1,"th",[["class","title"]],[[1,"colspan",0]],null,null,null,null)),(n()(),t.Hb(-1,null,["Skill Affinities"]))],null,(function(n,l){n(l,0,0,l.component.inheritHeaders.length)}))}function a(n){return t.Jb(0,[(n()(),t.pb(0,0,null,null,1,null,null,null,null,null,null,null)),(n()(),t.Hb(1,null,["",""]))],null,(function(n,l){n(l,1,0,l.parent.context.$implicit)}))}function c(n){return t.Jb(0,[(n()(),t.pb(0,0,null,null,1,"div",[],[[8,"className",0]],null,null,null,null)),(n()(),t.Hb(1,null,["",""]))],null,(function(n,l){n(l,0,0,t.rb(1,"element-icon ",l.parent.context.$implicit,"")),n(l,1,0,l.parent.context.$implicit)}))}function p(n){return t.Jb(0,[(n()(),t.pb(0,0,null,null,4,"th",[],[[4,"width","%"]],null,null,null,null)),(n()(),t.gb(16777216,null,null,1,null,a)),t.ob(2,16384,null,0,u.k,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(n()(),t.gb(16777216,null,null,1,null,c)),t.ob(4,16384,null,0,u.k,[t.O,t.L],{ngIf:[0,"ngIf"]},null)],(function(n,l){var e=l.component;n(l,2,0,!e.hasIcons),n(l,4,0,e.hasIcons)}),(function(n,l){n(l,0,0,100/l.component.inheritHeaders.length)}))}function m(n){return t.Jb(0,[(n()(),t.pb(0,0,null,null,1,"td",[],[[4,"color",null]],null,null,null,null)),(n()(),t.Hb(1,null,[" "," "]))],null,(function(n,l){n(l,0,0,l.context.$implicit?null:"transparent"),n(l,1,0,l.context.$implicit?"yes":"no")}))}function f(n){return t.Jb(0,[(n()(),t.pb(0,0,null,null,2,"tr",[],null,null,null,null,null)),(n()(),t.gb(16777216,null,null,1,null,m)),t.ob(2,278528,null,0,u.j,[t.O,t.L,t.s],{ngForOf:[0,"ngForOf"]},null)],(function(n,l){n(l,2,0,l.component.inherits)}),null)}function g(n){return t.Jb(0,[(n()(),t.pb(0,0,null,null,2,"td",[],[[8,"className",0]],null,null,null,null)),t.Db(1,1),(n()(),t.Hb(2,null,[" ","% "]))],null,(function(n,l){var e=t.rb(1,"affinity",t.Ib(l,0,0,n(l,1,0,t.zb(l.parent.parent,0),100*l.context.$implicit)),"");n(l,0,0,e),n(l,2,0,100*l.context.$implicit)}))}function d(n){return t.Jb(0,[(n()(),t.pb(0,0,null,null,2,"tr",[],null,null,null,null,null)),(n()(),t.gb(16777216,null,null,1,null,g)),t.ob(2,278528,null,0,u.j,[t.O,t.L,t.s],{ngForOf:[0,"ngForOf"]},null)],(function(n,l){n(l,2,0,l.component.inherits)}),null)}function b(n){return t.Jb(0,[(n()(),t.pb(0,0,null,null,2,"td",[],[[8,"className",0]],null,null,null,null)),(n()(),t.Hb(1,null,[" "," "])),t.Db(2,1)],null,(function(n,l){n(l,0,0,t.rb(1,"affinity",l.context.$implicit,""));var e=t.Ib(l,1,0,n(l,2,0,t.zb(l.parent.parent,1),l.context.$implicit));n(l,1,0,e)}))}function h(n){return t.Jb(0,[(n()(),t.pb(0,0,null,null,2,"tr",[],null,null,null,null,null)),(n()(),t.gb(16777216,null,null,1,null,b)),t.ob(2,278528,null,0,u.j,[t.O,t.L,t.s],{ngForOf:[0,"ngForOf"]},null)],(function(n,l){n(l,2,0,l.component.inherits)}),null)}function v(n){return t.Jb(2,[t.Bb(0,i.d,[]),t.Bb(0,i.a,[]),(n()(),t.pb(2,0,null,null,16,"table",[["class","entry-table"]],null,null,null,null,null)),(n()(),t.pb(3,0,null,null,8,"thead",[],null,null,null,null,null)),(n()(),t.pb(4,0,null,null,4,"tr",[],null,null,null,null,null)),(n()(),t.gb(16777216,null,null,1,null,s)),t.ob(6,16384,null,0,u.k,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(n()(),t.gb(16777216,null,null,1,null,o)),t.ob(8,16384,null,0,u.k,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(n()(),t.pb(9,0,null,null,2,"tr",[],null,null,null,null,null)),(n()(),t.gb(16777216,null,null,1,null,p)),t.ob(11,278528,null,0,u.j,[t.O,t.L,t.s],{ngForOf:[0,"ngForOf"]},null),(n()(),t.pb(12,0,null,null,6,"tbody",[],null,null,null,null,null)),(n()(),t.gb(16777216,null,null,1,null,f)),t.ob(14,16384,null,0,u.k,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(n()(),t.gb(16777216,null,null,1,null,d)),t.ob(16,16384,null,0,u.k,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(n()(),t.gb(16777216,null,null,1,null,h)),t.ob(18,16384,null,0,u.k,[t.O,t.L],{ngIf:[0,"ngIf"]},null)],(function(n,l){var e=l.component;n(l,6,0,!e.hasLvls),n(l,8,0,e.hasLvls&&e.inheritHeaders.length),n(l,11,0,e.inheritHeaders),n(l,14,0,!e.hasLvls&&!e.hasChance),n(l,16,0,e.hasChance),n(l,18,0,e.hasLvls)}),null)}},n6IH:function(n,l,e){"use strict";e.d(l,"a",(function(){return i}));var t=e("mrSG"),u=e("z0S9"),i=(e("afYW"),function(n){function l(l,e,t){var u=n.call(this,l,e,t)||this;return u.compConfig=t.compConfig,u.appName="List of Skills - "+t.appName,u.transferTitle=u.compConfig.hasSkillCards[t.gameAbbr]?"Skill Card":"",u.defaultSortFun=function(n,l){return 1e4*(u.compConfig.elemOrder[n.element]-u.compConfig.elemOrder[l.element])+n.rank-l.rank},u}return t.c(l,n),l}(u.a))},sA97:function(n,l,e){"use strict";e.d(l,"a",(function(){return t})),e("afYW");var t=function(){return function(n){this.appCssClasses=["smtnes","smt1"],this.appCssClasses=n.compConfig.appCssClasses}}()},wH70:function(n,l,e){"use strict";e.d(l,"a",(function(){return i})),e.d(l,"b",(function(){return r}));var t=e("mrSG"),u=e("VNUm"),i=(e("+wh5"),e("veAJ"),e("afYW"),function(){return function(){}}()),r=function(n){function l(l,e,t,u){var i=n.call(this,l,e,t,u)||this;return i.route=l,i.title=e,i.currentDemonService=t,i.fusionDataService=u,i.appName=u.appName,i.compConfig=u.compConfig,i}return t.c(l,n),l}(u.a)},zZvO:function(n,l,e){"use strict";e.d(l,"a",(function(){return i})),e.d(l,"b",(function(){return t})),e.d(l,"c",(function(){return u})),e("sA97"),e("gO3W"),e("n6IH"),e("wH70"),e("TVja"),e("GVDr"),e("31bM"),e("U2KI"),e("cFTR");var t={fusionTool:"chart"},u={showShadows:!0},i=function(){return function(){}}()}}]);