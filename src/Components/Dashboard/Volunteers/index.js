import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {ALL_USERS} from '../../../Actions/allusers'
import {DELETE_USER} from '../../../Actions/deleteuser'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import DeleteIcon from '@material-ui/icons/Delete';
import {IconButton} from '@material-ui/core'


const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});



class SimpleTable extends React.Component {

    userdeletor=async(x)=>{
        let y= await this.props.DELETE_USER(x.mail)
        console.log(x)
            
      this.props.ALL_USERS()
      .then(x=>{
        console.log("login successful");
        console.log('hua')
        console.log(this.props)
      })
      .catch(error => {
        console.log(error);
      });
      this.forceUpdate()
    }

    componentDidMount(){
        this.props
      .ALL_USERS()
      .then(x=>{
        console.log("login successful");
        console.log(this.props)
      })
      .catch(error => {
        console.log(error);
      });
    }
    render(){
  const { classes } = this.props;
        const xtreeme=this.props.allusers!=null?(this.props.allusers.map(row => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.fname}
              </TableCell>
              <TableCell align="left">{row.lname}</TableCell>
              <TableCell align="left">{row.mail}</TableCell>
              <TableCell align="left">{row.notifications.length}</TableCell>
              <TableCell align="left">{row.type}</TableCell>
              <IconButton onClick={()=>{this.userdeletor(row)}} style={{marginTop:"13px"}}>
              <DeleteIcon  />
              </IconButton>
            </TableRow>
          ))):(null)
  return (
    <Paper className={classes.root}>
    {console.log(this.props.allusers)}
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Name </TableCell>
            <TableCell align="left">Surname</TableCell>
            <TableCell align="left">E-mail ID</TableCell>
            <TableCell align="left">Notifications</TableCell>
            <TableCell align="left">Type</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {xtreeme}
        </TableBody>
      </Table>
    </Paper>
  );
          }
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = ({ allusers }) => ({
    allusers:allusers
  });
  
const mapDispatchToProps = dispatch =>
bindActionCreators(
    {
    ALL_USERS,
    DELETE_USER
    },
    dispatch
);

export default connect(mapStateToProps,mapDispatchToProps)(withStyles(styles)(SimpleTable));