import Taro,{ Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import Dilogpage from './dilogPage'

class Dilog extends Component {
    render(){

        return(
            <View>
                <Dilogpage>
                       <Text>Text</Text> 
                </Dilogpage> 
                <Dilogpage></Dilogpage> 
                <Dilogpage></Dilogpage> 
                <Dilogpage></Dilogpage>
            </View>
        )
    }
}

export default Dilog;