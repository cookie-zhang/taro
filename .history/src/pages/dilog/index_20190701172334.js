import Taro,{ Component } from '@tarojs/taro'
import { View, Text, Button, Image } from '@tarojs/components'

class List extends Component {
    constructor(props){
      super(props)
      this.onCl = this.onCl.bind(this)
    }

    config={
      navigationBarTitleText:'dilog',
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