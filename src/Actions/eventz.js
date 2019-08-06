import {getAllEvents} from '../Services/eventz'

export const EVENTZ = () => dispatch => {
    return getAllEvents().then(user => {
      console.log("++++++++")
      console.log(user)
      return dispatch({
        type: "ALL_EVENTS",
        payload:user
      });
    });
  };