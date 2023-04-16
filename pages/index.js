export default function Home() {
  return (
    <main className="flex items-center justify-center h-screen">
        <div className="flex w-full justify-center flex-col p-10 items-center rounded-xl border-gray-600">
          <p className="pb-10">
            <code className="font-bold text-3xl">/gpt</code>
          </p>
          <div>
            <p className="pb-10 font-thin">Stop copy pasting chatGPT results, use our extension to generate results on every text input!</p>
            <video className="rounded-lg shadow-lg" width="640" height="360" controls>
              <source src="/demo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="mt-10">
            <a href="https://src200.gumroad.com/l/slashgpt" className="text-amber-300 cursor-pointer border uppercase border-amber-300 hover:bg-amber-300 hover:text-white active:bg-amber-600 font-bold px-8 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
              Get the chrome extension
            </a>
          </div>
        </div>
    </main>
  )
}
