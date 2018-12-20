import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TouchableWithoutFeedback, TextInput} from 'react-native';
import {Actions, Router, Scene, Stack} from 'react-native-router-flux';
import {heightPercentageToDP, widthPercentageToDP} from "../auxiliar/ScreenDimensions";
import GeneralButton from '../components/GeneralButton';
import profileImage from '../../img/profile_icon.png';
import LinearGradient from "react-native-linear-gradient";

const LeftSideMenu = () => {
    return (
        <LinearGradient colors={['#8e99f3','#5c6bc0','#26418f']} style={{flex:1}}>
        <View style={styles.menuContainer}>
            <TouchableWithoutFeedback
                onPress={Actions.profile}
            >
            <Image
                source={profileImage}
                style={{width: 80, height: 80}}
            />
            </TouchableWithoutFeedback>

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
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    menuContainer: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        //backgroundColor: "#5c6bc0",
        fontWeight: "bold",
        fontSize: 20,
    },
    menuTextStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingTop: 5,
        paddingBottom: 5,
    }
});

export default LeftSideMenu;