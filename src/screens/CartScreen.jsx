import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Header from '../components/Header';
import CartCard from "../components/CartCard";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cartscreen = () => {
    const {carts}= useContext(CartContext);

    return (
        <>
            <LinearGradient colors={['#FFFBFC', '#FDF0F3']} style={styles.container}>
                <View style={styles.headerContainer}>
                    <Header isCart={true} />
                </View>
                <FlatList
                 data={carts}
                renderItem={CartCard}
                ListFooterComponent={
                    <>
                 <View style={styles.priceContainer}>
                    <View style={styles.priceAndTitle}>
                        <Text style={styles.text}>Total :</Text>
                        <Text style={styles.text}>$119.7</Text>
                    </View>
                </View>
                <View style={styles.priceAndTitle}>
                    <Text style={styles.text}>Shipping :</Text>
                    <Text style={styles.text}>$0.0</Text>
                </View>
                <View style={styles.divider}></View>
                <View style={styles.priceAndTitle}>
                    <Text style={styles.text}>Grand Total :</Text>
                    <Text style={[styles.text,{color:'black', fontWeight:'700'}]}>$119.7</Text>
                </View>
                </>
                }
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{paddingBottom:100}}
                />
               
                <TouchableOpacity style={styles.checkoutContainer}>
                    <Text style={styles.buttonText}>Checkout</Text>
                </TouchableOpacity>
            </LinearGradient>
        </>
    )
}

export default Cartscreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
    },
    headerContainer: {
        marginBottom: 20
    },
    priceContainer: {
        marginTop: 40,
    },
    priceAndTitle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginVertical:10
    },
    text: {
        color: '#757575',
        fontSize: 18,
    },
    divider:{
      borderWidth:2,
      borderColor:'#C0C0C0',
      marginVertical:10
    },
    checkoutContainer:{
         backgroundColor:'#E96E6E',
         width:'100%',
         marginVertical:10,
        borderRadius:10
    },
    buttonText:{
        fontSize:25,
        color:'white',
        textAlign:'center',
        padding:10,
    }
})