export default function AboutPage() {
  return (
    <main className="container" style={{ padding: "60px 0" }}>
      <p style={{ color: "#ff6a00", fontWeight: 800 }}>
        О КОМАНДЕ
      </p>

      <h1 style={{ fontSize: "56px", margin: "10px 0 30px" }}>
        Тигры
      </h1>

      <section
        style={{
          background: "#151515",
          border: "1px solid #292929",
          borderRadius: 16,
          padding: 30,
        }}
      >
        <h2>Сила. Скорость. Команда.</h2>

        <p style={{ color: "#aaa", fontSize: 18, lineHeight: 1.7 }}>
          «Тигры» — школьная хоккейная команда. Здесь будут
          информация об истории команды, тренировках, целях и месте
          проведения игр.
        </p>
      </section>
    </main>
  );
}
