import { ProjectDetails, ProjectPreview } from "@/types/project";

export const projectsPreviewData: ProjectPreview[] = [
    {
        id: "two_pistolets",
        title: "Two-Pistolets",
        type: "TG Mini App",
        format: "portrait",
        img: "/project-cases/two-pistolets/project-case-two-pistolets0.avif",
        hoverImg:
            "/project-cases/two-pistolets/project-case-two-pistolets1.avif",
        span: 1,
    },
    {
        id: "code_venture",
        title: "CodeVenture",
        type: "Startup Marketplace",
        format: "landscape",
        img: "/project-cases/code-venture/project-case-code-venture0.avif",
        hoverImg:
            "/project-cases/code-venture/project-case-code-venture1.avif",
        span: 1,
    },
    {
        id: "pashalka",
        title: "Pashalka",
        type: "TG Mini App",
        format: "portrait",
        img: "/project-cases/pashalka/project-case-pashalka0.avif",
        hoverImg:
            "/project-cases/pashalka/project-case-pashalka1.avif",
        span: 1,
    },
    {
        id: "upora",
        title: "Upora",
        type: "Digital Products Marketplace",
        format: "landscape",
        img: "/project-cases/upora/project-case-upora0.avif",
        hoverImg:
            "/project-cases/upora/project-case-upora1.avif",
        span: 1,
    },
    {
        id: "moerodnoe",
        title: "Moerodnoe",
        type: "Personal Website",
        format: "landscape",
       img: "/project-cases/moerodnoe/project-case-moerodnoe0.avif",
        hoverImg:
            "/project-cases/moerodnoe/project-case-moerodnoe1.avif",
        span: 1,
    },
    {
        id: "skin_space",
        title: "SkinSpace",
        type: "Skin Trading Platforme",
        format: "landscape",
        img: "/project-cases/skin-space/project-case-skin-space0.avif",
        hoverImg:
            "/project-cases/skin-space/project-case-skin-space1.avif",
        span: 1,
    },
];

export const projectsData: Record<string, ProjectDetails> = {
    two_pistolets: {
        id: "two-pistolets",
        title: "Two-Pistolets",
        subtitle: "TG Mini App",
        description:
            "GameFi Telegram Mini App в мафиозном сеттинге. Игроки выполняют ежедневные задания, строят свою криминальную сеть (клан) и зарабатывают внутриигровую валюту для открытия кейсов, в которых спрятаны реальные награды — TON и Telegram Stars.",
        link: "https://t.me/starsgun_bot",
        services: "Frontend Development",
        client: "Startup",
        year: "2025",
        images: [
            {
                src: "/project-cases/two-pistolets/project-case-two-pistolets0.avif",
                format: "portrait",
            },
            {
                src: "/project-cases/two-pistolets/project-case-two-pistolets1.avif",
                format: "portrait",
            },
            {
                src: "/project-cases/two-pistolets/project-case-two-pistolets2.avif",
                format: "portrait",
            },
            {
                src: "/project-cases/two-pistolets/project-case-two-pistolets3.avif",
                format: "portrait",
            },
        ],
        concept:
            "Визуальный язык приложения построен на эстетике нуара и мафии. Темная цветовая палитра контрастирует с яркими акцентами в виде золотых звезд, фишек и оружия. Название отсылает к культовому кинематографу, задавая азартный тон для механик лутбоксов (Кейс Дона, Кодекс чести).",
        scope: "Разработка структуры и интерфейса приложения: магазин кейсов, система ежедневных и спонсорских заданий (просмотр рекламы, клики), многоуровневая реферальная система (кланы с 10% пассивным доходом) и профиль игрока с заделом на будущую геймификацию (лидерборды, инвентарь, уровни).",
        // Изменить потом на последний кейс
        previous: {
            title: "SkinSpace",
            subtitle1: "SkinSpace",
            subtitle2: "Skin Trading Platform",
            format: "landscape",
            img: "/project-cases/skin-space/project-case-skin-space0.avif",
            hoverImg: "/project-cases/skin-space/project-case-skin-space1.avif",
            slug: "skin_space",
        },
        next: {
            title: "CodeVenture",
            subtitle1: "CodeVenture",
            subtitle2: "Startup Marketplace",
            format: "landscape",
            img: "/project-cases/code-venture/project-case-code-venture0.avif",
            hoverImg:
                "/project-cases/code-venture/project-case-code-venture1.avif",
            slug: "code_venture",
        },
    },
    code_venture: {
        id: "code_venture",
        title: "CodeVenture",
        subtitle: "Startup Marketplace",
        description:
            "Платформа для покупки и продажи готовых SaaS MVP и production-ready кода. Проект объединяет разработчиков, позволяя им безопасно торговать программной архитектурой с использованием системы безопасных сделок (Escrow Protocol) и удобным поиском по технологическому стеку.",
        services: "Full-Stack Development",
        client: "Personal Project",
        year: "2026",
        images: [
            {
                src: "/project-cases/code-venture/project-case-code-venture0.avif",
                format: "landscape",
            },
            {
                src: "/project-cases/code-venture/project-case-code-venture1.avif",
                format: "landscape",
            },
            {
                src: "/project-cases/code-venture/project-case-code-venture2.avif",
                format: "landscape",
            },
            {
                src: "/project-cases/code-venture/project-case-code-venture3.avif",
                format: "landscape",
            },
        ],
        concept:
            "Проект выполнен в современной dark-mode эстетике с неоновыми сине-фиолетовыми акцентами, подчеркивающими технологичность продукта. Интерфейс использует строгую типографику и элементы, стилизованные под среду разработки (терминальные окна, фрагменты кода), чтобы создать доверительную и привычную среду для целевой аудитории — программистов.",
        scope: "Проектирование и разработка полноценного веб-приложения: посадочная страница, каталог (Discovery Engine) с фильтрацией по стеку и категориям, флоу создания карточки товара со встроенным AI-генератором описаний, а также детальный профиль продавца со статистикой споров (Dispute Stats) и аналитикой продаж.",
        previous: {
            title: "Two-Pistolets",
            subtitle1: "Two-Pistolets",
            subtitle2: "TG Mini App",
            format: "portrait",
            img: "/project-cases/two-pistolets/project-case-two-pistolets0.avif",
            hoverImg:
                "/project-cases/two-pistolets/project-case-two-pistolets1.avif",
            slug: "two_pistolets",
        },
        next: {
            title: "Pashalka",
            subtitle1: "Pashalka",
            subtitle2: "TG Mini App",
            format: "portrait",
            img: "/project-cases/pashalka/project-case-pashalka0.avif",
            hoverImg: "/project-cases/pashalka/project-case-pashalka1.avif",
            slug: "pashalka",
        },
    },
    pashalka: {
        id: "pashalka",
        title: "Pashalka",
        subtitle: "Telegram Mini App",
        description:
            "Платформа-конструктор, позволяющая бизнесу запускать собственные геймифицированные активности в Telegram. Сервис включает полнофункциональную админ-панель для настройки приложения и клиентскую часть с мини-игрой, заданиями и системой розыгрышей для вовлечения аудитории брендов.",
        services: "Frontend Development",
        client: "Startup",
        year: "2025",
        images: [
            {
                src: "/project-cases/pashalka/project-case-pashalka0.avif",
                format: "portrait",
            },
            {
                src: "/project-cases/pashalka/project-case-pashalka1.avif",
                format: "portrait",
            },
            {
                src: "/project-cases/pashalka/project-case-pashalka2.avif",
                format: "portrait",
            },
            {
                src: "/project-cases/pashalka/project-case-pashalka3.avif",
                format: "portrait",
            },
        ],
        concept:
            "Дизайн-система разделена на две среды. Панель управления выполнена в строгом темном стиле (Dark Mode) с ярким кислотно-неоновым градиентом в шапке, что придает интерфейсу современный технологичный вид. Клиентская часть (сама игра) предлагает гибкую визуальную кастомизацию — от мультяшных вирусов до пончиков, позволяя адаптировать визуал под стиль любого бренда.",
        scope: "Разработка комплексного SaaS-решения: создание личного кабинета компании (настройка профиля бота, выбор игровых ассетов из библиотеки, управление тарифами/подписками) и разработка самого B2C Mini App (аркадная механика «ловца предметов», интеграция лидербордов, системы заданий и магазина наград).",
        previous: {
            title: "Code Venture",
            subtitle1: "Code Venture",
            subtitle2: "Startup Marketplace",
            format: "landscape",
            img: "/project-cases/code-venture/project-case-code-venture0.avif",
            hoverImg:
                "/project-cases/code-venture/project-case-code-venture1.avif",
            slug: "code_venture",
        },
        next: {
            title: "Upora",
            subtitle1: "Upora",
            subtitle2: "Marketplace Media",
            format: "landscape",
            img: "/project-cases/upora/project-case-upora0.avif",
            hoverImg: "/project-cases/upora/project-case-upora1.avif",
            slug: "upora",
        },
    },
    upora: {
        id: "upora",
        title: "Upora",
        subtitle: "Digital Products Marketplace",
        description:
            "Платформа для покупки и продажи цифровых продуктов от креаторов со всего мира. Пользователи могут выступать как в роли покупателей, так и становиться авторами, размещая свои работы, управляя витриной и получая оплаты через встроенную надежную систему эквайринга.",
        services: "Frontend Development, Stripe Integration",
        client: "Startup",
        year: "2025",
        images: [
            {
                src: "/project-cases/upora/project-case-upora0.avif",
                format: "landscape",
            },
            {
                src: "/project-cases/upora/project-case-upora1.avif",
                format: "landscape",
            },
            {
                src: "/project-cases/upora/project-case-upora2.avif",
                format: "landscape",
            },
            {
                src: "/project-cases/upora/project-case-upora3.avif",
                format: "landscape",
            },
        ],
        concept:
            "Минималистичный светлый интерфейс с поддержкой переключения на темную тему (Dark/Light mode). Дизайн спроектирован так, чтобы не отвлекать внимание от самого важного — визуальной презентации цифровых товаров. Чистая типографика, просторная сетка карточек и интуитивная навигация создают современный и доверительный пользовательский опыт.",
        scope: "Разработка полного цикла маркетплейса: главная страница с каталогом, поиском и фильтрацией, детальные карточки товаров с блоком рекомендаций, личный кабинет с разделением ролей (покупатель/автор) и бесшовная интеграция чекаута через Stripe с поддержкой банковских карт, Link, Cash App и Amazon Pay.",
        previous: {
            title: "Code Venture",
            subtitle1: "Code Venture",
            subtitle2: "Startup Marketplace",
            format: "landscape",
            img: "/project-cases/code-venture/project-case-code-venture0.avif",
            hoverImg:
                "/project-cases/code-venture/project-case-code-venture1.avif",
            slug: "code_venture",
        },
        next: {
            title: "Moerodnoe",
            subtitle1: "Moerodnoe",
            subtitle2: "Personal Website",
            format: "landscape",
            img: "/project-cases/moerodnoe/project-case-moerodnoe0.avif",
            hoverImg: "/project-cases/moerodnoe/project-case-moerodnoe1.avif",
            slug: "moerodnoe",
        },
    },
    moerodnoe: {
        id: "moerodnoe",
        title: "Moerodnoe",
        subtitle: "Personal Website",
        description:
            "Платформа для профессионального генеалога Дмитрия Грибкова и сообщества хранителей семейной истории. Сайт презентует услуги по восстановлению родословной — от архивных поисков и создания семейного древа до написания фамильной книги и проведения генеалогической экспертизы.",
        link: "https://moerodnoe.com",
        services: "UI/UX Design, Full-Stack Development",
        client: "Dmitriy Gribkov",
        year: "2025",
        images: [
            {
                src: "/project-cases/moerodnoe/project-case-moerodnoe0.avif",
                format: "landscape",
            },
            {
                src: "/project-cases/moerodnoe/project-case-moerodnoe1.avif",
                format: "landscape",
            },
            {
                src: "/project-cases/moerodnoe/project-case-moerodnoe2.avif",
                format: "landscape",
            },
            {
                src: "/project-cases/moerodnoe/project-case-moerodnoe3.avif",
                format: "landscape",
            },
        ],
        concept:
            "Визуальная концепция построена на ассоциациях с наследием, природой и корнями: теплая бежево-зеленая цветовая палитра и фоновые паттерны в виде ветвей дерева. Одной из главных фишек интерфейса является плавающий видео-виджет с обращением основателя, который сопровождает пользователя при скролле сайта, выстраивая личную связь и повышая уровень доверия.",
        scope: "Проектирование и верстка информативного лендинга. Разработка карточек услуг (в формате слайдера/карусели) с подробным описанием тарифов, интеграция галереи видеоработ и отзывов, настройка формы захвата лидов для бесплатной первичной консультации, а также реализация логики «липкого» видеоплеера.",
        previous: {
            title: "Upora",
            subtitle1: "Upora",
            subtitle2: "Digital Products Marketplace",
            format: "landscape",
            img: "/project-cases/upora/project-case-upora0.avif",
            hoverImg: "/project-cases/upora/project-case-upora1.avif",
            slug: "upora",
        },
        next: {
            // впоследствии заполнить
            title: "SkinSpace",
            subtitle1: "SkinSpace",
            subtitle2: "Skin Trading Platform",
            format: "landscape",
            img: "/project-cases/skin-space/project-case-skin-space0.avif",
            hoverImg: "/project-cases/skin-space/project-case-skin-space1.avif",
            slug: "skin_space",
        },
    },
    skin_space: {
        id: "skin_space",
        title: "SkinSpace",
        subtitle: "Skin Trading Platform",
        description:
            "Платформа для мгновенного обмена, покупки и продажи внутриигровых предметов из CS2 и DOTA 2 за реальные деньги. Сервис предлагает пользователям безопасные сделки, низкие комиссии и гарантию на каждый трейд.",
        services: "Full-Stack Development, Steam API Integration",
        client: "Startup",
        year: "2025",
        images: [
            {
                src: "/project-cases/skin-space/project-case-skin-space0.avif",
                format: "landscape",
            },
            {
                src: "/project-cases/skin-space/project-case-skin-space1.avif",
                format: "landscape",
            },
            {
                src: "/project-cases/skin-space/project-case-skin-space2.avif",
                format: "landscape",
            },
            {
                src: "/project-cases/skin-space/project-case-skin-space3.avif",
                format: "landscape",
            },
        ],
        concept:
            "Проект выполнен в классической геймерской эстетике: темный фон (dark-mode) с акцентным «огненным» желтым цветом, перекликающимся с логотипом. Большое внимание уделено качественным 3D-рендерам персонажей и чистому, не перегруженному UI для фокусировки на самих предметах инвентаря.",
        scope: "Разработка промо-блоков главной страницы, сложного интерактивного интерфейса для трейдинга (панель инвентаря с поиском, фильтрацией по играм и редкости предметов), а также функционального профиля пользователя с привязкой Steam-данных (Trade link, API-ключ, Steam ID64).",
        previous: {
            title: "Moerodnoe",
            subtitle1: "Moerodnoe",
            subtitle2: "Personal Website",
            format: "landscape",
            img: "/project-cases/moerodnoe/project-case-moerodnoe0.avif",
            hoverImg: "/project-cases/moerodnoe/project-case-moerodnoe1.avif",
            slug: "moerodnoe",
        },
        next: {
            title: "Two-Pistolets",
            subtitle1: "Two-Pistolets",
            subtitle2: "TG Mini App",
            format: "portrait",
            img: "/project-cases/two-pistolets/project-case-two-pistolets0.avif",
            hoverImg:
                "/project-cases/two-pistolets/project-case-two-pistolets1.avif",
            slug: "two_pistolets",
        },
    },
};

export function getProjectBySlug(slug: string): ProjectDetails | undefined {
    return projectsData[slug];
}
