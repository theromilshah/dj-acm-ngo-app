import React from 'react'
import {connect} from 'react-redux'
import Hedder from './Header'
import Volunteers from './Volunteers'
import Events from './Events'
import ActualVol from './ActualVol'
import {Paper,Button} from '@material-ui/core'
import VolForm from './VolForm'
import {EVENTZ} from '../../Actions/eventz'
import { bindActionCreators } from "redux";

class Dashboard extends React.Component{

    getout=()=>{
        window.location.reload()
        this.props.history.push('/login')
    }

    componentDidMount(){
        this.props
        .EVENTZ()
        .then(x=>{
          console.log("login successful");
          console.log(this.props)
        })
        .catch(error => {
          console.log(error);
        });
    }

    pdfdownloader=async()=>{
      console.log(this.props.activeUser)
      
    }

    render(){
        if(this.props.activeUser.fname!==""){
            return(
                
                    <div style={{background:"#eee"}}>
                    {console.log(this.props)}
                    <Hedder/>
                    <div style={{marginLeft:"40px",marginRight:"40px"}} >
                    <Events/>
                    </div>
                    {this.props.activeUser.types=='Volunteer'?(
                        <div style={{marginLeft:"100px"}}>
                        <h5>Participation Form for Interested Volunteers</h5>   
                            <VolForm/>
                            <a target='_blank' href ={`http://localhost:3002/pdf?name=${this.props.activeUser.fname}&event=${this.props.activeUser.mailid=="rohitrocks2801@gmail.com"?"Yoga Day":"Swatchh Bharat Abhiyaan"}&date=${"21 June 2019"}`}>
                            <Button onClick={this.pdfdownloader} >Download Leave Form</Button>
                            </a>
                        </div>
                    ):(null)}
                    
                    {console.log('-------------')}
                    {console.log(this.props)}
                    {console.log(this.props.activeUser.fname)}
                    {this.props.activeUser.types!=="Volunteer"?(<div><h2 style={{marginLeft:"60px"}}>Stakeholders</h2><Paper style={{marginLeft:"60px",marginRight:"60px",marginBottom:"30px"}}><Volunteers/></Paper></div>):(null)}
                    
                    <h2 style={{marginLeft:"60px"}}>Volunteers</h2>
                    <Paper style={{marginLeft:"60px",marginRight:"60px",marginBottom:"30px"}}>
                    <ActualVol/>
                    </Paper>
                    </div>
        
            )
        }
        else
        return(
            <div>
                <h3>Session timed out</h3>
                {console.log(this.props)}
                <button onClick={this.getout}>Back to home page</button>
            </div>
        )
    }
}



const mapStateToProps=({activeUser,eventz})=>{
    return{
        activeUser,eventz
    }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      EVENTZ
    },
    dispatch
  );

export default connect(mapStateToProps,mapDispatchToProps)(Dashboard)