import { defineConfig } from "windicss/helpers";

// Plugins
import aspectRatio from "windicss/plugin/aspect-ratio";

export default defineConfig({
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                // primary: "#FFFFFF"
            }
        },
        fontFamily: {
            sans: ["Inter", "sans-serif"],
        }
    },
    plugins: [ aspectRatio ]
});