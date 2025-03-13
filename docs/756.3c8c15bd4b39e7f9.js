"use strict";(self.webpackChunkdesign=self.webpackChunkdesign||[]).push([[756],{4756:(f,p,o)=>{o.r(p),o.d(p,{GatepassAdminModule:()=>b});var c=o(6814),i=o(9310),t=o(4946),u=o(9608),r=o(6472);let d=(()=>{class a{static#t=this.\u0275fac=function(e){return new(e||a)};static#a=this.\u0275cmp=t.Xpm({type:a,selectors:[["app-navbar"]],decls:36,vars:0,consts:[[1,"navbar","navbar-expand-lg","navbar-dark","bg-dark"],[1,"container-fluid"],["href","#",1,"navbar-brand"],["type","button","data-bs-toggle","collapse","data-bs-target","#navbarNav","aria-controls","navbarNav","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler"],[1,"navbar-toggler-icon"],["id","navbarNav",1,"collapse","navbar-collapse"],[1,"navbar-nav","me-auto","mb-2","mb-lg-0"],[1,"nav-item"],["aria-current","page","routerLink","/gatapass-admin/dashboard",1,"nav-link","active"],["href","#",1,"nav-link"],[1,"nav-item","dropdown"],["href","#","id","navbarDropdown","role","button","data-bs-toggle","dropdown","aria-expanded","false",1,"nav-link","dropdown-toggle"],["aria-labelledby","navbarDropdown",1,"dropdown-menu"],["href","#",1,"dropdown-item"],[1,"dropdown-divider"],["routerLink","/gatapass-admin/redis",1,"nav-link"],[1,"d-flex"],["type","search","placeholder","Search","aria-label","Search",1,"form-control","me-2"],["type","submit",1,"btn","btn-outline-light"]],template:function(e,s){1&e&&(t.TgZ(0,"nav",0)(1,"div",1)(2,"a",2),t._uU(3,"MyApp"),t.qZA(),t.TgZ(4,"button",3),t._UZ(5,"span",4),t.qZA(),t.TgZ(6,"div",5)(7,"ul",6)(8,"li",7)(9,"a",8),t._uU(10,"Home"),t.qZA()(),t.TgZ(11,"li",7)(12,"a",9),t._uU(13,"About"),t.qZA()(),t.TgZ(14,"li",10)(15,"a",11),t._uU(16," Services "),t.qZA(),t.TgZ(17,"ul",12)(18,"li")(19,"a",13),t._uU(20,"Web Development"),t.qZA()(),t.TgZ(21,"li")(22,"a",13),t._uU(23,"Mobile Development"),t.qZA()(),t.TgZ(24,"li"),t._UZ(25,"hr",14),t.qZA(),t.TgZ(26,"li")(27,"a",13),t._uU(28,"Consulting"),t.qZA()()()(),t.TgZ(29,"li",7)(30,"a",15),t._uU(31,"Redis Configs"),t.qZA()()(),t.TgZ(32,"form",16),t._UZ(33,"input",17),t.TgZ(34,"button",18),t._uU(35,"Search"),t.qZA()()()()())},dependencies:[i.rH]})}return a})();function m(a,l){if(1&a&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA(),t.TgZ(11,"td"),t._uU(12),t.qZA(),t.TgZ(13,"td"),t._uU(14),t.qZA()()),2&a){const n=l.$implicit;t.xp6(2),t.Oqu(n.company_name),t.xp6(2),t.Oqu(n.company_short_name),t.xp6(2),t.Oqu(n.alternate_contact_number),t.xp6(2),t.Oqu(n.email_id),t.xp6(2),t.Oqu(n.landline_number),t.xp6(2),t.Oqu(n.website_url),t.xp6(2),t.Oqu(n.stage)}}const g=function(a,l){return{itemsPerPage:a,currentPage:l}},h=[{path:"dashboard",component:(()=>{class a{constructor(n){this.getdate=n,this.companyResult=[],this.p=1,this.itemsPerPage=7}ngOnInit(){this.customData()}customData(){this.getdate.commonData({dataCode:"GETALL_COMPANY_DETAILS_WITH_LOG",placeholderKeyValueMap:{}}).subscribe(e=>{console.log(e),this.companyResult=0==e.statusCode?e.responseContent:[]})}static#t=this.\u0275fac=function(e){return new(e||a)(t.Y36(u.v))};static#a=this.\u0275cmp=t.Xpm({type:a,selectors:[["app-dashboard"]],decls:24,vars:8,consts:[[1,"container","mt-4"],[1,"table","table-hover"],[1,"bg-secondary","text-light"],[4,"ngFor","ngForOf"],[1,"d-flex","justify-content-center"],["previousLabel","Previous","nextLabel","Next",3,"responsive","pageChange"]],template:function(e,s){1&e&&(t._UZ(0,"app-navbar"),t.TgZ(1,"div",0)(2,"table",1)(3,"thead",2)(4,"tr")(5,"th"),t._uU(6,"Company Name"),t.qZA(),t.TgZ(7,"th"),t._uU(8,"Company Short Name"),t.qZA(),t.TgZ(9,"th"),t._uU(10,"Mobile Number"),t.qZA(),t.TgZ(11,"th"),t._uU(12,"Email"),t.qZA(),t.TgZ(13,"th"),t._uU(14,"Land Line Number"),t.qZA(),t.TgZ(15,"th"),t._uU(16,"Website Url"),t.qZA(),t.TgZ(17,"th"),t._uU(18,"Status"),t.qZA()()(),t.TgZ(19,"tbody"),t.YNc(20,m,15,7,"tr",3),t.ALo(21,"paginate"),t.qZA()(),t.TgZ(22,"div",4)(23,"pagination-controls",5),t.NdJ("pageChange",function(v){return s.p=v}),t.qZA()()()),2&e&&(t.xp6(20),t.Q6J("ngForOf",t.xi3(21,2,s.companyResult,t.WLB(5,g,s.itemsPerPage,s.p))),t.xp6(3),t.Q6J("responsive",!0))},dependencies:[c.sg,r.LS,d,r._s]})}return a})()},{path:"redis",component:(()=>{class a{static#t=this.\u0275fac=function(e){return new(e||a)};static#a=this.\u0275cmp=t.Xpm({type:a,selectors:[["app-redis"]],decls:1,vars:0,template:function(e,s){1&e&&t._UZ(0,"app-navbar")},dependencies:[d]})}return a})()}];let Z=(()=>{class a{static#t=this.\u0275fac=function(e){return new(e||a)};static#a=this.\u0275mod=t.oAB({type:a});static#e=this.\u0275inj=t.cJS({imports:[i.Bz.forChild(h),i.Bz]})}return a})(),b=(()=>{class a{static#t=this.\u0275fac=function(e){return new(e||a)};static#a=this.\u0275mod=t.oAB({type:a});static#e=this.\u0275inj=t.cJS({imports:[c.ez,Z,r.JX]})}return a})()}}]);