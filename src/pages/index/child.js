import Taro, { Component } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';

class Child extends Component {
    constructor(props){
        super(props);
        this.cl = this.cl.bind(this);
    }
    componentWillReceiveProps(nextProps){
        console.log('----'+nextProps.name)
    }
    cl(){
        this.props.onTest();  
    }
    render(){
        let {name,obj} = this.props;
       return (
        <View>
            <Text onClick={this.cl}>我是子组件{name+'-------'+obj.key[0].name}</Text>
        </View>
       ) 
    }
}
//给传递过来的 props 设定默认值，1可以防止报错 2.防止无值显示
Child.defaultPrps={

}
export default Child;