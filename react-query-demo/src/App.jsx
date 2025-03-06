import { QueryClient,QueryClientProvider } from '@tanstack/react-query'
import PostComponent from './components/PostComponents.jsx'

const queryClient = new QueryClient();

function App(){
  return(
    <QueryClientProvider client ={queryClient}>
    <div>
      <h1>Posts</h1>
    <PostComponent />
    </div>
    </QueryClientProvider>
  );
};

export default App
