<template>
	<div class="main-wrapper blog">
		<section class="cta-section theme-bgs py-5">
			<div class="container text-center">
				<h2 class="heading">
					{{ $t('blog.title') }}
				</h2>
				<div class="intro">
					{{ $t('blog.subtitle') }}
				</div>
				<form
					class="signup-form form-inline justify-content-center pt-3"
				>
					<div
						class="wrap-input2 validate-input newsletter mr-4"
						data-validate="Valid email is required: ex@abc.xyz"
					>
						<input
							@change="validate"
							autocomplete="off"
							class="input2 blog-subscription"
							type="text"
							name="email"
							required
						/>
						<div class="grey"></div>
						<div class="slide"></div>
						<div class="cword">{{$t('contact.form.email')}}</div>

						<span class="focus-input2" data-placeholder="EMAIL" />
					</div>
					<button type="submit" class="btn">Subscribe</button>
				</form>
			</div>
			<!--//container-->
		</section>
		<section class="blog-list px-3 py-5 p-md-5">
			<div class="container">
				<div class="my-row">
					<!--//col-->
					<div
						class="mb-4 blog-media mx-2"
						v-for="(blog, index) in blogPosts"
						:key="index"
					>
						<div class="card blog-post-card fafa">
							<img
								class="card-img-top"
								src="@/assets/me.jpg"
								alt="image"
							/>
							<div class="card-body">
								<h5 class="card-title">
									<a
										class="theme-link"
										href="blog-post.html"
										>{{ blog.heading }}</a
									>
								</h5>
								<p class="card-text">
									{{ blog.tag }}
									<br />
									<br />
									<b class="blog-lang"
										>{{ $t('blog.language') }}:
										{{ blog.lang }}</b
									>
								</p>
								<p class="mb-0">
									<a class="more-link" href="blog-post.html"
										>{{ $t('regulars.readMore') }} →</a
									>
								</p>
							</div>
							<div class="card-footer fafa">
								<small class="text-muted"
									>{{ $t('regulars.published') }}
									{{ blog.publishedDate }}</small
								>
							</div>
						</div>
						<!--//card-->
					</div>
					<!--//col-->
				</div>
				<!--//row-->
			</div>
		</section>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';
import validate from '@/components/jsComponents/validate';
export default {
	computed: {
		...mapGetters(['blogPosts'])
	},
	methods: {
		validate
	}
};
</script>

<style lang="scss" scoped>
form {
	margin-top: 20px;
}
.newsletter {
	background: transparent;
	margin-bottom: 5px;
	input {
		background: transparent !important;
		width: 300px;
	}
}
</style>
