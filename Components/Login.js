/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, Button } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Icon from 'react-native-vector-icons/MaterialIcons';
import DropDownPicker from 'react-native-dropdown-picker';
import { Picker } from '@react-native-picker/picker';






function Login({ navigation }) {
    return (


        <ScrollView>
            <View style={styles.mainCardView}>
                <View style={styles.subCardView}>
                    <Text style={styles.FormHeading}> Complete Your Profile  </Text>

                    <View style={styles.inputContainer}>
                        <Icon
                            name="mail-outline"
                            color='#fff'
                            size={20}
                            style={styles.inputIcon}
                        />

                        <TextInput placeholder="Enter  Name " placeholderTextColor="#fff" style={styles.input} />
                    </View>

                    <View style={styles.inputContainer}>
                        <Icon
                            name="mail-outline"
                            color='#fff'
                            size={20}
                            style={styles.inputIcon}
                        />
                        <TextInput placeholder="Enter Last Name " placeholderTextColor="#fff" style={styles.input} />
                    </View>

                    <View style={styles.inputContainer}>
                        <Icon
                            name="mail-outline"
                            color='#fff'
                            size={20}
                            style={styles.inputIcon}
                        />
                        <TextInput placeholder="Enter Email " placeholderTextColor="#fff" style={styles.input} />
                    </View>
                    <View style={styles.inputContainer}>
                        <Icon
                            name="mail-outline"
                            color='#fff'
                            size={20}
                            style={styles.inputIcon}
                        />
                        <TextInput placeholder="Enter Email " placeholderTextColor="#fff" style={styles.input} />
                    </View>

                  

                </View>
            </View>
            <Button
                onPress={() => navigation.navigate('About')}
                title="Learn More"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />
        </ScrollView>


    );
}
const styles = StyleSheet.create({
    FormHeading: {
        fontSize: 30,
        color: '#fff',
        textAlign: 'center',
        marginVertical: 10,
        color: 'skyblue',
        marginTop: 20

    },
    textBox: {
        fontSize: 15,
        borderColor: 'skyblue',
        borderBottomWidth: 2,
        padding: 10,
        marginHorizontal: 0,
        marginVertical: 15,
        color: '#fff'
    },
    mainCardView: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 1,
        shadowRadius: 8,
        elevation: 8,
        flexDirection: 'row',
        paddingLeft: 16,
        paddingRight: 14,
        marginTop: 16,
        marginBottom: 6,
        marginLeft: 16,
        marginRight: 16,
        backgroundColor: '#2c3e50'
    },
    inputContainer: { flexDirection: 'row', marginTop: 20 },
    input: {
        color: '#fff',
        paddingLeft: 30,
        borderBottomWidth: 1,
        borderColor: 'skyblue',
        borderBottomWidth: 2,
        flex: 1,
        fontSize: 18,
        marginBottom: 10
    },
    inputIcon: { marginTop: 15, position: 'absolute' },

    pickerone:{
        width:300,
        height:30,
        borderColor:'red',
        borderWidth:2
    }


});


export default Login;
