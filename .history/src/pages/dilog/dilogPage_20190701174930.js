import Taro,{ Component } from '@tarojs/taro'
import { View, Button,Text } from '@tarojs/components'

class Dilogpage extends Component {
    render(){

        return(
            <View>
                <Text>子组件自带内容</Text>
                <Button>子组件自带内容</Button>
                {
                  this.props.children
                }
            </View>
        )
    }
}

export default Dilogpage;