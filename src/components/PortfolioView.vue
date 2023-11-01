<template>
    <v-app id="inspire">
      <v-app-bar extended>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
  
        <v-app-bar-title>Jeff Weeks</v-app-bar-title>
  
        <v-spacer></v-spacer>
        <div>
          <router-link :to="{ name: 'AboutRoute' }">
            About
          </router-link>
        </div>
        <v-btn icon="mdi-dots-vertical">
        </v-btn>
      </v-app-bar>
  
      <v-main>
        <v-container>
          <v-row align="center" justify="center">
            <v-col v-for="(variant, i) in variants" :key="i" cols="auto">
              <v-card class="mx-auto" max-width="344" :variant="variant">
                <v-card-item>
                  <div>
                    <div class="text-overline mb-1">
                      {{ variant }}
                    </div>
                    <div class="text-h6 mb-1">
                      Headline
                    </div>
                    <div>
                      <v-img :src="images[i]" aspect-ratio="16/9"></v-img>
  
                    </div>
                  </div>
                </v-card-item>
  
                <v-card-actions>
                  <v-btn>
                    More Information
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
  
      </v-main>
    </v-app>
  </template>
  
  
  <script setup>
  const variants = ['Backpacks', 'Drinkware', 'Drinkware', 'Food', 'Awards', "Awards", "Entertainment", "Awards"]
  const images = [
    "promoImages/promoImage1.png",
    "promoImages/promoImage2.png",
    "promoImages/promoImage3.png",
    "promoImages/promoImage4.png",
    "promoImages/promoImage5.png",
    "promoImages/promoImage6.png",
    "promoImages/promoImage7.png",
    "promoImages/promoImage8.png"
  ]
  </script>
  