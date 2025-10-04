import { z as ensure_array_like, x as escape_html, F as attr_class, G as stringify } from './index-BAkS7tJ7.js';

function html(value) {
  var html2 = String(value ?? "");
  var open = "<!---->";
  return open + html2 + "<!---->";
}
function _page($$payload) {
  let openIndex = null;
  const instructions = [
    {
      title: "Step 1: Download & Setup",
      content: `Install <u><a href="https://cm.topc.at/dl">Chromapper</a></u> and <a href="https://github.com/FallenCharlotte/ChroMapper-PropEdit/releases/tag/v0.13"><u>PropEdit</u></a>! Upon running Chromapper, head to settings -> plugins -> open plugin folder and drag PropEdit.dll in! The dll will work on all OSes! <br> <br> Set up your journal too! Don't forget to log progress when you make changes!`
    },
    {
      title: "Step 2: Pick a Song",
      content: "Choose a song you like and convert it to .ogg format. Make sure it’s properly trimmed! Find BPM/offset using ArrowVortex or any other BPM finding tool. Anything under 3 minutes would be best!"
    },
    {
      title: "Step 3: Create the Gameplay",
      content: "Use Chromapper to design the gameplay portion, map each sound to a note! Don't worry about lighting at this stage. <br><br> - Arrow notes can only be cut in the direction of the arrow <br> - Dot notes (F) can be cut in any direction <br> - Bombs cannot be hit by sabers, but player can go through <br> - Walls cannot be hit by players, but sabers can go through <br> - There should be no wall that occupies both center lanes! Those are almost impossible to dodge <br> <br> <b>FOLLOW PARITY:</b> Start with both sabers up, each downswing will be followed by an upswing. A double-directional is two downswings or two upswings in a row. Avoid this at all costs! They suck! <br><br> Make sure to have roughly equal amounts of notes for each hand! This isn't strictly enforced, but it makes your map a lot better!"
    },
    {
      title: "Step 4: The fun part!—Design the Lightshow",
      content: `First thing to do is pick an environment! My personal favourites are Panic and Timbaland (if you're using this, to go the pickaxe icon/removal in your song view, then add <code>TimbalandLogo</code>) <br><br>Select a lighting event/note, and press Shift+N to open PropEdit! This should bring up a menu with parameters you can fill in to modify the event! Stuff like ring rotation, propagation, zoom, modifying specific lights, etc! Play around with Chromapper and check out all the keybinds/features! Lots of colours and movement looks good in game. <br><br> You can also press TAB, then "Add Chroma Lights" to modify base colours, or to "paint" events with more colours! Try rainbow patterns and use a colour palette to make sure it looks good! <br><br> <b>List of basic Chroma properties</b> <br>Rotation - How much every ring rotates <br> Step - How much more each ring rotates compared to the last <br> Propogation - Creates delay between back rings and front rings <br> Speed - Total speed of event <br> Zoom - Zoom rings in or out <br> <hr> <br> Fade - Flashes and fades <br> Flash - Flashes and stays on <br> On - Turns on <br> Off - Turns off <br> Colour - Can be left, right, white, or custom (refers to colour of note) <br><br> If you need ANY help with this, send a message in #hacksaber and someone with experience will reply! If there's something you want to do, but can't figure out, ask in #hacksaber!`
    },
    {
      title: "Step 5: Submit + Journal, Feedback!",
      content: "Send a ZIP file of your map/GitHub repository to @fireentity on Slack! She will review your map and give feedback! If you're new to the mapping scene, be prepared to change some things! I want to make sure every map published is as good as it can be!"
    },
    {
      title: "Step 6: Finishing Off!",
      content: "Congratulations! A form will be sent out for you to fill regarding your prize, shipping, and map publishing!"
    }
  ];
  const each_array = ensure_array_like(instructions);
  $$payload.out.push(`<section class="min-h-screen bg-gradient-to-b from-black to-[#1c0933] py-20 px-6 text-white font-sans"><h1 class="text-center text-5xl md:text-6xl font-orbitron mb-12 font-mono">How to Hack your Saber</h1> <h1 href="/" class="text-center text-xl md:text-xl font-orbitron mb-12 font-mono"><a href="/"><u>Return home</u></a></h1> <script>
	let openIndex = null;

	function toggle(index) {
		openIndex = openIndex === index ? null : index;
	}
<\/script> <div class="mx-auto max-w-3xl space-y-6"><!--[-->`);
  for (let index = 0, $$length = each_array.length; index < $$length; index++) {
    let instruction = each_array[index];
    $$payload.out.push(`<div class="border border-white/20 rounded-lg overflow-hidden transition"><button class="flex w-full items-center justify-between bg-white/10 px-6 py-4 text-left text-xl font-semibold hover:bg-white/20 transition"><span>${escape_html(instruction.title)}</span> <svg${attr_class(`w-5 h-5 transform transition-transform duration-300 ${stringify(openIndex === index ? "rotate-180" : "")}`)} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button> `);
    if (openIndex === index) {
      $$payload.out.push("<!--[-->");
      $$payload.out.push(`<div class="bg-white/5 px-6 py-4 text-lg border-t border-white/10">${html(instruction.content)}</div>`);
    } else {
      $$payload.out.push("<!--[!-->");
    }
    $$payload.out.push(`<!--]--></div>`);
  }
  $$payload.out.push(`<!--]--></div></section>`);
}

export { _page as default };
//# sourceMappingURL=_page.svelte-CbURcy0g.js.map
