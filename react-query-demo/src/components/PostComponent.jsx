import { useQuery } from "@tanstack/react-query";

const fetchData = async () =>{
    const res = await fetch ("https://jsonplaceholder.typicode.com/posts");
    if (!res.ok){
        throw new Error("Network response was not ok");
    }
    return res.json();
};

const PostComponent = () => {
    const{data, error, isLoading} = useQuery({
        queryKey: ["fetchData"],
        queryFn: fetchData,
    });

    if(isLoading) return <div>Loading...</div>
    if(error) return <div>Error {error.message}</div>

    return(
        <div>
            {data.map(post => (
                <div key = {post.id}>{post.title}</div>
            ))}
        </div>
    );
};
export default PostComponent;
