import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 text-zinc-900 dark:bg-black dark:text-zinc-100">
      
      
      {/* SECCIÓN 1: HEADER / NAVEGACIÓN             */}
      <header className="w-full border-b border-red-800 bg-red-900 p-4 text-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl tracking-wide">
            UNIVALLE
          </div>
          <nav className="flex gap-4 text-sm font-medium">
            <a href="#hero" className="hover:underline">Home</a>
            <a href="#carreras" className="hover:underline">Carreras hhh</a>
            <a href="#nosotros" className="hover:underline">Rodrigo cambio</a>
          </nav>
        </div>
      </header>

      
      {/* SECCIÓN 2: HERO / INICIO                   */}
      <section id="hero" className="flex flex-1 flex-col items-center justify-center p-8 text-center sm:p-16">
        <div className="max-w-2xl space-y-4">
          <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-semibold text-red-800 dark:bg-red-950 dark:text-red-300">
            Universidad del Valle
          </span>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-red-900 dark:text-red-500">
            Respuesta Científica al Futuro
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400">
            Formando profesionales de excelencia con visión global, tecnología de vanguardia e investigación.
          </p>
        </div>
      </section>

  
      {/* SECCIÓN 3: OFERTA / CARRERAS               */}
      <section id="carreras" className="border-t border-zinc-200 bg-white py-12 dark:border-zinc-800 dark:bg-zinc-950">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="mb-8 text-center text-2xl font-bold text-zinc-800 dark:text-zinc-200">
            Facultades Destacadas
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            
            {/* Tarjeta 1 */}
            <div className="rounded-lg border border-zinc-200 p-6 dark:border-zinc-800 hover:shadow-md transition">
              <h3 className="mb-2 font-semibold text-red-800 dark:text-red-400">Ingeniería e Informática</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Sistemas, Tecnologías de la Información y desarrollo tecnológico con laboratorios de última generación.
              </p>
            </div>

            {/* Tarjeta 2 */}
            <div className="rounded-lg border border-zinc-200 p-6 dark:border-zinc-800 hover:shadow-md transition">
              <h3 className="mb-2 font-semibold text-red-800 dark:text-red-400">Ciencias de la Salud</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Medicina, Bioquímica y Farmacia respaldadas por la mejor infraestructura hospitalaria académica.
              </p>
            </div>

          </div>
        </div>
      </section>

  
      {/* SECCIÓN 4: FOOTER / PIE DE PÁGINA          */}
      <footer id="footer" className="border-t border-zinc-200 py-6 text-center text-xs text-zinc-500 dark:border-zinc-800">
        <p>© 2026 Universidad del Valle — Desarrollado en Práctica 2 por: Los Nomos</p>
      </footer>

    </div>
  );
}