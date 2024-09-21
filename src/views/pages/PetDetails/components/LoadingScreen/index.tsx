export function PetDetailsLoadingScreen() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24 animate-pulse">
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-2 p-0 bg-gray-200 rounded w-40 h-10"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
        <div>
          <div className="rounded-lg overflow-hidden bg-gray-200 h-96"></div>
          <div className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white/80 hover:bg-white h-8 w-8 rounded-full"></div>
          <div className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white/80 hover:bg-white h-8 w-8 rounded-full"></div>
        </div>
        <div className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold bg-gray-200 rounde w-1/2 h-10"></h1>
            <div className="flex items-center gap-2 text-muted-foreground">
              <div className="h-4 w-4 bg-gray-200 rounded-full"></div>
              <span className="bg-gray-200 rounded w-12 h-4"></span>
              <span className="bg-gray-200 h-4 w-4 block"></span>
              <span className="bg-gray-200 rounded w-12 h-4"></span>
              <span className="bg-gray-200 h-4 w-4 block"></span>
              <span className="bg-gray-200 rounded w-12 h-4"></span>
              <span className="bg-gray-200 h-4 w-4 block"></span>
              <span className="bg-gray-200 rounded w-12 h-4"></span>
              <span className="bg-gray-200 h-4 w-4 block"></span>
            </div>
          </div>
          <div className="space-y-2">
            <p className="bg-gray-200 rounded h-4 w-full"></p>
            <p className="bg-gray-200 rounded h-4 w-2/3"></p>
            <p className="bg-gray-200 rounded h-4 w-1/2"></p>
            <p className="bg-gray-200 rounded h-4 w-full"></p>
            <div className="inline-flex items-center gap-2 text-white py-1">
              <div className="w-4 h-4 bg-gray-200 rounded-full"></div>
              <div className="bg-gray-200 rounded h-4 w-40"></div>
            </div>
          </div>
          <div className="space-y-2">
            <h2 className="text-xl font-semibold bg-gray-200 rounded w-1/4 h-6"></h2>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 bg-gray-200 rounded-full"></div>
              <span className="bg-gray-200 rounded w-24 h-4"></span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 bg-gray-200 rounded-full"></div>
              <span className="bg-gray-200 rounded w-24 h-4"></span>
            </div>
          </div>
          <div className="bg-gray-200 rounded w-full h-12"></div>
        </div>
      </div>
    </div>
  );
}
