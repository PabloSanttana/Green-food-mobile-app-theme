import React,{useState} from 'react'
import {Text,View, ImageBackground, Image, TouchableOpacity,StatusBar, ScrollView} from 'react-native'
import {useRoute, useNavigation} from '@react-navigation/native'
import Icon from 'react-native-vector-icons/Ionicons'
import LinearGradient from 'react-native-linear-gradient'

import styles from './styles'

export default function Detail(){
    const navigation = useNavigation()
    const route = useRoute()
    const data = route.params.item
    const [item, setItem] = useState(data)
    function navigateToBack(){
        navigation.goBack()
    }
    return (
        <View style={styles.container}>
            <StatusBar barStyle='light-content'/>
          <ImageBackground resizeMode='stretch' source={require('../../assets/header_detail.png')} style={{flex:1, alignItems:'center'}}>
            <View style={styles.image_container}>
                <Image source={data.image} style={styles.image} />
            </View>
            <View style={styles.back}>
                <TouchableOpacity onPress={navigateToBack}>
                    <Icon name='ios-arrow-round-back' size={40} color='#fff' />
                </TouchableOpacity>
                
            </View>
          </ImageBackground>
            <View style={styles.footer}>
                <ScrollView>
                    <View style={styles.status}>
                            <Text style={{color:'green'}}>AVALIABLE</Text>
                    </View>
                    <Text style={styles.textPrice}>{data.price}</Text>
                    <Text numberOfLines={2} style={styles.textName}>{data.name.toUpperCase()}</Text>
                    <Text style={styles.textDetail}>Food.com has a massive collection of recipes that are submitted, rated and reviewed by people who are passionate about food. From international cuisines to ..</Text>
                    <LinearGradient 
                     colors={['#009245','#8cc631']}  
                     start={{x:0,y:0}} 
                     end={{x:1,y:1}}  
                     style={styles.button}

                    >
                        <Text style={styles.textButton}>ORDER NOW</Text>
                    </LinearGradient>
                </ScrollView>
            </View>

        </View>
    )
}
