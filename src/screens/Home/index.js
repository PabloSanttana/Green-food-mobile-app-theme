import React,{useState,useEffect} from 'react'
import {Text,View, TouchableOpacity,ImageBackground, Animated,StatusBar } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import {useNavigation} from '@react-navigation/native'

import styles from './styles'
import All from '../../components/All'
import Menu from '../../components/Menu'
import Popular from '../../components/Popular'

export default function Home(){
    const navigation = useNavigation()
    const[activeTab, setActiveTab] = useState({
        all: true,
        menu: false,
        popular: false
    }) 
   

    function handleActiveTab(route){
        
       if(route === 'all'){
        setActiveTab({
            all: true,
            menu: false,
            popular: false
        })
       }else if(route === 'menu'){
        setActiveTab({
            all: false,
            menu: true,
            popular: false
        })
       }else{
        setActiveTab({
            all: false,
            menu: false,
            popular: true
        })
       }
          
               
    }
    

    return (
        <View style={styles.container}>
            <StatusBar barStyle='dark-content' />
            <View style={styles.header}>
               <ImageBackground style={styles.headerBackgroun} source={require('../../assets/header.png')} resizeMode='contain'>
                <Text style={styles.title}>Home</Text>
               </ImageBackground>
            </View>
            <TouchableOpacity style={styles.user} onPress={()=>navigation.navigate('Profile')}>
                <Icon name='user-circle-o' size={30} color='green'/>
               </TouchableOpacity>
            <View style={styles.tabbarContainer}>
                <View style={styles.tabbar}>
                    <TouchableOpacity onPress={() =>handleActiveTab('all')}>
                    <Animated.Text style={[styles.tabbarTitle, activeTab.all ? styles.tabbarTitleActive: {} ]}>All</Animated.Text >
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() =>handleActiveTab('menu')} >
                    <Text style={[styles.tabbarTitle, activeTab.menu ? styles.tabbarTitleActive: {} ]}>Menu</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() =>handleActiveTab('popular')} >
                    <Text style={[styles.tabbarTitle, activeTab.popular ? styles.tabbarTitleActive: {} ]}>Popular</Text>
                    </TouchableOpacity>
                </View>

                { activeTab.all && <All/>  }  
                { activeTab.menu &&  <Menu />   }   
                { activeTab.popular && <Popular/>  } 
            </View>
              
               
        </View>
    )
}
