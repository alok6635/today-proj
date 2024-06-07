import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Category=({item,selectedCategory,setSelectedCategory})=>{
    return(
        <>
        <TouchableOpacity onPress={()=>setSelectedCategory(item)}>
            <Text style={[styles.trend,selectedCategory === item && {color:"#ffff", backgroundColor:'#E96E6E'}]}>{item}</Text>
        </TouchableOpacity>
        </>
    )
}
export default Category;

const styles= StyleSheet.create({
   trend:{
     fontSize:16,
     fontWeight:'600',
     backgroundColor:'#DFDCDC',
     color:'#938F8F',
     padding:10,
     textAlign:'center',
     borderRadius:16,
     marginHorizontal:5,
     paddingHorizontal:20,
     paddingVertical:10,
   }
})