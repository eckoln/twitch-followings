const Skeleton = () => {
  const SkeletonItem = () => (
    <div className="w-full h-72 rounded-md animate-pulse bg-slate-800"></div>
  );

  return (
    <div className="grid grid-cols-5 gap-8">
      <SkeletonItem />
      <SkeletonItem />
      <SkeletonItem />
      <SkeletonItem />
      <SkeletonItem />
    </div>
  );
};

export default Skeleton;
