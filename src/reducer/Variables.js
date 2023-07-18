import { CHANGEVARIABLE } from '../actions/type';

//store all redux variables here
const INITIAL_STATE = {
  picture: '../../assets/profile.jpg',
  name:'Tejasvi ',
  username:'gogeta2514',
  bio:'Genshin fan',
  posts:20,
  followers:25,
  following:25,
};
const a = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHANGEVARIABLE:
      return { ...state, [action.payload.key]: action.payload.value };
    default:
      return state;
  }
};
export { a as default };