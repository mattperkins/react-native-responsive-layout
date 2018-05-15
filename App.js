import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex:1}}>
      
        <View 
          style={[styles.container, {flex: 3, backgroundColor: '#f33'}, ]}>
          <Text>Hello</Text>
        </View>
      
        <View 
          style={{backgroundColor: '#f333', height: '5%'}}>
        </View>
      
        <View 
          style={[styles.container, {flex: 1, backgroundColor: '#ff33'}, ]}>
          <Text>World!!!</Text>
        </View>
      
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
})
