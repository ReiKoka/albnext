function Home({ navHeight }: { navHeight: number }) {
  return (
    <div className="w-full" style={{ height: `calc(100dvh - ${navHeight}px)` }}>
      Home
    </div>
  );
}

export default Home;
