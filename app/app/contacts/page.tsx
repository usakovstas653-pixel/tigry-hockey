export default function ContactsPage() {
  return (
    <main className="container" style={{ padding: "60px 0" }}>
      <p style={{ color: "#ff6a00", fontWeight: 800 }}>КОНТАКТЫ</p>

      <h1 style={{ fontSize: "56px", margin: "10px 0 40px" }}>
        Контакты
      </h1>

      <section
        style={{
          background: "#151515",
          border: "1px solid #292929",
          borderRadius: 16,
          padding: 30,
        }}
      >
        <h2>Тигры</h2>

        <p style={{ color: "#aaa", lineHeight: 1.8 }}>
          Хоккейная команда «Тигры».
          <br />
          Город: будет указан
          <br />
          Место тренировок: будет указано
          <br />
          Контакт: будет указан
        </p>
      </section>
    </main>
  );
}
