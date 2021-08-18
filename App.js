import React from 'react';
import { Alert } from 'react-native';
import Loading  from './Loading';
import * as Location from 'expo-location';
import axios from "axios";
import Weather from './Weather';

const API_KEY = "690241206d8a2036131c1a5bde107e18";

export default class extends React.Component {
  state = {
    isLoading: true
  };

  getWeather = async (latitude, longitude) => {
    const { 
      data: { 
        main: { temp },
        weather 
      } 
    } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
    );
    this.setState({ 
      isLoading: false, 
      temp, 
      condition: weather[0].main

    })
  };

  getLocation = async() => {
    try {
      await Location.requestForegroundPermissionsAsync();
      //await Location.requestBackgroundPermissionsAsync();
      const {
        coords: {latitude, longitude}
      } = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);
      //this.setState( { isLoading: false });
    } catch (error) {
      Alert.alert("서비스 제공을 위해 추적을 허용해주세요.");
    }
  };
  componentDidMount() {
    this.getLocation();
  }
  render() {
    const { isLoading, temp, condition } = this.state;
    return isLoading ? <Loading /> : 
      <Weather temp={Math.round(temp)} condition={condition} />;

  }
}

