<template>
  <main class="site-main not-found dark-bg">
        <section class="error-404 p-relative ov-hidden">
				<div class="container">
					<div class="row align-center">
						<div class="col-12">
							<div class="error-message-404 text-center">
								<img src="@/assets/img/404.png" class="mb-15" alt="404">
								<h2 class="text-uppercase fw-700 mb-20 text-white">نعتذر</h2>
								<h5 class="text-uppercase fw-700 mb-20">الصفحة التي تبحث عنها غير موجودة.</h5>								
								<router-link to="/" class="btn btn-theme">العودة للصفحة الرئيسية</router-link>
							</div>
						</div> <!-- end .col-12 -->
					</div> <!-- end .row -->
				</div> <!-- end .container -->
				<div class="watermark-title">404</div>
			</section> <!-- end .error-404 -->

		</main> <!-- end .site-main -->
</template>

<script>
export default {
  name: 'NotFound'
}
</script>
<style scoped>
.site-header{
  display: none;
}
</style>


