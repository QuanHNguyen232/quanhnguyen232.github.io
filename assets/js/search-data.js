// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "Blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "This is my CV.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "dropdown-publications",
              title: "publications",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/publications/";
              },
            },{id: "dropdown-photos",
              title: "photos",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/photos/";
              },
            },{id: "post-comprehensive-guide-to-deploying-vllm-on-gke",
        
          title: "Comprehensive Guide to Deploying vLLM on GKE",
        
        description: "A production guide for deploying vLLM on GKE with GPU and TPU strategies",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/deploy-vllm/";
          
        },
      },{id: "post-guide-to-deploy-ray-cluster-on-gke",
        
          title: "Guide to deploy Ray Cluster on GKE",
        
        description: "A step-by-step production guide for Ray Cluster deployment distributed ML and LLM workloads",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/deploy-ray/";
          
        },
      },{id: "post-just-a-moment",
        
          title: 'Just a moment... <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/pinterest-engineering/last-mile-data-processing-with-ray-629affbf34ff", "_blank");
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-i-start-my-internship-at-adobe-sparkles-smile",
          title: 'I start my internship at Adobe! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "photos-london-2022",
          title: 'London 2022',
          description: "Afternoon tea and Oxford Street in London.",
          section: "Photos",handler: () => {
              window.location.href = "/photos/photo_7/";
            },},{id: "photos-gettysburg",
          title: 'Gettysburg',
          description: "Winter adventures, snowboarding, and campus life at Gettysburg.",
          section: "Photos",handler: () => {
              window.location.href = "/photos/photo_6/";
            },},{id: "photos-saigon-2024",
          title: 'Saigon 2024',
          description: "Cà phê, vỏ chai, and street life in Saigon.",
          section: "Photos",handler: () => {
              window.location.href = "/photos/photo_11/";
            },},{id: "photos-my-2024",
          title: 'My 2024',
          description: "A snapshot of the year.",
          section: "Photos",handler: () => {
              window.location.href = "/photos/photo_8/";
            },},{id: "photos-philly-2024-25",
          title: 'Philly 2024–25',
          description: "Matcha, SHPE BBQ, and fun in Philadelphia.",
          section: "Photos",handler: () => {
              window.location.href = "/photos/photo_10/";
            },},{id: "photos-nyc-2025",
          title: 'NYC 2025',
          description: "New York bagels and pizza.",
          section: "Photos",handler: () => {
              window.location.href = "/photos/photo_9/";
            },},{id: "photos-adobe-amp-west-coast",
          title: 'Adobe &amp;amp; West Coast',
          description: "Office life, San Jose, and Seattle July 4th.",
          section: "Photos",handler: () => {
              window.location.href = "/photos/photo_5/";
            },},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{id: "teachings-data-science-fundamentals",
          title: 'Data Science Fundamentals',
          description: "This course covers the foundational aspects of data science, including data collection, cleaning, analysis, and visualization. Students will learn practical skills for working with real-world datasets.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/data-science-fundamentals/";
            },},{id: "teachings-introduction-to-machine-learning",
          title: 'Introduction to Machine Learning',
          description: "This course provides an introduction to machine learning concepts, algorithms, and applications. Students will learn about supervised and unsupervised learning, model evaluation, and practical implementations.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/introduction-to-machine-learning/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%71%75%61%6E%68%6E%67%75%79%65%6E%32%33%32@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=yP-xEqEAAAAJ", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/quanhnguyen232", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/QuanHNguyen232", "_blank");
        },
      },{
        id: 'social-work',
        title: 'Work',
        section: 'Socials',
        handler: () => {
          window.open("https://quanhnguyen232.github.io/", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
