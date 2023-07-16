import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from '../../styles'
import { useNavigation } from '@react-navigation/native'
import { verticalScale } from '../../styles/mixins'
import { getDetails } from '../../actions/actions'
import { connect } from 'react-redux'

const index = props => {
    const navigation = useNavigation();
    const apiHit = () =>{
        props.getDetails(navigation);
    }
 return (
    <View>
      <TouchableOpacity
        style={[styles.primary_button, { marginTop: verticalScale(500) }]}
        onPress={apiHit}
      >
        <View>
          <Text style={[styles.primary_button_text]}>Log In</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default connect(null, {
    getDetails
  })(index);