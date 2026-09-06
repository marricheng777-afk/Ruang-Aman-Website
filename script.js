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

        "hero.research":
            "Our research",


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

    /* =========================================
   RESEARCH
========================================= */

"research.intro.label":
    "Our Research Method",

"research.title":
    "Our Research Method",

"survey.title":
    "Survey",

"survey.description":
    "We conducted a survey to understand the public’s views, experiences, and level of understanding regarding sexual harassment, legal protection, as well as the safety and support available to victims in Indonesia. The survey received a total of 35 responses from various college students. All responses submitted through Google Forms were anonymous. The results and analysis of the survey are presented below.",

"research.universities.title":
    "Responses from Universities",

"research.universities.description":
    "The survey received responses from students representing universities across Indonesia.",


/* =========================================
   QUESTION 1
========================================= */

"research.question1.number":
    "Question 1.",

"research.question1.title":
    "I understand what is meant by sexual harassment.",

"research.question1.analysis":
    "30 out of 35 respondents (85.7%) gave a score of 5, while the remaining 5 (14.3%) gave a score of 4. No respondents selected 1–3. The results indicate that respondents generally have a very strong understanding of what sexual harassment means. This suggests that basic awareness of the issue is already relatively high among the surveyed university students.",

"research.question1.imageDescription":
    "This question measures how well respondents understand the basic meaning and definition of sexual harassment.",


/* =========================================
   QUESTION 2
========================================= */

"research.question2.number":
    "Question 2.",

"research.question2.title":
    "I know that sexual harassment can occur in various environments, including educational institutions.",

"research.question2.analysis":
    "33 respondents (94.3%) selected 5, while only 2 (5.7%) selected 4. No one selected a score below 4. This is one of the highest-scoring questions in the survey. Almost all respondents recognize that educational institutions are not automatically free from sexual harassment. This indicates strong awareness of the possibility of harassment occurring within university environments.",

"research.question2.imageDescription":
    "This question measures respondents' awareness that sexual harassment can occur in different environments, including universities and other educational institutions.",


/* =========================================
   QUESTION 3
========================================= */

"research.question3.number":
    "Question 3.",

"research.question3.title":
    "I know how to distinguish between behavior that respects personal boundaries and behavior that does not.",

"research.question3.analysis":
    "30 respondents (85.7%) gave a 5 and 5 respondents (14.3%) gave a 4. No respondent gave a score below 4. The results suggest that respondents are generally confident in recognizing personal boundaries. This is important because understanding boundaries can help individuals identify potentially inappropriate behavior and respond to it earlier.",

"research.question3.imageDescription":
    "This question examines whether respondents understand personal boundaries and can distinguish appropriate behavior from behavior that crosses those boundaries.",


/* =========================================
   QUESTION 4
========================================= */

"research.question4.number":
    "Question 4.",

"research.question4.title":
    "I know where someone can seek help if they experience or witness sexual harassment.",

"research.question4.analysis":
    "15 respondents (42.9%) gave a 5, while 8 (22.9%) gave a 4. However, 8 respondents (22.9%) selected 3, 3 (8.6%) selected 2, and 1 (2.9%) selected 1. Unlike the first three questions, the responses are much more varied. Although many respondents know where to seek help, a significant number are uncertain or lack confidence about available support systems. This suggests a gap between general awareness of sexual harassment and practical knowledge about what to do when it occurs.",

"research.question4.imageDescription":
    "This question measures respondents' knowledge of available support systems and places to seek help after experiencing or witnessing sexual harassment.",


/* =========================================
   QUESTION 5
========================================= */

"research.question5.number":
    "Question 5.",

"research.question5.title":
    "I feel that information about preventing sexual harassment is easy to find.",

"research.question5.analysis":
    "12 respondents (34.3%) gave a 5 and 9 (25.7%) gave a 4. However, 9 (25.7%) selected 3, 4 (11.4%) selected 2, and 1 (2.9%) selected 1. This was the lowest score among Questions 1–7. The results suggest that although students may understand what sexual harassment is, information about how to prevent it is not perceived as equally accessible. This could indicate a need for universities to make educational resources easier to find and more visible.",

"research.question5.imageDescription":
    "This question measures how accessible respondents perceive information about sexual-harassment prevention to be.",


/* =========================================
   QUESTION 6
========================================= */

"research.question6.number":
    "Question 6.",

"research.question6.title":
    "I believe that universities should provide regular education about preventing sexual harassment.",

"research.question6.analysis":
    "12 respondents (34.3%) gave a 5 and 9 (25.7%) gave a 4. However, 9 (25.7%) selected 3, 4 (11.4%) selected 2, and 1 (2.9%) selected 1. This was the lowest score among Questions 1–7. The results suggest that although students may understand what sexual harassment is, information about how to prevent it is not perceived as equally accessible. This could indicate a need for universities to make educational resources easier to find and more visible.",

"research.question6.imageDescription":
    "This question measures whether respondents believe universities should provide regular education and prevention programs concerning sexual harassment.",


/* =========================================
   QUESTION 7
========================================= */

"research.question7.number":
    "Question 7.",

"research.question7.title":
    "I believe that students need to know about their rights and the protections available to them regarding sexual harassment.",

"research.question7.analysis":
    "31 respondents (88.6%) selected 5, 3 (8.6%) selected 4, and only 1 (2.9%) selected 3. Nobody selected 1 or 2. The very high score demonstrates that respondents strongly recognize the importance of students knowing their rights. This is particularly significant because understanding rights can help students feel more empowered to seek assistance, report incidents, and understand what protections are available to them.",

"research.question7.imageDescription":
    "This question examines whether respondents believe students should understand their rights and protections regarding sexual harassment.",


/* =========================================
   QUESTION 8
========================================= */

"research.question8.number":
    "Question 8.",

"research.question8.title":
    "I feel safe saying “no” when someone does something that makes me uncomfortable.",

"research.question8.analysis":
    "20 respondents (62.5%) selected 5 and 9 (28.1%) selected 4. Two respondents (6.3%) selected 3 and one (3.1%) selected 2. Nobody selected 1. Most respondents feel confident saying “no” when they are uncomfortable. However, the presence of lower scores shows that not everyone feels equally safe or confident asserting their boundaries. This highlights the importance of creating environments where students feel supported when setting boundaries.",

"research.question8.imageDescription":
    "This question measures respondents' sense of personal safety and confidence in establishing boundaries when experiencing uncomfortable behavior.",


/* =========================================
   QUESTION 9
========================================= */

"research.question9.number":
    "Question 9.",

"research.question9.title":
    "I feel comfortable talking to someone I trust if I experience or witness sexual harassment.",

"research.question9.analysis":
    "19 respondents (59.4%) gave a 5 and 8 (25.0%) gave a 4. Three (9.4%) selected 3, while one each (3.1%) selected 1 and 2. Most respondents feel comfortable seeking support from someone they trust. However, the existence of respondents selecting 1–3 indicates that some students may still feel isolated or uncomfortable discussing harassment. This emphasizes the importance of building trustworthy support networks.",

"research.question9.imageDescription":
    "This question measures respondents' willingness to talk to trusted people after experiencing or witnessing sexual harassment.",


/* =========================================
   QUESTION 10
========================================= */

"research.question10.number":
    "Question 10.",

"research.question10.title":
    "I am concerned that someone may experience sexual harassment but choose not to report it.",

"research.question10.analysis":
    "26 respondents (81.3%) selected 5, while 4 (12.5%) selected 4. Two (6.3%) selected 2. Nobody selected 1 or 3. The high score shows that respondents are highly aware that harassment may go unreported. This is important because experiencing harassment does not necessarily result in a formal report. Fear, uncertainty, stigma, or lack of trust in reporting systems may prevent victims from coming forward.",

"research.question10.imageDescription":
    "This question measures respondents' awareness of underreporting, where someone experiences harassment but chooses not to report it.",


/* =========================================
   QUESTION 11
========================================= */

"research.question11.number":
    "Question 11.",

"research.question11.title":
    "I believe that victims of sexual harassment are often afraid of being blamed or not believed when they report it.",

"research.question11.analysis":
    "26 respondents (81.3%) selected 5 and 6 (18.8%) selected 4. No respondent selected 1–3. This is one of the strongest areas of agreement in the survey. Respondents overwhelmingly recognize that fear of being blamed or disbelieved can discourage victims from reporting. This suggests that creating a supportive, non-judgmental reporting environment is an important part of preventing underreporting.",

"research.question11.imageDescription":
    "This question examines respondents' perception of victim-blaming and fear of not being believed as barriers to reporting harassment.",


/* =========================================
   QUESTION 12
========================================= */

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
    "Visit Hope Helps UI on Instagram ↗",

"research.hopeInterview.questionsLabel":
    "INTERVIEW TRANSCRIPT",

"research.hopeInterview.questionsTitle":
    "Questions & Answers",


/* =========================================
   HOPE HELPS UI — QUESTION 1
========================================= */

"research.hopeInterview.question1":
    "Based on your experience, what is the biggest gap in students' understanding of sexual harassment and sexual violence?",

"research.hopeInterview.answer1":
    "According to the director of HopeHelps UI, students often do not understand the difference between sexual harassment and sexual violence. They explained that sexual violence has a broader scope, while sexual harassment is more specific, such as sexual comments, intimidation, or unwanted remarks. Sexual harassment can also be a form of sexual violence.",


/* =========================================
   HOPE HELPS UI — QUESTION 2
========================================= */

"research.hopeInterview.question2":
    "What is the most common reason students hesitate to report an incident or seek help?",

"research.hopeInterview.answer2":
    "According to the director of HopeHelps UI, students often hesitate to report or seek help because they are afraid of being blamed or judged by others. They explained that some students worry about being called an attention seeker or being seen as someone who is only trying to get attention. The interviewee also mentioned that pressure can come from personal relationships, such as partners, friends, or seniors. In some cases, victims may also experience trauma, which can make it more difficult for them to talk about what happened. Another reason is the fear of what might happen after reporting, especially when the victim has a relationship with the perpetrator.",


/* =========================================
   HOPE HELPS UI — QUESTION 3
========================================= */

"research.hopeInterview.question3":
    "In your view, what makes a reporting system feel truly safe and trustworthy from a survivor's perspective? We want to build a platform founded on trust when it comes to reporting.",

"research.hopeInterview.answer3":
    "According to the director of HopeHelps UI, privacy and confidentiality are essential in creating a trustworthy reporting system. Survivors may already fear being disbelieved, judged, or exposed, so the reporting process should prioritize confidentiality while providing empathetic and non-judgmental emotional support. Building trust begins with making survivors feel understood and respected. He also emphasized the importance of creating an anti-stigma environment, where reports are taken seriously without labels such as “attention seeker” or “pick me.” HopeHelps avoids assigning survivors to people they already know, as existing relationships may create stigma or discomfort. These insights highlight that Ruang Aman should be built around privacy, empathy, emotional support, and freedom from judgment.",


/* =========================================
   HOPE HELPS UI — QUESTION 4
========================================= */

"research.hopeInterview.question4":
    "What kind of information do students most frequently need when first seeking help? Is it things like validation or information on legal rulings that can support victims? Could you please elaborate further on that?",

"research.hopeInterview.answer4":
    "The first thing students need when seeking help is emotional support and a safe environment, rather than immediately being presented with complicated policies that state their rights or strict reporting procedures. Trauma is complex, and survivors need to feel heard, believed, and understood before making any decision regarding the next step. Once the foundation of support is established, information about their legal rights and reporting options becomes more viable, meaningful, and empowering. Victims should be emotionally supported first, before anything.",


/* =========================================
   HOPE HELPS UI — QUESTION 5
========================================= */

"research.hopeInterview.question5":
    "Beyond providing reporting channels and information regarding insights into sexual violence, what role should universities play in preventing and addressing sexual violence?",

"research.hopeInterview.answer5":
    "According to the Local Director of HopeHelps UI, universities need to provide support for survivors, such as psychological, legal, medical, and academic services, to ensure survivors continue to receive support without being penalized in their studies. Universities can also consider facilities like special leave and safe houses for survivors. In addition to handling cases, universities should also conduct awareness and training programs about sexual violence for students, faculty, and staff. According to him, it is important to build a campus culture free from stigma and victim blaming, as well as work together with the community.",


/* =========================================
   HOPE HELPS UI — QUESTION 6
========================================= */

"research.hopeInterview.question6":
    "If we were to design a website like Ruang Aman, what features or information do you think are most important to include right now?",

"research.hopeInterview.answer6":
    "According to the Director General of HopeHelps UI, a website such as Ruang Aman should provide a dedicated reporting section and accessible information to help students understand sexual harassment. The website could also make reporting cases easier for students. Additionally, it should include an educational section containing articles, opinions, and informative materials about sexual harassment. A dedicated page for support services should provide information about available services and explain how they handle reports. Existing materials, such as booklets, could also be uploaded to the website so that students can access this information more easily.",


/* =========================================
   HOPE HELPS UI — QUESTION 7
========================================= */

"research.hopeInterview.question7":
    "If you could change just one thing about the current system for preventing and handling sexual violence in Indonesian universities, what would you change and why?",

"research.hopeInterview.answer7":
    "According to the Director General of HopeHelps UI, the main aspect that needs to change is the reporting and handling system for sexual harassment at universities, which is currently considered complicated and lacks transparency. The reporting process should be made more accessible so that students feel less afraid or hesitant to report cases. In addition, investigation processes and communication with victims should be accelerated so that they receive clearer and more timely updates about their cases. Awareness and cooperation across the academic community are also important to make the reporting process more effective and strengthen victims’ trust in the system. Lastly, university culture should become more victim-centered to prevent the process from negatively affecting victims further.",
    


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

        "types.Physical & Non-Physical.title":
            "Pelecehan Fisik & Non-Fisik",

        "types.electronic.media.title":
            "Pelecehan melalui Media Elektronik",

        "types.verbal.box":
            "Kata-kata, komentar, atau lelucon bernuansa seksual yang membuat seseorang merasa tidak nyaman, malu, atau tidak aman, seperti komentar mengenai tubuh, penampilan, pakaian, hubungan, atau orientasi seksualnya. Pelecehan verbal dapat menimbulkan kecemasan, stres, rasa terhina, atau penderitaan emosional, dan mungkin membuat seseorang merasa takut untuk berbicara, ikut serta dalam percakapan, atau menghabiskan waktu bersama orang yang bertanggung jawab atas hal tersebut.",

        "types.Physical & Non-Physical.box":
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

/*RESEARCH*/ 

       "research.intro.label":
    "Bagian Penelitian",

"research.title":
    "Metode Penelitian Kami",

"survey.title":
    "Survei",

"survey.description":
    "Kami melakukan survei untuk memahami pandangan, pengalaman, dan tingkat pemahaman masyarakat mengenai pelecehan seksual, perlindungan hukum, serta keamanan dan dukungan yang tersedia bagi korban di Indonesia. Survei ini menerima total 35 responden dari berbagai mahasiswa perguruan tinggi. Seluruh jawaban yang dikirim melalui Google Forms bersifat anonim. Hasil dan analisis survei disajikan di bawah ini.",

"research.universities.title":
    "Respons dari Universitas",

"research.universities.description":
    "Survei ini menerima respons dari mahasiswa yang mewakili berbagai universitas di Indonesia.",


        /* =========================================
   QUESTION 1
========================================= */

"research.question1.number":
    "Pertanyaan 1.",

"research.question1.title":
    "Saya memahami apa yang dimaksud dengan pelecehan seksual.",

"research.question1.analysis":
    "Sebanyak 30 dari 35 responden (85,7%) memberikan skor 5, sedangkan 5 responden lainnya (14,3%) memberikan skor 4. Tidak ada responden yang memilih skor 1–3. Hasil menunjukkan bahwa responden secara umum memiliki pemahaman yang sangat baik mengenai pelecehan seksual. Hal ini menunjukkan bahwa kesadaran dasar mengenai isu pelecehan seksual sudah cukup tinggi di antara mahasiswa yang menjadi responden survei.",

"research.question1.imageDescription":
    "Pertanyaan ini mengukur seberapa baik responden memahami pengertian dan definisi dasar dari pelecehan seksual.",


/* =========================================
   QUESTION 2
========================================= */

"research.question2.number":
    "Pertanyaan 2.",

"research.question2.title":
    "Saya mengetahui bahwa pelecehan seksual dapat terjadi di berbagai lingkungan, termasuk di institusi pendidikan.",

"research.question2.analysis":
    "Sebanyak 33 responden (94,3%) memilih skor 5, sedangkan hanya 2 responden (5,7%) yang memilih skor 4. Tidak ada responden yang memberikan skor di bawah 4. Pertanyaan ini merupakan salah satu pertanyaan dengan nilai rata-rata tertinggi dalam survei. Hampir seluruh responden menyadari bahwa institusi pendidikan tidak secara otomatis terbebas dari pelecehan seksual. Hal ini menunjukkan adanya kesadaran yang tinggi terhadap kemungkinan terjadinya pelecehan seksual di lingkungan pendidikan.",

"research.question2.imageDescription":
    "Pertanyaan ini mengukur kesadaran responden bahwa pelecehan seksual dapat terjadi di berbagai lingkungan, termasuk universitas dan institusi pendidikan lainnya.",


/* =========================================
   QUESTION 3
========================================= */

"research.question3.number":
    "Pertanyaan 3.",

"research.question3.title":
    "Saya mengetahui cara membedakan perilaku yang sesuai dengan batasan pribadi dan yang tidak.",

"research.question3.analysis":
    "Sebanyak 30 responden (85,7%) memberikan skor 5 dan 5 responden (14,3%) memberikan skor 4. Tidak ada responden yang memberikan skor di bawah 4. Hasil menunjukkan bahwa responden secara umum merasa yakin dalam mengenali batasan pribadi. Pemahaman mengenai batasan pribadi penting karena dapat membantu seseorang mengenali perilaku yang tidak pantas dan mengambil tindakan lebih awal ketika batasan tersebut dilanggar.",

"research.question3.imageDescription":
    "Pertanyaan ini mengukur apakah responden memahami batasan pribadi (personal boundaries) dan mampu membedakan perilaku yang sesuai dengan perilaku yang telah melewati batas tersebut.",


/* =========================================
   QUESTION 4
========================================= */

"research.question4.number":
    "Pertanyaan 4.",

"research.question4.title":
    "Saya mengetahui ke mana seseorang dapat mencari bantuan jika mengalami atau menyaksikan pelecehan.",

"research.question4.analysis":
    "Sebanyak 15 responden (42,9%) memberikan skor 5 dan 8 responden (22,9%) memberikan skor 4. Namun, 8 responden (22,9%) memilih skor 3, 3 responden (8,6%) memilih skor 2, dan 1 responden (2,9%) memilih skor 1. Berbeda dengan tiga pertanyaan sebelumnya, jawaban pada pertanyaan ini lebih beragam. Meskipun banyak responden mengetahui tempat untuk mencari bantuan, terdapat sejumlah responden yang masih merasa tidak yakin atau kurang mengetahui mengenai sistem dukungan yang tersedia. Hal ini menunjukkan adanya kesenjangan antara kesadaran mengenai pelecehan seksual dan pengetahuan praktis mengenai apa yang harus dilakukan ketika pelecehan terjadi.",

"research.question4.imageDescription":
    "Pertanyaan ini mengukur pengetahuan responden mengenai sistem dukungan dan tempat untuk mencari bantuan setelah mengalami atau menyaksikan pelecehan seksual.",


/* =========================================
   QUESTION 5
========================================= */

"research.question5.number":
    "Pertanyaan 5.",

"research.question5.title":
    "Saya merasa informasi mengenai pencegahan pelecehan mudah ditemukan.",

"research.question5.analysis":
    "Sebanyak 12 responden (34,3%) memberikan skor 5 dan 9 responden (25,7%) memberikan skor 4. Sementara itu, 9 responden (25,7%) memilih skor 3, 4 responden (11,4%) memilih skor 2, dan 1 responden (2,9%) memilih skor 1. Pertanyaan ini memiliki nilai rata-rata terendah di antara Pertanyaan 1–7. Hasil menunjukkan bahwa meskipun mahasiswa memahami apa yang dimaksud dengan pelecehan seksual, informasi mengenai cara mencegah pelecehan belum dirasakan semudah itu untuk ditemukan. Hal ini menunjukkan adanya kebutuhan bagi universitas untuk menyediakan informasi edukatif yang lebih mudah diakses dan lebih terlihat oleh mahasiswa.",

"research.question5.imageDescription":
    "Pertanyaan ini mengukur seberapa mudah responden merasa dapat mengakses informasi mengenai pencegahan pelecehan seksual.",


/* =========================================
   QUESTION 6
========================================= */

"research.question6.number":
    "Pertanyaan 6.",

"research.question6.title":
    "Saya merasa universitas perlu memberikan edukasi mengenai pencegahan pelecehan secara rutin.",

"research.question6.analysis":
    "Sebanyak 25 responden (71,4%) memberikan skor 5, 7 responden (20,0%) memberikan skor 4, 2 responden (5,7%) memberikan skor 3, dan 1 responden (2,9%) memberikan skor 2. Tidak ada responden yang memilih skor 1. Hasil menunjukkan adanya dukungan yang kuat terhadap edukasi rutin di universitas. Meskipun responden sudah menunjukkan tingkat kesadaran yang tinggi, mereka tetap menganggap universitas memiliki peran penting dalam memberikan edukasi secara berkelanjutan. Hal ini menunjukkan bahwa edukasi mengenai pelecehan seksual sebaiknya tidak dilakukan hanya sekali, tetapi perlu diperkuat secara rutin.",

"research.question6.imageDescription":
    "Pertanyaan ini mengukur apakah responden merasa universitas perlu memberikan edukasi dan program pencegahan secara rutin mengenai pelecehan seksual.",


/* =========================================
   QUESTION 7
========================================= */

"research.question7.number":
    "Pertanyaan 7.",

"research.question7.title":
    "Saya merasa mahasiswa perlu mengetahui hak dan perlindungan yang mereka miliki terkait pelecehan.",

"research.question7.analysis":
    "Sebanyak 31 responden (88,6%) memilih skor 5, 3 responden (8,6%) memilih skor 4, dan hanya 1 responden (2,9%) yang memilih skor 3. Tidak ada responden yang memilih skor 1 atau 2. Nilai rata-rata yang sangat tinggi menunjukkan bahwa responden sangat menyadari pentingnya mahasiswa mengetahui hak dan perlindungan mereka. Pemahaman mengenai hak dapat membantu mahasiswa merasa lebih berdaya untuk mencari bantuan, melaporkan kejadian, serta memahami perlindungan yang tersedia bagi mereka.",

"research.question7.imageDescription":
    "Pertanyaan ini mengukur apakah responden menganggap penting bagi mahasiswa untuk memahami hak dan perlindungan yang mereka miliki terkait pelecehan seksual.",


/* =========================================
   SENSITIVE SECTION — QUESTIONS 8–12
========================================= */

"research.question8.number":
    "Pertanyaan 8.",

"research.question8.title":
    "Saya merasa aman untuk mengatakan “tidak” ketika seseorang melakukan sesuatu yang membuat saya tidak nyaman.",

"research.question8.analysis":
    "Sebanyak 20 responden (62,5%) memilih skor 5 dan 9 responden (28,1%) memilih skor 4. Dua responden (6,3%) memilih skor 3 dan 1 responden (3,1%) memilih skor 2. Tidak ada responden yang memilih skor 1. Sebagian besar responden merasa yakin untuk mengatakan “tidak” ketika merasa tidak nyaman. Namun, adanya responden yang memberikan skor lebih rendah menunjukkan bahwa tidak semua mahasiswa merasa sama aman atau percaya diri dalam menetapkan batasan pribadi. Hal ini menunjukkan pentingnya menciptakan lingkungan yang mendukung mahasiswa ketika mereka menetapkan batasan.",

"research.question8.imageDescription":
    "Pertanyaan ini mengukur rasa aman dan kepercayaan diri responden dalam menetapkan batasan pribadi ketika menghadapi perilaku yang membuat mereka tidak nyaman.",


"research.question9.number":
    "Pertanyaan 9.",

"research.question9.title":
    "Saya merasa nyaman untuk berbicara kepada orang yang saya percaya jika mengalami atau menyaksikan pelecehan.",

"research.question9.analysis":
    "Sebanyak 19 responden (59,4%) memberikan skor 5 dan 8 responden (25,0%) memberikan skor 4. Sebanyak 3 responden (9,4%) memilih skor 3, sedangkan masing-masing 1 responden (3,1%) memilih skor 1 dan 2. Sebagian besar responden merasa nyaman untuk mencari dukungan dari orang yang mereka percaya. Namun, adanya responden yang memilih skor 1–3 menunjukkan bahwa sebagian mahasiswa mungkin masih merasa kesulitan atau tidak nyaman untuk membicarakan pelecehan yang mereka alami atau saksikan. Hal ini menunjukkan pentingnya membangun jaringan dukungan yang aman dan dapat dipercaya.",

"research.question9.imageDescription":
    "Pertanyaan ini mengukur kesediaan responden untuk berbicara kepada orang yang mereka percaya setelah mengalami atau menyaksikan pelecehan seksual.",


"research.question10.number":
    "Pertanyaan 10.",

"research.question10.title":
    "Saya khawatir seseorang dapat mengalami pelecehan tetapi memilih untuk tidak melapor.",

"research.question10.analysis":
    "Sebanyak 26 responden (81,3%) memilih skor 5, sedangkan 4 responden (12,5%) memilih skor 4. Sebanyak 2 responden (6,3%) memilih skor 2. Tidak ada responden yang memilih skor 1 atau 3. Nilai rata-rata yang tinggi menunjukkan bahwa responden sangat menyadari bahwa pelecehan seksual dapat tidak dilaporkan. Hal ini penting karena pengalaman pelecehan tidak selalu berujung pada laporan resmi. Rasa takut, ketidakpastian, stigma, atau kurangnya kepercayaan terhadap sistem pelaporan dapat membuat korban memilih untuk tidak melapor.",

"research.question10.imageDescription":
    "Pertanyaan ini mengukur kesadaran responden terhadap underreporting, yaitu kondisi ketika seseorang mengalami pelecehan tetapi memilih untuk tidak melaporkannya.",


"research.question11.number":
    "Pertanyaan 11.",

"research.question11.title":
    "Saya percaya bahwa korban pelecehan sering kali takut disalahkan atau tidak dipercaya ketika melapor.",

"research.question11.analysis":
    "Sebanyak 26 responden (81,3%) memilih skor 5 dan 6 responden (18,8%) memilih skor 4. Tidak ada responden yang memilih skor 1–3. Pertanyaan ini merupakan salah satu bagian dengan tingkat kesepakatan tertinggi dalam survei. Responden sangat menyadari bahwa rasa takut disalahkan atau tidak dipercaya dapat membuat korban enggan melapor. Oleh karena itu, menciptakan sistem pelaporan yang aman, suportif, dan tidak menghakimi merupakan bagian penting dalam mengurangi underreporting.",

"research.question11.imageDescription":
    "Pertanyaan ini mengukur pandangan responden mengenai victim-blaming (menyalahkan korban) dan rasa takut tidak dipercaya sebagai hambatan dalam melaporkan pelecehan seksual.",


"research.question12.number":
    "Pertanyaan 12.",

"research.question12.title":
    "Saya percaya bahwa tersedia sistem pelaporan yang aman dan terpercaya yang akan membuat lebih banyak orang berani melapor.",

"research.question12.analysis":
    "Sebanyak 20 responden (62,5%) memilih skor 5 dan 4 responden (12,5%) memilih skor 4. Sementara itu, 5 responden (15,6%) memilih skor 3, 1 responden (3,1%) memilih skor 2, dan 2 responden (6,3%) memilih skor 1. Meskipun hasilnya secara keseluruhan positif, pertanyaan ini memiliki lebih banyak jawaban yang menunjukkan ketidakpastian dan ketidaksetujuan dibandingkan Pertanyaan 11. Hal ini menunjukkan bahwa responden memahami pentingnya sistem pelaporan yang aman, tetapi sebagian dari mereka mungkin belum yakin bahwa sistem tersebut benar-benar tersedia atau dapat dipercaya. Temuan ini penting karena menunjukkan adanya kesenjangan antara memahami solusi yang dibutuhkan dan memiliki kepercayaan terhadap penerapannya.",

"research.question12.imageDescription":
    "Pertanyaan ini mengukur pandangan responden mengenai pentingnya dan efektivitas sistem pelaporan yang aman dan dapat dipercaya.",


/* =========================================
   HOPE HELPS UI INTERVIEW
========================================= */

"research.hopeInterview.label":
    "WAWANCARA",

"research.hopeInterview.title":
    "Hope Helps UI",

"research.hopeInterview.subtitle":
    "Wawancara yang membahas pekerjaan, pengalaman, dan pandangan Hope Helps UI.",

"research.hopeInterview.descriptionLabel":
    "TENTANG WAWANCARA",

"research.hopeInterview.whoIsHopeHelpsUI":
    "Apa itu Hope Helps UI?",

"research.hopeInterview.description":
    "Hope Helps UI adalah sebuah inisiatif yang dipimpin oleh mahasiswa untuk meningkatkan kesadaran dan memberikan dukungan terkait isu pelecehan, kekerasan, dan keamanan di lingkungan universitas.",

"research.hopeInterview.description2":
    "Melalui wawancara ini, kami mempelajari lebih lanjut mengenai kegiatan mereka, pengalaman mereka, serta pandangan mereka dalam menciptakan ruang yang lebih aman di institusi pendidikan.",

"research.hopeInterview.conclusion":
    "Wawancara ini dilakukan sebagai bagian dari proyek penelitian Ruang Aman untuk memahami lebih lanjut pengalaman dan berbagai inisiatif terkait ruang aman di universitas-universitas di Indonesia.",

"research.hopeInterview.instagram":
    "Kunjungi Hope Helps UI di Instagram",

"research.hopeInterview.questionsLabel":
    "TRANSKRIP WAWANCARA",

"research.hopeInterview.questionsTitle":
    "Pertanyaan & Jawaban",


/* =========================================
   HOPE HELPS UI — QUESTION 1
========================================= */

"research.hopeInterview.question1":
    "Berdasarkan pengalaman Anda, apa kesenjangan terbesar dalam pemahaman mahasiswa mengenai pelecehan seksual dan kekerasan seksual?",

"research.hopeInterview.answer1":
    "Menurut direktur HopeHelps UI, mahasiswa sering kali belum memahami perbedaan antara pelecehan seksual dan kekerasan seksual. Ia menjelaskan bahwa kekerasan seksual memiliki cakupan yang lebih luas, sedangkan pelecehan seksual lebih spesifik, seperti komentar seksual, intimidasi, atau ucapan yang tidak diinginkan. Pelecehan seksual juga dapat menjadi bagian dari kekerasan seksual.",


/* =========================================
   HOPE HELPS UI — QUESTION 2
========================================= */

"research.hopeInterview.question2":
    "Apa alasan yang paling umum membuat mahasiswa ragu untuk melaporkan suatu kejadian atau mencari bantuan?",

"research.hopeInterview.answer2":
    "Menurut direktur HopeHelps UI, mahasiswa sering ragu untuk melapor atau mencari bantuan karena takut disalahkan atau dihakimi oleh orang lain. Ia menjelaskan bahwa beberapa mahasiswa khawatir akan disebut mencari perhatian atau dianggap hanya ingin mendapatkan perhatian. Narasumber juga menyebutkan bahwa tekanan dapat berasal dari hubungan pribadi, seperti pasangan, teman, atau senior. Dalam beberapa kasus, korban juga dapat mengalami trauma yang membuat mereka semakin sulit untuk membicarakan apa yang terjadi. Alasan lainnya adalah rasa takut terhadap apa yang mungkin terjadi setelah melapor, terutama ketika korban memiliki hubungan dengan pelaku.",


/* =========================================
   HOPE HELPS UI — QUESTION 3
========================================= */

"research.hopeInterview.question3":
    "Menurut Anda, apa yang membuat sistem pelaporan terasa benar-benar aman dan dapat dipercaya dari sudut pandang penyintas? Kami ingin membangun platform yang berlandaskan kepercayaan dalam hal pelaporan.",

"research.hopeInterview.answer3":
    "Menurut direktur HopeHelps UI, privasi dan kerahasiaan merupakan hal yang sangat penting dalam menciptakan sistem pelaporan yang dapat dipercaya. Penyintas mungkin sudah memiliki kekhawatiran akan tidak dipercaya, dihakimi, atau identitasnya diketahui orang lain. Oleh karena itu, proses pelaporan harus mengutamakan kerahasiaan sekaligus memberikan dukungan emosional yang penuh empati dan tidak menghakimi. Membangun kepercayaan dimulai dengan membuat penyintas merasa dipahami dan dihormati. Ia juga menekankan pentingnya menciptakan lingkungan yang bebas dari stigma, di mana laporan dianggap serius tanpa memberikan label seperti “attention seeker” atau “pick me”. HopeHelps menghindari penempatan penyintas dengan orang yang sudah mereka kenal, karena hubungan yang sudah ada dapat menimbulkan stigma atau rasa tidak nyaman. Hal-hal ini menunjukkan bahwa Ruang Aman perlu dibangun berdasarkan privasi, empati, dukungan emosional, dan kebebasan dari penghakiman.",


/* =========================================
   HOPE HELPS UI — QUESTION 4
========================================= */

"research.hopeInterview.question4":
    "Informasi seperti apa yang paling sering dibutuhkan mahasiswa ketika pertama kali mencari bantuan? Apakah berupa validasi atau informasi mengenai ketentuan hukum yang dapat mendukung korban? Bisakah Anda menjelaskannya lebih lanjut?",

"research.hopeInterview.answer4":
    "Hal pertama yang dibutuhkan mahasiswa ketika mencari bantuan adalah dukungan emosional dan lingkungan yang aman, bukan langsung diberikan kebijakan yang rumit mengenai hak mereka atau prosedur pelaporan yang ketat. Trauma merupakan hal yang kompleks, dan penyintas perlu merasa didengar, dipercaya, dan dipahami sebelum mengambil keputusan mengenai langkah selanjutnya. Setelah dasar dukungan tersebut terbentuk, informasi mengenai hak-hak hukum dan pilihan pelaporan akan menjadi lebih mudah dipahami, bermakna, dan memberdayakan. Korban perlu mendapatkan dukungan emosional terlebih dahulu sebelum hal lainnya.",


/* =========================================
   HOPE HELPS UI — QUESTION 5
========================================= */

"research.hopeInterview.question5":
    "Selain menyediakan saluran pelaporan dan informasi mengenai kekerasan seksual, peran apa yang seharusnya dijalankan universitas dalam mencegah dan menangani kekerasan seksual?",

"research.hopeInterview.answer5":
    "Menurut Direktur Lokal HopeHelps UI, universitas perlu menyediakan dukungan bagi penyintas, seperti layanan psikologis, hukum, medis, dan akademik, untuk memastikan penyintas tetap mendapatkan dukungan tanpa mendapatkan dampak negatif terhadap studi mereka. Universitas juga dapat mempertimbangkan fasilitas seperti cuti khusus dan rumah aman bagi penyintas. Selain menangani kasus, universitas juga perlu mengadakan program edukasi dan pelatihan mengenai kekerasan seksual bagi mahasiswa, dosen, dan staf. Menurutnya, penting untuk membangun budaya kampus yang bebas dari stigma dan victim-blaming, serta bekerja sama dengan masyarakat.",


/* =========================================
   HOPE HELPS UI — QUESTION 6
========================================= */

"research.hopeInterview.question6":
    "Jika kita merancang situs web seperti Ruang Aman, fitur atau informasi apa yang menurut Anda paling penting untuk dimasukkan saat ini?",

"research.hopeInterview.answer6":
    "Menurut Direktur Jenderal HopeHelps UI, situs web seperti Ruang Aman sebaiknya menyediakan bagian khusus untuk pelaporan serta informasi yang mudah diakses agar mahasiswa dapat memahami pelecehan seksual. Situs web tersebut juga dapat mempermudah mahasiswa dalam melaporkan kasus. Selain itu, perlu terdapat bagian edukasi yang berisi artikel, opini, dan materi informatif mengenai pelecehan seksual. Halaman khusus layanan dukungan juga sebaiknya memberikan informasi mengenai layanan yang tersedia dan menjelaskan bagaimana layanan tersebut menangani laporan. Materi yang sudah ada, seperti booklet, juga dapat diunggah ke situs web agar mahasiswa dapat mengakses informasi tersebut dengan lebih mudah.",


/* =========================================
   HOPE HELPS UI — QUESTION 7
========================================= */

"research.hopeInterview.question7":
    "Jika Anda hanya dapat mengubah satu hal dari sistem yang saat ini digunakan untuk mencegah dan menangani kekerasan seksual di universitas-universitas Indonesia, apa yang akan Anda ubah dan mengapa?",

"research.hopeInterview.answer7":
    "Menurut Direktur Jenderal HopeHelps UI, aspek utama yang perlu diubah adalah sistem pelaporan dan penanganan pelecehan seksual di universitas, yang saat ini dianggap rumit dan kurang transparan. Proses pelaporan perlu dibuat lebih mudah diakses agar mahasiswa tidak terlalu takut atau ragu untuk melaporkan kasus. Selain itu, proses investigasi dan komunikasi dengan korban perlu dipercepat agar mereka menerima informasi yang lebih jelas dan tepat waktu mengenai kasus mereka. Kesadaran dan kerja sama di seluruh komunitas akademik juga penting untuk membuat proses pelaporan lebih efektif dan meningkatkan kepercayaan korban terhadap sistem. Terakhir, budaya universitas perlu menjadi lebih berpusat pada korban (victim-centered) agar proses tersebut tidak semakin memberikan dampak negatif kepada korban.",



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

