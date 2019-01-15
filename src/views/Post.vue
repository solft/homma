<template>
  <v-container>
    
    <h1>Post</h1>


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
import { mapState } from 'vuex'

export default {
  data: () => ({
    post: {}
  }),
  mounted() {
    this.post = this.$route.params.post
  }
}
</script>

<style>

</style>
