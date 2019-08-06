import {allusers} from '../Services/allusers'

export const ALL_USERS=() => dispatch => {
    return allusers().then(user => {
      console.log("++++++++")
      console.log(user)
      return dispatch({type:"ALL_USERS",
      payload:user});
    });
  };