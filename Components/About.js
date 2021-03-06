/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React from 'react'
import { View, Text, ScrollView, StyleSheet, FlatList, Dimensions ,Button} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { color } from 'react-native-elements/dist/helpers';
import RoomDetailsCard from './RoomDetailsCard';
import Ionicons from 'react-native-vector-icons/Ionicons'
import RoomUploadForm from '../LandlordComponents/RoomUploadForm';

const About = ({navigation}) => {
    const [catergoryIndex, setCategoryIndex] = React.useState(0);
    const categories = ['Flat', 'Hostels', 'Rooms', 'Shop'];

    const CategoryList = () => {
        return (
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
                    <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#1abc9c' }}>RoomsNearYou</Text>
                </View>
                <TouchableOpacity
                onPress={() => navigation.navigate('RoomUploadForm')}>
                <View
                    style={{
                        backgroundColor: '#d35400',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 15,
                        padding: 15,
                        marginBottom:30,
                        marginTop:15,
                        marginHorizontal:45
                    }}>
                    <Text style={{ color: 'white', fontSize: 15, fontWeight: '800' }}>
                        Upload Room
                    </Text>
                </View>
            </TouchableOpacity>
            </View>
            <View style={{ marginTop: 30, flexDirection: 'row' }}>
                <View style={style.searchContainer}>
                    <Ionicons
                        testID="nextButton"
                        name="search"
                        color="black"
                        size={20}
                        style={{ backgroundColor: 'transparent', marginLeft:25}}
                    />
                    <TextInput placeholder="Search" placeholderTextColor="#2c3e50" style={{ color: '#2c3e50', fontWeight: 'bold', textAlign: 'center', marginLeft: 20 }} />
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
    },
    searchContainer: {
        height: 50,
        backgroundColor: '#ecf0f1',
        borderRadius: 10,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    categoryContainer: {
        flexDirection: 'row',
        marginTop: 20,
        marginBottom: 20,
        justifyContent: 'space-between',

    },
    categoryText: { fontSize: 16, color: 'grey', fontWeight: 'bold' },
    categoryTextSelected: {
        color: '#2c3e50',
        paddingBottom: 5,
        borderBottomWidth: 2,
        borderColor: '#2c3e50',
    },
})

export default About
