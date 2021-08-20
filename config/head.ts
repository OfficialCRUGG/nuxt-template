// Types
import { NuxtOptionsHead } from "@nuxt/types/config/head";

// Variables
const VARS = {
    name: "Nuxt Project",
    twitter: "cruggdev",
    domain: "example.com",
    description: "This is my nuxt project!"
};

// Configuration
const head: NuxtOptionsHead = {
    title: VARS.name,
    titleTemplate: `%s | ${VARS.name}`,
    meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { hid: "description", name: "description", content: VARS.description },
        { name: "format-detection", content: "telephone=no" },

        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:site", content: VARS.twitter },
        { name: "twitter:title", content: VARS.name },
        {
            name: "twitter:description",
            content: VARS.description,
        },
        {
            name: "twitter:image",
            content: `https://${VARS.domain}/assets/cover.png`,
        },

        { name: "og:title", content: VARS.name },
        { name: "og:url", content: `https://${VARS.domain}` },
        {
            name: "og:description",
            content: VARS.description,
        },
        { name: "og:type", content: "website" },
        {
            name: "og:image",
            content: `https://${VARS.domain}/assets/cover.png`,
        },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
};

export default head;
