import React, { Component } from 'react';

import '../css/DivPrincipal.css';
import { Jumbotron, Container } from 'react-bootstrap'

export default class DivPrincipal extends Component {
    render() {
        return (
            <>
                <Jumbotron id="div-principal">
                        <Container id="box">

                        </Container>
                </Jumbotron>
            </>
        );
    }
}