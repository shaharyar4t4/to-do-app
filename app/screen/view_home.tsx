import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const View_home = () => {
    return (
       
        <View style={styles.maincontiner}>
            <Text style={styles.datetxt}>July 27, 2025</Text>
            <Text style={styles.mainheader}>My Todo List</Text>
        </View>


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
    }
})

