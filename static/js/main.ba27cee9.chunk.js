(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],[,,,,,,,,,,,function(t){t.exports=JSON.parse('[{"btnType":"submit","btnName":"Add contact"}]')},,,,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(9),s=n.n(r),o=n(12),i=n(3),l=n(4),u=n(7),b=n(6),m=n(10),d=n(5),j=n(2),h=n(0),f=function(t){var e=t.btnType,n=t.btnName,a=t.onClick,c=t.classButton;return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("button",{type:e,onClick:a,className:c,children:n})})};f.defaultProps={btnType:"button"};var p=f,O=n(11),v=(n(18),function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.nameInputId=Object(j.a)(),t.numberInputId=Object(j.a)(),t.handleChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(d.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(Object(m.a)({id:Object(j.a)()},t.state)),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(h.jsxs)("form",{className:"form-container",onSubmit:this.handleSubmit,children:[Object(h.jsx)("label",{htmlFor:this.nameInputId,className:"form-label",children:"Name"}),Object(h.jsx)("input",{className:"form-input",type:"text",value:e,name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:this.handleChange,id:this.nameInputId}),Object(h.jsx)("label",{htmlFor:this.numberInputId,className:"form-label",children:"Number"}),Object(h.jsx)("input",{className:"form-input",type:"tel",name:"number",value:n,pattern:"(\\+?( |-|\\.)?\\d{1,2}( |-|\\.)?)?(\\(?\\d{3}\\)?|\\d{3})( |-|\\.)?(\\d{3}( |-|\\.)?\\d{4})",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 11-12 \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0446\u0438\u0444\u0440\u044b, \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043f\u0443\u0437\u0430\u0442\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:this.handleChange,id:this.numberInputId}),O.map((function(t){var e=t.btnType,n=t.btnName;return Object(h.jsx)(p,{btnType:e,btnName:n,classButton:"form-button"},n)}))]})}}]),n}(a.Component)),x=function(t){var e=t.type,n=t.value,a=t.name,c=t.pattern,r=t.title,s=t.id,o=t.onChange,i=t.classInput,l=t.classLabel;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("label",{htmlFor:s,className:l,children:a}),Object(h.jsx)("input",{className:i,type:e,value:n,name:a,pattern:c,title:r,id:s,onChange:o,required:!0})]})},g=(n(19),Object(j.a)()),y=function(t){var e=t.value,n=t.onChange;return Object(h.jsx)(x,{value:e,onChange:n,type:"text",id:g,name:"Find contacts by name",classLabel:"filter-label",classInput:"filter-input"})},N=(n(20),function(t){var e=t.children;return Object(h.jsx)("ul",{className:"contacts-list",children:e})}),C=(n(21),function(t){var e=t.onDelete,n=t.contacts;return Object(h.jsx)(h.Fragment,{children:n.map((function(t){var n=t.id,a=t.name,c=t.number;return Object(h.jsxs)("li",{className:"contact-item",children:[a,": ",c,Object(h.jsx)(p,{btnType:"button",btnName:"Delete",onClick:function(){return e(n)},classButton:"contact-button"})]},n)}))})}),I=(n(22),function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],filter:""},t.formSubmitHandler=function(e){t.state.contacts.some((function(t){return t.name===e.name}))?alert("".concat(e.name," is already in contacts")):t.setState((function(t){return{contacts:[].concat(Object(o.a)(t.contacts),[e])}}))},t.filterHandler=function(e){var n=e.currentTarget.value;t.setState({filter:n})},t.deleteHandler=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state,e=t.contacts,n=t.filter,a=n.toLocaleLowerCase(),c=e.filter((function(t){return t.name.toLocaleLowerCase().includes(a)}));return Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)("h2",{className:"title",children:"Phonebook"}),Object(h.jsx)(v,{onSubmit:this.formSubmitHandler}),Object(h.jsx)("h2",{className:"secondary-title",children:"Contacts"}),e.length>0?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(y,{onChange:this.filterHandler,value:n}),Object(h.jsx)(N,{children:Object(h.jsx)(C,{contacts:c,onDelete:this.deleteHandler})})]}):Object(h.jsx)("span",{className:"contact-message",children:"You have no contacts yet "})]})}}]),n}(a.Component));n(23);s.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(I,{})}),document.getElementById("root"))}],[[24,1,2]]]);
//# sourceMappingURL=main.ba27cee9.chunk.js.map