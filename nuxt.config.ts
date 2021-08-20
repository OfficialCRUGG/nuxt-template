// Config
import buildModules from "./config/buildModules";
import head from "./config/head";
import modules from "./config/modules";

// Types
import { NuxtConfig } from "@nuxt/types";

const config: NuxtConfig = {
    rootDir: "./",
    srcDir: "src",
    ssr: false,
    target: "static",
    components: [{ path: "~/components", pathPrefix: false }],
    generate: { fallback: true },

    buildModules,
    head,
    modules,
};

export default config;
