import Taro,{ Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

class Dilogpage extends Component {
    render(){

        return(
            <View>
                {
                    this.chilren
                }
            </View>
        )
    }
}

export default Dilogpage;