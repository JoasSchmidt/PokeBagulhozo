import React,{Component} from "react"
import { View,StyleSheet,Text,TouchableOpacity} from "react-native"

export default class HomeScreen extends Component{
    render(){
        return(<View style={styles.container}>
            <View>
                <Text>PokeBagulho</Text>
            </View>
            <TouchableOpacity onPress={()=>{this.props.navigation.navigate("Pokedex")}}><Text>Pokedex</Text></TouchableOpacity>
        </View>)
        
    }    
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:"#FFCB08",
        flex:1
    }
})