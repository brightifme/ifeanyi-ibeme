module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://ifeanyi-ibeme.netlify.app/`,
    // Your Name
    name: 'Ifeanyi Ibeme',
    // Main Site Title
    title: `Ifeanyi Ibeme | Software Engineer`,
    // Description that goes under your name in main bio
    description: `Software Engineer from Lagos, Nigeria.`,
    // Optional: Twitter account handle
    author: `@ifeanyi_ibeme`,
    // Optional: Github account URL
    github: `https://github.com/brightifme`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/ifeanyi-ibeme-8423a9233`,
    // Content of the About Me section
    about: `I'm a motivated software engineer who has experience building and scaling web applications. I'm also passionate about working in high impact environment and buikding great products.`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'Jorries Heavens',
        description:
          'A full fledged E-commerce store where new users can register and login admins can create products, sort them based on categories + built with TypeScript and React.js',
        link: 'https://github.com/brightifme/typescript-ecommerce-store',
      },
      {
        name: 'Restful API',
        description:
          'This is a RESTful API with User Authentication + built using TypeScript and MongoDB',
        link: 'https://github.com/brightifme/typescript-rest-api',
      },
      {
        name: 'Jobbido',
        description:
          'A job portal that connects Employers & Employees + built using Node.js, MongoDB',
        link: 'https://github.com/brightifme/jobbido',
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'Noland Tech',
        description: 'Backend Developer, March 2019 - December 2021',
        link: '',
      },
      {
        name: 'Eket Computer Consult',
        description: 'Backend Developer, October 2018 - January 2019',
        link: '',
      },
      {
        name: 'SavCops',
        description: 'Front End Developer, May 2018 - September 2018',
        link: '',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Backend Skills',
        description:
          'JavaScript (ES6+), Node.js, TypeScript, RESTful API, Express.js, Python, SQL, Java, C#, PHP, Kubernetes, Docker, SOAP ',
      },
      {
        name: 'Front Web Dev',
        description:
        'React, JavaScript(ES6), Angular, Vb.net, HTML5, CSS3, React and Redux, Foundation, Bootstrap, Meteor, Jekyll, SASS',
      },
      {
        name: 'Database',
        description:
          'SQLite, MongoDB, Redis, MySql,Postgres, MariaDB',
      },
      {
        name: 'Server',
        description:
          'Heroku, Microsoft Azure, Netlify, Apache, Nginx, Amazon Web Services (AWS)',
      },

      {
        name: 'Tools',
        description:
          'WebPack, GCP, ElasticSearch, Git'
      },
            {
        name: 'Design',
        description:
          'Figma, Adobe XD'
      },
      {
        name: 'Soft Skills',
        description:
          'Project Management, Web Performance Optimization, Agile Software Development Methodologies, Software Integration, Products Development'
      },

    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
