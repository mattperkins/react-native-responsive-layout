import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex:1}}>
      
        <View 
          style={[styles.container, {flex: 2, backgroundColor: '#f33'}, ]}>
          <Text>Hello</Text>
        </View>
      
        <View 
          style={{backgroundColor: '#f333', height: '5%'}}>
        </View>
      
      {/* bottom panel */}
        <View 
          style={[styles.container, {flex: 1, backgroundColor: '#ff33'}, ]}>
          <View style={{flex: 1, backgroundColor: '#292929'}}></View>
          <View style={{flex: 1, backgroundColor: '#292929'}}></View>
          <View style={{flex: 1, backgroundColor: '#292929'}}></View>
          <View style={{flex: 1, backgroundColor: '#292929'}}></View>
        </View>
      
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 5,
  },
  box: {
    width: '50%',
    height: '50%',
    margin: 5,
  }
})
