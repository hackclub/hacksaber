<script>
	function dismissWarning() {
		document.getElementById('warning').remove();
	}
</script>

<div
	class="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black bg-opacity-96 p-6 text-center text-white"
	id="warning"
>
	<h1 class="mb-4 text-4xl font-bold">⚠ Epilepsy Warning</h1>
	<p class="mb-6 max-w-lg">
		This site and YSWS both involve flashing lights, participation is not recommended if you suffer
		from epilepsy.
	</p>
	<button on:click={dismissWarning} class="rounded bg-red-600 px-6 py-3 text-lg font-bold">
		I Understand
	</button>
</div>

<title>Hacksaber!</title>

<div class="relative h-[100vh] overflow-hidden font-mono text-white">
	<img
		src="lightshow-optimized.gif"
		class="absolute left-0 top-0 h-full w-full object-cover opacity-40 blur-sm"
		alt="lightshow-bg"
	/>
	<div class="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
		<img
			class="h-auto max-w-5xl duration-100 hover:drop-shadow-xl"
			src="hacksaber.png"
			alt="logo"
		/>
		<h1 class="ml-20 mr-20 mt-8 text-5xl">
			Ship a Beat Saber modchart, and we'll gift you Beat Saber, BL Premium, or custom merch!
		</h1>
	</div>
</div>

<div class="mb-0 bg-gradient-to-b from-black to-[#230c46] pb-8 pt-8">
	<h1 class="mt-16 text-center text-8xl text-white">☆How it works☆</h1>

	<ol class="ml-100 mr-100 mt-20 list-decimal pb-10 text-center text-3xl">
		<li class="mb-5">
			Download <a href="https://cm.topc.at/dl" class="underline">Chromapper</a> and
			<a
				href="https://github.com/FallenCharlotte/ChroMapper-PropEdit/releases/tag/v0.12.1"
				class="underline">PropEdit</a
			>
		</li>
		<li class="mb-5">Pick a song and download it as a .ogg</li>
		<li class="mb-5">Create a new Chromapper project</li>
		<li class="mb-5">Make your map's gameplay</li>
		<li class="mb-5">The fun part — Make a Chroma lightshow!</li>
		<li class="mb-5">Submit your map in #hacksaber!</li>
		<li class="">Redeem your prizes!</li>
	</ol>

	<h1 class="mt-16 text-center text-5xl text-white">Journalling</h1>
	<p class="mb-8 ml-40 mr-40 mt-4 text-center text-xl">
		When you spend some time working on your map, create a journal entry with a timestamp! It can be
		in any format (.md is a good option) that's easily readable by us! <br /> <br />
		Submit your entire journal with your project when you finish!
	</p>
</div>

<div class="bg-gradient-to-b from-[#230c46] to-black pb-8">
	<hr class="mx-auto w-[80vw] pb-8 pt-4" />

	<h1 class="text-center text-8xl text-white">☆Prizes☆</h1>

	<div class="width-1/2 content-center rounded-sm p-8 text-center text-3xl">
		<table class="mx-auto">
			<tbody>
				<tr class="">
					<th class="p-6 outline outline-white">Prize</th>
					<th class="p-6 outline outline-white">Requirement</th>
					<th class="p-6 outline outline-white">Details</th>
				</tr>
				<tr>
					<td class="p-8 outline outline-white">★Beat Saber★</td>
					<td class="p-8 outline outline-white">8 Hours + Chroma/Noodle</td>
					<td class="p-8 outline outline-white"
						>The game itself! Best if you have a VR but don't own BS</td
					>
				</tr>
				<tr>
					<td class="p-8 outline outline-white">★BeatLeader Supporter★</td>
					<td class="p-8 outline outline-white">4 Hours + Chroma</td>
					<td class="p-8 outline outline-white"
						>BeatLeader premium for if you own Beat Saber and want some extra features around custom
						maps!</td
					>
				</tr>
				<tr>
					<td class="p-8 outline outline-white">★Stickers★</td>
					<td class="p-8 outline outline-white">2 Hours</td>
					<td class="p-8 outline outline-white"
						>For if you don't have a VR headset at all and don't plan to get one. Custom made
						stickers!</td
					>
				</tr>
			</tbody>
		</table>
	</div>
</div>
<div class="mb-0 bg-gradient-to-b from-black to-[#460c3c] pb-8 pt-8">
	<hr class="mx-auto w-[80vw] pb-8 pt-4" />
	<h1 class="mb-8 mt-16 text-center text-8xl text-white">☆FAQ☆</h1>
	<h2 class="mt-6 text-center text-4xl font-bold text-white">What is Beat Saber?</h2>
	<p class="mb-8 mt-2 text-center text-xl">
		A VR rhythm game where the player slices cubes to a song!
	</p>

	<hr class="mx-auto mb-2 w-[20vw] pb-2 pt-4" />

	<h2 class="text-center text-4xl font-bold text-white">Is mapping hard?</h2>
	<p class="mb-8 mt-2 text-center text-xl">
		There's only a few basic principles to learn, after that it's smooth sailing!
	</p>

	<hr class="mx-auto mb-2 w-[20vw] pb-2 pt-4" />

	<h2 class="text-center text-4xl font-bold text-white">Is there a Slack channel?</h2>
	<p class="mb-8 mt-2 text-center text-xl">
		Yes! Join <a href="https://hackclub.slack.com/archives/C096K1ZEXDL" class='underline'>#hacksaber</a>
	</p>

	<hr class="mx-auto mb-2 w-[20vw] pb-2 pt-4" />

	<h2 class="text-center text-4xl font-bold text-white">What does BeatLeader Supporter do?</h2>
	<p class="mb-8 mt-2 text-center text-xl">
		Gives star ratings for <b>every</b> custom map, and the best custom saber mod available! (reesabers)
	</p>

	<hr class="mx-auto mb-2 w-[20vw] pb-2 pt-4" />

	<h2 class="text-center text-4xl font-bold text-white">When does this end?</h2>
	<p class="mb-8 mt-2 text-center text-xl">We're still figuring this out</p>

	<hr class="mx-auto mb-2 w-[20vw] pb-2 pt-4" />

	<h2 class="text-center text-4xl font-bold text-white">How do I submit?</h2>
	<p class="mb-8 mt-2 text-center text-xl">
		Submission form doesn't exist right now :(
	</p>
	<hr class="mx-auto mt-12 w-[80vw] pb-8 pt-4" />

	<h2 class="mt-4 text-center text-4xl font-bold text-white">Join now! <a
			href="https://hackclub.slack.com/archives/C096K1ZEXDL"
			class="underline">#hacksaber</a> </h2>
	<div class="mt-10 flex justify-center gap-4">
		<img src="rednote.png" alt="red note" class="w-32" />
		<!--XIAO HONG SHU-->
		<img src="blunote.png" alt="blu note" class="w-32" />
	</div>
</div>
