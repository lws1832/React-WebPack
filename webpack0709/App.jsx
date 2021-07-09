import React,{Component}  from "react"
import Navbar from './component/Navbar'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Community from './pages/Community'
class App extends Component{
    render(){
        return(
            <>
           <BrowserRouter>
               <Navbar/>
              

               {/* 여기서부터 내용보이는 영역 */}
               <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/projects" component={Projects} />
                <Route path="/community" component={Community} />

            </Switch>
            </BrowserRouter>
           
            </>
        )
    }
}

//다른파일에서 쓸 수 있도록 따로 빼놓은상태
export default App 