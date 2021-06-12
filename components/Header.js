import React, {Component} from 'react'
import { StyleSheet, Text, View, Image} from 'react-native'

export default class Header extends Component{
    render(){
        return(
        <View>
            <Text style={styles.text}>
                Weather Forecast
            </Text>
            <Image source={{uri: `https://openweathermap.org/img/wn/${this.props.data[0].weather[0].icon}@2x.png`}}
            style={styles.img} />
            <Text style={styles.temptext}>{this.props.data[0].main.temp} &deg;C</Text>
        <Text style={styles.city}>Patna ,IN</Text>

        </View>
        )
    }
}

const styles =StyleSheet.create({
    text:{
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#333',
        fontFamily: 'sans-serif-light'
    },
    img:{
     width: 100,
     height: 100, 
     alignSelf: 'center', 
     
    },
    temptext:{
        fontSize: 28,
        fontWeight: '900',
        textAlign: 'center',
        fontFamily: 'sans-serif-light'
    },
    city: {
        fontSize: 24,
        color: '#aaa',
        textAlign: 'center'
    }
})