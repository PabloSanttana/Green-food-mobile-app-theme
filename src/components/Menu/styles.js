import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    container: {
        flex:1,
        marginHorizontal:5,
        paddingTop:10,
        paddingBottom:5
    },
    type:{
        fontWeight:'bold',
        fontSize:18
    },
    item:{
        marginTop:10,
        flexDirection:'row',
        paddingHorizontal:15,
        paddingVertical:10,
        borderRadius:10
    },
    item_type:{
        flex:1,
        alignItems:'center',
        marginRight:10
    },
    image:{
        width:80,
        height:80,
        borderRadius:40,
        borderWidth:2,
        borderColor:'#fff'
    },
    name:{
        marginTop:10,
        color:'#fff',
        fontSize:15
    }
   
})