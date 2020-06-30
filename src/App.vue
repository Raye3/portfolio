<template>
  <v-app>
    <v-app-bar elevate-on-scroll app color="dark" dark>  
      <v-btn outlined text class="text-h5">Hako</v-btn>
      <v-spacer></v-spacer>
      <v-btn class="mr-1" v-for="(route, index) in routes" :key="index" text color="text-white" :to="route.path">{{route.name}}</v-btn>
    </v-app-bar>

    <v-main>
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    routes: [
      { path: "/", name: "Home" },
      //{ path: "/about", name: "about" },
      { path: "/skills", name: "skills" },
      { path: "/portfolio", name: "portfolio" },
      { path: "/services", name: "services" },
      { path: "/contact", name: "contact" }
    ]
  }),
  beforeCreate() {
    // document.title = 'Hako';
    
  }
};
</script>
<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>