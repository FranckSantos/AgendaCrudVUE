<template>
  <div id="app">
    <nav>
      <div class="nav-wrapper blue darken-1">
        <a href="#" class="brand-logo center">CONTATOS</a>
      </div>
    </nav>

    <div class="container">
      <form @submit.prevent="salvar">
        <label>Nome</label>
        <input type="text" placeholder="Nome" v-model="contato.nome" />
        <label>Telefone</label>
        <input
          type="number"
          placeholder="Telefone"
          v-model="contato.telefone"
        />
        <label>e-mail</label>
        <input type="text" placeholder="e-mail" v-model="contato.email" />

        <button class="waves-effect waves-light btn-small">Salvar<i class="material-icons left">save</i></button>

        <div class="nav-wrapper blue darken-1">
          <a href="#" class="brand-logo center">CONTATOS</a>
        </div>
      </form>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>NOME</th>
            <th>TELEFONE</th>
            <th>E-MAIL</th>
            <th>ACTIONS</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="contato of contatos" :key="contato.id">
            <td>{{ contato.id }}</td>
            <td>{{ contato.nome }}</td>
            <td>{{ contato.telefone }}</td>
            <td>{{ contato.email }}</td>
            <td>
              <button @click="editar(contato)"
                class="waves-effect btn-small blue darken-1">
                <i class="material-icons">create</i>
              </button>

              <button @click="remover(contato.id)" class="waves-effect btn-small red darken-1">
                <i class="material-icons">delete</i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import contato from "./service/contatos";
export default {
  data() {
    return {
      contato: {
        id: "",
        nome: "",
        telefone: "",
        email: "",
      },

      contatos: [],
    }
  },

  mounted() {
    this.listar();
  },

  methods: {
    listar() {
      
      contato.listar().then((resposta) => {
        this.contatos = resposta.data;
      })
    },

    salvar() {
      if (!this.contato.id) {
        // eslint-disable-next-line no-unused-vars
        contato.salvar(this.contato).then((resposta) => {
          alert("Salvo com sucesso!");

          this.listar();
          this.contato = {};
        })
      } else {
        
        // eslint-disable-next-line no-unused-vars
          contato.atualizar(this.contato).then((resposta) => {
          this.contato = {};
          alert("Atualizado com sucesso!");
          this.listar();
          
        })
      }
    },
   
  remover(contato) {
    
    // eslint-disable-next-line no-unused-vars
 contato.apagar(contato).then((resposta) => {
   console.log("apagarr")
   
        this.listar();
      })
    },
 
    editar(contato) {
      
      this.contato = contato;
    }

  
  }
}
</script>

<style>
</style>

