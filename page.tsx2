import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Shield, AlertTriangle, Lock, FileText, User, Key } from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <header className="border-b border-red-900 bg-black px-4 py-3">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="h-6 w-6 text-red-600" />
            <span className="text-xl font-bold tracking-tight">SCP FOUNDATION</span>
            <span className="rounded bg-red-900 px-2 py-0.5 text-xs font-medium">SECURITY DEPARTMENT</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden items-center gap-1 text-xs text-red-500 md:flex">
              <AlertTriangle className="h-4 w-4" />
              <span>SECURITY LEVEL: RESTRICTED</span>
            </div>
            <Button
              variant="outline"
              className="bg-red-950 text-white border-red-800 hover:bg-red-900 hover:text-white"
            >
              <Lock className="mr-2 h-4 w-4" /> Emergency Protocols
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto flex flex-1 flex-col px-4 py-8">
        <div className="mx-auto flex w-full max-w-md flex-col items-center justify-center space-y-6 py-12">
          <div className="flex flex-col items-center space-y-2 text-center">
            <Shield className="h-12 w-12 text-red-600" />
            <h1 className="text-3xl font-bold tracking-tighter">SECURITY CLEARANCE REQUIRED</h1>
            <p className="text-sm text-gray-400">
              Authorized personnel only. Unauthorized access will be logged and reported.
            </p>
          </div>

          <div className="w-full space-y-4 border border-red-900 bg-black p-6">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium leading-none" htmlFor="username">
                  Personnel ID
                </label>
                <span className="text-xs text-red-500">LEVEL 3+ CLEARANCE REQUIRED</span>
              </div>
              <div className="flex">
                <Input
                  id="username"
                  placeholder="Enter your ID"
                  className="flex-1 border-red-900 bg-black text-white placeholder:text-gray-500 focus-visible:ring-red-500"
                />
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium leading-none" htmlFor="password">
                  Security Passphrase
                </label>
              </div>
              <div className="flex">
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your passphrase"
                  className="flex-1 border-red-900 bg-black text-white placeholder:text-gray-500 focus-visible:ring-red-500"
                />
              </div>
            </div>
            <Button className="w-full bg-red-900 text-white hover:bg-red-800">
              <Key className="mr-2 h-4 w-4" /> Authenticate
            </Button>
            <div className="text-center text-xs text-gray-500">
              <p>All access attempts are logged and monitored.</p>
              <p>Breach of protocol will result in immediate termination.</p>
            </div>
          </div>
        </div>
      </main>

      <section className="border-t border-red-900 bg-black py-8">
        <div className="container mx-auto px-4">
          <h2 className="mb-6 text-xl font-bold tracking-tight">SECURITY PROTOCOLS</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="space-y-2 border border-red-900 p-4">
              <div className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-yellow-500" />
                <h3 className="font-bold">Containment Breach</h3>
              </div>
              <p className="text-sm text-gray-400">
                In case of containment breach, follow Protocol-Red and report to nearest security checkpoint.
              </p>
              <Link href="/protocols/containment-breach" className="text-xs text-red-500 hover:underline">
                View Protocol Details →
              </Link>
            </div>
            <div className="space-y-2 border border-red-900 p-4">
              <div className="flex items-center gap-2">
                <User className="h-5 w-5 text-blue-500" />
                <h3 className="font-bold">Personnel Verification</h3>
              </div>
              <p className="text-sm text-gray-400">
                All personnel must undergo verification at security checkpoints when moving between sectors.
              </p>
              <Link href="/protocols/verification" className="text-xs text-red-500 hover:underline">
                View Protocol Details →
              </Link>
            </div>
            <div className="space-y-2 border border-red-900 p-4">
              <div className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-green-500" />
                <h3 className="font-bold">Incident Reporting</h3>
              </div>
              <p className="text-sm text-gray-400">
                All security incidents must be documented and reported within 30 minutes of occurrence.
              </p>
              <Link href="/protocols/reporting" className="text-xs text-red-500 hover:underline">
                View Protocol Details →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-red-900 bg-black px-4 py-6 text-xs text-gray-500">
        <div className="container mx-auto">
          <div className="flex flex-col justify-between gap-4 md:flex-row">
            <div>
              <p>SCP FOUNDATION - SECURITY DEPARTMENT</p>
              <p>CLASSIFIED INFORMATION - LEVEL 3 CLEARANCE REQUIRED</p>
            </div>
            <div className="flex gap-4">
              <Link href="/terms" className="hover:text-white">
                Terms of Access
              </Link>
              <Link href="/protocols" className="hover:text-white">
                Security Protocols
              </Link>
              <Link href="/emergency" className="hover:text-white">
                Emergency Procedures
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
