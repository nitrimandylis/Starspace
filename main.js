document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');

    if (hamburgerMenu && navLinks) {
        hamburgerMenu.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const isExpanded = navLinks.classList.contains('active');
            hamburgerMenu.setAttribute('aria-expanded', isExpanded);

            // Optional: Add class to body to prevent scrolling when menu is open
            document.body.classList.toggle('no-scroll', isExpanded);
        });
    }

    // Add event listener for the language toggle button
    const languageToggleButton = document.getElementById('language-toggle');
    // Translation data for English and Greek
    const translations = {
        en: {
            'nav-home': 'Home',
            'nav-llms': 'LLMs ▾',
            'nav-llm-overview': 'LLM Overview',
            'nav-llm-careers': 'LLM Careers',
            'nav-quantum': 'Quantum ▾',
            'nav-quantum-overview': 'Quantum Overview',
            'nav-quantum-careers': 'Quantum Careers',
            'nav-robotics': 'Robotics ▾',
            'nav-robotics-overview': 'Robotics Overview',
            'nav-robotics-careers': 'Robotics Careers',
            'nav-about': 'About',
            'breadcrumb-home': 'Home',
            'breadcrumb-llms': 'LLMs',
            'breadcrumb-quantum': 'Quantum',
            'breadcrumb-robotics': 'Robotics',
            'breadcrumb-careers': 'Careers',
            'breadcrumb-overview': 'Overview',
            'page-header-robotics-careers': 'Careers in Robotics',
            'opportunities-title': 'Opportunities',
            'opportunities-desc': 'Placeholder text describing career opportunities in robotics, including roles in research, development, and application of robotic technologies.',
            'skills-title': 'Skills Required',
            'skills-desc': 'Placeholder text listing skills required for a career in robotics, such as programming, mechanical engineering, and problem-solving.',
            'growth-title': 'Industry Growth',
            'growth-desc': 'Placeholder text discussing the growth of the robotics industry and its impact on various sectors.',
            'quote': 'The future of robotics is bright and full of potential.',
            'quote-footer': '- Industry Expert (Placeholder)'
        },
        el: {
            'nav-home': 'Αρχική',
            'nav-llms': 'ΓΛΜ ▾',
            'nav-llm-overview': 'Επισκόπηση ΓΛΜ',
            'nav-llm-careers': 'Καριέρες ΓΛΜ',
            'nav-quantum': 'Κβαντική ▾',
            'nav-quantum-overview': 'Επισκόπηση Κβαντικής',
            'nav-quantum-careers': 'Καριέρες Κβαντικής',
            'nav-robotics': 'Ρομποτική ▾',
            'nav-robotics-overview': 'Επισκόπηση Ρομποτικής',
            'nav-robotics-careers': 'Καριέρες Ρομποτικής',
            'nav-about': 'Σχετικά',
            'breadcrumb-home': 'Αρχική',
            'breadcrumb-llms': 'ΓΛΜ',
            'breadcrumb-quantum': 'Κβαντική',
            'breadcrumb-robotics': 'Ρομποτική',
            'breadcrumb-careers': 'Καριέρες',
            'breadcrumb-overview': 'Επισκόπηση',
            'page-header-robotics-careers': 'Καριέρες στη Ρομποτική',
            'opportunities-title': 'Ευκαιρίες',
            'opportunities-desc': 'Κείμενο θέσης για τις ευκαιρίες καριέρας στη ρομποτική, συμπεριλαμβανομένων ρόλων στην έρευνα, ανάπτυξη και εφαρμογή ρομποτικών τεχνολογιών.',
            'skills-title': 'Απαραίτητες Δεξιότητες',
            'skills-desc': 'Κείμενο θέσης για τις δεξιότητες που απαιτούνται για καριέρα στη ρομποτική, όπως προγραμματισμός, μηχανολογία και επίλυση προβλημάτων.',
            'growth-title': 'Ανάπτυξη Βιομηχανίας',
            'growth-desc': 'Κείμενο θέσης για την ανάπτυξη της βιομηχανίας ρομποτικής και τον αντίκτυπό της σε διάφορους τομείς.',
            'quote': 'Το μέλλον της ρομποτικής είναι λαμπρό και γεμάτο δυνατότητες.',
            'quote-footer': '- Ειδικός του Κλάδου (Θέση)'
        }
    };
    let currentLang = 'en';
    function updateLanguage(lang) {
        currentLang = lang;
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                el.textContent = translations[lang][key];
            } else {
                console.warn(`Missing translation for key: ${key} in language: ${lang}`);
            }
        });
        // Update html lang attribute
        document.documentElement.lang = lang;
    }
    if (languageToggleButton) {
        languageToggleButton.addEventListener('click', () => {
            const newLang = currentLang === 'en' ? 'el' : 'en';
            currentLang = newLang;
            updateLanguage(newLang);
            // Update html lang attribute
            document.documentElement.lang = newLang;
        });
    }
    // On page load, set initial language
    updateLanguage(currentLang);
});