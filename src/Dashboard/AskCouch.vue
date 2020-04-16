<template>
  <v-container>
    <v-row>     
      <v-col
        cols="12"
        md="6"
        lg="6"  
      >     
        <v-card>
          <v-toolbar
            color="indigo"
            dark
          >
            <v-toolbar-title>الإسئلة</v-toolbar-title>

            <v-spacer />
          </v-toolbar>
          <v-list-item          
            v-for="item in AskCouch"
            :key="item.id" 
            @click="getQuestion(item.id)"
          >
            <v-list-item-content>
              <v-list-item-title
                v-if="item.customer !=null"
                class="headline"
              >
                {{ item.customer.frist_name }} {{ item.customer.last_name }}
              </v-list-item-title>
              <v-list-item-subtitle> {{ item.question }}</v-list-item-subtitle>
              <v-list-item-subtitle> {{ item.published_at }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <div class="text-center">
            <v-pagination
              v-model="page"
              :length="meta.last_page"
              prev-icon="mdi-menu-left"
              :total-visible="2" 
              next-icon="mdi-menu-right"
              @input="getPage"
            />
          </div>
        </v-card>
      </v-col>
      <v-col
        cols="12"
        md="6"
        lg="6"  
      >     
        <v-card>
          <v-toolbar
            color="indigo"
            dark
          >
            <v-toolbar-title>الإسئلة</v-toolbar-title>

            <v-spacer />
          </v-toolbar>
          <v-card-text>
            <p
              v-if="Ask.customer !=null"
              class="display-1 text--primary"
            >
              {{ Ask.customer.frist_name }} {{ Ask.customer.last_name }}
            </p>
           
            <div class="text--primary">
              {{ Ask.question }}
            </div>
            <div class="text--primary">
              {{ Ask.published_at }}
            </div>
          </v-card-text>
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
        AskCouch:[],
        meta : {},
        page:1,
        Ask:{}
       
      }
      
    },
       created () {
      this.initialize();
    },

    methods: {

      getQuestion(id){
        axios.get('http://api.tarabees.com/api/admin/questions/'+id)
        .then((response) => {
          // console.log(response.data.data);
          this.Ask = response.data.data;
          // this.meta = response.data.meta;
               
                
        })
        .catch((error) => {
          console.log(error);
        });
      },
         initialize(page=1) {
	   UserService.AskCouch()
		.then((response) => {
			this.AskCouch = response.data.data;
			this.meta = response.data.meta;
       console.log(this.meta)
            
		})
		.catch((error) => {
			console.log(error);
		});
    },
     getPage(page) {
        axios.get('http://api.tarabees.com/api/admin/questions?page='+page)
        .then((response) => {
          this.AskCouch = response.data.data;
          this.meta = response.data.meta;
                console.log(this.meta)
                
        })
        .catch((error) => {
          console.log(error);
        });
      },
       
    },
}
</script>