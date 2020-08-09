import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

function NotificationScreen() {
    return <View style={styles.container}>
    		<Text style={{color: "blue"}}>Notification Screen</Text>
           </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "yellow",
        alignItems: "center",
        justifyContent: "center",
    }
})

export default NotificationScreen;


