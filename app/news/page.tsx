export default function NewsPage() {
  return (
    <main className="container" style={{ padding: "60px 0" }}>
      <p style={{ color: "#ff6a00", fontWeight: 800 }}>КОМАНДА</p>

      <h1 style={{ fontSize: "56px", margin: "10px 0 40px" }}>
        Новости
      </h1>

      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: 16,
        }}
      >
        <article
          style={{
            background: "#151515",
            border: "1px solid #292929",
            borderRadius: 16,
            padding: 24,
          }}
        >
          <p style={{ color: "#ff6a00", fontWeight: 800 }}>
            НОВОСТЬ
          </p>

          <h2>Новости команды</h2>

          <p style={{ color: "#999" }}>
            Здесь будут появляться новости, результаты и события команды.
          </p>
        </article>
      </section>
    </main>
  );
}
