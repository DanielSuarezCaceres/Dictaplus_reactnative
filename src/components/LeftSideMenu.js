import React, {Component} from 'react';
import {Platform, Linking, StyleSheet, Text, View, Image, TouchableWithoutFeedback, TextInput} from 'react-native';
import {Actions, Router, Scene, Stack} from 'react-native-router-flux';
import {heightPercentageToDP, widthPercentageToDP} from "../auxiliar/ScreenDimensions";
import GeneralButton from '../components/GeneralButton';
import profileImage from '../../img/profile_icon.png';
import LinearGradient from "react-native-linear-gradient";
import { SocialIcon } from "react-native-elements";

const LeftSideMenu = () => {
    return (
        <LinearGradient colors={['#8e99f3','#5c6bc0','#26418f']} style={{flex:1}}>
            <View style={{flex:1, flexDirection: 'column', justifyContent: 'center'}}>
                <View style={styles.topContainer}>
                    <TouchableWithoutFeedback
                        onPress={Actions.profile}
                    >
                        <Image
                            source={profileImage}
                            style={{width: 80, height: 80}}
                        />
                    </TouchableWithoutFeedback>

                    <View style={{alignItems: 'flex-start'}}>
                        <TouchableWithoutFeedback
                            onPress={Actions.login}
                        >
                            <Text style={styles.menuTextStyle}>Login</Text>
                        </TouchableWithoutFeedback>

                        <TouchableWithoutFeedback
                            onPress={Actions.register}
                        >
                            <Text style={styles.menuTextStyle}>Registro</Text>
                        </TouchableWithoutFeedback>

                        <TouchableWithoutFeedback
                            onPress={Actions.dictationSelector}
                        >
                            <Text style={styles.menuTextStyle}>Hacer dictado</Text>
                        </TouchableWithoutFeedback>

                        <TouchableWithoutFeedback
                            onPress={Actions.friends}
                        >
                            <Text style={styles.menuTextStyle}>Amigos</Text>
                        </TouchableWithoutFeedback>
                    </View>
                </View>
                <View style={styles.bottomContainer}>
                    <View style={{justifyContent: 'center'}}>
                        <Text style={{color: 'white', fontSize: 14, paddingLeft:20, paddingBottom: 15}}>
                            Talk about us on your social media!
                        </Text>
                    </View>
                    <SocialIcon
                        onPress={() =>Linking.openURL('https://twitter.com')}
                        type='twitter'
                    />
                    <SocialIcon
                        onPress={() => Linking.openURL('https://facebook.com')}
                        type='facebook'
                    />
                    <SocialIcon
                        onPress={() => Linking.openURL('https://instagram.com')}
                        type='instagram'
                    />
                </View>
            </View>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    topContainer: {
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
        //backgroundColor: "#5c6bc0",
    },
    bottomContainer: {
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    menuTextStyle: {
        color: '#ECE9EF',
        fontSize: 18,
        fontWeight: 'bold',
        paddingTop: 5,
        paddingBottom: 5,
    }
});

export default LeftSideMenu;