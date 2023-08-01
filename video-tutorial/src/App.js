import './App.css';
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';
import { MainComponent } from './components/main-component/main-component';
import { Login } from './components/login/login';
import { Unregister } from './components/unregister/unregister';
import { Register } from './components/register/register';
import { VideosHome } from './components/videos-home/videos-home';
import { AdminHome } from './components/admin-home/admin-home';
import { AdminLogin } from './components/admin-login/admin-login';
import { AddVideo } from './components/add-video/add-video';
import { ViewVideo } from './components/view-video/view-video';
import { EditVideo } from './components/edit-video/edit-video';
import { DeleteVideo } from './components/delete-video/delete-video';
import { Header } from './components/header';

function App() {
  return (
    <div className="container-fluid">
      <BrowserRouter>
        <Header/>
      <section >
        <div>
          <Routes>
            <Route path='/' element={<MainComponent/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/unregister' element={<Unregister/>} />
            <Route path='/register' element={<Register/>}/>
            <Route path='/videos' element={<VideosHome/>}/>
            <Route path='/admin-login' element={<AdminLogin/>}/>
            <Route path='/admin-home' element={<AdminHome/>}/>
            <Route path='/add-video' element={<AddVideo/>} />
            <Route path='view-video/:id' element={<ViewVideo/>}/>
            <Route path='edit-video/:id' element={<EditVideo/>}></Route>
            <Route path='/deletevideo/:id' element={<DeleteVideo/>}/>
          </Routes>
        </div>
      </section>
      </BrowserRouter>
    </div>
  );
}

export default App;
