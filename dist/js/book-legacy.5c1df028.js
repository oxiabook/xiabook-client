"use strict";(self["webpackChunkbook_client"]=self["webpackChunkbook_client"]||[]).push([[112],{7790:function(e,t,n){n.r(t),n.d(t,{default:function(){return x}});var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"content",staticStyle:{padding:"30px 45px"}},[n("router-link",{attrs:{to:{name:"home"}}},[e._v(" 首页 ")]),n("p",{attrs:{slot:"title"},slot:"title"},[n("Icon",{attrs:{type:"ios-film-outline"},on:{click:e.reQueryBook}}),e._v(" "+e._s(e.bookName)+" ")],1),0==e.chapters.length?n("p",[e._v("章节爬取中")]):e._e(),n("ul",e._l(e.chapters,(function(t){return n("li",{key:t.indexId},[n("router-link",{attrs:{to:{name:"read",query:{indexId:t.indexId,bookName:t.bookName}}}},[e._v(" "+e._s(t.title)+" ")])],1)})),0)],1)},o=[],i=n(6198),a=n(6133),c=n(2751),u=n(3263),s=n(796),l=n(3855),f=n(3796),p=n(9726),h=(n(8975),n(5003),n(1539),n(1299),n(2222),n(8309),n(8862),n(8935)),d=n(7310),k=n(7062),m=function(e,t,n,r){var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===("undefined"===typeof Reflect?"undefined":(0,p.Z)(Reflect))&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},y=function(e){(0,s.Z)(n,e);var t=(0,l.Z)(n);function n(){var e;(0,a.Z)(this,n);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return e=t.call.apply(t,[this].concat(o)),(0,f.Z)((0,u.Z)(e),"bookName","Hello!"),(0,f.Z)((0,u.Z)(e),"searchType","搜书"),(0,f.Z)((0,u.Z)(e),"searchBookName",""),(0,f.Z)((0,u.Z)(e),"chapters",[{bookName:"大奉打更人",chapterURL:"",created:"2022-04-11T17:54:48.000Z",description:"",id:13,indexId:13,isFetched:0,isValid:0,siteKey:"QD",title:"第十三章 审问",updated:"2022-04-11T17:54:48.000Z"}]),(0,f.Z)((0,u.Z)(e),"bookEntity",{}),e}return(0,c.Z)(n,[{key:"mounted",value:function(){var e=(0,i.Z)(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(console.log("bookhome mounted"),t=this.$route.query.name,this.bookName=t,!t){e.next=10;break}return e.next=6,k.Z.initBookHome(t);case 6:n=e.sent,this.chapters=n.bookChapters,this.bookEntity=n.bookEntity,console.log("".concat(JSON.stringify(n)));case 10:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"reQueryBook",value:function(){var e=(0,i.Z)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,k.Z.reQueryBook(this.bookName);case 2:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}]),n}(h["default"]);y=m([d.ZP],y);var Z=y,b=Z,v=n(1001),g=(0,v.Z)(b,r,o,!1,null,null,null),x=g.exports}}]);
//# sourceMappingURL=book-legacy.5c1df028.js.map