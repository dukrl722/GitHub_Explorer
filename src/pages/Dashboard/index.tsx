import React from 'react';
import {FiChevronRight} from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import {Title, Form, Repositories} from './styles';

const Dashboard: React.FC = () => {
    return (
        <>
            <img src={logoImg} alt="GitHub Explorer" />
            <Title>Explore repositórios do GitHub</Title>

            <Form>
                <input placeholder="Digite o nome do Repositório"/>
                <button type="submit">Pesquisar</button>
            </Form>

            <Repositories>
                <a href="Teste">
                    <img src="" alt="Eduardo da Silva"/>
                    <div>
                        <strong>dale</strong>
                        <p>Dale de novo, é meramente teste</p>
                    </div>
                    <FiChevronRight size={20}/>
                </a>
            </Repositories>
        </>
    )
};

export default Dashboard;
