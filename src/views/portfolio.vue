<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="4" md="4">
        <v-card outlined>
          <v-card-title primary-title>Projects</v-card-title>
          <v-divider></v-divider>
          <v-card-text>
            <v-list>
              <v-list-item-group color="blue">
                <!-- <v-list-item :to="route.path" v-for="(route, index) in routes" :key="index"> -->
                <v-list-item :to="{name : route.name}" v-for="(route, index) in routes" :key="index">
                  {{route.path}}
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" sm="8" md="8">
        <v-card outlined>
          <v-card-text>
            <transition name="fade" mode="out-in">
              <router-view></router-view>
            </transition>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      routes : [
        { path : 'Logos', name: 'portfolio.logos'},
        { path : 'Apps', name: 'portfolio.apps'},
      ]
    }
  },
}
</script>

<style>

</style>