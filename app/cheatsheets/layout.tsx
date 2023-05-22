interface CheatSheetsLayoutProps {
  children: React.ReactNode;
}

export default function CheatSheetsLayout({
  children,
}: CheatSheetsLayoutProps) {
  return <div className="mx-auto max-w-5xl max-lg:mx-[6vw]">{children}</div>;
}
