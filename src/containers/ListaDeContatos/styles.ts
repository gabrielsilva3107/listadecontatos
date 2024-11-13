import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

// disposição do meu formulario em linha
export const Formulario = styled.form`
  display: flex;
  align-items: center;
  margin-top: 20px;
  gap: 3px;
  margin-bottom: 60px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

// estilo do meu botão principal de adicionar
export const Button = styled.button`
  background-color: ${variaveis.verde};
  color: ${variaveis.branco};
  border: none;
  cursor: pointer;
  padding: 8px;
  border-radius: 9px;
  width: 225px;
  height: 35px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7);

  &:hover {
    background: ${variaveis.verdeHover};
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`
export const CancelButton = styled(Button)`
  background-color: ${variaveis.vermelho};
  width: 78px;
  height: 35px;
  &:hover {
    background: ${variaveis.vermelhoHover};
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const InputNome = styled.input`
  padding: 8px;
  border: 1px solid ${variaveis.preto};
  border-radius: 4px;
  line-height: 15px;
  font-family: 'Roboto Mono', monospace;
  width: 100%;
`

// Agora passando uma função dentro do styled ()
// Aqui está recebendo por função as informações do (InputNome) e adiciono um espacamento e margin
export const InputSearch = styled(InputNome)`
  width: 100%;
  margin-top: 8px;
  background-color: ${variaveis.cinzaLight};
  color: ${variaveis.preto};
  margin-bottom: 10px;

  @media (max-width: 768px) {
    width: 100%;
  }
`

// Aqui está recebendo por função as informações do (InputNome) e adiciono um espacamento e margin
export const InputTelefone = styled(InputNome)`
  width: 70%;

  @media (max-width: 768px) {
    width: 100%;
  }
`

// Aqui está recebendo por função as informações do (InputNome) e adiciono um espacamento e margin
export const InputEmail = styled(InputNome)`
  width: 100%;
`
