(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],[,,,,,,,,,,,function(t){t.exports=JSON.parse('[{"btnType":"submit","btnName":"Add contact"}]')},function(t){t.exports=JSON.parse('[{"type":"text","name":"Name","pattern":"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([\' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$","title":"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d\'Artagnan \u0438 \u0442. \u043f."},{"type":"tel","name":"Number","pattern":"+?d{1,4}?[-.s]?(?d{1,3}?)?[-.s]?d{1,4}[-.s]?d{1,4}[-.s]?d{1,9}","title":"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +"}]')},,,,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(9),s=n.n(r),o=n(13),i=n(3),l=n(4),u=n(7),b=n(6),m=n(10),d=n(5),j=n(2),f=n(0),h=function(t){var e=t.btnType,n=t.btnName,a=t.onClick,c=t.classButton;return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)("button",{type:e,onClick:a,className:c,children:n})})};h.defaultProps={btnType:"button"};var p=h,O=function(t){var e=t.type,n=t.value,a=t.name,c=t.pattern,r=t.title,s=t.id,o=t.onChange,i=t.classInput,l=t.classLabel;return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("label",{htmlFor:s,className:l,children:a}),Object(f.jsx)("input",{className:i,type:e,value:n,name:a,pattern:c,title:r,id:s,onChange:o,required:!0})]})},N=n(11),v=n(12),x=(n(19),function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={Name:"",Number:""},t.handleChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(d.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(Object(m.a)({id:Object(j.a)()},t.state)),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this,e=this.state,n=e.Name,a=e.Number;return Object(f.jsxs)("form",{className:"form-container",onSubmit:this.handleSubmit,children:[v.map((function(e){var c,r=e.type,s=e.name,o=e.pattern,i=e.title,l=Object(j.a)();return"Name"===s&&(c=n),"Number"===s&&(c=a),Object(f.jsx)(O,{type:r,value:c,name:s,pattern:o,title:i,id:l,onChange:t.handleChange,classLabel:"form-label",classInput:"form-input"},s)})),N.map((function(t){var e=t.btnType,n=t.btnName;return Object(f.jsx)(p,{btnType:e,btnName:n,classButton:"form-button"},n)}))]})}}]),n}(a.Component)),y=(n(20),Object(j.a)()),g=function(t){var e=t.value,n=t.onChange;return Object(f.jsx)(O,{value:e,onChange:n,type:"text",id:y,name:"Find contacts by name",classLabel:"filter-label",classInput:"filter-input"})},C=(n(21),function(t){var e=t.children;return Object(f.jsx)("ul",{className:"contacts-list",children:e})}),S=(n(22),function(t){var e=t.onDelete,n=t.contacts;return Object(f.jsx)(f.Fragment,{children:n.map((function(t){var n=t.id,a=t.Name,c=t.Number;return Object(f.jsxs)("li",{className:"contact-item",children:[a,": ",c,Object(f.jsx)(p,{btnType:"button",btnName:"Delete",onClick:function(){return e(n)},classButton:"contact-button"})]},n)}))})}),k=(n(23),function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",Name:"Rosie Simpson",Number:"459-12-56"},{id:"id-2",Name:"Hermione Kline",Number:"443-89-12"},{id:"id-3",Name:"Eden Clements",Number:"645-17-79"},{id:"id-4",Name:"Annie Copeland",Number:"227-91-26"}],filter:""},t.formSubmitHandler=function(e){var n=function(t){return t.Name===e.Name};console.log(t.state.contacts.some(n)),t.state.contacts.some(n)?alert("".concat(e.Name," is already in contacts")):t.setState((function(t){return{contacts:[].concat(Object(o.a)(t.contacts),[e])}}))},t.filterHandler=function(e){var n=e.currentTarget.value;t.setState({filter:n})},t.deleteHandler=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state,e=t.contacts,n=t.filter,a=n.toLocaleLowerCase(),c=e.filter((function(t){return t.Name.toLocaleLowerCase().includes(a)}));return Object(f.jsxs)("div",{className:"container",children:[Object(f.jsx)("h2",{className:"title",children:"Phonebook"}),Object(f.jsx)(x,{onSubmit:this.formSubmitHandler}),Object(f.jsx)("h2",{className:"secondary-title",children:"Contacts"}),e.length>0?Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(g,{onChange:this.filterHandler,value:n}),Object(f.jsx)(C,{children:Object(f.jsx)(S,{contacts:c,onDelete:this.deleteHandler})})]}):Object(f.jsx)("span",{className:"contact-message",children:"You have no contacts yet "})]})}}]),n}(a.Component));n(24);s.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(k,{})}),document.getElementById("root"))}],[[25,1,2]]]);
//# sourceMappingURL=main.7531f8f4.chunk.js.map