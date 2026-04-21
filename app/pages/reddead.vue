<template>
  <div class="card hover:scale-105 hover:shadow-[0_0_25px_rgba(255,255,255,0.7)] transition"></div>
  <div id="rdr2" class="w-full">
    <div class="flex flex-col items-center space-y-4">
      <img src="/Bilder/wlc.png" alt="Red Dead Redemption 1" width="300" />
      <img src="/Bilder/rdr2.logo.png" alt="Red Dead Redemption Logo" width="400" />
      <img src="/Bilder/rdr.2.0.png" alt="Red Dead Redemption 3" width="500" />
      <img src="/Bilder/rdr.2.png" alt="Red Dead Redemption 2" width="500" />
    </div>

    <p class="text-white text-center text-lg mb-6">
      Step into a world where the Wild West stands at the edge of its final sunset.<br />
      Here, lawmen and outlaws clash, friendships are tested, and every choice carves its mark into
      history.<br />
      This is not just survival—it's a story of honor, loyalty, and betrayal written in dust and
      blood.<br />
      Saddle up, for the frontier awaits those bold enough to claim their legend.
    </p>
    <br />
    <div class="container">
      <div class="flex flex-col items-center space-y-4">
        <img src="/Bilder/rdr2logo.png" alt="Red Dead Redemption II" width="700" />
        <img src="/Bilder/rdr22.png" alt="Red Dead" width="700" />
      </div>

      <p class="text-white mt-4">
        America, 1899. The age of outlaws is dying, and the march of civilization is closing in on
        the last vestiges of freedom. Railroads carve through the wilderness, lawmen tighten their
        grip on towns, and the world you knew slips quietly into history. Yet, some still ride
        against the tide—bold, fearless, and bound by a code that defies the new order. You are
        Arthur Morgan, an outlaw of the Van der Linde gang, a family fractured by greed, fear, and
        the weight of a world on the brink of change. Life on the trail is unforgiving. Horses must
        be fed, weapons maintained, and provisions hunted or stolen. Nature tests your
        resolve—predators lurk, storms rage, and the wilderness does not forgive the careless. Yet,
        amidst danger, there is beauty—sunsets that blaze across the horizon, snowflakes drifting
        through the mountains, and valleys that hold fleeting peace. Every decision shapes who you
        are. Mercy earns loyalty; cruelty leaves scars. Trust is fragile, and betrayal may come from
        the closest companion. Every gunshot carries weight, every duel, robbery, or life taken or
        spared, becomes part of your story. Red Dead Redemption II is more than survival. It is a
        saga of honor, morality, and the human spirit in a world on the edge of extinction. Ride
        with your gang, fight for what you believe, and carve your legend in a world where every
        horizon promises freedom—and every shadow conceals a threat.
      </p>
      <br />
      <img src="/Bilder/gang.png" alt="Characters" width="800" class="mx-auto mt-6" />
      <div
        v-if="activeCardreddead !== null"
        class="flex flex-col md:flex-row gap-6 mb-6 items-start mt-4"
      >
        <div
          class="card-large"
          :style="{ backgroundImage: `url(${charactersreddead[activeCardreddead].image})` }"
        ></div>
        <div class="text-white text-base md:text-lg flex-1 min-w-0">
          <h3 class="text-xl font-bold mb-2">{{ charactersreddead[activeCardreddead].name }}</h3>
          <p>{{ charactersreddead[activeCardreddead].description }}</p>
        </div>
      </div>

      <div class="flex flex-wrap gap-6 justify-center">
        <template v-for="(char, index) in charactersreddead" :key="index">
          <div class="text-center">
            <div
              class="card transition duration-300 hover:scale-105"
              :style="{ backgroundImage: `url(${char.image})` }"
              @click="activeCardreddead = activeCardreddead === index ? null : index"
            ></div>
            <p class="mt-2 font-semibold text-white">{{ char.name }}</p>
          </div>
        </template>
      </div>
    </div>

    <div class="container">
      <div class="flex justify-center">
        <img src="/Bilder/blood.png" alt="Characters II" width="700" />
      </div>
      <br />

      <div
        v-if="activeCardreddead2 !== null"
        class="flex flex-col md:flex-row gap-6 mb-6 items-start mt-4"
      >
        <div
          class="card-large"
          :style="{ backgroundImage: `url(${charactersreddead2[activeCardreddead2].image})` }"
        ></div>
        <div class="text-white text-base md:text-lg flex-1 min-w-0">
          <h3 class="text-xl font-bold mb-2">{{ charactersreddead2[activeCardreddead2].name }}</h3>
          <p>{{ charactersreddead2[activeCardreddead2].description }}</p>
        </div>
      </div>

      <div class="flex flex-wrap gap-6 justify-center">
        <div v-for="(char, index) in charactersreddead2" :key="index" class="text-center">
          <div
            class="card transition duration-300 hover:scale-105"
            :style="{ backgroundImage: `url(${char.image})` }"
            @click="activeCardreddead2 = activeCardreddead2 === index ? null : index"
          ></div>
          <p class="mt-2 font-semibold text-white">{{ char.name }}</p>
        </div>
      </div>
    </div>
    <br />
    <div class="container">
      <div>
        <img src="/Bilder/features.png" alt="Game Features" width="300" />
        <br />
      </div>
      <div class="space-y-4">
        <div
          v-for="(feature, index) in features"
          :key="index"
          class="feature-row p-4 text-white"
          @click="toggleFeature(index)"
        >
          <p class="font-bold text-lg">{{ feature.title }}</p>
          <p v-if="activeFeatures[index]" class="mt-1">{{ feature.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const charactersreddead = [
  {
    name: 'Arthur Morgan',
    image: '/Bilder/arthur.webp',
    description: `Arthur Morgan is a man shaped by the wild, hardened by years of dust, gunfire, and broken promises. Outlaw, thief, killer—yet beneath the scars lies a soul that still yearns for beauty. He sketches rivers, admires mountains at dawn, and finds tenderness in fleeting moments most men overlook. Brutal and gentle, lost yet searching, he is the contradiction of the West.
As illness weakens him, Arthur sees Dutch's dream unravel. With death nearing, he chooses mercy over despair. He helps the weak, fights for a better legacy, and finds redemption in the quiet courage to do right when all else is lost.`,
  },

  {
    name: 'Dutch Van Der Linde',
    image: '/Bilder/dutch.webp',
    description: `Dutch van der Linde is a charismatic, brilliant, and dangerous man, a storm wrapped in human form. A dreamer, poet of freedom, he speaks of honor and loyalty while his empire of ideals crumbles under greed and violence. To his gang, he is father, leader, and enigma—promising liberty but pulling them toward despair.

There is beauty in his madness, a tragic poetry in how he spins hope from chaos, inspiring followers to believe in an impossible world. Yet, his pride and fear trap him, and the loyalty he demands becomes his chains. Dutch is neither hero nor villain, but a paradox—a man who loved freedom so fiercely he could not save himself or those who believed in his dream.`,
  },
  {
    name: 'John Marston',
    image: '/Bilder/john.webp',
    description: `John Marston is the quiet pulse beneath the storm of the West, a man shaped by blood and loyalty, yet yearning for peace. Once an outlaw, he now carries the weight of survival with a steadfast heart and a stubborn hope to lay down his guns. Practical, loyal, and unflinching, he hides a tenderness for his family—a fierce love that drives every choice and sacrifice.
John walks the line between his past and his hope for redemption. His dreams are simple, but his courage unwavering. Even in the face of betrayal and loss, he moves forward, driven by love and principle. John is not a bold legend, but a steady heartbeat of love, loyalty, and hope in a cruel world.`,
  },
  {
    name: 'Hosea Matthews',
    image: '/Bilder/hosea.webp',
    description: `Hosea Matthews is the gentle presence in a world ablaze, a man whose wisdom softens the sharp edges of the Van der Linde gang. A dreamer with a grin and a schemer with a heart, he faces life's cruelties with humor and quiet courage. Hosea guides Arthur, Dutch, and the others not with force, but with understanding, teaching them that loyalty is love, trust, and sometimes forgiveness.

Having endured hardship, his kindness shines through. His clever schemes and wise counsel are invaluable, but it's his gentle nature and unwavering belief in his loved ones that define him. Even as the gang fractures, Hosea remains the steady voice of reason, a quiet light in a chaotic world. He is not a legend, but the soul that steadies the storm, reminding us that loyalty and kindness endure.`,
  },
  {
    name: 'Micha Bell',
    image: '/Bilder/micha.webp',
    description: `Micah Bell is fire in human form, a spark that scorches everything it touches. Charismatic, cunning, and cruel, he turns loyalty into fear and friendship into betrayal. He thrives in chaos, seeing opportunity where others see ruin, driven by a hunger for control and self-interest.

A mirror to the gang's decay, Micah embodies ambition untethered by conscience. Even in his brutality, there's an unsettling elegance: smooth words, cunning schemes, and a predatory grace. To those who trust him, he offers betrayal; to those who oppose him, destruction.

Micah is not a hero, but the storm that leaves ruin in its wake—the darkest soul, smiling, walking closest among us.`,
  },
  {
    name: 'Charles Smith',
    image: '/Bilder/charles.webp',
    description: `Charles Smith is the quiet strength of the Van der Linde gang, shaped by the wilderness—gentle yet unyielding. He faces life with courage and compassion, carrying the scars of a harsh world. In battle, he's a silent protector; in peace, a friend and listener.
Charles embodies balance—a warrior who respects life and values loyalty. His presence is grounding, proving that strength can be quiet and honor can exist even in violence. He is a steady force of goodness, bridging the wild and civilized, fierce yet tender.`,
  },
  {
    name: 'Abigail Roberts',
    image: '/Bilder/abigail.webp',
    description: `Abigail Marston is a blend of fire and tenderness, her spirit unbroken by life's hardships. She carries past mistakes and family burdens with fierce determination, but beneath it all is a heart full of love for John and Jack. Her knowledge of loss and fear is her armor, protecting her family's fragile light.
Her laughter is rare but warming, her anger sharp and driven by loyalty. Abigail is real—flawed, passionate, and resilient. Every choice she makes is guided by love, defiance, and a refusal to surrender to despair.
Abigail is the heartbeat of her family, a woman whose courage shows that love and strength emerge from hardship, lighting the way even in darkness.`,
  },
  {
    name: 'Sadie',
    image: '/Bilder/sadie.webp',
    description: `Sadie Adler is a storm of strength, forged by loss and tempered by fire. Rising from tragedy, she's a fierce, unrelenting force who refuses to bow to fear or cruelty. With vengeance in her heart and raw courage in her soul, Sadie rides through the West with guns blazing, yet beneath her grit is a woman who cherishes her family and holds tenderness in fleeting moments.
She embodies freedom—untamed, unapologetic, and proof that tragedy can awaken strength. Sadie's laughter is fierce, her anger righteous, and her love protective. Every step she takes declares she will not be broken, not by the world, men, or her own sorrow.
Sadie Adler is the wild pulse of the West, a heroine unbound by rules, a heart that burns bright in darkness, and a reminder that courage can be both beautiful and unstoppable.`,
  },
  {
    name: 'Javier Escuella',
    image: '/Bilder/javier.webp',
    description: `Javier Escuella is a blend of fire and shadow, his charm masking a heart shaped by loyalty, passion, and the outlaw life. A dreamer and fighter, he's bound to Dutch's vision but guided by his own honor. Javier carries the weight of past choices but loves fiercely, loyal to his friends and the gang, with moments of tenderness revealing his deeper nature.

His life isn't one of grand legends but lived fully with fire, loyalty, and wit—a reminder that even on the edge, there's poetry in courage, loyalty, and a heart that endures.`,
  },

  {
    name: 'Bill Williamson',
    image: '/Bilder/bil.webp',
    description: `Bill Williamson is raw earth and storm, shaped by hardship and survival. Impulsive and untamed, he's both fiercely protective and destructive. Beneath his rough exterior is deep loyalty, driven by pride and a need to belong.

Bill laughs bluntly, loves messily, and fights with brutal honesty. He's not subtle, but his life holds a rough poetry—a stubborn spirit that refuses to break. Bill is the storm in the gang, a reminder that even the hardest souls have depth and beauty.`,
  },
  {
    name: 'Grimshaw',
    image: '/Bilder/grimshaw.webp',
    description: `Susan Grimshaw is the steady heart of the Van der Linde gang, guiding and protecting with quiet authority. Stern yet caring, she values loyalty and justice, standing firm when others falter.
Her rare laughter and measured words reflect her wisdom and the weight of survival. Susan faces betrayal with unwavering resolve, leaving a lasting impact on those she protected and the gang she kept together.`,
  },
  {
    name: 'Pearson',
    image: '/Bilder/pearson.webp',
    description: `Cor "Pearson" is the gentle pulse of the Van der Linde gang, his strength found in care, loyalty, and quiet wisdom. He nourishes the camp, turning chaos into order and survival into sustenance.

Patient and good-humored, Pearson understands hardship and the importance of loyalty. He's the first to help and the last to complain, bridging the gap between ideals and harsh reality.

Not a legend or feared outlaw, Pearson is the quiet keeper of the gang's humanity, reminding them that survival is about care, compassion, and the bonds that hold them together.`,
  },
  {
    name: 'Uncle',
    image: '/Bilder/uncle.webp',
    description: `Uncle is the mischievous, lazy heart of the Van der Linde gang, whose humor hides a deep loyalty to those he loves. Though often shirking responsibility, he surprises with quiet courage when it matters.
A flawed but caring man, Uncle's world revolves around small pleasures, shaped by hardship and survival. He's not a hero, but a reminder that love and loyalty can come in unexpected forms, and even the flawed have quiet courage.`,
  },
  {
    name: 'Tilly Jackson',
    image: '/Bilder/tilly.webp',
    description: `Tilly Jackson is a spark of resilience and grace in the Van der Linde gang, shaped by hardship but unbroken by it. Her laughter is fragile, and her spirit a quiet rebellion against a harsh world. With strength, compassion, and sharp intelligence, she commands respect despite her gentle demeanor.
Resourceful, brave, and loyal, Tilly is a voice of reason amid chaos. Beneath her calm is a fire—an unyielding determination to survive and protect her place in the world.
Not a legend or feared outlaw, Tilly is a testament to courage, showing that even in hardship, hope and strength can bloom with delicate beauty.`,
  },
  {
    name: 'Lenny Summers',
    image: '/Bilder/lenny.webp',
    description: `Lenny Summers is the bright pulse of hope and intellect in the Van der Linde gang. Quick-witted, brave, and loyal, he moves through a violent world with optimism, inspiring others with his quiet confidence and proving that courage comes from the heart, not age or size.

Lenny holds onto a sense of justice, believing right and wrong still matter. Though not yet a legend, he shows that youth can hold wisdom, and kindness can coexist with courage, leaving a lasting impact on those around him.`,
  },
  {
    name: 'Jack Marston',
    image: '/Bilder/jack.webp',
    description: `Jack Marston is the fragile yet resilient bloom in the aftermath of the Van der Linde gang's storm. Shaped by loss and the harsh lessons of life, he carries the weight of his family's legacy and the shadow of a childhood stolen too soon. Yet within him burns a quiet strength that refuses to be crushed.

Thoughtful, sensitive, and questioning, Jack feels the injustices around him with a heart that aches. Though not yet a legend or feared outlaw, he is a young man learning the weight of the world, holding onto hope, and growing in determination to one day carve his own path.`,
  },
  {
    name: 'Straus',
    image: '/Bilder/strauss.webp',
    description: `Leopold Strauss is the calculating mind of the Van der Linde gang, providing the means to survive with precision and pragmatism. Stern and meticulous, he balances risk and reward while feeling the weight of debt, loyalty, and consequence more deeply than he shows.
Though cold in his methods, Strauss is committed to fairness and survival. He is not a hero, but the steady hand that keeps the gang functioning, embodying courage and integrity through quiet calculation and restraint.`,
  },
  {
    name: 'Trelawny',
    image: '/Bilder/Trelawny.webp',
    description: `Josiah Trelawny is a charming, elusive figure in the Van der Linde gang, a man of secrets and subtle loyalty. Graceful and unpredictable, he moves through the outlaw world with wit and a quiet sense of duty to those he values.

Beneath his charm lies a sharp mind, balancing deception and trust. Trelawny is not a hero or legend, but a reminder that cleverness, charm, and quiet loyalty can leave a lasting mark as deeply as any grand gesture.`,
  },

  {
    name: 'Swanson',
    image: '/Bilder/swanson.webp',
    description: `Orville “Reverend” Swanson is the quiet conscience of the Van der Linde gang, offering faith and guidance in a world of violence. Soft-spoken yet firm, he leads with compassion and hope, striving for redemption even amid chaos.

Beneath his calm demeanor, Swanson believes in the goodness of people, using his sermons and counsel as lifelines. Not a hero of action, he is the heart of resilience, embodying faith, compassion, and hope in a world that offers little of either.`,
  },

  {
    name: 'kieran Duffy',
    image: '/Bilder/kieran.webp',
    description: `Kieran Duffy is the quiet shadow of the Van der Linde gang, a young man torn by fear, regret, and the weight of his past. Soft-spoken and often overlooked, he longs for redemption in a world of violence.
Gentle where others are brutal, cautious where others are reckless, Kieran struggles between survival and conscience. Not a hero of grand deeds, he is a soul seeking redemption, a man quietly fighting to be more than his mistakes.`,
  },
];
const activeCardreddead = ref(null);

const charactersreddead2 = [
  {
    name: `Colm O'Driscoll`,
    image: '/Bilder/colmodriscoll.webp',
    description: `Colm O'Driscoll is fire and vengeance incarnate, a man whose name strikes fear and whose presence exudes ruthless ambition. A cold, precise predator, he relentlessly pursues power and revenge, commanding loyalty through fear.
Beneath his cruelty lies a cunning strategist, driven by family and vengeance. Colm is no hero, but a storm of wrath and ambition, leaving his mark through violence and unforgiving revenge.`,
  },
  {
    name: 'Milton',
    image: '/Bilder/milton.webp',
    description: `Edmund “Ed” Milton is the cold, unyielding hand of the law, driven by a strict sense of duty. Stern and relentless, he enforces rules with precision, unbending in his pursuit of justice.

Shaped by obsession and principle, Milton embodies the harsh face of order in a chaotic world. Not a hero, but a reminder that law, unchecked by mercy, can be as ruthless as any outlaw’s bullet.`,
  },

  {
    name: 'Rain Falls',
    image: '/Bilder/rainfalls.webp',
    description: `Rain Falls is the quiet strength of his people, carrying the weight of loss with dignity and wisdom. Calm and measured, he mourns deeply but loves fiercely, embodying resilience, honor, and compassion.
As a leader and protector, he shows that true strength lies in preserving one’s values, even in the face of injustice. Rain Falls is not a legendary hero, but a living testament to resilience, wisdom, and quiet courage in a harsh world.`,
  },
  {
    name: 'Eagle Flies',
    image: '/Bilder/eagleflies.webp',
    description: `Eagle Flies is the fire and hope of his people, a young warrior driven by courage, honor, and a fierce desire for justice. He stands unwavering against oppression, carrying the legacy of his ancestors while dreaming of freedom and dignity for his people.
Beneath his bravery lies deep love for his family, acting with clarity and honor in the face of injustice. Eagle Flies embodies hope, resilience, and the unbroken spirit of his people, reminding us that even in dark times, the human spirit can soar.`,
  },
  {
    name: 'Captin Monroe',
    image: '/Bilder/captinmonroe.webp',
    description: `Captain Monroe is the iron fist of the law, disciplined and unyielding in his pursuit of order. Stern and calculating, he believes duty must be upheld at any cost, even when morality bends.
Feared and respected, he embodies the harsh truth that uncompromising justice can be as merciless as the outlaws he chases. Monroe is a reminder that authority, when absolute, leaves no room for mercy.`,
  },
  {
    name: 'Angelo Bronte',
    image: '/Bilder/bronto.webp',
    description: `Angelo Bronte is a man of elegance and ruthless cunning, blending charm, intellect, and cruelty. A master manipulator, he controls with promises that hide threats, using loyalty as a commodity.
Not a hero, Bronte embodies corrupted elegance, proving that in the West, charm can be as lethal as a gunshot, and a smile can conceal danger.`,
  },
  {
    name: 'Mary Linton',
    image: '/Bilder/marylinton.webp',
    description: `Mary Linton is a quiet strength amidst chaos, embodying tenderness, patience, and resilience. She reminds John of who he was and what he might still be.
Her love is steadfast, offering warmth and wisdom, and though not a heroine of gunfights, Mary is a lasting testament to enduring love and hope in a world of pain.`,
  },
  {
    name: 'Sister Calderón',
    image: '/Bilder/sistercalder.webp',
    description: `Sister Calderón is a beacon of faith and compassion, offering solace in the turmoil of the Van der Linde gang. Humble and graceful, she heals and comforts, embodying empathy and courage.
Not a hero of guns, she is a testament to faith, hope, and kindness, proving that even in the harshest world, mercy and love can leave a lasting impact.`,
  },
  {
    name: 'Mrs. Downes',
    image: '/Bilder/edithdownes.webp',
    description: `Mrs. Downes is a woman shaped by loss and hardship, enduring for her family with quiet strength. Her love is tender and fierce, driving her to protect and persevere despite overwhelming challenges.
Not a legend, she embodies endurance, maternal devotion, and resilience in a world that often overlooks suffering.`,
  },
];
const activeCardreddead2 = ref(null);

const features = [
  {
    title: '🌄 Open World',
    description: 'Explore a massive, living world full of dynamic weather, wildlife, and towns.',
  },
  {
    title: '🐎 Horseback Riding',
    description: 'Ride, bond with, and customize your horse to traverse the vast landscapes.',
  },
  {
    title: '🔫 Combat',
    description: 'Engage in intense gunfights, duels, and melee combat with realistic mechanics.',
  },
  {
    title: '🧰 Crafting & Hunting',
    description: 'Hunt wildlife, gather resources, and craft food, tonics, and equipment.',
  },
  {
    title: '🎯 Precision & Dead Eye',
    description: 'Use the Dead Eye system to slow time and target enemies with deadly accuracy.',
  },
  {
    title: '🌍 Exploration',
    description:
      'Discover diverse regions from snowy mountains to swamps, each with secrets and side quests.',
  },
  {
    title: '🎭 Storytelling',
    description:
      'Experience a deep, emotional narrative centered on loyalty, redemption, and survival.',
  },
  {
    title: '⚖️ Morality & Choices',
    description:
      'Shape your reputation through decisions that affect how NPCs and the world react to you.',
  },
  {
    title: '🤝 Gang Life & Relationships',
    description: 'Interact with the Van der Linde gang, build relationships, and manage camp life.',
  },
  {
    title: '📖 Lore & Side Missions',
    description:
      'Engage with rich side stories, stranger missions, and environmental storytelling.',
  },
];

const activeFeatures = ref(features.map(() => false));

function toggleFeature(index) {
  activeFeatures.value[index] = !activeFeatures.value[index];
}

const showText = ref(false);
</script>

<style scoped>
@reference "@/assets/css/main.css";
.card {
  width: 200px;
  height: 300px;
  border-radius: 30px;
  background-size: cover;
  background-position: center;
  cursor: pointer;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.card-large {
  width: 250px;
  height: 400px;
  border-radius: 30px;
  background-size: cover;
  background-position: center;
  flex-shrink: 0;
}
</style>
