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
        },{id: "nav-repositories",
          title: "Repositories",
          description: "Edit the `_data/repositories.yml` and change the `github_users` and `github_repos` lists to include your own GitHub profile and repositories.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
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
            },{id: "post-brief-of-ml-coding-interview-questions-leetcode-style",
        
          title: "Brief of ML coding interview questions (Leetcode style)",
        
        description: "Some examples for ML coding interview",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/leetcode-ml/";
          
        },
      },{id: "post-brief-of-data-structure-amp-algorithm-coding-interview-questions",
        
          title: "Brief of Data-Structure &amp; Algorithm coding interview questions",
        
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
            },},{id: "photos-saigon-2024",
          title: 'Saigon 2024',
          description: "Cà phê, vỏ chai, and street life in Saigon.",
          section: "Photos",handler: () => {
              window.location.href = "/photos/photo_11/";
            },},{id: "photos-philly-2024-25",
          title: 'Philly 2024–25',
          description: "Matcha, SHPE BBQ, and fun in Philadelphia.",
          section: "Photos",handler: () => {
              window.location.href = "/photos/photo_10/";
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
