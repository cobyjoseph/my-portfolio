<script lang="ts">
	import TutorLandingPage from '$lib/components/example-sites/tutorSite/TutorLandingPage.svelte';
	import indelvve from '$lib/assets/example-sites/indelvve-ui-v2.png';
</script>

<div class="flex flex-col gap-6  font-satoshi  ">
	<div class="flex w-full sm:flex-row flex-col ml-1 sm:ml-0  gap-3 sm:gap-5">
		<div
			class="h-[12rem] sm:ml-1 w-full max-w-[21rem] relative   sm:h-[15rem] sm:max-w-[26rem]    flex rounded-lg  overflow-hidden "
		>
			<TutorLandingPage />
		</div>

		<div class="flex flex-col gap-3 ">
			<div class="flex gap-5 ">
				<div class="text-2xl leading-6  ">Luminary Partners</div>
			</div>
			<div class="text-base font-normal sm:mr-[25%] leading-[1.35rem]">
				I designed and developed the Rise Tutoring website with Sveltekit as an example site for a
				private tutoring company.
			</div>
			<button
				on:click={() => window.open('https://example-site-gilt.vercel.app/', '_blank')}
				class=" bg-light1 text-dark1  px-4 py-[0.1rem] items-center rounded-lg text-base flex max-w-fit hover:bg-white hover:text-dark1 "
			>
				Visit site
			</button>
		</div>
	</div>

	<div class="flex w-full gap-3 sm:flex-row flex-col gap-3 sm:gap-5 ">
		<div
			on:click={() => window.open('https://risetutoring.vercel.app/', '_blank')}
			class="h-[12rem] sm:ml-1 w-full max-w-[21rem] relative   sm:h-[15rem] sm:max-w-[26rem] hover:cursor-pointer   flex rounded-lg  overflow-hidden "
		>
			<TutorLandingPage />
		</div>

		<div class="flex flex-col gap-3  ">
			<div class="flex gap-5 ">
				<div class="text-2xl leading-6 ">Rise Tutoring</div>
			</div>
			<div class="text-base font-normal sm:mr-[25%] leading-[1.35rem] ">
				I designed and developed the Rise Tutoring website with Sveltekit as an example site for a
				private tutoring company.
			</div>
			<button
				on:click={() => window.open('https://risetutoring.vercel.app/', '_blank')}
				class=" bg-light1 text-dark1  px-4 py-[0.1rem] items-center rounded-lg text-base flex max-w-fit hover:bg-white hover:text-dark1 "
			>
				Visit site
			</button>
		</div>
	</div>

	<div class="flex w-full gap-3 sm:gap-5 sm:flex-row flex-col ">
		<div
			class="h-[12rem] sm:ml-1 w-full max-w-[21rem] relative sm:h-[15rem] sm:max-w-[26rem] outline flex rounded-lg overflow-hidden "
		>
			<img
				src={indelvve}
				alt="mock of indelvve website"
				class="scale-150 translate-y-[3rem] sm:translate-y-[3.8rem] translate-x-[1.5rem] sm:translate-x-[0.5rem]"
			/>
		</div>

		<div class="flex flex-col gap-3 ">
			<div class="flex  ">
				<div class="text-2xl leading-6 ">Indelvve</div>
			</div>
			<div class="text-base font-normal leading-[1.35rem] sm:mr-[25%]">
				Indelvve is a platform to make insights more accessible. Imagine Wikipedia, for current
				topics, filled with the best 5% of Twitter.
			</div>
			<div class="text-base font-normal leading-[1.35rem] sm:mr-[25%]">
				It is an ongoing personal side-project I am designing and developing. In addition to
				Svelte/Sveltekit, I have used several back-end tools and databases for various iterations of
				the platform, including Prisma with PostgreSQL and Dgraph.
			</div>
			<div class="text-base font-normal leading-[1.35rem] sm:mr-[25%]">
				These tools allow users to upload and read posts organized by an interdepentent tagging
				system.
			</div>
		</div>
	</div>

	<div class="flex w-full gap-3 sm:flex-row flex-col text-xl  ">
		I also designed and developed this portfolio site
	</div>
</div>
