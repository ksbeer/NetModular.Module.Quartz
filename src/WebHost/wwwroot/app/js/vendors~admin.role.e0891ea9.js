(window.webpackJsonp=window.webpackJsonp||[]).push([["vendors~admin.role"],{"0d84":function(e,t,n){"use strict";n.r(t);var i=n("c239"),r=[{name:"id",label:"编号",show:!1,width:240},{name:"name",label:"名称",width:150},{name:"remarks",label:"备注"},{name:"creator",label:"创建人",width:100,show:!1},{name:"createdTime",label:"创建时间",width:150,show:!1}],o=n("3ee3"),s=$api.admin.role,u={mixins:[o.b.dialog],data:function(){return{form:{title:"添加角色",icon:"add",width:"30%",action:s.add,model:{name:"",remarks:""},rules:{name:[{required:!0,message:"请输入名称",trigger:"blur"}]}},on:{success:this.onSuccess,open:this.onOpen}}},methods:{onSuccess:function(){this.$emit("success")},onOpen:function(){var e=this;this.$nextTick(function(){e.$refs.form.reset()})}}},c=n("2877"),a=Object(c.a)(u,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nm-form-dialog",t._g(t._b({ref:"form",attrs:{visible:t.visible_},on:{"update:visible":function(e){t.visible_=e}}},"nm-form-dialog",t.form,!1),t.on),[n("el-row",[n("el-col",{attrs:{span:20,offset:1}},[n("el-form-item",{attrs:{label:"名称：",prop:"name"}},[n("el-input",{model:{value:t.form.model.name,callback:function(e){t.$set(t.form.model,"name",e)},expression:"form.model.name"}})],1),n("el-form-item",{attrs:{label:"备注：",prop:"remarks"}},[n("el-input",{attrs:{type:"textarea"},model:{value:t.form.model.remarks,callback:function(e){t.$set(t.form.model,"remarks",e)},expression:"form.model.remarks"}})],1)],1)],1)],1)},[],!1,null,null,null).exports,l=$api.admin.role,d={mixins:[o.b.formDialogEdit],data:function(){return{api:l,form:{title:"编辑角色",icon:"edit",width:"30%",action:l.update,model:{id:"",name:"",remarks:""},rules:{name:[{required:!0,message:"请输入名称",trigger:"blur"}]},loading:!1}}}},h=Object(c.a)(d,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nm-form-dialog",t._g(t._b({ref:"form",attrs:{visible:t.visible_},on:{"update:visible":function(e){t.visible_=e}}},"nm-form-dialog",t.form,!1),t.on),[n("el-row",[n("el-col",{attrs:{span:20,offset:1}},[n("el-form-item",{attrs:{label:"名称：",prop:"name"}},[n("el-input",{model:{value:t.form.model.name,callback:function(e){t.$set(t.form.model,"name",e)},expression:"form.model.name"}})],1),n("el-form-item",{attrs:{label:"备注：",prop:"remarks"}},[n("el-input",{attrs:{type:"textarea"},model:{value:t.form.model.remarks,callback:function(e){t.$set(t.form.model,"remarks",e)},expression:"form.model.remarks"}})],1)],1)],1)],1)},[],!1,null,null,null).exports,m=n("a34a"),f=n.n(m),p={components:{MenuTree:n("1264").a},mixins:[o.b.dialog],data:function(){return{split:.3,menuId:"",currentMenu:{},checkedKeys:[],buttons:[],checkAll:!1,isIndeterminate:!1,buttonChecked:[],treeOn:{check:this.onTreeCheck,"select-change":this.onTreeSelectChange,"check-change":this.onTreeCheckChange}}},props:{id:{type:String,required:!0},menuQueryAction:{type:Function,required:!0},menuUpdateAction:{type:Function,required:!0},buttonQueryAction:{type:Function,required:!0},buttonUpdateAction:{type:Function,required:!0}},computed:{menuTree:function(){return{"show-checkbox":!0,"checked-keys":this.checkedKeys}},showButtonBox:function(){return this.menuId&&0<this.buttons.length},isMenuChecked:function(){return this.menuId&&this.currentMenu&&this.currentMenu.checked}},methods:{queryMenus:function(){var t=this;this.menuQueryAction().then(function(e){t.checkedKeys=e,t.queryButtons()})},queryButtons:function(){var t=this;this.buttons=[],this.buttonChecked=[],this.menuId&&this.buttonQueryAction(this.menuId).then(function(e){t.buttons=e,t.buttons.map(function(e){e.checked&&t.buttonChecked.push(e.id)}),t.onButtonCheckedChange(t.buttonChecked)})},onTreeCheck:function(e){this.menuUpdateAction(e.map(function(e){return e.id}))},onTreeCheckChange:function(e,t){e.menu.id===this.menuId&&(this.currentMenu.checked=t)},onTreeSelectChange:function(e){this.currentMenu=e,this.queryButtons()},onButtonCheckAllChange:function(e){this.buttonChecked=e?this.buttons.map(function(e){return e.id}):[],this.isIndeterminate=!1,this.buttonUpdateAction({menuId:this.currentMenu.id,checked:this.checkAll})},onButtonCheckedChange:function(e){var t=e.length;this.checkAll=t===this.buttons.length,this.isIndeterminate=0<t&&t<this.buttons.length},onButtonChange:function(e,t){this.buttonUpdateAction({menuId:this.currentMenu.id,buttonId:e,checked:t})}},created:function(){this.id&&this.queryMenus()},watch:{id:function(){this.id&&this.queryMenus()}}},b=Object(c.a)(p,function(){var n=this,e=n.$createElement,i=n._self._c||e;return i("nm-split",{scopedSlots:n._u([{key:"left",fn:function(){return[i("nm-box",{attrs:{page:"",header:"",title:"菜单树",type:"success",icon:"menu",toolbar:null}},[i("menu-tree",n._g(n._b({ref:"tree",model:{value:n.menuId,callback:function(e){n.menuId=e},expression:"menuId"}},"menu-tree",n.menuTree,!1),n.treeOn))],1)]},proxy:!0},{key:"right",fn:function(){return[i("nm-box",{attrs:{page:"",header:"",title:"按钮设置",icon:"system"}},[n.showButtonBox?[i("el-checkbox",{attrs:{indeterminate:n.isIndeterminate,disabled:!n.isMenuChecked},on:{change:n.onButtonCheckAllChange},model:{value:n.checkAll,callback:function(e){n.checkAll=e},expression:"checkAll"}},[n._v("全选")]),i("el-divider"),i("el-checkbox-group",{attrs:{disabled:!n.isMenuChecked},on:{change:n.onButtonCheckedChange},model:{value:n.buttonChecked,callback:function(e){n.buttonChecked=e},expression:"buttonChecked"}},n._l(n.buttons,function(t){return i("el-checkbox",{key:t.id,attrs:{label:t.id,border:""},on:{change:function(e){return n.onButtonChange(t.id,e)}}},[n._v(n._s(t.name))])}),1)]:n._e()],2)]},proxy:!0}]),model:{value:n.split,callback:function(e){n.split=e},expression:"split"}})},[],!1,null,null,null).exports;function g(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,i)}return n}function k(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function v(e,t,n,i,r,o,s){try{var u=e[o](s),c=u.value}catch(e){return void n(e)}u.done?t(c):Promise.resolve(c).then(i,r)}function y(u){return function(){var e=this,s=arguments;return new Promise(function(t,n){var i=u.apply(e,s);function r(e){v(i,t,n,r,o,"next",e)}function o(e){v(i,t,n,r,o,"throw",e)}r(void 0)})}}var C,w,x,O=$api.admin.role,_={components:{MenuBind:b},mixins:[o.b.dialog],data:function(){return{loading:!1}},props:{id:{type:String,required:!0}},methods:{menuQueryAction:(x=y(f.a.mark(function e(){var t;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],this.loading=!0,e.next=4,O.menuList(this.id);case 4:return e.sent.map(function(e){0!==e.menuType&&t.push(e.menuId)}),this.loading=!1,e.abrupt("return",t);case 8:case"end":return e.stop()}},e,this)})),function(){return x.apply(this,arguments)}),menuUpdateAction:(w=y(f.a.mark(function e(t){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.loading=!0,e.next=3,O.bindMenu({id:this.id,menus:t});case 3:this.loading=!1;case 4:case"end":return e.stop()}},e,this)})),function(e){return w.apply(this,arguments)}),buttonQueryAction:(C=y(f.a.mark(function e(t){var n;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.loading=!0,e.next=3,O.menuButtonList({id:this.id,menuId:t});case 3:return n=e.sent,this.loading=!1,e.abrupt("return",n);case 6:case"end":return e.stop()}},e,this)})),function(e){return C.apply(this,arguments)}),buttonUpdateAction:function(e){this.loading=!0,O.bindMenuButton(function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?g(n,!0).forEach(function(e){k(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):g(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}({roleId:this.id},e)),this.loading=!1}}},$=Object(c.a)(_,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nm-dialog",{attrs:{"no-scrollbar":"",width:"70%",height:"70%",title:"绑定菜单",icon:"bind",visible:t.visible_,loading:t.loading},on:{"update:visible":function(e){t.visible_=e}}},[n("menu-bind",{attrs:{id:t.id,"menu-query-action":t.menuQueryAction,"menu-update-action":t.menuUpdateAction,"button-query-action":t.buttonQueryAction,"button-update-action":t.buttonUpdateAction}})],1)},[],!1,null,null,null).exports,M=$api.admin.role,P={name:i.default.name,components:{AddPage:a,EditPage:h,BindMenuPage:$},data:function(){return{list:{title:i.default.title,cols:r,action:M.query,model:{name:""}},addPage:{visible:!1},editDialog:{visible:!1,id:""},bindMenuDialog:{visible:!1,id:""},removeAction:M.remove,buttons:i.default.buttons}},methods:{refresh:function(){this.$refs.list.refresh()},edit:function(e){this.editDialog={id:e.id,visible:!0}},bindMenu:function(e){this.bindMenuDialog={id:e.id,visible:!0}}}},A=Object(c.a)(P,function(){var n=this,e=n.$createElement,i=n._self._c||e;return i("nm-container",[i("nm-list",n._b({ref:"list",scopedSlots:n._u([{key:"querybar",fn:function(){return[i("el-form-item",{attrs:{label:"名称：",prop:"name"}},[i("el-input",{attrs:{clearable:""},model:{value:n.list.model.name,callback:function(e){n.$set(n.list.model,"name",e)},expression:"list.model.name"}})],1)]},proxy:!0},{key:"querybar-buttons",fn:function(){return[i("nm-button-has",{attrs:{options:n.buttons.add},on:{click:function(e){n.addPage.visible=!0}}})]},proxy:!0},{key:"col-name",fn:function(e){var t=e.row;return[t.isSpecified?i("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"指定角色",placement:"top"}},[i("div",[i("nm-icon",{staticClass:"nm-text-warning",staticStyle:{"font-size":"25px"},attrs:{name:"star-fill"}}),i("span",[n._v(n._s(t.name))])],1)]):i("span",[n._v(n._s(t.name))])]}},{key:"col-operation",fn:function(e){var t=e.row;return[i("nm-button-has",{attrs:{options:n.buttons.edit,disabled:t.isSpecified},on:{click:function(e){return n.edit(t)}}}),i("nm-button-has",{attrs:{options:n.buttons.bindMenu},on:{click:function(e){return n.bindMenu(t)}}}),i("nm-button-delete",{attrs:{options:n.buttons.del,action:n.removeAction,id:t.id,disabled:t.isSpecified},on:{success:n.refresh}})]}}])},"nm-list",n.list,!1)),i("add-page",{attrs:{visible:n.addPage.visible},on:{"update:visible":function(e){return n.$set(n.addPage,"visible",e)},success:n.refresh}}),i("edit-page",{attrs:{id:n.editDialog.id,visible:n.editDialog.visible},on:{"update:visible":function(e){return n.$set(n.editDialog,"visible",e)},success:n.refresh}}),i("bind-menu-page",{attrs:{id:n.bindMenuDialog.id,visible:n.bindMenuDialog.visible},on:{"update:visible":function(e){return n.$set(n.bindMenuDialog,"visible",e)}}})],1)},[],!1,null,null,null);t.default=A.exports},1264:function(e,t,n){"use strict";var i=n("2f62");function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,i)}return n}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var s={data:function(){return{tree:[],menus:[],current:{id:this.value||"",checked:!1,menu:null,node:null,path:""}}},props:{value:String,showCheckbox:Boolean,showIcon:{type:Boolean,default:!0},checkedKeys:Array,pathSeparator:{type:String,default:"/"}},computed:function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(n,!0).forEach(function(e){o(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}({},Object(i.e)("app/system",{systemTitle:"title"}),{rootMenu:function(){return{id:"",label:this.systemTitle,children:[],menu:{id:"",name:this.systemTitle,icon:"system"}}}}),methods:{refresh:function(){var t=this;$api.admin.menu.getTree().then(function(e){t.rootMenu.children=t.menus2Tree(e),t.tree=[t.rootMenu],t.setCheckedKeys(),t.setCurrentKey()})},menus2Tree:function(e){var n=this,i=[];return 0<e.length&&e.map(function(e){e.icon=e.icon||"list";var t={id:e.id,label:e.name,menu:e};n.menus.push(e),0===e.type&&(t.children=n.menus2Tree(e.children)),i.push(t)}),i},setCurrentKey:function(e){var t=this;this.$nextTick(function(){t.$refs.tree.setCurrentKey(e||t.current.id)})},setCheckedKeys:function(){var e=this;this.checkedKeys&&this.$nextTick(function(){e.$refs.tree.setCheckedKeys(e.checkedKeys)})},onSelectChange:function(e,t){if(!this.current.id||e.menu.id!==this.current.id){this.current.id=e.menu.id,this.current.menu=e.menu;var n=this.getFullPath(t);n=n?n.substring(0,n.length-2):this.systemTitle,this.current.path=n,t&&(this.current.checked=t.checked,this.current.node=t),this.$emit("input",this.current.id),this.$emit("select-change",this.current)}},onCheck:function(e,t){var n=[];t.checkedNodes.map(function(e){e.menu.id&&n.push(e.menu)}),t.halfCheckedNodes.map(function(e){e.menu.id&&n.push(e.menu)}),this.$emit("check",n)},onCheckChange:function(e,t,n){this.$emit("check-change",e,t,n)},getFullPath:function(e,t){return t=t||"",e&&void 0!==e.key&&(t="".concat(e.label," ").concat(this.pathSeparator," ").concat(t),t=this.getFullPath(e.parent,t)),t}},mounted:function(){this.refresh(),this.onSelectChange(this.rootMenu,this.current.node)},watch:{checkedKeys:function(){this.setCheckedKeys()}}},u=(n("a202"),n("2877")),c=Object(u.a)(s,function(){var i=this,e=i.$createElement,r=i._self._c||e;return r("el-tree",{ref:"tree",staticClass:"nm-admin-menu-tree",attrs:{"node-key":"id","default-expand-all":"","highlight-current":"",data:i.tree,"show-checkbox":i.showCheckbox,"current-node-key":this.current.id,"expand-on-click-node":!1},on:{"current-change":i.onSelectChange,check:i.onCheck,"check-change":i.onCheckChange},scopedSlots:i._u([{key:"default",fn:function(e){var t=e.node,n=e.data;return r("div",{staticClass:"nm-menu-tree-node"},[r("div",{staticClass:"nm-menu-tree-node-label"},[i.showIcon?r("nm-icon",{attrs:{name:n.menu.icon}}):i._e(),i._v("\n      "+i._s(t.label)+"\n    ")],1)])}}])})},[],!1,null,null,null);t.a=c.exports},a202:function(e,t,n){"use strict";var i=n("bc40");n.n(i).a},bc40:function(e,t,n){}}]);