import React,{useState, useEffect} from 'react'
import {Text,View, Animated, FlatList, Image, TouchableOpacity} from 'react-native'
import {useNavigation } from '@react-navigation/native'

import styles from './styles'
import data_menu from '../../constants/data_menu'

export default function Menu(){
    const navigation = useNavigation()
    const [animeMenu, setAnimeMenu] = useState(new Animated.Value(-200))
    const [data, setData] = useState(data_menu)
    useEffect(()=>{
        Animated.spring(animeMenu,{
            toValue:0,
            speed:2,
            bounciness: 85,
            useNativeDriver:true
        }).start()
    },[])
    function navigateToDetail(item){
        navigation.navigate('Detail',{item})
    }
    function ItemType({data}){
        return(
            <TouchableOpacity onPress={() => navigateToDetail(data)} style={styles.item_type}>
                <Image source={data.image} style={styles.image} />
                <Text style={styles.name}>{data.name}</Text>
            </TouchableOpacity>
        )
    }

    function Item({data}){
        return(
            <View style={{flex:1,marginBottom:20}}>
                <Text style={[styles.type,{color: data.color}]}>{data.type}</Text>
                <View style={[styles.item,{backgroundColor: data.color}]}>
                <FlatList
                    data={data.data}
                    renderItem={({ item }) => <ItemType data={item} />}
                    keyExtractor={(item,index) => index.toString()}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                />
                </View>
            </View>
        )
    }


    return (
        <Animated.View style={[ styles.container, {transform:[{translateX: animeMenu}]}]}>
           <FlatList
                    data={data}
                    renderItem={({ item }) => <Item data={item} />}
                    keyExtractor={(item,index) => index.toString()}
                    showsVerticalScrollIndicator={false}
                    
                />


        </Animated.View>
    )
}