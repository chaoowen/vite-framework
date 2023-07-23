<template>
  <v-table 
    :fixed-header="isHeaderFixed" 
    :height="height"
    :style="`width: ${width};`"
  >
    <!-- header -->
    <thead>
      <tr>
        <slot name="header">
          <th class="text-left">{{ item }}</th>
        </slot>
      </tr>
    </thead>
    <!-- body -->
    <tbody>
      <slot name="body">
        <v-hover v-for="item in body" :key="item">
          <template v-slot:default="{ isHovering, props }">
            <tr v-bind="props" :color="isHovering ? 'primary-light' : 'secondary-light'">
              <td>{{ item }}</td>
            </tr>
          </template>
        </v-hover>
      </slot>
    </tbody>
  </v-table>
</template>

<script>
export default {
  props: {
    width: { type: String, default: '' },
    height: { type: String, default: '' },
    isHeaderFixed: { type: Boolean, default: false },
    header: { type: Array, default: [] },
    body: { type: Array, default: [] }
  }
}
</script>
