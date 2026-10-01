export default function GalleryPage() {
  return (
    <main className="container" style={{ padding: "60px 0" }}>
      <p style={{ color: "#ff6a00", fontWeight: 800 }}>МЕДИА</p>

      <h1 style={{ fontSize: "56px", margin: "10px 0 40px" }}>
        Галерея
      </h1>

      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: 16,
        }}
      >
        {["Матчи", "Тренировки", "Команда", "Турниры", "Болельщики"].map(
          (category) => (
            <div
              key={category}
              style={{
                minHeight: 180,
                background: "#151515",
                border: "1px solid #292929",
                borderRadius: 16,
                display: "flex",
                alignItems: "flex-end",
                padding: 20,
              }}
            >
              <h2>{category}</h2>
            </div>
          )
        )}
      </section>
    </main>
  );
}
