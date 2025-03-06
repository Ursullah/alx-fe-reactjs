import { useState } from 'react'
import MyComponent from './components/MyComponents.jsx'
import PostComponent from './components/PostComponent.jsx';
import { QueryClient,QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient();

function App(){
  return(
    <QueryClientProvider client ={queryClient}>
    <MyComponent />
    <PostComponent />
    </QueryClientProvider>
  );
}

export default App
