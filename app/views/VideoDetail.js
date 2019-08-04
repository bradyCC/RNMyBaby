/**
 * @Author: brady
 * @Date: 2019-08-02
 * @Last Created time: 22:01:51
 * @Description:
 */
import React, { Component } from "react";
import { StyleSheet, View, Text, Dimensions } from "react-native";
import VideoPlayer from "../components/VideoPlayer";

// Dimensions 用于获取设备宽、高、分辨率
const { width, height } = Dimensions.get("window");

type Props = {};
export default class VideoDetail extends Component<Props> {
  // 默认属性
  static defaultProps = {};

  // 属性类型
  static propTypes = {};

  // 构造
  constructor(props) {
    super(props);
    // 初始状态
    this.state = {
      options: {
        rate: 1.0, // 1.0表示默认速率
        volume: 3, // 声音大小
        paused: false, // 默认播放
        repeat: false, // 不重复播放
        muted: false, // 是否静音
        controls: true, // 显示控件
        resizeMode: "contain", // 等比缩放
        style: styles.backgroundVideo // 样式
      }
    };
  }

  // 渲染
  render() {
    const { params } = this.props.navigation.state;
    return (
      <View style={styles.container}>
        <VideoPlayer video={params.video} options={this.state.options} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  backgroundVideo: {
    // width: width,
    // height: (width * 9) / 16,
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: "#000"
  }
});
