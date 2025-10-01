<template>
  <div>
    <h1>Usuarios (CRUD)</h1>

    <form @submit.prevent="onSubmit" style="margin-bottom:12px;">
      <input v-model="form.name" placeholder="Nombre" required />
      <input v-model="form.email" placeholder="Email" required type="email" />
      <button type="submit">{{ editingIndex === -1 ? 'Crear' : 'Guardar' }}</button>
      <button v-if="editingIndex !== -1" type="button" @click="cancelEdit">Cancelar</button>
    </form>

    <ul>
      <li v-for="(u, i) in users" :key="u.id" style="margin:8px 0;">
        <strong>{{ u.name }}</strong> — {{ u.email }}
        <button @click="editUser(i)">Editar</button>
        <button @click="deleteUser(i)">Eliminar</button>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

type User = { id: number; name: string; email: string }

const users = ref<User[]>([
  { id: 1, name: 'Ana', email: 'ana@example.com' },
  { id: 2, name: 'Luis', email: 'luis@example.com' }
])

const form = reactive({ name: '', email: '' })
const editingIndex = ref<number>(-1)

function onSubmit() {
  if (editingIndex.value === -1) {
    const id = Date.now()
    users.value.push({ id, name: form.name.trim(), email: form.email.trim() })
  } else {
    const u = users.value[editingIndex.value]
    u.name = form.name.trim()
    u.email = form.email.trim()
  }
  resetForm()
}

function editUser(i: number) {
  editingIndex.value = i
  form.name = users.value[i].name
  form.email = users.value[i].email
}

function deleteUser(i: number) {
  users.value.splice(i, 1)
  if (editingIndex.value === i) resetForm()
}

function cancelEdit() { resetForm() }
function resetForm() {
  editingIndex.value = -1
  form.name = ''
  form.email = ''
}
</script>
