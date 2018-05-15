import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex:1}}>
      
        <View 
          style={[styles.container, {flex: 1, backgroundColor: '#f33'}, ]}>
          <Text>Hello</Text>
        </View>
      
      {/* add middle band */}
        <View 
          style={{backgroundColor: '#f333', height: '5%'}}>
        </View>
      
      {/* bottom panel */}
        <View 
          style={[styles.container, {flex: 1, backgroundColor: '#ff33'}, ]}>
          <View style={styles.boxContainer}>
            <View style={styles.box}></View>
          </View>
          <View style={styles.boxContainer}>
            <View style={styles.box}></View>
          </View>
          <View style={styles.boxContainer}>
            <View style={styles.box}></View>
          </View>
          <View style={styles.boxContainer}>
            <View style={styles.box}></View>
          </View>
        </View>
      
      {/* pink safe block */}
        <View 
          style={{backgroundColor: '#f333', height: '5%'}}>
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
  boxContainer: {
    width: '50%',
    height: '50%',
    padding: 5,
  },
  box: {
    flex:1,
    backgroundColor: '#292929'
  }
})
