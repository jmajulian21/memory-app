import React, { Component } from 'react';
import { Grid,Table, TableRow,TableBody, TableHead, TableCell,TableContainer,Paper,Button } from '@material-ui/core';
import data from '../data/data';

class EjercicioUno extends Component {
    constructor(props) {
        super(props);
        this.siguiente = this.siguiente.bind(this);
    }

    ir = to => {
        this.props.history.push(to);
    }

    siguiente() {
        this.ir("/Ejercicios/Uno/Sitio");
    }

    render() {
 
        return(
            <Grid container>
                    <Grid item xs={2}>
                        <h3>Memorizar los siguientes verbos:</h3>
                        <Grid container direction="column">
                            <TableContainer component={Paper}>
                                <Table size="small" aria-label="a dense table">
                                    <TableHead style={{ backgroundColor: '#4C2882' }}>
                                    <TableRow>
                                        <TableCell>Infinitivo</TableCell>
                                        <TableCell>Traducción</TableCell>
                                    </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {data.verbosUno.map(row => (
                                        <TableRow key={row.verbo}>
                                            <TableCell>{row.verbo}</TableCell>
                                            <TableCell>{row.traduccion}</TableCell>
                                        </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                            <Button variant="contained" onClick={this.siguiente} color="primary" >Siguiente</Button>
                        </Grid>
                    </Grid>
            </Grid>
        )
    }
}

export default EjercicioUno;