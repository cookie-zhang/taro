import Taro,{ Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './listIndex.less'

class List extends Component {
    constructor(props){
        super(props)
        this.onCl = this.onCl.bind(this)
      }
    onCl(){
        Taro.redirectTo({
          url: '/pages/list/listIndex'
        })
      }

    render(){
        return(
            <View>
                <Text >列表页</Text>
            </View>
        )
    }
}

export default List;