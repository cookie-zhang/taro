import Taro,{ Component } from '@tarojs/taro'
import { View, Text, Button, Image } from '@tarojs/components'
import './listIndex.less'
import img from '../img/fly.jpg'

class List extends Component {
    constructor(props){
      super(props)
      this.onCl = this.onCl.bind(this)
    }
    state={
      list:[
        {id:1,name:'列表1'},
        {id:2,name:'列表2'},
        {id:3,name:'列表2'},
        {id:4,name:'列表3'},
        {id:5,name:'列表4'},
        {id:6,name:'列表5'},
        {id:7,name:'列表6'},
        {id:8,name:'列表7'},
      ]  
    }
    config={
      navigationBarTitleText:'列表页面',
    }
    onCl(){
        Taro.navigateTo({
          url: '/pages/index/index?id=list'
        })
      }

    render(){
      let { list } = this.state
      console.log(list)
        return(
            <View>
                <Text>列表页</Text>
                <Image className='img' src={img}></Image>
                {
                  // list.map((item,index)=>{
                  //   return (
                  //     <Text key={index}> {item.name} </Text>
                  //   )
                  // })
                }
                <Button onClick={this.onCl}>跳转到列首页</Button>
            </View>
        )
    }
}

export default List;