figma.showUI(__html__, { width: 280, height: 420 });

// Дані для генерації
const data = {
    uk: {
        maleNames: ['Олександр', 'Михайло', 'Андрій', 'Дмитро', 'Максим', 'Данило', 'Артем', 'Владислав', 'Богдан', 'Віктор', 
            'Василь', 'Іван', 'Петро', 'Сергій', 'Юрій', 'Тарас', 'Роман', 'Степан', 'Павло', 'Назар', 
            'Денис', 'Ігор', 'Олег', 'Ярослав', 'Володимир', 'Микола', 'Григорій', 'Валентин', 'Євген', 'Костянтин', 'Станіслав', 'Анатолій', 'Віталій', 'Сергій', 'Володислав', 'Дмитрій', 'Станіслав', 'Тимур'],
        femaleNames: ['Олена', 'Анна', 'Марія', 'Софія', 'Вікторія', 'Юлія', 'Дарина', 'Ірина', 'Катерина', 'Наталія',
            'Оксана', 'Людмила', 'Тетяна', 'Галина', 'Надія', 'Світлана', 'Христина', 'Любов', 'Діана', 'Василина',
            'Мирослава', 'Олександра', 'Валерія', 'Божена', 'Злата', 'Ярина', 'Соломія', 'Орися', 'Роксолана', 'Богдана', 'Аліна', 'Маргарита', 'Валентина', 'Валерія', 'Ксенія', 'Ніна'],
        maleSurnames: ['Шевченко', 'Бондаренко', 'Коваленко', 'Бойко', 'Ткаченко', 'Кравченко', 'Олійник', 'Шевчук', 'Коваль', 'Поліщук',
            'Бондар', 'Ковальчук', 'Мельник', 'Мороз', 'Лисенко', 'Петренко', 'Марченко', 'Савченко', 'Руденко', 'Левченко',
            'Білоус', 'Гаврилюк', 'Карпенко', 'Кулик', 'Павленко', 'Савчук', 'Харченко', 'Яковенко', 'Якименко', 'Литвиненко'],
        femaleSurnames: ['Шевченко', 'Бондаренко', 'Коваленко', 'Бойко', 'Ткаченко', 'Кравченко', 'Олійник', 'Шевчук', 'Коваль', 'Поліщук',
            'Бондар', 'Ковальчук', 'Мельник', 'Мороз', 'Лисенко', 'Петренко', 'Марченко', 'Савченко', 'Руденко', 'Левченко',
            'Білоус', 'Гаврилюк', 'Карпенко', 'Кулик', 'Павленко', 'Савчук', 'Харченко', 'Яковенко', 'Якименко', 'Литвиненко'],
        cities: ['Київ', 'Львів', 'Харків', 'Одеса', 'Дніпро', 'Запоріжжя', 'Вінниця', 'Тернопіль', 'Луцьк', 'Рівне', 'Івано-Франківськ', 'Чернівці', 'Ужгород', 'Хмельницький', 'Черкаси', 'Полтава', 'Суми', 'Житомир', 'Чернігів', 'Кропивницький', 'Миколаїв', 'Маріуполь', 'Мелітополь', 'Нікополь', 'Херсон', 'Мукачево', 'Дрогобич', 'Біла Церква', 'Умань'],
        streets: ['вул. Шевченка', 'вул. Франка', 'вул. Лесі Українки', 'вул. Сагайдачного', 'вул. Хрещатик', 
            'просп. Свободи', 'вул. Соборна', 'вул. Незалежності', 'вул. Володимирська', 'просп. Перемоги',
            'вул. Європейська', 'вул. Центральна', 'вул. Паркова', 'вул. Миру', 'просп. Науки',
            'вул. Грушевського', 'вул. Мазепи', 'вул. Богдана Хмельницького', 'вул. Довженка', 'вул. Коцюбинського',
            'просп. Шухевича', 'вул. Вернадського', 'вул. Січових Стрільців', 'вул. Героїв України', 'вул. Старокиївська',
            'вул. Вишнева', 'вул. Сонячна', 'вул. Молодіжна', 'вул. Спортивна', 'вул. Театральна', 'Вулиця Шевченка', 'Вулиця Лесі Українки', 'Вулиця Грушевського', 'Вулиця Сагайдачного', 'Вулиця Коцюбинського', 'Вулиця Франка', 'Вулиця Тараса Бульби', 'Вулиця Пушкіна', 'Вулиця Кобзаря', 'Вулиця Незалежності'],
        companies: [
            // ІТ компанії
            'УкрТех', 'Інновація Плюс', 'СмартСистемс', 'ДіджіталЮа', 'ТехноЛаб', 'КіберСофт', 'АйТіПро', 
            'УкрСофт', 'ВебСтудія', 'ДатаЦентр', 'ІнфоТех', 'НетворкПро', 'СистемІТ', 'ТехноХаб', 'ДевПро',
            'ЕкспертГруп', 'БізнесРішення', 'ТехнологіїМайбутнього', 'СервісПро', 'Консалтинг', 'АудитПлюс',
            // Виробництво
            'МегаБуд', 'УкрПром', 'БудІндустрія', 'ЕкоПром', 'ТехноПром', 'МеталПром', 'АвтоЗавод',
            'ЕнергоПром', 'МашБуд', 'ХімПром', 'ЛісПром', 'АгроТех', 'БудМаш', 'ЕлектроПром',
            // Сфера послуг
            'СервісПро', 'УкрКонсалт', 'БізнесЛайн', 'ФінансГруп', 'ТрейдПро', 'ЛогістикПлюс',
            'МаркетПро', 'РітейлГруп', 'ТрансСервіс', 'БізнесЦентр', 'КонсалтПро', 'АудитПлюс'
        ],
        companyPrefixes: ['ТОВ', 'ПП', 'ФОП', 'АТ', 'ПрАТ', 'КП', 'ДП', 'ПАТ'],
        words: [
            'дизайн', 'проект', 'розробка', 'система', 'технологія', 'інновація', 'рішення',
            'якість', 'досвід', 'команда', 'успіх', 'результат', 'процес', 'методика',
            'стратегія', 'аналіз', 'концепція', 'структура', 'елемент', 'компонент',
            'простір', 'середовище', 'платформа', 'інтерфейс', 'макет', 'прототип',
            'продукт', 'сервіс', 'додаток', 'програма', 'інструмент', 'модуль',
            'створює', 'розробляє', 'впроваджує', 'оптимізує', 'забезпечує', 'підтримує',
            'генерує', 'аналізує', 'тестує', 'покращує', 'модернізує', 'розширює',
            'сучасний', 'ефективний', 'надійний', 'швидкий', 'зручний', 'якісний',
            'інноваційний', 'професійний', 'оптимальний', 'унікальний', 'адаптивний'
        ],
        domains: ['gmail.com', 'ukr.net', 'icloud.com', 'outlook.com', 'yahoo.com', 'proton.me', 'meta.ua', 'i.ua'],
        nicknamePrefixes: [
            // Технологічні
            'Tech', 'Cyber', 'Digital', 'Web', 'Dev', 'Code', 'Pixel', 'Net', 'Data', 'Bot',
            'AI', 'Smart', 'System', 'Logic', 'Quantum', 'Cloud', 'Mobile', 'App', 'Software', 'Hardware',
            // Креативні
            'Creative', 'Art', 'Design', 'Visual', 'Color', 'Style', 'Dream', 'Idea', 'Mind', 'Soul',
            'Spirit', 'Flow', 'Wave', 'Light', 'Shadow', 'Space', 'Star', 'Moon', 'Sun', 'Sky',
            // Ігрові
            'Game', 'Play', 'Level', 'Quest', 'Boss', 'Hero', 'Legend', 'Epic', 'Magic', 'Power',
            'Force', 'Ultra', 'Mega', 'Super', 'Hyper', 'Thunder', 'Storm', 'Fire', 'Ice', 'Dragon'
        ],
        nicknameSuffixes: [
            // Професійні
            'Master', 'Pro', 'Expert', 'Guru', 'Ninja', 'Wizard', 'Scholar', 'Sage', 'Chief', 'Lead',
            'Creator', 'Builder', 'Maker', 'Smith', 'Engineer', 'Architect', 'Designer', 'Artist', 'Crafter', 'Developer',
            // Статусні
            'King', 'Lord', 'Boss', 'Captain', 'Commander', 'Leader', 'Champion', 'Winner', 'Star', 'Hero',
            'Legend', 'Titan', 'Giant', 'Master', 'Elite', 'Prime', 'Alpha', 'Omega', 'Phoenix', 'Dragon',
            // Характерні
            'Mind', 'Soul', 'Heart', 'Spirit', 'Brain', 'Genius', 'Prodigy', 'Talent', 'Skills', 'Power',
            'Force', 'Energy', 'Light', 'Shadow', 'Storm', 'Thunder', 'Flame', 'Frost', 'Wave', 'Pulse'
        ],
        maleJobTitles: [
            // Технічні посади
            'Розробник ПЗ', 'Веб-дизайнер', 'UI/UX дизайнер', 'Продукт-менеджер', 'Проджект-менеджер',
            'DevOps інженер', 'QA інженер', 'Системний архітектор', 'Frontend розробник', 'Backend розробник',
            'Full Stack розробник', 'iOS розробник', 'Android розробник', 'Інженер з безпеки', 'Інженер з даних',
            'ML інженер', 'Адміністратор баз даних', 'Системний адміністратор', 'Мережевий інженер', 'Хмарний архітектор',
            'Інженер з автоматизації', 'Розробник ігор', 'Embedded інженер', 'Технічний консультант', 'Scala розробник',
            'Python розробник', 'Java розробник', 'JavaScript розробник', 'Rust розробник', 'Go розробник',
            'Аналізатор', 'Тестувальник', 'Менеджер проектів', 'Консультант', 'Аудитор',
            // Креативні посади
            'Графічний дизайнер', 'Арт-директор', 'Контент-менеджер', 'Копірайтер', 'Бренд-менеджер',
            'Креативний директор', 'Ілюстратор', 'Motion дизайнер', '3D художник', 'Дизайнер інтерфейсів',
            'UX дослідник', 'Продуктовий дизайнер', 'Дизайнер взаємодії', 'Дизайнер друку', 'Дизайнер упаковки',
            'Сторіборд художник', 'Аніматор', 'Відеомонтажер', 'Саунд дизайнер', 'Дизайнер персонажів',
            'Дизайнер ігрового оточення', 'Технічний художник', 'Дизайнер освітлення', 'Дизайнер візуальних ефектів',
            'Фотограф', 'Режисер', 'Продюсер контенту', 'Редактор', 'Сценарист', 'Дизайнер інфографіки',
            // Бізнес та управління
            'Бізнес-аналітик', 'Маркетинг-менеджер', 'HR менеджер', 'Фінансовий аналітик', 'Керівник проєктів',
            'CEO', 'CTO', 'CMO', 'CFO', 'COO', 'CPO', 'CIO', 'CISO', 'CCO', 'CDO',
            'Директор з розвитку', 'Керівник відділу продажів', 'Керівник служби підтримки', 'Операційний директор',
            'Менеджер з якості', 'Керівник HR', 'Менеджер з найму', 'Керівник з навчання', 'Бізнес-консультант',
            'Керівник продукту', 'Менеджер з інновацій', 'Керівник стратегії', 'Керівник досліджень',
            'Менеджер програм', 'Керівник команди розробки', 'Керівник дизайн-команди', 'Керівник маркетингу',
            'Менеджер з цифрової трансформації', 'Керівник з аналітики', 'Керівник з безпеки',
            'Бізнес-аналітик', 'Маркетинг-менеджер', 'HR менеджер', 'Фінансовий аналітик', 'Керівник проєктів',
            'Керівник відділу продажів', 'Директор з розвитку', 'Спеціаліст з продажу', 'Керівник з маркетингу', 'Консалтинг',
            'АудитПлюс'
        ],
        femaleJobTitles: [
            // Технічні посади
            'Розробниця ПЗ', 'Веб-дизайнерка', 'UI/UX дизайнерка', 'Продукт-менеджерка', 'Проджект-менеджерка',
            'DevOps інженерка', 'QA інженерка', 'Системна архітекторка', 'Frontend розробниця', 'Backend розробниця',
            'Full Stack розробниця', 'iOS розробниця', 'Android розробниця', 'Інженерка з безпеки', 'Інженерка з даних',
            'ML інженерка', 'Адміністраторка баз даних', 'Системна адміністраторка', 'Мережева інженерка', 'Хмарна архітекторка',
            'Інженерка з автоматизації', 'Розробниця ігор', 'Embedded інженерка', 'Технічна консультантка', 'Scala розробниця',
            'Python розробниця', 'Java розробниця', 'JavaScript розробниця', 'Rust розробниця', 'Go розробниця',
            'Аналізаторка', 'Тестувальниця', 'Менеджерка проектів', 'Консультантка', 'Аудиторка',
            // Керівні посади
            'Директорка', 'Керівниця відділу', 'Генеральна директорка', 'Операційна директорка', 'HR-директорка',
            'Фінансова директорка', 'Технічна директорка', 'Керівниця проєктів', 'Керівниця групи', 'Начальниця відділу',
            // Креативні посади
            'Дизайнерка', 'Копірайтерка', 'Контент-менеджерка', 'Маркетологиня', 'SMM-менеджерка',
            'PR-менеджерка', 'Бренд-менеджерка', 'Арт-директорка', 'Креативна директорка', 'Редакторка',
            // Фінансові посади
            'Бухгалтерка', 'Фінансова аналітикиня', 'Економістка', 'Аудиторка', 'Фінансова консультантка',
            // Медичні посади
            'Лікарка', 'Терапевтка', 'Педіатриня', 'Хірургиня', 'Стоматологиня',
            'Психологиня', 'Фармацевтка', 'Медсестра', 'Дієтологиня', 'Реабілітологиня',
            // Освітні посади
            'Вчителька', 'Викладачка', 'Професорка', 'Наукова співробітниця', 'Дослідниця',
            'Методистка', 'Вихователька', 'Тренерка', 'Репетиторка', 'Асистентка викладача',
            // Юридичні посади
            'Юристка', 'Адвокатка', 'Нотаріуска', 'Суддя', 'Прокурорка',
            // Інші професійні посади
            'Архітекторка', 'Перекладачка', 'Журналістка', 'Письменниця', 'Фотографиня',
            'Консультантка', 'Аналітикиня', 'Менеджерка з продажу', 'Ріелторка', 'Страхова агентка'
        ],
        headlines: {
            starts: [
                "Новий", "Інноваційний", "Революційний", "Сучасний", "Унікальний",
                "Провідний", "Популярний", "Ексклюзивний", "Преміальний", "Топовий",
                "Перспективний", "Прогресивний", "Трендовий", "Інтелектуальний", "Глобальний"
            ],
            middles: [
                "український", "європейський", "інтерактивний", "цифровий", "професійний",
                "технологічний", "дизайнерський", "креативний", "бізнесовий", "соціальний",
                "інвестиційний", "освітній", "медійний", "аналітичний", "інфраструктурний"
            ],
            ends: [
                "проєкт", "продукт", "сервіс", "додаток", "інструмент",
                "платформа", "маркетплейс", "стартап", "бренд", "простір",
                "акселератор", "інкубатор", "хаб", "центр", "комплекс"
            ],
            actions: [
                "запускає", "представляє", "анонсує", "розробляє", "створює",
                "впроваджує", "оптимізує", "трансформує", "розширює", "модернізує",
                "масштабує", "інтегрує", "автоматизує", "реалізує", "презентує"
            ],
            templates: [
                "{start} {middle} {end}",
                "Компанія {action} {start} {end}",
                "{start} {end} для бізнесу",
                "{middle} {end} майбутнього",
                "Інновації сьогодні: {middle} {end}",
                "Відкрийте для себе {middle} {end}",
                "{start} рішення для вашого бізнесу",
                "Майбутнє вже тут: {middle} {end}"
            ]
        },
        phoneFormats: [
            '+380 (XX) XXX-XX-XX',
            '+38 (0XX) XXX-XX-XX',
            '+380 (XX) XXX-XX-XX',
            '+380 (XX) XXX-XX-XX',
            '+380 (XX) XXX-XX-XX',
            '+380 (XX) XXX-XX-XX',
            '+380 (XX) XXX-XX-XX',
            '+380 (XX) XXX-XX-XX',
        ],
        postalCodes: ['01001', '02002', '03003', '04004', '05005', '06006', '07007', '08008', '09009', '10010', '11011', '12012', '13013', '14014', '15015'],
        emailDomains: ['gmail.com', 'yahoo.com', 'outlook.com', 'ukr.net', 'meta.ua', 'i.ua', 'proton.me', 'mail.com', 'hotmail.com', 'icloud.com', 'yandex.ua', 'example.com', 'test.com'],
        fullAddresses: [
            'вул. Шевченка, 1, Київ, 01001',
            'вул. Франка, 2, Львів, 79000',
            'вул. Лесі Українки, 3, Одеса, 65000',
            'вул. Сагайдачного, 4, Харків, 61000',
            'вул. Хрещатик, 5, Дніпро, 49000',
            'вул. Соборна, 6, Запоріжжя, 69000',
            'вул. Незалежності, 7, Кривий Ріг, 50000',
            'вул. Миру, 8, Миколаїв, 54000',
            'вул. Довженка, 9, Черкаси, 18000',
            'вул. Грушевського, 10, Суми, 40000',
        ],
    },
    en: {
        maleNames: ['John', 'Michael', 'William', 'James', 'David', 'Robert', 'Thomas', 'Christopher', 'Daniel', 'Matthew', 'Andrew', 'Joseph', 'Ryan', 'Nicholas', 'Anthony', 'Steven', 'Tyler', 'Richard', 'Timothy', 'Brian', 'Alexander', 'Kevin', 'Jason', 'Jeffrey', 'Benjamin', 'Mark', 'Edward', 'Paul', 'Stephen', 'George', 'Ethan', 'Noah', 'Liam', 'Oliver', 'Lucas', 'Jacob', 'Logan', 'Jackson'],
        femaleNames: ['Emma', 'Olivia', 'Ava', 'Isabella', 'Sophia', 'Mia', 'Charlotte', 'Amelia', 'Harper', 'Evelyn', 'Abigail', 'Ella', 'Scarlett', 'Grace', 'Chloe', 'Aria', 'Avery', 'Sofia', 'Camila', 'Layla', 'Riley', 'Zoey', 'Nora', 'Lily', 'Lillian', 'Addison', 'Hannah', 'Natalie', 'Aubrey', 'Ellie', 'Stella', 'Victoria', 'Mila', 'Savannah', 'Brooklyn'],
        maleSurnames: ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis', 'Rodriguez', 'Martinez',
            'Anderson', 'Taylor', 'Thomas', 'Moore', 'Jackson', 'Martin', 'Lee', 'Thompson', 'White', 'Harris',
            'Clark', 'Lewis', 'Walker', 'Hall', 'Young', 'Allen', 'King', 'Wright', 'Scott', 'Green'],
        femaleSurnames: ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis', 'Rodriguez', 'Martinez',
            'Anderson', 'Taylor', 'Thomas', 'Moore', 'Jackson', 'Martin', 'Lee', 'Thompson', 'White', 'Harris',
            'Clark', 'Lewis', 'Walker', 'Hall', 'Young', 'Allen', 'King', 'Wright', 'Scott', 'Green'],
        cities: ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix', 'Philadelphia', 'San Antonio', 'San Diego', 'Dallas', 'San Jose', 'Austin', 'Jacksonville', 'San Francisco', 'Columbus', 'Fort Worth', 'Indianapolis', 'Charlotte', 'Seattle', 'Denver', 'Boston', 'Orlando', 'Nashville', 'Baltimore', 'Milwaukee', 'Albuquerque', 'Tucson', 'Fresno', 'Sacramento', 'Long Beach', 'Kansas City', 'Mesa', 'Virginia Beach', 'Atlanta', 'Colorado Springs', 'Omaha', 'Raleigh', 'Miami'],
        streets: [
            'Main St', 'First Ave', 'Park Road', 'Oak Street', 'River Lane', 'Market Square', 'High Street',
            'Broadway', 'Fifth Avenue', 'Oxford Street', 'King\'s Road', 'Queen Street', 'Victoria Road',
            'Church Street', 'Station Road', 'London Road', 'Mill Lane', 'School Lane', 'North Street', 'South Road',
            'West Avenue', 'East Drive', 'The Green', 'The Grove', 'New Road', 'Old Lane', 'Bridge Street', 'Castle Road',
            'Manor Close', 'Forest Way'
        ],
        companies: [
            // Tech
            'TechCorp', 'Innovation Plus', 'SmartSystems', 'DigitalFlow', 'TechLab', 'CyberTech', 'InfoSys',
            'WebWorks', 'DataTech', 'CloudNet', 'SoftPro', 'DevHub', 'TechGlobal', 'ByteCraft', 'CodeWorks',
            // Manufacturing
            'MegaBuild', 'IndustryCo', 'BuildPro', 'EcoProm', 'TechManufacturing', 'MetalWorks', 'AutoTech',
            'PowerSystems', 'MachineWorks', 'ChemCorp', 'WoodWorks', 'AgroTech', 'BuildMach', 'ElectroPro',
            // Services
            'ServicePro', 'ConsultPlus', 'BusinessLine', 'FinanceGroup', 'TradePro', 'LogisticPlus',
            'MarketPro', 'RetailGroup', 'TransService', 'BusinessCenter', 'ConsultPro', 'AuditPlus'
        ],
        companyPrefixes: ['LLC', 'Inc.', 'Corp.', 'Ltd.', 'Co.', 'Corporation', 'Limited'],
        words: [
            'design', 'project', 'development', 'system', 'technology', 'innovation', 'solution',
            'quality', 'experience', 'team', 'success', 'result', 'process', 'methodology',
            'strategy', 'analysis', 'concept', 'structure', 'element', 'component',
            'space', 'environment', 'platform', 'interface', 'layout', 'prototype',
            'product', 'service', 'application', 'program', 'tool', 'module',
            'creates', 'develops', 'implements', 'optimizes', 'provides', 'supports',
            'generates', 'analyzes', 'tests', 'improves', 'modernizes', 'expands',
            'modern', 'efficient', 'reliable', 'fast', 'convenient', 'quality',
            'innovative', 'professional', 'optimal', 'unique', 'adaptive'
        ],
        domains: ['gmail.com', 'yahoo.com', 'outlook.com', 'icloud.com', 'hotmail.com', 'protonmail.com', 'aol.com', 'mail.com', 'example.com', 'test.com'],
        nicknamePrefixes: [
            // Technology
            'Tech', 'Cyber', 'Digital', 'Web', 'Dev', 'Code', 'Pixel', 'Net', 'Data', 'Bot',
            'AI', 'Smart', 'System', 'Logic', 'Quantum', 'Cloud', 'Mobile', 'App', 'Software', 'Hardware',
            // Creative
            'Creative', 'Art', 'Design', 'Visual', 'Color', 'Style', 'Dream', 'Idea', 'Mind', 'Soul',
            'Spirit', 'Flow', 'Wave', 'Light', 'Shadow', 'Space', 'Star', 'Moon', 'Sun', 'Sky',
            // Gaming
            'Game', 'Play', 'Level', 'Quest', 'Boss', 'Hero', 'Legend', 'Epic', 'Magic', 'Power',
            'Force', 'Ultra', 'Mega', 'Super', 'Hyper', 'Thunder', 'Storm', 'Fire', 'Ice', 'Dragon'
        ],
        nicknameSuffixes: [
            // Professional
            'Master', 'Pro', 'Expert', 'Guru', 'Ninja', 'Wizard', 'Scholar', 'Sage', 'Chief', 'Lead',
            'Creator', 'Builder', 'Maker', 'Smith', 'Engineer', 'Architect', 'Designer', 'Artist', 'Crafter', 'Developer',
            // Status
            'King', 'Lord', 'Boss', 'Captain', 'Commander', 'Leader', 'Champion', 'Winner', 'Star', 'Hero',
            'Legend', 'Titan', 'Giant', 'Master', 'Elite', 'Prime', 'Alpha', 'Omega', 'Phoenix', 'Dragon',
            // Characteristic
            'Mind', 'Soul', 'Heart', 'Spirit', 'Brain', 'Genius', 'Prodigy', 'Talent', 'Skills', 'Power',
            'Force', 'Energy', 'Light', 'Shadow', 'Storm', 'Thunder', 'Flame', 'Frost', 'Wave', 'Pulse'
        ],
        maleJobTitles: [
            // Technical positions
            'Software Developer', 'Web Designer', 'UI/UX Designer', 'Product Manager', 'Project Manager',
            'DevOps Engineer', 'QA Engineer', 'System Architect', 'Frontend Developer', 'Backend Developer',
            'Full Stack Developer', 'iOS Developer', 'Android Developer', 'Security Engineer', 'Data Engineer',
            'ML Engineer', 'Database Administrator', 'System Administrator', 'Network Engineer', 'Cloud Architect',
            'Automation Engineer', 'Game Developer', 'Embedded Engineer', 'Technical Consultant', 'Scala Developer',
            'Python Developer', 'Java Developer', 'JavaScript Developer', 'Rust Developer', 'Go Developer',
            
            // Creative positions
            'Graphic Designer', 'Art Director', 'Content Manager', 'Copywriter', 'Brand Manager',
            'Creative Director', 'Illustrator', 'Motion Designer', '3D Artist', 'Interface Designer',
            'UX Researcher', 'Product Designer', 'Interaction Designer', 'Print Designer', 'Packaging Designer',
            'Storyboard Artist', 'Animator', 'Video Editor', 'Sound Designer', 'Character Designer',
            'Environment Artist', 'Technical Artist', 'Lighting Designer', 'VFX Designer', 'Photographer',
            'Director', 'Content Producer', 'Editor', 'Scriptwriter', 'Infographic Designer',
            
            // Business positions
            'Business Analyst', 'Marketing Manager', 'HR Manager', 'Financial Analyst', 'Project Lead',
            'CEO', 'CTO', 'CMO', 'CFO', 'COO', 'CPO', 'CIO', 'CISO', 'CCO', 'CDO',
            'Development Director', 'Sales Director', 'Support Director', 'Operations Director',
            'Quality Manager', 'HR Director', 'Recruitment Manager', 'Training Director', 'Business Consultant',
            'Product Owner', 'Innovation Manager', 'Strategy Director', 'Research Director',
            'Program Manager', 'Development Team Lead', 'Design Team Lead', 'Marketing Director',
            'Digital Transformation Manager', 'Analytics Director', 'Security Director',
            'Business Analyst', 'Marketing Manager', 'HR Manager', 'Financial Analyst', 'Project Lead',
            'Sales Director', 'Development Director', 'Sales Specialist', 'Marketing Manager', 'Management Consultant'
        ],
        femaleJobTitles: [
            // Technical positions
            'Software Developer', 'Web Designer', 'UI/UX Designer', 'Product Manager', 'Project Manager',
            'DevOps Engineer', 'QA Engineer', 'System Architect', 'Frontend Developer', 'Backend Developer',
            'Full Stack Developer', 'iOS Developer', 'Android Developer', 'Security Engineer', 'Data Engineer',
            'ML Engineer', 'Database Administrator', 'System Administrator', 'Network Engineer', 'Cloud Architect',
            'Automation Engineer', 'Game Developer', 'Embedded Engineer', 'Technical Consultant', 'Scala Developer',
            'Python Developer', 'Java Developer', 'JavaScript Developer', 'Rust Developer', 'Go Developer',
            
            // Creative positions
            'Graphic Designer', 'Art Director', 'Content Manager', 'Copywriter', 'Brand Manager',
            'Creative Director', 'Illustrator', 'Motion Designer', '3D Artist', 'Interface Designer',
            'UX Researcher', 'Product Designer', 'Interaction Designer', 'Print Designer', 'Packaging Designer',
            'Storyboard Artist', 'Animator', 'Video Editor', 'Sound Designer', 'Character Designer',
            'Environment Artist', 'Technical Artist', 'Lighting Designer', 'VFX Designer', 'Photographer',
            'Director', 'Content Producer', 'Editor', 'Scriptwriter', 'Infographic Designer',
            
            // Business positions
            'Business Analyst', 'Marketing Manager', 'HR Manager', 'Financial Analyst', 'Project Lead',
            'CEO', 'CTO', 'CMO', 'CFO', 'COO', 'CPO', 'CIO', 'CISO', 'CCO', 'CDO',
            'Development Director', 'Sales Director', 'Support Director', 'Operations Director',
            'Quality Manager', 'HR Director', 'Recruitment Manager', 'Training Director', 'Business Consultant',
            'Product Owner', 'Innovation Manager', 'Strategy Director', 'Research Director',
            'Program Manager', 'Development Team Lead', 'Design Team Lead', 'Marketing Director',
            'Digital Transformation Manager', 'Analytics Director', 'Security Director'
        ],
        headlines: {
            starts: [
                "New", "Innovative", "Revolutionary", "Modern", "Unique",
                "Leading", "Popular", "Exclusive", "Premium", "Top",
                "Perspective", "Progressive", "Trendy", "Intellectual", "Global"
            ],
            middles: [
                "Digital", "Interactive", "Professional", "Technology", "Design",
                "Creative", "Business", "Social", "Global", "Smart",
                "Investment", "Educational", "Media", "Analytical", "Infrastructure"
            ],
            ends: [
                "Project", "Product", "Service", "App", "Tool",
                "Platform", "Marketplace", "Startup", "Brand", "Solution",
                "Accelerator", "Incubator", "Hub", "Center", "Complex"
            ],
            actions: [
                "Launches", "Presents", "Announces", "Develops", "Creates",
                "Implements", "Optimizes", "Transforms", "Expands", "Modernizes",
                "Scales", "Integrates", "Automates", "Realizes", "Presents"
            ],
            templates: [
                "{start} {middle} {end}",
                "Company {action} {start} {end}",
                "{start} {end} for Business",
                "{middle} {end} of the Future",
                "Innovations Today: {middle} {end}",
                "Discover {middle} {end}",
                "{start} Solution for Your Business",
                "The Future is Here: {middle} {end}"
            ]
        },
        phoneFormats: [
            '+1 (XXX) XXX-XXXX',
            '+1-XXX-XXX-XXXX',
            '+1.XXX.XXX.XXXX',
            '1-XXX-XXX-XXXX',
            '(XXX) XXX-XXXX',
            'XXX-XXX-XXXX',
            'XXX.XXX.XXXX',
            '1-800-XXX-XXXX',
        ],
        postalCodes: ['10001', '20002', '30003', '40004', '50005', '60006', '70007', '80008', '90009', '12345', '54321', '11111', '22222', '33333', '98765', '87654'],
        emailDomains: ['gmail.com', 'yahoo.com', 'outlook.com', 'icloud.com', 'hotmail.com', 'protonmail.com', 'aol.com', 'mail.com', 'example.com', 'test.com'],
        fullAddresses: [
            '123 Main St, New York, NY 10001',
            '456 First Ave, Los Angeles, CA 90001',
            '789 Park Rd, Chicago, IL 60001',
            '321 Oak St, Houston, TX 77001',
            '901 River Ln, Phoenix, AZ 85001',
            '234 Market Sq, Philadelphia, PA 19101',
            '567 High St, San Antonio, TX 78201',
            '890 Broadway, San Diego, CA 92101',
            '135 Elm St, Seattle, WA 98101',
            '246 Maple Ave, Boston, MA 02101',
            '357 Pine St, Atlanta, GA 30301',
            '468 Cedar Blvd, Miami, FL 33101',
        ],
    }
};

// Додаємо переклади для нотифікацій
const notifications = {
    uk: {
        contentGenerated: 'Контент згенеровано успішно',
        newElementsCreated: 'Створено нові текстові елементи',
        error: 'Помилка при генерації контенту'
    },
    en: {
        contentGenerated: 'Content generated successfully',
        newElementsCreated: 'New text elements created',
        error: 'Error generating content'
    }
};

// Утиліти
function getRandomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// Генератори імен
function generateName(lang = 'uk', gender = 'all') {
    const langData = data[lang];
    if (gender === 'male') {
        return getRandomItem(langData.maleNames);
    } else if (gender === 'female') {
        return getRandomItem(langData.femaleNames);
    } else {
        // Випадково обираємо стать для режиму 'all'
        return Math.random() < 0.5 
            ? getRandomItem(langData.maleNames)
            : getRandomItem(langData.femaleNames);
    }
}

function generateFullName(lang = 'uk', gender = 'all') {
    const langData = data[lang];
    let firstName, surname;

    // Отримуємо прізвище (однакове для обох статей)
    surname = getRandomItem(langData.maleSurnames);

    if (gender === 'male') {
        firstName = getRandomItem(langData.maleNames);
    } else if (gender === 'female') {
        firstName = getRandomItem(langData.femaleNames);
    } else {
        // Випадково обираємо стать для режиму 'all'
        firstName = Math.random() < 0.5 
            ? getRandomItem(langData.maleNames)
            : getRandomItem(langData.femaleNames);
    }
    
    return `${firstName} ${surname}`;
}

// Відстеження вибраних елементів
figma.on('selectionchange', () => {
    const textNodes = figma.currentPage.selection.filter(node => node.type === "TEXT");
    figma.ui.postMessage({
        type: 'selectionChange',
        hasTextNodes: textNodes.length > 0,
        textNodesCount: textNodes.length
    });
});

// Обробка повідомлень від UI
figma.ui.onmessage = async (msg) => {
    if (msg.type === 'resize') {
        figma.ui.resize(280, msg.height);
        return;
    }

    if (msg.type === 'preview') {
        const { options, language, gender, count } = msg;
        console.log('Preview request:', { options, language, gender, count });
        const previews = {
            personal: [],
            address: [],
            text: [],
            other: []
        };

        options.forEach(option => {
            let value;
            if (option === 'words' || option === 'sentence') {
                value = generators[option](language, count);
            } else if (['name', 'fullName', 'nickname', 'jobTitle'].includes(option)) {
                value = generators[option](language, gender);
            } else {
                value = generators[option](language);
            }

            if (['name', 'fullName', 'email', 'phone'].includes(option)) {
                previews.personal.push(`${value}`);
            } else if (['city', 'street', 'fullAddress', 'postalCode'].includes(option)) {
                previews.address.push(`${value}`);
            } else if (['words', 'sentence', 'paragraph'].includes(option)) {
                previews.text.push(`${value.substring(0, 50)}...`);
            } else {
                previews.other.push(`${value}`);
            }
        });

        figma.ui.postMessage({ 
            type: 'preview', 
            previews: {
                personal: previews.personal.join('\n'),
                address: previews.address.join('\n'),
                text: previews.text.join('\n'),
                other: previews.other.join('\n')
            }
        });
        return;
    }

    if (msg.type === 'generate') {
        const { options, language, gender, count } = msg;
        console.log('Generating content:', { options, language, gender, count });
        const selection = figma.currentPage.selection;
        const textNodes = selection.filter(node => node.type === "TEXT");

        try {
            // Завантажуємо шрифт один раз перед генерацією
            await figma.loadFontAsync({ family: "Inter", style: "Regular" });

            if (textNodes.length > 0) {
                // Якщо є вибрані текстові елементи
                for (const node of textNodes) {
                    const option = getRandomItem(options);
                    console.log('Selected option:', option);
                    if (generators[option]) {
                        let generatedText;
                        // Передаємо параметри в залежності від типу генератора
                        if (option === 'words' || option === 'sentence') {
                            generatedText = generators[option](language, parseInt(count) || 1);
                        } else if (['name', 'fullName', 'nickname', 'jobTitle'].includes(option)) {
                            generatedText = generators[option](language, gender);
                        } else {
                            generatedText = generators[option](language);
                        }
                        console.log('Generated text:', generatedText);
                        node.characters = generatedText;
                    }
                }
                figma.notify(notifications[language].contentGenerated);
            } else {
                // Якщо нічого не вибрано, створюємо нові елементи
                const elements = [];
                
                for (const option of options) {
                    console.log('Creating new element for option:', option);
                    const text = figma.createText();
                    let generatedText;
                    // Передаємо параметри в залежності від типу генератора
                    if (option === 'words' || option === 'sentence') {
                        generatedText = generators[option](language, parseInt(count) || 1);
                    } else if (['name', 'fullName', 'nickname', 'jobTitle'].includes(option)) {
                        generatedText = generators[option](language, gender);
                    } else {
                        generatedText = generators[option](language);
                    }
                    console.log('Generated text:', generatedText);
                    text.characters = generatedText;
                    
                    if (elements.length > 0) {
                        const lastElement = elements[elements.length - 1];
                        text.y = lastElement.y + lastElement.height + 10;
                    } else {
                        text.y = figma.viewport.center.y;
                    }
                    text.x = figma.viewport.center.x;
                    
                    elements.push(text);
                }
                
                figma.currentPage.selection = elements;
                if (elements.length > 0) {
                    figma.viewport.scrollAndZoomIntoView(elements);
                    figma.notify(notifications[language].newElementsCreated);
                }
            }
        } catch (error) {
            console.error('Помилка при генерації:', error);
            figma.notify(notifications[language].error);
        }
    }
};

// Генератори контенту
const generators = {
    name: (lang = 'uk', gender = 'all') => generateName(lang, gender),
    
    fullName: (lang = 'uk', gender = 'all') => generateFullName(lang, gender),
    
    email: (lang, gender = 'all') => {
        let name;
        const langData = data[lang];
        
        // Вибираємо ім'я відповідно до статі
        if (gender === 'male') {
            name = langData.maleNames[Math.floor(Math.random() * langData.maleNames.length)];
        } else if (gender === 'female') {
            name = langData.femaleNames[Math.floor(Math.random() * langData.femaleNames.length)];
        } else {
            // Для режиму 'all' випадково вибираємо стать
            name = Math.random() < 0.5
                ? langData.maleNames[Math.floor(Math.random() * langData.maleNames.length)]
                : langData.femaleNames[Math.floor(Math.random() * langData.femaleNames.length)];
        }
        
        // Транслітерація для української мови
        if (lang === 'uk') {
            name = transliterate(name);
        }
        
        const number = getRandomNumber(1, 999);
        const domains = ['gmail.com', 'outlook.com', 'yahoo.com', 'icloud.com'];
        const domain = domains[Math.floor(Math.random() * domains.length)];
        return `${name.toLowerCase()}${number}@${domain}`;
    },
    
    phone: (lang) => {
        return formatPhone(lang);
    },

    postalCode: (lang) => {
        return formatPostalCode(lang);
    },

    date: (lang) => {
        const today = new Date();
        const randomDays = Math.floor(Math.random() * 365);
        const date = new Date(today.getTime() + randomDays * 24 * 60 * 60 * 1000);
        return formatDate(date, lang);
    },

    price: (lang) => {
        let price;
        if (lang === 'uk') {
            // Ціни в гривнях, більш реалістичні для України
            price = Math.floor(Math.random() * 50000) + 99;
        } else {
            // Ціни в доларах, більш реалістичні для міжнародного ринку
            price = Math.floor(Math.random() * 1000) + 9.99;
        }
        return formatPrice(price, lang);
    },

    fullAddress: (lang) => {
        if (lang === 'uk') {
            const city = generators.city(lang);
            const street = generators.street(lang);
            const building = Math.floor(Math.random() * 100) + 1;
            const apartment = Math.floor(Math.random() * 100) + 1;
            const postal = formatPostalCode(lang);
            return `${postal}, ${city}, ${street}, ${building}${['А', 'Б', 'В'][Math.floor(Math.random() * 3)]}, кв. ${apartment}`;
        } else {
            const number = Math.floor(Math.random() * 1000) + 1;
            const street = generators.street(lang);
            const city = generators.city(lang);
            const postal = formatPostalCode(lang);
            return `${number} ${street}, ${city}, ${postal}`;
        }
    },

    sentence: (lang, count = 1) => {
        console.log('sentence generator called with:', { lang, count });
        const words = data[lang].words;
        if (!words || words.length === 0) {
            console.error('No words found for language:', lang);
            return lang === 'uk' ? 'Текст відсутній' : 'No text available';
        }

        let sentences = [];
        count = Math.max(1, parseInt(count) || 1);
        
        for (let i = 0; i < count; i++) {
            const length = Math.floor(Math.random() * 5) + 3; // від 3 до 8 слів
            let sentence = [];
            
            for (let j = 0; j < length; j++) {
                let word = getRandomItem(words);
                
                if (j > 0 && Math.random() < 0.3) {
                    const connectors = lang === 'uk' 
                        ? ['та', 'і', 'або', 'для', 'з', 'у', 'при', 'про', 'як', 'що']
                        : ['and', 'or', 'for', 'with', 'in', 'about', 'to', 'as', 'that'];
                    word = getRandomItem(connectors) + ' ' + word;
                }
                sentence.push(word);
            }
            
            sentence[0] = capitalizeFirstLetter(sentence[0]);
            sentences.push(sentence.join(' ') + '.');
        }
        
        const result = sentences.join(' ');
        console.log('Generated sentences:', result);
        return result;
    },
    
    words: (lang, count = 3) => {
        console.log('words generator called with:', { lang, count });
        const words = data[lang].words;
        if (!words || words.length === 0) {
            console.error('No words found for language:', lang);
            return lang === 'uk' ? 'Слова відсутні' : 'No words available';
        }

        count = Math.max(1, parseInt(count) || 1);
        const uniqueWords = new Set();
        
        // Спробуємо знайти унікальні слова
        let attempts = 0;
        while (uniqueWords.size < count && attempts < 100) {
            uniqueWords.add(getRandomItem(words));
            attempts++;
        }
        
        const result = Array.from(uniqueWords)
            .map(word => capitalizeFirstLetter(word))
            .join(' ');
            
        console.log('Generated words:', result);
        return result;
    },
    
    city: (lang) => getRandomItem(data[lang].cities),
    
    street: (lang) => getRandomItem(data[lang].streets),
    
    paragraph: (lang) => {
        const sentenceCount = Math.floor(Math.random() * 3) + 2; // 2-4 речення
        return generators.sentence(lang, sentenceCount);
    },
    
    uuid: () => {
        return generateUUID();
    },
    
    company: (lang) => {
        const prefix = getRandomItem(data[lang].companyPrefixes);
        const name = getRandomItem(data[lang].companies);
        return `${prefix} "${name}"`;
    },
    
    headline: (lang) => {
        const h = data[lang].headlines;
        const template = h.templates[Math.floor(Math.random() * h.templates.length)];
        
        return template
            .replace('{start}', h.starts[Math.floor(Math.random() * h.starts.length)])
            .replace('{middle}', h.middles[Math.floor(Math.random() * h.middles.length)])
            .replace('{end}', h.ends[Math.floor(Math.random() * h.ends.length)])
            .replace('{action}', h.actions[Math.floor(Math.random() * h.actions.length)]);
    },
    
    nickname: (lang, gender = 'all') => {
        const langData = data[lang];
        let name;
        
        // Вибираємо ім'я відповідно до статі
        if (gender === 'male') {
            name = langData.maleNames[Math.floor(Math.random() * langData.maleNames.length)];
        } else if (gender === 'female') {
            name = langData.femaleNames[Math.floor(Math.random() * langData.femaleNames.length)];
        } else {
            // Для режиму 'all' випадково вибираємо стать
            name = Math.random() < 0.5
                ? langData.maleNames[Math.floor(Math.random() * langData.maleNames.length)]
                : langData.femaleNames[Math.floor(Math.random() * langData.femaleNames.length)];
        }
        
        // Транслітерація для української мови
        if (lang === 'uk') {
            name = transliterate(name);
        }
        
        const prefix = langData.nicknamePrefixes[Math.floor(Math.random() * langData.nicknamePrefixes.length)];
        const suffix = langData.nicknameSuffixes[Math.floor(Math.random() * langData.nicknameSuffixes.length)];
        const number = Math.random() < 0.5 ? Math.floor(Math.random() * 999) + 1 : '';
        
        // Випадково вибираємо формат нікнейму
        const formats = [
            () => `@${prefix}${suffix}${number}`,
            () => `@${name.toLowerCase()}${suffix}${number}`,
            () => `@${prefix}${name.toLowerCase()}${number}`
        ];
        
        return formats[Math.floor(Math.random() * formats.length)]();
    },
    
    jobTitle: (lang = 'uk', gender = 'all') => {
        const langData = data[lang];
        
        // Перевіряємо наявність масивів посад для обох статей
        if (!langData.maleJobTitles || !langData.femaleJobTitles) {
            return getRandomItem(langData.jobTitles || []);
        }

        // Вибір посади в залежності від статі
        switch (gender) {
            case 'male':
                return getRandomItem(langData.maleJobTitles);
            case 'female':
                return getRandomItem(langData.femaleJobTitles);
            default: // 'all'
                return Math.random() < 0.5 
                    ? getRandomItem(langData.maleJobTitles)
                    : getRandomItem(langData.femaleJobTitles);
        }
    },
    
    iban: (language) => {
        const countries = {
            uk: 'UA',
            en: 'GB'
        };
        const country = countries[language] || 'UA';
        // Контрольні цифри (2 знаки)
        const checkDigits = Math.floor(Math.random() * 90 + 10).toString();
        // Код банку (6 знаків)
        const bankCode = Math.floor(Math.random() * 900000 + 100000).toString();
        // Номер рахунку (19 знаків)
        const accountNumber = Array.from({length: 19}, () => Math.floor(Math.random() * 10)).join('');
        
        return `${country}${checkDigits}${bankCode}${accountNumber}`;
    },
    
    website: (language) => {
        const langData = data[language];
        const domains = language === 'uk' ? [
            // Українські домени
            'com.ua', 'ua', 'net.ua', 'org.ua', 'in.ua', 'pp.ua', 'kiev.ua',
            // Міжнародні домени
            'com', 'net', 'org', 'info', 'biz', 'online', 'site', 'xyz',
            // Нові домени
            'app', 'dev', 'tech', 'digital', 'store', 'shop', 'agency', 'studio'
        ] : [
            // Популярні домени
            'com', 'net', 'org', 'io', 'co', 'app', 'dev',
            // Бізнес домени
            'biz', 'company', 'inc', 'ltd', 'group', 'corp',
            // Технічні домени
            'tech', 'digital', 'software', 'systems', 'solutions',
            // Нові домени
            'app', 'dev', 'io', 'ai', 'cloud', 'web', 'online', 'site'
        ];

        const prefixes = language === 'uk' ? [
            // Бізнес
            'business', 'company', 'corp', 'group', 'team', 'pro', 'expert',
            // Технології
            'tech', 'digital', 'web', 'app', 'soft', 'dev', 'code', 'it',
            // Креатив
            'creative', 'design', 'studio', 'art', 'media', 'brand', 'style',
            // Інше
            'smart', 'best', 'top', 'prime', 'elite', 'premium', 'ultra'
        ] : [
            // Business
            'business', 'company', 'corp', 'group', 'team', 'pro', 'expert',
            // Technology
            'tech', 'digital', 'web', 'app', 'soft', 'dev', 'code', 'it',
            // Creative
            'creative', 'design', 'studio', 'art', 'media', 'brand', 'style',
            // Other
            'smart', 'best', 'top', 'prime', 'elite', 'premium', 'ultra'
        ];

        const words = language === 'uk' ? [
            // Загальні
            'system', 'project', 'service', 'portal', 'platform', 'solution',
            // Бізнес
            'business', 'company', 'group', 'partner', 'consulting', 'management',
            // Технології
            'technology', 'innovation', 'development', 'automation', 'digital',
            // Продукти
            'product', 'catalog', 'store', 'market', 'center', 'hub', 'space'
        ] : [
            // General
            'system', 'project', 'service', 'portal', 'platform', 'solution',
            // Business
            'business', 'company', 'group', 'partner', 'consulting', 'management',
            // Technology
            'technology', 'innovation', 'development', 'automation', 'digital',
            // Products
            'product', 'catalog', 'store', 'market', 'center', 'hub', 'space'
        ];

        const structure = Math.random();
        const domain = getRandomItem(domains);
        let result = '';

        // Додаємо www або без нього (30% шанс)
        const useWww = Math.random() < 0.3;
        
        if (structure < 0.25) {
            // Формат: prefix-word.domain (example: smart-tech.com)
            const prefix = getRandomItem(prefixes);
            const word = getRandomItem(words);
            result = `${prefix}-${word}`;
        } else if (structure < 0.5) {
            // Формат: word1word2.domain (example: techsolutions.com)
            const word1 = getRandomItem(prefixes);
            const word2 = getRandomItem(words);
            result = `${word1}${word2}`;
        } else if (structure < 0.75) {
            // Формат: myword.domain (example: mycompany.com)
            const word = getRandomItem(words);
            result = `my${word}`;
        } else {
            // Формат: theword.domain (example: theplatform.com)
            const word = getRandomItem(words);
            result = `the${word}`;
        }

        // Транслітеруємо для української мови
        if (language === 'uk') {
            result = transliterate(result.toLowerCase());
        } else {
            result = result.toLowerCase();
        }

        // Додаємо випадкові цифри (10% шанс)
        if (Math.random() < 0.1) {
            result += Math.floor(Math.random() * 1000);
        }

        return `${useWww ? 'www.' : ''}${result}.${domain}`;
    },
};

// Утиліти для форматування
function formatPrice(number, lang) {
    const [intPart, decPart] = number.toFixed(2).split('.');
    const formattedInt = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, lang === 'uk' ? ' ' : ',');
    return lang === 'uk' 
        ? `${formattedInt},${decPart} ₴`
        : `$${formattedInt}.${decPart}`;
}

function formatDate(date, lang) {
    const day = date.getDate();
    const year = date.getFullYear();
    
    const monthsUk = [
        'січня', 'лютого', 'березня', 'квітня', 'травня', 'червня',
        'липня', 'серпня', 'вересня', 'жовтня', 'листопада', 'грудня'
    ];
    
    const monthsEn = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    if (lang === 'uk') {
        return `${day} ${monthsUk[date.getMonth()]} ${year} року`;
    } else {
        return `${monthsEn[date.getMonth()]} ${day}, ${year}`;
    }
}

function formatPhone(lang) {
    if (lang === 'uk') {
        // Коди міст та операторів
        const areaCodes = ['044', '050', '063', '066', '067', '068', '073', '091', '092', '093', '094', '095', '096', '097', '098', '099'];
        const areaCode = areaCodes[Math.floor(Math.random() * areaCodes.length)];
        
        // Генеруємо групи цифр
        const group1 = Math.floor(Math.random() * 900) + 100; // 100-999
        const group2 = Math.floor(Math.random() * 90) + 10;   // 10-99
        
        return `+38 (${areaCode}) ${group1} ${group2} ${Math.floor(Math.random() * 90) + 10}`;
    } else {
        const areaCodes = ['202', '212', '310', '312', '404', '415', '512', '617', '702', '713'];
        return `+1 (${areaCodes[Math.floor(Math.random() * areaCodes.length)]}) ${Math.floor(Math.random() * 900) + 100}-${Math.floor(Math.random() * 9000) + 1000}`;
    }
}

function formatPostalCode(lang) {
    if (lang === 'uk') {
        return Math.floor(Math.random() * 100000).toString().padStart(5, '0');
    } else {
        const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const letter1 = letters[Math.floor(Math.random() * letters.length)];
        const letter2 = letters[Math.floor(Math.random() * letters.length)];
        const numbers = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
        return `${letter1}${letter2}${numbers}`;
    }
}

function generateUUID() {
    // Генеруємо 12 символів (6 байт в hex форматі)
    return 'xxxx-yxx-xxxx'.replace(/[xy]/g, function(c) {
        const r = Math.random() * 16 | 0;
        const v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

// Додамо транслітерацію для email
const translitMap = {
    'а': 'a', 'б': 'b', 'в': 'v', 'г': 'h', 'ґ': 'g', 'д': 'd', 'е': 'e', 'є': 'ie',
    'ж': 'zh', 'з': 'z', 'и': 'y', 'і': 'i', 'ї': 'i', 'й': 'i', 'к': 'k', 'л': 'l',
    'м': 'm', 'н': 'n', 'о': 'o', 'п': 'p', 'р': 'r', 'с': 's', 'т': 't', 'у': 'u',
    'ф': 'f', 'х': 'kh', 'ц': 'ts', 'ч': 'ch', 'ш': 'sh', 'щ': 'shch', 'ь': '',
    'ю': 'iu', 'я': 'ia'
};

function transliterate(text) {
    return text.toLowerCase().split('').map(char => translitMap[char] || char).join('');
}
