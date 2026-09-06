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

        /*RESEARCH*/

        "research.intro.label":
            "Section Research",

        "research.title":
            "Our Research Method",

        "survey.title":
            "Survey",

        "survey.description":
            "We conducted a survey to understand the public’s views, experiences, and level of understanding regarding sexual harassment, legal protection, as well as the safety and support available to victims in Indonesia. The survey received a total of 35 responses from various college students. All responses submitted through Google Forms were anonymous. The results and analysis of the survey are presented below.",

        "research.universities.title":
            "University Responses",

        "research.universities.description":
            "The survey received responses from students representing universities across Indonesia.",

        "research.question1.number":
            "Question 1.",

        "research.question1.title":
            "I understand what is meant by sexual harassment",

        "research.question1.analysis":
            "30 out of 35 respondents (85.7%) gave a score of 5,while the remaining 5 (14.3%) gave a score of 4. No respondents selected 1–3. The results indicate that respondents generally have a very strong understanding of what sexual harassment means. This suggests that basic awareness of the issue is already relatively high among the surveyed university students.",

        "research.question1.imageDescription":
            "This question measures how well respondents understand the basic meaning and definition of sexual harassment.",

                "research.question2.number":
            "Question 2.",

        "research.question2.title":
            "I know that sexual harassment can occur in various environments, including educational institutions.",

        "research.question2.analysis":
            "33 respondents (94.3%) selected 5, while only 2 (5.7%) selected 4. No one selected a score below 4. The results show that this is one of the highest-scoring questions in the survey. Almost all respondents recognize that educational institutions are not automatically free from sexual harassment. This indicates strong awareness of the possibility of harassment occurring within university environments.",

        "research.question2.imageDescription":
            "This question measures respondents' awareness that sexual harassment can occur in different environments, including universities and other educational institutions.",


        "research.question3.number":
            "Question 3.",

        "research.question3.title":
            "I know how to distinguish between behavior that respects personal boundaries and behavior that does not.",

        "research.question3.analysis":
            "30 respondents (85.7%) gave a 5 and 5 respondents (14.3%) gave a 4. No respondent gave a score below 4. The results suggest that respondents are generally confident in recognizing personal boundaries. This is important because understanding boundaries can help individuals identify potentially inappropriate behavior and respond to it earlier.",

        "research.question3.imageDescription":
            "This question examines whether respondents understand personal boundaries and can distinguish appropriate behavior from behavior that crosses those boundaries.",


        "research.question4.number":
            "Question 4.",

        "research.question4.title":
            "I know where someone can seek help if they experience or witness sexual harassment.",

        "research.question4.analysis":
            "15 respondents (42.9%) gave a 5, while 8 (22.9%) gave a 4. However, 8 respondents (22.9%) selected 3, 3 (8.6%) selected 2, and 1 (2.9%) selected 1. Unlike the first three questions, the responses are much more varied. Although many respondents know where to seek help, a significant number are uncertain or lack confidence about available support systems. This suggests a gap between general awareness of sexual harassment and practical knowledge about what to do when it occurs.",

        "research.question4.imageDescription":
            "This question measures respondents' knowledge of available support systems and places to seek help after experiencing or witnessing sexual harassment.",


        "research.question5.number":
            "Question 5.",

        "research.question5.title":
            "I feel that information about preventing sexual harassment is easy to find.",

        "research.question5.analysis":
            "12 respondents (34.3%) gave a 5 and 9 (25.7%) gave a 4. However, 9 (25.7%) selected 3, 4 (11.4%) selected 2, and 1 (2.9%) selected 1. This was the lowest score among Questions 1–7. The results suggest that although students may understand what sexual harassment is, information about how to prevent it is not perceived as equally accessible. This could indicate a need for universities to make educational resources easier to find and more visible.",

        "research.question5.imageDescription":
            "This question measures how accessible respondents perceive information about sexual-harassment prevention to be.",


        "research.question6.number":
            "Question 6.",

        "research.question6.title":
            "I believe that universities should provide regular education about preventing sexual harassment.",

        "research.question6.analysis":
            "12 respondents (34.3%) gave a 5 and 9 (25.7%) gave a 4. However, 9 (25.7%) selected 3, 4 (11.4%) selected 2, and 1 (2.9%) selected 1. This was the lowest score among Questions 1–7. The results suggest that although students may understand what sexual harassment is, information about how to prevent it is not perceived as equally accessible. This could indicate a need for universities to make educational resources easier to find and more visible.",

        "research.question6.imageDescription":
            "This question measures whether respondents believe universities should provide regular education and prevention programs concerning sexual harassment.",


        "research.question7.number":
            "Question 7.",

        "research.question7.title":
            "I believe that students need to know about their rights and the protections available to them regarding sexual harassment.",

        "research.question7.analysis":
            "31 respondents (88.6%) selected 5, 3 (8.6%) selected 4, and only 1 (2.9%) selected 3. Nobody selected 1 or 2. The very high score demonstrates that respondents strongly recognize the importance of students knowing their rights. This is particularly significant because understanding rights can help students feel more empowered to seek assistance, report incidents, and understand what protections are available to them.",

        "research.question7.imageDescription":
            "This question examines whether respondents believe students should understand their rights and protections regarding sexual harassment.",


        "research.question8.number":
            "Question 8.",

        "research.question8.title":
            "I feel safe saying “no” when someone does something that makes me uncomfortable.",

        "research.question8.analysis":
            "20 respondents (62.5%) selected 5 and 9 (28.1%) selected 4. Two respondents (6.3%) selected 3 and one (3.1%) selected 2. Nobody selected 1. Most respondents feel confident saying “no” when they are uncomfortable. However, the presence of lower scores shows that not everyone feels equally safe or confident asserting their boundaries. This highlights the importance of creating environments where students feel supported when setting boundaries.",

        "research.question8.imageDescription":
            "This question measures respondents' sense of personal safety and confidence in establishing boundaries when experiencing uncomfortable behavior.",


        "research.question9.number":
            "Question 9.",

        "research.question9.title":
            "I feel comfortable talking to someone I trust if I experience or witness sexual harassment.",

        "research.question9.analysis":
            "19 respondents (59.4%) gave a 5 and 8 (25.0%) gave a 4. Three (9.4%) selected 3, while one each (3.1%) selected 1 and 2. Most respondents feel comfortable seeking support from someone they trust. However, the existence of respondents selecting 1–3 indicates that some students may still feel isolated or uncomfortable discussing harassment. This emphasizes the importance of building trustworthy support networks.",

        "research.question9.imageDescription":
            "This question measures respondents' willingness to talk to trusted people after experiencing or witnessing sexual harassment.",


        "research.question10.number":
            "Question 10.",

        "research.question10.title":
            "I am concerned that someone may experience sexual harassment but choose not to report it.",

        "research.question10.analysis":
            "26 respondents (81.3%) selected 5, while 4 (12.5%) selected 4. Two (6.3%) selected 2. Nobody selected 1 or 3. The high score shows that respondents are highly aware that harassment may go unreported. This is important because experiencing harassment does not necessarily result in a formal report. Fear, uncertainty, stigma, or lack of trust in reporting systems may prevent victims from coming forward.",

        "research.question10.imageDescription":
            "This question measures respondents' awareness of underreporting, where someone experiences harassment but chooses not to report it.",


        "research.question11.number":
            "Question 11.",

        "research.question11.title":
            "I believe that victims of sexual harassment are often afraid of being blamed or not believed when they report it.",

        "research.question11.analysis":
            "26 respondents (81.3%) selected 5 and 6 (18.8%) selected 4. No respondent selected 1–3. This is one of the strongest areas of agreement in the survey. Respondents overwhelmingly recognize that fear of being blamed or disbelieved can discourage victims from reporting. This suggests that creating a supportive, non-judgmental reporting environment is an important part of preventing underreporting.",

        "research.question11.imageDescription":
            "This question examines respondents' perception of victim-blaming and fear of not being believed as barriers to reporting harassment.",


        "research.question12.number":
            "Question 12.",

        "research.question12.title":
            "I believe that having a safe and trustworthy reporting system would encourage more people to report sexual harassment.",

        "research.question12.analysis":
            "20 respondents (62.5%) selected 5 and 4 (12.5%) selected 4. However, 5 (15.6%) selected 3, 1 (3.1%) selected 2, and 2 (6.3%) selected 1. Although the overall response is positive, this question has noticeably more uncertainty and negative responses than Question 11. This suggests that respondents strongly understand the need for a safe reporting system, but may be less certain that such systems are actually available or trustworthy. This is an important finding for the research because it points toward a possible gap between recognizing the solution and having confidence in its implementation.",

        "research.question12.imageDescription":
            "This question measures respondents' belief in the importance and effectiveness of having a safe and trustworthy reporting system.",


        /* =========================================
           HOPE HELPS UI INTERVIEW
        ========================================= */

        "research.hopeInterview.label":
            "INTERVIEW",

        "research.hopeInterview.title":
            "Hope Helps UI",

        "research.hopeInterview.subtitle":
            "An interview exploring the work, experiences, and perspectives of Hope Helps UI.",

        "research.hopeInterview.descriptionLabel":
            "ABOUT THE INTERVIEW",

        "research.hopeInterview.whoIsHopeHelpsUI":
            "Who is Hope Helps UI?",

        "research.hopeInterview.description":
            "Hope Helps UI is a student-led initiative that works to create awareness and provide support surrounding issues of harassment, violence, and safety within the university environment.",

        "research.hopeInterview.description2":
            "Through this interview, we learn more about their work, their experiences, and their perspective on creating safer spaces within educational institutions.",

        "research.hopeInterview.conclusion":
            "This interview was conducted as part of the Ruang Aman research project to better understand the experiences and initiatives surrounding safe spaces in Indonesian universities.",

        "research.hopeInterview.instagram":
            "Visit Hope Helps UI on Instagram",

        "research.hopeInterview.questionsLabel":
            "INTERVIEW TRANSCRIPT",

        "research.hopeInterview.questionsTitle":
            "Questions & Answers",


        /* HOPE HELPS UI — QUESTION 1 */

        "research.hopeInterview.question1":
            "Based on your experience, what is the biggest gap in students' understanding of sexual harassment and sexual violence?",

        "research.hopeInterview.answer1":
            "According to the director of HopeHelps UI, students often do not understand the difference between sexual harassment and sexual violence. They explained that sexual violence has a wider meaning, while sexual harassment is more specific, such as sexual comments, intimidation, or unwanted remarks. Sexual harassment can also be a part of sexual violence.",


        /* HOPE HELPS UI — QUESTION 2 */

        "research.hopeInterview.question2":
            "What is the most common reason students hesitate to report an incident or seek help?",

        "research.hopeInterview.answer2":
            "According to the director of HopeHelps UI, students often hesitate to report or seek help because they are afraid of being blamed or judged by others. They explained that some students worry about being called an attention seeker or being seen as someone who is only trying to get attention. The interviewee also mentioned that pressure can come from personal relationships, such as partners, friends, or seniors. In some cases, victims may also experience trauma, which can make it more difficult for them to talk about what happened. Another reason is the fear of what might happen after reporting, especially when the victim has a relationship with the perpetrator.",


        /* HOPE HELPS UI — QUESTION 3 */

        "research.hopeInterview.question3":
            "In your view, what makes a reporting system feel truly safe and trustworthy from a survivor's perspective? We want to build a platform founded on trust when it comes to reporting.",

        "research.hopeInterview.answer3":
            "According to the director of HopeHelps UI, privacy and confidentiality are essential in creating a trustworthy reporting system. Survivors may already fear being disbelieved, judged, or exposed, so the reporting process should prioritize confidentiality while providing empathetic and non-judgmental emotional support. Building trust begins with making survivors feel understood and respected. He also emphasized the importance of creating an anti-stigma environment, where reports are taken seriously without labels such as “attention seeker” or “pick me.” HopeHelps avoids assigning survivors to people they already know, as existing relationships may create stigma or discomfort. These insights highlight that Ruang Aman should be built around privacy, empathy, emotional support, and freedom from judgment.",


        /* HOPE HELPS UI — QUESTION 4 */

        "research.hopeInterview.question4":
            "What kind of information do students most frequently need when first seeking help? Is it things like validation or information on legal rulings that can support victims? Could you please elaborate further on that?",

        "research.hopeInterview.answer4":
            "The first thing students need when seeking help is emotional support and a safe environment, rather than immediately being presented with complicated policies that state their rights or strict reporting procedures. Trauma is complex, and survivors need to feel heard, believed, and understood before making any decision regarding the next step. Once the foundation of support is established, information about their legal rights and reporting options becomes more viable, meaningful, and empowering. Victims should be emotionally supported first, before anything.",


        /* HOPE HELPS UI — QUESTION 5 */

        "research.hopeInterview.question5":
            "Beyond providing reporting channels and information regarding insights into sexual violence, what role should universities play in preventing and addressing sexual violence?",

        "research.hopeInterview.answer5":
            "According to the Local Director of HopeHelps UI, universities need to provide support for survivors, such as psychological, legal, medical, and academic services, to ensure survivors continue to receive support without being penalized in their studies. Universities can also consider facilities like special leave and safe houses for survivors. In addition to handling cases, universities should also conduct awareness and training programs about sexual violence for students, faculty, and staff. According to him, it is important to build a campus culture free from stigma and victim blaming, as well as work together with the community.",


        /* HOPE HELPS UI — QUESTION 6 */

        "research.hopeInterview.question6":
            "If we were to design a website like Ruang Aman, what features or information do you think are most important to include right now?",

        "research.hopeInterview.answer6":
            "According to the Director General of HopeHelps UI, a website such as Ruang Aman should provide a dedicated reporting section and accessible information to help students understand sexual harassment. The website could also make reporting cases easier for students. Additionally, it should include an educational section containing articles, opinions, and informative materials about sexual harassment. A dedicated page for support services should provide information about available services and explain how they handle reports. Existing materials, such as booklets, could also be uploaded to the website so that students can access this information more easily.",


        /* HOPE HELPS UI — QUESTION 7 */

        "research.hopeInterview.question7":
            "If you could change just one thing about the current system for preventing and handling sexual violence in Indonesian universities, what would you change and why?",

        "research.hopeInterview.answer7":
            "According to the Director General of HopeHelps UI, the main aspect that needs to change is the reporting and handling system for sexual harassment at universities, which is currently considered complicated and lacks transparency. The reporting process should be made more accessible so that students feel less afraid or hesitant to report cases. In addition, investigation processes and communication with victims should be accelerated so that they receive clearer and more timely updates about their cases. Awareness and cooperation across the academic community are also important to make the reporting process more effective and strengthen victims’ trust in the system. Lastly, university culture should become more victim-centered to prevent the process from negatively affecting victims further.",

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