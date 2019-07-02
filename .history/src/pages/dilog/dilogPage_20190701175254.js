import Taro,{ Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

class Dilogpage extends Component {

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