(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1:function(e,t,a){e.exports={success:"FormStyle_success__2yvCy",fail:"FormStyle_fail__EOGuz",error:"FormStyle_error__1Cwg5",container:"FormStyle_container__AJhVG",wrapper:"FormStyle_wrapper__2hHCl",logRegWrapper:"FormStyle_logRegWrapper__2HUOT",formLogReg:"FormStyle_formLogReg__1m61H",form:"FormStyle_form__3tQ_y",submit:"FormStyle_submit__2Gkng",field:"FormStyle_field__2bO8x",checkboxes:"FormStyle_checkboxes__2G5cZ",text:"FormStyle_text__3J3ql",input:"FormStyle_input__3m2x9",email:"FormStyle_email__3UDo_",client:"FormStyle_client__FfXxk",search:"FormStyle_search__2Gibr"}},13:function(e,t,a){e.exports={header:"Header_header__2OKZO",title:"Header_title__nV9xx",buttons:"Header_buttons__1imOf",button:"Header_button__2YW_Y"}},14:function(e,t,a){e.exports={field:"AddFiles_field__2XxT4",icon:"AddFiles_icon__3Oed9",file:"AddFiles_file__3nuRp",fileLabel:"AddFiles_fileLabel__1Lopp",uploaded:"AddFiles_uploaded__2gmTD"}},20:function(e,t,a){e.exports={greeting:"Profile_greeting__1pGpf",info:"Profile_info__2TraM",email:"Profile_email__3uZ1t"}},33:function(e,t,a){e.exports=a(46)},46:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(29),l=a.n(r),i=a(3),c=a(4),o=a(6),m=a(5),u=a(7),p=a(16),h=a(15),g=a(13),d=a.n(g),f=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).state={login:JSON.parse(sessionStorage.getItem("login"))||a.props.login},a.handleExit=function(){a.setState({login:!1}),a.props.getLogin(a.state.login)},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.login;return s.a.createElement("header",{className:d.a.header},s.a.createElement("h1",{className:d.a.title},"SEND EMAIL"),s.a.createElement("div",{className:d.a.buttons},e?s.a.createElement("div",null,s.a.createElement(p.b,{to:"/login",className:d.a.button,onClick:this.handleExit},"Exit"),s.a.createElement(p.b,{to:"/profile",className:d.a.button},"Profile")):s.a.createElement("div",null,s.a.createElement(p.b,{to:"/registration",className:d.a.button},"Sign up"),s.a.createElement(p.b,{to:"/login",className:d.a.button},"Log in")),s.a.createElement(p.b,{to:"/",className:d.a.button},"Send email")))}}]),t}(n.Component),E=a(12),b=a.n(E),v=a(18),y=a(32),_=a.n(y),S=a(24),N=a(26),O=a(14),x=a.n(O),j=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).state={files:[]},a.handleFileChange=function(e){for(var t,n=[],s=e.target.files,r=function(e){var a=s[e];t=a.name,_()("#uploaded").append(t+" ");var r=new FileReader;r.readAsDataURL(a),r.onloadend=function(e){a.src=e.target.result,n.push({filename:t,path:a.src})}},l=0;l<s.length;l++)r(l);a.setState({files:n})},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentWillUpdate",value:function(e,t,a){t!==this.state&&this.props.getFiles(t.files)}},{key:"render",value:function(){return s.a.createElement("div",{className:x.a.field},s.a.createElement("label",{htmlFor:"file",className:x.a.fileLabel,title:"Add file"},s.a.createElement(S.a,{icon:N.a,className:x.a.icon})),s.a.createElement("input",{multiple:!0,onChange:this.handleFileChange,type:"file",id:"file",className:x.a.file}),s.a.createElement("label",{htmlFor:"img",className:x.a.fileLabel,title:"Add image"},s.a.createElement(S.a,{icon:N.b,className:x.a.icon})),s.a.createElement("input",{multiple:!0,onChange:this.handleFileChange,accept:"image/*, video/*",type:"file",id:"img",className:x.a.file}),s.a.createElement("span",{id:"uploaded",className:x.a.uploaded}))}}]),t}(n.Component),C=a(1),w=a.n(C),F=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).state={text:""},a.handleTextChange=function(e){a.setState({text:e.target.value})},a.componentWillUpdate=function(e,t){t!==a.state&&a.props.getMessage(t.text)},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("span",{className:w.a.field},"Message text"),s.a.createElement("label",{htmlFor:"message-text"}),s.a.createElement("textarea",{id:"message-text",className:w.a.text,value:this.props.message,onChange:this.handleTextChange}))}}]),t}(n.Component),k=[],A=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).state={selectedClients:[],searchText:""},a.handleSelect=function(e){if("true"===e.target.check){var t=k.indexOf(e.target.value);e.target.check="false",-1!==t&&k.splice(t,1)}else e.target.check="true",k.push(e.target.value);a.props.getClients(a.state.selectedClients),console.log(a.state.selectedClients)},a.handleSearch=function(e){a.setState({searchText:e.target.value})},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentWillReceiveProps",value:function(e,t){this.setState({selectedClients:k})}},{key:"render",value:function(){var e=this,t=this.props.clients;return s.a.createElement("div",null,s.a.createElement("span",{className:w.a.field},"Select clients"),s.a.createElement("input",{type:"text",className:w.a.search,placeholder:"Search...",value:this.state.searchText,onChange:this.handleSearch}),s.a.createElement("div",{className:w.a.checkboxes,id:"checkboxes"},t.map(function(t){var a=t.emails.split(", ");return s.a.createElement("div",{key:t.id},-1!==t.name.search(new RegExp(""+e.state.searchText,"i"))&&s.a.createElement("div",{className:w.a.client},s.a.createElement("div",null,t.name),a.map(function(a){return s.a.createElement("div",{className:w.a.email,key:a},s.a.createElement("input",{type:"checkbox",id:t.id,check:"false",value:a,onClick:e.handleSelect}),s.a.createElement("label",{htmlFor:t.id},a))})))})))}}]),t}(n.Component),L=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).state={userName:"",userEmail:"",emails:"",message:"",files:[],clients:[],successfully:"",error:""},a.handleSend=function(){var e=Object(v.a)(b.a.mark(function e(t){var n,s,r;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,fetch("http://localhost:9000/send",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message:a.state.message,emails:a.state.emails,userName:a.state.userName,userEmail:a.state.userEmail,attachments:a.state.files})});case 3:return n=e.sent,e.next=6,n.text();case 6:s=e.sent,r=JSON.parse(s),a.setState({successfully:r.successfully,error:r.error,clearForm:r.clearForm}),a.state.clearForm&&(a.setState({message:""}),document.getElementById("form").reset());case 10:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.getClients=function(e){a.setState({emails:e.join(", ")}),a.setState({userName:a.props.userName,userEmail:a.props.userEmail})},a.getMessage=function(e){a.setState({message:e})},a.getFiles=function(e){a.setState({files:e})},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"callAPI",value:function(){var e=this;fetch("http://localhost:9000/clients").then(function(e){return e.json()}).then(function(t){return e.setState({clients:t})})}},{key:"componentDidMount",value:function(){this.callAPI()}},{key:"render",value:function(){var e=this.props.login;return s.a.createElement("div",{className:w.a.container},s.a.createElement("div",{className:w.a.wrapper},s.a.createElement("form",{className:w.a.form,encType:"multipart/form-data",onSubmit:this.handleSend,id:"form"},s.a.createElement(A,{clients:this.state.clients,getClients:this.getClients}),s.a.createElement(F,{getMessage:this.getMessage,message:this.state.message}),s.a.createElement(j,{getFiles:this.getFiles}),e?s.a.createElement("input",{type:"submit",className:w.a.submit,value:"Submit"}):s.a.createElement("div",null,s.a.createElement("input",{type:"submit",className:w.a.submit,value:"Submit",disabled:!0}),s.a.createElement("span",{className:w.a.error},"PLEASE, LOG IN TO CONTINUE")),s.a.createElement("p",{className:w.a.success},this.state.successfully),s.a.createElement("p",{className:w.a.fail},this.state.error))))}}]),t}(n.Component),P=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).state={loginEmail:"",loginPassword:"",login:JSON.parse(sessionStorage.getItem("login"))||!1,name:"",email:"",error:""},a.componentWillUpdate=function(e,t){t!==a.state&&a.props.getInfo(t.login,t.name,t.email)},a.handleEmailChange=function(e){a.setState({loginEmail:e.target.value})},a.handlePasswordChange=function(e){a.setState({loginPassword:e.target.value})},a.handleLogin=function(){var e=Object(v.a)(b.a.mark(function e(t){var n,s,r;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,fetch("http://localhost:9000/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:a.state.loginEmail,password:a.state.loginPassword})});case 3:return n=e.sent,e.next=6,n.text();case 6:s=e.sent,r=JSON.parse(s),a.setState({login:r.login,name:r.name,email:r.email,error:r.error});case 9:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidUpdate",value:function(e,t,a){sessionStorage.setItem("login",JSON.stringify(this.state.login)),sessionStorage.setItem("name",JSON.stringify(this.state.name)),sessionStorage.setItem("email",JSON.stringify(this.state.email))}},{key:"render",value:function(){return s.a.createElement("div",{className:w.a.container},s.a.createElement("div",{className:w.a.logRegWrapper},s.a.createElement("form",{className:w.a.formLogReg,onSubmit:this.handleLogin},s.a.createElement("div",{className:w.a.field},"Email:"),s.a.createElement("input",{type:"email",id:"email",value:this.state.loginEmail,className:w.a.input,onChange:this.handleEmailChange}),s.a.createElement("div",{className:w.a.field},"Password:"),s.a.createElement("input",{type:"password",id:"password",value:this.state.loginPassword,className:w.a.input,onChange:this.handlePasswordChange}),s.a.createElement("p",{className:w.a.error},this.state.error),s.a.createElement("input",{type:"submit",className:w.a.submit,value:"Log in"}))))}}]),t}(n.Component),T=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).state={username:"",email:"",password:"",userExist:""},a.handleTextChange=function(e){a.setState({username:e.target.value})},a.handleEmailChange=function(e){a.setState({email:e.target.value})},a.handlePasswordChange=function(e){a.setState({password:e.target.value})},a.handleRegistration=function(){var e=Object(v.a)(b.a.mark(function e(t){var n,s;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,fetch("http://localhost:9000/registration",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:a.state.username,email:a.state.email,password:a.state.password})});case 3:return n=e.sent,e.next=6,n.text();case 6:s=e.sent,a.setState({userExist:JSON.parse(s)}),a.state.userExist.clearForm&&a.setState({username:"",email:"",password:""});case 9:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:w.a.container},s.a.createElement("div",{className:w.a.logRegWrapper},s.a.createElement("form",{className:w.a.formLogReg,onSubmit:this.handleRegistration},s.a.createElement("div",{className:w.a.field},"Username:"),s.a.createElement("p",{className:w.a.error},this.state.userExist.name),s.a.createElement("input",{type:"text",name:"username",className:w.a.input,onChange:this.handleTextChange,value:this.state.username}),s.a.createElement("div",{className:w.a.field},"Email:"),s.a.createElement("p",{className:w.a.error},this.state.userExist.email),s.a.createElement("input",{type:"email",name:"email",className:w.a.input,onChange:this.handleEmailChange,value:this.state.email}),s.a.createElement("div",{className:w.a.field},"Password:"),s.a.createElement("input",{type:"password",name:"password",className:w.a.input,onChange:this.handlePasswordChange,value:this.state.password}),s.a.createElement("input",{type:"submit",className:w.a.submit,value:"Sign up"}),s.a.createElement("p",{className:w.a.success},this.state.userExist.message),s.a.createElement("p",{className:w.a.fail},this.state.userExist.error))))}}]),t}(n.Component),I=a(20),J=a.n(I),R=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.user,t=e.name,a=e.email;return s.a.createElement("div",null,s.a.createElement("h1",{className:J.a.greeting},"Hello, ",t),s.a.createElement("p",{className:J.a.info},"All emails will be sent from"),s.a.createElement("p",{className:J.a.email},a))}}]),t}(n.Component),D=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).state={login:JSON.parse(sessionStorage.getItem("login"))||!1,name:JSON.parse(sessionStorage.getItem("name"))||"",email:JSON.parse(sessionStorage.getItem("email"))||""},a.getInfo=function(e,t,n){a.setState({login:e,name:t,email:n})},a.getLogin=function(e){a.setState({login:e})},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidUpdate",value:function(e,t,a){sessionStorage.setItem("login",JSON.stringify(this.state.login))}},{key:"render",value:function(){var e=this,t=this.state.login;return s.a.createElement(p.a,null,s.a.createElement(h.b,{path:"/",render:function(){return s.a.createElement(f,{login:t,getLogin:e.getLogin})}}),s.a.createElement(h.b,{exact:!0,path:"/",render:function(){return s.a.createElement(L,{login:t,userName:e.state.name,userEmail:e.state.email})}}),s.a.createElement(h.b,{exact:!0,path:"/login",render:function(){return t?s.a.createElement(h.a,{to:"/profile"}):s.a.createElement(P,{isLogin:t,getInfo:e.getInfo})}}),s.a.createElement(h.b,{exact:!0,path:"/profile",render:function(){return t?s.a.createElement(R,{user:e.state}):s.a.createElement(h.a,{to:"/login"})}}),s.a.createElement(h.b,{exact:!0,path:"/registration",component:T}))}}]),t}(n.Component);l.a.render(s.a.createElement(D,null),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.1eb78fd3.chunk.js.map