// Config
import webfontloader from "./modules/webfontloader";
import apollo from "./modules/apollo";

// Types
import { NuxtOptionsModule } from "@nuxt/types/config/module";

// Configuration
const modules: NuxtOptionsModule[] = [
    "@nuxtjs/axios",
    ["nuxt-webfontloader", webfontloader],
    ["@nuxtjs/apollo", apollo],
];

export default modules;
