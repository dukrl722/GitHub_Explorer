
import '@testing-library/jest-dom'
import { render, fireEvent, waitFor  } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { act } from 'react-dom/test-utils';

import Dashboard from "."

describe('Verifica se os elementos foram carregados na tela', () => {


    it('Valida Titulo das Pagina', () => {

        const {getByText} = render(<Dashboard />)

        expect(getByText('Explore repositórios do GitHub')).toBeInTheDocument()

    })

    it('Valida Botão de Pesquisar', () => {

        const {getByText} = render(<Dashboard />)

        expect(getByText('Pesquisar')).toBeInTheDocument()

    })

    it('Valida Campo de Pesquisar', () => {

        const {getByPlaceholderText} = render(<Dashboard />)

        expect(getByPlaceholderText('Digite o nome do Repositório')).toBeInTheDocument()

    })


})

describe('Verifica interações com elementos', () => {


    it('Retorna erro ao fazer pesquisa vazia', () => {

        const {getByText, debug} = render(<Dashboard />)

        const searchButton = getByText('Pesquisar');

        userEvent.click(searchButton);

        expect(getByText('Digite o autor/nome do repositório')).toBeInTheDocument()

    })

    it('Retorna erro ao fazer pesquisa com endereço de repositório inválido', () => {

        const {getByText, getByPlaceholderText, debug} = render(<Dashboard />)

        const searchButton = getByText('Pesquisar');
        const inputLabel = getByPlaceholderText('Digite o nome do Repositório');

        fireEvent.change(inputLabel, {target: {value: "endedeço invalido"}})

        userEvent.click(searchButton);
          
        expect(inputLabel.value).toEqual("endedeço invalido")
    
    })

});
