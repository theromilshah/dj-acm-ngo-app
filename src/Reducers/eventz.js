const initState=null

export default function allusers(state=initState,action){
    switch (action.type) {
        case 'ALL_EVENTS':
        console.log(action.payload)
        return action.payload
        default :return state
    }
}