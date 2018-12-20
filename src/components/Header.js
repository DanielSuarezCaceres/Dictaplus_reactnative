import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TouchableWithoutFeedback, TextInput} from 'react-native';
import {Actions, Router, Scene, Stack} from 'react-native-router-flux';
import {heightPercentageToDP, widthPercentageToDP} from "../auxiliar/ScreenDimensions";
import iconMenu from '../../img/baseline_menu_black_48dp.png';

const Header =  (props) => {
    return (
        <View style={styles.headerContainer}>
            <TouchableWithoutFeedback
                onPress={Actions.drawerOpen}
            >
                <Image
                source={iconMenu}
                style={{width: widthPercentageToDP('7%'), height: heightPercentageToDP('7%')}}
            />
            </TouchableWithoutFeedback>
            <Text style={styles.textStyle}>{props.headerText}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        flex:1,
        flexDirection: 'row',
        backgroundColor: '#26418f',
        fontWeight: "bold",
        fontSize: 20,
        paddingLeft: 5,
        alignItems: 'center',
    },
    textStyle: {
        fontWeight: "bold",
        fontSize: 20,
        color: "#ffffff",
    }
});

export default Header;