<template>
  <v-container>
    
    <h1>{{ post.title }}</h1>
    <v-layout column>
      <v-flex v-for="(photo, index) in post.photos" :key="index">
        <v-card flat class="my-2">
          <v-img :src="photo">
            
          </v-img>
        </v-card>
      </v-flex>
    </v-layout>
  
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data: () => ({
    post: {}
  }),
  computed: {
    ...mapGetters([
      'selectPostById'
    ])
  },
  mounted() {
    this.post = this.selectPostById(this.$route.params.id)
  }
}
</script>

<style>

</style>
