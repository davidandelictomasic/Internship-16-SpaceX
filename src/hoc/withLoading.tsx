import type { ComponentType } from "react";
import Spinner from "../components/Spinner";

interface WithLoadingProps {
  isLoading: boolean;
  error: string | null;
}

const withLoading = <P extends object>(WrappedComponent: ComponentType<P>) => {
  const WithLoadingComponent = (props: P & WithLoadingProps) => {
    const { isLoading, error, ...rest } = props;

    if (isLoading) return <Spinner />;
    if (error) return <p>Error: {error}</p>;

    return <WrappedComponent {...(rest as P)} />;
  };

  return WithLoadingComponent;
};

export default withLoading;
