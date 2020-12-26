<template>
	<header class="header" :class="{ navOpened }">
		<div class="burger" @click="toggleNav">
			<div class="l_1"></div>
			<div class="extra e_1"></div>
			<div class="extra e_2"></div>
			<div class="l_2"></div>
			<div class="l_3"></div>
		</div>
		<div>
			<h4 class="pt-lg-4 mb-0 name text-center entry sm-name">
				<b>{{ $t('owner') }}</b>
			</h4>
			<nav class="d-flex align-items-center flex-column my-d">
				<div class="navigation d-flex align-items-center flex-column">
					<div class="profile d-flex flex-column align-items-center">
						
						<div
							class="mb-3 position-relative header-img"
							
						>
							<v-lazy-image :src="me2" src-placeholder="Hello"  />
							<div
								class="filter"
								
							></div>
						</div>
						<div class="bio mb-3">
							{{ $t('header.overview') }}
						</div>
						<ul
							class="social-list list-inline py-2 w-100 mx-auto d-flex justify-content-around align-items-center"
						>
							<li
								v-for="(i, index) in socials"
								:key="index"
								class="list-inline"
							>
								<a :href="i.link">
									<i class="fab" :class="i.icon" />
								</a>
							</li>
						</ul>
					</div>
					<hr />

					<ul
						class="navbar-nav d-flex flex-column align-items-center text-left"
					>
						<router-link
							:to="{ name: 'about' }"
							exact
							exact-active-class="active"
							tag="li"
							class="link"
							@click.native="hideNav"
						>
							<svg
								class="svg-inline--fa fa-user fa-w-14 fa-fw mr-2"
								aria-hidden="true"
								focusable="false"
								data-prefix="fas"
								data-icon="user"
								role="img"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 448 512"
								data-fa-i2svg=""
							>
								<path
									fill="currentColor"
									d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"
								/>
							</svg>

							<b>{{ $t('header.links.about') }}</b>
						</router-link>
						<router-link
							:to="{ name: 'projects' }"
							exact
							exact-active-class="active"
							tag="li"
							class="link"
							@click.native="hideNav"
						>
							<svg
								class="svg-inline--fa fa-laptop-code fa-w-20 fa-fw mr-2"
								aria-hidden="true"
								focusable="false"
								data-prefix="fas"
								data-icon="laptop-code"
								role="img"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 640 512"
								data-fa-i2svg=""
							>
								<path
									fill="currentColor"
									d="M255.03 261.65c6.25 6.25 16.38 6.25 22.63 0l11.31-11.31c6.25-6.25 6.25-16.38 0-22.63L253.25 192l35.71-35.72c6.25-6.25 6.25-16.38 0-22.63l-11.31-11.31c-6.25-6.25-16.38-6.25-22.63 0l-58.34 58.34c-6.25 6.25-6.25 16.38 0 22.63l58.35 58.34zm96.01-11.3l11.31 11.31c6.25 6.25 16.38 6.25 22.63 0l58.34-58.34c6.25-6.25 6.25-16.38 0-22.63l-58.34-58.34c-6.25-6.25-16.38-6.25-22.63 0l-11.31 11.31c-6.25 6.25-6.25 16.38 0 22.63L386.75 192l-35.71 35.72c-6.25 6.25-6.25 16.38 0 22.63zM624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16zM576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512V48zm-64 272H128V64h384v256z"
								/>
							</svg>
							<b>{{ $t('header.links.projects') }}</b>
						</router-link>
						<router-link
							:to="{ name: 'servicesPricing' }"
							exact
							exact-active-class="active"
							tag="li"
							class="link"
							@click.native="hideNav"
						>
							<svg
								class="svg-inline--fa fa-briefcase fa-w-16 fa-fw mr-2"
								aria-hidden="true"
								focusable="false"
								data-prefix="fas"
								data-icon="briefcase"
								role="img"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 512 512"
								data-fa-i2svg=""
							>
								<path
									fill="currentColor"
									d="M320 336c0 8.84-7.16 16-16 16h-96c-8.84 0-16-7.16-16-16v-48H0v144c0 25.6 22.4 48 48 48h416c25.6 0 48-22.4 48-48V288H320v48zm144-208h-80V80c0-25.6-22.4-48-48-48H176c-25.6 0-48 22.4-48 48v48H48c-25.6 0-48 22.4-48 48v80h512v-80c0-25.6-22.4-48-48-48zm-144 0H192V96h128v32z"
								/>
							</svg>
							<b>{{ $t('header.links.services') }}</b>
						</router-link>
						<router-link
							:to="{ name: 'resume' }"
							exact
							exact-active-class="active"
							tag="li"
							class="link"
							@click.native="hideNav"
						>
							<svg
								class="svg-inline--fa fa-file-alt fa-w-12 fa-fw mr-2"
								aria-hidden="true"
								focusable="false"
								data-prefix="fas"
								data-icon="file-alt"
								role="img"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 384 512"
								data-fa-i2svg=""
							>
								<path
									fill="currentColor"
									d="M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm64 236c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12v8zm0-64c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12v8zm0-72v8c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12zm96-114.1v6.1H256V0h6.1c6.4 0 12.5 2.5 17 7l97.9 98c4.5 4.5 7 10.6 7 16.9z"
								/>
							</svg>
							<b>{{ $t('header.links.resume') }} (CV)</b>
						</router-link>
						<router-link
							:to="{ name: 'blog' }"
							exact
							exact-active-class="active"
							tag="li"
							class="link"
							@click.native="hideNav"
						>
							<svg
								class="svg-inline--fa fa-blog fa-w-16 fa-fw mr-2"
								aria-hidden="true"
								focusable="false"
								data-prefix="fas"
								data-icon="blog"
								role="img"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 512 512"
								data-fa-i2svg=""
							>
								<path
									fill="currentColor"
									d="M172.2 226.8c-14.6-2.9-28.2 8.9-28.2 23.8V301c0 10.2 7.1 18.4 16.7 22 18.2 6.8 31.3 24.4 31.3 45 0 26.5-21.5 48-48 48s-48-21.5-48-48V120c0-13.3-10.7-24-24-24H24c-13.3 0-24 10.7-24 24v248c0 89.5 82.1 160.2 175 140.7 54.4-11.4 98.3-55.4 109.7-109.7 17.4-82.9-37-157.2-112.5-172.2zM209 0c-9.2-.5-17 6.8-17 16v31.6c0 8.5 6.6 15.5 15 15.9 129.4 7 233.4 112 240.9 241.5.5 8.4 7.5 15 15.9 15h32.1c9.2 0 16.5-7.8 16-17C503.4 139.8 372.2 8.6 209 0zm.3 96c-9.3-.7-17.3 6.7-17.3 16.1v32.1c0 8.4 6.5 15.3 14.8 15.9 76.8 6.3 138 68.2 144.9 145.2.8 8.3 7.6 14.7 15.9 14.7h32.2c9.3 0 16.8-8 16.1-17.3-8.4-110.1-96.5-198.2-206.6-206.7z"
								/>
							</svg>
							<b>{{ $t('header.links.blog') }}</b>
						</router-link>
						<router-link
							:to="{ name: 'contact' }"
							exact
							exact-active-class="active"
							tag="li"
							class="link"
							@click.native="hideNav"
						>
							<svg
								class="svg-inline--fa fa-envelope-open-text fa-w-16 fa-fw mr-2"
								aria-hidden="true"
								focusable="false"
								data-prefix="fas"
								data-icon="envelope-open-text"
								role="img"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 512 512"
								data-fa-i2svg=""
							>
								<path
									fill="currentColor"
									d="M176 216h160c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16H176c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16zm-16 80c0 8.84 7.16 16 16 16h160c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16H176c-8.84 0-16 7.16-16 16v16zm96 121.13c-16.42 0-32.84-5.06-46.86-15.19L0 250.86V464c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V250.86L302.86 401.94c-14.02 10.12-30.44 15.19-46.86 15.19zm237.61-254.18c-8.85-6.94-17.24-13.47-29.61-22.81V96c0-26.51-21.49-48-48-48h-77.55c-3.04-2.2-5.87-4.26-9.04-6.56C312.6 29.17 279.2-.35 256 0c-23.2-.35-56.59 29.17-73.41 41.44-3.17 2.3-6 4.36-9.04 6.56H96c-26.51 0-48 21.49-48 48v44.14c-12.37 9.33-20.76 15.87-29.61 22.81A47.995 47.995 0 0 0 0 200.72v10.65l96 69.35V96h320v184.72l96-69.35v-10.65c0-14.74-6.78-28.67-18.39-37.77z"
								/>
							</svg>
							<b>{{ $t('header.links.contact') }}</b>
						</router-link>
						<li class="link" @click="openPages">
							<i class="fas fa-w-16 fa-fw fa-cogs mr-2" />
							<b class="mr-2">{{ $t('header.links.more') }}</b>
							<i class="fas fa-triangle" />
						</li>
					</ul>
					<div
						v-show-slide:300:custom="opened"
						class="more-pages-wrapper mt-2 d-flex justify-content-center"
					>
						<ul
							style="list-style: none; border-radius: 5px"
							class="w-100 m-0 p-0 text-center more-pages"
						>
							<li
								v-for="num in 3"
								:key="num"
								class="link text-center"
							>
								<a href="#" class="text-l">beliefy.io</a>
							</li>
						</ul>
					</div>
					<button class="btn btn-block mt-4 custom-btn header-hire">
						<i class="fa fa-paper-plane" />
						{{ $t('regulars.hire') }}
					</button>
					<hr />

					<div
						class="language-container d-flex flex-column align-items-center"
					>
						<h4 class="min entry mb-3">
							{{ $t('regulars.selectLang') }}
						</h4>
						<div class="btn-group">
							<button
								@click="setLang('en')"
								:class="{ selected: selectedLang === 'en' }"
								class="btn text-light language-btn"
							>
								Eng
							</button>
							<button
								@click="setLang('ru')"
								:class="{ selected: selectedLang === 'ru' }"
								class="btn text-light language-btn"
							>
								Рус
							</button>
							<button
								@click="setLang('uz')"
								:class="{ selected: selectedLang === 'uz' }"
								class="btn text-light language-btn"
							>
								Uzb
							</button>
						</div>
					</div>
					<hr />
					<div
						class="switch-container d-flex justify-content-around flex-column align-items-center"
					>
						<h4 class="min entry mb-3">
							<i class="fa fa-adjust" /> {{ text }}
							{{ $t('themes.modeWord') }}
						</h4>
						<div class="switch" @click="onSwitch">
							<div class="switch-btn" :class="{ darkOn }" />
						</div>
					</div>
				</div>
			</nav>
		</div>
	</header>
</template>

<script>
import VLazyImage from 'v-lazy-image';
import me2 from '@/assets/me2.jpg';

import { mapGetters } from 'vuex';
export default {
	data() {
		return {
			darkOn: false,
			opened: false,
			navOpened: false
		};
	},
	computed: {
		...mapGetters(['socials']),
		text() {
			return this.darkOn
				? this.$t('themes.light')
				: this.$t('themes.dark');
		},
		selectedLang() {
			return this.$i18n.locale;
		},
		me2() {
			return me2;
		}
	},
	created() {
		this.analyzeTheme();
	},
	components: {
		VLazyImage
	},
	methods: {
		setLang(lang) {
			this.$i18n.locale = lang;
		},
		hideNav() {
			this.navOpened = false;
			const nav = document.querySelector('nav');
			setTimeout(() => {
				nav.classList.add('my-d');
			}, 300);
		},
		toggleNav() {
			this.navOpened = !this.navOpened;
			const nav = document.querySelector('nav');
			if (this.navOpened) {
				nav.classList.remove('my-d');
			} else {
				setTimeout(() => {
					nav.classList.add('my-d');
				}, 300);
			}
		},
		analyzeTheme() {
			if (localStorage.getItem('darkOn') === 'true') {
				this.darkOn = true;
				document.body.classList.add('dark');
			}
		},
		onSwitch() {
			this.darkOn = !this.darkOn;
			localStorage.setItem('darkOn', this.darkOn);
			console.log(localStorage.getItem('darkOn'));
			document.body.classList.toggle('dark');
		},
		openPages() {
			this.opened = !this.opened;
		}
	}
};
</script>

<style>

</style>
