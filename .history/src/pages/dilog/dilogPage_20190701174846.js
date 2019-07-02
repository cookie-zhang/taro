import Taro,{ Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

class Dilogpage extends Component {
    render(){

        return(
            <View>
                <B
                {
                  this.props.children
                }
            </View>
        )
    }
}

export default Dilogpage;