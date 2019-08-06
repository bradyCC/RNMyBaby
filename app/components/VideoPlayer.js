/**
 * @Author: brady
 * @Date: 2019-08-03
 * @Last Created time: 17:36:32
 * @Description:
 */
import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ActivityIndicator,
  Dimensions
} from "react-native";
import Video from "react-native-video";
import PropTypes from "prop-types";

// Dimensions 用于获取设备宽、高、分辨率
const { width, height } = Dimensions.get("window");

type Props = {};
export default class VideoPlayer extends Component<Props> {
  // 默认属性
  static defaultProps = {};

  // 属性类型
  static propTypes = {
    video: PropTypes.string,
    options: PropTypes.object
  };

  // 构造
  constructor(props) {
    super(props);
    // 初始状态
    this.state = {
      isCompleted: false // 视频加载状态
    };
  }

  // 视频加载完成
  loadCompleted = () => {
    this.setState({
      isCompleted: true
    });
  };

  /**
   * Video 样式:
   * 1. 设置width、height 等比缩放置顶
   * 2. 使用 absolute 绝对定位，垂直居中，全屏显示
   * */

  // 渲染
  render() {
    const { video, options } = this.props;
    return (
      <View style={styles.container}>
        {this.state.isCompleted ? null : (
          <View style={styles.loading}>
            <Text style={styles.loadingText}>视频加载中，请稍后！</Text>
            <View style={styles.indicatorStyle}>
              <ActivityIndicator size="large" color="#108ee9" />
            </View>
          </View>
        )}
        <Video
          source={{ uri: video }}
          // rate={options.rate} //1.0表示默认速率
          // volume={options.volume}  //声音大小
          // paused={options.paused}  //默认播放
          // repeat={options.repeat} //不重复播放
          muted={options.muted} //是否静音
          controls={options.controls} //显示控件
          resizeMode={options.resizeMode} //等比缩放
          style={options.style} //样式
          // onLoadStart={} //视频开始播放的时候调用方法
          onLoad={() => this.loadCompleted()} //不断调用
          // onProgress={}//播放时，每隔250ms，发送请求，附带当前播放时间
          // onEnd={}//播放结束
          // onError={}//遇到错误时
          // ref={ref => (this.player = ref)}
          // onBuffer={}
        />
      </View>
    );
  }

  componentDidMount() {
    // console.log(this.props);
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    // backgroundColor: "#FCF5FF"
  },
  loading: {
    width: width,
    height: (width * 9) / 16,
    position: "absolute",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  loadingText: {
    fontSize: 20,
    color: "#108ee9"
  },
  indicatorStyle: {
    marginLeft: 12
  }
});
