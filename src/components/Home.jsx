import React from 'react'
import { ReactTyped } from 'react-typed'
import Logo from '../assets/logo.svg'

function Home() {
  return (
    <div>
      <div className="navbar bg-base-100 relative z-10">
        <div className="flex items-center">
          <img src={Logo} alt="Logo" className="w-10 h-10 mr-2 logo" />
          <a className="text-xl font-bold">Decyzyjnik</a>
        </div>
        <div className="flex-none">
          {/* <ul className="menu menu-horizontal px-1">
            <li><a>Link</a></li>
            <li><a>Link</a></li>
            <li><a>Link</a></li>
          </ul> */}
        </div>
      </div>

      <div></div>

      <div className="hero bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://cdn.pixabay.com/photo/2018/06/04/00/29/women-3452067_1280.jpg"
            className="max-w-full h-auto rounded-lg shadow-2xl sm:max-w-sm"
          />

          <div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl font-bold">
              Witaj w świecie decyzji zakupowych z wtyczką AllegroDecide!
            </h1>
            <p className="py-6">
              Czy kiedykolwiek zastanawiałeś się, jak dokonać najlepszego wyboru
              spośród tysięcy produktów na Allegro? Poznaj AllegroDecide -
              innowacyjną wtyczkę przeglądarkową, która zmienia sposób, w jaki
              robisz zakupy online.
            </p>
            <button className="btn btn-primary">Przejdź do pobrania</button>

            <span className="hidden md:inline ml-20 font-bold font-fantasy text-lg shadow-lg text-emerald-400">
              <ReactTyped
                strings={[
                  'Twój przewodnik do mądrych decyzji zakupowych!',
                  'Odkryj nowy wymiar zakupów dzięki naszej wtyczce!',
                  'Zamień zakupy na przyjemność dzięki naszej wtyczce!',
                ]}
                typeSpeed={40}
                backSpeed={50}
                loop
              />
            </span>
          </div>
        </div>
      </div>

      <div className="container  mx-auto py-8 ">
        <div className="collapse collapse-plus bg-base-200 ">
          <input type="radio" name="my-accordion-3" defaultChecked />
          <div className="collapse-title text-xl font-medium">
            Po co Ci nasza wtyczka?
          </div>
          <div className="collapse-content">
            <p>
              Nasza wtyczka, Decyzyjnik, została stworzona z myślą o
              użytkownikach serwisu Allegro, aby pomóc im podejmować bardziej
              świadome decyzje zakupowe. Dzięki niej możesz korzystać z naszych
              usług bezpośrednio na stronie Allegro. Wtyczka umożliwia ci
              skorzystanie z funkcji analizy opartej na zaawansowanych
              algorytmach sztucznej inteligencji, dostępnych dzięki API GPT-3.5,
              co pozwala ocenić zalety i wady produktu, zanim podejmiesz decyzję
              zakupową.
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-200 mt-1">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            Jak działa Decyzyjnik?
          </div>
          <div className="collapse-content">
            <p>
              {' '}
              Po instalacji wtyczki AllegroDecide na swojej przeglądarce,
              podczas przeglądania produktów na Allegro, możesz kliknąć przycisk
              "Zdecyduj", aby skorzystać z naszej aplikacji. Następnie otwiera
              się pop-up z serią pytań dotyczących twoich preferencji i
              oczekiwań od produktu. Po udzieleniu odpowiedzi, nasz system
              analizuje je, wykorzystując zaawansowane funkcje sztucznej
              inteligencji, a następnie prezentuje ci podsumowanie wraz z
              rekomendacją dotyczącą zakupu.
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-200 mt-1 mb-10">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            Jakie są korzyści z korzystania z Decyzyjnika?
          </div>
          <div className="collapse-content">
            <p>
              Korzystanie z Decyzyjnika pozwala użytkownikom na podejmowanie
              bardziej świadomych decyzji zakupowych poprzez otrzymywanie
              spersonalizowanych rekomendacji opartych na zaawansowanych
              algorytmach sztucznej inteligencji. Dzięki bezpośredniej
              integracji z Allegro, możesz korzystać z Decyzyjnika bez
              wychodzenia ze strony produktu na Allegro, co znacząco ułatwia
              proces podejmowania decyzji zakupowych online.
            </p>
          </div>
        </div>
      </div>

      <footer className="footer footer-center p-4 bg-base-300 text-base-content fixed bottom-0 left-0 w-full">
        <aside>
          <p>Copyright © 2024 - Wszystkie prawa zastrzeżone</p>
        </aside>
      </footer>
    </div>
  )
}

export default Home
