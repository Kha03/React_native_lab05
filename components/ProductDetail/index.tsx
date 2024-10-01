import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Rating from "../Rating";

export default function ProductDetail() {
  return (
    <View style={styles.Container}>
      <View style={{ width: 300, height: 360, alignSelf: "center" }}>
        <Image
          source={require("../../assets/images/vs_blue.png")}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </View>
      <View style={{}}>
        <Text style={styles.text}>
          Điện Thoại Vsmart Joy 3 - Hàng chính hãng
        </Text>
      </View>
      <View
        style={{ flexDirection: "row", alignItems: "center", marginTop: 9 }}
      >
        <Rating rating={5} />
        <Text style={[styles.text, { marginLeft: 23 }]}>
          (Xem 828 đánh giá)
        </Text>
      </View>
      <View
        style={{ flexDirection: "row", alignItems: "center", marginTop: 13 }}
      >
        <Text style={[styles.cost, {}]}>1.790.000 đ</Text>
        <View
          style={{
            position: "relative",
            alignItems: "flex-start",
          }}
        >
          <Text style={[styles.text, { marginLeft: 44, color: "#00000094" }]}>
            1.790.000 đ
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
      <View>
        <TouchableOpacity style={[styles.btn, { position: "relative" }]}>
          <Text style={[styles.text, { paddingVertical: 8 }]}>
            4 MÀU-CHỌN MÀU
          </Text>
          <Image
            source={require("../../assets/images/arrow.png")}
            style={{ width: 11, height: 14, position: "absolute", right: 30 }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    width: "100%",
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
    marginTop: 16,
    justifyContent: "center",
    alignItems: "center",
  },
});
