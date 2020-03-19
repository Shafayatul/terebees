<template>
  <main class="site-main dark-bg"  v-if="posts.length > 0">

			<section class="page-header">
				<h1 class="text-center text-white text-uppercase fw-700 mb-0">المقالات الرياضية</h1>
				<div class="bc-container flex align-items-center">
					<svg version="1.1" class="bc-left" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 45 60" style="enable-background:new 0 0 45 60;" xml:space="preserve">
						<polygon style="fill:#E31A1D" points="35,0 15,60 25,60 45,0 "/>
						<polygon style="fill:#FC3E22" points="20,0 0,60 5,60 25,0 "/>
					</svg>
					<ul class="breadcrumb-nav d-flex align-center justify-center mb-0 list-unstyled">
						<li><a href="#">الرئيسية </a></li>
						<li><a href="#"> المقالات الرياضية</a></li>
					</ul>
					<svg version="1.1" class="bc-right" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 45 60" style="enable-background:new 0 0 45 60;" xml:space="preserve">
						<g>
							<polygon style="fill:#E31A1D" points="20,0 0,60 10,60 30,0 	"/>
							<polygon style="fill:#FC3E22" points="40,0 20,60 25,60 45,0 "/>
						</g>
					</svg>
				</div>
			</section> <!-- end .page-header -->

			<section id="blog-main" class="section-full">
				<div class="container">
					<div class="row">
						<div class="col-12 col-lg-8">
							<article class="blog-post mb-50"  v-for="post in posts" :key="post.id">
								<figure class="post-media animated-border p-relative mb-35">
									<img v-bind:src="''+post.image.path+''" class="img-fluid w-100" alt="">
									<span class="gradient-border transition"></span>
									<figcaption class="transition">
										<div class="tags">
											<a href="#">Lifestyle</a>
											<a href="#">Travel</a>
											<a href="#">Adventure</a>
										</div>
										<ul class="post-meta list-unstyled flex mt-10 mb-0">
											<li class="posted-by"><a href="#">Not Found</a></li>
											<li class="posted-at"><a href="#">{{post.published_at}}</a></li>
											<li class="likes-count"><a href="#"><i class="ti-heart"></i> {{ post.comments.data.length }} Likes</a></li>
											<li class="comments-count"><a href="#"><i class="ti-comment"></i> {{ post.comments.data.length }} Comments</a></li>
										</ul>
									</figcaption>
								</figure>
								<div class="excerpt">
									<a v-bind:href="'/article/'+post.id+''" class="read-more hover-effect-1 left gradient-bg"><i class="ti-plus"></i></a>									
									<h4 class="text-uppercase fw-700"><a class="text-white" href="blog-single.php">{{ post.title }}</a></h4>
									<p>{{ post.content }}</p>
								</div>
							</article>





							
							<ul class="pagination flex justify-center mb-0">
								<li v-if="(meta.current_page - 1) > 0" v-on:click="getData(meta.current_page-1)"><a href="#"><i class="ti-arrow-right"></i></a></li>
								<li v-if="(meta.current_page - 3) > 0" v-on:click="getData(meta.current_page-3)"><a>{{meta.current_page-3}}</a></li>
								<li v-if="(meta.current_page - 2) > 0" v-on:click="getData(meta.current_page-2)"><a>{{meta.current_page-2}}</a></li>
								<li v-if="(meta.current_page - 1) > 0" v-on:click="getData(meta.current_page-1)"><a>{{meta.current_page-1}}</a></li>
								<li><a href="">{{meta.current_page}}</a></li>
								<li v-if="(meta.current_page +1) <= meta.last_page" v-on:click="getData(meta.current_page+1)"><a>{{meta.current_page+1}}</a></li>
								<li v-if="(meta.current_page +2) <= meta.last_page" v-on:click="getData(meta.current_page+2)"><a>{{meta.current_page+2}}</a></li>
								<li v-if="(meta.current_page +3) <= meta.last_page" v-on:click="getData(meta.current_page+3)"><a>{{meta.current_page+3}}</a></li>
								<li v-if="(meta.current_page +1) <= meta.last_page" v-on:click="getData(meta.current_page+1)"><a href="#"><i class="ti-arrow-left"></i></a></li>
							</ul>
						</div> <!-- end .col-12.col-lg-8 -->
						<aside id="widget-area" class="col-12 col-lg-4">
							<section class="widget widget-search mb-50">
								<form action="#" class="search-widget flex align-items-center">
									<span class="ti-search flex align-center justify-center"></span>
									<div class="form-group material-input mb-0 w-100">
										<input type="search" placeholder="search"  class="form-control input-tp" v-model="advanced">
										<label for="search-post" class="title-font text-uppercase">ابحث عن مقالة...</label>
									</div>
								</form>
							</section> <!-- end .widget-search -->
							<section class="widget widget-author-bio mb-50">
								<figure class="author-thumb text-center">
									<img src="@/assets/img/blog_home/layer-5.png" class="img-fluid" alt="">
									<figcaption class="mt-30">
										<h4 class="h6 text-white fw-700 text-uppercase">محمد ابو شماله</h4>
										<p>مدرب اللياقة البدنية</p>
									</figcaption>
								</figure>
								<div class="text-center">
									<p>والإياب يجب أن يكون مناسباً في المصاريف الشهرية و يتوفر به جميع الأدوات والمعدات المطلوبة و نظافة المكان و أن تشعر فيه بالراحة. أما إذا كنت ترغب في ممارسة الرياضة في منزلك وهذا ما يفعله المعظم و طبعاً مزاياه لا رسوم دخول ولاحشود</p>
									<div class="buttons-group flex align-center justify-center mt-30">
										<a href="#" class="btn btn-sm btn-bottom-border mr-10">Facebook</a>
										<a href="#" class="btn btn-sm btn-bottom-border mr-10">Instagram</a>
										<a href="#" class="btn btn-sm btn-bottom-border">Linkedin</a>
									</div>
								</div>
							</section> <!-- end .widget -->
							<section class="widget widget-popular-posts mb-50">
								<div class="widget-title">
									<h4 class="h6 text-white fw-700 text-uppercase mb-0">مقالات مشهورة</h4>
									<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 45 60" style="enable-background:new 0 0 45 60;" xml:space="preserve">
										<polygon class="svg-fill-text" points="20,0 0,60 10,60 30,0 "/>
										<polygon class="svg-fill-text" points="40,0 20,60 25,60 45,0 "/>
									</svg>
								</div>
								<ul class="widget-post-list  mb-0 mt-30 pr-0">
									<li class="flex widget-post">
										<figure class="thumbnail ml-20 mb-0">
											<img src="@/assets/img/wp-1.png" alt="">
										</figure>
										<div class="wp-summery">
											<p class="fs-12 mb-10">	
												 <span class="ml-20 d-inline-block">ابريل 26 2019</span>
												 <span class=""> <i class="ti-comment mr-10"></i> التعليقات 06</span>
																							  
											</p>
											<a href="#" class="title-font text-uppercase fw-700 text-white">عنوان المقالة يسجل ويكتب هنا مثال عن نوعية التمارين</a>
										</div>
									</li>
									<li class="flex widget-post">
										<figure class="thumbnail ml-20 mb-0">
											<img src="@/assets/img/wp-1.png" alt="">
										</figure>
										<div class="wp-summery">
											<p class="fs-12 mb-10">	
												 <span class="ml-20 d-inline-block">ابريل 26 2019</span>
												 <span class=""> <i class="ti-comment mr-10"></i> التعليقات 06</span>
																							  
											</p>
											<a href="#" class="title-font text-uppercase fw-700 text-white">عنوان المقالة يسجل ويكتب هنا مثال عن نوعية التمارين</a>
										</div>
									</li>
									<li class="flex widget-post">
										<figure class="thumbnail ml-20 mb-0">
											<img src="@/assets/img/wp-1.png" alt="">
										</figure>
										<div class="wp-summery">
											<p class="fs-12 mb-10">	
												 <span class="ml-20 d-inline-block">ابريل 26 2019</span>
												 <span class=""> <i class="ti-comment mr-10"></i> التعليقات 06</span>
																							  
											</p>
											<a href="#" class="title-font text-uppercase fw-700 text-white">عنوان المقالة يسجل ويكتب هنا مثال عن نوعية التمارين</a>
										</div>
									</li>
									<li class="flex widget-post pr-0">
										<figure class="thumbnail ml-20 mb-0">
											<img src="@/assets/img/wp-1.png" alt="">
										</figure>
										<div class="wp-summery">
											<p class="fs-12 mb-10">	
												 <span class="ml-20 d-inline-block">ابريل 26 2019</span>
												 <span class=""> <i class="ti-comment mr-10"></i> التعليقات 06</span>
																							  
											</p>
											<a href="#" class="title-font text-uppercase fw-700 text-white">عنوان المقالة يسجل ويكتب هنا مثال عن نوعية التمارين</a>
										</div>
									</li>								
									
								
								</ul>
							</section> <!-- end .widget -->
							<section class="widget widget-ad mb-50">
								<div class="gradient-border transition"></div>
								<div class="ad-container flex align-center justify-center fs-15 title-font text-white ml-auto mr-auto">
									300X250
								</div> <!-- end .ad-container -->
							</section> <!-- end .widget -->
							<section class="widget widget-posts-archive mb-50">
								<div class="widget-title">
									<h4 class="h6 text-white fw-700 text-uppercase mb-0">ارشيف المقالات</h4>
									<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 45 60" style="enable-background:new 0 0 45 60;" xml:space="preserve">
										<polygon class="svg-fill-text" points="20,0 0,60 10,60 30,0 "/>
										<polygon class="svg-fill-text" points="40,0 20,60 25,60 45,0 "/>
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
									<h4 class="h6 text-white fw-700 text-uppercase mb-0">منشورات</h4>
									<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 45 60" style="enable-background:new 0 0 45 60;" xml:space="preserve">
										<polygon class="svg-fill-text" points="20,0 0,60 10,60 30,0 "/>
										<polygon class="svg-fill-text" points="40,0 20,60 25,60 45,0 "/>
									</svg>
								</div> <!-- end .widget-title -->
								<p class="mt-30">الذهاب إلى مركز رياضي أو ما يعرف   الذهاب  والإياب يجب أن يكون مناسباً في المصاريف الشهرية و يتوفر به جميع الأدوات والمعدات المطلوبة و نظافة المكان و أن تشعر فيه بالراحة. أما إذا كنت ترغب في ممارسة الرياضة في منزلك وهذا ما يفعله المعظم و طبعاً مزاياه لا رسوم دخول ولاحشود</p>
								<form action="#" class="newsletter-form-widget flex">
									<span class="ti-email flex align-center justify-center"></span>
									<div class="form-group material-input mb-0 w-100">
										<input type="email" id="newsletter-email" class="form-control input-tp" name="s">
										<label for="newsletter-email" class="title-font text-uppercase">البريد الالكتروني</label>
									</div>
									<button type="submit" class="btn-form-submit-arrow gradient-bg hover-effect-1 ml-10">
										<i class="ti-arrow-right"></i>
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
  name: 'BlogList',
  data(){
	  return{
		  posts : [],
		  advanced: null,
		  meta : {}
	  }
  },
//    computed: {
//     filteredResources (){
//       if(this.searchQuery){
//       return this.posts.filter((post)=>{
//         return this.searchQuery.toLowerCase().split(' ').every(v => post.title.toLowerCase().includes(v))
//       })
//       }else{
//         return this.posts;
//       }
//     }
//   },
watch: {
       advanced(after, before) {
            this.getData();
        }
    },
  methods:{
    getData(page=1) {
	  axios.get("http://api.tarabees.com//api/articles?page="+page, 
				  {params: { advanced: this.advanced }},
				  { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
		)
		.then((response) => {
			this.posts = response.data.data;
			this.meta = response.data.meta;
			console.log(this.meta)
		})
		.catch((error) => {
			console.log(error);
		});
    }
  },
  created(){
	  this.getData();
  }
}
</script>

