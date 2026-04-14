<template>
  <div class="card hover:scale-105 hover:shadow-[0_0_25px_rgba(255,255,255,0.7)] transition"></div>
  <div id="rdr2" class="w-full">
    <!-- Welcome Section -->
    <div class="flex flex-col items-center space-y-4">
      <img src="/Bilder/wlc.png" alt="Red Dead Redemption 1" width="300" />
      <img src="/Bilder/rdr2.logo.png" alt="Red Dead Redemption Logo" width="400" />
      <img src="/Bilder/rdr.2.0.png" alt="Red Dead Redemption 3" width="500" />
      <img src="/Bilder/rdr.2.png" alt="Red Dead Redemption 2" width="500" />
    </div>

    <br />

    <p class="text-white text-center text-lg mb-6">
      Step into a world where the Wild West stands at the edge of its final sunset.<br />
      Here, lawmen and outlaws clash, friendships are tested, and every choice carves its mark into
      history.<br />
      This is not just survival—it's a story of honor, loyalty, and betrayal written in dust and
      blood.<br />
      Saddle up, for the frontier awaits those bold enough to claim their legend.
    </p>
    <br />

    <!-- Red Dead 2 Content -->
    <div class="container">
      <div class="flex flex-col items-center space-y-4">
        <img src="/Bilder/rdr2logo.png" alt="Red Dead Redemption II" width="700" />
        <img src="/Bilder/rdr22.png" alt="Red Dead" width="700" />
      </div>

      <p class="text-white mt-4">
        America, 1899. The age of outlaws is dying, and the relentless march of civilization is
        closing in on the last vestiges of freedom. Railroads carve through the untamed wilderness,
        lawmen tighten their grip on the towns, and the world you once knew slips quietly into
        history. Yet, some still ride against the tide—bold, fearless, and bound by a code that
        defies the new order. You are Arthur Morgan, an outlaw of the Van der Linde gang, a family
        held together by brotherhood yet fractured by greed, fear, and the crushing weight of a
        world on the brink of change. Every campfire tells a story, every companion carries secrets,
        and every journey across this vast land reveals the fragile balance between loyalty and
        betrayal. Mountains rise like frozen fortresses, forests whisper with unseen dangers, and
        plains stretch endlessly under scorching skies, hiding both beauty and peril. Life on the
        trail is unforgiving. Horses must be fed and trained, weapons maintained, and provisions
        hunted or stolen. Nature itself tests your resolve: predators lurk in the shadows, storms
        can turn gentle rivers into deadly torrents, and the wilderness does not forgive the
        careless or the weak. Yet, amidst the danger, there is breathtaking beauty—sunsets that
        blaze across the horizon, snowflakes drifting silently through the mountains, and quiet
        valleys that hold a fleeting sense of peace. Every decision shapes who you are. Acts of
        mercy earn loyalty; acts of cruelty leave scars. Trust is fragile, and betrayal can come
        from the closest companion. Every gunshot carries weight. Every duel, robbery, or life
        spared—or taken—becomes a story written into the fabric of the frontier. Your choices
        resonate, shaping not just your fate, but the legacy of those who ride with you. Red Dead
        Redemption II is more than survival. It is a saga of honor, morality, and the human spirit
        in a world on the edge of extinction. It is a journey through a land alive with danger,
        beauty, and the echoes of a fading age. Ride with your gang, fight for what you believe, and
        carve your legend in a world where every horizon promises freedom—and every shadow conceals
        a threat. The frontier is vast, the stakes are high, and your story has only just begun.
      </p>
      <br />

      <!-- Red Dead Redemption II Characters -->
      <img src="/Bilder/gang.png" alt="Characters" width="800" class="mx-auto mt-6" />

      <!-- Active Card for Part 1 -->
      <div
        v-if="activeCardPart1 !== null"
        class="flex flex-col md:flex-row gap-6 mb-6 items-start mt-4"
      >
        <div
          class="card-large"
          :style="{ backgroundImage: `url(${charactersPart1[activeCardPart1].image})` }"
        ></div>
        <div class="text-white text-base md:text-lg flex-1 min-w-0">
          <h3 class="text-xl font-bold mb-2">{{ charactersPart1[activeCardPart1].name }}</h3>
          <p>{{ charactersPart1[activeCardPart1].description }}</p>
        </div>
      </div>

      <!-- Part 1 Character Cards in Grouped Rows -->
      <div class="flex flex-wrap gap-6 justify-center">
        <template v-for="(char, index) in charactersPart1" :key="index">
          <div class="text-center">
            <div
              class="card transition duration-300 hover:scale-105"
              :style="{ backgroundImage: `url(${char.image})` }"
              @click="activeCardPart1 = activeCardPart1 === index ? null : index"
            ></div>
            <p class="mt-2 font-semibold text-white">{{ char.name }}</p>
          </div>
        </template>
      </div>
    </div>

    <!-- Red Dead Redemption II Characters II -->
    <div class="container">
      <div class="flex justify-center">
        <img src="/Bilder/blood.png" alt="Characters II" width="700" />
      </div>
      <br />

      <!-- Active Card for Part 2 -->
      <div
        v-if="activeCardPart2 !== null"
        class="flex flex-col md:flex-row gap-6 mb-6 items-start mt-4"
      >
        <div
          class="card-large"
          :style="{ backgroundImage: `url(${charactersPart2[activeCardPart2].image})` }"
        ></div>
        <div class="text-white text-base md:text-lg flex-1 min-w-0">
          <h3 class="text-xl font-bold mb-2">{{ charactersPart2[activeCardPart2].name }}</h3>
          <p>{{ charactersPart2[activeCardPart2].description }}</p>
        </div>
      </div>

      <!-- Part 2 Character Cards -->
      <div class="flex flex-wrap gap-6 justify-center">
        <div v-for="(char, index) in charactersPart2" :key="index" class="text-center">
          <div
            class="card transition duration-300 hover:scale-105"
            :style="{ backgroundImage: `url(${char.image})` }"
            @click="activeCardPart2 = activeCardPart2 === index ? null : index"
          ></div>
          <p class="mt-2 font-semibold text-white">{{ char.name }}</p>
        </div>
      </div>
    </div>

    <br />

    <!-- Game Features Section -->
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
import { LazyClientOnly } from '#components';
import { ref } from 'vue';

const charactersPart1 = [
  {
    name: 'Arthur Morgan',
    image: '/Bilder/arthur.webp',
    description: `Arthur Morgan is the heartbeat of a dying age, a man carved from the wild earth and hardened by years of dust, gunfire, and broken promises. Outlaw, thief, killer—yes, but beneath the scars lies a soul that still aches for beauty. He sketches quiet rivers in his journal, admires the curve of a mountain at dawn, and finds tenderness in fleeting moments that most men in his world would never notice. Arthur is the living contradiction of the West: brutal and gentle, lost yet searching, damned but still hoping for grace.

As illness steals his strength, his vision sharpens. He sees Dutch's dream unravel into madness, and he understands at last that loyalty can be a chain as much as a virtue. With death pressing closer, Arthur chooses not despair but mercy. He helps the weak, he lifts the broken, he fights to leave behind something better than himself. His redemption is not found in grand victories, but in the quiet courage of doing right when all else is lost.

Arthur Morgan does not ride into legend as a flawless hero, nor does he vanish as a villain. He remains something truer: a man who, in his final breaths, turned his face toward the light and left behind the echo of a soul redeemed.`,
  },

  {
    name: 'Dutch Van Der Linde',
    image: '/Bilder/dutch.webp',
    description: `Dutch van der Linde—charismatic, brilliant, and dangerously magnetic—is a storm wrapped in a man. He is a dreamer, a poet of freedom, speaking of honor and loyalty even as his empire of ideals crumbles under the weight of greed and violence. Dutch moves through the world like a wildfire, brilliant and captivating, leaving behind both awe and ruin. To his gang, he is father, leader, and enigma, a man whose vision promises liberty but whose choices pull them ever closer to the edge of despair.

There is beauty in Dutch's madness, a tragic poetry in the way he spins hope from chaos, inspiring those who follow him to believe in a world that cannot exist. Yet, his heart is tangled in pride and fear, and the very loyalty he demands becomes the chains that bind him. Every gesture, every word, carries the weight of a man who once believed in goodness, now consumed by his own ambition.

Dutch van der Linde is not merely a villain or a hero; he is a living paradox—a mind that soars, a soul that fractures, a man who loved freedom so fiercely that he could not save himself, nor those who clung to his dream. In him, we see the splendor and tragedy of a world slipping away.`,
  },
  {
    name: 'John Marston',
    image: '/Bilder/john.webp',
    description: `John Marston is the quiet pulse beneath the storm of the West, a man forged by blood and loyalty, yet yearning for a life that might slip through his fingers like smoke. Once an outlaw, once a shadow in Arthur's world, John carries the weight of survival with a steadfast heart, a stubborn hope that one day, he might lay down his guns and claim something resembling peace. He is practical, loyal, and unflinching, yet beneath the rough exterior lies a tenderness reserved for his family—a fierce love that drives every choice, every sacrifice, every desperate attempt at redemption.

John walks the line between who he was and who he hopes to be, and in that tension, we see the quiet tragedy of a man trying to outrun his past. His dreams are simple, his hands calloused, his laughter rare, but his courage is unwavering. Even when betrayal and loss surround him, John moves forward, tethered to love and principle, proving that even in a cruel world, a man can fight for what is right—not for glory, but for the fragile beauty of home and family.

John Marston is not a legend written in bold strokes; he is the steady, human heartbeat that endures after the dust settles—a man defined by the quiet heroism of love, loyalty, and unyielding hope.`,
  },
  {
    name: 'Hosea Matthews',
    image: '/Bilder/hosea.webp',
    description: `Hosea Matthews is the gentle shadow in a world ablaze, a man whose wisdom is worn like a well-loved coat, softening the sharp edges of the Van der Linde gang. He is a dreamer with a grin, a schemer with a heart, a man who knows the weight of life's cruelties yet meets them with humor and quiet courage. Hosea sees the world as it is and as it could be, guiding Arthur, Dutch, and the others not with force, but with the steady hand of understanding, reminding them that loyalty is more than blind obedience—it is love, trust, and sometimes forgiveness.

He carries the grace of someone who has walked through hardship and come out kinder, whose laughter masks a soul that has learned to endure. Hosea's schemes are clever, his counsel invaluable, but it is in his gentleness, his small acts of kindness, and his unwavering belief in the people he loves that he truly shines. Even as the gang fractures and dreams turn to dust, Hosea remains a quiet compass, the voice of reason and heart in a world ruled by chaos.

Hosea Matthews is not a hero of legend, nor a man of grand gestures—he is the soul that steadies the storm, the light that flickers gently in darkness, reminding us that even amidst violence, loyalty and kindness endure.`,
  },
  {
    name: 'Micha Bell',
    image: '/Bilder/micha.webp',
    description: `Micah Bell is fire in human form, a spark that scorches everything it touches. He moves through the Van der Linde gang like a storm—charismatic, cunning, and cruel—turning loyalty into fear, friendship into betrayal. There is a poetry to his danger, a dark magnetism that draws others close even as he poisons their world. Micah thrives in chaos, seeing opportunity where others see ruin, and in his eyes burns a reckless hunger that cannot be sated by anything but control and self-interest.

He is a mirror to the gang's decay, a reminder that ambition untethered by conscience becomes poison. Yet even in his brutality, there is a strange elegance: the smoothness of his words, the cunning of his schemes, the way he moves like a predator in the wild. To those who trust him, he offers betrayal; to those who oppose him, he offers destruction.

Micah Bell is not a hero, nor a man anyone should hope to understand—he is the embodiment of the shadows that haunt the heart of the West, the storm that leaves ruin in its wake, and the chilling truth that sometimes the darkest souls walk closest among us, smiling.`,
  },
  {
    name: 'Charles Smith',
    image: '/Bilder/charles.webp',
    description: `Charles Smith is the quiet strength of the Van der Linde gang, a soul forged in the wilderness, gentle yet unyielding, like a river that carves its path through stone. He moves with a calm dignity, carrying the weight of his heritage and the scars of a world that has not always been kind, yet he meets life with courage and compassion. In battle, he is a silent guardian; in peace, a listener, a friend, a man who honors the earth and those around him with every act.

Charles embodies balance—the hunter who understands the hunted, the warrior who respects life, the man who knows the price of loyalty and pays it without complaint. His presence is grounding, a reminder that strength can be quiet, that honor can exist even in a life touched by violence. He protects, he guides, and he loves without fanfare, leaving a mark not through grandeur but through the steady, unwavering force of his heart.

Charles Smith is the soul that bridges worlds—the wild and the civilized, the fierce and the tender. He is the calm in the storm, the hand extended when all else falls away, and a living testament to the quiet power of goodness in a world that too often forgets it.`,
  },
  {
    name: 'Abigail Roberts',
    image: '/Bilder/abigail.webp',
    description: `Abigail Marston is fire and tenderness woven into one, a woman whose spirit refuses to be broken by the harshness of the world. She carries the weight of past mistakes and the burdens of family with fierce determination, yet beneath the grit is a heart that beats with unwavering love for John and Jack. Abigail knows loss, fear, and the price of survival, and she wears that knowledge like armor, protecting the fragile light of home wherever she can.

Her laughter is rare, but when it comes, it warms like sun through storm clouds; her anger is sharp, but born of loyalty and the desire to protect what matters most. Abigail is neither a saint nor a perfect mother—she is real, flawed, passionate, and resilient. Every choice she makes is colored by love and defiance, by the refusal to surrender to despair even when the world presses in.

Abigail Marston is the heartbeat of her family, a woman of fire and courage, whose life reminds us that love and strength often emerge from hardship, and that even in the darkest chapters, a fierce, unwavering spirit can light the way.`,
  },
  {
    name: 'Sadie',
    image: '/Bilder/sadie.webp',
    description: `Sadie Adler is a storm wrapped in flesh, a woman forged by loss and tempered by fire. From the ashes of tragedy, she rises fierce and unrelenting, a force that refuses to bow to fear or cruelty. Sadie's heart beats with vengeance, loyalty, and a raw, unpolished courage; she rides through the West with guns blazing, but beneath the steel and grit lies a soul that cherishes those she calls family, a woman capable of tenderness in fleeting moments between chaos.

She is freedom incarnate, untamed and unapologetic, a living proof that tragedy can awaken strength rather than destroy it. Sadie's laughter is fierce, her anger righteous, her love fiercely protective; every step she takes is a declaration that she will not be broken, not by the world, not by men, not even by her own sorrow.

Sadie Adler is the wild pulse of the West, a heroine unbound by rules, a heart that burns bright even in darkness, and a reminder that courage can be beautiful, fierce, and utterly unstoppable.`,
  },
  {
    name: 'Javier Escuella',
    image: '/Bilder/javier.webp',
    description: `Javier Escuella is fire and shadow entwined, a man whose charm masks a heart shaped by loyalty, passion, and the restless pulse of the outlaw life. He moves with a quiet intensity, the kind that lingers in the air after he leaves a room, leaving traces of wit, mischief, and a melancholy only he can carry. Javier is both a dreamer and a fighter, a man bound to Dutch's vision yet guided by his own sense of honor and camaraderie, a soul who laughs freely even as the world closes in around him.

He carries the weight of choices made in the name of survival and the ghosts of moments that cannot be undone. Yet he loves fiercely—his loyalty to his friends, his devotion to the code of the gang, and the fleeting tenderness he allows himself in moments of quiet reveal a man who is more than a gun and a promise: he is a heart navigating a world that rewards cunning but often punishes kindness.

Javier Escuella is not a legend written in grand strokes, but a life lived fully, with fire and charm, loyalty and wit—a man who reminds us that even in a life on the edge, there is poetry in loyalty, courage, and the heart's enduring pulse.`,
  },

  {
    name: 'Bill Williamson',
    image: '/Bilder/bil.webp',
    description: `Bill Williamson is raw earth and storm, a man shaped by hardship, anger, and survival. Rough, impulsive, and untamed, he moves through the world with fists and fire, a force that can protect as fiercely as it can destroy. Beneath the coarse exterior lies a loyalty that runs deep—twisted, perhaps, by pride and a desire to belong, yet unwavering in moments that demand courage. Bill is the embodiment of the outlaw life: reckless, passionate, and struggling against the chains of circumstance and his own impulses.

He laughs with a blunt sincerity, fights with brutal honesty, and loves in ways that are messy but real. Bill is not elegant, not subtle, but there is a rough poetry in his existence, a stubborn human spirit that refuses to bend entirely. He carries his burdens without grace, yet with a raw honesty that speaks of survival, brotherhood, and the desperate clinging to identity in a world that shows little mercy.

Bill Williamson is the storm in the gang, the heart that beats loud and unfiltered, a man whose flaws and ferocity are inseparable from his courage, reminding us that even the roughest souls have depth, and even the hardest lives hold their own dark beauty.`,
  },
  {
    name: 'Grimshaw',
    image: '/Bilder/grimshaw.webp',
    description: `Susan Grimshaw is the steadfast heart of the Van der Linde gang, a woman whose presence commands respect and whose courage anchors those around her. Stern yet deeply caring, she moves through the chaos of outlaw life with a quiet authority, guiding, protecting, and maintaining order when the world threatens to unravel.

Once tied to Dutch by love and shared dreams, Susan learned that loyalty is more than devotion—it is the courage to stand firm even when others falter. She cares for the gang not with softness alone, but with a sharp sense of justice and the wisdom of experience. Her laughter is rare, her words measured, yet every action bears the weight of a woman who knows the cost of survival and the value of loyalty.

In the end, Susan faces betrayal and danger with unflinching resolve, her spirit refusing to bow even as the world crumbles around her. She is not a legend of glory, but a quiet force, a woman of strength and heart whose presence leaves an enduring echo in the lives she touched and the gang she helped hold together.`,
  },
  {
    name: 'Pearson',
    image: '/Bilder/pearson.webp',
    description: `Cornelius “Pearson” is the gentle pulse beneath the Van der Linde gang, a man whose strength is measured not in guns or fire, but in care, loyalty, and quiet wisdom. He tends the camp and its people with a steady hand, turning survival into sustenance, and chaos into a semblance of order. Pearson is the heart that nourishes—his meals, his advice, his presence—all small acts that carry immense weight in a world teetering on violence and ruin.

He is patient and good-humored, yet no fool; beneath his calm exterior lies a man who understands hardship, the fragility of life, and the importance of loyalty. He is often the first to lend a hand and the last to complain, bridging the gap between the gang's ideals and the harsh reality outside.

Pearson is not the hero who rides into legend, nor the outlaw whose name echoes in fear; he is the quiet keeper of the gang's humanity, the man who reminds them that survival is not just about strength, but about care, compassion, and the bonds that hold people together.`,
  },
  {
    name: 'Uncle',
    image: '/Bilder/uncle.webp',
    description: `Uncle is the crooked smile in the shadows of the Van der Linde gang, a man whose laziness and mischief hide a heart that, in its own crooked way, belongs fiercely to the people he loves. He drifts through life with humor and indulgence, complaining, shirking, and joking, yet when danger presses, he can surprise with quiet loyalty, a touch of courage, and a stubborn refusal to abandon those he calls family.

He is both nuisance and comfort, a flawed man whose weaknesses are as visible as his rare, enduring acts of care. Uncle's world is one of small pleasures—stories, drinks, and the rare stolen moment of peace—but beneath it lies a life weathered by hardship, choices made out of survival, and a deep, if unconventional, understanding of what it means to belong.

Uncle is not a hero, nor a legend in the making; he is the crooked, human pulse of the gang, a reminder that love and loyalty can hide in unexpected forms, and that even those who seem idle or flawed can hold a quiet, enduring courage in their hearts.`,
  },
  {
    name: 'Tilly Jackson',
    image: '/Bilder/tilly.webp',
    description: `Tilly Jackson is a spark of resilience and grace in the shadowed world of the Van der Linde gang, a young woman who has known hardship yet refuses to be defined by it. Her laughter is a fragile light, her spirit a quiet rebellion against a life that has demanded too much too soon. Tilly carries her past with dignity, weaving it into strength, compassion, and a sharp intelligence that commands respect despite her gentle demeanor.

She is resourceful, brave, and loyal, offering care and friendship to those around her, often serving as a quiet voice of reason amid chaos. Yet beneath her calm and kindness is a fire that will not be subdued—a determination to survive, to protect, and to assert her own place in a world that has tried to limit her.

Tilly Jackson is not a hero sung in ballads, nor an outlaw of fearsome renown; she is a living testament to courage born of endurance, a soul that shines in quiet moments, and a reminder that even in a life of hardship, hope and strength can bloom with delicate, unyielding beauty.`,
  },
  {
    name: 'Lenny Summers',
    image: '/Bilder/lenny.webp',
    description: `Lenny Summers is the bright pulse of hope and intellect in the Van der Linde gang, a young man whose mind is as sharp as his loyalty is steadfast. Quick-witted, thoughtful, and unflinchingly brave, Lenny moves through a world hardened by violence with a spark of optimism that sets him apart. He learns fast, fights harder, and carries himself with a quiet confidence that inspires those around him, proving that courage is not measured by age or size, but by the strength of one's heart.

Despite the darkness of outlaw life, Lenny retains a sense of justice and fairness, a belief that right and wrong still matter in a world that often forgets. He laughs, he debates, he dreams—and in every action, he shows the promise of a better self, a better future, even amid chaos.

Lenny Summers is not a legend yet, nor a myth; he is the living proof that youth can hold wisdom, that courage can coexist with kindness, and that even in the roughest corners of the West, a bright, unyielding spirit can leave an indelible mark on all who know him.`,
  },
  {
    name: 'Jack Marston',
    image: '/Bilder/jack.webp',
    description: `Jack Marston is the fragile yet unyielding bloom in the aftermath of the Van der Linde gang's storm, a boy shaped by loss, longing, and the harsh lessons of a world that takes without mercy. He carries the weight of his family's legacy, the echoes of his father's courage, and the shadow of a childhood stolen too soon, yet within him burns a quiet resilience that refuses to be crushed.

Jack is thoughtful, observant, and deeply sensitive, feeling the injustices around him with a heart that aches and a mind that questions. Yet he also harbors a growing strength, a determination to understand, to survive, and perhaps one day to choose his own path in a life defined by violence and betrayal. His laughter, rare and tender, is a reminder that innocence can endure even in the darkest times, and that hope can spring from the smallest of moments.

Jack Marston is not yet a legend, nor an outlaw of renown; he is a soul in formation, a young man learning the weight of the world and the meaning of courage, whose journey whispers that even in a life shaped by tragedy, the heart can remain tender, and the spirit, unbroken.`,
  },
  {
    name: 'Straus',
    image: '/Bilder/strauss.webp',
    description: `Leopold Strauss is the quiet, calculating mind in the Van der Linde gang, a man whose calm exterior hides a complex moral compass shaped by duty, survival, and a world of hard choices. Stern and meticulous, he navigates the shadows with precision, providing the gang with the means to endure, always aware of the delicate balance between risk and reward.

Beneath his rigid demeanor lies a man shaped by his own codes, who feels the weight of debt, loyalty, and consequence more deeply than he lets on. Strauss's life is a constant negotiation between pragmatism and conscience, and though his methods are often cold, they are tempered by an underlying commitment to fairness and survival.

Leopold Strauss is not a hero in the traditional sense, nor a man of passion or impulse; he is the steady hand that keeps the gang functioning, the mind that measures each step in a dangerous world, and a reminder that courage and integrity can exist even in quiet calculation and disciplined restraint.`,
  },
  {
    name: 'Trelawny',
    image: '/Bilder/Trelawny.webp',
    description: `Josiah Trelawny is a shadowed enigma in the Van der Linde gang, a man of charm, wit, and endless secrets. He moves through the outlaw world like smoke—graceful, elusive, and unpredictable—leaving a trail of fascination wherever he goes. Trelawny is both confidant and mystery, a storyteller who speaks in riddles, a man whose loyalty is subtle but undeniable, revealed in quiet acts when danger threatens those he values.

Beneath the elegance and charm lies a mind sharpened by experience, a man who understands both the power of deception and the weight of trust. He flits between the grand and the mundane, between danger and leisure, embodying a life lived on the edge of certainty, always with a wry smile and a glimmer of audacity.

Josiah Trelawny is not a hero in the conventional sense, nor a figure carved in legend; he is the living poetry of cleverness and freedom, a reminder that charm, cunning, and quiet loyalty can leave as profound an imprint on the world as any gun or grand gesture.`,
  },

  {
    name: 'Swanson',
    image: '/Bilder/swanson.webp',
    description: `Orville “Reverend” Swanson is the quiet conscience in the Van der Linde gang, a man whose faith and gentle presence offer a fragile light in a world consumed by violence and lawlessness. Soft-spoken yet firm, he carries the weight of morality and hope, striving to guide the gang toward reflection, compassion, and redemption even when the path is obscured by chaos.

Beneath his calm demeanor lies a man who has witnessed suffering and chooses, nonetheless, to believe in the goodness that still lingers in people. Swanson's sermons, prayers, and counsel are not empty words; they are lifelines, subtle reminders that even in the darkest days, conscience, empathy, and courage can endure.

Orville Swanson is not a hero of guns or daring exploits; he is the heart of quiet resilience, the voice of conscience, and a testament to the power of faith, compassion, and steadfast hope in a world that offers little of either.`,
  },

  {
    name: 'kieran Duffy',
    image: '/Bilder/kieran.webp',
    description: `Kieran Duffy is the quiet shadow of the Van der Linde gang, a young man whose loyalty is tested by circumstance, regret, and the heavy weight of the life he was born into. Soft-spoken and often overlooked, Kieran carries a world of fear, longing, and self-doubt beneath his calm exterior, a heart yearning for redemption in a life marked by violence and betrayal.

He is gentle where the world demands brutality, cautious where recklessness tempts, and his struggles reveal the fragility and complexity of a man caught between survival and conscience. Every choice he makes bears the mark of his desire to do better, to be more than the mistakes that trail him like shadows, and to find a place where loyalty and morality can coexist.

Kieran is not a hero of grand deeds, nor a legend sung in ballads; he is a soul in quiet turmoil, a man whose journey whispers of the possibility of redemption, the weight of guilt, and the subtle courage it takes to seek a better path even when the world offers none.`,
  },
];
const activeCardPart1 = ref(null);

const charactersPart2 = [
  {
    name: `Colm O'Driscoll`,
    image: '/Bilder/colmodriscoll.webp',
    description: `Colm O'Driscoll is fire and vengeance incarnate, a man whose name strikes fear across the plains and whose presence carries the weight of ruthless ambition. He moves with cold precision, a predator honed by loyalty to his own code, unflinching in his pursuit of power and revenge. Colm embodies the harshness of the outlaw world—the unforgiving lawlessness that leaves little room for mercy, only survival and dominance.

Beneath his cruelty lies a cunning mind, a strategist who wields fear as deftly as a weapon. He is relentless, unyielding, and magnetic in his menace, commanding loyalty from those who share his vision and crushing opposition without hesitation. Yet even in his brutality, there is a strange honor—a man bound to his family, his name, and the promise of vengeance that drives him forward.

Colm O'Driscoll is not a hero, nor a man of virtue; he is the storm that tests the West, a shadow of wrath and ambition, a reminder that some lives are carved by violence, and some souls leave their mark through fear, power, and the unforgiving fire of vengeance.`,
  },
  {
    name: 'Milton',
    image: '/Bilder/milton.webp',
    description: `Edmund “Ed” Milton is the cold, unyielding hand of the law in the world of the Van der Linde gang, a man whose rigid sense of duty leaves little room for mercy or doubt. Stern, disciplined, and relentless, Milton moves like a shadow of authority, enforcing rules with a meticulous precision that both intimidates and frustrates those who cross his path.

Beneath his stern exterior lies a mind shaped by obsession and principle, a man who believes the law is absolute, even when the world itself is corrupt and cruel. Milton is relentless in pursuit, unwavering in purpose, and incapable—or perhaps unwilling—to bend for sentiment, embodying the harsh, unyielding face of justice in a land defined by chaos.

Edmund Milton is not a hero, nor a man of empathy; he is the embodiment of order's unforgiving hand, a figure who reminds the outlaw world that duty and law can be as merciless as any outlaw's bullet, and that conviction, when untempered by mercy, can carve a path as ruthless as vengeance itself.`,
  },

  {
    name: 'Rain Falls',
    image: '/Bilder/rainfalls.webp',
    description: `Rain Falls is the quiet strength of a people burdened by loss, a man whose dignity and wisdom rise like a river through the scars of displacement and sorrow. He carries the weight of his tribe's suffering with grace, navigating a world that has taken much yet demanding nothing less than resilience, honor, and hope. His words are measured, his presence calm, but beneath it lies a heart that mourns deeply and loves fiercely, a man who knows the cost of survival and the power of compassion.

He is both leader and protector, embodying patience, courage, and an unshakable commitment to his people. Even when faced with injustice, violence, or betrayal, Rain Falls chooses a path of dignity, showing that strength is not only in action but in the steadfast preservation of one's soul and values.

Rain Falls is not a hero of legend, nor a figure of fear; he is the living embodiment of resilience, wisdom, and quiet courage—a man whose life reminds us that honor and humanity endure even in the harshest of worlds.`,
  },
  {
    name: 'Eagle Flies',
    image: '/Bilder/eagleflies.webp',
    description: `Eagle Flies is the fire and hope of his people, a young warrior of the Wapiti tribe whose spirit burns with courage, honor, and the fierce desire for justice. He moves through a world that seeks to erase him and his people with the determination of a river carving stone, refusing to bow to oppression or despair. Eagle Flies is noble, steadfast, and fearless, carrying the legacy of his ancestors while dreaming of a future where his people can live with dignity and freedom.

Beneath his bravery lies a heart tender with love for his family and tribe, a soul that feels every injustice deeply yet acts with clarity and honor. He is a man whose loyalty and courage inspire, whose presence commands respect, and whose life is a testament to the enduring spirit of a people fighting to survive in a harsh and unforgiving world.

Eagle Flies is not a legend of guns or lawlessness; he is the embodiment of hope, honor, and resilience, a young man whose courage reminds us that even in the darkest times, the human spirit can soar free, unwavering, and unbroken.`,
  },
  {
    name: 'Captin Monroe',
    image: '/Bilder/captinmonroe.webp',
    description: `Captain Monroe is the iron fist of the law, a man of discipline, authority, and relentless resolve, tasked with imposing order in a world slipping further into chaos. Stern, calculating, and unwavering, he moves with the precision of a predator, pursuing those who defy him with the cold efficiency of a man who sees duty as absolute.

Beneath the rigidity lies a mind shaped by principle, a man who believes that the rule of law must be upheld at any cost, even when morality bends under the weight of circumstance. He is a figure both feared and respected, embodying the harsh truth that justice, when wielded without compromise, can be as unforgiving as the outlaws he chases.

Captain Monroe is not a hero of legend, nor a man of compassion; he is the embodiment of order's relentless hand, a stark reminder that authority can be both necessary and merciless, and that conviction, when absolute, leaves no room for mercy or hesitation.`,
  },
  {
    name: 'Angelo Bronte',
    image: '/Bilder/bronto.webp',
    description: `Angelo Bronte is a shadow of refinement and danger, a man whose elegance conceals a ruthless cunning. In the world of Red Dead Redemption 2, he moves like silk over steel—polished, persuasive, and utterly merciless to those who cross him. Bronte embodies the dark allure of power, blending charm, intellect, and cruelty in equal measure, making him as fascinating as he is feared.

He is a master manipulator, speaking in measured tones, offering promises that conceal threats, and weaving webs of influence that ensnare the unwary. Beneath the veneer of civility lies a calculating mind that thrives on control, wealth, and domination, a man who views loyalty as a commodity and betrayal as an art.

Angelo Bronte is not a hero, nor a man of honor; he is the embodiment of elegance corrupted, the dangerous whisper in high society, and a reminder that in the West, charm can be as lethal as a gunshot, and a polished smile can hide the sharpest of blades.`,
  },
  {
    name: 'Mary Linton',
    image: '/Bilder/marylinton.webp',
    description: `Mary Linton is the echo of a love that lingers, a woman whose heart carries both tenderness and quiet strength amidst the turbulence of a world ruled by violence and loss. She moves with grace and dignity, a presence that comforts and challenges, reminding John of what he once was and what he might still hope to be.

Mary's spirit is shaped by patience, empathy, and the courage to love despite uncertainty and distance. She embodies a quiet resilience, knowing when to wait and when to speak, when to guide with care and when to let life unfold. Her laughter, soft and rare, carries warmth; her words carry wisdom, and her heart carries the weight of choices made out of love and principle.

Mary Linton is not a heroine of gunfights or grand exploits; she is the living testament to enduring love, the anchor of the heart, and a reminder that even in a world marred by chaos and pain, hope, understanding, and tenderness can survive, leaving a lasting imprint on those who carry her memory.`,
  },
  {
    name: 'Sister Calderón',
    image: '/Bilder/sistercalder.webp',
    description: `Sister Calderón is a quiet beacon of faith and compassion amidst the turmoil surrounding the Van der Linde gang, a woman whose gentle presence offers solace and guidance to those lost in a world of violence and despair. She moves with humility and grace, carrying the weight of suffering she witnesses with unwavering resolve, choosing to heal where others wound, and to comfort where fear prevails.

Her heart is tender yet strong, a vessel of empathy that extends to all who seek it. She embodies patience, understanding, and courage, often risking her own safety to stand by the vulnerable, showing that true strength is not in force, but in steadfast love and moral conviction.

Sister Calderón is not a hero of guns or legend; she is the living testament to faith, hope, and the enduring power of kindness—a reminder that even in the harshest corners of the West, mercy, compassion, and courage can shine brightly and leave an enduring mark on those whose lives she touches.`,
  },
  {
    name: 'ThDownes',
    image: '/Bilder/edithdownes.webp',
    description: `Mrs. Downes is the quiet suffering and resilience of a woman bound by hardship, her life shaped by loss, poverty, and the shadow of debt. She moves through the world with weariness etched on her face, yet beneath it lies a steadfast heart that endures for the sake of her family, carrying grief and responsibility in equal measure.

She embodies the quiet courage of those who survive without recognition, navigating the cruelties of circumstance with dignity and resolve. Her love for her husband and child is tender, flawed, and painfully human, a force that drives her to protect, nurture, and persevere even when hope seems scarce.

Mrs. Downes is not a heroine of legend, nor a woman celebrated in stories; she is the living testament to endurance, maternal devotion, and the quiet strength that persists in a world indifferent to suffering, a reminder that even in the darkest moments, love and resilience can shine with a steady, enduring light.`,
  },
];
const activeCardPart2 = ref(null);

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

.feature-row {
  transition:
    background-color 0.7s ease,
    transform 0.4s ease;
  cursor: pointer;
  border-radius: 6px;
  padding: 1px;
}

.feature-row:hover {
  background-color: rgba(223, 35, 35, 0.247);
  box-shadow: 0 0 12px #ff6347;
  transform: scale(1.1);
}
</style>
