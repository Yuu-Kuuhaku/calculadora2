import React, { Component } from 'react';
import {Text,View, FlatList, TextInput, StyleSheet, TouchableOpacity, Linking} from 'react-native';

type props  = {};


export default class Main extends Component <props>{
    constructor(props){
        super(props);
        
        this.state={
            text :"",
            numeroAnterior: 0.0,
            botoesNumerico: [
                {key:"0", desc:"7" , valor: 'adcNum'},
                {key:"1", desc:"8" , valor: 'adcNum'},
                {key:"2", desc:"9" , valor: 'adcNum'},
                {key:"3", desc:"4" , valor: 'adcNum'},
                {key:"4", desc:"5" , valor: 'adcNum'},
                {key:"5", desc:"6" , valor: 'adcNum'},
                {key:"6", desc:"1", valor: 'adcNum'},
                {key:"7", desc:"2", valor: 'adcNum'},
                {key:"8", desc:"3", valor: 'adcNum'},
                {key:"9", desc:",", valor: 'adcNum'},
                {key:"10", desc:"0", valor: 'adcNum'},
                
            ],
            botoesOperacao:[
                {key:0, desc:"+", valor: "somar"},
                {key:1, desc:"-", valor: "subtrair"},
                {key:2, desc:"*", valor: "multiplicar"},
                {key:3, desc:"/", valor: "dividir"},
                {key:4, desc:"=", valor: "calcular"},
            ]
        }
        
    }

    
    static navigationOptions ={
        title: 'Calculadora'
    };

    
    
    

    renderItem(obj){
        return(
            <TouchableOpacity onPress={()=>{
                
            }} style= {Styles.botao}>
               <Text style={Styles.botaoText}>{obj.item.desc}</Text>
            </TouchableOpacity>
        );
    }

    render(){
        return(
        <View style={Styles.container}>
        
        
            <View style={Styles.tela}>
                <TextInput 
                style={Styles.telaDisplay}
                onChangeText={(text)=>this.setState({text})} 
                value={this.state.text}
                placeholder="Digite um valor aqui"
                keyboardType={"numeric"}
                ></TextInput>
            </View>
            <View style={Styles.teclado}>
                <View style={Styles.listNum}>
                    <FlatList style={Styles.list} data={this.state.botoesNumerico} numColumns={3} renderItem={this.renderItem} extraData={this.state}/>
                </View>
                <View style={Styles.listOp}>
                    <FlatList style={Styles.list} data={this.state.botoesOperacao} numColumns={2} renderItem={this.renderItem} />
                </View>
            </View>
            <View style={Styles.footer}>
                <View>
                    <TouchableOpacity onPress={()=>{ Linking.openURL('https://github.com/Yuu-Kuuhaku')}}><Text style={Styles.desenvolvedor}>Yuu_Kuuhaku</Text></TouchableOpacity>
                   
                </View>
            </View>
        </View>
        );
    }
}

const Styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: "center",
        backgroundColor:"#f5fcff"
    },
    tela:{
        flex:2
    },
    telaDisplay:{
        flex:1,
        margin:10,
        backgroundColor:"#fff",
        borderColor:"#ccc",
        borderWidth:3,
        fontSize:40,
        borderRadius:20
    },
    teclado:{
        margin:10,
        flex:3,
        flexDirection: "row",
    },
    listNum:{
        
        flex:2,
        alignItems: "center",
        justifyContent: "center",
        

    },
    listOp:{
        
        alignItems: "center",
        justifyContent: "center",
        flex:1,
        alignItems: "center",
        justifyContent: "center",
    },
    list:{
        
    },
    botao:{
        backgroundColor: '#20B2AA',
        margin: 5,
        padding:10,
        borderStyle: 'solid',
        borderRightWidth:3,
        borderBottomWidth:2,
        borderColor: '#999999',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        width:50,
    },
    botaoText:{
        fontSize: 30
    },
    footer:{
        flex:1,
        bottom: 0,
        right:0,
        left:0,
        flex: 1,
        padding: 25,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#20B2AA',
        
        
    },
    desenvolvedor:{
        fontSize:20,
        color:'#fff'
    }


})