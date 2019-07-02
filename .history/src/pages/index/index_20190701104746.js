import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.less'
import Child from './child.js'

export default class Index extends Component {

    constructor(props){
      super(props)
      this.onCl = this.onCl.bind(this)
    }
  //不管是config 还是state 都可以在dom结构上用this获取到  
  //但是为什么用state  不去自己定义呢   因为state 可以去用setState去设置某些值
  //在生命周期中 也是只对state状态进行管理  对于其他自定义是没有用的 
  config = {
    navigationBarTitleText: '首页'
  }
  state = {
    name: '张三' 
  }

  componentWillMount () {
    // render函数渲染前执行一次
   }

  componentDidMount () { 
    this.setState({
      name:'李四'
    })
    // render函数运行完执行一次 
  }

  componentWillUnmount () {
    // 组件销毁前执行一次
   }

  componentDidShow () {
    // react中不存在这个生命周期   为了适应小程序二在taro中加的
    // 组件展示前执行
   }

  componentDidHide () { 
     // 组件展示隐藏前执行
  }
  //自定义函数
  onTest(){
    console.log('自定义函数，将函数传递到子组件去执行')
  }

  onCl(){
    debugger
    Taro.navigateTo({
    　　url:'pages/list/listIndex?id=2'
    })
}

  render () {
    let obj = {key:[{name:'里斯'}]}
    return (
      <View className='index'>
        <Text onClick={this.onCl}>{this.state.name}</Text>
        <Child name={this.state.name} obj={obj} onTest={this.onTest}></Child>
      </View>
    )
  }
}
