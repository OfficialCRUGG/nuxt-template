// Config
import windicss from "./modules/windicss";

// Types
import { NuxtOptionsModule } from "@nuxt/types/config/module";

// Configuration
const buildModules: NuxtOptionsModule[] = [
    "@nuxt/typescript-build",
    ["nuxt-windicss", windicss],
];

export default buildModules;
