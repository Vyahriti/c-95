import React from 'react';
import {View,Text,StyleSheet,TouchableOpacity,  SectionList, FlatList} from 'react-native'
import axios, { formToJSON } from 'axios';
import DropDownPicker from 'react-native-dropdown-picker';
import { SectionList } from 'react-native-web';

//const axios = require('axios');
let fullresponse,response1,responseName1,responseEquipment1, responseExercise1
let responseEquipment_1, responseName_1, responseExercise_1
let responseEquipment_2, responseName_2, responseExercise_2
let responseEquipment_3, responseName_3, responseExercise_3
let responseName2, responseEquipment2, responseExercise2
let responseName3, responseEquipment3, responseExercise3
const options = {
  method: 'GET',
  url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPart/back',
  params: {limit: '10'},
  headers: {
    'X-RapidAPI-Key': 'a3ce41db6bmsh4d0152bd2b3c4ddp1f4d82jsn1d842efac78b',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};


try {
  
	const response = await axios.request(options);
 	// console.log(response.data);
  fullresponse=response.data
  response1=JSON.stringify(response.data)
  responseEquipment_1= response.data[0].equipment
  responseEquipment1= JSON.stringify({responseEquipment_1})
  responseName_1= response.data[0].name
  responseName1= JSON.stringify({responseName_1})
  responseExercise_1= response.data[0].instructions
  responseExercise1= JSON.stringify({responseExercise_1})
  responseEquipment_2= response.data[1].equipment
  responseEquipment2= JSON.stringify({responseEquipment_2})
   responseName_2= response.data[1].name
   responseName2= JSON.stringify({responseName_2})
   responseExercise_2= response.data[1].instructions
   responseExercise2= JSON.stringify({responseExercise_2})
   responseEquipment_3= response.data[2].equipment
   responseEquipment3= JSON.stringify({responseEquipment_3})
   responseName_3= response.data[2].name
   responseName3= JSON.stringify({responseName_3})
  responseExercise_3= response.data[2].instructions
  responseExercise3= JSON.stringify({responseExercise_3})
} catch (error) {
	console.error(error);
}

const DATA=[
{
    title: {responseName1},
    data: [{responseEquipment1}, {responseExercise1}]
},
{
    title: {responseName2},
    data: [{responseEquipment2}, {responseExercise2}]
},
{
    title: {responseName3},
    data: [{responseEquipment3}, {responseExercise3}]
},
]
console.log(DATA)
export default class ExerciseScreen extends React.Component {
    constructor(props){
        super(props)
        this.state={
            previewbodypart: 'back',
            dropdownHeight: 40
        }
    }




render(){
    return(
        <View>
<View style={styles.titleContainer}>
<Text style={styles.titleText}> Exercises </Text>

</View>

            <Text style={{ fontColor: 'black', fontSize: 30, alignSelf: 'center'}}> 
                Choose from the body parts below. Once that's done, exercises for the body part will be generated
            </Text>
<DropDownPicker
items={[
    {label: 'back', value: 'back'},
    {label: 'chest', value: 'chest'},
    {label: 'neck', value: 'neck'},
    {label: 'shoulders', value: 'shoulders'},
    {label: 'heart', value: 'cardio'}
]}
defaultValue={this.state.previewbodypart}
open={this.state.dropdownHeight == 170 ? true : false}
onOpen={() => {
    this.setState({ dropdownHeight: 170 });
}}
onClose={() => {
    this.setState({ dropdownHeight: 40 });
}}
style={{
    backgroundColor: 'transparent',
    borderWidth: 3,
    borderColor: 'black',
}}
textStyle={{
    fontColor: 'black',
    fontSize: 15
}}
onSelectItem={(item) =>
    this.setState({
        previewbodypart: item.value,
    })
}
/>
  <SectionList
sections={[DATA]}
keyExtractor={(item,index)=> item + index}
renderItem={({item})=>(
<View style={styles.item}>
    <Text style={styles.title}> {item} </Text>
</View> 
    )}
  renderSectionHeader={({section:{title}})=>(
    <Text style={styles.header}>{title}</Text>
  )}   
/>    

        </View>
    )
}


}

const styles=StyleSheet.create({
    titleContainer: {
        flex:1,
        padding:24
    },
    titleText:{
        marginTop: 20,
        fontSize: 50,
        fontWeight: 'bold',
        borderRadius: 5,
        borderColor: 'black',
        borderWidth: 4,
        backgroundColor: '#d5bcf0',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 4,
        padding: 10,
        alignSelf: 'center'
      },
      item:{
        backgroundColor: '#ade6e6'
      },
      title:{
        fontSize: 30,
      },
      header:{
        fontSize: 30,
        fontWeight: 'bold'
      }
    })
    