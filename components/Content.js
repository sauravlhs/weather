import React, {Component} from 'react'
import { StyleSheet, Text, View} from 'react-native'
import Card from './parts/Card';
export default class Content extends Component{
    render(){
        return(
        <View style={styles.container}>
                <Card img={('../assets/weather/rainy.png')}
                bgcolor="#28abb9" color1="#28abb9" color2="#a8dda8" style={{borderTopLeftRadius: 70}} data={this.props.data[1]}/> 
                <Card img={('../assets/weather/evening.png')}
                color1="#eb8f8f" color2="#8d93ab" data={this.props.data[2]}/>
                <Card img={('../assets/weather/moon.png')}
                 bgcolor="#132743" color1="#8675a9" color2="#132743" style={{borderBottomRightRadius: 70 }} data={this.props.data[3]}/>
            
        </View>
        )
    }
}
const styles= StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent: 'space-between',
        
        
    }
})