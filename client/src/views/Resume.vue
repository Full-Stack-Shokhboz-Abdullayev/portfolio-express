<template>
	<!-- eslint-disable no-mixed-spaces-and-tabs -->

	<div class="main-wrapper">
		<section class="cta-section theme-bgs py-5">
			<div class="container text-center single-col-max-width">
				<h2 class="heading mb-3">{{ $t('resume.title') }}</h2>
				<button
					class="btn position-relative"
					:class="{ disable: loading }"
					@click="downloadWithCSS"
				>
					<svg
						class="svg-inline--fa fa-file-pdf fa-w-12 mr-2"
						aria-hidden="true"
						focusable="false"
						data-prefix="fas"
						data-icon="file-pdf"
						role="img"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 384 512"
						data-fa-i2svg=""
					>
						<path
							fill="currentColor"
							d="M181.9 256.1c-5-16-4.9-46.9-2-46.9 8.4 0 7.6 36.9 2 46.9zm-1.7 47.2c-7.7 20.2-17.3 43.3-28.4 62.7 18.3-7 39-17.2 62.9-21.9-12.7-9.6-24.9-23.4-34.5-40.8zM86.1 428.1c0 .8 13.2-5.4 34.9-40.2-6.7 6.3-29.1 24.5-34.9 40.2zM248 160h136v328c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V24C0 10.7 10.7 0 24 0h200v136c0 13.2 10.8 24 24 24zm-8 171.8c-20-12.2-33.3-29-42.7-53.8 4.5-18.5 11.6-46.6 6.2-64.2-4.7-29.4-42.4-26.5-47.8-6.8-5 18.3-.4 44.1 8.1 77-11.6 27.6-28.7 64.6-40.8 85.8-.1 0-.1.1-.2.1-27.1 13.9-73.6 44.5-54.5 68 5.6 6.9 16 10 21.5 10 17.9 0 35.7-18 61.1-61.8 25.8-8.5 54.1-19.1 79-23.2 21.7 11.8 47.1 19.5 64 19.5 29.2 0 31.2-32 19.7-43.4-13.9-13.6-54.3-9.7-73.6-7.2zM377 105L279 7c-4.5-4.5-10.6-7-17-7h-6v128h128v-6.1c0-6.3-2.5-12.4-7-16.9zm-74.1 255.3c4.1-2.7-2.5-11.9-42.8-9 37.1 15.8 42.8 9 42.8 9z"
						/>
					</svg>
					<app-loading
						:condition="loading"
						:small="true"
						v-if="loading"
					></app-loading>
					{{ $t('resume.download') }}
				</button>
			</div>
			<!--//container-->
		</section>
		<div id="page-template" ref="resum" class="container px-3 px-lg-5">
			<article
				class="resume-wrapper mx-auto theme-bg-light p-5 mb-5 my-5 shadow-lg"
			>
				<div class="resume-header">
					<div class="row align-items-center">
						<div
							class="resume-title col-12 col-md-8 col-lg-8 col-xl-9"
						>
							<h2 class="resume-name mb-0 text-uppercase">
								{{ $t('owner') }}
							</h2>
							<div class="resume-tagline mb-3 mb-md-0">
								{{ $t('about.tagline') }}
							</div>
						</div>
						<!--//resume-title-->
						<div
							class="resume-contact col-12 col-md-4 col-lg-4 col-xl-3"
						>
							<ul class="list-unstyled mb-0 websites">
								<li class="mb-2">
									<svg
										class="svg-inline--fa fa-phone-square fa-w-14 fa-fw fa-lg mr-2"
										aria-hidden="true"
										focusable="false"
										data-prefix="fas"
										data-icon="phone-square"
										role="img"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 448 512"
										data-fa-i2svg=""
									>
										<path
											fill="currentColor"
											d="M400 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zM94 416c-7.033 0-13.057-4.873-14.616-11.627l-14.998-65a15 15 0 0 1 8.707-17.16l69.998-29.999a15 15 0 0 1 17.518 4.289l30.997 37.885c48.944-22.963 88.297-62.858 110.781-110.78l-37.886-30.997a15.001 15.001 0 0 1-4.289-17.518l30-69.998a15 15 0 0 1 17.16-8.707l65 14.998A14.997 14.997 0 0 1 384 126c0 160.292-129.945 290-290 290z"
										/></svg
									><!-- <i class="fas fa-phone-square fa-fw fa-lg mr-2 "></i> Font Awesome fontawesome.com --><a
										class="resume-link"
										href="tel:+998993902655"
										>+998993902655</a
									>
								</li>
								<li class="mb-2">
									<svg
										class="svg-inline--fa fa-envelope-square fa-w-14 fa-fw fa-lg mr-2"
										aria-hidden="true"
										focusable="false"
										data-prefix="fas"
										data-icon="envelope-square"
										role="img"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 448 512"
										data-fa-i2svg=""
									>
										<path
											fill="currentColor"
											d="M400 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zM178.117 262.104C87.429 196.287 88.353 196.121 64 177.167V152c0-13.255 10.745-24 24-24h272c13.255 0 24 10.745 24 24v25.167c-24.371 18.969-23.434 19.124-114.117 84.938-10.5 7.655-31.392 26.12-45.883 25.894-14.503.218-35.367-18.227-45.883-25.895zM384 217.775V360c0 13.255-10.745 24-24 24H88c-13.255 0-24-10.745-24-24V217.775c13.958 10.794 33.329 25.236 95.303 70.214 14.162 10.341 37.975 32.145 64.694 32.01 26.887.134 51.037-22.041 64.72-32.025 61.958-44.965 81.325-59.406 95.283-70.199z"
										/></svg
									><!-- <i class="fas fa-envelope-square fa-fw fa-lg mr-2"></i> Font Awesome fontawesome.com --><a
										target="_blank"
										class="resume-link"
										href="mailto:shokhboz11abdullayev@gmail.com"
									>
										shokhboz11abdullayev</a
									>
								</li>
								<li class="mb-2">
									<svg
										class="svg-inline--fa fa-globe fa-w-16 fa-fw fa-lg mr-2"
										aria-hidden="true"
										focusable="false"
										data-prefix="fas"
										data-icon="globe"
										role="img"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 496 512"
										data-fa-i2svg=""
									>
										<path
											fill="currentColor"
											d="M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z"
										/>
									</svg>
									<!-- <i class="fas fa-globe fa-fw fa-lg mr-2"></i> Font Awesome fontawesome.com -->
									<a
										class="resume-link"
										href="https://shokhboz-portfoliov2.netlify.app"
										>https://shokhboz-portfoliov2</a
									>
								</li>
								<li class="mb-0">
									<svg
										class="svg-inline--fa fa-map-marker-alt fa-w-12 fa-fw fa-lg mr-2"
										aria-hidden="true"
										focusable="false"
										data-prefix="fas"
										data-icon="map-marker-alt"
										role="img"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 384 512"
										data-fa-i2svg=""
									>
										<path
											fill="currentColor"
											d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"
										/>
									</svg>
									<!-- <i class="fas fa-map-marker-alt fa-fw fa-lg mr-2"></i> Font Awesome fontawesome.com -->
									Uzbekistan, Khavast city
								</li>
							</ul>
						</div>
						<!--//resume-contact-->
					</div>
					<!--//row-->
				</div>
				<!--//resume-header-->
				<hr />
				<div class="resume-intro py-3">
					<div
						class="media flex-column flex-md-row align-items-center"
					>
						<img
							class="resume-profile-image mb-3 mb-md-0 mr-md-5 ml-md-0 mx-auto"
							src="../assets/img/me2.jpg"
							alt="image"
						/>
						<div class="media-body text-left">
							<p class="mb-0">
								{{ $t('resume.description') }}
							</p>
						</div>
						<!--//media-body-->
					</div>
				</div>
				<!--//resume-intro-->
				<hr />
				<div class="resume-body">
					<div class="row">
						<div
							class="resume-main col-12 col-lg-8 col-xl-9 pr-0 pr-lg-5"
						>
							<section class="work-section py-3">
								<h3
									class="text-uppercase resume-section-heading mb-4"
								>
									{{ $t('resume.sections.workExperience') }}
								</h3>

								<div class="item">
									<div
										class="item-heading row align-items-center mb-2"
									>
										<h4
											class="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0"
										>
											Not yet...
										</h4>
										<!-- <div class="item-meta col-12 col-md-6 col-lg-4 text-mutedl text-left text-md-right">Startup | 2013 - 2014</div> -->
									</div>
									<div class="item-content">
										<p>Next can be you.</p>
									</div>
								</div>
								<!--//item-->
							</section>
							<!--//work-section-->

							<section class="project-section py-3">
								<h3
									class="text-uppercase resume-section-heading mb-4"
								>
									{{ $t('resume.sections.projects') }}
								</h3>
								<app-loading
									:condition="projectsLoading"
								></app-loading>
								<div
									v-show-slide:500:ease-in-out="
										!projectsLoading
									"
								>
									<div
										v-for="(project, index) in projects"
										:key="index"
										class="item mb-3"
									>
										<div
											class="item-heading row align-items-center mb-2"
										>
											<h4
												class="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0"
											>
												{{ project.title }}
											</h4>
											<div
												class="item-meta col-12 col-md-6 col-lg-4 text-mutedl text-left text-md-right"
											>
												Open Source
											</div>
										</div>
										<div class="item-content">
											<p>
												{{ project.description }}
											</p>
										</div>
									</div>
								</div>
								<!--//item-->
							</section>
							<!--//project-section-->
						</div>
						<!--//resume-main-->
						<aside
							class="resume-aside col-12 col-lg-4 col-xl-3 px-lg-4 pb-lg-4"
						>
							<section class="skills-section py-3">
								<h3
									class="text-uppercase resume-section-heading mb-4"
								>
									{{ $t('resume.sections.skills') }}
								</h3>
								<div class="item">
									<h4 class="item-title">Technical</h4>
									<ul
										class="list-unstyled resume-skills-list"
									>
										<li class="mb-2">HTML/CSS/Sass</li>
										<li class="mb-2">JavaScript/Vue</li>
										<!-- <li class="mb-2">Node/Express</li> -->
										<li class="mb-2">Python/Django</li>
										<li class="mb-2">Git/Github</li>
										<li>Heroku/Netlify deployment</li>
									</ul>
								</div>
								<!--//item-->
								<div class="item">
									<h4 class="item-title">Professional</h4>
									<ul
										class="list-unstyled resume-skills-list"
									>
										<li class="mb-2">
											Effective communication
										</li>
										<li class="mb-2">Team player</li>
										<li class="mb-2">
											Strong problem solver
										</li>
										<li>Good time management</li>
									</ul>
								</div>
								<!--//item-->
							</section>
							<!--//skills-section-->
							<section class="education-section py-3">
								<h3
									class="text-uppercase resume-section-heading mb-4"
								>
									{{ $t('resume.sections.education') }}
								</h3>
								<ul class="list-unstyled resume-education-list">
									<li class="mb-3">
										<div
											class="resume-degree font-weight-bold"
										>
											Full Stack Development Track
										</div>
										<div
											class="resume-degree-org text-mutedl"
										>
											Udacity
										</div>
										<div
											class="resume-degree-time text-mutedl"
										>
											2019 February - 2019 March
										</div>
									</li>
								</ul>
							</section>
							<!--//education-section-->
							<!-- <section class="education-section py-3">
										<h3 class="text-uppercase resume-section-heading mb-4">Awards</h3>
										<ul class="list-unstyled resume-awards-list">
											<li class="mb-3">
												<div class="font-weight-bold">Award Lorem Ipsum</div>
												<div class="text-mutedl">Microsoft lorem ipsum (2019)</div>
											</li>
											<li>
												<div class="font-weight-bold">Award Donec Sodales</div>
												<div class="text-mutedl">Oracle Aenean (2017)</div>
											</li>
										</ul>
									</section>//education-section -->
							<section class="skills-section py-3">
								<h3
									class="text-uppercase resume-section-heading mb-4"
								>
									{{ $t('resume.sections.languages') }}
								</h3>
								<ul class="list-unstyled resume-lang-list">
									<li class="mb-2">
										English
										<span class="text-mutedl"
											>(Upper-Intermediete)</span
										>
									</li>
									<li class="mb-2">
										Russian
										<span class="text-mutedl"
											>(Fluent)</span
										>
									</li>
									<li>
										Uzbek
										<span class="text-mutedl"
											>(Native)</span
										>
									</li>
								</ul>
							</section>
							<!--//certificates-section-->
							<section class="skills-section py-3">
								<h3
									class="text-uppercase resume-section-heading mb-4"
								>
									{{ $t('resume.sections.interests') }}
								</h3>
								<ul
									class="list-unstyled resume-interests-list mb-0"
								>
									<li class="mb-2">Football</li>
									<li class="mb-2">Swimming</li>
									<li>Travelling</li>
								</ul>
							</section>
							<!--//certificates-section-->
						</aside>
						<!--//resume-aside-->
					</div>
					<!--//row-->
				</div>
				<!--//resume-body-->
				<hr />
				<div class="resume-footer text-center">
					<ul
						class="resume-social-list list-inline mx-auto mb-0 d-inline-block text-mutedl"
					>
						<li class="list-inline-item mb-lg-0 mr-5">
							<a
								class="resume-link"
								href="https://github.com/Full-Stack-Shokhboz-Abdullayev/"
							>
								<svg
									class="svg-inline--fa fa-github-square fa-w-14 mr-2 fa-2x"
									data-fa-transform="down-4"
									aria-hidden="true"
									focusable="false"
									data-prefix="fab"
									data-icon="github-square"
									role="img"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 448 512"
									data-fa-i2svg=""
									style="
										transform-origin: 0.4375em 0.75em;
										font-size: 2rem !important;
									"
								>
									<g transform="translate(224 256)">
										<g
											transform="translate(0, 128)  scale(1, 1)  rotate(0 0 0)"
										>
											<path
												fill="currentColor"
												d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM277.3 415.7c-8.4 1.5-11.5-3.7-11.5-8 0-5.4.2-33 .2-55.3 0-15.6-5.2-25.5-11.3-30.7 37-4.1 76-9.2 76-73.1 0-18.2-6.5-27.3-17.1-39 1.7-4.3 7.4-22-1.7-45-13.9-4.3-45.7 17.9-45.7 17.9-13.2-3.7-27.5-5.6-41.6-5.6-14.1 0-28.4 1.9-41.6 5.6 0 0-31.8-22.2-45.7-17.9-9.1 22.9-3.5 40.6-1.7 45-10.6 11.7-15.6 20.8-15.6 39 0 63.6 37.3 69 74.3 73.1-4.8 4.3-9.1 11.7-10.6 22.3-9.5 4.3-33.8 11.7-48.3-13.9-9.1-15.8-25.5-17.1-25.5-17.1-16.2-.2-1.1 10.2-1.1 10.2 10.8 5 18.4 24.2 18.4 24.2 9.7 29.7 56.1 19.7 56.1 19.7 0 13.9.2 36.5.2 40.6 0 4.3-3 9.5-11.5 8-66-22.1-112.2-84.9-112.2-158.3 0-91.8 70.2-161.5 162-161.5S388 165.6 388 257.4c.1 73.4-44.7 136.3-110.7 158.3zm-98.1-61.1c-1.9.4-3.7-.4-3.9-1.7-.2-1.5 1.1-2.8 3-3.2 1.9-.2 3.7.6 3.9 1.9.3 1.3-1 2.6-3 3zm-9.5-.9c0 1.3-1.5 2.4-3.5 2.4-2.2.2-3.7-.9-3.7-2.4 0-1.3 1.5-2.4 3.5-2.4 1.9-.2 3.7.9 3.7 2.4zm-13.7-1.1c-.4 1.3-2.4 1.9-4.1 1.3-1.9-.4-3.2-1.9-2.8-3.2.4-1.3 2.4-1.9 4.1-1.5 2 .6 3.3 2.1 2.8 3.4zm-12.3-5.4c-.9 1.1-2.8.9-4.3-.6-1.5-1.3-1.9-3.2-.9-4.1.9-1.1 2.8-.9 4.3.6 1.3 1.3 1.8 3.3.9 4.1zm-9.1-9.1c-.9.6-2.6 0-3.7-1.5s-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3 1.1 1.5 1.1 3.3 0 4.1zm-6.5-9.7c-.9.9-2.4.4-3.5-.6-1.1-1.3-1.3-2.8-.4-3.5.9-.9 2.4-.4 3.5.6 1.1 1.3 1.3 2.8.4 3.5zm-6.7-7.4c-.4.9-1.7 1.1-2.8.4-1.3-.6-1.9-1.7-1.5-2.6.4-.6 1.5-.9 2.8-.4 1.3.7 1.9 1.8 1.5 2.6z"
												transform="translate(-224 -256)"
											/>
										</g>
									</g></svg
								><!-- <i class="fab fa-github-square fa-2x mr-2" data-fa-transform="down-4"></i> Font Awesome fontawesome.com --><span
									class="d-none d-lg-inline-block text-mutedl"
									>github.com/Full-Stack-Shokhboz-Abdullayev</span
								></a
							>
						</li>
						<li class="list-inline-item mb-lg-0">
							<a
								class="resume-link"
								href="https://www.linkedin.com/in/shokhboz-abdullayev-8545b01b9/"
							>
								<svg
									class="svg-inline--fa fa-linkedin fa-w-14 fa-2x mr-2"
									data-fa-transform="down-4"
									aria-hidden="true"
									focusable="false"
									data-prefix="fab"
									data-icon="linkedin"
									role="img"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 448 512"
									data-fa-i2svg=""
									style="
										transform-origin: 0.4375em 0.75em;
										font-size: 2rem !important;
									"
								>
									<g transform="translate(224 256)">
										<g
											transform="translate(0, 128)  scale(1, 1)  rotate(0 0 0)"
										>
											<path
												fill="currentColor"
												d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
												transform="translate(-224 -256)"
											/>
										</g>
									</g></svg
								><!-- <i class="fab fa-linkedin fa-2x mr-2" data-fa-transform="down-4"></i> Font Awesome fontawesome.com --><span
									class="d-none d-lg-inline-block text-mutedl"
									>linkedin.com/in/shokhboz-abdullayev-8545b01b9</span
								></a
							>
						</li>
					</ul>
				</div>
				<!--//resume-footer-->
			</article>
		</div>
		<!--//container-->
	</div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'
import html2pdf from 'html2pdf.js'
// import { DocRaptor } from '@/components/jsComponents/docRaptor.js'
export default {
	data() {
		return {
			loading: false
		}
	},
	computed: {
		...mapState('Projects', ['projects']),
		...mapGetters('Projects', ['projectsLoading'])
	},
	mounted() {
		if (this.projects.length === 0) {
			this.setProjects()
		}
	},
	methods: {
		async downloadWithCSS() {
			if (this.loading !== true) {
				const el = this.$refs.resum

				this.loading = true
				var opt = {
					margin: 0,
					filename: this.$t('owner') + '.pdf',
					image: { type: 'png' },
					pagebreak: { mode: ['avoid-all'] },
					html2canvas: { scale: 2 },
					jsPDF: {
						unit: 'in',
						format: 'letter',
						orientation: 'landscape'
					}
				}
				await html2pdf().set(opt).from(el).save()
				this.loading = false
			}
		},
		// downloadPDF() {
		// 	DocRaptor.createAndDownloadDoc('YOUR_API_KEY_HERE', {
		// 		test: true, // test documents are free, but watermarked
		// 		type: 'pdf',
		// 		document_content: this.$refs.resum.innerHTML, // use this page's HTML
		// 		prince_options: {
		// 			media: 'screen' // use screen styles instead of print styles
		// 		},
		// 		javascript: true // enable JavaScript processing
		// 		// or use a URL
		// 	})
		// },
		...mapActions('Projects', ['setProjects'])
	},
	head() {
		return {
			title: 'Resume'
		}
	}
}
</script>

<style></style>
