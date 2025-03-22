'use client'
import { usePathname } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell } from '@fortawesome/free-regular-svg-icons'


const Navbar = () => {
  const para = usePathname();
  const id = para.split('/')
  return (
    <>
      <nav class="navbar navbar-expand-lg nav_bar">
        <div class="container-fluid">

          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item d-flex align-items-center ms-2">
                <div className='profile_pic'>
                  <img src="/assets/img/pic.jpeg" className='img-fluid rounded-circle' alt="" />
                </div>
                <div className='ms-3'>
                  <p className='m-0 text-white'>Kartik Sharma</p>
                  <p className='m-0 size_medium custom_color1'>Hello, Welcome back!</p>
                </div>
              </li>
            </ul>

            <form class="d-flex" role="search">
              <input class=" me-2 custom_search" type="search" placeholder="Search" aria-label="Search" />
              {/* <button class="btn btn-outline-success" type="submit">Search</button> */}
            </form>
            <div className='customNotifactionBox d-flex align-items-center ms-2'>
              <FontAwesomeIcon className='text-white' icon={faBell} />
              <button className='customBtn1'>2 New</button>
            </div>
          </div>
        </div>
      </nav>
      {/* <div className={`${"nav_bar"} ${'w-100 p-2 d-flex justify-content-between align-items-center'}`}>
        <div className='d-flex'>
          <img className='"rounded"-circle img-fluid' src={profilepic} alt="profile pic" />
          <div>
            <h6 className='text-white'></h6>
            <p><span className={"label"}>Hello, Welcome Back!</span></p>
          </div>
        </div>
        <div>
          <FontAwesomeIcon className='text-white' icon={faBell} />
        </div>
      </div> */}
    </>
  )
}

export default Navbar