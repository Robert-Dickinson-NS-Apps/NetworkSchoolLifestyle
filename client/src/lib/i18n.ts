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
  spongeCity: {
    title: string;
    description: string;
  };
  lifelongLearning: {
    title: string;
    description: string;
  };
  ideaFactory: {
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
    advantagesTitle: "20 Features I like at Network School",
    
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
      description: "I walk with founders half my age. They get my life experience; I get their energy. We solve problems together before 8am."
    },
    smartYoungPeople: {
      title: "Smart Younger People",
      description: "Living alongside brilliant 20-somethings keeps me sharp. My neighbor debugs my code; I share 50 years of life lessons. The kids under 10 are amazing vibe coders too!"
    },
    aiClasses: {
      title: "AI Classes",
      description: "I'd never touched AI before moving here. Now I use ChatGPT daily and built my first app. The young instructors are patient and assume nothing."
    },
    bookClubs: {
      title: "Book Classes",
      description: "Discuss great books with fellow lifelong learners. Expand your mind through literature and ideas."
    },
    coding: {
      title: "Vibe Coding",
      description: "At 70, I'm learning to code. Not because I need a job, but because creating things is energizing. My neighbor (age 26) debugs my code over breakfast."
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
    spongeCity: {
      title: "Live in a Sponge City",
      description: "Experience innovative urban water management. Forest City's sponge city design naturally absorbs, stores, and purifies rainwater while preventing floods."
    },
    lifelongLearning: {
      title: "Lifelong Learning Opportunities",
      description: "Continuous education programs designed for seniors. From new technologies to traditional crafts, never stop growing and discovering."
    },
    ideaFactory: {
      title: "Idea Factory Environment",
      description: "Collaborative innovation spaces where creativity thrives. Transform ideas into reality with fellow innovators and cutting-edge resources."
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
    advantagesTitle: "20 Características que me gustan de Network School",
    
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
    spongeCity: {
      title: "Vive en una Ciudad Esponja",
      description: "Experimenta la gestión urbana innovadora del agua. El diseño de ciudad esponja de Forest City absorbe, almacena y purifica naturalmente el agua de lluvia mientras previene inundaciones."
    },
    lifelongLearning: {
      title: "Oportunidades de Aprendizaje de por Vida",
      description: "Programas educativos continuos diseñados para personas mayores. Desde nuevas tecnologías hasta oficios tradicionales, nunca dejes de crecer y descubrir."
    },
    ideaFactory: {
      title: "Entorno de Fábrica de Ideas",
      description: "Espacios de innovación colaborativa donde florece la creatividad. Transforma ideas en realidad con compañeros innovadores y recursos de vanguardia."
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
    advantagesTitle: "我喜欢Network School的20个特色",
    
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
    spongeCity: {
      title: "生活在海绵城市",
      description: "体验创新的城市水管理。森林城市的海绵城市设计自然吸收、储存和净化雨水，同时防止洪水。"
    },
    lifelongLearning: {
      title: "终身学习机会",
      description: "为老年人设计的持续教育项目。从新技术到传统工艺，永远不要停止成长和发现。"
    },
    ideaFactory: {
      title: "创意工厂环境",
      description: "创造力蓬勃发展的协作创新空间。与创新伙伴和尖端资源一起将想法变为现实。"
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
    advantagesTitle: "20 Caractéristiques que j.aime à Network School",
    
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
    spongeCity: {
      title: "Vivre dans une Ville Éponge",
      description: "Découvrez une gestion urbaine innovante de l'eau. La conception de ville éponge de Forest City absorbe, stocke et purifie naturellement l'eau de pluie tout en prévenant les inondations."
    },
    lifelongLearning: {
      title: "Opportunités d'Apprentissage à Vie",
      description: "Programmes éducatifs continus conçus pour les seniors. Des nouvelles technologies aux métiers traditionnels, ne cessez jamais de grandir et de découvrir."
    },
    ideaFactory: {
      title: "Environnement d'Usine à Idées",
      description: "Espaces d'innovation collaborative où la créativité prospère. Transformez les idées en réalité avec des collègues innovateurs et des ressources de pointe."
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
    advantagesTitle: "20 Ciri yang saya suka di Network School",
    
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
    spongeCity: {
      title: "Kehidupan di Bandar Span",
      description: "Alami pengurusan air bandar yang inovatif. Reka bentuk bandar span Forest City menyerap, menyimpan dan membersihkan air hujan secara semula jadi sambil mencegah banjir."
    },
    lifelongLearning: {
      title: "Peluang Pembelajaran Sepanjang Hayat",
      description: "Program pendidikan berterusan yang direka untuk warga emas. Dari teknologi baharu hingga kemahiran tradisional, jangan berhenti berkembang dan menemui."
    },
    ideaFactory: {
      title: "Persekitaran Kilang Idea",
      description: "Ruang inovasi kolaboratif di mana kreativiti berkembang. Ubah idea menjadi realiti dengan rakan inovator dan sumber canggih."
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
    advantagesTitle: "20 คุณสมบัติที่ฉันชอบที่ Network School",
    
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
    spongeCity: {
      title: "ชีวิตในเมืองฟองน้ำ",
      description: "สัมผัสการจัดการน้ำเมืองที่เป็นนวัตกรรม การออกแบบเมืองฟองน้ำของ Forest City ดูดซับ เก็บ และทำความสะอาดน้ำฝนตามธรรมชาติในขณะที่ป้องกันน้ำท่วม"
    },
    lifelongLearning: {
      title: "โอกาสการเรียนรู้ตลอดชีวิต",
      description: "โปรแกรมการศึกษาต่อเนื่องที่ออกแบบสำหรับผู้สูงอายุ ตั้งแต่เทคโนโลยีใหม่ไปจนถึงงานฝีมือแบบดั้งเดิม ไม่เคยหยุดเติบโตและค้นพบ"
    },
    ideaFactory: {
      title: "สภาพแวดล้อมโรงงานไอเดีย",
      description: "พื้นที่นวัตกรรมร่วมกันที่ความคิดสร้างสรรค์เติบโต เปลี่ยนไอเดียให้เป็นจริงกับเพื่อนนักสร้างสรรค์และทรัพยากรขั้นสูง"
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
    advantagesTitle: "Network School இல் நான் விரும்பும் 20 அம்சங்கள்",
    
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
    spongeCity: {
      title: "ஸ்பாஞ்ச் நகர வாழ்க்கை",
      description: "புதுமையான நகர நீர் மேலாண்மையை அனுபவிக்கவும். Forest City இன் ஸ்பாஞ்ச் நகர வடிவமைப்பு மழை நீரை இயற்கையாக உறிஞ்சி, சேமித்து, சுத்தப்படுத்தும் அதே நேரத்தில் வெள்ளத்தைத் தடுக்கிறது."
    },
    lifelongLearning: {
      title: "வாழ்நாள் முழுவதும் கற்றல் வாய்ப்புகள்",
      description: "முதியவர்களுக்காக வடிவமைக்கப்பட்ட தொடர் கல்வி திட்டங்கள். புதிய தொழில்நுட்பங்கள் முதல் பாரம்பரிய கைவினைகள் வரை, வளர்ச்சியையும் கண்டுபிடிப்பையும் நிறுத்தாதீர்கள்."
    },
    ideaFactory: {
      title: "ஐடியா ஃபேக்டரி சூழல்",
      description: "ஒத்துழைப்பு புதுமை இடங்கள் அங்கு படைப்பாற்றல் செழிக்கிறது. புதுமையான சக பணியாளர்கள் மற்றும் அதிநவீன வளங்களுடன் ஐடியாக்களை நிஜமாக்குங்கள்."
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
    advantagesTitle: "20 na Katangian na Gusto Ko sa Network School",
    
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
    spongeCity: {
      title: "Mamuhay sa Sponge City",
      description: "Makaranasan ang innovative urban water management. Ang Sponge City design ng Forest City ay natural na sumusupsop, nag-iimbak, at naglilinis ng ulan habang pinipigilan ang pagbaha."
    },
    lifelongLearning: {
      title: "Lifelong Learning",
      description: "Manatiling curious at patuloy na matuto. Mga klase, workshop, at mga oportunidad para sa intellectual growth sa lahat ng edad."
    },
    ideaFactory: {
      title: "Idea Factory Environment",
      description: "Collaborative innovation spaces kung saan umuusbong ang creativity. Gawing totoo ang mga ideya kasama ng innovative peers at state-of-the-art equipment."
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
    advantagesTitle: "20 tính năng tôi thích ở Network School",
    
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
    spongeCity: {
      title: "Sống trong thành phố bọt biển",
      description: "Trải nghiệm quản lý nước đô thị sáng tạo. Thiết kế thành phố bọt biển Forest City tự nhiên hấp thụ, lưu trữ và làm sạch nước mưa trong khi ngăn ngừa lũ lụt."
    },
    lifelongLearning: {
      title: "Cơ hội học tập suốt đời",
      description: "Các chương trình giáo dục liên tục được thiết kế cho người cao tuổi. Từ công nghệ mới đến thủ công truyền thống, không bao giờ ngừng phát triển và khám phá."
    },
    ideaFactory: {
      title: "Môi trường nhà máy ý tưởng",
      description: "Không gian đổi mới hợp tác nơi sự sáng tạo phát triển mạnh. Biến ý tưởng thành hiện thực với các đối tác đổi mới và tài nguyên tiên tiến."
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
  },

  ru: {
    siteTitle: "Network School Forest City",
    heroTitle: "Жизнь после 70 в Network School",
    heroSubtitle: "Откройте для себя преимущества жизни в Network School в Форест-Сити, Малайзия - всего в 15 минутах езды по короткому мосту до Сингапура",
    applyNow: "Подать заявку",
    advantagesTitle: "20 особенностей, которые мне нравятся в Network School",
    
    fitness: {
      title: "Современные фитнес-центры",
      description: "Современное спортивное оборудование, разработанное для пожилых людей. Персональные тренеры, специализирующиеся на программах фитнеса, подходящих по возрасту."
    },
    pools: {
      title: "Красивые бассейны",
      description: "Несколько бассейнов, включая подогреваемые варианты. Идеально подходят для упражнений с низкой нагрузкой и отдыха в тропическую погоду."
    },
    nutrition: {
      title: "Питание Blueprint Food",
      description: "Научно оптимизированные блюда, разработанные для долголетия. Свежие, здоровые ингредиенты, приготовленные опытными поварами."
    },
    morningRuck: {
      title: "Утренние прогулки",
      description: "Начните свой день с энергичных групповых прогулок. Укрепляйте силы и сообщество, исследуя Форест-Сити."
    },
    smartYoungPeople: {
      title: "Умные молодые люди",
      description: "Получайте свежие взгляды на жизнь от блестящих молодых умов. Учитесь друг у друга и оставайтесь ментально острыми."
    },
    aiClasses: {
      title: "Курсы ИИ",
      description: "Изучайте искусственный интеллект практичными, легко понятными способами. Оставайтесь в курсе будущего технологий."
    },
    bookClubs: {
      title: "Книжные классы",
      description: "Обсуждайте великие книги с единомышленниками, изучающими всю жизнь. Расширяйте свой разум через литературу и идеи."
    },
    coding: {
      title: "Vibe программирование",
      description: "Изучайте новые инструменты, такие как vibe программирование - современное программирование, ставшее доступным. Создавайте и стройте в цифровую эпоху."
    },
    networkStates: {
      title: "Создание сетевых государств",
      description: "Помогайте проектировать будущее, создавая идеи для других сетевых государств. Станьте частью создания сообществ завтрашнего дня."
    },
    improv: {
      title: "Курсы импровизации",
      description: "Развивайте креативность и уверенность через импровизационный театр. Веселитесь, развивая коммуникативные навыки."
    },
    countryRock: {
      title: "Вечера кантри-рока",
      description: "Наслаждайтесь живой музыкой и танцами. Соединяйтесь с другими через универсальный язык музыки."
    },
    blueprintFood: {
      title: "Здоровый образ жизни",
      description: "Следуйте основанным на доказательствах протоколам питания. Оптимизируйте свое здоровье с научно обоснованными планами питания."
    },
    lifestyle: {
      title: "Активный социальный образ жизни",
      description: "Участвуйте в разнообразных мероприятиях и событиях. Стройте значимые дружеские отношения и оставайтесь социально активными."
    },
    betterPerson: {
      title: "Как стать лучшим человеком",
      description: "Сосредоточьтесь на личностном росте и развитии. Изучайте стратегии для лучшей жизни после 70."
    },
    globalCommunity: {
      title: "Люди со всего мира",
      description: "Встречайте увлекательных людей из десятков разных стран. Расширяйте свое мировоззрение через разнообразные дружеские отношения."
    },
    cryptoWeb3: {
      title: "Изучение криптовалют и Web3",
      description: "Понимайте будущее денег и интернета. Получайте экспертные рекомендации по цифровым валютам и блокчейн-технологиям."
    },
    videoCreation: {
      title: "Создание лучших вертикальных видео",
      description: "Изучайте создание привлекательных и более коротких вертикальных видео. Овладевайте современными техниками создания видео для социальных сетей и личных проектов."
    },
    spongeCity: {
      title: "Жизнь в городе-губке",
      description: "Испытайте инновационное управление городской водой. Дизайн города-губки Форест-Сити естественно поглощает, хранит и очищает дождевую воду, предотвращая наводнения."
    },
    lifelongLearning: {
      title: "Возможности непрерывного обучения",
      description: "Программы непрерывного образования, разработанные для пожилых людей. От новых технологий до традиционных ремесел - никогда не переставайте расти и открывать."
    },
    ideaFactory: {
      title: "Среда фабрики идей",
      description: "Пространства совместных инноваций, где процветает креативность. Превращайте идеи в реальность вместе с единомышленниками и передовыми ресурсами."
    },
    
    perfectLocation: "Идеальное расположение",
    locationDescription: "Расположен в Малайзии, всего через короткий мост до Сингапура",
    toSingapore: "До Сингапура",
    minutes: "15 минут",
    tropical: "Тропический",
    perfectWeather: "Идеальная погода",
    modern: "Современный",
    forestCity: "Форест-Сити",
    
    contactTitle: "Запланируйте посещение кампуса",
    contactDescription: "Испытайте образ жизни Network School из первых рук. Забронируйте тур по нашему кампусу в Форест-Сити.",
    nameLabel: "Полное имя",
    emailLabel: "Email адрес",
    phoneLabel: "Номер телефона",
    visitTypeLabel: "Тип посещения",
    visitTypePlaceholder: "Выберите тип посещения",
    visitOptions: {
      campus: "Тур по кампусу",
      virtual: "Виртуальный тур",
      info: "Информационная сессия"
    },
    messageLabel: "Сообщение (Необязательно)",
    submitInquiry: "Отправить запрос",
    
    newsletterTitle: "Оставайтесь на связи",
    newsletterDescription: "Получайте обновления о событиях Network School и новостях сообщества.",
    subscribeNewsletter: "Подписаться на рассылку",
    
    footerDescription: "Форест-Сити, Малайзия • Ваша следующая глава начинается здесь",
    
    inquirySent: "Спасибо! Ваш запрос успешно отправлен.",
    subscriptionSuccess: "Спасибо за подписку на нашу рассылку!",
    errorMessage: "Что-то пошло не так. Пожалуйста, попробуйте еще раз."
  },

  ar: {
    siteTitle: "Network School Forest City",
    heroTitle: "الحياة بعد سن 70 في Network School",
    heroSubtitle: "اكتشف مزايا العيش في Network School في Forest City، ماليزيا - 15 دقيقة فقط عبر جسر قصير إلى سنغافورة",
    applyNow: "قدم الآن",
    advantagesTitle: "20 ميزة أحبها في Network School",
    
    fitness: {
      title: "مرافق اللياقة البدنية المتطورة",
      description: "معدات صالة ألعاب رياضية حديثة مصممة لكبار السن. مدربون شخصيون متخصصون في برامج اللياقة البدنية المناسبة للعمر."
    },
    pools: {
      title: "مسابح جميلة",
      description: "عدة مسابح تشمل خيارات مدفئة. مثالية للتمارين قليلة التأثير والاسترخاء في المناخ الاستوائي."
    },
    nutrition: {
      title: "تغذية Blueprint Food",
      description: "وجبات محسّنة علمياً مصممة للطول العمر. مكونات طازجة وصحية يحضرها طهاة خبراء."
    },
    morningRuck: {
      title: "المشي الصباحي",
      description: "ابدأ يومك بمشي جماعي منشط. ابني القوة والمجتمع أثناء استكشاف Forest City."
    },
    smartYoungPeople: {
      title: "الشباب الأذكياء",
      description: "احصل على وجهات نظر جديدة حول الحياة من العقول الشابة اللامعة. تعلم من بعضكم البعض وحافظ على حدة الذهن."
    },
    aiClasses: {
      title: "دروس الذكاء الاصطناعي",
      description: "تعلم الذكاء الاصطناعي بطرق عملية وسهلة الفهم. ابق محدثاً مع مستقبل التكنولوجيا."
    },
    bookClubs: {
      title: "دروس الكتب",
      description: "ناقش الكتب العظيمة مع متعلمين آخرين مدى الحياة. وسع عقلك من خلال الأدب والأفكار."
    },
    coding: {
      title: "برمجة Vibe",
      description: "تعلم أدوات جديدة مثل برمجة vibe - البرمجة الحديثة سهلة المنال. اخلق وابني في العصر الرقمي."
    },
    networkStates: {
      title: "بناء دول الشبكة",
      description: "ساعد في تصميم المستقبل من خلال بناء أفكار لدول شبكة أخرى. شارك في خلق مجتمعات الغد."
    },
    improv: {
      title: "دروس الارتجال",
      description: "طور الإبداع والثقة من خلال المسرح الارتجالي. استمتع أثناء تطوير مهارات التواصل."
    },
    countryRock: {
      title: "أمسيات الكانتري روك",
      description: "استمتع بالموسيقى الحية والرقص. تواصل مع الآخرين من خلال اللغة العالمية للموسيقى."
    },
    blueprintFood: {
      title: "نمط حياة غذائي",
      description: "اتبع البروتوكولات الغذائية المبنية على الأدلة. حسن صحتك مع خطط الوجبات المدعومة علمياً."
    },
    lifestyle: {
      title: "نمط حياة اجتماعي نشط",
      description: "شارك في أنشطة وفعاليات متنوعة. ابني صداقات ذات معنى وابق منخرطاً اجتماعياً."
    },
    betterPerson: {
      title: "كيفية أن تكون شخصاً أفضل",
      description: "ركز على النمو والتطوير الشخصي. تعلم الاستراتيجيات لعيش أفضل حياتك بعد سن 70."
    },
    globalCommunity: {
      title: "أشخاص من جميع أنحاء العالم",
      description: "التق بأشخاص رائعين من عشرات البلدان المختلفة. وسع نظرتك للعالم من خلال صداقات متنوعة."
    },
    cryptoWeb3: {
      title: "تعلم العملات المشفرة وWeb3",
      description: "افهم مستقبل المال والإنترنت. احصل على إرشادات خبراء حول العملات الرقمية وتكنولوجيا البلوك تشين."
    },
    videoCreation: {
      title: "إنشاء مقاطع فيديو أفضل عمودية",
      description: "تعلم كيفية صنع مقاطع فيديو عمودية جذابة وأقصر. أتقن تقنيات صنع الفيديو الحديثة لوسائل التواصل الاجتماعي والمشاريع الشخصية."
    },
    spongeCity: {
      title: "العيش في مدينة إسفنجية",
      description: "اختبر إدارة المياه الحضرية المبتكرة. تصميم مدينة Forest City الإسفنجية يمتص ويخزن وينقي مياه الأمطار طبيعياً بينما يمنع الفيضانات."
    },
    lifelongLearning: {
      title: "فرص التعلم مدى الحياة",
      description: "برامج تعليمية مستمرة مصممة لكبار السن. من التقنيات الجديدة إلى الحرف التقليدية، لا تتوقف أبداً عن النمو والاكتشاف."
    },
    ideaFactory: {
      title: "بيئة مصنع الأفكار",
      description: "مساحات الابتكار التعاونية حيث تزدهر الإبداع. حول الأفكار إلى واقع مع زملاء مبتكرين وموارد متطورة."
    },
    
    perfectLocation: "الموقع المثالي",
    locationDescription: "يقع في ماليزيا، عبر جسر قصير فقط إلى سنغافورة",
    toSingapore: "إلى سنغافورة",
    minutes: "15 دقيقة",
    tropical: "استوائي",
    perfectWeather: "طقس مثالي",
    modern: "حديث",
    forestCity: "Forest City",
    
    contactTitle: "اجدولة زيارة للحرم الجامعي",
    contactDescription: "اختبر نمط حياة Network School بنفسك. احجز جولة في حرم Forest City الجامعي.",
    nameLabel: "الاسم الكامل",
    emailLabel: "عنوان البريد الإلكتروني",
    phoneLabel: "رقم الهاتف",
    visitTypeLabel: "نوع الزيارة",
    visitTypePlaceholder: "اختر نوع الزيارة",
    visitOptions: {
      campus: "جولة في الحرم الجامعي",
      virtual: "جولة افتراضية",
      info: "جلسة معلومات"
    },
    messageLabel: "رسالة (اختيارية)",
    submitInquiry: "إرسال الاستفسار",
    
    newsletterTitle: "ابق على تواصل",
    newsletterDescription: "احصل على تحديثات حول أحداث Network School وأخبار المجتمع.",
    subscribeNewsletter: "اشترك في النشرة الإخبارية",
    
    footerDescription: "Forest City، ماليزيا • فصلك التالي يبدأ هنا",
    
    inquirySent: "شكراً! تم إرسال استفسارك بنجاح.",
    subscriptionSuccess: "شكراً لاشتراكك في نشرتنا الإخبارية!",
    errorMessage: "حدث خطأ ما. يرجى المحاولة مرة أخرى."
  },

  hi: {
    siteTitle: "Network School Forest City",
    heroTitle: "Network School में 70 के बाद जीवन",
    heroSubtitle: "मलेशिया के Forest City में Network School में रहने के फायदे खोजें - सिंगापुर के लिए एक छोटे पुल के माध्यम से केवल 15 मिनट",
    applyNow: "अभी आवेदन करें",
    advantagesTitle: "Network School में मुझे पसंद आने वाली 20 विशेषताएं",
    
    fitness: {
      title: "अत्याधुनिक फिटनेस सुविधाएं",
      description: "वरिष्ठों के लिए डिज़ाइन किए गए आधुनिक जिम उपकरण। आयु-उपयुक्त फिटनेस कार्यक्रमों में विशेषज्ञ व्यक्तिगत प्रशिक्षक।"
    },
    pools: {
      title: "सुंदर स्विमिंग पूल",
      description: "गर्म विकल्पों सहित कई पूल। उष्णकटिबंधीय मौसम में कम प्रभाव वाले व्यायाम और विश्राम के लिए बिल्कुल सही।"
    },
    nutrition: {
      title: "Blueprint Food पोषण",
      description: "दीर्घायु के लिए वैज्ञानिक रूप से अनुकूलित भोजन। विशेषज्ञ रसोइयों द्वारा तैयार ताजे, स्वस्थ सामग्री।"
    },
    morningRuck: {
      title: "सुबह की सैर",
      description: "ऊर्जावान समूह चलने के साथ अपना दिन शुरू करें। Forest City की खोज करते समय शक्ति और समुदाय का निर्माण करें।"
    },
    smartYoungPeople: {
      title: "स्मार्ट युवा लोग",
      description: "प्रतिभाशाली युवा दिमागों से जीवन पर नए दृष्टिकोण प्राप्त करें। एक-दूसरे से सीखें और मानसिक रूप से तेज रहें।"
    },
    aiClasses: {
      title: "AI कक्षाएं",
      description: "व्यावहारिक, समझने में आसान तरीकों से कृत्रिम बुद्धिमत्ता सीखें। तकनीक के भविष्य के साथ अपडेट रहें।"
    },
    bookClubs: {
      title: "पुस्तक कक्षाएं",
      description: "अन्य आजीवन शिक्षार्थियों के साथ महान पुस्तकों पर चर्चा करें। साहित्य और विचारों के माध्यम से अपने मन का विस्तार करें।"
    },
    coding: {
      title: "Vibe कोडिंग",
      description: "vibe कोडिंग जैसे नए उपकरण सीखें - आधुनिक प्रोग्रामिंग को सुलभ बनाया गया। डिजिटल युग में बनाएं और निर्माण करें।"
    },
    networkStates: {
      title: "नेटवर्क राज्यों का निर्माण",
      description: "अन्य नेटवर्क राज्यों के लिए विचारों का निर्माण करके भविष्य को डिजाइन करने में मदद करें। कल के समुदायों को बनाने में भाग लें।"
    },
    improv: {
      title: "तात्कालिकता कक्षाएं",
      description: "तात्कालिकता थिएटर के माध्यम से रचनात्मकता और आत्मविश्वास विकसित करें। संचार कौशल विकसित करते समय मज़े करें।"
    },
    countryRock: {
      title: "कंट्री रॉक रातें",
      description: "लाइव संगीत और नृत्य का आनंद लें। संगीत की सार्वभौमिक भाषा के माध्यम से दूसरों से जुड़ें।"
    },
    blueprintFood: {
      title: "पोषणीय जीवनशैली",
      description: "साक्ष्य-आधारित पोषण प्रोटोकॉल का पालन करें। वैज्ञानिक रूप से समर्थित भोजन योजनाओं के साथ अपने स्वास्थ्य को अनुकूलित करें।"
    },
    lifestyle: {
      title: "सक्रिय सामाजिक जीवनशैली",
      description: "विविध गतिविधियों और कार्यक्रमों में भाग लें। अर्थपूर्ण मित्रता बनाएं और सामाजिक रूप से संलग्न रहें।"
    },
    betterPerson: {
      title: "बेहतर व्यक्ति कैसे बनें",
      description: "व्यक्तिगत विकास और विकास पर ध्यान दें। 70 के बाद अपना सर्वश्रेष्ठ जीवन जीने की रणनीति सीखें।"
    },
    globalCommunity: {
      title: "दुनिया भर के लोग",
      description: "दर्जनों विभिन्न देशों के आकर्षक लोगों से मिलें। विविध मित्रता के माध्यम से अपने विश्व दृष्टिकोण का विस्तार करें।"
    },
    cryptoWeb3: {
      title: "Crypto और Web3 सीखें",
      description: "पैसे और इंटरनेट के भविष्य को समझें। डिजिटल मुद्राओं और ब्लॉकचेन तकनीक पर विशेषज्ञ मार्गदर्शन प्राप्त करें।"
    },
    videoCreation: {
      title: "बेहतर वर्टिकल वीडियो बनाएं",
      description: "आकर्षक और छोटे वर्टिकल वीडियो बनाना सीखें। सामाजिक मीडिया और व्यक्तिगत परियोजनाओं के लिए आधुनिक वीडियो निर्माण तकनीकों में महारत हासिल करें।"
    },
    spongeCity: {
      title: "स्पंज सिटी में जीवन",
      description: "नवाचार शहरी जल प्रबंधन का अनुभव करें। Forest City का स्पंज सिटी डिज़ाइन प्राकृतिक रूप से बारिश के पानी को अवशोषित, संग्रहीत और शुद्ध करता है जबकि बाढ़ को रोकता है।"
    },
    lifelongLearning: {
      title: "आजीवन सीखने के अवसर",
      description: "वरिष्ठों के लिए डिज़ाइन किए गए निरंतर शिक्षा कार्यक्रम। नई तकनीकों से लेकर पारंपरिक शिल्प तक, कभी भी बढ़ना और खोजना बंद न करें।"
    },
    ideaFactory: {
      title: "आइडिया फैक्ट्री वातावरण",
      description: "सहयोगी नवाचार स्थान जहां रचनात्मकता फलती-फूलती है। नवाचारी साथियों और अत्याधुनिक संसाधनों के साथ विचारों को वास्तविकता में बदलें।"
    },
    
    perfectLocation: "परफेक्ट लोकेशन",
    locationDescription: "मलेशिया में स्थित, सिंगापुर के लिए एक छोटे पुल के पार",
    toSingapore: "सिंगापुर तक",
    minutes: "15 मिनट",
    tropical: "उष्णकटिबंधीय",
    perfectWeather: "परफेक्ट मौसम",
    modern: "आधुनिक",
    forestCity: "Forest City",
    
    contactTitle: "अपने कैंपस विज़िट का शेड्यूल करें",
    contactDescription: "Network School की जीवनशैली को प्रत्यक्ष रूप से अनुभव करें। हमारे Forest City कैंपस के दौरे को बुक करें।",
    nameLabel: "पूरा नाम",
    emailLabel: "ईमेल पता",
    phoneLabel: "फोन नंबर",
    visitTypeLabel: "विज़िट का प्रकार",
    visitTypePlaceholder: "विज़िट का प्रकार चुनें",
    visitOptions: {
      campus: "कैंपस विज़िट",
      virtual: "वर्चुअल विज़िट",
      info: "सूचना सत्र"
    },
    messageLabel: "संदेश (वैकल्पिक)",
    submitInquiry: "पूछताछ भेजें",
    
    newsletterTitle: "संपर्क में रहें",
    newsletterDescription: "Network School इवेंट्स और कम्युनिटी न्यूज़ के अपडेट प्राप्त करें।",
    subscribeNewsletter: "न्यूज़लेटर की सदस्यता लें",
    
    footerDescription: "Forest City, मलेशिया • आपका अगला अध्याय यहां शुरू होता है",
    
    inquirySent: "धन्यवाद! आपकी पूछताछ सफलतापूर्वक भेजी गई।",
    subscriptionSuccess: "हमारे न्यूज़लेटर की सदस्यता के लिए धन्यवाद!",
    errorMessage: "कुछ गलत हुआ। कृपया फिर से कोशिश करें।"
  },

  bn: {
    siteTitle: "Network School Forest City",
    heroTitle: "Network School এ ৭০ বছর পরের জীবন",
    heroSubtitle: "মালয়েশিয়ার Forest City এ Network School এ বসবাসের সুবিধা আবিষ্কার করুন - সিঙ্গাপুরের দিকে একটি ছোট সেতু পারাপারে মাত্র ১৫ মিনিট",
    applyNow: "এখনই আবেদন করুন",
    advantagesTitle: "Network School এ আমার পছন্দের ২০টি বৈশিষ্ট্য",
    
    fitness: {
      title: "অত্যাধুনিক ফিটনেস সুবিধা",
      description: "বয়স্কদের জন্য ডিজাইন করা আধুনিক জিম সরঞ্জাম। বয়স-উপযুক্ত ফিটনেস প্রোগ্রামে বিশেষজ্ঞ ব্যক্তিগত প্রশিক্ষক।"
    },
    pools: {
      title: "সুন্দর সুইমিং পুল",
      description: "উষ্ণ বিকল্প সহ একাধিক পুল। গ্রীষ্মমন্ডলীয় আবহাওয়ায় কম প্রভাবশালী ব্যায়াম এবং বিশ্রামের জন্য নিখুঁত।"
    },
    nutrition: {
      title: "Blueprint Food পুষ্টি",
      description: "দীর্ঘায়ুর জন্য বৈজ্ঞানিকভাবে অপ্টিমাইজ করা খাবার। বিশেষজ্ঞ শেফদের দ্বারা প্রস্তুত তাজা, স্বাস্থ্যকর উপাদান।"
    },
    morningRuck: {
      title: "সকালের হাঁটা",
      description: "উৎসাহব্যঞ্জক গ্রুপ হাঁটার মাধ্যমে আপনার দিন শুরু করুন। Forest City অন্বেষণের সময় শক্তি এবং সম্প্রদায় গড়ুন।"
    },
    smartYoungPeople: {
      title: "স্মার্ট তরুণরা",
      description: "উজ্জ্বল তরুণ মনের কাছ থেকে জীবন সম্পর্কে নতুন দৃষ্টিভঙ্গি পান। একে অপরের কাছ থেকে শিখুন এবং মানসিকভাবে তীক্ষ্ণ থাকুন।"
    },
    aiClasses: {
      title: "AI ক্লাস",
      description: "ব্যবহারিক, সহজ-বোধগম্য উপায়ে কৃত্রিম বুদ্ধিমত্তা শিখুন। প্রযুক্তির ভবিষ্যতের সাথে আপডেট থাকুন।"
    },
    bookClubs: {
      title: "বই ক্লাস",
      description: "অন্যান্য আজীবন শিক্ষার্থীদের সাথে মহান বই নিয়ে আলোচনা করুন। সাহিত্য এবং ধারণার মাধ্যমে আপনার মন প্রসারিত করুন।"
    },
    coding: {
      title: "Vibe কোডিং",
      description: "vibe কোডিংয়ের মতো নতুন সরঞ্জাম শিখুন - আধুনিক প্রোগ্রামিং অ্যাক্সেসযোগ্য করা হয়েছে। ডিজিটাল যুগে তৈরি এবং নির্মাণ করুন।"
    },
    networkStates: {
      title: "নেটওয়ার্ক রাজ্য নির্মাণ",
      description: "অন্যান্য নেটওয়ার্ক রাজ্যের জন্য ধারণা তৈরি করে ভবিষ্যত ডিজাইন করতে সহায়তা করুন। আগামীর সম্প্রদায় তৈরিতে অংশগ্রহণ করুন।"
    },
    improv: {
      title: "ইমপ্রোভ ক্লাস",
      description: "ইমপ্রোভ থিয়েটারের মাধ্যমে সৃজনশীলতা এবং আত্মবিশ্বাস গড়ুন। যোগাযোগ দক্ষতা বিকাশের সময় মজা করুন।"
    },
    countryRock: {
      title: "কান্ট্রি রক রাত",
      description: "লাইভ সঙ্গীত এবং নৃত্য উপভোগ করুন। সঙ্গীতের সার্বজনীন ভাষার মাধ্যমে অন্যদের সাথে সংযুক্ত হন।"
    },
    blueprintFood: {
      title: "পুষ্টিকর জীবনধারা",
      description: "প্রমাণ-ভিত্তিক পুষ্টি প্রোটোকল অনুসরণ করুন। বৈজ্ঞানিকভাবে সমর্থিত খাবার পরিকল্পনার সাথে আপনার স্বাস্থ্য অপ্টিমাইজ করুন।"
    },
    lifestyle: {
      title: "সক্রিয় সামাজিক জীবনধারা",
      description: "বিভিন্ন কার্যকলাপ এবং ইভেন্টে অংশগ্রহণ করুন। অর্থপূর্ণ বন্ধুত্ব গড়ুন এবং সামাজিকভাবে সক্রিয় থাকুন।"
    },
    betterPerson: {
      title: "কীভাবে আরও ভাল ব্যক্তি হবেন",
      description: "ব্যক্তিগত বৃদ্ধি এবং উন্নতিতে ফোকাস করুন। ৭০ বছর পরে আপনার সেরা জীবনযাপনের কৌশল শিখুন।"
    },
    globalCommunity: {
      title: "বিশ্বের মানুষ",
      description: "কয়েক ডজন বিভিন্ন দেশের আকর্ষণীয় মানুষদের সাথে দেখা করুন। বৈচিত্র্যময় বন্ধুত্বের মাধ্যমে আপনার বিশ্বদৃষ্টিভঙ্গি প্রসারিত করুন।"
    },
    cryptoWeb3: {
      title: "Crypto এবং Web3 শিখুন",
      description: "অর্থ এবং ইন্টারনেটের ভবিষ্যৎ বুঝুন। ডিজিটাল মুদ্রা এবং ব্লকচেইন প্রযুক্তিতে বিশেষজ্ঞ গাইডেন্স পান।"
    },
    videoCreation: {
      title: "আরও ভাল উল্লম্ব ভিডিও তৈরি করুন",
      description: "আকর্ষণীয় এবং ছোট উল্লম্ব ভিডিও তৈরি করা শিখুন। সামাজিক মিডিয়া এবং ব্যক্তিগত প্রকল্পের জন্য আধুনিক ভিডিও তৈরির কৌশলে দক্ষতা অর্জন করুন।"
    },
    spongeCity: {
      title: "স্পঞ্জ সিটিতে জীবন",
      description: "উদ্ভাবনী শহুরে জল ব্যবস্থাপনার অভিজ্ঞতা নিন। Forest City এর স্পঞ্জ সিটি ডিজাইন প্রাকৃতিকভাবে বৃষ্টির পানি শোষণ, সঞ্চয় এবং পরিশুদ্ধ করে যখন বন্যা প্রতিরোধ করে।"
    },
    lifelongLearning: {
      title: "আজীবন শেখার সুযোগ",
      description: "বয়স্কদের জন্য ডিজাইন করা অবিরত শিক্ষা প্রোগ্রাম। নতুন প্রযুক্তি থেকে ঐতিহ্যবাহী কারুশিল্প পর্যন্ত, কখনও বৃদ্ধি এবং আবিষ্কার বন্ধ করবেন না।"
    },
    ideaFactory: {
      title: "আইডিয়া ফ্যাক্টরি পরিবেশ",
      description: "সহযোগিতামূলক উদ্ভাবন স্থান যেখানে সৃজনশীলতা বিকশিত হয়। উদ্ভাবনী সহকর্মী এবং অত্যাধুনিক সম্পদের সাথে ধারণাগুলি বাস্তবে রূপ দিন।"
    },
    
    perfectLocation: "নিখুঁত অবস্থান",
    locationDescription: "মালয়েশিয়ায় অবস্থিত, সিঙ্গাপুরের দিকে একটি ছোট সেতু পারাপারে",
    toSingapore: "সিঙ্গাপুরের দিকে",
    minutes: "১৫ মিনিট",
    tropical: "গ্রীষ্মমন্ডলীয়",
    perfectWeather: "নিখুঁত আবহাওয়া",
    modern: "আধুনিক",
    forestCity: "Forest City",
    
    contactTitle: "আপনার ক্যাম্পাস ভিজিট সময়সূচী করুন",
    contactDescription: "Network School এর জীবনধারা প্রত্যক্ষভাবে অনুভব করুন। আমাদের Forest City ক্যাম্পাসের একটি ট্যুর বুক করুন।",
    nameLabel: "পূর্ণ নাম",
    emailLabel: "ইমেইল ঠিকানা",
    phoneLabel: "ফোন নম্বর",
    visitTypeLabel: "ভিজিটের ধরণ",
    visitTypePlaceholder: "ভিজিটের ধরণ নির্বাচন করুন",
    visitOptions: {
      campus: "ক্যাম্পাস ভিজিট",
      virtual: "ভার্চুয়াল ভিজিট",
      info: "তথ্য সেশন"
    },
    messageLabel: "বার্তা (ঐচ্ছিক)",
    submitInquiry: "অনুসন্ধান পাঠান",
    
    newsletterTitle: "যোগাযোগে থাকুন",
    newsletterDescription: "Network School ইভেন্ট এবং কমিউনিটি নিউজের আপডেট পান।",
    subscribeNewsletter: "নিউজলেটার সাবস্ক্রাইব করুন",
    
    footerDescription: "Forest City, মালয়েশিয়া • আপনার পরবর্তী অধ্যায় এখানে শুরু হয়",
    
    inquirySent: "ধন্যবাদ! আপনার অনুসন্ধান সফলভাবে পাঠানো হয়েছে।",
    subscriptionSuccess: "আমাদের নিউজলেটার সাবস্ক্রাইব করার জন্য ধন্যবাদ!",
    errorMessage: "কিছু ভুল হয়েছে। অনুগ্রহ করে আবার চেষ্টা করুন।"
  },

  pt: {
    siteTitle: "Network School Forest City",
    heroTitle: "Vida Após os 70 na Network School",
    heroSubtitle: "Descubra as vantagens de viver na Network School em Forest City, Malásia - apenas 15 minutos através de uma ponte curta para Singapura",
    applyNow: "Candidatar Agora",
    advantagesTitle: "20 Características que Gosto na Network School",
    
    fitness: {
      title: "Instalações de Fitness de Última Geração",
      description: "Equipamentos de ginásio modernos projetados para seniores. Treinadores pessoais especializados em programas de fitness apropriados para a idade."
    },
    pools: {
      title: "Belas Piscinas",
      description: "Múltiplas piscinas incluindo opções aquecidas. Perfeitas para exercícios de baixo impacto e relaxamento no clima tropical."
    },
    nutrition: {
      title: "Nutrição Blueprint Food",
      description: "Refeições cientificamente otimizadas projetadas para longevidade. Ingredientes frescos e saudáveis preparados por chefs especialistas."
    },
    morningRuck: {
      title: "Caminhadas Matinais",
      description: "Comece o seu dia com caminhadas em grupo energizantes. Construa força e comunidade enquanto explora Forest City."
    },
    smartYoungPeople: {
      title: "Jovens Inteligentes",
      description: "Obtenha perspetivas frescas sobre a vida de mentes jovens brilhantes. Aprendam uns com os outros e mantenham-se mentalmente afiados."
    },
    aiClasses: {
      title: "Aulas de IA",
      description: "Aprenda inteligência artificial de formas práticas e fáceis de entender. Mantenha-se atualizado com o futuro da tecnologia."
    },
    bookClubs: {
      title: "Aulas de Livros",
      description: "Discuta grandes livros com outros aprendizes para toda a vida. Expanda a sua mente através da literatura e ideias."
    },
    coding: {
      title: "Programação Vibe",
      description: "Aprenda novas ferramentas como programação vibe - programação moderna tornada acessível. Crie e construa na era digital."
    },
    networkStates: {
      title: "Construir Estados de Rede",
      description: "Ajude a projetar o futuro construindo ideias para outros estados de rede. Participe na criação das comunidades de amanhã."
    },
    improv: {
      title: "Aulas de Improvisação",
      description: "Desenvolva criatividade e confiança através do teatro de improvisação. Divirta-se enquanto desenvolve habilidades de comunicação."
    },
    countryRock: {
      title: "Noites de Country Rock",
      description: "Desfrute de música ao vivo e dança. Conecte-se com outros através da linguagem universal da música."
    },
    blueprintFood: {
      title: "Estilo de Vida Nutritivo",
      description: "Siga protocolos nutricionais baseados em evidências. Otimize a sua saúde com planos de refeições cientificamente apoiados."
    },
    lifestyle: {
      title: "Estilo de Vida Social Ativo",
      description: "Participe em atividades e eventos diversos. Construa amizades significativas e mantenha-se socialmente envolvido."
    },
    betterPerson: {
      title: "Como Ser uma Pessoa Melhor",
      description: "Foque no crescimento e desenvolvimento pessoal. Aprenda estratégias para viver a sua melhor vida após os 70."
    },
    globalCommunity: {
      title: "Pessoas de Todo o Mundo",
      description: "Conheça pessoas fascinantes de dezenas de países diferentes. Expanda a sua visão do mundo através de amizades diversas."
    },
    cryptoWeb3: {
      title: "Aprenda Crypto e Web3",
      description: "Entenda o futuro do dinheiro e da internet. Obtenha orientação especializada sobre moedas digitais e tecnologia blockchain."
    },
    videoCreation: {
      title: "Crie Melhores Vídeos Verticais",
      description: "Aprenda a fazer vídeos verticais envolventes e mais curtos. Domine técnicas modernas de criação de vídeo para redes sociais e projetos pessoais."
    },
    spongeCity: {
      title: "Viver numa Cidade Esponja",
      description: "Experimente a gestão inovadora de água urbana. O design de cidade esponja de Forest City absorve, armazena e purifica naturalmente a água da chuva enquanto previne inundações."
    },
    lifelongLearning: {
      title: "Oportunidades de Aprendizagem ao Longo da Vida",
      description: "Programas de educação contínua projetados para seniores. Desde novas tecnologias a artesanatos tradicionais, nunca pare de crescer e descobrir."
    },
    ideaFactory: {
      title: "Ambiente de Fábrica de Ideias",
      description: "Espaços de inovação colaborativa onde a criatividade floresce. Transforme ideias em realidade com colegas inovadores e recursos de ponta."
    },
    
    perfectLocation: "Localização Perfeita",
    locationDescription: "Localizada na Malásia, através de uma ponte curta para Singapura",
    toSingapore: "Para Singapura",
    minutes: "15 Minutos",
    tropical: "Tropical",
    perfectWeather: "Clima Perfeito",
    modern: "Moderno",
    forestCity: "Forest City",
    
    contactTitle: "Agende a Sua Visita ao Campus",
    contactDescription: "Experimente o estilo de vida da Network School em primeira mão. Reserve um tour do nosso campus Forest City.",
    nameLabel: "Nome Completo",
    emailLabel: "Endereço de Email",
    phoneLabel: "Número de Telefone",
    visitTypeLabel: "Tipo de Visita",
    visitTypePlaceholder: "Selecione o tipo de visita",
    visitOptions: {
      campus: "Visita ao Campus",
      virtual: "Visita Virtual",
      info: "Sessão de Informação"
    },
    messageLabel: "Mensagem (Opcional)",
    submitInquiry: "Enviar Consulta",
    
    newsletterTitle: "Mantenha-se Conectado",
    newsletterDescription: "Receba atualizações sobre eventos da Network School e notícias da comunidade.",
    subscribeNewsletter: "Subscrever Newsletter",
    
    footerDescription: "Forest City, Malásia • O seu próximo capítulo começa aqui",
    
    inquirySent: "Obrigado! A sua consulta foi enviada com sucesso.",
    subscriptionSuccess: "Obrigado por subscrever a nossa newsletter!",
    errorMessage: "Algo correu mal. Por favor, tente novamente."
  },

  id: {
    siteTitle: "Network School Forest City",
    heroTitle: "Kehidupan Setelah 70 di Network School",
    heroSubtitle: "Temukan keuntungan tinggal di Network School di Forest City, Malaysia - hanya 15 menit melalui jembatan pendek ke Singapura",
    applyNow: "Daftar Sekarang",
    advantagesTitle: "20 Fitur yang Saya Sukai di Network School",
    
    fitness: {
      title: "Fasilitas Kebugaran Canggih",
      description: "Peralatan gym modern yang dirancang untuk lansia. Pelatih pribadi yang ahli dalam program kebugaran sesuai usia."
    },
    pools: {
      title: "Kolam Renang Indah",
      description: "Beberapa kolam termasuk opsi yang dipanaskan. Sempurna untuk olahraga dampak rendah dan relaksasi dalam cuaca tropis."
    },
    nutrition: {
      title: "Nutrisi Blueprint Food",
      description: "Makanan yang dioptimalkan secara ilmiah dirancang untuk umur panjang. Bahan segar dan sehat yang disiapkan oleh koki ahli."
    },
    morningRuck: {
      title: "Jalan Kaki Pagi",
      description: "Mulai hari Anda dengan jalan kaki kelompok yang memberikan energi. Bangun kekuatan dan komunitas sambil menjelajahi Forest City."
    },
    smartYoungPeople: {
      title: "Orang Muda Cerdas",
      description: "Dapatkan perspektif segar tentang kehidupan dari pikiran muda yang brilian. Belajar satu sama lain dan tetap tajam secara mental."
    },
    aiClasses: {
      title: "Kelas AI",
      description: "Pelajari kecerdasan buatan dengan cara praktis dan mudah dipahami. Tetap update dengan masa depan teknologi."
    },
    bookClubs: {
      title: "Kelas Buku",
      description: "Diskusikan buku-buku hebat dengan pembelajar seumur hidup lainnya. Perluas pikiran Anda melalui sastra dan ide-ide."
    },
    coding: {
      title: "Coding Vibe",
      description: "Pelajari alat-alat baru seperti coding vibe - pemrograman modern yang dibuat mudah diakses. Ciptakan dan bangun di era digital."
    },
    networkStates: {
      title: "Membangun Network States",
      description: "Bantu merancang masa depan dengan membangun ide-ide untuk network states lainnya. Berpartisipasi dalam menciptakan komunitas masa depan."
    },
    improv: {
      title: "Kelas Improvisasi",
      description: "Kembangkan kreativitas dan kepercayaan diri melalui teater improvisasi. Bersenang-senang sambil mengembangkan keterampilan komunikasi."
    },
    countryRock: {
      title: "Malam Country Rock",
      description: "Nikmati musik live dan tarian. Terhubung dengan orang lain melalui bahasa universal musik."
    },
    blueprintFood: {
      title: "Gaya Hidup Nutritif",
      description: "Ikuti protokol nutrisi berbasis bukti. Optimalkan kesehatan Anda dengan rencana makanan yang didukung secara ilmiah."
    },
    lifestyle: {
      title: "Gaya Hidup Sosial Aktif",
      description: "Berpartisipasi dalam berbagai aktivitas dan acara. Bangun persahabatan yang bermakna dan tetap terlibat secara sosial."
    },
    betterPerson: {
      title: "Cara Menjadi Orang yang Lebih Baik",
      description: "Fokus pada pertumbuhan dan pengembangan pribadi. Pelajari strategi untuk menjalani kehidupan terbaik Anda setelah 70."
    },
    globalCommunity: {
      title: "Orang-orang dari Seluruh Dunia",
      description: "Temui orang-orang menarik dari puluhan negara berbeda. Perluas pandangan dunia Anda melalui persahabatan yang beragam."
    },
    cryptoWeb3: {
      title: "Belajar Crypto dan Web3",
      description: "Pahami masa depan uang dan internet. Dapatkan panduan ahli tentang mata uang digital dan teknologi blockchain."
    },
    videoCreation: {
      title: "Buat Video Vertikal yang Lebih Baik",
      description: "Pelajari cara membuat video vertikal yang menarik dan lebih pendek. Kuasai teknik pembuatan video modern untuk media sosial dan proyek pribadi."
    },
    spongeCity: {
      title: "Hidup di Kota Spons",
      description: "Rasakan manajemen air perkotaan yang inovatif. Desain kota spons Forest City secara alami menyerap, menyimpan, dan memurnikan air hujan sambil mencegah banjir."
    },
    lifelongLearning: {
      title: "Peluang Pembelajaran Seumur Hidup",
      description: "Program pendidikan berkelanjutan yang dirancang untuk lansia. Dari teknologi baru hingga kerajinan tradisional, jangan pernah berhenti tumbuh dan menemukan."
    },
    ideaFactory: {
      title: "Lingkungan Pabrik Ide",
      description: "Ruang inovasi kolaboratif di mana kreativitas berkembang. Ubah ide menjadi kenyataan dengan rekan-rekan inovatif dan sumber daya canggih."
    },
    
    perfectLocation: "Lokasi Sempurna",
    locationDescription: "Terletak di Malaysia, hanya melalui jembatan pendek ke Singapura",
    toSingapore: "Ke Singapura",
    minutes: "15 Menit",
    tropical: "Tropis",
    perfectWeather: "Cuaca Sempurna",
    modern: "Modern",
    forestCity: "Forest City",
    
    contactTitle: "Jadwalkan Kunjungan Campus Anda",
    contactDescription: "Rasakan gaya hidup Network School secara langsung. Pesan tur campus Forest City kami.",
    nameLabel: "Nama Lengkap",
    emailLabel: "Alamat Email",
    phoneLabel: "Nomor Telepon",
    visitTypeLabel: "Jenis Kunjungan",
    visitTypePlaceholder: "Pilih jenis kunjungan",
    visitOptions: {
      campus: "Kunjungan Campus",
      virtual: "Kunjungan Virtual",
      info: "Sesi Informasi"
    },
    messageLabel: "Pesan (Opsional)",
    submitInquiry: "Kirim Pertanyaan",
    
    newsletterTitle: "Tetap Terhubung",
    newsletterDescription: "Dapatkan update tentang acara Network School dan berita komunitas.",
    subscribeNewsletter: "Berlangganan Newsletter",
    
    footerDescription: "Forest City, Malaysia • Bab selanjutnya Anda dimulai di sini",
    
    inquirySent: "Terima kasih! Pertanyaan Anda berhasil dikirim.",
    subscriptionSuccess: "Terima kasih telah berlangganan newsletter kami!",
    errorMessage: "Terjadi kesalahan. Silakan coba lagi."
  },

  ur: {
    siteTitle: "Network School Forest City",
    heroTitle: "Network School میں 70 کے بعد زندگی",
    heroSubtitle: "Forest City، Malaysia میں Network School میں رہنے کے فوائد دریافت کریں - سنگاپور کے لیے ایک چھوٹے پل کے ذریعے صرف 15 منٹ",
    applyNow: "ابھی درخواست دیں",
    advantagesTitle: "Network School میں میری پسندیدہ 20 خصوصیات",
    
    fitness: {
      title: "جدید فٹنس سہولات",
      description: "بزرگوں کے لیے ڈیزائن کیے گئے جدید جم کا سامان۔ عمر کے مطابق فٹنس پروگرام میں مہارت رکھنے والے ذاتی ٹرینرز۔"
    },
    pools: {
      title: "خوبصورت سوئمنگ پولز",
      description: "گرم آپشنز سمیت متعدد پولز۔ اشنکٹبندیی آب و ہوا میں کم اثر ورزش اور آرام کے لیے بہترین۔"
    },
    nutrition: {
      title: "Blueprint Food غذائیت",
      description: "طویل زندگی کے لیے سائنسی طور پر بہتر بنائے گئے کھانے۔ ماہر باورچیوں کی طرف سے تیار کیے گئے تازہ، صحت مند اجزاء۔"
    },
    morningRuck: {
      title: "صبح کی واک",
      description: "توانائی بخش گروپ واک کے ساتھ اپنے دن کی شروعات کریں۔ Forest City کی تلاش کرتے وقت طاقت اور کمیونٹی بنائیں۔"
    },
    smartYoungPeople: {
      title: "ذہین نوجوان",
      description: "روشن نوجوان ذہنوں سے زندگی کے بارے میں نئے نقطہ نظر حاصل کریں۔ ایک دوسرے سے سیکھیں اور ذہنی طور پر تیز رہیں۔"
    },
    aiClasses: {
      title: "AI کلاسز",
      description: "عملی، سمجھنے میں آسان طریقوں سے مصنوعی ذہانت سیکھیں۔ ٹیکنالوجی کے مستقبل کے ساتھ اپڈیٹ رہیں۔"
    },
    bookClubs: {
      title: "کتابی کلاسز",
      description: "دیگر زندگی بھر سیکھنے والوں کے ساتھ عظیم کتابوں پر تبادلہ خیال کریں۔ ادب اور خیالات کے ذریعے اپنے ذہن کو وسیع کریں۔"
    },
    coding: {
      title: "Vibe کوڈنگ",
      description: "vibe کوڈنگ جیسے نئے ٹولز سیکھیں - جدید پروگرامنگ کو قابل رسائی بنایا گیا۔ ڈیجیٹل دور میں تخلیق اور تعمیر کریں۔"
    },
    networkStates: {
      title: "نیٹ ورک ریاستوں کی تعمیر",
      description: "دیگر نیٹ ورک ریاستوں کے لیے خیالات بنا کر مستقبل کو ڈیزائن کرنے میں مدد کریں۔ کل کی کمیونٹیز بنانے میں حصہ لیں۔"
    },
    improv: {
      title: "اصلاحی کلاسز",
      description: "اصلاحی تھیٹر کے ذریعے تخلیقی صلاحیت اور اعتماد پیدا کریں۔ رابطے کی مہارت تیار کرتے وقت مزہ کریں۔"
    },
    countryRock: {
      title: "کنٹری راک راتیں",
      description: "زندہ موسیقی اور رقص کا لطف اٹھائیں۔ موسیقی کی عالمگیر زبان کے ذریعے دوسروں سے جڑیں۔"
    },
    blueprintFood: {
      title: "غذائی طرز زندگی",
      description: "ثبوت پر مبنی غذائی پروٹوکولز کی پیروی کریں۔ سائنسی طور پر معاون کھانے کے منصوبوں کے ساتھ اپنی صحت کو بہتر بنائیں۔"
    },
    lifestyle: {
      title: "فعال سماجی طرز زندگی",
      description: "مختلف سرگرمیوں اور واقعات میں حصہ لیں۔ بامقصد دوستیاں بنائیں اور سماجی طور پر مصروف رہیں۔"
    },
    betterPerson: {
      title: "بہتر انسان کیسے بنیں",
      description: "ذاتی نمو اور ترقی پر توجہ دیں۔ 70 کے بعد اپنی بہترین زندگی گزارنے کی حکمت عملیاں سیکھیں۔"
    },
    globalCommunity: {
      title: "دنیا بھر کے لوگ",
      description: "درجنوں مختلف ممالک سے دلچسپ لوگوں سے ملیں۔ متنوع دوستیوں کے ذریعے اپنے عالمی نقطہ نظر کو وسیع کریں۔"
    },
    cryptoWeb3: {
      title: "Crypto اور Web3 سیکھیں",
      description: "پیسے اور انٹرنیٹ کا مستقبل سمجھیں۔ ڈیجیٹل کرنسیوں اور بلاک چین ٹیکنالوجی پر ماہرانہ رہنمائی حاصل کریں۔"
    },
    videoCreation: {
      title: "بہتر عمودی ویڈیوز بنائیں",
      description: "دلکش اور مختصر عمودی ویڈیوز بنانا سیکھیں۔ سوشل میڈیا اور ذاتی منصوبوں کے لیے جدید ویڈیو بنانے کی تکنیکوں میں مہارت حاصل کریں۔"
    },
    spongeCity: {
      title: "سپنج سٹی میں زندگی",
      description: "جدید شہری پانی کا انتظام تجربہ کریں۔ Forest City کا سپنج سٹی ڈیزائن قدرتی طور پر بارش کا پانی جذب، محفوظ اور صاف کرتا ہے جبکہ سیلاب کو روکتا ہے۔"
    },
    lifelongLearning: {
      title: "زندگی بھر سیکھنے کے مواقع",
      description: "بزرگوں کے لیے ڈیزائن کیے گئے مسلسل تعلیمی پروگرام۔ نئی ٹیکنالوجیز سے روایتی دستکاری تک، کبھی بڑھنا اور دریافت کرنا بند نہ کریں۔"
    },
    ideaFactory: {
      title: "آئیڈیا فیکٹری ماحول",
      description: "تعاونی اختراع کی جگہیں جہاں تخلیقی صلاحیت پھلتی پھولتی ہے۔ اختراعی ساتھیوں اور جدید وسائل کے ساتھ خیالات کو حقیقت میں بدلیں۔"
    },
    
    perfectLocation: "کامل مقام",
    locationDescription: "ملائیشیا میں واقع، سنگاپور کے لیے ایک چھوٹے پل کے پار",
    toSingapore: "سنگاپور تک",
    minutes: "15 منٹ",
    tropical: "اشنکٹبندیی",
    perfectWeather: "بہترین موسم",
    modern: "جدید",
    forestCity: "Forest City",
    
    contactTitle: "اپنے کیمپس کی مُلاقات شیڈول کریں",
    contactDescription: "Network School کا طرز زندگی خود تجربہ کریں۔ ہمارے Forest City کیمپس کا ٹور بُک کریں۔",
    nameLabel: "مکمل نام",
    emailLabel: "ای میل پتہ",
    phoneLabel: "فون نمبر",
    visitTypeLabel: "ملاقات کی قسم",
    visitTypePlaceholder: "ملاقات کی قسم منتخب کریں",
    visitOptions: {
      campus: "کیمپس کی ملاقات",
      virtual: "ورچوئل ملاقات",
      info: "معلوماتی سیشن"
    },
    messageLabel: "پیغام (اختیاری)",
    submitInquiry: "استفسار بھیجیں",
    
    newsletterTitle: "رابطے میں رہیں",
    newsletterDescription: "Network School کے واقعات اور کمیونٹی کی خبروں کے اپڈیٹ حاصل کریں۔",
    subscribeNewsletter: "نیوز لیٹر سبسکرائب کریں",
    
    footerDescription: "Forest City، ملائیشیا • آپ کا اگلا باب یہاں شروع ہوتا ہے",
    
    inquirySent: "شکریہ! آپ کا استفسار کامیابی سے بھیجا گیا۔",
    subscriptionSuccess: "ہمارے نیوز لیٹر کو سبسکرائب کرنے کا شکریہ!",
    errorMessage: "کچھ غلط ہوا۔ براہ کرم دوبارہ کوشش کریں۔"
  },

  de: {
    siteTitle: "Network School Forest City",
    heroTitle: "Leben nach 70 in der Network School",
    heroSubtitle: "Entdecken Sie die Vorteile des Lebens in der Network School in Forest City, Malaysia - nur 15 Minuten über eine kurze Brücke nach Singapur",
    applyNow: "Jetzt bewerben",
    advantagesTitle: "20 Eigenschaften, die ich an der Network School liebe",
    
    fitness: {
      title: "Modernste Fitness-Einrichtungen",
      description: "Moderne Fitnessgeräte, die für Senioren entwickelt wurden. Persönliche Trainer, die auf altersgerechte Fitnessprogramme spezialisiert sind."
    },
    pools: {
      title: "Schöne Schwimmbäder",
      description: "Mehrere Pools inklusive beheizter Optionen. Perfekt für schonende Übungen und Entspannung im tropischen Klima."
    },
    nutrition: {
      title: "Blueprint Food Ernährung",
      description: "Wissenschaftlich optimierte Mahlzeiten für Langlebigkeit. Frische, gesunde Zutaten von Expertenköchen zubereitet."
    },
    morningRuck: {
      title: "Morgendliche Wanderungen",
      description: "Beginnen Sie Ihren Tag mit energiegeladenen Gruppenwanderungen. Bauen Sie Kraft und Gemeinschaft auf, während Sie Forest City erkunden."
    },
    smartYoungPeople: {
      title: "Kluge junge Leute",
      description: "Erhalten Sie frische Perspektiven auf das Leben von brillanten jungen Köpfen. Lernen Sie voneinander und bleiben Sie geistig scharf."
    },
    aiClasses: {
      title: "KI-Kurse",
      description: "Lernen Sie künstliche Intelligenz auf praktische, leicht verständliche Weise. Bleiben Sie mit der Zukunft der Technologie auf dem Laufenden."
    },
    bookClubs: {
      title: "Buchkurse",
      description: "Diskutieren Sie großartige Bücher mit anderen lebenslangen Lernenden. Erweitern Sie Ihren Geist durch Literatur und Ideen."
    },
    coding: {
      title: "Vibe Programmierung",
      description: "Lernen Sie neue Tools wie Vibe-Programmierung - moderne Programmierung zugänglich gemacht. Erschaffen und bauen Sie im digitalen Zeitalter."
    },
    networkStates: {
      title: "Network States aufbauen",
      description: "Helfen Sie dabei, die Zukunft zu gestalten, indem Sie Ideen für andere Network States entwickeln. Beteiligen Sie sich an der Schaffung der Gemeinschaften von morgen."
    },
    improv: {
      title: "Improvisationskurse",
      description: "Entwickeln Sie Kreativität und Selbstvertrauen durch Improvisationstheater. Haben Sie Spaß, während Sie Kommunikationsfähigkeiten entwickeln."
    },
    countryRock: {
      title: "Country Rock Abende",
      description: "Genießen Sie Live-Musik und Tanz. Verbinden Sie sich mit anderen durch die universelle Sprache der Musik."
    },
    blueprintFood: {
      title: "Nährender Lebensstil",
      description: "Folgen Sie evidenzbasierten Ernährungsprotokollen. Optimieren Sie Ihre Gesundheit mit wissenschaftlich unterstützten Mahlzeitenplänen."
    },
    lifestyle: {
      title: "Aktiver sozialer Lebensstil",
      description: "Nehmen Sie an verschiedenen Aktivitäten und Veranstaltungen teil. Bauen Sie bedeutungsvolle Freundschaften auf und bleiben Sie sozial engagiert."
    },
    betterPerson: {
      title: "Wie man ein besserer Mensch wird",
      description: "Konzentrieren Sie sich auf persönliches Wachstum und Entwicklung. Lernen Sie Strategien, um Ihr bestes Leben nach 70 zu führen."
    },
    globalCommunity: {
      title: "Menschen aus aller Welt",
      description: "Treffen Sie faszinierende Menschen aus dutzenden verschiedener Länder. Erweitern Sie Ihre Weltanschauung durch vielfältige Freundschaften."
    },
    cryptoWeb3: {
      title: "Crypto und Web3 lernen",
      description: "Verstehen Sie die Zukunft von Geld und Internet. Erhalten Sie Expertenberatung zu digitalen Währungen und Blockchain-Technologie."
    },
    videoCreation: {
      title: "Bessere vertikale Videos erstellen",
      description: "Lernen Sie, ansprechende und kürzere vertikale Videos zu erstellen. Meistern Sie moderne Videoerstellungstechniken für soziale Medien und persönliche Projekte."
    },
    spongeCity: {
      title: "Leben in einer Schwammstadt",
      description: "Erleben Sie innovatives urbanes Wassermanagement. Das Schwammstadt-Design von Forest City absorbiert, speichert und reinigt Regenwasser natürlich, während es Überschwemmungen verhindert."
    },
    lifelongLearning: {
      title: "Möglichkeiten des lebenslangen Lernens",
      description: "Fortlaufende Bildungsprogramme für Senioren. Von neuen Technologien bis zu traditionellem Handwerk - hören Sie niemals auf zu wachsen und zu entdecken."
    },
    ideaFactory: {
      title: "Ideenfabrik-Umgebung",
      description: "Kollaborative Innovationsräume, wo Kreativität gedeiht. Verwandeln Sie Ideen mit innovativen Kollegen und modernster Ausstattung in Realität."
    },
    
    perfectLocation: "Perfekte Lage",
    locationDescription: "In Malaysia gelegen, über eine kurze Brücke nach Singapur",
    toSingapore: "Nach Singapur",
    minutes: "15 Minuten",
    tropical: "Tropisch",
    perfectWeather: "Perfektes Wetter",
    modern: "Modern",
    forestCity: "Forest City",
    
    contactTitle: "Planen Sie Ihren Campus-Besuch",
    contactDescription: "Erleben Sie den Network School Lebensstil aus erster Hand. Buchen Sie eine Tour durch unseren Forest City Campus.",
    nameLabel: "Vollständiger Name",
    emailLabel: "E-Mail-Adresse",
    phoneLabel: "Telefonnummer",
    visitTypeLabel: "Besuchstyp",
    visitTypePlaceholder: "Besuchstyp wählen",
    visitOptions: {
      campus: "Campus-Besuch",
      virtual: "Virtueller Besuch",
      info: "Informationssitzung"
    },
    messageLabel: "Nachricht (Optional)",
    submitInquiry: "Anfrage senden",
    
    newsletterTitle: "Bleiben Sie verbunden",
    newsletterDescription: "Erhalten Sie Updates über Network School Events und Community-News.",
    subscribeNewsletter: "Newsletter abonnieren",
    
    footerDescription: "Forest City, Malaysia • Ihr nächstes Kapitel beginnt hier",
    
    inquirySent: "Danke! Ihre Anfrage wurde erfolgreich gesendet.",
    subscriptionSuccess: "Danke für das Abonnieren unseres Newsletters!",
    errorMessage: "Etwas ist schief gelaufen. Bitte versuchen Sie es erneut."
  },

  ha: {
    siteTitle: "Network School Forest City",
    heroTitle: "Rayuwa bayan shekara 70 a Network School",
    heroSubtitle: "Gano fa'idar rayuwa a Network School a Forest City, Malaysia - minti 15 kawai a kan gada gajere zuwa Singapore",
    applyNow: "Yi nema yanzu",
    advantagesTitle: "Abubuwa 20 da nake son su a Network School",
    
    fitness: {
      title: "Kayan aikin motsa jiki na zamani",
      description: "Kayan aikin motsa jiki na zamani da aka tsara domin manya. Masu horar da mutane da suka kware a shirye-shiryen motsa jiki masu dacewa da shekaru."
    },
    pools: {
      title: "Kyawawan wuraren iyo",
      description: "Wuraren iyo da yawa har da zabin dumama. Cikakke don motsa jiki mai sauki da annashuwa a yanayin zafi."
    },
    nutrition: {
      title: "Blueprint Food Nutrition",
      description: "Abinci da aka gyara ta hanyar kimiyya wanda aka tsara don tsawon rayuwa. Kayan abinci sabo da lafiya da manyan masu dafa abinci suka shirya."
    },
    morningRuck: {
      title: "Tafiye-tafiye na safiya",
      description: "Fara ranaku da tafiye-tafiye masu kuzari. Gina karfi da al'umma yayin binciken Forest City."
    },
    smartYoungPeople: {
      title: "Matasa masu hankali",
      description: "Samu sabbin ra'ayoyi game da rayuwa daga matasa masu basira. Koyon juna da kiyaye hankalin tunani."
    },
    aiClasses: {
      title: "Karatun AI",
      description: "Koyo basirar wucin gadi ta hanyoyin aiki, masu saukin fahimta. Kasance tare da makomar fasaha."
    },
    bookClubs: {
      title: "Karatun littattafai",
      description: "Tattauna littattafai masu kyau tare da sauran masu koyon rayuwa. Fadada tunanin ku ta hanyar wallafe-wallafe da tunane-tunane."
    },
    coding: {
      title: "Shirye-shiryen Kwamfuta",
      description: "Koyo kayan aiki sababbi kamar shirye-shiryen kwamfuta - shirye-shiryen kwamfuta na zamani da aka sanya a bayyane. Kirkiro da ginawa a zamanin dijital."
    },
    networkStates: {
      title: "Gina Network States",
      description: "Taimakawa wajen tsara gaba ta hanyar haɓaka ra'ayoyi don sauran network states. Zama sashe na kirkira al'ummomin gobe."
    },
    improv: {
      title: "Karatun Improv",
      description: "Bayyana kanku a hanyar kirkire-kirkire ta wasan kwaikwayo na gaggawa. Ji dadi yayin gina kwarin gwiwa da fasahar zamantakewa."
    },
    countryRock: {
      title: "Daren Country Rock",
      description: "Ji dadin kide-kide kai tsaye da nishaɗi tare da al'ummarku. Yi rawa, yi waƙa, da ƙirƙirar abubuwan tunawa."
    },
    blueprintFood: {
      title: "Blueprint Food",
      description: "Abinci mai kyau don tsawon rayuwa da ingantaccen lafiya. Abinci da aka tsara ta amfani da kimiyyar zamani."
    },
    lifestyle: {
      title: "Rayuwar da ake aiki",
      description: "Rayuwar da ake aiki da lafiya ta hanyar ayyukan yau da kullun masu daɗi. Kasance da kuzari da ƙarfin hali kowace rana."
    },
    betterPerson: {
      title: "Yadda za a zama mutum mafi kyau",
      description: "Mayar da hankali kan ci gaban mutum da haɓakawa. Koyo dabarun rayuwa mafi kyau bayan shekara 70."
    },
    globalCommunity: {
      title: "Al'umma ta duniya",
      description: "Haɗu da mutane daga ko'ina a duniya. Raba al'adu, harsuna, da abubuwan da suka same ku a cikin al'umma mai bambanci."
    },
    cryptoWeb3: {
      title: "Crypto & Web3",
      description: "Koyo kuɗin crypto da fasahar blockchain. Kasance tare da juyin kuɗin dijital."
    },
    videoCreation: {
      title: "Ƙirƙirar Bidiyo",
      description: "Koyo ƙwarewar ƙirƙirar bidiyo don raba labaranku. Ƙirƙira abun ciki kuma ku haɗu da sabuwar ƙarni."
    },
    spongeCity: {
      title: "Rayuwa a Sponge City",
      description: "Gwada sabon sarrafa ruwan birni. Tsarin Sponge City na Forest City yana shanye, ajiye, da tsarkake ruwan sama ba tare da whalakanci ba."
    },
    lifelongLearning: {
      title: "Koyon Rayuwa",
      description: "Kasance da sha'awa kuma ku ci gaba da koyo. Karatun, taron koyo, da damar ci gaban hankali a kowane shekaru."
    },
    ideaFactory: {
      title: "Yanayin Masana'antar Ra'ayi",
      description: "Wuraren kirkire-kirkire na haɗin gwiwa inda kirkire-kirkire yake bunƙasa. Mayar da ra'ayoyi gaskiya tare da takwarorinku na kirkire-kirkire da kayan aikin zamani."
    },
    
    perfectLocation: "Kyakkyawan wuri",
    locationDescription: "An gina shi a Malaysia, a kan gajeriyar gada zuwa Singapore",
    toSingapore: "zuwa Singapore",
    minutes: "minti 15",
    tropical: "Na wurare masu zafi",
    perfectWeather: "yanayi mai kyau duk shekara",
    modern: "Na zamani",
    forestCity: "kayan aiki na zamani a Forest City",
    
    contactTitle: "Ziyarci harabarmu",
    contactDescription: "Shirya ziyara don jin rayuwa a Network School Forest City kai tsaye",
    nameLabel: "Suna",
    emailLabel: "Imel",
    phoneLabel: "Waya",
    visitTypeLabel: "Nau'in ziyara",
    visitTypePlaceholder: "Zaɓi nau'in ziyara",
    visitOptions: {
      campus: "Ziyarar Haraba",
      virtual: "Ziyarar Virtual",
      info: "Zaman Bayanai"
    },
    messageLabel: "Sako",
    submitInquiry: "Aika da tambaya",
    
    newsletterTitle: "Kasance a haɗe",
    newsletterDescription: "Yi rajista ga labarinmu don sabbin sabuntawa",
    subscribeNewsletter: "Yi rajista ga labarin",
    
    footerDescription: "Forest City, Malaysia • Babban babin ku yana farawa nan",
    
    inquirySent: "Na gode! An aika da tambayarku cikin nasara.",
    subscriptionSuccess: "Na gode don yin rajista ga labarinmu!",
    errorMessage: "Wani abu ya yi kuskure. Sake gwadawa."
  },

  ja: {
    siteTitle: "Network School Forest City",
    heroTitle: "70歳以降のNetwork Schoolでの生活",
    heroSubtitle: "マレーシアのForest CityにあるNetwork Schoolでの生活の利点を発見しましょう - シンガポールまで短い橋でわずか15分",
    applyNow: "今すぐ申し込む",
    advantagesTitle: "Network Schoolで気に入っている20の機能",
    
    fitness: {
      title: "最先端のフィットネス施設",
      description: "高齢者向けに設計された最新のジム機器。年齢に適したフィットネスプログラムに特化したパーソナルトレーナー。"
    },
    pools: {
      title: "美しいスイミングプール",
      description: "温水オプションを含む複数のプール。熱帯の気候での低負荷運動とリラクゼーションに最適。"
    },
    nutrition: {
      title: "Blueprint Food栄養",
      description: "長寿のために科学的に最適化された食事。エキスパートシェフが調理した新鮮で健康的な食材。"
    },
    morningRuck: {
      title: "朝のラックウォーク",
      description: "エネルギッシュなグループウォークで一日を始めましょう。Forest Cityを探索しながら体力とコミュニティを築きます。"
    },
    smartYoungPeople: {
      title: "賢い若者たち",
      description: "聡明な若い心から人生の新しい視点を得ましょう。お互いに学び合い、精神的に鋭敏さを保ちます。"
    },
    aiClasses: {
      title: "AIクラス",
      description: "実用的で理解しやすい方法で人工知能を学びます。テクノロジーの未来に追いつきましょう。"
    },
    bookClubs: {
      title: "読書クラス",
      description: "他の生涯学習者と一緒に素晴らしい本について議論します。文学とアイデアを通して心を広げます。"
    },
    coding: {
      title: "Vibeコーディング",
      description: "Vibeコーディングなどの新しいツールを学びます - アクセシブルにされた現代的なプログラミング。デジタル時代に創造し構築します。"
    },
    networkStates: {
      title: "ネットワーク国家を構築",
      description: "他のネットワーク国家のアイデアを開発することで未来の設計に貢献します。明日のコミュニティ創造の一部になりましょう。"
    },
    improv: {
      title: "即興クラス",
      description: "即興演劇で創造的に自分を表現します。自信と社会的スキルを築きながら楽しみます。"
    },
    countryRock: {
      title: "カントリーロック・ナイト",
      description: "コミュニティと一緒にライブ音楽とエンターテイメントを楽しみます。踊り、歌い、思い出を作ります。"
    },
    blueprintFood: {
      title: "Blueprint Food",
      description: "長寿と最適な健康のための最適化された栄養。最新科学を使用して設計された食事。"
    },
    lifestyle: {
      title: "アクティブなライフスタイル",
      description: "楽しい日常活動でアクティブで健康的な生活を送ります。毎日エネルギッシュでモチベーションを保ちます。"
    },
    betterPerson: {
      title: "より良い人になる方法",
      description: "個人の成長と発達に焦点を当てます。70歳以降の最高の人生のための戦略を学びます。"
    },
    globalCommunity: {
      title: "グローバルコミュニティ",
      description: "世界中の人々とつながります。多様なコミュニティで文化、言語、経験を共有します。"
    },
    cryptoWeb3: {
      title: "暗号通貨 & Web3",
      description: "暗号通貨とブロックチェーン技術を学びます。デジタル金融革命に追いつきます。"
    },
    videoCreation: {
      title: "動画制作",
      description: "ストーリーを共有するための動画制作スキルを学びます。コンテンツを作成し、新しい世代とつながります。"
    },
    spongeCity: {
      title: "スポンジシティでの生活",
      description: "革新的な都市水管理を体験します。Forest Cityのスポンジシティデザインは雨水を自然に吸収、貯蔵、浄化し、洪水を防ぎます。"
    },
    lifelongLearning: {
      title: "生涯学習",
      description: "好奇心を保ち、学習を続けます。すべての年齢での知的成長のためのクラス、ワークショップ、機会。"
    },
    ideaFactory: {
      title: "アイデア工場環境",
      description: "創造性が栄える協力的なイノベーション空間。革新的な仲間と最先端の設備でアイデアを実現します。"
    },
    
    perfectLocation: "完璧な立地",
    locationDescription: "マレーシアに位置し、シンガポールへの短い橋の上",
    toSingapore: "シンガポールまで",
    minutes: "15分",
    tropical: "熱帯性",
    perfectWeather: "一年中完璧な天気",
    modern: "現代的",
    forestCity: "Forest Cityの最先端施設",
    
    contactTitle: "キャンパスを訪問",
    contactDescription: "Network School Forest Cityでの生活を直接体験するための見学を手配する",
    nameLabel: "名前",
    emailLabel: "メール",
    phoneLabel: "電話",
    visitTypeLabel: "訪問タイプ",
    visitTypePlaceholder: "訪問タイプを選択",
    visitOptions: {
      campus: "キャンパス見学",
      virtual: "バーチャル見学",
      info: "情報セッション"
    },
    messageLabel: "メッセージ",
    submitInquiry: "お問い合わせを送信",
    
    newsletterTitle: "つながりを保つ",
    newsletterDescription: "最新のアップデートのためにニュースレターにご登録ください",
    subscribeNewsletter: "ニュースレターに登録",
    
    footerDescription: "Forest City, マレーシア • あなたの次の章がここから始まります",
    
    inquirySent: "ありがとうございます！お問い合わせは正常に送信されました。",
    subscriptionSuccess: "ニュースレターにご登録いただきありがとうございます！",
    errorMessage: "何か問題が発生しました。もう一度お試しください。"
  },

  ko: {
    siteTitle: "Network School Forest City",
    heroTitle: "70세 이후 Network School에서의 삶",
    heroSubtitle: "말레이시아 Forest City의 Network School에서 생활하는 이점을 발견하세요 - 짧은 다리로 싱가포르까지 단 15분",
    applyNow: "지금 지원하기",
    advantagesTitle: "Network School에서 좋아하는 20가지 특징",
    
    fitness: {
      title: "최첨단 피트니스 시설",
      description: "노인을 위해 설계된 현대적인 체육관 장비. 연령에 적합한 피트니스 프로그램에 전문화된 개인 트레이너."
    },
    pools: {
      title: "아름다운 수영장",
      description: "온수 옵션을 포함한 여러 개의 수영장. 열대 기후에서 저강도 운동과 휴식에 완벽합니다."
    },
    nutrition: {
      title: "Blueprint Food 영양",
      description: "장수를 위해 과학적으로 최적화된 식사. 전문 요리사가 준비한 신선하고 건강한 재료."
    },
    morningRuck: {
      title: "아침 럭 워킹",
      description: "활기찬 그룹 워킹으로 하루를 시작하세요. Forest City를 탐험하면서 체력과 커뮤니티를 구축합니다."
    },
    smartYoungPeople: {
      title: "똑똑한 젊은이들",
      description: "총명한 젊은 마음에서 삶의 새로운 관점을 얻으세요. 서로 배우고 정신적으로 예리함을 유지합니다."
    },
    aiClasses: {
      title: "AI 수업",
      description: "실용적이고 이해하기 쉬운 방식으로 인공지능을 배웁니다. 기술의 미래에 대비하세요."
    },
    bookClubs: {
      title: "독서 수업",
      description: "다른 평생 학습자들과 함께 훌륭한 책에 대해 토론합니다. 문학과 아이디어를 통해 마음을 넓힙니다."
    },
    coding: {
      title: "Vibe 코딩",
      description: "vibe 코딩과 같은 새로운 도구를 배웁니다 - 접근 가능하게 만들어진 현대적인 프로그래밍. 디지털 시대에 창조하고 구축합니다."
    },
    networkStates: {
      title: "네트워크 국가 구축",
      description: "다른 네트워크 국가를 위한 아이디어를 개발하여 미래 설계에 도움을 줍니다. 내일의 커뮤니티 창조의 일부가 되세요."
    },
    improv: {
      title: "즉흥 수업",
      description: "즉흥 연극을 통해 창의적으로 자신을 표현합니다. 자신감과 사회적 기술을 기르면서 즐깁니다."
    },
    countryRock: {
      title: "컨트리 록 나이트",
      description: "커뮤니티와 함께 라이브 음악과 엔터테인먼트를 즐깁니다. 춤추고, 노래하고, 추억을 만듭니다."
    },
    blueprintFood: {
      title: "Blueprint Food",
      description: "장수와 최적의 건강을 위한 최적화된 영양. 최신 과학을 사용하여 설계된 음식."
    },
    lifestyle: {
      title: "활동적인 라이프스타일",
      description: "즐거운 일상 활동으로 활동적이고 건강한 삶을 살아갑니다. 매일 활기차고 동기 부여를 유지합니다."
    },
    betterPerson: {
      title: "더 나은 사람이 되는 방법",
      description: "개인적 성장과 발전에 집중합니다. 70세 이후 최고의 삶을 위한 전략을 배웁니다."
    },
    globalCommunity: {
      title: "글로벌 커뮤니티",
      description: "전 세계 사람들과 연결됩니다. 다양한 커뮤니티에서 문화, 언어, 경험을 공유합니다."
    },
    cryptoWeb3: {
      title: "암호화폐 & Web3",
      description: "암호화폐와 블록체인 기술을 배웁니다. 디지털 금융 혁명에 발맞춥니다."
    },
    videoCreation: {
      title: "비디오 제작",
      description: "스토리를 공유하기 위한 비디오 제작 기술을 배웁니다. 콘텐츠를 만들고 새로운 세대와 연결됩니다."
    },
    spongeCity: {
      title: "스펀지 시티에서 살기",
      description: "혁신적인 도시 물 관리를 경험하세요. Forest City의 스펀지 시티 디자인은 자연적으로 빗물을 흡수, 저장, 정화하며 홍수를 방지합니다."
    },
    lifelongLearning: {
      title: "평생 학습",
      description: "호기심을 유지하고 계속 배웁니다. 모든 연령대의 지적 성장을 위한 수업, 워크샵, 기회."
    },
    ideaFactory: {
      title: "아이디어 공장 환경",
      description: "창의성이 번창하는 협력적 혁신 공간. 혁신적인 동료들과 최첨단 장비로 아이디어를 현실로 만듭니다."
    },
    
    perfectLocation: "완벽한 위치",
    locationDescription: "말레이시아에 위치, 싱가포르로의 짧은 다리 위",
    toSingapore: "싱가포르까지",
    minutes: "15분",
    tropical: "열대성",
    perfectWeather: "일년 내내 완벽한 날씨",
    modern: "현대적",
    forestCity: "Forest City의 최첨단 시설",
    
    contactTitle: "캠퍼스 방문",
    contactDescription: "Network School Forest City에서의 삶을 직접 경험하기 위한 방문 일정을 잡으세요",
    nameLabel: "이름",
    emailLabel: "이메일",
    phoneLabel: "전화번호",
    visitTypeLabel: "방문 유형",
    visitTypePlaceholder: "방문 유형 선택",
    visitOptions: {
      campus: "캠퍼스 방문",
      virtual: "가상 방문",
      info: "정보 세션"
    },
    messageLabel: "메시지",
    submitInquiry: "문의 보내기",
    
    newsletterTitle: "연결 유지",
    newsletterDescription: "최신 업데이트를 위해 뉴스레터에 구독하세요",
    subscribeNewsletter: "뉴스레터 구독",
    
    footerDescription: "Forest City, 말레이시아 • 당신의 다음 장이 여기서 시작됩니다",
    
    inquirySent: "감사합니다! 문의가 성공적으로 전송되었습니다.",
    subscriptionSuccess: "뉴스레터 구독해 주셔서 감사합니다!",
    errorMessage: "문제가 발생했습니다. 다시 시도해 주세요."
  },

  mr: {
    siteTitle: "Network School Forest City",
    heroTitle: "70 नंतरच्या आयुष्यात Network School मध्ये",
    heroSubtitle: "मलेशियातील Forest City मधील Network School मध्ये राहण्याचे फायदे शोधा - सिंगापूरपर्यंत लहान पुलावर फक्त 15 मिनिटे",
    applyNow: "आता अर्ज करा",
    advantagesTitle: "Network School मध्ये मला आवडणाऱ्या 20 वैशिष्ट्या",
    
    fitness: {
      title: "आधुनिक फिटनेस सुविधा",
      description: "वृद्धांसाठी डिझाइन केलेली आधुनिक जिम उपकरणे. वय-अनुकूल फिटनेस कार्यक्रमांमध्ये विशेषज्ञ असलेले वैयक्तिक प्रशिक्षक."
    },
    pools: {
      title: "सुंदर स्विमिंग पूल",
      description: "गरम पाण्याच्या पर्यायांसह अनेक पूल. उष्णकटिबंधीय हवामानात कमी-प्रभाव व्यायाम आणि विश्रांतीसाठी योग्य."
    },
    nutrition: {
      title: "Blueprint Food पोषण",
      description: "दीर्घायुष्यासाठी वैज्ञानिकदृष्ट्या अनुकूल केलेले जेवण. तज्ञ शेफ्सनी तयार केलेले ताजे, आरोग्यदायी घटक."
    },
    morningRuck: {
      title: "सकाळचे रक वॉकिंग",
      description: "उत्साही गट चालण्यासह दिवसाची सुरुवात करा. Forest City एक्सप्लोर करताना सामर्थ्य आणि समुदाय तयार करा."
    },
    smartYoungPeople: {
      title: "हुशार तरुण लोक",
      description: "हुशार तरुण मनांकडून जीवनाचे नवीन दृष्टिकोन मिळवा. एकमेकांकडून शिका आणि मानसिकदृष्ट्या तीक्ष्ण राहा."
    },
    aiClasses: {
      title: "AI वर्ग",
      description: "व्यावहारिक, समजण्यायोग्य मार्गाने कृत्रिम बुद्धिमत्ता शिका. तंत्रज्ञानाच्या भविष्याशी सुसंगत राहा."
    },
    bookClubs: {
      title: "पुस्तक वर्ग",
      description: "इतर आजीवन शिक्षणार्थ्यांसह उत्कृष्ट पुस्तकांवर चर्चा करा. साहित्य आणि विचारांच्याद्वारे मन विस्तृत करा."
    },
    coding: {
      title: "वाईब कोडिंग",
      description: "वाईब कोडिंगसारखी नवी साधने शिका - सुगम बनवलेले आधुनिक प्रोग्रामिंग. डिजिटल युगात निर्माण आणि बांधकाम करा."
    },
    networkStates: {
      title: "नेटवर्क राज्य निर्माण",
      description: "इतर नेटवर्क राज्यांसाठी कल्पना विकसित करून भविष्याच्या डिझाइनमध्ये मदत करा. उद्याच्या समुदायाच्या निर्मितीचा भाग बना."
    },
    improv: {
      title: "इम्प्रोव्ह वर्ग",
      description: "तात्काळ नाट्यकलेद्वारे सर्जनशीलपणे स्वतःला अभिव्यक्त करा. आत्मविश्वास आणि सामाजिक कौशल्ये निर्माण करताना आनंद घ्या."
    },
    countryRock: {
      title: "कंट्री रॉक नाइट",
      description: "समुदायासह थेट संगीत आणि मनोरंजनाचा आनंद घ्या. नृत्य करा, गाणे गा आणि आठवणी तयार करा."
    },
    blueprintFood: {
      title: "Blueprint Food",
      description: "दीर्घायुष्य आणि उत्तम आरोग्यासाठी अनुकूल पोषण. नवीनतम विज्ञान वापरून डिझाइन केलेले अन्न."
    },
    lifestyle: {
      title: "सक्रिय जीवनशैली",
      description: "मजेदार दैनंदिन क्रियाकलापांसह सक्रिय आणि आरोग्यदायी जीवन जगा. दररोज उत्साही आणि प्रेरित राहा."
    },
    betterPerson: {
      title: "चांगली व्यक्ती कशी व्हावे",
      description: "वैयक्तिक वाढ आणि विकासावर लक्ष केंद्रित करा. 70 नंतरच्या सर्वोत्तम जीवनासाठी रणनीती शिका."
    },
    globalCommunity: {
      title: "जागतिक समुदाय",
      description: "जगभरातील लोकांशी जुळवून घ्या. विविध समुदायात संस्कृती, भाषा आणि अनुभव सामायिक करा."
    },
    cryptoWeb3: {
      title: "क्रिप्टो आणि Web3",
      description: "क्रिप्टोकरन्सी आणि ब्लॉकचेन तंत्रज्ञान शिका. डिजिटल आर्थिक क्रांतीशी सुसंगत राहा."
    },
    videoCreation: {
      title: "व्हिडिओ निर्मिती",
      description: "कथा सामायिक करण्यासाठी व्हिडिओ निर्मिती कौशल्ये शिका. सामग्री तयार करा आणि नव्या पिढीशी जोडला जा."
    },
    spongeCity: {
      title: "स्पंज सिटीमध्ये राहणे",
      description: "नाविन्यपूर्ण शहरी जल व्यवस्थापनाचा अनुभव घ्या. Forest City चे स्पंज सिटी डिझाइन नैसर्गिकरित्या पावसाचे पाणी शोषण, संचयन आणि शुद्धीकरण करत पूर रोखते."
    },
    lifelongLearning: {
      title: "आजीवन शिक्षण",
      description: "कुतूहल ठेवा आणि शिकत राहा. सर्व वयांसाठी बौद्धिक वाढीसाठी वर्ग, कार्यशाळा आणि संधी."
    },
    ideaFactory: {
      title: "आयडिया फॅक्टरी वातावरण",
      description: "सहयोगी नावीन्यपूर्ण जागा जिथे सर्जनशीलता वाढते. नाविन्यपूर्ण साथीदारांसह आणि अत्याधुनिक उपकरणांसह कल्पना साकार करा."
    },
    
    perfectLocation: "परिपूर्ण स्थान",
    locationDescription: "मलेशियामध्ये स्थित, सिंगापूरच्या लहान पुलावर",
    toSingapore: "सिंगापूरपर्यंत",
    minutes: "15 मिनिटे",
    tropical: "उष्णकटिबंधीय",
    perfectWeather: "वर्षभर परिपूर्ण हवामान",
    modern: "आधुनिक",
    forestCity: "Forest City मधील अत्याधुनिक सुविधा",
    
    contactTitle: "आमच्या कॅम्पसला भेट द्या",
    contactDescription: "Network School Forest City मधील जीवनाचा प्रत्यक्ष अनुभव घेण्यासाठी भेटीचे आयोजन करा",
    nameLabel: "नाव",
    emailLabel: "ईमेल",
    phoneLabel: "फोन",
    visitTypeLabel: "भेटीचा प्रकार",
    visitTypePlaceholder: "भेटीचा प्रकार निवडा",
    visitOptions: {
      campus: "कॅम्पस भेट",
      virtual: "व्हर्च्युअल भेट",
      info: "माहिती सत्र"
    },
    messageLabel: "संदेश",
    submitInquiry: "चौकशी सबमिट करा",
    
    newsletterTitle: "संपर्कात राहा",
    newsletterDescription: "नवीनतम अपडेटसाठी आमच्या न्यूजलेटरची सदस्यता घ्या",
    subscribeNewsletter: "न्यूजलेटरची सदस्यता घ्या",
    
    footerDescription: "Forest City, मलेशिया • तुमचा पुढचा अध्याय इथून सुरू होतो",
    
    inquirySent: "धन्यवाद! तुमची चौकशी यशस्वीरीत्या पाठवली गेली.",
    subscriptionSuccess: "आमच्या न्यूजलेटरची सदस्यता घेतल्याबद्दल धन्यवाद!",
    errorMessage: "काहीतरी चूक झाली. कृपया पुन्हा प्रयत्न करा."
  },

  tr: {
    siteTitle: "Network School Forest City",
    heroTitle: "70 yaş sonrası Network School'da yaşam",
    heroSubtitle: "Malezya'nın Forest City'sindeki Network School'da yaşamanın avantajlarını keşfedin - Singapur'a kısa bir köprü üzerinden sadece 15 dakika",
    applyNow: "Şimdi Başvur",
    advantagesTitle: "Network School'da sevdiğim 20 özellik",
    
    fitness: {
      title: "Modern Fitness Olanakları",
      description: "Yaşlılar için tasarlanmış modern spor salonu ekipmanları. Yaşa uygun fitness programlarında uzmanlaşmış kişisel antrenörler."
    },
    pools: {
      title: "Güzel Yüzme Havuzları",
      description: "Isıtma seçenekleri dahil birden fazla havuz. Tropikal iklimde düşük etkili egzersiz ve dinlenme için mükemmel."
    },
    nutrition: {
      title: "Blueprint Food Beslenme",
      description: "Uzun yaşam için bilimsel olarak optimize edilmiş yemekler. Uzman şefler tarafından hazırlanan taze, sağlıklı malzemeler."
    },
    morningRuck: {
      title: "Sabah Ruck Yürüyüşü",
      description: "Enerjik grup yürüyüşleri ile güne başlayın. Forest City'yi keşfederken güç ve topluluk oluşturun."
    },
    smartYoungPeople: {
      title: "Akıllı Gençler",
      description: "Parlak genç zihinlerden yaşam hakkında yeni bakış açıları edinin. Birbirinizden öğrenin ve zihinsel olarak keskin kalın."
    },
    aiClasses: {
      title: "AI Dersleri",
      description: "Yapay zekayı pratik, anlaşılır yollarla öğrenin. Teknolojinin geleceği ile güncel kalın."
    },
    bookClubs: {
      title: "Kitap Dersleri",
      description: "Diğer yaşam boyu öğrenenlerle harika kitapları tartışın. Edebiyat ve fikirler yoluyla zihninizi genişletin."
    },
    coding: {
      title: "Vibe Kodlama",
      description: "Vibe kodlama gibi yeni araçları öğrenin - erişilebilir hale getirilmiş modern programlama. Dijital çağda yaratın ve inşa edin."
    },
    networkStates: {
      title: "Network State'ler İnşa Etmek",
      description: "Diğer network state'ler için fikirler geliştirerek geleceğin tasarımına yardım edin. Yarının topluluk yaratımının bir parçası olun."
    },
    improv: {
      title: "Doğaçlama Dersleri",
      description: "Doğaçlama tiyatro ile kendinizi yaratıcı bir şekilde ifade edin. Özgüven ve sosyal beceriler geliştirirken eğlenin."
    },
    countryRock: {
      title: "Country Rock Gecesi",
      description: "Toplulukla birlikte canlı müzik ve eğlencenin tadını çıkarın. Dans edin, şarkı söyleyin ve anılar oluşturun."
    },
    blueprintFood: {
      title: "Blueprint Food",
      description: "Uzun yaşam ve optimal sağlık için optimize edilmiş beslenme. En son bilim kullanılarak tasarlanmış yiyecekler."
    },
    lifestyle: {
      title: "Aktif Yaşam Tarzı",
      description: "Eğlenceli günlük aktivitelerle aktif ve sağlıklı bir yaşam sürdürün. Her gün enerjik ve motive kalın."
    },
    betterPerson: {
      title: "Nasıl Daha İyi Bir İnsan Olunur",
      description: "Kişisel büyüme ve gelişime odaklanın. 70'den sonra en iyi yaşam için stratejiler öğrenin."
    },
    globalCommunity: {
      title: "Küresel Topluluk",
      description: "Dünya çapındaki insanlarla bağlantı kurun. Çeşitli topluluklarda kültür, dil ve deneyimleri paylaşın."
    },
    cryptoWeb3: {
      title: "Kripto ve Web3",
      description: "Kripto para birimi ve blockchain teknolojisini öğrenin. Dijital finansal devrimle güncel kalın."
    },
    videoCreation: {
      title: "Video Yaratımı",
      description: "Hikayelerinizi paylaşmak için video yaratım becerilerini öğrenin. İçerik oluşturun ve yeni nesille bağlantı kurun."
    },
    spongeCity: {
      title: "Sünger Şehir'de Yaşamak",
      description: "Yenilikçi şehir su yönetimini deneyimleyin. Forest City'nin Sünger Şehir tasarımı doğal olarak yağmuru emer, depolar ve temizleyerek seli önler."
    },
    lifelongLearning: {
      title: "Yaşam Boyu Öğrenme",
      description: "Meraklı kalın ve öğrenmeye devam edin. Her yaş için entelektüel büyüme sınıfları, atölyeler ve fırsatlar."
    },
    ideaFactory: {
      title: "Fikir Fabrikası Ortamı",
      description: "Yaratıcılığın geliştiği işbirlikçi yenilik alanları. Yenilikçi meslektaşlar ve son teknoloji ekipmanlarla fikirleri gerçeğe dönüştürün."
    },
    
    perfectLocation: "Mükemmel Konum",
    locationDescription: "Malezya'da konumlanmış, Singapur'a kısa bir köprü üzerinde",
    toSingapore: "Singapur'a",
    minutes: "15 dakika",
    tropical: "Tropikal",
    perfectWeather: "yıl boyunca mükemmel hava",
    modern: "Modern",
    forestCity: "Forest City'de son teknoloji tesisler",
    
    contactTitle: "Kampüsümüzü Ziyaret Edin",
    contactDescription: "Network School Forest City'deki yaşamı doğrudan deneyimlemek için bir ziyaret düzenleyin",
    nameLabel: "İsim",
    emailLabel: "E-posta",
    phoneLabel: "Telefon",
    visitTypeLabel: "Ziyaret Türü",
    visitTypePlaceholder: "Ziyaret türü seçin",
    visitOptions: {
      campus: "Kampüs Ziyareti",
      virtual: "Sanal Ziyaret",
      info: "Bilgi Oturumu"
    },
    messageLabel: "Mesaj",
    submitInquiry: "Sorgu Gönder",
    
    newsletterTitle: "Bağlantıda Kalın",
    newsletterDescription: "En son güncellemeler için bültenimize abone olun",
    subscribeNewsletter: "Bültene Abone Ol",
    
    footerDescription: "Forest City, Malezya • Bir sonraki bölümünüz burada başlıyor",
    
    inquirySent: "Teşekkürler! Sorgunuz başarıyla gönderildi.",
    subscriptionSuccess: "Bültenimize abone olduğunuz için teşekkürler!",
    errorMessage: "Bir şeyler ters gitti. Lütfen tekrar deneyin."
  }
};

export type Language = keyof typeof translations;

export const languages: { code: Language; name: string; flag: string }[] = [
  { code: 'en', name: 'English', flag: '🇺🇸' },        // 1,528M total speakers
  { code: 'zh', name: 'Chinese (Mandarin)', flag: '🇨🇳' },           // 1,184M total speakers  
  { code: 'hi', name: 'Hindi', flag: '🇮🇳' },         // 609M total speakers
  { code: 'es', name: 'Spanish', flag: '🇪🇸' },        // 558M total speakers
  { code: 'ar', name: 'Arabic', flag: '🇸🇦' },        // 335M total speakers
  { code: 'fr', name: 'French', flag: '🇫🇷' },       // 312M total speakers
  { code: 'bn', name: 'Bengali', flag: '🇧🇩' },          // 284M total speakers
  { code: 'pt', name: 'Portuguese', flag: '🇵🇹' },      // 267M total speakers
  { code: 'ru', name: 'Russian', flag: '🇷🇺' },        // 253M total speakers
  { code: 'id', name: 'Indonesian', flag: '🇮🇩' }, // 252M total speakers
  { code: 'ur', name: 'Urdu', flag: '🇵🇰' },          // 246M total speakers
  { code: 'de', name: 'German', flag: '🇩🇪' },        // 134M total speakers
  { code: 'ja', name: 'Japanese', flag: '🇯🇵' },          // 126M total speakers
  { code: 'mr', name: 'Marathi', flag: '🇮🇳' },          // 99M total speakers
  { code: 'vi', name: 'Vietnamese', flag: '🇻🇳' },     // 97M total speakers
  { code: 'te', name: 'Telugu', flag: '🇮🇳' },         // 96M total speakers
  { code: 'ha', name: 'Hausa', flag: '🇳🇬' },          // 94M total speakers
  { code: 'tr', name: 'Turkish', flag: '🇹🇷' },         // Turkish
  { code: 'ko', name: 'Korean', flag: '🇰🇷' },          // Korean
  { code: 'ta', name: 'Tamil', flag: '🇮🇳' },          // Tamil
  { code: 'tl', name: 'Filipino', flag: '🇵🇭' },       // Filipino
  { code: 'th', name: 'Thai', flag: '🇹🇭' },           // Thai
  { code: 'ms', name: 'Malay', flag: '🇲🇾' }   // Malay
];