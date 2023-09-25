import React,{Component} from "react"
import { View,StyleSheet,Text } from "react-native"

export default class Pokedex extends Component{
    render(){
        return(<View style={styles.container}>
            <View>
                <Text>Pokedex</Text>
            </View>
        </View>)
    }    
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:"#fc5391",
        flex:1
    }
})