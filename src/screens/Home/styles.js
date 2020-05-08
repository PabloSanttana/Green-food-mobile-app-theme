import {StyleSheet, Dimensions} from 'react-native'

const { width,height} = Dimensions.get('window')

export default StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#fff',
    },
    header:{
        marginTop:20,
        position:'absolute'
      
    },
    headerBackgroun:{
        width: width * 0.4,
        height: width * 0.4,
        alignItems:'center'
    },
    title:{
        color:'#fff',
        marginTop:25,
        fontWeight:'bold',
        fontSize:25
    },
    tabbarContainer:{
        flex:1,
        marginTop: width * 0.35,
        marginHorizontal:30
       
    },
    tabbar:{
       width: '100%',
       alignItems:'center',
        justifyContent:'space-around',
       flexDirection:'row',
    },
    tabbarTitle:{
        fontSize: 16,
        width: width/3 -30,
        height: 40,
        textAlign:"center",
        fontWeight:'500',
        borderBottomColor:'green',
        color:'gray'
    },
    tabbarTitleActive:{
        color:'green',
        fontWeight:'bold',
        borderBottomWidth: 4
    },
    user:{
        position:'absolute',
        marginTop:50,
        right:55
    }
    
   
})