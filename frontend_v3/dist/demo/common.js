(self.webpackChunkmaterial_dashboard_pro_angular=self.webpackChunkmaterial_dashboard_pro_angular||[]).push([[592],{56578:function(t,e,r){"use strict";r.d(e,{t:function(){return a}});var n=r(529),o=r(93820),u=r(42693),a=function(){function t(t){this.httpClient=t,this.urlPanel=n.N.productionUrl}return t.prototype.getCategoryOfPartners=function(){return this.httpClient.get(this.urlPanel+"/budget/category")},t.prototype.getPartnersOfSpecificCategory=function(t){return this.httpClient.get(this.urlPanel+"/partner/"+t)},t.prototype.getOrcamentoCategory=function(t){return this.httpClient.get(this.urlPanel+"/budget/category/"+t)},t.prototype.sendRequestCoteAndMessagesToPartners=function(t){return this.httpClient.post(this.urlPanel+"/budget/coterequest",t)},t.prototype.getMessagesFromPartnersToCustomers=function(){return this.httpClient.get(this.urlPanel+"/budget/messages/count")},t.\u0275fac=function(e){return new(e||t)(o.LFG(u.eN))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()}}]);