(this.webpackJsonpender_spa=this.webpackJsonpender_spa||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var s=a(1),r=a.n(s),n=a(6),c=a.n(n),i=a(2),l=a(3),o=a(7),d=a(5),j=a(4),b=(a(13),[{img:"https://images.unsplash.com/photo-1566013656433-e818796d04f7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80",property_name:"Hobbiton",address:"101 Hobbiton, New Zealand",base_rent:"$1,500",description:"For the knitter and lover of berry foraging.",sqft:"1000 sqft.",amount_per_sqft:"$1.00 sqft/mo",amount_per_year:"$1.00 sqft/year"},{img:"https://images.unsplash.com/photo-1574780464029-1595c2f25863?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=700&q=60",property_name:"Snug Cottage Row",address:"Gold Hill Properties",base_rent:"$3,000",description:"A cozy and moody home for a village dweller",sqft:"1000 sqft.",amount_per_sqft:"$1.00 sqft/mo",amount_per_year:"$1.00 sqft/year"},{img:"https://images.unsplash.com/photo-1567683740738-d1fbf876b70a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2102&q=80",property_name:"Laughing Elf Homes",address:"101 Owl Lane, Steeple",base_rent:"$1000",description:"A dark and moody home for the amateur paranormal investigator",sqft:"1000 sqft.",amount_per_sqft:"$1.00 sqft/mo",amount_per_year:"$1.00 sqft/year"}]),m=a(0),h=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var s;Object(i.a)(this,a),s=t.call(this,e);for(var r=[],n=["Astrid","Finn","Abdollah","Gael"],c=0;c<4;c++)r.push({tenant:n[c],startDate:"Month ".concat(c),endDate:"",leaseStatus:"",primaryContact:""});return s.state={itemData:r},s}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state.itemData;return 0===e.length?null:Object(m.jsx)("div",{className:"table-container",children:Object(m.jsxs)("div",{className:"horizontal-scroll",id:"horizontal-scroll",children:[Object(m.jsx)("table",{id:"headertable",className:"competitors-list",children:Object(m.jsx)("thead",{children:Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{className:"tenant",children:"Tenant"}),Object(m.jsx)("th",{className:"startDate",children:"Start Date"}),Object(m.jsx)("th",{className:"endDate",children:"End Date"}),Object(m.jsx)("th",{className:"leaseStatus",children:"Lease Status"}),Object(m.jsx)("th",{className:"primaryContact",children:"Primary Contact"})]})})}),Object(m.jsx)("div",{className:"vertical-scroll",id:"vertical-scroll",children:Object(m.jsx)("table",{children:Object(m.jsx)("tbody",{id:"body",children:e.map((function(e,t){return Object(m.jsx)(p,{itemData:e})}))})})})]})})}}]),a}(r.a.Component),p=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.itemData;return Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{className:"tenant",children:e.tenant}),Object(m.jsx)("td",{className:"startDate",children:e.startDate}),Object(m.jsx)("td",{className:"endDate",children:e.endDate}),Object(m.jsx)("td",{className:"leaseStatus",children:e.leaseStatus}),Object(m.jsx)("td",{className:"primaryContact",children:e.primaryContact})]})}}]),a}(r.a.Component),f=h;function u(e){var t=e.img,a=e.property_name,s=e.address,r=e.base_rent,n=e.sqft,c=e.amount_per_sqft,i=e.amount_per_year;return Object(m.jsxs)("div",{className:"card",children:[Object(m.jsx)("img",{src:t,className:"property_img",alt:"property"}),Object(m.jsxs)("div",{className:"card__body",children:[Object(m.jsx)("h3",{className:"card__property",children:a}),Object(m.jsx)("hr",{class:"line"}),Object(m.jsxs)("h1",{children:[Object(m.jsx)("span",{className:"card__address",children:s}),Object(m.jsx)("a",{href:"#",children:r})]}),Object(m.jsxs)("p",{className:"card__details",children:[n," ",c," ",i]})]})]})}var x=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var s;return Object(i.a)(this,a),(s=t.call(this,e)).onCardClick=s.onCardClick.bind(Object(o.a)(s)),s.state={displayTable:!1},console.log("state: ",s.state),s}return Object(l.a)(a,[{key:"onCardClick",value:function(){this.setState({displayTable:!this.state.displayTable}),console.log(this.state.displayTable)}},{key:"render",value:function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{className:"wrapper",onClick:this.onCardClick,children:b.map((function(e,t){return Object(m.jsx)(u,{img:e.img,property_name:e.property_name,address:e.address,description:e.description,base_rent:e.base_rent,sqft:e.sqft,amount_per_sqft:e.amount_per_sqft,amount_per_year:e.amount_per_year},t)}))}),Object(m.jsx)("div",{className:"table",children:this.state.displayTable?Object(m.jsxs)("div",{children:[" ",Object(m.jsx)("h2",{children:" Property Name Leases "})," ",Object(m.jsx)(f,{})," "]}):null})]})}}]),a}(r.a.Component),O=x;c.a.render(Object(m.jsx)(x,{}),document.getElementById("root"));var y=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,16)).then((function(t){var a=t.getCLS,s=t.getFID,r=t.getFCP,n=t.getLCP,c=t.getTTFB;a(e),s(e),r(e),n(e),c(e)}))};c.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(O,{})}),document.getElementById("root")),y()}},[[15,1,2]]]);
//# sourceMappingURL=main.7b0b0cb6.chunk.js.map