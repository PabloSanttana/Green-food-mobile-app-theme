import React,{useState} from 'react'
import {Text,View, ImageBackground, Image, TouchableOpacity,StatusBar, ScrollView} from 'react-native'
import { useNavigation} from '@react-navigation/native'
import Icon from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import LinearGradient from 'react-native-linear-gradient'

import styles from './styles'
const data ={
    image: 'https://cdn.pixabay.com/photo/2019/11/29/21/30/girl-4662158_960_720.jpg',
    name:'Rebeca Santos silva',
    email:'rebeca.S.S@gmail.com',
    phone:'(00) 00000-0000'
}

export default function Profile(){
    const navigation = useNavigation()
    const [item, setItem] = useState(data)
    function navigateToBack(){
        navigation.goBack()
    }
    return (
        <View style={styles.container}>
            <StatusBar barStyle='light-content'/>
          <ImageBackground resizeMode='stretch' source={require('../../assets/header_detail.png')} style={{flex:1, alignItems:'center'}}>
            <View style={styles.image_container}>
                <Image source={{ uri:item.image}} style={styles.image} />
                <TouchableOpacity style={styles.imageEdit}>
                    <MaterialIcons name='edit' size={30} color='green'/>
                </TouchableOpacity>
               
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
                            <Text style={{color:'green'}}>Profile</Text>
                    </View>
                    <Text style={styles.title}>Name</Text>
                    <View>
                        <Text style={styles.text}>{item.name}</Text>
                        <TouchableOpacity style={styles.edit}>
                            <Feather  name='edit' size={20} color='green'/>
                        </TouchableOpacity>
                        
                    </View>
                   
                    <Text style={styles.title}>Email</Text>
                    <View>
                        <Text style={styles.text}>{item.email}</Text>
                        <TouchableOpacity style={styles.edit}>
                            <Feather  name='edit' size={20} color='green'/>
                        </TouchableOpacity>
                        
                    </View>
                   
                    <Text style={styles.title}>Phone</Text>
                    <View>
                        <Text style={styles.text}>{item.phone}</Text>
                        <TouchableOpacity style={styles.edit}>
                            <Feather  name='edit' size={20} color='green'/>
                        </TouchableOpacity>
                        
                    </View>

                    
                    <TouchableOpacity>
                        <LinearGradient 
                        colors={['#009245','#8cc631']}  
                        start={{x:0,y:0}} 
                        end={{x:1,y:1}}  
                        style={styles.button}

                        >
                            
                                <Text style={styles.textButton}>SAIR</Text>
                        
                        
                        </LinearGradient>
                    </TouchableOpacity>
                </ScrollView>
            </View>

        </View>
    )
}
