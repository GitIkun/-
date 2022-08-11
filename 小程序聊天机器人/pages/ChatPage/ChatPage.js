Component({
  data:{
    userData:[
        {
          type:"robot",
          info:"开始聊天吧~"
        }
    ],
  },
  methods:{
    getData(val){
     // console.log("接收数据",val.detail)
      const arr = this.data.userData
      arr.push({
        type:"user",
        info:val.detail
      })
      // 输入词添加进数组
      this.setData({
          userData:arr
      })
      wx.pageScrollTo({
        duration: 0.01,
        scrollTop:999999,
      })
      // 发送网络请求
      if(val.detail=="朱广明"){
        const arr = this.data.userData
        arr.push({
          type:"robot",
          info:"纯纯傻比"
        })
          this.setData({
            userData:arr
          })
      }
       else if(val.detail=="唐仁鹏" || val.detail == "蓝白" ){
        const arr = this.data.userData
        arr.push({
          type:"robot",
          info:"唐仁鹏:聊天机器人开发者!"
        })
          this.setData({
            userData:arr
          })
      }
      else{
        this.requestData(val.detail)
      }

     
    },

    // 请求网络数据发送
    requestData(val){
      wx.request({
        url: `https://api.ownthink.com/bot?appid=xiaosi&userid=user&spoken=${val}`,
        header: {  
          'content-type': 'application/x-www-form-urlencoded'  
          }, 
        success:(res)=>{
          //console.log(res.data.data.info.text)
          const arr = this.data.userData
          arr.push({
            type:"robot",
            info:res.data.data.info.text
          })
          this.setData({
            userData:arr
          })
          wx.pageScrollTo({
            duration: 0.01,
            scrollTop:999999,
          })



        }
      })
     
    },
  },
})


