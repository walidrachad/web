(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{Qcyb:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var o=n("t/Na"),r=n("CcnG"),a=function(){function t(t){this.http=t,this.api="https://myplannif1.ritsysteme.net:5000/api/parent"}return t.prototype.getParentCount=function(){var t={headers:new o.g({token:localStorage.getItem("token")})};return this.http.get(this.api+"/count",t)},t.prototype.getallparent=function(t){var e={headers:new o.g({token:localStorage.getItem("token")})};return this.http.get(this.api+"/getByClass/"+t,e)},t.prototype.deleteParentById=function(t){var e={headers:new o.g({token:localStorage.getItem("token")})};return this.http.delete(this.api+"/delete/"+t,e)},t.prototype.update=function(t){var e={headers:new o.g({token:localStorage.getItem("token")})};return this.http.put(this.api+"/put",t,e)},t.prototype.getparentByphone=function(t,e){return t.filter((function(t){return t.phone.toLowerCase().includes(e.toLowerCase())}))},t.prototype.getParentLastnameLike=function(t,e){return t.filter((function(t){return t.lastName.toLowerCase().includes(e.toLowerCase())||t.name.toLowerCase().includes(e.toLowerCase())}))},t.prototype.getParentIsvalid=function(t){var e={headers:new o.g({token:localStorage.getItem("token")})};return this.http.get(this.api+"/getValid/"+t,e)},t.prototype.updateValidation=function(t){var e={headers:new o.g({token:localStorage.getItem("token")})};return this.http.get(this.api+/parentValid/+t,e)},t.prototype.getByClass=function(t){var e={headers:new o.g({token:localStorage.getItem("token")})};return this.http.get(this.api+"/getByClass"+t,e)},t.\u0275prov=r.dc({factory:function(){return new t(r.ec(o.c))},token:t,providedIn:"root"}),t}()}}]);