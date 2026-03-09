import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ButtonOne from './ButtonOne.tsx'
import Cards from './Cards.tsx'
import Footer from './Footer.tsx'
import Twomoney from './assets/images/2MoneyLogo.png'
import Offbeat from './assets/images/offbeat.png'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className="app">
        <div>
        <h1 className="title" style={{ color: 'orange', fontStyle: 'italic' }}>Welcome to My React App</h1>
        <p className="description">This is a simple React application.</p>
        </div>
      <main className="content">

        <Cards
          title="Project 1 - 2Money"
          text="This is my first project at uni. It was done in a group of 6 people, and it was a project about financial education. We created a website to help people learn about managing their finances."
          thumbnail={Twomoney}
          style={{ backgroundColor: '#414141', width: '40%' }}
          buttonTitle="Github Repo"
          button="on"
          onClick={() => window.open('https://github.com/Eduard0-code/Trabalho-Interdisciplinar---Entrega-final---Em-GRUPO', '_blank')}
        />
        <Cards
          title="OffBeat"
          text="My personal project, OffBeat is a music discovery app that helps users find new music based on their listening habits. It works like a blogspot, with simple and intuitive desing."
          thumbnail={Offbeat}
          style={{ backgroundColor: 'darkblue', width: '40%' }}
          buttonTitle="Github Repo"
          button="on"
          onClick={() => window.open('https://github.com/Eduard0-code/Projeto-final-de-Desenvolvimento-Web', '_blank')}
        />
      </main>
        <ButtonOne />
      <Footer />
    </div>
  </StrictMode>,
)
