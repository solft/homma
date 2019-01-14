<template>
  <nav>

    <!-- 툴바 -->
    <v-toolbar app>
      <!-- 좌상단 메뉴 -->
      <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>

      <!-- 제목 -->
      <router-link to="/" class="black--text">
        <v-toolbar-title>
          <span>Home</span>
        </v-toolbar-title>
      </router-link>
      <!-- 빈 공간 -->
      <v-spacer></v-spacer>


      <!-- 우상단 버튼 (글작성, 알람, 계정) -->
      <v-tooltip bottom>
        <v-btn flat icon slot="activator" router to="/add">
          <v-icon>edit</v-icon>
        </v-btn>
        <span>글쓰기</span>  
      </v-tooltip>
      
      <v-tooltip bottom>
        <v-btn flat icon slot="activator">
          <v-icon>notifications</v-icon>
        </v-btn>
        <span>알람</span>
      </v-tooltip>

      <v-btn flat icon>
        <v-icon>account_circle</v-icon>
      </v-btn>
      
    </v-toolbar>


    <!-- 네비게이션 드로어 -->
    <v-navigation-drawer app v-model="drawer">
      <v-layout column align-center justify-space-around>
        <!-- 최신, 인기, 좋아요 -->
        <v-flex class="mt-5">
          <v-tooltip top>
            <v-btn flat icon slot="activator">
              <v-icon>flash_on</v-icon>
            </v-btn>
            <span>최신</span>
          </v-tooltip>

          <v-tooltip top>
            <v-btn flat icon slot="activator">
              <v-icon>whatshot</v-icon>
            </v-btn>
            <span>인기</span>
          </v-tooltip>

          <v-tooltip top>
            <v-btn flat icon slot="activator">
              <v-icon>favorite</v-icon>
            </v-btn>
            <span>좋아요</span>
          </v-tooltip>
        </v-flex>

        <!-- 검색창 -->
        <v-form>
          <v-container>
            <v-layout row wrap>
              <v-flex>
                <v-text-field label="Outline" single-line outline clearable></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
        </v-form>

        <!-- links -->
        <v-list>
          <v-list-tile v-for="link in links" :key="link.text" router :to="link.route">
            <v-list-tile-content>
              <v-list-tile-title>{{ link.text }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>


      </v-layout>

    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      links: [
        { text: 'Home', route: '/' },
      ]
    }
  }
}
</script>

<style>
a {
  text-decoration: none;
}
</style>
