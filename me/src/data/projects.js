// TODO: Add these
// csc 460 -- patient handler
// csc 436 -- music player
// csc 210 -- wikiracer
// csc 335 -- cryptograms

const data = [
    {
        title: 'Narrative GIS',
        subtitle: 'An interactive mapping platform that empowers users to geo-spatially visualize any story',
        link: 'https://narrativegis.arizona.edu',
        image: '/images/mnemosyne.jpg',
        date: '2019-2021',
        desc:
        'A dynamic mapping system created during my time at Tech Core. Given any story with any denotion of time (chapters, pages, sequence, hours, dates, etc), events, characters, and themes can be mapped and its relationships explored. Features include uploading images and event descriptions; toggling certaing tags, routes, and narrowing times shown; displaying a separate page for timeline view; and custom mapping to map your story on any image of your choosing.',
        stack: '.NET Framework (C#, HTML, CSS, JS/jQuery), T-SQL, MapBox API',
    },
    {
        title: 'Tech Core Profiles',
        subtitle: 'Dynamic portfolio system',
        link: 'https://techcore.arizona.edu/TeamProfiles.aspx?',
        image: '/images/tcPortfolios.jpg',
        date: '2020',
        desc:
        'Built an entirely dynamic portfolio system for Tech Core. Given all of the members in our companies database, I designed and developed a system to populate and showcase members\' skills, projects, and overall stats as well as provide each member their own accessible webpage.',
        stack: '.NET Framework (C#, HTML, CSS, JS/jQuery), T-SQL',
    },
    {
        title: 'Digital Palms',
        subtitle: '',
        image: '/images/digitalPalms.png',
        date: '2021',
        desc:
        'Helped work on the Digital Palms project which prototyped the use of AR as a tour experience of Los Angeles neighbourhoods influenced by early 20th century German diaspora. The app allowed for the creation of geolocated augmented media (3D objects, video, images, audio) into customizable expereinces. You could upload a piece of media at any given coordinate, and another person within range of that coordinate would be able to \'step-in\' and receive said media.',
        stack: '.NET Framework (C#, HTML, CSS, JS/jQuery), T-SQL, Microsoft Azure, 8th Wall API',
    },
    {
        title: 'AR Trainer',
        subtitle: 'Microsoft HoloLens mixed reality project',
        link: 'https://www.youtube.com/watch?v=vY9kwEK-9Ps',
        image: 'https://news.microsoft.com/source/wp-content/uploads/2022/12/hololens-2-industrial-metaverse-annotate_1920x1080.jpg',
        date: '2021',
        desc:
        'Assisted with the research and development of the AR Trainer project in joint with the College of Nursing. I aided in the initial development of the product, having gained a better understanding of the Unity HoloLens development process and libraries. On this platform, I created several applications which involved object interaction and manipulation; connecting mixed reality interactions to a database and full-stack applications; and machine learning functionality which would take a picture of what\'s in sight and identify objects provided models trained in Azure.',
        stack: 'Unity (C#), MRTK, .NET Framework (C#, HTML, CSS, JS/jQuery), T-SQL',
    },
    {
        title: 'whatshapp',
        subtitle: 'Tinder for events nearby',
        link: 'https://youtu.be/dm1BSTBkjKo',
        image: '/images/whatshapp.png',
        date: '2022',
        desc:
        'whatshapp is a Mobile app using ReactJS and Python that allows users to show interest in events happening nearby -- as the user shows more interest towards particular events or topics, events shown are tailored to their interests. Aside from basic sign-up and login functionalities, the app allowed you to create events and swipe left or right to show interest.',
        stack: 'Expo/ React, Node, Python, T-SQL',
    },
    {
        title: 'HuklBot',
        link: 'https://github.com/RaphaelleTherese/huklbot',
        subtitle: 'Adittedly absurd',
        image: '/images/huklbot.png',
        date: '2020',
        desc:
        'In attempts to pester my friends at the height of the pandemic, I created a bot mirrored after my online presence. The bot had several FUNctionalites which included: annoying every member of a user by sending a personalized message; a fun mini-game that allowed you to harvest the organs of other server members, as well as view leaderboards and stats; and a punishment feature which if used by admin, would strip any member of their roles and banish them to a single channel spamming them with reddit images until released. At many times, this bot had also become my saving grace whereafter being removed from a server, I would immediately be re-appointed all of my roles of power.',
        stack: 'Node JS, Discord JS/ API, Heroku, MySQL',
    },
    {
        title: 'Social Deduction Game',
        subtitle: 'Multiplayer Java game',
        link: 'https://youtu.be/2Z6uxCIopv8',
        image: '/images/socialDeduction.png',
        date: 'December 2020',
        desc:
        'Using Java and specifically Java FX GUI functionality, my team and I decided to create a basic, multiplayer, social deduction game for our object-oriented course -- inspired by the highly popular game of the time, Among Us. Created in an MVC model framework, my team and I actively made design choices to properly represent the relationship between components. To make our code more clean and robust, we also included java doc pages documenting how our code is implemented.',
        code_link: 'https://drive.google.com/file/d/13C61_D8IRU60jLeEFs2wh5ox99yfJYOZ/view?usp=drive_link',
    },
    {
        title: 'Assembly Graphics Simulator',
        subtitle: 'MIPS drawing commands',
        link: 'https://www.youtube.com/watch?v=MWzES1PmWNQ',
        image: '/images/asm5_252.png',
        date: 'May 2021',
        desc:
        'Inspired by numerous GUI drawing libraries, for my final project in my computer organization class, I decided to create a very limited drawing simulator using assembly. I created a program in MIPS which interacted with the BitMap display and given commands, would draw lines, dots, or fill the screen, or change colors',
        stack: 'Assembly - MIPS',
    },
    {
    title: 'Skittle Sorter',
    subtitle: 'Arduino project created for Creative Coding course',
    link: 'https://www.youtube.com/shorts/4tXuCqE-pIM',
    image: '/images/skittleSorter.jpg',
    date: '2021',
    desc:
        'Using Arduino modules and laser cutting wood, I created a highly-accurate skittle sorter which sorts by employing a conveyor belt mechanism. Despite my teacher explaining how difficult this would be to achieve in the span of 2 weeks, my partner and I wished to attempt something mechanically challenging. I designed both the physical conveyor belt mechanism as well as the algorithm to identify and sort the skittles by color.',
    code_link: 'https://github.com/RaphaelleTherese/ConveryorSkittleSorter',
    },
    {
    title: 'Button Pressing Robot',
    subtitle: 'Arduino project created for Creative Coding course',
    link: 'https://youtube.com/shorts/QRoXEeeq2EI',
    image: '/images/ButtonPressingRobot.png',
    date: '2021',
    desc:
        'Using Arduino modules and laser cutting wood, I created a button pressing robot. My partner and I designed and assembled the robot to be able to make specific movements given commands to be able to rotate a servo to press the button properly as well as press the button easily. Instead of commanding the robot to press a button, instead the robot detects what color lights up and presses the corresponding button.',
    },
    {
    title: 'Blast to the Past',
    subtitle: 'My first ever portfolio. Also includes several projects from highschool...',
    link: '/oldPortfolio/index.html',
    image: '/images/firstPortfolio.jpg',
    date: '2019',
    desc:
        'Built for an FBLA competition for which I won 2nd place in regionals.  Created entirely on my own using vanilla HTML, CSS, and JS. A time capsule of young me and how I envisioned of being a software engineer in my senior year of highschool. Also includes several projects I worked on throughout my highschool years.',
    },
];

export default data;
