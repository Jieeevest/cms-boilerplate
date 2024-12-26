export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex row-start-2 gap-8 flex-col ">
        <div className="flex items-center sm:items-start justify-center">
          <h2 className="text-3xl text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
            Exploring The Metronic Webpack
          </h2>
        </div>

        <div className="flex justify-center items-center">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href={"/demo1"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 text-current"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 6l6 6-6 6"
              />
            </svg>
            Visit Demo Components
          </a>
        </div>
      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <p className="text-center text-sm text-gray-500">
          Crafted with ❤️ by Brbaleee
        </p>
      </footer>
    </div>
  );
}
