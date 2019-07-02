import Taro,{ Component } from '@tarojs/taro'
import { View, Text, Button, Image } from '@tarojs/components'
import './listIndex.less'
import img from '../img/fly.jpg'

class List extends Component {
    constructor(props){
      super(props)
      this.onCl = this.onCl.bind(this)
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
        return(
            <View>
                <Text>列表页</Text>
                <Image className='img' src={img}></Image>
                <Button onClick={this.onCl}>跳转到列首页</Button>
            </View>
        )
    }
}

export default List;