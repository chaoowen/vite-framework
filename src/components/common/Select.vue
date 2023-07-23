<template>
  <v-select
    v-model="checkedItems"
    ref="select"
    :variant="variantType"
    :label="title"
    :items="items"
    :multiple="isMultiple"
    :chips="isMultiple"
    :disabled="isDisabled"
    :clearable="isClearable"
    :placeholder="placeholderTitle"
    :bg-color="bgColor"
    :hide-details="true"
  />
</template>

<script>
export default {
  props: {
    type: { type: String, default: '' }, // default, outlined, color
    title: { type: String, default: '' },
    placeholderTitle: { type: String, default: '' },
    width: { type: String, default: '' },
    color: { type: String, default: '' },
    items: { type: Array, default: () => [] },
    isMultiple: { type: Boolean, default: false },
    isClearable: { type: Boolean, default: false },
    isDisabled: { type: Boolean, default: false }
  },
  data() {
    return {
      checkedItems: []
    }
  },
  computed: {
    bgColor() {
      return this.type === 'color' ? this.color : '';
    },
    variantType() {
      return this.type === 'outlined' ? 'outlined'
       : this.type === 'color' ? 'solo-filled'
       : 'solo';
    }
  },
  watch: {
    checkedItems(newValue) {
      this.$emit('change', newValue)
    }
  },
  mounted() {
    // set width
    if (!this.width) return;
    const select = this.$refs.select.$el.querySelector('.v-input__control');
    if (select) {
      this.$refs.select.$el.style.width = this.width + 'px';
      select.style.width = this.width + 'px';
    }
  }
}
</script>
