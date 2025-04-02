'use client';
import React from 'react';
import { Sparkles, Twitter, Send } from 'lucide-react';

export default function NeuralInu() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-gray-900 text-white p-6 flex flex-col items-center justify-center gap-6">
      <img
        src="/neuralinu-logo.png"
        alt="NeuralInu Logo"
        className="w-48 h-48 rounded-2xl shadow-xl animate-float"
      />

      <h1 className="text-4xl font-bold text-center">
        NEURALINU <span className="text-purple-400">$NEURALINU</span>
      </h1>

      <p className="text-lg text-center max-w-xl">
        The world’s first AI-powered meme coin. Fueled by neural networks and chaos, NEURALINU is your
        overhyped, underdelivered, highly speculative best friend.
      </p>

      <div className="bg-black border border-purple-500 shadow-lg max-w-lg w-full rounded-xl p-6 space-y-4">
        <h2 className="text-2xl font-semibold text-purple-300">Tokenomics</h2>
        <ul className="list-disc list-inside text-sm space-y-1 text-purple-200">
          <li>Total Supply: 1,000,000,000 $NEURALINU</li>
          <li>Tax: 0%</li>
          <li>Burn: 10% (random, when devs get bored)</li>
          <li>LP Lock: 100%</li>
        </ul>
      </div>

      <button className="bg-purple-600 hover:bg-purple-700 text-white rounded-full px-6 py-2 text-lg flex items-center gap-2 mt-4">
        <Sparkles className="w-5 h-5" /> Join the Cult
      </button>

      <div className="flex gap-6 mt-6">
        <a
          href="https://twitter.com/neuralinuAI"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-purple-400 hover:text-purple-300"
        >
          <Twitter className="w-5 h-5" /> @neuralinuAI
        </a>
        <a
          href="https://t.me/neuralinuportal"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-purple-400 hover:text-purple-300"
        >
          <Send className="w-5 h-5" /> Telegram
        </a>
      </div>

      <p className="text-sm text-gray-400 mt-6">
        neuralinu.ai • Meme tech meets AI hype • 2025
      </p>

      <style jsx>{`
        @keyframes floaty {
          0%, 100% {
            transform: translateY(0px) scale(1);
            filter: drop-shadow(0 0 5px #9f7aea);
          }
          50% {
            transform: translateY(-8px) scale(1.02);
            filter: drop-shadow(0 0 15px #c084fc);
          }
        }
        .animate-float {
          animation: floaty 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
