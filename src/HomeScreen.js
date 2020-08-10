import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, List  } from 'react-native';

function HomeScreen() {
    return <View style={styles.container}>
    		<Text style={{color: "yellow"}}>Home Page</Text>
    	   </View>
}

function ExploreScreen() {
    return <View style={styles.msg}></View>

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1b1b1b",
        alignItems: "center",
        justifyContent: "center",
    },
	    msg: {
    	flex: 1,
    	backgroundColor: "green",
    	alignItems: "center",
    	justifyContent: "center",
    	}

});
const styles = StyleSheet.create({

export default HomeScreen;
ExploreScreen (ExploreScreen);









