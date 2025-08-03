import MainLayout from '@/components/mainlayout';
import Entypo from '@expo/vector-icons/Entypo';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const View_home = () => {
    return (
        <MainLayout>
            <View style={styles.container}>

                {/* Purple Header */}
                <View style={styles.maincontiner}>
                    <Text style={styles.datetxt}>July 27, 2025</Text>
                    <Text style={styles.mainheader}>My Todo List</Text>
                </View>

                {/* White Card Container (Not absolute now) */}
                <View style={styles.maincard}>
                    {/* Meeting td */}
                    <View style={styles.tdcard}>
                        <View style={styles.tdtxtrow}>
                            <View style={styles.tdinconrd}>
                                <Ionicons name="trophy-outline" size={24} color="black" />
                            </View>
                            <View>
                                <Text style={styles.tdtxt}>Important Meeting</Text>
                                <Text style={styles.tdtxt}>July 29, 2025 9:00 AM</Text>
                            </View>
                        </View>
                        <MaterialIcons name="check-box-outline-blank" size={24} color="#4b3780" />
                    </View>

                    {/* Dinner td */}
                    <View style={styles.tdcard}>
                        <View style={styles.tdtxtrow}>
                            <View style={styles.tdinconrdsec}>
                                <Entypo name="calendar" size={24} color="#4b3780" />
                            </View>
                            <View>
                                <Text style={styles.tdtxt}>Have dinner with friends</Text>
                                <Text style={styles.tdtxt}>July 31, 2025 8:00 AM</Text>
                            </View>
                        </View>
                        <MaterialIcons name="check-box-outline-blank" size={24} color="#4b3780" />
                    </View>

                    {/* Daily Task */}
                    <View style={styles.tdcard}>
                        <View style={styles.tdtxtrow}>
                            <View style={styles.tdinconrd}>
                                <Ionicons name="trophy-outline" size={24} color="black" />
                            </View>
                            <View>
                                <Text style={styles.tdtxt}>Daily Task</Text>
                                <Text style={styles.tdtxt}>July 27, 2025 9:05 PM</Text>
                            </View>
                        </View>
                        <MaterialIcons name="check-box-outline-blank" size={24} color="#4b3780" />
                    </View>
                </View>

                {/* Completed Section */}
                <View style={styles.completedSection}>
                    <Text style={styles.completedText}>Completed</Text>
                    <Text style={styles.clearAllText}>Clear All</Text>
                </View>

                {/* White Card Container (Not absolute now) */}
                <View style={styles.completedmaincard}>

                    <View style={styles.tdcard}>
                        <View style={styles.tdtxtrow}>
                            <View style={styles.completedtdinconrd}>
                                <Ionicons name="document-text-outline" size={24} color="#538096" />
                            </View>
                            <View>
                                <Text style={styles.strikethroughText}>Meetup with Client</Text>
                                <Text style={styles.strikethroughText}>August 01, 2025 3:30PM </Text>
                            </View>
                        </View>
                        <Ionicons name="checkbox" size={24} color="#8072a6" />

                    </View>


                    <View style={styles.tdcard}>
                        <View style={styles.tdtxtrow}>
                            <View style={styles.completedtdinconrd}>
                                <Ionicons name="document-text-outline" size={24} color="#538096" />

                            </View>
                            <View>
                                <Text style={styles.strikethroughText}>Dummy Text</Text>
                                <Text style={styles.strikethroughText}>July 27, 2025 8:00 AM</Text>
                            </View>
                        </View>
                        <Ionicons name="checkbox" size={24} color="#8072a6" />
                    </View>

                </View>

                <TouchableOpacity style={styles.btnstyle}>
                    <Text style={styles.plaintxt}>Add New Task</Text>
                </TouchableOpacity>
            </View>
        </MainLayout>
    );
};

export default View_home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    maincontiner: {
        height: 220,
        backgroundColor: '#4b3780',
        paddingHorizontal: 20,
        justifyContent: "center",
    },
    datetxt: {
        color: "#fff",
        fontSize: 20,
        textAlign: "center",
        paddingBottom: 50,
    },
    mainheader: {
        color: "#fff",
        fontSize: 35,
        textAlign: "center",
        paddingBottom: 30,
        fontWeight: "600" // fixed from "semibold"
    },
    maincard: {
        backgroundColor: "#fff",
        padding: 15,
        borderRadius: 10,
        marginHorizontal: 20,
        marginTop: -40, // overlap the purple section like a stack
        zIndex: 10,

    },
    tdcard: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: 10,
    },
    tdtxtrow: {
        flexDirection: "row",
        gap: 20,
    },
    tdinconrd: {
        width: 50,
        height: 50,
        borderRadius: 35,
        backgroundColor: '#ffebb3',
        justifyContent: 'center',
        alignItems: 'center',
    },
    tdinconrdsec: {
        width: 50,
        height: 50,
        borderRadius: 35,
        backgroundColor: '#e5e1f2',
        justifyContent: 'center',
        alignItems: 'center',
    },
    tdtxt: {
        fontSize: 15,
    },
    completedSection: {
        justifyContent: "space-between",
        flexDirection: "row",
        marginTop: 15,
        marginHorizontal: 20,
        marginBottom: 10,
    },
    completedText: {
        fontSize: 16,
        fontWeight: 600,
    },
    clearAllText: {
        fontSize: 16,
        fontWeight: 600,
        color: 'red',
    },
    completedmaincard: {
        backgroundColor: "#fff",
        padding: 15,
        borderRadius: 10,
        marginHorizontal: 20,
        marginBottom: 10,

    },
    completedtdinconrd: {
        width: 50,
        height: 50,
        borderRadius: 35,
        backgroundColor: '#e6f2fa',
        justifyContent: 'center',
        alignItems: 'center',
    },
    strikethroughText: {
        textDecorationLine: 'line-through',
        fontSize: 15,
        color: "#bababa"
    },
    btnstyle: {
        margin: 10,
        padding: 15,
        borderRadius: 30,
        backgroundColor: "#4b3780",
        alignItems: "center",
        justifyContent: "center"

    },
    plaintxt: {
        color: "#fff",
        fontWeight: 600,
    }
});
