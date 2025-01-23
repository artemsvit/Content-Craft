figma.showUI(__html__, { width: 400, height: 420 });

// Дані для генерації
const data = {
    uk: {
        maleNames: [
            'Олександр', 'Михайло', 'Андрій', 'Дмитро', 'Максим', 'Данило', 'Артем', 'Владислав', 'Богдан', 'Віктор',
            'Василь', 'Іван', 'Петро', 'Сергій', 'Юрій', 'Тарас', 'Роман', 'Степан', 'Павло', 'Назар',
            'Денис', 'Ігор', 'Олег', 'Ярослав', 'Володимир', 'Микола', 'Григорій', 'Валентин', 'Євген', 'Костянтин',
            'Руслан', 'Любомир', 'Святослав', 'Мирослав', 'Ростислав', 'Захар', 'Матвій', 'Давид', 'Антон', 'Вадим',
            'Борис', 'Георгій', 'Данило', 'Єгор', 'Зеновій', 'Кирило', 'Леонід', 'Маркіян', 'Остап', 'Тимофій'
        ],
        femaleNames: [
            'Олена', 'Анна', 'Марія', 'Софія', 'Вікторія', 'Юлія', 'Дарина', 'Ірина', 'Катерина', 'Наталія',
            'Оксана', 'Людмила', 'Тетяна', 'Галина', 'Надія', 'Світлана', 'Христина', 'Любов', 'Діана', 'Василина',
            'Мирослава', 'Олександра', 'Валерія', 'Божена', 'Злата', 'Ярина', 'Соломія', 'Орися', 'Роксолана', 'Богдана',
            'Анастасія', 'Вероніка', 'Дарія', 'Євгенія', 'Зоряна', 'Іванна', 'Лілія', 'Маргарита', 'Ніна', 'Поліна',
            'Раїса', 'Сніжана', 'Таїсія', 'Уляна', 'Фаїна', 'Христина', 'Цвітана', 'Шанна', 'Юстина', 'Ярослава'
        ],
        maleSurnames: ['Шевченко', 'Бондаренко', 'Коваленко', 'Бойко', 'Ткаченко', 'Кравченко', 'Олійник', 'Шевчук', 'Коваль', 'Поліщук',
            'Бондар', 'Ковальчук', 'Мельник', 'Мороз', 'Лисенко', 'Петренко', 'Марченко', 'Савченко', 'Руденко', 'Левченко',
            'Білоус', 'Гаврилюк', 'Карпенко', 'Кулик', 'Павленко', 'Савчук', 'Харченко', 'Яковенко', 'Якименко', 'Литвиненко'],
        femaleSurnames: ['Шевченко', 'Бондаренко', 'Коваленко', 'Бойко', 'Ткаченко', 'Кравченко', 'Олійник', 'Шевчук', 'Коваль', 'Поліщук',
            'Бондар', 'Ковальчук', 'Мельник', 'Мороз', 'Лисенко', 'Петренко', 'Марченко', 'Савченко', 'Руденко', 'Левченко',
            'Білоус', 'Гаврилюк', 'Карпенко', 'Кулик', 'Павленко', 'Савчук', 'Харченко', 'Яковенко', 'Якименко', 'Литвиненко'],
        cities: [
            // Обласні центри
            'Київ', 'Львів', 'Харків', 'Одеса', 'Дніпро', 'Запоріжжя', 'Вінниця', 'Тернопіль', 'Луцьк', 'Рівне',
            'Івано-Франківськ', 'Чернівці', 'Ужгород', 'Хмельницький', 'Черкаси', 'Полтава', 'Суми', 'Житомир',
            'Чернігів', 'Кропивницький', 'Миколаїв', 'Херсон',
            
            // Великі міста
            'Кривий Ріг', 'Маріуполь', 'Кам\'янське', 'Біла Церква', 'Мелітополь', 'Нікополь', 'Бердянськ',
            'Павлоград', 'Ірпінь', 'Буча', 'Бровари', 'Бориспіль',
            
            // Історичні міста
            'Дрогобич', 'Галич', 'Острог', 'Батурин', 'Переяслав', 'Канів', 'Коломия', 'Мукачево',
            'Трускавець', 'Жовква', 'Бучач', 'Збараж'
        ],
        streets: [
            // Вулиці на честь історичних постатей
            'вул. Шевченка', 'вул. Франка', 'вул. Лесі Українки', 'вул. Сагайдачного', 'вул. Грушевського',
            'вул. Мазепи', 'вул. Богдана Хмельницького', 'вул. Довженка', 'вул. Коцюбинського', 'вул. Шухевича',
            'вул. Бандери', 'вул. Петлюри', 'вул. Винниченка', 'вул. Драгоманова', 'вул. Вернадського',
            
            // Традиційні назви
            'вул. Соборна', 'вул. Незалежності', 'вул. Центральна', 'вул. Паркова', 'вул. Вишнева',
            'вул. Зелена', 'вул. Молодіжна', 'вул. Спортивна', 'вул. Шкільна', 'вул. Садова',
            'вул. Польова', 'вул. Лісова', 'вул. Квіткова', 'вул. Сонячна', 'вул. Весняна',
            
            // Проспекти та площі
            'проспект Свободи', 'проспект Перемоги', 'проспект Науки', 'проспект Миру', 'проспект Європейський',
            'площа Ринок', 'площа Незалежності', 'площа Соборна', 'площа Театральна', 'площа Конституції'
        ],
        universities: [
            // Київ
            'Київський національний університет імені Тараса Шевченка',
            'Національний технічний університет України "КПІ"',
            'Національний університет "Києво-Могилянська академія"',
            'Київський національний економічний університет',
            
            // Львів
            'Львівський національний університет імені Івана Франка',
            'Національний університет "Львівська політехніка"',
            'Український католицький університет',
            'Львівський національний медичний університет',
            
            // Харків
            'Харківський національний університет імені В.Н. Каразіна',
            'Національний технічний університет "ХПІ"',
            'Харківський національний медичний університет',
            
            // Одеса
            'Одеський національний університет імені І.І. Мечникова',
            'Одеський національний політехнічний університет',
            'Одеський національний медичний університет',
            
            // Інші міста
            'Дніпровський національний університет імені Олеся Гончара',
            'Чернівецький національний університет імені Юрія Федьковича',
            'Запорізький національний університет',
            'Донецький національний університет імені Василя Стуса',
            'Прикарпатський національний університет імені Василя Стефаника',
            'Сумський державний університет'
        ],
        specialties: [
            // Технічні
            'Комп\'ютерні науки', 'Інженерія програмного забезпечення', 'Кібербезпека',
            'Інформаційні системи', 'Системний аналіз', 'Комп\'ютерна інженерія',
            'Автоматизація та комп\'ютерно-інтегровані технології', 'Телекомунікації',
            'Електроніка', 'Робототехніка',
            
            // Природничі
            'Прикладна математика', 'Фізика та астрономія', 'Хімія',
            'Біологія', 'Екологія', 'Геологія', 'Географія',
            
            // Економічні
            'Економіка', 'Менеджмент', 'Маркетинг', 'Фінанси',
            'Міжнародні економічні відносини', 'Облік і оподаткування',
            'Підприємництво', 'Логістика',
            
            // Гуманітарні
            'Право', 'Психологія', 'Філологія', 'Журналістика',
            'Міжнародні відносини', 'Політологія', 'Соціологія',
            
            // Мистецькі
            'Дизайн', 'Архітектура', 'Образотворче мистецтво',
            'Музичне мистецтво', 'Сценічне мистецтво',
            
            // Медичні
            'Медицина', 'Стоматологія', 'Фармація',
            'Фізична терапія', 'Ветеринарна медицина'
        ],
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
            // Технологічні терміни
            'дизайн', 'проект', 'розробка', 'система', 'технологія', 'інновація', 'рішення',
            'алгоритм', 'інтерфейс', 'платформа', 'функціонал', 'архітектура', 'оптимізація',
            'автоматизація', 'інтеграція', 'масштабування', 'модернізація', 'трансформація',
            
            // Бізнес терміни
            'стратегія', 'аналіз', 'результат', 'ефективність', 'продуктивність', 'якість',
            'конкурентність', 'інвестиція', 'розвиток', 'управління', 'планування', 'зростання',
            'співпраця', 'партнерство', 'досягнення', 'перспектива', 'потенціал', 'можливість',
            
            // Процеси та дії
            'створює', 'розробляє', 'впроваджує', 'оптимізує', 'забезпечує', 'підтримує',
            'генерує', 'аналізує', 'тестує', 'покращує', 'модернізує', 'розширює',
            'трансформує', 'адаптує', 'інтегрує', 'масштабує', 'координує', 'реалізує',
            
            // Характеристики
            'сучасний', 'ефективний', 'надійний', 'швидкий', 'зручний', 'якісний',
            'інноваційний', 'професійний', 'оптимальний', 'унікальний', 'адаптивний',
            'потужний', 'гнучкий', 'масштабований', 'інтуїтивний', 'продуманий',
            
            // Результати
            'успіх', 'прогрес', 'досвід', 'досягнення', 'вдосконалення', 'оновлення',
            'зростання', 'розвиток', 'покращення', 'оптимізація', 'модернізація',
            'трансформація', 'інновація', 'прорив', 'перемога', 'лідерство',
            
            // Абстрактні поняття
            'майбутнє', 'перспектива', 'концепція', 'візія', 'місія', 'цінність',
            'якість', 'надійність', 'безпека', 'комфорт', 'зручність', 'простота',
            'ефективність', 'продуктивність', 'інновативність', 'креативність'
        ],
        connectors: [
            // Прості сполучники
            'та', 'і', 'або', 'але', 'проте', 'однак',
            
            // Прийменники
            'для', 'з', 'у', 'при', 'про', 'через',
            'над', 'під', 'біля', 'щодо', 'стосовно',
            
            // Складні сполучники
            'тому що', 'оскільки', 'завдяки', 'внаслідок',
            'в результаті', 'з метою', 'для того щоб',
            
            // Часові сполучники
            'коли', 'поки', 'після того як', 'перед тим як',
            'в той час як', 'протягом', 'впродовж',
            
            // Причинно-наслідкові
            'тому', 'через це', 'в результаті', 'отже',
            'таким чином', 'як наслідок', 'відповідно'
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
            // Керівні посади
            'Директор', 'Керівник відділу', 'Генеральний директор', 'Операційний директор', 'HR-директор',
            'Фінансовий директор', 'Технічний директор', 'Керівник проєктів', 'Керівник групи', 'Начальник відділу',
            // Креативні посади
            'Дизайнер', 'Копірайтер', 'Контент-менеджер', 'Маркетолог', 'SMM-менеджер',
            'PR-менеджер', 'Бренд-менеджер', 'Арт-директор', 'Креативний директор', 'Редактор',
            // Фінансові посади
            'Бухгалтер', 'Фінансовий аналітик', 'Економіст', 'Аудитор', 'Фінансовий консультант',
            // Медичні посади
            'Лікар', 'Терапевт', 'Педіатр', 'Хірург', 'Стоматолог',
            'Психолог', 'Фармацевт', 'Медсестра', 'Дієтолог', 'Реабілітолог',
            // Освітні посади
            'Вчитель', 'Викладач', 'Професор', 'Наукова співробітниця', 'Дослідниця',
            'Методист', 'Вихователь', 'Тренер', 'Репетитор', 'Асистент викладача',
            // Юридичні посади
            'Юрист', 'Адвокат', 'Нотаріус', 'Суддя', 'Прокурор',
            // Інші професійні посади
            'Архітектор', 'Перекладач', 'Журналіст', 'Письменниця', 'Фотограф',
            'Консультант', 'Аналітик', 'Менеджер з продажу', 'Ріелтор', 'Страхова агент'
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
                "{start}: {action} {middle} {end}"
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
        specialties: [
            'Комп\'ютерні науки',
            'Інженерія програмного забезпечення',
            'Кібербезпека',
            'Інформаційні системи',
            'Системний аналіз',
            'Комп\'ютерна інженерія',
            'Автоматизація',
            'Штучний інтелект',
            'Прикладна математика',
            'Економіка',
            'Менеджмент',
            'Маркетинг',
            'Фінанси',
            'Право',
            'Психологія',
            'Дизайн',
            'Архітектура',
            'Будівництво',
            'Медицина',
            'Фармація'
        ],
        universities: [
            'КНУ ім. Т. Шевченка',
            'КПІ ім. І. Сікорського',
            'ЛНУ ім. І. Франка',
            'ХНУ ім. В.Н. Каразіна',
            'НУ "Львівська політехніка"',
            'ОНУ ім. І.І. Мечникова',
            'ДНУ ім. О. Гончара',
            'ЧНУ ім. Ю. Федьковича',
            'УжНУ',
            'НУ "Києво-Могилянська академія"'
        ],
        degrees: [
            'Бакалавр',
            'Магістр',
            'Доктор філософії'
        ],
        quotes: [
            'Успіх — це здатність крокувати від однієї невдачі до іншої, не втрачаючи ентузіазму',
            'Найкращий спосіб передбачити майбутнє — створити його',
            'Єдиний спосіб робити велику роботу — любити те, що ви робите',
            'Ніколи не пізно стати тим, ким ти міг би бути',
            'Життя — це те, що з тобою відбувається, поки ти будуєш інші плани',
            'Найважливіше — не перестати запитувати',
            'Кожна мрія дається з силами для її здійснення',
            'Дорога в тисячу миль починається з першого кроку',
            'Найкращі інвестиції — це інвестиції в себе',
            'Ваш час обмежений, не витрачайте його, проживаючи чуже життя'
        ],
        quoteAuthors: [
            'Вінстон Черчилль',
            'Пітер Друкер',
            'Стів Джобс',
            'Джордж Еліот',
            'Джон Леннон',
            'Альберт Ейнштейн',
            'Ричард Бах',
            'Лао-цзи',
            'Бенджамін Франклін',
            'Стів Джобс'
        ],
        reviews: [
            'Чудовий продукт! Перевершив усі мої очікування. Особливо вражає якість та увага до деталей',
            'Дуже задоволений співпрацею. Професійний підхід та відмінний результат',
            'Рекомендую! Якість на висоті, обслуговування на найвищому рівні',
            'Приємно вражений швидкістю та якістю роботи. Обов\'язково звернусь ще',
            'Відмінний сервіс та професійний підхід. Дякую за чудову роботу',
            'Перевершує конкурентів за всіма параметрами. Дуже задоволений результатом',
            'Найкраще рішення, яке я знайшов. Простота використання вражає',
            'Чудове співвідношення ціни та якості. Рекомендую всім',
            'Професійний підхід та індивідуальне ставлення до клієнта. Дякую!',
            'Вражаючі результати! Перевершило всі мої очікування'
        ],
        reviewAuthors: [
            'Олександр К.',
            'Марія В.',
            'Андрій П.',
            'Ірина М.',
            'Василь Д.',
            'Оксана С.',
            'Михайло Р.',
            'Наталія З.',
            'Тарас Б.',
            'Юлія К.'
        ],
        words: [
            'design', 'project', 'development', 'system', 'technology', 'innovation', 'solution',
            'algorithm', 'interface', 'platform', 'functionality', 'architecture', 'optimization',
            'automation', 'integration', 'scalability', 'modernization', 'transformation',
            'strategy', 'marketing', 'management', 'enterprise', 'commerce', 'finance', 'investment',
            'growth', 'performance', 'quality', 'service', 'client', 'market', 'product',
            'success', 'future', 'progress', 'excellence', 'expertise', 'experience', 'competence',
            'collaboration', 'partnership', 'communication', 'creativity', 'leadership'
        ],
        connectors: [
            'and', 'or', 'but', 'while', 'however',
            'therefore', 'moreover', 'furthermore',
            'nevertheless', 'consequently',
            'in addition,', 'additionally,',
            'as well as', 'along with'
        ],
        paragraphs: [
            'Our team of experts develops innovative solutions to meet your needs. We combine technical expertise with creativity to deliver exceptional results.',
            'Through our customer-centric approach, we create customized solutions that perfectly align with your business objectives.',
            'Innovation is at the heart of our approach. We utilize the latest technologies to optimize your processes and maximize efficiency.',
            'We are committed to delivering high-quality solutions that keep you competitive in an ever-evolving market.'
        ],
        quotes: [
            'Success is not final, failure is not fatal: it is the courage to continue that counts.',
            'Innovation distinguishes between a leader and a follower.',
            'Creativity is intelligence having fun.',
            'The best way to predict the future is to create it.',
            'Quality is never an accident; it is always the result of intelligent effort.'
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
        cities: ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix', 'Philadelphia', 'San Antonio', 'San Diego',
            'Dallas', 'San Jose', 'Austin', 'Jacksonville', 'Fort Worth', 'Columbus', 'San Francisco', 'Charlotte',
            'Indianapolis', 'Seattle', 'Denver', 'Boston',
            
            'Charleston', 'Savannah', 'New Orleans', 'Boston', 'Philadelphia', 'Salem', 'St. Augustine', 'Williamsburg',
            'Annapolis', 'Providence',
            
            'San Francisco', 'Seattle', 'Austin', 'Boston', 'Portland', 'Boulder', 'Raleigh', 'Pittsburgh',
            'Minneapolis', 'Nashville'
        ],
        streets: [
            'Main St.', 'Broadway', 'Wall Street', 'Fifth Avenue', 'Pennsylvania Avenue',
            'Bourbon Street', 'Beale Street', 'Ocean Drive', 'Lombard Street', 'Michigan Avenue',
            
            'Oak Street', 'Maple Avenue', 'Washington Street', 'Lincoln Avenue', 'Jefferson Street',
            'Park Avenue', 'Church Street', 'Market Street', 'State Street', 'High Street',
            'Center Street', 'Pearl Street', 'Pine Street', 'River Road', 'Lake Street',
            'Forest Avenue', 'Hill Street', 'Valley Road', 'Spring Street', 'Cedar Lane'
        ],
        universities: [
            'Harvard University',
            'MIT',
            'Stanford University',
            'University of Cambridge',
            'University of Oxford',
            'Yale University',
            'Princeton University',
            'Columbia University',
            'University of Chicago',
            'UC Berkeley'
        ],
        specialties: [
            'Computer Science',
            'Software Engineering',
            'Cybersecurity',
            'Information Systems',
            'System Analysis',
            'Computer Engineering',
            'Automation',
            'Artificial Intelligence',
            'Applied Mathematics',
            'Economics',
            'Management',
            'Marketing',
            'Finance',
            'Law',
            'Psychology',
            'Design',
            'Architecture',
            'Construction',
            'Medicine',
            'Pharmacy'
        ],
        degrees: [
            'Bachelor',
            'Master',
            'Ph.D.'
        ],
        quotes: [
            'Success is walking from failure to failure with no loss of enthusiasm',
            'The best way to predict the future is to create it',
            'The only way to do great work is to love what you do',
            'It\'s never too late to be what you might have been',
            'Life is what happens while you\'re busy making other plans',
            'The important thing is not to stop questioning',
            'Every dream comes with the power to make it come true',
            'A journey of a thousand miles begins with a single step',
            'The best investment you can make is in yourself',
            'Your time is limited, don\'t waste it living someone else\'s life'
        ],
        quoteAuthors: [
            'Winston Churchill',
            'Peter Drucker',
            'Steve Jobs',
            'George Eliot',
            'John Lennon',
            'Albert Einstein',
            'Richard Bach',
            'Lao Tzu',
            'Benjamin Franklin',
            'Steve Jobs'
        ],
        reviews: [
            'Amazing product! Exceeded all my expectations. The quality and attention to detail are impressive',
            'Very satisfied with the collaboration. Professional approach and excellent results',
            'Highly recommend! Top quality and service at its finest',
            'Impressed with the speed and quality of work. Will definitely use again',
            'Excellent service and professional approach. Thank you for the great work',
            'Surpasses competitors in every aspect. Very satisfied with the results',
            'Best solution I\'ve found. Ease of use is impressive',
            'Great value for money. Recommend to everyone',
            'Professional approach and individual attention to the client. Thank you!',
            'Impressive results! Exceeded all my expectations'
        ],
        reviewAuthors: [
            'Alexander K.',
            'Maria V.',
            'Andrew P.',
            'Irene M.',
            'William D.',
            'Olivia S.',
            'Michael R.',
            'Natalie Z.',
            'Thomas B.',
            'Julia K.'
        ],
        words: [
            'design', 'project', 'development', 'system', 'technology', 'innovation', 'solution',
            'algorithm', 'interface', 'platform', 'functionality', 'architecture', 'optimization',
            'automation', 'integration', 'scalability', 'modernization', 'transformation',
            'strategy', 'marketing', 'management', 'enterprise', 'commerce', 'finance', 'investment',
            'growth', 'performance', 'quality', 'service', 'client', 'market', 'product',
            'success', 'future', 'progress', 'excellence', 'expertise', 'experience', 'competence',
            'collaboration', 'partnership', 'communication', 'creativity', 'leadership'
        ],
        connectors: [
            'and', 'or', 'but', 'while', 'however',
            'therefore', 'moreover', 'furthermore',
            'nevertheless', 'consequently',
            'in addition,', 'additionally,',
            'as well as', 'along with'
        ],
        paragraphs: [
            'Our team of experts develops innovative solutions to meet your needs. We combine technical expertise with creativity to deliver exceptional results.',
            'Through our customer-centric approach, we create customized solutions that perfectly align with your business objectives.',
            'Innovation is at the heart of our approach. We utilize the latest technologies to optimize your processes and maximize efficiency.',
            'We are committed to delivering high-quality solutions that keep you competitive in an ever-evolving market.'
        ],
        quotes: [
            'Success is not final, failure is not fatal: it is the courage to continue that counts.',
            'Innovation distinguishes between a leader and a follower.',
            'Creativity is intelligence having fun.',
            'The best way to predict the future is to create it.',
            'Quality is never an accident; it is always the result of intelligent effort.'
        ],
    },
    fr: {
        maleNames: ['Lucas', 'Gabriel', 'Louis', 'Raphaël', 'Jules', 'Adam', 'Arthur', 'Paul', 'Alexandre', 'Victor', 'Hugo', 'Antoine', 'Maxime', 'Thomas', 'Nicolas', 'Théo', 'Mathis', 'Noah', 'Ethan', 'Pierre', 'Simon', 'Léo', 'Baptiste', 'Clément', 'Alexis', 'Nathan', 'Julien', 'Valentin', 'Charles', 'Samuel'],
        femaleNames: ['Emma', 'Louise', 'Alice', 'Chloé', 'Inès', 'Léa', 'Manon', 'Lina', 'Jade', 'Sarah', 'Julia', 'Charlotte', 'Juliette', 'Camille', 'Zoé', 'Eva', 'Nina', 'Rose', 'Anna', 'Léna', 'Lucie', 'Marie', 'Elise', 'Clara', 'Valentine', 'Sophie', 'Margot', 'Victoria', 'Mathilde', 'Romane'],
        maleSurnames: ['Martin', 'Bernard', 'Dubois', 'Thomas', 'Robert', 'Richard', 'Petit', 'Durand', 'Leroy', 'Moreau', 'Simon', 'Laurent', 'Lefebvre', 'Michel', 'Garcia', 'David', 'Bertrand', 'Roux', 'Vincent', 'Fournier', 'Morel', 'Girard', 'Andre', 'Lefevre', 'Mercier'],
        femaleSurnames: ['Martin', 'Bernard', 'Dubois', 'Thomas', 'Robert', 'Richard', 'Petit', 'Durand', 'Leroy', 'Moreau', 'Simon', 'Laurent', 'Lefebvre', 'Michel', 'Garcia', 'David', 'Bertrand', 'Roux', 'Vincent', 'Fournier', 'Morel', 'Girard', 'Andre', 'Lefevre', 'Mercier'],
        cities: ['Paris', 'Marseille', 'Lyon', 'Toulouse', 'Nice', 'Nantes', 'Strasbourg', 'Montpellier', 'Bordeaux', 'Lille', 'Rennes', 'Reims', 'Saint-Étienne', 'Toulon', 'Le Havre', 'Grenoble', 'Dijon', 'Angers', 'Nîmes', 'Villeurbanne'],
        streets: ['Rue de la Paix', 'Avenue des Champs-Élysées', 'Boulevard Saint-Germain', 'Rue de Rivoli', 'Avenue Montaigne', 'Rue du Faubourg Saint-Honoré', 'Place Vendôme', 'Rue Saint-Antoine', 'Boulevard Haussmann', 'Rue de la Pompe', 'Avenue Victor Hugo', 'Rue de la République', 'Boulevard des Italiens', 'Rue de Vaugirard', 'Avenue de l\'Opéra'],
        words: ['design', 'projet', 'développement', 'système', 'technologie', 'innovation', 'solution', 'algorithme', 'interface', 'plateforme', 'fonctionnalité', 'architecture', 'optimisation', 'automatisation', 'intégration'],
        maleJobTitles: ['Développeur', 'Designer Web', 'Designer UI/UX', 'Chef de Produit', 'Chef de Projet', 'Ingénieur DevOps', 'Ingénieur QA', 'Architecte Système', 'Développeur Frontend', 'Développeur Backend', 'Développeur Full Stack', 'Développeur iOS', 'Développeur Android', 'Ingénieur Sécurité', 'Ingénieur Data'],
        femaleJobTitles: ['Développeuse', 'Designer Web', 'Designer UI/UX', 'Cheffe de Produit', 'Cheffe de Projet', 'Ingénieure DevOps', 'Ingénieure QA', 'Architecte Système', 'Développeuse Frontend', 'Développeuse Backend', 'Développeuse Full Stack', 'Développeuse iOS', 'Développeuse Android', 'Ingénieure Sécurité', 'Ingénieure Data'],
        headlines: {
            starts: [
                "Nouveau", "Innovant", "Révolutionnaire", "Moderne", "Unique",
                "Pionnier", "Populaire", "Exclusif", "Premium", "Top", "Perspectif", "Progressif", "Tendance", "Intellectuel", "Global"
            ],
            middles: [
                "système de", "solution pour", "plateforme de", "technologie de",
                "application de", "service de", "produit de", "outil de"
            ],
            ends: [
                "développement", "gestion", "optimisation", "innovation",
                "transformation", "collaboration", "productivité", "performance"
            ],
            actions: [
                "lance", "présente", "introduit", "dévoile", "annonce",
                "révolutionne", "transforme", "améliore", "optimise"
            ],
            templates: [
                "{start} {middle} {end}",
                "Une {start} {middle} {end}",
                "{start}: {action} {middle} {end}"
            ]
        },
        universities: [
            'Université Paris-Sorbonne',
            'École Polytechnique',
            'Sciences Po Paris',
            'HEC Paris',
            'École Normale Supérieure',
            'Université Paris-Saclay',
            'CentraleSupélec',
            'ESSEC Business School',
            'ESCP Business School',
            'Université Paris-Dauphine',
            'Université de Strasbourg',
            'Université de Lyon',
            'Université de Bordeaux',
            'Université de Toulouse',
            'École des Ponts ParisTech',
            'Université de Montpellier',
            'Université de Lille',
            'Université de Nice',
            'Institut Mines-Télécom',
            'INSA Lyon'
        ],
        reviews: [
            'Produit incroyable ! A dépassé toutes mes attentes. La qualité et l\'attention aux détails sont impressionnantes',
            'Très satisfait de la collaboration. Approche professionnelle et excellents résultats',
            'Je recommande vivement ! Qualité et service au plus haut niveau.',
            'Impressionné par la rapidité et la qualité du travail. Je réutiliserai certainement',
            'Une expérience client exceptionnelle. Service professionnel et résultats remarquables.'
        ],
        nicknamePrefixes: [
            'Le', 'Super', 'Mega', 'Ultra', 'Hyper', 'Pro', 'Master',
            'Expert', 'Top', 'Elite'
        ],
        nicknameSuffixes: [
            'Pro', 'Master', 'Expert', 'Star', 'Champion', 'Boss',
            'Guru', 'Ninja', 'Génie', 'Legend'
        ],
        companyPrefixes: [
            'Société', 'Groupe', 'Entreprise', 'Compagnie', 'Corporation',
            'SARL', 'SA', 'SAS'
        ],
        companies: [
            'TechFrance', 'InnovaSoft', 'NumériquePlus', 'SolutionsPro',
            'DataFrance', 'WebExpert', 'CloudTech', 'SmartSolutions'
        ],
        education: [
            'Licence en Informatique',
            'Master en Sciences des Données',
            'Doctorat en Intelligence Artificielle',
            'DUT Informatique',
            'BTS Services Informatiques',
            'Master en Cybersécurité',
            'Diplôme d\'Ingénieur en Informatique',
            'Master en Management des Systèmes d\'Information',
            'Licence en Mathématiques Appliquées',
            'Master en Développement Web',
            'Licence en Réseaux et Télécommunications',
            'Master en Intelligence Artificielle',
            'DUT Génie Logiciel',
            'Master en Sécurité des Systèmes d\'Information',
            'Licence en Systèmes Numériques'
        ],
        degrees: [
            'Licence',
            'Master',
            'Doctorat',
            'DUT',
            'BTS',
            'Diplôme d\'Ingénieur'
        ],
        specialties: [
            'Informatique',
            'Sciences des Données',
            'Intelligence Artificielle',
            'Cybersécurité',
            'Développement Web',
            'Génie Logiciel',
            'Systèmes d\'Information',
            'Réseaux et Télécommunications',
            'Mathématiques Appliquées',
            'Management des SI'
        ],
        connectors: [
            'et', 'ou', 'mais', 'donc',
            'car', 'cependant', 'néanmoins',
            'ainsi', 'puis', 'ensuite',
            'en outre,', 'de plus,',
            'également', 'ainsi que'
        ],
        paragraphs: [
            'Notre équipe d\'experts développe des solutions innovantes pour répondre à vos besoins. Nous combinons l\'expertise technique avec la créativité pour livrer des résultats exceptionnels.',
            'Grâce à notre approche centrée sur le client, nous créons des solutions personnalisées qui s\'alignent parfaitement sur vos objectifs commerciaux.',
            'L\'innovation est au cœur de notre approche. Nous utilisons les dernières technologies pour optimiser vos processus et maximiser l\'efficacité.',
            'Nous sommes engagés à livrer des solutions de haute qualité qui vous maintiennent compétitif dans un marché en constante évolution.'
        ],
        quotes: [
            'Le succès n\'est pas final, l\'échec n\'est pas fatal : c\'est le courage de continuer qui compte.',
            'L\'innovation distingue un leader d\'un suiveur.',
            'La créativité est l\'intelligence qui s\'amuse.',
            'La meilleure façon de prédire l\'avenir est de le créer.',
            'La qualité n\'est jamais un accident ; elle est toujours le résultat d\'un effort intelligent.'
        ],
    },
    de: {
        maleNames: ['Alexander', 'Maximilian', 'Paul', 'Leon', 'Luis', 'Luca', 'Felix', 'Jonas', 'David', 'Elias', 'Julian', 'Philipp', 'Noah', 'Ben', 'Niklas', 'Jakob', 'Tim', 'Moritz', 'Henry', 'Johannes', 'Lukas', 'Finn', 'Daniel', 'Emil', 'Anton', 'Leo', 'Rafael', 'Simon', 'Erik', 'Jan'],
        femaleNames: ['Emma', 'Mia', 'Hannah', 'Sofia', 'Anna', 'Emilia', 'Lina', 'Marie', 'Lena', 'Mila', 'Clara', 'Léa', 'Amelie', 'Sophie', 'Mathilda', 'Frieda', 'Charlotte', 'Luisa', 'Victoria', 'Zoe', 'Ida', 'Helena', 'Julia', 'Sarah', 'Laura', 'Lilly', 'Ella', 'Klara', 'Nora', 'Pia'],
        maleSurnames: ['Müller', 'Schmidt', 'Schneider', 'Fischer', 'Weber', 'Meyer', 'Wagner', 'Becker', 'Schulz', 'Hoffmann', 'Koch', 'Richter', 'Klein', 'Wolf', 'Schröder', 'Neumann', 'Schwarz', 'Zimmermann', 'Braun', 'Krüger', 'Hofmann', 'Hartmann', 'Lange', 'Schmitt', 'Werner'],
        femaleSurnames: ['Müller', 'Schmidt', 'Schneider', 'Fischer', 'Weber', 'Meyer', 'Wagner', 'Becker', 'Schulz', 'Hoffmann', 'Koch', 'Richter', 'Klein', 'Wolf', 'Schröder', 'Neumann', 'Schwarz', 'Zimmermann', 'Braun', 'Krüger', 'Hofmann', 'Hartmann', 'Lange', 'Schmitt', 'Werner'],
        cities: ['Berlin', 'Hamburg', 'München', 'Köln', 'Frankfurt', 'Stuttgart', 'Düsseldorf', 'Leipzig', 'Dortmund', 'Essen', 'Bremen', 'Dresden', 'Hannover', 'Nürnberg', 'Duisburg', 'Bochum', 'Wuppertal', 'Bielefeld', 'Bonn', 'Münster'],
        streets: ['Hauptstraße', 'Bahnhofstraße', 'Kirchstraße', 'Schulstraße', 'Gartenstraße', 'Bergstraße', 'Waldstraße', 'Ringstraße', 'Friedrichstraße', 'Wilhelmstraße', 'Berliner Straße', 'Münchener Straße', 'Hamburger Straße', 'Königstraße'],
        words: ['Innovation', 'Technologie', 'Entwicklung', 'Lösung', 'System', 'Projekt', 'Design', 'Schnittstelle', 'Plattform', 'Anwendung', 'Software', 'Daten', 'Intelligenz', 'Digital', 'Netzwerk', 'Sicherheit', 'Cloud', 'Mobil', 'Web', 'Architektur'],
        maleJobTitles: ['Softwareentwickler', 'Systemarchitekt', 'Projektleiter', 'Analyst', 'Berater', 'DevOps-Ingenieur', 'Technischer Direktor', 'UX-Designer', 'Product Owner', 'Innovationsmanager', 'Technischer Experte'],
        femaleJobTitles: ['Softwareentwicklerin', 'Systemarchitektin', 'Projektleiterin', 'Analystin', 'Beraterin', 'DevOps-Ingenieurin', 'Technische Direktorin', 'UX-Designerin', 'Product Ownerin', 'Innovationsmanagerin', 'Technische Expertin'],
        headlines: {
            starts: [
                'Neu', 'Innovativ', 'Revolutionär', 'Modern', 'Einzigartig',
                'Führend', 'Beliebt', 'Exklusiv', 'Premium', 'Top',
                'Zukunftsorientiert', 'Progressiv', 'Trendig', 'Intellektuell', 'Global'
            ],
            middles: [
                'System für', 'Lösung für', 'Plattform für', 'Technologie für',
                'Anwendung für', 'Service für', 'Produkt für', 'Tool für'
            ],
            ends: [
                'Entwicklung', 'Management', 'Optimierung', 'Innovation',
                'Transformation', 'Zusammenarbeit', 'Produktivität', 'Leistung'
            ],
            actions: [
                'startet', 'präsentiert', 'führt ein', 'enthüllt', 'kündigt an',
                'revolutioniert', 'transformiert', 'verbessert', 'optimiert'
            ],
            templates: [
                '{start} {middle} {end}',
                'Ein {start} {middle} {end}',
                '{start}: {action} {middle} {end}'
            ]
        },
        universities: [
            'Technische Universität München',
            'Ludwig-Maximilians-Universität München',
            'Humboldt-Universität zu Berlin',
            'Freie Universität Berlin',
            'Universität Heidelberg',
            'RWTH Aachen',
            'Technische Universität Berlin',
            'Universität Hamburg',
            'Universität Frankfurt',
            'Universität Köln',
            'Technische Universität Dresden',
            'Karlsruher Institut für Technologie',
            'Universität Stuttgart',
            'Technische Universität Darmstadt',
            'Universität Bonn',
            'Universität Bremen',
            'Universität Hannover',
            'Universität Leipzig',
            'Technische Universität Braunschweig',
            'Universität Erlangen-Nürnberg'
        ],
        reviews: [
            'Ausgezeichneter Service, sehr zu empfehlen!',
            'Sehr zufrieden mit der Qualität des Produkts.',
            'Hervorragende Kundenerfahrung.',
            'Professionelles und reaktionsschnelles Team.',
            'Unschlagbares Preis-Leistungs-Verhältnis.'
        ],
        nicknamePrefixes: [
            'Der', 'Super', 'Mega', 'Ultra', 'Hyper', 'Pro', 'Master',
            'Expert', 'Top', 'Elite'
        ],
        nicknameSuffixes: [
            'Pro', 'Master', 'Experte', 'Star', 'Champion', 'Boss',
            'Guru', 'Ninja', 'Genie', 'Legende'
        ],
        companyPrefixes: [
            'Firma', 'Gruppe', 'Unternehmen', 'Gesellschaft', 'Corporation',
            'GmbH', 'AG', 'KG'
        ],
        companies: [
            'TechDeutsch', 'InnovaSoft', 'DigitalPlus', 'LösungenPro',
            'DatenTech', 'WebExpert', 'CloudTech', 'SmartSolutions'
        ],
        education: [
            'Bachelor in Informatik',
            'Master in Datenwissenschaft',
            'Promotion in Künstlicher Intelligenz',
            'Diplom-Informatiker',
            'Bachelor in Wirtschaftsinformatik',
            'Master in Cybersicherheit',
            'Staatlich geprüfter Informatiker',
            'Master in Informationsmanagement',
            'Bachelor in Angewandter Mathematik',
            'Master in Webentwicklung',
            'Ausbildung zum Fachinformatiker',
            'Duales Studium Informatik',
            'Bachelor in Medieninformatik',
            'Master in IT-Sicherheit',
            'Technischer Betriebswirt'
        ],
        degrees: [
            'Bachelor',
            'Master',
            'Promotion',
            'Diplom',
            'Staatlich geprüfter',
            'Ausbildung',
            'Duales Studium'
        ],
        specialties: [
            'Informatik',
            'Datenwissenschaft',
            'Künstliche Intelligenz',
            'Wirtschaftsinformatik',
            'Cybersicherheit',
            'Informationsmanagement',
            'Angewandte Mathematik',
            'Webentwicklung',
            'Medieninformatik',
            'IT-Sicherheit'
        ],
        connectors: [
            'und', 'oder', 'aber', 'während', 'jedoch',
            'deshalb', 'außerdem', 'darüber hinaus',
            'dennoch', 'folglich',
            'in addition,', 'additionally,',
            'als auch', 'zusammen mit'
        ],
        paragraphs: [
            'Unser Team von Experten entwickelt innovative Lösungen, um Ihre Bedürfnisse zu erfüllen. Wir kombinieren technisches Know-how mit Kreativität, um außergewöhnliche Ergebnisse zu liefern.',
            'Durch unseren kundenorientierten Ansatz erstellen wir maßgeschneiderte Lösungen, die perfekt auf Ihre Geschäftsziele abgestimmt sind.',
            'Innovation steht im Mittelpunkt unseres Ansatzes. Wir nutzen die neuesten Technologien, um Ihre Prozesse zu optimieren und die Effizienz zu maximieren.',
            'Wir sind verpflichtet, Lösungen von höchster Qualität zu liefern, die Sie in einem sich ständig verändernden Markt wettbewerbsfähig halten.'
        ],
        quotes: [
            'Der Erfolg ist nicht endgültig, der Misserfolg ist nicht tödlich: es ist der Mut, weiterzumachen, der zählt.',
            'Innovation unterscheidet einen Leader von einem Nachahmer.',
            'Kreativität ist Intelligenz, die Spaß hat.',
            'Die beste Art, die Zukunft vorherzusagen, ist, sie zu schaffen.',
            'Qualität ist nie ein Zufall; sie ist immer das Ergebnis intelligenter Anstrengung.'
        ],
        words: [
            'Design', 'Projekt', 'Entwicklung', 'System', 'Technologie', 'Innovation', 'Lösung',
            'Algorithmus', 'Schnittstelle', 'Plattform', 'Funktionalität', 'Architektur', 'Optimierung',
            'Automatisierung', 'Integration', 'Skalierbarkeit', 'Modernisierung', 'Transformation',
            'Strategie', 'Marketing', 'Management', 'Unternehmen', 'Handel', 'Finanzen', 'Investition',
            'Wachstum', 'Leistung', 'Qualität', 'Service', 'Kunde', 'Markt', 'Produkt',
            'Erfolg', 'Zukunft', 'Fortschritt', 'Exzellenz', 'Expertise', 'Erfahrung', 'Kompetenz',
            'Zusammenarbeit', 'Partnerschaft', 'Kommunikation', 'Kreativität', 'Führung'
        ]
    }
};

// Додаємо структури для генерації компаній для англійської мови
data.en.companyPrefixes = [
    'Inc.', 'Corp.', 'LLC', 'Ltd.', 'Group',
    'Solutions', 'Technologies', 'Systems', 'Industries', 'International',
    'Global', 'Enterprises', 'Innovations', 'Dynamics', 'Corporation'
];
data.en.companies = [
    'TechPro', 'InnovaSoft', 'DigitalPlus', 'SmartSolutions',
    'DataTech', 'WebExpert', 'CloudTech', 'CyberSystems',
    'FutureTech', 'NextGen', 'InfoSys', 'TechWave',
    'ByteForce', 'CodeCraft', 'DataFlow', 'TechNova',
    'InnovatePro', 'SmartTech', 'CyberPro', 'WebFlow'
];

// Додаємо структури для посад для англійської мови
data.en.maleJobTitles = [
    // Technical Positions
    'Software Developer', 'Web Designer', 'UI/UX Designer', 'Product Manager', 'Project Manager',
    'DevOps Engineer', 'QA Engineer', 'System Architect', 'Frontend Developer', 'Backend Developer',
    'Full Stack Developer', 'iOS Developer', 'Android Developer', 'Security Engineer', 'Data Engineer',
    'Cloud Engineer', 'Network Engineer', 'Database Administrator', 'Business Analyst', 'Data Scientist',
    
    // Management Positions
    'CEO', 'CTO', 'COO', 'Team Lead', 'Department Head',
    'Technical Director', 'IT Director', 'Development Manager', 'Operations Manager', 'Product Owner',
    
    // Creative Positions
    'Art Director', 'Creative Director', 'Lead Designer', 'Brand Manager', 'Content Manager',
    'Marketing Manager', 'Digital Producer', 'Creative Producer', 'Innovation Manager', 'Strategy Manager'
];

data.en.femaleJobTitles = [
    // Technical Positions
    'Software Developer', 'Web Designer', 'UI/UX Designer', 'Product Manager', 'Project Manager',
    'DevOps Engineer', 'QA Engineer', 'System Architect', 'Frontend Developer', 'Backend Developer',
    'Full Stack Developer', 'iOS Developer', 'Android Developer', 'Security Engineer', 'Data Engineer',
    'Cloud Engineer', 'Network Engineer', 'Database Administrator', 'Business Analyst', 'Data Scientist',
    
    // Management Positions
    'CEO', 'CTO', 'COO', 'Team Lead', 'Department Head',
    'Technical Director', 'IT Director', 'Development Manager', 'Operations Manager', 'Product Owner',
    
    // Creative Positions
    'Art Director', 'Creative Director', 'Lead Designer', 'Brand Manager', 'Content Manager',
    'Marketing Manager', 'Digital Producer', 'Creative Producer', 'Innovation Manager', 'Strategy Manager'
];

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
    let firstName;
    
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
    
    return firstName;
}

function fullName(lang = 'uk', gender = 'all') {
    const langData = data[lang];
    let firstName, surname;
    
    if (gender === 'male') {
        firstName = getRandomItem(langData.maleNames);
        surname = getRandomItem(langData.maleSurnames);
    } else if (gender === 'female') {
        firstName = getRandomItem(langData.femaleNames);
        surname = getRandomItem(langData.femaleSurnames);
    } else {
        // Випадково обираємо стать для режиму 'all'
        const isMale = Math.random() < 0.5;
        firstName = isMale ? getRandomItem(langData.maleNames) : getRandomItem(langData.femaleNames);
        surname = isMale ? getRandomItem(langData.maleSurnames) : getRandomItem(langData.femaleSurnames);
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
        figma.ui.resize(400, msg.height);
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
            if (option === 'words' || option === 'sentence' || option === 'paragraph') {
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
                    const option = options[0];
                    let value;

                    if (option === 'words' || option === 'sentence' || option === 'paragraph') {
                        value = generators[option](language, count);
                    } else if (['name', 'fullName', 'nickname', 'jobTitle'].includes(option)) {
                        value = generators[option](language, gender);
                    } else {
                        value = generators[option](language);
                    }

                    await figma.loadFontAsync(node.fontName);
                    node.characters = value;
                }
                figma.notify(notifications[language].contentGenerated);
            } else {
                // Якщо нічого не вибрано, створюємо нові елементи
                const elements = [];
                
                for (const option of options) {
                    console.log('Creating new element for option:', option);
                    const text = figma.createText();
                    let value;
                    // Передаємо параметри в залежності від типу генератора
                    if (option === 'words' || option === 'sentence' || option === 'paragraph') {
                        value = generators[option](language, parseInt(count) || 1);
                    } else if (['name', 'fullName', 'nickname', 'jobTitle'].includes(option)) {
                        console.log('Generating full name with parameters:', { language, gender });
                        value = generators[option](language, gender);
                    } else if (option === 'education') {
                        value = generators[option](language);
                    } else {
                        value = generators[option](language);
                    }
                    console.log('Generated text:', value);
                    text.characters = value;
                    
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
    name: (lang = 'uk', gender = 'all') => {
        const langData = data[lang];
        let firstName;
        
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
        
        return firstName;
    },

    fullName: (lang = 'uk', gender = 'all') => {
        const langData = data[lang];
        let firstName, surname;
        
        if (gender === 'male') {
            firstName = getRandomItem(langData.maleNames);
            surname = getRandomItem(langData.maleSurnames);
        } else if (gender === 'female') {
            firstName = getRandomItem(langData.femaleNames);
            surname = getRandomItem(langData.femaleSurnames);
        } else {
            // Випадково обираємо стать для режиму 'all'
            const isMale = Math.random() < 0.5;
            firstName = isMale ? getRandomItem(langData.maleNames) : getRandomItem(langData.femaleNames);
            surname = isMale ? getRandomItem(langData.maleSurnames) : getRandomItem(langData.femaleSurnames);
        }
        
        return `${firstName} ${surname}`;
    },

    city: (lang) => {
        const langData = data[lang];
        return getRandomItem(langData.cities);
    },

    street: (lang) => {
        const langData = data[lang];
        return getRandomItem(langData.streets);
    },

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
            name = transliterate(name.toLowerCase());
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
        const city = generators.city(lang);
        const street = generators.street(lang);
        const building = Math.floor(Math.random() * 150) + 1;
        const apartment = Math.floor(Math.random() * 100) + 1;
        const postalCode = formatPostalCode(lang);

        // Додаємо варіації для корпусів та літер
        const buildingVariations = ['', 'А', 'Б', 'В', '-1', '-2'];
        const buildingExtra = Math.random() < 0.3 ? getRandomItem(buildingVariations) : '';

        if (lang === 'uk') {
            return `${postalCode}, ${city}, ${street}, ${building}${buildingExtra}${Math.random() < 0.7 ? `, кв. ${apartment}` : ''}`;
        } else {
            return `${postalCode}, ${city}, ${street}, ${building}${buildingExtra}${Math.random() < 0.7 ? `, apt. ${apartment}` : ''}`;
        }
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
        const langData = data[lang] || data.en;
        
        if (!langData.headlines) {
            return ''; // Повертаємо пустий рядок, якщо немає структури headlines
        }

        const h = langData.headlines;
        const template = getRandomItem(h.templates);
        
        return template
            .replace('{start}', getRandomItem(h.starts))
            .replace('{middle}', getRandomItem(h.middles))
            .replace('{end}', getRandomItem(h.ends))
            .replace('{action}', getRandomItem(h.actions));
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
            name = transliterate(name.toLowerCase());
        } else {
            name = name.toLowerCase();
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
        const formats = {
            uk: { country: 'UA', bankLength: 6, accountLength: 19 },
            en: { country: 'US', bankLength: 9, accountLength: 12 },
            fr: { country: 'FR', bankLength: 10, accountLength: 11 },
            de: { country: 'DE', bankLength: 8, accountLength: 10 }
        };

        const format = formats[language] || formats.en;
        
        // Контрольні цифри (2 знаки)
        const checkDigits = Math.floor(Math.random() * 90 + 10).toString();
        
        // Код банку
        const bankCode = Array.from(
            {length: format.bankLength}, 
            () => Math.floor(Math.random() * 10)
        ).join('');
        
        // Номер рахунку
        const accountNumber = Array.from(
            {length: format.accountLength}, 
            () => Math.floor(Math.random() * 10)
        ).join('');
        
        // Форматуємо IBAN з пробілами для кращої читабельності
        const fullIban = `${format.country}${checkDigits}${bankCode}${accountNumber}`;
        return fullIban.match(/.{1,4}/g).join(' ');
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
            'tech', 'digital', 'web', 'app', 'soft', 'dev', 'code', 'it',
            'cloud', 'online', 'site'
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
    
    education: (lang = 'uk') => {
        const degree = getRandomItem(data[lang].degrees);
        const specialty = getRandomItem(data[lang].specialties);
        const university = getRandomItem(data[lang].universities);
        
        return `${degree}, ${specialty}, ${university}`;
    },
    
    sentence: (lang, count = 1) => {
        const words = data[lang].words;
        const connectors = data[lang].connectors;
        
        if (!words || words.length === 0) {
            return lang === 'uk' ? 'Текст відсутній' : 'No text available';
        }

        let sentences = [];
        count = Math.max(1, parseInt(count) || 1);
        
        for (let i = 0; i < count; i++) {
            const length = Math.floor(Math.random() * 7) + 4; // від 4 до 10 слів
            let sentence = [];
            
            for (let j = 0; j < length; j++) {
                let word = getRandomItem(words);
                
                // Збільшуємо ймовірність використання сполучників
                if (j > 0 && Math.random() < 0.4) {
                    const connector = getRandomItem(connectors);
                    // Додаємо пробіл після коми
                    if (connector.includes(',')) {
                        word = connector + ' ' + word;
                    } else {
                        word = connector + ' ' + word;
                    }
                }
                
                sentence.push(word);
            }
            
            // Капіталізуємо перше слово
            sentence[0] = capitalizeFirstLetter(sentence[0]);
            
            // Додаємо розділові знаки
            const punctuation = Math.random() < 0.2 ? '!' : '.';
            sentences.push(sentence.join(' ') + punctuation);
        }
        
        return sentences.join(' ');
    },
    
    words: (lang, count = 3) => {
        const words = data[lang].words;
        if (!words || words.length === 0) {
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
        
        return Array.from(uniqueWords)
            .map(word => capitalizeFirstLetter(word))
            .join(' ');
    },
    
    paragraph: (lang, count = 1) => {
        if (!data[lang] || !data[lang].paragraphs) {
            return lang === 'uk' ? 'Текст відсутній' : 'No text available';
        }
        
        count = Math.max(1, parseInt(count) || 1);
        const paragraphs = [];
        
        for (let i = 0; i < count; i++) {
            paragraphs.push(getRandomItem(data[lang].paragraphs));
        }
        
        return paragraphs.join('\n\n');
    },
    quote: (lang) => {
        if (!data[lang] || !data[lang].quotes) {
            return lang === 'uk' ? 'Цитата відсутня' : 'No quote available';
        }
        return getRandomItem(data[lang].quotes);
    },
    review: (lang) => {
        const reviews = data[lang].reviews;
        const authors = data[lang].reviewAuthors;
        const review = getRandomItem(reviews);
        const author = getRandomItem(authors);
        return `"${review}" - ${author}`;
    },
};

// Утиліти для форматування
function formatPrice(number, lang) {
    const formats = {
        uk: { currency: '₴', separator: ' ', decimal: ',' },
        en: { currency: '$', separator: ',', decimal: '.' },
        fr: { currency: '€', separator: ' ', decimal: ',' },
        de: { currency: '€', separator: '.', decimal: ',' }
    };

    const format = formats[lang] || formats.en;
    
    const parts = number.toFixed(2).split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, format.separator);
    
    return lang === 'fr' || lang === 'de' 
        ? parts.join(format.decimal) + ' ' + format.currency
        : format.currency + parts.join(format.decimal);
}

function formatDate(date, lang) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    let locale;
    
    switch(lang) {
        case 'uk':
            locale = 'uk-UA';
            break;
        case 'fr':
            locale = 'fr-FR';
            break;
        case 'de':
            locale = 'de-DE';
            break;
        default:
            locale = 'en-US';
    }
    
    return date.toLocaleDateString(locale, options);
}

function formatPhone(lang) {
    const formats = {
        uk: '+380 (XX) XXX-XX-XX',
        en: '+1 (###) ###-####',
        fr: '+33 # ## ## ## ##',
        de: '+49 ### ########'
    };

    const format = formats[lang] || formats.en;
    return format.replace(/#/g, () => Math.floor(Math.random() * 10));
}

function formatPostalCode(lang) {
    switch(lang) {
        case 'uk':
            return String(Math.floor(10000 + Math.random() * 90000)); // 5 цифр: 01001-99999
        case 'fr':
            // Французький формат: 5 цифр (00000-99999)
            const frPrefix = String(Math.floor(Math.random() * 96) + 1).padStart(2, '0');
            const frSuffix = String(Math.floor(1000 + Math.random() * 9000));
            return frPrefix + frSuffix;
        case 'de':
            // Німецький формат: 5 цифр (01000-99999)
            return String(Math.floor(1000 + Math.random() * 98999)).padStart(5, '0');
        default: // en - США
            // Американський формат: NNNNN або NNNNN-NNNN
            const zip = String(Math.floor(10000 + Math.random() * 90000));
            const hasPlus4 = Math.random() > 0.5;
            if (hasPlus4) {
                const plus4 = String(Math.floor(1000 + Math.random() * 9000));
                return `${zip}-${plus4}`;
            }
            return zip;
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

// Тестування генерації заголовків
function testHeadlineGeneration() {
    const languages = ['uk', 'en', 'fr', 'de'];
    
    console.log('Тестування генерації заголовків:');
    console.log('--------------------------------');
    
    languages.forEach(lang => {
        console.log(`\nМова: ${lang}`);
        for (let i = 0; i < 3; i++) {
            console.log(generators.headline(lang));
        }
    });
}

// Тестування генерації компаній
function testCompanyGeneration() {
    const languages = ['uk', 'en', 'fr', 'de'];
    
    console.log('Тестування генерації компаній:');
    console.log('--------------------------------');
    
    languages.forEach(lang => {
        console.log(`\nМова: ${lang}`);
        for (let i = 0; i < 3; i++) {
            console.log(generators.company(lang));
        }
    });
}

// Тестування генерації посад
function testJobTitleGeneration() {
    const languages = ['uk', 'en', 'fr', 'de'];
    const genders = ['male', 'female'];
    
    console.log('Тестування генерації посад:');
    console.log('--------------------------------');
    
    languages.forEach(lang => {
        console.log(`\nМова: ${lang}`);
        genders.forEach(gender => {
            console.log(`\nСтать: ${gender}`);
            for (let i = 0; i < 3; i++) {
                console.log(generators.jobTitle(lang, gender));
            }
        });
    });
}

// Тестування генерації поштових індексів
function testPostalCodeGeneration() {
    const languages = ['uk', 'en', 'fr', 'de'];
    
    console.log('Тестування генерації поштових індексів:');
    console.log('--------------------------------');
    
    languages.forEach(lang => {
        console.log(`\nМова: ${lang}`);
        for (let i = 0; i < 5; i++) {
            console.log(formatPostalCode(lang));
        }
    });
}

// Запускаємо тест при ініціалізації плагіна
testHeadlineGeneration();
testCompanyGeneration();
testJobTitleGeneration();
testPostalCodeGeneration();
