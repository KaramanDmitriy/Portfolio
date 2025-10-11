import { Outlet, NavLink } from 'react-router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import './assets/scss/App.scss'
import { toast, ToastContainer } from 'react-toastify'
import HeaderSite from './assets/components/HeaderSite'
import FooterSite from './assets/components/FooterSite'
import Overlay from './assets/components/Overlay'
import BurgerMenu from './assets/components/BurgerMenu'
import { useState } from 'react';

const queryClient = new QueryClient()

export default function App() {
  const [burgerOpen, setBurgerOpen] = useState(false);

  return (
    <>
      <Overlay />
      <BurgerMenu burgerOpen={burgerOpen} setBurgerOpen={setBurgerOpen} />
      <div className="page-wrapper">
        <HeaderSite burgerOpen={burgerOpen} setBurgerOpen={setBurgerOpen} />
        <main>
          <QueryClientProvider client={queryClient}>
            <Outlet />
          </QueryClientProvider>
        </main>
        {/* <FooterSite /> */}
        <ToastContainer position="top-center" autoClose={3000} theme="dark" />
      </div>
    </>
  )
}

