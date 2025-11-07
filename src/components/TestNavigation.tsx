import { NavLink } from "@/components/NavLink";

const navigationItems = [
  { to: "/", label: "Teste 1" },
  { to: "/teste-2", label: "Teste 2" },
  { to: "/teste-3", label: "Teste 3" },
  { to: "/teste-4", label: "Teste 4" },
  { to: "/teste-5", label: "Teste 5" },
];

const TestNavigation = () => (
  <nav className="absolute top-8 left-1/2 z-10 w-full max-w-xl -translate-x-1/2 px-6">
    <div className="flex items-center justify-center gap-3 rounded-full border border-border/40 bg-card/80 p-2 shadow-lg backdrop-blur">
      {navigationItems.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          className="rounded-full px-6 py-2 text-sm font-medium text-muted-foreground transition-colors duration-300 hover:text-foreground"
          activeClassName="bg-primary text-primary-foreground shadow-md"
        >
          {item.label}
        </NavLink>
      ))}
    </div>
  </nav>
);

export { TestNavigation };
