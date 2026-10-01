export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0b0b0b",
        color: "white",
        padding: "60px 20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <p style={{ color: "#ff6a00", fontWeight: 800, letterSpacing: 3 }}>
          ШКОЛЬНАЯ ХОККЕЙНАЯ КОМАНДА
        </p>

        <h1 style={{ fontSize: "clamp(60px, 12vw, 140px)", margin: "20px 0" }}>
          ТИГРЫ
        </h1>

        <p style={{ fontSize: 24, color: "#ccc" }}>
          Сила. Скорость. Команда.
        </p>

        <div style={{ marginTop: 40, display: "flex", gap: 12, flexWrap: "wrap" }}>
          <a
            href="/team"
            style={{
              background: "#ff6a00",
              color: "#111",
              padding: "14px 22px",
              borderRadius: 10,
              fontWeight: 800,
              textDecoration: "none",
            }}
          >
            Наша команда
          </a>

          <a
            href="/matches"
            style={{
              border: "1px solid #555",
              color: "white",
              padding: "14px 22px",
              borderRadius: 10,
              fontWeight: 800,
              textDecoration: "none",
            }}
          >
            Матчи
          </a>
        </div>
      </div>
    </main>
  );
                    }
