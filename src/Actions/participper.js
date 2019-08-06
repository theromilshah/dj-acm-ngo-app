import {volpart} from '../Services/participper'

export const VOL_PART = (email,title) => dispatch => {
    return volpart(email,title).then(user => {
      console.log("++++++++")
      console.log(user)
      return dispatch({
        type: "PARTICIPATE",
        payload:user
      });
    });
  };