export function PetEditLoadingScreen() {
  return (
    <div className="w-full max-w-4xl mx-auto p-6 sm:p-8 animate-pulse">
      <div className="grid gap-6">
        <div className="h-6 bg-gray-200 rounded"></div>
        <div className="grid grid-cols-2 gap-6">
          <div className="h-10 bg-gray-200 rounded mb-2"></div>
          <div className="h-10 bg-gray-200 rounded mb-2"></div>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div className="h-10 bg-gray-200 rounded mb-2"></div>
          <div className="h-10 bg-gray-200 rounded mb-2"></div>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div className="h-10 bg-gray-200 rounded mb-2"></div>
          <div className="h-10 bg-gray-200 rounded mb-2"></div>
        </div>
        <div className="h-10 bg-gray-200 rounded mb-2"></div>
        <div className="h-10 bg-gray-200 rounded mb-2"></div>
        <div className="grid gap-2">
          <div className="h-10 bg-gray-200 rounded mb-2"></div>
        </div>
        <div className="flex justify-end gap-2">
          <div className="h-10 bg-gray-200 rounded w-1/3"></div>
          <div className="h-10 bg-gray-200 rounded w-1/4"></div>
        </div>
      </div>
    </div>
  );
}
