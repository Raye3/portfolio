<template>
  <v-container>
    <v-card outlined>
      <v-card-title primary-title>Skills</v-card-title>
      <v-divider></v-divider>
      <v-card-text>
          <v-card-title primary-title>Technologies</v-card-title>
        <v-row>
          <v-col class="my-4" v-for="(skill, index) in skills" :key="index" cols="12" sm="6" md="3">
            <v-card outlined>
              <v-card-title primary-title>
                <v-icon class="mr-1" size="32" :color="skill.color">{{ skill.icon }}</v-icon>
                <span class="text-h6">{{ skill.name }}</span>
              </v-card-title>
              <v-card-text>
                <v-progress-linear rounded :color="skill.color" height="10" :value="skill.percentage"></v-progress-linear>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      skills: [
        {
          name: "HTML",
          icon: "mdi-language-html5",
          color: "#e34f26",
          percentage: "90"
        },
        {
          name: "CSS",
          icon: "mdi-language-css3",
          color: "blue",
          percentage: "80"
        },
        {
          name: "JavaScript",
          icon: "mdi-language-javascript",
          color: "#f7df1e",
          percentage: "75"
        },
        {
          name: "PHP",
          icon: "mdi-language-php",
          color: "#4f5b93",
          percentage: "85"
        },
        {
          name: "Laravel",
          icon: "mdi-laravel",
          color: "#f55247",
          percentage: "70"
        },
        { name: "Vue", icon: "mdi-vuejs", color: "#42b883", percentage: "75" },
        { name: "GIT", icon: "mdi-git", color: "black", percentage: "75" }
      ]
    };
  }
};
</script>

<style></style>
