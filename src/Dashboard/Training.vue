<template>
  <div class="section-articals">
    <div class="container">  
      <v-data-table        
        :headers="headers"
        :items="desserts"        
        sort-by="title"
        class="elevation-1"
        hide-default-footer

      >
        <template v-slot:body="{ items }">
          <tbody>
            <tr
              v-for="item in items"
              :key="item.id"
            > 
              <td v-if="item.customer !=null">{{ item.customer.first_name }} {{ item.customer.last_name }}</td>
              <td>{{ item.subscription_type }}</td> 
              <td>{{ item.created_at }}</td>
              
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
                          sm="6"
                          md="6"
                          lg="6"
                        >
                          <v-card
                            flat
                          > 
                            <v-tabs
                              v-model="tab"
                              background-color="write"
                              fixed-header
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
                                <v-card
                                  flat
                                  class="subbody"
                                >
                                  <v-list>
                                    <v-list-item>
                                      <v-list-item-content>
                                        <v-list-item-title>ترابيس بالدامبلز</v-list-item-title>  
                                        <v-col
                                          cols="12"
                                          sm="6"
                                          md="6"
                                        >
                                          <v-text-field
                                            label="Solo"
                                            placeholder="ترابيس بالدامبلز"
                                            solo
                                          />
                                        </v-col>
                                      </v-list-item-content>
                                    </v-list-item>
                                    <v-list-item>
                                      <v-list-item-content>
                                        <v-list-item-title>ترابيس بالدامبلز</v-list-item-title>  
                                        <v-col
                                          cols="12"
                                          sm="6"
                                          md="6"
                                        >
                                          <v-text-field
                                            label="Solo"
                                            placeholder="ترابيس بالدامبلز"
                                            solo
                                          />
                                        </v-col>
                                      </v-list-item-content>
                                    </v-list-item>
                                    <v-list-item>
                                      <v-list-item-content>
                                        <v-list-item-title>ترابيس بالدامبلز</v-list-item-title>  
                                        <v-col
                                          cols="12"
                                          sm="6"
                                          md="6"
                                        >
                                          <v-text-field
                                            label="Solo"
                                            placeholder="ترابيس بالدامبلز"
                                            solo
                                          />
                                        </v-col>
                                      </v-list-item-content>
                                    </v-list-item>
                                    <v-list-item>
                                      <v-list-item-content>
                                        <v-list-item-title>ترابيس بالدامبلز</v-list-item-title>  
                                        <v-col
                                          cols="12"
                                          sm="6"
                                          md="6"
                                        >
                                          <v-text-field
                                            label="Solo"
                                            placeholder="ترابيس بالدامبلز"
                                            solo
                                          />
                                        </v-col>
                                      </v-list-item-content>
                                    </v-list-item>
                                    <v-list-item>
                                      <v-list-item-content>
                                        <v-list-item-title>ترابيس بالدامبلز</v-list-item-title>  
                                        <v-col
                                          cols="12"
                                          sm="6"
                                          md="6"
                                        >
                                          <v-text-field
                                            label="Solo"
                                            placeholder="ترابيس بالدامبلز"
                                            solo
                                          />
                                        </v-col>
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
                          <div class="my-2">
                            <v-btn                            
                              color="primary"
                            >
                             حفظ
                            </v-btn>
                          </div>
                        </v-col>
                        <v-col
                          cols="6"
                          sm="6"
                          md="6"
                          lg="6"
                        >
                          <v-card
                            class="px-3 "
                          >
                            <v-row>
                              <v-col 
                                cols="12"
                              >
                                <span class="headline">صدر و تراي</span>
                                <v-textarea
                                  counter
                                  label="الملاحظات"
                                  :rules="rules"
                                  :value="value"
                                />
                              </v-col>
                              <v-col 
                                cols="12"
                              >
                                <span class="headline">ظهر و باي</span>
                                <v-textarea
                                  counter
                                  label="الملاحظات"
                                  :rules="rules"
                                  :value="value"
                                />
                              </v-col>
                              <v-col 
                                cols="12"
                              >
                                <span class="headline">رجلين</span>
                                <v-textarea
                                  counter
                                  label="الملاحظات"
                                  :rules="rules"
                                  :value="value"
                                />
                              </v-col>
                              <v-col 
                                cols="12"
                              >
                                <span class="headline">أكتاف</span>
                                <v-textarea
                                  counter
                                  label="الملاحظات"
                                  :rules="rules"
                                  :value="value"
                                />
                              </v-col>
                              <v-col 
                                cols="12"
                              >
                                <span class="headline">ترابيس</span>
                                <v-textarea
                                  counter
                                  label="ترابيس"
                                  :rules="rules"
                                  :value="value"
                                />
                              </v-col>
                              <v-col 
                                cols="12"
                              >
                                <span class="headline">سواعد</span>
                                <v-textarea
                                  counter
                                  label="سواعد"
                                  :rules="rules"
                                  :value="value"
                                />
                              </v-col>
                              <v-row />
                            </v-row>
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
        { text: 'تاريخ الإشتراك', value: 'تاريخ الإشتراك' },      
        { text: '', value: 'actions', sortable: false },
      ],
    tab: null,
        tabitems: [
          { tab: 'صدر و تراي ',},
          { tab: 'ظهر و باي',  },
          { tab: 'رجلين',  },
          { tab: 'أكتاف',  },
          { tab: 'ترابيس', },         
          { tab: 'سواعد', }
        
         
        ],
      meta : {},  
      desserts: [ ],
      editedIndex: -1,
      editedItem:{},
      rules: [v => v.length <= 120 || 'Max 120 characters'],
      value: '',
     
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'New Item' : 'جدول التمارين'
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
.subbody{
 max-height: 300px; overflow: auto; height: 300px;
}

</style>