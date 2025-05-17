// components/NavBar.js
import Link from 'next/link';

export default function NavBar() {
  return (
    <nav className="navbar">
      <ul className="menu">
        <li><Link href="/">Index</Link></li>
        <li><Link href="/map">Map</Link></li>

        <li className="dropdown">
          <span>Vendors</span>
          <ul className="dropdown-menu">
            <li><Link href="/vendors/handshake">Handshake</Link></li>
            <li><Link href="/vendors/gunny">Gunny</Link></li>
            <li><Link href="/vendors/labrat">Labrat</Link></li>
            <li><Link href="/vendors/artisan">Artisan</Link></li>
            <li><Link href="/vendors/banshee">Banshee</Link></li>
          </ul>
        </li>

        <li className="dropdown">
          <span>Weapons</span>
          <ul className="dropdown-menu">
            <li><Link href="/weapons/weapon1">Weapon 1</Link></li>
            <li><Link href="/weapons/weapon2">Weapon 2</Link></li>
            <li><Link href="/weapons/weapon3">Weapon 3</Link></li>
          </ul>
        </li>

        <li className="dropdown">
          <span>Armor</span>
          <ul className="dropdown-menu">
            <li><Link href="/armor/plate-carriers">Plate Carriers</Link></li>
            <li><Link href="/armor/vests">Vests</Link></li>
            <li><Link href="/armor/option3">3rd Option</Link></li>
          </ul>
        </li>

        <li className="dropdown">
          <span>Medical</span>
          <ul className="dropdown-menu">
            <li><Link href="/medical/option1">Option 1</Link></li>
            <li><Link href="/medical/option2">Option 2</Link></li>
            <li><Link href="/medical/option3">Option 3</Link></li>
          </ul>
        </li>

        <li className="dropdown">
          <span>Food</span>
          <ul className="dropdown-menu">
            <li><Link href="/food/option1">Option 1</Link></li>
            <li><Link href="/food/option2">Option 2</Link></li>
            <li><Link href="/food/option3">Option 3</Link></li>
          </ul>
        </li>

        <li className="dropdown">
          <span>Tasks</span>
          <ul className="dropdown-menu">
            <li><Link href="/tasks/option1">Option 1</Link></li>
            <li><Link href="/tasks/option2">Option 2</Link></li>
            <li><Link href="/tasks/option3">Option 3</Link></li>
          </ul>
        </li>

        <li><Link href="/backpacks">Backpacks</Link></li>

        <li className="dropdown">
          <span>Locations</span>
          <ul className="dropdown-menu">
            <li><Link href="/locations/option1">Option 1</Link></li>
            <li><Link href="/locations/option2">Option 2</Link></li>
            <li><Link href="/locations/option3">Option 3</Link></li>
          </ul>
        </li>
      </ul>
    </nav>
  );
} 
