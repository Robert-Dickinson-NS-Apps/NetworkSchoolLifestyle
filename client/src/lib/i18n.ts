export interface Translation {
  // Header
  siteTitle: string;
  
  // Hero Section
  heroTitle: string;
  heroSubtitle: string;
  applyNow: string;
  
  // Advantages
  advantagesTitle: string;
  
  // Individual advantage boxes
  fitness: {
    title: string;
    description: string;
  };
  pools: {
    title: string;
    description: string;
  };
  nutrition: {
    title: string;
    description: string;
  };
  morningRuck: {
    title: string;
    description: string;
  };
  smartYoungPeople: {
    title: string;
    description: string;
  };
  aiClasses: {
    title: string;
    description: string;
  };
  bookClubs: {
    title: string;
    description: string;
  };
  coding: {
    title: string;
    description: string;
  };
  networkStates: {
    title: string;
    description: string;
  };
  improv: {
    title: string;
    description: string;
  };
  countryRock: {
    title: string;
    description: string;
  };
  blueprintFood: {
    title: string;
    description: string;
  };
  lifestyle: {
    title: string;
    description: string;
  };
  betterPerson: {
    title: string;
    description: string;
  };
  globalCommunity: {
    title: string;
    description: string;
  };
  cryptoWeb3: {
    title: string;
    description: string;
  };
  videoCreation: {
    title: string;
    description: string;
  };
  
  // Location section
  perfectLocation: string;
  locationDescription: string;
  toSingapore: string;
  minutes: string;
  tropical: string;
  perfectWeather: string;
  modern: string;
  forestCity: string;
  
  // Contact forms
  contactTitle: string;
  contactDescription: string;
  nameLabel: string;
  emailLabel: string;
  phoneLabel: string;
  visitTypeLabel: string;
  visitTypePlaceholder: string;
  visitOptions: {
    campus: string;
    virtual: string;
    info: string;
  };
  messageLabel: string;
  submitInquiry: string;
  
  newsletterTitle: string;
  newsletterDescription: string;
  subscribeNewsletter: string;
  
  // Footer
  footerDescription: string;
  
  // Messages
  inquirySent: string;
  subscriptionSuccess: string;
  errorMessage: string;
}

export const translations: Record<string, Translation> = {
  en: {
    siteTitle: "Network School Forest City",
    heroTitle: "Life After 70 at Network School",
    heroSubtitle: "Discover the advantages of living at Network School in Forest City, Malaysia - just 15 minutes across a short bridge to Singapore",
    applyNow: "Apply Now",
    advantagesTitle: "14 Features I like at Network School",
    
    fitness: {
      title: "State-of-the-Art Fitness Facilities",
      description: "Modern gym equipment designed for seniors. Personal trainers specialized in age-appropriate fitness programs."
    },
    pools: {
      title: "Beautiful Swimming Pools",
      description: "Multiple pools including heated options. Perfect for low-impact exercise and relaxation in tropical weather."
    },
    nutrition: {
      title: "Blueprint Food Nutrition",
      description: "Scientifically optimized meals designed for longevity. Fresh, healthy ingredients prepared by expert chefs."
    },
    morningRuck: {
      title: "Morning Ruck Walks",
      description: "Start your day with energizing group walks. Build strength and community while exploring Forest City."
    },
    smartYoungPeople: {
      title: "Smart Younger People",
      description: "Get fresh perspectives on life from brilliant young minds. Learn from each other and stay mentally sharp."
    },
    aiClasses: {
      title: "AI Classes",
      description: "Learn about artificial intelligence in practical, easy-to-understand ways. Stay current with the future of technology."
    },
    bookClubs: {
      title: "Book Classes",
      description: "Discuss great books with fellow lifelong learners. Expand your mind through literature and ideas."
    },
    coding: {
      title: "Vibe Coding",
      description: "Learn new tools like vibe coding - modern programming made accessible. Create and build in the digital age."
    },
    networkStates: {
      title: "Build Network States",
      description: "Help design the future by building ideas for other network states. Be part of creating tomorrow's communities."
    },
    improv: {
      title: "Improv Classes",
      description: "Develop creativity and confidence through improvisational theater. Have fun while building communication skills."
    },
    countryRock: {
      title: "Country Rock Nights",
      description: "Enjoy live music and dancing. Connect with others through the universal language of music."
    },
    blueprintFood: {
      title: "Nutritious Lifestyle",
      description: "Follow evidence-based nutrition protocols. Optimize your health with scientifically-backed meal plans."
    },
    lifestyle: {
      title: "Active Social Lifestyle",
      description: "Participate in diverse activities and events. Build meaningful friendships and stay socially engaged."
    },
    betterPerson: {
      title: "How to Be a Better Person",
      description: "Focus on personal growth and development. Learn strategies for living your best life after 70."
    },
    globalCommunity: {
      title: "People from All Over the World",
      description: "Meet fascinating people from dozens of different countries. Expand your worldview through diverse friendships."
    },
    cryptoWeb3: {
      title: "Learn Crypto & Web3",
      description: "Understand the future of money and the internet. Get expert guidance on digital currencies and blockchain technology."
    },
    videoCreation: {
      title: "Create Better Vertical Videos",
      description: "Learn to make engaging and shorter vertical videos. Master modern video creation techniques for social media and personal projects."
    },
    
    perfectLocation: "Perfect Location",
    locationDescription: "Located in Malaysia, just across a short bridge to Singapore",
    toSingapore: "To Singapore",
    minutes: "15 Minutes",
    tropical: "Tropical",
    perfectWeather: "Perfect Weather",
    modern: "Modern",
    forestCity: "Forest City",
    
    contactTitle: "Schedule Your Campus Visit",
    contactDescription: "Experience Network School lifestyle firsthand. Book a tour of our Forest City campus.",
    nameLabel: "Full Name",
    emailLabel: "Email Address",
    phoneLabel: "Phone Number",
    visitTypeLabel: "Visit Type",
    visitTypePlaceholder: "Select visit type",
    visitOptions: {
      campus: "Campus Tour",
      virtual: "Virtual Tour",
      info: "Information Session"
    },
    messageLabel: "Message (Optional)",
    submitInquiry: "Submit Inquiry",
    
    newsletterTitle: "Stay Connected",
    newsletterDescription: "Get updates about Network School events and community news.",
    subscribeNewsletter: "Subscribe to Newsletter",
    
    footerDescription: "Forest City, Malaysia • Your next chapter starts here",
    
    inquirySent: "Thank you! Your inquiry has been sent successfully.",
    subscriptionSuccess: "Thank you for subscribing to our newsletter!",
    errorMessage: "Something went wrong. Please try again."
  },
  
  es: {
    siteTitle: "Network School Forest City",
    heroTitle: "La Vida Después de los 70 en Network School",
    heroSubtitle: "Descubre las ventajas de vivir en Network School en Forest City, Malasia - a solo 15 minutos cruzando un puente corto hacia Singapur",
    applyNow: "Aplicar Ahora",
    advantagesTitle: "14 Características que me gustan de Network School",
    
    fitness: {
      title: "Instalaciones de Fitness de Última Generación",
      description: "Equipos de gimnasio modernos diseñados para personas mayores. Entrenadores personales especializados en programas de fitness apropiados para la edad."
    },
    pools: {
      title: "Hermosas Piscinas",
      description: "Múltiples piscinas incluyendo opciones climatizadas. Perfectas para ejercicio de bajo impacto y relajación en clima tropical."
    },
    nutrition: {
      title: "Nutrición Blueprint Food",
      description: "Comidas científicamente optimizadas diseñadas para la longevidad. Ingredientes frescos y saludables preparados por chefs expertos."
    },
    morningRuck: {
      title: "Caminatas Matutinas",
      description: "Comienza tu día con caminatas grupales energizantes. Construye fuerza y comunidad mientras exploras Forest City."
    },
    smartYoungPeople: {
      title: "Personas Jóvenes Inteligentes",
      description: "Obtén perspectivas frescas de la vida de mentes jóvenes brillantes. Aprende unos de otros y mantente mentalmente ágil."
    },
    aiClasses: {
      title: "Clases de IA",
      description: "Aprende sobre inteligencia artificial de maneras prácticas y fáciles de entender. Mantente al día con el futuro de la tecnología."
    },
    bookClubs: {
      title: "Clases de Libros",
      description: "Discute grandes libros con otros estudiantes de por vida. Expande tu mente a través de la literatura e ideas."
    },
    coding: {
      title: "Programación Vibe",
      description: "Aprende nuevas herramientas como programación vibe - programación moderna hecha accesible. Crea y construye en la era digital."
    },
    networkStates: {
      title: "Construir Estados de Red",
      description: "Ayuda a diseñar el futuro construyendo ideas para otros estados de red. Sé parte de la creación de las comunidades del mañana."
    },
    improv: {
      title: "Clases de Improvisación",
      description: "Desarrolla creatividad y confianza a través del teatro de improvisación. Diviértete mientras construyes habilidades de comunicación."
    },
    countryRock: {
      title: "Noches de Country Rock",
      description: "Disfruta música en vivo y baile. Conecta con otros a través del lenguaje universal de la música."
    },
    blueprintFood: {
      title: "Estilo de Vida Nutritivo",
      description: "Sigue protocolos de nutrición basados en evidencia. Optimiza tu salud con planes de comidas respaldados científicamente."
    },
    lifestyle: {
      title: "Estilo de Vida Social Activo",
      description: "Participa en actividades y eventos diversos. Construye amistades significativas y mantente socialmente activo."
    },
    betterPerson: {
      title: "Cómo Ser una Mejor Persona",
      description: "Enfócate en el crecimiento y desarrollo personal. Aprende estrategias para vivir tu mejor vida después de los 70."
    },
    globalCommunity: {
      title: "Personas de Todo el Mundo",
      description: "Conoce personas fascinantes de docenas de países diferentes. Expande tu visión del mundo a través de amistades diversas."
    },
    cryptoWeb3: {
      title: "Aprende Crypto y Web3",
      description: "Comprende el futuro del dinero e internet. Obtén orientación experta sobre monedas digitales y tecnología blockchain."
    },
    videoCreation: {
      title: "Crea Mejores Videos Verticales",
      description: "Aprende a hacer videos verticales atractivos y más cortos. Domina técnicas modernas de creación de videos para redes sociales y proyectos personales."
    },
    
    perfectLocation: "Ubicación Perfecta",
    locationDescription: "Ubicado en Malasia, justo al cruzar un puente corto hacia Singapur",
    toSingapore: "A Singapur",
    minutes: "15 Minutos",
    tropical: "Tropical",
    perfectWeather: "Clima Perfecto",
    modern: "Moderno",
    forestCity: "Forest City",
    
    contactTitle: "Programa tu Visita al Campus",
    contactDescription: "Experimenta el estilo de vida de Network School de primera mano. Reserva un tour de nuestro campus en Forest City.",
    nameLabel: "Nombre Completo",
    emailLabel: "Dirección de Email",
    phoneLabel: "Número de Teléfono",
    visitTypeLabel: "Tipo de Visita",
    visitTypePlaceholder: "Selecciona tipo de visita",
    visitOptions: {
      campus: "Tour del Campus",
      virtual: "Tour Virtual",
      info: "Sesión Informativa"
    },
    messageLabel: "Mensaje (Opcional)",
    submitInquiry: "Enviar Consulta",
    
    newsletterTitle: "Mantente Conectado",
    newsletterDescription: "Recibe actualizaciones sobre eventos de Network School y noticias de la comunidad.",
    subscribeNewsletter: "Suscribirse al Boletín",
    
    footerDescription: "Forest City, Malasia • Tu próximo capítulo comienza aquí",
    
    inquirySent: "¡Gracias! Tu consulta ha sido enviada exitosamente.",
    subscriptionSuccess: "¡Gracias por suscribirte a nuestro boletín!",
    errorMessage: "Algo salió mal. Por favor intenta de nuevo."
  },
  
  zh: {
    siteTitle: "Network School Forest City",
    heroTitle: "Network School 70岁后的生活",
    heroSubtitle: "探索在马来西亚森林城市Network School生活的优势 - 仅需15分钟跨过短桥即可到达新加坡",
    applyNow: "立即申请",
    advantagesTitle: "我喜欢Network School的14个特色",
    
    fitness: {
      title: "最先进的健身设施",
      description: "专为老年人设计的现代健身器材。专业私人教练提供适合年龄的健身项目。"
    },
    pools: {
      title: "美丽的游泳池",
      description: "多个游泳池包括加热选项。在热带天气中进行低强度运动和放松的完美选择。"
    },
    nutrition: {
      title: "Blueprint Food营养",
      description: "为长寿而科学优化的膳食。由专业厨师准备的新鲜、健康食材。"
    },
    morningRuck: {
      title: "晨间徒步",
      description: "以充满活力的团体散步开始新的一天。在探索森林城市的同时增强体力和社区联系。"
    },
    smartYoungPeople: {
      title: "聪明的年轻人",
      description: "从聪明的年轻人那里获得新鲜的生活观点。相互学习并保持思维敏锐。"
    },
    aiClasses: {
      title: "人工智能课程",
      description: "以实用、易于理解的方式学习人工智能。紧跟技术未来。"
    },
    bookClubs: {
      title: "读书课程",
      description: "与其他终身学习者讨论优秀书籍。通过文学和思想扩展你的思维。"
    },
    coding: {
      title: "Vibe编程",
      description: "学习像vibe编程这样的新工具——现代编程变得易于接触。在数字时代创造和构建。"
    },
    networkStates: {
      title: "构建网络国家",
      description: "通过为其他网络国家构建想法来帮助设计未来。成为创造明天社区的一部分。"
    },
    improv: {
      title: "即兴表演课程",
      description: "通过即兴戏剧培养创造力和自信心。在培养沟通技能的同时享受乐趣。"
    },
    countryRock: {
      title: "乡村摇滚之夜",
      description: "享受现场音乐和舞蹈。通过音乐这一通用语言与他人建立联系。"
    },
    blueprintFood: {
      title: "营养生活方式",
      description: "遵循基于证据的营养协议。通过科学支持的膳食计划优化您的健康。"
    },
    lifestyle: {
      title: "积极的社交生活方式",
      description: "参与各种活动和事件。建立有意义的友谊并保持社交活跃。"
    },
    betterPerson: {
      title: "如何成为更好的人",
      description: "专注于个人成长和发展。学习70岁后过最好生活的策略。"
    },
    globalCommunity: {
      title: "来自世界各地的人们",
      description: "结识来自数十个不同国家的迷人人们。通过多元化的友谊扩展您的世界观。"
    },
    cryptoWeb3: {
      title: "学习加密货币和Web3",
      description: "了解货币和互联网的未来。获得数字货币和区块链技术的专家指导。"
    },
    videoCreation: {
      title: "制作更好的竖屏视频",
      description: "学习制作引人入胜且更短的竖屏视频。掌握现代视频制作技术，用于社交媒体和个人项目。"
    },
    
    perfectLocation: "完美位置",
    locationDescription: "位于马来西亚，仅需跨过一座短桥即可到达新加坡",
    toSingapore: "到新加坡",
    minutes: "15分钟",
    tropical: "热带",
    perfectWeather: "完美天气",
    modern: "现代",
    forestCity: "森林城市",
    
    contactTitle: "安排您的校园参观",
    contactDescription: "亲身体验Network School的生活方式。预订我们森林城市校园的参观。",
    nameLabel: "全名",
    emailLabel: "电子邮件地址",
    phoneLabel: "电话号码",
    visitTypeLabel: "参观类型",
    visitTypePlaceholder: "选择参观类型",
    visitOptions: {
      campus: "校园参观",
      virtual: "虚拟参观",
      info: "信息会议"
    },
    messageLabel: "留言（可选）",
    submitInquiry: "提交咨询",
    
    newsletterTitle: "保持联系",
    newsletterDescription: "获取Network School活动和社区新闻的更新。",
    subscribeNewsletter: "订阅通讯",
    
    footerDescription: "马来西亚森林城市 • 您的下一章从这里开始",
    
    inquirySent: "谢谢！您的咨询已成功发送。",
    subscriptionSuccess: "感谢您订阅我们的通讯！",
    errorMessage: "出了点问题。请重试。"
  },
  
  fr: {
    siteTitle: "Network School Forest City",
    heroTitle: "La Vie Après 70 Ans à Network School",
    heroSubtitle: "Découvrez les avantages de vivre à Network School à Forest City, Malaisie - à seulement 15 minutes en traversant un court pont vers Singapour",
    applyNow: "Postuler Maintenant",
    advantagesTitle: "14 Caractéristiques que j'aime à Network School",
    
    fitness: {
      title: "Installations de Fitness de Pointe",
      description: "Équipement de gym moderne conçu pour les seniors. Entraîneurs personnels spécialisés dans les programmes de fitness adaptés à l'âge."
    },
    pools: {
      title: "Belles Piscines",
      description: "Plusieurs piscines incluant des options chauffées. Parfait pour l'exercice à faible impact et la détente sous le climat tropical."
    },
    nutrition: {
      title: "Nutrition Blueprint Food",
      description: "Repas scientifiquement optimisés conçus pour la longévité. Ingrédients frais et sains préparés par des chefs experts."
    },
    morningRuck: {
      title: "Marches Matinales",
      description: "Commencez votre journée avec des marches de groupe énergisantes. Construisez votre force et votre communauté en explorant Forest City."
    },
    smartYoungPeople: {
      title: "Jeunes Gens Intelligents",
      description: "Obtenez de nouvelles perspectives sur la vie de jeunes esprits brillants. Apprenez les uns des autres et restez mentalement vif."
    },
    aiClasses: {
      title: "Cours d'IA",
      description: "Apprenez l'intelligence artificielle de manières pratiques et faciles à comprendre. Restez à jour avec l'avenir de la technologie."
    },
    bookClubs: {
      title: "Cours de Livres",
      description: "Discutez de grands livres avec d'autres apprenants à vie. Élargissez votre esprit à travers la littérature et les idées."
    },
    coding: {
      title: "Programmation Vibe",
      description: "Apprenez de nouveaux outils comme la programmation vibe - programmation moderne rendue accessible. Créez et construisez à l'ère numérique."
    },
    networkStates: {
      title: "Construire des États Réseau",
      description: "Aidez à concevoir l'avenir en construisant des idées pour d'autres états réseau. Participez à la création des communautés de demain."
    },
    improv: {
      title: "Cours d'Improvisation",
      description: "Développez la créativité et la confiance à travers le théâtre d'improvisation. Amusez-vous tout en développant vos compétences de communication."
    },
    countryRock: {
      title: "Soirées Country Rock",
      description: "Profitez de la musique live et de la danse. Connectez-vous avec d'autres à travers le langage universel de la musique."
    },
    blueprintFood: {
      title: "Mode de Vie Nutritif",
      description: "Suivez des protocoles nutritionnels basés sur des preuves. Optimisez votre santé avec des plans de repas scientifiquement soutenus."
    },
    lifestyle: {
      title: "Mode de Vie Social Actif",
      description: "Participez à des activités et événements divers. Construisez des amitiés significatives et restez socialement engagé."
    },
    betterPerson: {
      title: "Comment Être une Meilleure Personne",
      description: "Concentrez-vous sur la croissance et le développement personnels. Apprenez des stratégies pour vivre votre meilleure vie après 70 ans."
    },
    globalCommunity: {
      title: "Personnes du Monde Entier",
      description: "Rencontrez des personnes fascinantes de dizaines de pays différents. Élargissez votre vision du monde à travers des amitiés diverses."
    },
    cryptoWeb3: {
      title: "Apprendre Crypto et Web3",
      description: "Comprenez l'avenir de l'argent et d'internet. Obtenez des conseils d'experts sur les monnaies numériques et la technologie blockchain."
    },
    videoCreation: {
      title: "Créer de Meilleures Vidéos Verticales",
      description: "Apprenez à faire des vidéos verticales engageantes et plus courtes. Maîtrisez les techniques modernes de création vidéo pour les réseaux sociaux et projets personnels."
    },
    
    perfectLocation: "Emplacement Parfait",
    locationDescription: "Situé en Malaisie, juste en traversant un court pont vers Singapour",
    toSingapore: "Vers Singapour",
    minutes: "15 Minutes",
    tropical: "Tropical",
    perfectWeather: "Temps Parfait",
    modern: "Moderne",
    forestCity: "Forest City",
    
    contactTitle: "Planifiez Votre Visite du Campus",
    contactDescription: "Vivez le mode de vie Network School de première main. Réservez une visite de notre campus Forest City.",
    nameLabel: "Nom Complet",
    emailLabel: "Adresse Email",
    phoneLabel: "Numéro de Téléphone",
    visitTypeLabel: "Type de Visite",
    visitTypePlaceholder: "Sélectionnez le type de visite",
    visitOptions: {
      campus: "Visite du Campus",
      virtual: "Visite Virtuelle",
      info: "Session d'Information"
    },
    messageLabel: "Message (Optionnel)",
    submitInquiry: "Soumettre la Demande",
    
    newsletterTitle: "Restez Connecté",
    newsletterDescription: "Recevez des mises à jour sur les événements Network School et les nouvelles de la communauté.",
    subscribeNewsletter: "S'abonner à la Newsletter",
    
    footerDescription: "Forest City, Malaisie • Votre prochain chapitre commence ici",
    
    inquirySent: "Merci ! Votre demande a été envoyée avec succès.",
    subscriptionSuccess: "Merci de vous être abonné à notre newsletter !",
    errorMessage: "Quelque chose s'est mal passé. Veuillez réessayer."
  },

  ms: {
    siteTitle: "Network School Forest City",
    heroTitle: "Kehidupan Selepas 70 di Network School",
    heroSubtitle: "Temui kelebihan tinggal di Network School di Forest City, Malaysia - hanya 15 minit melalui jambatan pendek ke Singapura",
    applyNow: "Mohon Sekarang",
    advantagesTitle: "14 Ciri yang saya suka di Network School",
    
    fitness: {
      title: "Kemudahan Kecergasan Canggih",
      description: "Peralatan gimnasium moden yang direka untuk warga emas. Jurulatih peribadi yang pakar dalam program kecergasan sesuai umur."
    },
    pools: {
      title: "Kolam Renang Indah",
      description: "Pelbagai kolam termasuk pilihan dipanaskan. Sempurna untuk senaman rendah impak dan berehat dalam cuaca tropika."
    },
    nutrition: {
      title: "Nutrisi Blueprint Food",
      description: "Hidangan dioptimumkan secara saintifik untuk umur panjang. Bahan segar dan sihat disediakan oleh chef pakar."
    },
    morningRuck: {
      title: "Berjalan Kaki Pagi",
      description: "Mulakan hari anda dengan berjalan kaki berkumpulan yang bertenaga. Bina kekuatan dan komuniti sambil menjelajah Forest City."
    },
    smartYoungPeople: {
      title: "Orang Muda Bijak",
      description: "Dapatkan perspektif segar tentang kehidupan daripada minda muda yang cemerlang. Belajar antara satu sama lain dan kekal tajam mental."
    },
    aiClasses: {
      title: "Kelas AI",
      description: "Belajar kecerdasan buatan dengan cara praktikal dan mudah difahami. Kekal terkini dengan masa depan teknologi."
    },
    bookClubs: {
      title: "Kelas Buku",
      description: "Bincangkan buku-buku hebat dengan pelajar sepanjang hayat yang lain. Kembangkan minda melalui sastera dan idea."
    },
    coding: {
      title: "Pengaturcaraan Vibe",
      description: "Belajar alat baru seperti pengaturcaraan vibe - pengaturcaraan moden dibuat mudah diakses. Cipta dan bina di era digital."
    },
    networkStates: {
      title: "Bina Negara Rangkaian",
      description: "Bantu mereka bentuk masa depan dengan membina idea untuk negara rangkaian lain. Jadilah sebahagian daripada mencipta komuniti esok."
    },
    improv: {
      title: "Kelas Improvisasi",
      description: "Luahkan diri secara kreatif melalui teater improvisasi. Berseronok sambil membina keyakinan dan kemahiran sosial."
    },
    countryRock: {
      title: "Malam Country Rock",
      description: "Nikmati muzik langsung dan hiburan dengan komuniti anda. Menari, menyanyi bersama, dan buat kenangan bersama."
    },
    blueprintFood: {
      title: "Blueprint Food",
      description: "Nutrisi yang dioptimumkan untuk umur panjang dan kesihatan optimum. Hidangan yang direka dengan sains terkini."
    },
    lifestyle: {
      title: "Gaya Hidup Aktif",
      description: "Hidup aktif dan sihat dengan aktiviti harian yang menyeronokkan. Kekal bertenaga dan bermotivasi setiap hari."
    },
    betterPerson: {
      title: "Cara Menjadi Orang Yang Lebih Baik",
      description: "Fokus pada pertumbuhan dan pembangunan peribadi. Belajar strategi untuk menjalani kehidupan terbaik selepas 70."
    },
    globalCommunity: {
      title: "Komuniti Global",
      description: "Berhubung dengan orang dari seluruh dunia. Kongsi budaya, bahasa, dan pengalaman dalam komuniti yang beragam."
    },
    cryptoWeb3: {
      title: "Crypto & Web3",
      description: "Belajar tentang mata wang kripto dan teknologi blockchain. Kekal terkini dengan revolusi kewangan digital."
    },
    videoCreation: {
      title: "Penciptaan Video",
      description: "Belajar kemahiran penciptaan video untuk berkongsi cerita anda. Hasilkan kandungan dan berhubung dengan generasi baru."
    },
    
    perfectLocation: "Lokasi Sempurna",
    locationDescription: "Forest City terletak di lokasi strategik",
    toSingapore: "ke Singapura",
    minutes: "minit",
    tropical: "Cuaca Tropika",
    perfectWeather: "cuaca sempurna sepanjang tahun",
    modern: "Bandar Moden",
    forestCity: "kemudahan canggih di Forest City",
    
    contactTitle: "Lawati Kampus Kami",
    contactDescription: "Atur lawatan untuk melihat sendiri kehidupan di Network School Forest City",
    nameLabel: "Nama",
    emailLabel: "E-mel",
    phoneLabel: "Telefon",
    visitTypeLabel: "Jenis Lawatan",
    visitTypePlaceholder: "Pilih jenis lawatan",
    visitOptions: {
      campus: "Lawatan Kampus",
      virtual: "Lawatan Maya",
      info: "Sesi Maklumat"
    },
    messageLabel: "Mesej",
    submitInquiry: "Hantar Pertanyaan",
    
    newsletterTitle: "Kekal Berhubung",
    newsletterDescription: "Langgan surat berita kami untuk kemas kini terkini",
    subscribeNewsletter: "Langgan Surat Berita",
    
    footerDescription: "Forest City, Malaysia • Bab seterusnya anda bermula di sini",
    
    inquirySent: "Terima kasih! Pertanyaan anda telah berjaya dihantar.",
    subscriptionSuccess: "Terima kasih kerana melanggan surat berita kami!",
    errorMessage: "Sesuatu tidak kena. Sila cuba lagi."
  },

  th: {
    siteTitle: "Network School Forest City",
    heroTitle: "ชีวิตหลังวัย 70 ที่ Network School",
    heroSubtitle: "ค้นพบข้อดีของการอยู่ที่ Network School ใน Forest City มาเลเซีย - เพียง 15 นาทีผ่านสะพานสั้นๆ ไปสิงคโปร์",
    applyNow: "สมัครเลย",
    advantagesTitle: "14 คุณสมบัติที่ฉันชอบที่ Network School",
    
    fitness: {
      title: "สิ่งอำนวยความสะดวกด้านฟิตเนสที่ทันสมัย",
      description: "อุปกรณ์ยิมที่ทันสมัยออกแบบสำหรับผู้สูงอายุ ครูฝึกส่วนตัวที่เชี่ยวชาญในโปรแกรมฟิตเนสที่เหมาะกับวัย"
    },
    pools: {
      title: "สระน้ำที่สวยงาม",
      description: "สระหลายแห่งรวมถึงสระน้ำอุ่น เหมาะสำหรับการออกกำลังกายแบบกระทบน้อยและผ่อนคลายในสภาพอากาศเขตร้อน"
    },
    nutrition: {
      title: "โภชนาการ Blueprint Food",
      description: "อาหารที่ปรับให้เหมาะสมทางวิทยาศาสตร์เพื่อความยืนยาว วัตถุดิบสดใหม่และดีต่อสุขภาพที่เตรียมโดยเชฟผู้เชี่ยวชาญ"
    },
    morningRuck: {
      title: "การเดินเช้า",
      description: "เริ่มต้นวันของคุณด้วยการเดินกลุ่มที่ให้พลังงาน สร้างความแข็งแกร่งและชุมชนขณะสำรวจ Forest City"
    },
    smartYoungPeople: {
      title: "คนหนุ่มสาวที่ฉลาด",
      description: "รับมุมมองใหม่ๆ เกี่ยวกับชีวิตจากจิตใจหนุ่มสาวที่เก่งกาจ เรียนรู้จากกันและกันและคงความคมชัดทางจิตใจ"
    },
    aiClasses: {
      title: "คลาส AI",
      description: "เรียนรู้ปัญญาประดิษฐ์ในแบบที่ปฏิบัติได้และเข้าใจง่าย ติดตามอนาคตของเทคโนโลยี"
    },
    bookClubs: {
      title: "คลาสหนังสือ",
      description: "พูดคุยเกี่ยวกับหนังสือดีๆ กับผู้เรียนรู้ตลอดชีวิตคนอื่นๆ ขยายจิตใจผ่านวรรณกรรมและแนวคิด"
    },
    coding: {
      title: "การเขียนโปรแกรม Vibe",
      description: "เรียนรู้เครื่องมือใหม่เช่นการเขียนโปรแกรม vibe - การเขียนโปรแกรมสมัยใหม่ที่เข้าถึงได้ สร้างสรรค์และสร้างในยุคดิจิทัล"
    },
    networkStates: {
      title: "สร้างรัฐเครือข่าย",
      description: "ช่วยออกแบบอนาคตโดยการสร้างแนวคิดสำหรับรัฐเครือข่ายอื่นๆ เป็นส่วนหนึ่งของการสร้างชุมชนแห่งอนาคต"
    },
    improv: {
      title: "คลาสการแสดงด้นสด",
      description: "แสดงออกอย่างสร้างสรรค์ผ่านละครด้นสด สนุกสนานขณะสร้างความมั่นใจและทักษะทางสังคม"
    },
    countryRock: {
      title: "คืนคันทรีร็อค",
      description: "เพลิดเพลินกับดนตรีสดและการบันเทิงกับชุมชนของคุณ เต้นรำ ร้องเพลงไปด้วยกัน และสร้างความทรงจำ"
    },
    blueprintFood: {
      title: "Blueprint Food",
      description: "โภชนาการที่ปรับให้เหมาะสมสำหรับอายุยืนและสุขภาพที่ดีที่สุด อาหารที่ออกแบบด้วยวิทยาศาสตร์ล่าสุด"
    },
    lifestyle: {
      title: "ไลฟ์สไตล์ที่มีชีวิตชีวา",
      description: "ใช้ชีวิตอย่างมีชีวิตชีวาและสุขภาพดีด้วยกิจกรรมประจำวันที่สนุกสนาน คงความกระปรี้กระเปร่าและมีแรงบันดาลใจทุกวัน"
    },
    betterPerson: {
      title: "วิธีเป็นคนที่ดีขึ้น",
      description: "มุ่งเน้นการเติบโตและพัฒนาส่วนบุคคล เรียนรู้กลยุทธ์สำหรับการใช้ชีวิตที่ดีที่สุดหลังวัย 70"
    },
    globalCommunity: {
      title: "ชุมชนโลก",
      description: "เชื่อมต่อกับผู้คนจากทั่วโลก แบ่งปันวัฒนธรรม ภาษา และประสบการณ์ในชุมชนที่หลากหลาย"
    },
    cryptoWeb3: {
      title: "Crypto & Web3",
      description: "เรียนรู้เกี่ยวกับสกุลเงินดิจิทัลและเทคโนโลยีบล็อกเชน ติดตามการปฏิวัติทางการเงินดิจิทัล"
    },
    videoCreation: {
      title: "การสร้างวิดีโอ",
      description: "เรียนรู้ทักษะการสร้างวิดีโอเพื่อแบ่งปันเรื่องราวของคุณ สร้างเนื้อหาและเชื่อมต่อกับคนรุ่นใหม่"
    },
    
    perfectLocation: "ที่ตั้งที่สมบูรณ์แบบ",
    locationDescription: "Forest City ตั้งอยู่ในทำเลที่ยุทธศาสตร์",
    toSingapore: "ไปสิงคโปร์",
    minutes: "นาที",
    tropical: "เขตร้อน",
    perfectWeather: "สภาพอากาศที่สมบูรณ์แบบตลอดปี",
    modern: "ทันสมัย",
    forestCity: "สิ่งอำนวยความสะดวกที่ล้ำสมัยใน Forest City",
    
    contactTitle: "เยี่ยมชมแคมปัสของเรา",
    contactDescription: "จัดการเยี่ยมชมเพื่อสัมผัสชีวิตที่ Network School Forest City ด้วยตัวเอง",
    nameLabel: "ชื่อ",
    emailLabel: "อีเมล",
    phoneLabel: "โทรศัพท์",
    visitTypeLabel: "ประเภทการเยี่ยมชม",
    visitTypePlaceholder: "เลือกประเภทการเยี่ยมชม",
    visitOptions: {
      campus: "เยี่ยมชมแคมปัส",
      virtual: "เยี่ยมชมเสมือนจริง",
      info: "เซสชันข้อมูล"
    },
    messageLabel: "ข้อความ",
    submitInquiry: "ส่งคำถาม",
    
    newsletterTitle: "ติดต่อกันต่อไป",
    newsletterDescription: "สมัครรับจดหมายข่าวของเราสำหรับการอัปเดตล่าสุด",
    subscribeNewsletter: "สมัครรับจดหมายข่าว",
    
    footerDescription: "Forest City, มาเลเซีย • บทใหม่ของคุณเริ่มต้นที่นี่",
    
    inquirySent: "ขอบคุณ! คำถามของคุณได้ถูกส่งเรียบร้อยแล้ว",
    subscriptionSuccess: "ขอบคุณที่สมัครรับจดหมายข่าวของเรา!",
    errorMessage: "เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง"
  },

  ta: {
    siteTitle: "Network School Forest City",
    heroTitle: "70 வயதிற்குப் பிறகு Network School இல் வாழ்க்கை",
    heroSubtitle: "மலேசியாவின் Forest City இல் Network School இல் வாழ்வதன் பலன்களைக் கண்டறியுங்கள் - சிங்கப்பூருக்கு ஒரு குறுகிய பாலம் வழியாக வெறும் 15 நிமிடங்கள்",
    applyNow: "இப்போதே விண்ணப்பிக்கவும்",
    advantagesTitle: "Network School இல் நான் விரும்பும் 14 அம்சங்கள்",
    
    fitness: {
      title: "அதிநவீன உடற்பயிற்சி வசதிகள்",
      description: "வயதானவர்களுக்காக வடிவமைக்கப்பட்ட நவீன gym உபகரணங்கள். வயதுக்கு ஏற்ற உடற்பயிற்சி திட்டங்களில் நிபுணத்துவம் பெற்ற தனிப்பட்ட பயிற்சியாளர்கள்."
    },
    pools: {
      title: "அழகான நீச்சல் குளங்கள்",
      description: "சூடுபடுத்தப்பட்ட விருப்பங்கள் உட்பட பல குளங்கள். வெப்பமண்டல காலநிலையில் குறைந்த தாக்க உடற்பயிற்சி மற்றும் ஓய்வுக்கு சரியானது."
    },
    nutrition: {
      title: "Blueprint Food ஊட்டச்சத்து",
      description: "நீண்ட ஆயுளுக்காக அறிவியல் ரீதியாக மேம்படுத்தப்பட்ட உணவுகள். நிபுணர் சமையல்காரர்களால் தயாரிக்கப்பட்ட புதிய, ஆரோக்கியமான பொருட்கள்."
    },
    morningRuck: {
      title: "காலை நடைப்பயணம்",
      description: "ஆற்றல் நிறைந்த குழு நடைப்பயணங்களுடன் உங்கள் நாளைத் தொடங்குங்கள். Forest City ஐ ஆராயும் போது வலிமையையும் சமூகத்தையும் உருவாக்குங்கள்."
    },
    smartYoungPeople: {
      title: "புத்திசாலி இளைஞர்கள்",
      description: "புத்திசாலி இளம் மனங்களிடமிருந்து வாழ்க்கையைப் பற்றிய புதிய பார்வைகளைப் பெறுங்கள். ஒருவரிடமிருந்து ஒருவர் கற்றுக்கொண்டு மனரீதியாக கூர்மையாக இருங்கள்."
    },
    aiClasses: {
      title: "AI வகுப்புகள்",
      description: "நடைமுறை, புரிந்துகொள்ள எளிய வழிகளில் செயற்கை நுண்ணறிவைக் கற்றுக்கொள்ளுங்கள். தொழில்நுட்பத்தின் எதிர்காலத்துடன் புதுப்பித்த நிலையில் இருங்கள்."
    },
    bookClubs: {
      title: "புத்தக வகுப்புகள்",
      description: "மற்ற வாழ்நாள் கற்றுக்கொள்பவர்களுடன் சிறந்த புத்தகங்களைப் பற்றி விவாதிக்கவும். இலக்கியம் மற்றும் கருத்துக்கள் மூலம் உங்கள் மனதை விரிவுபடுத்துங்கள்."
    },
    coding: {
      title: "Vibe குறியீட்டு",
      description: "vibe குறியீடு போன்ற புதிய கருவிகளைக் கற்றுக்கொள்ளுங்கள் - நவீன நிரலாக்கம் அணுகக்கூடியதாக மாற்றப்பட்டது. டிஜிட்டல் யுகத்தில் உருவாக்கி கட்டமைக்கவும்."
    },
    networkStates: {
      title: "நெட்வொர்க் மாநிலங்களை உருவாக்கவும்",
      description: "மற்ற நெட்வொர்க் மாநிலங்களுக்கான யோசனைகளை உருவாக்குவதன் மூலம் எதிர்காலத்தை வடிவமைக்க உதவுங்கள். நாளைய சமூகங்களை உருவாக்குவதில் பங்காளியாகுங்கள்."
    },
    improv: {
      title: "மேம்பாட்டு வகுப்புகள்",
      description: "மேம்பாட்டு நாடகத்தின் மூலம் ஆக்கபூர்வமாக உங்களை வெளிப்படுத்துங்கள். நம்பிக்கையையும் சமூக திறன்களையும் உருவாக்கும் போது வேடிக்கை பாருங்கள்."
    },
    countryRock: {
      title: "Country Rock இரவு",
      description: "உங்கள் சமூகத்துடன் நேரடி இசை மற்றும் பொழுதுபோக்கை அனுபவிக்கவும். நடனமாடுங்கள், பாடுங்கள், மற்றும் ஒன்றாக நினைவுகளை உருவாக்குங்கள்."
    },
    blueprintFood: {
      title: "Blueprint Food",
      description: "நீண்ட ஆயுள் மற்றும் உகந்த ஆரோக்கியத்திற்காக மேம்படுத்தப்பட்ட ஊட்டச்சத்து. சமீபத்திய அறிவியலுடன் வடிவமைக்கப்பட்ட உணவுகள்."
    },
    lifestyle: {
      title: "செயலில் வாழ்க்கை முறை",
      description: "வேடிக்கையான தினசரி செயல்பாடுகளுடன் செயலில் மற்றும் ஆரோக்கியமான வாழ்க்கையை வாழுங்கள். ஒவ்வொரு நாளும் ஆற்றலுடனும் உந்துதலுடனும் இருங்கள்."
    },
    betterPerson: {
      title: "சிறந்த நபராக மாறுவது எப்படி",
      description: "தனிப்பட்ட வளர்ச்சி மற்றும் மேம்பாட்டில் கவனம் செலுத்துங்கள். 70 வயதிற்குப் பிறகு உங்கள் சிறந்த வாழ்க்கையை வாழ்வதற்கான உத்திகளைக் கற்றுக்கொள்ளுங்கள்."
    },
    globalCommunity: {
      title: "உலகளாவிய சமூகம்",
      description: "உலகம் முழுவதிலும் உள்ள மக்களுடன் இணைக்கவும். பல்வேறு சமூகத்தில் கலாச்சாரம், மொழி மற்றும் அனுபவங்களைப் பகிர்ந்து கொள்ளுங்கள்."
    },
    cryptoWeb3: {
      title: "Crypto & Web3",
      description: "கிரிப்டோகரன்சிகள் மற்றும் பிளாக்செயின் தொழில்நுட்பத்தைப் பற்றி அறிந்து கொள்ளுங்கள். டிஜிட்டல் நிதி புரட்சியுடன் புதுப்பித்த நிலையில் இருங்கள்."
    },
    videoCreation: {
      title: "வீடியோ உருவாக்கம்",
      description: "உங்கள் கதைகளைப் பகிர்ந்து கொள்ள வீடியோ உருவாக்க திறன்களைக் கற்றுக்கொள்ளுங்கள். உள்ளடக்கத்தை உருவாக்கி புதிய தலைமுறையுடன் இணைக்கவும்."
    },
    
    perfectLocation: "சரியான இடம்",
    locationDescription: "Forest City மூலோபாய இடத்தில் அமைந்துள்ளது",
    toSingapore: "சிங்கப்பூருக்கு",
    minutes: "நிமிடங்கள்",
    tropical: "வெப்பமண்டல",
    perfectWeather: "ஆண்டு முழுவதும் சரியான வானிலை",
    modern: "நவீன",
    forestCity: "Forest City இல் அதிநவீன வசதிகள்",
    
    contactTitle: "எங்கள் வளாகத்தைப் பார்வையிடவும்",
    contactDescription: "Network School Forest City இல் வாழ்க்கையை நேரடியாக அனுபவிக்க ஒரு பார்வையை ஏற்பாடு செய்யுங்கள்",
    nameLabel: "பெயர்",
    emailLabel: "மின்னஞ்சல்",
    phoneLabel: "தொலைபேசி",
    visitTypeLabel: "பார்வை வகை",
    visitTypePlaceholder: "பார்வை வகையைத் தேர்ந்தெடுக்கவும்",
    visitOptions: {
      campus: "வளாக பார்வை",
      virtual: "மெய்நிகர் பார்வை",
      info: "தகவல் அமர்வு"
    },
    messageLabel: "செய்தி",
    submitInquiry: "விசாரணையை அனுப்பவும்",
    
    newsletterTitle: "தொடர்பில் இருங்கள்",
    newsletterDescription: "சமீபத்திய புதுப்பிப்புகளுக்காக எங்கள் செய்திமடலுக்கு குழுசேரவும்",
    subscribeNewsletter: "செய்திமடலுக்கு குழுசேரவும்",
    
    footerDescription: "Forest City, மலேசியா • உங்கள் அடுத்த அத்தியாயம் இங்கே தொடங்குகிறது",
    
    inquirySent: "நன்றி! உங்கள் விசாரணை வெற்றிகரமாக அனுப்பப்பட்டது.",
    subscriptionSuccess: "எங்கள் செய்திமடலுக்கு குழுசேர்ந்ததற்கு நன்றி!",
    errorMessage: "ஏதோ தவறு ஏற்பட்டது. மீண்டும் முயற்சிக்கவும்."
  },

  tl: {
    siteTitle: "Network School Forest City",
    heroTitle: "Buhay Pagkatapos ng 70 sa Network School",
    heroSubtitle: "Tuklasin ang mga bentahe ng pamumuhay sa Network School sa Forest City, Malaysia - 15 minuto lamang sa isang maikling tulay patungo sa Singapore",
    applyNow: "Mag-apply Ngayon",
    advantagesTitle: "14 na Katangian na Gusto Ko sa Network School",
    
    fitness: {
      title: "Makabagong Fitness Facilities",
      description: "Modernong gym equipment na dinisenyo para sa mga nakatatanda. Personal trainers na dalubhasa sa age-appropriate fitness programs."
    },
    pools: {
      title: "Magagandang Swimming Pools",
      description: "Maraming pool kasama ang heated options. Perpekto para sa low-impact exercise at relaxation sa tropical weather."
    },
    nutrition: {
      title: "Blueprint Food Nutrition",
      description: "Scientifically optimized na pagkain na dinisenyo para sa longevity. Fresh, healthy ingredients na inihanda ng expert chefs."
    },
    morningRuck: {
      title: "Morning Ruck Walks",
      description: "Simulan ang inyong araw sa energizing group walks. Bumuo ng strength at community habang ginagalugad ang Forest City."
    },
    smartYoungPeople: {
      title: "Matalinong Mga Kabataan",
      description: "Makakuha ng fresh perspectives sa buhay mula sa mga brilliant young minds. Matuto sa isa't isa at manatiling mentally sharp."
    },
    aiClasses: {
      title: "AI Classes",
      description: "Matuto ng artificial intelligence sa practical, madaling maintindihan na paraan. Manatiling updated sa future ng technology."
    },
    bookClubs: {
      title: "Book Classes",
      description: "Pag-usapan ang mga magagandang libro kasama ng ibang lifelong learners. Palawakin ang inyong isip sa literature at ideas."
    },
    coding: {
      title: "Vibe Coding",
      description: "Matuto ng mga bagong tools tulad ng vibe coding - modern programming na accessible. Lumikha at bumuo sa digital age."
    },
    networkStates: {
      title: "Bumuo ng Network States",
      description: "Tumulong sa pag-design ng future sa pamamagitan ng pagbuo ng ideas para sa ibang network states. Maging bahagi ng paglikha ng mga community ng bukas."
    },
    improv: {
      title: "Improv Classes",
      description: "Ipahayag ang sarili nang creative sa improvisational theater. Mag-enjoy habang bumubuo ng confidence at social skills."
    },
    countryRock: {
      title: "Country Rock Night",
      description: "Mag-enjoy ng live music at entertainment kasama ng inyong community. Sumayaw, kumanta, at makabuo ng mga alaala."
    },
    blueprintFood: {
      title: "Blueprint Food",
      description: "Optimized nutrition para sa longevity at optimal health. Pagkain na dinisenyo gamit ang latest science."
    },
    lifestyle: {
      title: "Active Lifestyle",
      description: "Mamuhay nang active at healthy sa fun daily activities. Manatiling energetic at motivated araw-araw."
    },
    betterPerson: {
      title: "Paano Maging Better Person",
      description: "Mag-focus sa personal growth at development. Matuto ng strategies para sa best life pagkatapos ng 70."
    },
    globalCommunity: {
      title: "Global Community",
      description: "Makipag-connect sa mga tao mula sa buong mundo. Magbahagi ng culture, language, at experiences sa diverse community."
    },
    cryptoWeb3: {
      title: "Crypto & Web3",
      description: "Matuto ng cryptocurrencies at blockchain technology. Manatiling updated sa digital financial revolution."
    },
    videoCreation: {
      title: "Video Creation",
      description: "Matuto ng video creation skills para ibahagi ang inyong mga kwento. Lumikha ng content at makipag-connect sa bagong generation."
    },
    
    perfectLocation: "Perfect na Lokasyon",
    locationDescription: "Ang Forest City ay strategically located",
    toSingapore: "sa Singapore",
    minutes: "minuto",
    tropical: "Tropical",
    perfectWeather: "perfect weather buong taon",
    modern: "Modern",
    forestCity: "state-of-the-art facilities sa Forest City",
    
    contactTitle: "Bisitahin ang Aming Campus",
    contactDescription: "Mag-arrange ng visit para first-hand na ma-experience ang buhay sa Network School Forest City",
    nameLabel: "Pangalan",
    emailLabel: "Email",
    phoneLabel: "Telepono",
    visitTypeLabel: "Uri ng Visit",
    visitTypePlaceholder: "Piliin ang uri ng visit",
    visitOptions: {
      campus: "Campus Visit",
      virtual: "Virtual Visit",
      info: "Information Session"
    },
    messageLabel: "Mensahe",
    submitInquiry: "I-submit ang Inquiry",
    
    newsletterTitle: "Manatiling Connected",
    newsletterDescription: "Mag-subscribe sa aming newsletter para sa latest updates",
    subscribeNewsletter: "Mag-subscribe sa Newsletter",
    
    footerDescription: "Forest City, Malaysia • Ang susunod ninyong chapter ay nagsisimula dito",
    
    inquirySent: "Salamat! Matagumpay na naipadala ang inyong inquiry.",
    subscriptionSuccess: "Salamat sa pag-subscribe sa aming newsletter!",
    errorMessage: "May nangyaring mali. Subukan ulit."
  },

  vi: {
    siteTitle: "Network School Forest City",
    heroTitle: "Cuộc sống sau 70 tuổi tại Network School",
    heroSubtitle: "Khám phá những lợi ích của việc sống tại Network School ở Forest City, Malaysia - chỉ 15 phút qua một cây cầu ngắn đến Singapore",
    applyNow: "Đăng ký ngay",
    advantagesTitle: "14 tính năng tôi thích ở Network School",
    
    fitness: {
      title: "Cơ sở thể dục hiện đại",
      description: "Thiết bị gym hiện đại được thiết kế cho người cao tuổi. Huấn luyện viên cá nhân chuyên về các chương trình thể dục phù hợp với tuổi tác."
    },
    pools: {
      title: "Hồ bơi đẹp",
      description: "Nhiều hồ bơi bao gồm các tùy chọn sưởi ấm. Hoàn hảo cho tập thể dục ít tác động và thư giãn trong thời tiết nhiệt đới."
    },
    nutrition: {
      title: "Dinh dưỡng Blueprint Food",
      description: "Bữa ăn được tối ưu hóa khoa học được thiết kế cho tuổi thọ. Nguyên liệu tươi, lành mạnh được chuẩn bị bởi các đầu bếp chuyên gia."
    },
    morningRuck: {
      title: "Đi bộ buổi sáng",
      description: "Bắt đầu ngày mới với những chuyến đi bộ nhóm tràn đầy năng lượng. Xây dựng sức mạnh và cộng đồng trong khi khám phá Forest City."
    },
    smartYoungPeople: {
      title: "Những người trẻ thông minh",
      description: "Nhận được những góc nhìn mới mẻ về cuộc sống từ những tâm hồn trẻ tài năng. Học hỏi lẫn nhau và giữ tinh thần minh mẫn."
    },
    aiClasses: {
      title: "Lớp học AI",
      description: "Học trí tuệ nhân tạo theo cách thực tế, dễ hiểu. Cập nhật với tương lai của công nghệ."
    },
    bookClubs: {
      title: "Lớp học sách",
      description: "Thảo luận về những cuốn sách hay với những người học suốt đời khác. Mở rộng tâm trí thông qua văn học và ý tưởng."
    },
    coding: {
      title: "Lập trình Vibe",
      description: "Học các công cụ mới như lập trình vibe - lập trình hiện đại được làm cho dễ tiếp cận. Tạo ra và xây dựng trong kỷ nguyên số."
    },
    networkStates: {
      title: "Xây dựng các Bang Mạng",
      description: "Giúp thiết kế tương lai bằng cách xây dựng ý tưởng cho các bang mạng khác. Trở thành một phần của việc tạo ra các cộng đồng ngày mai."
    },
    improv: {
      title: "Lớp học ứng biến",
      description: "Thể hiện bản thân một cách sáng tạo thông qua sân khấu ứng biến. Vui vẻ trong khi xây dựng sự tự tin và kỹ năng xã hội."
    },
    countryRock: {
      title: "Đêm Country Rock",
      description: "Thưởng thức nhạc sống và giải trí với cộng đồng của bạn. Nhảy múa, hát theo và tạo ra những kỷ niệm cùng nhau."
    },
    blueprintFood: {
      title: "Blueprint Food",
      description: "Dinh dưỡng được tối ưu hóa cho tuổi thọ và sức khỏe tối ưu. Thực phẩm được thiết kế với khoa học mới nhất."
    },
    lifestyle: {
      title: "Lối sống năng động",
      description: "Sống năng động và khỏe mạnh với các hoạt động hàng ngày thú vị. Giữ năng lượng và động lực mỗi ngày."
    },
    betterPerson: {
      title: "Cách trở thành người tốt hơn",
      description: "Tập trung vào sự phát triển và cải thiện cá nhân. Học các chiến lược để sống cuộc sống tốt nhất sau tuổi 70."
    },
    globalCommunity: {
      title: "Cộng đồng toàn cầu",
      description: "Kết nối với mọi người từ khắp nơi trên thế giới. Chia sẻ văn hóa, ngôn ngữ và kinh nghiệm trong một cộng đồng đa dạng."
    },
    cryptoWeb3: {
      title: "Crypto & Web3",
      description: "Tìm hiểu về tiền điện tử và công nghệ blockchain. Cập nhật với cuộc cách mạng tài chính số."
    },
    videoCreation: {
      title: "Tạo video",
      description: "Học kỹ năng tạo video để chia sẻ câu chuyện của bạn. Tạo nội dung và kết nối với thế hệ mới."
    },
    
    perfectLocation: "Vị trí hoàn hảo",
    locationDescription: "Forest City nằm ở vị trí chiến lược",
    toSingapore: "đến Singapore",
    minutes: "phút",
    tropical: "Nhiệt đới",
    perfectWeather: "thời tiết hoàn hảo quanh năm",
    modern: "Hiện đại",
    forestCity: "cơ sở vật chất tiên tiến tại Forest City",
    
    contactTitle: "Thăm quan campus của chúng tôi",
    contactDescription: "Sắp xếp một chuyến thăm để trải nghiệm trực tiếp cuộc sống tại Network School Forest City",
    nameLabel: "Tên",
    emailLabel: "Email",
    phoneLabel: "Điện thoại",
    visitTypeLabel: "Loại thăm quan",
    visitTypePlaceholder: "Chọn loại thăm quan",
    visitOptions: {
      campus: "Thăm quan campus",
      virtual: "Thăm quan ảo",
      info: "Phiên thông tin"
    },
    messageLabel: "Tin nhắn",
    submitInquiry: "Gửi yêu cầu",
    
    newsletterTitle: "Giữ liên lạc",
    newsletterDescription: "Đăng ký nhận bản tin của chúng tôi để cập nhật thông tin mới nhất",
    subscribeNewsletter: "Đăng ký nhận bản tin",
    
    footerDescription: "Forest City, Malaysia • Chương tiếp theo của bạn bắt đầu từ đây",
    
    inquirySent: "Cảm ơn! Yêu cầu của bạn đã được gửi thành công.",
    subscriptionSuccess: "Cảm ơn bạn đã đăng ký nhận bản tin của chúng tôi!",
    errorMessage: "Có lỗi xảy ra. Vui lòng thử lại."
  }
};

export type Language = keyof typeof translations;

export const languages: { code: Language; name: string; flag: string }[] = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'zh', name: '中文', flag: '🇨🇳' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'ms', name: 'Bahasa Melayu', flag: '🇲🇾' },
  { code: 'th', name: 'ไทย', flag: '🇹🇭' },
  { code: 'ta', name: 'தமிழ்', flag: '🇮🇳' },
  { code: 'tl', name: 'Filipino', flag: '🇵🇭' },
  { code: 'vi', name: 'Tiếng Việt', flag: '🇻🇳' },
  { code: 'hi', name: 'हिन्दी', flag: '🇮🇳' },
  { code: 'ko', name: '한국어', flag: '🇰🇷' },
  { code: 'ja', name: '日本語', flag: '🇯🇵' }
];