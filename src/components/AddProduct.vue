<template>
<div>
    <el-form ref="form" :model="form" label-width="200px" :rules="rules">
  <el-form-item label="商品的名称" prop="goods_name">
    <el-input v-model="form.goods_name"></el-input>
  </el-form-item>
  <el-form-item label="商品种类名称" prop="goods_type">
    <el-input v-model="form.goods_type"></el-input>
  </el-form-item>
  <el-form-item label="商品介绍信息">
    <el-input v-model="form.goods_descript"></el-input>
  </el-form-item>
  <el-form-item label="商品价格" prop="sell_price">
    <el-input v-model="form.sell_price"></el-input>
  </el-form-item>
  <el-form-item label="购买数量" prop="nums">
    <el-input v-model="form.nums"></el-input>
  </el-form-item>
  <el-form-item label="商品剩余库存" prop="goods_stock">
    <el-input v-model="form.goods_stock"></el-input>
  </el-form-item>
  <el-form-item label="销售数量" prop="sell_count">
    <el-input v-model="form.sell_count"></el-input>
  </el-form-item>
  <!--  上传图片-->

   <!-- <el-form-item label="">
    
<el-upload
  class="upload-demo"
  action="http://localhost/mall-table/images"
  :on-change="handleChange"
  :file-list="goods_pic">
  <el-button size="small" type="primary" plain>上传商品图片</el-button>
</el-upload>  
</el-form-item> -->
   
  <el-form-item >
   
    <el-button type="primary" @click="addProduct">立即添加</el-button>
    <el-button type="danger">取消</el-button>
  </el-form-item>
</el-form>
</div>
</template>
<script>
  export default {
    data() {
      return {
        form: {
          goods_name: '',
          goods_type: '',
          goods_descript: '',
          sell_price: '',
          nums: '',
          goods_stock: '',
          sell_count: '',
         goods_pic: []
        },
        rules:{
          goods_name:[
            {required:true,message:"请输入商品名称"}
          ],
           goods_type:[
            {required:true,message:"请输入商品类型"}
          ],
          sell_price:[
            {required:true,message:"请输入商品价格"}
          ],
          nums:[
            {required:true,message:"请输入商品数量"}
          ],
           goods_stock:[
            {required:true,message:"请输入商品库存"}
          ],
          sell_count:[
            {required:true,message:"请输入商品销售量"}
          ],
        }
      }
    },
    methods: {
      handleChange(file, fileList) {
        console.log(this.file);
      },
       //添加商品
    addProduct(){
      let _this = this;
     // this.$router.push({name:'HelloWorld'})
    _this.axios.post("http://localhost:3000/product",{
      goods_name:_this.form.goods_name,
      sell_price:_this.form.sell_price,
      goods_type:_this.form.goods_type,
      goods_descript:_this.form.goods_descript,
      nums:_this.form.nums,
      sell_count:_this.form.sell_count,
      goods_pic:_this.form.goods_pic,
      goods_stock:_this.form.goods_stock
    })
    .then(res => {
      _this.$message({
        message:'添加成功！',
        type:'success'
      }),
      _this.$router.push({name:'HelloWorld'})
      //_this.tableData.push(res.data)
    })
    .catch(function (error) {
    console.log(error);
  });
  },
    }
  }
</script>
<style scope>

.el-input{
   width: 202px !important;
  /* width: 100%; */
}
.el-form{
  width: 100%;
  margin-top: 20%;
  margin-left: 50%;
}
</style>
