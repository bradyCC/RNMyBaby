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
  Image
} from "react-native";

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
          _id: "27B57c26-9bAB-3BDB-bf4b-212dfeC98cA3",
          title: "才府外间列合有积得最己军多间。治张断象争给加状持却直新发结。",
          video: "https://yrxzs.mq/cznme",
          thumb: "http://dummyimage.com/1280*720/79c5f2.png"
        },
        {
          _id: "e33eEb25-C30E-abD6-f547-FbEEfe783b6D",
          title: "经高天治内公速年构前想产局造该。",
          video: "https://dqn.om/yubatzke",
          thumb: "http://dummyimage.com/1280*720/e8f279.png"
        },
        {
          _id: "c3d9C718-3d7D-7beE-D4fA-D260BdFFcfb3",
          title:
            "种向料必放农参规住员声位明就收七们。效和音场称道律周然回义引必展。亲取法后那又听内么全龙走内飞江中。",
          video: "https://myj.bt/ppldhwe",
          thumb: "http://dummyimage.com/1280*720/d879f2.png"
        },
        {
          _id: "f5b2A8C2-B6C2-Bd62-9eAc-e37Da3d18a18",
          title:
            "想容规面片己社速除府老该。效阶历强用经除率风提能非制派音者习。",
          video: "https://xes.tp/glnhp",
          thumb: "http://dummyimage.com/1280*720/79f2b4.png"
        },
        {
          _id: "d3d0F3Db-0Ebc-dA95-1fD6-72bedf57FA4E",
          title: "名革关毛界如标已教社必家放达书力族。",
          video: "https://rqewc.cl/hyponxb",
          thumb: "http://dummyimage.com/1280*720/f29179.png"
        },
        {
          _id: "6F2f50bF-936D-CD6C-58c5-0Ab603e51948",
          title:
            "物小消角支联原空求开些何府。政做大来高积件系拉与不加革号江线。",
          video: "https://ggjgxbv.dm/ubqliglf",
          thumb: "http://dummyimage.com/1280*720/7984f2.png"
        },
        {
          _id: "1B26F036-1DaA-1eb8-cB39-85Ab18A4BDc8",
          title:
            "效片民八还际处及今候七题。就八相克七进东引华眼个太器组子。这铁便度位百外军一着路约列持且。",
          video: "https://ijscyou.sh/bbfretwvq",
          thumb: "http://dummyimage.com/1280*720/a7f279.png"
        },
        {
          _id: "7Ac92B1b-efA1-f58C-cD93-1C84AC3CF718",
          title: "生天然育天政按真党改定据打西定。",
          video: "https://wlxvkp.ad/owxswsu",
          thumb: "http://dummyimage.com/1280*720/f279ca.png"
        },
        {
          _id: "dcFda55a-C39e-87D2-bF6A-938Cf751fc95",
          title:
            "身习反都已包资发图五满米照作识听名革。王交标叫术采花给据矿被育好月积区必角。提历史难利斗被成场给议手又张亲一。",
          video: "https://btbojwvqb.af/glvvpv",
          thumb: "http://dummyimage.com/1280*720/79eef2.png"
        },
        {
          _id: "B4dfae6f-BcCf-92EA-aded-Ad4e685FCf82",
          title:
            "史三起造离年局理近于儿场马。己使者且书做必标己期解他步何经。信家关市高将个山育象位产常点都她。",
          video: "https://qykf.hn/bhtjlicsk",
          thumb: "http://dummyimage.com/1280*720/f2d379.png"
        },
        {
          _id: "b343EFAb-7ecF-FA5A-7bd9-e5FE53562CEa",
          title:
            "干把由参品问它那知可时标我海段建后。响需计知常年是主路样易计满时节。",
          video: "https://dqil.cn/tbzcwfgmqw",
          thumb: "http://dummyimage.com/1280*720/af79f2.png"
        },
        {
          _id: "CF1052Bd-7FCA-F9CA-bA1a-d8Ce96fEB785",
          title:
            "活严则拉到快较内到县局号收造革知如经。年特器来极大军手区边设动下较象精产业。验易争活与导参动今式民理展。",
          video: "https://dzth.mo/tzwxuq",
          thumb: "http://dummyimage.com/1280*720/79f28c.png"
        },
        {
          _id: "e8ff4F7E-c3fa-953a-cFAe-bEcbabfAE515",
          title:
            "决为合米总必矿际的则加响间具准。步被马方论感总我是如论子型组院件支。江你运七采属了证实切表头料会都正。",
          video: "https://qswv.it/fnqydz",
          thumb: "http://dummyimage.com/1280*720/f27989.png"
        },
        {
          _id: "Fdc699D3-C7F3-EeDA-523b-da1824Dcf672",
          title: "法级通传时工传结第任对风图。",
          video: "https://smmbxzkd.ca/xjkpkuhhc",
          thumb: "http://dummyimage.com/1280*720/79acf2.png"
        },
        {
          _id: "1d50Bd5A-b3eA-39b1-Bd38-2EcdD79eC2Be",
          title: "劳北安动么求能多向适图给成调口。务如往原观称前龙族意两反法。",
          video: "https://vxegdzytl.sh/xukiywodg",
          thumb: "http://dummyimage.com/1280*720/cff279.png"
        },
        {
          _id: "FD7cF3df-c2D0-6f7f-C14f-590e9BCEdEAC",
          title:
            "来史林程者队电件型现价委听被队适们。还入完思九铁么四再保西广权亲定部。",
          video: "https://kwjgmypk.tv/grjyubp",
          thumb: "http://dummyimage.com/1280*720/f179f2.png"
        },
        {
          _id: "BDB6EEf1-48fF-4De1-2f35-Ae1F1852c3BC",
          title:
            "音已再书直次和调先系明做响。增较头前议电布同处学当合按亲六。信经再区确标质实条制过物。",
          video: "https://cmlz.kr/qmebnksu",
          thumb: "http://dummyimage.com/1280*720/79f2cd.png"
        },
        {
          _id: "A84fcdC2-4d2E-B6B7-47F9-F24A24Fb310f",
          title:
            "保许色己决列么年交把高其记受义风五拉。在知圆采见便火便须转党度万两山人。因率共单山去深调业化院万利热内。",
          video: "https://wmdaa.mc/esmunqpq",
          thumb: "http://dummyimage.com/1280*720/f2aa79.png"
        },
        {
          _id: "BE3B6f59-ef39-c784-6Bdb-69C784539D1c",
          title:
            "么率期打王斯率观图压没往于空运但内。形这须利象青之而么提权议或来道她或。",
          video: "https://kfu.com/ouso",
          thumb: "http://dummyimage.com/1280*720/8779f2.png"
        },
        {
          _id: "B52dcc7E-E0BC-dAf3-cAB3-82FfdB585F9F",
          title:
            "价两同技色资算了因习之关同形。争验安安强把造写矿小今五完格果选。般样局干应火型几政制花海领格按文条和。",
          video: "https://qdls.travel/ognotdcrs",
          thumb: "http://dummyimage.com/1280*720/8ef279.png"
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
            <View key={item._id}>
              <Text>{item._id}</Text>
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
  thumb: {
    width: width,
    height: width
  }
});
