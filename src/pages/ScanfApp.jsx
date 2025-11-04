import { useCallback } from "react";

const ProScannerPage = () => {
  const handleDownload = useCallback(() => {
    const appContent = `
      This is a simulated download for Pro Scanner.
      Replace with your real APK or external link later.
    `;
    const blob = new Blob([appContent], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "ProScanner.apk";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }, []);

  return (
    <div className="bg-[#0F172A] min-h-screen text-gray-100 py-10 md:py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div className="flex items-center gap-6">
            <img
              src="https://placehold.co/120x120/0EA5EA/ffffff?text=SCAN"
              alt="App Icon"
              className="rounded-3xl w-24 h-24 md:w-28 md:h-28 shadow-[0_0_20px_rgba(14,165,234,0.4)]"
            />
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-white">
                Pro Scanner - PDF & OCR
              </h1>
              <p className="text-lg bg-gradient-to-r from-sky-500 to-cyan-400 bg-clip-text text-transparent font-medium">
                by ScanTech Solutions
              </p>
              <div className="text-gray-400 text-sm mt-1">
                Contains ads • In-app purchases
              </div>
            </div>
          </div>

          <button
            onClick={handleDownload}
            className="bg-gradient-to-r from-sky-500 to-cyan-400 px-10 py-3 rounded-full text-white font-semibold text-lg hover:opacity-90 transition-all shadow-lg"
          >
            Install
          </button>
        </div>

        {/* Stats Section */}
        <div className="flex flex-wrap justify-start gap-10 items-center border-b border-slate-700 py-8 mt-8 text-gray-300">
          <div>
            <div className="flex items-center gap-1 text-xl font-bold text-white">
              4.7
              <svg
                className="w-5 h-5 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 
                0l1.286 3.959a1 1 0 
                00.95.69h4.162c.969 0 
                1.371 1.24.588 
                1.81l-3.368 
                2.446a1 1 0 
                00-.364 1.118l1.287 
                3.96c.3.921-.755 
                1.688-1.54 
                1.118l-3.368-2.446a1 1 0 
                00-1.175 0l-3.368 
                2.446c-.784.57-1.838-.197-1.54-1.118l1.287-3.96a1 
                1 0 
                00-.364-1.118L2.05 
                9.386c-.783-.57-.38-1.81.588-1.81h4.162a1 
                1 0 
                00.95-.69L9.049 2.927z"
                />
              </svg>
            </div>
            <p className="text-sm text-gray-400">1.2M reviews</p>
          </div>

          <div className="text-center">
            <p className="text-xl font-bold text-white">10M+</p>
            <p className="text-sm text-gray-400">Downloads</p>
          </div>

          <div className="text-center">
            <span className="border border-gray-300 text-gray-200 text-sm font-bold px-1.5 py-0.5 rounded">
              E
            </span>
            <p className="text-sm text-gray-400 mt-1">Everyone</p>
          </div>
        </div>

        {/* Screenshots */}
        <div className="pt-10">
          <h2 className="text-2xl font-semibold text-white mb-4">
            App Screenshots
          </h2>
          <div className="flex overflow-x-auto gap-4 pb-4">
            {["Scan+Page", "OCR+Text", "PDF+Editor", "Share+Scan"].map(
              (text) => (
                <img
                  key={text}
                  src={`https://placehold.co/280x500/1E293B/94A3B8?text=${text}`}
                  alt={text}
                  className="rounded-xl shadow-md hover:scale-[1.02] transition-transform"
                />
              )
            )}
          </div>
        </div>

        {/* About Section */}
        <div className="pt-10 pb-6 border-b border-slate-700">
          <h2 className="text-2xl font-semibold text-white mb-4">
            About this app
          </h2>
          <p className="text-gray-300 leading-relaxed max-w-3xl">
            Turn your device into a professional-grade scanner with{" "}
            <span className="bg-gradient-to-r from-sky-500 to-cyan-400 bg-clip-text text-transparent font-semibold">
              Pro Scanner
            </span>
            . Capture, crop, enhance, and extract text instantly using advanced
            OCR technology. Export high-quality PDFs or images in seconds.
          </p>

          <div className="mt-6">
            <h3 className="text-lg font-semibold text-white mb-2">
              What's New
            </h3>
            <ul className="text-gray-300 list-disc pl-6 space-y-1">
              <li>Improved document edge detection accuracy</li>
              <li>Optimized PDF export and sharing speed</li>
              <li>New multi-page batch scan feature</li>
              <li>Performance improvements and minor bug fixes</li>
            </ul>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="pt-10">
          <h2 className="text-2xl font-semibold text-white mb-6">
            Ratings & Reviews
          </h2>

          {[
            {
              name: "Alex Johnson",
              text: "Absolutely love the clean interface and accuracy of OCR. Great for my daily work!",
              stars: 5,
            },
            {
              name: "Maria Garcia",
              text: "It’s a simple yet powerful scanning app. PDF export is super smooth!",
              stars: 4,
            },
          ].map((review) => (
            <div
              key={review.name}
              className="bg-slate-800/40 p-5 rounded-xl mb-4 border border-slate-700"
            >
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-white">{review.name}</h4>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-4 h-4 ${
                        i < review.stars ? "text-yellow-400" : "text-gray-600"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 
                      1.902 0l1.286 3.959a1 1 0 
                      00.95.69h4.162c.969 0 
                      1.371 1.24.588 
                      1.81l-3.368 
                      2.446a1 1 0 
                      00-.364 1.118l1.287 
                      3.96c.3.921-.755 
                      1.688-1.54 
                      1.118l-3.368-2.446a1 1 0 
                      00-1.175 0l-3.368 
                      2.446c-.784.57-1.838-.197-1.54-1.118l1.287-3.96a1 
                      1 0 
                      00-.364-1.118L2.05 
                      9.386c-.783-.57-.38-1.81.588-1.81h4.162a1 
                      1 0 
                      00.95-.69L9.049 2.927z"
                      />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-300 text-sm">{review.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProScannerPage;
