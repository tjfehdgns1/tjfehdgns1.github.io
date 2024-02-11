import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

const config: QuartzConfig = {
  configuration: {
    pageTitle: "🪴 지식정원",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "https://tjfehdgns1.github.io/",
    ignorePatterns: ["private", "templates", ".obsidian", "Excalidraw"],
    defaultDateType: "created",
    theme: {
      cdnCaching: true,
      typography: {
        header: "Schibsted Grotesk", //Font to use for headers
        body: "Source Sans Pro", //Font for everything
        code: "Hack Nerd Font Mono", //Font for inline and block quotes.
      },
      colors: {
        lightMode: {
          light: "#faf8f8", //page background
          lightgray: "#e5e5e5", //borders
          gray: "#b8b8b8", //graph links, heavier borders
          darkgray: "#4e4e4e", //body text
          dark: "#2b2b2b", //header text and icons
          secondary: "#284b63", //link colour, current [[graph view|graph]] node
          tertiary: "#84a59d", //hover states and visited [[graph view|graph]] nodes
          highlight: "rgba(143, 159, 169, 0.15)", //internal link background, highlighted text, [[syntax highlighting|highlighted lines of code]]
        },
        darkMode: {
          //one dark https://github.com/navarasu/onedark.nvim/blob/master/lua/onedark/palette.lua
          light: "#1f2329", // bg0
          lightgray: "#181b20", // bg_d
          gray: "#535965", // grey
          darkgray: "#ffffff", // white
          dark: "#ffffff", //
          secondary: "#4fa6ed", // blue
          tertiary: "#e55561", // red
          highlight: "rgba(24, 27, 32, 0.75)", // bg_d
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        // you can add 'git' here for last modified from Git
        // if you do rely on git for dates, ensure defaultDateType is 'modified'
        priority: ["frontmatter", "filesystem"],
      }),
      Plugin.Latex({ renderEngine: "katex" }),
      Plugin.SyntaxHighlighting(),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources({ fontOrigin: "googleFonts" }),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
