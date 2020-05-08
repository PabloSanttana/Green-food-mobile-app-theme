import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    container: {
        flex:1,
        alignItems:'center',
       marginHorizontal:5,
       paddingTop:10,
       paddingBottom:5
    },
    title:{
        color:'#000',
        textAlign:'center',
        fontSize: 20,
        marginHorizontal:2,
        fontWeight:'bold'
    },
    item:{
        margin:10,
        alignItems:'center'
    },
    image:{
        width:80,
        height:80,
        borderRadius:40,
        borderWidth:2,
        borderColor:'green'
    },
    name:{
        fontWeight:'bold',
        color:'green'
    },
    comment:{
        width:90,
        textAlign:'center',
        fontStyle:'italic',
        marginTop:5
    }
   
})