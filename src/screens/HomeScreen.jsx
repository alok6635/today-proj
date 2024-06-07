import { StyleSheet, Text, TextInput, View, } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../components/Header';
import IconSearch from 'react-native-vector-icons/FontAwesome';


const HomeScreen = () => {
    return (
        <>
            <LinearGradient colors={['#FFFBFC', '#FDF0F3']} style={styles.container}>
                <Header />
                <Text style={styles.matchText}>Match Your Style</Text>
                <View style={styles.inputContainer}>
                    <View style={styles.iconContainer}>
                    <IconSearch name="search" size={26} color="#B6B6B6" />
                    </View>
                    <TextInput style={styles.textInput} />
                </View>
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
    matchText:{
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
        height:48,
        borderRadius:12,
        alignItems:'center',
        flexDirection:'row',
        marginVertical:20,
        paddingHorizontal:20,
    },
    iconContainer:{
  marginHorizontal:10
    },
    textInput:{
          flex:1,
    }
})