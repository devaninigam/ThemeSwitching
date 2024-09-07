import React, { useState } from 'react';
import { FaRocket, FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { PageProps } from '../Function/LocalStorage';


const LandingPage: React.FC<PageProps> = ({ ThemeData, ChangeThemeColor, ChangeThemeMode }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <div className="App">
      <div>
        {/* Main modal */}
        {isModalOpen && (
          <div
            id="default-modal"
            tabIndex={-1}
            aria-hidden={!isModalOpen}
            className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
          >
            <div className="relative p-4 w-full max-w-2xl max-h-full">
              {/* Modal content */}
              <div className={`elative bg-white rounded-lg shadow dark:bg-${ThemeData.colors}-300`}>
                {/* Modal header */}
                <div className={`flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-${ThemeData.colors}-900`}>
                  <h3 className={`text-xl font-semibold text-${ThemeData.colors}-900 dark:${ThemeData.colors}-white`}>
                    Change your Theme
                  </h3>
                  <button
                    onClick={toggleModal}
                    type="button"
                    className={`text-${ThemeData.colors}-400 bg-transparent hover:bg-${ThemeData.colors}-200 hover:text-${ThemeData.colors}-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-${ThemeData.colors}-600 dark:hover:text-white`}
                    data-modal-hide="default-modal"
                  >
                    <svg
                      className="w-3 h-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 14"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                      />
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                </div>
                {/* Modal body */}
                <div className="p-4 md:p-5 space-y-4">
                  <p className={`font-semibold text-lg text-${ThemeData.colors}-600 dark:text-${ThemeData.colors}-900`} >
                    Mode
                  </p>
                  <div className="flex space-x-4">
                    <button onClick={() => ChangeThemeMode("light")} className={`border p-2 px-4 border-${ThemeData.colors}-800 rounded-lg focus:ring focus:ring-${ThemeData.colors}-500 ${ThemeData.mode === "light" ? `outline outline-offset-2 outline-4 outline-${ThemeData.colors}-800` : ""} `}>🌞 Light</button>
                    <button onClick={() => ChangeThemeMode("dark")} className={`border p-2 px-4 border-${ThemeData.colors}-800  rounded-lg focus:ring focus:ring-${ThemeData.colors}-500 ${ThemeData.mode === "dark" ? `outline outline-offset-2 outline-4 outline-${ThemeData.colors}-800` : ""}	`}>  🌜 Dark</button>
                  </div>
                  <p className={`font-semibold text-lg text-${ThemeData.colors}-600 dark:text-${ThemeData.colors}-900`} >
                    Colors
                  </p>
                  <div className="flex space-x-4">
                    <button onClick={() => ChangeThemeColor("orange")} className={`border p-2 px-4 border-${ThemeData.colors}-800 rounded-lg   focus:outline-none focus:ring focus:ring-${ThemeData.colors}-500 ${ThemeData.colors === "orange" ? `outline outline-offset-2 outline-4 outline-${ThemeData.colors}-800` : ""} `}>Orange</button>
                    <button onClick={() => ChangeThemeColor("red")} className={`border p-2 px-4 border-${ThemeData.colors}-800 rounded-lg   focus:outline-none focus:ring focus:ring-${ThemeData.colors}-500 ${ThemeData.colors === "red" ? `outline outline-offset-2 outline-4 outline-${ThemeData.colors}-800` : ""}	`}>Red</button>
                    <button onClick={() => ChangeThemeColor("green")} className={`border p-2 px-4 border-${ThemeData.colors}-800 rounded-lg   focus:outline-none focus:ring focus:ring-${ThemeData.colors}-500  ${ThemeData.colors === "green" ? `outline outline-offset-2 outline-4 outline-${ThemeData.colors}-800` : ""}	`}>Green</button>
                    <button onClick={() => ChangeThemeColor("pink")} className={`border p-2 px-4 border-${ThemeData.colors}-800 rounded-lg   focus:outline-none focus:ring focus:ring-${ThemeData.colors}-500 ${ThemeData.colors === "pink" ? `outline outline-offset-2 outline-4 outline-${ThemeData.colors}-800` : ""}	`}>Pink</button>
                    <button onClick={() => ChangeThemeColor("blue")} className={`border p-2 px-4 border-${ThemeData.colors}-800 rounded-lg   focus:outline-none focus:ring focus:ring-${ThemeData.colors}-500 ${ThemeData.colors === "blue" ? `outline outline-offset-2 outline-4 outline-${ThemeData.colors}-800` : ""}	`}>Blue</button>
                  </div>

                </div>
                {/* Modal footer */}
                <div className={`flex items-center p-4 md:p-5 border-t border-${ThemeData.colors}-8 00 rounded-b dark:border-${ThemeData.colors}-900`}>
                  <button
                    onClick={toggleModal}
                    type="button"
                    className={`text-white bg-${ThemeData.colors}-700 hover:bg-${ThemeData.colors}-800 focus:ring-4 focus:outline-none focus:ring-${ThemeData.colors}-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-${ThemeData.colors}-600 dark:hover:bg-${ThemeData.colors}-700 dark:focus:ring-${ThemeData.colors}-800`}>
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <header className={`bg-${ThemeData.colors}-100 py-4 flex justify-between items-center px-6`}>
        <Link to={"/"}>
          <FaRocket className={`text-${ThemeData.colors}-500 text-2xl cursor-pointer`} onClick={toggleModal} />
        </Link>
        <Link to={"/profile"}>
          <FaUserCircle className={`text-${ThemeData.colors}-500 text-2xl`} />
        </Link>
      </header>

      <main className={`flex flex-col items-center justify-center h-screen ${ThemeData.mode === "dark" ? "bg-zinc-900" : "bg-zinc-50"}  text-center`}>
        <div className={`mb-4 text-${ThemeData.colors}-500`}>
          <span>Announcing our next round of funding.</span> <a href="#" className="">Read more →</a>
        </div>
        <h1 className={`text-4xl font-bold text-${ThemeData.colors}-500 mb-4`}>Data to enrich your online business</h1>
        <p className={`text-lg text-${ThemeData.colors}-700 mb-8`}>
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.
          Elit sunt amet fugiat veniam occaecat fugiat aliqua.
        </p>
        <div>
          <a href="#" className={`bg-${ThemeData.colors}-500 text-white py-2 px-6 rounded-full mr-4`}>Get started</a>
          <a href="#" className={`text-${ThemeData.colors}-500`}>Learn more →</a>
        </div>
      </main>
    </div>
  )
}

export default LandingPage