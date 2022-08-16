import { http } from './config'

export default {
    listar:() => {
        return http.get('contato/list')
    },
    
    salvar:(contato) => {
        return http.post('contato/', contato)
    },
    
    atualizar:(contato) => {
        return http.put('contato/update/', contato)
    },
    apagar:(contato) => {
        return http.delete('contato/remover/', contato)
    },

}