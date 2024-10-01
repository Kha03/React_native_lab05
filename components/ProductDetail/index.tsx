import { NavigationProp, RouteProp } from "@react-navigation/native";
import { useState } from "react";
import {
  Image,
  ImageRequireSource,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import RouteParams from "../../model/type";
import Rating from "../Rating";

type Home = {
  route: RouteProp<RouteParams, "Home">;
  navigation: NavigationProp<any>;
};
const ProductDetail: React.FC<Home> = ({ route, navigation }) => {
  const { phone } = route.params;
  const [img, setImg] = useState<ImageRequireSource>(phone.colors[0].image);
  const [imgName, setImgName] = useState(phone.colors[0].name);
  const hanldeChooseColor = (color: ImageRequireSource, name: string) => {
    setImg((prevImg) => color);
    setImgName((prevName) => name);
  };
  return (
    <View style={styles.Container}>
      <View
        style={{ width: 300, height: 360, alignSelf: "center", marginTop: 8 }}
      >
        <Image
          source={img}
          style={{ width: "100%", height: "100%" }}
          resizeMode="contain"
        />
      </View>
      <View style={{}}>
        <Text style={styles.text}>{phone.name}</Text>
      </View>
      <View
        style={{ flexDirection: "row", alignItems: "center", marginTop: 9 }}
      >
        <Rating rating={phone.rating} />
        <Text style={[styles.text, { marginLeft: 23 }]}>
          (Xem {phone.totalRating} đánh giá)
        </Text>
      </View>
      <View
        style={{ flexDirection: "row", alignItems: "center", marginTop: 13 }}
      >
        <Text style={[styles.cost, {}]}>
          {phone.discountPrice.toLocaleString()} đ
        </Text>
        <View
          style={{
            position: "relative",
            alignItems: "flex-start",
          }}
        >
          <Text style={[styles.text, { marginLeft: 44, color: "#00000094" }]}>
            {phone.price.toLocaleString()} đ
          </Text>
          <View style={styles.strikeThrough} />
        </View>
      </View>
      <View
        style={{ flexDirection: "row", alignItems: "center", marginTop: 16 }}
      >
        <Text style={[styles.cost, { fontSize: 12, color: "#FA0000" }]}>
          Ở ĐÂU RẺ HƠN HOÀN TIỀN
        </Text>
        <Image
          source={require("../../assets/images/question.png")}
          style={{ width: 20, height: 20, objectFit: "cover", marginLeft: 8 }}
        />
      </View>
      <View style={{ marginTop: 15 }}>
        <TouchableOpacity
          style={[styles.btn, { position: "relative" }]}
          onPress={() =>
            navigation.navigate("ChooseColor", {
              product: phone.name,
              name: imgName,
              imgColor: img,
              colors: phone.colors,
              handleChooseColor: hanldeChooseColor,
            })
          }
        >
          <Text style={[styles.text, { paddingVertical: 8 }]}>
            {phone.colors.length} MÀU-CHỌN MÀU
          </Text>
          <Image
            source={require("../../assets/images/arrow.png")}
            style={{ width: 11, height: 14, position: "absolute", right: 30 }}
          />
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: 65 }}>
        <TouchableOpacity
          style={[
            styles.btn,
            { backgroundColor: "#EE0A0A", borderColor: "#CA1536" },
          ]}
        >
          <Text
            style={[
              styles.text,
              { paddingVertical: 9, fontSize: 20, color: "#F9F2F2" },
            ]}
          >
            CHỌN MUA
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    width: "100%",
    justifyContent: "space-around",
    paddingLeft: 18,
    paddingRight: 10,
    paddingBottom: 13,
    backgroundColor: "#fff",
  },
  text: {
    fontWeight: "400",
    fontSize: 15,
    color: "#000",
  },
  cost: {
    fontWeight: "700",
    fontSize: 18,
  },
  strikeThrough: {
    position: "absolute",
    left: 35,
    top: "50%",
    height: 1,
    width: 92,
    backgroundColor: "#00000094",
    transform: [{ translateY: -0.5 }],
  },
  btn: {
    width: "100%",
    backgroundColor: "transparent",
    borderColor: "#00000075",
    borderWidth: 1,
    flexDirection: "row",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default ProductDetail;
