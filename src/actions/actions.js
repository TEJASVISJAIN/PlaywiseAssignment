import { CHANGEVARIABLE } from './type';

export const editDetailsHelper = ({ name,username,bio , dispatch, navigation }) => {
          
  dispatch({ type: CHANGEVARIABLE, payload: { key: 'name', value: name } });
  dispatch({ type: CHANGEVARIABLE, payload: { key: 'username', value: username } });
  dispatch({ type: CHANGEVARIABLE, payload: { key: 'bio', value: bio } });
  navigation.goBack();
};

export const editDetails = (name,username,bio, navigation) => dispatch => {
    editDetailsHelper({ name, username, bio, dispatch, navigation });
};


  // update followers count
export const followCountIncHelper = ({ followers, dispatch, navigation }) => {
  dispatch({ type: CHANGEVARIABLE, payload: { key: 'followers', value: followers } });
  navigation.navigate('Profile')
};

export const followCountInc = (followers, navigation) => dispatch => {
followCountIncHelper({ followers, dispatch, navigation });
};




// get details from mockAPI and strore it in the redux store
export const getDetailsHelper = ({
  navigation, dispatch
}) => {
  console.log('api hit')
  const headers = { 'Content-Type': 'application/json' };
  const config = { method: 'GET', headers: headers };
  const url = 'https://64b3c6bf0efb99d862685c08.mockapi.io/userDetails';
  try {
    fetch(url, config)
      .then(response => response.json())
      .then(responseJson => {
          const random = Math.floor(Math.random() * 40);
          console.log(responseJson)
          dispatch({ type: CHANGEVARIABLE, payload: { key: 'name', value: responseJson[random].name } });
          dispatch({ type: CHANGEVARIABLE, payload: { key: 'username', value: responseJson[random].username } });
          dispatch({ type: CHANGEVARIABLE, payload: { key: 'bio', value: responseJson[random].bio } });
          dispatch({ type: CHANGEVARIABLE, payload: { key: 'followers', value: responseJson[random].followers } });
          dispatch({ type: CHANGEVARIABLE, payload: { key: 'following', value: responseJson[random].following } });
          dispatch({ type: CHANGEVARIABLE, payload: { key: 'posts', value: responseJson[random].posts } });
          navigation.navigate('Profile')
        
      });
  } catch (err) {
    console.log('err', err);
  }
  };

export const getDetails = (navigation) => dispatch => {
  getDetailsHelper({
   navigation, dispatch,
  });
};






