import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "aiteam — AI Team. Không cần thuê dev.",
  description:
    "Nền tảng AI tự động build phần mềm thông qua Telegram. Không cần thuê team dev truyền thống.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
