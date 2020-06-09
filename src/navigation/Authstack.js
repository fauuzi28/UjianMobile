import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import  { Login }  from '../screen'

const Stack = createStackNavigator();

const Authstack = () => {
    return (
        <Stack.Navigator headerMode="none">
            <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
    );
};

export default Authstack;