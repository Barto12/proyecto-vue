import { defineStore } from 'pinia';
import { ref } from 'vue';

export const usedRegistrarStore = defineStore('registrar', () => {
  const nombre = ref('');
  const email = ref('');
  
  const guardarRegistro = (nombreFormulario, emailFormulario) => {
    nombre.value = nombreFormulario;
    email.value = emailFormulario;
    console.log('Registro guardado:', nombre.value, email.value);
  };

  return { nombre, email, guardarRegistro };
});
