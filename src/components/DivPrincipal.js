import React, { Component } from 'react';

import '../css/DivPrincipal.css';
import foto01 from '../image/WhatsApp Image 2020-04-10 at 17.20.40.jpeg';
import foto02 from '../image/64718821_507501846665655_2530642990381338890_n.jpg';
import foto03 from '../image/58749553_331241570807784_274517423684453965_n.jpg';
import foto04 from '../image/83467670_175399493791781_8728488382767970690_n.jpg';
import foto05 from '../image/59869889_368436857111832_422744722803620320_n.jpg';
import foto06 from '../image/64773186_451617665663087_5412851684169492253_n.jpg';
import bolo from '../image/Imagem-de-Bolos-Bolo-de-Aniversário-20-PNG.png';
import { Jumbotron, Container, Row } from 'react-bootstrap'

export default class DivPrincipal extends Component {
    render() {
        return (
            <>
                <Jumbotron id="div-principal">
                    <Jumbotron id="box">
                        <p>Feliz Aniversário</p>
                        <Container id="fora">
                            <img id="bolo" src={bolo} alt="BOLOZADA" />
                        </Container>
                        <h1>Abra!</h1>
                    </Jumbotron>
                    <Jumbotron id="box-interna">
                        <Container id="img">
                            <Row className="l1">
                                <img className="foto01" src={foto01} alt="imagem" />
                                <img className="foto02" src={foto02} alt="foto" />
                            </Row>
                            <Row className="l1">
                                <img className="foto01" src={foto03} alt="imagem" />
                                <img className="foto02" src={foto04} alt="foto" />
                            </Row>
                            <Row className="l1">
                                <img className="foto01" src={foto05} alt="imagem" />
                                <img className="foto02" src={foto06} alt="foto" />
                            </Row>
                        </Container>
                        <Container id="dentro">
                            <p>Hoje é um dia muito especial não é mesmo meu bem. kkk eu sei que esse dia representa muita coisa
                            pra você então descidir te dar essa lembrancinha.
                            </p>

                            <p>Já foram tantos momentos não é mesmo. Não e todo dia que nos fazemos 24 anos. Mesmo passando por tempos
                            tempestuosos você sempre sai radiante depois de tudo "mesmo com os olhos marejados".
                            </p>

                            <p>Sempre rodeada de pessoas, você pode não perceber mas existem tantas pessoas que te aman
                            "eu sou uma delas" sempre tão gentil e carinhosa "mesmo dizendo que é BRUTA".
                            </p>
                            <p>Você sempre me diz que você é a tempestade é eu a calmaria, mas para mim você não é nada de
                            tempestade mais sim a luz do sol. Você pode até não ver mas sempre que preciso esta lá por mim,
                            cuidando de mim "sempre tão carinhosa kk chega a ser fofa".
                            </p>

                            <p>Te Amo!
                            </p>
                        </Container>
                    </Jumbotron>
                </Jumbotron>
            </>
        );
    }
}