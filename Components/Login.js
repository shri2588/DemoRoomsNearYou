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

    const [pickerGender, setpickerGender] = useState('Gender');
    const [pickerOccupation, setpickerOccupation] = useState('Gender');
    const [pickerState, setpickerState] = useState('State');
    const [pickerId, setpickerId] = useState('Idproof');
    return (


        <ScrollView>
            <View style={styles.mainCardView}>
                <View style={styles.subCardView}>
                    <Text style={styles.FormHeading}> Complete Your Profile  </Text>

                    <View style={styles.inputContainer}>
                        <Icon
                            name="person-outline"
                            color='#fff'
                            size={20}
                            style={styles.inputIcon}
                        />

                        <TextInput placeholder="Enter  Name " placeholderTextColor="#fff" style={styles.input} />
                    </View>

                    <View style={styles.inputContainer}>
                        <Icon
                            name="person-outline"
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


                    <View style={styles.pickerChoosing}>
                        <Icon
                            name="person-outline"

                            color='#fff'
                            size={20}
                            style={styles.inputIcon}
                        />
                        <Picker
                            style={{ marginLeft: 10 }}
                            selectedValue={pickerGender}
                            onValueChange={(itemValue) =>
                                setpickerGender(itemValue)
                            }>

                            <Picker.Item label="Select Your Gender" value="Gender" />
                            <Picker.Item label="Male" value="Male" />
                            <Picker.Item label="Female" value="Female" />
                            <Picker.Item label="Other" value="Other" />
                        </Picker>

                    </View>
                    <View style={styles.pickerChoosing}>
                        <Icon
                            name="book-outline"
                            color='#fff'
                            size={20}
                            style={styles.inputIcon}
                        />
                        <Picker
                            style={{ marginLeft: 10 }}
                            selectedValue={pickerOccupation}
                            onValueChange={(itemValue) =>
                                setpickerOccupation(itemValue)
                            }>

                            <Picker.Item label="Select Your Occupation" value="Occupation" />
                            <Picker.Item label="Student" value="Student" />
                            <Picker.Item label="Family" value="Family" />
                            <Picker.Item label="Government Employee" value="Government Employee" />
                            <Picker.Item label="Other" value="Other" />
                        </Picker>

                    </View>

                    <View style={styles.inputContainer}>
                        <Icon
                            name="mail-outline"
                            color='#fff'
                            size={20}
                            style={styles.inputIcon}
                        />
                        <TextInput placeholder="Enter City " placeholderTextColor="#fff" style={styles.input} />
                    </View>
                    <View style={styles.pickerChoosing}>
                        <Icon
                            name="mail-outline"
                            color='#fff'
                            size={20}
                            style={styles.inputIcon}
                        />
                        <Picker
                            style={{ marginLeft: 10 }}
                            selectedValue={pickerState}
                            onValueChange={(itemValue) =>
                                setpickerState(itemValue)
                            }>

                            <Picker.Item label="Select Your State" value="State" />
                            <Picker.Item label="Select State" />
                        <Picker.Item label="Andhra Pradesh" value="Andhra Pradesh" />
                        <Picker.Item label="Andaman and Nicobar Islands" value="Andaman and Nicobar Islands" />
                        <Picker.Item label="Arunachal Pradesh" value="Arunachal Pradesh" />
                        <Picker.Item label="Assam" value="Assam" />
                        <Picker.Item label="Bihar" value="Bihar" />
                        <Picker.Item label="Chandigarh" value="Chandigarh" />
                        <Picker.Item label="Chhattisgarh" value="Chhattisgarh" />
                        <Picker.Item label="Dadar and Nagar Haveli" value="Dadar and Nagar Haveli" />
                        <Picker.Item label="Daman and Diu" value="Daman and Diu" />
                        <Picker.Item label="Delhi" value="Delhi" />
                        <Picker.Item label="Lakshadweep" value="Lakshadweep" />
                        <Picker.Item label="Puducherry" value="Puducherry" />
                        <Picker.Item label="Goa" value="Goa" />
                        <Picker.Item label="Gujarat" value="Gujarat" />
                        <Picker.Item label="Haryana" value="Haryana" />
                        <Picker.Item label="Himachal Pradesh" value="Himachal Pradesh" />
                        <Picker.Item label="Jammu and Kashmir" value="Jammu and Kashmir" />
                        <Picker.Item label="Jharkhand" value="Jharkhand" />
                        <Picker.Item label="Karnataka" value="Karnataka" />
                        <Picker.Item label="Kerala" value="Kerala" />
                        <Picker.Item label="Madhya Pradesh" value="Madhya Pradesh" />
                        <Picker.Item label="Maharashtra" value="Maharashtra" />
                        <Picker.Item label="Manipur" value="Manipur" />
                        <Picker.Item label="Meghalaya" value="Meghalaya" />
                        <Picker.Item label="Mizoram" value="Mizoram" />
                        <Picker.Item label="Nagaland" value="Nagaland" />
                        <Picker.Item label="Odisha" value="Odisha" />
                        <Picker.Item label="Punjab" value="Punjab" />
                        <Picker.Item label="Rajasthan" value="Rajasthan" />
                        <Picker.Item label="Sikkim" value="Sikkim" />
                        <Picker.Item label="Tamil Nadu" value="Tamil Nadu" />
                        <Picker.Item label="Telangana" value="Telangana" />
                        <Picker.Item label="Tripura" value="Tripura" />
                        <Picker.Item label="Uttar Pradesh" value="Uttar Pradesh" />
                        <Picker.Item label="Uttarakhand" value="Uttarakhand" />
                        <Picker.Item label="West Bengal" value="West Bengal" />
                        </Picker>

                    </View>
                    <View style={styles.inputContainer}>
                        <Icon
                            name="mail-outline"
                            color='#fff'
                            size={20}
                            style={styles.inputIcon}
                        />
                        <TextInput placeholder="Enter Pincode " placeholderTextColor="#fff" style={styles.input} />
                    </View>
                    <View style={styles.pickerChoosing}>
                        <Icon
                            name="mail-outline"
                            color='#fff'
                            size={20}
                            style={styles.inputIcon}
                        />
                        <Picker
                            style={{ marginLeft: 10 }}
                            selectedValue={pickerId}
                            onValueChange={(itemValue) =>
                                setpickerId(itemValue)
                            }>

                            <Picker.Item label="Select Your Id " value="Idproof" />
                            <Picker.Item label="Aadhaar" value="Aadhaar" />
                            <Picker.Item label="Pan" value="Pan" />
                           
                        </Picker>

                    </View>
                    <View style={styles.inputContainer}>
                        <Icon
                            name="mail-outline"
                            color='#fff'
                            size={20}
                            style={styles.inputIcon}
                        />
                        <TextInput placeholder="Enter Id Number " placeholderTextColor="#fff" style={styles.input} />
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

    pickerChoosing: {
        flex: 1,
        borderColor: 'skyblue',
        borderBottomWidth: 2,
        marginHorizontal: 2,
        marginTop:5
    }


});


export default Login;
