<template>
  <header id="header">
    <v-app-bar
      color="deep-purple accent-4"
      dense
      dark
    >
      <router-link to="/"><v-app-bar-nav-icon></v-app-bar-nav-icon></router-link>
      <v-toolbar-title>This is Header.vue</v-toolbar-title>
      <v-spacer></v-spacer>
      <router-link to="/Test">
        <v-btn icon><v-icon>mdi-magnify</v-icon></v-btn>
      </router-link>  
      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>
  </header>
</template>

<script>
  export default {
    name: 'Header',
  }
</script>