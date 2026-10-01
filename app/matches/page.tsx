export default function MatchesPage() {
  return (
    <main className="container" style={{ padding: "60px 0" }}>
      <p style={{ color: "#ff6a00", fontWeight: 800 }}>ХОККЕЙ</p>

      <h1 style={{ fontSize: "56px", margin: "10px 0 40px" }}>
        Матчи
      </h1>

      <section
        style={{
          background: "#151515",
          border: "1px solid #292929",
          borderRadius: 16,
          padding: 28,
        }}
      >
        <p style={{ color: "#ff6a00", fontWeight: 800 }}>
          БЛИЖАЙШИЙ МАТЧ
        </p>

        <h2 style={{ fontSize: 32 }}>
          Тигры — Соперник
        </h2>

        <p style={{ color: "#aaa" }}>
          Дата и время будут добавлены через админ-панель.
        </p>
      </section>
    </main>
  );
}
