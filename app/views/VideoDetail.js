/**
 * @Author: brady
 * @Date: 2019-08-02
 * @Last Created time: 22:01:51
 * @Description:
 */
import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  ScrollView,
  FlatList,
  ActivityIndicator
} from "react-native";

import VideoPlayer from "../components/VideoPlayer";
import VideoCommentItem from "../components/VideoCommentItem";

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
      },
      commentList: [], // 评论列表
      isLoading: false, // 上拉加载更多状态
      isRefreshing: false, // 下拉刷新状态
      noMore: false // 判断是否有更多数据需要加载
    };
  }

  // 获取视频评论列表
  getCommentList = id => {
    let url = `http://rap2api.taobao.org/app/mock/227073/api/comments?accessToken="123"&id=${id}`;
    let options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    };

    fetch(url, options)
      .then(response => response.json())
      .then(result => {
        if (result.success) {
          this.setState({
            commentList: result.data
          });
        }
      })
      .catch(err => {
        console.error(err);
      });
  };

  // 渲染
  render() {
    const { params } = this.props.navigation.state;
    return (
      <ScrollView style={styles.container}>
        <VideoPlayer
          video={params.video}
          options={this.state.options}
          author={params.author}
        />
        <Text style={styles.commentTitle}>评论内容：</Text>
        <FlatList
          data={this.state.commentList}
          extraData={this.state}
          keyExtractor={item => item._id}
          // onEndReached={() => this.fetchMoreData()}
          // onEndReachedThreshold={0.5}
          ListFooterComponent={() => {
            if (this.state.isLoading) {
              return (
                <View style={styles.fetchMore}>
                  <Text style={styles.fetchMoreText}>加载更多</Text>
                  <View style={styles.indicatorStyle}>
                    <ActivityIndicator size="small" color="#108ee9" />
                  </View>
                </View>
              );
            } else if (this.state.noMore) {
              return (
                <View style={styles.fetchMore}>
                  <Text style={styles.fetchMoreText}>到底了</Text>
                </View>
              );
            } else {
              return null;
            }
          }}
          // refreshing={this.state.isRefreshing}
          // onRefresh={() => this.onRefreshData()}
          renderItem={({ item }) => <VideoCommentItem item={item} />}
        />
      </ScrollView>
    );
  }

  componentDidMount() {
    let id = this.props.navigation.state.params.id;
    this.getCommentList(id);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    backgroundColor: "#F5FCFF",
    paddingBottom: 12
  },
  backgroundVideo: {
    width: width,
    height: (width * 9) / 16,
    // position: "absolute",
    // top: 0,
    // left: 0,
    // bottom: 0,
    // right: 0,
    // backgroundColor: "#000"
  },
  fetchMore: {
    width: width,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 12,
    paddingBottom: 12
  },
  fetchMoreText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333"
  },
  indicatorStyle: {
    marginLeft: 12
  },
  commentTitle: {
    padding: 12,
    color: "#333"
  },
});
