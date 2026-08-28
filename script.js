/* ================================
   RUANG AMAN — MAIN JAVASCRIPT
================================ */


/* ================================
   THEME & PALETTE ELEMENTS
================================ */

const themeToggle =
    document.getElementById("theme-toggle");

const paletteToggle =
    document.getElementById("palette-toggle");

const paletteMenu =
    document.getElementById("palette-menu");

const colorOptions =
    document.querySelectorAll(".color-option");


/* ================================
   COLOUR THEMES
================================ */

const themes = {

    purple: {
        light: {
            background: "#eee9ff",
            section: "#eee9ff",
            heading: "#4d327d",
            text: "#30303a",
            accent: "#6948a8",
            accentDark: "#43286f",
            circle: "rgba(115, 70, 190, 0.32)",
            overlay: "rgba(238, 233, 255, 0.78)"
        },

        dark: {
            background: "#120d19",
            section: "#120d19",
            heading: "#c5a8f0",
            text: "#ffffff",
            accent: "#a987df",
            accentDark: "#c5a8f0",
            circle: "rgba(145, 95, 220, 0.38)",
            overlay: "rgba(18, 13, 25, 0.78)"
        }
    },


    green: {
        light: {
            background: "#e8f6ed",
            section: "#e8f6ed",
            heading: "#326847",
            text: "#303632",
            accent: "#4c8a68",
            accentDark: "#28573a",
            circle: "rgba(60, 145, 85, 0.32)",
            overlay: "rgba(232, 246, 237, 0.78)"
        },

        dark: {
            background: "#0c1710",
            section: "#0c1710",
            heading: "#91d5aa",
            text: "#ffffff",
            accent: "#75b98e",
            accentDark: "#91d5aa",
            circle: "rgba(70, 170, 100, 0.38)",
            overlay: "rgba(12, 23, 16, 0.80)"
        }
    },


    pink: {
        light: {
            background: "#fdeaf1",
            section: "#fdeaf1",
            heading: "#873d5c",
            text: "#352f32",
            accent: "#a05272",
            accentDark: "#73334e",
            circle: "rgba(205, 75, 125, 0.30)",
            overlay: "rgba(253, 234, 241, 0.78)"
        },

        dark: {
            background: "#1c0d14",
            section: "#1c0d14",
            heading: "#e8a1bc",
            text: "#ffffff",
            accent: "#d98aa8",
            accentDark: "#e8a1bc",
            circle: "rgba(210, 75, 125, 0.38)",
            overlay: "rgba(28, 13, 20, 0.80)"
        }
    },


    yellow: {
        light: {
            background: "#fff7d9",
            section: "#fff7d9",
            heading: "#80651d",
            text: "#36342b",
            accent: "#9a7b35",
            accentDark: "#705719",
            circle: "rgba(205, 165, 40, 0.32)",
            overlay: "rgba(255, 247, 217, 0.78)"
        },

        dark: {
            background: "#1d1a0b",
            section: "#1d1a0b",
            heading: "#e8cf70",
            text: "#ffffff",
            accent: "#d2b968",
            accentDark: "#e8cf70",
            circle: "rgba(215, 180, 55, 0.38)",
            overlay: "rgba(29, 26, 11, 0.80)"
        }
    },


    blue: {
        light: {
            background: "#e5f5fa",
            section: "#e5f5fa",
            heading: "#28677e",
            text: "#2d3437",
            accent: "#397d9a",
            accentDark: "#245a70",
            circle: "rgba(45, 145, 180, 0.32)",
            overlay: "rgba(229, 245, 250, 0.78)"
        },

        dark: {
            background: "#09171d",
            section: "#09171d",
            heading: "#91d5e8",
            text: "#ffffff",
            accent: "#76bdd4",
            accentDark: "#91d5e8",
            circle: "rgba(55, 155, 195, 0.38)",
            overlay: "rgba(9, 23, 29, 0.80)"
        }
    },


    peach: {
        light: {
            background: "#fff0e6",
            section: "#fff0e6",
            heading: "#8a4e35",
            text: "#38302c",
            accent: "#a66a4e",
            accentDark: "#79432e",
            circle: "rgba(210, 105, 60, 0.30)",
            overlay: "rgba(255, 240, 230, 0.78)"
        },

        dark: {
            background: "#1e110c",
            section: "#1e110c",
            heading: "#e8aa8a",
            text: "#ffffff",
            accent: "#d99a78",
            accentDark: "#e8aa8a",
            circle: "rgba(210, 100, 60, 0.38)",
            overlay: "rgba(30, 17, 12, 0.80)"
        }
    }

};


/* ================================
   CURRENT COLOUR
================================ */

let currentColor =
    localStorage.getItem("color") || "purple";


/* ================================
   APPLY COLOUR THEME
================================ */

function applyColorTheme() {

    const isDark =
        document.documentElement.classList.contains("dark");

    const selectedTheme =
        themes[currentColor][isDark ? "dark" : "light"];


    document.documentElement.style.setProperty(
        "--page-background",
        selectedTheme.background
    );

    document.documentElement.style.setProperty(
        "--section-background",
        selectedTheme.section
    );

    document.documentElement.style.setProperty(
        "--heading-color",
        selectedTheme.heading
    );

    document.documentElement.style.setProperty(
        "--text-color",
        selectedTheme.text
    );

    document.documentElement.style.setProperty(
        "--accent",
        selectedTheme.accent
    );

    document.documentElement.style.setProperty(
        "--accent-dark",
        selectedTheme.accentDark
    );

    document.documentElement.style.setProperty(
        "--circle-color",
        selectedTheme.circle
    );

    document.documentElement.style.setProperty(
        "--hero-overlay",
        selectedTheme.overlay
    );
}


/* ================================
   LOAD SAVED THEME
================================ */

const savedTheme =
    localStorage.getItem("theme");


if (savedTheme === "dark") {

    document.documentElement.classList.add("dark");

    if (themeToggle) {
        themeToggle.textContent = "☀";
    }

} else {

    if (themeToggle) {
        themeToggle.textContent = "☾";
    }

}


applyColorTheme();


/* ================================
   DARK MODE BUTTON
================================ */

if (themeToggle) {

    themeToggle.addEventListener(
        "click",
        function () {

            const isDark =
                document.documentElement
                    .classList.toggle("dark");


            if (isDark) {

                localStorage.setItem(
                    "theme",
                    "dark"
                );

                themeToggle.textContent = "☀";

            } else {

                localStorage.setItem(
                    "theme",
                    "light"
                );

                themeToggle.textContent = "☾";

            }


            /* Change the selected colour
               to its light/dark version */

            applyColorTheme();

        }
    );

}


/* ================================
   PALETTE BUTTON
================================ */

if (paletteToggle && paletteMenu) {

    paletteToggle.addEventListener(
        "click",
        function (event) {

            event.stopPropagation();

            paletteMenu.classList.toggle("show");

        }
    );

}


/* ================================
   COLOUR SELECTION
================================ */

colorOptions.forEach(
    function (button) {

        button.addEventListener(
            "click",
            function () {

                currentColor =
                    button.dataset.color;


                localStorage.setItem(
                    "color",
                    currentColor
                );


                applyColorTheme();


                /* Close palette */

                if (paletteMenu) {

                    paletteMenu.classList.remove(
                        "show"
                    );

                }

            }
        );

    }
);


/* ================================
   CLOSE PALETTE WHEN CLICKING OUTSIDE
================================ */

document.addEventListener(
    "click",
    function (event) {

        if (
            paletteMenu &&
            paletteToggle &&
            !paletteMenu.contains(event.target) &&
            !paletteToggle.contains(event.target)
        ) {

            paletteMenu.classList.remove(
                "show"
            );

        }

    }
);


/* ================================
   MOBILE MENU
================================ */

const menuToggle =
    document.getElementById("menu-toggle");

const navigation =
    document.querySelector(".navigation");


if (menuToggle && navigation) {

    menuToggle.addEventListener(
        "click",
        function () {

            navigation.classList.toggle(
                "mobile-open"
            );

        }
    );

}


/* ================================
   REPORT FORM
================================ */

const reportForm =
    document.querySelector(".report-form");


if (reportForm) {

    reportForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();

            alert(
                "Your report has been submitted."
            );

        }
    );

}