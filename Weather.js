import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const weatherOptions = { 
    Thunderstorm: {
        iconName: "weather-lightning-rainy",
        gradient: ["#0F2027", "#2C5364"],
        title: "집 밖은 위험해요!",
        subtitle: "천둥 번개가 치는 날 밖에 아이와 나가는 건... 생각만해도 정말 끔찍하네요! 오늘은 집에서 아이와 숨박꼭질을 하며 노는 건 어때요?"
    },
    Rain: {
        iconName: "weather-pouring",
        gradient: ["#616161", "#9bc5c3"],
        title: "비옷을 입고",
        subtitle: "뛰어보자 팔짝! 어릴적 비가 많이 오는 여름날 비옷을 입고 빗속을 뛰어다녔던 추억을 평생 간직하고 있어요. 오늘, 아이와 소중한 추억을 만들어봐요~"
    },
    Drizzle: {
        iconName: "weather-rainy",
        gradient: ["#134E5E", "#71B280"],
        title: "이슬비 내리는",
        subtitle: "이른 아침에 우산 셋이 나란히 걸어갑니다~ 오늘은 아이와 같이 동요 메들리를 불러보는 건 어때요? 이슬비 내리는 창 밖을 보며 아이와 함께 노래 부르기. 생각만 해도 즐거워져요 :)"
    },
    Snow: {
        iconName: "weather-snowy-heavy",
        gradient: ["#536976", "#BBD2C5"],
        title: "똑똑 똑 똑똑",
        subtitle: "두유 워너 빌더 스노우맨~? 장갑, 모자, 따뜻한 옷 야무지게 챙겨입고 어서 나가자구여~"
    },
    Atmosphere: {
        iconName: "weather-windy-variant",
        gradient: ["#654ea3", "#eaafc8"],
        title: "운전은 NO!",
        subtitle: "안개낀 날 운전은 되도록 피하는게 좋아요. 집 앞 공터에서 안개 속 술래잡기를 해보는 건 어때요~?"
    },
    Clear: {
        iconName: "ios-sunny",
        gradient: ["#076585", "#fff"],
        title: "Happy Day",
        subtitle: "몸과 마음이 모두 행복해지는 그런 날이네요. 조금 궂은 일이 있더라도 따뜻한 햇빛, 맑은 공기 속에서 훌훌 털어버리자구여~"
    },
    Clouds: {
        iconName: "weather-cloudy",
        gradient: ["#2c3e50", "#bdc3c7"],
        title: "산책하기 좋은 날",
        subtitle: "오늘 같이 흐린 날일수록 아이와 야외활동 하기에는 더 좋아요. 구름, 회색 빛깔 하늘 등 다양한 이야기를 아이와 나눠보아요~"
    }
};

export default function Weather({ temp, condition }) {
    return (
        <LinearGradient
            colors={weatherOptions[condition].gradient}
            style={styles.containter}
        >
            <StatusBar barStyle="light-content" />
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons
                    size={96}
                    name={weatherOptions[condition].iconName}
                    color="white" />
                <Text style={styles.temp}>{temp}º</Text>
            </View>
            <View style={{...styles.halfContainer, ...styles.textContainer}}>
                <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
            </View>
        </LinearGradient>
    );
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
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
        fontSize: 44,
        color: "white"
    },
    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        fontSize: 36,
        color: "white",
        marginBottom: 10,
        fontWeight: "300"
    },
    subtitle: {
        fontSize: 20,
        color: "white",
        fontWeight: "600"
    },
    textContainer: {
        paddingHorizontal: 20,
        alignItems: "flex-start"
    }
})


