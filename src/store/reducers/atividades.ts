import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../../models/Tarefa'

type AtividadeState = {
  itens: Tarefa[]
}

const initialState: AtividadeState = {
  itens: [
    {
      id: 1,
      nomeContato: 'Pedro Colucci',
      emailContato: 'pedro.col@hotmail.com',
      phoneContato: '(12) 12345-6789'
    },
    {
      id: 2,
      nomeContato: 'Lucca Coelho',
      emailContato: 'luccacoelho00@hotmail.com',
      phoneContato: '(26) 92662-0026'
    },
    {
      id: 3,
      nomeContato: 'Eduardo Satoru',
      emailContato: 'eduardo.satoru@hotmail.com',
      phoneContato: '(14) 02017-2546'
    }
  ]
}

const atividadesSlice = createSlice({
  name: 'atividades',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter(
        (atividade) => atividade.id !== action.payload
      )
    },
    editar: (state, action: PayloadAction<Tarefa>) => {
      const indexDaTarefa = state.itens.findIndex(
        (p) => p.id === action.payload.id
      )

      if (indexDaTarefa >= 0) {
        state.itens[indexDaTarefa] = action.payload
      }
    },
    cadastrar: (state, action: PayloadAction<Tarefa>) => {
      const cadastroJaExiste = state.itens.some(
        (atividade) =>
          atividade.nomeContato.toLowerCase() ===
          action.payload.nomeContato.toLowerCase()
      )
      if (cadastroJaExiste) {
        alert('Já existe um contato com este nome')
      } else {
        const novoId =
          state.itens.length > 0
            ? state.itens[state.itens.length - 1].id + 1
            : 1
        state.itens.push({ ...action.payload, id: novoId })
      }
    }
  }
})

export const { remover, editar, cadastrar } = atividadesSlice.actions
export default atividadesSlice.reducer
