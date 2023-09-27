import React from "react";
import {
  Drawer,
  Button,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
 
export function NavigationDrawer() {

  const navigate=useNavigate()
  const [open, setOpen] = React.useState(false);
 
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);
 
  return (
    <div className="bg-purple-700">

<React.Fragment>
      <Button onClick={openDrawer}>Open Drawer</Button>
      <Drawer open={open} onClose={closeDrawer} className="p-5 bg-purple-700">
        <div className="mb-6 flex items-center justify-between ">
          <Typography variant="h5" color="blue-gray">
            HERTZ 23
          </Typography>
          <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>
       
        <div className=' p-3 '>
      <button className='font-medium ml-7 m-3  font-poppins text-md cursor-pointer  text-slate-300 hover:text-slate-50 hover:border-b-2 border-blue-700' onClick={()=>navigate('/')}>Home</button>
      <button className='font-medium ml-7 m-3  font-poppins text-md cursor-pointer  text-slate-300 hover:text-slate-50 hover:border-b-2 border-blue-700' onClick={()=>navigate('/register')}>Register</button>
      <button className='font-medium ml-7 m-3  font-poppins text-md cursor-pointer  text-slate-300 hover:text-slate-50 hover:border-b-2 border-blue-700' onClick={()=>navigate('/event')}>Events</button>
      <button className='font-medium ml-7 m-3  font-poppins text-md cursor-pointer  text-slate-300 hover:text-slate-50 hover:border-b-2 border-blue-700' onClick={()=>navigate('/about')}>About</button>
 
      <button className='font-medium ml-7 m-3  font-poppins text-md cursor-pointer  text-slate-300 hover:text-slate-50 hover:border-b-2 border-blue-700'onClick={()=>navigate('/contact')}>contacts</button>
   </div>
      </Drawer>
    </React.Fragment>

    </div>
  );
}