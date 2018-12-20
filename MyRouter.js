import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {ActionConst, Actions, Router, Scene, Stack} from 'react-native-router-flux';
import Home from './src/components/Home';
import Login from './src/components/Login';
import Register from './src/components/Register';
import Splash from './src/components/Splash';
import Header from './src/components/Header';
import Profile from './src/components/Profile';
import DictationSelector from './src/components/DictationSelector';
import DictationPage from './src/components/DictationPage';
import leftSideMenu from './src/components/LeftSideMenu';

const RouterNavigator = () => (
    <Router backAndroidHandler={onBackAndroid}>
        <Scene key="root"
               navBar={Header}
               drawer={true}
               drawerWidth={150}
               contentComponent={leftSideMenu}
        >
            <Scene key="splash"
                   initial={true}
                   navigationBarStyle={styles.title}
                   component={Splash}
                   hideNavBar={true}
            />
            <Scene key="home"
                   navigationBarStyle={styles.title}
                   component={Home}
                   title="Inicio"
            />
            <Scene key="login"
                   component={Login}
                   hideNavBar={true}
                   drawer={false} // No esconde la barra esta mierda
            />
            <Scene key="register"
                   component={Register}
                   hideNavBar={true}
            />
            <Scene key="profile"
                   component={Profile}
                   hideNavBar={true}
            />
            <Scene key="dictationSelector"
                   component={DictationSelector}
                   hideNavBar={true}
            />
            <Scene key="dictationPage"
                   component={DictationPage}
                   hideNavBar={true}
            />
        </Scene>
    </Router>
);

// habilitar volver atrás con botón Android
const onBackAndroid = () => {
    return Actions.pop;
};

// para el atributo navbarstyle
const styles = StyleSheet.create({
    title: {
        backgroundColor: '#26418f',
    }
});

export default RouterNavigator;

