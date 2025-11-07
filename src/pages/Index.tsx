import { useEffect, useState } from "react";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-background via-background to-secondary/30 p-6">
      <article 
        className={`
          max-w-4xl w-full text-center
          transform transition-all duration-1000 ease-out
          ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}
        `}
      >
        <div className="relative">
          <div className="absolute inset-0 bg-primary/5 blur-3xl rounded-full transform -translate-y-1/2" />
          
          <h1 className="
            relative text-6xl md:text-8xl font-bold 
            bg-gradient-to-r from-foreground via-primary to-foreground 
            bg-clip-text text-transparent
            mb-8
            animate-in fade-in slide-in-from-bottom-4
            duration-700
          ">
            Teste de Otimização
          </h1>
          
          <div className="
            relative inline-block px-8 py-4 
            bg-card/80 backdrop-blur-sm
            border border-border/50
            rounded-2xl shadow-lg
            animate-in fade-in slide-in-from-bottom-8
            duration-700 delay-200
          ">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Uma página simples, elegante e otimizada para performance
            </p>
          </div>
        </div>
      </article>
    </main>
  );
};

export default Index;
