import React from 'react';

import { StatusBar } from 'react-native';
import { MenuProvider } from 'react-native-popup-menu';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const { Navigator, Screen } = createNativeStackNavigator()

import Feeds from "./src/screens/Feeds"
import Detalhes from "./src/screens/Detalhes";

export default function App() {
    return (
        <NavigationContainer>
            <Navigator>
                <Screen name="Vagas" component={Feeds} />
                <Screen name="Detalhes" component={Detalhes} />
            </Navigator>
        </NavigationContainer>
    )
}


