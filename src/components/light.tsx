
export default function Light() {
    return (
      <div>   
          <div className="fixed inset-x-0 top-0 flex justify-center pointer-events-none">
            <div className="w-[40rem] h-[40rem] bg-teal-800 rounded-full filter blur-3xl opacity-20 -translate-y-1/2"></div>
          </div>
      </div>
    )
  }