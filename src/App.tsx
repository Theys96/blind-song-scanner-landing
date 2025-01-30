import React from 'react';
import { QrCode, FileSpreadsheet, AlignJustify as Spotify, Github, ExternalLink } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Hero Section */}
      <header className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-5xl font-bold mb-6">Blind Song Scanner</h1>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Create and play musical guessing games with Spotify songs using QR codes. Perfect for parties, game nights, and celebrations!<br />
          100% free and open source.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="https://play.blindsongscanner.com"
            className="inline-flex items-center px-6 py-3 bg-green-600 hover:bg-green-700 rounded-lg font-semibold transition-colors"
          >
            <QrCode className="mr-2 h-5 w-5" />
            Open Scanner
          </a>
          <a
            href="https://generate.blindsongscanner.com"
            className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors"
          >
            <FileSpreadsheet className="mr-2 h-5 w-5" />
            Generate Cards
          </a>
        </div>
      </header>

      {/* How It Works */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-gray-800 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <FileSpreadsheet className="h-8 w-8 text-blue-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2">1. Generate Cards</h3>
            <p className="text-gray-300">
              Create printable cards from your Spotify playlists with song details and QR codes
            </p>
          </div>
          <div className="text-center">
            <div className="bg-gray-800 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <QrCode className="h-8 w-8 text-green-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2">2. Scan & Play</h3>
            <p className="text-gray-300">
              Use the scanner app to play songs without revealing their details
            </p>
          </div>
          <div className="text-center">
            <div className="bg-gray-800 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl" role="img" aria-label="party popper">🎉</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">3. Guess & Enjoy</h3>
            <p className="text-gray-300">
              Get the party started with musical challenges and friendly competition
            </p>
          </div>
        </div>
      </section>

      {/* Cards Showcase */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* Generator Screenshot */}
          <div className="md:col-span-5 relative rounded-2xl overflow-hidden shadow-2xl bg-gray-800 max-h-[500px]">
            <img
              src="/src/assets/generator.png"
              alt="Generator app interface showing track list editing"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent flex items-end">
              <div className="p-4">
                <h3 className="text-lg font-semibold">Generator Interface</h3>
                <p className="text-sm text-gray-200">Import your own songs</p>
              </div>
            </div>
          </div>

          {/* Printed Cards */}
          <div className="md:col-span-4 relative rounded-2xl overflow-hidden shadow-2xl bg-gray-800 max-h-[500px]">
            <img
              src="/src/assets/cards.jpeg"
              alt="Printed song cards with QR codes"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent flex items-end">
              <div className="p-4">
                <h3 className="text-lg font-semibold">Printed Cards</h3>
                <p className="text-sm text-gray-200">Ready for your music quiz</p>
              </div>
            </div>
          </div>

          {/* Scanner Screenshot */}
          <div className="md:col-span-3 relative rounded-2xl overflow-hidden shadow-2xl bg-gray-800 max-h-[500px]">
            <img
              src="/src/assets/scanning.jpeg"
              alt="Mobile app scanning a QR code"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent flex items-end">
              <div className="p-4">
                <h3 className="text-lg font-semibold">Scanner App</h3>
                <p className="text-sm text-gray-200">Scan and play instantly</p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-8">
          <h2 className="text-2xl font-bold mb-4">Game Variations</h2>
          <p className="text-gray-300 max-w-3xl mx-auto mb-6">
            With customizable song cards, the possibilities for musical games are endless.
            Here are some popular ways to play:
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto text-left">
            <div className="bg-gray-800/50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Points Race</h3>
              <p className="text-gray-300 text-sm">
                Get competitive! Award points for correctly guessing song title, artist, or year. Perfect for team battles and party competitions.
              </p>
            </div>
            <div className="bg-gray-800/50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Music Bingo</h3>
              <p className="text-gray-300 text-sm">
                The ultimate party game! Create bingo cards with song titles or artists. Players mark off matches as songs play, perfect for large groups and celebrations.
              </p>
            </div>
            <div className="bg-gray-800/50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Timeline Challenge</h3>
              <p className="text-gray-300 text-sm">
                Players arrange songs chronologically by release year. Perfect for exploring music history and testing knowledge of different eras.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Apps Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Scanner App */}
          <div className="bg-gray-800 rounded-xl p-8 shadow-lg">
            <div className="flex items-center mb-6">
              <QrCode className="h-8 w-8 text-green-500 mr-3" />
              <h2 className="text-3xl font-bold">Scanner App</h2>
            </div>
            <p className="text-gray-300 mb-6">
              Scan QR codes to play Spotify songs without revealing their details.
            </p>
            <ul className="space-y-3 text-gray-300 mb-6">
              <li className="flex items-center">
                <Spotify className="h-5 w-5 text-green-500 mr-2" />
                Login with Spotify Premium
              </li>
              <li className="flex items-center">
                <QrCode className="h-5 w-5 text-green-500 mr-2" />
                Scan song QR codes
              </li>
              <li className="flex items-center">
                <ExternalLink className="h-5 w-5 text-green-500 mr-2" />
                Play instantly without spoilers
              </li>
            </ul>
            <div className="flex gap-4">
              <a
                href="https://play.blindsongscanner.com"
                className="inline-flex items-center px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg font-semibold transition-colors text-sm"
              >
                Open App
              </a>
              <a
                href="https://github.com/Theys96/blind-song-scanner"
                className="inline-flex items-center px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg font-semibold transition-colors text-sm"
              >
                <Github className="mr-2 h-4 w-4" />
                View Source
              </a>
            </div>
          </div>

          {/* Generator App */}
          <div className="bg-gray-800 rounded-xl p-8 shadow-lg">
            <div className="flex items-center mb-6">
              <FileSpreadsheet className="h-8 w-8 text-blue-500 mr-3" />
              <h2 className="text-3xl font-bold">Generator App</h2>
            </div>
            <p className="text-gray-300 mb-6">
              Create printable cards with song details and QR codes from your Spotify playlists.
            </p>
            <ul className="space-y-3 text-gray-300 mb-6">
              <li className="flex items-center">
                <Spotify className="h-5 w-5 text-blue-500 mr-2" />
                Import from public Spotify playlists
              </li>
              <li className="flex items-center">
                <FileSpreadsheet className="h-5 w-5 text-blue-500 mr-2" />
                Retouch track information
              </li>
              <li className="flex items-center">
                <ExternalLink className="h-5 w-5 text-blue-500 mr-2" />
                Export as printable PDF
              </li>
            </ul>
            <div className="flex gap-4">
              <a
                href="https://generate.blindsongscanner.com"
                className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors text-sm"
              >
                Open App
              </a>
              <a
                href="https://github.com/Theys96/blind-song-scanner-generator"
                className="inline-flex items-center px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg font-semibold transition-colors text-sm"
              >
                <Github className="mr-2 h-4 w-4" />
                View Source
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 text-center text-gray-400">
        <p>
          Open source project by{' '}
          <a
            href="https://thijshavinga.nl"
            className="text-white hover:text-gray-300 transition-colors"
          >
            Thijs Havinga
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;