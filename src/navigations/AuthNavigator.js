import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Register from '../screens/Register';
import Login from '../screens/Login';
import { LOGIN, REGISTER } from '../commons/screenNames';

const AuthNavigator = () => {
    const AuthStack = createNativeStackNavigator();
    return (
        <AuthStack.Navigator initialRouteName='Login'>
            <AuthStack.Screen name={REGISTER} component={Register} />
            <AuthStack.Screen name={LOGIN} component={Login} />
        </AuthStack.Navigator>
    )
}

export default AuthNavigator