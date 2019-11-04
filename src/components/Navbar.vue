<template>
  <nav>
    <v-app-bar flat app> 
      <v-app-bar-nav-icon class="blue-grey--text" @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="title text-uppercase blue-grey--text">
        <span class="font-weight-light">Todo</span>
        <span class="font-weight-bold">Ninja</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <!-- menu -->
      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn text color="blue-grey lighten-1" v-on="on">
            <span>Menu</span>
            <v-icon right>mdi-chevron-down</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="(item, index) in items" :key="index" :to="item.route">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>      
      <v-btn text color="blue-grey lighten-1">
        <span>Sing Out</span>
        <v-icon right>mdi-exit-to-app</v-icon>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer app v-model="drawer" class="purple lighten-5">
      <v-list-item two-line>
        <v-list-item-avatar size="50">
          <img src="/avatar-1.png">
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>
            The Net Ninja
          </v-list-item-title>
          <v-list-item-subtitle>
            Web developer
          </v-list-item-subtitle>
        </v-list-item-content>

      </v-list-item>

      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title gray--text text-uppercase">
            <span class="font-weight-light">Todo</span>
            <span class="font-weight-bold">Ninja</span>
          </v-list-item-title>
          <v-list-item-subtitle  class="gray--text">
            Vuetify
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-list-item>
        <v-list-item-action>
          <Popup />
        </v-list-item-action>
      </v-list-item>

      <v-divider  class="gray"></v-divider>

      <v-list dense nav>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          router
          :to="item.route"
        >
          <v-list-item-icon>
            <v-icon  class="gray--text">{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="gray--text">{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>     
  </nav>
</template>

<script>
import Popup from './Popup';
export default {
  name: 'Navbar',
  components: {
    Popup,
  },
  data() {
    return {
      drawer: false,
      items: [
          { title: 'Dashboard', icon: 'mdi-view-dashboard-variant', route: '/' },
          { title: 'My Proyect', icon: 'mdi-folder-outline', route: '/project' },
          { title: 'Team', icon: 'mdi-account-circle', route: '/team' },
        ],      
    }
  }

}
</script>

<style>

</style>