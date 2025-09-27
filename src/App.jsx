import { Outlet, NavLink } from 'react-router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import './assets/scss/App.scss'
import { toast, ToastContainer } from 'react-toastify'
import HeaderSite from './assets/components/HeaderSite'
import FooterSite from './assets/components/FooterSite'
import Overlay from './assets/components/Overlay'
import BurgerMenu from './assets/components/BurgerMenu'

const queryClient = new QueryClient()

export default function App() {

  return (
    <>
      <Overlay />
      <BurgerMenu />
      <div className="page-wrapper">
        <HeaderSite />
        <main>
          <div className='header-margin'></div>
          <QueryClientProvider client={queryClient}>
            <Outlet />
          </QueryClientProvider>
        </main>
        <FooterSite />
        <ToastContainer position="top-center" autoClose={3000} theme="dark" />
      </div>
    </>
  )
}

