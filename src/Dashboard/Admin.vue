<template>
  <v-container>
    <v-row>
      <v-col      
        md="6"
        col="auto"
        xl="6"
        sm="12"
      >
        <v-card
          class="text-center"
          to="dashboard/articals"
        >
          <v-card-text>
            <div class="v-card__text ">
              <v-icon
                class="primary--text"
                style="font-size: 40px;"
              >
                mdi-post-outline
              </v-icon>
            </div>
            <div class="v-card__text display-2 primary--text">
              {{ saticcs.articles }}
            </div>
          </v-card-text>  
          <span class="headline">المقالات الرياضية</span>
        </v-card>
      </v-col>
      <v-col      
        md="6"
        col="auto"
        xl="6"
        sm="12"
      >
        <v-card
          class="text-center"
          to="dashboard/askCouch"
        >
          <v-card-text>
            <div class="v-card__text ">
              <v-icon
                class="primary--text"
                style="font-size: 40px;"
              >
                mdi-frequently-asked-questions
              </v-icon>
            </div>
            <div class="v-card__text display-2 primary--text">
              {{ saticcs.questions }}
            </div>
          </v-card-text>  
          <span class="headline">اسأل المدرب</span>
        </v-card>
      </v-col>
      <v-col      
        md="6"
        col="auto"
        xl="6"
        sm="12"
      >
        <v-card
          class="text-center"
          to="dashboard/customer"
        >
          <v-card-text>
            <div class="v-card__text ">
              <v-icon
                class="primary--text"
                style="font-size: 40px;"
              >
                mdi-account-supervisor
              </v-icon>
            </div>
            <div class="v-card__text display-2 primary--text">
              {{ saticcs.customers }}
            </div>
          </v-card-text>  
          <span class="headline">المستخدمين</span>
        </v-card>
      </v-col>
      <v-col      
        md="6"
        col="auto"
        xl="6"
        sm="12"
      >
        <v-card
          class="text-center"
          to="dashboard/packages"
        >
          <v-card-text>
            <div class="v-card__text ">
              <v-icon
                class="primary--text"
                style="font-size: 40px;"
              >
                mdi-account-check
              </v-icon>
            </div>
            <div class="v-card__text display-2 primary--text">
              {{ saticcs.customers_has_subscription }}
            </div>
          </v-card-text>  
          <span class="headline">مشتركين الحزم</span>
        </v-card>
      </v-col>
      <v-col      
        md="6"
        col="auto"
        xl="6"
        sm="12"
      >
        <v-card
          class="text-center"
          to="dashboard/gallery"
        >
          <v-card-text>
            <div class="v-card__text ">
              <v-icon
                class="primary--text"
                style="font-size: 40px;"
              >
                mdi mdi-video
              </v-icon>
            </div>
            <div class="v-card__text display-2 primary--text">
              {{ saticcs.videos }}
            </div>
          </v-card-text>  
          <span class="headline">مكتبة الفيديو</span>
        </v-card>
      </v-col>
      <v-col      
        md="6"
        col="auto"
        xl="6"
        sm="12"
      >
        <v-card
          class="text-center"
          to="dashboard/articals"
        >
          <v-card-text>
            <div class="v-card__text ">
              <v-icon
                class="primary--text"
                style="font-size: 40px;"
              >
                mdi mdi-phone
              </v-icon>
            </div>
            <div class="v-card__text display-2 primary--text">
              {{ saticcs.calls }}
            </div>
          </v-card-text>  
          <span class="headline">إتصالات</span>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import UserService from '../services/user.service';
export default {
   data() {
     return { 
       saticcs : [

       ]
     
    // }

     }
   },
  
   created () {
      this.AdminBoard();
    },
    methods: {
      AdminBoard() {
          UserService.getAdminBoard()
          .then((response) => {
            this.saticcs = response.data.data;		       
            
		})
		.catch((error) => {
			console.log(error);
		});
    }, 

    }
}
</script>
<style scoped>

</style>

