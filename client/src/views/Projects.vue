<template>
	<!-- eslint-disable no-mixed-spaces-and-tabs -->

	<div class="main-wrapper projects">
		<section class="cta-section theme-bgs py-5 fafa">
			<div class="container text-center single-col-max-width">
				<h2 class="heading">{{ $t('header.links.projects') }}</h2>
				<div class="intro text-snoothy">
					<p>
						{{ $t('projects.description') }}
					</p>
				</div>
				<a class="btn prj" href="contact.html" target="_blank"
					><svg
						class="svg-inline--fa fa-paper-plane fa-w-16 mr-2"
						aria-hidden="true"
						focusable="false"
						data-prefix="fas"
						data-icon="paper-plane"
						role="img"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 512 512"
						data-fa-i2svg=""
					>
						<path
							fill="currentColor"
							d="M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"
						></path></svg
					>{{ $t('regulars.hire') }}</a
				>
			</div>
			<!--//container-->
		</section>
		<section class="projects-list px-3 py-5 p-md-5">
			<div class="container">
				<div class="text-center">
					<!--//filters-->
					<ul id="filters" class="filters mb-5 mx-auto pl-0 no-list">
						<li
							v-for="(val, key) in option.getFilterData"
							class="button"
							:key="key"
							:class="[
								key === filterOption ? 'filter-active' : ''
							]"
							@click="filter(key)"
						>
							{{ $t(`projects.filters.${key}`) }}
						</li>
					</ul>
				</div>
				<app-loading :condition="projectsLoading"></app-loading>
				<isotope
					ref="cpt"
					id="root_isotope1"
					:item-selector="'isotope-item'"
					:layout-mode="'masonry'"
					:list="projects"
					:options="option"
					@filter="filterOption = arguments[0]"
					class="project-cards grid isotope"
					style="
						position: relative;
						height: auto;
						transition: height 0.6s ease;
						min-height: 300px;
					"
				>
					<div
						class="isotope-item mb-5"
						:class="[...project.type]"
						v-for="(project, index) in projects"
						:key="index"
					>
						<div class="card fafa project-card">
							<div class="project-media no-gutters">
								<div class="col-lg-4 card-img-holder">
									<img :src="me" class="card-img" />
								</div>
								<div class="col-lg-8 content">
									<div class="card-body">
										<h5 class="card-title">
											<a
												href="project.html"
												class="theme-link"
												>{{ project.title }}</a
											>
										</h5>
										<p class="card-text">
											{{ project.description }}
										</p>
										<p class="card-text">
											<small class="text-muted"
												>Client:
												{{ project.client }}</small
											>
										</p>
									</div>
								</div>
								<transition name="fade">
									<div
										v-if="editMode"
										class="customize-project"
									>
										<button
											@click="startEditing(project)"
											class="btn mr-1"
										>
											<i class="fal fa-pencil"></i>
										</button>
										<button
											@click="deleteProject(project._id)"
											class="btn btn-danger m-0"
										>
											<i class="fal fa-trash"></i>
										</button>
									</div>
								</transition>
							</div>
							<a href="" class="link-mask">
								<!-- <a class="link-mask-link" href="project.html"></a> -->
								<div class="link-mask-text">
									<a
										class="btn btn-secondary-custom"
										href="project.html"
									>
										<svg
											class="svg-inline--fa fa-eye fa-w-18 mr-2"
											aria-hidden="true"
											focusable="false"
											data-prefix="fas"
											data-icon="eye"
											role="img"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 576 512"
											data-fa-i2svg=""
										>
											<path
												fill="currentColor"
												d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"
											></path>
										</svg>
										View Case Study
									</a>
								</div>
							</a>
							<!--//link-mask-->
						</div>
						<!--//card-->
					</div>
					<!--//col--> </isotope
				><!--//row-->
			</div>
			<!-- <transition name="slide"> -->
			<form
				v-show-slide:400="editMode"
				class="m-auto project-post-form"
				@submit.prevent="checkAndPost({ projectId: newProject._id })"
			>
				<h4 class="text-center mb-4">{{ heading }}</h4>
				<div
					class="wrap-input2 w-100 validate-input"
					data-validate="Name is required"
				>
					<input
						autocomplete="off"
						class="input2 w-100"
						type="text"
						name="name"
						required
						@change="validate"
						v-model="newProject.title"
					/>
					<div class="grey"></div>
					<div class="slide"></div>
					<div class="cword">Project Title</div>
				</div>
				<div
					class="wrap-input2 w-100 validate-input"
					data-validate="Valid email is required: ex@abc.xyz"
				>
					<input
						autocomplete="off"
						class="input2 w-100"
						type="text"
						v-model="newProject.client"
						name="email"
						required
						@change="validate"
					/>
					<div class="grey"></div>
					<div class="slide"></div>
					<div class="cword">Client</div>
				</div>
				<div class="wrap-input2 w-100 validate-input">
					<input
						v-model="newProject.url"
						autocomplete="off"
						class="input2 w-100"
						type="text"
						name="URL"
						required
						@change="validate"
					/>
					<div class="grey"></div>
					<div class="slide"></div>
					<div class="cword">URL</div>
				</div>
				<div
					class="wrap-input2 validate-input"
					data-validate="Message is required"
				>
					<textarea
						v-model="newProject.description"
						autocomplete="off"
						class="input2 w-100"
						name="message"
						required
						@change="validate"
					/>
					<div class="grey"></div>
					<div class="slide"></div>
					<div class="cword">Description</div>
				</div>
				<div class="wrap-input2 w-100 validate-input">
					<div class="chosen-types"></div>
					<div
						class="types d-flex justify-content-around align-items-center"
					>
						<template
							v-for="(i, index) in Object.keys(
								option.getFilterData
							)"
						>
							<div
								:ref="'type' + index"
								@click="selectType(i)"
								class="type"
								:class="{
									selected: newProject.type.includes(i)
								}"
								:key="index"
								v-if="i !== 'all'"
							>
								<span class="type-name">
									{{ i.title() }}
								</span>
								<span class="cancel-type">
									<i class="fal fa-times"></i>
								</span>
								<span class="select-type">
									<i class="fal fa-check"></i>
								</span>
							</div>
						</template>
					</div>
				</div>
				<div
					class="container-contact2-form-btn d-flex justify-content-center align-items-center"
				>
					<button
						class="contact2-form-btn btn w-50 position-relative"
						:class="{ disable: postLoading }"
					>
						<app-loading
							:condition="postLoading"
							:small="true"
							v-if="postLoading"
						></app-loading>

						{{ actionWord }} a Project
					</button>
					<transition name="fade">
						<button
							type="button"
							@click="cancelEditing"
							v-if="newProject._id"
							class="btn btn-danger w-25 ml-4"
						>
							Cancel Edit
						</button>
					</transition>
				</div>
			</form>
			<!-- </transition> -->
		</section>
	</div>
</template>

<script>
import isotope from 'vueisotope'
import { mapActions, mapState, mapGetters } from 'vuex'
import validate from '@/assets/jsComponents/validate'
import me from '@/assets/img/me.jpg'

String.prototype.title = function () {
	return this.split(' ')
		.map((i) => {
			return i[0].toUpperCase() + i.substr(1, i.length)
		})
		.join(' ')
}

export default {
	data() {
		return {
			newProject: {
				title: '',
				type: [],
				description: '',
				client: '',
				url: ''
			},
			postLoading: false,
			filterOption: 'all',
			option: {
				itemSelector: '.element-item',
				layoutMode: 'masonry',
				getFilterData: {
					all: function () {
						return true
					},
					web: function (el) {
						return el.type.includes('web')
					},
					mobile: function (el) {
						return el.type.includes('mobile')
					},
					frontend: function (el) {
						return el.type.includes('frontend')
					},
					backend: function (el) {
						return el.type.includes('backend')
					}
				}
			}
		}
	},

	methods: {
		//form validation
		validate,
		//isotope
		filter(key) {
			this.$refs.cpt.filter(key)
		},
		changeFilter(event) {
			const filterValue = event.target.getAttribute('data-filter')
			this.selectedFilter = filterValue
		},

		// select type
		selectType(typeText) {
			if (this.newProject.type.includes(typeText)) {
				this.newProject.type = this.newProject.type.filter(
					(i) => i !== typeText
				)
			} else {
				this.newProject.type.push(typeText)
			}
		},
		//update function
		startEditing(project) {
			this.newProject = { ...project }
			console.log(this.newProject)
			document
				.querySelectorAll('.project-post-form .wrap-input2')
				.forEach((i) => {
					i.classList.add('filled')
				})
		},
		cancelEditing() {
			this.newProject = {
				title: '',
				type: [],
				description: '',
				client: '',
				url: ''
			}
			document
				.querySelectorAll('.project-post-form .wrap-input2')
				.forEach((i) => {
					i.classList.remove('filled')
				})
		},
		// check before post
		checkAndPost(obj) {
			this.postLoading = true
			if (this.newProject.type.length === 0) {
				console.log('Please select minimum 1 type to submit.')
			} else {
				if (obj.projectId) {
					this.updateProject(this.newProject)
				} else {
					this.postProject(this.newProject)
				}
				this.cancelEditing()
			}
			this.postLoading = false
		},
		// vuex actions
		...mapActions('Projects', [
			'setProjects',
			'postProject',
			'deleteProject',
			'updateProject'
		])
	},
	computed: {
		// vuex getters
		me() {
			return me
		},
		...mapState(['editMode']),
		...mapState('Projects', ['projects']),

		...mapGetters('Projects', ['projectsLoading']),
		actionWord() {
			return this.newProject._id ? 'Update' : 'Add'
		},
		heading() {
			return this.newProject._id ? 'Edit a Project' : 'New Project'
		}
	},

	components: {
		isotope
	},
	mounted() {
		if (this.projects.length === 0) {
			this.setProjects()
		}
	},
	head() {
		return {
			title: 'Projects'
		}
	}
}
</script>

<style scoped>
.customize-project button {
	font-size: 14px !important;
	padding: 4px 10px !important;
}
.customize-project {
	/* height: 50px !important; */

	z-index: 10;
	position: absolute !important;
	bottom: 0 !important;
	right: 0;

	/* transform: translateY(90%); */
}
</style>
