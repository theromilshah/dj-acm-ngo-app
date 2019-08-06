const initState=null

export default function allusers(state=initState,action){
    switch (action.type) {
        case 'ALL_USERS':
        return action.payload
        default :return state
    }
}