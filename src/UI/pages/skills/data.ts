export const SKILL_LIST_CONTENT = {
  frontend: [
    {
      name: 'js',
      data: ['Vue', 'React', 'Vanilla JS', 'ES6', 'Type Script']
    },
    { name: 'css', data: ['Scss/Sass', 'Bootstrap', 'Mantine', 'Vuetify'] },
    { name: 'mobile', data: ['PWA', 'Framework 7', 'Cordova'] },
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
        'Elasticsearch',
        'Docker',
        'WebSocket',
        'OAuth/JWT',
        'Linux',
        'Git',
        'Bash Scripting'
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
        icon: 'fab fa-vuejs',
        link: 'https://github.com/EmirDelicR/Vue-js-all',
        description: 'vue-description'
      }
    },
    visual: {
      name: 'Vue',
      data: [45, 45, 45, 50, 50]
    }
  }
};

export const OPTION_DATA_X = [
  {
    name: 'Vue',
    data: [
      {
        tabName: 'description',
        content: [
          {
            type: 'desc',
            name: 'Vue',
            data: {
              icon: 'fab fa-vuejs',
              link: 'https://github.com/EmirDelicR/Vue-js-all',
              description: 'vue-description'
            }
          }
        ]
      },
      {
        tabName: 'visual',
        content: [{ type: 'visual', name: 'Vue', data: [45, 45, 45, 50, 50] }]
      }
    ]
  },
  {
    name: 'React',
    data: [
      {
        tabName: 'description',
        type: 'options',
        content: [
          {
            type: 'desc',
            name: 'React',
            data: {
              icon: 'fab fa-react',
              link: 'https://github.com/EmirDelicR/React-js-all',
              description: 'react-description'
            }
          }
        ]
      },
      {
        tabName: 'visual',
        type: 'options',
        content: [{ type: 'visual', name: 'React', data: [35, 40, 45, 50, 45] }]
      }
    ]
  },
  {
    name: 'Vanilla JS',
    data: [
      {
        tabName: 'description',
        type: 'options',
        content: [
          {
            type: 'desc',
            name: 'Vanilla JS',
            data: {
              icon: 'fab fa-js',
              link: 'https://github.com/EmirDelicR/Java-script-all',
              description: 'vanilla-description'
            }
          }
        ]
      },
      {
        tabName: 'visual',
        type: 'options',
        content: [
          {
            type: 'visual',
            name: 'Vanilla JS',
            data: [40, 45, 45, 50, 50]
          }
        ]
      }
    ]
  },
  {
    name: 'ES6',
    data: [
      {
        tabName: 'description',
        type: 'options',
        content: [
          {
            type: 'desc',
            name: 'ES6',
            data: {
              icon: 'fab fa-js',
              link: 'https://github.com/EmirDelicR/Java-script-all/tree/master/ES6-Essentional',
              description: 'es-description'
            }
          }
        ]
      },
      {
        tabName: 'visual',
        type: 'options',
        content: [{ type: 'visual', name: 'ES6', data: [50, 45, 50, 50, 50] }]
      }
    ]
  },
  {
    name: 'Type Script',
    data: [
      {
        tabName: 'description',
        type: 'options',
        content: [
          {
            type: 'desc',
            name: 'Type Script',
            data: {
              icon: 'fab fa-js',
              link: 'https://github.com/EmirDelicR/Type-script-all',
              description: 'ts-description'
            }
          }
        ]
      },
      {
        tabName: 'visual',
        type: 'options',
        content: [
          {
            type: 'visual',
            name: 'Type Script',
            data: [30, 40, 35, 45, 50]
          }
        ]
      }
    ]
  },
  {
    name: 'Scss/Sass',
    data: [
      {
        tabName: 'description',
        type: 'options',
        content: [
          {
            type: 'desc',
            name: 'Scss/Sass',
            data: {
              icon: 'fab fa-sass',
              link: 'https://github.com/EmirDelicR/Vue-js-all/tree/master/vue-with-scss',
              description: 'scss-description'
            }
          }
        ]
      },
      {
        tabName: 'visual',
        type: 'options',
        content: [
          {
            type: 'visual',
            name: 'Scss/Sass',
            data: [40, 45, 45, 50, 50]
          }
        ]
      }
    ]
  },
  {
    name: 'Bootstrap',
    data: [
      {
        tabName: 'description',
        type: 'options',
        content: [
          {
            type: 'desc',
            name: 'Bootstrap',
            data: {
              icon: 'fab fa-bootstrap',
              link: '#',
              description: 'bootstrap-description'
            }
          }
        ]
      },
      {
        tabName: 'visual',
        type: 'options',
        content: [
          {
            type: 'visual',
            name: 'Bootstrap',
            data: [35, 35, 45, 20, 50]
          }
        ]
      }
    ]
  },
  {
    name: 'Bulma',
    data: [
      {
        tabName: 'description',
        type: 'options',
        content: [
          {
            type: 'desc',
            name: 'Bulma',
            data: {
              icon: 'fab fa-css3',
              link: '#',
              description: 'bulma-description'
            }
          }
        ]
      },
      {
        tabName: 'visual',
        type: 'options',
        content: [{ type: 'visual', name: 'Bulma', data: [40, 45, 45, 50, 40] }]
      }
    ]
  },
  {
    name: 'Vuetify',
    data: [
      {
        tabName: 'description',
        type: 'options',
        content: [
          {
            type: 'desc',
            name: 'Vuetify',
            data: {
              icon: 'fab fa-css3',
              link: '#',
              description: 'vuetify-description'
            }
          }
        ]
      },
      {
        tabName: 'visual',
        type: 'options',
        content: [
          {
            type: 'visual',
            name: 'Vuetify',
            data: [40, 50, 45, 50, 50]
          }
        ]
      }
    ]
  },
  {
    name: 'PWA',
    data: [
      {
        tabName: 'description',
        type: 'options',
        content: [
          {
            type: 'desc',
            name: 'PWA',
            data: {
              icon: 'fab fa-product-hunt',
              link: 'https://github.com/EmirDelicR/PWA-Full-clean',
              description: 'pwa-description'
            }
          }
        ]
      },
      {
        tabName: 'visual',
        type: 'options',
        content: [{ type: 'visual', name: 'PWA', data: [40, 50, 35, 30, 30] }]
      }
    ]
  },
  {
    name: 'Framework 7',
    data: [
      {
        tabName: 'description',
        type: 'options',
        content: [
          {
            type: 'desc',
            name: 'Framework 7',
            data: {
              icon: 'far fa-hand-spock',
              link: 'https://github.com/EmirDelicR/F7React',
              description: 'framework7-description'
            }
          }
        ]
      },
      {
        tabName: 'visual',
        type: 'options',
        content: [
          {
            type: 'visual',
            name: 'Framework 7',
            data: [30, 35, 35, 50, 40]
          }
        ]
      }
    ]
  },
  {
    name: 'Cordova',
    data: [
      {
        tabName: 'description',
        type: 'options',
        content: [
          {
            type: 'desc',
            name: 'Cordova',
            data: {
              icon: 'fas fa-mobile-alt',
              link: '#',
              description: 'cordova-description'
            }
          }
        ]
      },
      {
        tabName: 'visual',
        type: 'options',
        content: [
          {
            type: 'visual',
            name: 'Cordova',
            data: [30, 35, 35, 35, 40]
          }
        ]
      }
    ]
  },
  {
    name: 'Jest',
    data: [
      {
        tabName: 'description',
        type: 'options',
        content: [
          {
            type: 'desc',
            name: 'Jest',
            data: {
              icon: 'fas fa-radiation',
              link: 'https://github.com/EmirDelicR/Vue-js-all/tree/master/tests-in-vue',
              description: 'jest-description'
            }
          }
        ]
      },
      {
        tabName: 'visual',
        type: 'options',
        content: [{ type: 'visual', name: 'Jest', data: [45, 35, 35, 25, 40] }]
      }
    ]
  },
  {
    name: 'Cypress',
    data: [
      {
        tabName: 'description',
        type: 'options',
        content: [
          {
            type: 'desc',
            name: 'Cypress',
            data: {
              icon: 'fas fa-radiation',
              link: 'https://github.com/EmirDelicR/Vue-js-all/tree/master/test-e2e-in-vue',
              description: 'cypress-description'
            }
          }
        ]
      },
      {
        tabName: 'visual',
        type: 'options',
        content: [
          {
            type: 'visual',
            name: 'Cypress',
            data: [30, 35, 35, 35, 30]
          }
        ]
      }
    ]
  },
  {
    name: 'Node',
    data: [
      {
        tabName: 'description',
        type: 'options',
        content: [
          {
            type: 'desc',
            name: 'Node',
            data: {
              icon: 'fab fa-node',
              link: 'https://github.com/EmirDelicR/Node-js-all',
              description: 'node-description'
            }
          }
        ]
      },
      {
        tabName: 'visual',
        type: 'options',
        content: [{ type: 'visual', name: 'Node', data: [45, 45, 45, 50, 50] }]
      }
    ]
  },
  {
    name: 'Python',
    data: [
      {
        tabName: 'description',
        type: 'options',
        content: [
          {
            type: 'desc',
            name: 'Python',
            data: {
              icon: 'fab fa-python',
              link: 'https://github.com/EmirDelicR/Python-all',
              description: 'python-description'
            }
          }
        ]
      },
      {
        tabName: 'visual',
        type: 'options',
        content: [
          { type: 'visual', name: 'Python', data: [30, 45, 35, 45, 30] }
        ]
      }
    ]
  },
  {
    name: 'PHP',
    data: [
      {
        tabName: 'description',
        type: 'options',
        content: [
          {
            type: 'desc',
            name: 'PHP',
            data: {
              icon: 'fab fa-php',
              link: 'https://github.com/EmirDelicR/CodeIgniter-blog',
              description: 'php-description'
            }
          }
        ]
      },
      {
        tabName: 'visual',
        type: 'options',
        content: [{ type: 'visual', name: 'PHP', data: [30, 45, 45, 25, 30] }]
      }
    ]
  },
  {
    name: 'Express',
    data: [
      {
        tabName: 'description',
        type: 'options',
        content: [
          {
            type: 'desc',
            name: 'Express',
            data: {
              icon: 'fab fa-node',
              link: 'https://github.com/EmirDelicR/Node-js-all',
              description: 'express-description'
            }
          }
        ]
      },
      {
        tabName: 'visual',
        type: 'options',
        content: [
          {
            type: 'visual',
            name: 'Express',
            data: [40, 40, 40, 40, 40]
          }
        ]
      }
    ]
  },
  {
    name: 'Django',
    data: [
      {
        tabName: 'description',
        type: 'options',
        content: [
          {
            type: 'desc',
            name: 'Django',
            data: {
              icon: 'fab fa-python',
              link: 'https://github.com/EmirDelicR/Python-all',
              description: 'django-description'
            }
          }
        ]
      },
      {
        tabName: 'visual',
        type: 'options',
        content: [
          { type: 'visual', name: 'Django', data: [30, 35, 35, 35, 40] }
        ]
      }
    ]
  },
  {
    name: 'CodeIgniter',
    data: [
      {
        tabName: 'description',
        type: 'options',
        content: [
          {
            type: 'desc',
            name: 'CodeIgniter',
            data: {
              icon: 'fab fa-php',
              link: 'https://github.com/EmirDelicR/CodeIgniter-app-login',
              description: 'codeigniter-description'
            }
          }
        ]
      },
      {
        tabName: 'visual',
        type: 'options',
        content: [
          {
            type: 'visual',
            name: 'CodeIgniter',
            data: [30, 30, 30, 30, 20]
          }
        ]
      }
    ]
  },
  {
    name: 'PostgreSQL',
    data: [
      {
        tabName: 'description',
        type: 'options',
        content: [
          {
            type: 'desc',
            name: 'PostgreSQL',
            data: {
              icon: 'fas fa-database',
              link: 'https://github.com/EmirDelicR/Python-all',
              description: 'postgresql-description'
            }
          }
        ]
      },
      {
        tabName: 'visual',
        type: 'options',
        content: [
          {
            type: 'visual',
            name: 'PostgreSQL',
            data: [40, 40, 35, 35, 40]
          }
        ]
      }
    ]
  },
  {
    name: 'MySQL',
    data: [
      {
        tabName: 'description',
        type: 'options',
        content: [
          {
            type: 'desc',
            name: 'MySQL',
            data: {
              icon: 'fas fa-database',
              link: 'https://github.com/EmirDelicR/Python-all',
              description: 'mysql-description'
            }
          }
        ]
      },
      {
        tabName: 'visual',
        type: 'options',
        content: [{ type: 'visual', name: 'MySQL', data: [40, 40, 35, 35, 40] }]
      }
    ]
  },
  {
    name: 'GraphQL',
    data: [
      {
        tabName: 'description',
        type: 'options',
        content: [
          {
            type: 'desc',
            name: 'GraphQL',
            data: {
              icon: 'fas fa-database',
              link: 'https://github.com/EmirDelicR/Node-js-all/tree/master/17-GRAPHQL',
              description: 'graphql-description'
            }
          }
        ]
      },
      {
        tabName: 'visual',
        type: 'options',
        content: [
          {
            type: 'visual',
            name: 'GraphQL',
            data: [40, 40, 35, 50, 40]
          }
        ]
      }
    ]
  },
  {
    name: 'Firebase',
    data: [
      {
        tabName: 'description',
        type: 'options',
        content: [
          {
            type: 'desc',
            name: 'Firebase',
            data: {
              icon: 'fas fa-database',
              link: '#',
              description: 'firebase-description'
            }
          }
        ]
      },
      {
        tabName: 'visual',
        type: 'options',
        content: [
          {
            type: 'visual',
            name: 'Firebase',
            data: [40, 40, 35, 35, 40]
          }
        ]
      }
    ]
  },
  {
    name: 'MongoDB',
    data: [
      {
        tabName: 'description',
        type: 'options',
        content: [
          {
            type: 'desc',
            name: 'MongoDB',
            data: {
              icon: 'fas fa-database',
              link: '#',
              description: 'mongodb-description'
            }
          }
        ]
      },
      {
        tabName: 'visual',
        type: 'options',
        content: [
          {
            type: 'visual',
            name: 'MongoDB',
            data: [40, 40, 35, 30, 30]
          }
        ]
      }
    ]
  },
  {
    name: 'Redis',
    data: [
      {
        tabName: 'description',
        type: 'options',
        content: [
          {
            type: 'desc',
            name: 'Redis',
            data: {
              icon: 'far fa-registered',
              link: '#',
              description: 'redis-description'
            }
          }
        ]
      },
      {
        tabName: 'visual',
        type: 'options',
        content: [{ type: 'visual', name: 'Redis', data: [30, 25, 25, 25, 30] }]
      }
    ]
  },
  {
    name: 'RabbitMQ',
    data: [
      {
        tabName: 'description',
        type: 'options',
        content: [
          {
            type: 'desc',
            name: 'RabbitMQ',
            data: {
              icon: 'far fa-registered',
              link: '#',
              description: 'rabitmq-description'
            }
          }
        ]
      },
      {
        tabName: 'visual',
        type: 'options',
        content: [
          {
            type: 'visual',
            name: 'RabbitMQ',
            data: [30, 30, 35, 35, 30]
          }
        ]
      }
    ]
  },
  {
    name: 'Elasticsearch',
    data: [
      {
        tabName: 'description',
        type: 'options',
        content: [
          {
            type: 'desc',
            name: 'Elasticsearch',
            data: {
              icon: 'fas fa-search',
              link: '#',
              description: 'elk-description'
            }
          }
        ]
      },
      {
        tabName: 'visual',
        type: 'options',
        content: [
          {
            type: 'visual',
            name: 'Elasticsearch',
            data: [30, 30, 30, 30, 30]
          }
        ]
      }
    ]
  },
  {
    name: 'Docker',
    data: [
      {
        tabName: 'description',
        type: 'options',
        content: [
          {
            type: 'desc',
            name: 'Docker',
            data: {
              icon: 'fab fa-docker',
              link: '#',
              description: 'docker-description'
            }
          }
        ]
      },
      {
        tabName: 'visual',
        type: 'options',
        content: [
          { type: 'visual', name: 'Docker', data: [40, 40, 35, 45, 40] }
        ]
      }
    ]
  },
  {
    name: 'WebSocket',
    data: [
      {
        tabName: 'description',
        type: 'options',
        content: [
          {
            type: 'desc',
            name: 'WebSocket',
            data: {
              icon: 'fas fa-plug',
              link: 'https://github.com/EmirDelicR/Node-js-all#websocket',
              description: 'websocket-description'
            }
          }
        ]
      },
      {
        tabName: 'visual',
        type: 'options',
        content: [
          {
            type: 'visual',
            name: 'WebSocket',
            data: [45, 45, 50, 50, 40]
          }
        ]
      }
    ]
  },
  {
    name: 'OAuth/JWT',
    data: [
      {
        tabName: 'description',
        type: 'options',
        content: [
          {
            type: 'desc',
            name: 'OAuth/JWT',
            data: {
              icon: 'fas fa-fingerprint',
              link: '#',
              description: 'oauth-description'
            }
          }
        ]
      },
      {
        tabName: 'visual',
        type: 'options',
        content: [
          {
            type: 'visual',
            name: 'OAuth/JWT',
            data: [40, 40, 35, 35, 40]
          }
        ]
      }
    ]
  },
  {
    name: 'Linux',
    data: [
      {
        tabName: 'description',
        type: 'options',
        content: [
          {
            type: 'desc',
            name: 'Linux',
            data: {
              icon: 'fab fa-linux',
              link: '#',
              description: 'linux-description'
            }
          }
        ]
      },
      {
        tabName: 'visual',
        type: 'options',
        content: [
          {
            type: 'visual',
            name: 'Linux',
            data: [40, 40, 50, 50, 50]
          }
        ]
      }
    ]
  },
  {
    name: 'Git',
    data: [
      {
        tabName: 'description',
        type: 'options',
        content: [
          {
            type: 'desc',
            name: 'Git',
            data: {
              icon: 'fab fa-github',
              link: 'https://github.com/EmirDelicR',
              description: 'git-description'
            }
          }
        ]
      },
      {
        tabName: 'visual',
        type: 'options',
        content: [
          {
            type: 'visual',
            name: 'Git',
            data: [40, 40, 50, 50, 50]
          }
        ]
      }
    ]
  },
  {
    name: 'Bash Scripting',
    data: [
      {
        tabName: 'description',
        type: 'options',
        content: [
          {
            type: 'desc',
            name: 'Bash Scripting',
            data: {
              icon: 'fas fa-laptop-code',
              link: 'https://github.com/EmirDelicR/Bash-scripting-all',
              description: 'bash-description'
            }
          }
        ]
      },
      {
        tabName: 'visual',
        type: 'options',
        content: [
          {
            type: 'visual',
            name: 'Bash Scripting',
            data: [40, 40, 50, 40, 40]
          }
        ]
      }
    ]
  }
];
