<template>
  <v-container class="grey lighten-4">
    <!-- 
      추가할것
        v-hover로 호버하면 사진 정보 뜨게 만들기
        클릭하면 해당 라우터로 이동하게 만들기
    -->
    <v-layout row wrap>
      <v-flex v-for="(iu, index) in ius" :key="index" xs12 sm6 md4 lg3 xl2>

        <v-hover>
          <v-card slot-scope="{ hover }" max-width="300" flat class="rounded-card ma-2">
            <v-img class="rounded-card" :lazy-src="iu.photos[0]" :src="iu.photos[0]" :aspect-ratio="0.618">

              <!-- hover 부분 -->
              <v-expand-transition>
                <div v-if="hover" class="d-flex transition-fast-in-fast-out grey lighten-1 v-card--reveal" style="height: 100%;">
                  <div class="text-xs-center text-sm-center text-md-center text-lg-center text-xl-center
                    subheading font-weight-black black--text">
                    {{ iu.title }}
                    <br/>
                    {{ iu.name }}
                    <br/>
                   photo by. box
                  </div>
                </div>
              </v-expand-transition>

            </v-img>
            
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn icon small>
                <v-icon color="grey darken-1">visibility</v-icon>
              </v-btn>
              <span class="mr-2">{{ iu.meta.views }}</span>

              <v-btn icon small>
                <v-icon color="pink lighten-1">favorite</v-icon>
              </v-btn>
              <span class="mr-2">{{ iu.meta.hearts }}</span>
            </v-card-actions>
          </v-card>
        </v-hover>

      </v-flex>
    </v-layout>

  </v-container>
</template>

<script>
 export default {
    data: () => ({
      ius: [
        {
          title: "181207 아이유 인천공항 출국 직찍",
          name: "아이유",
          group: "아이유",
          date: "181207",
          photos: [
            "https://t1.daumcdn.net/cfile/tistory/995B28505C09FF3532",
            "https://t1.daumcdn.net/cfile/tistory/9940F5505C09FF3533",
          ],
          tags: ["공항", "출근", "태그", "많다", "넘침"],
          meta: {
            views: 12,
            hearts: 100
          }
        },
        {
          title: "181207 아이유 인천공항 출국 직찍",
          name: "아이유",
          group: "아이유",
          date: "181207",
          photos: [
            "https://t1.daumcdn.net/cfile/tistory/992C7E505C09FF3628",
            "https://t1.daumcdn.net/cfile/tistory/995FAE505C09FF3732",
          ],
          tags: ["공항", "출근"],
          meta: {
            views: 45280,
            hearts: 1250
          }
        },
        {
          title: "181207 아이유 인천공항 출국 직찍",
          name: "아이유",
          group: "아이유",
          date: "181207",
          photos: [
            "https://t1.daumcdn.net/cfile/tistory/9955DB505C09FF3832",
            "https://t1.daumcdn.net/cfile/tistory/994653505C09FF3827",
          ],
          tags: ["공항", "출근"],
          meta: {
            views: 72100,
            hearts: 740
          }
        },
        {
          title: "181207 아이유 인천공항 출국 직찍",
          name: "아이유",
          group: "아이유",
          date: "181207",
          photos: [
            "https://t1.daumcdn.net/cfile/tistory/997188505C09FF3930",
            "https://t1.daumcdn.net/cfile/tistory/99C786425C09FF3A32",
          ],
          tags: ["공항", "출근"],
          meta: {
            views: 82440,
            hearts: 4400
          }
        },
        {
          title: "181207 아이유 인천공항 출국 직찍",
          name: "아이유",
          group: "아이유",
          date: "181207",
          photos: [
            "https://t1.daumcdn.net/cfile/tistory/993E7B425C09FF3A26",
            "https://t1.daumcdn.net/cfile/tistory/990256425C09FF3B01",
          ],
          tags: ["공항", "출근"],
          meta: {
            views: 72210,
            hearts: 1470
          }
        },
        {
          title: "181207 아이유 인천공항 출국 직찍",
          name: "아이유",
          group: "아이유",
          date: "181207",
          photos: [
            "https://t1.daumcdn.net/cfile/tistory/99D1CC425C09FF3C32",
            "https://t1.daumcdn.net/cfile/tistory/9911EC425C09FF3C30",
          ],
          tags: ["공항", "출근"],
          meta: {
            views: 75280,
            hearts: 240
          }
        },
        {
          title: "181207 아이유 인천공항 출국 직찍",
          name: "아이유",
          group: "아이유",
          date: "181207",
          photos: [
            "https://t1.daumcdn.net/cfile/tistory/992312425C09FF3D2E",
            "https://t1.daumcdn.net/cfile/tistory/99ABCC425C09FF3E33",
          ],
          tags: ["공항", "출근"],
          meta: {
            views: 86660,
            hearts: 230
          }
        },
        {
          title: "181207 아이유 인천공항 출국 직찍",
          name: "아이유",
          group: "아이유",
          date: "181207",
          photos: [
            "https://t1.daumcdn.net/cfile/tistory/99E49C495C09FF3F3A",
            "https://t1.daumcdn.net/cfile/tistory/9984F0495C09FF3F36",
          ],
          tags: ["공항", "출근"],
          meta: {
            views: 486210,
            hearts: 480
          }
        },
      ]
    })
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
