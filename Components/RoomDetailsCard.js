import React from 'react';
import house from '../Components/interior1.jpg';
import {
    SafeAreaView,
    View,
    StatusBar,
    Text,
    TextInput,
    FlatList,
    Dimensions,
    StyleSheet,
    Image,
    Pressable,
    ActivityIndicator,
    RefreshControl,
    ScrollView,
} from 'react-native';
const { width } = Dimensions.get('screen');
import { SimpleAnimation } from 'react-native-simple-animations';
import { Icon } from 'react-native-elements'
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function RoomDetailsCard() {
    return (
        <SimpleAnimation delay={500} duration={1000} fade staticType="zoom">
            <Pressable activeOpacity={0.8}>
                <View style={style.card}>
                    {/* House image */}
                    <Image source={house} style={style.cardImage} />
                    <View style={{ marginTop: 10 }}>
                        {/* Title and price container */}
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                marginTop: 10,
                            }}>
                            <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'black' }}>Single</Text>
                            <Text
                                style={{ fontWeight: 'bold', color: 'blue', fontSize: 16 }}>
                                2000/-
                            </Text>
                        </View>

                        {/* Location text */}

                        <Text style={{ color: 'grey', fontSize: 14, fontWeight: 'bold', marginTop: 5 }}>
                            Area: Tilli
                        </Text>

                        {/* Facilities container */}
                        <View style={{ marginTop: 10, flexDirection: 'row' }}>
                            <View style={style.facility}>
                                <Ionicons
                                    testID="nextButton"
                                    name="bed"
                                    color="black"
                                    size={24}
                                    style={{ backgroundColor: 'transparent' }}
                                />
                                <Text style={style.facilityText}> 10</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </Pressable>
        </SimpleAnimation>
    );
}

const style = StyleSheet.create({
    card: {
        marginTop: 20,
        height: 260,
        backgroundColor: 'white',
        elevation: 10,
        width: width - 40,
        marginRight: 20,
        padding: 15,
        borderRadius: 20,
    },
    cardImage: {
        width: '100%',
        height: 120,
        borderRadius: 15,
    },
    facility: { flexDirection: 'row', marginRight: 15 },
    facilityText: { marginLeft: 5, color: 'grey' },
});
