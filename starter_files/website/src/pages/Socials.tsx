import { Download } from 'lucide-react';

export const Socials = () => {
  const colors = [
    { name: 'Rose 400', hex: '#fb7185', class: 'bg-[#fb7185]' },
    { name: 'Rose 600', hex: '#e11d48', class: 'bg-[#e11d48]' },
    { name: 'Indigo 400', hex: '#818cf8', class: 'bg-[#818cf8]' },
    { name: 'Indigo 500', hex: '#6366f1', class: 'bg-[#6366f1]' },
    { name: 'Indigo 700', hex: '#4338ca', class: 'bg-[#4338ca]' },
    { name: 'Indigo 900', hex: '#312e81', class: 'bg-[#312e81]' },
  ];

  return (
    <div className="bg-slate-50 dark:bg-slate-900 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-primary-600 dark:text-primary-400 font-semibold tracking-wide uppercase">
            Technology
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Shaping Tomorrow, Today.
          </p>
          <p className="mt-4 max-w-2xl text-xl text-slate-500 dark:text-slate-400 mx-auto">
            For innovation & future tech: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam rhoncus hendrerit est nec pulvinar.
          </p>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 border-b border-slate-200 dark:border-slate-800 pb-4">
            Social Kit
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Logo Section */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm p-8 flex flex-col items-center justify-center gap-6">
              <h4 className="text-lg font-semibold text-slate-900 dark:text-white self-start">Official Logo</h4>
              <div className="p-8 bg-slate-50 dark:bg-slate-900 rounded-xl w-full flex justify-center">
                <img src="/logo.svg" alt="TechStack Logo" className="h-48 w-48" />
              </div>
              <a 
                href="/logo.svg" 
                download
                className="flex items-center gap-2 text-primary-600 dark:text-primary-400 font-medium hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
              >
                <Download className="h-5 w-5" />
                Download SVG
              </a>
            </div>

            {/* Assets Info */}
            <div className="space-y-8">
              {/* Social Tag */}
              <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm p-8">
                <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Social Tag</h4>
                <div className="flex items-center gap-4">
                  <span className="text-3xl font-bold text-slate-700 dark:text-slate-200">
                    @reallygreatsite
                  </span>
                  <span className="text-sm text-slate-500 dark:text-slate-400 italic">
                    (Official Handle)
                  </span>
                </div>
              </div>

              {/* Typography */}
               <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm p-8">
                <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Typography</h4>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">Headings</p>
                    <p className="text-2xl font-bold text-slate-900 dark:text-white font-sans">Inter / Sans-Serif</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">Body</p>
                    <p className="text-lg text-slate-700 dark:text-slate-300 font-sans">Inter / Sans-Serif</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Color Palette */}
          <div className="mt-12 bg-white dark:bg-slate-800 rounded-2xl shadow-sm p-8">
            <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-6">Brand Colors</h4>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {colors.map((color) => (
                <div key={color.hex} className="space-y-2">
                  <div className={`h-24 rounded-xl shadow-inner ${color.class}`}></div>
                  <div>
                    <p className="font-medium text-slate-900 dark:text-white">{color.name}</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400 font-mono">{color.hex}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
