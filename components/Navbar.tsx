import Link from "next/link";
import {
  Home,
  Cpu,
  Briefcase,
  GraduationCap,
  LayoutGrid,
  Mail,
} from "lucide-react";

const navItems = [
  { name: "Home", href: "/", icon: Home, active: true },
  { name: "Skills", href: "#skills", icon: Cpu },
  { name: "Experience", href: "#experience", icon: Briefcase },
  { name: "Education", href: "#education", icon: GraduationCap },
  { name: "Projects", href: "#projects", icon: LayoutGrid },
  { name: "Contact", href: "#contact", icon: Mail },
];

export default function Navbar() {
  return (
    <div className="fixed top-4 sm:top-6 left-0 right-0 z-50 flex justify-center px-4">
      <nav className="flex items-center bg-card/80 backdrop-blur-md border border-border rounded-full p-1 shadow-2xl transition-all duration-300 max-w-full overflow-hidden">
        <ul className="flex items-center gap-0.5 sm:gap-1">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className={`flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2 rounded-full transition-all duration-300 group ${
                  item.active
                    ? "bg-foreground text-background"
                    : "text-muted-foreground hover:text-foreground hover:bg-border/50"
                }`}
              >
                <item.icon
                  className={`h-4 w-4 transition-transform group-hover:scale-110 ${item.active ? "text-background" : "text-muted-foreground"}`}
                />
                <span className="hidden lg:inline text-[10px] sm:text-xs font-bold tracking-tight uppercase">
                  {item.name}
                </span>
                <span className="lg:hidden text-[8px] absolute -bottom-1 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap font-bold">
                  {item.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
