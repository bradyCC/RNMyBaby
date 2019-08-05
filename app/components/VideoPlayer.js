/**
 * @Author: brady
 * @Date: 2019-08-03
 * @Last Created time: 17:36:32
 * @Description:
 */
import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import Video from "react-native-video";
import PropTypes from "prop-types";

type Props = {};
export default class VideoPlayer extends Component<Props> {
  // 默认属性
  static defaultProps = {};

  // 属性类型
  static propTypes = {
    video: PropTypes.string,
    options: PropTypes.object,
    author: PropTypes.object
  };

  // 构造
  constructor(props) {
    super(props);
    // 初始状态
    this.state = {};
  }

  /**
   * Video 样式:
   * 1. 设置width、height 等比缩放置顶
   * 2. 使用 absolute 绝对定位，垂直居中，全屏显示
   * */

  // 渲染
  render() {
    const { video, options, author } = this.props;
    return (
      <View style={styles.container}>
        <Video
          source={{ uri: video }}
          // rate={options.rate} //1.0表示默认速率
          // volume={options.volume}  //声音大小
          // paused={options.paused}  //默认播放
          // repeat={options.repeat} //不重复播放
          muted={options.muted} //是否静音
          controls={options.controls} // 显示控件
          resizeMode={options.resizeMode} // 等比缩放
          style={options.style} // 样式
          // onLoadStart={}//视频开始播放的时候调用方法
          // onLoad={} //不断调用
          // onProgress={}//播放时，每隔250ms，发送请求，附带当前播放时间
          // onEnd={}//播放结束
          // onError={}//遇到错误时
          // ref={ref => (this.player = ref)}
          // onBuffer={}
        />
        <View>
          <View style={styles.authorTop}>
            <Text style={styles.authorTitle}>视频简介：</Text>
          </View>
          <View style={styles.authorInfo}>
            <View style={styles.infoLeft}>
              <Image
                source={{ uri: author.avatar }}
                style={styles.authorHeader}
              />
            </View>
            <View style={styles.infoRight}>
              <Text>{author.nickname}</Text>
              <Text>{author.desc}</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }

  componentDidMount() {
    // console.log(this.props);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    // backgroundColor: "#FCF5FF"
  },
  authorTop: {
    padding: 12,
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#dbdbdb"
  },
  authorTitle: {
    fontSize: 18
  },
  authorInfo: {
    padding: 12,
    flexDirection: "row",
    // alignItems: "center",
    color: "#333"
  },
  authorHeader: {
    width: 64,
    height: 64,
    borderRadius: 32
  },
  infoRight: {
    flex: 1,
    marginLeft: 8
  }
});
