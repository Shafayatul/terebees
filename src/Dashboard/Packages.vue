<template>
  <div class="section-articals">
    <div class="container">  
      <v-data-table        
        :headers="headers"
        :items="desserts"        
        sort-by="title"
        class="elevation-1"
      >
        <template v-slot:body="{ items }">
          <tbody>
            <tr
              v-for="item in items"
              :key="item.id"
            > 
              <td>{{ item.customer.first_name }} {{ item.customer.last_name }}</td>
              <td>{{ item.created_at }}</td>
              <td>{{ item.additional_info }}</td>            
              <td>{{ item.is_vip }}</td>
              <td>{{ item.has_injuries }}</td>
              
              <td>   
                <v-icon
                  small
                  class="mr-2"
                  @click="editItem(item)"
                >
                  mdi-pencil
                </v-icon>              
              </td>
            </tr>
          </tbody>
        </template>
        <template v-slot:top>
          <v-toolbar
            flat
            color="white"
          >
            <v-toolbar-title>My CRUD</v-toolbar-title>
            <v-divider
              class="mx-4"
              inset
              vertical
            />
            <v-spacer />
            <v-dialog
              v-model="dialog"
              fullscreen
              hide-overlay
              transition="dialog-bottom-transition"
            >
              <template v-slot:activator="{ on }">
                <v-btn
                  color="primary"
                  dark
                  class="mb-2"
                  v-on="on"
                >
                  New Item
                </v-btn>
              </template>
              <v-card>
                <v-toolbar
                  dark
                  color="primary"
                >
                  <v-toolbar-title><span class="headline">{{ formTitle }}</span></v-toolbar-title>
                  <v-spacer />
                  <v-toolbar-items>
                    <v-btn
                      dark
                      text
                      @click="dialog = false"
                    >
                      Save
                    </v-btn>
                    <v-btn
                      icon
                      dark
                      @click="dialog = false"
                    >
                      <v-icon>mdi-close</v-icon>
                    </v-btn>
                  </v-toolbar-items>
                </v-toolbar>

                <section>
                  <v-container>
                    <v-row>
                      <v-col
                        cols="12"
                        sm="6"
                        md="10"
                        lg="10"
                      >
                        <h2>المتدرب: {{ editedItem.customer }}</h2>
                      </v-col>
                    </v-row>    
                    <v-row>
                      <v-col
                        cols="12"
                        sm="6"
                        md="10"
                        lg="10"
                      >
                        <v-text-field
                          v-model="editedItem.created_at"
                          label="العنوان"
                          outlined
                        />
                      </v-col>                   
                      <v-col
                        lg="2"
                        md="2"
                      >
                        <v-switch
                          v-model="selectable"
                          label="نشر"
                        />
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="6"
                        lg="6"
                      >
                        <v-file-input
                          v-model="editedItem.image"
                          placeholder="إختر صورة المقال"
                          label="صورة المقال"
                          outlined
                        />
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="6"
                        lg="6"
                      >
                        <v-text-field
                          v-model="editedItem.url"
                          label="رابط للفيدبو"
                          outlined
                        />
                      </v-col>
                    </v-row>
                  </v-container>
                </section>

                <v-card-actions>
                  <v-spacer />
                  <v-btn
                    color="blue darken-1"
                    text
                    @click="close"
                  >
                    Cancel
                  </v-btn>
                  <v-btn
                    color="blue darken-1"
                    text
                    @click="save"
                  >
                    Save
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-toolbar>
        </template>
      </v-data-table>
    </div>
  </div>
</template>

<script>
import UserService from '../services/user.service';

  export default {
    data: () => ({   
      selectable: false,
      dialog: false,
      headers: [
        {
            text: 'العنوان',
            align: 'start',
            sortable: false,
            value: 'name',
          },
        { text: 'الوصف', value: 'الوصف' },
        { text: 'تاريخ النشر', value: 'تاريخ النشر' },
        { text: 'الحاله', value: 'الحاله' },       
        { text: 'Actions', value: 'actions', sortable: false },
      ],
      meta : {},  
      desserts: [ ],
      editedIndex: -1,
      editedItem:[]
     
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
      },
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
    },

    created () {
      this.initialize();
    },

    methods: {
         initialize(page=1) {
	   UserService.subscriptions()
		.then((response) => {
			this.desserts = response.data.data;
			this.meta = response.data.meta;
       console.log(this.meta)
            
		})
		.catch((error) => {
			console.log(error);
		});
    },     

      editItem (item) {
        UserService.subscriptionsadit()     
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },
     

      close () {
        this.dialog = false
        setTimeout(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        }, 300)
      },

      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.desserts[this.editedIndex], this.editedItem)
        } else {
          this.desserts.push(this.editedItem)
        }
        this.close()
      },
    },
  }
  
</script>
<style scoped>
.section-articals{
    width: 100%;
}
.ck.ck-editor__main>.ck-editor__editable {   
    border-radius: 0;
    height: 70vh !important;
}
</style>