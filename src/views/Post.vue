<template>
  <v-container>
    <h1>{{ iu.title }}</h1>

    <v-layout column>
      <v-flex v-for="(photo, index) in iu.photos" :key="index">
        <v-card flat class="my-2">
          <v-img :src="photo">
            
          </v-img>
        </v-card>
      </v-flex>
    </v-layout>
  
  </v-container>
</template>

<script>
export default {
  data: () => ({
    iu: {
      "title": "181226 아이유 인천공항 입국 직찍",
      "group": "아이유",
      "name": "아이유",
      "photoby": "box",
      "home": "http://boxgame.tistory.com/",
      "date": "181226",
      "photos": [
        "https://t1.daumcdn.net/cfile/tistory/99410B3F5C2481380F",
        "https://t1.daumcdn.net/cfile/tistory/998D7E3F5C24813822",
        "https://t1.daumcdn.net/cfile/tistory/99C91C3F5C24813914",
        "https://t1.daumcdn.net/cfile/tistory/9965643F5C24813A0D",
        "https://t1.daumcdn.net/cfile/tistory/99694C3F5C24813B0D",
        "https://t1.daumcdn.net/cfile/tistory/99B9323F5C24813C20",
        "https://t1.daumcdn.net/cfile/tistory/9917703F5C24813D06",
        "https://t1.daumcdn.net/cfile/tistory/99AB3E3F5C24813D16",
        "https://t1.daumcdn.net/cfile/tistory/99D2F33F5C24813E1F",
        "https://t1.daumcdn.net/cfile/tistory/99F3F83F5C24813F12",
        "https://t1.daumcdn.net/cfile/tistory/999D1C3F5C2481400B",
        "https://t1.daumcdn.net/cfile/tistory/9941AF3F5C2481411B",
        "https://t1.daumcdn.net/cfile/tistory/99AE233F5C24814116",
        "https://t1.daumcdn.net/cfile/tistory/9954C83F5C2481421A",
        "https://t1.daumcdn.net/cfile/tistory/997BC7375C2481431D",
        "https://t1.daumcdn.net/cfile/tistory/99C959375C24814424",
        "https://t1.daumcdn.net/cfile/tistory/99E270375C24814404",
        "https://t1.daumcdn.net/cfile/tistory/99841B375C24814513",
        "https://t1.daumcdn.net/cfile/tistory/99662C375C24814614",
        "https://t1.daumcdn.net/cfile/tistory/993BFC375C24814720",
        "https://t1.daumcdn.net/cfile/tistory/9933CE375C24814820",
        "https://t1.daumcdn.net/cfile/tistory/9950A1335C2481491B",
        "https://t1.daumcdn.net/cfile/tistory/99CC2B335C24814917",
        "https://t1.daumcdn.net/cfile/tistory/99F710335C24814A1F",
        "https://t1.daumcdn.net/cfile/tistory/998E51335C24814B19",
        "https://t1.daumcdn.net/cfile/tistory/99B0A8335C24814C18",
        "https://t1.daumcdn.net/cfile/tistory/990F2D335C24814C14",
        "https://t1.daumcdn.net/cfile/tistory/9940AE335C24814D1C",
        "https://t1.daumcdn.net/cfile/tistory/99CE0F3E5C24814E19"
      ],
      "tags": ["인천공항", "입국"],
      "meta": {
        "views": 0,
        "hearts": 0
      }
    }
  })
}
</script>

<style>

</style>
