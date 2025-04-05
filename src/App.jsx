import React from 'react';

import hextechImage from './assets/hextech.png'
import tecgebrasImage from './assets/logo_tecgebras.webp';
import cardsIcon from './assets/cards_icon.webp';
import karaokeIcon from './assets/karaoke_icon.png';
import unimedIcon from './assets/unimed.png';



function App() {
  const projetos = [
    {
      nome: 'Hextech Solutions',
      descricao: 'Site institucional da minha empresa, com foco em serviços e contato.',
      tecnologias: 'HTML, CSS, Bootstrap, JS, PHP',
      imagem: hextechImage,
      link: 'https://hextechsolutions.com.br/'
    },
    {
      nome: 'Tecgebras Grupo Geradores',
      descricao: 'Site institucional moderno com foco na apresentação dos serviços e contato da empresa.',
      tecnologias: 'HTML, CSS, Bootstrap, PHP',
      imagem: tecgebrasImage,
      link: 'https://www.tecgebras.com.br/',
    },
    {
      nome: 'Jogo de Cartas Online (Estilo Patuscada +18)',
      descricao: 'Jogo multiplayer online com sistema de regras personalizadas. Necessário no mínimo 3 pessoas para jogar (convide amigos). Servidor único (Beta)',
      tecnologias: 'HTML, CSS, Bootstrap, JS, WebSocket, PHP, servidor Dashboard Render, Node.js',
      imagem: cardsIcon,
      link: 'https://hextechsolutions.com.br/Portifolio/HexCards/',
    },
    {
      nome: 'Karaoke Dinâmico',
      descricao: 'Projeto de karaokê com sincronização de letra e áudio (Open source).',
      tecnologias: 'HTML, CSS, Bootstrap, JS, Arquivo mp3',
      imagem: karaokeIcon,
      link: 'https://hextechsolutions.com.br/Karaoke/',
    },
    {
      nome: 'Sistema de Automação Interna – Unimed Os Bandeirantes Tech Health',
      descricao: 'Desenvolvimento de sistema interno voltado para automação de processos administrativos, com foco em atualização de valores, geração de relatórios médicos e controle de dados de consultas. Utilizado por colaboradores da Unimed para agilizar operações rotineiras e garantir consistência das informações.',
      tecnologias: 'PHP, JavaScript, MySQL, HTML, CSS, Bootstrap, Oracle Plsql',
      imagem: unimedIcon,
      link: 'http://186.209.52.83/tech_health/',
    }
    
    
    
  ]

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold text-blue-600">Meu Portfólio</h1>
        <p className="text-gray-600">Desenvolvido utilizando o framework React, Tailwind CSS</p>
        <p className="text-gray-600">Linguagens: JS, JSX(JavaScript + XML), CSS.</p>
        <p className="text-gray-600"> Ferramenta de build: Vite, Node.js</p>
        <p className="text-gray-600">Projetos profissionais e pessoais</p>
      </header>

      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projetos.map((projeto, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md">
            {/* <img src={projeto.imagem} alt={projeto.nome} className="rounded mb-4 h-40 w-full object-cover" /> */}
            <img src={projeto.imagem} alt={projeto.nome} className="rounded mb-4 h-40 w-full object-contain bg-white p-2" />
            <h2 className="text-xl font-semibold">{projeto.nome}</h2>
            <p className="text-gray-700">{projeto.descricao}</p>
            <p className="text-sm text-gray-500 mt-2">Tecnologias: {projeto.tecnologias}</p>
            <a href={projeto.link} target="_blank" rel="noopener noreferrer" className="inline-block mt-3 text-blue-600 hover:underline">
              Ver projeto
            </a>
          </div>
        ))}
      </main>
    </div>
  )
}

export default App
