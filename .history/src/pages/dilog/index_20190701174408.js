import Taro,{ Component } from '@tarojs/taro'
import { View,Text, Image } from '@tarojs/components'
import Dilogpage from './dilogPage'

class Dilog extends Component {
    render(){

        return(
            <View>
                <Dilogpage>
                    <Text>Text展示</Text> 
                </Dilogpage> 
                <Dilogpage>
                    <Image src></Image>
                </Dilogpage> 
                <Dilogpage></Dilogpage> 
                <Dilogpage></Dilogpage>
            </View>
        )
    }
}

export default Dilog;