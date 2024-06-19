import React from 'react';
import { Link,Outlet } from 'react-router-dom';
function About(){
    return(
        <>
          <h2>this is About page</h2>
          <nav>
            <ul>
                <li>
                    <Link to="team">our team </Link>
                </li>
                <li>
                    <Link to="company">our company </Link>
                </li>
            </ul>
          </nav>
          <Outlet />
        </>
    )
}
export default About;