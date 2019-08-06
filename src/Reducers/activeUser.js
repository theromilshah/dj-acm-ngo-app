const initState={
    fname:"",
    lname:"",
    mailid:"",
    notifications:[],
    types:false
}

export default function activeUser(state=initState,action){
    switch (action.type) {
        case 'GET_USER':
        return {
            id: action.id,
            fname: action.fname,
            lname: action.lname,
            mail: action.mail,
            notifications: action.notifications,
            types: action.types
          };
        default :return state
    }
}