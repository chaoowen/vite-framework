<template>
  <v-dialog
    :persistent="isPersistant"
    :width="width"
  >
    <v-card>
      <v-card-title v-if="title" class="text-primary ma-2">{{ title }}</v-card-title>
      <v-card-text>
        <slot>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </slot>
      </v-card-text>
      <div>
        <v-card-actions v-if="isFooter" :class="['d-flex',  isPrevious ? 'justify-space-between' : 'justify-end']">
          <!--  previous -->
          <div v-if="isPrevious">
            <v-btn color="warning" class="mr-4">
              <v-icon start icon="mdi-arrow-left" />
              Back
            </v-btn>
          </div>
          <!-- cancel & submit -->
          <div>
            <v-btn v-if="isCancel" variant="tonal" color="secondary" @click="onCancel">{{ cancelName }}</v-btn>
            <v-btn variant="tonal" color="primary" @click="onSubmit">{{ submitName }}</v-btn>
          </div>
        </v-card-actions>
        <slot v-else name="footer" />
      </div>
    </v-card>
  </v-dialog>
</template>

<script>
  export default {
    props: {
      isPersistant: { type: Boolean, default: false },
      isCancel: { type: Boolean, default: true },
      isPrevious: { type: Boolean, default: false },
      isFooter: { type: Boolean, default: true },
      size: { type: String, default: 'md' },           // sm,md,lg
      submitName: { type: String, default: 'submit' },
      cancelName: { type: String, default: 'cancel' },
      previousName: { type: String, default: 'previous' },
      title: { type: String, default: '' },
      content: { type: String, default: '' }
    },
    computed: {
      width() {
        return this.size === 'sm' ? '400' : this.size === 'md' ? '600' : '800';
      }
    },
    methods: {
      onSubmit() {
        this.$emit('onSubmit')
      },
      onCancel() {
        this.$emit('onCancel')
      },
      onPrevious() {
        this.$emit('onPrevious')
      },
    }
  }
</script>