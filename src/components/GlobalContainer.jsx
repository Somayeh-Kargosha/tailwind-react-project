function GlobalContainer({ children }) {
  return (
    <main className="container mx-auto lg:px-12 md:px-8 px-0 lg:max-w-7xl py-3 md:max-w-3xl max-w-xl">
      {children}
    </main>
  );
}

export default GlobalContainer;
