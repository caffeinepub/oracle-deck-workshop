export interface LessonSection {
  title: string;
  content: string;
}

export interface Lesson {
  number: number;
  title: string;
  objective: string;
  sections: LessonSection[];
}

export const LESSONS: Lesson[] = [
  {
    number: 1,
    title: "Strength",
    objective:
      "Explore strength in its many forms — physical, emotional, and spiritual — and begin translating that energy into your card.",
    sections: [
      {
        title: "Symbol Exploration",
        content:
          "Begin in the Hub by exploring animals that represent strength. Notice qualities like power, courage, and resilience. From there, expand your thinking. What other symbols represent strength to you? This could be something personal or universal — mountains, trees, roots, armor, shields, or something entirely your own.\n\nTake a moment to notice what resonates. Which symbol feels most aligned with your definition of strength?\n\nAs you explore, consider:\n• What does external strength look like?\n• What does internal strength feel like?\n• How might your symbol reflect one — or both?",
      },
      {
        title: "Visual Elements",
        content:
          "Begin sketching your card. Focus on form, posture, and presence.\n\nWhat does strength look like? Is it grounded and still? Upright and steady? Ready and alert? Explore your composition and allow the energy to guide you.\n\nColor palette: deep tones, earth colors, warm, strong shades\nTexture ideas: bark, stone, fur, muscle — anything that feels durable and rooted\n\nMotif ideas (optional):\nMountains · roots · armor · shields · fire · pillars · hands\n\nLet your visual choices support the feeling of strength, not just the idea of it.",
      },
      {
        title: "Voice & Meaning",
        content:
          "Now, imagine your card has a voice. If it could speak, what would it say? What kind of presence does it hold? This card is not rushed — it is steady, grounded, and supportive.\n\nYou might explore:\n\u201cI remind you of your inner strength.\u201d\n\u201cYou are more capable than you feel.\u201d\n\u201cStand steady.\u201d\n\u201cStrength can be quiet.\u201d\n\nLet the voice emerge naturally from the symbol and the image you've created.",
      },
      {
        title: "Reflection",
        content:
          "Take a few moments to journal:\n\n• Where do I feel strength in my life?\n• Where do I need it right now?\n• What kind of strength do I rely on most — external or internal?\n\nIf it feels supportive, reflect on how this card fits into your growing deck. What role does it play in the larger story you are creating?",
      },
    ],
  },
  {
    number: 2,
    title: "Courage",
    objective:
      "Explore courage as action in the presence of fear — and translate that brave, forward-moving energy into your card.",
    sections: [
      {
        title: "Symbol Exploration",
        content:
          "Begin in the Hub by exploring animals associated with courage — those that act, protect, or move forward despite risk. Then expand beyond animals. What symbols represent courage to you? This might include fire, swords, open paths, rising suns, or stepping stones.\n\nCourage is not the absence of fear — it is movement through it.\n\nAs you explore, consider:\n• What does courage feel like in your body?\n• When have you acted despite fear?\n• Is your courage loud and bold, or quiet and steady?\n\nChoose a symbol that reflects your experience of bravery.",
      },
      {
        title: "Visual Elements",
        content:
          "Begin sketching with a focus on motion and direction. Courage often leans forward — stepping, reaching, advancing.\n\nColor palette: warm tones, bold contrasts, energizing hues\nTexture ideas: flame, wind, movement lines, upward forms\n\nMotif ideas (optional):\nFire · paths · rising shapes · open doors · light breaking through\n\nLet your composition feel active — something is being faced or moved toward.",
      },
      {
        title: "Voice & Meaning",
        content:
          "Imagine your card speaking with encouragement and strength. This voice does not remove fear — it supports action.\n\nYou might explore:\n\u201cFeel the fear and move anyway.\u201d\n\u201cYou are braver than you think.\u201d\n\u201cTake the next step.\u201d\n\u201cCourage begins here.\u201d\n\nLet the tone feel empowering and forward-moving.",
      },
      {
        title: "Reflection",
        content:
          "Take a few moments to journal:\n\n• Where am I being asked to be courageous?\n• What fear am I currently facing?\n• What would one brave step look like?\n\nConsider how this card supports your deck. Does it activate? Encourage? Initiate movement?",
      },
    ],
  },
  {
    number: 3,
    title: "Intuition",
    objective:
      "Explore intuition as inner knowing, trust, and the quiet guidance that lives beneath rational thought — and translate that subtle, sensing energy into your card.",
    sections: [
      {
        title: "Symbol Exploration",
        content:
          "Begin in the Hub by exploring animals associated with intuition — those known for heightened senses, inner guidance, or quiet wisdom. Then expand outward. What symbols represent intuition to you? This might include eyes, moons, spirals, water, or soft light.\n\nIntuition is felt, not reasoned.\n\nAs you explore, consider:\n• When do I most trust my intuition?\n• How does it feel in my body when I \u201cjust know\u201d?\n• What interferes with my ability to listen inward?\n\nChoose a symbol that reflects inner sensing and quiet trust.",
      },
      {
        title: "Visual Elements",
        content:
          "Begin sketching with softness and depth. Your composition may feel quiet, luminous, or layered.\n\nColor palette: deep blues, silvers, soft purples, moonlit tones\nTexture ideas: water, mist, soft gradients, translucent layers\n\nMotif ideas (optional):\nMoons · eyes · spirals · still water · soft light\n\nLet your image feel receptive and inward-turning.",
      },
      {
        title: "Voice & Meaning",
        content:
          "Imagine your card speaking with a soft, certain voice. This voice knows without explaining.\n\nYou might explore:\n\u201cYou already know.\u201d\n\u201cTrust what you feel.\u201d\n\u201cListen inward.\u201d\n\u201cYour inner knowing is real.\u201d\n\nLet the tone feel calm and assured.",
      },
      {
        title: "Reflection",
        content:
          "Take a few moments to journal:\n\n• When do I trust my intuition most easily?\n• What gets in the way of listening to myself?\n• What is my intuition telling me right now?\n\nConsider how this card functions in your deck. Does it listen? Sense? Guide quietly?",
      },
    ],
  },
  {
    number: 4,
    title: "Wisdom",
    objective:
      "Explore wisdom as lived knowledge, perspective, and deep understanding — and translate that grounded awareness into your card.",
    sections: [
      {
        title: "Symbol Exploration",
        content:
          "Begin in the Hub by exploring animals associated with wisdom — those connected to observation, age, or quiet knowing. Then expand outward. What symbols represent wisdom to you? This might include books, trees, lanterns, elders, spirals, or layered paths.\n\nWisdom is not just knowledge — it is experience integrated over time.\n\nAs you explore, consider:\n• What experiences have shaped your understanding?\n• What does \u201cknowing\u201d feel like versus \u201clearning\u201d?\n• Is your wisdom quiet, guiding, or watchful?\n\nChoose a symbol that reflects depth and perspective.",
      },
      {
        title: "Visual Elements",
        content:
          "Begin sketching with a focus on stillness and presence. Wisdom often feels grounded, steady, and aware.\n\nColor palette: earthy tones, deep neutrals, muted golds\nTexture ideas: wood grain, aged surfaces, layered patterns\n\nMotif ideas (optional):\nLanterns · trees · spirals · books · circles · eyes\n\nLet your image feel rooted and observant.",
      },
      {
        title: "Voice & Meaning",
        content:
          "Imagine your card speaking with calm clarity. This voice does not rush — it understands.\n\nYou might explore:\n\u201cYou already hold the answer.\u201d\n\u201cReflect before acting.\u201d\n\u201cThere is learning here.\u201d\n\u201cTrust your experience.\u201d\n\nLet the tone feel grounded and thoughtful.",
      },
      {
        title: "Reflection",
        content:
          "Take a few moments to journal:\n\n• What have I learned through experience?\n• Where am I being asked to slow down and reflect?\n• What wisdom am I ready to trust?\n\nConsider this card's role in your deck. Is it a guide? A teacher? A pause?",
      },
    ],
  },
  {
    number: 5,
    title: "Community / Teamwork",
    objective:
      "Explore connection, collaboration, and shared effort — and translate collective energy into your card.",
    sections: [
      {
        title: "Symbol Exploration",
        content:
          "Begin in the Hub by exploring animals that represent community or teamwork. Then expand outward. What symbols represent connection to you? This might include circles, hands, woven threads, groups, or shared spaces.\n\nCommunity is about relationship — giving and receiving.\n\nAs you explore, consider:\n• Where do I feel a sense of belonging?\n• How do I contribute to others?\n• What does support look like in my life?\n\nChoose a symbol that reflects connection and shared energy.",
      },
      {
        title: "Visual Elements",
        content:
          "Begin sketching with a focus on interaction and relationship. Your composition may include multiple elements working together.\n\nColor palette: warm, inviting tones, harmonious blends\nTexture ideas: weaving, linking forms, overlapping shapes\n\nMotif ideas (optional):\nCircles · hands · threads · clusters · shared light\n\nLet your image feel connected and supported.",
      },
      {
        title: "Voice & Meaning",
        content:
          "Imagine your card speaking with warmth and inclusivity. This voice reminds the viewer they are not alone.\n\nYou might explore:\n\u201cYou are supported.\u201d\n\u201cWe grow together.\u201d\n\u201cConnection strengthens you.\u201d\n\u201cReach out.\u201d\n\nLet the tone feel welcoming and affirming.",
      },
      {
        title: "Reflection",
        content:
          "Take a few moments to journal:\n\n• Where do I feel most connected?\n• How do I show up in community?\n• Where might I need support?\n\nConsider how this card functions in your deck. Does it connect? Ground? Invite?",
      },
    ],
  },
  {
    number: 6,
    title: "Transformation / Rebirth",
    objective:
      "Explore transformation as change, renewal, and the emergence of something new — and translate that potent, shifting energy into your card.",
    sections: [
      {
        title: "Symbol Exploration",
        content:
          "Begin in the Hub by exploring animals associated with transformation or rebirth — those that undergo profound change as part of their nature. Then expand outward. What symbols represent transformation to you? This might include fire, chrysalis, water, seeds breaking open, or thresholds.\n\nTransformation requires letting go before becoming.\n\nAs you explore, consider:\n• What am I currently in the process of transforming?\n• What am I releasing? What is emerging?\n• What does transformation feel like in my life?\n\nChoose a symbol that reflects profound change and the passage through it.",
      },
      {
        title: "Visual Elements",
        content:
          "Begin sketching with a focus on transition and movement. Your composition may feel dynamic, layered, or in-between states.\n\nColor palette: deep transformative tones — purples, dark blues, fire colors, emerging light\nTexture ideas: chrysalis textures, flame, breaking forms, emerging shapes\n\nMotif ideas (optional):\nChrysalis · flame · water · thresholds · emerging figures\n\nLet your image feel alive with change.",
      },
      {
        title: "Voice & Meaning",
        content:
          "Imagine your card speaking with acknowledgment and encouragement. This voice honors the difficulty and beauty of change.\n\nYou might explore:\n\u201cYou are in the middle of becoming.\u201d\n\u201cTrust the transformation.\u201d\n\u201cLet go to emerge.\u201d\n\u201cThis is not the end — it is the turning.\u201d\n\nLet the tone feel both grounding and forward-looking.",
      },
      {
        title: "Reflection",
        content:
          "Take a few moments to journal:\n\n• What am I transforming right now?\n• What must I release for this transformation to complete?\n• What is being born in me?\n\nConsider this card's role in your deck. Does it initiate change? Witness transition? Celebrate emergence?",
      },
    ],
  },
  {
    number: 7,
    title: "Joy / Playfulness",
    objective:
      "Explore joy as lightness, presence, and playful energy — and translate that feeling into your card.",
    sections: [
      {
        title: "Symbol Exploration",
        content:
          "Begin in the Hub by exploring animals associated with joy or playfulness. Then expand outward. What symbols represent joy to you? This might include sunlight, movement, laughter, bubbles, or spontaneous shapes.\n\nJoy is not forced — it is experienced.\n\nAs you explore, consider:\n• What brings me genuine joy?\n• When do I feel most free and playful?\n• What does lightness feel like in my body?\n\nChoose a symbol that feels alive and uplifting.",
      },
      {
        title: "Visual Elements",
        content:
          "Begin sketching with a focus on movement and expression. Let your composition feel open, dynamic, or even unexpected.\n\nColor palette: bright, warm, uplifting colors\nTexture ideas: soft edges, motion, bursts, light patterns\n\nMotif ideas (optional):\nSunlight · sparkles · flowing shapes · laughter lines · open space\n\nLet your image feel energetic and alive.",
      },
      {
        title: "Voice & Meaning",
        content:
          "Imagine your card speaking with lightness and warmth. This voice invites presence and enjoyment.\n\nYou might explore:\n\u201cLet yourself feel joy.\u201d\n\u201cThis moment is enough.\u201d\n\u201cPlay is part of your path.\u201d\n\u201cLightness is allowed.\u201d\n\nLet the tone feel uplifting and freeing.",
      },
      {
        title: "Reflection",
        content:
          "Take a few moments to journal:\n\n• What brings me joy right now?\n• When do I allow myself to play?\n• Where might I be holding too tightly?\n\nConsider this card's role in your deck. Does it lift? Soften? Brighten?",
      },
    ],
  },
  {
    number: 8,
    title: "Freedom / Independence",
    objective:
      "Explore freedom as autonomy, openness, and self-direction — and translate that expansive energy into your card.",
    sections: [
      {
        title: "Symbol Exploration",
        content:
          "Begin in the Hub by exploring animals associated with freedom or independence. Then expand outward. What symbols represent freedom to you? This might include open skies, wings, pathways, horizons, or broken boundaries.\n\nFreedom is both external and internal.\n\nAs you explore, consider:\n• Where do I feel most free?\n• Where do I feel restricted?\n• What does independence mean to me?\n\nChoose a symbol that reflects expansion and choice.",
      },
      {
        title: "Visual Elements",
        content:
          "Begin sketching with a focus on openness and space. Allow your composition to feel expansive or uncontained.\n\nColor palette: airy tones, sky colors, wide gradients\nTexture ideas: wind, openness, flowing forms\n\nMotif ideas (optional):\nWings · horizons · open paths · sky · movement\n\nLet your image feel spacious and unbound.",
      },
      {
        title: "Voice & Meaning",
        content:
          "Imagine your card speaking with clarity and permission. This voice encourages autonomy.\n\nYou might explore:\n\u201cYou are free to choose.\u201d\n\u201cRelease what holds you.\u201d\n\u201cYour path is your own.\u201d\n\u201cStep into your independence.\u201d\n\nLet the tone feel open and empowering.",
      },
      {
        title: "Reflection",
        content:
          "Take a few moments to journal:\n\n• Where do I feel free in my life?\n• Where do I feel restricted?\n• What would freedom look like for me right now?\n\nConsider how this card supports your deck. Does it expand? Release? Empower?",
      },
    ],
  },
  {
    number: 9,
    title: "Patience / Timing",
    objective:
      "Explore patience as trust in timing, natural pacing, and allowing things to unfold — and translate that steady, grounded energy into your card.",
    sections: [
      {
        title: "Symbol Exploration",
        content:
          "Begin in the Hub by exploring animals associated with patience or timing. Then expand outward. What symbols represent patience to you? This might include seeds, hourglasses, seasons, tides, or slow-moving cycles.\n\nPatience is not passive — it is active trust.\n\nAs you explore, consider:\n• Where in my life am I being asked to wait?\n• What does \u201cright timing\u201d feel like?\n• Do I resist slowness, or can I sit within it?\n\nChoose a symbol that reflects natural pacing and trust in unfolding.",
      },
      {
        title: "Visual Elements",
        content:
          "Begin sketching with a focus on stillness and gradual movement. Your card may feel calm, grounded, or cyclical.\n\nColor palette: soft earth tones, muted gradients, natural hues\nTexture ideas: growth lines, layers, slow transitions\n\nMotif ideas (optional):\nSeeds · spirals · seasons · hourglasses · water cycles\n\nLet your image feel unhurried and steady.",
      },
      {
        title: "Voice & Meaning",
        content:
          "Imagine your card speaking with calm reassurance. This voice does not rush — it reminds.\n\nYou might explore:\n\u201cTrust the timing.\u201d\n\u201cNot everything is meant to happen quickly.\u201d\n\u201cWhat is growing cannot be forced.\u201d\n\u201cWait, and watch.\u201d\n\nLet the tone feel steady and grounding.",
      },
      {
        title: "Reflection",
        content:
          "Take a few moments to journal:\n\n• Where am I being asked to slow down?\n• What feels out of my control right now?\n• What might patience offer me?\n\nConsider this card's role in your deck. Does it pause? Soften? Ground?",
      },
    ],
  },
  {
    number: 10,
    title: "Healing / Emotional Balance",
    objective:
      "Explore healing as restoration, care, and emotional balance — and translate that nurturing energy into your card.",
    sections: [
      {
        title: "Symbol Exploration",
        content:
          "Begin in the Hub by exploring animals associated with healing or restoration. Then expand outward. What symbols represent healing to you? This might include water, light, hands, plants, or gentle cycles.\n\nHealing is not always visible — it is often felt.\n\nAs you explore, consider:\n• What does healing feel like in my body?\n• Where am I in my own healing process?\n• What brings me back into balance?\n\nChoose a symbol that reflects care, softness, or restoration.",
      },
      {
        title: "Visual Elements",
        content:
          "Begin sketching with a focus on gentleness and flow. Your composition may feel soothing or restorative.\n\nColor palette: soft tones, calming colors, gentle blends\nTexture ideas: water, light, smooth gradients, organic forms\n\nMotif ideas (optional):\nWater · leaves · hands · light · circles · growth\n\nLet your image feel safe and supportive.",
      },
      {
        title: "Voice & Meaning",
        content:
          "Imagine your card speaking with compassion and care. This voice soothes rather than pushes.\n\nYou might explore:\n\u201cYou are allowed to heal.\u201d\n\u201cTake your time.\u201d\n\u201cCare for yourself gently.\u201d\n\u201cBalance will return.\u201d\n\nLet the tone feel nurturing and kind.",
      },
      {
        title: "Reflection",
        content:
          "Take a few moments to journal:\n\n• What am I currently healing from?\n• What helps me feel balanced?\n• Where do I need more care?\n\nConsider this card's role in your deck. Does it soothe? Restore? Hold space?",
      },
    ],
  },
  {
    number: 11,
    title: "Observation / Awareness",
    objective:
      "Explore awareness as presence, attention, and noticing — and translate that clarity into your card.",
    sections: [
      {
        title: "Symbol Exploration",
        content:
          "Begin in the Hub by exploring animals known for observation or heightened awareness. Then expand outward. What symbols represent awareness to you? This might include eyes, stillness, reflections, or watchful spaces.\n\nAwareness begins with noticing.\n\nAs you explore, consider:\n• What do I notice when I slow down?\n• What do I tend to overlook?\n• What does presence feel like?\n\nChoose a symbol that reflects attentiveness and clarity.",
      },
      {
        title: "Visual Elements",
        content:
          "Begin sketching with a focus on stillness and focus. Your composition may feel quiet, centered, or watchful.\n\nColor palette: neutral tones, subtle contrasts\nTexture ideas: clarity, sharp edges, reflective surfaces\n\nMotif ideas (optional):\nEyes · mirrors · still water · quiet landscapes\n\nLet your image feel attentive and present.",
      },
      {
        title: "Voice & Meaning",
        content:
          "Imagine your card speaking with clarity and calm. This voice invites awareness.\n\nYou might explore:\n\u201cPause and notice.\u201d\n\u201cLook closer.\u201d\n\u201cAwareness brings clarity.\u201d\n\u201cBe present.\u201d\n\nLet the tone feel gentle but clear.",
      },
      {
        title: "Reflection",
        content:
          "Take a few moments to journal:\n\n• What am I noticing right now?\n• What might I be overlooking?\n• How can I become more present?\n\nConsider this card's role in your deck. Does it reveal? Clarify? Slow things down?",
      },
    ],
  },
  {
    number: 12,
    title: "Guidance / Navigation",
    objective:
      "Explore guidance as direction, trust, and movement forward — and translate that guiding energy into your card.",
    sections: [
      {
        title: "Symbol Exploration",
        content:
          "Begin in the Hub by exploring animals associated with navigation or guidance. Then expand outward. What symbols represent direction to you? This might include stars, compasses, paths, maps, or lights in darkness.\n\nGuidance can come from within or from outside.\n\nAs you explore, consider:\n• Where am I being guided right now?\n• Do I trust direction, or resist it?\n• What helps me find my way?\n\nChoose a symbol that reflects movement with purpose.",
      },
      {
        title: "Visual Elements",
        content:
          "Begin sketching with a focus on direction and flow. Your composition may include pathways or guiding elements.\n\nColor palette: contrasts between light and dark, guiding highlights\nTexture ideas: lines, paths, directional flow\n\nMotif ideas (optional):\nStars · compasses · paths · arrows · lights\n\nLet your image feel directional and intentional.",
      },
      {
        title: "Voice & Meaning",
        content:
          "Imagine your card speaking with reassurance and clarity. This voice helps orient.\n\nYou might explore:\n\u201cYou are being guided.\u201d\n\u201cFollow the path that calls you.\u201d\n\u201cTrust the direction unfolding.\u201d\n\u201cYou are not lost.\u201d\n\nLet the tone feel steady and guiding.",
      },
      {
        title: "Reflection",
        content:
          "Take a few moments to journal:\n\n• Where am I being led?\n• What direction feels aligned?\n• What helps me trust my path?\n\nConsider this card's role in your deck. Does it guide? Reassure? Direct?",
      },
    ],
  },
  {
    number: 13,
    title: "Protection / Safety",
    objective:
      "Explore protection as boundaries, safety, and the energy that holds and guards — and translate that sheltering power into your card.",
    sections: [
      {
        title: "Symbol Exploration",
        content:
          "Begin in the Hub by exploring animals associated with protection or safety — those who guard, shelter, or create safe boundaries. Then expand outward. What symbols represent protection to you? This might include shields, walls, circles of light, anchors, or guardian figures.\n\nProtection can be fierce or gentle.\n\nAs you explore, consider:\n• Where do I feel protected in my life?\n• What protects me most — external boundaries or internal ones?\n• What does safety feel like?\n\nChoose a symbol that reflects shelter and strength.",
      },
      {
        title: "Visual Elements",
        content:
          "Begin sketching with a focus on enclosure and strength. Your composition may feel strong, bounded, or sheltering.\n\nColor palette: deep, protective tones — dark blues, silvers, earthy greens\nTexture ideas: stone, armor, overlapping forms, encircling shapes\n\nMotif ideas (optional):\nShields · circles · walls · guardian figures · strong enclosures\n\nLet your image feel secure and grounding.",
      },
      {
        title: "Voice & Meaning",
        content:
          "Imagine your card speaking with steady assurance. This voice guards without aggression.\n\nYou might explore:\n\u201cYou are safe here.\u201d\n\u201cYour boundaries are honored.\u201d\n\u201cI stand with you.\u201d\n\u201cYou are held.\u201d\n\nLet the tone feel safe and strong.",
      },
      {
        title: "Reflection",
        content:
          "Take a few moments to journal:\n\n• Where do I feel protected?\n• Where do I need stronger boundaries?\n• What does safety mean to me?\n\nConsider this card's role in your deck. Does it guard? Enclose? Ground?",
      },
    ],
  },
  {
    number: 14,
    title: "Creativity / Inspiration",
    objective:
      "Explore creativity as expression, flow, and idea generation — and translate that energy into your card.",
    sections: [
      {
        title: "Symbol Exploration",
        content:
          "Begin in the Hub by exploring animals associated with creativity or expression. Then expand outward. What symbols represent inspiration to you? This might include sparks, light, movement, tools, or abstract forms.\n\nCreativity is both structured and free.\n\nAs you explore, consider:\n• When do I feel most creative?\n• What inspires me?\n• What blocks my expression?\n\nChoose a symbol that reflects creative energy and flow.",
      },
      {
        title: "Visual Elements",
        content:
          "Begin sketching with openness and experimentation. Allow your composition to feel expressive and flexible.\n\nColor palette: vibrant or intuitive color choices\nTexture ideas: mixed textures, layered marks, movement\n\nMotif ideas (optional):\nLight bursts · flowing lines · tools · abstract shapes\n\nLet your image feel alive and expressive.",
      },
      {
        title: "Voice & Meaning",
        content:
          "Imagine your card speaking with encouragement and openness. This voice invites creation.\n\nYou might explore:\n\u201cCreate freely.\u201d\n\u201cYour ideas matter.\u201d\n\u201cFollow your inspiration.\u201d\n\u201cExpression is your power.\u201d\n\nLet the tone feel expansive and energizing.",
      },
      {
        title: "Reflection",
        content:
          "Take a few moments to journal:\n\n• What inspires me right now?\n• Where do I feel creatively open or blocked?\n• What do I want to express?\n\nConsider this card's role in your deck. Does it spark? Open? Energize?",
      },
    ],
  },
  {
    number: 15,
    title: "Adaptability / Flexibility",
    objective:
      "Explore adaptability as change, responsiveness, and fluidity — and translate that flexible energy into your card.",
    sections: [
      {
        title: "Symbol Exploration",
        content:
          "Begin in the Hub by exploring animals associated with adaptability. Then expand outward. What symbols represent flexibility to you? This might include water, wind, bending forms, or shifting shapes.\n\nAdaptability is about responding, not resisting.\n\nAs you explore, consider:\n• How do I respond to change?\n• Where am I rigid vs. flexible?\n• What helps me adjust?\n\nChoose a symbol that reflects movement and responsiveness.",
      },
      {
        title: "Visual Elements",
        content:
          "Begin sketching with flow and variation. Your composition may feel dynamic or shifting.\n\nColor palette: blended tones, gradients\nTexture ideas: fluid lines, movement, soft transitions\n\nMotif ideas (optional):\nWater · wind · waves · bending branches\n\nLet your image feel fluid and responsive.",
      },
      {
        title: "Voice & Meaning",
        content:
          "Imagine your card speaking with reassurance and openness. This voice supports change.\n\nYou might explore:\n\u201cYou can adjust.\u201d\n\u201cFlow with what comes.\u201d\n\u201cFlexibility is strength.\u201d\n\u201cChange is not the end.\u201d\n\nLet the tone feel supportive and adaptable.",
      },
      {
        title: "Reflection",
        content:
          "Take a few moments to journal:\n\n• Where am I being asked to adapt?\n• What feels rigid in me right now?\n• How can I respond differently?\n\nConsider this card's role in your deck. Does it soften? Shift? Support change?",
      },
    ],
  },
  {
    number: 16,
    title: "Leadership / Authority",
    objective:
      "Explore leadership as guidance, responsibility, and self-trust — and translate that grounded authority into your card.",
    sections: [
      {
        title: "Symbol Exploration",
        content:
          "Begin in the Hub by exploring animals associated with leadership or authority. Then expand outward. What symbols represent leadership to you? This might include crowns, thrones, pillars, guiding figures, or elevated perspectives.\n\nLeadership is not only external — it can be internal and self-directed.\n\nAs you explore, consider:\n• What does leadership mean to me?\n• Do I lead myself with trust?\n• What kind of authority feels aligned vs. imposed?\n\nChoose a symbol that reflects responsibility, clarity, and direction.",
      },
      {
        title: "Visual Elements",
        content:
          "Begin sketching with a focus on presence and structure. Your composition may feel centered, elevated, or steady.\n\nColor palette: strong contrasts, deep tones, grounded neutrals\nTexture ideas: stone, structure, clean lines, balanced forms\n\nMotif ideas (optional):\nCrowns · pillars · seats · light above · centered figures\n\nLet your image feel grounded and intentional.",
      },
      {
        title: "Voice & Meaning",
        content:
          "Imagine your card speaking with confidence and clarity. This voice leads without force.\n\nYou might explore:\n\u201cStand in your authority.\u201d\n\u201cLead yourself first.\u201d\n\u201cYou are capable of guiding this.\u201d\n\u201cOwn your direction.\u201d\n\nLet the tone feel steady and assured.",
      },
      {
        title: "Reflection",
        content:
          "Take a few moments to journal:\n\n• Where am I being called to lead?\n• How do I relate to authority?\n• Do I trust my own direction?\n\nConsider this card's role in your deck. Does it guide? Center? Empower?",
      },
    ],
  },
  {
    number: 17,
    title: "Communication / Expression",
    objective:
      "Explore communication as truth, expression, and connection — and translate that expressive energy into your card.",
    sections: [
      {
        title: "Symbol Exploration",
        content:
          "Begin in the Hub by exploring animals associated with communication or expression. Then expand outward. What symbols represent expression to you? This might include voices, sound waves, ink, breath, or open space.\n\nExpression can be spoken, written, or felt.\n\nAs you explore, consider:\n• How do I express myself most clearly?\n• Where do I hold back?\n• What does authentic expression feel like?\n\nChoose a symbol that reflects sharing and connection.",
      },
      {
        title: "Visual Elements",
        content:
          "Begin sketching with flow and outward movement. Your composition may feel open, directional, or expansive.\n\nColor palette: expressive tones, contrast, clarity\nTexture ideas: lines, waves, marks, outward motion\n\nMotif ideas (optional):\nSpeech forms · sound waves · ink · open shapes · breath\n\nLet your image feel communicative and alive.",
      },
      {
        title: "Voice & Meaning",
        content:
          "Imagine your card speaking clearly and honestly. This voice invites expression.\n\nYou might explore:\n\u201cSpeak your truth.\u201d\n\u201cYour voice matters.\u201d\n\u201cExpress what is within you.\u201d\n\u201cBe heard.\u201d\n\nLet the tone feel open and authentic.",
      },
      {
        title: "Reflection",
        content:
          "Take a few moments to journal:\n\n• Where do I feel heard?\n• Where do I hold back?\n• What do I want to express?\n\nConsider this card's role in your deck. Does it open? Release? Connect?",
      },
    ],
  },
  {
    number: 18,
    title: "Loyalty / Fidelity",
    objective:
      "Explore loyalty as trust, commitment, and consistency — and translate that steady, devoted energy into your card.",
    sections: [
      {
        title: "Symbol Exploration",
        content:
          "Begin in the Hub by exploring animals associated with loyalty or fidelity. Then expand outward. What symbols represent loyalty to you? This might include bonds, circles, anchors, or repeated patterns.\n\nLoyalty can be to others — or to yourself.\n\nAs you explore, consider:\n• What does loyalty mean to me?\n• Where do I show commitment?\n• Am I loyal to my own needs and values?\n\nChoose a symbol that reflects trust and steadiness.",
      },
      {
        title: "Visual Elements",
        content:
          "Begin sketching with repetition and connection. Your composition may feel grounded and consistent.\n\nColor palette: stable tones, balanced contrasts\nTexture ideas: repetition, linking forms, continuity\n\nMotif ideas (optional):\nCircles · knots · anchors · paired forms\n\nLet your image feel dependable and connected.",
      },
      {
        title: "Voice & Meaning",
        content:
          "Imagine your card speaking with reassurance and trust. This voice remains steady.\n\nYou might explore:\n\u201cStay true.\u201d\n\u201cYou can be relied upon.\u201d\n\u201cHonor your commitments.\u201d\n\u201cTrust the bond.\u201d\n\nLet the tone feel grounded and consistent.",
      },
      {
        title: "Reflection",
        content:
          "Take a few moments to journal:\n\n• Where do I show loyalty in my life?\n• Where might I need stronger boundaries?\n• Am I loyal to myself?\n\nConsider this card's role in your deck. Does it anchor? Support? Stabilize?",
      },
    ],
  },
  {
    number: 19,
    title: "Clarity / Insight",
    objective:
      "Explore clarity as understanding, truth, and insight — and translate that illuminating energy into your card.",
    sections: [
      {
        title: "Symbol Exploration",
        content:
          "Begin in the Hub by exploring animals associated with clarity or insight. Then expand outward. What symbols represent clarity to you? This might include light, clear water, lenses, or open space.\n\nClarity reveals what was hidden.\n\nAs you explore, consider:\n• What brings me clarity?\n• Where do I feel confused?\n• What does \u201cseeing clearly\u201d feel like?\n\nChoose a symbol that reflects illumination and understanding.",
      },
      {
        title: "Visual Elements",
        content:
          "Begin sketching with openness and light. Your composition may feel clean, spacious, or focused.\n\nColor palette: light tones, clear contrasts\nTexture ideas: transparency, reflection, sharp edges\n\nMotif ideas (optional):\nLight · lenses · water · open space · beams\n\nLet your image feel revealing and clear.",
      },
      {
        title: "Voice & Meaning",
        content:
          "Imagine your card speaking with directness and ease. This voice brings understanding.\n\nYou might explore:\n\u201cSee clearly.\u201d\n\u201cThe truth is becoming visible.\u201d\n\u201cClarity is here.\u201d\n\u201cLook again.\u201d\n\nLet the tone feel simple and illuminating.",
      },
      {
        title: "Reflection",
        content:
          "Take a few moments to journal:\n\n• Where do I need clarity?\n• What is becoming clear to me?\n• What truth am I ready to see?\n\nConsider this card's role in your deck. Does it reveal? Simplify? Illuminate?",
      },
    ],
  },
  {
    number: 20,
    title: "Balance / Harmony",
    objective:
      "Explore balance as alignment, stability, and harmony — and translate that centered energy into your card.",
    sections: [
      {
        title: "Symbol Exploration",
        content:
          "Begin in the Hub by exploring animals associated with balance or harmony. Then expand outward. What symbols represent balance to you? This might include scales, symmetry, cycles, or paired elements.\n\nBalance is not perfection — it is adjustment.\n\nAs you explore, consider:\n• Where do I feel balanced?\n• Where do I feel off-center?\n• What helps me return to alignment?\n\nChoose a symbol that reflects equilibrium and flow.",
      },
      {
        title: "Visual Elements",
        content:
          "Begin sketching with symmetry or intentional contrast. Your composition may feel centered or evenly distributed.\n\nColor palette: balanced tones, complementary colors\nTexture ideas: mirrored forms, gentle repetition\n\nMotif ideas (optional):\nScales · circles · mirrored shapes · dual forms\n\nLet your image feel steady and aligned.",
      },
      {
        title: "Voice & Meaning",
        content:
          "Imagine your card speaking with calm steadiness. This voice restores balance.\n\nYou might explore:\n\u201cReturn to center.\u201d\n\u201cFind your balance.\u201d\n\u201cAdjust gently.\u201d\n\u201cHarmony is possible.\u201d\n\nLet the tone feel calming and grounding.",
      },
      {
        title: "Reflection",
        content:
          "Take a few moments to journal:\n\n• Where do I feel balanced or unbalanced?\n• What supports my alignment?\n• What needs adjusting?\n\nConsider this card's role in your deck. Does it center? Stabilize? Restore?",
      },
    ],
  },
  {
    number: 21,
    title: "Renewal / Cleansing",
    objective:
      "Explore renewal as release, cleansing, and fresh beginnings — and translate that restorative energy into your card.",
    sections: [
      {
        title: "Symbol Exploration",
        content:
          "Begin in the Hub by exploring animals associated with renewal or cleansing. Then expand outward. What symbols represent renewal to you? This might include water, rain, wind, shedding, or new growth.\n\nRenewal often follows release.\n\nAs you explore, consider:\n• What am I ready to release?\n• What feels ready to begin again?\n• What does \u201cfresh start\u201d feel like?\n\nChoose a symbol that reflects clearing and renewal.",
      },
      {
        title: "Visual Elements",
        content:
          "Begin sketching with flow and openness. Your composition may feel light, refreshed, or transitional.\n\nColor palette: fresh tones, light colors, airy blends\nTexture ideas: water, wind, soft movement\n\nMotif ideas (optional):\nRain · water · leaves · light · open space\n\nLet your image feel cleansing and new.",
      },
      {
        title: "Voice & Meaning",
        content:
          "Imagine your card speaking with softness and release. This voice allows letting go.\n\nYou might explore:\n\u201cRelease what no longer serves you.\u201d\n\u201cBegin again.\u201d\n\u201cYou are renewed.\u201d\n\u201cLet it wash away.\u201d\n\nLet the tone feel freeing and restorative.",
      },
      {
        title: "Reflection",
        content:
          "Take a few moments to journal:\n\n• What am I ready to release?\n• What feels ready to begin?\n• What does renewal look like for me?\n\nConsider this card's role in your deck. Does it clear? Refresh? Open?",
      },
    ],
  },
  {
    number: 22,
    title: "Persistence / Determination",
    objective:
      "Explore persistence as endurance, commitment, and steady effort — and translate that resilient energy into your card.",
    sections: [
      {
        title: "Symbol Exploration",
        content:
          "Begin in the Hub by exploring animals associated with persistence or determination. Then expand outward. What symbols represent endurance to you? This might include mountains, paths, repeated steps, or steady movement.\n\nPersistence is about continuing, even when it's difficult.\n\nAs you explore, consider:\n• Where am I being asked to keep going?\n• What challenges am I facing?\n• What keeps me moving forward?\n\nChoose a symbol that reflects resilience and continuation.",
      },
      {
        title: "Visual Elements",
        content:
          "Begin sketching with direction and strength. Your composition may feel steady, grounded, or forward-moving.\n\nColor palette: deep tones, strong contrasts\nTexture ideas: stone, repetition, layered forms\n\nMotif ideas (optional):\nPaths · mountains · steps · upward lines\n\nLet your image feel determined and enduring.",
      },
      {
        title: "Voice & Meaning",
        content:
          "Imagine your card speaking with strength and encouragement. This voice continues forward.\n\nYou might explore:\n\u201cKeep going.\u201d\n\u201cYou are stronger than this moment.\u201d\n\u201cDo not give up.\u201d\n\u201cStep by step.\u201d\n\nLet the tone feel steady and empowering.",
      },
      {
        title: "Reflection",
        content:
          "Take a few moments to journal:\n\n• Where do I need persistence right now?\n• What motivates me to continue?\n• What helps me stay grounded through challenge?\n\nConsider this card's role in your deck. Does it strengthen? Encourage? Sustain?",
      },
    ],
  },
];
