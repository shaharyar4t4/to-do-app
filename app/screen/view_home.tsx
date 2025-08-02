import MainLayout from '@/components/mainlayout';
import Entypo from '@expo/vector-icons/Entypo';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';




const View_home = () => {
    return (
        <MainLayout>
            <View style={styles.container}>
                <View style={styles.maincontiner}>
                    <Text style={styles.datetxt}>July 27, 2025</Text>
                    <Text style={styles.mainheader}>My Todo List</Text>
                </View>

                <View style={styles.maincard}>
                    {/*Meeting td*/}
                    <View style={styles.tdcard}>
                        <View style={styles.tdtxtrow}>
                            <View style={styles.tdinconrd}>
                                <Ionicons name="trophy-outline" size={24} color="black" />

                            </View>
                            <View>
                                <Text style={styles.tdtxt} >Important Meeting</Text>
                                <Text style={styles.tdtxt}>July 29, 2025 9:00 AM</Text>
                            </View>
                        </View>
                        <MaterialIcons name="check-box-outline-blank" size={24} color="#4b3780" />

                    </View>

                    {/*Dinner td*/}
                    <View style={styles.tdcard}>
                        <View style={styles.tdtxtrow}>
                            <View style={styles.tdinconrdsec}>
                                <Entypo name="calendar" size={24} color="#4b3780" />
                            </View>
                            <View>
                                <Text style={styles.tdtxt} >Have dinner with friends</Text>
                                <Text style={styles.tdtxt}>July 31, 2025 8:00 AM</Text>
                            </View>
                        </View>
                        <MaterialIcons name="check-box-outline-blank" size={24} color="#4b3780" />
                    </View>
                    {/* <View style={styles.verticalDivider} /> */}
                    {/*Daily td*/}
                    <View style={styles.tdcard}>
                        <View style={styles.tdtxtrow}>
                            <View style={styles.tdinconrd}>
                                <Ionicons name="trophy-outline" size={24} color="black" />
                            </View>
                            <View>
                                <Text style={styles.tdtxt} >Daily Task</Text>
                                <Text style={styles.tdtxt}>July 27, 2025 9:05 PM</Text>
                            </View>
                        </View>
                        <MaterialIcons name="check-box-outline-blank" size={24} color="#4b3780" />

                    </View>

                </View>


            </View>

        </MainLayout>

    )
}

export default View_home


const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative', // Stack-like parent
    },
    maincontiner: {
        flex: 0.31,
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
        fontWeight: "semibold"
    },
    maincard: {
        position: 'absolute',
        top: 190, // Push it down a bit to overlap the purple area
        right: 20,
        left: 20,
        backgroundColor: "#fff",
        padding: 20,
        borderRadius: 10,
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
        justifyContent: 'center', // Center the icon vertically
        alignItems: 'center',
    },
    tdinconrdsec: {
        width: 50,
        height: 50,
        borderRadius: 35,
        backgroundColor: '#e5e1f2',
        justifyContent: 'center', // Center the icon vertically
        alignItems: 'center',
    },
    tdtxt: {
        fontSize: 16,
    },
    // verticalDivider: {
    //     width: 1,
    //     backgroundColor: '#00',
    //     marginHorizontal: 10,
    // },
})



