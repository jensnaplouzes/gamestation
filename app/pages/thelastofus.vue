<template>
  <div id="story" class="w-full">
    <!-- Welcome Section -->
    <div class="flex flex-col justify-center items-center">
      <img src="/Bilder/welcome.png" alt="The Last Of Us logo" width="900" class="shrink-0" />
    </div>
    <br />

    <p class="text-white text-center text-lg mb-6">
      Step into a world torn apart by tragedy and survival.<br />
      Across two unforgettable chapters, follow Joel, Ellie, and those<br />
      whose lives intertwine with theirs — each carrying stories of love, loss,<br />
      and the choices that shape humanity's last hope.<br />
      <br />
      Every choice they make, every path they take,<br />
      and every connection they forge carries the weight of survival,<br />
      shaping not just their fate but the fragile hope of a world<br />
      on the brink of extinction.<br />
      <br />
      In a world where every shadow hides danger and every heartbeat counts,<br />
      their journey becomes a testament to the resilience of the human spirit.<br />
      Through heartbreak, courage, and unlikely bonds, they discover that even<br />
      in a world crumbling to ashes, love and hope can endure.<br />
    </p>

    <br />

    <!-- Part 1 Content -->
    <div class="w-full max-w-[90%] mx-auto p-4 sm:p-8 space-y-12">
      <div class="flex justify-center">
        <img src="/Bilder/p01.png" alt="The Last of Us - Part I" width="700" />
      </div>

      <p class="text-white mt-4">
        In the world of The Last of Us, humanity didn't fall with a bang — it rotted from the inside
        out. A mutated strain of the Cordyceps fungus tore through the United States, infecting
        millions and turning them into violent, mindless husks. Civilization collapsed almost
        overnight. Governments fell. Cities were walled off into harsh quarantine zones. Outside
        them? Lawless wastelands, ruined towns, fungal forests — and worse. This is the world Joel
        Miller lives in. Joel wasn't always a smuggler. Twenty years earlier, he was just a father —
        until one gut-wrenching night, the outbreak took everything from him, including his
        daughter. What was left behind wasn't a man trying to survive. It was a man who had nothing
        left to lose. That is, until Ellie. When we meet Joel again, he's been hired to smuggle this
        foul-mouthed, scrappy teenage girl out of a heavily guarded quarantine zone. Sounds like
        just another job — until he learns that Ellie is immune. Somehow, the infection doesn't
        affect her. She could be the key to a cure. Maybe even the future of humanity. What starts
        as a simple escort mission turns into a brutal, cross-country odyssey through what's left of
        the U.S. Together, they sneak through crumbling cities, fight off infected monstrosities,
        and tangle with ruthless survivors who've long abandoned morality. Every step forward is a
        fight. But the longer Joel travels with Ellie, the more she chips away at the walls he's
        built around his heart. She's funny. Sharp. Fierce. And under all her bravado, she's just a
        kid who's grown up in a world where hope feels like a fairytale. And Joel? He starts to
        care. Maybe too much. When they finally reach the Fireflies — the rebel group that might be
        able to turn Ellie's immunity into a cure — Joel is hit with a choice no one should ever
        have to make. Saving the world means sacrificing Ellie. It means handing over the one person
        who gave his life meaning again. So Joel makes the only choice his heart can live with: He
        saves Ellie — and dooms the cure. It's not a happy ending. It's not a clean one. But it's
        real. Raw. And unforgettable.
      </p>
      <br />

      <!-- Part 1 Characters Banner -->
      <img
        src="/Bilder/character1.png"
        alt="Characters - Part I"
        width="500"
        class="mx-auto mt-6"
      />
      <br />

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
              class="card"
              :style="{ backgroundImage: `url(${char.image})` }"
              @click="activeCardPart1 = activeCardPart1 === index ? null : index"
            ></div>
            <p class="mt-2 font-semibold text-white">{{ char.name }}</p>
          </div>
        </template>
      </div>
    </div>

    <br />
    <br />

    <!-- Part 2 Content -->
    <div class="w-full max-w-[90%] mx-auto p-4 sm:p-8 space-y-2">
      <div class="flex justify-center">
        <img src="/Bilder/p02.png" alt="The Last of Us - Part II" width="700" />
      </div>
      <img src="/Bilder/story2.png" alt="The Last of Us - Part II" width="600" class="mx-auto" />
      <br />

      <p class="text-white mt-4">
        Five years have passed. Joel and Ellie, scarred by their journey but still standing, have
        carved out a new life in the peaceful town of Jackson, Wyoming. It's not perfect, but it's
        safe — a rare thing in a world still haunted by infected and humanity's worst instincts.
        Ellie's grown older, stronger, and more independent, but her bond with Joel remains
        complicated — full of love, guilt, and the weight of things left unsaid. But peace never
        lasts long in The Last of Us. Out of nowhere, a brutal act of revenge shatters everything.
        Joel is ambushed and murdered — savagely — by a stranger named Abby. To Ellie, it feels like
        her entire world is ripped away in an instant. The man who became her protector, her father
        figure, is gone… and all she can feel is fury. With nothing but rage and a thirst for
        vengeance, Ellie sets off for Seattle — a city now overrun with infected, militia factions,
        and secrets. She's not alone: Dina, her closest friend (and maybe something more), joins
        her. But the deeper Ellie goes, the more the lines between right and wrong blur. Revenge is
        never clean. Then the game flips the script. You become Abby. The very person who killed
        Joel — now you see the world through her eyes. Her pain. Her losses. Her reasons. You learn
        that Joel's past sins had devastating consequences. Her father was the Firefly surgeon Joel
        killed to save Ellie. For Abby, this isn't just violence — it's justice. And suddenly, the
        monster you thought you hated becomes... human. The game forces you to walk in both women's
        shoes, to see how trauma, loss, and vengeance twist them in parallel ways. It doesn't offer
        easy answers. Instead, it asks brutal questions: How far would you go for the people you
        love? And at what cost? By the end, Ellie has lost almost everything — her friends, her
        home, even parts of herself. She catches up with Abby, beaten and broken, ready for one last
        fight. But just as she's about to finish what she started... she stops. She lets Abby go.
        It's not victory. It's not closure. But it's something. Ellie walks away alone, missing
        fingers, haunted by memories, and unsure of what's left of her soul. The cycle of violence
        is broken — but not without a price.
      </p>
      <br />
      <br />

      <!-- Part 2 Characters Banner -->
      <img
        src="/Bilder/character2.png"
        alt="Characters - Part II"
        width="500"
        class="mx-auto mt-6"
      />
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
            class="card"
            :style="{ backgroundImage: `url(${char.image})` }"
            @click="activeCardPart2 = activeCardPart2 === index ? null : index"
          ></div>
          <p class="mt-2 font-semibold text-white">{{ char.name }}</p>
        </div>
      </div>
    </div>

    <br />

    <!-- Infected Section -->
    <div class="mt-12">
      <div class="flex flex-col justify-center items-center">
        <img src="/Bilder/human.png" alt="The Infected" width="600" class="shrink-0" />
      </div>
      <div class="flex justify-center">
        <img src="/Bilder/infecteds0.png" alt="Infecteds 0" width="300" />
      </div>
      <img src="/Bilder/infecteds1.png" alt="Infecteds 1" width="900" class="mx-auto" />
      <br />
      <br />
      <br />

      <!-- Active Infected Card -->
      <div
        v-if="activeInfected !== null"
        class="flex flex-col md:flex-row gap-6 mb-6 items-start mt-4"
      >
        <div
          class="card-large"
          :style="{ backgroundImage: `url(${infected[activeInfected].image})` }"
        ></div>
        <div class="text-white text-base md:text-lg flex-1 min-w-0">
          <h3 class="text-xl font-bold mb-2">{{ infected[activeInfected].name }}</h3>
          <p>{{ infected[activeInfected].description }}</p>
        </div>
      </div>

      <!-- Infected Cards -->
      <div class="flex flex-wrap gap-6 justify-center">
        <div v-for="(inf, index) in infected" :key="index" class="text-center">
          <div
            class="card-infected"
            :style="{ backgroundImage: `url(${inf.image})` }"
            @click="activeInfected = activeInfected === index ? null : index"
          ></div>
          <p class="mt-2 font-semibold text-white">{{ inf.name }}</p>
        </div>
      </div>
    </div>
    <br />

    <!-- Game Features Section -->
    <div class="w-full max-w-[90%] mx-auto p-4 sm:p-8">
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

const charactersPart1 = [
  {
    name: 'Joel',
    image: '/Bilder/joel2.webp',
    description: `Joel once lived a quiet life in Texas with his daughter, Sarah. Their
    days were simple — filled with laughter, love, and ordinary moments.
    But everything changed overnight. When the outbreak hit, the world
    fell apart, and in the chaos, Sarah was taken from him. That loss
    didn't just hurt — it hollowed him out. The years that followed were
    brutal. Two decades of violence, betrayal, and grief turned Joel into
    a survivor — cold, closed off, and willing to do whatever it took to
    stay alive. He learned not to trust, not to care. Love became too
    dangerous, too painful to carry. Then he met Ellie. She was supposed
    to be just a job. But she was different — smart, stubborn, funny, and
    tough in all the ways Joel had forgotten people could be. As they
    journeyed through a broken world, Ellie slowly chipped away at the
    walls he'd built. And piece by piece, Joel began to feel again — not
    just anger or fear, but something deeper. Their bond grew from
    necessity into something real. Through heartbreak and danger, Joel
    found himself becoming something he thought he'd lost forever: a
    father. Not by blood, but by choice — and with that came purpose,
    love, and a fragile kind of hope. Joel's story is one of pain,
    survival, and rediscovery. In a world that had taken everything, he
    found someone worth protecting — someone who gave him back a part of
    himself he thought was gone for good.`,
  },

  {
    name: 'Ellie',
    image: '/Bilder/ellies1.webp',
    description: `Ellie was born into a world already shattered. She never knew life
          before the outbreak — only the ruins left behind. Raised in a world of
          fear, violence, and loss, she learned early how to survive. But
          survival never hardened her completely. Beneath the toughness is a
          fierce heart still capable of love, loyalty, and wonder. What makes
          Ellie unique is her immunity to the infection — a miracle in a world
          where hope is rare. But Ellie is more than a cure. She's sharp,
          sarcastic, brave, and unflinchingly honest. She's been forced to grow
          up too fast, carrying grief no child should bear, yet she never lets
          go of that stubborn spark that sets her apart. Her journey with Joel
          changes everything. What begins as a mission becomes something far
          deeper — a bond forged in trust, pain, and the fragile love of a
          broken man and a lost girl who slowly become family. Through Joel,
          Ellie finds protection, but more importantly, she finds someone who
          sees her as more than a symbol — someone who truly cares. As Ellie
          grows, her story becomes one of identity, purpose, and the struggle to
          hold onto humanity in a world that's forgotten it. She becomes a
          fighter — strong, skilled, and determined — but also deeply emotional,
          wrestling with guilt, anger, and love. Ellie's story is about more
          than survival. It's about what it means to live — fully, painfully,
          and honestly — even when the world gives you every reason not to.`,
  },
  {
    name: 'Tess',
    image: '/Bilder/tess.webp',
    description: `Tess is a hardened survivor, pragmatic and determined. She approaches
          the brutal world around her with a no-nonsense attitude. As Joel's partner in
          smuggling, she learned early that survival demands tough choices, cunning,
          and an unwavering focus on the mission. Beneath her tough exterior, Tess carries
          a sense of loyalty and responsibility that binds her to those she trusts.
          Her pragmatism masks a heart capable of care, but the harsh realities of the
          post-apocalyptic world rarely allow it to surface. Throughout her journey,
          Tess becomes a pivotal influence on Joel, teaching him that compromise and
          sacrifice are often the only ways to navigate a shattered society. Her story
          is one of resilience, pragmatism, and unspoken courage. Tess is a survivor
          in every sense — smart, resourceful, and willing to take risks that others
          might shy away from. Even in moments of despair, she stands strong, shaping
          the path of those around her and leaving a mark that lasts beyond her own fate.`,
  },
  {
    name: 'Marlene',
    image: '/Bilder/marlene1.webp',
    description: `Marlene is the determined leader of the Fireflies, a resistance group
          fighting against the oppressive military regime FEDRA. She is
          passionate and principled, committed to restoring freedom and hope in
          a world torn apart by infection and violence. Marlene's leadership is
          marked by difficult decisions, often involving sacrifices for the
          greater good. She plays a crucial role in Ellie's life, acting as a
          protector and ultimately entrusting Ellie to Joel's care to keep her
          safe. Marlene's goal is to find a cure for the infection, and her
          actions are motivated by this hope, even if it means making painful
          choices. Her character represents the complexity of leadership in
          desperate times — balancing loyalty, hope, and harsh realities.
          Marlene is a symbol of resistance and the painful costs of fighting
          for a better future. Her story is tragic but filled with purpose,
          highlighting the sacrifices needed to protect humanity.`,
  },
  {
    name: 'Tommy',
    image: '/Bilder/tommy0.webp',
    description: `Tommy is Joel's younger brother — once a soldier, now a man searching
          for peace in a world that rarely offers it. Where Joel grew hard,
          Tommy held onto something softer: the belief that people can still
          rebuild, that community matters, and that survival doesn't have to
          come at the cost of humanity. He helps lead Jackson, one of the last
          safe havens left — a place where families can live, children can grow,
          and hope still has room to breathe. But Tommy carries his own weight
          of guilt and violence. He's no stranger to bloodshed, and the choices
          he's made still haunt him. Those memories fuel his determination to
          protect the fragile peace they've built. He loves his brother deeply,
          but their paths have often clashed. Joel chose isolation and
          pragmatism; Tommy chose connection and rebuilding. Their bond is
          strained at times, but unbreakable — forged in shared trauma and the
          loyalty of family. Even when they disagree, Tommy knows the bond they
          share is what keeps them both grounded in this broken world. Tommy's
          story is about holding onto hope without turning a blind eye to
          reality. He fights to protect what he believes in — not just safety,
          but the idea that people can still be good, even after everything
          they've lost. In a world built on ruins, Tommy dares to build
          something better — not just for himself, but for everyone who calls
          Jackson home. His quiet strength and unwavering hope make him a beacon
          for those searching for a second chance.`,
  },

  {
    name: 'Maria',
    image: '/Bilder/maria1.webp',
    description: `Maria is the respected leader of the Jackson community and Tommy's
          wife. Practical and strong, she carries the heavy responsibility of
          protecting her people in a world filled with danger and uncertainty.
          Maria works tirelessly to maintain peace and order within the town,
          making difficult decisions to keep residents safe from both external
          threats and internal conflicts. Her leadership is defined by a careful
          balance of strength and compassion, inspiring loyalty and trust from
          those who depend on her. She understands that survival isn't just
          about fighting — it's about building something lasting. Maria believes
          in community, resilience, and cooperation as the foundation for
          rebuilding a shattered world. Her character embodies hope and
          determination, showing that even in the darkest times, people can find
          ways to live with dignity, kindness, and purpose. Through her
          unwavering dedication, Maria stands as a symbol of what it means to
          protect not just life, but the future itself. Beyond her leadership,
          Maria is deeply connected to those she serves, often taking time to
          listen to their fears and hopes. She knows true strength comes from
          unity and that every voice matters in shaping the community's path
          forward. Her vision is clear: to nurture a world where her people can
          thrive, free from the shadows of the past, and empowered to create a
          brighter tomorrow.`,
  },

  {
    name: 'Bill',
    image: '/Bilder/bill.webp',
    description: `Bill is a rugged and resourceful survivalist who has endured the apocalypse
          by isolating himself from the world. In his fortified town, every trap and barricade
          reflects years of experience and ingenuity. While he appears gruff, paranoid, and brusque,
          Bill's intelligence and foresight are unmatched, making him both a formidable ally
          and a cautious friend. His life has been shaped by loss and the constant threat of danger,
          teaching him that trust must be earned and weakness cannot be tolerated.
          Despite his solitary existence, Bill possesses a subtle warmth and loyalty
          to those few he allows close. His relationship with Frank shows his hidden
          capacity for love, vulnerability, and companionship. Bill's story is one of ingenuity,
          survival, and the quiet power of human connection in a world consumed by chaos.
          He demonstrates that even the toughest exterior can hide profound depth.`,
  },

  {
    name: 'David',
    image: '/Bilder/david.webp',
    description: `David is a charismatic yet sinister figure, blending charm with danger.
          At first glance, he appears protective and composed, a man offering guidance
          and security in a harsh world. But beneath this veneer lies a calculating predator,
          willing to manipulate, deceive, and kill to achieve his goals.
          David's story is a study in the darkness that can grow in
          desperate times — the corruption of morality when survival outweighs compassion.
          His encounters with Ellie expose both his intelligence and his brutality,
          forcing players to confront fear, manipulation, and the thin line between trust and treachery.
          David's character is unsettling, layered, and serves as a haunting reminder
          that danger often comes cloaked in familiarity.`,
  },
  {
    name: 'Sarah',
    image: '/Bilder/sarah.webp',
    description: `Sarah, Joel's beloved daughter, is a brief but powerful presence in
          The Last of Us. Kind and full of life, she shares a close, loving bond
          with her father, representing the innocence of the world before the
          outbreak. On the night the crisis begins, Sarah is tragically killed
          by a soldier, a loss that shatters Joel and haunts him forever. Though
          her screen time is short, Sarah's memory shapes Joel's character
          throughout the story—fueling his bitterness, isolation, and protective
          nature toward Ellie. She symbolizes everything lost: innocence, love,
          and safety, and her death is the emotional wound driving the
          narrative.`,
  },

  {
    name: 'Henry',
    image: '/Bilder/henry.webp',
    description: `Henry is a protective and loyal older brother, willing to risk everything
          to safeguard his younger sibling, Sam. He combines physical skill with emotional depth,
          making him a capable fighter but also a compassionate caretaker.
          Henry's life has been defined by the harsh realities of a post-apocalyptic world,
          where every choice can mean life or death.
          His story is both tragic and inspiring, exploring the tension between survival and humanity.
          Henry demonstrates the weight of responsibility, the limits of hope, and the heartbreak
          that comes with trying to maintain morality in an immoral world.`,
  },

  {
    name: 'Sam',
    image: '/Bilder/sam.webp',
    description: `Sam is Henry's younger brother, bright and curious, carrying innocence into a world
          that offers little. Despite the dangers, he maintains a sense of wonder, hope, and a desire
          to do right by those he loves. Sam's story is one of vulnerability, trust, and the fleeting
          nature of innocence in a violent world. Through his bond with Henry, players experience the
          emotional stakes of familial love, responsibility, and the tragic costs of survival.
          Sam's presence illuminates the human desire for connection and the devastating
          consequences when that connection is threatened.`,
  },

  {
    name: 'Riley',
    image: '/Bilder/riley.webp',
    description: `Riley is adventurous, charismatic, and daring, embodying the spirit of youth
          in a broken world. Her friendship with Ellie is formative, exposing Ellie to trust,
          companionship, and the complex emotions of growing up amidst chaos.
          Riley balances bravery with recklessness, teaching lessons about risk, loyalty,
          and the fleeting joys of life. Her story is both poignant and bittersweet,
          capturing the essence of lost youth and the painful realities of survival.`,
  },
];

const activeCardPart1 = ref(null);

const charactersPart2 = [
  {
    name: 'Joel',
    image: '/Bilder/joel0.webp',
    description: `Joel once lived a quiet life in Texas with his daughter, Sarah. Their
    days were simple — filled with laughter, love, and ordinary moments.
    But everything changed overnight. When the outbreak hit, the world
    fell apart, and in the chaos, Sarah was taken from him. That loss
    didn't just hurt — it hollowed him out. The years that followed were
    brutal. Two decades of violence, betrayal, and grief turned Joel into
    a survivor — cold, closed off, and willing to do whatever it took to
    stay alive. He learned not to trust, not to care. Love became too
    dangerous, too painful to carry. Then he met Ellie. She was supposed
    to be just a job. But she was different — smart, stubborn, funny, and
    tough in all the ways Joel had forgotten people could be. As they
    journeyed through a broken world, Ellie slowly chipped away at the
    walls he'd built. And piece by piece, Joel began to feel again — not
    just anger or fear, but something deeper. Their bond grew from
    necessity into something real. Through heartbreak and danger, Joel
    found himself becoming something he thought he'd lost forever: a
    father. Not by blood, but by choice — and with that came purpose,
    love, and a fragile kind of hope. Joel's story is one of pain,
    survival, and rediscovery. In a world that had taken everything, he
    found someone worth protecting — someone who gave him back a part of
    himself he thought was gone for good.`,
  },

  {
    name: 'Ellie',
    image: '/Bilder/ellies.webp',
    description: `Ellie was born into a world already shattered. She never knew life
          before the outbreak — only the ruins left behind. Raised in a world of
          fear, violence, and loss, she learned early how to survive. But
          survival never hardened her completely. Beneath the toughness is a
          fierce heart still capable of love, loyalty, and wonder. What makes
          Ellie unique is her immunity to the infection — a miracle in a world
          where hope is rare. But Ellie is more than a cure. She's sharp,
          sarcastic, brave, and unflinchingly honest. She's been forced to grow
          up too fast, carrying grief no child should bear, yet she never lets
          go of that stubborn spark that sets her apart. Her journey with Joel
          changes everything. What begins as a mission becomes something far
          deeper — a bond forged in trust, pain, and the fragile love of a
          broken man and a lost girl who slowly become family. Through Joel,
          Ellie finds protection, but more importantly, she finds someone who
          sees her as more than a symbol — someone who truly cares. As Ellie
          grows, her story becomes one of identity, purpose, and the struggle to
          hold onto humanity in a world that's forgotten it. She becomes a
          fighter — strong, skilled, and determined — but also deeply emotional,
          wrestling with guilt, anger, and love. Ellie's story is about more
          than survival. It's about what it means to live — fully, painfully,
          and honestly — even when the world gives you every reason not to.`,
  },
  {
    name: 'Abby',
    image: '/Bilder/abby1.webp',
    description: `Abby is a warrior shaped by loss and driven by a fierce need for
          justice. Once the daughter of a dedicated doctor, she grew up in a
          world already fractured and dangerous. But it was the brutal death of
          her father that truly changed everything — igniting a fire of grief
          and revenge inside her that would shape her path. Fueled by that pain,
          Abby became a soldier for the Washington Liberation Front, dedicating
          herself to strength, discipline, and survival in a world where
          weakness can mean death. To many, she appears cold and ruthless — a
          relentless force defined by vengeance and hardened by battle. But
          beneath the muscle and armor is a woman wrestling with guilt, doubt,
          and the search for meaning beyond violence. As her journey unfolds,
          Abby begins to question the cost of revenge and whether true peace can
          ever come from bloodshed. She is physically powerful and skilled —
          A survivor in every sense of the word. But her greatest strength lies
          in her capacity for growth and change. Through unexpected connections
          and moments of mercy, Abby slowly begins to reclaim pieces of her lost
          humanity. Her story challenges simple labels of hero and villain,
          revealing redemption as a path earned through difficult choices and
          sacrifice. Abby's journey is one of transformation. From a soldier
          consumed by vengeance to someone seeking compassion, understanding,
          and a new kind of strength.
          In a world obsessed with survival, she dares to look beyond —
          searching for meaning, forgiveness, and a future where pain no longer
          dictates every step.`,
  },
  {
    name: 'Dina',
    image: '/Bilder/dina0.webp',
    description: `Dina is Ellie's closest friend and love interest — a rare light in a
          world full of darkness. Warm, witty, and fiercely loyal, she brings
          humor and hope to Ellie's life, offering comfort and companionship
          amid constant danger. Raised in a religious community, Dina has faced
          her own share of hardship, but she carries a spirited, hopeful heart.
          She believes in people even when the world seems determined to break
          them, and her empathy helps both her and Ellie navigate their harsh
          reality. Her relationship with Ellie is one of the emotional anchors
          in their journey. Through the violence and loss, Dina provides a
          glimpse of what a future could look like — full of love, trust, and
          normal moments. She challenges Ellie to let down her guard and embrace
          moments of joy and vulnerability, even when the world demands
          toughness. When faced with an unexpected pregnancy, Dina must wrestle
          with fear, hope, and the challenge of building a life in a broken
          world. This new chapter adds emotional complexity to her story,
          deepening her strength and resilience, and forcing her to rethink what
          survival really means. Dina's story is about love and survival, about
          finding connection when everything else feels lost. She reminds us
          that even in the darkest times, compassion and warmth can be powerful
          forms of strength — a light that can guide us through the shadows.`,
  },
  {
    name: 'Jesse',
    image: '/Bilder/jesse0.webp',
    description: `Jesse is a reliable and loyal member of the Jackson community, and one
          of Ellie's closest friends. Calm, practical, and steady, he's the kind
          of person who quietly holds things together when chaos threatens to
          unravel everything. Known for his level-headedness, Jesse often acts
          as a voice of reason during tense and difficult moments, helping guide
          others through uncertainty. Though caught in complicated personal
          situations, he never lets his emotions cloud his sense of duty or his
          commitment to those he cares about. His bravery and loyalty make him a
          steady presence in a dangerous and unpredictable world. Jesse's calm
          strength offers a grounding force for the people around him, showing
          that heroism often comes in the form of quiet reliability rather than
          grand gestures. Beyond his role as a protector and friend, Jesse
          grapples with his own fears and hopes for the future — wanting to
          build a life of peace despite the violence that surrounds him. He
          understands the fragility of the community they've built and is
          willing to fight to preserve it, even when the odds seem impossible.
          Though his story is tragically cut short, Jesse represents the unsung
          heroes who keep communities like Jackson alive and hopeful. His
          character reminds us that sometimes the strongest people are those who
          stand firm — unwavering in their support of friends and values, even
          when no one is watching.`,
  },
  {
    name: 'Owen',
    image: '/Bilder/owen0.webp',
    description: `Owen is a former Firefly and WLF soldier caught between the violence
          of his past and a deep longing for peace. Though trained for war, he
          carries a kind heart and a hopeful spirit beneath his tough exterior,
          dreaming of a life beyond endless fighting and bloodshed. His
          relationship with Abby is complicated — filled with affection,
          tension, and emotional distance — reflecting the impossible choices
          people must make in a broken world. Owen struggles to balance loyalty
          to the WLF with his desire to find a different path, one where
          violence doesn't define his future. He shows a quiet compassion,
          especially toward children and those who are innocent, revealing a
          softer side often hidden by the harshness of survival. Owen's internal
          battles highlight the human cost of war and the pain of living with
          regrets and what-ifs. Despite his hopes, Owen is often pulled back
          into conflict, trapped between loyalty to his comrades and the dream
          of a better life. This tension creates deep emotional turmoil, showing
          how difficult it is to break free from the cycle of violence. His
          story reminds us that even in the darkest times, some people hold onto
          hope — the hope that change is possible, and that peace can one day
          replace conflict. Owen's journey is about the struggle between duty
          and desire, and the courage it takes to imagine a better world, even
          when it seems out of reach. In a world that often demands hardness,
          Owen's kindness and vulnerability make him one of the more empathetic
          and relatable characters — a reminder that humanity can survive amidst
          chaos.`,
  },
  {
    name: 'Mel',
    image: '/Bilder/mel0.webp',
    description: `Mel is a skilled and compassionate nurse who works closely with the
          Washington Liberation Front (WLF). She is calm, professional, and
          deeply committed to caring for her comrades in the harsh, violent
          world they live in. Despite the constant danger and brutality around
          her, Mel maintains a sense of hope and kindness, providing a rare
          source of comfort and stability for those around her. Her relationship
          with Abby is important, as she serves not only as a medic but also as
          a trusted friend and support system. Mel's calm demeanor helps balance
          Abby's sometimes intense and driven nature. She often acts as a voice
          of reason and compassion within the group, reminding others of their
          humanity in the midst of chaos. Mel's story is one of quiet strength
          and resilience. While she may not be on the front lines of battle, her
          work is essential to the survival of her community. She faces the
          moral complexities of the war around her with empathy, and her care
          for others shows that even in dark times, kindness and healing can
          exist. Mel's character highlights the importance of medical care,
          emotional support, and loyalty in a world torn apart by violence. Her
          presence adds depth and humanity to the WLF's story, reminding us that
          survival is not just about fighting — it's also about caring for one
          another.`,
  },
  {
    name: 'Nora',
    image: '/Bilder/nora0.webp',
    description: `Nora is a smart, composed medic for the Washington Liberation Front,
          providing vital support to Abby and her comrades on dangerous
          missions. Known for her loyalty and intelligence, Nora cares deeply
          about the people around her, always putting their wellbeing above her
          own. Despite her calm exterior, Nora wrestles with the endless cycle
          of violence that defines her world. She questions the morality of the
          war her group wages, feeling the heavy weight of each life lost and
          every brutal choice made. Her encounter with Ellie becomes a pivotal
          moment, forcing Nora to confront the harsh realities of revenge and
          loss that touch both sides of the conflict. This meeting shakes her
          beliefs and highlights the personal toll that this war takes on
          everyone involved. Nora's story represents the emotional cost of
          survival and loyalty — a reminder that even the strongest people carry
          fear, pain, and regret beneath their surface. She shows that in a
          world filled with brutality, compassion and doubt can still exist,
          making her one of the more human and relatable figures in a fractured
          world. Though often overshadowed by the violence around her, Nora's
          quiet strength and moral struggle add important nuance to the story,
          revealing the difficult choices made behind the front lines. Her
          journey is about finding balance between duty and conscience — trying
          to hold onto humanity when everything else feels lost.`,
  },
  {
    name: 'Lev',
    image: '/Bilder/lev0.webp',
    description: `Lev is a courageous and compassionate teenager introduced in The Last
          of Us Part II. Born into the strict and deeply religious Seraphite
          cult, Lev was assigned female at birth but knows himself to be male —
          a truth that puts him at great risk within his community. Facing
          danger and persecution for his identity, Lev makes the difficult
          choice to escape the only home he has ever known. Alone and
          vulnerable, he must navigate a brutal world that is often hostile to
          those who don't fit its narrow expectations. In his journey, Lev forms
          a powerful and unexpected bond with Abby, finding friendship, trust,
          and a sense of family. Despite his youth, Lev is agile and skilled,
          especially with a bow, and he carries a quiet wisdom that helps steady
          those around him. Lev's story is one of self-acceptance and breaking
          free from oppression. It's about the search for belonging and the
          courage to be oneself, even when the cost is high. His character
          brings vital representation to the narrative, enriching it with themes
          of identity, resilience, and hope. Through his journey, Lev shows that
          true strength comes not just from physical skill, but from the bravery
          to live authentically and to build connections in a world that often
          demands conformity.`,
  },
  {
    name: 'Yara',
    image: '/Bilder/yara.webp',
    description: `Yara is a courageous and determined young woman shaped by both
          oppression and war. Raised within the strict Seraphite faith, she learned
          to navigate a world governed by rigid rules, often at odds with her own sense
          of morality and justice. Yara possesses a keen intelligence and strong instincts,
          making her capable of leading, surviving, and protecting those she cares for.
          Her bond with Lev highlights her empathy and courage, as she takes on
          responsibilities far beyond her years, acting as a shield and guide.
          Yara's story is one of selflessness, bravery, and the relentless pursuit of freedom,
          even in a world that seems determined to crush individuality.
          Through hardship and sacrifice, she demonstrates that leadership is not about power,
          but about protecting what truly matters.`,
  },
  {
    name: 'Isaac',
    image: '/Bilder/issac.webp',
    description: `Isaac is a calculating and disciplined WLF commander, dedicated to the survival
          and expansion of his faction. He balances tactical brilliance with moral ambiguity,
          embodying the harsh realities of leadership in a violent world.
          Isaac's story explores power, control, and the ethical compromises required
          to maintain dominance and ensure security in a fractured society.
          Through his character, the narrative examines the cost of authority
          and the human consequences of ambition.`,
  },
  {
    name: 'Manny',
    image: '/Bilder/manny.webp',
    description: `Manny is a quiet but capable WLF soldier, steadfast and competent under pressure.
          He contributes to the group's survival through diligence and practical skill,
          often acting without recognition or fanfare. Manny's story underscores the unsung heroes
          of the apocalypse, the ordinary yet essential figures whose actions sustain communities
          and ensure survival amidst danger. His character reminds players of the importance of perseverance,
          teamwork, and quiet strength.`,
  },
  {
    name: 'Dr. Jerry',
    image: '/Bilder/jerry.webp',
    description: `Jerry Anderson is a seasoned survivor with a quiet, steady presence.
          Though not often at the forefront of major events, his life reflects the struggles
          of ordinary people trying to navigate a chaotic world. He relies on resourcefulness,
          observation, and resilience to protect himself and those close to him.
          Jerry's story is one of perseverance and humility — an example of the countless lives
          shaped by the apocalypse without the glory or recognition that heroes receive.
          His experiences illustrate the small, human dramas that continue in a world
          dominated by violence, showing that courage and determination can exist even in the shadows.`,
  },
  {
    name: 'Jesse Junior',
    image: '/Bilder/jj.webp',
    description: `JJ is a minor yet memorable presence, representing the lives of
          ordinary children trying to navigate a dangerous world.
          Innocent, curious, and impressionable, JJ's experiences highlight the
          vulnerability of youth and the stakes of survival for the next generation.
          His story emphasizes the fragility of life and the importance of protection,
          care, and guidance amidst chaos.`,
  },
];

const activeCardPart2 = ref(null);

const infected = [
  {
    name: 'Runner',
    image: '/Bilder/runner.webp',
    description:
      'Runners are the earliest stage of infection. Fast, aggressive, and relentless, they swarm victims with sheer speed and numbers.',
  },
  {
    name: 'Stalker',
    image: '/Bilder/stalker.webp',
    description:
      'Stalkers are cunning and terrifying. They hide in the shadows, waiting to ambush their prey with sudden, violent attacks.',
  },
  {
    name: 'Clicker',
    image: '/Bilder/clicker.png',
    description:
      'Clickers are blind, their faces consumed by fungal growth. They hunt using echolocation, making their screeches chilling warnings of death.',
  },
  {
    name: 'Bloater',
    image: '/Bilder/bloater.png',
    description:
      'Bloaters are massive and heavily armored with fungus. They move slowly but can tear victims apart with immense strength and deadly spores.',
  },
  {
    name: 'Shambler',
    image: '/Bilder/shamblerr.webp',
    description:
      'Shamblers are grotesque infected that spew acidic spores, corroding anything nearby. They thrive in damp, dark places.',
  },
  {
    name: 'Rat King',
    image: '/Bilder/ratking.webp',
    description:
      'The Rat King is a terrifying amalgamation of multiple infected fused together. It is one of the deadliest and most grotesque monsters to emerge.',
  },
];

const activeInfected = ref(null);

const features = [
  {
    title: '🧟 Stealth',
    description: 'Use stealth tactics to avoid infected and hostile humans.',
  },
  {
    title: '🔪 Combat',
    description: 'Engage in intense close-quarters combat and brutal gunfights.',
  },
  {
    title: '🧰 Crafting',
    description: 'Scavenge for scarce supplies and craft essential items.',
  },
  {
    title: '🔓 Upgrades',
    description: 'Customize your weapons and skills to suit your playstyle - but choose wisely.',
  },
  {
    title: '🧠 Strategy',
    description: 'Use your environment, resources, and instincts to outsmart enemies.',
  },
  {
    title: '🎯 Precision',
    description: 'Master realistic weapon handling and limited resources - every shot counts.',
  },
  {
    title: '🌍 Exploration',
    description:
      'Navigate hauntingly detailed environments, from overgrown cities to abandoned homes.',
  },
  {
    title: '📖 Lore',
    description:
      "Uncover notes, recordings, and environmental clues that piece together the world's collapse",
  },
  {
    title: '🎭 Storytelling',
    description: 'Experience emotional, character-driven storytelling with cinematic depth.',
  },
  {
    title: '⚖️ Morality',
    description: 'Face difficult choices that challenge your sense of right and wrong.',
  },
];

const activeFeatures = ref(features.map(() => false));

function toggleFeature(index) {
  activeFeatures.value[index] = !activeFeatures.value[index];
}

const showText = ref(false);
</script>

<style scoped>
.card {
  width: 250px;
  height: 350px;
  border-radius: 30px;
  background-size: cover;
  background-position: center;
  cursor: pointer;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}
.card:hover {
  transform: scale(1.05);
  box-shadow: 0 0 25px rgba(255, 255, 255, 0.7);
}
.card-infected {
  width: 400px;
  height: 400px;
  border-radius: 30px;
  background-size: cover;
  background-position: top center;
  cursor: pointer;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}
.card-infected:hover {
  transform: scale(1.05);
  box-shadow: 0 0 25px rgba(255, 255, 255, 0.7);
}

.card-large {
  width: 250px;
  height: 400px;
  border-radius: 30px;
  background-size: cover;
  background-position: center;
  flex-shrink: 0;
}
.text-white {
  color: white;
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
