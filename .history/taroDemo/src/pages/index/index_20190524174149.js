import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'

export default class Index extends Component {
  constructor () {
    super (...arguments);
    this.state = {
      title: '首页',
      list: [1,2,3,4,5,6]
    }  
  }
  config = {
    navigationBarTitleText: '首页'
  }      



  componentWillMount () { }  

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Text>Hello world!</Text>
        <View className='title'>{this.state.title}</View>
        <View className='content'>
          {this.state.list.map(item => {
            return (
              <View className='item'>{item}</View>
            )
          })}
        </View>
      </View>
      
    )
  }
}
