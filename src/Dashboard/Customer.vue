<template>
  <div class="section-articals">
    <div class="container">  
      <v-data-table        
        :headers="headers"
        :items="customer"        
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
              <td>{{ item.first_name }} {{ item.last_name }}</td>
              <td>{{ item.age }}</td>
              <td>{{ item.family }}</td>                       
              <td>{{ item.email }}</td>
              <td>{{ item.status }}</td>
              <td>{{ item.created_at }}</td>
             
              
              <td>   
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
     
          </v-toolbar>
        </template>
      </v-data-table>
        <div class="text-center">
        <v-pagination
          v-model="page"
          :length="meta.last_page"
          :total-visible="7"
          prev-icon="mdi-menu-left"

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
     
      page:1,     
      selectable: false,     
      headers: [
        
        { text: 'الاسم الكامل', value: 'الاسم الكامل' },
        { text: 'عمر', value: 'عمر' },
        { text: 'عائلة', value: 'عائلة' }, 
        { text: 'البريد الإلكتروني', value: 'البريد الإلكتروني' },
        { text: 'الحالة', value: 'الحالة' },
        { text: 'تاريخ الإنشاء', value: 'تاريخ الإنشاء' },
        // { text: 'الصوره الشخصيه', value: 'الصوره الشخصيه' },      
        { text: '', value: 'actions', sortable: false },
      ],
   
      meta : {},  
      customer: [ ],
     
     
    }),

    computed: {
     
    },

    watch: {
    
    },

    created () {
      this.initialize();
    },

    methods: {
      initialize(page=1) {
        UserService.customers()
        .then((response) => {
        this.customer = response.data.data;
        this.meta = response.data.meta;
        console.log(this.meta)
                  
        })
        .catch((error) => {
        console.log(error);
      });
    },
     getPage(page) {
        axios.get('http://api.tarabees.com/api/admin/customers?page='+page)
        .then((response) => {
          this.customer = response.data.data;
          this.meta = response.data.meta;
                console.log(this.meta)
                
        })
        .catch((error) => {
          console.log(error);
        });
      },        
    deleteItem (item) {
        const index = this.customer.indexOf(item)
        confirm('Are you sure you want to delete this item?') && this.deleteCustomer(item.id,index)
      },
      deleteCustomer(id,index){        
        axios.post(`http://api.tarabees.com/api/admin/customers/${id}`,{_method:'DELETE'})
        .then(res=>{
          this.customer.splice(index, 1)  
        })
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