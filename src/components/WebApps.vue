<template>
  <v-row>
    <v-col v-for="(app, index) in apps" :key="index" cols="12" sm="6" md="6" lg="6">
      <v-card outlined>
        <v-card-text class="text-center">
          <span>{{app.description}}</span>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions class="justify-center">
          <v-btn text color="blue" :href="app.url" target="blank" class="text-h6">
            {{app.name}}<v-icon class="ml-1">mdi-launch</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      apps: [
        {
          name: "CoviDZ",
          url: "https://covidz.netlify.app/",
          description: "Covid-19 Tracking App."
        }
      ]
    };
  }
};
</script>

<style>
</style>