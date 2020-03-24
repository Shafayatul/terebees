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
              <td>{{ item.title }}</td>
              <td>{{ item.content.substring(0,20)+".." }}</td>
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
                          v-model="image"
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
    </div>
  </div>
</template>

<script>
import UserService from '../services/user.service';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
  export default {
    data: () => ({
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
      form:{
        title: null,
        content: null,
      },
      image:[],
      defaultItem: {
        title: '',
       content: ''
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
          // Object.assign(this.desserts[this.editedIndex], this.form)
          formData.append('_method','PUT')
          axios.post(`http://api.tarabees.com//api/admin/articles/${this.form.id}`,formData)
          .then((result) => {
            axios.get(`http://api.tarabees.com//api/admin/articles/${result.data.id}`)
            .then((result) => {
              console.log(result.data)
              Object.assign(this.desserts[this.editedIndex], result.data.data)
            }).catch((err) => {
              
            });
          }).catch((err) => {
            
          });
        } else {
          this.desserts.push(this.editedItem)
          axios.post('http://api.tarabees.com//api/admin/articles',formData)
          .then((result) => {
            axios.get(`http://api.tarabees.com//api/admin/articles/${result.data.id}`)
            .then((result) => {
              console.log(result.data)
              this.desserts.unshift(result.data.data)
            }).catch((err) => {
              
            });
          }).catch((err) => {
            
          });

        }
        this.close()
      },
      initialize(page=1) {
        UserService.getArticlesContent()
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
        
        axios.post(`/api/admin/articles/${id}`,{_method:'DELETE'})
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