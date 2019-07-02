import Taro,{ Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './listIndex.less'

class List extends Component {


    cl(){
        Taro.navigateTo({
            　　url:'pages/list/list?id=2'
            })
    }

    render(){
        return(
            <View>
                <Text onClick={this.cl().bind(this)}>列表页</Text>
            </View>
        )
    }

}

export default List;