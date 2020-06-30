<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="4" sm="12">
        <v-card outlined class="d-flex justify-center flex-column align-center">
          <v-avatar class="rounded-circle my-4" size="128">
            <img src="../assets/avatar.jpg" alt="alt" />
          </v-avatar>
          <div>
            <span class="text-h4 blue--text">Abd El-Hak</span>
          </div>

          <v-divider width="100%" height="2px"></v-divider>

          <v-card-actions class="d-flex justify-end ma-2">
            <v-btn :href="icon.link" target="blank" :title="icon.name" outlined fab medium v-for="(icon, index) in socialLinks" :key="index" text>
              <v-icon>{{icon.icon}}</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12" md="8" sm="12">
        <v-card outlined>
          <v-card-title class="blue--text" primary-title>About ME</v-card-title>
          <v-card-text>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim sequi veniam, laboriosam similique labore est quam voluptatem reprehenderit dolorem ullam explicabo, perferendis, facilis in eaque. Enim obcaecati voluptates excepturi nihil.</p>
          </v-card-text>
          <v-card-title class="blue--text" primary-title>Interests</v-card-title>
          <v-card-text>
            <div>
              <v-chip v-for="(interest, key) in interests" :key="key" class="mr-2 my-2">{{interest}}</v-chip>
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
      ],
      interests: [
        "Software Engineering",
        "Programing",
        "Projects Management",
        "Marketing",
        "Graphic Design",
        "UI/UX Design",
        "Product Management",
        "IT"
      ]
    };
  }
};
</script>

<style>
</style>