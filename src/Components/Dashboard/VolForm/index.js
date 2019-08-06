import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import {Button,Paper} from '@material-ui/core'
import {VOL_PART} from '../../../Actions/participper'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {EVENTZ} from '../../../Actions/eventz'

const styles = theme => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing.unit * 3,
  },
  group: {
    margin: `${theme.spacing.unit}px 0`,
  },
});

class RadioButtonsGroup extends React.Component {
  state = {
    value: 'Yoga Day',
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };
  

  eventtyper=()=>{
      console.log(this.state.value)
      console.log(this.props.activeUser.mail)
      this.props
      .VOL_PART(this.props.activeUser.mail, this.state.value)
      .then(() => {
        console.log("login successful");
        console.log(this.props)
      })
      .catch(error => {
        console.log(error);
      });
      alert('You have been successfully registered')

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

  render() {
    const { classes } = this.props;

    return (
        <div style={{margin:10}}>
      <div className={classes.root}>
      <FormControl component="fieldset" className={classes.formControl}>
      <FormLabel component="legend">Event</FormLabel>
      <RadioGroup
        aria-label="Participate for Events(Only for Volunteers)"
        name="gender1"
        className={classes.group}
        value={this.state.value}
        onChange={this.handleChange}
      >
        <FormControlLabel value="Yoga Day" control={<Radio />} label="Yoga Day" />
        <FormControlLabel value="Swatchh Bharat Abhiyaan" control={<Radio />} label="Swatchh Bharat Abhiyaan" />
      </RadioGroup>
      <Button onClick={this.eventtyper}>Submit</Button>
    </FormControl>
        
      </div>
      </div>
    );
  }
}

RadioButtonsGroup.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = ({ participper,activeUser,eventz }) => ({
  participper:participper,
  activeUser:activeUser,
  eventz:eventz
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      VOL_PART,
      EVENTZ
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(RadioButtonsGroup));