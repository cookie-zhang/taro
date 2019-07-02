import Taro,{ Component } from '@tarojs/taro'
import { View,Text, Image, Button } from '@tarojs/components'
import Dilogpage from './dilogPage'

class Dilog extends Component {
    render(){

        return(
            <View>
                <Dilogpage>
                    <Text>Text展示</Text> 
                </Dilogpage> 
                <Dilogpage myImg={}>
                    <Image src={require('../img/crazy.jpg')}></Image>
                </Dilogpage> 
                <Dilogpage>
                    <Button>按钮</Button>    
                </Dilogpage> 
            </View>
        )
    }
}

export default Dilog;