import { hot } from 'react-hot-loader/root';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import zhCN from 'antd/lib/locale/zh_CN';
import { ConfigProvider } from 'antd';
import loadable from '@loadable/component';
import { Provider } from 'mobx-react';
import { uiStore } from './store';

dayjs.locale('zh-cn');

const BaseLayout = loadable(() => import('./App'));

class Main extends Component {
  render() {
    return (
      <Provider
        uiStore={uiStore}
        children={
          <ConfigProvider locale={zhCN}>
            <BaseLayout />
          </ConfigProvider>
        }
      ></Provider>
    );
  }
}

const App = hot(Main);

ReactDOM.render(<App />, document.querySelector('#root'));
