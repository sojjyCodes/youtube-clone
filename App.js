import React from "react";
import { StyleSheet, Text, View } from "react-native";
import 'react-native-gesture-handler';
import { createAppContainer } from "react-navigation";
import 'react-navigation-tabs';
import { createMaterialTopTabNavigator } from "react-navigation-tabs";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import HomeScreen from "./src/HomeScreen";
import ExploreScreen from "./src/HomeScreen"
import SubscriptionScreen from "./src/SubscriptionScreen";
import NotificationScreen from "./src/NotificactionScreen";
import LibaryScreen from "./src/LibaryScreen";
import TopBar from "./src/TopBar";

const TabNavigator = createMaterialTopTabNavigator (
	{
    	Home: HomeScreen,
    	Explore: ExploreScreen,
    	Subscription: SubscriptionScreen,
    	Notification: NotificationScreen,
    	Libary: LibaryScreen
  },

	{
	defaultNavigationOptions: ({ navigation }) => ({
	  tabBarIcon: ({ tintColor }) => {
		const { routeName } = navigation.state;
		let iconName = "home";
		if (routeName === "Library") {
		  iconName = "folder";
		}
		switch (routeName) {
		  case "Home":
			iconName = "home";
			break;
		  case "Explore":
			iconName = "compass";
			break;
		  case "Subscription":
			iconName = "youtube-subscription";
			break;
		  case "Notification":
		  	iconName = "bell";
		  	break 
		  case "Libary":
			iconName = "folder";
			break;
		}

		return <Icon name={iconName} size={24} color={tintColor} />;
	  }
	}),
	tabBarOptions: {
	  style: {
	  	backgroundColor: "#1b1b1b"
	  },
	  activeTintColor: "white",
	  inactiveTintColor: "darkgray",
	  showIcon: true,
	  showLabel: false,
	  indicatorStyle: {
	  	opacity: 0,
	  }
	}, 
	animationEnabled: true,
	  swipeEnabled: true,
	  tabBarPosition: "bottom",
  }
);


export default createAppContainer(TabNavigator);


