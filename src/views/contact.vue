<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card outlined>
          <v-card-text class="text-center">
            <div class="d-flex justify-center align-center">
              <v-btn href="mailto:hakorefas@gmail.com" outlined fab medium>
                <v-icon>mdi-email</v-icon>
              </v-btn>
              <span class="ma-2 text-h6">Hakorefas@gmail.com</span>
            </div>
            <v-divider class="my-4"></v-divider>
            <div>
              <v-btn class="mx-2" :href="icon.link" target="blank" :title="icon.name" outlined fab medium v-for="(icon, index) in socialLinks" :key="index" text>
                <v-icon>{{icon.icon}}</v-icon>
              </v-btn>
            </div>
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
      socialLinks: [
        {
          name: "Facebook",
          icon: "mdi-facebook",
          link: "https://www.facebook.com/abdelhak0"
        },
        {
          name: "Github",
          icon: "mdi-github",
          link: "https://github.com/Raye3/"
        },
        {
          name: "LinkedIn",
          icon: "mdi-linkedin",
          link: "https://www.linkedin.com/in/hakorey/"
        },
        {
          name: "Instagram",
          icon: "mdi-instagram",
          link: "https://www.instagram.com/hako.rey/"
        }
      ]
    };
  }
};
</script>

<style>
</style>