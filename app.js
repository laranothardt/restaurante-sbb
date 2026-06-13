/* ==========================================================================
   SMASH BURGER BAR (SBB) - INTERACTIVE GAME ENGINE & TRANSLATIONS
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  // ==========================================================================
  // 1. MULTILINGUAL TRANSLATION DICTIONARY
  // ==========================================================================
  const translations = {
    es: {
      nav_menu: "MENÚ",
      nav_delivery: "PEDIDOS",
      nav_about: "SOBRE NOSOTROS",
      nav_contact: "LOCALIZACIÓN",
      insert_coin_cta: "INSERTAR MONEDA",
      btn_menu: "VER MENÚ",
      btn_delivery: "PEDIR ONLINE",
      menu_title: "ELIGE TU PERSONAJE",
      menu_subtitle: "Nuestras emblemáticas smash burgers con queso fundido y costra dorada crujiente.",
      combo_banner_title: "¡SUBE DE NIVEL A COMBO!",
      combo_banner_desc: "Haz tu burger o milanesa Combo con Patatas y Bebida por una puntuación mejorada.",
      original_recipe: "RECETA ORIGINAL",
      highly_recommended: "RECOMENDADO",
      best_seller: "MÁS VENDIDO",
      power_up: "¡POWER UP!",
      fatal_spicy: "PICANTE FATAL",
      price_label: "PUNTUACIÓN / PRECIO:",
      label_sola: "Sola",
      label_combo: "Combo",
      combo_includes: "+ INCLUYE PATATAS Y BEBIDA",
      desc_classic: "Pan brioche, una carne smash y doble cheddar.",
      desc_pacman: "Pan brioche, doble carne smash, cheddar, salsa doble cuarto y pepinillos.",
      desc_play: "Pan brioche, doble carne smash, cheddar y bacon.",
      desc_tetris: "Pan brioche, doble carne smash, cheddar, lechuga, tomate, cebolla morada y mayonesa.",
      desc_mario: "Pan brioche, doble carne smash, cheddar, bacon, bastones de mozzarella y salsa barbacoa.",
      desc_mortal: "Pan brioche, doble carne smash, cheddar, salsa tekken, cebolla morada, cebolla crispy, bacon, pepinillos y ketchup.",
      change_patty_alert: "¡Cambia tu carne smash por una milanesa, medallón de pollo, o medallón de soja sin costo!",
      milanesas_title: "MILANESAS DE JUEGO",
      desc_argentina: "Pan brioche, milanesa, lechuga, tomate, cebolla y mayonesa.",
      desc_americana: "Pan brioche, milanesa, cheddar y bacon.",
      entrantes_title: "ENTRANTES ARCADE",
      extras_title: "POWER-UP EXTRAS",
      drinks_label: "BEBIDAS",
      desserts_label: "POSTRES",
      starter_mozzarella_6: "Bastones de Muzzarella X6",
      starter_fries_sweet: "Patatas Small / Boniatos",
      starter_fries_xl: "Patatas XL",
      starter_fries_cheddar_bacon: "Patatas Cheddar y Bacon",
      starter_fries_chili_jalapenos: "Patatas Chili y Jalapeños",
      starter_tequenos_6: "Tequeños X6",
      starter_chicken_sticks_4: "Sticks de Pollo X4",
      starter_nachos: "Nachos SBB",
      extra_jalapenos: "Jalapeños",
      extra_gluten_free_bread: "Pan sin Gluten",
      extra_onion: "Cebolla",
      extra_crispy_onion: "Cebolla Crispy",
      extra_red_onion: "Cebolla Morada",
      extra_caramelized_onion: "Cebolla Caramelizada",
      extra_iceberg_lettuce: "Lechuga Iceberg",
      extra_romaine_lettuce: "Lechuga Romana",
      extra_pickle: "Pepinillo",
      extra_tomato: "Tomate",
      extra_bbq_sauce: "Salsa Barbacoa",
      extra_triple_sauce: "Salsa Triple",
      extra_roquefort: "Roquefort",
      extra_cheddar_sauce: "Salsa Cheddar",
      extra_egg: "Huevo",
      extra_truffle_sauce: "Salsa Trufada",
      extra_goat_cheese: "Queso de Cabra",
      extra_guacamole: "Guacamole",
      extra_bacon_jam: "Mermelada Bacon",
      extra_bacon: "Bacon",
      extra_mozzarella_sticks_2: "Bastones Muzzarella X2",
      extra_smash_patty: "Extra Carne Smash",
      extra_pulled_pork: "Pulled Pork",
      drink_soda: "Refrescos",
      drink_beer_glass: "Cerveza Copa",
      drink_beer_jar: "Cerveza Jarra Estrella Damm",
      drink_water: "Agua",
      dessert_tiramisu: "Tiramisú Casero",
      dessert_cheesecake: "Cheesecake",
      delivery_title: "ELIGE TU PLATAFORMA DE ENVÍO",
      delivery_subtitle: "Haz tu pedido a domicilio directamente a través de nuestros partners oficiales de confianza.",
      uber_desc: "Nuestras burgers smash directas a tu puerta, calientes y en tiempo récord.",
      delivery_cta: "PEDIR AHORA",
      beverage_title: "APAGA TU SED CON NUESTROS SOCIOS OFICIALES",
      about_term_title: "SBB_HISTORIA.EXE - PROTOCOLO INICIAL",
      about_p1: "En Smash Burger Bar (SBB), nuestra misión comenzó en una habitación llena de luces de neón, máquinas de arcade clásicas y la obsesión por la burger de ternera perfecta.",
      about_p2: "No hacemos burgers estándar. Nuestra técnica de \"smashing\" al estilo arcade consiste en aplastar fuertemente la ternera premium contra la plancha de hierro hirviendo para caramelizar instantáneamente los jugos naturales y crear esos bordes crujientes legendarios.",
      about_p3: "Inspirados por las recreativas de los 80, cada burger es un \"personaje\" icónico y cada bocado es un nuevo High Score. ¡Entra en nuestro mundo y supera el nivel de sabor!",
      review_title: "DEJA TU HIGH SCORE EN GOOGLE",
      review_tagline: "¿DISFRUTASTE LA PARTIDA?",
      review_desc: "Danos una puntuación de 5 estrellas en Google Maps. Tu valoración nos ayuda a desbloquear nuevos niveles, mejorar nuestras recetas y mantener encendidos los neones de nuestras máquinas arcade.",
      review_cta: "DEJAR RESEÑA EN GOOGLE",
      loc_hours_title: "NUESTRAS ESTACIONES DE JUEGO",
      loc_hq: "SOCIOS / SBB CENTRAL BARCELONA",
      hours_title: "HORARIO DE INSERT COIN (APERTURA)",
      days_week: "LUNES - JUEVES:",
      days_weekend: "VIERNES - DOMINGO:",
      footer_desc: "El auténtico sabor del smash burger premium con el alma de los salones recreativos. Vive la experiencia gamer.",
      footer_quick_links: "NAVEGACIÓN",
      footer_social: "CONECTAR",
    },
    ca: {
      nav_menu: "MENÚ",
      nav_delivery: "ENVIAMENT",
      nav_about: "SOBRE NOSALTRES",
      nav_contact: "LOCALITZACIÓ",
      insert_coin_cta: "INSERT COIN",
      btn_menu: "VEURE MENÚ",
      btn_delivery: "DEMANAR ONLINE",
      menu_title: "TRIA EL TEU PERSONATGE",
      menu_subtitle: "Les nostres emblemàtiques smash burgers amb formatge fos i crosta daurada cruixent.",
      combo_banner_title: "¡PUJA DE NIVELL A COMBO!",
      combo_banner_desc: "Fes la teva burger o milanesa Combo amb Patates i Beguda per una puntuació millorada.",
      original_recipe: "RECEPTA ORIGINAL",
      highly_recommended: "RECOMANAT",
      best_seller: "MÉS VENUT",
      power_up: "¡POWER UP!",
      fatal_spicy: "PICANT FATAL",
      price_label: "PUNTUACIÓ / PREU:",
      label_sola: "Sola",
      label_combo: "Combo",
      combo_includes: "+ INCLOU PATATES I BEGUDA",
      desc_classic: "Pan brioche, una carn smash i doble cheddar.",
      desc_pacman: "Pan brioche, doble carn smash, cheddar, salsa doble cuarto i pepinets.",
      desc_play: "Pan brioche, doble carn smash, cheddar i bacó.",
      desc_tetris: "Pan brioche, doble carn smash, cheddar, enciam, tomàquet, ceba morada i mayonesa.",
      desc_mario: "Pan brioche, doble carn smash, cheddar, bacó, bastons de mozzarella i salsa barbacoa.",
      desc_mortal: "Pan brioche, doble carn smash, cheddar, salsa tekken, ceba morada, ceba crispy, bacó, pepinets i ketchup.",
      change_patty_alert: "Canvia la teva carn smash per una milanesa, medalló de pollastre, o medalló de soja sense cost!",
      milanesas_title: "MILANESES DE JOC",
      desc_argentina: "Pan brioche, milanesa, enciam, tomàquet, ceba i mayonesa.",
      desc_americana: "Pan brioche, milanesa, cheddar i bacó.",
      entrantes_title: "ENTRANTS ARCADE",
      extras_title: "POWER-UP EXTRAS",
      drinks_label: "BEGUDES",
      desserts_label: "POSTRES",
      starter_mozzarella_6: "Bastons de Mozzarella X6",
      starter_fries_sweet: "Patates Small / Moniatos",
      starter_fries_xl: "Patates XL",
      starter_fries_cheddar_bacon: "Patates Cheddar i Bacó",
      starter_fries_chili_jalapenos: "Patates Chili i Jalapeños",
      starter_tequenos_6: "Tequeños X6",
      starter_chicken_sticks_4: "Sticks de Pollastre X4",
      starter_nachos: "Nachos SBB",
      extra_jalapenos: "Jalapeños",
      extra_gluten_free_bread: "Pa sense Gluten",
      extra_onion: "Ceba",
      extra_crispy_onion: "Ceba Crispy",
      extra_red_onion: "Ceba Morada",
      extra_caramelized_onion: "Ceba Caramel·litzada",
      extra_iceberg_lettuce: "Enciam Iceberg",
      extra_romaine_lettuce: "Enciam Romà",
      extra_pickle: "Cogombret",
      extra_tomato: "Tomàquet",
      extra_bbq_sauce: "Salsa Barbacoa",
      extra_triple_sauce: "Salsa Triple",
      extra_roquefort: "Roquefort",
      extra_cheddar_sauce: "Salsa Cheddar",
      extra_egg: "Ou",
      extra_truffle_sauce: "Salsa Trufada",
      extra_goat_cheese: "Formatge de Cabra",
      extra_guacamole: "Guacamole",
      extra_bacon_jam: "Melmelada de Bacó",
      extra_bacon: "Bacó",
      extra_mozzarella_sticks_2: "Bastons de Mozzarella X2",
      extra_smash_patty: "Extra Carn Smash",
      extra_pulled_pork: "Pulled Pork",
      drink_soda: "Refrescs",
      drink_beer_glass: "Cervesa Copa",
      drink_beer_jar: "Cervesa Gerra Estrella Damm",
      drink_water: "Aigua",
      dessert_tiramisu: "Tiramisú Casolà",
      dessert_cheesecake: "Cheesecake",
      delivery_title: "TRIA LA TEVA PLATAFORMA D'ENVIAMENT",
      delivery_subtitle: "Fes la teva comanda a domicili directament a través dels nostres partners oficials de confiança.",
      uber_desc: "Les nostres burgers smash directes a la teva porta, calentes i en temps rècord.",
      delivery_cta: "DEMANAR ARA",
      beverage_title: "APAGA LA TEVA SET AMB ELS NOSTRES SOCIS OFICIALS",
      about_term_title: "SBB_HISTORIA.EXE - PROTOCOL INICIAL",
      about_p1: "A Smash Burger Bar (SBB), la nostra missió va començar en una habitació plena de llums de neó, màquines d'arcade clàssiques i l'obsessió per la burger de vedella perfecta.",
      about_p2: "No fem burgers estàndard. La nostra tècnica de \"smashing\" a l'estil arcade consisteix a aixafar fortament la vedella premium contra la planxa de ferro bullint per caramel·litzar instantàniament els sucs naturals i crear aquestes vores cruixents llegendàries.",
      about_p3: "Inspirats pels recreatius dels 80, cada burger és un \"personatge\" icònic i cada mossegada és un nou High Score. Entra al nostre món i supera el nivell de sabor!",
      review_title: "DEIXA EL TEU HIGH SCORE A GOOGLE",
      review_tagline: "HAS GAUDIR DE LA PARTIDA?",
      review_desc: "Dóna'ns una puntuació de 5 estrelles a Google Maps. La teva valoració ens ajuda a desbloquejar nous nivells, millorar les nostres receptes i mantenir encesos els neons de les nostres màquines arcade.",
      review_cta: "DEIXAR RESSENYA A GOOGLE",
      loc_hours_title: "LES NOSTRES ESTACIONS DE JOC",
      loc_hq: "SOCIS / SBB CENTRAL BARCELONA",
      hours_title: "HORARI D'INSERT COIN (OBERTURA)",
      days_week: "DILLUNS - DIJOUS:",
      days_weekend: "DIVENDRES - DIUMENGE:",
      footer_desc: "L'autèntic sabor del smash burger premium amb l'ànima dels salons recreatius. Viu l'experiència gamer.",
      footer_quick_links: "NAVEGACIÓ",
      footer_social: "CONNECTAR"
    },
    en: {
      nav_menu: "MENU",
      nav_delivery: "DELIVERY",
      nav_about: "ABOUT US",
      nav_contact: "LOCATION",
      insert_coin_cta: "INSERT COIN",
      btn_menu: "VIEW MENU",
      btn_delivery: "ORDER ONLINE",
      menu_title: "CHOOSE YOUR CHARACTER",
      menu_subtitle: "Our legendary smash burgers with melted cheese and crispy caramelized edges.",
      combo_banner_title: "LEVEL UP TO COMBO!",
      combo_banner_desc: "Make your burger or milanesa a Combo with Fries and a Drink for an enhanced score.",
      original_recipe: "ORIGINAL RECIPE",
      highly_recommended: "RECOMMENDED",
      best_seller: "BEST SELLER",
      power_up: "POWER UP!",
      fatal_spicy: "FATAL SPICY",
      price_label: "SCORE / PRICE:",
      label_sola: "Single",
      label_combo: "Combo",
      combo_includes: "+ INCLUDES FRIES & DRINK",
      desc_classic: "Brioche bun, one smash beef patty, and double cheddar.",
      desc_pacman: "Brioche bun, double smash beef, cheddar, double quarter sauce, and pickles.",
      desc_play: "Brioche bun, double smash beef, cheddar, and bacon.",
      desc_tetris: "Brioche bun, double smash beef, cheddar, lettuce, tomato, red onion, and mayo.",
      desc_mario: "Brioche bun, double smash beef, cheddar, bacon, mozzarella sticks, and BBQ sauce.",
      desc_mortal: "Brioche bun, double smash beef, cheddar, tekken sauce, red onion, crispy onion, bacon, pickles, and ketchup.",
      change_patty_alert: "Swap your smash beef for a milanesa, chicken patty, or soy patty at no extra cost!",
      milanesas_title: "GAMING MILANESAS",
      desc_argentina: "Brioche bun, milanesa, lettuce, tomato, onion, and mayo.",
      desc_americana: "Brioche bun, milanesa, cheddar, and bacon.",
      entrantes_title: "ARCADE STARTERS",
      extras_title: "POWER-UP EXTRAS",
      drinks_label: "DRINKS",
      desserts_label: "DESSERTS",
      starter_mozzarella_6: "Mozzarella Sticks X6",
      starter_fries_sweet: "Small Fries / Sweet Potatoes",
      starter_fries_xl: "XL Fries",
      starter_fries_cheddar_bacon: "Cheddar & Bacon Fries",
      starter_fries_chili_jalapenos: "Chili & Jalapeño Fries",
      starter_tequenos_6: "Tequeños X6",
      starter_chicken_sticks_4: "Chicken Sticks X4",
      starter_nachos: "SBB Nachos",
      extra_jalapenos: "Jalapeños",
      extra_gluten_free_bread: "Gluten-Free Bun",
      extra_onion: "Onion",
      extra_crispy_onion: "Crispy Onion",
      extra_red_onion: "Red Onion",
      extra_caramelized_onion: "Caramelized Onion",
      extra_iceberg_lettuce: "Iceberg Lettuce",
      extra_romaine_lettuce: "Romaine Lettuce",
      extra_pickle: "Pickles",
      extra_tomato: "Tomato",
      extra_bbq_sauce: "BBQ Sauce",
      extra_triple_sauce: "Triple Sauce",
      extra_roquefort: "Roquefort",
      extra_cheddar_sauce: "Cheddar Sauce",
      extra_egg: "Egg",
      extra_truffle_sauce: "Truffle Sauce",
      extra_goat_cheese: "Goat Cheese",
      extra_guacamole: "Guacamole",
      extra_bacon_jam: "Bacon Jam",
      extra_bacon: "Bacon",
      extra_mozzarella_sticks_2: "Mozzarella Sticks X2",
      extra_smash_patty: "Extra Smash Patty",
      extra_pulled_pork: "Pulled Pork",
      drink_soda: "Soft Drinks",
      drink_beer_glass: "Glass of Beer",
      drink_beer_jar: "Estrella Damm Beer Pitcher",
      drink_water: "Water",
      dessert_tiramisu: "Homemade Tiramisu",
      dessert_cheesecake: "Cheesecake",
      delivery_title: "CHOOSE YOUR DELIVERY PLATFORM",
      delivery_subtitle: "Get your smash burgers delivered directly to your base through our official delivery partners.",
      uber_desc: "Our smash burgers straight to your door, piping hot and in record time.",
      delivery_cta: "ORDER NOW",
      beverage_title: "BEAT YOUR THIRST WITH OUR OFFICIAL PARTNERS",
      about_term_title: "SBB_STORY.EXE - STORY PROTOCOL",
      about_p1: "At Smash Burger Bar (SBB), our quest began in a room buzzing with neon tubes, vintage cabinet screens, and the obsession with the ultimate beef patty.",
      about_p2: "We don't do basic burgers. Our signature arcade-style smash technique presses premium beef firmly against hot cast-iron grills, instantly caramelizing natural juices to seal in legendary crispy edges.",
      about_p3: "Inspired by 80s arcade rooms, every burger is an iconic \"character\" and every bite is a new High Score. Enter our realm and level up your taste buds!",
      review_title: "LEAVE YOUR HIGH SCORE ON GOOGLE",
      review_tagline: "DID YOU ENJOY THE GAME?",
      review_desc: "Rate us 5 stars on Google Maps! Your review helps us unlock new levels, improve our retro recipes, and keep our arcade machine lights burning.",
      review_cta: "WRITE A GOOGLE REVIEW",
      loc_hours_title: "OUR GAME STATIONS",
      loc_hq: "HQ / SBB CENTRAL BARCELONA",
      hours_title: "INSERT COIN HOURS (OPENING HOURS)",
      days_week: "MONDAY - THURSDAY:",
      days_weekend: "FRIDAY - SUNDAY:",
      footer_desc: "The authentic flavor of premium smash burgers with the soul of vintage arcade recreations. Live the gaming experience.",
      footer_quick_links: "NAVIGATION",
      footer_social: "CONNECT"
    },
    de: {
      nav_menu: "MENÜ",
      nav_delivery: "LIEFERUNG",
      nav_about: "ÜBER UNS",
      nav_contact: "STANDORT",
      insert_coin_cta: "COIN EINWERFEN",
      btn_menu: "MENÜ ANSEHEN",
      btn_delivery: "ONLINE BESTELLEN",
      menu_title: "WÄHLE DEINEN CHARAKTER",
      menu_subtitle: "Unsere ikonischen Smash-Burger mit geschmolzenem Käse und knusprigen, karamellisierten Rändern.",
      combo_banner_title: "LEVEL-UP ZUM COMBO!",
      combo_banner_desc: "Mache deinen Burger oder dein Schnitzel zum Combo mit Pommes & Getränk für mehr Punkte.",
      original_recipe: "ORIGINALREZEPT",
      highly_recommended: "EMPFEHLENSWERT",
      best_seller: "BESTSELLER",
      power_up: "POWER UP!",
      fatal_spicy: "SCHARF FATALITY",
      price_label: "WERTUNG / PREIS:",
      label_sola: "Einzeln",
      label_combo: "Combo",
      combo_includes: "+ INKLUSIVE POMMES & GETRÄNK",
      desc_classic: "Brioche-Brötchen, ein Smash-Beef-Patty und doppelter Cheddar.",
      desc_pacman: "Brioche-Brötchen, doppeltes Smash-Beef, Cheddar, doppelte Viertel-Sauce und Gurken.",
      desc_play: "Brioche-Brötchen, doppeltes Smash-Beef, Cheddar und Bacon.",
      desc_tetris: "Brioche-Brötchen, doppeltes Smash-Beef, Cheddar, Salat, Tomaten, rote Zwiebeln und Mayo.",
      desc_mario: "Brioche-Brötchen, doppeltes Smash-Beef, Cheddar, Bacon, Mozzarella-Sticks und BBQ-Sauce.",
      desc_mortal: "Brioche-Brötchen, doppeltes Smash-Beef, Cheddar, Tekken-Sauce, rote Zwiebeln, Röstzwiebeln, Bacon, Gurken und Ketchup.",
      change_patty_alert: "Tausche dein Smash-Beef kostenlos gegen ein Schnitzel, Hähnchen-Patty oder Soja-Patty!",
      milanesas_title: "GAMING-SCHNITZEL",
      desc_argentina: "Brioche-Brötchen, Schnitzel, Salat, Tomaten, Zwiebeln und Mayo.",
      desc_americana: "Brioche-Brötchen, Schnitzel, Cheddar und Bacon.",
      entrantes_title: "ARCADE-VORSPEISEN",
      extras_title: "POWER-UP EXTRAS",
      drinks_label: "GETRÄNKE",
      desserts_label: "DESSERTS",
      starter_mozzarella_6: "Mozzarella-Sticks X6",
      starter_fries_sweet: "Kleine Pommes / Süßkartoffeln",
      starter_fries_xl: "XL Pommes",
      starter_fries_cheddar_bacon: "Cheddar & Bacon Pommes",
      starter_fries_chili_jalapenos: "Chili & Jalapeño Pommes",
      starter_tequenos_6: "Tequeños X6",
      starter_chicken_sticks_4: "Hähnchen-Sticks X4",
      starter_nachos: "SBB Nachos",
      extra_jalapenos: "Jalapeños",
      extra_gluten_free_bread: "Glutenfreies Brot",
      extra_onion: "Zwiebeln",
      extra_crispy_onion: "Röstzwiebeln",
      extra_red_onion: "Rote Zwiebeln",
      extra_caramelized_onion: "Karamellisierte Zwiebeln",
      extra_iceberg_lettuce: "Eisbergsalat",
      extra_romaine_lettuce: "Römersalat",
      extra_pickle: "Gurken",
      extra_tomato: "Tomaten",
      extra_bbq_sauce: "BBQ-Sauce",
      extra_triple_sauce: "Triple-Sauce",
      extra_roquefort: "Roquefort",
      extra_cheddar_sauce: "Cheddar-Sauce",
      extra_egg: "Ei",
      extra_truffle_sauce: "Trüffel-Sauce",
      extra_goat_cheese: "Ziegenkäse",
      extra_guacamole: "Guacamole",
      extra_bacon_jam: "Bacon-Marmelade",
      extra_bacon: "Bacon",
      extra_mozzarella_sticks_2: "Mozzarella-Sticks X2",
      extra_smash_patty: "Extra Smash-Patty",
      extra_pulled_pork: "Pulled Pork",
      drink_soda: "Erfrischungsgetränke",
      drink_beer_glass: "Glas Bier",
      drink_beer_jar: "Krug Estrella Damm Bier",
      drink_water: "Wasser",
      dessert_tiramisu: "Hausgemachtes Tiramisu",
      dessert_cheesecake: "Käsekuchen",
      delivery_title: "WÄHLE DEINEN LIEFERDIENST",
      delivery_subtitle: "Lass dir deine Smash-Burger über unsere offiziellen Lieferpartner direkt nach Hause liefern.",
      uber_desc: "Unsere Smash-Burger direkt an deine Tür, kochend heiß und in Rekordzeit.",
      delivery_cta: "JETZT BESTELLEN",
      beverage_title: "STILLE DEINEN DURST MIT UNSEREN OFFIZIELLEN PARTNERN",
      about_term_title: "SBB_STORY.EXE - HISTORIE-PROTOKOLL",
      about_p1: "Bei der Smash Burger Bar (SBB) begann unsere mission in einem Raum voller Neonröhren, Retro-Arcade-Möbeln und der Obsession für den perfekten Rindfleisch-Patty.",
      about_p2: "Wir machen keine Standard-Burger. Unsere spezielle Smash-Technik presst erstklassiges Rindfleisch fest auf kochend heiße Gusseisenplatten, wodurch die natürlichen Säfte sofort karamellisieren und legendäre knusprige Ränder entstehen.",
      about_p3: "Inspiriert von den Spielhallen der 80er Jahre ist jeder Burger ein ikonischer \"Charakter\" und jeder Bissen ein neuer Highscore. Tritt ein und erreiche das nächste Geschmackslevel!",
      review_title: "SCHREIBE HIGHSCORE AUF GOOGLE",
      review_tagline: "HAT DIR DAS SPIEL GEFALLEN?",
      review_desc: "Bewerte uns mit 5 Sternen auf Google Maps! Deine Bewertung hilft uns, neue Levels freizuschalten, unsere Rezepte zu verbessern und die Lichter unserer Spielautomaten am Brennen zu halten.",
      review_cta: "BEWERTUNG AUF GOOGLE SCHREIBEN",
      loc_hours_title: "UNSERE SPIELSTATIONEN",
      loc_hq: "SITZ / SBB ZENTRALE BARCELONA",
      hours_title: "ÖFFNUNGSZEITEN (COIN EINWERFEN)",
      days_week: "MONTAG - DONNERSTAG:",
      days_weekend: "FREITAG - SONNTAG:",
      footer_desc: "Der authentische Geschmack von Premium-Smash-Burgern mit der Seele von Retro-Arcade-Hallen. Erlebe das Gaming-Gefühl.",
      footer_quick_links: "NAVIGATION",
      footer_social: "VERBINDUNG"
    },
    fr: {
      nav_menu: "MENU",
      nav_delivery: "LIVRAISON",
      nav_about: "À PROPOS",
      nav_contact: "ADRESSE",
      insert_coin_cta: "INSÉRER PIÈCE",
      btn_menu: "VOIR LE MENU",
      btn_delivery: "COMMANDER EN LIGNE",
      menu_title: "CHOISISSEZ VOTRE PERSONNAGE",
      menu_subtitle: "Nos smash burgers emblématiques avec fromage fondu et bords croustillants caramélisés.",
      combo_banner_title: "PASSEZ EN COMBO !",
      combo_banner_desc: "Transformez votre burger ou milanesa en Combo avec Frites & Boisson pour un score boosté.",
      original_recipe: "RECETTE ORIGINALE",
      highly_recommended: "RECOMMANDÉ",
      best_seller: "MEILLEURE VENTE",
      power_up: "POWER UP !",
      fatal_spicy: "ÉPICE FATAL",
      price_label: "SCORE / TARIF :",
      label_sola: "Seul",
      label_combo: "Combo",
      combo_includes: "+ FRITES & BOISSON INCLUSES",
      desc_classic: "Pain brioche, un steak smashé et double cheddar.",
      desc_pacman: "Pain brioche, double steak smashé, cheddar, sauce double quart et cornichons.",
      desc_play: "Pain brioche, double steak smashé, cheddar et bacon.",
      desc_tetris: "Pain brioche, double steak smashé, cheddar, salade, tomate, oignon rouge et mayo.",
      desc_mario: "Pain brioche, double steak smashé, cheddar, bacon, bâtonnets de mozzarella et sauce BBQ.",
      desc_mortal: "Pain brioche, double steak smashé, cheddar, sauce tekken, oignon rouge, oignon crispy, bacon, cornichons et ketchup.",
      change_patty_alert: "Remplacez votre steak smashé par une milanesa, un pavé de poulet ou de soja sans frais !",
      milanesas_title: "MILANESAS DU JEU",
      desc_argentina: "Pain brioche, milanesa, salade, tomate, oignon et mayo.",
      desc_americana: "Pain brioche, milanesa, cheddar et bacon.",
      entrantes_title: "ENTRÉES ARCADE",
      extras_title: "EXTRAS POWER-UP",
      drinks_label: "BOISSONS",
      desserts_label: "DESSERTS",
      starter_mozzarella_6: "Bâtonnets de Mozzarella X6",
      starter_fries_sweet: "Petites Frites / Patates Douces",
      starter_fries_xl: "Frites XL",
      starter_fries_cheddar_bacon: "Frites Cheddar & Bacon",
      starter_fries_chili_jalapenos: "Frites Chili & Jalapeños",
      starter_tequenos_6: "Tequeños X6",
      starter_chicken_sticks_4: "Bâtonnets de Poulet X4",
      starter_nachos: "Nachos SBB",
      extra_jalapenos: "Jalapeños",
      extra_gluten_free_bread: "Pain Sans Gluten",
      extra_onion: "Oignon",
      extra_crispy_onion: "Oignon Crispy",
      extra_red_onion: "Oignon Rouge",
      extra_caramelized_onion: "Oignon Caramélisé",
      extra_iceberg_lettuce: "Laitue Iceberg",
      extra_romaine_lettuce: "Laitue Romaine",
      extra_pickle: "Cornichons",
      extra_tomato: "Tomate",
      extra_bbq_sauce: "Sauce Barbecue",
      extra_triple_sauce: "Sauce Triple",
      extra_roquefort: "Roquefort",
      extra_cheddar_sauce: "Sauce Cheddar",
      extra_egg: "Œuf",
      extra_truffle_sauce: "Sauce à la Truffe",
      extra_goat_cheese: "Fromage de Chèvre",
      extra_guacamole: "Guacamole",
      extra_bacon_jam: "Confiture de Bacon",
      extra_bacon: "Bacon",
      extra_mozzarella_sticks_2: "Bâtonnets de Mozzarella X2",
      extra_smash_patty: "Steak Smash Supplémentaire",
      extra_pulled_pork: "Porc Effiloché (Pulled Pork)",
      drink_soda: "Boissons Gazeuses",
      drink_beer_glass: "Verre de Bière",
      drink_beer_jar: "Pichet de Bière Estrella Damm",
      drink_water: "Eau",
      dessert_tiramisu: "Tiramisu Maison",
      dessert_cheesecake: "Cheesecake",
      delivery_title: "CHOISISSEZ VOTRE APPLICATION DE LIVRAISON",
      delivery_subtitle: "Faites livrer vos smash burgers directement chez vous via nos partenaires de livraison officiels.",
      uber_desc: "Nos smash burgers directement chez vous, bien chauds et en un temps record.",
      delivery_cta: "COMMANDER",
      beverage_title: "ÉTEIGNEZ VOTRE SOIF AVEC NOS PARTENAIRES OFFICIELS",
      about_term_title: "SBB_STORY.EXE - PROTOCOLE D'HISTOIRE",
      about_p1: "Chez Smash Burger Bar (SBB), notre quête a débuté dans une pièce vrombissante de néons, d'écrans cathodiques et d'obsession pour le steak parfait.",
      about_p2: "Nous ne faisons pas de burgers classiques. Notre technique de smash presse fermement le bœuf premium contre des plaques brûlantes, caramélisant instantanément les jus et créant ces bords dentelés croustillants de légende.",
      about_p3: "Inspiré par les salles d'arcade des années 80, chaque burger est un \"personnage\" iconique et chaque bouchée est un nouveau High Score. Entrez dans notre monde et passez au niveau supérieur !",
      review_title: "LAISSE TON HIGH SCORE SUR GOOGLE",
      review_tagline: "AS-TU AIMÉ LA PARTIE ?",
      review_desc: "Donnez-nous une note de 5 étoiles sur Google Maps ! Votre avis nous aide à débloquer de nouveaux niveaux, améliorer nos recettes rétro et garder allumés les néons de nos bornes d'arcade.",
      review_cta: "LAISSER UN AVIS SUR GOOGLE",
      loc_hours_title: "NOS STATIONS DE JEU",
      loc_hq: "QG / SBB CENTRAL BARCELONA",
      hours_title: "HORAIRES D'INSERTION DE PIÈCE (OUVERTURE)",
      days_week: "LUNDI - JEUDI :",
      days_weekend: "VENDREDI - DIMANCHE :",
      footer_desc: "Le goût authentique des smash burgers d'exception avec l'esprit des salles d'arcade rétro. Vivez l'expérience gaming.",
      footer_quick_links: "NAVIGATION",
      footer_social: "RÉSEAUX"
    }
  };

  // Default Language State
  let currentLanguage = 'es';

  // Translation Function
  function translateSite(lang) {
    if (!translations[lang]) return;

    currentLanguage = lang;
    document.documentElement.lang = lang;
    document.getElementById('currentLang').textContent = lang.toUpperCase();

    // Trigger visual CRT Glitch overlay refresh
    document.body.classList.add('translation-glitch');
    setTimeout(() => {
      document.body.classList.remove('translation-glitch');
    }, 150);

    const elementsToTranslate = document.querySelectorAll('[data-i18n]');
    elementsToTranslate.forEach(elem => {
      const translationKey = elem.getAttribute('data-i18n');
      if (translations[lang][translationKey]) {
        // Handle input placeholders specifically
        if (elem.tagName === 'INPUT' || elem.tagName === 'TEXTAREA') {
          elem.placeholder = translations[lang][translationKey];
        } else {
          elem.textContent = translations[lang][translationKey];
        }
      }
    });

    // Recalculate Menu Prices
    recalculateAllCards();
  }

  // Language Dropdown Toggle
  const langBtn = document.getElementById('langBtn');
  const langDropdown = document.getElementById('langDropdown');

  langBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    langDropdown.classList.toggle('active');
  });

  document.addEventListener('click', () => {
    langDropdown.classList.remove('active');
  });

  const langOptions = document.querySelectorAll('.lang-option');
  langOptions.forEach(opt => {
    opt.addEventListener('click', (e) => {
      const selectedLang = opt.getAttribute('data-lang');
      translateSite(selectedLang);
      langDropdown.classList.remove('active');
    });
  });


  // ==========================================================================
  // 2. RETRO MENU TABS CONTROLLER
  // ==========================================================================
  const tabButtons = document.querySelectorAll('.menu-tab-btn');
  const tabPanes = document.querySelectorAll('.menu-tab-pane');

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetTab = btn.getAttribute('data-tab');

      // Update active classes
      tabButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Glitch visual effect on changing tabs
      document.body.classList.add('translation-glitch');
      setTimeout(() => {
        document.body.classList.remove('translation-glitch');
      }, 100);

      // Toggle visibilities
      tabPanes.forEach(pane => {
        if (pane.id === `tab-${targetTab}`) {
          pane.classList.add('active');
        } else {
          pane.classList.remove('active');
        }
      });
    });
  });


  // ==========================================================================
  // 3. DYNAMIC CARD COMBO SWITCHES (BURGERS & MILANESAS)
  // ==========================================================================

  // Prices map (1-6 are Burgers, 7-8 are Milanesas)
  const itemPrices = {
    1: { base: 7.90, comboOffset: 2.00 }, // Cheese Burger (Combo: 9.90)
    2: { base: 10.50, comboOffset: 2.40 }, // Pacman (Combo: 12.90)
    3: { base: 10.50, comboOffset: 3.00 }, // Play (Combo: 13.50)
    4: { base: 10.50, comboOffset: 3.00 }, // Tetris (Combo: 13.50)
    5: { base: 12.90, comboOffset: 2.60 }, // Super Mario (Combo: 15.50)
    6: { base: 12.90, comboOffset: 2.60 }, // Mortal (Combo: 15.50)
    7: { base: 13.50, comboOffset: 3.00 }, // Argentina (Combo: 16.50)
    8: { base: 11.00, comboOffset: 3.00 }  // Americana (Combo: 14.00)
  };

  const comboCards = document.querySelectorAll('.menu-card[data-id]');

  comboCards.forEach(card => {
    const cardId = parseInt(card.getAttribute('data-id'));
    const toggleBtn = card.querySelector('.combo-toggle-btn');
    const labelSola = card.querySelector('.text-sola');
    const labelCombo = card.querySelector('.text-combo');
    const priceVal = card.querySelector('.price-val');
    const comboIncludes = card.querySelector('.combo-includes');

    // Make Card Toggle Action
    function toggleCardState(isCombo) {
      const pricing = itemPrices[cardId];
      if (!pricing) return;

      if (isCombo) {
        toggleBtn.classList.add('active');
        labelSola.classList.remove('active');
        labelCombo.classList.add('active');
        if (comboIncludes) comboIncludes.classList.remove('hidden');

        // Calculate Total
        const total = (pricing.base + pricing.comboOffset).toFixed(2);
        priceVal.textContent = `${total}€`;
      } else {
        toggleBtn.classList.remove('active');
        labelSola.classList.add('active');
        labelCombo.classList.remove('active');
        if (comboIncludes) comboIncludes.classList.add('hidden');

        priceVal.textContent = `${pricing.base.toFixed(2)}€`;
      }
    }

    // Toggle button listener
    toggleBtn.addEventListener('click', () => {
      const isActive = toggleBtn.classList.contains('active');
      toggleCardState(!isActive);
    });

    // Label clicks
    labelSola.addEventListener('click', () => toggleCardState(false));
    labelCombo.addEventListener('click', () => toggleCardState(true));
  });

  function recalculateAllCards() {
    comboCards.forEach(card => {
      const cardId = parseInt(card.getAttribute('data-id'));
      const toggleBtn = card.querySelector('.combo-toggle-btn');
      const isCombo = toggleBtn.classList.contains('active');
      const pricing = itemPrices[cardId];
      const priceVal = card.querySelector('.price-val');

      if (pricing) {
        if (isCombo) {
          priceVal.textContent = `${(pricing.base + pricing.comboOffset).toFixed(2)}€`;
        } else {
          priceVal.textContent = `${pricing.base.toFixed(2)}€`;
        }
      }
    });
  }

  // ==========================================================================
  // 5. MOBILE HAMBURGER D-PAD
  // ==========================================================================

  // Mobile navigation drawer toggle
  const mobileToggle = document.getElementById('mobileToggle');
  const navMobile = document.getElementById('navMobile');
  const mobileLinks = document.querySelectorAll('.mobile-link');

  if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
      mobileToggle.classList.toggle('active');
      navMobile.classList.toggle('active');
    });
  }

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileToggle.classList.remove('active');
      navMobile.classList.remove('active');
    });
  });
});
