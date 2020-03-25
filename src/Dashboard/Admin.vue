<template>
  <v-container>
    <v-row>
      <v-col
        v-for="(item, index) in saticcs"
        :key="item.id"
        class="mx-auto" 
        cols="auto"
        md="6"
        lg="6"
        sm="12"
        xl="6"
        
      >
        <v-card
          class="text-center"
        >
          <v-card-text>
            <div class="v-card__text display-2 primary--text">
              {{ item }}
            </div>
          </v-card-text>  
          <span class="headline"> {{ index }} {{ item.title }} </span>      
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