import React, { useState } from 'react'
import { Text, ImageBackground, TouchableOpacity, View, TextInput, Animated, Dimensions, Image, StatusBar, KeyboardAvoidingView } from 'react-native'
import { TypingAnimation } from 'react-native-typing-animation';
import Icon from 'react-native-vector-icons/Entypo'
import {useNavigation} from '@react-navigation/native'

import styles from './styles'
const { width } = Dimensions.get('screen')

export default function Home() {
    const navigation = useNavigation()
    const [typin_email, setTypin_email] = useState(false)
    const [typin_password, setTypin_password] = useState(false)
    const [emailInput, setTEmailInput] = useState("")
    const [passwordInput, setTPasswordInput] = useState("")
    const [anime] = useState(new Animated.Value(180))
    const [anime2] = useState(new Animated.Value(-450))
    var time;
    const [login, setLogin] = useState(false)
    function hlandleFocus(value) {
        if (value === 'email') {
            setTypin_email(true)
            setTypin_password(false)
        }
        else {
            setTypin_email(false)
            setTypin_password(true)
        }
    }
    function handleLogin() {
        //setTypin_email(false)
       // setTypin_password(false)
        if (emailInput !== '' && passwordInput !== ''  ) {
            Animated.timing(anime, {
                toValue: -5,
                duration: 250,
                useNativeDriver: true
            }).start()
            Animated.timing(anime2, {
                toValue: -269,
                duration: 250,
                useNativeDriver: true
            }).start()

            time = setInterval(() => {
                setLogin(true)
                clearInterval(time)
                navigation.navigate('Home')
            }, 300)
        }
    }
    const Typing = <TypingAnimation dotColor="green" style={{ marginRight: 25, marginBottom: 10 }} />


    return (

        <View style={styles.container}>
            <StatusBar barStyle='light-content' />
            <View style={styles.header}>
                <ImageBackground
                    source={require('../../assets/login/header.png')}
                    style={styles.imageBackground}

                >
                    <Text style={styles.title}>Welcom Back</Text>
                    <Text style={styles.text}>Sing in to continue</Text>
                </ImageBackground>
            </View>
            <View style={styles.footer}>
                <Text style={[styles.footerTitle, { marginTop: 30 }]}>E-mail</Text>
                <View style={{ ...styles.action, marginBottom: 20 }}>
                    <TextInput placeholder="Your email..." autoCompleteType='off' autoCorrect={false} value={emailInput} onChangeText={setTEmailInput} style={styles.input} onFocus={() => hlandleFocus('email')} />
                    {typin_email && Typing}
                </View>
                <Text style={styles.footerTitle}>Password</Text>
                <View style={styles.action}>
                    <TextInput placeholder="Your Password..." secureTextEntry={true} value={passwordInput} onChangeText={setTPasswordInput} style={styles.input} onFocus={() => hlandleFocus('password')} />
                    {typin_password && Typing}
                </View>
                <TouchableOpacity onPress={handleLogin}>
                    <View style={styles.buttonContainer}>


                        <View style={{ ...styles.animation, width: width - 40 }}>
                            {login ? <Icon name="check" size={23} color="#fff" /> : <Text style={styles.textLogin}>Login</Text>}

                        </View>

                        <Animated.View style={{
                            height: 40, width: 40, top: 18, lef: 0, backgroundColor: 'green', position: 'absolute',
                            transform: [{ translateX: anime2 }],
                        }} >
                            <Image source={require('../../assets/login/left.png')} style={{ height: 69, width: 312 }} />

                        </Animated.View>


                        <Animated.View style={{
                            height: 40, width: 40, position: 'absolute', top: 20.5,
                            transform: [{ translateX: anime }],
                        }} >
                            <Image source={require('../../assets/login/right.png')} style={{ height: 68, width: 310 }} />

                        </Animated.View>

                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}