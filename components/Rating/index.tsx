import { Image, Text, View } from "react-native";

interface RatingProps {
    rating: number;
}
export default function Rating({rating}: RatingProps) {
    const stars = new Array(rating).fill(0);
    return (
        <View style={{flexDirection: 'row', gap: 2}}>
            {stars.map((_, index) => (
                <Image
                    key={index}
                    source={require('../../assets/images/star.png')}
                    style={{ width: 23, height: 25, objectFit: 'cover' }}
                />
            ))}
        </View>
    );
}