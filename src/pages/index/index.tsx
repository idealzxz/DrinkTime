
import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'
import './index.less'

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Taro.Config = {
    navigationBarTitleText: '首页'
  }

  navToMy() {
    Taro.navigateTo({ url: '/pages/my/index' })
  }

  render () {
    return (
      <View className='index'>
        <Text>Hello 1111!</Text>
        <Button className='btn-max-w' onClick={this.navToMy.bind(this)} >跳转</Button>
      </View>
    )
  }
}
