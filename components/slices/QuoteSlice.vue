<template>
	<div class="post-part single container">
		<blockquote class="block-quotation">
			{{ $prismic.asText(slice.primary.quote) }}
		</blockquote>
	</div>
</template>

<script>
export default {
	props: ['slice'],
	name: 'quote-slice',
};
</script>
