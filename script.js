/* ═══════════════════════════════════════════════════
   script.js — Vladana Aleksić Portfolio
   ═══════════════════════════════════════════════════ */

/* ─────────────────────────────────────────────
   HAMBURGER MENU
───────────────────────────────────────────── */
const burgerBtn = document.getElementById('burger-btn');
const hamburger = document.getElementById('hamburger');

burgerBtn.addEventListener('click', () => {
    const isOpen = hamburger.classList.toggle('is-open');
    burgerBtn.classList.toggle('is-active', isOpen);
    burgerBtn.setAttribute('aria-expanded', isOpen);
    document.body.classList.toggle('menu-open', isOpen);
});

document.querySelectorAll('.hamburger-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('is-open');
        burgerBtn.classList.remove('is-active');
        burgerBtn.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('menu-open');
    });
});

/* ─────────────────────────────────────────────
   PROJECT DATA
───────────────────────────────────────────── */
const projects = {

    recipe: {
        tag:      'Flask · React · Docker · CI/CD',
        title:    'Recipe Platform',
        subtitle: 'A full-stack web application for sharing, searching, and rating cooking recipes. Backend in Python Flask, frontend in React + TypeScript, deployed via Docker and GitHub Actions CI/CD to Render. (Dec 2025 - Feb 2026)',
        techs:    ['Python', 'Flask', 'React', 'TypeScript', 'PostgreSQL', 'Redis', 'Docker', 'GitHub Actions', 'Nginx', 'Gunicorn', 'JWT', 'Mailpit', "Team-based"],
        how:      'The backend is a Flask REST API served in production by Gunicorn inside a Docker container. The React + TypeScript frontend is built with Vite for development and served by Nginx in production. Local development uses docker-compose to spin up PostgreSQL, Redis, Mailpit, and the backend together. CI/CD is fully automated via GitHub Actions: on every push to main, it detects changes in client/ or server/, builds production Docker images (multi-stage), pushes them to GitHub Container Registry, and triggers Render deploy hooks. Deploy time is 5–10 minutes from push to live.',
        linkText: 'github.com/VladK333 — RecipePlatform',
        linkHref: 'https://github.com/VladK333/RecipePlatform',
    },

    pubsub: {
        tag:      'C · TCP · Parallel Programming',
        title:    'Publisher–Subscriber TCP System',
        subtitle: 'A concurrent Pub/Sub messaging system built in C, using a TCP client–server architecture with a thread pool, thread-safe data structures, and message history per topic. (Dec 2025 - Feb 2026)',
        techs:    ['C', 'TCP Sockets', 'POSIX Threads', 'Thread Pool', 'select()', 'Mutex', 'FIFO Queue', 'Static Library (NetworkLib)', "Team-based"],
        how:      'The system has three components: PubSubEngine (server), Publisher (message sender), and Subscriber (message receiver and validator). The server uses select() for handling multiple connections and distributes messages through a work queue processed by 4 worker threads. Data structures include SafeLinkedList (thread-safe per-node mutex), MessageQueue (FIFO history per topic — ANALOG and STATUS), and a shared Work Queue. A static NetworkLib encapsulates all TCP communication. Tested with a stress test: 10 Publishers at 5ms intervals, 5 Subscribers, 60 seconds — stable, no deadlocks. Reconnect test also passed without server restart.',
        linkText: 'github.com/VladK333 — PubSub_project',
        linkHref: 'https://github.com/VladK333/PubSub_project',
    },

    cimnms: {
        tag:      'C# · .NET · NMS · CIM · GDA',
        title:    'CIM / NMS / GDA System',
        subtitle: 'Complete implementation of the CIM model pipeline: from EA diagram through CIM Profile, RDFS schema, generated DLL, Adapter, and Delta — all the way to NMS data loading and a GDA client application. (Jan - Feb 2026)',
        techs:    ['C#', '.NET Framework', 'WPF', 'Enterprise Architect', 'CIM Tool', 'CIMET', 'GDA (Generic Data Access)', 'NMS (Network Management System)', 'Adapter Pattern', 'CIM/XML', 'RDFS/XMI'],
        how:      'The project follows the flow: EA diagram → CIM Profile → RDFS export → Generated DLL → Adapter (maps Concrete Model objects to Delta objects) → NMS (loads data and implements GDA) → GDA client. CIM/XML provides concrete data instances. The WPF client demonstrates GDA reading: all TransformerWinding objects related to the transformer with the highest GID, and objects with minimum values of specific properties. Platform target is x86. The project covers CIM model understanding, RDFS/XMI schemas, Adapter pattern, NMS class structure, ModelCodes, and correct GDA method usage.',
        linkText: 'github.com/VladK333 — DataModels_project',
        linkHref: 'https://github.com/VladK333/DataModels_project',
    },

    floodsafe: {
        tag:      'Navigation · Geolocation · Flood Safety',
        title:    'FloodSafe',
        subtitle: 'A prototype navigation system created to help people during urban floods by directing them to the nearest shelters or hospitals. (Jul 2025 – Present)',
        techs:    ['Geolocation API', 'Dynamic Routing', 'Active Sensor Data', 'JavaScript', 'HTML5 & CSS3'],
        how:      'FloodSafe uses real-time geolocation and data from active flood sensors to compute safe routes avoiding hazardous areas. The system dynamically re-routes users as flood conditions change, guiding them to the nearest shelter or hospital. This project grew directly out of the ARTIFACT Summer School on AI tools for urban flood risk modelling that I attended.',
        linkText: 'github.com/VladK333/FloodSafe',
        linkHref: 'https://github.com/VladK333/FloodSafe',
    },

    derms: {
        tag:      'C# · Smart Grid · UDP/TCP',
        title:    'DERMS',
        subtitle: 'Dispatcher system for monitoring and managing the electricity production of distributed energy resources (DERs) within a Smart Grid, using UDP/TCP communication. (Jan – Jul 2025)',
        techs:    ['C#', '.NET Framework', 'WPF', 'UDP', 'TCP', 'OOP', 'Smart Grid', "Team-based"],
        how:      'PRMuIS_Projekat — a full dispatcher system built in C# with WPF. It communicates with distributed energy resources via UDP and TCP sockets, aggregates production data in real time, and presents it to operators through a live dashboard. I implemented the communication layer and the resource scheduling logic.',
        linkText: 'github.com/VladK333/DERMS_project',
        linkHref: 'https://github.com/VladK333/DERMS_project',
    },

    microgrid: {
        tag:      'C# · Simulation · Smart Grid',
        title:    'MicroGrid',
        subtitle: 'Simulated electricity production and consumption in a MicroGrid with dynamic resource regulation and consumption tracking. (Nov 2024 – Jun 2025)',
        techs:    ['C#', '.NET Framework', 'WPF', 'OOP', 'Simulation', 'Smart Grid', "Team-based"],
        how:      'ers_E01_tim_2 — a team project simulating a MicroGrid environment. The system models producers and consumers, dynamically balancing generation against demand. I worked on the resource regulation engine and the consumption tracking module. Simulation parameters can be adjusted at runtime through the WPF interface.',
        linkText: 'github.com/VladK333/MicroGrid_project',
        linkHref: 'https://github.com/VladK333/MicroGrid_project',
    },

    smartgrid: {
        tag:      'MATLAB · C# · WPF · Data Analysis',
        title:    'Smart Grid Monitor',
        subtitle: 'A system for monitoring and analysing a Smart Grid based on a dataset containing time-series data of voltage, current, frequency, energy consumption, and fault indicators. (Sep – Oct 2025)',
        techs:    ['C#', 'WPF', 'Time-series Analysis', 'Data Visualisation', "Team-based"],
        how:      'VP_Projekat — the system ingests time-series Smart Grid data and provides visual dashboards for monitoring voltage, current, frequency, and energy consumption. Fault indicators are flagged in real time. The analysis pipeline is implemented in MATLAB, with a WPF front-end for the operator interface.',
        linkText: 'github.com/VladK333/SmartGridMonitor_project',
        linkHref: 'https://github.com/VladK333/SmartGridMonitor_project',
    },

    travel: {
        tag:      'Web App · Full-stack',
        title:    'Travel Agency Web App',
        subtitle: 'A web application that simulates an online system for a travel agency — users can browse, book, and manage travel packages, accommodations, and reservations. (Sep 2025)',
        techs:    ['HTML5', 'CSS3', 'JavaScript', 'SQL', 'Server-side backend', 'OOP'],
        how:      'Web-project — a full-stack web app. The front-end provides a responsive booking interface in HTML, CSS, and JavaScript. The back-end handles user authentication, package listings, and reservation management with a SQL database. I focused on the booking flow and database design.',
        linkText: 'github.com/VladK333/TravelAgencyWebApp',
        linkHref: 'https://github.com/VladK333/TravelAgencyWebApp',
    },

    scada: {
        tag:      'SCADA · C# · WPF',
        title:    'SCADA Battery Monitor',
        subtitle: 'A system for monitoring and managing an external battery for device charging, featuring simulated charging and discharging processes. (Sep 2025)',
        techs:    ['C#', 'WPF', '.NET Framework', 'SCADA', 'Simulation', 'OOP', "Team-based"],
        how:      'SCADA_Battery — a SCADA-style desktop application in C# with WPF. It simulates charging and discharging cycles of an external battery, tracks state-of-charge in real time, triggers alerts at configurable thresholds, and logs historical data. The project introduced me to SCADA design patterns and event-driven programming.',
        linkText: 'github.com/VladK333/SCADA_Battery',
        linkHref: 'https://github.com/VladK333/SCADA_Battery',
    },

    floodrisk: {
        tag:      'Python · Machine Learning · Geospatial · Random Forest',
        title:    'Flood Risk ML Pipeline',
        subtitle: 'A complete machine learning pipeline for geospatial flood risk prediction — covering data preprocessing, correlation analysis, feature selection, and hyperparameter-tuned Random Forest classification on a ~16k sample dataset. (Nov - Dec 2025)',
        techs:    ['Python', 'scikit-learn', 'pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Random Forest', 'StandardScaler', 'One-Hot Encoding', 'VIF', 'Mutual Information', 'ANOVA', 'GridSearchCV', 'RandomizedSearchCV'],
        how:      'The pipeline is structured in 6 parts. Part 1 loads and explores ~16k geospatial samples with continuous (Elevation, Slope, Rainfall, TWI, SPI), categorical (LULC, Geomorphology, Lithology, Soil), and circular (Aspect) features against a binary flood-risk target. Part 2 cleans invalid values, then applies Z-score normalization to continuous features, one-hot encoding to categorical features, and sin/cos transformation to the circular Aspect feature. Part 3 runs Pearson, Point-Biserial, and Chi-Square / Cramér\'s V correlation analyses. Part 4 performs collinearity analysis via VIF and ranks features using four independent methods — Mutual Information, Random Forest Importance, Permutation Importance, and ANOVA F-Statistic — combined into a consensus ranking. Part 5 benchmarks 12 feature sets (Top 10/15/20 from each method + baseline) using 5-fold cross-validation. Part 6 fine-tunes the best model with Randomized Search followed by Grid Search, producing a confusion matrix and full classification report.',
        linkText: 'github.com/VladK333/FloodRiskML',
        linkHref: 'https://github.com/VladK333/FloodRiskML',
    },

    cms: {
        tag:      'C# · WPF · XML · RTF',
        title:    'Content Management System',
        subtitle: 'A WPF desktop application that simulates a simple CMS — built for the Usability Engineering in Infrastructure Systems course. (Jul 2025)',
        techs:    ['C#', 'WPF', '.NET Framework', 'XML Serialisation', 'RTF Files', 'RichTextBox', 'OOP', 'XAML'],
        how:      'The application supports two user roles: Admin (can add, edit, and delete content) and Visitor (read-only). Login uses predefined accounts. The main view shows content in a data table with selection and bulk delete. Adding a new item opens a form with field validation and an image preview. A RichTextBox editor supports Bold, Italic, Underline, font family and size, text colour, and a word-count status bar. Viewing or editing an existing item opens a separate window — editing is only available to Admins. All user and content data is serialised to XML files; rich text is stored as RTF files with relative paths.',
        linkText: 'github.com/VladK333/CMS',
        linkHref: 'https://github.com/VladK333/CMS',
    },

};

/* ─────────────────────────────────────────────
   POPUP
───────────────────────────────────────────── */
const popup    = document.getElementById('popup');
const backdrop = document.getElementById('popup-backdrop');
const closeBtn = document.getElementById('close-popup');

function openPopup(key) {
    const data = projects[key];
    if (!data) return;

    document.getElementById('popup-tag').textContent      = data.tag;
    document.getElementById('popup-title').textContent    = data.title;
    document.getElementById('popup-subtitle').textContent = data.subtitle;
    document.getElementById('popup-how').textContent      = data.how;

    const list = document.getElementById('popup-techs');
    list.innerHTML = '';
    data.techs.forEach(tech => {
        const li = document.createElement('li');
        li.textContent = tech;
        list.appendChild(li);
    });

    const link = document.getElementById('popup-link');
    link.textContent = data.linkText;
    link.href        = data.linkHref;

    popup.classList.add('is-open');
    backdrop.classList.add('is-open');
    document.body.style.overflow = 'hidden';
    closeBtn.focus();
}

function closePopup() {
    popup.classList.remove('is-open');
    backdrop.classList.remove('is-open');
    document.body.style.overflow = '';
}

document.querySelectorAll('.open-window').forEach(btn => {
    btn.addEventListener('click', () => openPopup(btn.dataset.project));
});

closeBtn.addEventListener('click', closePopup);
backdrop.addEventListener('click', closePopup);
document.addEventListener('keydown', e => { if (e.key === 'Escape') closePopup(); });