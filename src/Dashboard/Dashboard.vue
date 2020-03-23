<template>
  <v-app id="inspire">
    <v-navigation-drawer
    
      v-model="drawer"
      app
      width="260"
      dark
      right
    >
      <v-img
        class="bg-img"
        height="100%"
      >
        <v-list
          dense
          rounded
        >
          <v-list-item
            two-line
            class="px-0"
          >
            <v-list-item>
              <img
                class="logo"
                src="@/assets/img/logo-color.png"
              >
            </v-list-item>
          </v-list-item>
          <v-divider />
          <v-list-item
            v-for="item in items"
            v-show="item.show"
            :key="item.title"
            link
            :to="item.to"
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-img>
    </v-navigation-drawer>
    
    <v-app-bar
      id="app-bar"
      absolute
      app
      color="transparent"
      flat
      height="75"
    >
      <v-btn
        class="mr-3"
        elevation="1"
        fab
        small
        @click.stop="drawer = !drawer"
      >
        <v-icon>
          mdi-dots-vertical
        </v-icon>
      </v-btn>
      <v-toolbar-title
        class="hidden-sm-and-down font-weight-light mr-5"
        v-text="$route.name"
      />

      <v-spacer />



      <div class="mx-3" />

      <v-btn
        class="ml-2"
        min-width="0"
        text
        to="/"
      >
        <v-icon>mdi-view-dashboard</v-icon>
      </v-btn>
      <v-menu
        bottom
        left
        offset-y
        origin="top right"
        transition="scale-transition"
      >
        <template v-slot:activator="{ attrs, on }">
          <v-btn
            class="ml-2"
            min-width="0"
            text
            v-bind="attrs"
            v-on="on"
          >
            <v-badge
              color="red"
              overlap
              bordered
            >
              <template v-slot:badge>
                <span>5</span>
              </template>

              <v-icon>mdi-bell</v-icon>
            </v-badge>
          </v-btn>
        </template>

        <v-list
          :tile="false"
          nav
        >
          <div>
            <app-bar-item
              v-for="(n, i) in notifications"
              :key="`item-${i}`"
            >
              <v-list-item-title v-text="n" />
            </app-bar-item>
          </div>
        </v-list>
      </v-menu>
      <v-btn
        class="ml-2"
        min-width="0"
        text
        to="/profile/user"
      >
        <v-icon>mdi-account</v-icon>
      </v-btn>
      <router-link
        to="/profile"
        class="nav-link"
      >
        <!-- {{ currentUser.username }} -->

      </router-link>
      <a class="nav-link" href @click.prevent="logOut">
           LogOut
       </a>
    </v-app-bar>


    <v-content>
      <v-container
        class=" fill-width"
        fluid
      >
        <v-row
          id="core-view"
          justify="center"
        >
          <v-fade-transition mode="out-in">
            <router-view />
          </v-fade-transition>
        </v-row>
      </v-container>
    </v-content>

    <v-footer
      id="core-footer"
      app
    >
      <span>&copy; {{ (new Date()).getFullYear() }} | Tarabees</span>
    </v-footer>
  </v-app>
</template>
<script>
  import AuthService from '@/services/auth.service.js';
  export default {      
    data () {
      return {
        drawer: null,
        notifications: [
        'Mike John Responded to your email',
        'You have 5 new tasks',
        'You\'re now friends with Andrew',
        'Another Notification',
        'Another one',
      ],
        items:[
                { icon: 'mdi-view-dashboard', title: 'لوحة التحكم',to:'/dashboard',show: true},
                { icon: 'mdi-post-outline', title: 'المقالات الرياضية',to:'/dashboard/articals',show: true},
                { icon: 'mdi-television-play', title: 'مكتبة الفيديو',to:'/dashboard/gallery',show: true},
                { icon: 'mdi-frequently-asked-questions', title: 'اسأل المدرب',to:'/dashboard/askCouch',show: true},
                { icon: 'mdi-package-variant', title: 'الحزم',to:'/dashboard/packages',show: true},
                { icon: 'mdi-dumbbell', title: 'التدريب',to:'/dashboard/Training',show: true},
               
        ],
       
      }
    },
   computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
    showAdminBoard() {
      if (this.currentUser && this.currentUser.roles) {
        return this.currentUser.roles.includes('ROLE_ADMIN');
      }

      return false;
    },
    showModeratorBoard() {
      if (this.currentUser && this.currentUser.roles) {
        return this.currentUser.roles.includes('ROLE_MODERATOR');
      }

      return false;
    }
  },
  methods: {
    logOut() {
      this.$store.dispatch('auth/logout');
      this.$router.push('/login');
    }
  }
};
   

   
</script>
<style scoped>
.bg-img{
    background-image: linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(http://beta.tarabees.com/admin/img/bg.cd2e9f78.png);
    background-position: center center;
}
.logo{
  
    width: 120px;
    text-align: center;
    margin: 0 auto;
}
.v-list .v-list-item--active:first-child {
background: none ;
}
</style>