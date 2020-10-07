import Taro, { Component } from "@tarojs/taro";
import { View, Text } from '@tarojs/components'

class my extends Component {
  config = {
    navigationBarTitleText: '我的'
  }
  render (){
    return (
      <View className='index'>
        <Text>my!</Text>
      </View>
    )
  }
}
export default my;
