import React, { Component } from 'react';
import { Grid,Table, TableRow,TableBody, TableHead, TableCell,TableContainer,Paper,Button,TextField } from '@material-ui/core';
import data from '../data/data';

class CompletarUno extends Component {
    constructor(props) {
        super(props);
        this.state = {
            verbos:[]
        };
        this.siguiente = this.siguiente.bind(this);
        this.textDisable = this.textDisable.bind(this);
    }

    componentDidMount() {
        let temp = [...data.verbosUnoAux];
        this.setState({ verbos: temp });
    }

    ir = to => {
        this.props.history.push(to);
    }

    siguiente() {
        var idUser = localStorage.getItem('id');
        data.idIntento += 1;
        data.verbosUnoCompletos.push({idUser:idUser,intento:data.idIntento,verbos:this.state.verbos});
        this.ir("/Principal");
    }

    setRta = (e, verbo,tipoTexto) => {
        let valor = e.target.value;
        let temp = [...this.state.verbos];
        const index = temp.findIndex((item) => item.id === verbo.id);
    
        if(tipoTexto === 'verbo')
            verbo.verbo = valor;
        if(tipoTexto === 'traduccion')
            verbo.traduccion = valor;
    
        temp[index] = {id:verbo.id, verbo:verbo.verbo, traduccion:verbo.traduccion };
        this.setState({ verbos: temp });
    }

    textDisable(texto) {
        if(texto)
            return true;

        return false;
      }

    render() {
        return(
            <Grid container>
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
                                            <TableCell><TextField disabled={this.textDisable(row.verbo)} size="small" type="text" variant="outlined" id="v1" value={row.verbo} onChange={e => this.setRta(e, row,'verbo')}/></TableCell>
                                            <TableCell><TextField disabled={this.textDisable(row.traduccion)} size="small" type="text" variant="outlined" id="v1" value={row.traduccion} onChange={e => this.setRta(e, row,'traduccion')}/></TableCell>
                                        </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                            <Button variant="contained" onClick={this.siguiente} color="primary" >Enviar</Button>
                        </Grid>
                    </Grid>
            </Grid>
        )
    }
}

export default CompletarUno;