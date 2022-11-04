import React from "react"
import { Container, Header, HeaderIcon, BoxIcon, BoxTitle, ArrowBack, Wifi, Battery, BoxForm, BoxInput, Input, Button, Link, Menu, MenuIcon } from './style'
import { IoIosHome, IoMdHeartEmpty, IoIosPerson, IoIosPaper } from "react-icons/io";
import { GiNetworkBars } from "react-icons/gi";

function Payments() {


    return (
        <Container>

            <Header>
                <HeaderIcon>
                    <p>9:41</p>
                    <BoxIcon>
                        <GiNetworkBars/>
                        <Wifi />
                        <Battery />
                    </BoxIcon>
                </HeaderIcon>
                <BoxTitle>
                    <ArrowBack />
                    <h3>Pagamento</h3>
                </BoxTitle>
            </Header>
            <BoxForm>
                <div>
                    <p>Insira os dados para concluir a contratação via cartão de crédito</p>
                </div>
                <BoxInput>
                    <Input type="number" placeholder="Número do cartão" />
                    <Input type="text" placeholder="Nome do titular" />
                    <Input type="number" placeholder="CPF do titular" />
                    <Input type="number" placeholder="Validade" />
                    <Input type="number" placeholder="Código de segurança" />
                </BoxInput>
                <Button> Pagar</Button>
                <Link>Voltar</Link>

            </BoxForm>
            <Menu>
                <MenuIcon>
                    <IoIosHome />
                    <p>Home</p>
                </MenuIcon>
                <MenuIcon>
                    <IoIosPaper/>
                    <p>Plantões</p>
                </MenuIcon>
                <MenuIcon>
                    <IoMdHeartEmpty />
                    <p>Favoritos</p>
                </MenuIcon>
                <MenuIcon>
                    <IoIosPerson />
                    <p>Minha conta</p>
                </MenuIcon>
            </Menu>


        </Container>
    )

}

export default Payments