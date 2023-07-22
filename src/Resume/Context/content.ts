export const content = {
  header: {
    name: 'João Pedro Macedo Oliveira',
    field: 'Engenheiro de Software',
  },
  summary: {
    title: 'Sumário',
    items: [
      `Graduando em Ciência da Computação com 
      interesse pela área de Engenharia de Software.`,
      `Até o momento meu foco foi desenvolvimento web full-stack, 
      mas também tenho interesse em aprender desenvolvimento mobile.`,
    ],
  },
  contact: {
    title: 'Contato',
    items: [
      { href: null, label: 'Belo Horizonte, MG' },
      { href: 'tel:', label: '(31) 99715-9712' },
      { href: 'mailto: ', label: 'joao.pmoliveira@outlook.com' },
      { href: 'https://', label: 'github.com/joaopmo' },
      { href: 'https://', label: 'linkedin.com/in/joao-pmoliveira' },
    ],
  },
  skills: {
    title: 'Habilidades',
    lang: [
      {
        label: 'Inglês',
        score: 'Intermediário',
      },
    ],
    tech: [
      { label: 'React', score: 4 },
      { label: 'JavaScript', score: 4 },
      { label: 'Python', score: 3 },
      { label: 'C/C++', score: 3 },
    ],
  },
  education: {
    title: 'Formação',
    items: [
      {
        label: 'Graduando em Ciência da Computação',
        entity: 'Universidade Federal de Minas Gerais',
        address: 'UFMG, Belo Horizonte, MG',
        date: {
          start: '2019',
          end: 'Previsão de término 2023',
        },
      },
    ],
  },
  work: {
    title: 'Experiência',
    items: [
      {
        label: 'Iniciação em Desenvolvimento Tecnológico e Inovação',
        entity:
          'Grupo de Pesquisa: Computação Aplicada e Interdisciplinar em Redes Sociais e Urbanas',
        address: 'UFMG, Belo Horizonte, MG',
        date: {
          start: '2021',
          end: '2022',
        },
        summary: `Desenvolvi um sistema web de criação de currículos utilizando MERN Stack.`,
        activities: [
          'Criação da interface inicial do sistema [Figma]',
          'Desenvolvimento do front-end do sistema [React, NextJS]',
          'Desenvolvimento do back-end do sistema [ExpressJS, SocketIO]',
        ],
      },
    ],
  },
  projects: {
    title: 'Projetos',
    items: [
      {
        label: 'Gerador de Currículos',
        summary: `Sistema web de criação de currículos desenvolvido durante 
        Iniciação em Desenvolvimento Tecnológico e Inovação`,
        links: ['youtu.be/jtqvXuDR6CA'],
      },
      {
        label: 'React Paper',
        summary: `Pacote para React que possibilita alocar componentes em 
        layouts que simulam folhas de papel. Desenvolvido durante disciplina 
        de Projeto Orientado em Computação I.`,
        links: ['github.com/joaopmo/react-paper', 'youtu.be/x7b-Gb8ODQA'],
      },
    ],
  },
};
