import {getUser} from '../Services/activeUser'

export const USER_LOGIN = (email, password) => dispatch => {
    return getUser(email, password).then(user => {
      console.log("++++++++")
      console.log(user)
      return dispatch({
        type: "GET_USER",
        id: user.id,
        fname: user.fname,
        lname: user.lname,
        mail: user.mail,
        notifications: user.notifications,
        types: user.types
      });
    });
  };