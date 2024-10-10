import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query";
import { Navbar } from "@/components/navbar";
import { UserDataTable } from "@/app/_components/user-data-table";
import { User } from "./_schemas/user";

// Initialize the QueryClient
const queryClient = new QueryClient();

// Define a custom error type
interface FetchError {
  message: string;
}

const fetchUserData = async (): Promise<User[]> => {
  const response = await fetch('/data/user-data.json');
  if (!response.ok) {
    const errorData: FetchError = await response.json();
    throw new Error(errorData.message || "Failed to fetch data");
  }
  return response.json();
};

const UserDataFetcher = () => {
  const { data, error, isLoading } = useQuery<User[], Error>(["userData"], fetchUserData);

  if (isLoading) return <div>Loading...</div>;
  if (error instanceof Error) return <div>Error: {error.message}</div>;

  return <UserDataTable data={data || []} />;
};

const Index = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen w-full">
        <div className="w-full flex flex-col">
          <Navbar />
          <UserDataFetcher />
        </div>
      </div>
    </QueryClientProvider>
  );
};

export default Index;
