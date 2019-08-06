import React, { Component } from 'react'
import yoga from '../../Home/img/yoga.jpg'
import s1 from '../../Home/img/s1.jpg'
import { mapPropsStreamWithConfig } from 'recompose';
import { connect } from 'react-redux';
import {Paper} from '@material-ui/core'

class Events extends React.Component{
    render(){
        return(
            //event corresponding volunteers
            <div className="row" style={{overflow:"hidden",marginTop:"30px"}}>
            <div className="col s12 m4" >
              <div className="card medium">
                  <div className="card-content"  style={{paddingTop: 0,paddingBottom: 0}}>
                    <h5>Upcoming Event : 20-3-2019</h5>
                  </div>
                <div className="card-image waves-effect waves-light waves-block">
                  <img className="activator" src={yoga}/>
                  <span className="card-title"></span>
                </div>
                <div className="card-content"  style={{paddingTop: 0}}>
                  <h5>Yoga Day</h5>
                  <p>
                      21St June International Yoga Day...
                      <a href="#!" className="activator btn waves-effect waves-light ">Read More</a>
                  </p>
                </div>
                   <div className="card-reveal">
                      <span className="card-title">Card Title
                        <i className="material-icons">close</i>
                      </span>
                      <p>When Whole World busy in Preparation of 21 St June 1 St International Yoga Day . Mumbai Dabbawalas Will wear This T-shirt 
                        Containing Various Yoga Poses Designed By Vivekananda Youth Connect & Contribute in Spreading Awareness About Benefits of 
                        Yoga From 20 June Onwards. Thanks for Sponsorship by SURYA LED
                       </p>
                       {console.log(this.props)}
                       {this.props.activeUsers.activeUser.types=='Donor'?(<a href="/login"><button className="btn btn-large white green-text waves-effect waves-green " 
                       style={{marginTop: 2}}><i className="material-icons right">person_add</i>Participate</button></a>):(null)}
                    </div>
                </div>
              </div>
            <div className="col s12 m4">
              
                <div className="card medium">
                    <div className="card-content" style={{paddingTop: 0,paddingBottom: 0}}>
                      <h5>Upcoming Event : 22-3-2019</h5>
                    </div>
                  <div className="card-image waves-effect waves-light waves-block">
                    <img className="activator" src={s1}/>
                    <span className="card-title"></span>
                  </div>
                  <div className="card-content"  style={{paddingTop: 0}}>
                    <h5>Swatch Bharat Abhiyan</h5>
                    <p>
                        PM Narendra Modi ji & vivek...
                        <a href="#!" className="activator btn waves-effect waves-light ">Read More</a>
                    </p>
                  </div>
                     <div className="card-reveal">
                        <span className="card-title">Swatch Bharat Abhiyan
                          <i className="material-icons">close</i>
                        </span>
                        <p>at Mumbai University Kalina Campus Gate Mumbai Dabbawalas ,Ambassadors of Swatch Bharat Abhiyan Appointed By Hon. PM 
                          Shri Narendra Modi ji & Vivekananda Youth Connect Did Clean Up Activity to Give the message to Hon. PM that We R With You.
                         </p>
                         {this.props.activeUsers.activeUser.types=='Donor'?(<a href="/login"><button className="btn btn-large white green-text waves-effect waves-green " 
                         style={{marginTop: 2}}><i className="material-icons right">person_add</i>Participate</button></a>):(null)}
                      </div>
                  </div>       
          </div>
          {console.log(this.props)}
          <div style={{marginLeft:980,marginTop:50,marginRight:20}}>
      {
          this.props.activeUsers.activeUser.types=="Donor"?(<h3 style={{fontSize:20,padding:10}}>We thank you for your active involvement And contribution to the society</h3>):(this.props.activeUsers.activeUser.types=="Volunteer"?(<h3 style={{fontSize:20,padding:10}}>You can participate in any of the events mentioned aside</h3>):(
            this.props.activeUsers.activeUser.mail=='sanjayjnayak99@gmail.com'?(<h3 style={{fontSize:20}}>You are one of the members of committee for Swatchh Bharat Abhiyaan (Event 2)</h3>):(<h3 style={{fontSize:28,padding:10}}>You are one of the members of committee for Yoga Day (Event 1)</h3>)
          )) 
      }
      </div>
      <div style={{marginLeft:980,marginRight:20}}>
        <div style={{height:"100px",marginLeft:10}}>
            <h5>Event 1 volunteers</h5>
        </div>
        <div style={{height:"100px",marginLeft:10}}>
            <h5>Event 2 volunteers</h5>
        </div>
      </div>      
            </div>

        )
    }
}


const mapStateToProps=(activeUsers)=>{
    return{
        activeUsers
    }
}

export default connect(mapStateToProps)(Events)