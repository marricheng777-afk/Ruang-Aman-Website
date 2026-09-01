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

/* =========================================================
   LANGUAGE SYSTEM
========================================================= */


/* ---------- LANGUAGE ELEMENTS ---------- */

const languageToggle =
    document.getElementById("language-toggle");

const languageMenu =
    document.getElementById("language-menu");

const languageOptions =
    document.querySelectorAll(".language-option");


/* ---------- TRANSLATIONS ---------- */

const translations = {

    en: {

        /* NAVIGATION */

        "nav.home": "Home",
        "nav.cases": "Cases",
        "nav.law": "Law",
        "nav.report": "Report",
        "nav.help": "Help",


        /* HERO */

        "hero.eyebrow":
            "A student research archive — Indonesia",

        "hero.title":
            "The group chat is a room too. And it is rarely a safe one.",

        "hero.description":
            "Sexual harassment on Indonesian campuses does not only happen in supervisors' offices and dormitory corridors. It happens in class group chats, organisation groups and alumni groups.",

        "hero.report":
            "Report anonymously",

        "hero.cases":
            "Read the case studies",


        /* STATISTICS */

        "stats.one":
            "of academics surveyed said sexual violence had occurred on their campus.",

        "stats.two":
            "of those said the case was never reported to the institution.",

        "stats.three":
            "Indonesia passed the Sexual Violence Crimes Law (UU TPKS).",


        /* WHAT'S INSIDE */

        "inside.title":
            "What's inside",

        "inside.cases.title":
            "Case studies",

        "inside.cases.description":
            "Documented harassment cases across Indonesian universities, including cases involving group chats and social media.",

        "inside.law.title":
            "The law",

        "inside.law.description":
            "Learn about Indonesian laws and regulations relating to sexual harassment and violence on university campuses.",

        "inside.help.title":
            "Get help",

        "inside.help.description":
            "Find hotlines, campus support systems, legal aid organisations and resources.",

        "inside.report.title":
            "Anonymous reports",

        "inside.report.description":
            "Share your experience anonymously and learn about the reporting process.",

        "inside.open":
            "Open section →",


        /* FOOTER */

        "footer.description":
            "A student-built archive on sexual harassment in Indonesian universities.",

        "footer.emergency":
            "Emergency",

        "footer.police":
            "Police",

        "footer.more":
            "More",

        "footer.help":
            "Get help",

        "footer.report":
            "Submit a report",

        "footer.note":
            "This website is for educational and informational purposes and is not a substitute for professional legal or psychological assistance."

    },


    id: {

        /* NAVIGATION */

        "nav.home":
            "Beranda",

        "nav.cases":
            "Kasus",

        "nav.law":
            "Hukum",

        "nav.report":
            "Lapor",

        "nav.help":
            "Bantuan",


        /* HERO */

        "hero.eyebrow":
            "Arsip penelitian siswa — Indonesia",

        "hero.title":
            "Grup chat juga merupakan sebuah ruang. Dan ruang itu jarang benar-benar aman.",

        "hero.description":
            "Pelecehan seksual di kampus-kampus Indonesia tidak hanya terjadi di ruang kerja dosen atau lorong asrama. Pelecehan juga terjadi di grup chat kelas, organisasi, dan alumni.",

        "hero.report":
            "Lapor secara anonim",

        "hero.cases":
            "Baca studi kasus",


        /* STATISTICS */

        "stats.one":
            "dari akademisi yang disurvei mengatakan bahwa kekerasan seksual pernah terjadi di kampus mereka.",

        "stats.two":
            "dari mereka mengatakan bahwa kasus tersebut tidak pernah dilaporkan kepada institusi.",

        "stats.three":
            "Indonesia mengesahkan Undang-Undang Tindak Pidana Kekerasan Seksual (UU TPKS).",


        /* WHAT'S INSIDE */

        "inside.title":
            "Apa saja yang ada di sini",

        "inside.cases.title":
            "Studi kasus",

        "inside.cases.description":
            "Dokumentasi kasus pelecehan di berbagai universitas Indonesia, termasuk kasus yang terjadi melalui grup chat dan media sosial.",

        "inside.law.title":
            "Hukum",

        "inside.law.description":
            "Pelajari hukum dan peraturan di Indonesia yang berkaitan dengan pelecehan dan kekerasan seksual di lingkungan kampus.",

        "inside.help.title":
            "Dapatkan bantuan",

        "inside.help.description":
            "Temukan layanan bantuan, sistem dukungan kampus, bantuan hukum, dan berbagai sumber informasi.",

        "inside.report.title":
            "Laporan anonim",

        "inside.report.description":
            "Bagikan pengalamanmu secara anonim dan pelajari proses pelaporan.",

        "inside.open":
            "Buka bagian →",


        /* FOOTER */

        "footer.description":
            "Arsip yang dibuat oleh siswa mengenai pelecehan seksual di universitas-universitas Indonesia.",

        "footer.emergency":
            "Darurat",

        "footer.police":
            "Polisi",

        "footer.more":
            "Lainnya",

        "footer.help":
            "Dapatkan bantuan",

        "footer.report":
            "Kirim laporan",

        "footer.note":
            "Website ini dibuat untuk tujuan edukasi dan informasi dan bukan pengganti bantuan hukum atau psikologis profesional."

    }

};


/* =========================================================
   APPLY LANGUAGE
========================================================= */

function applyLanguage(language) {

    const selectedLanguage =
        translations[language];

    if (!selectedLanguage) {
        return;
    }


    /* Translate all data-i18n elements */

    document
        .querySelectorAll("[data-i18n]")
        .forEach(function (element) {

            const key =
                element.dataset.i18n;

            if (
                selectedLanguage[key] !== undefined
            ) {

                element.textContent =
                    selectedLanguage[key];

            }

        });


    /* Update HTML language */

    document.documentElement.lang =
        language;


    /* Update button */

    if (languageToggle) {

        languageToggle.textContent =
            language === "id"
                ? "ID"
                : "EN";

    }


    /* Highlight selected language */

    languageOptions.forEach(
        function (option) {

            option.classList.toggle(
                "active",
                option.dataset.language === language
            );

        }
    );


    /* Save language */

    localStorage.setItem(
        "language",
        language
    );

}


/* =========================================================
   LOAD SAVED LANGUAGE
========================================================= */

let currentLanguage =
    localStorage.getItem("language") || "en";


applyLanguage(currentLanguage);


/* =========================================================
   LANGUAGE BUTTON
========================================================= */

if (languageToggle && languageMenu) {

    languageToggle.addEventListener(
        "click",
        function (event) {

            event.stopPropagation();

            languageMenu.classList.toggle(
                "show"
            );

        }
    );

}


/* =========================================================
   LANGUAGE SELECTION
========================================================= */

languageOptions.forEach(
    function (option) {

        option.addEventListener(
            "click",
            function () {

                currentLanguage =
                    option.dataset.language;


                applyLanguage(
                    currentLanguage
                );


                languageMenu.classList.remove(
                    "show"
                );

            }
        );

    }
);


/* =========================================================
   CLOSE LANGUAGE MENU
========================================================= */

document.addEventListener(
    "click",
    function (event) {

        if (
            languageMenu &&
            languageToggle &&
            !languageMenu.contains(
                event.target
            ) &&
            !languageToggle.contains(
                event.target
            )
        ) {

            languageMenu.classList.remove(
                "show"
            );

        }

    }
);


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
   REPORT SYSTEM
================================ */

const reportForm =
    document.getElementById("report-form");

const reportsList =
    document.getElementById("reports-list");

const characterCount =
    document.getElementById("character-count");

const experienceInput =
    document.getElementById("experience");

const evidenceFile =
    document.getElementById("evidence-file");

const fileName =
    document.getElementById("file-name");


/* ================================
   DELETE MODAL
================================ */

const deleteModal =
    document.getElementById("delete-modal");

const cancelDelete =
    document.getElementById("cancel-delete");

const confirmDelete =
    document.getElementById("confirm-delete");

let reportToDelete = null;


/* ================================
   CHARACTER COUNTER
================================ */

if (experienceInput && characterCount) {

    experienceInput.addEventListener(
        "input",
        function () {

            characterCount.textContent =
                experienceInput.value.length;

        }
    );

}


/* ================================
   FILE NAME
================================ */

if (evidenceFile && fileName) {

    evidenceFile.addEventListener(
        "change",
        function () {

            if (evidenceFile.files.length > 0) {

                fileName.textContent =
                    "📎 " + evidenceFile.files[0].name;

            } else {

                fileName.textContent = "";

            }

        }
    );

}


/* ================================
   LOAD REPORTS
================================ */

function getReports() {

    try {

        return JSON.parse(
            localStorage.getItem("ruangAmanReports")
        ) || [];

    } catch (error) {

        return [];

    }

}


/* ================================
   SAVE REPORTS
================================ */

function saveReports(reports) {

    localStorage.setItem(
        "ruangAmanReports",
        JSON.stringify(reports)
    );

}


/* ================================
   CREATE REPORT CARD
================================ */

function createReportCard(report) {

    const card =
        document.createElement("article");

    card.className = "report-card";

    card.dataset.id = report.id;


    /* DELETE BUTTON */

    const deleteButton =
        document.createElement("button");

    deleteButton.type = "button";

    deleteButton.className =
        "delete-report-button";

    deleteButton.innerHTML = "🗑";

    deleteButton.setAttribute(
        "aria-label",
        "Delete this report"
    );


    deleteButton.addEventListener(
        "click",
        function (event) {

            event.stopPropagation();

            reportToDelete = report.id;

            if (deleteModal) {

                deleteModal.classList.add("show");

                deleteModal.setAttribute(
                    "aria-hidden",
                    "false"
                );

            }

        }
    );


    card.appendChild(deleteButton);


    /* UNIVERSITY */

    if (report.university) {

        const university =
            document.createElement("h3");

        university.className =
            "report-university";

        university.textContent =
            report.university;

        card.appendChild(university);

    }


    /* CITY */

    if (report.city) {

        const city =
            document.createElement("p");

        city.className =
            "report-city";

        city.textContent =
            report.city;

        card.appendChild(city);

    }


    /* DATE */

    if (report.date) {

        const date =
            document.createElement("p");

        date.className =
            "report-date";

        date.textContent =
            report.date;

        card.appendChild(date);

    }


    /* INCIDENT TYPE */

    const incident =
        document.createElement("p");

    incident.className =
        "report-incident";

    incident.textContent =
        report.incidentType;

    card.appendChild(incident);


    /* EXPERIENCE */

    const experience =
        document.createElement("p");

    experience.className =
        "report-experience";

    experience.textContent =
        report.experience;

    card.appendChild(experience);


    /* FILE */

    if (report.fileName) {

        const file =
            document.createElement("p");

        file.className =
            "report-file";

        file.textContent =
            "📎 " + report.fileName;

        card.appendChild(file);

    }


    return card;

}


/* ================================
   DISPLAY REPORTS
================================ */

function displayReports() {

    if (!reportsList) {
        return;
    }


    reportsList.innerHTML = "";


    const reports =
        getReports();


    const publicReports =
        reports.filter(
            function (report) {

                return report.visibility === "public";

            }
        );


    /* Newest first */

    publicReports.reverse();


    publicReports.forEach(
        function (report) {

            const card =
                createReportCard(report);

            reportsList.appendChild(card);

        }
    );

}


/* ================================
   SUBMIT REPORT
================================ */

if (reportForm) {

    reportForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const university =
                document.getElementById(
                    "university"
                ).value.trim();


            const city =
                document.getElementById(
                    "city"
                ).value.trim();


            const date =
                document.getElementById(
                    "incident-date"
                ).value;


            const incidentType =
                document.getElementById(
                    "incident-type"
                ).value;


            const experience =
                document.getElementById(
                    "experience"
                ).value.trim();


            const contact =
                document.getElementById(
                    "contact"
                ).value.trim();


            const visibility =
                document.querySelector(
                    'input[name="visibility"]:checked'
                ).value;


            let uploadedFileName = "";


            if (
                evidenceFile &&
                evidenceFile.files.length > 0
            ) {

                uploadedFileName =
                    evidenceFile.files[0].name;

            }


            /* Create report */

            const newReport = {

                id:
                    Date.now().toString(),

                university:
                    university,

                city:
                    city,

                date:
                    date
                        ? new Date(
                            date + "T00:00:00"
                        ).toLocaleDateString(
                            "en-US",
                            {
                                year: "numeric",
                                month: "long",
                                day: "numeric"
                            }
                        )
                        : "",

                incidentType:
                    incidentType,

                experience:
                    experience,

                fileName:
                    uploadedFileName,

                visibility:
                    visibility,

                contact:
                    contact

            };


            const reports =
                getReports();


            reports.push(newReport);


            saveReports(reports);


            /* Update wall */

            displayReports();


            /* Reset form */

            reportForm.reset();


            if (characterCount) {

                characterCount.textContent = "0";

            }


            if (fileName) {

                fileName.textContent = "";

            }


            /*
                Only public reports appear
                on the wall.
            */

            if (visibility === "public") {

                setTimeout(
                    function () {

                        const cards =
                            document.querySelectorAll(
                                ".report-card"
                            );

                        const newest =
                            cards[0];

                        if (newest) {

                            newest.scrollIntoView({
                                behavior: "smooth",
                                block: "center"
                            });

                        }

                    },
                    100
                );

            }


            alert(
                visibility === "public"
                    ? "Your anonymous report has been published."
                    : "Your private report has been submitted."
            );

        }
    );

}


/* ================================
   CANCEL DELETE
================================ */

if (cancelDelete) {

    cancelDelete.addEventListener(
        "click",
        function () {

            reportToDelete = null;

            deleteModal.classList.remove(
                "show"
            );

            deleteModal.setAttribute(
                "aria-hidden",
                "true"
            );

        }
    );

}


/* ================================
   CONFIRM DELETE
================================ */

if (confirmDelete) {

    confirmDelete.addEventListener(
        "click",
        function () {

            if (!reportToDelete) {
                return;
            }


            let reports =
                getReports();


            reports =
                reports.filter(
                    function (report) {

                        return report.id !==
                            reportToDelete;

                    }
                );


            saveReports(reports);


            reportToDelete = null;


            deleteModal.classList.remove(
                "show"
            );

            deleteModal.setAttribute(
                "aria-hidden",
                "true"
            );


            displayReports();

        }
    );

}


/* ================================
   CLICK OUTSIDE DELETE MODAL
================================ */

if (deleteModal) {

    deleteModal.addEventListener(
        "click",
        function (event) {

            if (
                event.target ===
                deleteModal
            ) {

                reportToDelete = null;

                deleteModal.classList.remove(
                    "show"
                );

                deleteModal.setAttribute(
                    "aria-hidden",
                    "true"
                );

            }

        }
    );

}


/* ================================
   DISPLAY SAVED REPORTS
================================ */

displayReports();