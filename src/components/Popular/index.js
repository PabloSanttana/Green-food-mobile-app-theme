import React,{useState, useEffect} from 'react'
import {Text,View, Animated,FlatList, Image} from 'react-native'

import styles from './styles'
import data_popular from '../../constants/data_popular'

export default function Popular(){
    const [animePopular, setAnimeMenu] = useState(new Animated.Value(200))
    const [data, setData] = useState(data_popular)
    useEffect(()=>{
        Animated.spring(animePopular,{
            toValue:0,
            speed:2,
            bounciness: 85,
            useNativeDriver:true
        }).start()
    },[])
    function Item({data}){
        return(
            <View style={styles.item}>
                <Image source={data.image} style={styles.image} />
                <Text numberOfLines={1} style={styles.name}>{data.name}</Text>
                <View style={{flexDirection:'row'}}>
                    {_rating(data.rating)}
                </View>
                <Text numberOfLines={2} style={styles.comment}>"{data.comment}"</Text>
            </View>
        )
    }
    function _rating(item){
        let rating = []
        for (let index = 0; index < item; index++) {
            rating.push(
                <Image key={index} source={require('../../assets/star.png')} style={{width:15, height:15}} resizeMode='cover'/>
            )
        }
        return rating;
       
    }
    return (
        <Animated.View style={[ styles.container, {transform:[{translateY: animePopular}]}]}>
          <FlatList
                    data={data}
                    renderItem={({ item }) => <Item data={item} />}
                    keyExtractor={(item,index) => index.toString()}
                    showsVerticalScrollIndicator={false}
                    numColumns={3}
                />
        </Animated.View >
    )
}
