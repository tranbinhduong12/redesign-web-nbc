import { NavLink } from 'react-router-dom';
import { mainNav, type NavItem } from '@/config/navigation';

export function MainNav() {
  return (
    <nav aria-label="Menu chính" className="hidden bg-navy-900 text-white lg:block">
      <ul className="mx-auto flex max-w-7xl items-stretch justify-center px-4 sm:px-6 lg:px-8">
        {mainNav.map((item) => (
          <NavEntry key={item.path} item={item} />
        ))}
      </ul>
    </nav>
  );
}

function NavEntry({ item }: { item: NavItem }) {
  const children = item.children ?? [];

  return (
    <li className="group relative">
      <NavLink
        to={item.path}
        end={item.path === '/'}
        className={({ isActive }) =>
          `relative flex h-12 items-center px-4 text-sm font-bold tracking-wide transition-colors duration-200 ${
            isActive ? 'bg-white/10 text-white' : 'text-white/85 hover:bg-white/10 hover:text-white'
          }`
        }
      >
        {({ isActive }) => (
          <>
            {item.label}
            {isActive && (
              <span className="absolute inset-x-4 bottom-0 h-[3px] rounded-t-sm bg-primary-400" aria-hidden="true" />
            )}
          </>
        )}
      </NavLink>

      {children.length > 0 && (
        <div className="invisible absolute left-0 top-full z-50 min-w-[260px] translate-y-1 rounded-b-lg border-t-2 border-primary-500 bg-white py-2 opacity-0 shadow-xl transition duration-200 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
          <ul>
            {children.map((child) => (
              <li key={child.path}>
                <NavLink
                  to={child.path}
                  className={({ isActive }) =>
                    `block px-5 py-2.5 text-sm transition-colors duration-200 ${
                      isActive
                        ? 'bg-primary-50 font-medium text-primary-600'
                        : 'text-neutral-700 hover:bg-primary-50 hover:text-primary-600'
                    }`
                  }
                >
                  {child.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </li>
  );
}
