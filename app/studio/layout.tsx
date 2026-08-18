export const metadata = { title: "AgroStock Studio", robots: { index: false, follow: false } };

export default function StudioLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="fr"><body style={{ margin: 0 }}>{children}</body></html>;
}
