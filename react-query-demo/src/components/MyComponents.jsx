import { useQuery } from "@tanstack/react-query";

const fetchData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
};

const MyComponent = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchData,
  });
//handle data loading state
  if (isLoading) return <p>Loading...</p>;
  //handle error state
  if (error)return <p>Error: {error.message}</p>;
//render the fetched data

  return (
    <ul>
      {data.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
};

export default MyComponent;
