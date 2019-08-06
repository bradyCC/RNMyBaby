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
  ActivityIndicator,
  Image
} from "react-native";

import VideoPlayer from "../components/VideoPlayer";
import VideoCommentItem from "../components/VideoCommentItem";

// Dimensions 用于获取设备宽、高、分辨率
const { width, height } = Dimensions.get("window");

let resultData = {
  page: 1, // 当前页
  step: 1, // 翻页
  total: 0, // 数据总条数
  resultList: [] // 数据列表
};

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
      id: "",
      isLoading: false, // 上拉加载更多状态
      isRefreshing: false, // 下拉刷新状态
      noMore: false // 判断是否有更多数据需要加载
    };
  }

  // 获取视频评论列表
  getCommentList = (id, page) => {
    console.log("执行了");
    let url = `http://rap2api.taobao.org/app/mock/227073/api/comments?accessToken="123"&id=${id}&page=${page}`;
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
          if (this.state.isRefreshing) {
            resultData.resultList =
              resultData.resultList.length > 0
                ? [...result.data, ...resultData.resultList]
                : result.data;
          } else {
            resultData.resultList =
              resultData.resultList.length > 0
                ? [...resultData.resultList, ...result.data]
                : result.data;
          }
          resultData.total = result.total;

          this.setState({
            isLoading: false,
            isRefreshing: false
          });
          if (resultData.resultList.length == resultData.total) {
            this.setState({
              noMore: true
            });
          }
          console.log(resultData.resultList);
        }
      })
      .catch(err => {
        console.error(err);
      });
  };

  fetchMoreData = () => {
    console.log("触底了!");
    if (
      resultData.resultList.length == resultData.total ||
      this.state.isLoading
    )
      return false;
    this.setState({
      isLoading: true
    });
    setTimeout(() => {
      resultData.page = resultData.page + resultData.step;
      this.getCommentList(this.state.id, resultData.page);
    }, 1000);
  };

  onRefreshData = () => {
    console.log("刷新了!");
    if (
      resultData.resultList.length == resultData.total ||
      this.state.isRefreshing
    )
      return false;
    this.setState({
      isRefreshing: true
    });
    resultData.page = resultData.page + resultData.step;
    this.getCommentList(this.state.id, resultData.page);
  };

  // 渲染
  render() {
    const { params } = this.props.navigation.state;
    return (
      <View style={styles.container}>
        <VideoPlayer video={params.video} options={this.state.options} />
        <FlatList
          data={resultData.resultList}
          extraData={this.state}
          keyExtractor={item => item._id}
          ListHeaderComponent={() => {
            return (
              <View>
                <View>
                  <View style={styles.authorTop}>
                    <Text style={styles.authorTitle}>视频简介：</Text>
                  </View>
                  <View style={styles.authorInfo}>
                    <View style={styles.infoLeft}>
                      <Image
                        source={{ uri: params.author.avatar }}
                        style={styles.authorHeader}
                      />
                    </View>
                    <View style={styles.infoRight}>
                      <Text>{params.author.nickname}</Text>
                      <Text>{params.author.desc}</Text>
                    </View>
                  </View>
                </View>
                <Text style={styles.commentTitle}>评论内容：</Text>
              </View>
            );
          }}
          onEndReached={() => this.fetchMoreData()}
          onEndReachedThreshold={0.5}
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
          refreshing={this.state.isRefreshing}
          onRefresh={() => this.onRefreshData()}
          renderItem={({ item }) => <VideoCommentItem item={item} />}
        />
      </View>
    );
  }

  componentDidMount() {
    let id = this.props.navigation.state.params.id;
    this.getCommentList(id, this.state.page);
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
  infoLeft: {},
  infoRight: {
    flex: 1,
    marginLeft: 8
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
  }
});
