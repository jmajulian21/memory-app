import React, { Component } from 'react';
import { Button, Grid  } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { styles } from '../utils/styles';
import { withRouter } from "react-router-dom";

class Principal extends Component {
    constructor(props) {
        super(props);
        this.ejecricioUno = this.ejecricioUno.bind(this);
        this.avances = this.avances.bind(this);
    }

    ir = to => {
        this.props.history.push(to);
    }

    ejecricioUno() {
        this.ir("/Ejercicios/Uno");
    }

    avances() {
        this.ir("/Avances");
    }

 

    render() {
        const { classes } = this.props;
        var nombre = localStorage.getItem('nombre');
        var id = localStorage.getItem('id');
        return(
                <Grid container direction="column" style={{ padding: 10 }}>
                    <Button variant="contained" className={classes.textField} onClick={this.avances} color="secondary" >Avances</Button>
                    <Grid item xs={4}>
                        <h3>Hola {nombre}</h3>
                    </Grid>
                    <Grid container direction="row" style={{ padding: 10 }}>
                        <Button variant="contained" className={classes.textField} onClick={this.ejecricioUno} color="primary" >Ejercicio 1</Button>
                        
                    </Grid>
                </Grid>
        )
    }
}

export default withRouter((withStyles(styles)(Principal)));

//<Button variant="contained" className={classes.textField} onClick={this.ejecricioUno} color="primary" style={{ backgroundColor: '#00FF99' }}>Avances</Button>
//<Button variant="contained" className={classes.textField} onClick={this.ejecricioUno} color="secondary" >Ejercicio 2</Button>
//<Button disabled variant="contained" className={classes.textField} onClick={this.ejecricioUno} color="primary" >Ejercicio 3</Button>
//<Button disabled variant="contained" className={classes.textField} onClick={this.ejecricioUno} color="primary" >Ejercicio 4</Button>