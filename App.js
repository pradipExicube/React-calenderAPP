/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Dimensions} from 'react-native';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
// import {Calendar} from 'react-native-calendar';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};

const customStyle = {
  eventIndicator: {
    backgroundColor: 'blue',
    width: 10,
    height: 10,
  },
}

export default class App extends Component<Props> {


  constructor(props){
    super(props);
    this.state={ 
      last:'marked: true',
      markeddd:{      
        // '2018-11-12': {selected: true, selectedColor:'#5F0101'},
        // '2018-11-13': {selected: true, selectedColor:'#5F0101'},
        // '2018-11-15': {selected: true, selectedColor:'#5F0101'}
        "2018-11-15": {"selected": true, "selectedColor":"#5F0101"},
        "2018-11-19": {"selected": true, "selectedColor":"#5F0101"},
        "2018-11-12": {"selected": true, "selectedColor":"#5F0101"}
      },
      markdata:[
        {name:'2018-11-12',value:'Lorem Ipsum is simply dummy text of the printing and typesetting industry'},
        {name:'2018-11-13',value:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'},
        {name:'2018-11-15',value:'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form'}
      ],
      eventValue:null


  
  }
  // '#5F0101'
  //dateString

  }


  showevent(datavalue){
    // console.log(datavalue)
    let finddata = this.state.markdata;
    for(let i=0; i<finddata.length; i++){
      if(finddata[i].name == datavalue.dateString){
        console.log("matching, " + finddata[i].value);
        this.setState({eventValue:finddata[i].value})
      }
    }
  }

  render() {
    return (
      <View style={styles.container}>
      <View style={{flex:1, justifyContent:"flex-start", marginTop:100}}>
        <Calendar
          // calendarWidth={400}
          style={{
            width:(Dimensions.get('window').width-20), 
            height:300
          }}
          markedDates={this.state.markeddd}
          marked={true}
          current={'2018-11-14'}
          onDayPress={(day) => {console.log('selected day', day)}}
          onDayPress={(value)=>{this.showevent(value)}}
        />
      </View>
      <View style={{flex:1, flexDirection:"row",width:'100%',justifyContent:'center'}}>
        <View style={{justifyContent:'center',height:60,marginLeft:10}}>
          <Text style={{fontSize:18, textAlign:"left"}}>{this.state.eventValue}</Text>
        </View>
      </View>




      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
