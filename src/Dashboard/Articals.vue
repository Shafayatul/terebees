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
              <td>{{ item.content }}</td>
              <td>{{ item.published_at }}</td>
              
              <td>منشور</td>
              <td>   
                <v-icon
                  small
                  class="mr-2"
                  @click="editItem(item)"
                >
                  mdi-pencil
                </v-icon>
                <v-icon
                v-model="deleted_at"
                  small
                  @click="deleteItem(item)"
                >
                  mdi-delete
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
                          v-model="editedItem.title"
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
                     
                      <v-col
                        cols="12"
                        sm="6"
                        md="12"
                        lg="12"
                      >                    
                        <ckeditor
                          v-model="editedItem.content"
                          :editor="editor"
                          :config="editorConfig"
                        />
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card-text>

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
import axios from 'axios';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
  export default {
    data: () => ({
      editor: ClassicEditor,
      selectable: false,
      deleted_at: null,
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
       title: '',
       content: '',
      },
      defaultItem: {
        title: '',
       content: '',
       
      },
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
	       axios.get("http://api.tarabees.com//api/articles?page="+page, 
				  {params: {  }},
				  { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
		)
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
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        const index = this.desserts.indexOf(item)
        confirm('Are you sure you want to delete this item?') && this.desserts.splice(index, 1)
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