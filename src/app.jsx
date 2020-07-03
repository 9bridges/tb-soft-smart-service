import Taro, { Component } from '@tarojs/taro'
// import Index from './pages/index'
import Login from './pages/login'
import './app.scss'

import { initLeancloud } from './utils/init'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {
  componentDidMount() {
    initLeancloud()
  }

  componentDidShow() { }

  componentDidHide() { }

  componentDidCatchError() { }

  config = {
    pages: [
      'pages/login/login',
      'pages/index/index',
      'pages/result/result',
      'pages/result/detail',
      'pages/dataform/dataform',
      'pages/mine/mine',
    ],
    tabBar: {
      color: '#9AA0A6',
      selectedColor: '#BA2C28',
      backgroundColor: '#FFFFFF',
      borderStyle: 'white',
      list: [
        {
          pagePath: 'pages/index/index',
          text: '首页',
          iconPath: './assets/tab/home.png',
          selectedIconPath: './assets/tab/home_selected.png',
        },
        {
          pagePath: 'pages/mine/mine',
          text: '我的',
          iconPath: './assets/tab/mine.png',
          selectedIconPath: './assets/tab/mine_selected.png',
        }
      ]
    },
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: '智能客服',
      navigationBarTextStyle: 'black'
    }
  }

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return <Login />
  }
}

Taro.render(<App />, document.getElementById('app'))
