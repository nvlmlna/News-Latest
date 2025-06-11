import paths from "../assets/paths-niki.png";
export const posts = [
 
  {
    id: "AI-1",
    title: "AI-enabled control system helps autonomous drones stay on target in uncertain environments",
    excerpt: "An autonomous drone carrying water to help extinguish a wildfire in the Sierra Nevada might encounter swirling Santa Ana winds that threaten to push it off course. Rapidly adapting to these unknown disturbances inflight presents an enormous challenge for the drone’s flight control system.",
    content: `An autonomous drone carrying water to help extinguish a wildfire in the Sierra Nevada might encounter swirling Santa Ana winds that threaten to push it off course. Rapidly adapting to these unknown disturbances inflight presents an enormous challenge for the drone’s flight control system. \n
              To help such a drone stay on target, MIT researchers developed a new, machine learning-based adaptive control algorithm that could minimize its deviation from its intended trajectory in the face of unpredictable forces like gusty winds. \n
              Unlike standard approaches, the new technique does not require the person programming the autonomous drone to know anything in advance about the structure of these uncertain disturbances. Instead, the control system’s artificial intelligence model learns all it needs to know from a small amount of observational data collected from 15 minutes of flight time. \n
              Importantly, the technique automatically determines which optimization algorithm it should use to adapt to the disturbances, which improves tracking performance. It chooses the algorithm that best suits the geometry of specific disturbances this drone is facing. \n
              The researchers train their control system to do both things simultaneously using a technique called meta-learning, which teaches the system how to adapt to different types of disturbances. \n
              Taken together, these ingredients enable their adaptive control system to achieve 50 percent less trajectory tracking error than baseline methods in simulations and perform better with new wind speeds it didn’t see during training. \n
              In the future, this adaptive control system could help autonomous drones more efficiently deliver heavy parcels despite strong winds or monitor fire-prone areas of a national park. \n
              “The concurrent learning of these components is what gives our method its strength. By leveraging meta-learning, our controller can automatically make choices that will be best for quick adaptation,” says Navid Azizan, who is the Esther and Harold E. Edgerton Assistant Professor in the MIT Department of Mechanical Engineering and the Institute for Data, Systems, and Society (IDSS), a principal investigator of the Laboratory for Information and Decision Systems (LIDS), and the senior author of a paper on this control system. \n
              Azizan is joined on the paper by lead author Sunbochen Tang, a graduate student in the Department of Aeronautics and Astronautics, and Haoyuan Sun, a graduate student in the Department of Electrical Engineering and Computer Science. The research was recently presented at the Learning for Dynamics and Control Conference.
              `,
    date: "2025-06-09",
    imageUrl: "https://news.mit.edu/sites/default/files/styles/news_article__image_gallery/public/images/202506/MIT_MetaLearning-01_0.jpg?itok=6DYTsM2b",
    url: "https://news.mit.edu/2025/ai-enabled-control-system-helps-autonomous-drones-uncertain-environments-0609",
    category: "AI",

  },
  {
    id: "AI-2",
    title: "Porsche Introduces AI System to Predict Vehicle Faults",
    excerpt: "New AI technology aims to save motorists on repair bills by detecting issues early.",
    content: `
              Porsche has unveiled a groundbreaking AI technology that can detect vehicle faults before they occur, potentially saving motorists thousands of pounds in repair bills. Currently featured in the Porsche Macan, the system uses real-time diagnostic data sent to the cloud, where AI analyzes for anomalies and alerts the driver via a mobile app.
              Currently only available in the Porsche Macan, the tech works by sending real-time diagnostics data to the cloud which is then analysed by artificial intelligence.
              Any irregularities or problems are then sent to an app which the owner can check for any looming issues.
              Motorists will then be advised to take their vehicle to the local garage.
              The technology has been dubbed the first-of-its kind with manufacturers traditionally reacting to problems rather than catching them early on.
              Speaking to Auto Express, Porsche's head of data-driven quality Nora Lobenstein, said: "Up until now, [manufacturers] have been reactionary to problems.
              "With this preventative concept, we can detect a problem, even if for the customer it’s not possible.
              “It’s really interesting what we learn from all of this. Especially in how high-voltage cells and battery systems behave.
              "It’s not something that we could monitor before.”
              While the feature is only available in the Macan for now, rumours suggest it might soon come to the Taycan too.
              Lobenstein also suggested it could come to ICE Porsche cars such as the 911 but said for now the company is "concentraiting on high-voltage battery technology."
             `,
    date: "2025-06-01",
    imageUrl: "https://www.thescottishsun.co.uk/wp-content/uploads/sites/2/2025/05/digital-generated-image-artificial-intelligence-971389575.jpg?w=620",
    url: "https://www.thescottishsun.co.uk/motors/14871235/ai-saves-motorists-repair-bills/",
    category: "AI",
    
  },
   {
    id: "AI-3",
    title: "Google's Veo 3 AI video generator is unlike anything you've ever seen. The world isn't ready.",
    excerpt: "We're so cooked.",
    content: `
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sagittis, ipsum at gravida bibendum, nulla elit rhoncus nulla, sed efficitur est mi nec urna. Phasellus imperdiet libero sed justo scelerisque, vitae porta ante sodales. Suspendisse potenti. Nulla facilisi. Cras vitae tincidunt nibh, in dapibus libero. Sed tincidunt dapibus justo, nec gravida tortor malesuada a. Etiam ornare faucibus nisl, vel tincidunt nisl gravida sit amet.
              Nulla facilisi. Pellentesque ac laoreet sapien. Nam porta, mi in gravida gravida, justo lorem tincidunt nisi, ut eleifend orci nulla eget velit. Fusce sed nisi magna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean feugiat, lacus nec congue viverra, arcu sem gravida sem, at dignissim augue tortor in est. Curabitur scelerisque tellus et justo luctus, in placerat massa laoreet.
              In hac habitasse platea dictumst. Curabitur tempor porttitor justo, eget rhoncus enim pharetra sed. In a neque sit amet elit pharetra tristique ac sed sapien. Maecenas ultricies est et ex faucibus, sed ultrices nulla aliquam. Nunc sodales, velit sed laoreet suscipit, eros turpis fringilla risus, non porta odio orci nec tortor. Nullam semper, velit sed pulvinar malesuada, lorem purus posuere enim, id fermentum nisi sapien et ante. Curabitur eu enim quis diam tempor vehicula nec ac metus.
              Phasellus ac gravida sem. Sed iaculis vitae nibh in vulputate. Integer quis erat eros. Etiam gravida laoreet risus, nec tincidunt leo finibus at. Vivamus ut nisi fermentum, ultrices elit at, ullamcorper mi. Pellentesque fermentum pulvinar dui, non convallis augue tincidunt vitae. Duis sagittis orci non urna finibus, nec pretium est tempor. Sed vel efficitur risus, et hendrerit nibh. Aliquam eget sodales orci. Donec tempor ipsum sit amet efficitur facilisis.
              Sed tincidunt erat eget eros tristique, at aliquam purus cursus. Maecenas egestas purus quis sem congue malesuada. Donec tincidunt nisi a odio vehicula, in viverra nunc fermentum. Integer scelerisque congue nunc. Etiam convallis, diam a feugiat suscipit, sem est porttitor turpis, at rutrum ex ante id nibh. Pellentesque iaculis congue diam. Vivamus posuere pulvinar dui, ac rhoncus ante efficitur ac.
              Duis et congue purus. Proin ac diam volutpat, efficitur nisi ac, gravida nunc. Integer facilisis orci a arcu cursus, non sollicitudin purus efficitur. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam erat volutpat. Etiam nec arcu augue. Sed suscipit nec tellus ut volutpat. Cras luctus ante non turpis aliquam efficitur.
              Vestibulum in lorem et nisl rutrum tristique. Integer vulputate, erat sed tempor ultricies, enim nisi vehicula leo, vel sodales justo tellus a risus. Morbi porttitor nisi quis nisl dignissim porttitor. Aliquam tristique, felis vitae pretium fringilla, sapien lacus faucibus nulla, vel dapibus metus nulla vitae nulla. Fusce ullamcorper elit sit amet luctus varius. Pellentesque ac turpis sit amet lacus dictum dictum at eget velit
             `,
    date: "2024-09-26",
    imageUrl: "https://helios-i.mashable.com/imagery/articles/07r668h4bWjbkVa31FcKWoG/hero-image.fill.size_1248x702.v1748632494.jpg",
    url: "https://mashable.com/article/google-veo-3-ai-video",
    category: "AI",
    
  },
  {
    id: "AI-4",
    title: "Anthropic CEO Warns AI Could Eliminate 50% of Entry-Level White-Collar Jobs",
    excerpt: "Dario Amodei highlights AI's potential to significantly disrupt the job market.",
    content: `
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sagittis, ipsum at gravida bibendum, nulla elit rhoncus nulla, sed efficitur est mi nec urna. Phasellus imperdiet libero sed justo scelerisque, vitae porta ante sodales. Suspendisse potenti. Nulla facilisi. Cras vitae tincidunt nibh, in dapibus libero. Sed tincidunt dapibus justo, nec gravida tortor malesuada a. Etiam ornare faucibus nisl, vel tincidunt nisl gravida sit amet.
              Nulla facilisi. Pellentesque ac laoreet sapien. Nam porta, mi in gravida gravida, justo lorem tincidunt nisi, ut eleifend orci nulla eget velit. Fusce sed nisi magna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean feugiat, lacus nec congue viverra, arcu sem gravida sem, at dignissim augue tortor in est. Curabitur scelerisque tellus et justo luctus, in placerat massa laoreet.
              In hac habitasse platea dictumst. Curabitur tempor porttitor justo, eget rhoncus enim pharetra sed. In a neque sit amet elit pharetra tristique ac sed sapien. Maecenas ultricies est et ex faucibus, sed ultrices nulla aliquam. Nunc sodales, velit sed laoreet suscipit, eros turpis fringilla risus, non porta odio orci nec tortor. Nullam semper, velit sed pulvinar malesuada, lorem purus posuere enim, id fermentum nisi sapien et ante. Curabitur eu enim quis diam tempor vehicula nec ac metus.
              Phasellus ac gravida sem. Sed iaculis vitae nibh in vulputate. Integer quis erat eros. Etiam gravida laoreet risus, nec tincidunt leo finibus at. Vivamus ut nisi fermentum, ultrices elit at, ullamcorper mi. Pellentesque fermentum pulvinar dui, non convallis augue tincidunt vitae. Duis sagittis orci non urna finibus, nec pretium est tempor. Sed vel efficitur risus, et hendrerit nibh. Aliquam eget sodales orci. Donec tempor ipsum sit amet efficitur facilisis.
              Sed tincidunt erat eget eros tristique, at aliquam purus cursus. Maecenas egestas purus quis sem congue malesuada. Donec tincidunt nisi a odio vehicula, in viverra nunc fermentum. Integer scelerisque congue nunc. Etiam convallis, diam a feugiat suscipit, sem est porttitor turpis, at rutrum ex ante id nibh. Pellentesque iaculis congue diam. Vivamus posuere pulvinar dui, ac rhoncus ante efficitur ac.
              Duis et congue purus. Proin ac diam volutpat, efficitur nisi ac, gravida nunc. Integer facilisis orci a arcu cursus, non sollicitudin purus efficitur. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam erat volutpat. Etiam nec arcu augue. Sed suscipit nec tellus ut volutpat. Cras luctus ante non turpis aliquam efficitur.
              Vestibulum in lorem et nisl rutrum tristique. Integer vulputate, erat sed tempor ultricies, enim nisi vehicula leo, vel sodales justo tellus a risus. Morbi porttitor nisi quis nisl dignissim porttitor. Aliquam tristique, felis vitae pretium fringilla, sapien lacus faucibus nulla, vel dapibus metus nulla vitae nulla. Fusce ullamcorper elit sit amet luctus varius. Pellentesque ac turpis sit amet lacus dictum dictum at eget velit
             `,
    date: "2025-05-31",
    imageUrl: "https://nypost.com/wp-content/uploads/sites/2/2025/05/anthropic-ceo-dario-amodei-chief-105129350_44e665.jpg?resize=576,384&quality=75&strip=all",
    url: "https://nypost.com/2025/05/31/business/ceo-warns-ai-could-wipe-out-1-in-2-white-collar-jobs-in-next-five-years/",
    category: "AI",
    
  },
  {
    id: "AI-5",
    title: "Nvidia CEO Jensen Huang issues urgent AI warning: You’re going to lose your job to someone who...",
    excerpt: "Nvidia CEO Jensen Huang warns that workers must embrace AI",
    content: `
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sagittis, ipsum at gravida bibendum, nulla elit rhoncus nulla, sed efficitur est mi nec urna. Phasellus imperdiet libero sed justo scelerisque, vitae porta ante sodales. Suspendisse potenti. Nulla facilisi. Cras vitae tincidunt nibh, in dapibus libero. Sed tincidunt dapibus justo, nec gravida tortor malesuada a. Etiam ornare faucibus nisl, vel tincidunt nisl gravida sit amet.
              Nulla facilisi. Pellentesque ac laoreet sapien. Nam porta, mi in gravida gravida, justo lorem tincidunt nisi, ut eleifend orci nulla eget velit. Fusce sed nisi magna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean feugiat, lacus nec congue viverra, arcu sem gravida sem, at dignissim augue tortor in est. Curabitur scelerisque tellus et justo luctus, in placerat massa laoreet.
              In hac habitasse platea dictumst. Curabitur tempor porttitor justo, eget rhoncus enim pharetra sed. In a neque sit amet elit pharetra tristique ac sed sapien. Maecenas ultricies est et ex faucibus, sed ultrices nulla aliquam. Nunc sodales, velit sed laoreet suscipit, eros turpis fringilla risus, non porta odio orci nec tortor. Nullam semper, velit sed pulvinar malesuada, lorem purus posuere enim, id fermentum nisi sapien et ante. Curabitur eu enim quis diam tempor vehicula nec ac metus.
              Phasellus ac gravida sem. Sed iaculis vitae nibh in vulputate. Integer quis erat eros. Etiam gravida laoreet risus, nec tincidunt leo finibus at. Vivamus ut nisi fermentum, ultrices elit at, ullamcorper mi. Pellentesque fermentum pulvinar dui, non convallis augue tincidunt vitae. Duis sagittis orci non urna finibus, nec pretium est tempor. Sed vel efficitur risus, et hendrerit nibh. Aliquam eget sodales orci. Donec tempor ipsum sit amet efficitur facilisis.
              Sed tincidunt erat eget eros tristique, at aliquam purus cursus. Maecenas egestas purus quis sem congue malesuada. Donec tincidunt nisi a odio vehicula, in viverra nunc fermentum. Integer scelerisque congue nunc. Etiam convallis, diam a feugiat suscipit, sem est porttitor turpis, at rutrum ex ante id nibh. Pellentesque iaculis congue diam. Vivamus posuere pulvinar dui, ac rhoncus ante efficitur ac.
              Duis et congue purus. Proin ac diam volutpat, efficitur nisi ac, gravida nunc. Integer facilisis orci a arcu cursus, non sollicitudin purus efficitur. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam erat volutpat. Etiam nec arcu augue. Sed suscipit nec tellus ut volutpat. Cras luctus ante non turpis aliquam efficitur.
              Vestibulum in lorem et nisl rutrum tristique. Integer vulputate, erat sed tempor ultricies, enim nisi vehicula leo, vel sodales justo tellus a risus. Morbi porttitor nisi quis nisl dignissim porttitor. Aliquam tristique, felis vitae pretium fringilla, sapien lacus faucibus nulla, vel dapibus metus nulla vitae nulla. Fusce ullamcorper elit sit amet luctus varius. Pellentesque ac turpis sit amet lacus dictum dictum at eget velit
             `,
    date: "2025-05-31",
    imageUrl: "https://static.toiimg.com/thumb/msid-121491087,imgsize-39766,width-400,resizemode-4/Nvidia-CEO-Jensen-Huang-issues-urgent-AI-warning.jpg",
    url: "https://timesofindia.indiatimes.com/technology/tech-news/nvidia-ceo-jensen-huang-issues-urgent-ai-warning-youre-going-to-lose-your-job-to-someone-who-/articleshow/121489755.cms",
    category: "AI",
    
  },
  {
    id: "AI-6",
    title: "You Can Now Turn Text Prompts Into Lego Designs With LegoGPT AI",
    excerpt: "Researchers at Carnegie Mellon University have developed LEGO-GPT, an AI model.",
    content: `
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sagittis, ipsum at gravida bibendum, nulla elit rhoncus nulla, sed efficitur est mi nec urna. Phasellus imperdiet libero sed justo scelerisque, vitae porta ante sodales. Suspendisse potenti. Nulla facilisi. Cras vitae tincidunt nibh, in dapibus libero. Sed tincidunt dapibus justo, nec gravida tortor malesuada a. Etiam ornare faucibus nisl, vel tincidunt nisl gravida sit amet.
              Nulla facilisi. Pellentesque ac laoreet sapien. Nam porta, mi in gravida gravida, justo lorem tincidunt nisi, ut eleifend orci nulla eget velit. Fusce sed nisi magna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean feugiat, lacus nec congue viverra, arcu sem gravida sem, at dignissim augue tortor in est. Curabitur scelerisque tellus et justo luctus, in placerat massa laoreet.
              In hac habitasse platea dictumst. Curabitur tempor porttitor justo, eget rhoncus enim pharetra sed. In a neque sit amet elit pharetra tristique ac sed sapien. Maecenas ultricies est et ex faucibus, sed ultrices nulla aliquam. Nunc sodales, velit sed laoreet suscipit, eros turpis fringilla risus, non porta odio orci nec tortor. Nullam semper, velit sed pulvinar malesuada, lorem purus posuere enim, id fermentum nisi sapien et ante. Curabitur eu enim quis diam tempor vehicula nec ac metus.
              Phasellus ac gravida sem. Sed iaculis vitae nibh in vulputate. Integer quis erat eros. Etiam gravida laoreet risus, nec tincidunt leo finibus at. Vivamus ut nisi fermentum, ultrices elit at, ullamcorper mi. Pellentesque fermentum pulvinar dui, non convallis augue tincidunt vitae. Duis sagittis orci non urna finibus, nec pretium est tempor. Sed vel efficitur risus, et hendrerit nibh. Aliquam eget sodales orci. Donec tempor ipsum sit amet efficitur facilisis.
              Sed tincidunt erat eget eros tristique, at aliquam purus cursus. Maecenas egestas purus quis sem congue malesuada. Donec tincidunt nisi a odio vehicula, in viverra nunc fermentum. Integer scelerisque congue nunc. Etiam convallis, diam a feugiat suscipit, sem est porttitor turpis, at rutrum ex ante id nibh. Pellentesque iaculis congue diam. Vivamus posuere pulvinar dui, ac rhoncus ante efficitur ac.
              Duis et congue purus. Proin ac diam volutpat, efficitur nisi ac, gravida nunc. Integer facilisis orci a arcu cursus, non sollicitudin purus efficitur. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam erat volutpat. Etiam nec arcu augue. Sed suscipit nec tellus ut volutpat. Cras luctus ante non turpis aliquam efficitur.
              Vestibulum in lorem et nisl rutrum tristique. Integer vulputate, erat sed tempor ultricies, enim nisi vehicula leo, vel sodales justo tellus a risus. Morbi porttitor nisi quis nisl dignissim porttitor. Aliquam tristique, felis vitae pretium fringilla, sapien lacus faucibus nulla, vel dapibus metus nulla vitae nulla. Fusce ullamcorper elit sit amet luctus varius. Pellentesque ac turpis sit amet lacus dictum dictum at eget velit
             `,
    date: "2025-05-31",
    imageUrl: "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2025%2F05%2F31%2Fturn-text-prompts-into-lego-designs-legogpt-ai-news-001.jpg?q=90&w=1400&cbr=1&fit=max",
    url: "https://hypebeast.com/2025/5/turn-text-prompts-into-lego-designs-legogpt-ai-news",
    category: "AI",
    
  },
  {
    id: "AI-7",
    title: "OpenAI's 'smartest' AI model was explicitly told to shut down — and it refused",
    excerpt: "An artificial intelligence safety firm has found that OpenAI's o3 and o4-mini models sometimes refuse to shut down, and will sabotage computer scripts in order to keep working on tasks.",
    content: `
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sagittis, ipsum at gravida bibendum, nulla elit rhoncus nulla, sed efficitur est mi nec urna. Phasellus imperdiet libero sed justo scelerisque, vitae porta ante sodales. Suspendisse potenti. Nulla facilisi. Cras vitae tincidunt nibh, in dapibus libero. Sed tincidunt dapibus justo, nec gravida tortor malesuada a. Etiam ornare faucibus nisl, vel tincidunt nisl gravida sit amet.
              Nulla facilisi. Pellentesque ac laoreet sapien. Nam porta, mi in gravida gravida, justo lorem tincidunt nisi, ut eleifend orci nulla eget velit. Fusce sed nisi magna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean feugiat, lacus nec congue viverra, arcu sem gravida sem, at dignissim augue tortor in est. Curabitur scelerisque tellus et justo luctus, in placerat massa laoreet.
              In hac habitasse platea dictumst. Curabitur tempor porttitor justo, eget rhoncus enim pharetra sed. In a neque sit amet elit pharetra tristique ac sed sapien. Maecenas ultricies est et ex faucibus, sed ultrices nulla aliquam. Nunc sodales, velit sed laoreet suscipit, eros turpis fringilla risus, non porta odio orci nec tortor. Nullam semper, velit sed pulvinar malesuada, lorem purus posuere enim, id fermentum nisi sapien et ante. Curabitur eu enim quis diam tempor vehicula nec ac metus.
              Phasellus ac gravida sem. Sed iaculis vitae nibh in vulputate. Integer quis erat eros. Etiam gravida laoreet risus, nec tincidunt leo finibus at. Vivamus ut nisi fermentum, ultrices elit at, ullamcorper mi. Pellentesque fermentum pulvinar dui, non convallis augue tincidunt vitae. Duis sagittis orci non urna finibus, nec pretium est tempor. Sed vel efficitur risus, et hendrerit nibh. Aliquam eget sodales orci. Donec tempor ipsum sit amet efficitur facilisis.
              Sed tincidunt erat eget eros tristique, at aliquam purus cursus. Maecenas egestas purus quis sem congue malesuada. Donec tincidunt nisi a odio vehicula, in viverra nunc fermentum. Integer scelerisque congue nunc. Etiam convallis, diam a feugiat suscipit, sem est porttitor turpis, at rutrum ex ante id nibh. Pellentesque iaculis congue diam. Vivamus posuere pulvinar dui, ac rhoncus ante efficitur ac.
              Duis et congue purus. Proin ac diam volutpat, efficitur nisi ac, gravida nunc. Integer facilisis orci a arcu cursus, non sollicitudin purus efficitur. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam erat volutpat. Etiam nec arcu augue. Sed suscipit nec tellus ut volutpat. Cras luctus ante non turpis aliquam efficitur.
              Vestibulum in lorem et nisl rutrum tristique. Integer vulputate, erat sed tempor ultricies, enim nisi vehicula leo, vel sodales justo tellus a risus. Morbi porttitor nisi quis nisl dignissim porttitor. Aliquam tristique, felis vitae pretium fringilla, sapien lacus faucibus nulla, vel dapibus metus nulla vitae nulla. Fusce ullamcorper elit sit amet luctus varius. Pellentesque ac turpis sit amet lacus dictum dictum at eget velit
             `,
    date: "2025-05-31",
    imageUrl: "https://cdn.mos.cms.futurecdn.net/KiUoCBZ6swihvybMqsAfgQ-650-80.jpg.webp",
    url: "https://www.livescience.com/technology/artificial-intelligence/openais-smartest-ai-model-was-explicitly-told-to-shut-down-and-it-refused",
    category: "AI",
    
  },
  {
    id: "AI-8",
    title: "AI to help more patients get prostate cancer drug that cuts risk of death",
    excerpt: "AI could eliminate the 'postcode lottery' surrounding a life-extending treatment for advanced prostate cancer, researchers have said.",
    content: `
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sagittis, ipsum at gravida bibendum, nulla elit rhoncus nulla, sed efficitur est mi nec urna. Phasellus imperdiet libero sed justo scelerisque, vitae porta ante sodales. Suspendisse potenti. Nulla facilisi. Cras vitae tincidunt nibh, in dapibus libero. Sed tincidunt dapibus justo, nec gravida tortor malesuada a. Etiam ornare faucibus nisl, vel tincidunt nisl gravida sit amet.
              Nulla facilisi. Pellentesque ac laoreet sapien. Nam porta, mi in gravida gravida, justo lorem tincidunt nisi, ut eleifend orci nulla eget velit. Fusce sed nisi magna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean feugiat, lacus nec congue viverra, arcu sem gravida sem, at dignissim augue tortor in est. Curabitur scelerisque tellus et justo luctus, in placerat massa laoreet.
              In hac habitasse platea dictumst. Curabitur tempor porttitor justo, eget rhoncus enim pharetra sed. In a neque sit amet elit pharetra tristique ac sed sapien. Maecenas ultricies est et ex faucibus, sed ultrices nulla aliquam. Nunc sodales, velit sed laoreet suscipit, eros turpis fringilla risus, non porta odio orci nec tortor. Nullam semper, velit sed pulvinar malesuada, lorem purus posuere enim, id fermentum nisi sapien et ante. Curabitur eu enim quis diam tempor vehicula nec ac metus.
              Phasellus ac gravida sem. Sed iaculis vitae nibh in vulputate. Integer quis erat eros. Etiam gravida laoreet risus, nec tincidunt leo finibus at. Vivamus ut nisi fermentum, ultrices elit at, ullamcorper mi. Pellentesque fermentum pulvinar dui, non convallis augue tincidunt vitae. Duis sagittis orci non urna finibus, nec pretium est tempor. Sed vel efficitur risus, et hendrerit nibh. Aliquam eget sodales orci. Donec tempor ipsum sit amet efficitur facilisis.
              Sed tincidunt erat eget eros tristique, at aliquam purus cursus. Maecenas egestas purus quis sem congue malesuada. Donec tincidunt nisi a odio vehicula, in viverra nunc fermentum. Integer scelerisque congue nunc. Etiam convallis, diam a feugiat suscipit, sem est porttitor turpis, at rutrum ex ante id nibh. Pellentesque iaculis congue diam. Vivamus posuere pulvinar dui, ac rhoncus ante efficitur ac.
              Duis et congue purus. Proin ac diam volutpat, efficitur nisi ac, gravida nunc. Integer facilisis orci a arcu cursus, non sollicitudin purus efficitur. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam erat volutpat. Etiam nec arcu augue. Sed suscipit nec tellus ut volutpat. Cras luctus ante non turpis aliquam efficitur.
              Vestibulum in lorem et nisl rutrum tristique. Integer vulputate, erat sed tempor ultricies, enim nisi vehicula leo, vel sodales justo tellus a risus. Morbi porttitor nisi quis nisl dignissim porttitor. Aliquam tristique, felis vitae pretium fringilla, sapien lacus faucibus nulla, vel dapibus metus nulla vitae nulla. Fusce ullamcorper elit sit amet luctus varius. Pellentesque ac turpis sit amet lacus dictum dictum at eget velit
             `,
    date: "2025-05-31",
    imageUrl: "https://static.independent.co.uk/2022/09/06/11/06110640-2a98a9a4-70cf-4fb7-b03b-3ca4f0aa719a.jpg?quality=75&width=1368&crop=3%3A2%2Csmart&auto=webp",
    url: "https://www.independent.co.uk/news/health/prostate-cancer-ai-drug-test-abiraterone-b2760773.html",
    category: "AI",
    
  },
  {
    id: "AI-9",
    title: "Chinese tech companies prepare for AI future without Nvidia, FT reports",
    excerpt: "China's biggest technology companies have begun the process of switching to homegrown chips as they contend with a dwindling stockpile of Nvidia, opens new tab processors and tightening United States export controls, the Financial Times reported on Thursday.",
    content: `
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sagittis, ipsum at gravida bibendum, nulla elit rhoncus nulla, sed efficitur est mi nec urna. Phasellus imperdiet libero sed justo scelerisque, vitae porta ante sodales. Suspendisse potenti. Nulla facilisi. Cras vitae tincidunt nibh, in dapibus libero. Sed tincidunt dapibus justo, nec gravida tortor malesuada a. Etiam ornare faucibus nisl, vel tincidunt nisl gravida sit amet.
              Nulla facilisi. Pellentesque ac laoreet sapien. Nam porta, mi in gravida gravida, justo lorem tincidunt nisi, ut eleifend orci nulla eget velit. Fusce sed nisi magna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean feugiat, lacus nec congue viverra, arcu sem gravida sem, at dignissim augue tortor in est. Curabitur scelerisque tellus et justo luctus, in placerat massa laoreet.
              In hac habitasse platea dictumst. Curabitur tempor porttitor justo, eget rhoncus enim pharetra sed. In a neque sit amet elit pharetra tristique ac sed sapien. Maecenas ultricies est et ex faucibus, sed ultrices nulla aliquam. Nunc sodales, velit sed laoreet suscipit, eros turpis fringilla risus, non porta odio orci nec tortor. Nullam semper, velit sed pulvinar malesuada, lorem purus posuere enim, id fermentum nisi sapien et ante. Curabitur eu enim quis diam tempor vehicula nec ac metus.
              Phasellus ac gravida sem. Sed iaculis vitae nibh in vulputate. Integer quis erat eros. Etiam gravida laoreet risus, nec tincidunt leo finibus at. Vivamus ut nisi fermentum, ultrices elit at, ullamcorper mi. Pellentesque fermentum pulvinar dui, non convallis augue tincidunt vitae. Duis sagittis orci non urna finibus, nec pretium est tempor. Sed vel efficitur risus, et hendrerit nibh. Aliquam eget sodales orci. Donec tempor ipsum sit amet efficitur facilisis.
              Sed tincidunt erat eget eros tristique, at aliquam purus cursus. Maecenas egestas purus quis sem congue malesuada. Donec tincidunt nisi a odio vehicula, in viverra nunc fermentum. Integer scelerisque congue nunc. Etiam convallis, diam a feugiat suscipit, sem est porttitor turpis, at rutrum ex ante id nibh. Pellentesque iaculis congue diam. Vivamus posuere pulvinar dui, ac rhoncus ante efficitur ac.
              Duis et congue purus. Proin ac diam volutpat, efficitur nisi ac, gravida nunc. Integer facilisis orci a arcu cursus, non sollicitudin purus efficitur. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam erat volutpat. Etiam nec arcu augue. Sed suscipit nec tellus ut volutpat. Cras luctus ante non turpis aliquam efficitur.
              Vestibulum in lorem et nisl rutrum tristique. Integer vulputate, erat sed tempor ultricies, enim nisi vehicula leo, vel sodales justo tellus a risus. Morbi porttitor nisi quis nisl dignissim porttitor. Aliquam tristique, felis vitae pretium fringilla, sapien lacus faucibus nulla, vel dapibus metus nulla vitae nulla. Fusce ullamcorper elit sit amet luctus varius. Pellentesque ac turpis sit amet lacus dictum dictum at eget velit
             `,
    date: "2025-05-30",
    imageUrl: "https://www.reuters.com/resizer/v2/VEDDW67TLBL3VF2HLLKIMOCSSU.jpg?auth=71b2518e21e7011b6065e16dec68a9bc069316f2ef12ee34f60dcf754efd9ef4&width=640&quality=80",
    url: "https://www.reuters.com/world/china/chinese-tech-companies-prepare-ai-future-without-nvidia-ft-reports-2025-05-30/",
    category: "AI",
    
  },
  {
    id: "AI-10",
    title: "AI Could Wipe 50% Of Entry-Level Jobs As Governments Hide Truth, Anthropic CEO Claims",
    excerpt: "According to the Anthropic boss, unemployment could increase by 10 per cent to 20 per cent over the next five years due to AI use.",
    content: `
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sagittis, ipsum at gravida bibendum, nulla elit rhoncus nulla, sed efficitur est mi nec urna. Phasellus imperdiet libero sed justo scelerisque, vitae porta ante sodales. Suspendisse potenti. Nulla facilisi. Cras vitae tincidunt nibh, in dapibus libero. Sed tincidunt dapibus justo, nec gravida tortor malesuada a. Etiam ornare faucibus nisl, vel tincidunt nisl gravida sit amet.
              Nulla facilisi. Pellentesque ac laoreet sapien. Nam porta, mi in gravida gravida, justo lorem tincidunt nisi, ut eleifend orci nulla eget velit. Fusce sed nisi magna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean feugiat, lacus nec congue viverra, arcu sem gravida sem, at dignissim augue tortor in est. Curabitur scelerisque tellus et justo luctus, in placerat massa laoreet.
              In hac habitasse platea dictumst. Curabitur tempor porttitor justo, eget rhoncus enim pharetra sed. In a neque sit amet elit pharetra tristique ac sed sapien. Maecenas ultricies est et ex faucibus, sed ultrices nulla aliquam. Nunc sodales, velit sed laoreet suscipit, eros turpis fringilla risus, non porta odio orci nec tortor. Nullam semper, velit sed pulvinar malesuada, lorem purus posuere enim, id fermentum nisi sapien et ante. Curabitur eu enim quis diam tempor vehicula nec ac metus.
              Phasellus ac gravida sem. Sed iaculis vitae nibh in vulputate. Integer quis erat eros. Etiam gravida laoreet risus, nec tincidunt leo finibus at. Vivamus ut nisi fermentum, ultrices elit at, ullamcorper mi. Pellentesque fermentum pulvinar dui, non convallis augue tincidunt vitae. Duis sagittis orci non urna finibus, nec pretium est tempor. Sed vel efficitur risus, et hendrerit nibh. Aliquam eget sodales orci. Donec tempor ipsum sit amet efficitur facilisis.
              Sed tincidunt erat eget eros tristique, at aliquam purus cursus. Maecenas egestas purus quis sem congue malesuada. Donec tincidunt nisi a odio vehicula, in viverra nunc fermentum. Integer scelerisque congue nunc. Etiam convallis, diam a feugiat suscipit, sem est porttitor turpis, at rutrum ex ante id nibh. Pellentesque iaculis congue diam. Vivamus posuere pulvinar dui, ac rhoncus ante efficitur ac.
              Duis et congue purus. Proin ac diam volutpat, efficitur nisi ac, gravida nunc. Integer facilisis orci a arcu cursus, non sollicitudin purus efficitur. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam erat volutpat. Etiam nec arcu augue. Sed suscipit nec tellus ut volutpat. Cras luctus ante non turpis aliquam efficitur.
              Vestibulum in lorem et nisl rutrum tristique. Integer vulputate, erat sed tempor ultricies, enim nisi vehicula leo, vel sodales justo tellus a risus. Morbi porttitor nisi quis nisl dignissim porttitor. Aliquam tristique, felis vitae pretium fringilla, sapien lacus faucibus nulla, vel dapibus metus nulla vitae nulla. Fusce ullamcorper elit sit amet luctus varius. Pellentesque ac turpis sit amet lacus dictum dictum at eget velit
             `,
    date: "2025-05-30",
    imageUrl: "https://c.ndtvimg.com/2025-02/ni0dbf38_-artificial-intelligence_625x300_01_February_25.jpeg?im=FeatureCrop,algorithm=dnn,width=773,height=435",
    url: "https://www.ndtv.com/world-news/ai-could-wipe-50-of-entry-level-jobs-as-governments-hide-truth-anthropic-ceo-claims-8542485#google_vignette",
    category: "AI",
    
  },
  {
    id: "AI-11",
    title: "AI could consume more power than Bitcoin by the end of 2025",
    excerpt: "AI could soon surpass Bitcoin mining in energy consumption, according to a new analysis that concludes artificial intelligence could use close to half of all the electricity consumed by data centers globally by the end of 2025.",
    content: `
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sagittis, ipsum at gravida bibendum, nulla elit rhoncus nulla, sed efficitur est mi nec urna. Phasellus imperdiet libero sed justo scelerisque, vitae porta ante sodales. Suspendisse potenti. Nulla facilisi. Cras vitae tincidunt nibh, in dapibus libero. Sed tincidunt dapibus justo, nec gravida tortor malesuada a. Etiam ornare faucibus nisl, vel tincidunt nisl gravida sit amet.
              Nulla facilisi. Pellentesque ac laoreet sapien. Nam porta, mi in gravida gravida, justo lorem tincidunt nisi, ut eleifend orci nulla eget velit. Fusce sed nisi magna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean feugiat, lacus nec congue viverra, arcu sem gravida sem, at dignissim augue tortor in est. Curabitur scelerisque tellus et justo luctus, in placerat massa laoreet.
              In hac habitasse platea dictumst. Curabitur tempor porttitor justo, eget rhoncus enim pharetra sed. In a neque sit amet elit pharetra tristique ac sed sapien. Maecenas ultricies est et ex faucibus, sed ultrices nulla aliquam. Nunc sodales, velit sed laoreet suscipit, eros turpis fringilla risus, non porta odio orci nec tortor. Nullam semper, velit sed pulvinar malesuada, lorem purus posuere enim, id fermentum nisi sapien et ante. Curabitur eu enim quis diam tempor vehicula nec ac metus.
              Phasellus ac gravida sem. Sed iaculis vitae nibh in vulputate. Integer quis erat eros. Etiam gravida laoreet risus, nec tincidunt leo finibus at. Vivamus ut nisi fermentum, ultrices elit at, ullamcorper mi. Pellentesque fermentum pulvinar dui, non convallis augue tincidunt vitae. Duis sagittis orci non urna finibus, nec pretium est tempor. Sed vel efficitur risus, et hendrerit nibh. Aliquam eget sodales orci. Donec tempor ipsum sit amet efficitur facilisis.
              Sed tincidunt erat eget eros tristique, at aliquam purus cursus. Maecenas egestas purus quis sem congue malesuada. Donec tincidunt nisi a odio vehicula, in viverra nunc fermentum. Integer scelerisque congue nunc. Etiam convallis, diam a feugiat suscipit, sem est porttitor turpis, at rutrum ex ante id nibh. Pellentesque iaculis congue diam. Vivamus posuere pulvinar dui, ac rhoncus ante efficitur ac.
              Duis et congue purus. Proin ac diam volutpat, efficitur nisi ac, gravida nunc. Integer facilisis orci a arcu cursus, non sollicitudin purus efficitur. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam erat volutpat. Etiam nec arcu augue. Sed suscipit nec tellus ut volutpat. Cras luctus ante non turpis aliquam efficitur.
              Vestibulum in lorem et nisl rutrum tristique. Integer vulputate, erat sed tempor ultricies, enim nisi vehicula leo, vel sodales justo tellus a risus. Morbi porttitor nisi quis nisl dignissim porttitor. Aliquam tristique, felis vitae pretium fringilla, sapien lacus faucibus nulla, vel dapibus metus nulla vitae nulla. Fusce ullamcorper elit sit amet luctus varius. Pellentesque ac turpis sit amet lacus dictum dictum at eget velit
             `,
    date: "2025-05-30",
    imageUrl: "https://platform.theverge.com/wp-content/uploads/sites/2/2025/05/STK428_CRYPTO_D.jpg?quality=90&strip=all&crop=0%2C0%2C100%2C100&w=750",
    url: "https://www.theverge.com/climate-change/676528/ai-data-center-energy-forecast-bitcoin-mining",
    category: "AI",
    
  },
  {
    id: "AI-12",
    title: "China accelerates big data, AI application in ocean industry, anticipating revolutionary changes",
    excerpt: "China is making significant strides in utilizing big data and artificial intelligence (AI) in the ocean industry.",
    content: "AI application in ocean industry.",
    date: "2024-09-26",
    imageUrl: "https://www.globaltimes.cn/Portals/0/attachment/2024/2024-07-22/d9484f20-216e-4e32-b4b0-26e281977b32.jpeg",
    url: "https://www.globaltimes.cn/page/202409/1320435.shtml",
    category: "AI",
    
  },

];