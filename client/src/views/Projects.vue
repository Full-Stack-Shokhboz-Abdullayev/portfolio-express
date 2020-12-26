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
					
							{{$t(`projects.filters.${key}`)}}
						</li>
					</ul>
				</div>

				<isotope
					ref="cpt"
					id="root_isotope1"
					:item-selector="'isotope-item'"
					:layout-mode="'masonry'"
					:list="projects"
					:options="option"
					@filter="filterOption = arguments[0]"
					class="project-cards grid isotope"
					style="position: relative; min-height: 600px; height: auto"
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
									<img
										src="@/assets/me.jpg"
										class="card-img"
										alt="image"
									/>
								</div>
								<div class="col-lg-8 content">
									<div class="card-body">
										<h5 class="card-title">
											<a
												href="project.html"
												class="theme-link"
												>{{ project.heading }}</a
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
											></path></svg
										><!-- <i class="fas fa-eye mr-2"></i> Font Awesome fontawesome.com -->View
										Case Study
									</a>
								</div> </a
							><!--//link-mask-->
						</div>
						<!--//card-->
					</div>
					<!--//col--> </isotope
				><!--//row-->
			</div>
		</section>
	</div>
</template>

<script>
import isotope from 'vueisotope';
import { mapGetters } from 'vuex';
export default {
	data() {
		return {
			layouts: [
				'masonry',
				'fitRows',
				'cellsByRow',
				'vertical',
				'packery',
				'masonryHorizontal',
				'fitColumns',
				'cellsByColumn',
				'horiz'
			],

			currentLayout: 'fitRows',
			selected: null,
			sortOption: 'original-order',
			filterOption: 'all',
			option: {
				itemSelector: '.element-item',
				layoutMode: 'masonry',
				getFilterData: {
					all: function () {
						return true;
					},
					'web': function (el) {
						return el.type.includes('web-apps');
					},

					'mobile': function (el) {
						return el.type.includes('mobile-apps');
					},
					frontend: function (el) {
						return el.type.includes('frontend');
					},
					backend: function (el) {
						return el.type.includes('backend');
					}
				},
				getSortData: {
					name: 'name',
					symbol: 'symbol',
					number: 'number',
					weight: 'weight',
					category: 'category'
				}
			}
		};
	},

	methods: {
		sort: function (key) {
			this.$refs.cpt.sort(key);
		},

		changeLayout: function (key) {
			this.$refs.cpt.layout(key);
		},
		filter(key) {
			this.$refs.cpt.filter(key);
		},

		changeFilter(event) {
			const filterValue = event.target.getAttribute('data-filter');
			this.selectedFilter = filterValue;
		}
	},
	computed: {
		...mapGetters(['projects'])
	},
	created() {},
	components: {
		isotope
	}
};
</script>

<style scoped></style>
