function Loader() {
        return (<div className="flex flex-col items-center justify-center w-screen h-screen fixed top-0 left-0 bg-zinc-800 z-50">
                 <div className = "loader"></div>
                 <div className = "text-slate-200 text-xl mt-10 p-5 text-center">If the webpage fails to load correctly, please reload a couple times. This is caused due to the server winding down after periods of inactivity.</div>
                </div>)
}

export default Loader;