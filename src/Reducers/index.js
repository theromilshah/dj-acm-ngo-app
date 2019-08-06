import {combineReducers} from 'redux';
import activeUser from './activeUser'
import allusers from './allusers'
import participper from './participper'
import eventz from './eventz'

const allReducers = combineReducers({
    eventz:eventz,
    activeUser:activeUser,
    allusers:allusers,
    participper:participper
});

export default allReducers