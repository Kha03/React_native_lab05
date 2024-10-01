import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductDetail from "./components/ProductDetail";
import ChooseColor from "./components/ChooseColor";
import { RouteProp } from "@react-navigation/native";
import RouteParams from "./model/type";

const Stack = createNativeStackNavigator<RouteParams>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="Home"
          component={ProductDetail}
          initialParams={{
            phone: {
              name: "Điện Thoại Vsmart Joy 3 - Hàng chính hãng",
              rating: 5,
              totalRating: 828,
              price: 1790000,
              discountPrice: 1790000,
              colors: [
                {
                  name: "Trắng",
                  color: "#C5F1FB",
                  image: require("./assets/images/vs_silver.png"),
                },
                {
                  name: "Đỏ",
                  color: "#F30D0D",
                  image: require("./assets/images/vs_red.png"),
                },
                {
                  name: "Đen",
                  color: "#000000",
                  image: require("./assets/images/vs_black.png"),
                },
                {
                  name: "Xanh dương",
                  color: "#234896",
                  image: require("./assets/images/vs_blue.png"),
                },
              ],
            },
          }}
        />
        <Stack.Screen name="ChooseColor" component={ChooseColor} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
