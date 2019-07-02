import Taro,{ Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './listIndex.less'

class List extends Component {
    onCl(){
        Taro.redirectTo({
          url: '/pages/list/listIndex'
        })
      }

    render(){
        return(
            <View>
                <Text>列表页</Text>
            </View>
        )
    }
}

export default List;