import { useQuery } from "@tanstack/react-query";

const fetchData = async () =>{
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
