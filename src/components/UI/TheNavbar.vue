<template>
  <v-app-bar color="grey darken-4" dark app>
    <router-link :to="{ name: 'Home' }" v-slot="{ navigate }" custom>
      <v-toolbar-title @click="navigate" class="pointer"
        >Simple Shop</v-toolbar-title
      >
    </router-link>

    <v-spacer></v-spacer>

    <span v-if="isAuthenticated" class="mx-2">Hello, {{ username }}!</span>

    <v-btn v-if="isAdmin" :to="{ name: 'AdminMain' }"  icon >
      <v-icon>mdi-shield-account-variant-outline</v-icon>
    </v-btn>
    

    <v-btn v-if="isAuthenticated" :to="{ name: 'Cart' }"  icon>
      <v-badge v-if="total" :content="total" overlap color="orange darken-4"
        ><v-icon>mdi-cart</v-icon></v-badge
      >
      <v-icon v-else>mdi-cart</v-icon>
    </v-btn>
    <v-btn v-if="!isAuthenticated" :to="{ name: 'Login' }"  icon replace>
      <v-icon>mdi-login-variant</v-icon>
    </v-btn>
    <v-btn v-else @click="logout" icon>
      <v-icon>mdi-login-variant</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: 'TheNavbar',
  computed: {
    isAuthenticated() {
      return this.$store.getters['auth/isAuthenticated']
    },
    total() {
      return this.$store.getters['cart/total']
    },
    username() {
      return this.$store.getters['auth/username']
    },
    isAdmin() {
      return this.$store.getters['auth/isAdmin']
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('auth/logout')
      this.$router.replace({ name: 'Login' })
    }
  }
}
</script>

<style scoped>
.pointer:hover {
  cursor: pointer;
}
</style>