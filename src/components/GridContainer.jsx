function GridContainer({ children }) {
  return (
    <div className="grid gap-[20px] lg:grid-flow-col md:grid-rows-2 lg:auto-cols-[230px_2fr_280px] md:grid-flow-col md:auto-cols-[230px_2fr]">
      {children}
    </div>
  );
}

export default GridContainer;
