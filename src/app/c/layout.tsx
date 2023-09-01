// 'use client'

export const metadata = {
  title: 'delletran | Components Preview',
  description: 'delletran.com - Components Preview',
}

export default function ComponentLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      {children}
    </div>
  )
}
