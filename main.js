document.addEventListener('DOMContentLoaded', () => {
  // Hamburger Menu Logic
  const hamburger = document.querySelector('.hamburger-menu');
  const navLinks = document.querySelector('.nav-links');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      const isExpanded = navLinks.classList.contains('active');
      hamburger.setAttribute('aria-expanded', isExpanded);
    });
  }

  // --- Language Switching Logic ---

  const languageToggle = document.getElementById('language-toggle');
  const languageToggleImg = languageToggle ? languageToggle.querySelector('img') : null;

  // Define translations (add more keys as needed)
  const translations = {
    en: {
      'nav-llms': 'LLMs ▾',
      'nav-llms-overview': 'LLM Overview',
      'nav-llms-careers': 'LLM Careers',
      'nav-quantum': 'Quantum ▾',
      'nav-quantum-overview': 'Quantum Overview',
      'nav-quantum-careers': 'Quantum Careers',
      'nav-robotics': 'Robotics ▾',
      'nav-robotics-overview': 'Robotics Overview',
      'nav-robotics-careers': 'Robotics Careers',
      'nav-home': 'Home',
      'nav-about': 'About',
      'hero-title': 'Explore the Frontiers of Technology',
      'hero-subtitle': 'Dive into the worlds of LLMs, Quantum Computing, and Robotics.',
      'hero-cta': 'Learn More',
      'intro-title': 'Welcome to Starspace',
      'intro-p1': 'Your portal to understanding the cutting-edge fields shaping our future. Explore comprehensive overviews and potential career paths in Large Language Models (LLMs), Quantum Computing, and Robotics.',
      'intro-p2': 'Whether you\'re a student, professional, or just curious, find the information you need to navigate these exciting domains.',




      // Add more keys for index.html
      'teaser-llm-title': 'Large Language Models',
      'teaser-llm-desc': 'Uncover the power of AI language understanding and generation.',
      'teaser-quantum-title': 'Quantum Computing',
      'teaser-quantum-desc': 'Explore the revolutionary potential of quantum mechanics for computation.',
      'teaser-robotics-title': 'Robotics',
      'teaser-robotics-desc': 'Discover the advancements in automated systems and intelligent machines.',



      // about.html page keys
      'about-title': 'About Starspace',
      'about-created-by': 'Created by',
      'creator-info': 'Nick Trimandylis',
      'creator-role': 'Developer & Designer',
      'about-purpose-title': 'Project Purpose',
      'about-p1': 'Starspace is an educational initiative designed to introduce students to cutting-edge technologies in computer science. Our mission is to:',
      "about-mission1": 'Demystify complex technical concepts',
      "about-mission2": 'Showcase career opportunities in emerging fields',
      "about-mission3": 'Inspire the next generation of technologists',
      "about-mission4": 'Provide accessible learning resources',
      "about-context-title": 'Educational Context',
      'about-p2': 'This project was developed for my MYP5 Comp Sci project. It serves as both an educational resource and career guidance tool, highlighting three key technology areas:',
      "about-tech-llm-title": 'Large Language Models',
      "about-tech-llm-desc": 'Exploring the AI revolution in natural language processing',
      "about-tech-quantum-title": 'Quantum Computing',
      "about-tech-quantum-desc": 'Understanding the next frontier in computational power',
      "about-tech-robotics-title": 'Robotics',
      "about-tech-robotics-desc": 'Discovering the intersection of hardware and AI',
      "about-tech-details-title": "Technical Details",
      "about-tech-details-p": "This website was built using modern web technologies:",
      "about-tech-stack1": 'HTML5 & CSS3 for structure and styling',
      "about-tech-stack2": 'JavaScript for interactive elements',
      "about-tech-stack3": 'Responsive design for all device sizes',
      "about-tech-stack4": 'Github pages for easy hosting',
      "about-contact-title": "Contact",
      "about-contact-p": "For questions or feedback about Starspace:",
      "about-contact-email": "Email: nicktrim8@duck.com",
      "about-contact-school": 'School: CGS - Costeas Geitonas School',


      // LLM OVERVIEW page keys
      'llm-overview-title': 'What are Large Language Models?',
      'llm-overview-definition-title': 'Definition',
      'llm-overview-definition-p': 'Large Language Models (LLMs) are advanced AI systems that can understand and generate human-like text. They are trained on vast amounts of data to predict and produce coherent language.',
      'llm-overview-how-title': 'How It Works',
      'llm-overview-how-p': 'LLMs function by processing large datasets to learn patterns in language. They use tokens to represent words and phrases, allowing them to generate text based on context.',
      "llm-overview-examples-title": "Examples",
      'llm-overview-examples-p': "Examples of well-known LLMs include ChatGPT, Gemini, and Claude. These models are capable of tasks such as language translation, summarization, and conversation.",
      'llm-overview-quote': 'Machine intelligence is the last invention that humanity will ever need to make.',
      'llm-overview-quote-author' : '- Nick Bostrom',



      // LLM Careers page keys
      'llm-careers-title': 'Careers in Large Language Models',
      'llm-careers-ml-engineer-title': 'Machine Learning Engineer',
      'llm-careers-ml-engineer-p': 'As a Machine Learning Engineer specializing in Large Language Models (LLMs), you\'ll work on developing and optimizing algorithms that enable machines to understand and generate human language. Companies like OpenAI and Google are at the forefront of this field, offering exciting opportunities to innovate and impact the future of AI.',
      'llm-careers-research-scientist-title': 'Research Scientist',
      'llm-careers-research-scientist-p': 'Research Scientists in the LLM domain focus on advancing the theoretical and practical aspects of language models. This role involves conducting experiments, publishing findings, and collaborating with academic and industry leaders to push the boundaries of what\'s possible with AI.',
      'llm-careers-skills-title': 'Skills Required',
      'llm-careers-skills-p': 'To excel in the LLM field, you\'ll need strong programming skills (Python, TensorFlow, PyTorch), a solid understanding of machine learning concepts, and experience with data analysis and natural language processing. Creativity and problem-solving abilities are also crucial.',


      // Quantum Overview page keys
      'quantum-overview-title': 'What is Quantum Computing?',
      'quantum-overview-definition-title': 'Definition',
      'quantum-overview-definition-p': 'Quantum computing uses qubits, allowing multiple states at once, enabling fast parallel processing.',
      'quantum-overview-how-title': 'How It Works',
      'quantum-overview-how-p': 'Quantum computers use entanglement and quantum gates for complex computations beyond classical capabilities.',
      "quantum-overview-apps-title": "Potential Applications",
      'quantum-overview-apps-p': "Quantum computing can revolutionize fields like drug discovery, materials science, and cryptography by simulating complex interactions and breaking traditional encryption.",
      'quantum-overview-quote': 'Quantum computing is not just a faster computer. It’s a fundamentally different way of processing information',
      'quantum-overview-quote-author' : '- Michio Kaku',


      // Quantum Careers page keys
      'quantum-careers-title': 'Quantum Computing Careers',
      'quantum-careers-paths-title': 'Career Paths',
      'quantum-careers-paths-p': 'Quantum computing offers diverse career paths, including roles as quantum algorithm developers, quantum hardware engineers, and quantum software researchers. These professionals work on cutting-edge technologies that have the potential to revolutionize industries.',
      'quantum-careers-skills-title': 'Required Skills',
      'quantum-careers-skills-p': 'To succeed in quantum computing, you\'ll need a strong foundation in quantum mechanics, linear algebra, and programming languages like Python and Qiskit. Problem-solving skills and the ability to work in interdisciplinary teams are also essential.',
      'quantum-careers-industries-title': 'Industries & Employers',
      'quantum-careers-industries-p': 'Quantum technologies are being developed by tech giants, research labs, and innovative startups. Companies like IBM, Google, and Rigetti are leading the charge, offering exciting opportunities for those entering the field.',



      // Robotics Overview page keys
      'robotics-overview-title': 'What is Robotics?',
      'robotics-overview-definition-title': 'Definition',
      'robotics-overview-definition-p': 'Robotics is the interdisciplinary branch of engineering and science that includes mechanical engineering, electrical engineering, computer science, and others. It involves the design, construction, operation, and use of robots.',
      'robotics-overview-how-title': 'How It Works',
      'robotics-overview-how-p': 'Robots function through a combination of sensors, actuators, and control systems. Sensors gather information from the environment, actuators perform actions, and control systems process data to make decisions.',
      "robotics-overview-apps-title": "Potential Applications",
      'robotics-overview-apps-p': "Robotics has applications in manufacturing, healthcare, space exploration, and more. It is transforming industries by automating tasks and improving efficiency",
      'robotics-overview-quote': 'In the twenty-first century, the robot will take the place which slave labor occupied in ancient civilization.',
      'robotics-overview-quote-author' : '- Nikola Tesla',
      
      // Robotics Careers page keys
      'robotics-careers-title': 'Careers in Robotics',
      'robotics-careers-opportunities-title': 'Opportunities',
      'robotics-careers-opportunities-p': 'Quantum computing offers diverse career paths, including roles as quantum algorithm developers, quantum hardware engineers, and quantum software researchers. These professionals work on cutting-edge technologies that have the potential to revolutionize industries.',
      'robotics-careers-skills-title': 'Skills Required',
      'robotics-careers-skills-p': 'To thrive in robotics, you\'ll need strong programming skills, a solid understanding of mechanical engineering principles, and the ability to solve complex problems. Experience with AI and machine learning can also be beneficial.',
      'robotics-careers-growth-title': 'Industry Growth',
      'robotics-careers-growth-p': 'The robotics industry is experiencing rapid growth, driven by advancements in technology and increasing demand across various sectors. This growth presents exciting opportunities for professionals looking to make an impact.',
      
      //Breadcrumbs
      'breadcrumbs-home': 'Home',
      'breadcrumbs-llm': 'LLM',
      'breadcrumbs-quantum': 'Quantum',
      'breadcrumbs-robotics': 'Robotics',
      'breadcrumbs-overview': 'Overview',
      'breadcrumbs-careers': 'Careers',
    
    },
    el: {
      'nav-llms': 'Μεγάλα Γλωσσικά Μοντέλα ▾',
      'nav-llms-overview': 'Επισκόπηση LLM',
      'nav-llms-careers': 'Καριέρες στα LLM',
      'nav-quantum': 'Κβαντική Υπολογιστική ▾',
      'nav-quantum-overview': 'Επισκόπηση Κβαντικής Υπολογιστικής',
      'nav-quantum-careers': 'Καριέρες στην Κβαντική Υπολογιστική',
      'nav-robotics': 'Ρομποτική ▾',
      'nav-robotics-overview': 'Επισκόπηση Ρομποτικής',
      'nav-robotics-careers': 'Καριέρες στη Ρομποτική',
      'nav-home': 'Αρχική',
      'nav-about': 'Σχετικά',
      
      'hero-title': 'Εξερεύνησε τα Σύνορα της Τεχνολογίας',
      'hero-subtitle': 'Βούτηξε στους κόσμους των LLMs, της Κβαντικής Υπολογιστικής και της Ρομποτικής.',
      'hero-cta': 'Μάθε Περισσότερα',
      
      'intro-title': 'Καλώς ήρθες στο Starspace',
      'intro-p1': 'Η πύλη σου για την κατανόηση των αιχμηρών πεδίων που διαμορφώνουν το μέλλον μας. Εξερεύνησε πλήρεις επισκοπήσεις και πιθανές επαγγελματικές διαδρομές στα Μεγάλα Γλωσσικά Μοντέλα (LLMs), την Κβαντική Υπολογιστική και τη Ρομποτική.',
      'intro-p2': 'Είτε είσαι μαθητής, επαγγελματίας ή απλά περίεργος, βρες τις πληροφορίες που χρειάζεσαι για να πλοηγηθείς σε αυτούς τους συναρπαστικούς τομείς.',
    
      'teaser-llm-title': 'Μεγάλα Γλωσσικά Μοντέλα',
      'teaser-llm-desc': 'Ανακάλυψε τη δύναμη της κατανόησης και παραγωγής γλώσσας από την Τεχνητή Νοημοσύνη.',
      'teaser-quantum-title': 'Κβαντική Υπολογιστική',
      'teaser-quantum-desc': 'Εξερεύνησε τη ριζοσπαστική δυναμική της κβαντικής μηχανικής στους υπολογισμούς.',
      'teaser-robotics-title': 'Ρομποτική',
      'teaser-robotics-desc': 'Ανακάλυψε τις εξελίξεις στα αυτοματοποιημένα συστήματα και στις ευφυείς μηχανές.',
    
      'about-title': 'Σχετικά με το Starspace',
      'about-created-by': 'Δημιουργήθηκε από',
      'creator-info': 'Nick Trimandylis',
      'creator-role': 'Προγραμματιστής & Σχεδιαστής',
      
      'about-purpose-title': 'Σκοπός του Έργου',
      'about-p1': 'Το Starspace είναι μια εκπαιδευτική πρωτοβουλία που έχει σχεδιαστεί για να εισαγάγει τους μαθητές στις αιχμές της τεχνολογίας στην επιστήμη των υπολογιστών. Η αποστολή μας είναι να:',
      'about-mission1': 'Απλοποιήσουμε πολύπλοκες τεχνικές έννοιες',
      'about-mission2': 'Αναδείξουμε επαγγελματικές ευκαιρίες σε αναδυόμενα πεδία',
      'about-mission3': 'Εμπνεύσουμε τη νέα γενιά τεχνολόγων',
      'about-mission4': 'Παρέχουμε προσβάσιμους πόρους μάθησης',
      
      'about-context-title': 'Εκπαιδευτικό Πλαίσιο',
      'about-p2': 'Αυτό το έργο αναπτύχθηκε για το project MYP5 Comp Sci. Λειτουργεί ως εκπαιδευτικό υλικό και οδηγός σταδιοδρομίας, προβάλλοντας τρεις βασικούς τομείς τεχνολογίας:',
      
      'about-tech-llm-title': 'Μεγάλα Γλωσσικά Μοντέλα',
      'about-tech-llm-desc': 'Εξερευνώντας την επανάσταση της ΤΝ στην επεξεργασία φυσικής γλώσσας',
      'about-tech-quantum-title': 'Κβαντική Υπολογιστική',
      'about-tech-quantum-desc': 'Κατανόηση της επόμενης γενιάς υπολογιστικής ισχύος',
      'about-tech-robotics-title': 'Ρομποτική',
      'about-tech-robotics-desc': 'Ανακαλύπτοντας τη διασταύρωση υλικού και ΤΝ',
    
      'about-tech-details-title': 'Τεχνικές Λεπτομέρειες',
      'about-tech-details-p': 'Αυτός ο ιστότοπος δημιουργήθηκε χρησιμοποιώντας σύγχρονες τεχνολογίες web:',
      'about-tech-stack1': 'HTML5 & CSS3 για τη δομή και τη μορφοποίηση',
      'about-tech-stack2': 'JavaScript για διαδραστικά στοιχεία',
      'about-tech-stack3': 'Responsive design για όλα τα μεγέθη συσκευών',
      'about-tech-stack4': 'Φιλοξενία μέσω Github Pages',
    
      'about-contact-title': 'Επικοινωνία',
      'about-contact-p': 'Για ερωτήσεις ή σχόλια σχετικά με το Starspace:',
      'about-contact-email': 'Email: nicktrim8@duck.com',
      'about-contact-school': 'Σχολείο: CGS - Σχολή Κωστέα Γείτονα',
    
      // LLM Overview
      'llm-overview-title': 'Τι είναι τα Μεγάλα Γλωσσικά Μοντέλα;',
      'llm-overview-definition-title': 'Ορισμός',
      'llm-overview-definition-p': 'Τα Μεγάλα Γλωσσικά Μοντέλα (LLMs) είναι προηγμένα συστήματα ΤΝ που μπορούν να κατανοούν και να παράγουν ανθρώπινο κείμενο. Εκπαιδεύονται σε τεράστια σύνολα δεδομένων για να προβλέπουν και να δημιουργούν συνεκτική γλώσσα.',
      'llm-overview-how-title': 'Πώς Λειτουργεί',
      'llm-overview-how-p': 'Τα LLMs επεξεργάζονται μεγάλα σύνολα δεδομένων για να μάθουν μοτίβα στη γλώσσα, χρησιμοποιώντας tokens για την αναπαράσταση λέξεων και φράσεων.',
      'llm-overview-examples-title': 'Παραδείγματα',
      'llm-overview-examples-p': 'Παραδείγματα γνωστών LLMs είναι τα ChatGPT, Gemini και Claude. Αυτά τα μοντέλα εκτελούν εργασίες όπως μετάφραση, σύνοψη και συνομιλία.',
      'llm-overview-quote': 'Η μηχανική νοημοσύνη είναι η τελευταία εφεύρεση που θα χρειαστεί ποτέ να κάνει η ανθρωπότητα.',
      'llm-overview-quote-author': '- Nick Bostrom',
    
      // LLM Careers
      'llm-careers-title': 'Καριέρες στα Μεγάλα Γλωσσικά Μοντέλα',
      'llm-careers-ml-engineer-title': 'Μηχανικός Μηχανικής Μάθησης',
      'llm-careers-ml-engineer-p': 'Ως Μηχανικός Μηχανικής Μάθησης με εξειδίκευση στα LLMs, θα αναπτύσσεις και θα βελτιστοποιείς αλγορίθμους που επιτρέπουν στις μηχανές να κατανοούν και να παράγουν ανθρώπινη γλώσσα.',
      'llm-careers-research-scientist-title': 'Ερευνητής Επιστήμονας',
      'llm-careers-research-scientist-p': 'Οι Ερευνητές επιστήμονες στα LLMs επικεντρώνονται στη θεωρητική και πρακτική προώθηση των γλωσσικών μοντέλων μέσω πειραμάτων και δημοσιεύσεων.',
      'llm-careers-skills-title': 'Απαραίτητες Δεξιότητες',
      'llm-careers-skills-p': 'Για να διαπρέψεις στον τομέα LLM, χρειάζεσαι ισχυρές προγραμματιστικές δεξιότητες (Python, TensorFlow, PyTorch), γνώσεις μηχανικής μάθησης και επεξεργασίας φυσικής γλώσσας.',
    
      // Quantum Overview
      'quantum-overview-title': 'Τι είναι η Κβαντική Υπολογιστική;',
      'quantum-overview-definition-title': 'Ορισμός',
      'quantum-overview-definition-p': 'Η κβαντική υπολογιστική χρησιμοποιεί qubits που επιτρέπουν την παράλληλη επεξεργασία πολλαπλών καταστάσεων ταυτόχρονα.',
      'quantum-overview-how-title': 'Πώς Λειτουργεί',
      'quantum-overview-how-p': 'Οι κβαντικοί υπολογιστές χρησιμοποιούν διεμπλοκή και κβαντικές πύλες για υπολογισμούς που ξεπερνούν τις κλασικές δυνατότητες.',
      'quantum-overview-apps-title': 'Πιθανές Εφαρμογές',
      'quantum-overview-apps-p': 'Η κβαντική υπολογιστική μπορεί να μεταμορφώσει την ανακάλυψη φαρμάκων, τα υλικά και την κρυπτογραφία.',
      'quantum-overview-quote': 'Η κβαντική υπολογιστική δεν είναι απλώς ένας ταχύτερος υπολογιστής. Είναι ένας θεμελιωδώς διαφορετικός τρόπος επεξεργασίας πληροφοριών.',
      'quantum-overview-quote-author': '- Michio Kaku',
    
      // Quantum Careers
      'quantum-careers-title': 'Καριέρες στην Κβαντική Υπολογιστική',
      'quantum-careers-paths-title': 'Επαγγελματικές Διαδρομές',
      'quantum-careers-paths-p': 'Υπάρχουν πολλές καριέρες όπως ανάπτυξη αλγορίθμων, μηχανική υλικού και έρευνα λογισμικού κβαντικών υπολογιστών.',
      'quantum-careers-skills-title': 'Απαραίτητες Δεξιότητες',
      'quantum-careers-skills-p': 'Απαιτούνται γνώσεις κβαντικής μηχανικής, γραμμικής άλγεβρας και γλωσσών προγραμματισμού όπως Python και Qiskit.',
      'quantum-careers-industries-title': 'Κλάδοι & Εργοδότες',
      'quantum-careers-industries-p': 'Εταιρείες όπως η IBM, η Google και η Rigetti οδηγούν την ανάπτυξη κβαντικών τεχνολογιών.',
    
      // Robotics Overview
      'robotics-overview-title': 'Τι είναι η Ρομποτική;',
      'robotics-overview-definition-title': 'Ορισμός',
      'robotics-overview-definition-p': 'Η ρομποτική είναι διεπιστημονικός κλάδος που περιλαμβάνει μηχανολογία, ηλεκτρολογία και επιστήμη υπολογιστών.',
      'robotics-overview-how-title': 'Πώς Λειτουργεί',
      'robotics-overview-how-p': 'Τα ρομπότ λειτουργούν μέσω αισθητήρων, ενεργοποιητών και συστημάτων ελέγχου.',
      'robotics-overview-apps-title': 'Πιθανές Εφαρμογές',
      'robotics-overview-apps-p': 'Η ρομποτική εφαρμόζεται σε βιομηχανία, υγεία, εξερεύνηση του διαστήματος και άλλους τομείς.',
      'robotics-overview-quote': 'Στον εικοστό πρώτο αιώνα, το ρομπότ θα πάρει τη θέση που είχε η δουλεία στην αρχαιότητα.',
      'robotics-overview-quote-author': '- Nikola Tesla',
    
      // Robotics Careers
      'robotics-careers-title': 'Καριέρες στη Ρομποτική',
      'robotics-careers-opportunities-title': 'Ευκαιρίες',
      'robotics-careers-opportunities-p': 'Υπάρχουν ρόλοι σε ανάπτυξη ρομποτικών συστημάτων, έρευνα και τεχνητή νοημοσύνη.',
      'robotics-careers-skills-title': 'Απαραίτητες Δεξιότητες',
      'robotics-careers-skills-p': 'Χρειάζονται δεξιότητες προγραμματισμού, μηχανολογίας και επίλυσης σύνθετων προβλημάτων.',
      'robotics-careers-growth-title': 'Ανάπτυξη Κλάδου',
      'robotics-careers-growth-p': 'Ο κλάδος της ρομποτικής αναπτύσσεται ραγδαία, δημιουργώντας συναρπαστικές ευκαιρίες.',
    
      // Breadcrumbs
      'breadcrumbs-home': 'Αρχική',
      'breadcrumbs-llm': 'LLM',
      'breadcrumbs-quantum': 'Κβαντική',
      'breadcrumbs-robotics': 'Ρομποτική',
      'breadcrumbs-overview': 'Επισκόπηση',
      'breadcrumbs-careers': 'Καριέρες',
    }
      
    
  };

  function applyTranslations(lang) {
    document.querySelectorAll('[data-i18n]').forEach(element => {
      const key = element.getAttribute('data-i18n');
      if (translations[lang] && translations[lang][key]) {
        // Handle different element types if necessary (e.g., input placeholders)
        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
            if(element.placeholder) element.placeholder = translations[lang][key];
        } else {
            element.textContent = translations[lang][key];
        }
      }
    });
    // Update HTML lang attribute
    document.documentElement.lang = lang;
  }

  function setLanguage(lang) {
    if (!['en', 'el'].includes(lang)) {
      console.warn(`Unsupported language: ${lang}. Defaulting to English.`);
      lang = 'en';
    }
    localStorage.setItem('preferredLanguage', lang);
    applyTranslations(lang);
    if (languageToggleImg) {
      const flagPath = languageToggleImg.src.substring(0, languageToggleImg.src.lastIndexOf('/') + 1);
      languageToggleImg.src = `${flagPath}flag-${lang}.svg`;
      languageToggleImg.alt = lang === 'en' ? 'English Flag' : 'Greek Flag';
      languageToggleImg.setAttribute('data-lang', lang);
    }
    console.log(`Language set to: ${lang}`);
  }

  function toggleLanguage() {
    const currentLang = localStorage.getItem('preferredLanguage') || 'en';
    const newLang = currentLang === 'en' ? 'el' : 'en';
    setLanguage(newLang);
  }

  // Initialization
  if (languageToggle) {
    languageToggle.addEventListener('click', toggleLanguage);

    // Determine initial language
    let initialLang = localStorage.getItem('preferredLanguage');
    if (!initialLang) {
      // Detect browser language (simplified)
      const browserLang = navigator.language.split('-')[0]; // Get 'en' from 'en-US'
      if (browserLang === 'el') {
        initialLang = 'el';
      } else {
        initialLang = 'en'; // Default to English
      }
    }
    setLanguage(initialLang);
  } else {
      // Fallback if toggle button isn't found (e.g., error pages)
      // Try to apply translations based on browser pref if no stored pref
      let initialLang = localStorage.getItem('preferredLanguage');
      if (!initialLang) {
          const browserLang = navigator.language.split('-')[0];
          initialLang = (browserLang === 'el') ? 'el' : 'en';
      }
      applyTranslations(initialLang); // Apply translations even without the button
      console.log(`Language toggle button not found. Applied language: ${initialLang}`);
  }

});