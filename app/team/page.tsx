export default function TeamPage() {
  return (
    <main className="container" style={{ padding: "60px 0" }}>
      <p style={{ color: "#ff6a00", fontWeight: 800 }}>
        ХОККЕЙНАЯ КОМАНДА
      </p>

      <h1 style={{ fontSize: "56px", margin: "10px 0 40px" }}>
        Команда «Тигры»
      </h1>

      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: 16,
        }}
      >
        {["Вратари", "Защитники", "Нападающие"].map((position) => (
          <div
            key={position}
            style={{
              background: "#151515",
              border: "1px solid #292929",
              borderRadius: 16,
              padding: 24,
              minHeight: 180,
            }}
          >
            <div
              style={{
                color: "#ff6a00",
                fontSize: 14,
                fontWeight: 800,
              }}
            >
              СОСТАВ
            </div>

            <h2 style={{ fontSize: 28 }}>{position}</h2>

            <p style={{ color: "#999" }}>
              Игроки будут добавлены через админ-панель.
            </p>
          </div>
        ))}
      </section>
    </main>
  );
}
