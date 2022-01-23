import { setTextRange } from 'typescript';
import { createStore } from 'vuex'

export default createStore({
  state: {
    listadoArbores: {
      loader: { //Como la carga del árbol es json este objeto no describe el estado en que no encontramos
        pending: false,
        msg: 'Cargando datos...'
      },
      arbores: []
    }, //Listado de árboles para el catálogo
  },
  mutations: {
    listadoArbores(state) {
      (
        async () => {
          try {
            state.listadoArbores.loader.pending = true;
            const respuesta = await fetch('https://raw.githubusercontent.com/sansus3/COLABORATIVO_GITHUB/main/species.json');
            if (!respuesta.ok) {//estado en un rango de 200 a 299
              console.error(`Error index.js en mutaciones [${respuesta.status}]`);
              throw Error(respuesta.status);
            } else
              state.listadoArbores.arbores = await respuesta.json();
            state.listadoArbores.loader.pending = false;
          } catch (error) {
            state.listadoArbores.loader.pending = true;
            state.listadoArbores.loader.msg = error.message;
            console.error(`Error index.js en mutaciones [${error}]`);
          }
        }
      )()
    },
    setArbol(state,payment){
      state.listadoArbores.arbores.push(payment);
    }
  },
  actions: {
    getListadoArbores({ commit }) {
      commit('listadoArbores');
    },
    setArbol({commit},objTree){
      commit('setArbol',objTree);
    }
  },
  modules: {
  }
})
