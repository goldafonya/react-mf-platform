(self.webpackChunkui_platform=self.webpackChunkui_platform||[]).push([[143],{332:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Z}});var r=n(294),i=n(832),l=n(358),c=n(318),a=n(258),o=n(252),u=function(e,t,n,r,i){Object.defineProperty(this,"id",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"title",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"description",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"url",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"component",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.id=e,this.title=t,this.description=n,this.url=r,this.component=i},m=function(){return r.createElement("div",null,r.createElement("div",null,r.createElement(o.rU,{to:"/"},"Назад")),"foo")},d=function(){return r.createElement("div",null,r.createElement("div",null,r.createElement(o.rU,{to:"/"},"Назад")),"bar")},s=function(){function e(){}return Object.defineProperty(e,"getProjectList",{enumerable:!0,configurable:!0,writable:!0,value:function(){return[new u("1","foo","description descriptiondescription descriptiondescription description","/foo",m),new u("2","bar","description descriptiondescription descriptiondescription description","/bar",d)]}}),e}(),p=function(){var e=(0,o.TH)(),t=s.getProjectList().find((function(t){return t.url===e.pathname})),n=t?t.title:"Список проектов";return r.createElement(a.Z,{position:"static"},r.createElement(l.Z,null,r.createElement(i.Z,{maxWidth:"md"},r.createElement(c.Z,{variant:"h6"},n))))},f=n(895),b=n(463),E=n(912),v=function(e){var t=e.project,n=(0,r.useState)(!1),i=n[0],l=n[1],a=(0,r.useCallback)((function(){return l(!0)}),[]),u=(0,r.useCallback)((function(){return l(!1)}),[]);return r.createElement("div",{onMouseEnter:a,onMouseLeave:u},r.createElement(o.rU,{to:t.url},r.createElement(f.Z,{elevation:i?4:1},r.createElement(b.Z,null,r.createElement(E.Z,null,r.createElement(c.Z,{gutterBottom:!0,variant:"h5",component:"h2"},t.title),r.createElement(c.Z,null,t.description),r.createElement(c.Z,null,t.url))))))},h=n(642),g=function(){return r.createElement("div",{style:{paddingTop:"12px"}},r.createElement(h.Z,{container:!0,spacing:3},s.getProjectList().map((function(e){return r.createElement(h.Z,{item:!0,key:e.id,style:{width:"100%"}},r.createElement(v,{project:e}))}))))},w=(0,o.fi)(window),Z=function(){return r.createElement(r.Fragment,null,r.createElement(o.vR,{history:w},r.createElement(p,null),r.createElement(i.Z,{maxWidth:"md"},r.createElement(o.F0,null,r.createElement(g,{default:!0,path:"/"}),s.getProjectList().map((function(e){return r.createElement(e.component,{path:e.url,key:e.url})}))))))}}}]);