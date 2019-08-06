import {deleteUser} from '../Services/deleteUser'

export const DELETE_USER = (mail) => dispatch => {
    return deleteUser(mail).then(user => {
      console.log("++++++++")
      console.log(user)
      return dispatch({
        type: "DELETE_USER",
        x:"yes"
      });
    });
  };