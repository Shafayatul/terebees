<template>
  <v-container>
    <v-row>
      <v-col
        cols="auto"
        md="6"
        lg="6"
        sm="12"
        xl="6"
      >
        <v-card
          class="mx-auto"
            v-for=" card in  saticcs"
          :key="card.id"         
        >
          <v-card-text>
            <div>{{ card.videos }}</div>
            <p class="display-1 text--primary">
              be•nev•o•lent
            </p>
            <p>adjective</p>
            <div class="text--primary">
              well meaning and kindly.<br>
              "a benevolent smile"
            </div>
          </v-card-text>
          <v-card-actions>
            <v-btn
              text
              color="deep-purple accent-4"
            >
              Learn More
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <!-- <v-col     
        cols="auto"
        md="6"
        lg="6"
        sm="12"
        xl="6"
      >
        <v-card
          class="mx-auto"          
        >
          <v-card-text>
            <div>Word of the Day</div>
            <p class="display-1 text--primary">
              be•nev•o•lent
            </p>
            <p>adjective</p>
            <div class="text--primary">
              well meaning and kindly.<br>
              "a benevolent smile"
            </div>
          </v-card-text>
          <v-card-actions>
            <v-btn
              text
              color="deep-purple accent-4"
            >
              Learn More
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col> -->
    </v-row>
  </v-container>
</template>

<script>
import UserService from '../services/user.service';
export default {
  data() {
    return {
       saticcs : []
    }
   
  },
   created () {
      this.AdminBoard();
    },
    methods: {
      AdminBoard() {
          UserService.getAdminBoard()
          .then((response) => {
            this.saticc = response.data.data;		       
            
		})
		.catch((error) => {
			console.log(error);
		});
    }, 

    }
}
</script>