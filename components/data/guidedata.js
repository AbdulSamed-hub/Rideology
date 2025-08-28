 const guideData = [
    {
        id: 1.1,
        index: 1,
        title: 'Bikes by Riding Style',
        titles: ['','Standard (or Naked) Bikes', 'Cruisers', 'Sport Bikes', 'Touring Bikes', 'Sport Touring Bikes', 'Dirt Bikes', 'Adventure Bikes (ADV)', 'Beginner Recommendations'],
        paragraphs: [
            "When we talk about a beginner-friendly motorcycle in the context of this guide, we mean a bike that makes learning easy. These are motorcycles that help you understand both the basics and more advanced techniques in a way that feels natural, manageable, and confidence-building — often in the shortest possible time. There’s a wide variety of motorcycles out there, each suited to a different kind of riding. Whether you're into relaxed cruising, fast-paced cornering, long-distance touring, or off-road fun, there's something for everyone. Below is a breakdown of common motorcycle types and what kind of riding they suit best.",
            "Standard bikes are the most common and beginner-friendly type. They skip the fancy tech and bodywork, which makes them more affordable, easier to maintain, and simpler to handle. Their upright seating position, manageable size, and lighter weight make them ideal for new riders. You won’t be hunched over like on a sportbike, but you’ll still feel less bumps than on a cruiser. Overall, they're versatile, practical, and great for building foundational riding skills.",
            "Cruisers focus on relaxed riding and visual appeal. With low seats, high handlebars, and a laid-back riding posture, they’re built for comfort — as long as the roads are smooth. Cruisers can handle longer rides, but they shine best on well-paved highways at a steady pace. They're less about speed or agility and more about soaking in the ride.",
            "Sport bikes are built for performance. With sharp, aerodynamic bodywork and aggressive forward-leaning posture, they prioritize speed and responsiveness over comfort. They typically use lightweight materials, high-end suspension, and advanced braking systems to support high-speed riding and tight cornering. These bikes aren’t meant for long-distance comfort or fuel economy — they’re made to perform, not to pamper.",
            "Touring motorcycles are essentially the luxury vehicles of the bike world. They’re built for long-distance travel, with features like large wind-blocking fairings, spacious luggage compartments, plush seating, and advanced navigation systems. They're engineered for comfort on the highway, not for agility or speed. Think of them as the two-wheeled equivalent of a high-end car’s backseat — except you're the one riding.",
            "Sport touring bikes blend the comfort of a touring motorcycle with the performance of a sport bike. They offer upright, relaxed posture, longer fuel range, and well-cushioned seating while maintaining agility and responsiveness. Thanks to their lighter weight and more compact size compared to full touring bikes, they’re easier to handle and more versatile, especially for riders who want both comfort and performance.",
            "Dirt bikes are designed for off-road use. They come equipped with knobby tires and long-travel suspension to handle rough terrain, jumps, and uneven surfaces. While there are many types of dirt bikes, they all share one key trait: they’re not built for street use. Most don’t have proper lighting or pavement-ready tires, and many aren’t road-legal. They’re great for trails, tracks, and rugged ground — but not your daily commute.",
            "Adventure bikes, also called adventure tourers, are built for riders who want to travel long distances with occasional off-road detours. They come with larger engines, greater fuel range, and tires/suspension that lean more toward road use, though they can still handle dirt roads and mild off-roading. They’re not as aggressive off-road as pure dirt bikes but offer a great balance for riders who want versatility.",
            "For most beginners, a lightweight standard or naked bike is the best place to start. These bikes are forgiving, easy to learn on, and comfortable in urban environments. If you're interested in a bit of off-road riding too, you might consider a street-legal dual-sport or supermoto — just make sure the model you pick includes ABS or has the option for it. It’s a helpful safety net, especially when you're still learning how a bike behaves in different situations."
        ],
        note: undefined, 
        links: ['','','','','','','','',''],
        images: ['', '/nakedbike.jpg', '/cruiser.jpg', '/sports.jpg', '/touring.jpg', '/sportstourer.jpg', '/dirtbike.jpg', '/adv.jpg', '']
    },
    {
        id: 1.2,
        title:  'Riding Posture',
        titles: ['','Why It Matters','What Most Riders Get Wrong','Handlebars', 'Seating', 'Wrists', 'Feet', 'Knees', 'Back and Core', 'Core engagement', 'Remember Your Bike’s Geometry'],
        paragraphs: ["Your riding posture says a lot. In fact, it’s one of the easiest ways to spot a new or inexperienced rider. Getting your body positioning right isn’t just about looking confident — it’s about maintaining control, reducing fatigue, and improving safety.",
            "Sure, anyone can sit on a bike and ride. But sitting properly helps with balance, steering, and endurance. A good riding posture helps prevent neck, back, and joint pain — and gives you far more control over the machine beneath you.",
            "Many beginners tend to sit around the middle of the seat, rest their heels flat on the foot pegs, and let their knees flop outward. Their arms are often fully stretched out to reach the handlebars, and the whole posture resembles someone sitting on a regular chair — except this one can hit 100 km/h. This creates an unstable riding position where your body constantly shifts, throwing off the bike's center of mass. Steering becomes harder when your arms are fully extended, and loosely hanging feet can scrape the pavement or twist awkwardly if the bike tips over. Below mentioned is the correct way:",
            "Start with your grip. Thanks to the design of the front wheel (which we’ll talk more about in the counter-steering section), the bike can naturally self-correct. That’s why your grip on the handlebars should be firm but relaxed — just enough to stay connected without fighting the front end.",
            "When it comes to seating, shift forward so you’re closer to the tank. There should be a small gap — about a fist’s width — between you and the tank. This position allows your arms to stay slightly bent, which increases your control and range of motion while reducing fatigue. It also helps your upper body stay relaxed and fluid, rather than locked in place.",
            "Try to keep your wrists flat while holding the bars — no flexing up or down. This varies slightly by preference, but a neutral wrist position generally offers better comfort and throttle control over longer rides.",
            "For your feet, place the ball of your foot (just behind your toes) on the foot peg. On most modern bikes, there’s a metal plate next to the peg where your heel can lightly rest. This foot position improves feel and balance, and should be your default stance. After braking or shifting, always return your foot to this position.",
            "Your knees should be braced against the tank — not loose. Hugging the tank with your knees gives you a more 'connected' feel and helps keep your lower body stable. A good tip for building muscle memory is to wedge a piece of paper between your knee and the tank and try to keep it from falling out during practice rides.",
            "Once everything else is in place, your upper body usually aligns itself naturally. Just make sure to keep your back upright. If you're having trouble reaching the bars, lean forward slightly from the hips rather than hunching your back.",
            "Your core also plays a role during braking, cornering, and acceleration. While this tends to activate automatically through reflexes, it's helpful to stay aware of it. A stable core helps maintain balance and keeps your movements smoother overall.",
            "And finally, remember — your posture will vary slightly depending on the type of motorcycle you ride. Sportbikes, cruisers, and adventure tourers all have different ergonomics. Understand your bike's geometry and adjust your positioning accordingly.",
        ],
        note : 'Note: All the images in this section are provided by Moto Control. Huge thanks to them — be sure to check out their YouTube channel, linked in the Credits Page.',
        images:['', '', '/noobposture.webp','','','','/feet.webp','/knee.webp','','',''],
        links: ['','','https://i.postimg.cc/prdv4kCt/noobposture.png','','','','','','','','']
    },
    {
        id: 1.3,
        title: 'Vision',
        titles: ['', 'The Truth About “Look Where You Want to Go”', 'The Limit Point','&nbsp;&nbsp;Exhibit A','&nbsp;&nbsp;Exhibit B','&nbsp;&nbsp;Exhibit C','', 'Target Fixation', 'Takeaway'],
        paragraphs: [
            "In this section, we're tackling something that sounds super obvious: vision. “Of course I know how to use my eyes,” right? Well, kind of — but riding isn’t walking. And how you use your eyes on a motorcycle can make a massive difference in how smoothly and safely you ride.",
            'There’s a popular saying in the riding world: _“Look where you want to go, and the bike will follow.”_ It’s not wrong — especially for beginners — but it’s also a bit oversimplified. Vision in riding is way deeper than just pointing your head forward. Your eyes are responsible for reading terrain, tracking moving objects, anticipating turns, and avoiding target fixation. In other words: they do a lot. Human eyes are great at estimating the speed and position of other objects in motion. But to let them do that job well, you have to **train yourself to look far ahead**, not just at the bumper of the car in front of you. Trust me, I used to be guilty of staring at number plates or the road directly below me when stuck in traffic. It wasnt helping. What helped? Looking **through** the windshield of the car ahead, or focusing on the **far end of the road** — even in slow traffic. It made overtaking safer, target fixation less likely, and helped me feel more connected to what was happening ahead of me — not just around me.',
            `When you’re cornering, you need to know when the curve ends so you can safely roll on the throttle and bring the bike upright. But how do you know where the corner ends if you can’t see through it? That’s where the concept of a **limit point** (or “vanishing point”) comes in. Imagine looking down a curved road. At some point, the left and right edges of the road appear to meet — that’s your **limit point**. It’s the furthest part of the road you can see in that moment.`, 
            `- &nbsp;&nbsp;If the limit point starts **moving away from you**, the corner is opening up — you’re almost through it.`,
            `- &nbsp;&nbsp;If it stays **in the same spot**, you're still mid-corner.`, 
            `- &nbsp;&nbsp;If it starts **coming toward you**, the corner is tightening — time to ease off the throttle or brake. `,
            `Once the limit point moves directly in front of you, you’re through the corner and can safely accelerate. The more you practice this, the more natural it becomes — your brain will begin to anticipate corners without you even realizing it.`,
            "Even with all this cornering knowledge, you still need to watch out for a sneaky little reflex called **target fixation**. Here’s how it works: Your **main vision** gives you detail but has a narrow field of view. Your **peripheral vision** is much wider but blurry and vague. When something suddenly enters that peripheral space — a dog, a pothole, a rickshaw pulling into your lane — your brain instinctively snaps your main vision toward it. That’s fine in theory. But if you stare at something too long and with too much focus, your brain starts steering you toward it. That’s target fixation — and it’s not ideal when the “target” is something you’re trying to avoid. Breaking this habit takes practice. Try cone drills, tight turns, or just staying mindful of it while riding. If you feel your vision locking onto something, gently remind yourself to **look where you want to go**, not where your anxiety is pulling you.",
            "Vision is way more complex than “just look ahead.” It requires awareness, discipline, and a little bit of rewiring how we’re used to walking around. But once you master it, everything else — from cornering to braking — starts to click. Stay focused, look far, and trust your eyes to do their job — just make sure you're pointing them in the right direction.",
        ],
        images: ['','/curvetop.webp','/curve.webp','','','','/limitpoint.webp','',''],
        links: ['','','https://i.postimg.cc/HnkswT7H/curve.png','','','','https://i.postimg.cc/cHCVhPCf/limitpoint.png','',''],
        note : 'Note: All the images in this section are provided by Moto Control. Huge thanks to them — be sure to check out their YouTube channel, linked in the Credits Page.'
    },
    {
        id: 2.1,
        title: 'Clutch Control',
        titles: ['','What Is the Clutch, and What Does It Do?','1. Biting Point:', '2. Disengaged Zone:', '3. Friction Zone (or Half-Clutch):', `4. Free Play:`,'Most Common Beginner Mistake','Why Car Drivers Struggle with This','Using Clutch for Low-Speed Control',"What If You're Going Too Fast?",'Understanding the Clutch’s Non-Linear Nature','Drill: Stop-and-Go','','',''],
        paragraphs: [
            `Clutch control is one of the first skills you’ll need to master as a new rider — and it’s also one of the easiest places to go wrong. Whether you’re brand new or switching over from driving cars, this guide will help you avoid common mistakes like stalling, jerky takeoffs, or burning your clutch. And if you’ve driven a manual car before, pay special attention — some instincts from cars don’t carry over well to bikes. Let’s say goodbye to accidental stalling, yeah?`,
            `The clutch on a motorcycle simply disconnects the engine from the gearbox. When the clutch lever is pulled in, the engine is disconnected (disengaged). When you release the lever, the engine and gearbox are connected (engaged), and power can go to the wheels. But the clutch isn’t just an on/off switch. There’s an entire range of motion between fully pulled-in and fully released, and each part of that range matters. Here are the key zones to understand:`,
            `Start the bike, pull the clutch in fully, shift into first gear, and slowly start releasing the clutch. The point where the bike begins to move or feels like it wants to move — that’s your biting point.`,
            `Everything before the biting point is where the clutch is fully disengaged. You can pull the lever fully or just up to the biting point — the engine won’t send any power to the wheels.`,
            `Just after the biting point, as you release the lever further, you enter the friction zone. Here, the clutch starts gradually transferring power to the rear wheel. The more you release, the more power is transferred. This is the zone where you control your low-speed balance and smooth takeoffs.`,
            `At the end of the lever’s travel, you should feel a bit of "wobble" or slack — this is called free play, and it should be around 1–2 cm. It ensures the clutch isn’t partially engaged when it shouldn’t be. We’ll dive deeper into how the clutch works during shifting in later sections.`,
            `One of the biggest mistakes beginners make is letting go of the clutch too fast without enough throttle. The result? The engine stalls and your bike lurches — not fun. Now in theory, if you give enough throttle, you could just dump the clutch and ride off. But in reality — especially on bigger bikes — you might just launch yourself or flip the thing. So, don’t do that unless you’re auditioning for a stunt show.`,
            `Car engines are quieter, smoother at low RPMs, and the gearing allows for idle crawling. You can inch forward in first gear with no throttle in a car. But bikes are different — they’re more sensitive and require deliberate clutch and throttle coordination. If this feels awkward at first, that’s totally normal.`,
            `Here’s something that sounds weird at first: you can actually use the clutch to help balance the bike at low speeds. Here's how it works: Keep the clutch engaged in the friction zone, just a little past the biting point. If the bike feels like it’s about to tip or stall, release the clutch slightly to give it a bit of forward momentum — this helps stabilize the bike. But make sure your throttle is steady and consistent, or else the bike can still stall. This technique doesn’t “burn” your clutch like some people claim — at least not when done properly.`,
            `If you're doing a slow maneuver and feel the bike picking up too much speed, pull the clutch in slightly to disengage power. It slows you down without needing brakes. Also, during tight, slow-speed turns, use the rear brake, not the front. The front brake combined with a turned handlebar can easily tip the bike. Rear braking gives you better control and balance. But don’t drag the rear brake constantly — that will overheat and wear down your clutch over time.`,
            `The clutch isn't linear — as you release it, the power transfer from the engine to the wheel increases exponentially. That means the initial movement of the clutch lever doesn’t do much, but the last portion does a lot. So when taking off from a stop: Release the clutch quickly at first. Slow down the release as you near the end of the lever travel. This timing becomes second nature with practice — and is crucial during smooth gear changes too.`,
            `Ride in a straight line, stop the bike completely for a moment, and then take off again — smoothly. ✅ No stalling  ✅ No putting your feet down  ✅ Maintain balance using clutch + throttle + rear brake Tips for this drill:`,
            `1.Pull in the clutch before you brake`,
            `2.Release the clutch as you ease off the brake`,
            `3.Keep throttle steady`
        ],
        images: ['','/clutch.webp','', '', '', '','',"",'','','','','','',''],
        links:['','','', '', '', '','',"",'','','','','','',''],
        note : 'Note: All the images in this section are provided by Moto Control. Huge thanks to them — be sure to check out their YouTube channel, linked in the Credits Page.'
    },
    {
        id: 2.2,
        title: 'Throttle Control',
        titles: ['','Common Throttle Mistakes','➡️ Opening the throttle too quickly','➡️ Whiskey throttle','➡️ Unwanted wheelies','➡️ Chopping the throttle','How to Use the Throttle Properly','1. Correct Hand Position','','2. Don’t Grip Like Your Life Depends on It','3. Accelerating Hard? Shift Your Body First','4. Use Your Fingers for Throttle Feedback',''],
        paragraphs: [
            `A jerky throttle hand is one of the fastest ways to get yourself into trouble on a motorcycle — especially if you’re riding something powerful. Whether it’s skidding out the rear tire, accidental wheelies, or just rough riding, throttle control is essential for staying smooth, safe, and in control. Let’s break it down clearly and simply.`,
            `Let’s first look at the most common throttle-related mistakes that catch new riders (and sometimes even experienced ones) off guard:`,
            `This can overwhelm the rear tire, causing it to spin out and potentially crash.`,
            ` You twist the throttle, get yanked backward, and accidentally keep twisting more because you can’t release it in time. Instant panic.`,
            `Lifting the front wheel without meaning to, often due to poor body position or too much throttle.`,
            `Abruptly closing the throttle can upset the bike’s balance, especially in corners.`,
            `Let’s go over what proper throttle control actually looks like:`,

            `Many beginners grab the throttle with a bent wrist, and as they twist to accelerate, they straighten the wrist. That’s a problem.
            If you need to brake quickly, you'll first have to reposition your hand, or worse, you might grab the brake while still on the throttle — which can cause a lowside (when the bike tips under you and takes you down).
            When you accelerate, your body gets pulled back. If your wrist is bent, it tends to roll the throttle more as your arms straighten — classic whiskey throttle.`,
        
            `Start with a neutral, straight wrist. Then flex your wrist downward as you roll on the throttle. That way, if you get pulled back, your wrist actually rolls the throttle off — giving you a safety buffer.`,
           
            `Imagine holding a raw egg — that’s how you should grip the throttle. Firm enough not to drop it, but not tight enough to crack it.
            A lighter grip:
            Helps you stay relaxed,
            Lets the front wheel move and do its job,
            Prevents accidental throttle inputs when hitting bumps. 
            You’re guiding the bike, not wrestling it.`,

            `If you’re about to roll on the throttle hard, lean slightly forward first:
            It lowers wind resistance,
            Keeps your body weight forward (reducing the chance of a wheelie),
            Lets you roll the throttle farther without losing balance,
             Important: Do this before you start accelerating — not while doing it.`,
            `Here’s a great trick: place one or two fingers on the brake lever while holding the throttle. Not only are you ready to brake instantly, but as your fingers slide along the lever, they help you feel exactly how much throttle you're giving.
            This gives you finer control.
            You can also experiment with using your thumb or palm to control the throttle — some riders prefer different techniques depending on the situation. Try a few and see what feels best for you.`,
            `Throttle control is all about precision, smoothness, and intention. Small changes in technique can make a huge difference in how the bike behaves — and how confident you feel while riding.`, 
        ],
        images: ['','','','','','','','/wrongthrottle.webp','/rightthrottle.webp','','','/fingerroll.webp',''],
        link: ['','','','','','','','','','','',''],
        note : 'Note: All the images in this section are provided by Moto Control. Huge thanks to them — be sure to check out their YouTube channel, linked in the Credits Page.'
    },
    {
        id: 2.3,
        title: 'Counter Steering',
        titles: ['','What Is Counter Steering?','1. Why Does a Motorcycle Stay Upright?','2. Speed Changes Steering Behavior','3. Handlebar Input = Lean Control','','4. Adjusting Your Lean Angle',`5. So Why Didn't I Notice It?`,'Final Word'],
        paragraphs: [
            `This one’s a biggie — possibly the longest and most important guide in the entire series. Counter steering is at the heart of how motorcycles turn, lean, and handle at speed. And while many explain it as "turn left to go right," that’s only part of the story. Let’s clear up the confusion, dig into the real physics, and build a proper understanding from scratch.`,
            `In simple terms, counter steering is how you make your bike lean — and leaning is how motorcycles turn. Most people explain it like this:   “Turn the handlebars one way, and the bike goes the other.”   That’s technically true at speed, but it’s a huge oversimplification. Worse, it makes the concept seem like a trick rather than what it actually is: the fundamental way motorcycles steer. Let’s start at the very beginning and unpack the physics behind it.`,
            `Unlike a car, a motorcycle only has two wheels. So how does it balance when moving? A lot of people credit gyroscopic forces for keeping a bike upright. While gyroscopic effect does play a small role at higher speeds, most of the stability actually comes from the geometry of the motorcycle — specifically something called trail. Here's what’s happening: The steering column and front fork of your bike aren’t completely vertical — they’re angled. If you imagine drawing a straight line down from the fork to the ground, you’ll find that the tire’s actual contact patch is slightly behind this point. That gap is known as the trail. Because of this setup, when the bike leans slightly, the front wheel automatically turns into the direction of the lean — keeping the bike stable and upright. Want proof? Try pushing your bike forward while holding it from the rear, without touching the handlebars. It’ll stay upright. Now try pulling it backward — it wobbles and wants to fall, because you’ve reversed the geometry.`,
            `At slow speeds, The handlebar can turn more, compared to high speeds. At slow speeds the handle bar can sometimes turn to a full lockout, whereas the handle bar never changes direction while at high speeds, So how do we change direction? Let's see`,
            `Imagine riding in a straight line. If you push the right side of the handlebar (ever so slightly), the front wheel briefly turns left. This shifts the bike’s balance and causes it to tip right. Since the bike has no support on the right side, Like a car does.`,
            `Once the lean is initiated, you relax the handlebars, and thanks to the trail geometry, the front wheel stabilizes and steers into the turn. You’re now going right — even though your initial input was a left turn. This is counter steering. Counter steering is an input, you make to go in the opposite direction of the intial input. Let’s simplify that: Push right = Go right , Push left = Go left That’s it. Don’t overthink the “turn left to go right” stuff — it’s confusing in the moment. Just remember: push in the direction you want to go `,
            `Counter steering is not just about choosing your direction — it’s also how you control how much you lean. Want to lean more into a corner? Push more on the same side of the handlebar. Want to stand the bike up? Push the opposite side of the bar. This ability to fine-tune lean is crucial, especially during long sweepers or unexpected road conditions. A few tips: Don’t force huge lean angles at first — work your way up as you build confidence. Avoid scraping your foot pegs. That’s the bike's lean limit or lean capacity Leave a bit of “lean margin” for safety.`,
            `Here’s the thing: everyone who rides a bike is already counter steering — it’s built into how motorcycles work. Our brain subconsciously learns how to counter steer. But if you’re aware of it, and you understand the physics, you’ll: Ride more confidently, React more quickly Make smarter, more intentional decisions mid-corner, Your brain can only learn so much on instinct. With knowledge, you sharpen that instinct.`,
            `Counter steering isn’t a trick, a stunt, or some advanced technique. It’s how motorcycles work — and once you understand it, you’ll be blown away by how much more in control you feel.`,
        ],
        images: ['','','/bikegeometry.webp','','/cs1.webp','/cs2.webp','','',''],
        links: ['','','','','','','','',''],
        note : 'Note: All the images in this section are provided by Moto Control. Huge thanks to them — be sure to check out their YouTube channel, linked in the Credits Page.'
    },
    {
        id: 2.4,
        title: 'Shifting',
        titles: [``,`1. Basic Shifting`,`&nbsp;&nbsp;🔼 Upshifting`,`&nbsp;&nbsp;🔽 Downshifting`,`Common Beginner Mistakes:`,`&nbsp;&nbsp;Looking down at your controls`,`&nbsp;&nbsp;Slow shifting`,`&nbsp;&nbsp;Letting go of the clutch too fast while downshifting`,`&nbsp;&nbsp;Shifting too early`,` What Is Engine Braking?`,`2. Rev Matching`,`&nbsp;&nbsp;🔼 Rev Matching for Upshifts`,`&nbsp;&nbsp;🔽 Rev Matching for Downshifts`,`A Word on Misinformation`,`Final Thoughts`],
        paragraphs: [
            `In this guide, we’re going to talk about shifting gears — the right way — and cover common mistakes, how to avoid them, and how to build smoother habits over time. Whether you’re brand new or coming from a background in driving cars, this is a crucial skill. So let’s get into it.`,
            `Let’s start with the fundamentals:`,
            `&nbsp;&nbsp;&nbsp;Close the throttle, Pull in the clutch, Shift up, Release the clutch smoothly while rolling back on the throttle`,
            `&nbsp;&nbsp;&nbsp;Close the throttle, Pull in the clutch, Shift down, Release the clutch slowly to avoid abrupt engine braking, Roll back on the &nbsp;&nbsp;&nbsp;throttle or repeat the process if you’re shifting down again`,
            ``,
            `&nbsp;&nbsp;&nbsp;You’ll be surprised how many people glance at the gear shifter or clutch while riding. Don’t. Keep your eyes on the road.`,
            `&nbsp;&nbsp;&nbsp;Taking too long to shift can increase the chances of stalling or losing momentum — which is especially risky in traffic.`,
            `&nbsp;&nbsp;&nbsp;This causes sudden engine braking (more on this in a sec), resulting in a hard jerk or possible rear wheel skid.`,
            `&nbsp;&nbsp;&nbsp;Unlike cars, motorcycle engines are tuned to operate in higher RPMs. Shifting too soon drops you out of the powerband and kills &nbsp;&nbsp;&nbsp;acceleration. As a general rule, shift around 5,000–7,000 RPM, but always adjust based on your bike.`,
            `Let’s break it down: When you shift to a lower gear, your rear wheel is spinning faster than what the new gear can handle. If you dump the clutch, your transmission doesn’t get time to adjust. The engine revs shoot up and the bike slows down aggressively — that’s engine braking. It's not always bad, but if misused, it leads to jerky movement or worse, a locked rear wheel.`,
            `Now let’s talk about rev matching, also called throttle blipping. This technique makes gear changes buttery smooth — especially downshifts — by syncing your engine speed with the gearbox speed. ❌ We're not covering clutchless shifting in this guide for two reasons: It can damage your clutch plates if done incorrectly, You don’t need it to shift like a pro — I didn’t use it (but you can still **[watch Moto-Control’s clutchless shifting tutorial here](https://youtu.be/LYSthcagyF0?si=LBlZQdkzhH2lD2O9)** if you're curious)`,
            `&nbsp;&nbsp;&nbsp;Roll off the throttle Pull in the clutch Shift up Release the clutch quickly as you roll back on the throttle This whole process should &nbsp;&nbsp;&nbsp;happen very quickly and almost simultaneously — that’s the key. It’s deceptively simple in theory, but it takes muscle memory &nbsp;&nbsp;&nbsp;and practice to time it perfectly.`,
            `&nbsp;&nbsp;&nbsp;Roll off the throttle Pull in the clutch Blip the throttle (quickly roll it on and off) Shift down Release the clutch as the revs match up &nbsp;&nbsp;&nbsp;This move is super fast in real-time — **[watch this quick demo video](https://youtu.be/33zTKzIrtiM?si=e85l8Saznpa9ukD3)** to see it in action. Try to mentally rehearse the process first. &nbsp;&nbsp;&nbsp;It helps a lot when you actually start practicing.`,
            `Some influencers online say you can just engine brake from 5th to 1st gear and let the bike stop itself Not only is that laughably wrong, it’s dangerous. Here's the truth: Engine braking only accounts for ~20% of stopping power The other 80% comes from your actual brakes — using the right balance of front and rear brakes (which we’ll cover in the next guide) If you try to engine brake through all your gears without rev matching, you risk: Rear wheel lockup, Skidding, Falling, Instead use engine braking with rev matching — downshift one gear at a time and only when your revs calm down after each downshift, you do the next one.`,
            `Shifting may seem like a lot at first, but it becomes second nature with time. Focus on smoothness over speed — the timing will come later. Don’t rush the process.`,
            `I suggest you get used to the normal or Standard shifting process before moving on to Rev matching`
        ],
        images: [``,``,``,``,``,``,``,``,``,``,``,``,``,``,``,''],
        links: [``,``,``,``,``,``,``,``,``,``,``,``,``,``,``]
    },
    {
        id: 2.5,
        title: 'Braking',
        titles: [``,`Why Flipping a Motorcycle Isn’t So Easy`,`Grabbing the Front Brake`,`So Should You Use Only the Rear Brake?`,`Rear Brake Mid-Turn?`,``,``,``,`Combined Braking`,`ABS to the Rescue`,`Braking While Cornering`,`How Does Braking Affect a Leaning Bike`,`Takeaway`,],
        paragraphs: [
            `One of the most debated topics among riders: Which brake is safer—the front or the rear? Most people believe the rear brake is safer. Why? Because they’ve either experienced or seen a bicycle flip when someone slams the front brake at speed. So, it’s easy to assume the same thing applies to motorcycles. But here’s the deal—it’s not that simple, Let's see. _**(You can click on any of the physics terms in this guide to view a simple explanation and definition)**_`,
            `While flipping can happen, it’s not as easy as you'd think. A motorcycle has a lot more mass than a bicycle, and that gives it **[inertia](https://www.geeksforgeeks.org/physics/inertia/)**. Inertia resists sudden movement changes—like flipping over. Also, your motorcycle’s **[center of mass](https://www.geeksforgeeks.org/physics/centre-of-mass/)** is much lower than a bicycle’s. bike’s center of gravity is below you, not on top. That makes it more stable. So, flipping it accidentally just by braking normally? Very unlikely.`,
            `What is dangerous, though, is grabbing the front brake too quickly—without easing into it. This can make the front tire lose **[traction](https://en.wikipedia.org/wiki/Traction_(mechanics))**, causing a lowside crash (that’s when the bike falls under you and slides out). Why? Because during braking, your bike’s weight shifts forward. The faster you're going and the harder you brake, the more weight gets loaded onto the front tire. That’s actually a good thing—it gives you more traction. But this shift takes time. If you grab the brake too hard, too soon, the front wheel gets overwhelmed before it’s ready, locks up, and skids. Hence, the lowside `,
            `Tempting—but still a bad idea. When you brake, most of the weight shifts off the rear wheel. That means the rear tire has very little traction, especially toward the end of braking. Because of this, the rear brake only gives about 20–25% of your total braking power. If you rely on it alone, your stopping distance doubles, or even more. Worse, it locks up easily. If you’re braking in a straight line, maybe you skid a bit—still risky. But if you’re mid-turn and the rear slides out? That’s a problem.`,
            `If you’re using only the rear brake mid-corner, and the rear tire drifts: `,
            `&nbsp;&nbsp;**Option 1**: You keep braking → the bike lays down and you lowside.`,
            `&nbsp;&nbsp;**Option 2**: You release the brake → the rear tire suddenly regains grip → but your **[momentum](https://www.geeksforgeeks.org/physics/momentum-formula/)** and inertia throw you over → &nbsp;&nbsp;highside.`,
            `So yeah. Rear brake alone is not the safer choice either.`,
            `The safest and most effective way to stop a bike is to use both brakes together. Here's how Start by lightly applying the rear brake., As weight shifts to the front, ease off the rear., Gradually increase the front brake as the front tire gains more weight and traction., This technique allows for better control and max stopping power. But it’s also tricky to master. Timing matters a lot. One wrong move and you can lose grip.`,
            `This is where ABS (Anti-lock Braking System) becomes your best friend It doesn’t mean you can brake carelessly, but it helps prevent wheel lockup while you learn the correct technique. Until you’ve practiced enough to pull off combined braking smoothly, I recommend using only the front brake, but doing it progressively—slowly increasing pressure as the front tire gains weight. This gives you 80–90% of your braking power and is a safe workaround.`,
            `Everything we just talked about for straight-line braking applies in corners too—but with even less margin for error. The rear brake is even riskier in turns. It’s super easy to skid or drift if you mess up. The front brake also needs extra care—you have to be more progressive and smoother than ever. Why? Because when you lean, some of your tire’s grip is already being used to stay upright. The more you lean, the less traction you have left for braking.`,
            `When your bike is leaned over, the contact patch (the part of the tire touching the road) is off-center. If you brake using the front, the bike tends to stand up and go wide. At the same time, braking slows the bike down, causing it to lean more tightly into the corner. These two effects kind of cancel each other out, so the bike’s **[trajectory](https://www.merriam-webster.com/dictionary/trajectory)** stays fairly stable. (Weird, but convenient, right?)`,
            `Keep your arms relaxed. Brake smoothly and with control. Trust the physics. And if your bike has ABS—use it.`
        ],
        images: [``,``,`/weighttransfer.webp`,``,``,``,``,``,``,``,``,`/leanbrake.webp`,``,],
        links: [``,``,``,``,``,``,``,``,``,``,``,``,``,],
        note: 'Note: All the images in this section are provided by Moto Control. Huge thanks to them — be sure to check out their YouTube channel, linked in the Credits Page.'
    },
    {
        id: 3.1,
        title: 'Safety Gear Overview',
        titles: [``,``,`Why Gear Matters`,``,`What Gear Do You Actually Need?`,`&nbsp;&nbsp;Helmet`,`&nbsp;&nbsp;Jacket`,`&nbsp;&nbsp;Gloves`,`&nbsp;&nbsp;Pants`,`&nbsp;&nbsp;Boots`,``,``,],
        paragraphs: [
            `Riding a bike is hands down one of the most thrilling things you can do on two wheels—but let’s not kid ourselves: without the right safety gear, it can go south real fast.`,
            `Still, a lot of riders, especially beginners, tend to skip out on wearing proper riding gear. Some think it’s uncomfortable, others just think they won’t need it unless something bad happens. But that’s the thing—you don’t get a heads-up before you crash. And when it happens, the gear is the only thing between you and a trip to the ER (or worse).`,
            `If you ride without gear, you’re basically asking the road to tattoo your skin with gravel and regret. Here’s what you’re exposing yourself to without protection: Road rash (like skin grated off like cheese), Deep cuts and bruises, Broken bones, Head injuries, And in the worst cases — fatal injuries`,
            `Wearing proper gear doesn’t make you invincible, but it massively reduces how badly you’ll get hurt if things go wrong. And that’s worth more than any style points.`,
            `Let’s break it down to the basics—here’s the core gear every rider should have:`,
            `&nbsp;&nbsp;&nbsp;This one’s non-negotiable. A good full-face helmet protects not just your head but your jaw and face too. We'll go into how to &nbsp;&nbsp;&nbsp;choose one in the next section.`,
            `&nbsp;&nbsp;&nbsp;Preferably one with armor on the elbows, shoulders, and back. Don’t rely on denim—it’s useless in a slide.`,
            `&nbsp;&nbsp;&nbsp;Protect your hands. You’ll instinctively use them to break your fall, and without gloves… let’s just say it won’t be pretty.`,
            `&nbsp;&nbsp;&nbsp;Riding jeans or textile pants with armor. Regular jeans tear apart within seconds on impact.`,
            `&nbsp;&nbsp;&nbsp;Ankle protection is a must. Riding boots are reinforced and won’t fly off or fold up like sneakers.`,
            `There’s also advanced gear like airbag vests and full riding suits—but don’t let that overwhelm you. Start with the core five above. Build from there.`,
            `Riding safe doesn’t mean riding boring—it just means you’re smart enough to suit up before you send it. And trust me, gear feels way cooler when it’s saving your ass.`
        ],
        images: [``,``,``,``,``,``,``,``,``,``,``,``,],
        links: [``,``,``,``,``,``,``,``,``,``,``,``,]
    },
    {
        id: 3.2,
        title: 'Choosing a Helmet',
        titles: [``,`Always Go Full Face`,`Helmet Certifications`,`DOT`,`SNELL`,`ECE and SHARP`,`Brands You Can Trust`,``,],
        paragraphs: [
            `If there's one piece of gear you absolutely cannot compromise on, it’s your helmet. It's the only thing standing between your skull and the asphalt. That’s why this entire section is dedicated to helping you choose the right one — not just any helmet, but one that actually does its job.`,
            `In a crash, the chin is one of the most common impact points. And if you're wearing a half-face helmet, guess who’s taking the hit? You. Your jaw can break, or worse — the shock can rattle your brain. Half-face helmets are basically fashion accessories. Stick to a full-face helmet — no exceptions.`,
            `There’s a bunch of acronyms on helmets, and no, they’re not just for show. They tell you whether that helmet has passed actual safety tests. Here’s a breakdown of the big ones:`,
            `This one is the minimum standard for helmets sold in the U.S. A DOT-approved helmet is tested for: Impact absorption – Can it take a hard hit without transferring the energy to your skull? , Penetration resistance – Can it stop sharp objects from going through? , Strap strength – Will the helmet stay on your head during impact? They even test the helmets in different environments — heat, cold, humidity, and even underwater — just to be sure it holds up in real-world conditions.`,
            `This is next-level stuff. SNELL is an independent safety foundation, and their tests are far more intense than DOT. Here's what they add over the basic DOT certification: Fit testing – Making sure the helmet stays snug on your head. , Chin-bar impact testing – So your jaw doesn’t get destroyed. , Visor penetration testing – They literally shoot pellets at the visor. Manufacturers don’t need SNELL certification, but the ones who voluntarily go for it? They’re serious about your safety.`,
            `ECE is the European standard and is more rigorous than DOT in many aspects. If your helmet has both DOT + ECE, that’s a very solid combo. SHARP is a UK-based rating system that gives you a star rating (1–5) based on real crash data and lab tests. Good to check, if available`,
            `You should always buy from a trusted, well-established brand. No shady knockoffs from sketchy sites — your head deserves better.`,
            `For example, I personally use and highly recommend the AGV K1 S. It’s a solid full-face helmet with proper certifications, great ventilation, and it doesn’t cost a fortune. Do your research, but don’t cheap out`,
        ],
        links: [``,``,``,``,``,``,``,``,],
        images:[``,`/agvk1s.webp`,``,``,``,``,``,``,]
    },
    {
        id: 3.3,
        title: 'Choosing Riding Gear',
        titles: [``,`1. Boots`,`2. Gloves`,`3. Jacket`,`4. Pants`,`Final Tip`],
        paragraphs: [
            `We already covered helmets in the last guide, so let’s move on to the rest of the essential riding gear. I’ll list them in the order you should invest in them—if you’re on a budget, prioritize from the top down, starting with a helmet (always #1)`,
            `Motorcycle boots are underrated but incredibly important. They protect your feet and ankles during accidents and also give you a firm grip on the footpegs, improving control and balance while riding. Look for boots with: Reinforced toe caps and strong soles for impact protection., Waterproof or water-resistant build to keep your feet dry., Reflective elements for better visibility at night.`,
            `Your hands are likely to hit the ground first in a fall—gloves protect them from serious injury. What to look for: CE-rated protection and abrasion-resistant materials., Touchscreen compatibility (trust me, it’s helpful)., Good ventilation to keep your hands cool., Adjustable wrist closures for a secure fit`,
            `A riding jacket isn't just about style—it’s a core part of crash protection. Look for: CE-rated armor (shoulder, elbow, back) for impact protection., Leather or textile construction with abrasion resistance., Ventilation panels to regulate your temperature on long rides.`,
            `Often ignored, but trust me—you don’t want to slide down the road in jeans. Look for: High-quality, abrasion-resistant materials., Built-in knee and hip armor for impact zones., Good ventilation and waterproof options if you ride in different weather conditions.`,
            `Never cheap out on riding gear. Always buy the highest quality your budget allows. You’re investing in your own safety, and it only takes one fall to appreciate every Buck you spent on it.`,
        ],
        images: [``,``,``,``,``,``],
        links: [``,``,``,``,``,``]
    }
]

export default guideData