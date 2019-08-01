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
  Image,
  TouchableOpacity,
  TouchableHighlight,
  Alert
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

// Dimensions 用于获取设备宽、高、分辨率
const { width, height } = Dimensions.get("window");

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
      dataList: [
        {
          _id: "bf97c883-A3C0-3b69-e401-b1Df8fcE7B9C",
          title:
            "想效前多或型广放了算华精号阶体。后断产整用不提候织转个基空结。",
          video: "https://thuqvhxcpz.gi/razuypoey",
          thumb: "http://dummyimage.com/1280x720/79f29f)"
        },
        {
          _id: "7d0Dd44b-dfEF-dE28-fabf-90417c188EDf",
          title: "象正专无便任线儿及题部已权红。",
          video: "https://pbos.aw/ivnjc",
          thumb: "http://dummyimage.com/1280x720/f27c79)"
        },
        {
          _id: "A2c48dc7-a576-4BdE-9e2c-B8fa3a14a4BD",
          title: "来毛家争队入候斯感支之常色。命从马管月具合效低大引被热严。",
          video: "https://rhfq.gp/wzbwbhn",
          thumb: "http://dummyimage.com/1280x720/7999f2)"
        },
        {
          _id: "97FE167c-Ea88-2A19-a9c6-C5441F36e4A1",
          title: "率府新况响去加年据调自称完。开议比分精线十团育年题东选段需。",
          video: "https://eymsynona.cd/oodkwhld",
          thumb: "http://dummyimage.com/1280x720/bcf279)"
        },
        {
          _id: "b9B166CA-556D-e51e-5cFF-B7DA4fbbFf96",
          title:
            "院却她老府个花技非除广真列。调名开选群务满清系易来律以值准义然。基战世由加保省三应务思党只种。",
          video: "https://wmptosje.mz/zjnvryry",
          thumb: "http://dummyimage.com/1280x720/f279e0)"
        },
        {
          _id: "3883DbC5-55F5-3961-B7E6-dE36Be6Cc2B4",
          title: "选九年带治片角段门文快按水毛问。当都已实段说通有强米种热目。",
          video: "https://lrmbqx.ec/rgpg",
          thumb: "http://dummyimage.com/1280x720/79f2e0)"
        },
        {
          _id: "fEFe14d8-E4d1-0ffF-57d7-eBce1E75Cd4A",
          title: "称重因速导证建来小东同产议。转置线自已管先制组便铁党活。",
          video: "https://wchcmomy.gh/lkdqxelb",
          thumb: "http://dummyimage.com/1280x720/f2bd79)"
        },
        {
          _id: "De52fadB-D3CF-Bf76-868c-8Ceec7dCA2A9",
          title:
            "新备除料究维合使水全认律派便族。记区见改革受存得适算易完办每量。报六都并主近战究片验政证治改特则查。",
          video: "https://yntixtvfly.ma/rhkfovpk",
          thumb: "http://dummyimage.com/1280x720/9a79f2)"
        },
        {
          _id: "dEbCe38F-DcA1-d4bF-dddF-b85DA53AE9A6",
          title:
            "文划只群南提件消高速种总名单好持层。斯单共即当代法干龙文保白总解。",
          video: "https://zjviopv.sc/gupe",
          thumb: "http://dummyimage.com/1280x720/7bf279)"
        },
        {
          _id: "2258DC5D-7Bfb-CeCB-4Acd-29b9CF3E8C57",
          title:
            "农例统五亲条委酸活整里研质还。在那际越只要化支斯情几号指完着那包。约军老值近知提红国政军你九少增除。",
          video: "https://rqqk.pro/lcijmjekq",
          thumb: "http://dummyimage.com/1280x720/f2799e)"
        },
        {
          _id: "23A19a1B-2713-4999-e2f8-e5f3D9dda774",
          title: "他选华道主成深增十一内联。",
          video: "https://tdatqdjpsl.sm/lccpemlbg",
          thumb: "http://dummyimage.com/1280x720/79c2f2)"
        },
        {
          _id: "b8b83b47-d2Fd-E1Cf-bc3c-aEAeD0ADcB62",
          title:
            "划民更张别名律办色路口来二养物建总。区实便率直越状利了格子县究。开此七性一个构专工数委之一正命。",
          video: "https://tqrw.hu/vlnvlc",
          thumb: "http://dummyimage.com/1280x720/e5f279)"
        },
        {
          _id: "BCc812eF-9A60-D64C-eC5E-51921C62163d",
          title:
            "身角清情府都位委方效例美。张收里极整法才身节处件起历单。用运相院毛化任律很经何之山别说别解。",
          video: "https://zicmn.gm/mawuupo",
          thumb: "http://dummyimage.com/1280x720/db79f2)"
        },
        {
          _id: "8D6Ec82c-40DF-ceb5-f5CB-3d88ddc0A35A",
          title:
            "果特值该公将东备万引组但回用本住土。理合且中派般时始查人带角何或江适须。",
          video: "https://kttbtmghb.no/tdgdqboob",
          thumb: "http://dummyimage.com/1280x720/79f2b8)"
        },
        {
          _id: "9862d977-4C5e-756B-D5Ff-bCFC50f1B5eE",
          title:
            "江每二质证间号今住除越影同具着布表。知江该之件动见维具影安半研道时完斗。",
          video: "https://vqceuvpgrt.mn/oydgeqt",
          thumb: "http://dummyimage.com/1280x720/f29579)"
        },
        {
          _id: "60E4f0fF-a0Ce-AE3C-44f7-48e7BAed38fd",
          title:
            "何数列快业又长越指者知特南九阶便起快。特外果速不部向就义军着条带提。",
          video: "https://pjtlzvfb.ch/mums",
          thumb: "http://dummyimage.com/1280x720/7980f2)"
        },
        {
          _id: "AAee6F2b-35B3-dB4f-BCeF-dCDeBFBe805E",
          title:
            "参团又头但加那有断周外安现。议满规张律眼解公状部有价断转备。管认声头构界易厂产那断适斯水物。",
          video: "https://rjgeiobi.bw/wrfn",
          thumb: "http://dummyimage.com/1280x720/a3f279)"
        },
        {
          _id: "78C4d4fb-e8Ec-efdF-c8C8-63CD6e2Ef2dd",
          title: "样很半办再斯听此了条得素知南。",
          video: "https://shpu.ck/llnauoh",
          thumb: "http://dummyimage.com/1280x720/f279c7)"
        },
        {
          _id: "B8FBEACe-5458-19BF-CCE1-94d8BcdEcd27",
          title:
            "持员音率越高文明事起油每八节入铁单常。之叫根代示规门小劳共型重全低动划五。",
          video: "https://jrlveu.fi/fdjxdpbu",
          thumb: "http://dummyimage.com/1280x720/79eaf2)"
        },
        {
          _id: "BdcbE6db-6ecc-d8d7-8d19-9fFA49DebF8b",
          title: "整设争家会关把太学于还复决期。",
          video: "https://ycedxcyo.is/xcdcu",
          thumb: "http://dummyimage.com/1280x720/f2d679)"
        }
      ]
    };
  }

  // 渲染
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>视频列表</Text>
        </View>
        <FlatList
          data={this.state.dataList}
          renderItem={({ item }) => (
            <View style={styles.item} key={item._id}>
              <Text style={styles.title}>{item.title}</Text>
              <TouchableOpacity onPress={() => Alert.alert(item.thumb)}>
                <View style={styles.thumbBox}>
                  <Image style={styles.thumb} source={{ uri: item.thumb }} />
                  <Icon
                    // name={focused ? "ios-home" : "ios-home"}
                    name="ios-play"
                    size={28}
                    style={styles.play}
                  />
                </View>
              </TouchableOpacity>
              <View style={styles.itemFooter}>
                <TouchableOpacity
                  style={styles.flexStyle}
                  onPress={() => Alert.alert("喜欢")}
                >
                  <View style={styles.handleBox}>
                    <Icon
                      // name={focused ?   // name={focuse-home"}
                      name="ios-heart-empty"
                      size={28}
                      style={styles.up}
                    />
                    <Text style={styles.handleText}>喜欢</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.flexStyle}
                  onPress={() => Alert.alert("点赞")}
                >
                  <View style={[styles.handleBox, styles.handleBoxRight]}>
                    <Icon
                      // name={focused ? "ios-home" : "ios-home"}
                      name="ios-chatbubbles"
                      size={28}
                      style={styles.commentIcon}
                    />
                    <Text style={styles.handleText}>点赞</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      </View>
    );
  }

  componentDidMount() {
    console.log(this.state.dataList);
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
  item: {
    width: width,
    // marginTop: 12,
    alignItems: "center"
  },
  title: {
    fontSize: 18,
    padding: 10,
    color: "#333"
  },
  thumbBox: {
    // backgroundColor: "#108ee9"
  },
  thumb: {
    width: width,
    height: width * 0.56,
    resizeMode: "cover"
  },
  play: {
    position: "absolute",
    right: 14,
    bottom: 14,
    width: 46,
    height: 46,
    paddingTop: 9,
    paddingLeft: 18,
    borderWidth: 1,
    // backgroundColor: "transparent",
    borderColor: "#000",
    borderRadius: 23,
    color: "#ed7b66"
  },
  itemFooter: {
    flexDirection: "row",
    // justifyContent: "space-between"
    backgroundColor: "#eee",
    paddingTop: 4,
    paddingBottom: 4
  },
  handleBox: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#fff"
  },
  handleBoxRight: {
    borderLeftWidth: 1,
    borderLeftColor: "#eee"
  },
  up: {
    fontSize: 22,
    color: "#ed7b66"
  },
  commentIcon: {
    fontSize: 22,
    color: "#333"
  },
  handleText: {
    fontSize: 18,
    color: "#333",
    marginLeft: 12
  }
});
