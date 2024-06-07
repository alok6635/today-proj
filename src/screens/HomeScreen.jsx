import { FlatList, StyleSheet, Text, TextInput, View, } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import IconSearch from 'react-native-vector-icons/FontAwesome';
import Header from '../components/Header';
import Category from '../components/Category';
import { useState } from 'react';

const categories = ['Trending Now', 'All', 'New', 'Mens', 'Womens']

const HomeScreen = () => {
    const[selectedCategory,setSelectedCategory]=useState(null);

    return (
        <>
            <LinearGradient colors={['#FFFBFC', '#FDF0F3']} style={styles.container}>
    {/* header */}
                <Header />
                <Text style={styles.matchText}>Match Your Style</Text>
     {/* input container */}
                <View style={styles.inputContainer}>
                    <View style={styles.iconContainer}>
                        <IconSearch name="search" size={26} color="#B6B6B6" />
                    </View>
                    <TextInput style={styles.textInput} />
                </View>
     {/* category */}
                <FlatList
                    data={categories}
                    renderItem={({item})=><Category
                    item={item} 
                    selectedCategory={selectedCategory} 
                    setSelectedCategory={setSelectedCategory}/>}
                    keyExtractor={(item) => item}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                />
            </LinearGradient>
        </>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },
    matchText: {
        fontSize: 28,
        lineHeight: 42,
        color: "#000000",
        marginTop: 25,
        fontFamily: 'Poppins',
        fontWeight: '400',
    },
    inputContainer: {
        backgroundColor: '#FFFFFF',
        height: 48,
        borderRadius: 12,
        justifyContent: 'center',
        height: 48,
        borderRadius: 12,
        alignItems: 'center',
        flexDirection: 'row',
        marginVertical: 20,
        paddingHorizontal: 20,
    },
    iconContainer: {
        marginHorizontal: 10
    },
    textInput: {
        flex: 1,
    }
})