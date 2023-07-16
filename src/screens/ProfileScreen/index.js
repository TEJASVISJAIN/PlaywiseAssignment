import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import styles from '../../styles'
import { verticalScale } from '../../styles/mixins'
import { connect } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import { changeVariable } from '../../actions/variables'
import { followCountInc } from '../../actions/actions'

const Metric = ({number, metric}) =>{
  return(
      <View style={[styles.flex_1, styles.alignItemsCenter]}>
          <Text style={[styles.font_bold, styles.font_20]}>
              {number}
          </Text>
          <Text style={[styles.font_med, styles.font_20]}>
              {metric}
          </Text>
      </View>
  )
}


const index = props => {
    const [areFollowing, setAreFollowing] = useState(false)
    const [followers, setFollowers] = useState(props.followers);
    const navigation = useNavigation();

    const FollowComponent = () =>{
      
      return(
        <TouchableOpacity 
            style={[styles.primary_button, {marginTop: verticalScale(55)}]}
            onPress={e=>{
              setFollowers(followers+1);
              setAreFollowing(true)
              props.followCountInc(props.followers+1, props.navigation)
            }}
            >
            <View>
              <Text style={[styles.primary_button_text]}>Follow </Text>
            </View>
          </TouchableOpacity>
      )
    }

    const UnFollowComponent = () =>{
      return (
        <TouchableOpacity 
            style={[styles.secondary_button, styles.marginTop55,]}
            onPress={e=>{
              setFollowers(followers-1);
              setAreFollowing(false)
              props.followCountInc(props.followers-1, props.navigation)
            }}
            >
            <View>
              <Text style={[styles.primary_button_text]}>Unfollow</Text>
            </View>
          </TouchableOpacity>
      )
    }
    
  return (
    <View style={styles.container}>
        {/*  User details */}
      <View style={[styles.alignItemsCenter, styles.marginTop100]}>
        {/* Profile Picture */}
        <View style={styles.profilePicture}>
            <Image source={require('../../assets/profile.jpg')} style={styles.profilePicture}/>
        </View>
        {/* Username */}
        <Text style={[styles.font_bold, styles.font_24]}>
            @{props.username}
        </Text>
        {/* User's name */}
        <Text style={[styles.font_med, styles.font_22]}>
            {props.name}
        </Text>
        {/* Bio */}
        <Text numberOfLines={3} style={styles.font_20}>
            {props.bio}
        </Text>
      </View>

      {/* Social media metrics */}
      <View style={[styles.alignViaRow, styles.flex_1, styles.marginTop55]}>
        <Metric number={props.posts} metric={"posts"} />
        <Metric number={props.followers} metric={"followers"} />
        <Metric number={props.following} metric={"following"} />
      </View>

      {/* Action Buttons */}
      <TouchableOpacity 
        style={[styles.primary_button, styles.marginTop55]}
        onPress={e=> navigation.navigate('Edit2')}
        >
        <View>
          <Text style={[styles.primary_button_text]}>Edit</Text>
        </View>
      </TouchableOpacity>

      
      {!areFollowing? <FollowComponent  /> : <UnFollowComponent />}
   

    </View>
  )
}

const mapStateToProps = state => {
    return {
      name: state.variables.name,
      username: state.variables.username,
      followers: state.variables.followers,
      following: state.variables.following,
      posts: state.variables.posts,
      bio: state.variables.bio
      
    };
  };
  export default connect(mapStateToProps, {
    changeVariable, followCountInc
  })(index);

