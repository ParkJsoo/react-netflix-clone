import React, {useEffect, useState} from 'react';
import './Nav.css';

export default function Nav() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        setShow(true);
      } else {
        setShow(false);
      }
    });

    return () => {
      window.removeEventListener('scroll', () => {});
    };
  }, []);


  return (
    <nav className={`nav ${show && 'nav__black'}`}>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/220px-Netflix_2015_logo.svg.png"
           alt="Netflix logo"
           className="nav__logo"
           onClick={() => window.location.reload()}/>
      <img src="https://occ-0-2219-3997.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABQnOnMxhb19v9lQZScL86ZpnI21__HC3fseri3xG_4k-rYBafycfVvfsw_SqXVYXJJrelgRPF-eed5E69w1GQ3rq-CxZLW0.png?r=a4b"
           alt="User logged"
           className="nav__avatar"/>
    </nav>
  )
}
