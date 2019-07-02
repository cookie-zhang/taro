import Taro, {Component}  from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'

class Envet extends Component  {
    constructor(){
        super(arguments)
        // this.handleClick = this.handleClick.bind(this)
    }
    state={
        name: '张三'
    }
    handleClick(test,test,e){
        e.stopPropagation()
        console.log(name,test,e)
    }
    render(){
        return (
            <View>
                <Text>事件处理</Text>
                <Button onClick={this.handleClick.bind(this,this.state.name,'test')}>点击事件</Button>
            </View>

        )
    }
}
export default Envet