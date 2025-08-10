export default function Page() {
  return (
   <main className="min-h-screen flex flex-col">
  <header
    style={{ borderColor: '#a00404' }}
    className="flex justify-between items-center p-4 text-white border-b-4"
  >
    {/* PROFİL & İSİM KISMI */}
    <a href="/" className="flex mx-90 items-center space-x-4 hover:opacity-80 transition duration-200">
      <img
        src="/3.jpg"
        alt="Profil Fotoğrafım"
        className="w-20 h-20 object-cover rounded-full shadow-lg"
      />
      <span className="text-3xl font-bold">Yuusey</span>
    </a>

    {/* SOSYAL MEDYA İKONLARI */}
    <div className="flex mx-90 space-x-4">
      <a href="https://www.instagram.com/yussoveym/" target="_blank" rel="noopener noreferrer">
        <img src="instagramlogo.png" alt="Instagram" className="w-6 h-6 hover:opacity-70" />
      </a>
      <a href="https://github.com/yuusey" target="_blank" rel="noopener noreferrer">
        <img src="githublogo.png" alt="GitHub" className="w-6 h-6 hover:opacity-70" />
      </a>
      <a href="https://www.tiktok.com/@yussoveym" target="_blank" rel="noopener noreferrer">
        <img src="tiktoklogo.webp" alt="TikTok" className="w-6 h-6 hover:opacity-70" />
      </a>
      <a href="https://www.youtube.com/@yuuseyy" target="_blank" rel="noopener noreferrer">
        <img src="youtubelogo.png" alt="YouTube" className="w-9 h-6 hover:opacity-70" />
      </a>
      <a href="https://steamcommunity.com/id/yuusey/" target="_blank" rel="noopener noreferrer">
        <img src="steamlogo.png" alt="Steam" className="w-6 h-6 hover:opacity-70" />
      </a>
      <a href="https://open.spotify.com/user/31ewgxxjyrhgvkrnj2ybwcrn2sxy?si=73ff374860284711" target="_blank" rel="noopener noreferrer">
        <img src="spotifylogo.png" alt="Spotify" className="w-6 h-6 hover:opacity-70" />
      </a>
    </div>
  </header>

      <div style={{ backgroundColor: '#1b1c1c' }}  className="w-full text-white">
  <div className="max-w-7xl mx-90 px-4 py-4 flex justify-between items-center">
    <h1 className="text-xl font-bold">Sitenin İsmi</h1>
    <nav className="flex space-x-4">
      <a href="/" className="hover:underline">Anasayfa</a>
      <a href="/yazilar" className="hover:underline">Yazılar</a>
      <a href="/hakkimda" className="hover:underline">Hakkımda</a>
    </nav>
  </div>
</div>

      <section className="flex-grow p-6">
        {/* Buraya rehberlerin listesi veya içerik gelecek */}
        <h1 className="text-3xl font-semibold mb-4">Yazılar</h1>
        <p>Burada yazıların listelenecek.</p>
      </section>
    </main>
  )
}