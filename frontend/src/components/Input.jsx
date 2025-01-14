const Input = ({ icon: Icon, ...props}) => {
  return (
    <div className="relative mb-6">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <Icon className="size-5 text-Russian-French-violet" />
      </div>
      <input {...props} className="w-full pl-10 pr-3 py-2 bg-gray-800 bg-opacity-50 rounded-xl border border-Russian-violet-Dark focus:border-Russian-Amethyst focus:ring-2 focus:ring-Russian-Amethyst text-white placeholder-gray-400 transition duration-200" />
    </div>
  )
}

export default Input
