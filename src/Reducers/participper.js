const initState=null

export default function participper(state=initState,action){
    switch (action.type) {
        case 'PARTICIPATE':
        console.log(action.payload)
        return action.payload
        default :return state
    }
}