System.register(["./p-97b4aabd.system.js","./p-a4f0fdd3.system.js"],function(e){"use strict";var t,n,i;return{setters:[function(e){t=e.r;n=e.g},function(e){i=e.A}],execute:function(){var s=function(){function e(e){t(this,e);this.when=true;this.message=""}e.prototype.enable=function(e){if(this.unblock){this.unblock()}if(this.history){this.unblock=this.history.block(e)}};e.prototype.disable=function(){if(this.unblock){this.unblock();this.unblock=undefined}};e.prototype.componentWillLoad=function(){if(this.when){this.enable(this.message)}};e.prototype.updateMessage=function(e,t){if(this.when){if(!this.when||t!==e){this.enable(this.message)}}else{this.disable()}};e.prototype.componentDidUnload=function(){this.disable()};e.prototype.render=function(){return null};Object.defineProperty(e.prototype,"el",{get:function(){return n(this)},enumerable:true,configurable:true});Object.defineProperty(e,"watchers",{get:function(){return{message:["updateMessage"],when:["updateMessage"]}},enumerable:true,configurable:true});return e}();e("stencil_router_prompt",s);i.injectProps(s,["history"])}}});