<template>
  <a-button type='primary' @click='showDrawer'>Filter</a-button>

  <a-drawer
    v-model:open='open'
    class='drawer'
    :root-style='{ color: "blue" }'
    title='Filter'
    placement='right'
  >
    <Checkbox @close='onClose' />
  </a-drawer>
</template>
  
<script setup>
  import { ref } from 'vue'
  import Checkbox from '@/components/Checkbox.vue'

  const open = ref(false)
  const showDrawer = () => { open.value = true }
  const onClose = () => { open.value = false }
</script>
