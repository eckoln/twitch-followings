import Skeleton from "./ui/Skeleton";

type SkeletonLoadingProps = {
  children: React.ReactNode;
  loading: boolean;
};

const SkeletonLoading: React.FC<SkeletonLoadingProps> = ({
  children,
  loading,
}) => {
  if (loading)
    return (
      <>
        <Skeleton />
      </>
    );

  return <>{children}</>;
};

export default SkeletonLoading;
