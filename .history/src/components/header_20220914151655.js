import React from 'react'
import { Image, View } from 'react-native'

export default class header extends Component {
  render() {
    return (
      <View>
        <Image
      source={require('../../assets/')}
      style={styles.image}>
    </Image>
      </View>
    )
  }
}
