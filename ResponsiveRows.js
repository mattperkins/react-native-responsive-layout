import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default class Miles extends React.Component {
  render() {

    return (
        
      <View style={{flex:1}}>
            <View style={{flex: 50, backgroundColor: "mediumaquamarine"}}></View>
            <View style={{flex: 50, backgroundColor: "#1e90ff"}}>{this.props.children}</View>
            <View style={{height: 123, backgroundColor: "#f33"}}></View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    
  },
  
})
