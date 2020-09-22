import React from 'react';
import logoImg from '../../assets/logo.png'
import {Link} from 'react-router-dom';
import {Container} from './style'

const Header = () => {
    return (
        <Container>
            <img src={logoImg} alt="Todo"></img>

            <ul>
                <li>
                    <Link to="/">
                        Dashbord
                </Link>
                </li>
                <li>
                    <Link to="/tarefas">
                        Tarefas
                </Link>
                </li>
            </ul>
        </Container>
    )
}

export default Header;