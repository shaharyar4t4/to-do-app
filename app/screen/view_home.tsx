import MainLayout from '@/components/mainlayout'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const View_home = () => {
    return (
        <MainLayout>
            <View style={styles.container}>
                <View style={styles.maincontiner}>
                    <Text style={styles.datetxt}>July 27, 2025</Text>
                    <Text style={styles.mainheader}>My Todo List</Text>
                </View>

                <View style={styles.card}>
                    <Text style={{ color: "#fff", fontSize: 20, textAlign: "center" }}>You have no tasks for today</Text>
                    <Text style={{ color: "#fff", fontSize: 20, textAlign: "center" }}>Add a task to get started</Text>
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
        flex: 0.3,
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
    card: {
        position: 'absolute',
        top: 180, // Push it down a bit to overlap the purple area
        right: 20,
        left: 20,
        backgroundColor: 'gray',
        padding: 20,
        borderRadius: 10,
        zIndex: 10,
        // Shadow on Android
    }
})



