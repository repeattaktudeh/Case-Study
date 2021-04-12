//Izzat Izzqy bin Jasme
//1722563
//class activity word analyzer

import { StatusBar } from 'expo-status-bar';
import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput  } from 'react-native';


  
export default class App extends Component {  
    constructor() {  
        super();  
        this.state = {
        };  
    }  

    debitReload(){

      let amount=this.state.text;

      let balance = 0;
      var total_after_debit = (amount + balance);

      this.setState({

          balance: total_after_debit

          });
    }

    creditcardReload(){

      let amount=this.state.text;
      let balance = 0;
      var total_after_credit = (amount + balance + 0.5); //cashback 50 cents

      this.setState({

          balance: total_after_credit

          });
    }


  

    
    render() {  
        return (  
          

            <View style={styles.container}>  

             <Text style={styles.header}>Reload Your Balance! {""} </Text>


             <TextInput
                  style={styles.textinput}
                  value={this.state.text}
                  keyboardType= 'numeric'
                  placeholder="Enter amount: "  
                  onChangeText={text => this.setState({ text })}
                />

                <Button style={styles.button} onPress={() => {this.debitReload()}}
                  title="Pay Via Debit Card" 
                />

                <Button style={styles.button} onPress={() => {this.creditcardReload()}}
                  title="Pay Via Credit Card" 
                />

              <Text style={styles.contents}>{"\n"}Your amount after reloading: {this.state.balance}</Text>


                
            </View>  
        );  
    }  
}  

const styles = StyleSheet.create({ 
  container: {
  flex: 1,
  justifyContent: 'flex-start', 
  alignItems: 'center', 
  backgroundColor: '#c5e7eb',

  }, 
  
  header: {
    marginTop: 60,
 fontSize: 30, 
 textAlign: 'center', 
 margin: 10,
 marginBottom: 10,
 },
 
 contents: {
 textAlign: 'center', 
 color: '#1a2526', 
 marginBottom: 5,
 },

 textinput: {

  height: 40, 
  width: 300,
  borderColor: 'black', 
  borderWidth: 0.5 ,
  marginBottom: 20
 },

 button: {

  height: 40, 
  width: '70',
  marginTop: 10,
  padding: 10
 
 }
})
