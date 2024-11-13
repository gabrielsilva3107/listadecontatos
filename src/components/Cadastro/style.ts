import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Formulario = styled.form`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 10px;
  gap: 3px;
  border: 1px inset ${variaveis.preto};
  border-radius: 6px;
  padding: 4px;
  background-color: ${variaveis.cinza};
  box-shadow: 4px 4px 5px rgba(0, 0, 0, 0.4);

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: flex-start;
  }
`

export const Button = styled.button`
  background: ${variaveis.grafite};
  color: ${variaveis.branco};
  border: none;
  cursor: pointer;
  padding: 8px;
  border-radius: 9px;
  width: 78px;
  height: 35px;

  &:hover {
    background: ${variaveis.amarelo};
  }
`

export const ButtonSalvar = styled(Button)`
  background: ${variaveis.verde};

  &:hover {
    background: ${variaveis.verdeHover};
  }
`

export const CancelButton = styled(Button)`
  background-color: ${variaveis.vermelho};

  &:hover {
    background: ${variaveis.vermelhoHover};
  }
`

export const InputNomeRegistrado = styled.input`
  padding: 8px;
  border: none;
  background-color: transparent;
  line-height: 15px;
  font-family: 'Roboto Mono', monospace;
  width: 300px;

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const InputTelefoneRegistrado = styled(InputNomeRegistrado)`
  width: 215px;

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const InputEmailRegistrado = styled(InputNomeRegistrado)`
  width: 300px;

  @media (max-width: 768px) {
    width: 100%;
  }
`
