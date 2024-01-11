function Loader() {
        return (<div className="flex flex-col items-center justify-center w-screen h-screen fixed top-0 left-0 bg-zinc-800 z-50">
                 <div className = "loader"></div>
                 <div className = "text-slate-200 text-xl mt-10 p-5 text-center">This page can take upto 2 minutes when loading for the first time.</div>
                </div>)
}

export default Loader;