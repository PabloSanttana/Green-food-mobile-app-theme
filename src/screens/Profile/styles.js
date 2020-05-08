import {StyleSheet, Dimensions} from 'react-native'

const {height,width} = Dimensions.get('window')

export default StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#fff'
    },
    title:{
       
    },
    footer:{
        flex:1,
        paddingHorizontal:40,
        backgroundColor:'#fff'
    },
    image_container:{
        width: height * 0.5 * 0.5,
        height: height * 0.5 * 0.5,
        marginTop: (height * 0.5 * 0.5)/3,
    },
    image:{
        width:'100%',
        height:'100%',
        borderColor:'#fff',
        borderWidth:5,
        borderRadius:  (height * 0.5 * 0.5)/2

    },
    imageEdit:{
        backgroundColor:'#fff',
        width:50,
        height:50,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:25,
        position:'absolute',
        right:8,
        bottom:8
    },
    back:{
        position:'absolute',
        left:0,
        marginTop:30,
        marginLeft:15
    },
    status:{
        width:100,
        alignItems:'center',
        justifyContent:'center',
        borderWidth:2,
        borderRadius:50,
        borderColor:'green',
        paddingVertical:3,
        marginBottom:10
    },
    title:{
        marginVertical:5,
        fontSize:16,
        color:'green',
        fontWeight:'bold'
    },
    text:{
        color:'gray',
        paddingLeft:10,
        borderBottomColor:'gray',
        borderBottomWidth:0.5,
        paddingBottom:7
    },
    edit:{
        position:'absolute',
        right:0
    },
    button:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:30,
        paddingVertical:10,
        borderRadius:100
    },
    textButton:{
        color:'#fff',
        fontWeight:'bold',
        fontSize:18
    }
   
})