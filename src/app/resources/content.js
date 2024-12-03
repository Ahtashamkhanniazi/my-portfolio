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
    title: "Muhammad Ahtasham Aslam's Portfolio",
    description: "Portfolio website showcasing my work as a MERN Stack Developer and Blockchain Enthusiast. I specialize in building secure, efficient, and scalable web applications using the latest technologies.",
    headline: <>MERN Stack Developer and Blockchain Integration Specialist</>,
    subline: <>I'm Muhammad Ahtasham Aslam, a passionate MERN Stack Developer. With years of experience in building secure and responsive web applications, I specialize in integrating blockchain solutions and developing decentralized applications. My expertise spans across both front-end and back-end development, creating end-to-end solutions with a strong focus on performance, security, and scalability. When I'm not working on client projects, I’m constantly exploring new technologies and building personal projects to stay ahead of the curve.</>
}

const about = {
    label: 'About',
    title: 'About me',
    description: `Hi, I'm Muhammad Ahtasham Aslam, a dedicated MERN Stack Developer with a deep interest in blockchain technology. I focus on developing high-performance, secure web applications using modern technologies and frameworks. My goal is to provide seamless, scalable, and reliable solutions to real-world problems, particularly in the areas of web development and decentralized applications.`,
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
        description: <>I'm a MERN Stack Developer with a passion for creating highly scalable and secure web applications. With expertise in frameworks like React.js, Next.js, Node.js, and Express.js, I am able to deliver solutions that are both efficient and user-friendly. In addition to my full-stack development skills, I am well-versed in blockchain integration using technologies like Web3.js, Ethers.js, and Wagmi, enabling me to build decentralized applications (dApps) that are secure, transparent, and highly functional.</>
    },
    work: {
        display: true,
        title: 'Work Experience',
        experiences: [
            {
                company: 'Code Graphers',
                timeframe: '09/2024 – Present',
                location: 'Lahore, Pakistan',
                role: 'MERN Stack Developer',
                achievements: [
                    <>Developed and optimized scalable, responsive, and high-performance web applications using the MERN stack, with a focus on React.js, Node.js, and MongoDB.</>,
                    <>Collaborated with cross-functional teams to deliver user-friendly solutions that met business requirements and exceeded performance expectations.</>,
                    <>Integrated advanced features into applications, such as payment gateways, authentication systems, and real-time notifications, improving user experience.</>,
                    <>Improved database performance by optimizing MongoDB queries and utilizing best practices in data modeling.</>
                ],
                images: []
            },
            {
                company: 'Beard Brother Technologies',
                timeframe: '03/2023 – 09/2024',
                location: 'Islamabad, Pakistan',
                role: 'MERN Stack Developer',
                achievements: [
                    <>Developed and optimized high-performance web applications using the MERN stack, ensuring responsive design and smooth user experience.</>,
                    <>Led the development of a desktop VPN application using Electron.js, enhancing user security and privacy online.</>,
                    <>Implemented secure user authentication with JWT, ensuring data privacy and secure access to user accounts.</>,
                    <>Designed and implemented database models using MongoDB, including data manipulation, querying, and optimization for performance.</>,
                    <>Developed and integrated RESTful APIs and implemented CRUD operations, ensuring smooth data flow and security throughout the application.</>
                ],
                images: []
            },
            {
                company: 'Codeninja',
                timeframe: '10/2022 – 02/2023',
                location: 'Lahore, Pakistan',
                role: 'MERN Stack Trainee',
                achievements: [
                    <>Trained on the MERN stack, gaining proficiency in MongoDB, Express.js, React.js, Node.js, and PostgreSQL.</>,
                    <>Learned industry-standard tools such as Jira for project management and Agile methodologies for efficient teamwork and task estimation.</>,
                    <>Developed foundational skills in conflict management and cross-team collaboration within a dynamic, fast-paced environment.</>
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
                timeframe: '10/2018 – 06/2022',
                description: <>Bachelor of Studies in Software Engineering.</>,
            }
        ]
    },
    technical: {
        display: true,
        title: 'Technical Skills',
        skills: [
            {
                title: 'Languages',
                description: <>JavaScript, TypeScript, HTML, CSS — These are the core languages I work with to create dynamic and responsive web applications.</>,
                images: []
            },
            {
                title: 'Frameworks & Libraries',
                description: <>MongoDB, Express.js, React.js, Node.js, Next.js, Electron.js, Redux, Material-UI, Emotion, Ant Design, JSON Web Tokens — I use these powerful frameworks and libraries to build scalable, efficient, and highly interactive web applications.</>,
                images: []
            },
            {
                title: 'Blockchain Integration',
                description: <>I specialize in integrating blockchain technologies into web applications. I have experience working with Ethers.js, Web3.js, Web3modal, and Wagmi to develop secure decentralized applications (dApps) that allow users to interact with blockchain networks and smart contracts.</>,
                images: []
            },
            {
                title: 'Tools',
                description: <>GitHub, Jira, Figma, Adobe XD, VS Code, Postman, FileZilla — These tools are essential for managing development workflows, collaborating with teams, and ensuring smooth version control and deployment processes.</>,
                images: []
            },
            {
                title: 'Languages Spoken',
                description: <>English (Proficient), Urdu (Fluent) — I can effectively communicate in both languages, enabling me to work with diverse teams and clients.</>,
                images: []
            },
            {
                title: 'Other Technical Skills',
                description: <>Experience in building secure authentication with JWT, implementing form validations, developing responsive designs, and working with RESTful APIs. I’m always focused on improving the security and scalability of applications.</>,
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
