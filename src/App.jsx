import React from "react";
import Logo from "./assets/icon.png";
import "./App.css";
import Loader from "./components/Loader";
import LoaderA from "./components/LoaderA";
import LoaderB from "./components/LoaderB";
import LoaderC from "./components/LoaderC";
import front from "./assets/front.png";
import back from "./assets/back.png";


const App = () => {

  const handleDownload = () => {
    const downloadUrl =
      "https://firebasestorage.googleapis.com/v0/b/seventri-fd94d.firebasestorage.app/o/application-ee7da1f8-1c68-4752-a26b-9ddfae72294f.apk?alt=media&token=7989d9df-c001-49e0-b420-8e1efebc441d";

    const link = document.createElement("a");
    link.href = downloadUrl;
    link.download = "your-file.jpg"; // You can set the file name here
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
    <div className="bg-gradient-to-br from-[#515150] to-[#27281e] w-full overflow-y-auto">
        <div className="relative h-screen w-full overflow-hidden">
          <div className="absolute flex items-center left-4 md:left-14 h-24 md:h-32 z-50">
              <img src={Logo} alt="BKK 6D logo" className="w-20 mr-4"/>
              <h1 className="font-bold text-[#f9d51f] md:text-2xl text-1xl">BKK 6D</h1>
              <div className="flex justify-center items-center ml-4 mt-6">
                <LoaderC />
              </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between h-screen md:h-[85vh] w-full overflow-hidden">
            <div className="relative flex flex-col justify-center items-center h-full w-full">
              <div className="-mt-8 md:-mt-28 flex flex-col gap-12 justify-center items-center">
                <LoaderA />
                <Loader />
              </div>
              <div className="absolute top-0 left-0 h-full w-full z-50">
                <button
                  onClick={handleDownload}
                  className="absolute bottom-1 md:bottom-16 left-1/2 transform -translate-x-1/2 bg-[#D2A410] hover:bg-amber-600 hover:text-white text-[#1F2127] font-bold py-3 px-6 rounded-xl cursor-pointer hover:shadow-2xl transition duration-300 shadow-amber-500"
                >
                  Download Now
                </button>
              </div>
            </div>
            <div className="flex justify-center items-center h-full w-full">
              <div className="flex justify-center items-center h-[80%] w-[80%] relative -mt-6 md:mt-24">
                <img src={back} alt="BKK 6D app preview background" className="absolute w-full h-full object-contain ml-32 -mt-6" />
                <img src={front} alt="BKK 6D Android app preview" className="absolute w-full h-full object-contain -ml-32 mt-6 z-10"/>
              </div>
            </div>
          </div>
        </div>
        <main className="relative z-10 px-6 pb-20 md:px-14">
          <section className="mx-auto max-w-5xl rounded-3xl border border-[#f9d51f]/20 bg-black/20 p-6 text-white shadow-2xl backdrop-blur-sm md:p-10">
            <h2 className="text-3xl font-bold text-[#f9d51f] md:text-4xl">
              Buy BKK 6D and Download the Latest Android APK
            </h2>
            <p className="mt-4 text-base leading-7 text-white/90 md:text-lg">
              BKK 6D is available here for Android users who want a fast download page,
              direct APK access, and a simple install process. If you are searching for
              BKK 6D, BKK sixd, or buy BKK 6D, this page is the official place to get
              the latest version.
            </p>
            <p className="mt-4 text-base leading-7 text-white/80">
              Use the download button above to get the current BKK 6D Android file,
              then install it on your device. Keep this page bookmarked to check for
              the latest BKK 6D release and updated download access.
            </p>
          </section>

          <section className="mx-auto mt-8 grid max-w-5xl gap-6 md:grid-cols-3">
            <article className="rounded-2xl border border-white/10 bg-white/10 p-5 text-white backdrop-blur-sm">
              <h3 className="text-lg font-semibold text-[#f9d51f]">Why users search BKK 6D</h3>
              <p className="mt-3 text-sm leading-6 text-white/85">
                Users commonly search for BKK 6D to find the official Android download,
                updated APK access, and a trusted page for install information.
              </p>
            </article>
            <article className="rounded-2xl border border-white/10 bg-white/10 p-5 text-white backdrop-blur-sm">
              <h3 className="text-lg font-semibold text-[#f9d51f]">Android install steps</h3>
              <p className="mt-3 text-sm leading-6 text-white/85">
                Tap Download Now, open the APK on your Android phone, allow installation
                if prompted, and complete setup from your device.
              </p>
            </article>
            <article className="rounded-2xl border border-white/10 bg-white/10 p-5 text-white backdrop-blur-sm">
              <h3 className="text-lg font-semibold text-[#f9d51f]">Latest BKK 6D access</h3>
              <p className="mt-3 text-sm leading-6 text-white/85">
                This page is designed to help visitors quickly find BKK 6D, download the
                latest Android version, and return for future updates.
              </p>
            </article>
          </section>
        </main>
    </div>
    </>
  );
};

export default App;
