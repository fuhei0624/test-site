
import React from 'react';
import Header from './components/Header';
import Projects from './components/Projects';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main>
        <section id="home" className="h-screen flex items-center justify-center text-center bg-black">
            <div>
                <h1 className="text-5xl md:text-7xl font-bold tracking-widest text-white uppercase">Smile-F</h1>
                <p className="text-cyan-400 mt-4 text-lg md:text-xl">Creative Digital Solutions</p>
            </div>
        </section>

        <section id="about" className="py-20 bg-gray-900">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold tracking-widest text-white uppercase">ABOUT US</h2>
              <p className="text-gray-400 mt-2">私たちについて</p>
            </div>
            <p className="text-center max-w-3xl mx-auto text-gray-300 leading-relaxed">
              私たちは、革新的なデザインと最先端のテクノロジーを融合させ、ユーザー中心のデジタル体験を創造するクリエイティブチームです。ウェブサイト制作、システム開発、LP制作など、幅広い分野でお客様のビジネスを成功に導くお手伝いをします。
            </p>
          </div>
        </section>
        
        <Projects />

        <section id="contact" className="py-20 bg-black">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold tracking-widest text-white uppercase">CONTACT</h2>
              <p className="text-gray-400 mt-2">お問い合わせ</p>
            </div>
            <div className="text-center max-w-3xl mx-auto">
                <p className="text-gray-300 leading-relaxed mb-8">
                  プロジェクトのご相談、お見積もりのご依頼など、お気軽にお問い合わせください。
                </p>
                <a 
                  href="mailto:contact@smile-f.com" 
                  className="inline-block bg-cyan-500 text-black font-bold py-3 px-8 rounded-full text-lg hover:bg-cyan-400 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/30"
                >
                  Send an Email
                </a>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-gray-900 py-8">
        <div className="container mx-auto px-6 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Smile-F. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;