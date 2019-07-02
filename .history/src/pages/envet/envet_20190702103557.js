import Taro, {Component}  from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'

//taro h5  尽量使用flex布局  兼容好到
//判断当前开发环境
const isH5 = process.env.TARO_ENV == 'h5'

class Envet extends Component  {
    constructor(){
        super(arguments)
        // this.handleClick = this.handleClick.bind(this)
    }
    state={
        name: '张三'
    }
    handleClick(test,name,e){
        e.stopPropagation()
        console.log(test,name,e)
    }
    componentDidMount(){
        console.log(isH5)
    }
    render(){
        return (
            <View>
                <Text>事件处理</Text>
                <Button onClick={this.handleClick.bind(this,this.state.name,'test1')}>点击事件</Button>
            </View>

        )
    }
}
export default Envet