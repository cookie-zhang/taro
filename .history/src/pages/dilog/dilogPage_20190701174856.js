import Taro,{ Component } from '@tarojs/taro'
import { View, Button } from '@tarojs/components'

class Dilogpage extends Component {
    render(){

        return(
            <View>
                <Button>子组件自带内容</Button>
                {
                  this.props.children
                }
            </View>
        )
    }
}

export default Dilogpage;