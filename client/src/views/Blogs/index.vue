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
						<div class="cword">{{ $t('contact.form.email') }}</div>

						<span class="focus-input2" data-placeholder="EMAIL" />
					</div>
					<button type="submit" class="btn">Subscribe</button>
				</form>
				<div class="mt-5">
					<router-link
						:to="{ name: 'add-blog' }"
						tag="button"
						class="btn circle"
					>
						<i class="fa fa-plus"></i>
					</router-link>
				</div>
			</div>
			<!--//container-->
		</section>
		<section class="blog-list px-3 py-5 p-md-5">
			<div class="container">
				<transition name="fade" mode="out-in">
					<app-loading
						v-if="blogsLoading"
						:condition="blogsLoading"
					></app-loading>
					<transition-group
						v-else-if="!blogsLoading"
						name="blog-anime"
						tag="div"
						class="my-row"
						@appear="appearAnimation"
					>
						<!-- @appear="appearAnimation" -->
						<!--//col-->
						<div
							class="mb-4 blog-media mx-2"
							v-for="blog in blogPosts"
							:key="blog._id"
						>
							<div class="card blog-post-card fafa">
								<img
									class="card-img-top"
									src="@/assets/img/me.jpg"
									alt="image"
								/>
								<div class="card-body">
									<h5 class="card-title">
										<router-link
											class="theme-link"
											tag="a"
											:to="{
												name: 'particular-blog',
												params: {
													slug: blog.slug
												}
											}"
											>{{ blog.heading }}</router-link
										>
									</h5>
									<p class="card-text">
										{{ blog.tag }}
										<br />
										<br />
										<b class="blog-lang"
											>{{ $t('blog.language') }}:
											{{ blog.language }}</b
										>
									</p>
									<p class="mb-0">
										<router-link
											class="more-link"
											tag="a"
											:to="{
												name: 'particular-blog',
												params: {
													slug: blog.slug
												}
											}"
											>{{
												$t('regulars.readMore')
											}}
											→</router-link
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
					</transition-group>
				</transition>
				<!--//row-->
			</div>
		</section>
	</div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import validate from '@/assets/jsComponents/validate'
export default {
	computed: {
		...mapState('Blogs', ['blogPosts']),
		...mapState(['prevRoute', 'editMode']),
		blogsLoading() {
			return this.blogPosts.length === 0
		}
	},
	data() {
		return {
			delay: 0.2
		}
	},
	methods: {
		validate,
		appearAnimation(e) {
			e.style.transition = ` 0.2s ease-in-out all, 0.5s ease transform, 0.3s ease background`
			e.style.transitionDelay = `${this.delay}s`
			this.delay += 0.15
		},
		
		...mapActions('Blogs', ['setBlogs'])
	},

	head() {
		return {
			title: 'Blogs'
		}
	},
	mounted() {
		this.$intersectionAnimation()
		this.setBlogs()
	},
	updated() {
		this.$intersectionAnimation()
	}
}
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
.main-wrapper {
	min-height: 100vh;
}
.blog-media {
	display: inline-block !important;
}
.blog-anime-move {
	transition: 0.6s transform;
	position: relative;
	z-index: 100;
}
.blog-anime-enter {
	opacity: 0;
	transform: translateX(-20%);
	// transform: scale(0.5)
}
.blog-anime-leave-active {
	opacity: 0;
	position: absolute;
	z-index: -100;
	transition: 0s ease all;
}
.blog-anime-enter-active {
	transition: 0.4s ease all;
}
</style>
