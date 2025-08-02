import MainLayout from '@/components/mainlayout';
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
                    <View style={styles.tdcard}>
                        <View style={styles.tdtxtrow}>
                            <View style={styles.tdinconrd}>
                                <Ionicons name="trophy-outline" size={24} color="black" />

                            </View>
                            <View>
                                <Text style={styles.tdtxt} >Important Meeting</Text>
                                <Text style={styles.tdtxt}>July 29, 2025 9:00AM</Text>
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
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#ffebb3',
        justifyContent: 'center', // Center the icon vertically
        alignItems: 'center',
    },
    tdtxt: {
        fontSize: 16,
    }
})



