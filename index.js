import React from 'react'
import ReactDOM from 'react-dom'
import Header from './Header'
import MainContent from './MainContent'
import Footer from './Footer'

function Page(){
  return(
        <>
          <Header/>
          <MainContent/>
          <Footer/>     
        </>)
}

ReactDOM.render(<Page/>, document.getElementById('root'))