export default function AdminPage() {
  return (
    <main
      className="container"
      style={{
        minHeight: "calc(100vh - 72px)",
        padding: "80px 0",
        maxWidth: 520,
      }}
    >
      <p style={{ color: "#ff6a00", fontWeight: 800 }}>
        УПРАВЛЕНИЕ КОМАНДОЙ
      </p>

      <h1 style={{ fontSize: 48, margin: "10px 0 30px" }}>
        Админ-панель
      </h1>

      <div
        style={{
          background: "#151515",
          border: "1px solid #292929",
          borderRadius: 16,
          padding: 28,
        }}
      >
        <label style={{ display: "block", marginBottom: 8 }}>
          Пароль
        </label>

        <input
          type="password"
          placeholder="Введите пароль"
          style={{
            width: "100%",
            padding: 14,
            background: "#0b0b0b",
            color: "white",
            border: "1px solid #444",
            borderRadius: 8,
            marginBottom: 16,
          }}
        />

        <button
          style={{
            width: "100%",
            padding: 14,
            background: "#ff6a00",
            color: "#111",
            border: 0,
            borderRadius: 8,
            fontWeight: 800,
            cursor: "pointer",
          }}
        >
          Войти
        </button>
      </div>
    </main>
  );
}
