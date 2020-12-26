<template>
	<div class="bg-contact2 main-wrapper">
		<section class="cta-section theme-bgs py-5">
			<div class="container text-center single-col-max-width">
				<h2 class="heading">{{$t('header.links.contact')}}</h2>
				<div class="intro">
					<i18n tag="div" class="mb-2" path="contact.subtitle1">
						<template slot="email">
							<a href="mailto:shokhboz11abdullayev@gmail.com">shokhboz11abdullayev@gmail.com</a>
						</template>
					</i18n>
					<p>
						{{$t('contact.subtitle2')}}
					</p>
					<!-- <p class="m-0"></p>
					<p class="m-0">We can contact as well.</p> -->
					<ul class="list-inline mt-2 mb-0 no-decor no-list">
						<li
							v-for="(i, index) in socials"
							:key="index"
							class="list-inline-item mx-3"
						>
							<a :href="i.link">
								<i class="fab fa-1_5x" :class="i.icon"></i>
							</a>
						</li>
					</ul>
				</div>
			</div>
			<!--//container-->
		</section>

		<div class="container-contact2">
			<form class="contact2-form validate-form" autocomplete="off">
				<div
					class="wrap-input2 validate-input"
					data-validate="Name is required"
				>
					<input
						autocomplete="off"
						class="input2"
						type="text"
						name="name"
						required
						@change="validate"
					/>
					<div class="grey"></div>
					<div class="slide"></div>
					<div class="cword">{{$t('contact.form.fullName')}}</div>
				</div>
				<div
					class="wrap-input2 validate-input"
					data-validate="Valid email is required: ex@abc.xyz"
				>
					<input
						autocomplete="off"
						class="input2"
						type="text"
						name="email"
						required
						@change="validate"
					/>
					<div class="grey"></div>
					<div class="slide"></div>
					<div class="cword">{{$t('contact.form.email')}}</div>

					<span class="focus-input2" data-placeholder="EMAIL" />
				</div>
				<!-- <div class="wrap-input2 validate-input select d-flex justify-content-around align-items-center">
					<div
						@click="opened = !opened"
						class="btn d-flex justify-content-around align-items-center"
					>
						Select service package
						<span><i class="fa fa-arrow-alt-down"></i></span>
					</div>
					<div :class="{opened}" class="options d-flex justify-content-around align-items-center">
						<span
							@click="selectService(p)"
							v-for="(p, index) in packages"
							:key="index"
						>
							{{ p }}
						</span>
					</div>
				</div> -->
				<div
					class="wrap-input2 validate-input"
					data-validate="Message is required"
				>
					<textarea
						autocomplete="off"
						class="input2"
						name="message"
						required
						@change="validate"
					/>
					<div class="grey"></div>
					<div class="slide"></div>
					<div class="cword">{{$t('contact.form.message')}}</div>

					<span class="focus-input2" data-placeholder="MESSAGE" />
				</div>
				<div class="container-contact2-form-btn">
					<div class="wrap-contact2-form-btn">
						<div class="contact2-form-bgbtn" />
						<button class="contact2-form-btn btn w-50">
							{{$t('contact.form.send')}}
						</button>
					</div>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';
import validate from '@/components/jsComponents/validate';
export default {
	data() {
		return {
			opened: false,
			packages: ['Basic', 'Standard', 'Premium'],
			input: {
				head: '',
				email: '',
				package: '',
				message: ''
			}
		};
	},
	methods: {
		validate,
		selectService(p) {
			this.input.package = p;
		}
	},
	computed: {
		...mapGetters(['socials'])
	}
};
</script>

<style lang="scss" scoped>
.main-wrapper {
	width: calc(100% - 280px);
	min-height: 100vh;
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
}
</style>
