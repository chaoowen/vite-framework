<template>
  <div class="alert">
    <v-alert v-if="showAlert.success" icon="$success" color="success" :text="$t('alert.success')" />
    <v-alert v-if="showAlert.error" icon="$error" color="error" :text="$t('alert.error')" />
    <v-alert v-if="showAlert.warning" icon="$warning" color="warning" :text="$t('alert.warning')" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['showAlert'])
  }
}
</script>

<style>
.alert {
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translate(-50%, 0);
}
</style>