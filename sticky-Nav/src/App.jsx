
import{Route , createBrowserRouter , createRoutesFromElements , RouterProvider} from 'react-router-dom'
import { Home } from './Pages/Home/Home'
import { About } from './Pages/About/About'
import { Navbar } from './Pages/Navbar/Navbar'
import {Contact} from './Pages/Contact/Contact'

function App() {
 

        const router=createBrowserRouter(createRoutesFromElements(
          <Route element={<Navbar></Navbar>}>

           <Route path='/' element={<Home></Home>}></Route>
           <Route path='/About' element={<About></About>}></Route>
           <Route path='/Contact' element={<Contact></Contact>}>
        
           </Route>




          </Route>
        ))





  return (
    <>
     <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
