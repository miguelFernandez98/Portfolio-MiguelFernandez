export const SkeletonLoader = () => {
  return (
    <section className="">
      <div className="h-7 bg-gray-400 dark:bg-gray-700  rounded mb-3 animate-pulse w-3/4"></div>
      <div className="h-4 bg-gray-400 dark:bg-gray-700  rounded mb-3 animate-pulse w-full"></div>
      <div className="h-4 bg-gray-400 dark:bg-gray-700  rounded mb-4 animate-pulse w-2/3"></div>
      <div className="flex flex-wrap gap-2 mb-4">
        <div className="h-6 w-16 bg-gray-400 dark:bg-gray-700  rounded-full animate-pulse"></div>
        <div className="h-6 w-20 bg-gray-400 dark:bg-gray-700  rounded-full animate-pulse"></div>
        <div className="h-6 w-16 bg-gray-400 dark:bg-gray-700  rounded-full animate-pulse"></div>
      </div>
      <div className="w-full flex flex-row justify-between items-center">
        <div className="h-4 bg-gray-400 dark:bg-gray-700 rounded w-1/4 animate-pulse"></div>
        <div className="h-4 w-auto animate-pulse text-gray-500 dark:text-white/80">
          Coming soon...
        </div>
      </div>
    </section>
  );
};
