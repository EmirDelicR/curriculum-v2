import {
  faVuejs,
  faReact,
  faJs,
  faSass,
  faBootstrap,
  faCss3,
  faProductHunt,
  faNode,
  faPython,
  faDocker,
  faLinux,
  faGithub
} from '@fortawesome/free-brands-svg-icons';
import {
  faDatabase,
  faFingerprint,
  faHandSpock,
  faLaptopCode,
  faPlug,
  faRadiation,
  faRegistered,
  faSearch
} from '@fortawesome/free-solid-svg-icons';

export const SKILL_LIST_CONTENT = {
  frontend: [
    {
      name: 'js',
      data: ['Vue', 'React', 'VanillaJS', 'TypeScript']
    },
    { name: 'css', data: ['Scss', 'Bootstrap', 'Mantine', 'Vuetify'] },
    { name: 'mobile', data: ['PWA', 'Framework7'] },
    { name: 'test', data: ['Jest', 'Cypress'] }
  ],
  backend: [
    {
      name: 'programs',
      data: ['Node', 'Python']
    },
    { name: 'frameworks', data: ['Express', 'Django'] }
  ],
  database: [
    {
      name: 'db',
      data: ['PostgreSQL', 'MySQL', 'GraphQL', 'Firebase', 'MongoDB']
    }
  ],
  utils: [
    {
      name: 'util',
      data: [
        'Redis',
        'RabbitMQ',
        'ElasticSearch',
        'Docker',
        'WebSocket',
        'OAuth-JWT',
        'Linux',
        'Git',
        'BashScripting'
      ]
    }
  ]
};
/** -------------------------------------------------------------------------------------------------------- */
export const OPTION_DATA = {
  Vue: {
    description: {
      name: 'Vue',
      data: {
        icon: faVuejs,
        link: 'https://github.com/EmirDelicR/Vue-js-all',
        description: 'vue-description'
      }
    },
    visual: {
      name: 'Vue',
      data: [85, 90, 80, 100, 90]
    }
  },
  React: {
    description: {
      name: 'React',
      data: {
        icon: faReact,
        link: 'https://github.com/EmirDelicR/React-js-all',
        description: 'react-description'
      }
    },
    visual: {
      name: 'React',
      data: [95, 90, 95, 100, 100]
    }
  },
  VanillaJS: {
    description: {
      name: 'VanillaJS',
      data: {
        icon: faJs,
        link: 'https://github.com/EmirDelicR/Java-script-all',
        description: 'vanilla-description'
      }
    },
    visual: {
      name: 'VanillaJS',
      data: [90, 90, 95, 70, 70]
    }
  },
  TypeScript: {
    description: {
      name: 'Type Script',
      data: {
        icon: faJs,
        link: 'https://github.com/EmirDelicR/Type-script-all',
        description: 'ts-description'
      }
    },
    visual: {
      name: 'Type Script',
      data: [80, 90, 85, 80, 75]
    }
  },
  Scss: {
    description: {
      name: 'Scss/Sass',
      data: {
        icon: faSass,
        link: 'https://github.com/EmirDelicR/Vue-js-all/tree/master/vue-with-scss',
        description: 'scss-description'
      }
    },
    visual: {
      name: 'Scss/Sass',
      data: [90, 90, 90, 85, 80]
    }
  },
  Bootstrap: {
    description: {
      name: 'Bootstrap',
      data: {
        icon: faBootstrap,
        link: '#',
        description: 'bootstrap-description'
      }
    },

    visual: {
      name: 'Bootstrap',
      data: [90, 90, 90, 80, 75]
    }
  },
  Mantine: {
    description: {
      name: 'Mantine',
      data: {
        icon: faCss3,
        link: '#',
        description: 'mantine-description'
      }
    },
    visual: {
      name: 'Mantine',
      data: [100, 90, 90, 100, 100]
    }
  },
  Vuetify: {
    description: {
      name: 'Vuetify',
      data: {
        icon: faCss3,
        link: '#',
        description: 'vuetify-description'
      }
    },
    visual: {
      name: 'Vuetify',
      data: [100, 90, 90, 95, 90]
    }
  },
  PWA: {
    description: {
      name: 'PWA',
      data: {
        icon: faProductHunt,
        link: 'https://github.com/EmirDelicR/PWA-Full-clean',
        description: 'pwa-description'
      }
    },
    visual: {
      name: 'PWA',
      data: [100, 90, 90, 95, 90]
    }
  },
  Framework7: {
    description: {
      name: 'Framework 7',
      data: {
        icon: faHandSpock,
        link: 'https://github.com/EmirDelicR/F7React',
        description: 'framework7-description'
      }
    },
    visual: {
      name: 'Framework 7',
      data: [80, 80, 70, 85, 70]
    }
  },
  Jest: {
    description: {
      name: 'Jest',
      data: {
        icon: faRadiation,
        link: 'https://github.com/EmirDelicR/Vue-js-all/tree/master/tests-in-vue',
        description: 'jest-description'
      }
    },
    visual: {
      name: 'Jest',
      data: [100, 90, 90, 95, 90]
    }
  },
  Cypress: {
    description: {
      name: 'Cypress',
      data: {
        icon: faRadiation,
        link: 'https://github.com/EmirDelicR/Vue-js-all/tree/master/test-e2e-in-vue',
        description: 'cypress-description'
      }
    },
    visual: {
      name: 'Cypress',
      data: [60, 65, 50, 35, 30]
    }
  },
  Node: {
    description: {
      name: 'Node',
      data: {
        icon: faNode,
        link: 'https://github.com/EmirDelicR/Node-js-all',
        description: 'node-description'
      }
    },

    visual: {
      name: 'Node',
      data: [100, 90, 90, 95, 90]
    }
  },
  Python: {
    description: {
      name: 'Python',
      data: {
        icon: faPython,
        link: 'https://github.com/EmirDelicR/Python-all',
        description: 'python-description'
      }
    },
    visual: { name: 'Python', data: [80, 80, 70, 90, 90] }
  },
  Express: {
    description: {
      name: 'Express',
      data: {
        icon: faNode,
        link: 'https://github.com/EmirDelicR/Node-js-all',
        description: 'express-description'
      }
    },
    visual: {
      name: 'Express',
      data: [100, 90, 90, 95, 90]
    }
  },
  Django: {
    description: {
      name: 'Django',
      data: {
        icon: faPython,
        link: 'https://github.com/EmirDelicR/Python-all',
        description: 'django-description'
      }
    },
    visual: { name: 'Django', data: [45, 55, 40, 65, 50] }
  },
  PostgreSQL: {
    description: {
      name: 'PostgreSQL',
      data: {
        icon: faDatabase,
        link: 'https://github.com/EmirDelicR/Python-all',
        description: 'postgresql-description'
      }
    },
    visual: {
      name: 'PostgreSQL',
      data: [50, 50, 55, 55, 55]
    }
  },
  MySQL: {
    description: {
      name: 'MySQL',
      data: {
        icon: faDatabase,
        link: 'https://github.com/EmirDelicR/Python-all',
        description: 'mysql-description'
      }
    },
    visual: { name: 'MySQL', data: [60, 60, 65, 65, 60] }
  },
  GraphQL: {
    description: {
      name: 'GraphQL',
      data: {
        icon: faDatabase,
        link: 'https://github.com/EmirDelicR/Node-js-all/tree/master/17-GRAPHQL',
        description: 'graphql-description'
      }
    },
    visual: {
      name: 'GraphQL',
      data: [64, 70, 55, 80, 80]
    }
  },
  Firebase: {
    description: {
      name: 'Firebase',
      data: {
        icon: faDatabase,
        link: '#',
        description: 'firebase-description'
      }
    },
    visual: {
      name: 'Firebase',
      data: [55, 50, 55, 55, 50]
    }
  },
  MongoDB: {
    description: {
      name: 'MongoDB',
      data: {
        icon: faDatabase,
        link: '#',
        description: 'mongodb-description'
      }
    },
    visual: {
      name: 'MongoDB',
      data: [64, 70, 55, 80, 80]
    }
  },
  Redis: {
    description: {
      name: 'Redis',
      data: {
        icon: faRegistered,
        link: '#',
        description: 'redis-description'
      }
    },
    visual: { name: 'Redis', data: [50, 55, 55, 55, 60] }
  },
  RabbitMQ: {
    description: {
      name: 'RabbitMQ',
      data: {
        icon: faRegistered,
        link: '#',
        description: 'rabitmq-description'
      }
    },
    visual: {
      name: 'RabbitMQ',
      data: [50, 45, 45, 55, 50]
    }
  },
  ElasticSearch: {
    description: {
      name: 'Elasticsearch',
      data: {
        icon: faSearch,
        link: '#',
        description: 'elk-description'
      }
    },
    visual: {
      name: 'Elasticsearch',
      data: [50, 55, 55, 55, 60]
    }
  },
  Docker: {
    description: {
      name: 'Docker',
      data: {
        icon: faDocker,
        link: '#',
        description: 'docker-description'
      }
    },
    visual: { name: 'Docker', data: [80, 90, 85, 85, 80] }
  },
  WebSocket: {
    description: {
      name: 'WebSocket',
      data: {
        icon: faPlug,
        link: 'https://github.com/EmirDelicR/Node-js-all#websocket',
        description: 'websocket-description'
      }
    },
    visual: {
      name: 'WebSocket',
      data: [90, 90, 75, 85, 80]
    }
  },
  'OAuth-JWT': {
    description: {
      name: 'OAuth/JWT',
      data: {
        icon: faFingerprint,
        link: '#',
        description: 'oauth-description'
      }
    },
    visual: {
      name: 'OAuth/JWT',
      data: [80, 90, 85, 85, 80]
    }
  },
  Linux: {
    description: {
      name: 'Linux',
      data: {
        icon: faLinux,
        link: '#',
        description: 'linux-description'
      }
    },
    visual: {
      name: 'Linux',
      data: [90, 90, 85, 100, 100]
    }
  },
  Git: {
    description: {
      name: 'Git',
      data: {
        icon: faGithub,
        link: 'https://github.com/EmirDelicR',
        description: 'git-description'
      }
    },
    visual: {
      name: 'Git',
      data: [80, 90, 85, 95, 95]
    }
  },
  BashScripting: {
    description: {
      name: 'Bash Scripting',
      data: {
        icon: faLaptopCode,
        link: 'https://github.com/EmirDelicR/Bash-scripting-all',
        description: 'bash-description'
      }
    },
    visual: {
      name: 'Bash Scripting',
      data: [70, 80, 85, 100, 100]
    }
  }
};
