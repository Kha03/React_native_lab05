import { ImageRequireSource } from "react-native";

type RouteParams = {
  Home: {
    phone: {
      name: string;
      rating: number;
      totalRating: number;
      price: number;
      discountPrice: number;
      colors: { name: string; color: string; image: ImageRequireSource }[];
    };
  };
  ChooseColor: {
    product: string;
    name: string;
    imgColor: ImageRequireSource;
    colors: { name: string; color: string; image: ImageRequireSource }[];
    handleChooseColor: (color: ImageRequireSource, name: string) => void;
  };
};

export default RouteParams;
// const phone = {
//   name: "Điện Thoại Vsmart Joy 3 - Hàng chính hãng",
//   rating: 5,
//   totalRating: 828,
//   price: 1790000,
//   discountPrice: 1790000,
//   colors: [
//     {
//       color: "#C5F1FB",
//       image: 'require("../../assets/images/black.png")',
//     },
//     {
//       color: "#F30D0D",
//       image: 'require("../../assets/images/black.png")',
//     },
//     {
//       color: "#000000",
//       image: 'require("../../assets/images/black.png")',
//     },
//     {
//       color: "#234896",
//       image: 'require("../../assets/images/black.png")',
//     },
//   ],
// };
