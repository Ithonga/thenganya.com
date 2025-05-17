import { useEffect, useState } from "react";

function WelcomeNotification() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const hasSeenWelcome = localStorage.getItem("hasSeenWelcome");
    if (!hasSeenWelcome) {
      setShow(true);
      localStoragesetItem("hasSeenWelcome", "true");
    }
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 animate-fadeIn">
      <div className="bg-blue-600 text-white w-[90%] max-w-[400px] p-6 rounded-xl shadow-xl animate-slideUp relative">
        <button
          onClick={() => setShow(false)}
          className="absolute top-2 right-3 text-white text-2xl hover:text-gray-200"
        >
          &times;
        </button>
        <h2 className="text-xl font-bold mb-2">🚐 Welcome to Thenganya!</h2>
        <p className="text-sm">
          Explore the vibrant world of Kenya’s matatu culture. Listings, routes, SACCOs, and more!
        </p>
      </div>
    </div>
  );
}

export default WelcomeNotification;
