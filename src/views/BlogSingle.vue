<template>
  <main class="site-main dark-bg">
    <section class="page-header">
      <h1 class="text-center text-white text-uppercase fw-700 mb-0">
        المقالات الرياضية
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
          <li>
            <router-link
              to="/"
              data-text="Home"
            >
              Home
            </router-link>
          </li>
          <li>
            <router-link
              to="/blog-single"
              data-text="Home"
            >
              Blog
            </router-link>
          </li>
          <li>
            <router-link
              to="/blog-single"
              data-text="Home"
            >
              Details
            </router-link>
          </li>
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
      id="blog-main"
      class="section-full"
    >
      <div class="container">
        <div class="row">
          <div class="col-12 col-lg-8">
            <article class="blog-post mb-3">
              <figure class="post-media p-relative mb-35">
                <img
                  :src="''+post.data.image.path+''"
                  class="img-fluid w-100"
                  alt=""
                >
                <span class="gradient-border transition" />
                <figcaption class="transition">
                  <div class="tags">
                    <a href="#">Lifestyle</a>
                    <a href="#">Travel</a>
                    <a href="#">Adventure</a>
                  </div>
                 
                  <ul class="post-meta list-unstyled flex mt-10 mb-0">
                    <li class="posted-by">
                      <a href="#"> Not Found</a>
                    </li>
                    <li class="posted-at">
                      <a href="#">{{ post.data.published_at }}</a>
                    </li>
                    <li class="likes-count ">
                      <a href="#"><i class="ti-heart" />{{ post.data.comments.data.length }} Likes Likes </a>
                    </li>
                    <li class="comments-count mr-2">
                      <a href="#"><i class="ti-comment" />{{ post.data.comments.data.length }} </a>
                    </li>
                  </ul>
                </figcaption>
              </figure>
              <div 
                class="excerpt"
              >
                <h4 class="text-uppercase fw-700 text-white">
                  {{ post.data.title }}
                </h4>									
                <p>
                  {{ post.data.content }}
                </p>
              </div>
              <div class="row">
                <div class="col-lg-6">
                  <img
                    src="@/assets/img/blog_details/layer-10.png"
                    class="img-fluid"
                    alt=""
                  >
                </div>
                <div class="col-lg-6">
                  <p>الذهاب إلى مركز رياضي أو ما يعرف   الذهاب  والإياب يجب أن يكون مناسباً في المصاريف الشهرية و يتوفر به جميع الأدوات والمعدات المطلوبة و نظافة المكان و أن تشعر فيه بالراحة. أما إذا كنت ترغب في ممارسة الرياضة في منزلك وهذا ما يفعله المعظم و طبعاً مزاياه لا رسوم دخول ولاحشود الذهاب إلى مركز رياضي أو ما يعرف   الذهاب  والإياب يجب أن يكون مناسباً في المصاريف الشهرية و يتوفر به جميع الأدوات والمعدات المطلوبة و نظافة المكان و أن تشعر فيه بالراحة. أما إذا كنت ترغب في ممارسة الرياضة في منزلك وهذا ما يفعله المعظم و طبعاً مزاياه لا رسوم دخول ولاحشود الذهاب إلى مركز رياضي أو ما يعرف   الذهاب  والإياب يجب أن يكون مناسباً في المصاريف الشهرية و يتوفر به جميع الأدوات والمعدات المطلوبة و نظافة المكان و أن تشعر فيه بالراحة. أما إذا كنت ترغب في ممارسة الرياضة في منزلك وهذا ما يفعله المعظم و طبعاً مزاياه لا رسوم دخول ولاحشود الذهاب إلى مركز رياضي أو ما يعرف   الذهاب  والإياب يجب أن يكون مناسباً في المصاريف الشهرية و يتوفر به جميع الأدوات والمعدات المطلوبة و نظافة المكان و أن تشعر فيه بالراحة. أما إذا كنت ترغب في ممارسة الرياضة في منزلك وهذا ما يفعله المعظم و طبعاً مزاياه لا رسوم دخول ولاحشود</p>
                </div>
              </div>
            </article> <!-- end .blog-post -->
            <div class="row">
              <div class="col-12 col-md-6">
                <ul class="social-icons flex list-unstyled mb-0">
                  <li class="social-share">
                    مشاركة هذا المنشور على :
                  </li>
                  <li><a href="#"><i class="fa fa-linkedin" /></a></li>
                  <li><a href="#"><i class="fa fa-twitter" /></a></li>
                  <li>
                    <a
                      class="ml-2"
                      href="#"
                    ><i class="fa fa-behance" /></a>
                  </li>
                  <li><a href="#"><i class="fa fa-facebook" /></a></li>
                </ul>
              </div> <!-- end .post-share -->

              <div class="col-12 col-md-6 post-nav text-left">
                <a
                  href="#"
                  data-fs="12"
                  class="btn btn-sm btn-dark" 
                  @click="nextPage"
                >Next Post <i class="ti-arrow-right ml-10" /></a>
                <a
                  href="#"
                  data-fs="12"
                  class="btn btn-sm btn-dark mr-10"
                  @click="prevPage"
                ><i class="ti-arrow-left mr-10" /> Prev Post</a>
              </div> <!-- end .post-nav -->
            </div> <!-- end .flex -->
            <div class="article-author flex mt-80">
              <figure class="thumb mb-0  col-md-4">
                <img
                  src="@/assets/img/blog_details/layer-5.png"
                  alt=""
                  class="h-img img-fluid"
                >
              </figure>
              <div class="article-author-bio col-md-8">
                <h5 class="text-white text-uppercase fw-700">
                  مقالات مشهورة
                </h5>
                <p>الذهاب إلى مركز رياضي أو ما يعرف   الذهاب  والإياب يجب أن يكون مناسباً في المصاريف الشهرية و يتوفر به جميع الأدوات والمعدات المطلوبة و نظافة المكان و أن تشعر فيه بالراحة. أما إذا كنت ترغب في ممارسة الرياضة في منزلك وهذا ما يفعله المعظم و طبعاً مزاياه لا رسوم دخول ولاحشود الذهاب إلى مركز رياضي أو ما يعرف   الذهاب  والإياب يجب أن يكون مناسباً في المصاريف الشهرية و يتوفر به جميع الأدوات والمعدات المطلوبة و نظافة المكان و أن تشعر فيه بالراحة. أما إذا كنت ترغب في ممارسة الرياضة في منزلك وهذا ما يفعله المعظم و طبعاً مزاياه لا رسوم دخول ولاحشود الذهاب إلى مركز رياضي أو ما يعرف   الذهاب  والإياب يجب أن يكون مناسباً في المصاريف الشهرية و يتوفر به جميع الأدوات والمعدات المطلوبة و نظافة المكان و أن تشعر فيه بالراحة. أما إذا كنت ترغب في ممارسة الرياضة في منزلك وهذا ما يفعله المعظم و طبعاً مزاياه لا رسوم دخول ولاحشود الذهاب إلى مركز رياضي أو ما يعرف   الذهاب  والإياب يجب أن يكون مناسباً في المصاريف الشهرية و يتوفر به جميع الأدوات والمعدات المطلوبة و نظافة المكان و أن تشعر فيه بالراحة. أما إذا كنت ترغب في ممارسة الرياضة في منزلك وهذا ما يفعله المعظم و طبعاً مزاياه لا رسوم دخول ولاحشود</p>
                <ul class="social-icons flex  mb-0 list-unstyled">
                  <li class="social-share">
                    مشاركة هذا المنشور على :
                  </li>
                  <li><a href="#"><i class="fa fa-linkedin" /></a></li>
                  <li><a href="#"><i class="fa fa-twitter" /></a></li>
                  <li>
                    <a
                      class="ml-2"
                      href="#"
                    ><i class="fa fa-behance" /></a>
                  </li>
                  <li><a href="#"><i class="fa fa-facebook" /></a></li>
                </ul>
              </div>
            </div> <!-- end .article-author -->
            <div
              id="comments-container"
              class="mt-80"
            >
              <div class="comments-header flex space-between mb-50">
                <h5 class="text-uppercase fw-700 text-white mb-0">
                  {{ post.data.comments.data.length }}  Comments
                </h5>
                <div class="comments-type fw-500 text-right">
                  <a
                    href="#"
                    class="link-hover-1"
                  >Newest</a>
                  <a
                    href="#"
                    class="link-hover-1 ml-30"
                  >Oldest</a>
                </div> <!-- end .comments-type -->
              </div> <!-- end .comments-header -->

              <div class="comment-author flex">
                <figure class="author-thumb mb-0">
                  <img
                    class="rounded float-right"
                    src="@/assets/img/comment-author-1.jpg"
                    alt=""
                  >
                </figure>
                <div class="comment-author-bio mr-20">
                  <div class="comment-heading flex align-center mb-15">
                    <h6 class="mb-0">
                      <a
                        href="#"
                        class="text-uppercase link-hover-1 text-white"
                      >Travor James</a>
                    </h6>
                    <span class="mr-30">تم التحديث من خلال 2 يوم</span>
                    <span class="mr-20"><i class="ti-heart" /> 45 إعجاب</span>
                  </div>
                  <p>الذهاب إلى مركز رياضي أو ما يعرف   الذهاب  والإياب يجب أن يكون مناسباً في المصاريف الشهرية و يتوفر به جميع الأدوات والمعدات المطلوبة و نظافة المكان و أن تشعر فيه بالراحة. أما إذا كنت ترغب في ممارسة الرياضة في منزلك وهذا ما يفعله المعظم و طبعاً مزاياه لا رسوم دخول ولاحشود</p>
                  <p class="title-font fs-12 text-left">
                    <a
                      href="#"
                      class="link-hover-1 text-white text-uppercase"
                    >رد عالتعليق</a>
                  </p>
                </div>
              </div> <!-- end .comment-author -->
              <div class="comment-author flex">
                <figure class="author-thumb mb-0">
                  <img
                    class="img-thumbnail"
                    src="@/assets/img/comment-author-1.jpg"
                    alt=""
                  >
                </figure>
                <div class="comment-author-bio mr-20">
                  <div class="comment-heading flex align-center mb-15">
                    <h6 class="mb-0">
                      <a
                        href="#"
                        class="text-uppercase link-hover-1 text-white"
                      >Travor James</a>
                    </h6>
                    <span class="mr-30">تم التحديث من خلال 2 يوم</span>
                    <span class="mr-20"><i class="ti-heart" /> 45 إعجاب</span>
                  </div>
                  <p>الذهاب إلى مركز رياضي أو ما يعرف   الذهاب  والإياب يجب أن يكون مناسباً في المصاريف الشهرية و يتوفر به جميع الأدوات والمعدات المطلوبة و نظافة المكان و أن تشعر فيه بالراحة. أما إذا كنت ترغب في ممارسة الرياضة في منزلك وهذا ما يفعله المعظم و طبعاً مزاياه لا رسوم دخول ولاحشود  أما إذا كنت ترغب في ممارسة الرياضة في منزلك وهذا ما يفعله المعظم و طبعاً مزاياه لا رسوم دخول ولاحشود</p>
                  <p class="title-font fs-12 text-left">
                    <a
                      href="#"
                      class="link-hover-1 text-white text-uppercase"
                    >رد عالتعليق</a>
                  </p>
                </div>
              </div> <!-- end .comment-author -->


              <form
                id="comments-form"
                action="#"
              >
                <h5 class="text-uppercase fw-700 text-white mb-50">
                  اضف تعليق
                </h5>
                <div class="row">
                  <div class="col-12">
                    <div class="form-group material-input">
                      <textarea
                        id="message"
                        class="form-control input-tp"
                      />
                      <label
                        for="message"
                        class="title-font text-uppercase"
                      >أدخل رسالتك</label>
                    </div>
                  </div>
                  <div class="col-12 col-md-6">
                    <div class="form-group material-input">
                      <input
                        id="name"
                        type="text"
                        class="form-control input-tp"
                        name="name"
                      >
                      <label
                        for="name"
                        class="title-font text-uppercase"
                      >أدخل رسالتك</label>
                    </div>
                  </div>
                  <div class="col-12 col-md-6">
                    <div class="form-group material-input">
                      <input
                        id="email"
                        type="email"
                        class="form-control input-tp"
                        name="name"
                      >
                      <label
                        for="email"
                        class="title-font text-uppercase"
                      >البريد الالكتروني</label>
                    </div>
                  </div>
                  <div class="col-12 text-center">
                    <button
                      type="submit"
                      class="btn btn-theme"
                    >
                      اضف تعليق
                    </button>
                  </div>
                </div>
              </form> <!-- end #comments-form -->
            </div> <!-- end #comments-container -->
          </div> <!-- end .col-12.col-lg-8 -->
          <aside
            id="widget-area"
            class="col-12 col-lg-4"
          >
            <section class="widget widget-search mb-50">
              <form
                action="#"
                class="search-widget flex align-items-center"
              >
                <span class="ti-search flex align-center justify-center" />
                <div class="form-group material-input mb-0 w-100">
                  <input
                    id="search-post"
                    type="search"
                    class="form-control input-tp"
                    name="s"
                  >
                  <label
                    for="search-post"
                    class="title-font text-uppercase"
                  >ابحث عن مقالة...</label>
                </div>
              </form>
            </section> <!-- end .widget-search -->
            <section class="widget widget-author-bio mb-50">
              <figure class="author-thumb text-center">
                <img
                  src="@/assets/img/blog_home/layer-5.png"
                  class="img-fluid"
                  alt=""
                >
                <figcaption class="mt-30">
                  <h4 class="h6 text-white fw-700 text-uppercase">
                    محمد ابو شماله
                  </h4>
                  <p>مدرب اللياقة البدنية</p>
                </figcaption>
              </figure>
              <div class="text-center">
                <p>والإياب يجب أن يكون مناسباً في المصاريف الشهرية و يتوفر به جميع الأدوات والمعدات المطلوبة و نظافة المكان و أن تشعر فيه بالراحة. أما إذا كنت ترغب في ممارسة الرياضة في منزلك وهذا ما يفعله المعظم و طبعاً مزاياه لا رسوم دخول ولاحشود</p>
                <div class="buttons-group flex align-center justify-center mt-30">
                  <a
                    href="#"
                    class="btn btn-sm btn-bottom-border"
                  >تويتر</a>
                  <a
                    href="#"
                    class="btn btn-sm btn-bottom-border mr-10"
                  >فيسبوك</a>
                  <a
                    href="#"
                    class="btn btn-sm btn-bottom-border mr-10"
                  >انستجرام</a>
                </div>
              </div>
            </section> <!-- end .widget -->
            <section class="widget widget-popular-posts mb-50">
              <div class="widget-title">
                <h4 class="h6 text-white fw-700 text-uppercase mb-0">
                  مقالات مشهورة
                </h4>
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 45 60"
                  xml:space="preserve"
                >
                  <polygon
                    class="svg-fill-text"
                    points="20,0 0,60 10,60 30,0 "
                  />									
                  <polygon
                    class="svg-fill-text"
                    points="40,0 20,60 25,60 45,0 "
                  />
                </svg>
              </div>
              <ul class="widget-post-list  mb-0 mt-30 pr-0">
                <li class="flex widget-post">
                  <figure class="thumbnail ml-20 mb-0">
                    <img
                      src="@/assets/img/wp-1.png"
                      alt=""
                    >
                  </figure>
                  <div class="wp-summery">
                    <p class="fs-12 mb-10">	
                      <span class="ml-20 d-inline-block">ابريل 26 2019</span>
                      <span class=""> <i class="ti-comment mr-10" /> التعليقات 06</span>
                    </p>
                    <a
                      href="#"
                      class="title-font text-uppercase fw-700 text-white"
                    >عنوان المقالة يسجل ويكتب هنا مثال عن نوعية التمارين</a>
                  </div>
                </li>
                <li class="flex widget-post">
                  <figure class="thumbnail ml-20 mb-0">
                    <img
                      src="@/assets/img/wp-1.png"
                      alt=""
                    >
                  </figure>
                  <div class="wp-summery">
                    <p class="fs-12 mb-10">	
                      <span class="ml-20 d-inline-block">ابريل 26 2019</span>
                      <span class=""> <i class="ti-comment mr-10" /> التعليقات 06</span>
                    </p>
                    <a
                      href="#"
                      class="title-font text-uppercase fw-700 text-white"
                    >عنوان المقالة يسجل ويكتب هنا مثال عن نوعية التمارين</a>
                  </div>
                </li>
                <li class="flex widget-post">
                  <figure class="thumbnail ml-20 mb-0">
                    <img
                      src="@/assets/img/wp-1.png"
                      alt=""
                    >
                  </figure>
                  <div class="wp-summery">
                    <p class="fs-12 mb-10">	
                      <span class="ml-20 d-inline-block">ابريل 26 2019</span>
                      <span class=""> <i class="ti-comment mr-10" /> التعليقات 06</span>
                    </p>
                    <a
                      href="#"
                      class="title-font text-uppercase fw-700 text-white"
                    >عنوان المقالة يسجل ويكتب هنا مثال عن نوعية التمارين</a>
                  </div>
                </li>
                <li class="flex widget-post pr-0">
                  <figure class="thumbnail ml-20 mb-0">
                    <img
                      src="@/assets/img/wp-1.png"
                      alt=""
                    >
                  </figure>
                  <div class="wp-summery">
                    <p class="fs-12 mb-10">	
                      <span class="ml-20 d-inline-block">ابريل 26 2019</span>
                      <span class=""> <i class="ti-comment mr-10" /> التعليقات 06</span>
                    </p>
                    <a
                      href="#"
                      class="title-font text-uppercase fw-700 text-white"
                    >عنوان المقالة يسجل ويكتب هنا مثال عن نوعية التمارين</a>
                  </div>
                </li>
              </ul>
            </section> <!-- end .widget -->
            <section class="widget widget-ad mb-50">
              <div class="gradient-border transition" />
              <div class="ad-container flex align-center justify-center fs-15 title-font text-white ml-auto mr-auto">
                300X250
              </div> <!-- end .ad-container -->
            </section> <!-- end .widget -->
            <section class="widget widget-posts-archive mb-50">
              <div class="widget-title">
                <h4 class="h6 text-white fw-700 text-uppercase mb-0">
                  ارشيف المقالات
                </h4>
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 45 60"
                  style="enable-background:new 0 0 45 60;"
                  xml:space="preserve"
                >
                  <polygon
                    class="svg-fill-text"
                    points="20,0 0,60 10,60 30,0 "
                  />
                  <polygon
                    class="svg-fill-text"
                    points="40,0 20,60 25,60 45,0 "
                  />
                </svg>
              </div> <!-- end .widget-title -->
              <ul class="archive-year list-unstyled mb-0 mt-25">
                <li>
                  <a href="#">2019</a>
                  <ul class="archive-list-child list-unstyled mb-0">
                    <li><a href="#">شهر مارس (250 مقالة)</a></li>
                  </ul>
                </li>
                <li>
                  <a href="#">2018</a>
                  <ul class="archive-list-child list-unstyled mb-0">
                    <li><a href="#">شهر مارس (250 مقالة)</a></li>
                    <li><a href="#">شهر مارس (250 مقالة)</a></li>
                    <li><a href="#">شهر مارس (250 مقالة)</a></li>
                    <li><a href="#">شهر مارس (250 مقالة)</a></li>
                    <li><a href="#">شهر مارس (250 مقالة)</a></li>
                  </ul>
                </li>
              </ul>
            </section> <!-- end .widget -->
            <section class="widget widget-newsletter mb-50">
              <div class="widget-title">
                <h4 class="h6 text-white fw-700 text-uppercase mb-0">
                  منشورات
                </h4>
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 45 60"
                  style="enable-background:new 0 0 45 60;"
                  xml:space="preserve"
                >
                  <polygon
                    class="svg-fill-text"
                    points="20,0 0,60 10,60 30,0 "
                  />
                  <polygon
                    class="svg-fill-text"
                    points="40,0 20,60 25,60 45,0 "
                  />
                </svg>
              </div> <!-- end .widget-title -->
              <p class="mt-30">
                الذهاب إلى مركز رياضي أو ما يعرف   الذهاب  والإياب يجب أن يكون مناسباً في المصاريف الشهرية و يتوفر به جميع الأدوات والمعدات المطلوبة و نظافة المكان و أن تشعر فيه بالراحة. أما إذا كنت ترغب في ممارسة الرياضة في منزلك وهذا ما يفعله المعظم و طبعاً مزاياه لا رسوم دخول ولاحشود
              </p>
              <form
                action="#"
                class="newsletter-form-widget flex"
              >
                <span class="ti-email flex align-center justify-center" />
                <div class="form-group material-input mb-0 w-100">
                  <input
                    id="newsletter-email"
                    type="email"
                    class="form-control input-tp"
                    name="s"
                  >
                  <label
                    for="newsletter-email"
                    class="title-font text-uppercase"
                  >البريد الالكتروني</label>
                </div>
                <button
                  type="submit"
                  class="btn-form-submit-arrow gradient-bg hover-effect-1 ml-10"
                >
                  <i class="ti-arrow-right" />
                </button>
              </form>
            </section> <!-- end .widget -->
          </aside> <!-- end .col-12.col-lg-4 -->
        </div> <!-- end .row -->
      </div> <!-- end .container -->
    </section> <!-- end #blog-main -->
  </main> <!-- end .site-main -->
</template>

<script>
import axios from 'axios';
export default {
 data() {
   return {
    post: {},
    // comments: [],
    // showCommentBox: false,
  }
 },
  created() {
      this.getPost()
    },
 methods:  {
   getPost() {
    axios.get("http://api.tarabees.com//api/articles/" + this.$route.params.id)
   	  .then(res => {
            this.post = res.data
            this.meta = res.meta;
          }).catch(res => {
            console.log(res)
          })
   },
  
 }
}
</script>
<style scoped>

.h-img{
	height: 100%;
	background-position: center;
	background-size: cover;
}
.list-unstyled {   
    padding-right: 0;
}
</style>