import { InlineCode } from "@/once-ui/components";

const person = {
    firstName: 'Muhammad Ahtasham',
    lastName:  'Aslam',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role:      'MERN Stack Developer',
    avatar:    '/images/avatar.jpg',
    location:  'Asia/Pakistan/Lahore',
    languages: ['English', 'Urdu']
}

const newsletter = {
    display: true,
    title: <>Subscribe to {person.firstName}'s Newsletter</>,
    description: <>I occasionally write about design, technology, and share insights on the intersection of creativity and engineering.</>
}

const social = [
    {
        name: 'GitHub',
        icon: 'github',
        link: 'https://github.com/Ahtashamkhanniazi',
    },
    {
        name: 'LinkedIn',
        icon: 'linkedin',
        link: 'https://www.linkedin.com/in/ahtasham-khan-niazi/',
    },
    {
        name: 'X',
        icon: 'x',
        link: '',
    },
    {
        name: 'Email',
        icon: 'email',
        link: 'mailto:niaziahtasham98@gmail.com',
    },
]

const home = {
    label: 'Home',
    title: `${person.name}'s Portfolio`,
    description: `Portfolio website showcasing my work as a ${person.role}`,
    headline: <>MERN Stack Developer and blockchain integration specialist</>,
    subline: <>I'm {person.name}, a MERN Stack Developer, skilled in secure and responsive web application development at <InlineCode>Beard Brother Technologies</InlineCode>. After hours, I build and innovate on my personal projects.</>
}

const about = {
    label: 'About',
    title: 'About me',
    description: `Meet ${person.name}, a skilled ${person.role} from ${person.location}`,
    tableOfContent: {
        display: true,
        subItems: true
    },
    avatar: {
        display: true
    },
    calendar: {
        display: true,
        link: 'https://cal.com'
    },
    intro: {
        display: true,
        title: 'Introduction',
        description: <>Muhammad Ahtasham Aslam is a Lahore-based MERN Stack Developer with a passion for creating secure, responsive web applications. Skilled in frameworks like Next.js, Electron.js, and blockchain integration, Ahtasham specializes in turning complex requirements into efficient solutions.</>
    },
    work: {
        display: true,
        title: 'Work Experience',
        experiences: [
            {
                company: 'Beard Brother Technologies',
                timeframe: '03/2023 – 09/2024',
                role: 'MERN Stack Developer',
                achievements: [
                    <>Developed responsive web applications using MERN stack, Next.js, Material-UI, and Emotion, enhancing performance and user experience.</>,
                    <>Created a desktop VPN application with Electron.js, expanding secure browsing solutions.</>,
                    <>Implemented secure authentication with JWT for data privacy.</>
                ],
                images: []
            },
            {
                company: 'CodeNinja Inc',
                timeframe: '07/2021 – 02/2023',
                role: 'Associate Front-End Developer',
                achievements: [
                    <>Collaborated to develop responsive, user-friendly interfaces using React, Next.js, HTML, CSS, and JavaScript.</>,
                    <>Ensured cross-browser compatibility and optimized performance.</>,
                    <>Contributed to debugging and refining UI components for project specifications.</>
                ],
                images: []
            }
        ]
    },
    studies: {
        display: true,
        title: 'Studies',
        institutions: [
            {
                name: 'Lahore Leads University',
                description: <>Bachelor of Studies in Software Engineering</>,
            }
        ]
    },
    technical: {
        display: true, // set to false to hide this section
        title: 'Technical skills',
        skills: [
            {
                title: 'Languages',
                description: <>JavaScript, HTML, CSS</>,
                images: []
            },
            {
                title: 'Frameworks & Libraries',
                description: <>MongoDB, Express.js, React.js, Node.js, Next.js, Electron.js, Redux, Material-UI, Emotion</>,
                images: []
            },
            {
                title: 'Blockchain Integration',
                description: <>Skilled in Ethers.js, Web3.js, Web3modal, and Wagmi for creating secure blockchain-based solutions.</>,
                images: []
            },
            {
                title: 'Tools',
                description: <>GitHub, Jira, Figma, Adobe XD, VS Code, Postman, FileZilla</>,
                images: []
            },
            {
                title: 'Languages Spoken',
                description: <>English (Proficient), Urdu (Fluent)</>,
                images: []
            },
            {
                title: 'Other Technical Skills',
                description: <>Experience in building secure authentication with JWT, form validations, responsive design, and RESTful API development.</>,
                images: []
            }
        ]
    }
    
}


const blog = {
    label: 'Blog',
    title: 'Writing about design and tech...',
    description: `Read what ${person.name} has been up to recently`
    // Create new blog posts by adding a new .mdx file to app/blog/posts
    // All posts will be listed on the /blog route
}

const work = {
    label: 'Work',
    title: 'My projects',
    description: `Design and dev projects by ${person.name}`
    // Create new project pages by adding a new .mdx file to app/blog/posts
    // All projects will be listed on the /home and /work routes
}

const gallery = {
    label: 'Gallery',
    title: 'My photo gallery',
    description: `A photo collection by ${person.name}`,
    // Images from https://pexels.com
    images: [
        { 
            src: '/images/gallery/img-01.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-02.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-03.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-04.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-05.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-06.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-07.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-08.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-09.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-10.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-11.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-12.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-13.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-14.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
    ]
}

export { person, social, newsletter, home, about, blog, work, gallery };
