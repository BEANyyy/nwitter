(this.webpackJsonpnwitter=this.webpackJsonpnwitter||[]).push([[0],{50:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n.n(a),r=n(30),s=n.n(r),i=n(8),u=n(21),o=n(6),l=n(9),j=n.n(l),d=n(15),b=n(11),p=n(22),f=n(23);n(43),n(45),n(52);f.a.initializeApp({apiKey:"AIzaSyA2GASvxUP3ujy7rdjwHmsQNGvSXr3aNpc",authDomain:"nwitter-e80ad.firebaseapp.com",projectId:"nwitter-e80ad",storageBucket:"nwitter-e80ad.appspot.com",messagingSenderId:"330904509942",appId:"1:330904509942:web:82102942a200ab4d9ffbd7"});var h=f.a,O=f.a.auth(),m=f.a.firestore(),x=f.a.storage(),v=n(1),g=function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),s=Object(i.a)(r,2),u=s[0],o=s[1],l=Object(a.useState)(!0),b=Object(i.a)(l,2),p=b[0],f=b[1],h=Object(a.useState)(""),m=Object(i.a)(h,2),x=m[0],g=m[1],y=function(e){var t=e.target,n=t.name,a=t.value;"email"===n?c(a):"password"===n&&o(a)},w=function(){var e=Object(d.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,!p){e.next=8;break}return e.next=5,O.createUserWithEmailAndPassword(n,u);case 5:e.sent,e.next=11;break;case 8:return e.next=10,O.signInWithEmailAndPassword(n,u);case 10:e.sent;case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),g(e.t0.message);case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t){return e.apply(this,arguments)}}();return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)("form",{onSubmit:w,className:"container",children:[Object(v.jsx)("input",{name:"email",type:"email",placeholder:"Email",required:!0,value:n,onChange:y,className:"authInput"}),Object(v.jsx)("input",{name:"password",type:"password",placeholder:"Password",required:!0,value:u,onChange:y,className:"authInput"}),Object(v.jsx)("input",{type:"submit",value:p?"Create Account":"Log In",className:"authInput authSubmit"}),x&&Object(v.jsx)("span",{className:"authError",children:x})]}),Object(v.jsx)("span",{onClick:function(){return f((function(e){return!e}))},className:"authSwitch",children:p?"Sign In":"Create Account"})]})},y=function(){var e=function(){var e=Object(d.a)(j.a.mark((function e(t){var n,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"google"===(n=t.target.name)?a=new h.auth.GoogleAuthProvider:"github"===n&&(a=new h.auth.GithubAuthProvider),e.next=4,O.signInWithPopup(a);case 4:e.sent;case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(v.jsxs)("div",{className:"authContainer",children:[Object(v.jsx)(b.a,{icon:p.c,color:"#04AAFF",size:"3x",style:{marginBottom:30}}),Object(v.jsx)(g,{}),Object(v.jsxs)("div",{className:"authBtns",children:[Object(v.jsxs)("button",{onClick:e,name:"google",className:"authBtn",children:["Continue with Google ",Object(v.jsx)(b.a,{icon:p.b})]}),Object(v.jsxs)("button",{onClick:e,name:"github",className:"authBtn",children:["Continue with Github ",Object(v.jsx)(b.a,{icon:p.a})]})]})]})},w=n(33),N=n(18),S=function(e){var t=e.nweetObj,n=e.isOwner,c=Object(a.useState)(!1),r=Object(i.a)(c,2),s=r[0],u=r[1],o=Object(a.useState)(t.text),l=Object(i.a)(o,2),p=l[0],f=l[1],h=function(){var e=Object(d.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("\uc0ad\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?")){e.next=7;break}return e.next=4,m.doc("nweets/".concat(t.id)).delete();case 4:if(""===t.attachmentUrl){e.next=7;break}return e.next=7,x.refFromURL(t.attachmentUrl).delete();case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=function(){return u((function(e){return!e}))},g=function(){var e=Object(d.a)(j.a.mark((function e(n){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,m.doc("nweets/".concat(t.id)).update({text:p});case 3:u(!1);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(v.jsx)("div",{className:"nweet",children:s?Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)("form",{onSubmit:g,className:"container nweetEdit",children:[Object(v.jsx)("input",{onChange:function(e){var t=e.target.value;f(t)},value:p,required:!0,placeholder:"Edit you nweet",autoFocus:!0,className:"formInput"}),Object(v.jsx)("input",{type:"submit",value:"Update Nweet",className:"formBtn"})]}),Object(v.jsx)("button",{onClick:O,className:"formBtn cancelBtn",children:"Cancel"})]}):Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("h4",{children:t.text}),t.attachmentUrl&&Object(v.jsx)("img",{src:t.attachmentUrl,width:"50px",height:"50px"}),n&&Object(v.jsxs)("div",{className:"nweet__actions",children:[Object(v.jsx)("span",{onClick:h,children:Object(v.jsx)(b.a,{icon:N.d})}),Object(v.jsx)("span",{onClick:O,children:Object(v.jsx)(b.a,{icon:N.a})})]})]})})},k=n(54),I=function(e){var t=e.userObj,n=Object(a.useState)(""),c=Object(i.a)(n,2),r=c[0],s=c[1],u=Object(a.useState)(""),o=Object(i.a)(u,2),l=o[0],p=o[1],f=function(){var e=Object(d.a)(j.a.mark((function e(n){var a,c,i;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),""!==r){e.next=3;break}return e.abrupt("return");case 3:if(a="",""===l){e.next=12;break}return c=x.ref().child("".concat(t.uid,"/").concat(Object(k.a)())),e.next=8,c.putString(l,"data_url");case 8:return i=e.sent,e.next=11,i.ref.getDownloadURL();case 11:a=e.sent;case 12:return e.next=14,m.collection("nweets").add({text:r,createdAt:Date.now(),creatorId:t.uid,attachmentUrl:a});case 14:s(""),p("");case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(v.jsxs)("form",{onSubmit:f,className:"factoryForm",children:[Object(v.jsxs)("div",{className:"factoryInput__container",children:[Object(v.jsx)("input",{className:"factoryInput__input",value:r,onChange:function(e){e.preventDefault();var t=e.target.value;s(t)},type:"text",placeholder:"What's on your mind?",maxLength:120}),Object(v.jsx)("input",{type:"submit",value:"\u2192",className:"factoryInput__arrow"})]}),Object(v.jsxs)("label",{htmlFor:"attach-file",className:"factoryInput__label",children:[Object(v.jsx)("span",{children:"Add photos"}),Object(v.jsx)(b.a,{icon:N.b})]}),Object(v.jsx)("input",{id:"attach-file",type:"file",accept:"image/*",onChange:function(e){var t=e.target.files[0],n=new FileReader;n.onloadend=function(e){var t=e.currentTarget.result;p(t)},Boolean(t)&&n.readAsDataURL(t)},style:{opacity:0}}),l&&Object(v.jsxs)("div",{className:"factoryForm__attachment",children:[Object(v.jsx)("img",{src:l,style:{backgroundImage:l}}),Object(v.jsxs)("div",{className:"factoryForm__clear",onClick:function(){return p("")},children:[Object(v.jsx)("span",{children:"Remove"}),Object(v.jsx)(b.a,{icon:N.c})]})]})]})},C=function(e){var t=e.userObj,n=Object(a.useState)([]),c=Object(i.a)(n,2),r=c[0],s=c[1];return Object(a.useEffect)((function(){m.collection("nweets").orderBy("createdAt","desc").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(w.a)({id:e.id},e.data())}));s(t)}))}),[]),Object(v.jsxs)("div",{className:"container",children:[Object(v.jsx)(I,{userObj:t}),Object(v.jsx)("div",{style:{marginTop:30},children:r.map((function(e){return Object(v.jsx)(S,{nweetObj:e,isOwner:e.creatorId===t.uid},e.id)}))})]})},A=function(e){var t=e.userObj,n=e.refreshUser,c=Object(o.f)(),r=Object(a.useState)(t.displayName),s=Object(i.a)(r,2),u=s[0],l=s[1],b=function(){var e=Object(d.a)(j.a.mark((function e(a){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),t.displayName===u){e.next=5;break}return e.next=4,t.updateProfile({displayName:u});case 4:n();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(v.jsxs)("div",{className:"container",children:[Object(v.jsxs)("form",{onSubmit:b,className:"profileForm",children:[Object(v.jsx)("input",{onChange:function(e){var t=e.target.value;l(t)},type:"text",placeholder:"Display name",value:u,autoFocus:!0,className:"formInput"}),Object(v.jsx)("input",{type:"submit",value:"Update Profile",className:"formBtn",style:{marginTop:10}})]}),Object(v.jsx)("span",{className:"formBtn cancelBtn logOut",onClick:function(){O.signOut(),c.push("/")},children:"Log Out"})]})},F=function(e){var t=e.userObj;return Object(v.jsx)("nav",{children:Object(v.jsxs)("ul",{style:{display:"flex",justifyContent:"center",marginTop:50},children:[Object(v.jsx)("li",{children:Object(v.jsx)(u.b,{to:"/",style:{marginRight:10},children:Object(v.jsx)(b.a,{icon:p.c,color:"#04AAFF",size:"2x"})})}),Object(v.jsx)("li",{children:Object(v.jsxs)(u.b,{to:"/profile",style:{marginLeft:10,display:"flex",flexDirection:"column",alignItems:"center",fontSize:12},children:[Object(v.jsx)(b.a,{icon:N.e,color:"#04AAFF",size:"2x"}),Object(v.jsx)("span",{style:{marginTop:10},children:t.displayName?"".concat(t.displayName,"\uc758 Profile"):"Profile"})]})})]})})},U=function(e){var t=e.isLoggedIn,n=e.userObj,a=e.refreshUser;return Object(v.jsxs)(u.a,{children:[t&&Object(v.jsx)(F,{userObj:n}),Object(v.jsx)(o.c,{children:t?Object(v.jsxs)("div",{style:{maxWidth:890,width:"100%",margin:"0 auto",marginTop:80,display:"flex",justifyContent:"center"},children:[Object(v.jsx)(o.a,{exact:!0,path:"/",children:Object(v.jsx)(C,{userObj:n})}),Object(v.jsx)(o.a,{exact:!0,path:"/profile",children:Object(v.jsx)(A,{refreshUser:a,userObj:n})})]}):Object(v.jsx)(o.a,{exact:!0,path:"/",children:Object(v.jsx)(y,{})})})]})};var B=function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(null),s=Object(i.a)(r,2),u=s[0],o=s[1];return Object(a.useEffect)((function(){O.onAuthStateChanged((function(e){o(!!e&&{uid:e.uid,displayName:e.displayName,updateProfile:function(t){return e.updateProfile(t)}}),c(!0)}))}),[]),Object(v.jsx)(v.Fragment,{children:n?Object(v.jsx)(U,{refreshUser:function(){var e=O.currentUser;o({uid:e.uid,displayName:e.displayName,updateProfile:function(t){return e.updateProfile(t)}})},isLoggedIn:Boolean(u),userObj:u}):"initializing..."})};n(50);s.a.render(Object(v.jsx)(c.a.StrictMode,{children:Object(v.jsx)(B,{})}),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.651bd890.chunk.js.map