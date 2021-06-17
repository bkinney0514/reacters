import React from 'react';
import {Link} from 'react-router-dom'
function Nav(){
    return(
        

        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link>
      <div class="navbar-brand">Navbar</div>
      </Link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
         aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
         <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
         <ul class="navbar-nav mr-auto">
             <Link to='/'>
            <li class="nav-item active">
               <div class="nav-link">Home<span class="sr-only">(current)</span></div>
            </li>
            </Link>
         </ul>
         <form class="form-inline my-2 my-lg-0">
         </form>
      </div>
   </nav>

    )
}
export default Nav;