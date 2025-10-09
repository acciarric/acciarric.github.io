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
  },{id: "nav-publications",
          title: "publications",
          description: "publications in reversed chronological order, preprints shown on the top of the list.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "For my complete Curriculum Vitae see the PDF icon on the right side.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "List of courses that I taught as teacher in charge, organized by universities.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-miscellanea",
          title: "miscellanea",
          description: "A growing collection of miscellaneous items, as pictures, some useful links and videos.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "news-i-am-coorganizing-jointly-with-m-vannacci-and-a-zozaya-the-finite-and-profinite-groups-session-at-rsme-s-7th-congress-of-young-researchers-that-will-be-held-in-bilbao-from-13th-to-17th-january-2025",
          title: 'I am coorganizing, jointly with M. Vannacci and A. Zozaya, the ‘Finite and...',
          description: "",
          section: "News",},{id: "news-i-will-be-an-invited-keynote-speaker-at-the-indam-workshop-old-and-new-trends-in-mathematical-collaboration-between-brazil-and-italy-that-will-be-held-in-rome-23rd-27th-june-2025-organized-by-indam-the-brazilian-embassy-in-rome-and-sbm-brazil",
          title: 'I will be an invited keynote speaker at the INdAM Workshop “Old and...',
          description: "",
          section: "News",},{id: "news-exciting-news-a-new-pre-print-paper-by-robert-m-guralnick-evgeny-i-khukhro-pavel-shumyatsky-and-myself-is-out-on-local-global-generation-property-of-commutators-in-finite-pi-soluble-groups-check-out-the-manuscript-on-arxiv-or-the-abstract-on-the-publications-page",
          title: 'Exciting News! A new pre-print paper, by Robert M. Guralnick, Evgeny I. Khukhro,...',
          description: "",
          section: "News",},{id: "news-thrilling-news-next-september-2025-i-will-spend-two-weeks-at-ictp-trieste-in-the-frame-of-the-research-in-pairs-2025-programme-jointly-with-pavel-shumyatsky-my-thanks-go-to-ictp-and-indam-for-the-collaborative-grant-looking-forward-to-that-new-experience",
          title: 'Thrilling News! Next September 2025 I will spend two weeks at ICTP -...',
          description: "",
          section: "News",},{id: "news-great-news-a-new-pre-print-paper-by-pavel-shumyatsky-and-myself-is-out-on-coprime-commutators-in-profinite-groups-check-out-the-complete-paper-on-arxiv-or-the-abstract-on-the-publications-page",
          title: 'Great News! A new pre-print paper, by Pavel Shumyatsky and myself is out...',
          description: "",
          section: "News",},{id: "projects-useful-links",
          title: 'useful links',
          description: "have a look 😀",
          section: "Projects",handler: () => {
              window.location.href = "/projects/link/";
            },},{id: "projects-some-of-my-talks",
          title: 'some of my talks',
          description: "available online",
          section: "Projects",handler: () => {
              window.location.href = "/projects/my_videos/";
            },},{id: "projects-pictures",
          title: 'pictures',
          description: "congresses, events, etc",
          section: "Projects",handler: () => {
              window.location.href = "/projects/pictures/";
            },},{id: "projects-videos-on-maths",
          title: 'videos on maths',
          description: "(and not only)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/videos_math/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%63%72%69%73%74%69%6E%61.%61%63%63%69%61%72%72%69@%75%6E%69%6D%6F%72%65.%69%74", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0002-7895-7705", "_blank");
        },
      },{
        id: 'social-work',
        title: 'Work',
        section: 'Socials',
        handler: () => {
          window.open("https://unimore.unifind.cineca.it/resource/person/232298", "_blank");
        },
      },{
        id: 'social-researchgate',
        title: 'ResearchGate',
        section: 'Socials',
        handler: () => {
          window.open("https://www.researchgate.net/profile/Cristina-Acciarri/", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=qQ-UxdAAAAAJ", "_blank");
        },
      },{
        id: 'social-scopus',
        title: 'Scopus',
        section: 'Socials',
        handler: () => {
          window.open("https://www.scopus.com/authid/detail.uri?authorId=40461096800&partnerID=MN8TOARS", "_blank");
        },
      },{
        id: 'social-arxiv_username',
        title: 'Arxiv_username',
        section: 'Socials',
        handler: () => {
          window.open("", "_blank");
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
