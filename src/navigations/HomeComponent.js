import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Products from '../screens/Products';
import CreateProduct from '../screens/CreateProduct';
const HomeComponent = () => {
    const HomeStack = createNativeStackNavigator();
    return (
        <HomeStack.Navigator initialRouteName='Product'>
            <HomeStack.Screen name='Product' component={Products} />
            <HomeStack.Screen name='Create' component={CreateProduct} />
        </HomeStack.Navigator>
    )
}

export default HomeComponent