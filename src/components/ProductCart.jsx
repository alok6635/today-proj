import { useNavigation } from "@react-navigation/native";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import IconHeart from 'react-native-vector-icons/FontAwesome';


const ProductCart = ({item, handleLiked }) => {
 const navigation = useNavigation();

    return (
        <TouchableOpacity onPress={()=>{
            navigation.navigate('PRODUCT_DETAILS',{item})}} style={styles.container} >
            <Image source={{ uri: item.image }} style={styles.coverImage} />
            <View style={styles.content}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.price}>${item.price}</Text>
            </View>
            <TouchableOpacity onPress={() => handleLiked(item)} style={styles.likeContainer}>
                {item.isLiked ? (
                    <IconHeart name="heart" size={26} color="#E55B5B" />
                ) : (
                    <IconHeart name="heart-o" size={26} color="#E55B5B" />
                )}
            </TouchableOpacity>
        </TouchableOpacity>
    );
};

export default ProductCart;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 10,
        position: 'relative',
    },
    coverImage: {
        height: 256,
        width: '90%',
        borderRadius: 20,
        marginVertical: 10,
        marginHorizontal: 10,
        marginLeft: 10,
    },
    title: {
        fontSize: 18,
        color: '#444444',
        fontWeight: '600',
    },
    price: {
        fontSize: 18,
        color: '#9C9C9C',
        fontWeight: '600',
    },
    content: {
        paddingLeft: 15,
    },
    likeContainer: {
        width: 40,
        height: 36,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 17,
        position: 'absolute',
        top: 22,
        right: 20,
    },
});
