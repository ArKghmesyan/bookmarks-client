(this["webpackJsonpbookmarks-client"]=this["webpackJsonpbookmarks-client"]||[]).push([[0],{297:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(25),o=n.n(c),s=n(33),i=n(307),l=n(311),u=n(312),d=n(180),j=n(30),b=n(308),f=n(313),m=n(300),O=n(301),h=n(309),p=n(303),x=n(186),g=n(318),v=n(185),y=n(187),k=n(130),w=n(167),C=n(168),T=n.n(C).a.create({baseURL:"https://api.bookmarks.am/api"}),S=n(123),I=n(35);function P(e,t){switch(t.type){case"drop":return Object(I.a)(Object(I.a)({},e),{},{page:1,total:0,docs:[]});case"list":return Object(I.a)(Object(I.a)({},e),t.payload);case"getTags":return Object(I.a)(Object(I.a)({},e),{},{tags:t.payload});case"add":return Object(I.a)(Object(I.a)({},e),{},{docs:[t.payload].concat(Object(S.a)(e.docs))});case"remove":return Object(I.a)(Object(I.a)({},e),{},{docs:e.docs.filter((function(e){return e._id!==t.payload._id}))});case"update":return Object(I.a)(Object(I.a)({},e),{},{docs:e.docs.map((function(e){return e._id===t.payload._id?t.payload:e}))});default:throw new Error("".concat(t.type," not found!"))}}var z=n(6),B=Object(r.createContext)();function E(e){var t=e.children,n=function(){var e=Object(r.useReducer)(P,A),t=Object(s.a)(e,2),n=t[0],a=t[1];return{data:n,getTags:function(){return T.get("/bookmarks/tags").then((function(e){return a({type:"getTags",payload:e.data})})).catch((function(e){d.b.error(e.message)}))},drop:function(){return T.delete("/bookmarks/").then((function(){return a({type:"drop"})})).catch((function(e){d.b.error(e.message)}))},add:function(e){return T.post("/bookmarks",e).then((function(e){return a({type:"add",payload:e.data})})).catch((function(e){d.b.error(e.message)}))},list:function(e){return T.get("/bookmarks",{params:e}).then((function(e){return a({type:"list",payload:e.data})})).catch((function(e){d.b.error(e.message)}))},update:function(e,t){return T.put("/bookmarks/".concat(e),t).then((function(e){return a({type:"update",payload:e.data})})).catch((function(e){d.b.error(e.message)}))},remove:function(e){return T.delete("/bookmarks/".concat(e)).then((function(){return a({type:"remove",payload:{_id:e}})})).catch((function(e){d.b.error(e.message)}))}}}();return Object(z.jsx)(B.Provider,{value:n,children:t})}function F(){return Object(r.useContext)(B)}var A={limit:0,total:0,tags:[],docs:[],page:1};var _=n(305),L=n(122),R=n(97),U=n(314),N=n(315),q=n(184);function Y(e){var t=Object(r.useState)(e.value),n=Object(s.a)(t,2),a=n[0],c=n[1],o=Object(r.useState)(!1),i=Object(s.a)(o,2),u=i[0],d=i[1],j=Object(r.useState)(""),b=Object(s.a)(j,2),f=b[0],m=b[1],O=Object(r.useRef)();Object(r.useEffect)((function(){e.onChange(a)}),[a]),Object(r.useEffect)((function(){var e;null===O||void 0===O||null===(e=O.current)||void 0===e||e.focus()}),[u]);var p=function(){f&&-1===a.indexOf(f)&&c([].concat(Object(S.a)(a),[f])),d(!1),m("")};return Object(z.jsxs)(z.Fragment,{children:[a.map((function(e){return Object(z.jsx)(l.a,{closable:!0,onClose:function(){return c(a.filter((function(t){return t!==e})))},children:e},e)})),u&&Object(z.jsx)(h.a,{ref:O,type:"text",size:"small",style:{width:"78px",marginRight:"8px",verticalaAign:"top"},value:f,onChange:function(e){return m(e.target.value)},onBlur:p,onPressEnter:p}),!u&&Object(z.jsxs)(l.a,{style:{background:"#fff",borderStyle:"dashed"},onClick:function(){return d(!0)},children:[Object(z.jsx)(q.a,{})," New Tag"]})]})}function H(e){var t,n,a=_.a.useForm(),c=Object(s.a)(a,1)[0],o=Object(r.useState)(""),i=Object(s.a)(o,2),l=i[0],u=i[1],d=Object(r.useState)(!1),j=Object(s.a)(d,2),f=j[0],m=j[1],O=!(null===(t=e.record)||void 0===t?void 0:t._id);Object(r.useEffect)((function(){var t;c.setFieldsValue(e.record),u(null===(t=e.record)||void 0===t?void 0:t.type)}),[e.record,c]);return Object(z.jsx)(b.a,{title:O?"Add Bookmark":"Edit Bookmark",visible:!!e.record,onCancel:function(){return e.onCancel()},onOk:function(){return c.submit()},okText:"Submit",confirmLoading:f,destroyOnClose:!0,children:Object(z.jsxs)(_.a,{form:c,preserve:!1,layout:"vertical",onFinish:function(t){m(!0),O?e.onCreate(t).finally((function(t){return m(!1),e.onCancel(),t})):e.onUpdate(e.record._id,t).finally((function(t){return m(!1),e.onCancel(),t}))},children:[Object(z.jsx)(_.a.Item,{name:"type",style:{textAlign:"center"},children:Object(z.jsxs)(L.a.Group,{value:l,onChange:function(e){return u(e.target.value)},children:[Object(z.jsxs)(L.a.Button,{value:"site",children:[Object(z.jsx)(U.a,{})," Website"]}),Object(z.jsxs)(L.a.Button,{value:"book",children:[Object(z.jsx)(N.a,{})," Book"]})]})}),Object(z.jsx)(_.a.Item,{name:"name",label:"Name",rules:[{required:!0}],children:Object(z.jsx)(h.a,{placeholder:"6pm"})}),"book"===l&&Object(z.jsx)(_.a.Item,{name:"page",label:"Page",children:Object(z.jsx)(h.a,{placeholder:"14"})}),Object(z.jsx)(_.a.Item,{name:"url",label:"URL",rules:[{required:"site"===l}],children:Object(z.jsx)(h.a,{placeholder:"https://6pm.com"})}),Object(z.jsx)(_.a.Item,{name:"favorite",valuePropName:"checked",children:Object(z.jsx)(R.a,{children:"Favorite (Show First)"})}),Object(z.jsx)(_.a.Item,{name:"tags",label:"Tags",children:Object(z.jsx)(Y,{value:null===(n=e.record)||void 0===n?void 0:n.tags})}),Object(z.jsx)(_.a.Item,{name:"notes",label:"Notes",children:Object(z.jsx)(h.a.TextArea,{placeholder:"Please don't write your password!"})})]})})}function D(e){var t=e.record;if(t.url){var n="example.com";try{n=new URL(t.url).hostname}catch(r){}return Object(z.jsxs)("a",{href:t.url,target:"_blank",rel:"noreferrer",children:[Object(z.jsx)("img",{style:{marginRight:8},alt:"Logo",width:"16",src:"https://www.google.com/s2/favicons?domain=".concat(n)}),t.name]})}return Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)(N.a,{style:{marginRight:8}}),t.name]})}var J=n(316),M=n(317);function V(e){var t=e.record,n=e.onClick;return t.favorite?Object(z.jsx)(J.a,{onClick:function(){return n(Object(I.a)(Object(I.a)({},t),{},{favorite:!1}))},style:{color:"#eec35d",fontSize:16}}):Object(z.jsx)(M.a,{onClick:function(){return n(Object(I.a)(Object(I.a)({},t),{},{favorite:!0}))},style:{color:"#e6e2da",fontSize:16}})}var W=n(172),G=n.n(W),K=i.a.Text;function Q(){var e=Object(r.useState)(null),t=Object(s.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(1),o=Object(s.a)(c,2),i=o[0],C=o[1],T=Object(r.useState)(!1),S=Object(s.a)(T,2),I=S[0],P=S[1],B=Object(r.useState)(""),E=Object(s.a)(B,2),A=E[0],_=E[1],L=F(),R=Object(r.useCallback)(function(e,t,n){var r;return function(){var a=this,c=arguments,o=function(){r=null,n||e.apply(a,c)},s=n&&!r;clearTimeout(r),r=setTimeout(o,t),s&&e.apply(a,c)}}((function(e){return L.list(e).finally((function(e){return P(!1),e}))}),500),[]);Object(r.useEffect)((function(){1!==i&&C(1),I||P(!0),R({search:A,page:1})}),[A]),Object(r.useEffect)((function(){I||P(!0),R({search:A,page:i})}),[i]),Object(r.useEffect)((function(){L.getTags()}),[]);var U=[{title:"",width:40,align:"center",dataIndex:"favorite",key:"favorite",render:function(e,t){return Object(z.jsx)(V,{record:t,onClick:function(e){return L.update(t._id,e)}})}},{title:"Name",dataIndex:"name",key:"name",render:function(e,t){return Object(z.jsx)(D,{record:t})}},{title:"Notes",dataIndex:"notes",key:"notes"},{title:"Tags",key:"tags",dataIndex:"tags",render:function(e){return e.map((function(e){return Object(z.jsx)(l.a,{color:"geekblue",onClick:function(){return _(e)},children:e},e)}))}},{title:"",key:"action",align:"right",render:function(e,t){return Object(z.jsxs)(u.b,{children:[!!t.url&&Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)(w.CopyToClipboard,{text:t.url,onCopy:function(){return d.b.success("Copied.")},children:Object(z.jsx)(j.a,{size:"small",icon:Object(z.jsx)(x.a,{})})}),Object(z.jsx)(j.a,{size:"small",icon:Object(z.jsx)(g.a,{}),onClick:function(){return b.a.info({icon:null,width:350,content:Object(z.jsx)(G.a,{size:"142",value:t.url})})}})]}),Object(z.jsx)(j.a,{size:"small",onClick:function(){return a(t)},icon:Object(z.jsx)(v.a,{})}),Object(z.jsx)(f.a,{okText:"Yes",cancelText:"No",destroyTooltipOnHide:!0,okButtonProps:{danger:!0},title:"Are you sure to delete this bookmark?",onConfirm:function(){return L.remove(t._id)},children:Object(z.jsx)(j.a,{size:"small",icon:Object(z.jsx)(y.a,{})})})]})}}];return Object(z.jsxs)("div",{children:[Object(z.jsx)(H,{onCancel:function(){return a(null)},onUpdate:L.update,onCreate:L.add,record:n}),Object(z.jsxs)(m.a,{style:{marginBottom:20},wrap:!1,children:[Object(z.jsx)(O.a,{flex:"auto",children:Object(z.jsx)(h.a,{bordered:!0,allowClear:!0,size:"large",value:A,placeholder:"Type name, tag, link...",prefix:Object(z.jsx)(k.a,{}),onChange:function(e){return _(e.target.value)}})}),Object(z.jsx)(O.a,{flex:"none",style:{paddingLeft:20},children:Object(z.jsx)(j.a,{size:"large",type:"primary",onClick:function(){return a({type:"site",tags:[]})},children:"Add Bookmark"})})]}),Object(z.jsx)("div",{style:{marginBottom:20},children:Object(z.jsxs)(u.b,{wrap:!0,children:[Object(z.jsx)(K,{children:"Filter By:"}),L.data.tags.map((function(e){return Object(z.jsxs)(j.a,{size:"small",onClick:function(){return _(e)},type:A===e?"primary":"dashed",children:["#",e]},e)}))]})}),Object(z.jsx)(p.a,{loading:I,columns:U,dataSource:L.data.docs,onChange:function(e){var t=e.current;return C(t)},rowKey:"_id",pagination:{current:i,showSizeChanger:!1,total:L.data.total,pageSize:L.data.limit},size:"small",scroll:{x:1},style:{whiteSpace:"nowrap"}})]})}var X=n(306),Z=n(310),$=n(176),ee=Object(r.createContext)();function te(e){var t=e.children,n=function(){var e=Object(Z.a)(["user"]),t=Object(s.a)(e,3),n=t[0],a=t[1],c=t[2],o=Object(r.useState)(null),i=Object(s.a)(o,2),l=i[0],u=i[1];return Object(r.useEffect)((function(){var e={exp:0};try{var t;e=Object($.a)(null===(t=n.user)||void 0===t?void 0:t.accessToken)}catch(o){}var r=(new Date).getTime()/1e3;if(e.exp>r){var a,c="Bearer ".concat(null===(a=n.user)||void 0===a?void 0:a.accessToken);T.defaults.headers.common.Authorization=c,u(n.user)}else T.defaults.headers.common.Authorization=void 0,u(null)}),[]),{user:l,signin:function(e){return T.post("/auth/login",{email:e.email,password:e.password}).then((function(e){var t="Bearer ".concat(e.data.accessToken);T.defaults.headers.common.Authorization=t,u(e.data),a("user",e.data,{path:"/"})})).catch((function(e){d.b.error(e.message)}))},signup:function(e){return T.post("/auth/register",{email:e.email,password:e.password}).then((function(e){var t="Bearer ".concat(e.data.accessToken);T.defaults.headers.common.Authorization=t,u(e.data),a("user",e.data,{path:"/"})})).catch((function(e){d.b.error(e.message)}))},signout:function(){c("user"),u(null)}}}();return Object(z.jsx)(ee.Provider,{value:n,children:t})}function ne(){return Object(r.useContext)(ee)}var re=n(319),ae=n(320);function ce(e){return Object(z.jsxs)(_.a,{layout:"vertical",style:{backgroundColor:"#fff",padding:20,marginTop:"-16px"},onFinish:function(t){return e.onFinish(t)},children:[Object(z.jsx)(_.a.Item,{name:"email",rules:[{type:"email",message:"The input is not valid E-mail!"},{required:!0,message:"Please input your E-mail!"}],children:Object(z.jsx)(h.a,{placeholder:"Email",prefix:Object(z.jsx)(re.a,{})})}),Object(z.jsx)(_.a.Item,{name:"password",rules:[{required:!0,message:"Please input your password!"}],children:Object(z.jsx)(h.a.Password,{placeholder:"Password",prefix:Object(z.jsx)(ae.a,{}),type:"password"})}),Object(z.jsx)(_.a.Item,{children:Object(z.jsx)(j.a,{type:"primary",htmlType:"submit",children:"Sign In"})})]})}function oe(e){return Object(z.jsxs)(_.a,{layout:"vertical",style:{backgroundColor:"#fff",padding:20,marginTop:"-16px"},onFinish:function(t){return e.onFinish(t)},children:[Object(z.jsx)(_.a.Item,{name:"email",rules:[{type:"email",message:"The input is not valid E-mail!"},{required:!0,message:"Please input your E-mail!"}],children:Object(z.jsx)(h.a,{placeholder:"Email",prefix:Object(z.jsx)(re.a,{})})}),Object(z.jsx)(_.a.Item,{name:"password",rules:[{required:!0,message:"Please input your password!"}],children:Object(z.jsx)(h.a.Password,{placeholder:"Password",prefix:Object(z.jsx)(ae.a,{})})}),Object(z.jsx)(_.a.Item,{name:"confirm",dependencies:["password"],rules:[{required:!0,message:"Please confirm your password!"},function(e){var t=e.getFieldValue;return{validator:function(e,n){return n&&t("password")!==n?Promise.reject(new Error("The two passwords that you entered do not match!")):Promise.resolve()}}}],children:Object(z.jsx)(h.a.Password,{placeholder:"Confirm Password",prefix:Object(z.jsx)(ae.a,{})})}),Object(z.jsx)(_.a.Item,{children:Object(z.jsx)(j.a,{type:"primary",htmlType:"submit",children:"Sign Up"})})]})}var se=i.a.Title,ie=X.a.TabPane;function le(){var e=ne();return Object(z.jsxs)("div",{children:[Object(z.jsx)(se,{level:2,style:{marginBottom:25},children:"Sign In to Save Your Bookmarks!"}),Object(z.jsx)("div",{style:{overflow:"hidden",maxWidth:500},children:Object(z.jsxs)(X.a,{type:"card",children:[Object(z.jsx)(ie,{tab:"Sign In",children:Object(z.jsx)(ce,{onFinish:function(t){return e.signin(t)}})},"1"),Object(z.jsx)(ie,{tab:"Sign Up",children:Object(z.jsx)(oe,{onFinish:function(t){return e.signup(t)}})},"2")]})})]})}var ue=n(302),de=n(124),je=n(75),be=n(304),fe=n(133);var me=function(){var e,t=ne(),n=F(),a=Object(r.useRef)({});return t.user&&Object(z.jsx)(de.a,{overlay:Object(z.jsxs)(je.a,{children:[Object(z.jsx)(je.a.Item,{children:Object(z.jsx)(be.a,{name:"bookmarks",multiple:!1,showUploadList:!1,accept:"application/html, text/html",action:T.defaults.baseURL.concat("/bookmarks/import"),headers:{authorization:T.defaults.headers.common.Authorization},onChange:function(e){"done"===e.file.status?(d.b.success("Your bookmarks imported successfully!"),n.list(),a.current.uploading=!1):"error"===e.file.status?(d.b.error("Your bookmarks import failed!"),a.current.uploading=!1):"uploading"===e.file.status&&(a.current.uploading||d.b.info("Please wait!"),a.current.uploading=!0)},children:"Import Bookmarks HTML"})}),Object(z.jsx)(je.a.Item,{onClick:function(){return b.a.confirm({title:"Are you sure to want to delete your bookmarks?",okButtonProps:{danger:!0},onOk:n.drop,okText:"Yes",cancelText:"No"})},children:"Delete Bookmarks"}),Object(z.jsx)(je.a.Item,{onClick:function(){return t.signout()},children:"Logout"})]}),children:Object(z.jsxs)("a",{style:{color:"#fff"},onClick:function(e){return e.preventDefault()},children:[null===(e=t.user)||void 0===e?void 0:e.email," ",Object(z.jsx)(fe.a,{})]})})};d.b.config({});var Oe=function(){var e=ne();return Object(z.jsxs)(ue.a,{style:{minHeight:"100vh"},children:[Object(z.jsx)(ue.a.Header,{children:Object(z.jsxs)(m.a,{wrap:!1,children:[Object(z.jsx)(O.a,{flex:"auto",children:Object(z.jsx)(N.a,{style:{fontSize:20,color:"#fff"}})}),Object(z.jsx)(O.a,{flex:"none",children:Object(z.jsx)(me,{})})]})}),Object(z.jsx)(ue.a.Content,{style:{padding:"50px"},children:e.user?Object(z.jsx)(Q,{}):Object(z.jsx)(le,{})})]})};n(296);o.a.render(Object(z.jsx)(a.a.StrictMode,{children:Object(z.jsx)(te,{children:Object(z.jsx)(E,{children:Object(z.jsx)(Oe,{})})})}),document.getElementById("root"))}},[[297,1,2]]]);
//# sourceMappingURL=main.4ae8d9ee.chunk.js.map