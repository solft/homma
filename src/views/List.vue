<template>
  <v-container class="grey lighten-4">
    <!-- 
      추가할것
        v-hover로 호버하면 사진 정보 뜨게 만들기
        클릭하면 해당 라우터로 이동하게 만들기
    -->
    <v-layout row wrap>
      <v-flex v-for="(post, index) in posts" :key="index" xs12 sm6 md4 lg3 xl2>

        <v-hover>
          <v-card slot-scope="{ hover }" max-width="300" flat class="rounded-card ma-2" router :to="`/post/${post.name}/${post._id}`">
            <v-img class="rounded-card" :lazy-src="post.photos[0]" :src="post.photos[0]" :aspect-ratio="0.618">

              <!-- hover 부분 -->
              <v-expand-transition>
                <div v-if="hover" class="d-flex transition-fast-in-fast-out grey lighten-1 v-card--reveal" style="height: 100%;">
                  <div class="text-xs-center text-sm-center text-md-center text-lg-center text-xl-center
                    subheading font-weight-black black--text">
                    {{ post.title }}
                    <br/>
                    {{ post.name }}
                    <br/>
                    {{ post.homma }}
                  </div>
                </div>
              </v-expand-transition>

            </v-img>
            
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn icon small>
                <v-icon color="grey darken-1">visibility</v-icon>
              </v-btn>
              <span class="mr-2">{{ post.meta.views }}</span>

              <v-btn icon small>
                <v-icon color="pink lighten-1">favorite</v-icon>
              </v-btn>
              <span class="mr-2">{{ post.meta.hearts }}</span>
            </v-card-actions>
          </v-card>
        </v-hover>

      </v-flex>
    </v-layout>
    <v-layout class="mt-4" justify-center>
      <v-pagination v-model="currentPage" @input="onPageChange" :length="pageSize" :total-visible="10"></v-pagination>
    </v-layout>
    
  </v-container>
</template>

<script>
import { mapState, mapActions } from 'vuex'

 export default {
    data: () => ({
      currentPage: 1
    }),
    computed: mapState([
      'posts',
      'pageSize'
    ]),
    methods: {
      ...mapActions([
        'fetchData',
        'fetchDataSize'
      ]),
      onPageChange() {
        this.fetchData({ name: this.$route.params.name, page: this.currentPage })
        this.$router.push({ query : { page: this.currentPage }})
      }
    },
    mounted() {
      this.fetchData({ name: this.$route.params.name, page: 1 })
      this.fetchDataSize({ name: this.$route.params.name })
    }
  }
</script>

<style>
.rounded-card {
  border-radius: 15px;
}

.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.4;
  position: absolute;
  width: 100%;
}
</style>
