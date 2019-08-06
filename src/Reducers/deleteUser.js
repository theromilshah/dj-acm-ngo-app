const initState=null

export default function deleteUser(state=initState,action){
    switch (action.type) {
        case 'DELETE_USER':
        return true
        default :return state
    }
}