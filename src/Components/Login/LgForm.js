import React, { Component } from "react";
import {
  Grid,
  TextField,
  Button,
  Typography,
  Divider
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { USER_LOGIN } from "../../Actions/activeUser";

// import red from "@material-ui/core/colors/red";
import { bindActionCreators } from "redux";

// const secondary = red[0];

class LgForm extends Component {
  state = { data: null };
  lgclick = async e => {
    console.log("inside lgclick");
    e.preventDefault();
    var mailid = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    this.props
      .USER_LOGIN(mailid, password)
      .then(() => {
        console.log("login successful");
        console.log(this.props)
       if(this.props.userState.fname!==undefined)
          this.props.loginProp.history.push('/dashboard')
        else
          alert('Incorrect Username or Password')
      })
      .catch(error => {
        console.log(error);
      });
      
  };
  render() {
    console.log(this.props);
    // var variable=(this.state.data!=null&&this.state.data!==false)?(<Link to={Home}/>):(null)
    return (
      // <MuiThemeProvider theme={myTheme}>
      <form>
        <Grid container direction="row" justify="center">
          <Typography
            variant="overline"
            style={{ fontSize: 30, color: "#607d8b", marginTop: 5 }}
          >
            Login
          </Typography>

          <Grid item xs={12} />

          <Grid item xs={6} style={{ marginTop: 10 }}>
            <TextField
              id="email"
              label="E-mail ID"
              autoFocus
              // className={classes.textField}
              // value={this.state.name}
              // onChange={this.handleChange('name')}
              fullWidth
              margin="normal"
              variant="outlined"
            />
          </Grid>

          <Grid item xs={12} />

          <Grid item xs={6}>
            <TextField
              id="password"
              type="password"
              label="Password"
              // className={classes.textField}
              // value={this.state.name}
              // onChange={this.handleChange('name')}
              fullWidth
              margin="normal"
              variant="outlined"
            />
          </Grid>

          <Grid item xs={12} />

          <Grid item>
            <Link to="dashboard" style={{ textDecoration: "none" }}>
              <Button
                style={{ marginRight: 10, marginBottom: 10, marginTop: 30 }}
                color="primary"
                variant="contained"
                onClick={this.lgclick}
                type="submit"
              >
                Login
              </Button>
            </Link>
            <Link to="signup" style={{ textDecoration: "none", color: "#fff" }}>
              <Button
                style={{ marginBottom: 10, marginTop: 30 }}
                color="primary"
                variant="outlined"
                // onClick={this.sgnclick}
              >
                Sign Up
              </Button>
            </Link>
          </Grid>

          <Grid container direction="row" style={{marginLeft:140}}>
            <Grid item xs={4}>
              <Divider variant="middle" style={{marginTop:10,marginBottom:20}}/>
            </Grid>
            OR
            <Grid item xs={4}>
              <Divider variant="middle" style={{marginTop:10,marginBottom:20}}/>
            </Grid>
          </Grid>

          <Grid item xs={12}>
          <div class="g-signin2" data-onsuccess="onSignIn" style={{background:"RED",width:300,marginLeft:150}}></div>
          </Grid>
        </Grid>
      </form>
      // {variable}
      // </MuiThemeProvider>
    );
  }
}

const mapStateToProps = ({ activeUser }) => ({
  userState:activeUser
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      USER_LOGIN
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LgForm);
