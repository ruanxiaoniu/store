<template>
  
  <div class="hello">
    <div id="operate">
      <el-select v-model="val3" placeholder="请选择搜索条件" >
      <el-option v-for="item in options" :label="item.value" :value="item.key" :key="item.key">
      </el-option>
  </el-select>
  <el-input
  placeholder="请输入关键字"
  v-model="input"
  clearable>
  </el-input>
  <el-button type="primary" icon="el-icon-search">查询</el-button>
  <router-link to="/addProduct" class="add" >添加商品信息</router-link>
  <el-button type="danger" icon="el-icon-delete">删除</el-button>
    </div >
      <el-table
      :data="tableData"
      stripe
      style="width:100%,fit:true"
      border
      >
      <el-table-column
      type="selection"
      width="50">
    </el-table-column>
      <el-table-column
        prop="goods_name"
        label="商品名"
        width="80" >
      </el-table-column>
      <el-table-column
        prop="goods_type"
        label="商品总类名称"
        width="150" >
      </el-table-column>
      <el-table-column
        prop="goods_descript"
        label="商品介绍信息"
        width="200">
      </el-table-column>
          <el-table-column
        prop="sell_price"
        label="价格"
        width="50"
        >
      </el-table-column>
     
      <el-table-column
        prop="nums"
        label="购买数量"
        width="100" >
      </el-table-column>
      <el-table-column
        prop="goods_stock"
        label="商品剩余库存"
        width="110" >
      </el-table-column>
      <el-table-column
        prop="sell_count"
        label="销售数量"
        width="80" >
      </el-table-column>
      <el-table-column
        prop="goods_pic"
        label="商品图片存放路径"
        width="200" >
      </el-table-column>
    
       <el-table-column
      
      label="操作"
      width="100">

      <template slot-scope="scope">
        <el-button  type="text" size="small">编辑</el-button>
        <el-button type="text" size="small" @click.native.prevent="deleteProduct(scope.$index, tableData)">删除</el-button>
      </template>

    </el-table-column>
    </el-table>


  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      tableData: [],
     options: [
     {key: "选项一", value: "商品名"},
      {key: "选项二", value: "商品总类名称"},
    ],
    val3: [],
      name: '',
      price: '',
      input:'',
    }
  },
  created(){
    let _this = this;
    _this.axios.get("http://localhost:3000/product")
    .then(res => {
      _this.tableData = res.data;
      console.log(res.log)
    })
  },
  methods:{
  //删除商品
  deleteProduct(index, rows){
     let _this = this;
      _this.axios.delete("http://localhost:3000/product/"+rows[index].id)
    .then(res => {
      _this.tableData.splice(index,1)
      console.log(res.data)
     
    })
    .catch(function (error) {
    console.log(error);
  });
  }
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  scope>

.el-table{
  position: unset;
  font-size: 14px;
}

.el-button--mini, .el-button--small{
  font-size: 14px;
  font-weight: bold
}
#operate{
  padding-bottom: 20px;
}

.el-input{
  width: 150px !important;
  margin-left: 50px;
}
.el-button--danger{
     margin-left: 15%
}
.el-button--primary{
  margin-left: 10px;
}

</style>
