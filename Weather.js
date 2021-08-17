import React from "react";
import { View, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";


export default function Weather({temp}) {
    return (
        <View style={styles.containter}>
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons
                    size={96}
                    name="weather-lightning-rainy" />
                <Text style={styles.temp}>{temp}℃</Text>
            </View>
            <View style={styles.halfContainer}>

            </View>
        </View>
    );
}

Weather.PropTypes = {
    temp: PropTypes.number.isRequired,
    contdition: PropTypes.oneOf([
        "Thunderstorm",
        "Drizzle",
        "Rain", 
        "Snow", 
        "Atmosphere", 
        "Clear", 
        "Clouds"
    ]).isRequired
};

const styles = StyleSheet.create({
    containter: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    temp: {
        fontSize:28
    },
    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})


