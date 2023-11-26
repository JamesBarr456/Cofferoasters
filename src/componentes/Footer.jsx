import { Redsocial } from "./Redsocial"
import logoFooter from '../assets/icons/logo-footer.svg'
export const Footer = () => {
  return (
    <footer className="container mx-auto px-5">
        <div className="bg-dark-indigo p-10 space-y-10 text-center lg:flex lg:space-y-0 lg:justify-between">
          <div>
            <img className="w-52 lg:w-60 mx-auto" src={logoFooter}  alt="logo" />
          </div>
          <Redsocial></Redsocial>
        </div>
    </footer>
  )
}
