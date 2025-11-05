function QuizGame() {
  return (
    <div className="p-8">
      <div className="flex flex-col items-center md:flex-row md:items-start justify-center-safe gap-10">
        <div className="bg-base-100 w-md px-5 py-6 md:w-2xl md:px-6 flex flex-col items-center rounded-box">
         <div className="p-20 w-full flex justify-center">
           <h1>Ini Soal</h1>
         </div>
         <div className="flex flex-col gap-3 w-full">
          <button className="btn">Ini jawaban A</button>
           <button className="btn">Ini jawaban A</button>
           <button className="btn">Ini jawaban A</button>
         </div>
        </div>
        <div className="w-md md:w-sm md:px-0">
          <ul className="list bg-base-100 rounded-box shadow-md h-96 overflow-auto">

            <li className="text-3xl text-warning font-bold text-center mt-5">Papan Juara</li>

            <li className="list-row">
              <div className="text-4xl font-thin opacity-30 tabular-nums">01</div>
              <div><img className="size-10 rounded-box" src="https://img.daisyui.com/images/profile/demo/1@94.webp" /></div>
              <div className="list-col-grow">
                <div>Dio Lupa</div>
                <div className="text-xs uppercase font-semibold opacity-60">Remaining Reason</div>
              </div>
              <button className="btn btn-square btn-ghost">
                <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M6 3L20 12 6 21 6 3z"></path></g></svg>
              </button>
            </li>

            <li className="list-row">
              <div className="text-4xl font-thin opacity-30 tabular-nums">02</div>
              <div><img className="size-10 rounded-box" src="https://img.daisyui.com/images/profile/demo/4@94.webp" /></div>
              <div className="list-col-grow">
                <div>Ellie Beilish</div>
                <div className="text-xs uppercase font-semibold opacity-60">Bears of a fever</div>
              </div>
              <button className="btn btn-square btn-ghost">
                <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M6 3L20 12 6 21 6 3z"></path></g></svg>
              </button>
            </li>

            <li className="list-row">
              <div className="text-4xl font-thin opacity-30 tabular-nums">03</div>
              <div><img className="size-10 rounded-box" src="https://img.daisyui.com/images/profile/demo/3@94.webp" /></div>
              <div className="list-col-grow">
                <div>Sabrino Gardener</div>
                <div className="text-xs uppercase font-semibold opacity-60">Cappuccino</div>
              </div>
              <button className="btn btn-square btn-ghost">
                <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M6 3L20 12 6 21 6 3z"></path></g></svg>
              </button>
            </li>
             <li className="list-row">
              <div className="text-4xl font-thin opacity-30 tabular-nums">04</div>
              <div><img className="size-10 rounded-box" src="https://img.daisyui.com/images/profile/demo/3@94.webp" /></div>
              <div className="list-col-grow">
                <div>Sabrino Gardener</div>
                <div className="text-xs uppercase font-semibold opacity-60">Cappuccino</div>
              </div>
              <button className="btn btn-square btn-ghost">
                <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M6 3L20 12 6 21 6 3z"></path></g></svg>
              </button>
            </li>
             <li className="list-row">
              <div className="text-4xl font-thin opacity-30 tabular-nums">05</div>
              <div><img className="size-10 rounded-box" src="https://img.daisyui.com/images/profile/demo/3@94.webp" /></div>
              <div className="list-col-grow">
                <div>Sabrino Gardener</div>
                <div className="text-xs uppercase font-semibold opacity-60">Cappuccino</div>
              </div>
              <button className="btn btn-square btn-ghost">
                <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M6 3L20 12 6 21 6 3z"></path></g></svg>
              </button>
            </li>
            

          </ul>
        </div>
      </div>
    </div>
  );
}
export default QuizGame;