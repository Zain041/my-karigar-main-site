
import CustomerProfile from '../components/Profile/CustomerProfile'
import ProviderProfile from '../components/Profile/ProviderProfile'
import Register from '../components/Register/Register'
import Home from '../components/home/home'
import Login from "../components/Login/Login";
import postRequirement from './RequirementPost/postRequirement';
import About from './About/About';
import Services from './Services/Services';
import Contact from './Contact/Contact';
import Mason from './karigarspages/mason';
import Carpentor from './karigarspages/carpentor';
import Plumber from './karigarspages/plumber';
import Fabricator from './karigarspages/fabricator';
import Painter from './karigarspages/painter';
import Maintenance from './karigarspages/maintenance';
import Gardner from './karigarspages/gardner';
import Electrician from './karigarspages/electrician';
import PreviewProfile from './karigarspages/previewProfile';


var routes = [
  {
    path: "/customer-profile",
  
    component: CustomerProfile,
    layout: "/user"
  },
  {
    path: "/home",
    name: "home",
   
    component: Home,
    layout: "/user"
  },
  {
    path: "/post-requirements",
    name: "Post Requirements",
   
    component: postRequirement,
    layout: "/user"
  },
  {
    path: "/preview-profile/:id",
    name: "Post Requirements",
   
    component: PreviewProfile,
    layout: "/user"
  },

  {
    path: "/provider-profile",
   
    icon: "fa fa-list-alt",
    component: ProviderProfile,
    layout: "/user"
  },
  {
    path: "/about",
   
    icon: "fa fa-list-alt",
    component: About,
    layout: "/user"
  },
  {
    path: "/services",
   
    icon: "fa fa-list-alt",
    component: Services,
    layout: "/user"
  },
  {
    path: "/contact",
   
    icon: "fa fa-list-alt",
    component: Contact,
    layout: "/user"
  },
  {
    path: "/mason",
   
    icon: "fa fa-list-alt",
    component: Mason,
    layout: "/user"
  },
  {
    path: "/carpentor",
   
    icon: "fa fa-list-alt",
    component: Carpentor,
    layout: "/user"
  },
  {
    path: "/electricians",
   
    icon: "fa fa-list-alt",
    component: Electrician,
    layout: "/user"
  },
  {
    path: "/plumber",
   
    icon: "fa fa-list-alt",
    component: Plumber,
    layout: "/user"
  },
  {
    path: "/fabricator",
   
    icon: "fa fa-list-alt",
    component: Fabricator,
    layout: "/user"
  },
  {
    path: "/painter",
   
    icon: "fa fa-list-alt",
    component: Painter,
    layout: "/user"
  },
  {
    path: "/maintenance",
   
    icon: "fa fa-list-alt",
    component: Maintenance,
    layout: "/user"
  },
  {
    path: "/gardner",
   
    icon: "fa fa-list-alt",
    component: Gardner,
    layout: "/user"
  },

  {
    path: "/login",
    name: "Login",
    // icon: "ni ni-key-25 text-info",
    component: Login,
    layout: "/auth"
  },
  {
    path: "/register",
    name: "Register",
   
    component: Register,
    layout: "/auth"
  }
];
export default routes;