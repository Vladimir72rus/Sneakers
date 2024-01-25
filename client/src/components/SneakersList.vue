<template>
  <div class='list-container'>
    <SneakersCard
      v-for='data in listItem'
      :data='data'
    />
  </div>
</template>

<script>
  import SneakersCard from './SneakersCard.vue'

  export default {
    props: {
      listItem: {
        type: Array,
        required: true
      }
    },

    components: { SneakersCard }
  }
</script>

<style>
.list-container {
  display: flex;
  flex-wrap: wrap;
}
</style>