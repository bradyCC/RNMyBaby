/**
 * @Author: brady
 * @Date: 2019/7/26
 * @Last Created time: 17:40:06
 * @Description:
 */
import React from "react";
import { Platform, View, TouchableOpacity } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer
} from "react-navigation";
import Icon from "react-native-vector-icons/Ionicons";

import Video from "../views/Video";
import Record from "../views/Record";
import Picture from "../views/Picture";
import Account from "../views/Account";

import VideoDetail from "../views/VideoDetail";
// import RecordDetail from "../views/RecordDetail";
// import PictureDetail from "../views/PictureDetail";
// import AccountInfo from "../views/AccountInfo";
// import VideoCenterDetail from "../views/VideoCenterDetail";

// 设置路由
const VideoRouteConfigs = {
  Video: {
    screen: Video,
    navigationOptions: {
      header: Platform.select({
        android: null
      }),
      title: "视频列表"
    }
  },
  VideoDetail: {
    screen: VideoDetail,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.title}`
    })
  },
  // VideoCenterDetail: {
  //   screen: VideoCenterDetail,
  //   navigationOptions: ({ navigation }) => ({
  //     title: `${navigation.state.params.videoname}`
  //   })
  // }
};
const RecordRouteConfigs = {
  Record: {
    screen: Record,
    navigationOptions: {
      header: Platform.select({
        android: null
      }),
      title: "录制"
    }
  },
  // RecordDetail: {
  //   screen: RecordDetail,
  //   navigationOptions: ({ navigation }) => ({
  //     title: `${navigation.state.params.title}`
  //   })
  // }
};
const PictureRouteConfigs = {
  Picture: {
    screen: Picture,
    navigationOptions: {
      header: Platform.select({
        android: null
      }),
      title: "图片"
    }
  },
  // PictureDetail: {
  //   screen: PictureDetail,
  //   navigationOptions: ({ navigation }) => ({
  //     title: `${navigation.state.params.title}`
  //   })
  // }
};
const AccountRouteConfigs = {
  Account: {
    screen: Account,
    navigationOptions: ({ navigation }) => ({
      header: Platform.select({
        android: null
      }),
      title: "我的",
      // headerRight: (
      //   <TouchableOpacity onPress={() => navigation.navigate("Home")}>
      //     <Icon
      //       // name={focused ? "ios-home" : "ios-home"}
      //       name="ios-cog"
      //       size={26}
      //       style={{ color: "#fff" }}
      //     />
      //   </TouchableOpacity>
      // ),
      // headerRightContainerStyle: {
      //   paddingRight: 8
      // }
    })
  },
  // AccountInfo: {
  //   screen: AccountInfo,
  //   navigationOptions: {
  //     title: "我的资料"
  //   }
  // }
};
// 全局配置
const StackNavigatorConfig = {
  headerLayoutPreset: "center",
  defaultNavigationOptions: {
    // header: Platform.select({
    //   android: null
    // }),
    headerStyle: {
      gesturesEnabled: false,
      backgroundColor: "#108ee9" // rgb(16, 142, 233)
    },
    headerTitleStyle: {
      color: "#fff"
    },
    headerTintColor: "#fff",
    headerBackTitle: null
  },
  cardStyle: { backgroundColor: "#ccc" }
};
const VideoTab = createStackNavigator(VideoRouteConfigs, StackNavigatorConfig);
const RecordTab = createStackNavigator(
  RecordRouteConfigs,
  StackNavigatorConfig
);
const PictureTab = createStackNavigator(
  PictureRouteConfigs,
  StackNavigatorConfig
);
const AccountTab = createStackNavigator(
  AccountRouteConfigs,
  StackNavigatorConfig
);

// 隐藏子路由 tabBar
let setTabBar = StackNavigatorArr => {
  StackNavigatorArr.map(item => {
    item.navigationOptions = ({ navigation }) => {
      let tabBarVisible = true;
      if (navigation.state.index > 0) {
        tabBarVisible = false;
      }
      return {
        tabBarVisible
      };
    };
  });
};
setTabBar([VideoTab, RecordTab, PictureTab, AccountTab]);

// 设置tabBar
const TabRouteConfigs = {
  Video: {
    screen: VideoTab,
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: "视频",
      tabBarIcon: ({ tintColor, focused }) => (
        <Icon
          // name={focused ? "ios-home" : "ios-home"}
          name="ios-videocam"
          size={26}
          style={{ color: tintColor }}
        />
      )
    })
  },
  Record: {
    screen: RecordTab,
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: "录制",
      tabBarIcon: ({ tintColor, focused }) => (
        <Icon
          // name={focused ? "ios-paper" : "ios-paper"}
          name="ios-recording"
          size={26}
          style={{ color: tintColor }}
        />
      )
    })
  },
  Picture: {
    screen: PictureTab,
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: "图片",
      tabBarIcon: ({ tintColor, focused }) => (
        <Icon
          // name={focused ? "ios-paper" : "ios-paper"}
          name="ios-reverse-camera"
          size={26}
          style={{ color: tintColor }}
        />
      )
    })
  },
  Account: {
    screen: AccountTab,
    navigationOptions: ({ navigation }) => ({
      tabBarLabel: "我的",
      tabBarIcon: ({ tintColor, focused }) => (
        <Icon
          // name={focused ? "ios-contact" : "ios-contact"}
          name="ios-contact"
          size={26}
          style={{ color: tintColor }}
        />
      )
    })
  }
};
const TabNavigatorConfig = {
  initialRouteName: "Video",
  tabBarOptions: {
    showIcon: true
  }
};
const TabNavigator = createBottomTabNavigator(
  TabRouteConfigs,
  TabNavigatorConfig
);

export default createAppContainer(TabNavigator);
