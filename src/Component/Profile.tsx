import React from 'react';
import { PageProps } from '../Function/LocalStorage';

const Profile: React.FC<PageProps> = ({ ThemeData, ChangeThemeMode, ChangeThemeColor }) => {
  return (
    <div className={`bg-${ThemeData.colors}-100 min-h-screen`}>
      {/* Navbar */}
      <nav className={`bg-${ThemeData.colors}-600 p-4 shadow-sm`}>
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-center">
          <div className="text-lg font-semibold text-white mb-4 sm:mb-0"> Street</div>
          <div className="flex flex-wrap items-center space-x-4">
            <span className={`text-sm text-${ThemeData.colors}-100`}>Organization: Street</span>
            <span className={`text-sm text-${ThemeData.colors}-100`}>Role: INTERNAL</span>
            <span className={`text-sm text-${ThemeData.colors}-100`}>Impersonated Session</span>
            <span className={`text-sm text-${ThemeData.colors}-100`}>Proceed with caution</span>
            <span className={`text-sm text-${ThemeData.colors}-100`}>Email: street@gmail.com</span>
            <div className={`w-8 h-8 bg-${ThemeData.colors}-700 text-white flex items-center justify-center rounded-full`}>
              S
            </div>
          </div>
        </div>
      </nav>

      {/* Sidebar and Content */}
      <div className="container mx-auto mt-8 flex flex-col lg:flex-row">
        {/* Sidebar */}
        <aside className={`w-full lg:w-1/4 bg-${ThemeData.colors}-200 shadow-sm p-4 mb-8 lg:mb-0`}>
          <ul>
            <li className={`text-lg font-semibold mb-4 text-${ThemeData.colors}-800`}>Overview</li>
            <li className={`text-lg font-semibold text-${ThemeData.colors}-800`}>FAQ</li>
          </ul>
        </aside>

        {/* Main Content */}
        <main className={`w-full lg:w-3/4  ${ThemeData.mode === "dark" ? "bg-zinc-900" : "bg-zinc-50"} shadow-sm p-6 lg:ml-4`}>
          <h2 className={`text-2xl font-bold mb-6 text-${ThemeData.colors}-700`}>Update Account Profile</h2>

          {/* Business Information */}
          <div className="mb-8">
            <h3 className={`font-semibold mb-4 text-${ThemeData.colors}-600`}>Business Information</h3>
            <div className={`border border-${ThemeData.colors}-300 p-4 rounded-lg`}>
              <div className="mb-4">
                <label className={`block text-${ThemeData.colors}-700`}>Business Name</label>
                <input type="text" className={`w-full border border-${ThemeData.colors}-400 p-2 rounded-lg text-${ThemeData.colors}-900`} defaultValue="React Training" />
              </div>
              <div className="mb-4">
                <label className={`block text-${ThemeData.colors}-700`}>Phone Number</label>
                <input type="text" className={`w-full border border-${ThemeData.colors}-400 p-2 rounded-lg text-${ThemeData.colors}-900`} defaultValue="+1 (904) 717-4242" />
              </div>
              <div className="mb-4">
                <label className={`block text-${ThemeData.colors}-700`}>Address</label>
                <input type="text" className={`w-full border border-${ThemeData.colors}-400 p-2 rounded-lg text-${ThemeData.colors}-900`} defaultValue="2151 Consulate Drive, Suite 5, Orlando, FL 23564" />
              </div>
            </div>
          </div>

          {/* Personal Information */}
          <div className="mb-8">
            <h3 className={`font-semibold mb-4 text-${ThemeData.colors}-600`}>Personal Information</h3>
            <div className={`border border-${ThemeData.colors}-300 p-4 rounded-lg`}>
              <div className="mb-4">
                <label className={`block text-${ThemeData.colors}-700`}>Email Address (Used to login)</label>
                <input type="email" className={`w-full border border-${ThemeData.colors}-400 p-2 rounded-lg text-${ThemeData.colors}-900`} defaultValue="st@gmail.com" />
              </div>
              <div className="mb-4">
                <label className={`block text-${ThemeData.colors}-700`}>Phone Number</label>
                <input type="text" className={`w-full border border-${ThemeData.colors}-400 p-2 rounded-lg text-${ThemeData.colors}-900`} defaultValue="+1 (904) 717-4242" />
              </div>
              <div className="mb-4">
                <label className={`block text-${ThemeData.colors}-700`}>Department</label>
                <input type="text" className={`w-full border border-${ThemeData.colors}-400 p-2 rounded-lg text-${ThemeData.colors}-900`} defaultValue="Sales" />
              </div>
              <div className="mb-4">
                <label className={`block text-${ThemeData.colors}-700`}>Address</label>
                <input type="text" className={`w-full border border-${ThemeData.colors}-400 p-2 rounded-lg text-${ThemeData.colors}-900`} defaultValue="2151 Consulate Drive, Suite 5" />
              </div>
            </div>
          </div>

          {/* Update Account Settings */}
          <div>
            <h3 className={`font-semibold mb-4 text-${ThemeData.colors}-600`}>Update Account Settings</h3>
            <div className={`border border-${ThemeData.colors}-300 p-4 rounded-lg`}>
              <div className="mb-4">
                <label className={`block text-${ThemeData.colors}-700 pb-3`}>Customize Theme</label>
                <div className="flex items-center space-x-4">
                  <div className="flex space-x-4">
                    <button onClick={() => ChangeThemeMode("light")} className={`border p-2 px-4 border-${ThemeData.colors}-800 rounded-lg focus:ring focus:ring-${ThemeData.colors}-500 ${ThemeData.mode === "light" ? `outline outline-offset-2 outline-4 outline-${ThemeData.colors}-800` : ""} text-${ThemeData.colors}-900`}>🌞 Light</button>
                    <button onClick={() => ChangeThemeMode("dark")} className={`border p-2 px-4 border-${ThemeData.colors}-800  rounded-lg focus:ring focus:ring-${ThemeData.colors}-500 ${ThemeData.mode === "dark" ? `outline outline-offset-2 outline-4 outline-${ThemeData.colors}-800` : ""}	text-${ThemeData.colors}-900`}>  🌜 Dark</button>
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <label className={`block text-${ThemeData.colors}-700`}>Colors</label>
                <div className="flex space-x-4">
                  <button onClick={() => ChangeThemeColor("orange")} className={`border p-2 px-4 border-${ThemeData.colors}-800 rounded-lg   focus:outline-none focus:ring focus:ring-${ThemeData.colors}-500 ${ThemeData.colors === "orange" ? `outline outline-offset-2 outline-4 outline-${ThemeData.colors}-800` : ""} text-${ThemeData.colors}-900`}>Orange</button>
                  <button onClick={() => ChangeThemeColor("red")} className={`border p-2 px-4 border-${ThemeData.colors}-800 rounded-lg   focus:outline-none focus:ring focus:ring-${ThemeData.colors}-500 ${ThemeData.colors === "red" ? `outline outline-offset-2 outline-4 outline-${ThemeData.colors}-800` : ""} text-${ThemeData.colors}-900`}>Red</button>
                  <button onClick={() => ChangeThemeColor("green")} className={`border p-2 px-4 border-${ThemeData.colors}-800 rounded-lg   focus:outline-none focus:ring focus:ring-${ThemeData.colors}-500  ${ThemeData.colors === "green" ? `outline outline-offset-2 outline-4 outline-${ThemeData.colors}-800` : ""} text-${ThemeData.colors}-900`}>Green</button>
                  <button onClick={() => ChangeThemeColor("pink")} className={`border p-2 px-4 border-${ThemeData.colors}-800 rounded-lg   focus:outline-none focus:ring focus:ring-${ThemeData.colors}-500 ${ThemeData.colors === "pink" ? `outline outline-offset-2 outline-4 outline-${ThemeData.colors}-800` : ""} text-${ThemeData.colors}-900`}>Pink</button>
                  <button onClick={() => ChangeThemeColor("blue")} className={`border p-2 px-4 border-${ThemeData.colors}-800 rounded-lg   focus:outline-none focus:ring focus:ring-${ThemeData.colors}-500 ${ThemeData.colors === "blue" ? `outline outline-offset-2 outline-4 outline-${ThemeData.colors}-800` : ""} text-${ThemeData.colors}-900`}>Blue</button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Profile;
