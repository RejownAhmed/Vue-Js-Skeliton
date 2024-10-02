import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginVue from "eslint-plugin-vue";
import perfectionist from "eslint-plugin-perfectionist";
import eslintConfigPrettier from "eslint-config-prettier";

export default [
    {
        plugins: {
            perfectionist,
        },
        rules: {
            // perfectionist
            // https://eslint-plugin-perfectionist.azat.io/
            "perfectionist/sort-named-imports": [
                1,
                {
                    order: "asc",
                    type: "line-length",
                },
            ],
            "perfectionist/sort-named-exports": [
                1,
                {
                    order: "asc",
                    type: "line-length",
                },
            ],
            "perfectionist/sort-exports": [
                1,
                {
                    order: "asc",
                    type: "line-length",
                },
            ],
            "perfectionist/sort-imports": [
                1,
                {
                    order: "asc",
                    type: "line-length",
                    newlinesBetween: "always",
                    groups: [
                        "vue",
                        ["builtin", "external"],
                        // Here use your custom groups
                        //
                        "custom-routes",
                        "custom-composable",
                        "custom-utils",
                        "internal",
                        "custom-components",
                        "custom-types",
                        ["parent", "sibling", "index"],
                        "object",
                        "unknown",
                    ],
                    customGroups: {
                      // Custom groups definition
                        value: {
                            vue: ["vue", "vue-*"],
                            "custom-routes": "src/routes/**",
                            "custom-composable": "src/composable/**",
                            "custom-utils": "src/utils/**",
                            "custom-components": "src/components/**",
                            "custom-types": "src/types/**",
                        },
                    },
                    internalPattern: ["src/**"],
                },
            ],
        },
    },
    eslintConfigPrettier,
    {
        languageOptions: { globals: globals.browser },
    },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    ...pluginVue.configs["flat/essential"],
    {
      files: ["**/*.{js,mjs,cjs,ts,vue}"], // keep this
      rules: {
        "@typescript-eslint/no-explicit-any": ["off"],
      }
    },
    {
        files: ["src/**/*.vue"],
        languageOptions: {
            parserOptions: { parser: tseslint.parser },
        },
        rules: {
            "vue/multi-word-component-names": 0,
        },
    },
];
