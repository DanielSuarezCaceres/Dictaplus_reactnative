import React, {Component} from 'react';
import {Platform, StyleSheet, Text, Image, View, TouchableWithoutFeedback, TextInput} from 'react-native';
import {Actions, Router, Scene, Stack} from 'react-native-router-flux';
import {heightPercentageToDP, widthPercentageToDP} from "../auxiliar/ScreenDimensions";
import GeneralButton from '../components/GeneralButton';
import Header from './Header';
import editProfileImageIcon from '../../img/baseline_add_a_photo_black_48dp.png';
import profileImage from '../../img/profile_icon.png';
import settingsIcon from '../../img/baseline_settings_black_48dp.png';

class Profile extends Component {
    render () {
        return (
            <View style={{flex:1}}>
                <View style={{flex:0.1}}><Header headerText={"  Mi perfil"}/></View>
                <View style={styles.container}>
                    <View style={styles.topContainer}>
                        <Image
                            source={profileImage}
                            style={{width: 80, height: 80}}
                        />
                    </View>
                    <View style={styles.middleContainer}>
                        <Text>Puntuación: 500 </Text>
                        <Text> Dictados realizados: 35</Text>
                    </View>
                    <View style={styles.bottomContainer}>
                        <Text>Nombre:</Text>
                        <Text>Daniel Suárez Cáceres</Text>
                        <Text>Correo electrónico:</Text>
                        <Text>daniel@hotmail.com</Text>
                        <Text>Fecha de registro:</Text>
                        <Text>16/06/2018</Text>
                    </View>
                </View>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 0.9,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#5c6bc0',
    },
    topContainer: {
        flex: 0.3,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 25,
        paddingBottom: 25,
        paddingLeft: 25,
        paddingRight: 25,
    },
    middleContainer: {
        flex: 0.2,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    bottomContainer: {
        flex: 0.5,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default Profile;