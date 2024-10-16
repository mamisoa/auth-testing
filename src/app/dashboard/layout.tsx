import Sidenav from '@/app/components/ui/SideBar'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex">
      <Sidenav />
      <main className="flex-1 p-4">{children}</main>
    </div>
  )
}