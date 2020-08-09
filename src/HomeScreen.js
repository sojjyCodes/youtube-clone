import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

function HomeScreen() {
    return <View style={styles.container}>
    		<Text style={{color: "yellow"}}>Home Page</Text>
    	   </View>
}

function ExploreScreen() {
    return <View style={styles2.msg}></View>

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1b1b1b",
        alignItems: "center",
        justifyContent: "center",
    }
});
const styles2 = StyleSheet.create({
    msg: {
    	flex: 1,
    	backgroundColor: "green",
    	alignItems: "center",
    	justifyContent: "center",
    	}
    });

export default HomeScreen;
ExploreScreen (ExploreScreen);

















