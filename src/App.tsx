import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-pink-100 flex flex-col items-center justify-center p-4">
      <div className="bg-white p-8 rounded-3xl shadow-xl w-full max-w-sm text-center">
        <h1 className="text-4xl font-bold text-pink-500 mb-2">Matchan</h1>
        <p className="text-gray-600">素敵な出会いを見つけよう</p>
        <button className="mt-8 bg-pink-500 text-white font-bold py-3 px-8 rounded-full hover:bg-pink-600 transition-colors w-full">
          はじめる
        </button>
      </div>
    </div>
  );
}

export default App;