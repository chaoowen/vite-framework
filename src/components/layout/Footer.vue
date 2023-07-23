<template>
  <div>
    <slot>
      <div class="d-flex justify-center py-3 bg-secondary">
        @CopyRight {{ new Date().getFullYear() }} - <strong>chaowen</strong> - framework
      </div>
    </slot>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
.footer {
  text-align: center;
  display: flex;
}
</style>