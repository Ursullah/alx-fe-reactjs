import { useQuery } from "@tanstack/react-query";

const fetchPosts = async () =>{
    const res = await fetch ("https://jsonplaceholder.typicode.com/posts");
    if (!res.ok){
        throw new Error("Network response was not ok");
    }
    return res.json();
};

const PostsComponent = () => {
    const{data, error,isError, isLoading} = useQuery({
        queryKey: ["fetchPosts"],
        queryFn: fetchPosts,
        cacheTime: 1000 * 60 * 5, // cache data for 5 minutes
        staleTime: 1000 * 60, // Data is fresh for 1 minute before refreshing
        refetchOnWindowFocus: false, //Prevent refetching when switching tabs
        keepPreviousData: true, // keep old data while fetching new data
    });

    if(isLoading) 
        return <div>Loading...</div>;
    if(isError)
         return <div>Error {error.message}</div>;

    return(
        <div>
            {data.map(post => (
                <div key = {post.id}>
                    <h3>{post.title}</h3>
                    <p>post.body</p>
                </div>
            ))}
        </div>
    );
};
export default PostsComponent;
