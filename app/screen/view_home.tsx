import MainLayout from '@/components/mainlayout'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const View_home = () => {
    return (
        <MainLayout>
            <View style={styles.maincontiner}>
                <Text style={styles.datetxt}>July 27, 2025</Text>
                <Text style={styles.mainheader}>My Todo List</Text>
            </View>

            <View style={styles.card}>
                <Text style={{ color: "#fff", fontSize: 20, textAlign: "center" }}>You have no tasks for today</Text>
                <Text style={{ color: "#fff", fontSize: 20, textAlign: "center" }}>Add a task to get started</Text>
            </View>

        </MainLayout>

    )
}

export default View_home


const styles = StyleSheet.create({
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
        backgroundColor: "gray",
        paddingTop: 20,
        paddingBottom: 20,
        borderRadius: 10,
        marginHorizontal: 20,
        zIndex: 1,
    }
})



