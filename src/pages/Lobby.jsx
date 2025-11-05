function Lobby() {
  return (
    <div className="relative">
      <div className="flex flex-col items-center justify-center min-h-screen bg-[#51146c] p-6 gap-2">
        <div className="bg-base-100 shadow-xl rounded-2xl p-8 w-full max-w-3xl">
          <h1 className="text-3xl font-bold text-center mb-6 text-warning">
            Apakah kamu siap
          </h1>
          <button className="btn btn-warning w-full mt-3">Siap?</button>


        </div>
        <div className="bg-base-100 shadow-xl rounded-2xl p-8 w-full max-w-3xl">
          <h1 className="text-3xl font-bold text-center mb-6 text-warning">
            Daftar Anggota
          </h1>
          <ul className="list bg-base-100 rounded-box">
            <li className="list-row">
              <div><img className="size-10 rounded-box" src="https://img.daisyui.com/images/profile/demo/1@94.webp" /></div>
              <div>
                <div>Dio Lupa</div>
                <div className="text-xs uppercase font-semibold opacity-60">Remaining Reason</div>
              </div>
              <h1 className="badge badge-warning p-4 min-w-28">Siap</h1>
            </li>

            <li className="list-row">
              <div><img className="size-10 rounded-box" src="https://img.daisyui.com/images/profile/demo/4@94.webp" /></div>
              <div>
                <div>Ellie Beilish</div>
                <div className="text-xs uppercase font-semibold opacity-60">Bears of a fever</div>
              </div>
              <h1 className="badge badge-warning p-4 min-w-28">Belum Siap</h1>
            </li>

            <li className="list-row">
              <div><img className="size-10 rounded-box" src="https://img.daisyui.com/images/profile/demo/3@94.webp" /></div>
              <div>
                <div>Sabrino Gardener</div>
                <div className="text-xs uppercase font-semibold opacity-60">Cappuccino</div>
              </div>
              <h1 className="badge badge-warning p-4 min-w-28">Siap</h1>
            </li>

          </ul>
        </div>
      </div>
    </div>
  );
}
export default Lobby;