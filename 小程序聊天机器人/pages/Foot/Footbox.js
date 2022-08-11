Component({
  data:{
    inputData:'',
    isshow:false
  },
  methods:{
    test1(e){
      //  一般上升三百高度
        console.log(e)
        console.log(e.detail)
    },
    getDataInput(e){
      const data = e.detail.value
      this.setData({
        inputData:e.detail.value
      })
    },
    getData(){
        if(this.data.inputData.trim()==0) return
        this.triggerEvent("sendData",this.data.inputData)
        this.setData({
          inputData:''
        })
    },
    




  },
  
})





// Page({

//   /**
//    * 页面的初始数据
//    */
//   data: {
//       show:false,
//       inputData:'',
//       userData:[],
//       robotData:[],
//   },

//   /**
//    * 生命周期函数--监听页面加载
//    */
//   onLoad(options) {
    
//   },
//   sendInfo() {
//     if(this.data.inputData.trim()==0) return
//       // 键盘不收起
//       this.setData({
//         show:false
//       })
//       //  用于判断数据
//       const data = {
//         type:1,
//         info:this.data.inputData
//       }
//        // 添加到本地储存
//       this.data.userData.push(data)
//       wx.setStorage({
//         key:'user',
//         data:this.data.userData
//       })
//       //  传入文本输入框的值
//       this.getRobotData(this.data.inputData)
//       // 清空输入框
//       this.setData({
//         inputData:''
//       })
//   },
//   getRobotData(value){
//     wx.request({
//       url: `http://www.liulongbin.top:3006/api/robot?spoken=${value}`,
//       success:(res)=>{
//         // console.log(this)
//           console.log(res.data.data.info.text)
//           const data = {
//             type:'robot',
//             info:res.data.data.info.text
//           }
//           this.data.userData.push(data)
//           wx.setStorage({
//             key:'user',
//             data: this.data.userData
//           })
//       },
//     })
   
    


//   },
//   getData(e){
//     //  获取当前输入值 发送数据
//     this.setData({
//       inputData :e.detail.value
//     })
//   },




//   /**
//    * 生命周期函数--监听页面初次渲染完成
//    */
//   onReady() {

//   },

//   /**
//    * 生命周期函数--监听页面显示
//    */
//   onShow() {

//   },

//   /**
//    * 生命周期函数--监听页面隐藏
//    */
//   onHide() {

//   },

//   /**
//    * 生命周期函数--监听页面卸载
//    */
//   onUnload() {

//   },

//   /**
//    * 页面相关事件处理函数--监听用户下拉动作
//    */
//   onPullDownRefresh() {

//   },

//   /**
//    * 页面上拉触底事件的处理函数
//    */
//   onReachBottom() {

//   },

//   /**
//    * 用户点击右上角分享
//    */
//   onShareAppMessage() {

//   }
// })