import { LoaderIcon } from "lucide-react";
// import { useThemeStore } from "../store/useThemeStore";

const PageLoader = () => {
  // const { theme } = useThemeStore();
  return (
    <div className="min-h-screen bg-base-100 text-base-content flex items-center justify-center">
      <LoaderIcon className="animate-spin size-10 text-primary" />
    </div>
  );
};
export default PageLoader;
