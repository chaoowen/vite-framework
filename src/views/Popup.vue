<template>
  <h2 class="mb-4 mx-2">{{ $t('page.popup.title') }}</h2>
  
  <!-- dialog -->
  <v-card>
    <v-card-title class="text-primary ma-2">
      {{ $t('page.popup.dialog') }}
    </v-card-title>
    <v-card-text>
      <div>
        <v-btn class="text-primary mr-4" @click="openModal.small = true">persistant small modal</v-btn>
        <v-btn class="text-primary mr-4" @click="openModal.medium = true">medium modal</v-btn>
        <v-btn class="text-primary mr-4" @click="openModal.large = true">large modal</v-btn>
      </div>
      <v-btn class="text-primary mt-4" @click="openModal.persist = true">persist modal</v-btn>
      <!-- small -->
      <Dialog 
        v-model="openModal.small"
        :title="'Small Modal Example'"
        :isCancel="false"
        :submitName="'back'"
        :size="'sm'"
        @onSubmit="handleModalSubmit('small')"
      />  
      <!-- meduim -->
      <Dialog 
        v-model="openModal.medium"
        :isPrevious="true"
        :title="'Medium Modal Example'"
        @onSubmit="handleModalSubmit('medium')"
      />  
      <!-- meduim -->
      <Dialog 
        v-model="openModal.large"
        :isPrevious="true"
        :title="'Large Modal Example'"
        :size="'lg'"
        @onSubmit="handleModalSubmit('large')"
      />  
      <!-- persist -->
      <Dialog 
        v-model="openModal.persist"
        :title="'Persist Modal Example'"
        :isPersistant="true"
        :size="'sm'"
        @onSubmit="handleModalSubmit('persist')"
      /> 
    </v-card-text>
  </v-card>  

  <!-- snackbar -->
  <v-card class="mt-4">
    <v-card-title class="text-primary ma-2">
      {{ $t('page.popup.snackbar') }}
    </v-card-title>
    <v-card-text>
      <v-btn variant="tonal" class="bg-success mr-4" @click="hasSuccess = true">SUCCESS</v-btn>
      <v-btn variant="tonal" class="bg-error mr-4" @click="hasError = true">ERROR</v-btn>
      <!-- success -->
      <v-snackbar v-model="hasSuccess" :timeout="1000" color="secondary-light">
        {{ $t('alert.success') }}
      </v-snackbar>
      <!-- error -->
      <v-snackbar v-model="hasError" :timeout="1000" color="secondary-light">
        {{ $t('alert.error') }}
      </v-snackbar>
    </v-card-text>
  </v-card>

  <!-- alert -->
  <v-card class="mt-4">
    <v-card-title class="text-primary ma-2">
      {{ $t('page.popup.alert') }}
    </v-card-title>
    <v-card-text>
      <v-btn variant="outlined" class="text-success mr-4" @click="$store.dispatch('handleShowAlert', 'success')">success</v-btn>
      <v-btn variant="outlined" class="text-error mr-4" @click="$store.dispatch('handleShowAlert', 'error')">error</v-btn>
      <v-btn variant="outlined" class="text-warning mr-4" @click="$store.dispatch('handleShowAlert', 'warning')">warning</v-btn>
    </v-card-text>
  </v-card>
</template>

<script>
import Dialog from '@/components/common/Dialog.vue'
export default {
  components: {
    Dialog
  },
  watch: {
    openModal() {
      console.log(this.openModal)
    }
  },
  data() {
    return {
      openModal: {
        small: false,
        medium: false,
        large: false,
        persist: false
      },
      hasError: false,
      hasSuccess: false
    }
  },
  methods: {
    handleModalSubmit(key) {
      this.openModal[key] = false
    }
  }
}
</script>