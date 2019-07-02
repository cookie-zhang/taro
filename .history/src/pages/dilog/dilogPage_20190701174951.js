import Taro,{ Component } from '@tarojs/taro'
import { View, Button,Text } from '@tarojs/components'

class Dilogpage extends Component {
    render(){

        return(
            <View>
                {
                  this.props.children
                }
            </View>
        )
    }
}

export default Dilogpage;