<template>
  <main class="site-main dark-bg">

			<section class="page-header">
				<h1 class="text-center text-white text-uppercase fw-700 mb-0"><router-link to="/contact" data-text="Contact Us">تواصل معنا</router-link></h1>
				<div class="bc-container flex align-items-center">
					<svg version="1.1" class="bc-left" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 45 60" style="enable-background:new 0 0 45 60;" xml:space="preserve">
						<polygon style="fill:#E31A1D" points="35,0 15,60 25,60 45,0 "/>
						<polygon style="fill:#FC3E22" points="20,0 0,60 5,60 25,0 "/>
					</svg>

					<ul class="breadcrumb-nav d-flex align-center justify-center mb-0 list-unstyled">
						<li><router-link to="/" data-text="Home">المقالات الرياضية</router-link></li>
						<li><router-link to="/contact" data-text="Contact Us">الرئيسية </router-link></li>

					</ul>
					<svg version="1.1" class="bc-right" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 45 60" style="enable-background:new 0 0 45 60;" xml:space="preserve">
						<polygon style="fill:#E31A1D" points="20,0 0,60 10,60 30,0 "/>
						<polygon style="fill:#FC3E22" points="40,0 20,60 25,60 45,0 "/>
					</svg>
				</div>
			</section> <!-- end .page-header -->

			<section id="contact-page" class="section-full">
				<div class="container">
					<div class="row">
						<div class="col-12 col-lg-3">
							<div class="contact-info d-flex align-center mb-30">
								<span class="ti-home text-white fs-20 ml-15 flex align-center justify-center"></span>
								<p class="mb-0">150 monica St, New york,<br>56031, United States</p>
							</div>
							<div class="contact-info d-flex align-center mb-30">
								<span class="ti-headphone text-white fs-20 ml-15 flex align-center justify-center"></span>
								<p class="mb-0">+44 695-584-423 <br>+44 357-586-424</p>
							</div>
							<div class="contact-info d-flex align-center">
								<span class="ti-email text-white fs-20 ml-15 flex align-center justify-center"></span>
								<p class="mb-0">email@yourdomain.com <br>support@yourdomain.com</p>
							</div>
						</div>
						<div class="col-12 col-lg-8 offset-lg-1">
							<form id="contact-form" action="#" method="post">
								<div class="row">
									<div class="col-12 col-md-6">
										<div class="form-group material-input">
											<input type="text" class="form-control input-tp" name="fname" id="fname">
											<label for="fname" class="title-font text-uppercase">الاسم بالكامل</label>
										</div>
									</div>
									<div class="col-12 col-md-6">
										<div class="form-group material-input">
											<input type="text" class="form-control input-tp" name="lname" id="lname">
											<label for="lname" class="title-font text-uppercase">اصف عنوان الرسالة</label>
										</div>
									</div>
									<div class="col-12">
										<div class="form-group material-input">
											<input type="email" class="form-control input-tp" name="email" id="email">
											<label for="email" class="title-font text-uppercase">البريد الالكتروني</label>
										</div>
									</div>
									<div class="col-12">
										<div class="form-group material-input pt-5">
											<textarea id="message" name="message" class="form-control text-ari "  rows="10"></textarea>
											<label for="message" class="title-font text-uppercase">اكتب رسالتك</label>
										</div>
									</div>
									<div class="col-12">
										<button type="submit" class="btn sub btn-theme float-left">ارسال</button>
									</div>
								</div>
								<div id="success" class="alert alert-success mt-20" style="display: none">Your message has been sent successfully :)</div>
								<div id="error" class="alert alert-danger mt-20" style="display: none">Something went wrong, please try again later</div>
							</form> <!-- end #contact-form -->
						</div>

						<div class="col-12">
							<div id="contact-map" class="w-100"></div>
						</div>
					</div> <!-- end .row -->
				</div> <!-- end .container -->
			</section> <!-- end #contact -->

		</main> <!-- end .site-main -->
</template>

<script>
export default {
  name: 'Contact'
}
</script>
<style scoped>
.text-ari{
	background-color: #26282F;
	height: auto;
}
.sub{
	padding: 10px 40px !important;
}
</style>

