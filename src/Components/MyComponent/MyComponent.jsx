
import { useQuery } from '@tanstack/react-query';
import { fetchJsonData } from '../../hooks/useProductScema';

const MyComponent = () => {
  const { data, error, isLoading } = useQuery(['jsonData'], fetchJsonData);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Data from JSON</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default MyComponent;
