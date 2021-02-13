<template>
	<div class="main-wrapper">
		<section class="cta-section theme-bgs py-5 position-relative">
			<router-link tag="button" class="go-back" :to="{ name: 'blog' }">
				<i class="fa fa-arrow-left"></i>
			</router-link>
			<div class="intro">
				<img
					class="intro__img shadow-lg"
					src="https://www.imgworlds.com/wp-content/uploads/2015/12/18-CONTACTUS-HEADER.jpg"
					alt=""
				/>
			</div>
			<div class="container text-center single-col-max-width">
				<h2 class="heading">
					{{ blog.heading }}
				</h2>
			</div>
			<transition appear tag="div" name="fade">
				<div v-if="editMode" class="edit-blog">
					<router-link
						:to="{
							name: 'add-blog',
							query: { edit: $route.params.slug }
						}"
						tag="button"
						class="btn update-blog"
					>
						<i class="fa fa-pen-alt"></i>
					</router-link>
					<button
						class="btn-danger btn delete-blog"
						@click="deleteBlogRedirect(blog._id)"
					>
						<i class="fa fa-trash-alt"></i>
					</button>
				</div>
			</transition>
			<!--//container-->
		</section>
		<div class="blog-view mt-5">
			<div class="blog__body">
				<editor-content class="blog__body__text" :editor="editor" />
			</div>
		</div>
		<div class="actions">
			<div class="d-flex justify-content-center align-items-center">
				<button class="none py-0 clap-btn" @click="changeClap">
					<span>
						<svg
							width="25"
							class="clap"
							height="25"
							aria-label="clap"
							style="stroke-dasharray: 0 103"
						>
							<g fill-rule="evenodd">
								<path
									class="left-hand"
									:d="clap.path[0]"
								></path>
								<path
									class="right-hand"
									:d="clap.path[1]"
								></path>
							</g>
						</svg>
					</span>
				</button>
				<span class="text-h"> Clap! </span>
				<span class="mt-1"> {{ blog.claps }} </span>
			</div>
		</div>
		<!-- <div class="delete-modal main-wrapper w-100 h-100">
			<div class="centered">
				<h5>
					Are you sure to delete the blog
					<span>"{{ blogHeading }}"</span>?
				</h5>
				<div class="btn-group">
					<button class="btn">Cancel</button>
					<button class="btn btn-danger">Delete</button>
				</div>
			</div>
		</div> -->
	</div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { Tiptap } from '@/components/mixins/Tiptap.mixin.js'
import gsap, { Back } from 'gsap'
const tl = gsap.timeline({
	defaults: {
		duration: 0.4,
		ease: Back.easeOut.config(2),
		opacity: 0
	}
})
export default {
	mixins: [Tiptap],
	data() {
		return {
			view: true,
			blog: {},

			clap: {
				timeout: 0,
				svg1: [
					`M11.74 0l.76 2.97.76-2.97zM14.81 3.78l1.84-2.56-1.42-.47zM8.38 1.22l1.84 2.56L9.8.75zM20.38 21.62a5.11 5.11 0 0 1-3.16 1.61l.49-.45c2.88-2.89 3.45-5.98 1.69-9.21l-1.1-1.94-.96-2.02c-.31-.67-.23-1.18.25-1.55a.84.84 0 0 1 .66-.16c.34.05.66.28.88.6l2.85 5.02c1.18 1.97 1.38 5.12-1.6 8.1M7.1 21.1l-5.02-5.02a1 1 0 0 1 .7-1.7 1 1 0 0 1 .72.3l2.6 2.6a.44.44 0 0 0 .63-.62L4.1 14.04l-1.75-1.75a1 1 0 1 1 1.41-1.41l4.15 4.15a.44.44 0 0 0 .63 0 .44.44 0 0 0 0-.62L4.4 10.26 3.22 9.08a1 1 0 0 1 0-1.4 1.02 1.02 0 0 1 1.41 0l1.18 1.16L9.96 13a.44.44 0 0 0 .62 0 .44.44 0 0 0 0-.63L6.43 8.22a.99.99 0 0 1-.3-.7.99.99 0 0 1 .3-.7 1 1 0 0 1 1.41 0l7 6.98a.44.44 0 0 0 .7-.5l-1.35-2.85c-.31-.68-.23-1.19.25-1.56a.85.85 0 0 1 .66-.16c.34.06.66.28.88.6L18.63 14c1.57 2.88 1.07 5.54-1.55 8.16a5.62 5.62 0 0 1-5.06 1.65 9.35 9.35 0 0 1-4.93-2.72zM11 5.98l2.56 2.56c-.5.6-.56 1.41-.15 2.28l.26.56-4.25-4.25a.98.98 0 0 1-.12-.45 1 1 0 0 1 .29-.7 1.02 1.02 0 0 1 1.41 0zm8.89 2.06c-.38-.56-.9-.92-1.49-1.01a1.74 1.74 0 0 0-1.34.33c-.38.29-.61.65-.71 1.06a2.1 2.1 0 0 0-1.1-.56 1.78 1.78 0 0 0-.99.13l-2.64-2.64a1.88 1.88 0 0 0-2.65 0 1.86 1.86 0 0 0-.48.85 1.89 1.89 0 0 0-2.67-.01 1.87 1.87 0 0 0-.5.9c-.76-.75-2-.75-2.7-.04a1.88 1.88 0 0 0 0 2.66c-.3.12-.61.29-.87.55a1.88 1.88 0 0 0 0 2.66l.62.62a1.88 1.88 0 0 0-.9 3.16l5.01 5.02c1.6 1.6 3.52 2.64 5.4 2.96a7.16 7.16 0 0 0 1.18.1c1.03 0 2-.25 2.9-.7A5.9 5.9 0 0 0 21 22.24c3.34-3.34 3.08-6.93 1.74-9.17l-2.87-5.04z`,
					''
				],
				svg2: [
					`M11.74 0l.76 2.97.76-2.97zM16.63 1.22L15.2.75l-.4 3.03zM9.79.75l-1.43.47 1.84 2.56zM22.47 13.3L19.45 8c-.29-.43-.69-.7-1.12-.78a1.16 1.16 0 0 0-.91.22c-.3.23-.48.52-.54.84l.05.07 2.85 5c1.95 3.56 1.32 6.97-1.85 10.14a8.46 8.46 0 0 1-.55.5 5.75 5.75 0 0 0 3.36-1.76c3.26-3.27 3.04-6.75 1.73-8.91M12.58 9.89c-.16-.83.1-1.57.7-2.15l-2.5-2.49c-.5-.5-1.38-.5-1.88 0-.18.18-.27.4-.33.63l4.01 4z`,
					`M15.81 9.04a1.37 1.37 0 0 0-.88-.6.81.81 0 0 0-.64.15c-.18.13-.72.55-.24 1.56l1.43 3.03a.54.54 0 1 1-.87.61L7.2 6.38a.99.99 0 1 0-1.4 1.4l4.4 4.4a.54.54 0 1 1-.76.76l-4.4-4.4L3.8 7.3a.99.99 0 0 0-1.4 0 .98.98 0 0 0 0 1.39l1.25 1.24 4.4 4.4a.54.54 0 0 1 0 .76.54.54 0 0 1-.76 0l-4.4-4.4a1 1 0 0 0-1.4 0 .98.98 0 0 0 0 1.4l1.86 1.85 2.76 2.77a.54.54 0 0 1-.76.76L2.58 14.7a.98.98 0 0 0-1.4 0 .99.99 0 0 0 0 1.4l5.33 5.32c3.37 3.37 6.64 4.98 10.49 1.12 2.74-2.74 3.27-5.54 1.62-8.56l-2.8-4.94z`
				],
				path: []
			}
		}
	},
	computed: {
		...mapState('Blogs', ['blogPosts']),
		...mapState(['editMode'])
	},
	methods: {
		...mapActions('Blogs', ['deleteBlog', 'updateBlog']),
		deleteBlogRedirect(id) {
			this.deleteBlog(id)
			this.$router.push({
				name: 'blog'
			})
		},
		changeClap() {
			clearTimeout(this.clap.timeout)
			if (tl.isActive()) {
				return
			}
			this.clap.path = this.clap.svg2

			tl.from('.left-hand, .right-hand', {
				delay: 0.1,
				scale: 0.2,
				transformOrigin: 'center'
			})
			this.blog.claps += 1
			if (!localStorage.getItem(`clapped${this.blog._id}`)) {
				localStorage.setItem(`clapped${this.blog._id}`, true)
			}
		},
		setClapSvg() {
			this.clap.path = !localStorage.getItem(`clapped${this.blog._id}`)
				? this.clap.svg1
				: this.clap.svg2
		}
	},
	head() {
		return {
			title: this.blog.heading
				? this.blog.heading
				: 'Loading...' + ' | Blog'
		}
	},

	async mounted() {
		if (!this.editable) {
			await this.getBlog()
		}
		this.setClapSvg()
	},
	watch: {
		blog: {
			handler() {
				this.clap.timeout = setTimeout(() => {
					this.updateBlog({
						claps: this.blog.claps,
						_id: this.blog._id
					})
				}, 1500)
			},
			deep: true
		}
	}
}
</script>

<style lang="scss" scoped>
.blog__body__text {
	overflow: visible !important;
	padding: 3rem 0 !important;
}
.blog__body {
	position: relative !important;
}
.edit-blog {
	position: absolute;
	bottom: 15px;
	right: 15px;
	button {
		font-size: 14px;
		padding: 8px 14px !important;
		transform: scale(0.9);
	}
}
.delete-modal {
	position: fixed !important;
	top: 0%;
	left: 0%;
	display: flex !important;
	justify-content: center;
	align-items: center;
	.centered {
		width: 500px;
		height: 100px;
	}
}
.none {
	border: none;
	cursor: pointer;
	outline: none;
	background: none;
}
.clap {
	transition: 0.3s ease all !important;
	fill: var(--pr-stext);
}

.clap-btn {
	&:hover ~ .text-h {
		transform: rotateY(0deg);
	}
}

.actions {
	overflow: visible !important;
	* {
		overflow: visible !important;
	}
	position: fixed;
	z-index: 100;
	top: 80%;
	margin-left: 150px;
}
.text-h {
	position: absolute;
	bottom: 150%;
	left: 0;
	background: black;
	padding: 4px 8px;
	transition: 0.4s ease-in-out transform;
	transform: rotateX(90deg);
	transform-origin: bottom;
	color: white;
	border-radius: 5px;
}
.main-wrapper,
.min-h {
	perspective: 0 !important;
}
.clap-anime-enter {
	opacity: 0;
	transform: scale(0.6);
}
.clap-anime-enter-active {
	transition: 0.3s ease all;
}
.clap-anime-leave-active {
	opacity: 0;
	transform: scale(0.6);
	transition: 0.3s ease all;
}
</style>
