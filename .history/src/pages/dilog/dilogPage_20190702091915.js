import Taro,{ Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

class Dilogpage extends Component {
   
    render(){
        return(
            //在我们设计组件时，有些组件通常不知道自己的子组件会有什么内容，例如 Sidebar 和 Dialog 这样的容器组件。
            // 我们建议在这样的情况使用 this.props.children 来传递子元素：
            // 注意事项
            // 请不要对 this.props.children 进行任何操作。Taro 在小程序中实现这个功能使用的是小程序的 slot 功能，
            // 也就是说你可以把 this.props.children 理解为 slot 的语法糖，this.props.children 在 Taro 中并不是 React 的 ReactElement 对象，
            // 因此形如 this.props.children && this.props.children、this.props.children[0] 在 Taro 中都是非法的。
            // this.props.children 无法用 defaultProps 设置默认内容。由于小程序的限制，Taro 也无法知道组件的消费者是否传入内容，所以无法应用默认内容。
            // 不能把 this.props.children 分解为变量再使用。由于普通的 props 有一个确切的值，所以当你把它们分解为变量运行时可以处理，
            // this.props.children 则不能这样操作，你必须显性地把 this.props.children 全部都写完整才能实现它的功能。
            <View>
                {
                    this.props.myIm
                }
                {
                  this.props.children
                }
            </View>
        )
    }
}

export default Dilogpage;