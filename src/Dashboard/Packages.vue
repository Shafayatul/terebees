<template>
  <div class="section-articals">
    <div class="container">  
      <v-data-table        
        :headers="headers"
        :items="desserts"        
        sort-by="title"
        hide-default-footer
        class="elevation-1"

      >
        <template v-slot:body="{ items }">
          <tbody>
            <tr
              v-for="item in items"
              :key="item.id"
            > 
              <td v-if="item.customer !=null">{{ item.customer.first_name }} {{ item.customer.last_name }}</td>
              <td>{{ item.subscription_type }}</td>                       
              <td>{{ item.is_vip }}</td>
              <td>{{ item.has_injuries }}</td>
              <td>{{ item.created_at }}</td>
              
              <td>
                <v-icon
                 
                  class="mr-2 item-font"
                  @click="editItem(item)"
                >
                  mdi-pencil
                </v-icon>   
                 <v-icon               
                  
                  @click="deleteItem(item)"
                >
                  mdi-delete-outline
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
              <v-card
              color="grey lighten-3"
              >
                <v-toolbar
                  dark
                  color="primary"
                >
                  <v-btn
                    icon
                    dark
                    @click="dialog = false"
                  >
                    <v-icon>mdi-close</v-icon>
                  </v-btn>
                  <v-toolbar-title><span class="headline">{{ formTitle }}</span></v-toolbar-title>
                  <v-spacer />
                </v-toolbar>

                <section class="PackagesForm">
                  <v-form novalidate="novalidate">
                    <v-container>
                      <v-row>
                        <v-col
                          cols="12"
                          sm="6"
                          md="10"
                          lg="10"
                        >
                          <h2 class="display-1">
                            المتدرب: {{ editedItem.first_name }}
                          </h2>
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col
                          cols="12"
                          sm="4"
                          md="4"
                          lg="4"
                        >
                          <h2 class="headline">
                            المستوى :
                          </h2>
                        </v-col>
                        <v-col
                          cols="12"
                          sm="4"
                          md="4"
                          lg="4"
                        >
                          <h2 class="headline">
                            المستوى  :
                          </h2>
                        </v-col>
                        <v-col
                          cols="12"
                          sm="4"
                          md="4"
                          lg="4"
                        >
                          <h2 class="headline">
                            نوع الحزمه : {{ editedItem.subscription_type }}
                          </h2>
                        </v-col>
                        <v-col
                          cols="12"
                          sm="12"
                          md="12"
                          lg="12"
                        >
                          <h2 class="headline">
                            السعرات الحرارية الكلية : {{ editedItem.subscription_type }}
                          </h2>
                        </v-col>
                        <v-col
                          cols="12"
                          sm="4"
                          md="4"
                          lg="4"
                        >
                          <h2 class="headline">
                            البروتين : {{ editedItem.subscription_type }}
                          </h2>
                        </v-col>
                        <v-col
                          cols="12"
                          sm="4"
                          md="4"
                          lg="4"
                        >
                          <h2 class="headline">
                            الكربوهايدرات : {{ editedItem.subscription_type }}
                          </h2>
                        </v-col>
                        <v-col
                          cols="12"
                          sm="4"
                          md="4"
                          lg="4"
                        >
                          <h2 class="headline">
                            دهون : {{ editedItem.subscription_type }}
                          </h2>
                        </v-col>
                        <v-col
                          cols="12"
                          sm="4"
                          md="4"
                          lg="4"
                        >
                          <h2 class="headline">
                            البروتين للوجبه : {{ editedItem.subscription_type }}
                          </h2>
                        </v-col>
                        <v-col
                          cols="12"
                          sm="4"
                          md="4"
                          lg="4"
                        >
                          <h2 class="headline">
                            الكربوهايدرات للوجبه : {{ editedItem.subscription_type }}
                          </h2>
                        </v-col>
                        <v-col
                          cols="12"
                          sm="4"
                          md="4"
                          lg="4"
                        >
                          <h2 class="headline">
                            دهون للوجبه : {{ editedItem.subscription_type }}
                          </h2>
                        </v-col>
                      </v-row>    
                      <v-row>
                        <v-col
                          cols="12"
                          sm="6"
                          md="12"
                          lg="12"
                        >
                          <v-expansion-panels
                            v-model="panel"                      
                            multiple
                          >
                            <v-expansion-panel>
                              <v-expansion-panel-header>معلومات المتدرب</v-expansion-panel-header>
                              <v-expansion-panel-content>
                                <v-row>
                                  <v-col
                                    cols="12"
                                    sm="6"
                                    md="6"
                                    lg="6"
                                  >
                                    <div class="body-1">
                                      امراض او حساسيه من اكل
                                    </div>
                                    <p>{{ editedItem.allergic_food }}</p>
                                  </v-col>
                             
                                  <v-col
                                    cols="12"
                                    sm="6"
                                    md="6"
                                    lg="6"
                                  >
                                    <div class="body-1">
                                      المكملات الحاليه اذا وجد
                                    </div>
                                    <p>{{ editedItem.current_supplements }}</p>
                                  </v-col>
                                
                                  <v-col
                                    cols="12"
                                    sm="6"
                                    md="6"
                                    lg="6"
                                  >
                                    <div class="body-1">
                                      اصابه لا قدر الله
                                    </div>
                                
                                    <p>{{ editedItem.injuries }}</p>
                                  </v-col>
                                  <v-col
                                    cols="12"
                                    sm="6"
                                    md="6"
                                    lg="6"
                                  >
                                    <div class="body-1">
                                      موعد الاستيقاظ
                                    </div>
                                    <p>{{ editedItem.wake_at }}</p>
                                  </v-col>
                                  <v-col
                                    cols="12"
                                    sm="6"
                                    md="6"
                                    lg="6"
                                  >
                                    <div class="body-1">
                                      موعد التدريب
                                    </div>
                                    <p>{{ editedItem.train_at }}</p>
                                  </v-col>
                                  <v-col
                                    cols="12"
                                    sm="6"
                                    md="6"
                                    lg="6"
                                  >
                                    <div class="body-1">
                                      موعد النوم
                                    </div>
                                    <p>{{ editedItem.sleep_at }}</p>
                                  </v-col>
                                 
                               
                               
                                
                                  <v-col
                                    cols="12"
                                    sm="6"
                                    md="6"
                                    lg="6"
                                  >
                                    <div class="body-1">
                                      قاطع تدريب او لا ؟ ( واذا قاطع كم الك قاطع )
                                    </div>
                                    <p>{{ editedItem.duration_of_training_break }}</p>
                                  </v-col>
                                  <v-col
                                    cols="12"
                                    sm="6"
                                    md="6"
                                    lg="6"
                                  >
                                    <div class="body-1">
                                      الوزن بالكيلو غرام
                                    </div>
                                    <p>{{ editedItem.weight }}</p>
                                  </v-col>
                                  <v-col
                                    cols="12"
                                    sm="6"
                                    md="6"
                                    lg="6"
                                  >
                                    <div class="body-1">
                                      بتشرب كحول
                                    </div>
                                    <p>{{ editedItem.drink_alcohol }}</p>
                                  </v-col>
                                  <v-col
                                    cols="12"
                                    sm="6"
                                    md="6"
                                    lg="6"
                                  >
                                    <div class="body-1">
                                      مدخن ؟
                                    </div>
                                    <p>{{ editedItem.is_smoker }}</p>
                                  </v-col>
                                  <v-col
                                    cols="12"
                                    sm="6"
                                    md="6"
                                    lg="6"
                                  >
                                    <div class="body-1">
                                      مده التدريب المستمره ؟ ( كم الك بتدرب
                                    </div>
                                    <p>{{ editedItem.has_duration_of_training_break }}</p>
                                  </v-col>
                                  <!-- <v-col
                                  cols="12"
                                  sm="6"
                                  md="6"
                                  lg="6"
                                >
                                 
                                  <p>{{ editedItem.has_injuries }}</p>
                                </v-col> -->
                                  <v-col
                                    cols="12"
                                    sm="6"
                                    md="6"
                                    lg="6"
                                  >
                                    <div class="body-1">
                                      موعد بدء
                                    </div>
                                    <p>{{ editedItem.start_at }} </p>
                                  </v-col>
                                  <v-col
                                    cols="12"
                                    sm="6"
                                    md="6"
                                    lg="6"
                                  >
                                    <div class="body-1">
                                      موعد انتهاء
                                    </div>
                                 
                                    <p>{{ editedItem.end_at }}</p>
                                  </v-col>
                                </v-row>
                              </v-expansion-panel-content>
                            </v-expansion-panel>
                          </v-expansion-panels>
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col 
                          cols="8"
                          sm="8"
                          md="8"
                          lg="8"
                        >
                          <v-card
                            flat=""
                            class="subbody"
                          > 
                            <v-tabs
                              v-model="tab"
                              background-color="write"
                              dark
                            >
                              <v-tab
                                v-for="tabitem in tabitems"
                                :key="tabitem.tab"
                              >
                                {{ tabitem.tab }}
                              </v-tab>
                            </v-tabs>

                            <v-tabs-items v-model="tab">
                              <v-tab-item>
                                <v-card flat>
                                  <v-list>
                                    <v-list-item>
                                      <v-list-item-content>
                                        <v-list-item-title>Single-line item</v-list-item-title>
                                        <v-list-item-subtitle>Secondary text</v-list-item-subtitle>
                                        <v-row align="center"> 
                                          <v-col
                                            class="d-flex"
                                            cols="12"
                                            sm="6"
                                          >
                                            <v-select
                                              :items="desserts"
                                              label="Outlined style"
                                              outlined
                                            />
                                          </v-col>

                                          <v-col
                                            class="d-flex"
                                            cols="12"
                                            sm="6"
                                          >
                                            <v-select
                                              :items="desserts"
                                              label="Solo field"
                                              solo
                                            />
                                          </v-col>
                                        </v-row>
                                      </v-list-item-content>
                                    </v-list-item>
                                  </v-list>  
                                </v-card>
                              </v-tab-item>
                              <v-tab-item>
                                <v-card flat>
                                  <v-card-text>mamun</v-card-text>
                                </v-card>
                              </v-tab-item>
                            </v-tabs-items>
                          </v-card>
                        </v-col>
                        <v-col
                          cols="4"
                          sm="4"
                          md="4"
                          lg="4"
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
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-form>
                </section>              
              </v-card>
            </v-dialog>
          </v-toolbar>
        </template>
      </v-data-table>
        <div class="text-center">
        <v-pagination
          v-model="page"
          :length="meta.last_page"
          prev-icon="mdi-menu-left"
          :total-visible="7" 
          next-icon="mdi-menu-right"
          @input="getPage"
        />
      </div>
    </div>
  </div>
</template>

<script>
import UserService from '../services/user.service';

  export default {
    data: () => ({   
      panel: [0, 1],
      selectable: false,
      dialog: false,
      headers: [
        {
            text: 'الاسم',
            align: 'start',
            sortable: false,
            value: 'name',
          },
        { text: 'نوع اشتراك', value: 'نوع اشتراك' },
        { text: 'VIP', value: 'VIP' },
        { text: 'عادي', value: 'عادي' }, 
        { text: 'تاريخ الإشتراك', value: 'تاريخ الإشتراك' },      
        { text: '', value: 'actions', sortable: false },
      ],
    tab: null,
        tabitems: [
          { tab: 'الكاربوهيدرات ',},
          { tab: 'البروتينات',  },
          { tab: 'الفواكه والسكريات',  },
          { tab: 'الفواكه والسكريات',  },
          { tab: 'المكملات الرياضية', },
          { tab: 'المكملات من الصيدلية', },
        
         
        ],
      meta : {},
      page:1,  
      desserts: [ ],
      editedIndex: -1,
      editedItem:{}
     
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'New Item' : 'النظام الغذائي'
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
     getPage(page) {
        axios.get('http://api.tarabees.com/api/admin/customer-subscriptions?page='+page)
        .then((response) => {
          this.desserts = response.data.data;
          this.meta = response.data.meta;
                console.log(this.meta)
                
        })
        .catch((error) => {
          console.log(error);
        });
      },        
    deleteItem (item) {
        const index = this.desserts.indexOf(item)
        confirm('Are you sure you want to delete this item?') && this.deleteCustomersub(item.id,index)
      },
      deleteCustomersub(id,index){        
        axios.post(`http://api.tarabees.com/api/admin/customer-subscriptions/${id}`,{_method:'DELETE'})
        .then(res=>{
          this.desserts.splice(index, 1)  
        })
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

        UserService.subscriptionsadit()   

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
.subbody{
 max-height: 300px; overflow: auto; height: 300px;
}

</style>