<template>
    <div id="comment">
     <el-card class="box-card">
      <div slot="header" class="clearfix">
      <span style="font-size:20px;font-weight:bolder">用户评价</span>
      <el-button type="danger" icon="el-icon-delete" style="float: right; " circle></el-button>
      <!-- <el-button  type="text" class="text item">删除</el-button> -->
      </div>
      <div class="text item">
        <el-table
      :data="tableData"
      style="width: 100%">
       <el-table-column
      type="selection"
      width="55">
    </el-table-column>
      <el-table-column
        prop="user_id"
        label="用户id"
        width="180">
      </el-table-column>
      <el-table-column
        prop="goods_name"
        label="商品"
        width="180">
      </el-table-column>
      <el-table-column
        prop="remark_content"
        label="评论内容">
      </el-table-column>
      <el-table-column
        label="评论星级"
        prop="remark_star"
        >
        <template slot-scope="scope">
          <el-rate v-model="value[scope.$index]"></el-rate>
        </template>
        <!-- <el-rate prop="remark_star"></el-rate> -->
      </el-table-column>
       <el-table-column
        label="操作"
        width="100"
        >
       <template slot-scope="scope">
        <el-button type="text" size="small" @click.native.prevent="deleteProduct(scope.$index, tableData)">删除</el-button>
      </template>
       </el-table-column>
    </el-table>
    </div>
  
</el-card>
 </div>
</template>

<script>
export default {
  
  data() {
    return {
      tableData:[],
      value:[
        
      ],
      count:0
    }
    
  },
  created() {
    let _this=this;
     _this.axios.get("http://localhost:3000/remark")
    .then(res => {
      _this.tableData = res.data;
      for(var i=0;i<_this.tableData.length;i++){
        _this.value[i]=parseInt(_this.tableData[i].remark_star) 
      } 
      console.log(res.data);
    })
  },
  methods: {
     //删除商品
  deleteProduct(index, rows){
     let _this = this;
     this.tableData.splice(index,1)
    // var s=JSON.stringify(rows)
     //alert(s)
     //alert(rows[index])
  //     _this.axios.get("http://localhost:3000/product")
  //   .then(res => {
  //     //_this.tableData.splice(index,1)
      
  //     //alert( JSON.stringify(res.data[index]))
  //     //delete res.data
  //    // res.data.splice(index,1)
  //     //delete res.data[index]
  //     //var s=JSON.stringify(res.data)
  //    // alert(s);
  //   })
  //   .catch(function (error) {
  //   console.log(error);
  // });
  }
  },
}
</script>

<style scope>
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 1000px;
  }
  .el-button--mini, .el-button--small{
  font-size: 14px;
  font-weight: bold
}
</style>