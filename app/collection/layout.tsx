export default function CollectionLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-off-white">
      {children}
    </div>
  )
} 