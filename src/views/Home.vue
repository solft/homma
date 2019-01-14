<template>
  <v-container>

    <!-- 대문 사진 -->
    <h1>오늘의 사진</h1>
    <v-hover>
      <v-carousel height="1000" slot-scope="{ hover }" :class="`elevation-${hover ? 12 : 2}`">
        <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.photo" lazy>
          
        </v-carousel-item>
      </v-carousel>
    </v-hover>


    <!-- 아이돌 사진관으로 이동 -->
    <!-- 추가로 해당 아이돌 색 & 로고로 장식 해야될 듯 -->
    <!-- 예쁘게 배치를 못시키겠다.-->
    <v-container fluid>
      <v-layout wrap align-center justify-center>
        <v-flex v-for="idol in idols" :key="idol">
          <v-card hover width="150" router :to="`/list/${idol}`">
            <v-card-title>
                {{ idol }}
            </v-card-title>
          </v-card>
        </v-flex>  
      </v-layout>  
    </v-container>    

  </v-container>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        title: "설아",
        photo: "https://t1.daumcdn.net/cfile/tistory/99BFF24D5C35CF072B?original",
        date: "190108",
      },
      {
        title: "보나",
        photo: "https://t1.daumcdn.net/cfile/tistory/99C6864D5C35CF0313?original",
        date: "190108",
      },
      {
        title: "루다",
        photo: "http://i.imgur.com/CgpWbcN.jpg",
        date: "181111",
      },
      {
        title: "초롱",
        photo: "http://cfile2.uf.tistory.com/original/25A30733596BFDC80D8C73",
        date: "170716",
      },
      {
        title: "아이린",
        photo: "https://t1.daumcdn.net/cfile/tistory/244C35355968DDEA07",
        date: "170714",
      }
    ],
    idols: ['iu', 'wjsn', 'lovelyz', 'ohmygirl', 'twice', 'gfriend', 'gugudan', 'blackpink', 'clc', 'fromis9', 'izone', 'april']
  })
}
</script>

<style>

</style>
