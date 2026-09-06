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
        "nav.research": "Research",
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


         /* INFO SECTION */

        "info.title.what":
            "What is Sexual Harassment?",

        "info.box.what":
            "   Sexual harassment is behavior or an act involving sexual activity without the consent of one of the parties involved. Sexual harassment can make victims feel uncomfortable, degraded, humiliated, or threatened. Generally, sexual harassment is associated with extreme acts such as physical violence or even murder. However, sexual harassment does not only involve extreme actions. It can also include actions that may be considered minor, such as catcalling or staring at someone in a sexual manner.                Sexual harassment can happen to anyone, including children, teenagers, and adults. However, there are many cases where neither the perpetrator nor the victim realizes that what happened or was done constitutes sexual harassment. In many cases, victims of sexual harassment may also be unwilling to disclose or report what happened.",

         "info.title.why":
            "Why should we care about sexual harassment?",
    
         "info.box.why":
            "As human beings, we need to care about sexual harassment because its effects can be very serious for victims. Victims who do not receive adequate support or assistance may be at risk of experiencing mental health difficulties such as depression, PTSD, anxiety, and trauma. Sexual harassment can also have physical consequences, including unwanted pregnancy. Therefore, we need to become more aware of sexual harassment and contribute to creating an environment that is safe and supportive of victims.",

        "types.title":
            "Types of Sexual Harassment",

        "types.verbal.title":
            "Verbal Harassment",

        "types.Physical & Non-physical.title":
            "Physical & Non-Physical Harassment",

        "types.electronic.media.title":
            "Harassment Through Electronic Media",

        "types.verbal.box":
            "Sexually suggestive words, comments, or jokes that make someone feeel uncomfortable, embarrassed, or unsafe, such as remarks about their body, appearance, clothing, relationships, or sexuality. Verbal harassment can cause anxiety, stress, humiliation, or emotional distress, and may make someone feel afraid to speak, participate in conversations, or spend time around the person responsible.",
       
        "types.Physical & Non-physical.box":
            "<strong>Physical:</strong> Sexual behavior that does not involve physical contact but is intrusive or unwanted, such as sexual stares or gestures. <strong>Non-Physical:</strong> Unwanted physical contact or touching of a sexual nature without the consent of one of the parties.",
        
        "types.electronic.media.box":
            "Harassment through electronic media is unwanted sexual behavior carried outthrough conversations, social media, or digital platforms. Examples include sending unsolicited sexual messages, photos, or videos; making sexual comments via direct messages or group chats; and sending content that makes someone feel uncomfortable. These actions can cause fear, embarrassment, anxiety, and distress, and make victims feel unsafe when using digital media.",        

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

        "nav.research":
            "Penelitian",

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

        "hero.research":
            "Penelitian kami",


        /* INFO SECTION */

        "info.title.what":
            "Apa itu Pelecehan Seksual?",

        "info.box.what":
            "Pelecehan seksual adalah perilaku atau tindakan yang melibatkan aktivitas seksual tanpa persetujuan dari salah satu pihak yang terlibat. Pelecehan seksual dapat membuat korban merasa tidak nyaman, direndahkan, dipermalukan, atau terancam. Pada umumnya, pelecehan seksual sering dikaitkan dengan tindakan ekstrem seperti kekerasan fisik atau bahkan pembunuhan. Namun, pelecehan seksual tidak hanya mencakup tindakan ekstrem. Tindakan yang sering dianggap sepele, seperti catcalling atau menatap seseorang secara seksual, juga dapat termasuk dalam bentuk pelecehan. Pelecehan seksual dapat terjadi pada siapa saja, termasuk anak-anak, remaja, maupun orang dewasa. Namun, terdapat banyak kasus di mana baik pelaku maupun korban tidak menyadari bahwa tindakan yang terjadi atau dilakukan merupakan bentuk pelecehan seksual. Dalam banyak kasus, korban pelecehan seksual juga mungkin merasa enggan untuk menceritakan atau melaporkan apa yang telah terjadi.",

         "info.title.why":
            "Mengapa kita harus peduli terhadap pelecehan seksual?",
    
         "info.box.why":
            "Sebagai manusia, kita perlu peduli terhadap pelecehan seksual karena dampaknya dapat sangat serius bagi korban. Korban yang tidak mendapatkan dukungan atau bantuan yang memadai dapat berisiko mengalami masalah kesehatan mental seperti depresi, PTSD, kecemasan, dan trauma. Pelecehan seksual juga dapat menimbulkan dampak fisik, termasuk kehamilan yang tidak diinginkan. Oleh karena itu, kita perlu meningkatkan kesadaran mengenai pelecehan seksual dan turut menciptakan lingkungan yang aman serta mendukung korban.",

        "types.title":
            "Jenis-jenis Pelecehan Seksual",

        "types.verbal.title":
            "Pelecehan Verbal",

        "types.Physical & Non-physical.title":
            "Pelecehan Fisik & Non-Fisik",

        "types.electronic.media.title":
            "Pelecehan melalui Media Elektronik",

        "types.verbal.box":
            "Kata-kata, komentar, atau lelucon bernuansa seksual yang membuat seseorang merasa tidak nyaman, malu, atau tidak aman, seperti komentar mengenai tubuh, penampilan, pakaian, hubungan, atau orientasi seksualnya. Pelecehan verbal dapat menimbulkan kecemasan, stres, rasa terhina, atau penderitaan emosional, dan mungkin membuat seseorang merasa takut untuk berbicara, ikut serta dalam percakapan, atau menghabiskan waktu bersama orang yang bertanggung jawab atas hal tersebut.",

        "types.Physical & Non-physical.box":
            "<strong>Fisik:</strong> Perilaku seksual yang tidak melibatkan kontak fisik tetapi bersifat mengganggu atau tidak diinginkan, seperti tatapan atau gestur seksual. <strong>Non-Fisik:</strong> Sentuhan atau kontak fisik yang tidak diinginkan dan bersifat seksual tanpa persetujuan dari salah satu pihak.",
        
        "types.electronic.media.box":
            "Pelecehan melalui media elektronik adalah perilaku seksual yang tidak diinginkan yang dilakukan melalui percakapan, media sosial, atau platform digital. Contohnya termasuk mengirim pesan, foto, atau video seksual yang tidak diminta, memberikan komentar seksual melalui pesan langsung atau grup chat, serta mengirim konten yang membuat seseorang merasa tidak nyaman. Tindakan ini dapat menyebabkan rasa takut, malu, cemas, tertekan, dan membuat korban merasa tidak aman saat menggunakan media digital.",

        /* WHAT'S INSIDE */

        "inside.title":
            "Apa saja yang ada di sini",

        "inside.research.title":
            "Penelitian",

        "inside.research.description":
            "Temukan penelitian dan survei mengenai pelecehan seksual di kampus-kampus Indonesia, termasuk kasus yang melibatkan grup chat dan media sosial. Dari survei dan wawancara kami.",

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

            element.innerHTML =
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
            overlayRgb: "238, 233, 255, 0.78"
        },

        dark: {
            background: "#120d19",
            section: "#120d19",
            heading: "#c5a8f0",
            text: "#ffffff",
            accent: "#a987df",
            accentDark: "#c5a8f0",
            circle: "rgba(145, 95, 220, 0.38)",
            overlayRgb: "18, 13, 25, 0.78"
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
            overlayRgb: "232, 246, 237, 0.78"
        },

        dark: {
            background: "#0c1710",
            section: "#0c1710",
            heading: "#91d5aa",
            text: "#ffffff",
            accent: "#75b98e",
            accentDark: "#91d5aa",
            circle: "rgba(70, 170, 100, 0.38)",
            overlayRgb: "12, 23, 16, 0.80"
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
            overlayRgb: "253, 234, 241, 0.78"
        },

        dark: {
            background: "#1c0d14",
            section: "#1c0d14",
            heading: "#e8a1bc",
            text: "#ffffff",
            accent: "#d98aa8",
            accentDark: "#e8a1bc",
            circle: "rgba(210, 75, 125, 0.38)",
            overlayRgb: "28, 13, 20, 0.80"
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
            overlayRgb: "255, 247, 217, 0.78"
        },

        dark: {
            background: "#1d1a0b",
            section: "#1d1a0b",
            heading: "#e8cf70",
            text: "#ffffff",
            accent: "#d2b968",
            accentDark: "#e8cf70",
            circle: "rgba(215, 180, 55, 0.38)",
            overlayRgb: "29, 26, 11, 0.80"
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
            overlayRgb: "229, 245, 250, 0.78"
        },

        dark: {
            background: "#09171d",
            section: "#09171d",
            heading: "#91d5e8",
            text: "#ffffff",
            accent: "#76bdd4",
            accentDark: "#91d5e8",
            circle: "rgba(55, 155, 195, 0.38)",
            overlayRgb: "9, 23, 29, 0.80"
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
            overlayRgb: "255, 240, 230, 0.78"
        },

        dark: {
            background: "#1e110c",
            section: "#1e110c",
            heading: "#e8aa8a",
            text: "#ffffff",
            accent: "#d99a78",
            accentDark: "#e8aa8a",
            circle: "rgba(210, 100, 60, 0.38)",
            overlayRgb: "30, 17, 12, 0.80"
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
        "--hero-overlay-rgb",
        selectedTheme.overlayRgb
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