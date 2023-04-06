<script lang="ts">
	import Menu from '$lib/components/page1-components/Menu.svelte';
	import BackgroundElements from '$lib/components/page1-components/BackgroundElements.svelte';
      import HeroSection from '$lib/components/page1-components/HeroSection.svelte';
      import ExamplesSection from '$lib/components/page1-components/ExamplesSection.svelte';
      import tutorVideo from '$lib/assets/videos/tutor-site-trimmed-v0.1.mp4'
      import TutorSiteVideo from '$lib/components/page1-components/TutorSiteVideo.svelte';
</script>

<BackgroundElements />
<div class="relative z-10">
	<Menu />
</div>

<div class="flex flex-col gap-2 px-[8%]">
      
      <!-- <TutorSiteVideo /> -->
	<div class="flex flex-col">
		<HeroSection />
	</div>
	<div class="flex flex-col  ">
		<ExamplesSection />
	</div>
</div>

