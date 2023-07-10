import React from 'react'
import { SafeAreaView, View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import HomeComponent from './HomeComponent'
import Icon from '../components/Icons'

export const NavMenus = () => {
    const menuItems = [
        { icon: <Icon type="feather" name="settings" size={25} style={{ paddingRight: 10 }} />, name: "Settings", onPress: () => { } },
        { icon: <Icon type="material" name="logout" size={25} style={{ paddingRight: 10 }} />, name: "Logout", onPress: () => { } },
    ]
    return (
        <SafeAreaView>
            <View>
                {
                    menuItems.map(({ name, icon, onPress }) => {
                        return (
                            <TouchableOpacity key={name} style={styles.item} onPress={onPress}>
                                {icon}
                                <Text style={styles.itemText}>{name}</Text>
                            </TouchableOpacity>
                        )
                    })
                }
            </View>
        </SafeAreaView>
    )
}
const getDrawerContent = () => {
    return <NavMenus />
}
const DrawerNavigator = () => {
    const Drawer = createDrawerNavigator();

    return (
        <Drawer.Navigator drawerContent={() => getDrawerContent()}>
            <Drawer.Screen name={HomeComponent} component={HomeComponent} />
        </Drawer.Navigator>
    )
}

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    itemText: {
        fontSize: 17,
        paddingVertical: 8,
        padding: 8
    }
})
export default DrawerNavigator