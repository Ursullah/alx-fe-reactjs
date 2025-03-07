import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from './components/Profile/Profile';
import ProfileDetails from './components/Profile/ProfileDetails';
import ProfileSettings from './components/Profile/ProfileSettings';

 function App () {
  return (
  <Router>
    <Routes>
        <Route path = "profile" element={<Profile />} >
        <Route path = "details" element={<ProfileDetails />} />
        <Route path = "settings" element={<ProfileSettings />} />
        </Route>
    </Routes>
  </Router>

  );
 }

 export default App;