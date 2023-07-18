import { View, Text, Image, TouchableOpacity, ImageBackground } from 'react-native'
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
          <Text style={[styles.font_bold, styles.font_20, styles.font_white]}>
              {number}
          </Text>
          <Text style={[styles.font_med, styles.font_20, styles.font_white]}>
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
            style={[styles.primary_button,styles.marginTop55]}
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
    <View style={[styles.container]}>
        {/*  User details */}
        <View style={[styles.alignViewSplit,styles.alignItemsCenter, styles.marginTop55, styles.padding10]}>
          {/* Back button */}
          <TouchableOpacity 
            onPress={e=> navigation.goBack()}>
            <Image source={require('../../assets/back.png')} style={[styles.back]}/>
          </TouchableOpacity>
          {/* Username */}
          <Text style={[styles.font_med, styles.font_24,styles.font_white]}>
            {props.username}
          </Text>
          {/*Edit button  */}
          <TouchableOpacity 
            style={[styles.marginRight10]}
            onPress={e=> navigation.navigate('Edit2')}>
            <Image source={require('../../assets/edit.png')} style={[styles.back]}/>
          </TouchableOpacity>
        </View>

      <View style={[styles.alignItemsCenter]}>
        {/* Profile Picture and Background image*/}
        <ImageBackground source={require('../../assets/bg.jpg')} style={[styles.alignItemsCenter,styles.backgroundImage]}>
            <Image source={require('../../assets/profile.jpg')} style={[styles.profilePicture, styles.marginTop115 ]}/>            
        </ImageBackground>
        {/* User's name */}
        <Text style={[styles.font_bold, styles.font_22,styles.customName]}>
          {props.name}
        </Text>
        {/* Bio */}
        <Text numberOfLines={3} style={[styles.font_20, styles.font_white]}>
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

