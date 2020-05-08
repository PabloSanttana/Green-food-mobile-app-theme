import React,{useState,useEffect} from 'react'
import {Text,View, TouchableOpacity, FlatList, Image , Animated, TextInput, Keyboard} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/AntDesign'
import {useNavigation} from '@react-navigation/native'

import styles from './styles'
import {data_all} from '../../constants/data_all'


export default function All(){
    const navigation = useNavigation()
    const [data, setData] = useState(data_all)
    const [data_temp, setData_temp] = useState(data_all)
    const [animeAll, setAnimeAll] = useState(new Animated.Value(200))
    const [searchInput, setSearchInput] = useState('')
    const [searchActive, setSearchActive] = useState(false)
    const [searchFalid, setSearchFalid] = useState(false)
  

    useEffect(()=>{
        Animated.spring(animeAll,{
            toValue:0,
            speed:2,
            bounciness: 85,
            useNativeDriver:true
        }).start()
      
           
    },[])
    

    function _rating(item){
        let rating = []
        for (let index = 0; index < item; index++) {
            rating.push(
                <Image key={index} source={require('../../assets/star.png')} style={{width:15, height:15}} resizeMode='cover'/>
            )
        }
        return rating;
       
    }
    function navigateToDetail(item){
        navigation.navigate('Detail',{item})
    }
    function handleSearch(text){
        setSearchInput(text)
        let data = []
        data_temp.map((value)=>{
            if(value.name.indexOf(text) > -1){
                data.push(value)
            }
        })
        if(data.length === 0){
            setSearchFalid(true)
        }else{
            setSearchFalid(false)
        }
        setData(data)
    }

   function Item({data}){
       return(
        <LinearGradient  
        colors={['#009245','#8cc631']}  
        start={{x:0,y:1}} 
        end={{x:1,y:0}}  
        style={styles.item}>
            <View style={styles.imageContainer}>
                <Image source={data.image} style={styles.image} />
            </View>
            <View style={styles.content}>
                <Text style={styles.name}>{data.name}</Text>
                <View style={styles.rating}>
                    {_rating(data.rating)}
                </View>
                <View style={styles.priceContainer}>
                    <View style={styles.price}>
                        <Text style={styles.priceText}>{data.price}</Text>
                    </View>
                </View>
            </View>
          
                <TouchableOpacity onPress={()=>navigateToDetail(data)} style={styles.button}>
                    <Icon name="arrowright" size={20} color='green'/>
                </TouchableOpacity>
        </LinearGradient>
       )
   }

    return (
        <Animated.View  style={[styles.container, {transform:[{translateX: animeAll}]}]}>
            <View style={styles.section}>
                <TextInput placeholder='Search...'   value={searchInput} style={{flex:1, marginLeft:10}} onFocus={() => setSearchActive(true)}  onChangeText={handleSearch} />
                { searchActive && <TouchableOpacity onPress={() => handleSearch('')}><Icon name='closecircle' color='green' size={25} /></TouchableOpacity> }
            </View>
            {searchFalid && <Text style={{textAlign:'center', color:'green', fontSize:18, fontWeight:'bold'}}>Not found!</Text> }
                <FlatList
                    data={data}
                    renderItem={({ item }) => <Item data={item} />}
                    keyExtractor={item => item.id}
                    showsVerticalScrollIndicator={false}
                />
        </Animated.View>
    )
}
