import type { ReactNode } from "react";
import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Тигры — хоккейная команда",
  description: "Сила. Скорость. Команда.",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="ru">
      <body>
        <header className="header">
          <div className="container nav">
            <Link href="/" className="logo">
              ТИГРЫ
            </Link>

            <nav className="navLinks">
              <Link href="/">Главная</Link>
              <Link href="/team">Команда</Link>
              <Link href="/matches">Матчи</Link>
              <Link href="/news">Новости</Link>
              <Link href="/gallery">Галерея</Link>
              <Link href="/about">О команде</Link>
              <Link href="/contacts">Контакты</Link>
            </nav>

            <Link href="/admin" className="adminButton">
              Админ
            </Link>
          </div>
        </header>

        {children}
      </body>
    </html>
  );
}
