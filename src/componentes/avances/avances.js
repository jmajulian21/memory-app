import React, { Component } from 'react';
import { Grid,Table, TableRow,TableBody, TableHead, TableCell,TableContainer,Paper,Button,TextField } from '@material-ui/core';
import data from '../data/data';

class CompletarUno extends Component {
    constructor(props) {
        super(props);
        this.state = {
            verbos:[]
        };
        this.principal = this.principal.bind(this);
        this.textDisable = this.textDisable.bind(this);
    }

    componentDidMount() {
        var idUser = localStorage.getItem('id');
        let temp=[];
        for(var s = 0; s < data.verbosUnoCompletos.length; s++){
            if(data.verbosUnoCompletos[s].idUser === idUser){
                temp = [...data.verbosUnoCompletos[s].verbos];
            }
        }
        this.setState({ verbos: temp });
    }

    ir = to => {
        this.props.history.push(to);
    }

    principal() {
        this.ir("/Principal");
    }


    render() {
        return(
            <Grid container>
                <Button variant="contained" onClick={this.principal} color="primary" >Pagina principal</Button>
                    <Grid item xs={2}>
                        <h3>Traduccir los siguientes verbos:</h3>
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
                                        {this.state.verbos.map(row => (
                                        <TableRow key={row.id}>
                                            <TableCell><TextField disabled size="small" type="text" variant="outlined" id="v1" value={row.verbo}/></TableCell>
                                            <TableCell><TextField disabled size="small" type="text" variant="outlined" id="v1" value={row.traduccion}/></TableCell>
                                        </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                            
                        </Grid>
                    </Grid>
            </Grid>
        )
    }
}

export default CompletarUno;