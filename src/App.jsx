import React from 'react';
import { useLanguage } from './LanguageContext';

import hextechImage from './assets/hextech.png';
import tecgebrasImage from './assets/logo_tecgebras.webp';
import cardsIcon from './assets/cards_icon.webp';
import karaokeIcon from './assets/karaoke_icon.png';
import unimedIcon from './assets/unimed.png';
import perfilImage from './assets/foto.jpg';
import { FaLinkedin, FaGithub } from 'react-icons/fa';



function App() {
  const { t, language, setLanguage } = useLanguage();

  const projetos = [
    {
      nome: 'Hextech Solutions',
      descricao: t('hextech_desc'),
      tecnologias: 'HTML, CSS, Bootstrap, JS, PHP',
      imagem: hextechImage,
      link: 'https://hextechsolutions.com.br/',
    },
    {
      nome: t('tecgebras_title'),
      descricao: t('tecgebras_desc'),
      tecnologias: 'HTML, CSS, Bootstrap, PHP',
      imagem: tecgebrasImage,
      link: 'https://www.tecgebras.com.br/',
    },
    {
      nome: t('cards_title'),
      descricao: t('cards_desc'),
      tecnologias: 'HTML, CSS, Bootstrap, JS, WebSocket, PHP, Server Dashboard Render, Node.js',
      imagem: cardsIcon,
      link: 'https://hextechsolutions.com.br/Portifolio/HexCards/',
    },
    {
      nome: t('karaoke_title'),
      descricao: t('karaoke_desc'),
      tecnologias: 'HTML, CSS, Bootstrap, JS, mp3 player',
      imagem: karaokeIcon,
      link: 'https://hextechsolutions.com.br/Karaoke/',
    },
    {
      nome: t('unimed_title'),
      descricao: t('unimed_desc'),
      tecnologias: 'PHP, JavaScript, MySQL, HTML, CSS, Bootstrap, Oracle Plsql',
      imagem: unimedIcon,
      // link: 'http://186.209.52.83/tech_health/',
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      
      <div className="flex justify-end mb-4">
        <button
          onClick={() => setLanguage(language === "pt" ? "en" : "pt")}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          {language === "pt" ? "English" : "Português"}
        </button>
      </div>

       {/* Seção Sobre Mim */}
       <div className="mb-10 bg-white p-4 rounded-lg shadow-md flex flex-col items-center text-center">
          <img
            src={perfilImage}
            alt="Foto de perfil"
            className="w-32 h-32 rounded-full mb-4 object-cover"
          />
          <h2 className="text-xl font-semibold">{t("about_title")}</h2>
          <p className="text-gray-700">{t("about_text")}</p>
          <div className="flex gap-4 mt-4">
            <a
              href="https://www.linkedin.com/in/pedro-rodrigues-059901126/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:text-blue-900 text-2xl"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/pedrords3"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 hover:text-black text-2xl"
            >
              <FaGithub />
            </a>
          </div>

        </div>

      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold text-blue-600">
          {t("portfolio_title")}
        </h1>
        <p className="text-gray-600">{t("portfolio_subtitle")}</p>
        <p className="text-gray-600">{t("portfolio_languages")}</p>
        <p className="text-gray-600">{t("portfolio_tools")}</p>
        <p className="text-gray-600">{t("portfolio_projects")}</p>
      </header>

      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projetos.map((projeto, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md">
            <img src={projeto.imagem} alt={projeto.nome} className="rounded mb-4 h-40 w-full object-contain bg-white p-2" />
            <h2 className="text-xl font-semibold">{projeto.nome}</h2>
            <p className="text-gray-700">{projeto.descricao}</p>
            <p className="text-sm text-gray-500 mt-2">
              {t("technologies")}: {projeto.tecnologias}
            </p>
            <a
              href={projeto.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 text-blue-600 hover:underline"
            >
              {t("view")}
            </a>
          </div>
        ))}
      </main>


    </div>
  );
}

export default App;
