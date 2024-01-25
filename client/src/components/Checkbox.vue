<template>
  <strong>Бренд</strong>

  <div class='container'>
    <form v-on:submit.prevent>
      <div class='container-checkbox'>
        <input class='container-input' type='checkbox' value='1' v-model='checkedValue'>
        <label>Adidas</label>
      </div>
      <div class='container-checkbox'>
        <input class='container-input' type='checkbox' value='2' v-model='checkedValue'>
        <label>Nike</label>
      </div>
      <div class='container-checkbox'>
        <input class='container-input' type='checkbox' value='3' v-model='checkedValue'>
        <label>Puma</label>
      </div>

      <button class='sub-btn' type='submit' @click='formSubmit'>Применить</button>
    </form>
  </div>

</template>

<script>
  import { mapActions, mapMutations } from 'vuex'

  export default {
    data() {
      return {
        checkedValue: []
      }
    },

    methods: {
      ...mapActions({
        fetchSneakers: 'common/fetchSneakers'
      }),
      ...mapMutations({
        setQueryParams: 'common/setQueryParams'
      }),
      formSubmit() {
        this.$emit('close')
        this.setQueryParams(this.checkedValue)
        this.fetchSneakers()
      }
    }
  }
</script>

<style>
  .container {
    display: flex;
  }

  .container-checkbox {
    flex-direction: row;
    margin: 10px 0;
    color: black
  }

  .container-input {
    margin-right: 10px;
  }

  .sub-btn {
    padding: 5px 3px;
  }
</style>