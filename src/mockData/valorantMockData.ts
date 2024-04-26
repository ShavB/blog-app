interface articleTags {
  title: string;
  machine_name: string;
}

interface categories {
  title: string;
  machine_name: string;
}

interface bannerTypes{
  dimension: object;
  content_type: string;
  file_size: string;
  url: string;
  filename: string;
}

interface BlogData {
  id: string;
  uid: string;
  title: string;
  date: string;
  description: string;
  article_type: string;
  external_link: string;
  article_tags: articleTags[];
  category: categories[];
  pathSlug: string;
  publish_details: object;
  url: object;
  banner: bannerTypes;
}

export const vData: BlogData[] = [
  {
    id: "b01b8fcf-0b7a-5263-8165-9ec5ee5df043",
    uid: "blt2c657868b1952159",
    title: "VALORANT Patch Notes 1.14",
    date: "2020-12-08T14:00:00.000Z",
    description:
      "Icebox gets its first overhaul, Sage’s Barrier Orb gets love, and lots of observer tool additions. Also, Night.Market and Snowball Fight!",
    article_type: "Normal article",
    external_link: "",
    article_tags: [
      {
        title: "Patch Notes",
        machine_name: "patch_notes",
      },
      {
        title: "Sage",
        machine_name: "sage",
      },
      {
        title: "Icebox",
        machine_name: "icebox",
      },
    ],
    category: [
      {
        title: "Game Updates",
        machine_name: "game_updates",
      },
    ],
    pathSlug: "/game-updates/valorant-patch-notes-1-14/",
    publish_details: {
      locale: "en-gb",
    },
    url: {
      url: "/news/game-updates/valorant-patch-notes-1-14/",
    },
    banner: {
      url: "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blta22b83124d6b0a52/5fc9d93e4a4abb73ff7a3cd3/Killjoy_Brimstone_1920x1080.jpg",
      dimension: {
        height: 1080,
        width: 1920,
      },
      content_type: "image/jpeg",
      file_size: "362444",
      filename: "Killjoy_Brimstone_1920x1080.jpg",
    },
  },
  {
    id: "33970093-31ae-5bbe-a127-9aa9e03292fc",
    uid: "blt78721867525bede7",
    title: "Ask VALORANT - Dec 04",
    date: "2020-12-04T16:00:00.000Z",
    description:
      "AFKers, blocking others, and smurfs. All this and more on the next Ask VALORANT.",
    article_type: "Normal article",
    external_link: "",
    article_tags: [
      {
        title: "Competitive",
        machine_name: "Competitive",
      },
      {
        title: "Ask VALORANT",
        machine_name: "ask_valorant",
      },
    ],
    category: [
      {
        title: "Dev",
        machine_name: "dev",
      },
    ],
    pathSlug: "/dev/ask-valorant-dec-04/",
    publish_details: {
      locale: "en-gb",
    },
    url: {
      url: "/news/dev/ask-valorant-dec-04/",
    },
    banner: {
      url: "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt85d1d3016dec5167/5fc6c26c4e40cf53001fbacc/SageBreachv2.jpg",
      dimension: {
        height: 1080,
        width: 1920,
      },
      content_type: "image/jpeg",
      file_size: "439437",
      filename: "SageBreachv2.jpg",
    },
  },
  {
    id: "87549197-a274-5430-85dd-6d4295f07678",
    uid: "blt5de518f227b990a3",
    title: "VALORANT First Strike: Europe – Meet the Casters",
    date: "2020-12-03T13:00:00.000Z",
    description:
      "The games are only half the show. Meet the team of casters who will be keeping you informed during the VALORANT First Strike: Europe Main Event.",
    article_type: "Normal article",
    external_link: "",
    article_tags: [],
    category: [
      {
        title: "Esports",
        machine_name: "esports",
      },
    ],
    pathSlug: "/esports/valorant-first-strike-europe-meet-the-casters/",
    publish_details: {
      locale: "en-gb",
    },
    url: {
      url: "/news/esports/valorant-first-strike-europe-meet-the-casters/",
    },
    banner: {
      url: "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt60b422da0d12cd94/5fc8d29b46f622769b5f39c8/FS_TalentLineup_ArticleHeader.jpg",
      dimension: {
        height: 2160,
        width: 3840,
      },
      content_type: "image/jpeg",
      file_size: "2933511",
      filename: "FS_TalentLineup_ArticleHeader.jpg",
    },
  },
  {
    id: "490a3545-4ba2-50cc-84b9-e931f9454d42",
    uid: "blt963c46d239f3402f",
    title: "Community Spotlight - Dec. 02",
    date: "2020-12-02T16:00:00.000Z",
    description: "There’s something strange about this VALORANT art.",
    article_type: "Normal article",
    external_link: "",
    article_tags: [
      {
        title: "Community Spotlight",
        machine_name: "community_spotlight",
      },
    ],
    category: [
      {
        title: "Announcements",
        machine_name: "announcements",
      },
    ],
    pathSlug: "/announcements/community-spotlight-dec-02/",
    publish_details: {
      locale: "en-gb",
    },
    url: {
      url: "/news/announcements/community-spotlight-dec-02/",
    },
    banner: {
      url: "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltce2f170eded0c5e3/5fbeb5bdbfc5dd718865fa4c/Banner_alartriss_jett_splash.jpg",
      dimension: {
        height: 1080,
        width: 1920,
      },
      content_type: "image/jpeg",
      file_size: "427858",
      filename: "Banner_alartriss_jett_splash.jpg",
    },
  },
  {
    id: "1635ea45-917b-5518-bfe9-b885631f23b2",
    uid: "blte675cce6127810dc",
    title: "VALORANT First Strike: Europe – The Main Stage Preview",
    date: "2020-12-02T14:11:52.000Z",
    description:
      "The stage is set and the main event is almost here. To get you ready for the biggest event so far in VALORANT esports, we’re giving you the lowdown on all the teams competing.",
    article_type: "Normal article",
    external_link: "",
    article_tags: [],
    category: [
      {
        title: "Esports",
        machine_name: "esports",
      },
    ],
    pathSlug: "/esports/valorant-first-strike-europe-the-main-stage-preview/",
    publish_details: {
      locale: "en-gb",
    },
    url: {
      url: "/news/esports/valorant-first-strike-europe-the-main-stage-preview/",
    },
    banner: {
      url: "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt5dc9bade10e189a0/5fc7a0e94e40cf53001fbe1c/ArticleHeader_MainStage.png",
      dimension: {
        height: 1080,
        width: 1920,
      },
      content_type: "image/png",
      file_size: "3112666",
      filename: "ArticleHeader_MainStage.png",
    },
  },
  {
    id: "13da8056-60bc-50ec-91ed-a0b417c7db60",
    uid: "blt00c7983c6d39c31e",
    title:
      "VALORANT First Strike: Europe – The Main Event Interview with G2 and SUMN FC",
    date: "2020-12-01T13:00:00.000Z",
    description:
      "We caught up with some of the VALORANT First Strike: Europe contenders ahead of the main event.",
    article_type: "Normal article",
    external_link: "",
    article_tags: [],
    category: [
      {
        title: "Esports",
        machine_name: "esports",
      },
    ],
    pathSlug:
      "/esports/valorant-first-strike-europe-the-main-event-interview-with-g2-and-sumn-fc/",
    publish_details: {
      locale: "en-gb",
    },
    url: {
      url: "/news/esports/valorant-first-strike-europe-the-main-event-interview-with-g2-and-sumn-fc/",
    },
    banner: {
      url: "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt7d486ff296045f9d/5fc62fa64a4abb73ff7a2bab/ArticleHeader_G2&SUMN.jpg",
      dimension: {
        height: 1080,
        width: 1920,
      },
      content_type: "image/jpeg",
      file_size: "348342",
      filename: "ArticleHeader_G2&SUMN.jpg",
    },
  },
  {
    id: "a0b2d540-dcfa-5d41-a025-58f4f651782c",
    uid: "blta5235206605efcd2",
    title: "VALORANT First Strike: Europe - Event Promo",
    date: "2020-11-30T15:21:34.000Z",
    description: "It’s time for VALORANT First Strike: Europe",
    article_type: "External Link",
    external_link: "https://www.youtube.com/watch?v=rVEqNrBqBOk",
    article_tags: [],
    category: [
      {
        title: "Esports",
        machine_name: "esports",
      },
    ],
    pathSlug: "/esports/valorant-first-strike-europe-event-promo/",
    publish_details: {
      locale: "en-gb",
    },
    url: {
      url: "/news/esports/valorant-first-strike-europe-event-promo/",
    },
    banner: {
      url: "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltc299e77e229ca5b2/5fc50e4d72a3526f28dc0365/FirstStrike_Promo_Thumbnail_2.png",
      dimension: {
        height: 1080,
        width: 1920,
      },
      content_type: "image/png",
      file_size: "3106003",
      filename: "FirstStrike_Promo_Thumbnail_2.png",
    },
  },
  {
    id: "4e40ebe5-423a-5bb6-ac83-e989ae99c4c7",
    uid: "blt92db22fcfbefd3ce",
    title: "FIRST STRIKE MAIN EVENT PRIMER",
    date: "2020-11-27T15:00:00.000Z",
    description:
      "Get the broadcast details about the upcoming First Strike Finals around the world.",
    article_type: "Normal article",
    external_link: "",
    article_tags: [
      {
        title: "VALORANT First Strike",
        machine_name: "valorant_first_strike",
      },
    ],
    category: [
      {
        title: "Esports",
        machine_name: "esports",
      },
    ],
    pathSlug: "/esports/first-strike-info/",
    publish_details: {
      locale: "en-gb",
    },
    url: {
      url: "/news/esports/first-strike-info/",
    },
    banner: {
      url: "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blte6d527a17e10b3fa/5fc52e8a4a4abb73ff7a27ce/HEADER.jpg",
      dimension: {
        height: 1080,
        width: 1920,
      },
      content_type: "image/jpeg",
      file_size: "387915",
      filename: "HEADER.jpg",
    },
  },
];
