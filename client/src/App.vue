<template>
  <div class='app'>
    <DraverFilter/>
    <h1 class='title'>Кросовки</h1>
    <SelectSorted
      v-model="selectedSort"
      :options="sortOptions"
    />
    <SneakersList
      :listItem='sortedList'
      v-if='!isLoading'
    />
    <div v-else>Идет загрузка...</div>
  </div>
</template>

<script>
  import SneakersList from '@/components/SneakersList.vue'
  import DraverFilter from '@/components/DraverFilter.vue'
  import SelectSorted from '@/components/SelectSorted.vue'
  import { mapState, mapActions } from 'vuex'

  export default {
    components: {
      SneakersList, DraverFilter, SelectSorted
    },

    data() {
      return {
        selectedSort: '',
        sortOptions: [
          { value: 'price', name: 'По цене' },
          { value: 'size', name: 'По размеру' }
        ]
      }
    },

    methods: {
      ...mapActions({
        fetchSneakers: 'common/fetchSneakers'
      })
    },

    mounted() {
      this.fetchSneakers()
    },

    computed: {
      ...mapState({
        listItem: state => state.common.listItem,
        isLoading: state => state.common.isLoading
      }),

      sortedList() {
        return [...this.listItem].sort((a, b) => {
          return a[this.selectedSort] - b[this.selectedSort]
        }
      )}
    }
  }
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .app {
    padding: 20px;
  }

  .title {
    margin-top: 50px;
  }
</style>
