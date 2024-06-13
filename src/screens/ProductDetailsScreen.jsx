import React, { useContext, useState } from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Header from "../components/Header";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation, useRoute } from '@react-navigation/native';
import { CartContext } from '../context/CartContext';
const imageUrl = "https://res.cloudinary.com/dlc5c1ycl/image/upload/v1710567612/vy2q98s8ucsywwxjx2cf.png";



const sizes = ['S','M','L','XL'];
const colorsArray = ["#91A1B0", "#B11D1D", "#1F44A3", "#9F632A", "#1D752B", "#000000"];

const ProductDetailsScreen = () => {
    const navigation= useNavigation()
    const {addToCart}= useContext(CartContext)
    const route = useRoute();
    const item = route.params.item;
    console.log(route.params.item);
    const [selectedSize, setSelectedSize] = useState(null);
    const [selectedcolor, selSelectedColor] = useState(null);
    // console.log('selectedSize', selectedSize);

    const handleAddToCart=(item)=>{
        addToCart(item);
        item.size=selectedSize;
        item.color=selectedcolor;
        navigation.navigate('CART')
    }

    return (
        <LinearGradient colors={['#FFFBFC', '#FDF0F3']} style={styles.container}>
            <View style={styles.headerContainer}>
                <Header />
            </View>
            <Image source={{ uri: item.image }} style={styles.coverImage} />
            <View style={styles.contentContainer}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={[styles.title, styles.price]}>${item.price}</Text>
            </View>
            <Text style={[styles.sizeText, styles.title]}>Size</Text>
            <View style={styles.sizeContainer}>
                {
                    sizes.map((size) => {
                        return (
                            <TouchableOpacity style={styles.sizeValueContainer} onPress={() => setSelectedSize(size)}>
                                <Text style={[styles.sizeValue, selectedSize == size && { color: 'red' }]}>{size}</Text>
                            </TouchableOpacity>
                        )
                    })
                }
            </View>
            <Text style={[styles.title, styles.colorText]}>Colors</Text>
            <View style={styles.colorContainer}>
                {
                    colorsArray.map((color) => {
                        return (
                            <TouchableOpacity onPress={() => selSelectedColor(color)}
                                style={[styles.circleBorder, selectedcolor === color && { borderColor: color, borderWidth: 2 }]}>
                                <View style={[styles.circle, { backgroundColor: color }]}></View>
                            </TouchableOpacity>
                        )
                    })
                }
            </View>

            {/* button container */}
            <TouchableOpacity style={styles.button} onPress={()=>handleAddToCart(item)}>
                <Text style={styles.buttonText}>Add to cart</Text>
            </TouchableOpacity>
        </LinearGradient>
    );
};
export default ProductDetailsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerContainer: {
        padding: 15,
    },
    coverImage: {
        width: '100%',
        height: 400,
    },
    contentContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
        marginHorizontal: 20,
        marginVertical: 5
    },
    title: {
        fontSize: 20,
        color: '#444444',
        fontWeight: '500',
    },
    price: {
        color: '#4D4C4C',
    },
    sizeText: {
        marginHorizontal: 20
    },
    sizeContainer: {
        flexDirection: 'row',
        marginHorizontal: 20,
    },
    sizeValueContainer: {
        height: 36,
        width: 36,
        borderRadius: 18,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10
    },
    sizeValue: {
        fontSize: 18,
        fontWeight: '700'
    },
    colorText: {
        marginHorizontal: 20,
        marginTop: 10,
    },
    colorContainer: {
        flexDirection: 'row',
        marginHorizontal: 20,
        alignItems: 'center'
    },
    circleBorder: {
        height: 48,
        width: 48,
        borderRadius: 24,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 5
    },
    circle: {
        height: 36,
        width: 36,
        borderRadius: 18,
        marginHorizontal: 10
    },
    button: {
        backgroundColor: '#E96E6E',
        padding: 10,
        margin: 10,
        borderRadius: 20
    },
    buttonText: {
        fontSize: 24,
        fontWeight: "600",
        color: 'white',
        textAlign: 'center',

    }
});
