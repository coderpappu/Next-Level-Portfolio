import { get, onValue, push, ref, set } from "firebase/database";
import { useCallback, useEffect, useState } from "react";
import ScanfLogo from "../assets/scanf-app.jpeg";
import View01 from "../assets/view01.jpeg";
import View02 from "../assets/view02.jpeg";
import View03 from "../assets/view03.jpeg";
import View04 from "../assets/view04.jpeg";
import View05 from "../assets/view05.jpeg";
import { database } from "../firebase";

const ProScannerPage = () => {
  const [appStats, setAppStats] = useState({
    totalDownloads: 10000000,
    averageRating: 4.7,
    totalReviews: 1200000,
  });
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [userRating, setUserRating] = useState(0);
  const [userEmail, setUserEmail] = useState("");
  const [userComment, setUserComment] = useState("");
  const [submitting, setSubmitting] = useState(false);

  // Load stats from Firebase on mount
  useEffect(() => {
    const statsRef = ref(database, "app-db");

    const unsubscribe = onValue(statsRef, (snapshot) => {
      if (snapshot.exists()) {
        setAppStats(snapshot.val());
      } else {
        set(statsRef, appStats);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // Load reviews from Firebase
  useEffect(() => {
    const reviewsRef = ref(database, "reviews");

    const unsubscribe = onValue(reviewsRef, (snapshot) => {
      if (snapshot.exists()) {
        const reviewsData = snapshot.val();
        const reviewsArray = Object.keys(reviewsData).map((key) => ({
          id: key,
          ...reviewsData[key],
        }));
        reviewsArray.sort((a, b) => b.timestamp - a.timestamp);
        setReviews(reviewsArray);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleDownload = useCallback(async () => {
    try {
      const statsRef = ref(database, "app-db");
      const snapshot = await get(statsRef);

      if (snapshot.exists()) {
        const currentStats = snapshot.val();
        const newStats = {
          ...currentStats,
          totalDownloads: currentStats.totalDownloads + 1,
        };
        await set(statsRef, newStats);
      }
    } catch (error) {
      console.error("Failed to update stats:", error);
    }

    // Simulate download
    const appContent = `This is a simulated download for Pro Scanner V1.0.`;
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

  const submitReview = async () => {
    if (userRating === 0 || !userEmail.trim() || !userComment.trim()) {
      alert("Please fill all fields and select a rating!");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(userEmail)) {
      alert("Please enter a valid email address!");
      return;
    }

    setSubmitting(true);

    try {
      const statsRef = ref(database, "app-db");
      const snapshot = await get(statsRef);

      if (snapshot.exists()) {
        const currentStats = snapshot.val();
        const totalRatingPoints =
          currentStats.averageRating * currentStats.totalReviews;
        const newTotalReviews = currentStats.totalReviews + 1;
        const newAverageRating =
          (totalRatingPoints + userRating) / newTotalReviews;

        const newStats = {
          ...currentStats,
          averageRating: Math.round(newAverageRating * 10) / 10,
          totalReviews: newTotalReviews,
        };

        await set(statsRef, newStats);

        const reviewsRef = ref(database, "reviews");
        const newReviewRef = push(reviewsRef);
        const firstLetter = userEmail.charAt(0).toUpperCase();

        await set(newReviewRef, {
          email: userEmail,
          initial: firstLetter,
          comment: userComment,
          stars: userRating,
          timestamp: Date.now(),
        });

        setUserRating(0);
        setUserEmail("");
        setUserComment("");
        setShowReviewModal(false);
        alert("Thank you for your review!");
      }
    } catch (error) {
      console.error("Failed to submit review:", error);
      alert("Failed to submit review. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const screenshots = [View01, View02, View03, View04, View05];

  return (
    <div className="bg-[#0F172A] min-h-screen text-gray-100 py-10 md:py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div className="flex items-center gap-6">
            <img
              src={ScanfLogo}
              alt="App Icon"
              className="rounded-3xl w-24 h-24 md:w-28 md:h-28 shadow-[0_0_20px_rgba(14,165,234,0.4)]"
            />
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-white">
                Scanf - Free Scanner App
              </h1>
              <p className="text-lg bg-gradient-to-r from-sky-500 to-cyan-400 bg-clip-text text-transparent font-medium">
                by Pappu Dey
              </p>
              <div className="text-gray-400 text-sm mt-1">
                Version 1.0 - 100% free, no ads, no in-app purchases. Secure and
                privacy-friendly.
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
              {appStats.averageRating}
              <svg
                className="w-5 h-5 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.959a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.368 2.446a1 1 0 00-.364 1.118l1.287 3.96c.3.921-.755 1.688-1.54 1.118l-3.368-2.446a1 1 0 00-1.175 0l-3.368 2.446c-.784.57-1.838-.197-1.54-1.118l1.287-3.96a1 1 0 00-.364-1.118L2.05 9.386c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69L9.049 2.927z" />
              </svg>
            </div>
            <p className="text-sm text-gray-400">
              {appStats.totalReviews.toLocaleString()} reviews
            </p>
          </div>

          <div className="text-center">
            <p className="text-xl font-bold text-white">
              {(appStats.totalDownloads / 1000000).toFixed(1)}M+
            </p>
            <p className="text-sm text-gray-400">Downloads</p>
          </div>

          <div className="text-center">
            <span className="border border-gray-300 text-gray-200 text-sm font-bold px-1.5 py-0.5 rounded">
              E
            </span>
            <p className="text-sm text-gray-400 mt-1">Everyone</p>
          </div>
        </div>

        {/* Screenshots Slider */}
        <div className="pt-10">
          <h2 className="text-2xl font-semibold text-white mb-4">
            App Screenshots
          </h2>
          <div className="flex overflow-x-auto gap-4 pb-4">
            {screenshots.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Screenshot ${idx + 1}`}
                className="rounded-xl shadow-md hover:scale-[1.02] transition-transform flex-shrink-0 w-[280px] h-auto"
              />
            ))}
          </div>
        </div>

        {/* About Section */}
        <div className="pt-10 pb-6 border-b border-slate-700">
          <h2 className="text-2xl font-semibold text-white mb-4">
            About this app
          </h2>
          <p className="text-gray-300 leading-relaxed max-w-3xl">
            Transform your device into a professional scanner with{" "}
            <span className="bg-gradient-to-r from-sky-500 to-cyan-400 bg-clip-text text-transparent font-semibold">
              Scanf
            </span>
            . Capture, crop, enhance, and extract text instantly. Export
            high-quality PDFs or images in seconds. This app is 100% free,
            secure, ad-free, and respects your privacy. All data is temporary
            and removed after 30 days.
          </p>

          <div className="mt-6">
            <h3 className="text-lg font-semibold text-white mb-2">
              What's New in V1.0
            </h3>
            <ul className="text-gray-300 list-disc pl-6 space-y-1">
              <li>100% free, no ads, no in-app purchases</li>
              <li>Optimized performance for fast scanning</li>
              <li>Secure and privacy-friendly: data removed after 30 days</li>
              <li>Enhanced document edge detection and OCR accuracy</li>
              <li>New multi-page batch scan feature</li>
            </ul>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="pt-10">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold text-white">
              Ratings & Reviews
            </h2>
            <button
              onClick={() => setShowReviewModal(true)}
              className="bg-gradient-to-r from-sky-500 to-cyan-400 px-6 py-2 rounded-lg text-white font-medium hover:opacity-90 transition-opacity"
            >
              Write a Review
            </button>
          </div>

          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-slate-800/40 p-5 rounded-xl mb-4 border border-slate-700"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-sky-500 to-cyan-400 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                  {review.initial}
                </div>

                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-white">Anonymous User</h4>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-4 h-4 ${
                            i < review.stars
                              ? "text-yellow-400"
                              : "text-gray-600"
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.959a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.368 2.446a1 1 0 00-.364 1.118l1.287 3.96c.3.921-.755 1.688-1.54 1.118l-3.368-2.446a1 1 0 00-1.175 0l-3.368 2.446c-.784.57-1.838-.197-1.54-1.118l1.287-3.96a1 1 0 00-.364-1.118L2.05 9.386c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69L9.049 2.927z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm">{review.comment}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Review Modal */}
      {showReviewModal && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-slate-800 rounded-2xl p-8 max-w-md w-full border border-slate-700">
            <h3 className="text-2xl font-bold text-white mb-6">
              Write a Review
            </h3>

            <div className="mb-6">
              <label className="text-gray-300 text-sm mb-2 block">
                Your Rating
              </label>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    onClick={() => setUserRating(star)}
                    className="transition-transform hover:scale-110"
                  >
                    <svg
                      className={`w-10 h-10 ${
                        star <= userRating ? "text-yellow-400" : "text-gray-600"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.959a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.368 2.446a1 1 0 00-.364 1.118l1.287 3.96c.3.921-.755 1.688-1.54 1.118l-3.368-2.446a1 1 0 00-1.175 0l-3.368 2.446c-.784.57-1.838-.197-1.54-1.118l1.287-3.96a1 1 0 00-.364-1.118L2.05 9.386c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69L9.049 2.927z" />
                    </svg>
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <label className="text-gray-300 text-sm mb-2 block">Email</label>
              <input
                type="email"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                placeholder="your@email.com"
                className="w-full px-4 py-3 rounded-lg bg-slate-700 text-white border border-slate-600 focus:border-sky-500 focus:outline-none"
              />
            </div>

            <div className="mb-6">
              <label className="text-gray-300 text-sm mb-2 block">
                Comment
              </label>
              <textarea
                value={userComment}
                onChange={(e) => setUserComment(e.target.value)}
                placeholder="Share your experience..."
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-slate-700 text-white border border-slate-600 focus:border-sky-500 focus:outline-none resize-none"
              />
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setShowReviewModal(false)}
                disabled={submitting}
                className="flex-1 px-6 py-3 rounded-lg border border-slate-600 text-white font-medium hover:bg-slate-700 transition-colors disabled:opacity-50"
              >
                Cancel
              </button>
              <button
                onClick={submitReview}
                disabled={submitting}
                className="flex-1 px-6 py-3 rounded-lg bg-gradient-to-r from-sky-500 to-cyan-400 text-white font-medium hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                {submitting ? "Submitting..." : "Submit"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProScannerPage;
