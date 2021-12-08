import React from 'react'
import { View, Text, ScrollView, StyleSheet, FlatList, Dimensions, Button } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { color } from 'react-native-elements/dist/helpers';
import RoomDetailsCard from '../Components/RoomDetailsCard';
import Ionicons from 'react-native-vector-icons/Ionicons'

const LandlordDashboard = () => {
    const [catergoryIndex, setCategoryIndex] = React.useState(0);
    const categories = [' Upload Rooms','Active Rooms', 'Inactive Rooms', 'Room Requests', 'Pending Rooms','Expired Rooms'];
    const CategoryList = () => {
        return (
            <ScrollView horizontal={true} style={style.ScrollContainer} >
            <View style={style.categoryContainer}>
                {categories.map((item, index) => (
                    <TouchableOpacity
                        key={index}
                        activeOpacity={0.8}
                        onPress={() => setCategoryIndex(index)}>
                        <Text
                            style={[
                                style.categoryText,
                                catergoryIndex === index && style.categoryTextSelected,
                            ]}>
                            {item}
                        </Text>
                    </TouchableOpacity>
                ))}

            </View>
            </ScrollView>

        )
    }
    return (
        <ScrollView
            style={{
                flex: 1,
                paddingHorizontal: 20,
                backgroundColor: 'white',
            }}>
            <View style={style.header}>

                <View>
                    <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'black' }} >Welcome </Text>
                    <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#1abc9c' }}>Shrikant </Text>
                </View>
               
                <View >
                   
                    <Text style={{ color: 'black', fontSize: 20, fontWeight: '800',marginTop:3 }}>
                        Upgrade Plan
                    </Text>
                    <Text style={{ color: 'red', fontSize: 17, fontWeight: '800' ,marginTop:10}}>
                      Free Plan
                    </Text>
                </View>
            
            </View>
            
            <CategoryList />
            <RoomDetailsCard />
            <RoomDetailsCard />
            <RoomDetailsCard />
        </ScrollView>
    )
}
const style = StyleSheet.create({
    header: {
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex:1
    },
    ScrollContainer:{
          flex:1,
    },
    
    categoryContainer: {
        flexDirection: 'row',
        marginTop: 20,
        marginBottom: 20,
        justifyContent: 'space-between',

    },
    categoryText: { fontSize: 15,paddingLeft:8, color: 'grey', fontWeight: 'bold' , justifyContent:'space-between'},
    categoryTextSelected: {
        color: '#2c3e50',
        paddingBottom: 5,
        borderBottomWidth: 2,
        borderColor: '#2c3e50',
        
    },
})


export default LandlordDashboard
