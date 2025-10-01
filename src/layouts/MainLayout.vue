<template>
  <div>
    <header style="padding:16px; border-bottom:1px solid #eee;">
      <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/admin">Admin</router-link>
      </nav>
    </header>

    <main style="padding:16px;">
      <router-view />
    </main>

    <footer style="padding:16px; border-top:1px solid #eee;">Footer</footer>
  </div>
</template>
