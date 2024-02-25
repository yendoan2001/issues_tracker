'use client'
import Link from "next/link";
import {FaBug} from "react-icons/fa";
import {usePathname} from "next/navigation";
import classNames from "classnames";

export const NavBar = () => {
    const links = [
        {label: 'Dashboard', href: '/'},
        {label: 'Issues', href: '/issues'}
    ]
    const currentPathName = usePathname()
    return (
        <nav className='flex space-x-6 border-b h-14 items-center mb-5 px-5'>
            <Link href='/'/><FaBug/>
            <ul className='flex space-x-6'>
                {links.map(link =>
                    <Link key={link.href} className={classNames({
                        'text-zinc-900': currentPathName === link.href,
                        'text-zinc-500': currentPathName !== link.href,
                        'hover:text-zinc-800 transition-colors': true
                    })}
                          href={link.href}>
                        {link.label}
                    </Link>
                )}
            </ul>
        </nav>
    )
}