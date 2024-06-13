import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
const imgUrl = "https://res.cloudinary.com/dlc5c1ycl/image/upload/v1710567612/vy2q98s8ucsywwxjx2cf.png";
import IconDelete from 'react-native-vector-icons/AntDesign';

const CartCard =({item})=> {
    return (
        <View style={styles.container}>
            <Image source={{uri: item.image}} style={styles.coverImage} />
            <View style={styles.cardContent}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.price}>${item.price}</Text>
                <View style={styles.circleSizeContainer}>
                    <View style={styles.circle}></View>
                    <View style={styles.sizeCircle}>
                        <Text style={styles.sizeText}>L</Text>
                    </View>
                </View>
            </View>
            <TouchableOpacity style={styles.deleteButton}>
                <IconDelete name={"delete"} size={22} color={"#E96E6E"} />
            </TouchableOpacity>
        </View>
    );
};
export default CartCard;

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
        flexDirection: 'row',
        alignItems: 'center', 
    },
    coverImage: {
        height: 125,
        width: "25%",
        borderRadius: 10,
    },
    cardContent: {
        flex: 1,
        marginHorizontal: 10,
    },
    title: {
        fontSize: 20,
        color: "#444444",
        fontWeight: '500'
    },
    price: {
        color: '#797979',
        marginVertical: 10,
        fontSize: 18,
    },
    circleSizeContainer: {
        flexDirection: 'row',
        marginHorizontal: 10
    },
    circle: {
        height: 32,
        width: 32,
        borderRadius: 16,
        backgroundColor: "#7094C1",
    },
    sizeCircle: {
        backgroundColor: 'white',
        height: 32,
        width: 32,
        borderRadius: 16, 
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10
    },
    sizeText: {
        fontSize: 18,
        fontWeight: "500"
    },
    deleteButton: {
        padding: 10, 
    }
});
