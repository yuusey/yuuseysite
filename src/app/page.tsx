import Link from 'next/link'
import Image from 'next/image'

function normalizeTurkishUrl(text: string): string {
  return text
    .toLowerCase()
    .replace(/ı/g, 'i')
    .replace(/ş/g, 's')
    .replace(/ç/g, 'c')
    .replace(/ö/g, 'o')
    .replace(/ü/g, 'u')
    .replace(/ğ/g, 'g')
    .replace(/[^a-z0-9\-]/g, '');
}

export default function Page() {
  return (
    <main className="min-h-screen flex flex-col">
      <header style={{ borderColor: '#a00404' }} className="border-b-4 text-white">
        <div className="max-w-7xl w-full mx-auto px-4 py-4 flex justify-between items-center">
          {/* PROFİL & İSİM KISMI */}
          <Link href="/" className="flex items-center space-x-4 hover:opacity-80 transition duration-200">
            <Image
              src="/3.jpg"
              alt="Profil Fotoğrafım"
              width={40}
              height={40}
              className="object-cover rounded-full shadow-lg"
            />
            <span className="text-3xl font-bold">Yuusey</span>
          </Link>

          {/* NAVBAR + SEARCH */}
          <div className="flex items-center space-x-8">
            <nav className="flex space-x-6">
              {["Anasayfa", "Yazılar", "Hakkımda", "İletişim"].map((item, index) => {
                let href = "/";
                if (item === "Anasayfa") {
                  href = "/";
                } else if (item === "İletişim") {
                  href = "/iletisim";
                } else {
                  href = `/${normalizeTurkishUrl(item)}`;
                }

                return (
                  <Link
                    key={index}
                    href={href}
                    className="relative font-bold text-white transition duration-300 glow-hover"
                  >
                    {item}
                  </Link>
                );
              })}
            </nav>

            {/* ARAMA KUTUSU */}
            <input
              type="text"
              placeholder="Ara..."
              className="px-3 py-1 bg-gray-800 text-white border border-gray-600 rounded-md focus:outline-none"
            />
          </div>
        </div>
      </header>

      <section className="flex-grow p-6">
        {/* Buraya rehberlerin listesi veya içerik gelecek */}
        <h1 className="text-3xl font-semibold mb-4">Kazandın.</h1>
        <p>Burada çıkış yolunun arg&apos;yi çözmek olduğunu kim söyledi?</p>
      </section>
    </main>
  )
}