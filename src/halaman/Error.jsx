import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();

  // State untuk mini game
  const [guess, setGuess] = useState('');
  const [randomLetter, setRandomLetter] = useState('');
  const [message, setMessage] = useState('');
  const [isGameActive, setIsGameActive] = useState(false);

  // Fungsi untuk memulai mini game
  const startGame = () => {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const randomChar = letters.charAt(Math.floor(Math.random() * letters.length));
    setRandomLetter(randomChar);
    setGuess('');
    setMessage('');
    setIsGameActive(true);
  };

  // Fungsi untuk memeriksa tebakan
  const checkGuess = () => {
    if (guess.toUpperCase() === randomLetter) {
      setMessage('Selamat! Kamu menebak dengan benar!');
    } else {
      setMessage('Coba lagi! Tebakanmu salah.');
    }
  };

  return (
    <div className="bg-gray-300 min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-5xl font-bold tracking-wide text-gray-800 mb-6">
        404 NOT FOUND
      </h1>
      
      <h2 className="text-2xl font-semibold text-gray-600 mb-8">
        KLIK DIBAWAH INI UNTUK KEMBALI KE HALAMAN YANG BENAR!
      </h2>

      {/* Tombol untuk memulai mini game */}
      <button 
        className="bg-blue-500 text-white px-6 py-2 rounded-full mb-6 hover:bg-blue-600 transition-all duration-300"
        onClick={startGame}
      >
        Mulai Mini Game
      </button>

      {/* Tampilkan mini game jika diaktifkan */}
      {isGameActive && (
        <div className="w-full max-w-md bg-white p-6 rounded-xl shadow-lg">
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">Tebak Huruf (A-Z)</h3>
          
          {/* Input tebakan */}
          <input 
            type="text" 
            value={guess} 
            onChange={(e) => setGuess(e.target.value)}
            className="w-full p-2 mb-4 text-xl border border-gray-300 rounded-md"
            placeholder="Masukkan tebakan huruf (A-Z)"
            maxLength={1}
          />

          {/* Tombol untuk mengecek tebakan */}
          <button 
            className="bg-green-500 text-white px-6 py-2 rounded-full mb-4 hover:bg-green-600 transition-all duration-300"
            onClick={checkGuess}
          >
            Cek Tebakan
          </button>

          {/* Pesan hasil tebakan */}
          <p className="text-lg text-gray-700">{message}</p>
        </div>
      )}

      {/* Navigasi ke halaman lain */}
      <footer>
        <div className="flex flex-wrap justify-center gap-6 bg-white rounded-full px-9 py-4 shadow-lg mt-6">
          <ul className="text-2xl font-bold text-gray-800">
            <li 
              className="hover:text-blue-800 cursor-pointer transition-all duration-300"
              onClick={() => navigate("/News-W/")}
            >
              Home
            </li>
          </ul>

          <ul className="text-2xl font-bold text-gray-800">
            <li 
              className="hover:text-blue-800 cursor-pointer transition-all duration-300"
              onClick={() => navigate("/News-W/AI")}
            >
              AI
            </li>
          </ul>

          <ul className="text-2xl font-bold text-gray-800">
            <li 
              className="hover:text-blue-800 cursor-pointer transition-all duration-300"
              onClick={() => navigate("/News-W/Robotic")}
            >
              Robotic
            </li>
          </ul>

          <ul className="text-2xl font-bold text-gray-800">
            <li 
              className="hover:text-blue-800 cursor-pointer transition-all duration-300"
              onClick={() => navigate("/News-W/Cybersecurity")}
            >
              Cybersecurity
            </li>
          </ul>

          <ul className="text-2xl font-bold text-gray-800">
            <li 
              className="hover:text-blue-800 cursor-pointer transition-all duration-300"
              onClick={() => navigate("/News-W/IOT")}
            >
              IOT
            </li>
          </ul>

          <ul className="text-2xl font-bold text-gray-800">
            <li 
              className="hover:text-blue-800 cursor-pointer transition-all duration-300"
              onClick={() => navigate("/News-W/EdTech")}
            >
              EdTech
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default Error;
