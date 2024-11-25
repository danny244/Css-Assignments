const plugin = require("tailwindcss/plugin");
module.exports = {
      content: ["./index.html", "./index.js"], // Add paths to your HTML and JS files
      theme: {
            extend: {
                  colors: {
                        "--primary-color": "var(--primary-color)",
                        "--secondary-color": "var(--secondary-color)",
                        "--color": "var(--color)",
                        "--background-color": "var(--background-color)",
                        "--tertiary-color": "var(--tertiary-color)",
                        "--sidebar-color": "var(--sidebar-color)",
                        "--sidebar-background-color": "var(--sidebar-background-color)",
                        "--form-color": "var(--form-color)",
                        "--form-background-color": "var(--form-background-color)",
                        "--form-input-background-color": "var(--form-input-background-color)",
                        "--input-placeholder-color": "var(--input-placeholder-color)",
                        "--border-color": "var(--border-color)",
                  },
                  fontFamily: {
                        '--font-family': "var(--font-family)",
                        '--font-family-heavy': "var(--font-family-heavy)",
                        '--font-family-bold': "var(--font-family-Bold)",
                        '--font-family-medium': "var(--font-family-medium)",
                  },
                  backgroundImage: {
                        "--primary-background-gradient": "var(--primary-background-gradient)",
                  },
                  fontWeight: {
                        normal: "var(--font-weight)",
                        '--h1-font-weight': "var(--h1-font-weight)",
                  },
                  fontSize: {
                        '--h1-font-size': "var(--h1-font-size)",
                        base: "var(--font-size)",
                  },
                  lineHeight: {
                        base: "var(--line-height)",
                  },
                  maxWidth: {
                        '--max-width': "var(--max-width)",
                        '--contents-max-width': "var(--contents-max-width)",
                  },
                  boxShadow: {
                        '--shadow-pricing': '0px 4px 8px 0px hsla(0, 0%, 0%, 0.05)', // Your custom shadow
                  },
            },
      },
      plugins: [
            plugin(function ({ addUtilities }) {
                  addUtilities({
                        ".form-input-border": {
                              border: "var(--form-inputs-border)",
                        },
                        ".form-button-color": {
                              color: "var(--form-button-color)",
                        },
                  });
            }),
      ],
};
