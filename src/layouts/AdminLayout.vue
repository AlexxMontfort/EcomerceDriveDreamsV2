<template>
  <div style="display:flex; min-height:100vh;">
    <aside style="width:220px; padding:16px; background:#111827; color:white;">
      <h2>Admin</h2>
      <nav>
        <router-link to="/admin">Dashboard</router-link><br/>
        <router-link to="/admin/users">Usuarios</router-link>
      </nav>
    </aside>

    <main style="flex:1; padding:24px;">
      <router-view />
    </main>
  </div>
</template>
