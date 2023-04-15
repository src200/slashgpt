export default function Home() {
  return (
    <main className="min-h-screen items-center p-24">
        <div className="flex w-full justify-center flex-col p-10 items-center rounded-xl border-gray-600">
           <p className="pb-10">
            <code className="font-bold text-3xl">/gpt</code>
          </p>
          <div>
            <video className="bg-gray-100 rounded-lg shadow-lg" width="640" height="360" controls>
              <source src="/demo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="mt-10">
            <a href="https://src200.gumroad.com/l/slashgpt" className="text-amber-500 cursor-pointer border uppercase border-amber-500 hover:bg-amber-500 hover:text-white active:bg-amber-600 font-bold px-8 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
              Get the chrome extension
            </a>
          </div>
        </div>
    </main>
  )
}
