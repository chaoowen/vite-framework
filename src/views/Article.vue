<template>
  <h2 class="mb-4 mx-2">{{ $t('page.article.title') }}</h2>
  
  <!-- hover -->
  <v-card>
    <v-card-title class="text-primary ma-2">
      {{ $t('page.article.hover') }}
    </v-card-title>
    <v-card-text class="d-flex">
      <v-hover>
        <template v-slot:default="{ isHovering, props }">
          <v-card v-bind="props" :color="isHovering ? 'primary-light' : 'secondary-light'" class="pa-4">
            <v-card-text>Card 1</v-card-text>
          </v-card>
        </template>
      </v-hover>
      <v-hover>
        <template v-slot:default="{ isHovering, props }">
          <v-card v-bind="props" :color="isHovering ? 'primary-light' : 'secondary-light'" class="ml-4 pa-4">
            <v-card-text>Card 2</v-card-text>
          </v-card>
        </template>
      </v-hover>
    </v-card-text>
  </v-card>

  <!-- badge -->
  <v-card class="mt-4">
    <v-card-title class="text-primary ma-2">
      {{ $t('page.article.badge') }}
    </v-card-title>
    <v-card-text class="d-flex">
      <v-toolbar color="primary">
        <v-spacer></v-spacer>

        <v-btn class="text-none" stacked>
          <v-badge dot color="success">
            <v-icon>mdi-home-outline</v-icon>
          </v-badge>
        </v-btn>

        <v-btn class="text-none" stacked>
          <v-icon>mdi-account-multiple-outline</v-icon>
        </v-btn>

        <v-btn class="text-none" stacked>
          <v-badge content="9+" color="error">
            <v-icon>mdi-store-outline</v-icon>
          </v-badge>
        </v-btn>

        <v-btn class="text-none" stacked>
          <v-badge content="2" color="error">
            <v-icon>mdi-bell-outline</v-icon>
          </v-badge>
        </v-btn>

        <v-btn class="text-none" stacked>
          <v-icon>mdi-menu</v-icon>
        </v-btn>

        <v-spacer></v-spacer>
      </v-toolbar>
    </v-card-text>
  </v-card>

  <!-- rating -->
  <v-card class="mt-4">
    <v-card-title class="text-primary ma-2">
      {{ $t('page.article.rating') }}
    </v-card-title>
    <v-card-text>
      <div class="d-flex align-center">
        <Rating
          v-model="ratingStar"
          :length="10"
          :color="'primary'"
          :size="'x-large'"
        />
        <h3 class="text-primary ml-2">{{ ratingStar }}</h3>
      </div>
      <div class="mt-2 d-flex align-center">
        <Rating
          v-model="ratingCircle"
          :isRatingStar="false"
          :length="5"
          :color="'warning'"
          :empty-icon="'mdi-circle-outline'"
          :full-icon="'mdi-circle'"
        />
        <h3 class="text-warning ml-2">{{ ratingCircle }}</h3>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
import Rating from '@/components/common/Rating.vue'
export default {
  components: {
    Rating
  },
  data() {
    return {
      ratingStar: 0,
      ratingCircle: 0
    }
  }
}
</script>