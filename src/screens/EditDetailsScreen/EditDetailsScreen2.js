import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import React, {useState} from 'react'
import styles from '../../styles'
import { useNavigation } from '@react-navigation/native'

import { connect } from 'react-redux'
import { editDetails } from '../../actions/actions'
import { changeVariable } from '../../actions/variables'

const EditDetailsScreen2 = props => {
  const navigation = useNavigation();
  const [name, setName] = useState(props.name);
  const [username, setUsername] = useState(props.username);
  const [bio, setBio] = useState(props.bio);
  return (
    <View style={[styles.container, styles.alignItemsCenter, styles.marginTop100]}>
      {/* Photo */}
      <View style={styles.profilePicture}>
        <Image source={require('../../assets/profile.jpg')} style={styles.profilePicture}/>
      </View>
      {/* Editable Info */}
      <View style={[styles.alignViewSplit, styles.alignItemsCenter]}>
        <View style={[styles.alignItemsCenter]}>
          <Text style={[styles.font_bold, styles.font_20, styles.marginTop20, styles.font_white]}>
              Name:
          </Text>
          <Text style={[styles.font_bold, styles.font_20, styles.marginTop20, styles.font_white]}>
              Username:
          </Text>
          <Text style={[styles.font_bold, styles.font_20, styles.marginTop20, styles.font_white]}>
              Bio:
          </Text>
        </View>
        {/* Inputs */}
        <View style={[styles.marginLeft30, styles.alignItemsCenter]}>
          <TextInput
            style={[styles.editInput, styles.marginTop20, styles.font_white]}
            placeholder={name}
            value = {name}
            onChangeText={(value) => setName(value)}/>
          <TextInput
            style={[styles.editInput, styles.marginTop20, styles.font_white]}
            placeholder={username}
            value = {username}
            onChangeText={(value) => setUsername(value)}/>
          <TextInput
            style={[styles.editInput, styles.marginTop20, styles.font_white]}
            placeholder={bio}
            value = {bio}
            onChangeText={(value) => setBio(value)} />
        </View>
      </View>
      {/* Save button */}
      <TouchableOpacity
        style={[styles.primary_button, styles.marginTop55]}
        onPress={e => props.editDetails(name, username, bio, navigation)}
      >
        <View>
          <Text style={[styles.primary_button_text]}>Save Changes</Text>
        </View>
      </TouchableOpacity>

    </View>
   
  )
}

const mapStateToProps = state => {
  return {
    name: state.variables.name,
    username: state.variables.username,
    bio: state.variables.bio,
    picture: state.variables.picture
  };
};
export default connect(mapStateToProps, {
  editDetails, changeVariable
})(EditDetailsScreen2);