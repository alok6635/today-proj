import { Image, StyleSheet, View } from "react-native";

const Header = () => {
    return (
        <>
            <View style={styles.container}>
                <View style={styles.appIconContainer}>
                    <Image source={require('../assets/img/app_icon.png')} style={styles.appIcon} />
                </View>
                <Image source={require('../assets/img/dp.png')} style={styles.dp} />
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
