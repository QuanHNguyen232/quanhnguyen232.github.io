// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "Repositories status",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-cv",
          title: "cv",
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
            },{id: "dropdown-bookshelf",
              title: "bookshelf",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/books/";
              },
            },{id: "dropdown-photos",
              title: "photos",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/photos/";
              },
            },{id: "post-brief-of-ai-ml-coding-interview-questions-leetcode-style",
        
          title: "Brief of AI/ML coding interview questions (Leetcode style)",
        
        description: "Some implementation examples for machine learning coding interview",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/leetcode-ml/";
          
        },
      },{id: "post-brief-of-cuda-gpu-coding-interview-questions-leetcode-style",
        
          title: "Brief of CUDA/GPU coding interview questions (Leetcode style)",
        
        description: "Some examples for CUDA/GPU coding interview, this is needed for ML optimization",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/leetcode-gpu/";
          
        },
      },{id: "post-brief-of-data-structure-amp-algorithm-dsa-coding-interview-questions",
        
          title: "Brief of Data-Structure &amp; Algorithm (DSA) coding interview questions",
        
        description: "Some concepts, topics, and examples for Leetcode coding interview",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/leetcode-dsa/";
          
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
      },{id: "books-hồi-ký-năng-khiếu",
          title: 'Hồi Ký Năng Khiếu',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/hoi_ky_nang_khieu/";
            },},{id: "books-designing-data-intensive-applications",
          title: 'Designing Data-Intensive Applications',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/designing_data_intensive_applications/";
            },},{id: "books-introduction-to-machine-learning-systems",
          title: 'Introduction to Machine Learning Systems',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/ml_systems/";
            },},{id: "books-machine-learning-system-design-interview",
          title: 'Machine Learning System Design Interview',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/ml_sys_design_interview/";
            },},{id: "books-inference-engineering",
          title: 'Inference Engineering',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/inference_engineering/";
            },},{id: "news-i-start-my-internship-at-adobe-sparkles-smile",
          title: 'I start my internship at Adobe! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "news-i-39-m-joining-google-youtube",
          title: 'I&amp;#39;m joining Google (Youtube)',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2026-newgrad/";
            },},{id: "photos-london-2022",
          title: 'London 2022',
          description: "Afternoon tea and Oxford Street in London.",
          section: "Photos",handler: () => {
              window.location.href = "/photos/photo_2022_london/";
            },},{id: "photos-gettysburg",
          title: 'Gettysburg',
          description: "Winter adventures, snowboarding, and campus life at Gettysburg.",
          section: "Photos",handler: () => {
              window.location.href = "/photos/photo_2023_gburg/";
            },},{id: "photos-saigon-2024",
          title: 'Saigon 2024',
          description: "Cà phê, vỏ chai, and street life in Saigon.",
          section: "Photos",handler: () => {
              window.location.href = "/photos/photo_2024_saigon/";
            },},{id: "photos-my-2024",
          title: 'My 2024',
          description: "A snapshot of the year.",
          section: "Photos",handler: () => {
              window.location.href = "/photos/photo_2024_lookback/";
            },},{id: "photos-philly-2024-25",
          title: 'Philly 2024–25',
          description: "Matcha, SHPE BBQ, and fun in Philadelphia.",
          section: "Photos",handler: () => {
              window.location.href = "/photos/photo_2025_philly/";
            },},{id: "photos-nyc-2025",
          title: 'NYC 2025',
          description: "New York bagels and pizza.",
          section: "Photos",handler: () => {
              window.location.href = "/photos/photo_2025_newyork/";
            },},{id: "photos-adobe-amp-west-coast",
          title: 'Adobe &amp;amp; West Coast',
          description: "Office life, San Jose, and Seattle July 4th.",
          section: "Photos",handler: () => {
              window.location.href = "/photos/photo_2025_summer/";
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
          window.open("mailto:%71%75%61%6E%68%6E%32%33%32@%67%6D%61%69%6C.%63%6F%6D", "_blank");
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
          window.open("https://www.linkedin.com/in/quanhn232", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/quanhn232", "_blank");
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
