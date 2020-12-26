<template>
	<footer class="footer text-center py-4">
		<i18n tag="small" path="footer.madeBy">
			<template v-slot:beliefyLink>
				<a href="">beliefy.io</a>
			</template>
			<template v-slot:owner>
				{{ $t('owner') }}
			</template>
		</i18n>
		<br />
		<small>
			<i class="fa fa-copyright"/> 
			<i18n class="copyright ml-2"  tag="span" path="footer.copyright">
				<template v-slot:pp> 
					<a href="">{{$t('footer.pp')}}</a>
				</template>
				<template v-slot:year> 
					{{currentYear}}
				</template>
			</i18n>
		</small>
	</footer>
</template>

<script>
export default {
	computed: {
		currentYear() {
			return new Date().getFullYear();
		}
	}
};
</script>
