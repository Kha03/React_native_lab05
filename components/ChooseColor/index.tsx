import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageRequireSource,
} from "react-native";
import { NavigationProp, RouteProp } from "@react-navigation/native";
import RouteParams from "../../model/type";

type ChooseColorProps = {
  route: RouteProp<RouteParams, "ChooseColor">;
  navigation: NavigationProp<any>;
};

const ChooseColor: React.FC<ChooseColorProps> = ({ route, navigation }) => {
  const { product, name, imgColor, colors, handleChooseColor } = route.params;
  const [color, setColor] = React.useState<ImageRequireSource>(imgColor);
  const [nameColor, setNameColor] = React.useState(name);
  const hanldeChoose = (color: ImageRequireSource, nameColor: string) => {
    if (handleChooseColor) {
      handleChooseColor(color, nameColor);
      setColor(color);
      setNameColor(nameColor);
    }
  };

  return (
    <View style={styles.Container}>
      <View style={styles.contentProduct}>
        <Image
          source={color}
          style={{ width: 112, height: 132 }}
          resizeMode="contain"
        />
        <View style={{ marginLeft: 17, gap: 9 }}>
          <Text style={[styles.text, { fontWeight: "400", width: 164 }]}>
            {product}
          </Text>
          <Text style={[styles.text, { fontWeight: "400" }]}>
            Màu: <Text style={[styles.text]}>{nameColor}</Text>
          </Text>
          <Text style={[styles.text, { fontWeight: "400" }]}>
            Cung cấp bởi <Text style={[styles.text]}>Tiki Tradding</Text>
          </Text>
          <Text style={[styles.text, { fontSize: 18 }]}>1.790.000 đ</Text>
        </View>
      </View>

      <View
        style={{
          backgroundColor: "#C4C4C4",
          paddingHorizontal: 17,
          height: "100%",
        }}
      >
        <Text
          style={{
            fontSize: 18,
            fontWeight: "400",
            marginTop: 10,
          }}
        >
          Chọn một màu bên dưới
        </Text>

        <View style={{ alignItems: "center" }}>
          {colors.map((color, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => hanldeChoose(color.image, color.name)}
              style={[
                styles.colorBox,
                { backgroundColor: color.color, marginTop: 13 },
              ]}
              activeOpacity={1}
            />
          ))}
        </View>

        <TouchableOpacity
          style={{
            backgroundColor: "#1952E294",
            padding: 15,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: "#CA1536",
            alignItems: "center",
            marginTop: 20,
          }}
          onPress={() => navigation.goBack()}
        >
          <Text style={{ color: "#fff", fontSize: 20, fontWeight: "700" }}>
            XONG
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  contentProduct: {
    flexDirection: "row",
    paddingTop: 9,
    paddingBottom: 12,
    height: 150,
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 15,
    fontWeight: "700",
    color: "#000",
  },
  colorBox: {
    width: 85,
    height: 80,
  },
});

export default ChooseColor;
