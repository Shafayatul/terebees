<template>
  <div class="section-articals">
    <div class="container">  
      <v-data-table        
        :headers="headers"
        :items="desserts"      
        class="elevation-1"
        hide-default-footer
      >
        <template v-slot:body="{ items }">
          <tbody>
            <tr
              v-for="item in items"
              :key="item.id"
            >
              <td  v-if="item.title">{{ item.title.slice(0, 10) }}</td>
              <td  v-if="item.content">{{ item.content.slice(0, 20)}}</td>
              <td>{{ item.published_at }}</td>
              
              <td>منشور</td>
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
              <template v-slot:activator="{ on }">
                <v-btn
                  color="primary"
                  dark
                  class="mb-2"
                  v-on="on"
                >
                  مقال جديد
                </v-btn>
              </template>
              <v-card
                color="grey lighten-3"
              >
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
                      @click="save"
                    >
                      <v-icon>mdi-content-save</v-icon>
                    </v-btn>
                    <v-btn
                      icon
                      dark
                      @click="close"
                    >
                      <v-icon>mdi-close</v-icon>
                    </v-btn>
                  </v-toolbar-items>
                </v-toolbar>

                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col
                        cols="12"
                        sm="6"
                        md="10"
                        lg="10"
                      >
                        <v-text-field
                          v-model="form.title"
                          label="العنوان"
                          outlined
                        />
                      </v-col>
                      <v-col>
                        <v-switch
                          v-model="switch1"
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
                          v-model="form.image"
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
                          v-model="form.url"
                          label="العنوان"
                          outlined
                        />
                      </v-col>
                      <v-col
                        cols="12"
                        sm="6"
                        md="12"
                        lg="12"
                      >
                        <ckeditor
                          v-model="form.content"
                          :editor="editor"
                          :config="editorConfig"
                        />
                      </v-col>            
                    </v-row>
                  </v-container>
                </v-card-text>
              </v-card>
            </v-dialog>
          </v-toolbar>
        </template>
              
    
        <template v-slot:no-data>
          <v-btn
            color="primary"
            @click="initialize"
          >
            Reset
          </v-btn>
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
        <v-snackbar
      v-model="snackbar"
      :timeout="timeout"
    >
      {{ text }}
   
    </v-snackbar>
      <v-snackbar
      v-model="snackbarerror"
      :timeout="timeout" >
      {{  error }}
     
    </v-snackbar>
    </div>
  </div>
</template>

<script>
import UserService from '../services/user.service';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
  export default {
    data: () => ({
      snackbar: false,
     snackbarerror: false,
      text: 'has been added successfully',
      error:'has been added error',
      timeout: 2000,
      editor: ClassicEditor,
      switch1: true,   
      editorConfig: {
           language: {
            // The UI will be English.
            ui: 'ar',

            // But the content will be edited in Arabic.
            content: 'ar'
        }
        },

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
      editedItem: {
     
      },
      page:1,
      form:{
        title: null,
        content: null,
        url: null,
        image:[],
      },
     
     
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'مقال جديد' : 'Edit Item'
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
      getFormData(formData,object) {
          // const formData = new FormData();
          Object.keys(object).forEach(key => formData.append(key, object[key]));
          return formData;
      },

      save () {
        let formData = new FormData;

        this.getFormData(formData,this.form)
        formData.append('image',this.image)
        if (this.editedIndex > -1) {               
          let form = new FormData;
          form.append('image',this.form.image)
          form.append('title',this.form.title)
          form.append('url',this.form.url)
          form.append('content',this.form.content)
          form.append('_method','PUT')
          axios.post(`http://api.tarabees.com/api/admin/articles/${this.form.id}`,form)
          .then((result) => {
            this.snackbar = true
             this.dialog = false
            this.getPage(this.desserts)
          }).catch((err) => {
            this.snackbarerror = true
          });
        } else {
          this.desserts.push(this.editedItem)
          axios.post('http://api.tarabees.com/api/admin/articles',formData)
          .then((result) => {
            this.initialize()
             this.dialog = false
            this.snackbar = true
          }).catch((err) => {
            this.snackbarerror = true
          });

        }
        this.close()
      },
      initialize(page=1) {
        UserService.getArticlesContent()
        .then((response) => {
          this.desserts = response.data.data;
          this.meta = response.data.meta;
               
                
        })
        .catch((error) => {
          console.log(error);
        });
      }, 
      getPage(page) {
        axios.get('http://api.tarabees.com/api/admin/articles?page='+page)
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
       
        this.editedIndex = this.desserts.indexOf(item)
        this.form = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        const index = this.desserts.indexOf(item)
        confirm('Are you sure you want to delete this item?') && this.deleteArticle(item.id,index)
      },
      deleteArticle(id,index){
        
        axios.post(`http://api.tarabees.com/api/admin/articles/${id}`,{_method:'DELETE'})
        .then(res=>{
          this.desserts.splice(index, 1)  
        })
      },

      close () {
        this.dialog = false
        setTimeout(() => {
          this.form = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        }, 300)
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