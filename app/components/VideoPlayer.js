/**
 * @Author: brady
 * @Date: 2019-08-03
 * @Last Created time: 17:36:32
 * @Description:
 */
import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Video from "react-native-video";

type Props = {};
export default class VideoPlayer extends Component<Props> {
  // 默认属性
  static defaultProps = {};

  // 属性类型
  static propTypes = {};

  // 构造
  constructor(props) {
    super(props);
    // 初始状态
    this.state = {};
  }

  // 渲染
  render() {
    return (
      <View style={styles.container}>
        <Video
          source={{
            uri:
              "https://vd3.bdstatic.com/mda-jafwr07mn3xxvkqs/sc/mda-jafwr07mn3xxvkqs.mp4"
          }}
          // ref={ref => (this.player = ref)}
          // onBuffer={this.onBuffer}
          // onError={this.videoError}
          style={styles.backgroundVideo}
        />
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
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  }
});
