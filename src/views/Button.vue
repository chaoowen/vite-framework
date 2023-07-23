<template>
  <h2 class="mb-4 mx-2">{{ $t('page.button.title') }}</h2>

  <!-- text button -->
  <v-card>
    <v-card-title class="text-primary ma-2">
      {{ $t('page.button.text') }}
    </v-card-title>
    <v-card-text>
      <div class="d-flex">
        <v-btn class="text-primary mr-4">{{ $t('button.submit') }}</v-btn>
        <v-btn class="text-secondary mr-4">{{ $t('button.cancel') }}</v-btn>
        <v-btn class="text-warning mr-4">{{ $t('button.exit') }}</v-btn>
      </div>
      <div class="d-flex mt-4">
        <v-btn variant="tonal" class="bg-primary mr-4">{{ $t('button.submit') }}</v-btn>
        <v-btn variant="tonal" class="bg-secondary mr-4">{{ $t('button.cancel') }}</v-btn>
        <v-btn variant="tonal" class="bg-warning mr-4">{{ $t('button.exit') }}</v-btn>
        <v-btn variant="tonal" class="bg-success mr-4">{{ $t('alert.success') }}</v-btn>
        <v-btn variant="tonal" class="bg-error mr-4">{{ $t('alert.error') }}</v-btn>
      </div>
      <div class="d-flex mt-4">
        <v-btn variant="outlined" class="text-primary mr-4">{{ $t('button.submit') }}</v-btn>
        <v-btn variant="outlined" class="text-secondary mr-4">{{ $t('button.cancel') }}</v-btn>
        <v-btn variant="outlined" class="text-error mr-4">{{ $t('button.exit') }}</v-btn>
      </div>
    </v-card-text>
  </v-card>

  <!-- icon button -->
  <v-card class="mt-4">
    <v-card-title class="text-primary mx-2 mt-2">
      {{ $t('page.button.icon') }}
    </v-card-title>
    <v-card-subtitle class="mx-2 mb-2">
      <a href="https://pictogrammers.com/library/mdi/" class="text-primary">
        click here to check all Material Design Icons
      </a>
    </v-card-subtitle>
    <v-card-text>
      <div class="d-flex">
        <v-btn icon="mdi-magnify" class="text-primary mr-4"></v-btn>
        <v-btn icon variant="tonal" class="text-secondary mr-4">
          <v-icon>mdi-account-arrow-right</v-icon>
        </v-btn>
        <v-btn icon="mdi-map-marker-question" variant="outlined" class="text-warning mr-4"></v-btn>
        <v-btn
          class="mr-4"
          variant="text"
          icon="mdi-thumb-up"
          color="blue-lighten-2"
        ></v-btn>
      </div>
    </v-card-text>
  </v-card>

  <!-- text and icon button -->
  <v-card class="mt-4">
    <v-card-title class="text-primary mx-2 mt-2">
      {{ $t('page.button.textAndIcon') }}
    </v-card-title>
    <v-card-subtitle class="mx-2 mb-2">
      <a href="https://pictogrammers.com/library/mdi/" class="text-primary">
        click here to check all Material Design Icons
      </a>
    </v-card-subtitle>
    <v-card-text>
      <div class="d-flex">
        <v-btn class="mr-4">
          {{ $t('button.accept') }}
          <v-icon end icon="mdi-checkbox-marked-circle" />
        </v-btn>
        <v-btn color="error" class="mr-4">
          {{ $t('button.decline') }}
          <v-icon end icon="mdi-cancel" />
        </v-btn>
        <v-btn color="warning" class="mr-4">
          <v-icon start icon="mdi-arrow-left" />
          {{ $t('button.back') }}
        </v-btn>
      </div>
      <div class="d-flex mt-4">
        <v-btn variant="tonal" color="primary" class="mr-4">
          {{ $t('button.accept') }}
          <v-icon end icon="mdi-checkbox-marked-circle" />
        </v-btn>
        <v-btn variant="tonal" color="error" class="mr-4">
          {{ $t('button.decline') }}
          <v-icon end icon="mdi-cancel" />
        </v-btn>
        <v-btn variant="tonal" color="warning" class="mr-4">
          <v-icon start icon="mdi-arrow-left" />
          {{ $t('button.back') }}
        </v-btn>
      </div>
      <div class="d-flex mt-4">
        <v-btn variant="outlined" color="primary" class="mr-4">
          {{ $t('button.accept') }}
          <v-icon end icon="mdi-checkbox-marked-circle" />
        </v-btn>
        <v-btn variant="outlined" color="error" class="mr-4">
          {{ $t('button.decline') }}
          <v-icon end icon="mdi-cancel" />
        </v-btn>
        <v-btn variant="outlined" color="warning" class="mr-4">
          <v-icon start icon="mdi-arrow-left" />
          {{ $t('button.back') }}
        </v-btn>
      </div>
    </v-card-text>
  </v-card>
</template>