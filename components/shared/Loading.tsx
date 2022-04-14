import Spinner from "./ui/Spinner";

type LoadingProps = {
  children: React.ReactNode;
  loading: boolean;
};

const Loading: React.FC<LoadingProps> = ({ children, loading }) => {
  if (loading)
    return (
      <div className="text-center">
        <Spinner />
      </div>
    );

  return <>{children}</>;
};

export default Loading;
