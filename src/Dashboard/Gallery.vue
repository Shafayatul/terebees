

<template>
  <div class="section-articals pr-5 pl-5">
    <div class="container">
      <v-row> 
        <v-col 
          cols="12"
        >
          <v-btn
            color="primary"
            dark
            @click="dialog=true"
          >
            <v-icon>mdi-cloud-upload</v-icon><span class="mx-2"> تحميل </span>
          </v-btn>
        </v-col> 
        <v-col 
          v-for="(item,index) in videos.data"
          :key="index"
          cols="auto"
          md="6"
          lg="6"
        >  
          <v-card>
            <video
              :src="item.video.path"
              width="100%"
              height="200px"
              controls="controls"
              style="background: black;"
            />
            
            <v-card-text class="jutify-content-between text--primary">
              <!-- <v-btn icon  @click="deleteItem(item.id)">
                <v-icon>mdi-close</v-icon>
              </v-btn> -->
              <div>{{ item.title }}</div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row> 
      <div class="text-center">
        <v-pagination
          v-model="page"
          :length="meta.last_page"
          prev-icon="mdi-menu-left"
          :total-visible="5"
          next-icon="mdi-menu-right"
          @input="changePage"
        />
      </div>
    </div>
    <v-dialog
      v-model="dialog"
      transition="dialog-bottom-transition"
      width="600px"
    >
      <v-card>
        <v-toolbar
          dark
          color="primary"
        >
          <v-btn
            icon
            dark
            @click="close"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Settings</v-toolbar-title>
          <v-spacer />
          <v-toolbar-items>
            <v-btn
              dark
              text
              @click="addVideo"
            >
              Save
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>

        <v-card-text>
          <v-container>
            <v-row>
              <v-col
                cols="12"
              >
                <v-text-field
                  v-model="title"
                  label="العنوان"
                  outlined
                />
              </v-col>            
              <v-col
                cols="12"
              >
                <v-file-input
                  v-model="video"
                  placeholder="إختر صورة المقال"
                  label="صورة المقال"
                  outlined
                />
              </v-col>
              <v-col 
                cols="12"
              >
                <v-btn
                  color="primary"
                  dark
                  @click="addVideo"
                >
                  <v-icon>mdi-cloud-upload</v-icon><span class="mx-2"> تحميل </span>
                </v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title:null,
      video:[],
      dialog: false,
      notifications: false,
      sound: true,
      widgets: false,
      videos:{},
      meta:{},
      page:1
    }
  },
  created() {
    this.getVideos()
  },
  methods: {
    deleteItem(id){
        confirm('Are you sure you want to delete this item?') && this.deleteVideo(id)
    },
    deleteVideo(id){
      axios.delete(`http://api.tarabees.com//api/admin/videos/${id}`)
      .then((result) => {
        
      }).catch((err) => {
        
      });
    },
    close(){
      this.dialog = false;
      this.title=null
      this.video=[]

    },
    addVideo(){
      let formData = new FormData;
      
      formData.append('video',this.video) 
      
      formData.append('title',this.title) 
      axios.post('http://api.tarabees.com//api/admin/videos',formData)
      .then((result) => {
        axios.get(`http://api.tarabees.com//api/admin/videos/${result.data.id}`)
        .then((result) => {
          
          Toast.fire({
              icon: 'success',
              title: 'Added successfully'
          })
          this.videos.data.unshift(result.data.data)

        }).catch((err) => {
          
        });
      }).catch((err) => {
        
      });
    },
    create(){
      axios.post('http://api.tarabees.com//api/admin/videos')
      .then((result) => {
        console.log()
      }).catch((err) => {
        console.log(err)
        
      });
    },
    changePage(value){
      axios.get('http://api.tarabees.com//api/admin/videos?page='+value)
      .then((result) => {
       this.videos = result.data
      }).catch((err) => {
        
      });
    },
    getUrl(value){
      return 'http://api.tarabees.com//'+value;
    },
    getVideos(){
      axios.get('http://api.tarabees.com//api/admin/videos')
      .then((result) => {
        this.meta=result.data.meta
        this.videos=result.data
      }).catch((err) => {
        
      });
    }
  },
}
</script>

<style>

</style>
