import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

function LibaryScreen() {
    return <View style={styles.container}>
    		<Text style={{color: "red"}}>Libary Screen</Text>	
    	   </View>  
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "grey",
        alignItems: "center",
        justifyContent: "center",
    }
})

export default LibaryScreen;
