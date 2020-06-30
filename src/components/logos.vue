<template>
  <v-row>
    <v-col v-for="(logo, index) in logos" :key="index" cols="12" sm="6" md="6" lg="4">
      <v-card outlined>
        <v-card-text>
          <v-img eager :src="(logo.path)"></v-img>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions class="justify-center">
          <span class="text-h6">{{logo.name}}</span>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      logos : [
        { name : '7awel', path : require('../assets/portfolio/logos/7awel.jpg') },
        { name : 'AIM', path : require('../assets/portfolio/logos/aim.jpg') },
        { name : 'Chackl Network', path : require('../assets/portfolio/logos/chackl.jpg') },
        { name : 'Chifaa', path : require('../assets/portfolio/logos/chifa.jpg') },
        { name : 'EZ-Meuble', path : require('../assets/portfolio/logos/ezmeuble.jpg') },
        { name : 'Golden Cage', path : require('../assets/portfolio/logos/golden.jpg') },
        { name : 'RO2A', path : require('../assets/portfolio/logos/ro2a.jpg') },
        { name : 'Swakon', path : require('../assets/portfolio/logos/swakon.jpg') },
        { name : 'Tima', path : require('../assets/portfolio/logos/tima.jpg') },
        { name : 'Takalem', path : require('../assets/portfolio/logos/takalem.jpg') },
      ]
    }
  },
}
</script>

<style>

</style>