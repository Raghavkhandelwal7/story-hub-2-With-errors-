import React from 'react';
import { render } from 'react-dom';
import {StyleSheet, Text, View,  TextInput} from 'react-native';
import { Header } from 'react-native-elements';
import db from '../config'
import firebase from 'firebase'
import { TouchableOpacity } from 'react-native';
export default class WriteStoryScreen extends React.Component{
    constructor(){
        super();
        this.state={
            title:'',
            author:'',
            storyText:''
        }
    }


render(){
    return(
        <View style={styles.container}>
        <Header
          backgroundColor={'#9c8210'}
          centerComponent={{
            text: 'Story Hub 1',
            style: { color: '#fff', fontSize: 20 },
          }}
        />
        <TextInput placeholder = "Story Title"
            style={styles.inputBox}
            onChangeText={(text)=>{
            his.setState({
            title:text
        })
        }}
            value = {this.state.title}
        />
        <TextInput
            placeholder="Author"
            onChangeText= {(text)=>{
            this.setState({
            author: text
        })
        }}
            placeholderTextColor='black'
            value={this.state.author}
            style={styles.author} 
        />
        <TextInput 
            placeholder="Write your story"
            onChangeText= {(text)=>{
            this.setState({
            storyText: text
        })
        }}
            placeholderTextColor='black'
            value={this.state.storyText}
            style={styles.storyText}
            multiline={true}
            />

        <TouchableOpacity
        style={styles.submitButton}
        >
         <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
        </View>
         
    const style=StyleSheet.create({
        container: {
            container: {
                flex: 1,
                backgroundColor: '#FFFFFFF',
              },
              inputBox: {
                marginTop: 50,
                width: '80%',
                alignSelf: 'center',
                height: 40,
                textAlign: 'center',
                borderWidth: 4,
                outline: 'none',
              }
        }
    })
    )
        }      
      }

submitStory = () => {
    db.collection().add({
        
    })


}<TouchableOpacity style = {(styles.submitButton)}
onPress = {this.submitStory}
> <Text style = {(styles.buttonText)}> Submit </Text> </TouchableOpacity>