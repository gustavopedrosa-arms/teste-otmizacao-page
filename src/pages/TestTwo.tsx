import { useEffect, useState } from "react";
import { TestNavigation } from "@/components/TestNavigation";

const TestTwo = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <main className="relative flex min-h-screen items-center justify-center bg-gradient-to-br from-background via-background to-primary/20 p-6">
      <TestNavigation />

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
            Teste 2
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
              Explore os detalhes apresentados na página do Teste 2.
            </p>
          </div>
        </div>
      </article>
    </main>
  );
};

export default TestTwo;
