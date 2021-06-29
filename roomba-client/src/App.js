import * as React from "react"
import './App.css';
import {Button, CSSReset} from '@chakra-ui/react';
import { ChakraProvider } from "@chakra-ui/react"
import { Switch, Route } from 'react-router-dom';
import { MenuPage, DashboardPage, LandingPage } from './pages'
function App() {
  return (
    <ChakraProvider>
      <Switch>
         <Route path="/" exact= {true} component={ LandingPage } />
         <Route path="/menu" exact= {true} component={ MenuPage } />
         <Route path="/dashboard/:id" exact= {true} component={ DashboardPage } />
      </Switch>
    </ChakraProvider>
  );
}

export default App;
