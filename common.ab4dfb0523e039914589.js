(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{Ado8:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var o=n("t/Na"),a=n("CcnG"),r=function(){function t(t){this.http=t,this.api="https://gsoumessaad.online:5001/api/news"}return t.prototype.addNews=function(t){var e={headers:new o.g({token:localStorage.getItem("token")})};return this.http.post(this.api+"/add",t,e)},t.prototype.addNewsWithImage=function(t,e){var n={headers:new o.g({token:localStorage.getItem("token")})},a=new FormData;return a.append("file",t),a.append("news",e),this.http.post(this.api+"/addWithImage",a,n)},t.prototype.getAllValid=function(t){var e={headers:new o.g({token:localStorage.getItem("token")})};return this.http.get(this.api+"/getNotValid/"+t,e)},t.prototype.changeValidation=function(t){var e={headers:new o.g({token:localStorage.getItem("token")})};return this.http.get(this.api+"/changeValidation/"+t,e)},t.prototype.getCount=function(){var t={headers:new o.g({token:localStorage.getItem("token")})};return this.http.get(this.api+"/getCount",t)},t.\u0275prov=a.dc({factory:function(){return new t(a.ec(o.c))},token:t,providedIn:"root"}),t}()},Qcyb:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var o=n("t/Na"),a=n("CcnG"),r=function(){function t(t){this.http=t,this.api="https://gsoumessaad.online:5001/api/parent"}return t.prototype.getParentCount=function(){var t={headers:new o.g({token:localStorage.getItem("token")})};return this.http.get(this.api+"/count",t)},t.prototype.getallparent=function(t){var e={headers:new o.g({token:localStorage.getItem("token")})};return this.http.get(this.api+"/getByClass/"+t,e)},t.prototype.deleteParentById=function(t){var e={headers:new o.g({token:localStorage.getItem("token")})};return this.http.delete(this.api+"/delete/"+t,e)},t.prototype.update=function(t){var e={headers:new o.g({token:localStorage.getItem("token")})};return this.http.put(this.api+"/put",t,e)},t.prototype.getparentByphone=function(t,e){return t.filter((function(t){return t.phone.toLowerCase().includes(e.toLowerCase())}))},t.prototype.getParentLastnameLike=function(t,e){return t.filter((function(t){return t.lastName.toLowerCase().includes(e.toLowerCase())||t.name.toLowerCase().includes(e.toLowerCase())}))},t.prototype.getParentIsvalid=function(t){var e={headers:new o.g({token:localStorage.getItem("token")})};return this.http.get(this.api+"/getValid/"+t,e)},t.prototype.updateValidation=function(t){var e={headers:new o.g({token:localStorage.getItem("token")})};return this.http.get(this.api+/parentValid/+t,e)},t.prototype.getByClass=function(t){var e={headers:new o.g({token:localStorage.getItem("token")})};return this.http.get(this.api+"/getByClass"+t,e)},t.\u0275prov=a.dc({factory:function(){return new t(a.ec(o.c))},token:t,providedIn:"root"}),t}()}}]);