<template>
    <div>
      <h2>Formulario de registro</h2>
      <Form :validation-schema="Schema" @submit="onSubmit">
        <div class="form">
          <label for="nombre">Nombre</label>
          <Field v-model="nombre" type="text" name="nombre" id="nombre" placeholder="Ingrese su nombre" />
          <ErrorMessage name="nombre" />
        </div>
        <div class="form">
          <label for="email">Email</label>
          <Field v-model="email" type="text" name="email" id="email" placeholder="Ingrese su email" />
          <ErrorMessage name="email" />
        </div>
        <div class="form">
          <button type="submit">Registrar</button>
        </div>
      </Form>
    </div>
  </template>
  
  <script setup>
  import { Form, Field, ErrorMessage } from 'vee-validate';
  import { Schema } from '../schemas/validationSchema';
  import { usedRegistrarStore } from '../stores/registrarStore';
  import { ref } from 'vue';
  
  const registrarStore = usedRegistrarStore();
  
  const nombre = ref('');
  const email = ref('');
  
  const onSubmit = () => {
    registrarStore.guardarRegistro(nombre.value, email.value);
    console.log('Formulario enviado', nombre.value, email.value);
  };
  </script>
  
  <style scoped>
  .form {
    margin-bottom: 10px;
  }
  </style>
  