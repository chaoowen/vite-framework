<template>
  <v-rating
    v-if="isRatingStar"
    :value="value"
    :length="length"
    :color="color"
    :size="size"
    :density="'comfortable'"
    hover
    clearable
  />
  <v-rating
    v-else
    :value="value"
    :length="length"
    :color="color"
    :size="size"
    :density="'comfortable'"
    hover
    clearable
    :empty-icon="emptyIcon"
    :full-icon="fullIcon"
  />
</template>

<script>
  export default {
    props: {
      isRatingStar: { type: Boolean, default: true },
      value: { type: Number, default: 0 },
      length: { type: Number, default: 5 },
      size: { type: String, default: 'small' },  // x-small,small,large,x-large
      color: { type: String, default: '' },
      emptyIcon: { type: String, default: '' },
      fullIcon: { type: String, default: '' }
    }
  }
</script>