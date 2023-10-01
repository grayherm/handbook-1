import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Unnamed Esports Handbook",
  description: "Everything we do, compressed.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config#
    logo: "/ezgif-2-cdb5be30fc.gif",

    nav: [
      { text: "Home", link: "/" },
      // {
      //   text: "Guides",
      //   items: [{ text: "Item A", link: "/guides/item-1" }],
      // },
    ],

    sidebar: {
      "/main/": [
        {
          text: "Introduction",
          items: [
            {
              text: "What is Unnamed Esports?",
              link: "/main/introduction/what-is-unnamed-esports",
            },
          ],
        },
        {
          text: "Players",
          items: [
            // { text: "Item C", link: "/item-c" },
            // { text: "Item D", link: "/item-d" },
          ],
        },
        {
          text: "Captains",
          items: [
            {
              text: "Roster Reveal Videos",
              link: "/main/captains/roster-reveal-videos",
            },
            // { text: "Item D", link: "/item-d" },
          ],
        },
        {
          text: "Coaches",
          items: [
            // { text: "Item C", link: "/item-c" },
            // { text: "Item D", link: "/item-d" },
          ],
        },
        {
          text: "Managers & Admins",
          items: [
            // { text: "Item C", link: "/item-c" },
            // { text: "Item D", link: "/item-d" },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/UnnamedEsports/handbook" },
      { icon: "twitter", link: "https://twitter.com/UnnamedEsportsX" },
    ],

    editLink: {
      pattern: "https://github.com/UnnamedEsports/website/edit/main/docs/:path",
      text: "Edit this page on GitHub",
    },

    lastUpdated: {
      text: "Updated at",
      formatOptions: {
        dateStyle: "full",
        timeStyle: "full",
      },
    },
  },
});
