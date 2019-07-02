import Taro,{ Component } from '@tarojs/taro'
import { View, Text, Button, Image } from '@tarojs/components'

class List extends Component {
    constructor(props){
      super(props)
      this.onCl = this.onCl.bind(this)
    }

    config={
      navigationBarTitleText:'dilog',
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
                  list.map((item,index)=>{
                    return (
                      <View key={index}>
                        <Text> {item.name} </Text>
                      </View>
                    )
                  })
                }
                <Button onClick={this.onCl}>跳转到列首页</Button>
            </View>
        )
    }
}

export default List;