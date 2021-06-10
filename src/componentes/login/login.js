import React, { Component } from 'react';
import { TextField, Button, Grid  } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { styles } from '../utils/styles';
import { withRouter } from "react-router-dom";
import data from '../data/data';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: "",
            pass: "",
            id:0
        }

        this.setUser = this.setUser.bind(this);
        this.setPass = this.setPass.bind(this);
        this.login = this.login.bind(this);
    }

    ir = to => {
        this.props.history.push(to);
    }

    login() {
        var user = this.state.user.toLowerCase();
        var pass = this.state.pass;

        for(var i=0 ; i < data.users.length ; i++){
            if(data.users[i].user == user && data.users[i].pass == pass){
                localStorage.setItem('id',data.users[i].id);
                localStorage.setItem('nombre',data.users[i].nombre);
                localStorage.setItem('estaLogeado',true);
                window.alert("Usuario Logeado Correctamente ");
                this.ir("/Principal");
            }
        }

    }


render() {
    const { classes } = this.props; 
    var estaLogeado = localStorage.getItem('estaLogeado')?localStorage.getItem('estaLogeado'):false;
    return (
        <div>
            {!estaLogeado &&
                <Grid container direction="row"> 
                    <Grid item xs={5}/>
                    <Grid item xs={7}>
                        <Grid container direction="column"> 
                            <TextField className={classes.textField} id="user" label="Apellido" value={this.state.user} onChange={this.setUser} type="text" />
                            <TextField className={classes.textField} id="pass" label="Contraseña" value={this.state.pass} onChange={this.setPass} type="password" />
                            <Button variant="contained" className={classes.textField} onClick={this.login} color="primary" >Ingresar</Button>
                        </Grid>
                    </Grid>
                </Grid>
            }
        </div>
    )}
setUser(e) { this.setState({ user: e.target.value }) }
setPass(e) { this.setState({ pass: e.target.value }) }
}


export default withRouter((withStyles(styles)(Login)));