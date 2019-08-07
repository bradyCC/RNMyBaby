/**
 * @Author: brady
 * @Date: 2019-07-31
 * @Last Created time: 20:24:02
 * @Description:
 */
import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  Platform,
  FlatList,
  ActivityIndicator
} from "react-native";
// import Mock from "mockjs";

import VideoListItem from "../components/VideoListItem";
import VideoCommentModal from "../components/VideoCommentModal";

// Dimensions 用于获取设备宽、高、分辨率
const { width, height } = Dimensions.get("window");

let resultData = {
  page: 1, // 当前页
  step: 1, // 翻页
  total: 0, // 数据总条数
  resultList: [] // 数据列表
};

type Props = {};
export default class Video extends Component<Props> {
  // 默认属性
  static defaultProps = {};

  // 属性类型
  static propTypes = {};

  // 构造
  constructor(props) {
    super(props);
    // 初始状态
    this.state = {
      isLoading: false, // 上拉加载更多状态
      isRefreshing: false, // 下拉刷新状态
      noMore: false, // 判断是否有更多数据需要加载
      modalVisible: false, // 是否显示Modal
      id: `` // 视频ID
    };
  }

  // 获取数据
  fetchData = () => {
    console.log("执行了");
    // 使用 Mockjs 配置模拟数据
    // let result = Mock.mock({
    //   success: true,
    //   "data|20": [
    //     {
    //       _id: "@guid",
    //       title: "@cparagraph(1,3)",
    //       video: "@url('https')",
    //       thumb: "@img(1280x720, @color())"
    //     }
    //   ],
    //   total: 20
    // });
    // this.setState(
    //   {
    //     resultList: result.data
    //   },
    //   () => {
    //     console.log(this.state.resultList);
    //   }
    // );

    // 使用 fetch 获取模拟数据
    let url = `http://rap2api.taobao.org/app/mock/227073/api/videolist?accessToken="123"&page=${
      resultData.page
    }`;
    let options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    };

    fetch(url, options)
      .then(response => response.json())
      .then(result => {
        console.log(result);
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
      })
      .catch(err => {
        console.error(err);
      });
  };

  // 加载更多数据 - 上拉加载更多、滑动分页
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
      this.fetchData();
    }, 1000);
  };

  // 刷新数据 - 下拉刷新数据
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
    this.fetchData();
  };

  // 显示Modal
  showModal = (flag, id = ``) => {
    if (flag) {
      console.log("showModal");
    } else {
      console.log("hideModal");
    }
    this.setState({
      modalVisible: flag,
      id: id
    });
  };

  // 渲染
  render() {
    return (
      <View style={styles.container}>
        {Platform.OS === "ios" ? null : (
          <View style={styles.header}>
            <Text style={styles.headerText}>视频列表</Text>
          </View>
        )}
        <FlatList
          data={resultData.resultList}
          extraData={this.state}
          keyExtractor={item => item._id}
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
          renderItem={({ item }) => (
            <VideoListItem
              item={item}
              props={this.props}
              showModal={(flag, id) => this.showModal(flag, id)}
            />
          )}
        />
        <VideoCommentModal
          modalVisible={this.state.modalVisible}
          id={this.state.id}
          showModal={flag => this.showModal(flag)}
        />
      </View>
    );
  }

  componentDidMount() {
    this.fetchData();
  }
}

const styles = StyleSheet.create({
  flexStyle: {
    flex: 1
  },
  container: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  header: {
    width: width,
    alignItems: "center",
    backgroundColor: "#108ee9",
    paddingTop: 12,
    paddingBottom: 12
  },
  headerText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff"
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
  }
});
