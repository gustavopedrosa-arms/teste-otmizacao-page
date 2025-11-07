const cardItems = [
  {
    title: "Teste 1",
    description: "Conteúdo demonstrativo para o card Teste 1.",
  },
  {
    title: "Teste 2",
    description: "Conteúdo demonstrativo para o card Teste 2.",
  },
  {
    title: "Teste 3",
    description: "Conteúdo demonstrativo para o card Teste 3.",
  },
];

const TestCards = () => (
  <div
    className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-300"
  >
    {cardItems.map((item) => (
      <div
        key={item.title}
        className="rounded-2xl border border-border/40 bg-card/80 p-6 text-left shadow-lg backdrop-blur"
      >
        <h2 className="text-2xl font-semibold text-foreground">{item.title}</h2>
        <p className="mt-3 text-sm text-muted-foreground">{item.description}</p>
      </div>
    ))}
  </div>
);

export { TestCards };
