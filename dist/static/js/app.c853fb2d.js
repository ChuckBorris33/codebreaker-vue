(function(e){function t(t){for(var r,s,o=t[0],c=t[1],u=t[2],p=0,f=[];p<o.length;p++)s=o[p],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&f.push(a[s][0]),a[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);l&&l(t);while(f.length)f.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(r=!1)}r&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},a={app:0},i=[];function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var l=c;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"116a":function(e,t,n){"use strict";var r=n("59b5"),a=n.n(r);a.a},2364:function(e,t,n){"use strict";var r=n("3a7e"),a=n.n(r);a.a},"2a66":function(e,t,n){"use strict";var r=n("7466"),a=n.n(r);a.a},"3a7e":function(e,t,n){},"43b2":function(e,t,n){},"4bf6":function(e,t,n){"use strict";var r=n("a206"),a=n.n(r);a.a},"4e3f":function(e,t,n){},"4e5e":function(e,t,n){"use strict";var r=n("ff38"),a=n.n(r);a.a},5387:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("3fc5");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Game")],1)},i=[],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"game",staticClass:"Game"},[n("DragShadow"),n("GameHeader"),n(e.mainComponent,{tag:"Component"})],1)},o=[],c=n("2f62"),u={EXACT_MATCH:"EXACT_MATCH",COLOR_MATCH:"COLOR_MATCH",NO_MATCH:"NO_MATCH"},l={SETTINGS:"SETTINGS",GAME:"GAME",WON:"WON",LOST:"LOST",HELP:"HELP"},p=[{id:0,type:"PIN1"},{id:1,type:"PIN2"},{id:2,type:"PIN3"},{id:3,type:"PIN4"},{id:4,type:"PIN5"},{id:5,type:"PIN6"}];function f(e){var t=[].concat(p),n=[];e.canBeEmpty&&t.push(void 0);for(var r=0;r<4;r++){var a=Math.floor(Math.random()*t.length);n[r]=t[a],e.canRepeat||t.splice(a,1)}return n}function d(e,t){for(var n=t.map((function(e){return e?e.id:void 0})),r=e.map((function(e){return e?e.id:void 0})),a=[u.NO_MATCH,u.NO_MATCH,u.NO_MATCH,u.NO_MATCH],i=e.length,s=function(e){var t=r[e];if(r[e]===n[e])n[e]=-1,a[e]=u.EXACT_MATCH;else if(n.some((function(e){return e===t}))){var i=n.indexOf(t);n[i]=-1,a[i]=u.COLOR_MATCH}},o=0;o<i;o++)s(o);return m(a),a}function b(e,t){var n=t.every((function(e){return e===u.EXACT_MATCH}));return n?l.WON:e>=5?l.LOST:l.GAME}function m(e){for(var t=e.length-1;t>0;t--){var n=Math.floor(Math.random()*(t+1)),r=e[t];e[t]=e[n],e[n]=r}}var g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"GameSettings"},[n("div",{staticClass:"GameSettings-checkbox"},[n("BaseCheckbox",{staticClass:"u-pb1",attrs:{id:"canRepeat",type:"checkbox",label:"Allow repeating pins"},model:{value:e.canRepeat,callback:function(t){e.canRepeat=t},expression:"canRepeat"}}),n("BaseCheckbox",{attrs:{id:"canRepeat",type:"checkbox",label:"Allow empty pins"},model:{value:e.canBeEmpty,callback:function(t){e.canBeEmpty=t},expression:"canBeEmpty"}})],1),n("BaseButton",{attrs:{label:"Start Game"},on:{click:function(t){return e.startGame({canRepeat:e.canRepeat,canBeEmpty:e.canBeEmpty})}}})],1)},O=[],v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("button",{staticClass:"BaseButton",on:{click:function(t){return e.$emit("click")}}},[e._v(" "+e._s(e.label)+" ")])},y=[],P={name:"BaseButton",props:{label:{type:String,required:!0}}},h=P,j=(n("885a"),n("2877")),w=Object(j["a"])(h,v,y,!1,null,null,null),S=w.exports,C=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"BaseCheckbox"},[n("span",{staticClass:"BaseCheckbox-tick",class:{"BaseCheckbox-tick--active":e.value},on:{click:e.toggleValue}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"value"}],attrs:{id:e.id,type:"hidden"},domProps:{value:e.value},on:{input:function(t){t.target.composing||(e.value=t.target.value)}}})]),n("label",[e._v(e._s(e.label))])])},G=[],_={name:"BaseCheckbox",props:{id:{type:String,required:!0},label:{type:String,required:!0},checked:{type:Boolean,default:!1}},data:function(){return{value:this.checked}},watch:{value:function(e,t){this.$emit("input",e)}},methods:{toggleValue:function(){this.value=!this.value}}},E=_,T=(n("2a66"),Object(j["a"])(E,C,G,!1,null,null,null)),k=T.exports;function B(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function D(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?B(n,!0).forEach((function(t){x(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):B(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function x(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var A={name:"GameSettings",components:{BaseButton:S,BaseCheckbox:k},data:function(){return{canRepeat:!1,canBeEmpty:!1}},methods:D({},Object(c["c"])(["startGame"]))},M=A,H=(n("eaec"),Object(j["a"])(M,g,O,!1,null,null,null)),R=H.exports,N=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"GameHeader"},[n("span",{staticClass:"BackButton",class:{"u-hidden":!e.showBackButton},on:{click:e.backClicked}},[e._v(" <--- ")]),n("h1",{staticClass:"GameTitle"},[e._v(" codeBreaker_> ")]),n("span",{staticClass:"HelpButton",class:{"u-hidden":!e.showHelpButton},on:{click:e.helpClicked}},[e._v(" ? ")])])},I=[];function L(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function $(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?L(n,!0).forEach((function(t){z(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):L(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function z(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var q={name:"GameHeader",computed:$({},Object(c["d"])(["gameState"]),{showBackButton:function(){return this.gameState!==l.SETTINGS},showHelpButton:function(){return this.gameState===l.GAME}}),methods:$({},Object(c["c"])(["setGameState"]),{backClicked:function(){this.gameState===l.HELP?this.setGameState({gameState:l.GAME}):this.setGameState({gameState:l.SETTINGS})},helpClicked:function(){this.setGameState({gameState:l.HELP})}})},X=q,W=(n("8be7"),Object(j["a"])(X,N,I,!1,null,null,null)),V=W.exports,J=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"GameBoard"},[n("GuessList"),n("CurrentGuess"),n("PinOptions")],1)},U=[],Y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("TransitionGroup",{staticClass:"GuessList",attrs:{tag:"div",name:"guesses"}},e._l(e.guesses,(function(t){return n("div",{key:t.id,staticClass:"GuessRow"},[e._l(t.guess,(function(e,t){return n("SimplePin",{key:t,staticClass:"GuessRow-guessPin",attrs:{pin:e}})})),n("div",{staticClass:"GuessRow-result"},e._l(t.result,(function(e,t){return n("ResultPin",{key:t,attrs:{result:e}})})),1)],2)})),0)},F=[],K=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"Pin",class:[e.sizeClass,e.colorClass]})},Q=[],Z={name:"SimplePin",props:{pin:{type:Object,required:!1,default:void 0}},data:function(){return{sizeClass:""}},computed:{colorClass:function(){return this.pin?"Pin--".concat(this.pin.type):"Pin--empty"}}},ee=Z,te=(n("adc8"),Object(j["a"])(ee,K,Q,!1,null,null,null)),ne=te.exports;function re(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var ae,ie,se={name:"ResultPin",extends:ne,props:{result:{type:String,required:!0}},data:function(){return{sizeClass:"Pin--small"}},computed:{colorClass:function(){var e;return(e={},re(e,u.NO_MATCH,"Pin--empty"),re(e,u.EXACT_MATCH,"Pin--exactMatch"),re(e,u.COLOR_MATCH,"Pin--colorMatch"),e)[this.result]}}},oe=se,ce=(n("d67f"),Object(j["a"])(oe,ae,ie,!1,null,null,null)),ue=ce.exports;function le(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function pe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?le(n,!0).forEach((function(t){fe(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):le(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function fe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var de={name:"GuessList",components:{SimplePin:ne,ResultPin:ue},computed:pe({},Object(c["d"])(["guesses"]))},be=de,me=(n("116a"),Object(j["a"])(be,Y,F,!1,null,null,null)),ge=me.exports,Oe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"CurrentGuess"},[e._l(e.currentGuess,(function(e,t){return n("GuessPin",{key:t,attrs:{id:t,pin:e}})})),n("div",{staticClass:"CurrentGuess-testButton"},[n("BaseButton",{attrs:{label:"Test"},on:{click:e.testCode}})],1)],2)},ve=[],ye=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:["Pin",e.colorClass,"Pin--dragable"],attrs:{draggable:"true"},on:{dragstart:function(t){return e.dragPin({pin:e.pin,dragType:"guess",event:t,guessId:e.id})},dragover:function(e){e.preventDefault()},drop:function(t){return t.preventDefault(),e.dropPin({guessId:e.id,targetType:"guess"})},dragend:e.dragEnd}})},Pe=[];function he(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function je(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?he(n,!0).forEach((function(t){we(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):he(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function we(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Se={name:"GuessPin",extends:ne,props:{id:{type:Number,required:!0}},methods:je({},Object(c["c"])(["dragEnd"]),{},Object(c["b"])(["dropPin","dragPin"]))},Ce=Se,Ge=Object(j["a"])(Ce,ye,Pe,!1,null,null,null),_e=Ge.exports;function Ee(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Te(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ee(n,!0).forEach((function(t){ke(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ee(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function ke(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Be={name:"CurrentGuess",components:{BaseButton:S,GuessPin:_e},computed:Te({},Object(c["d"])(["currentGuess"])),methods:Te({},Object(c["b"])(["testCode"]))},De=Be,xe=(n("2364"),Object(j["a"])(De,Oe,ve,!1,null,null,null)),Ae=xe.exports,Me=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"PinOptions"},e._l(e.pins,(function(e,t){return n("OptionPin",{key:t,attrs:{id:t,pin:e}})})),1)},He=[],Re=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:["Pin",e.colorClass,"Pin--dragable"],attrs:{draggable:"true"},on:{dragstart:function(t){return e.dragPin({pin:e.pin,dragType:"options",event:t})},dragend:e.dragEnd}})},Ne=[];function Ie(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Le(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ie(n,!0).forEach((function(t){$e(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ie(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function $e(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var ze={name:"OptionPin",extends:ne,props:{id:{type:Number,required:!0}},methods:Le({},Object(c["c"])(["dragEnd"]),{},Object(c["b"])(["dragPin"]))},qe=ze,Xe=Object(j["a"])(qe,Re,Ne,!1,null,null,null),We=Xe.exports,Ve={name:"PinOptions",components:{OptionPin:We},data:function(){return{pins:p}}},Je=Ve,Ue=(n("4bf6"),Object(j["a"])(Je,Me,He,!1,null,null,null)),Ye=Ue.exports,Fe={name:"GameBoard",components:{GuessList:ge,CurrentGuess:Ae,PinOptions:Ye}},Ke=Fe,Qe=(n("950e"),Object(j["a"])(Ke,J,U,!1,null,null,null)),Ze=Qe.exports,et=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"GameEnd"},[n("div",{staticClass:"GameEnd-resultText"},[e._v(" "+e._s(e.resultText)+" ")]),n("div",{staticClass:"GameEnd-resultCode"},[e.isGameLost?[n("p",[e._v("Last guess")]),n("div",{staticClass:"GameEnd-code"},e._l(e.currentGuess,(function(e,t){return n("SimplePin",{key:t,attrs:{pin:e}})})),1)]:e._e(),n("p",[e._v("Code is")]),n("div",{staticClass:"GameEnd-code"},e._l(e.code,(function(e,t){return n("SimplePin",{key:t,attrs:{pin:e}})})),1),n("BaseButton",{staticClass:"GameEnd-backButton",attrs:{label:"Back"},on:{click:function(t){return e.backToSettings()}}})],2)])},tt=[];function nt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function rt(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?nt(n,!0).forEach((function(t){at(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):nt(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function at(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var it={name:"GameEnd",components:{SimplePin:ne,BaseButton:S},computed:rt({},Object(c["d"])(["gameState","code","currentGuess"]),{resultText:function(){return this.isGameLost?"GAME OVER":"YOU WON"},isGameLost:function(){return this.gameState===l.LOST}}),methods:rt({},Object(c["c"])(["setGameState"]),{backToSettings:function(){this.setGameState({gameState:l.SETTINGS})}})},st=it,ot=(n("4e5e"),Object(j["a"])(st,et,tt,!1,null,null,null)),ct=ot.exports,ut=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"GameHelp"},[n("p",{staticClass:"u-nomargin"},[e._v(" Try to guess right pin combination ")]),n("ol",[n("li",[e._v(" Drag pins "),n("SimplePin",{staticClass:"u-inline Pin--fontSize",attrs:{pin:e.pins[0]}}),e._v(" and drop them in slots "),n("SimplePin",{staticClass:"u-inline Pin--fontSize",attrs:{pin:null}})],1),n("li",[e._v(" Click on Test button "),n("BaseButton",{staticClass:"u-cursorNormal u-inline",attrs:{label:"Test"}})],1),n("li",[e._v(" Result will show up. ")])]),n("div",{staticClass:"GuessRow HelpGuessRow"},[e._l(e.exampleGuess,(function(e,t){return n("SimplePin",{key:t,staticClass:"GuessRow-guessPin",attrs:{pin:e}})})),n("div",{staticClass:"GuessRow-result"},e._l(e.exampleResult,(function(e,t){return n("ResultPin",{key:t,attrs:{result:e}})})),1)],2),n("p",[e._v(" White pin "),n("ResultPin",{staticClass:"u-inline Pin--fontSize",attrs:{result:e.ResultType.COLOR_MATCH}}),e._v(" means right color but wrong placement. ")],1),n("p",[e._v(" Black pin "),n("ResultPin",{staticClass:"u-inline Pin--fontSize",attrs:{result:e.ResultType.EXACT_MATCH}}),e._v(" means right color and right placement. ")],1),n("p",[e._v("Result pins are scrambled")])])},lt=[],pt={name:"GameHelp",components:{SimplePin:ne,ResultPin:ue,BaseButton:S},data:function(){return{pins:p,ResultType:u,exampleResult:[u.NO_MATCH,u.EXACT_MATCH,u.NO_MATCH,u.COLOR_MATCH]}},computed:{exampleGuess:function(){return p.slice(0,4)}}},ft=pt,dt=(n("afd1"),Object(j["a"])(ft,ut,lt,!1,null,null,null)),bt=dt.exports,mt=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"dragShadow",attrs:{id:"DragShadow"}},[e.dragData?n("SimplePin",{attrs:{pin:e.dragData.pin}}):e._e()],1)},gt=[];function Ot(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function vt(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ot(n,!0).forEach((function(t){yt(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ot(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function yt(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Pt={name:"DragShadow",components:{SimplePin:ne},computed:vt({},Object(c["d"])(["dragData"])),watch:{dragData:function(e){if(e){var t=this.$refs.dragShadow;e.event.dataTransfer.setDragImage(t,10,10)}}}},ht=Pt,jt=(n("b855"),Object(j["a"])(ht,mt,gt,!1,null,null,null)),wt=jt.exports;function St(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Ct(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?St(n,!0).forEach((function(t){Gt(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):St(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function Gt(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var _t={name:"Game",components:{GameSettings:R,GameHeader:V,GameBoard:Ze,GameEnd:ct,GameHelp:bt,DragShadow:wt},computed:Ct({},Object(c["d"])(["gameState"]),{mainComponent:function(){switch(this.gameState){case l.GAME:return Ze;case l.SETTINGS:return R;case l.HELP:return bt;case l.LOST:case l.WON:return ct}}}),mounted:function(){var e=this;screen.orientation.lock("landscape"),this.$refs.game.style="max-width: ".concat(.5625*window.innerHeight,"px"),window.addEventListener("resize",(function(){e.$refs.game.style="max-width: ".concat(.5625*window.innerHeight,"px")}))}},Et=_t,Tt=(n("bb9a"),Object(j["a"])(Et,s,o,!1,null,null,null)),kt=Tt.exports,Bt={name:"App",components:{Game:kt}},Dt=Bt,xt=(n("5c0b"),Object(j["a"])(Dt,a,i,!1,null,null,null)),At=xt.exports,Mt=n("c64e"),Ht=n.n(Mt);function Rt(e){return Lt(e)||It(e)||Nt()}function Nt(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function It(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function Lt(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}var $t={startGame:function(e,t){var n=f({canRepeat:t.canRepeat,canBeEmpty:t.canBeEmpty});e.gameState=l.GAME,e.code=n,e.guesses=[],e.currentGuess=[void 0,void 0,void 0,void 0]},guessPin:function(e,t){r["a"].set(e.currentGuess,t.guessId,t.pin)},removePin:function(e,t){r["a"].set(e.currentGuess,t.guessId,void 0)},addGuess:function(e,t){e.guesses=[].concat(Rt(e.guesses),[{guess:e.currentGuess,result:t.result,id:Ht()()}]),e.currentGuess=[void 0,void 0,void 0,void 0]},setGameState:function(e,t){e.gameState=t.gameState},dragStart:function(e,t){e.dragData=t},dragEnd:function(e){e.dragData=void 0}},zt=$t,qt={testCode:function(e){var t=e.commit,n=e.state,r=d(n.currentGuess,n.code),a=b(n.guesses.length,r);a===l.GAME?t("addGuess",{result:r}):a!==n.gameState&&t("setGameState",{gameState:a})},dropPin:function(e,t){var n=e.commit,r=e.state;if("guess"===r.dragData.dragType){var a=r.currentGuess[t.guessId];n("guessPin",{pin:a,guessId:r.dragData.guessId})}n("guessPin",{pin:r.dragData.pin,guessId:t.guessId})},dragPin:function(e,t){var n=e.commit;e.state;"guess"===t.dragType&&n("removePin",{guessId:t.guessId}),n("dragStart",t)}},Xt=qt;r["a"].use(c["a"]);var Wt=!1,Vt=new c["a"].Store({state:{gameState:l.SETTINGS,code:[],guesses:[],currentGuess:[void 0,void 0,void 0,void 0],dragData:void 0},mutations:zt,actions:Xt,strict:Wt}),Jt=n("9483");Object(Jt["a"])("".concat("/","service-worker.js"),{ready:function(){console.debug("App is being served from cache by a service worker.")},registered:function(){console.debug("Service worker has been registered.")},cached:function(){console.debug("Content has been cached for offline use.")},updatefound:function(){console.debug("New content is downloading.")},updated:function(){console.debug("New content is available; please refresh.")},offline:function(){console.debug("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),r["a"].config.productionTip=!1,new r["a"]({store:Vt,render:function(e){return e(At)}}).$mount("#app")},"59b5":function(e,t,n){},"5c0b":function(e,t,n){"use strict";var r=n("5387"),a=n.n(r);a.a},"5fb5":function(e,t,n){},"701a":function(e,t,n){},7466:function(e,t,n){},"7a43":function(e,t,n){},"885a":function(e,t,n){"use strict";var r=n("701a"),a=n.n(r);a.a},"8be7":function(e,t,n){"use strict";var r=n("c849"),a=n.n(r);a.a},9055:function(e,t,n){},"950e":function(e,t,n){"use strict";var r=n("aede"),a=n.n(r);a.a},a1af:function(e,t,n){},a206:function(e,t,n){},adc8:function(e,t,n){"use strict";var r=n("5fb5"),a=n.n(r);a.a},aede:function(e,t,n){},afd1:function(e,t,n){"use strict";var r=n("9055"),a=n.n(r);a.a},b855:function(e,t,n){"use strict";var r=n("a1af"),a=n.n(r);a.a},bb9a:function(e,t,n){"use strict";var r=n("43b2"),a=n.n(r);a.a},c849:function(e,t,n){},d67f:function(e,t,n){"use strict";var r=n("4e3f"),a=n.n(r);a.a},eaec:function(e,t,n){"use strict";var r=n("7a43"),a=n.n(r);a.a},ff38:function(e,t,n){}});
//# sourceMappingURL=app.c853fb2d.js.map