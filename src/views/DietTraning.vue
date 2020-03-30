<template>
  <v-app class="site-main dark-bg">   
    <section class="page-header">
      <h1 class="text-center text-white text-uppercase fw-700 mb-0">
       الإشتراكات
      </h1>
      <div class="bc-container flex align-items-center">
        <svg
          version="1.1"
          class="bc-left"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 45 60"
          style="enable-background:new 0 0 45 60;"
          xml:space="preserve"
        >
          <polygon
            style="fill:#E31A1D"
            points="35,0 15,60 25,60 45,0 "
          />
          <polygon
            style="fill:#FC3E22"
            points="20,0 0,60 5,60 25,0 "
          />
        </svg>

        <ul class="breadcrumb-nav d-flex align-center justify-center mb-0 list-unstyled">
          <li><a href="javascript:void(0)">الصفحة الرئيسية</a></li>
          <li><a href="javascript:void(0)">الإشتراكات</a></li>
        </ul>
        <svg
          version="1.1"
          class="bc-right"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 45 60"
          style="enable-background:new 0 0 45 60;"
          xml:space="preserve"
        >
          <polygon
            style="fill:#E31A1D"
            points="20,0 0,60 10,60 30,0 "
          />
          <polygon
            style="fill:#FC3E22"
            points="40,0 20,60 25,60 45,0 "
          />
        </svg>
      </div>
    </section> <!-- end .page-header --> 
    <section
      id="our-pricing"
      class=" section-full"
    >
      <div class="container ">
        <div class="row">
          <v-dialog
            v-model="dialog"
            fullscreen
            hide-overlay
            transition="dialog-bottom-transition"
          >
            <v-card>
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
             
                <v-spacer />
                <v-toolbar-items>
                  <v-btn
                    dark
                    text
                    @click="dialog = false"
                  >
                    معلومات مهمة
                  </v-btn>
                </v-toolbar-items>
              </v-toolbar>
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col
                      cols="12"
                      sm="6"
                      md="6"
                      lg="6"
                    >
                      <v-text-field
                        label="مراض او حساسيه من اكل"          
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
                        label="قاطع تدريب او لا ؟ ( واذا قاطع كم الك قاطع )"          
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
                        label="المكملات الحاليه اذا وجد"          
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
                        label="الوزن بالكيلو غرام"          
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
                        label="اصابه لا قدر الله"
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
                        label="مده التدريب المستمره ؟ ( كم الك بتدرب )"
                        outlined                      
                      />
                    </v-col>
                    <v-col 
                      cols="12"
                      sm="6"
                      md="6"
                      lg="6"
                    >                    
                      <v-switch
                        v-model="switch1"
                        class="mt-0"
                        label="بتشرب كحول"
                      />
                      <v-switch
                        v-model="switch2"
                        class="mt-0"
                        label="مدخن ؟"
                      />
                      <span>مده التدريب المستمره ؟ ( كم الك بتدرب )</span>
                    </v-col>
                  
                    <v-col
                      cols="12"
                      sm="6"
                      md="6"
                      lg="6" 
                    >
                       <v-dialog
                        ref="dialog"
                        v-model="modaltime1"
                        :return-value.sync="time1"
                        persistent
                        width="290px"
                      >
                        <template v-slot:activator="{ on }">
                          <v-text-field
                            v-model="time1"
                            label="موعد التدريب"
                            prepend-icon="access_time"
                            readonly
                            v-on="on"
                          />
                        </template>
                        <v-time-picker
                          v-if="modaltime1"
                          v-model="time1"
                          full-width
                        >
                          <v-spacer />
                          <v-btn
                            text
                            color="primary"
                            @click="modaltime1 = false"
                          >
                            Cancel
                          </v-btn>
                          <v-btn
                            text
                            color="primary"
                            @click="$refs.dialog.save(time1)"
                          >
                            OK
                          </v-btn>
                        </v-time-picker>
                      </v-dialog>
                    </v-col>
                    <v-col
                      cols="12"
                      sm="6"
                      md="6"
                      lg="6" 
                      class="mt-0"
                    > 
                      <v-dialog
                        ref="dialog1"
                        v-model="modaltime2"
                        :return-value.sync="time2"
                        persistent
                        width="290px"
                      >
                        <template v-slot:activator="{ on }">
                          <v-text-field
                            v-model="time2"
                            label="موعد التدريب"
                            prepend-icon="access_time"
                            readonly
                            v-on="on"
                          />
                        </template>
                        <v-time-picker
                          v-if="modaltime2"
                          v-model="time2"
                          full-width
                        >
                          <v-spacer />
                          <v-btn
                            text
                            color="primary"
                            @click="modaltime2 = false"
                          >
                            Cancel
                          </v-btn>
                          <v-btn
                            text
                            color="primary"
                            @click="$refs.dialog1.save(time2)"
                          >
                            OK
                          </v-btn>
                        </v-time-picker>
                      </v-dialog>
                    </v-col>
                    <v-col
                      cols="12"
                      sm="6"
                      md="6"
                      lg="6" 
                    >
                      <v-dialog
                        ref="dialog2"
                        v-model="modaltime3"
                        :return-value.sync="time3"
                        persistent
                        width="290px"
                      >
                        <template v-slot:activator="{ on }">
                          <v-text-field
                            v-model="time3"
                            label="موعد النوم"
                            prepend-icon="access_time"
                            readonly
                            v-on="on"
                          />
                        </template>
                        <v-time-picker
                          v-if="modaltime3"
                          v-model="time3"
                          full-width
                        >
                          <v-spacer />
                          <v-btn
                            text
                            color="primary"
                            @click="modaltime3 = false"
                          >
                            Cancel
                          </v-btn>
                          <v-btn
                            text
                            color="primary"
                            @click="$refs.dialog2.save(time3)"
                          >
                            OK
                          </v-btn>
                        </v-time-picker>
                      </v-dialog>
                    </v-col>   
                 
                    <v-col
                      cols="12"
                      sm="6"
                      md="6"
                      lg="6" 
                    >
                      <v-dialog
                        ref="dialog3"
                        v-model="modaldate1"
                        :return-value.sync="date1"
                        persistent
                        width="290px"
                      >
                        <template v-slot:activator="{ on }">
                          <v-text-field
                            v-model="date1"
                            label="موعد بدء"
                            prepend-icon="event"
                            readonly
                            v-on="on"
                          />
                        </template>
                        <v-date-picker
                          v-model="date1"
                          scrollable
                        >
                          <v-spacer />
                          <v-btn
                            text
                            color="primary"
                            @click="modaldate1 = false"
                          >
                            Cancel
                          </v-btn>
                          <v-btn
                            text
                            color="primary"
                            @click="$refs.dialog3.save(date1)"
                          >
                            OK
                          </v-btn>
                        </v-date-picker>
                      </v-dialog>
                    </v-col>
                    <v-col
                      cols="12"
                      sm="6"
                      md="6"
                      lg="6" 
                    >
                      <v-dialog
                        ref="dialog4"
                        v-model="modaldate2"
                        :return-value.sync="date2"
                        persistent
                        width="290px"
                      >
                        <template v-slot:activator="{ on }">
                          <v-text-field
                            v-model="date2"
                            label="موعد انتهاء"
                            prepend-icon="event"
                            readonly
                            v-on="on"
                          />
                        </template>
                        <v-date-picker
                          v-model="date2"
                          scrollable
                        >
                          <v-spacer />
                          <v-btn
                            text
                            color="primary"
                            @click="modaldate2 = false"
                          >
                            Cancel
                          </v-btn>
                          <v-btn
                            text
                            color="primary"
                            @click="$refs.dialog4.save(date2)"
                          >
                            OK
                          </v-btn>
                        </v-date-picker>
                      </v-dialog>
                    </v-col> 
                  </v-row>
             
                  <v-card-actions>
                    <v-spacer />
                    <v-switch
                      v-model="switch3"
                      class=" ml-5"
                      label="VIP"
                    />
                    <v-btn
                      large
                      color="primary"                 
                      @click="dialog = false"
                    >
                      إتماء عملية الشراء 
                    </v-btn>
                  </v-card-actions>
                </v-container>             
              </v-card-text>
            </v-card>
          </v-dialog>
          <div class="col-12 col-md-3 col-lg-3 col-length-3">
            <div class="item-card animated-border item-card-pt p-relative">
              <figure class="pt-image p-relative mb-0">
                <img
                  src="@/assets/img/layer-10.png"
                  class="img-fluid w-100"
                  alt=""
                >
                <figcaption class="pt-caption">
                  <h4 class="text-uppercase fw-700">
                    Athletics Session
                  </h4>
                  <p class="mb-0">
                    Lorem ipsum dolor amet podor
                  </p>
                </figcaption>
              </figure>
              <!-- end .pt-image -->
              <!-- end .pt-image -->
              <div
                class="item-card-hover gradient-border flex align-end"
                data-bgc="#030409,80"
              >
                <div>
                  <a
                    href="#"
                    class="btn btn-theme-1"
                    @click="dialog=true"
                  ><i class="ti-unlock ml-15" />Enroll Now</a>
                  <span class="pt-tag gradient-text text-uppercase fw-700 title-font">200 د أ</span>
                  <h4 class="fw-700 text-uppercase fs-18 text-white mb-15">
                    اسم التدريب
                  </h4>
                  <p>اسم التدريب</p>
                  <ul class="list-double-arrow">
                    <li>الذهاب إلى مركز رياضي أو ما يعرف   الذهاب  والإياب يجب أن يكون مناسباً في المصاريف الشهرية </li>
                    <li>الذهاب إلى مركز رياضي أو ما يعرف   الذهاب  والإياب يجب أن يكون مناسباً في المصاريف الشهرية </li>
                    <li>الذهاب إلى مركز رياضي أو ما يعرف   الذهاب  والإياب يجب أن يكون مناسباً في المصاريف الشهرية </li>
                  </ul>
                </div>
              </div>
              <!-- end .pt-hover -->
            </div>
            <!-- end .pt-item -->
          </div>
           <div class="col-12 col-md-3 col-lg-3 col-length-3">
            <div class="item-card animated-border item-card-pt p-relative">
              <figure class="pt-image p-relative mb-0">
                <img
                  src="@/assets/img/layer-10.png"
                  class="img-fluid w-100"
                  alt=""
                >
                <figcaption class="pt-caption">
                  <h4 class="text-uppercase fw-700">
                    Athletics Session
                  </h4>
                  <p class="mb-0">
                    Lorem ipsum dolor amet podor
                  </p>
                </figcaption>
              </figure>
              <!-- end .pt-image -->
              <!-- end .pt-image -->
              <div
                class="item-card-hover gradient-border flex align-end"
                data-bgc="#030409,80"
              >
                <div>
                  <a
                    href="#"
                    class="btn btn-theme-1"
                    @click="dialog=true"
                  ><i class="ti-unlock ml-15" />Enroll Now</a>
                  <span class="pt-tag gradient-text text-uppercase fw-700 title-font">200 د أ</span>
                  <h4 class="fw-700 text-uppercase fs-18 text-white mb-15">
                    اسم التدريب
                  </h4>
                  <p>اسم التدريب</p>
                  <ul class="list-double-arrow">
                    <li>الذهاب إلى مركز رياضي أو ما يعرف   الذهاب  والإياب يجب أن يكون مناسباً في المصاريف الشهرية </li>
                    <li>الذهاب إلى مركز رياضي أو ما يعرف   الذهاب  والإياب يجب أن يكون مناسباً في المصاريف الشهرية </li>
                    <li>الذهاب إلى مركز رياضي أو ما يعرف   الذهاب  والإياب يجب أن يكون مناسباً في المصاريف الشهرية </li>
                  </ul>
                </div>
              </div>
              <!-- end .pt-hover -->
            </div>
            <!-- end .pt-item -->
          </div>
           <div class="col-12 col-md-3 col-lg-3 col-length-3">
            <div class="item-card animated-border item-card-pt p-relative">
              <figure class="pt-image p-relative mb-0">
                <img
                  src="@/assets/img/layer-10.png"
                  class="img-fluid w-100"
                  alt=""
                >
                <figcaption class="pt-caption">
                  <h4 class="text-uppercase fw-700">
                    Athletics Session
                  </h4>
                  <p class="mb-0">
                    Lorem ipsum dolor amet podor
                  </p>
                </figcaption>
              </figure>
              <!-- end .pt-image -->
              <!-- end .pt-image -->
              <div
                class="item-card-hover gradient-border flex align-end"
                data-bgc="#030409,80"
              >
                <div>
                  <a
                    href="#"
                    class="btn btn-theme-1"
                    @click="dialog=true"
                  ><i class="ti-unlock ml-15" />Enroll Now</a>
                  <span class="pt-tag gradient-text text-uppercase fw-700 title-font">200 د أ</span>
                  <h4 class="fw-700 text-uppercase fs-18 text-white mb-15">
                    اسم التدريب
                  </h4>
                  <p>اسم التدريب</p>
                  <ul class="list-double-arrow">
                    <li>الذهاب إلى مركز رياضي أو ما يعرف   الذهاب  والإياب يجب أن يكون مناسباً في المصاريف الشهرية </li>
                    <li>الذهاب إلى مركز رياضي أو ما يعرف   الذهاب  والإياب يجب أن يكون مناسباً في المصاريف الشهرية </li>
                    <li>الذهاب إلى مركز رياضي أو ما يعرف   الذهاب  والإياب يجب أن يكون مناسباً في المصاريف الشهرية </li>
                  </ul>
                </div>
              </div>
              <!-- end .pt-hover -->
            </div>
            <!-- end .pt-item -->
          </div>
           <div class="col-12 col-md-3 col-lg-3 col-length-3">
            <div class="item-card animated-border item-card-pt p-relative">
              <figure class="pt-image p-relative mb-0">
                <img
                  src="@/assets/img/layer-10.png"
                  class="img-fluid w-100"
                  alt=""
                >
                <figcaption class="pt-caption">
                  <h4 class="text-uppercase fw-700">
                    Athletics Session
                  </h4>
                  <p class="mb-0">
                    Lorem ipsum dolor amet podor
                  </p>
                </figcaption>
              </figure>
              <!-- end .pt-image -->
              <!-- end .pt-image -->
              <div
                class="item-card-hover gradient-border flex align-end"
                data-bgc="#030409,80"
              >
                <div>
                  <a
                    href="#"
                    class="btn btn-theme-1"
                    @click="dialog=true"
                  ><i class="ti-unlock ml-15" />Enroll Now</a>
                  <span class="pt-tag gradient-text text-uppercase fw-700 title-font">200 د أ</span>
                  <h4 class="fw-700 text-uppercase fs-18 text-white mb-15">
                    اسم التدريب
                  </h4>
                  <p>اسم التدريب</p>
                  <ul class="list-double-arrow">
                    <li>الذهاب إلى مركز رياضي أو ما يعرف   الذهاب  والإياب يجب أن يكون مناسباً في المصاريف الشهرية </li>
                    <li>الذهاب إلى مركز رياضي أو ما يعرف   الذهاب  والإياب يجب أن يكون مناسباً في المصاريف الشهرية </li>
                    <li>الذهاب إلى مركز رياضي أو ما يعرف   الذهاب  والإياب يجب أن يكون مناسباً في المصاريف الشهرية </li>
                  </ul>
                </div>
              </div>
              <!-- end .pt-hover -->
            </div>
            <!-- end .pt-item -->
          </div>
        </div>
        <!-- end .row -->
      </div>
      <!-- end .container -->
    </section>
  </v-app>
</template>
<script>
  export default {
     data() {
         return {
            dialog: false,
            checkbox: false,
            switch1: false,
            switch2: false,
            switch3: false,
            time1: null,
            time2: null,
            time3: null,            
            modaltime1: false,
            modaltime2: false,
            modaltime3: false,
            date1: new Date().toISOString().substr(0, 10),
            date2: new Date().toISOString().substr(0, 10),
            modaldate1: false,
            modaldate2: false,
         }
     },
   
  }
</script>
<style scoped>
.theme--light.v-application {
    color: rgba(0,0,0,.87);
    background: #030409 !important;
}
#our-pricing{
    color:#fff;
}
.item-card figcaption {
    color: #000;
}
</style>