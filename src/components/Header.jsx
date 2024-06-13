import { useNavigation } from "@react-navigation/native";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import IconArrow from 'react-native-vector-icons/FontAwesome';


const Header =({isCart})=>{
    const navigation= useNavigation();

    return (
        <>
            <View style={styles.container}>
                <TouchableOpacity onPress={()=>navigation.navigate('HOME_STACK')} style={styles.appIconContainer}>
                    {
                        isCart? ( 
                        <IconArrow  name={"chevron-left"} color={"#E96E6E"}/> 
                    ) :
                        <Image source={require('../assets/img/app_icon.png')} style={styles.appIcon}/>
                    }
                </TouchableOpacity>
                <Image source={require('../assets/img/dp.png')} style={styles.dp}/>
            </View>
        </>
    )
}

export default Header;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    appIconContainer: {
        backgroundColor: "#FFFFFF",
        width: 44,
        height: 44,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    appIcon: {
        height: 28,
        width: 28
    },
    dp: {
        width: 44,
        height: 44,
        backgroundColor: '#FFFFFF',
        borderRadius: 22
    }
})
