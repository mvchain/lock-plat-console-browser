webpackJsonp([0],{"67tK":function(t,e,a){e=t.exports=a("BkJT")(!0),e.push([t.i,"","",{version:3,sources:[],names:[],mappings:"",file:"rechargeRecord.vue",sourceRoot:""}])},Gnj8:function(t,e,a){"use strict";var n=a("nO8z");e.a={name:"withDrawalsRecord",components:{"recharge-record":n.a},data:function(){return{loading:!1,pageNo:1,pageSize:10,typeId:"1"}}}},LobY:function(t,e,a){var n=a("67tK");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a("8bSs")("678ff792",n,!0)},SPf4:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("recharge-record",{attrs:{keyWord:t.$route.query.id,typeId:t.typeId}})],1)},r=[],o={render:n,staticRenderFns:r};e.a=o},dn2J:function(t,e,a){e=t.exports=a("BkJT")(!0),e.push([t.i,"","",{version:3,sources:[],names:[],mappings:"",file:"index.vue",sourceRoot:""}])},ejoG:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-table",{staticStyle:{width:"100%"},attrs:{loading:t.loading,data:t.transactionData.list}},[a("el-table-column",{attrs:{prop:"orderId",label:"单号"}}),t._v(" "),a("el-table-column",{attrs:{prop:"createdAt",label:"时间"}}),t._v(" "),a("el-table-column",{attrs:{prop:"userId",label:"用户ID"}}),t._v(" "),a("el-table-column",{attrs:{prop:"quantityStr",label:"充值金额"}}),t._v(" "),a("el-table-column",{attrs:{prop:"fromAddress",label:"转出地址"}}),t._v(" "),a("el-table-column",{attrs:{label:"状态"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(0===e.row.status?"等待":1===e.row.status?"提现中":"提现完成"))])]}}])})],1),t._v(" "),a("div",{staticClass:"pagination-style"},[a("el-pagination",{attrs:{"page-size":t.pageSize,layout:"prev, pager, next",total:t.transactionData.total},on:{"current-change":t.handleCurrentChange}})],1)],1)},r=[],o={render:n,staticRenderFns:r};e.a=o},"hb/W":function(t,e,a){var n=a("dn2J");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a("8bSs")("69223af2",n,!0)},jYpQ:function(t,e,a){"use strict";var n=a("4YfN"),r=a.n(n),o=a("9rMa");e.a={name:"rechargeRecord",props:{keyWord:Number,typeId:String},data:function(){return{loading:!1,pageNo:1,pageSize:10}},computed:r()({},Object(o.b)({transactionData:"transactionData"})),mounted:function(){this.getRecord()},methods:{handleCurrentChange:function(t){this.pageNo=t,this.getRecord()},getRecord:function(){var t=this;this.loading=!0,this.$store.dispatch("getTransactions","?pageNo="+this.pageNo+"&pageSize="+this.pageSize+"&type="+this.typeId+"&key="+this.keyWord).then(function(){t.loading=!1}).catch(function(e){t.$message.error(e)})}}}},nO8z:function(t,e,a){"use strict";function n(t){a("LobY")}var r=a("jYpQ"),o=a("ejoG"),s=a("/Xao"),i=n,c=s(r.a,o.a,!1,i,"data-v-7ff81818",null);e.a=c.exports},zvXh:function(t,e,a){"use strict";function n(t){a("hb/W")}Object.defineProperty(e,"__esModule",{value:!0});var r=a("Gnj8"),o=a("SPf4"),s=a("/Xao"),i=n,c=s(r.a,o.a,!1,i,"data-v-9efe693c",null);e.default=c.exports}});
//# sourceMappingURL=0.6a8f787ea45137858939.js.map