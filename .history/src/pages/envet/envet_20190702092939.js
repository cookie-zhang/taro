import Taro, {Component}  from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'

class Envet extends Component  {
    constructor(){
        super(arguments)
    }
    handleClick(){

    }
    render(){
        return (
            <View>
                <Text>事件处理</Text>
                <Button>点击事件</Button>
            </View>

        )
    }
}
export default Envet