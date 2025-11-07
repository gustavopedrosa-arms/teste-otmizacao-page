import { useEffect, useState } from "react";
import { NavLink } from "@/components/NavLink";

const AdvancedTest = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <main className="relative flex min-h-screen items-center justify-center bg-gradient-to-br from-background via-background to-primary/20 p-6">
      <nav className="absolute top-8 left-1/2 z-10 w-full max-w-xl -translate-x-1/2 px-6">
        <div className="flex items-center justify-center gap-3 rounded-full border border-border/40 bg-card/80 p-2 shadow-lg backdrop-blur">
          <NavLink
            to="/"
            className="rounded-full px-6 py-2 text-sm font-medium text-muted-foreground transition-colors duration-300 hover:text-foreground"
            activeClassName="bg-primary text-primary-foreground shadow-md"
          >
            Página inicial
          </NavLink>
          <NavLink
            to="/teste-avancado"
            className="rounded-full px-6 py-2 text-sm font-medium text-muted-foreground transition-colors duration-300 hover:text-foreground"
            activeClassName="bg-primary text-primary-foreground shadow-md"
          >
            Teste avançado
          </NavLink>
        </div>
      </nav>

      <article
        className={`
          max-w-4xl w-full text-center
          transform transition-all duration-1000 ease-out
          ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}
        `}
      >
        <div className="relative">
          <div className="absolute inset-0 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />

          <h1
            className="
              relative text-5xl md:text-7xl font-bold
              bg-gradient-to-r from-primary via-foreground to-primary
              bg-clip-text text-transparent
              mb-8
              animate-in fade-in slide-in-from-bottom-4
              duration-700
            "
          >
            Teste Avançado via Codex
          </h1>

          <div
            className="
              relative inline-block px-8 py-4
              bg-card/80 backdrop-blur-sm
              border border-border/50
              rounded-2xl shadow-lg
              animate-in fade-in slide-in-from-bottom-8
              duration-700 delay-200
            "
          >
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Uma experiência aprimorada para explorar todo o potencial do Codex.
            </p>
          </div>
        </div>
      </article>
    </main>
  );
};

export default AdvancedTest;
