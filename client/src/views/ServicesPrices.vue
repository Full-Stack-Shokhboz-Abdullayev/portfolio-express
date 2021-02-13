<template>
	<!-- eslint-disable no-mixed-spaces-and-tabs -->
	<div class="main-wrapper services">
		<section class="cta-section theme-bgs py-5">
			<div class="container text-center single-col-max-width">
				<h2 class="heading">{{ $t('header.links.services') }}</h2>
				<div class="intro">
					<i18n tag="p" path="services.subtitle1">
						<template v-slot:projects>
							<router-link exact :to="{ name: 'projects' }">{{
								$t('services.subtitle.projects')
							}}</router-link>
						</template>
						<template v-slot:resume>
							<router-link exact :to="{ name: 'resume' }">{{
								$t('services.subtitle.resume')
							}}</router-link>
						</template>
					</i18n>
					<p class="mb-0">
						{{ $t('services.subtitle2') }}
					</p>
				</div>
			</div>
			<!--//container-->
		</section>

		<section class="pricing-section py-5">
			<div class="container single-col-max-width">
				<h3 class="text-center mb-4">Service Packages</h3>
				<div
					id="pricing-tabs"
					class="pricing-tabs d-block d-md-none mb-3"
				>
					<a
						@click="switchPackages"
						class="pricing-tab mb-3 btn w-50"
						data-target="pricing-1-data"
						>{{ $t('services.packages.basic.title') }}</a
					>
					<a
						@click="switchPackages"
						class="pricing-tab mb-3 btn inactive w-50"
						data-target="pricing-2-data"
						>{{ $t('services.packages.standard.title') }}</a
					>
					<a
						@click="switchPackages"
						class="pricing-tab btn inactive w-50 mb-3"
						data-target="pricing-3-data"
						>{{ $t('services.packages.premium.title') }}</a
					>
				</div>
				<!--//pricing-mobile-tabs-->

				<table id="pricing-table" class="pricing-table table-bordered">
					<thead>
						<tr class="border-0">
							<th scope="col" class="pricing-0-data fafa" />
							<th
								scope="col"
								class="pricing-package-title pricing-1-data fafa shown"
							>
								{{ $t('services.packages.basic.title') }}
							</th>
							<th
								scope="col"
								class="pricing-package-title pricing-2-data mobile-is-hidden fafa"
							>
								{{ $t('services.packages.standard.title') }}
							</th>
							<th
								scope="col"
								class="pricing-package-title pricing-3-data mobile-is-hidden fafa"
							>
								{{ $t('services.packages.premium.title') }}
							</th>
						</tr>
					</thead>
					<tbody>
						<tr class="pricing-price-row">
							<th scope="row" class="pricing-0-data">
								{{ $t('services.regulars.prices') }}
							</th>
							<td class="pricing-1-data shown">
								<span class="price-number">$200</span>
							</td>
							<td class="pricing-2-data mobile-is-hidden">
								<span class="price-number">$2000</span>
							</td>
							<td class="pricing-3-data mobile-is-hidden">
								<span class="price-number">$3600+</span>
							</td>
						</tr>

						<tr class="pricing-desc-row">
							<th scope="row" class="pricing-0-data">
								{{ $t('services.regulars.details') }}
							</th>
							<td class="pricing-1-data shown">
								<span class="pricing-package-desc">{{
									$t('services.packages.basic.details')
								}}</span>
							</td>
							<td class="pricing-2-data mobile-is-hidden">
								<span class="pricing-package-desc">{{
									$t('services.packages.standard.details')
								}}</span>
							</td>
							<td class="pricing-3-data mobile-is-hidden">
								<span class="pricing-package-desc">{{
									$t('services.packages.premium.details')
								}}</span>
							</td>
						</tr>

						<tr class="pricing-feature-row">
							<th
								class="pricing-feature-row-name pricing-0-data"
								scope="row"
							>
								{{ $t('services.regulars.frontend.title')
								}}<br /><small
									class="feature-desc font-weight-normal text-muted"
									>{{
										$t(
											'services.regulars.frontend.description'
										)
									}}</small
								>
							</th>
							<td class="pricing-1-data shown">
								<svg
									class="svg-inline--fa fa-check fa-w-16 primary"
									aria-hidden="true"
									focusable="false"
									data-prefix="fas"
									data-icon="check"
									role="img"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 512 512"
									data-fa-i2svg=""
								>
									<path
										fill="currentColor"
										d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
									/></svg
								><!-- <i class="fas fa-check primary"></i> Font Awesome fontawesome.com -->
							</td>
							<td class="pricing-2-data mobile-is-hidden">
								<svg
									class="svg-inline--fa fa-check fa-w-16 primary"
									aria-hidden="true"
									focusable="false"
									data-prefix="fas"
									data-icon="check"
									role="img"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 512 512"
									data-fa-i2svg=""
								>
									<path
										fill="currentColor"
										d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
									/></svg
								><!-- <i class="fas fa-check primary"></i> Font Awesome fontawesome.com -->
							</td>
							<td class="pricing-3-data mobile-is-hidden">
								<svg
									class="svg-inline--fa fa-check fa-w-16 primary"
									aria-hidden="true"
									focusable="false"
									data-prefix="fas"
									data-icon="check"
									role="img"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 512 512"
									data-fa-i2svg=""
								>
									<path
										fill="currentColor"
										d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
									/>
								</svg>
							</td>
						</tr>
						<tr class="pricing-feature-row">
							<th
								class="pricing-feature-row-name pricing-0-data"
								scope="row"
							>
								{{ $t('services.regulars.backend.title')
								}}<br /><small
									class="feature-desc font-weight-normal text-muted"
									>{{
										$t(
											'services.regulars.backend.description'
										)
									}}</small
								>
							</th>
							<td class="pricing-1-data shown">
								<span class="text-muted">–</span>
							</td>
							<td class="pricing-2-data mobile-is-hidden">
								<svg
									class="svg-inline--fa fa-check fa-w-16 primary"
									aria-hidden="true"
									focusable="false"
									data-prefix="fas"
									data-icon="check"
									role="img"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 512 512"
									data-fa-i2svg=""
								>
									<path
										fill="currentColor"
										d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
									/></svg
								><!-- <i class="fas fa-check primary"></i> Font Awesome fontawesome.com -->
							</td>
							<td class="pricing-3-data mobile-is-hidden">
								<svg
									class="svg-inline--fa fa-check fa-w-16 primary"
									aria-hidden="true"
									focusable="false"
									data-prefix="fas"
									data-icon="check"
									role="img"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 512 512"
									data-fa-i2svg=""
								>
									<path
										fill="currentColor"
										d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
									/>
								</svg>
							</td>
						</tr>
						<tr class="pricing-feature-row">
							<th
								class="pricing-feature-row-name pricing-0-data"
								scope="row"
							>
								{{
									$t(
										'services.regulars.dynamicFrontend.title'
									)
								}}
								<br />
								<small
									class="feature-desc font-weight-normal text-muted"
									>{{
										$t(
											'services.regulars.dynamicFrontend.description'
										)
									}}
								</small>
							</th>
							<td class="pricing-1-data shown">
								<span class="text-muted">–</span>
							</td>
							<td class="pricing-2-data mobile-is-hidden">
								<span class="text-muted">–</span>
							</td>
							<td class="pricing-3-data mobile-is-hidden">
								<svg
									class="svg-inline--fa fa-check fa-w-16 primary"
									aria-hidden="true"
									focusable="false"
									data-prefix="fas"
									data-icon="check"
									role="img"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 512 512"
									data-fa-i2svg=""
								>
									<path
										fill="currentColor"
										d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
									/></svg
								><!-- <i class="fas fa-check primary"></i> Font Awesome fontawesome.com -->
							</td>
						</tr>
						<tr class="pricing-feature-row">
							<th
								class="pricing-feature-row-name pricing-0-data"
								scope="row"
							>
								{{ $t('services.regulars.backendApi.title') }}
								<br />
								<small
									class="feature-desc font-weight-normal text-muted"
									>{{
										$t(
											'services.regulars.backendApi.description'
										)
									}}</small
								>
							</th>
							<td class="pricing-1-data shown">
								<span class="text-muted">–</span>
							</td>
							<td class="pricing-2-data mobile-is-hidden">
								<span class="text-muted">–</span>
							</td>
							<td class="pricing-3-data mobile-is-hidden">
								<svg
									class="svg-inline--fa fa-check fa-w-16 primary"
									aria-hidden="true"
									focusable="false"
									data-prefix="fas"
									data-icon="check"
									role="img"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 512 512"
									data-fa-i2svg=""
								>
									<path
										fill="currentColor"
										d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
									/></svg
								><!-- <i class="fas fa-check primary"></i> Font Awesome fontawesome.com -->
							</td>
						</tr>
						<tr class="pricing-feature-row">
							<th
								class="pricing-feature-row-name pricing-0-data"
								scope="row"
							>
								{{ $t('services.regulars.design') }}
							</th>
							<td class="pricing-1-data shown">-</td>
							<td class="pricing-2-data mobile-is-hidden">
								<svg
									class="svg-inline--fa fa-check fa-w-16 primary"
									aria-hidden="true"
									focusable="false"
									data-prefix="fas"
									data-icon="check"
									role="img"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 512 512"
									data-fa-i2svg=""
								>
									<path
										fill="currentColor"
										d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
									/>
								</svg>
							</td>
							<td class="pricing-3-data mobile-is-hidden">
								<svg
									class="svg-inline--fa fa-check fa-w-16 primary"
									aria-hidden="true"
									focusable="false"
									data-prefix="fas"
									data-icon="check"
									role="img"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 512 512"
									data-fa-i2svg=""
								>
									<path
										fill="currentColor"
										d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
									/></svg
								><!-- <i class="fas fa-check primary"></i> Font Awesome fontawesome.com -->
							</td>
						</tr>
						<tr class="pricing-feature-row">
							<th
								class="pricing-feature-row-name pricing-0-data"
								scope="row"
							>
								{{ $t('services.regulars.responsiveness') }}
							</th>
							<td class="pricing-1-data shown">
								<svg
									class="svg-inline--fa fa-check fa-w-16 primary"
									aria-hidden="true"
									focusable="false"
									data-prefix="fas"
									data-icon="check"
									role="img"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 512 512"
									data-fa-i2svg=""
								>
									<path
										fill="currentColor"
										d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
									/>
								</svg>
							</td>
							<td class="pricing-2-data mobile-is-hidden">
								<svg
									class="svg-inline--fa fa-check fa-w-16 primary"
									aria-hidden="true"
									focusable="false"
									data-prefix="fas"
									data-icon="check"
									role="img"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 512 512"
									data-fa-i2svg=""
								>
									<path
										fill="currentColor"
										d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
									/>
								</svg>
							</td>
							<td class="pricing-3-data mobile-is-hidden">
								<svg
									class="svg-inline--fa fa-check fa-w-16 primary"
									aria-hidden="true"
									focusable="false"
									data-prefix="fas"
									data-icon="check"
									role="img"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 512 512"
									data-fa-i2svg=""
								>
									<path
										fill="currentColor"
										d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
									/></svg
								><!-- <i class="fas fa-check primary"></i> Font Awesome fontawesome.com -->
							</td>
						</tr>
						<tr class="pricing-feature-row">
							<th
								class="pricing-feature-row-name pricing-0-data"
								scope="row"
							>
								{{ $t('services.regulars.animations') }}
							</th>
							<td class="pricing-1-data shown">
								<svg
									class="svg-inline--fa fa-check fa-w-16 primary"
									aria-hidden="true"
									focusable="false"
									data-prefix="fas"
									data-icon="check"
									role="img"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 512 512"
									data-fa-i2svg=""
								>
									<path
										fill="currentColor"
										d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
									/>
								</svg>
							</td>
							<td class="pricing-2-data mobile-is-hidden">
								<svg
									class="svg-inline--fa fa-check fa-w-16 primary"
									aria-hidden="true"
									focusable="false"
									data-prefix="fas"
									data-icon="check"
									role="img"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 512 512"
									data-fa-i2svg=""
								>
									<path
										fill="currentColor"
										d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
									/>
								</svg>
							</td>
							<td class="pricing-3-data mobile-is-hidden">
								<svg
									class="svg-inline--fa fa-check fa-w-16 primary"
									aria-hidden="true"
									focusable="false"
									data-prefix="fas"
									data-icon="check"
									role="img"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 512 512"
									data-fa-i2svg=""
								>
									<path
										fill="currentColor"
										d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
									/></svg
								><!-- <i class="fas fa-check primary"></i> Font Awesome fontawesome.com -->
							</td>
						</tr>
						<tr class="pricing-feature-row">
							<th
								class="pricing-feature-row-name pricing-0-data"
								scope="row"
							>
								{{ $t('services.revisions') }}
							</th>
							<td class="pricing-1-data shown">
								<span class="text-muted">1</span>
							</td>
							<td class="pricing-2-data mobile-is-hidden">
								<span class="text-muted">2</span>
							</td>
							<td class="pricing-3-data mobile-is-hidden">5+</td>
						</tr>
						<tr class="pricing-feature-row">
							<th
								class="pricing-feature-row-name pricing-0-data"
								scope="row"
							>
								{{ $t('services.regulars.deliveryTime') }}
							</th>
							<td class="pricing-1-data shown">
								7 {{ $t('services.regulars.days') }}
							</td>
							<td class="pricing-2-data mobile-is-hidden">
								26 {{ $t('services.regulars.days') }}
							</td>
							<td class="pricing-3-data mobile-is-hidden">
								1 - 2 {{ $t('services.regulars.months') }}
							</td>
						</tr>
					</tbody>
					<tfoot>
						<tr class="pricing-cta-row">
							<td class="pricing-0-data" />
							<td class="pricing-1-data shown">
								<button class="btn">
									{{ $t('services.regulars.bookNow') }}
								</button>
							</td>
							<td class="pricing-2-data mobile-is-hidden">
								<button class="btn">
									{{ $t('services.regulars.bookNow') }}
								</button>
							</td>
							<td class="pricing-3-data mobile-is-hidden">
								<button class="btn">
									{{ $t('regulars.hire') }}
								</button>
							</td>
						</tr>
					</tfoot>
				</table>
				<!--//pricing-table-->
			</div>
			<!--//container-->
		</section>
		<!--//pricing-section-->

		<section class="faq-section">
			<div class="container single-col-max-width">
				<h3 class="text-center mb-4">FAQs</h3>
				<div class="text-center mb-5">
					{{ $t('faqs.description') }}
				</div>
				<app-loading :condition="faqsLoading"></app-loading>
				<transition-group
					name="list-item"
					tag="ul"
					appear
					id="faq-accordion"
					class="faq-accordion mx-auto position-relative"
				>
					<li
						v-for="(faq, index) in faqs"
						:key="faq._id"
						class="card border-0 mb-3 theme-bgs fafa d-inline-block"
					>
						<div
							class="card-header border-0 p-3 theme-bg-light"
							@click="openUp($event, index)"
						>
							<h4 class="card-title mb-0">
								<p
									data-parent="#faq-accordion"
									data-toggle="collapse"
									class="card-toggle collapsed m-0"
									aria-expanded="false"
								>
									<svg
										:class="{ rotate: !faq.isOpen }"
										class="svg-inline--fa fa-chevron-down fa-w-14 ease-in-out"
										aria-hidden="true"
										focusable="false"
										data-prefix="fas"
										data-icon="chevron-down"
										role="img"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 448 512"
										data-fa-i2svg=""
									>
										<path
											fill="currentColor"
											d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"
										/>
									</svg>
									{{ faq.question }}
								</p>
								<transition name="fade">
									<div v-if="editMode" class="customize-faqs">
										<button
											@click.stop="startEditing(faq)"
											class="btn mr-1"
										>
											<i class="fal fa-pencil"></i>
										</button>
										<button
											@click.stop="deleteFaq(faq._id)"
											class="btn btn-danger m-0"
										>
											<i class="fal fa-trash"></i>
										</button>
									</div>
								</transition>
							</h4>
						</div>

						<div v-show-slide:400:custom="!faq.isOpen" class="">
							<div class="card-body pt-0 theme-bg-light">
								{{ faq.answer }}
							</div>
						</div>
					</li>
				</transition-group>

				<!--//faq-accordion-->
				<form
					v-show-slide:400="editMode"
					class="mx-auto faq-post-form mt-5"
					@submit.prevent="checkAndPost({ faqId: newFaq._id })"
				>
					<h4 class="text-center mb-4">Add Faq</h4>
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
							v-model="newFaq.question"
						/>
						<div class="grey"></div>
						<div class="slide"></div>
						<div class="cword">Question</div>
					</div>

					<div
						class="wrap-input2 validate-input"
						data-validate="Message is required"
					>
						<textarea
							v-model="newFaq.answer"
							autocomplete="off"
							class="input2 w-100"
							name="message"
							required
							@change="validate"
						/>
						<div class="grey"></div>
						<div class="slide"></div>
						<div class="cword">Answer</div>
					</div>

					<div
						class="container-contact2-form-btn d-flex justify-content-center align-items-center"
					>
						<button class="contact2-form-btn btn w-50">Add</button>
						<transition name="fade">
							<button
								type="button"
								@click="cancelEditing"
								v-if="newFaq._id"
								class="btn btn-danger w-25 ml-4"
							>
								<app-loading
									:condition="postLoading"
									:small="true"
								></app-loading>
								Cancel Edit
							</button>
						</transition>
					</div>
				</form>
			</div>
			<!--//container-->
		</section>
		<!--//faq-section-->
	</div>
	<!-- eslint-enable no-mixed-spaces-and-tabs -->
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'
import validate from '@/assets/jsComponents/validate'

//true va false shart



export default {
	data() {
		return {
			newFaq: {
				question: '',
				answer: ''
			},
			postLoading: false
		}
	},
	computed: {
		...mapState(['editMode']),
		...mapState('Faqs', ['faqs']),
		...mapGetters('Faqs', ['faqsLoading'])
	},
	mounted() {
		this.setFaqs()
	},
	methods: {
		validate,
		openUp(event, index) {
			console.log(event)
			console.log(index)
			this.faqs[index].isOpen = !this.faqs[index].isOpen
			console.log(this.faqs[index].isOpen)
		},
		switchPackages(event) {
			const target = event.target.dataset.target
			const shown = document.querySelectorAll('.shown')
			const inactives = document.querySelectorAll('.pricing-tab')
			const tableColumns = document.querySelectorAll('.' + target)
			inactives.forEach((i) => {
				i.classList.add('inactive')
			})
			event.target.classList.remove('inactive')
			shown.forEach((t) => {
				t.classList.remove('shown')
			})
			tableColumns.forEach((t) => {
				t.classList.add('shown')
			})
		},
		cancelEditing() {
			this.newFaq = {
				question: '',
				answer: ''
			}
			document
				.querySelectorAll('.faq-post-form .wrap-input2')
				.forEach((i) => {
					i.classList.remove('filled')
				})
		},

		startEditing(obj) {
			this.newFaq = { ...obj }
			document
				.querySelectorAll('.faq-post-form .wrap-input2')
				.forEach((i) => {
					i.classList.add('filled')
				})
		},
		checkAndPost(obj) {
			// this.postLoading = true

			if (obj.faqId) {
				this.updateFaq(this.newFaq)
			} else {
				this.postFaq(this.newFaq)
			}
			this.cancelEditing()
			// this.postLoading = false
		},
		shuffled() {
			this.faqs = this.faqs.sort(() => 0.5 - Math.random())
		},
		...mapActions('Faqs', ['setFaqs', 'postFaq', 'deleteFaq', 'updateFaq'])
	},
	watch: {
		newFaq() {
			console.log(this.faqs)
		}
	},
	head() {
		return {
			title: 'Services & Prices'
		}
	}
}
</script>

<style scoped>
.rotate {
	transform: rotate(540deg);
}
.ease-in-out {
	transition: 0.4s ease-in-out all;
}
.inactive {
	background: var(--pr-sbg) !important;
	color: var(--pr-text) !important;
}
.main-wrapper.services .inactive:hover {
	background: var(--pr-cbtn) !important;
	color: white !important;
}
@media (max-width: 770px) {
	.pricing-1-data:not(.shown),
	.pricing-2-data:not(.shown),
	.pricing-3-data:not(.shown) {
		display: none !important;
	}
	.pricing-tabs {
		display: flex !important;
		flex-direction: column !important;
		justify-content: center;
		align-items: center;
	}
}
.shown {
	animation: shownAnimation 0.5s ease-in-out forwards;
}
@keyframes shownAnimation {
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
}
.faq-accordion {
	transition: 0.3s ease height !important;
	height: auto;
}

.list-item-enter {
	opacity: 0 !important;
	pointer-events: none !important;
	transform: translateY(100%) scale(0.8) !important;
}

.list-item-enter-active {
	transition: 0.6s ease all;
}

.list-item-leave-active {
	transition: 0.4s ease all;
	opacity: 0;

	width: 100%;
	position: absolute;
	z-index: -10;
}

.list-item-move {
	transition: 0.6s ease all !important;
}
</style>
