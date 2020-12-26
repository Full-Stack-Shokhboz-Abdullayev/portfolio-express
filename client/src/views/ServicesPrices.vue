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
								<span class="price-number">$900</span>
							</td>
							<td class="pricing-2-data mobile-is-hidden">
								<span class="price-number">$2500</span>
							</td>
							<td class="pricing-3-data mobile-is-hidden">
								<span class="price-number">$5000+</span>
							</td>
						</tr>

						<tr class="pricing-desc-row">
							<th scope="row" class="pricing-0-data">
								{{ $t('services.regulars.details') }}
							</th>
							<td class="pricing-1-data shown">
								<span class="pricing-package-desc"
									>A small app lorem ipsum dolor sit amet,
									consectetuer adipiscing elit. Aenean commodo
									ligula eget dolor.</span
								>
							</td>
							<td class="pricing-2-data mobile-is-hidden">
								<span class="pricing-package-desc"
									>An medium app lorem ipsum dolor sit amet,
									consectetuer adipiscing elit. Aenean commodo
									ligula eget dolor.</span
								>
							</td>
							<td class="pricing-3-data mobile-is-hidden">
								<span class="pricing-package-desc"
									>A complex app lorem ipsum dolor sit amet,
									consectetuer adipiscing elit. Aenean commodo
									ligula eget dolor.</span
								>
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
								14 {{ $t('services.regulars.days') }}
							</td>
							<td class="pricing-3-data mobile-is-hidden">
								2 - 3 {{ $t('services.regulars.months') }}
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
				<div id="faq-accordion" class="faq-accordion mx-auto">
					<div
						v-for="(faq, index) in faqs"
						:key="index"
						class="card border-0 mb-3 theme-bgs fafa"
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
										:class="{ rotate: faq.isOpen }"
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
							</h4>
						</div>

						<div v-show-slide:400:custom="faq.isOpen" class="">
							<div class="card-body pt-0 theme-bg-light">
								{{ faq.answer }}
							</div>
							<!--//card-body-->
						</div>
					</div>
					<!--//card-->
				</div>
				<!--//faq-accordion-->
			</div>
			<!--//container-->
		</section>
		<!--//faq-section-->
	</div>
	<!-- eslint-enable no-mixed-spaces-and-tabs -->
</template>

<script>
export default {
	data: () => ({
		faqs: [
			{
				question: 'Can you sit amet quam eget lacinia?',
				answer: `
						Lorem ipsum dolor sit amet,
						consectetuer adipiscing elit.
						Aenean commodo ligula eget dolor.
						Aenean massa.
						Cum sociis natoque penatibus et
						magnis dis parturient montes,
						nascetur ridiculus mus. 
						Donec quam felis,
						ultricies nec, 
						pellentesque eu, pretium quis, sem. 
						Nulla consequat massa quis enim. 
						Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
						arcu. 
						In enim justo, rhoncus ut, imperdiet a, venenatis vitae,
						justo. Nullam dictum felis eu pede mollis pretium. 
		            `,
				isOpen: false
			},
			{
				question: 'Can you sit amet quam eget lacinia?',
				answer: `
						Lorem ipsum dolor sit amet,
						consectetuer adipiscing elit.
						Aenean commodo ligula eget dolor.
						Aenean massa.
						Cum sociis natoque penatibus et
						magnis dis parturient montes,
						nascetur ridiculus mus. 
						Donec quam felis,
						ultricies nec, 
						pellentesque eu, pretium quis, sem. 
						Nulla consequat massa quis enim. 
						Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
						arcu. 
						In enim justo, rhoncus ut, imperdiet a, venenatis vitae,
						justo. Nullam dictum felis eu pede mollis pretium. 
		            `,
				isOpen: false
			},
			{
				question: 'Can you sit amet quam eget lacinia?',
				answer: `
						Lorem ipsum dolor sit amet,
						consectetuer adipiscing elit.
						Aenean commodo ligula eget dolor.
						Aenean massa.
						Cum sociis natoque penatibus et
						magnis dis parturient montes,
						nascetur ridiculus mus. 
						Donec quam felis,
						ultricies nec, 
						pellentesque eu, pretium quis, sem. 
						Nulla consequat massa quis enim. 
						Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
						arcu. 
						In enim justo, rhoncus ut, imperdiet a, venenatis vitae,
						justo. Nullam dictum felis eu pede mollis pretium. 
		            `,
				isOpen: false
			},
			{
				question: 'Can you sit amet quam eget lacinia?',
				answer: `
						Lorem ipsum dolor sit amet,
						consectetuer adipiscing elit.
						Aenean commodo ligula eget dolor.
						Aenean massa.
						Cum sociis natoque penatibus et
						magnis dis parturient montes,
						nascetur ridiculus mus. 
						Donec quam felis,
						ultricies nec, 
						pellentesque eu, pretium quis, sem. 
						Nulla consequat massa quis enim. 
						Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
						arcu. 
						In enim justo, rhoncus ut, imperdiet a, venenatis vitae,
						justo. Nullam dictum felis eu pede mollis pretium. 
		            `,
				isOpen: false
			},
			{
				question: 'Can you sit amet quam eget lacinia?',
				answer: `
						Lorem ipsum dolor sit amet,
						consectetuer adipiscing elit.
						Aenean commodo ligula eget dolor.
						Aenean massa.
						Cum sociis natoque penatibus et
						magnis dis parturient montes,
						nascetur ridiculus mus. 
						Donec quam felis,
						ultricies nec, 
						pellentesque eu, pretium quis, sem. 
						Nulla consequat massa quis enim. 
						Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
						arcu. 
						In enim justo, rhoncus ut, imperdiet a, venenatis vitae,
						justo. Nullam dictum felis eu pede mollis pretium. 
		            `,
				isOpen: false
			}
		]
	}),
	methods: {
		openUp(event, index) {
			console.log(event);
			console.log(index);
			this.faqs[index].isOpen = !this.faqs[index].isOpen;
			console.log(this.faqs[index].isOpen);
		},
		switchPackages(event) {
			const target = event.target.dataset.target;
			const shown = document.querySelectorAll('.shown');
			const inactives = document.querySelectorAll('.pricing-tab');
			const tableColumns = document.querySelectorAll('.' + target);
			inactives.forEach((i) => {
				i.classList.add('inactive');
			});
			event.target.classList.remove('inactive');
			shown.forEach((t) => {
				t.classList.remove('shown');
			});
			tableColumns.forEach((t) => {
				t.classList.add('shown');
			});
		}
	}
};
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
</style>
