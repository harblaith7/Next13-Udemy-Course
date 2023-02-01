import React from "react";

export default function Loading() {
  return (
    <main>
      <div className="h-96 overflow-hidden animate-pulse bg-slate-200">
        <div className={`bg-center h-full`} />
      </div>
      <div className="flex  m-auto w-2/3 justify-between items-start 0 -mt-9">
        <div className="bg-white w-[70%] rounded p-3 shadow">
          <nav className="flex text-reg border-b pb-2">
            <h4 className="mr-7">Overview</h4>
            <p className="mr-7">Menu</p>
          </nav>

          <div className="mt-4 border-b pb-6 animate-pulse bg-slate-200 w-[400px] h-16 rounded"></div>

          <div className="flex items-end animate-pulse">
            <div className="ratings mt-2 flex items-center">
              <div className="flex items-center bg-slate-200 w-56"></div>
              <p className="text-reg ml-3"></p>
            </div>
            <div>
              <p className="text-reg ml-1 ml-4"> </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
