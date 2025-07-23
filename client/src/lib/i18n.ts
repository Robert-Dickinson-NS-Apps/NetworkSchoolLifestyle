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
    advantagesTitle: "14 Advantages of Life After 70",
    
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
    advantagesTitle: "14 Ventajas de la Vida Después de los 70",
    
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
    advantagesTitle: "70岁后生活的14个优势",
    
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
    advantagesTitle: "14 Avantages de la Vie Après 70 Ans",
    
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
  }
};

export type Language = keyof typeof translations;

export const languages: { code: Language; name: string; flag: string }[] = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'zh', name: '中文', flag: '🇨🇳' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' }
];