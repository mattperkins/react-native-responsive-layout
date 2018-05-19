import Expo from 'expo'
import React, {Component, Fragment} from 'react'
import {View} from 'react-native'
import ResponsiveRows from './ResponsiveRows'
import Blocks from './Blocks'

class App extends Component {
  render() {

    return (
      <Fragment>
      
        {/* <Blocks /> */}

        <ResponsiveRows>
          <View style={{flex: 1, flexDirection: 'row', margin: 100}}>
              <View style={{flex: 1, backgroundColor: "#bbb"}}></View>
              <View style={{flex: 2, backgroundColor: "#ccc"}}></View>
              <View style={{flex: 1, backgroundColor: "#ddd"}}></View>
          </View>
        </ResponsiveRows>

      </Fragment>
    )
  }
}


export default Expo.registerRootComponent(App) 