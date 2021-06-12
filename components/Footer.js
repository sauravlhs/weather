import React, {Component} from 'react'
import { StyleSheet, Text, View} from 'react-native'

export default class Footer extends Component{
    render(){
        return(
        <View>
            <Text style={Styles.heading}>
                Additional Info
            </Text>
            <View style={Styles.container}>
        <Text style={Styles.maininfo}>Wind :          <Text style={Styles.ainfo}>{this.props.data.wind.speed} m/h</Text></Text>
        <Text style={Styles.maininfo}>Humidity : <Text style={Styles.ainfo}>{this.props.data.main.humidity}</Text></Text>
                
            </View>
            <View style={Styles.container}>
        <Text style={Styles.maininfo}>Visibility :    <Text style={Styles.ainfo}>{this.props.data.visibility}</Text></Text>
            <Text style={Styles.maininfo}>UV :               <Text style={Styles.ainfo}>1</Text></Text>

            </View>
        </View>
        )
    }
}

const Styles =StyleSheet.create({
    container:{
        flexDirection: 'row',
        marginVertical: 10,
        justifyContent: 'space-between',
        marginRight: 60
    },
    heading: {
      fontSize: 22,
      fontFamily: 'sans-serif-light',
      textAlign: 'left',
      marginVertical: 12,
      fontWeight: 'bold'  
    },
    ainfo: {
        fontWeight: '400',
    },
    maininfo:{
        fontWeight: 'bold',

    }
})