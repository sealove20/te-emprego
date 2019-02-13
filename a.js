perfil = {
  nome: 'Fulano de Tal',
  dataNascimento: '11/01/1973',
  tipo: 'empregado' || 'empregador',
  interessesProfissionais: [1, 4], // relação de interesses profissionais (consultar API de interesses)
  interessesPessoais: [
    'Tocar Violão',
    'Jogar Futebol',
    'Andar de Skate',
    'Ler livros',
  ],
  idiomas: [
    {
      nivel: 'Nativo' || 4,
      idioma: 'Português',
      curso: false,
    },
    {
      nivel: 'Avançado',
      idioma: 'Inglês',
      curso: false,
    },
    {
      nivel: 'Fluente',
      idioma: 'Alemão',
      curso: true,
    },
  ],
  contato: {
    email: 'fulano@detal.com',
    telefone: '27999001143',
    whatsApp: true,
    telegram: false,
    endereco: 'Rua X, numero Y, Bairro Z',
    cidade: 'Osasco',
    estado: 'São Paulo',
    cep: '00000000'
  },
  curriculo: {
    formado: false,
    autodidata: false,
    experiencia: [
      {
        autonomo: false,
        de: '2018-03-21',
        ate: '2018-04-21' || null,
        empresa: 'Pota Toe' || 212 || null, // a gente vai ter um cadastro de empresas, ele pode relacionar ou não
        cargo: 'Descascador de batata',
        descricao: 'A principal responsabilidade do cargo era descascar batatas...',
      },
      {
        autonomo: true,
        de: '2019-01-01',
        ate: null,
        empresa: null,
        cargo: 'Cozinheiro',
        descricao: 'Tenho um pequeno restaurante na zona sul...',
      },
    ],
    ensino: [
      {
        tipo: 'Ensino médio', // tem que ser relacionado isso aqui
        local: 'EEEM Escolinha do Gugu',
        emAndamento: false,
        conclusao: '2000' || false,
      },
      {
        tipo: 'Ensino superior',
        local: 'EEEM Escolinha do Gugu',
        emAndamento: true,
        conclusao: '2019',
      },
    ]
  }
}
