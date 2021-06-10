import React, { Component } from 'react';
import { Route, Switch} from 'react-router-dom';
import Principal from '../principal/principal';
import EjercicioUno from '../ejercicioUno/ejercicioUno';
import CompletarUno from '../ejercicioUno/completarUno';
import Avances from '../avances/avances';

class Urls extends Component {
    render() {
      return (
              <Switch>
                 <Route exact path='/Principal' component={Principal}/>
                 <Route exact path='/Ejercicios/Uno' component={EjercicioUno}/>
                 <Route exact path='/Ejercicios/Uno/Sitio' component={CompletarUno}/>
                 <Route exact path='/Avances' component={CompletarUno}/>
              </Switch>
      );
    }
  }
  
  export default Urls;
  