import { useState } from 'react'
import './App.css'
import { Route, Routes, Link, NavLink } from 'react-router-dom'

function App() {
   function Home() {
      return (
         <div>
            <h2>Home</h2>
            Home...
         </div>
      )
   }

   function Topics() {
      return (
         <div>
            <h2>Topics</h2>
            Topics...
         </div>
      )
   }
   function Contact() {
      return (
         <div>
            <h2>Contact</h2>
            Contact...
         </div>
      )
   }
   return (
      <div>
         <h1>리액트 라우터</h1>
         <ul>
            <li>
               {/* <a href="/">Home</a> */}
               {/* <Link to={'/home'}>Home </Link> */}
               <NavLink to={'/home'}>Home </NavLink>
            </li>
            <li>
               {/* <a href="/topics">Topics</a> */}
               {/* <Link to={'/topics'}>Topics </Link> */}
               <NavLink to={'/topics'}>Topics </NavLink>
            </li>
            <li>
               {/* <a href="/contact">Contact</a> */}
               {/* <Link to={'/contact'}> Contact</Link> */}
               <NavLink to={'/contact'}> Contact</NavLink>
            </li>
         </ul>

         {/* 경로에 따라 어떤 컴포넌트를 보여줄지 지정 */}
         <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/topics" element={<Topics />} />
            <Route path="/contact" element={<Contact />} />

            {/* 지정되지 않은 경로로 접근했을 때에는 모두 Not Found로 보여준다 */}
            <Route path="/*" element={'Not Found'} />
         </Routes>
      </div>

      /* 
      a태그를 사용한 링크 이동: 전체 새로고침 -> 모든DOM 리렌더링
      =>MPA방식

      Link 컴포넌트를 사용한 링크 이동: 바뀐 부분의 DOM만 리렌더링
      =>SPA방식
       */
   )
}

export default App
