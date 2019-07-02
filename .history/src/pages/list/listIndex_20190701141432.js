import Taro,{ Component } from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'
import './listIndex.less'

class List extends Component {
    constructor(props){
        super(props)
        this.onCl = this.onCl.bind(this)
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
                <Button onClick={this.onCl}></Button>
            </View>
        )
    }
}

export default List;