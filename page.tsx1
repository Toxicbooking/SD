import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Shield, AlertTriangle, FileText, Lock, Search } from "lucide-react"
import { Input } from "@/components/ui/input"

export default function Protocols() {
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

      <main className="container mx-auto flex-1 px-4 py-8">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Security Protocols</h1>
            <p className="text-gray-400">Standard operating procedures for security personnel</p>
          </div>
          <div className="flex w-full items-center gap-2 md:w-auto">
            <div className="relative flex-1 md:w-64">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
              <Input
                type="search"
                placeholder="Search protocols..."
                className="w-full border-red-900 bg-black pl-8 text-white placeholder:text-gray-500"
              />
            </div>
            <Button
              variant="outline"
              className="bg-red-950 text-white border-red-800 hover:bg-red-900 hover:text-white"
            >
              <FileText className="mr-2 h-4 w-4" /> New Protocol
            </Button>
          </div>
        </div>

        <Tabs defaultValue="containment">
          <TabsList className="bg-black border border-red-900 grid w-full grid-cols-4">
            <TabsTrigger value="containment" className="data-[state=active]:bg-red-900">
              Containment
            </TabsTrigger>
            <TabsTrigger value="personnel" className="data-[state=active]:bg-red-900">
              Personnel
            </TabsTrigger>
            <TabsTrigger value="emergency" className="data-[state=active]:bg-red-900">
              Emergency
            </TabsTrigger>
            <TabsTrigger value="general" className="data-[state=active]:bg-red-900">
              General
            </TabsTrigger>
          </TabsList>
          <TabsContent value="containment" className="mt-6 space-y-6">
            <Card className="bg-black border-red-900">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Protocol-C1: Standard Containment Procedures</CardTitle>
                    <CardDescription>For Safe and Euclid class anomalies</CardDescription>
                  </div>
                  <div className="rounded bg-green-900/30 px-2 py-1 text-xs font-medium text-green-500">ACTIVE</div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm">
                  This protocol outlines the standard operating procedures for maintaining containment of Safe and
                  Euclid class anomalies under normal circumstances.
                </p>
                <div className="space-y-2">
                  <h3 className="text-sm font-medium">Key Requirements:</h3>
                  <ul className="list-inside list-disc space-y-1 text-sm text-gray-400">
                    <li>Minimum of two (2) security personnel present during containment checks</li>
                    <li>Biometric verification required for all personnel entering containment areas</li>
                    <li>Full documentation of all containment activities in the SCPS database</li>
                    <li>Regular testing of containment systems on a bi-weekly schedule</li>
                  </ul>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    className="bg-red-950 text-white border-red-800 hover:bg-red-900 hover:text-white"
                  >
                    View Full Protocol
                  </Button>
                  <Button variant="ghost" className="text-gray-400 hover:text-white">
                    Download PDF
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-black border-red-900">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Protocol-C2: Keter Containment Procedures</CardTitle>
                    <CardDescription>For Keter class anomalies</CardDescription>
                  </div>
                  <div className="rounded bg-red-900/30 px-2 py-1 text-xs font-medium text-red-500">LEVEL 4+ ONLY</div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm">
                  This protocol outlines the enhanced security measures required for the containment of Keter class
                  anomalies, which pose a significant threat to foundation personnel and potentially humanity.
                </p>
                <div className="space-y-2">
                  <h3 className="text-sm font-medium">Key Requirements:</h3>
                  <ul className="list-inside list-disc space-y-1 text-sm text-gray-400">
                    <li>Minimum of four (4) armed security personnel present at all times</li>
                    <li>Dual authentication system for all access points</li>
                    <li>Automated lockdown procedures in case of containment breach</li>
                    <li>On-site termination protocols in case of uncontainable breach</li>
                  </ul>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    className="bg-red-950 text-white border-red-800 hover:bg-red-900 hover:text-white"
                  >
                    Request Access
                  </Button>
                  <Button variant="ghost" className="text-gray-400 hover:text-white" disabled>
                    Download PDF
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-black border-red-900">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Protocol-C3: Containment Breach Response</CardTitle>
                    <CardDescription>Emergency procedures for containment failures</CardDescription>
                  </div>
                  <div className="rounded bg-yellow-900/30 px-2 py-1 text-xs font-medium text-yellow-500">CRITICAL</div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm">
                  This protocol details the immediate actions to be taken by security personnel in the event of a
                  containment breach, regardless of SCP classification.
                </p>
                <div className="space-y-2">
                  <h3 className="text-sm font-medium">Key Requirements:</h3>
                  <ul className="list-inside list-disc space-y-1 text-sm text-gray-400">
                    <li>Immediate activation of site-wide alert system</li>
                    <li>Deployment of Mobile Task Force units to affected areas</li>
                    <li>Implementation of appropriate containment recovery procedures</li>
                    <li>Activation of amnestic protocols for affected personnel if necessary</li>
                  </ul>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    className="bg-red-950 text-white border-red-800 hover:bg-red-900 hover:text-white"
                  >
                    View Full Protocol
                  </Button>
                  <Button variant="ghost" className="text-gray-400 hover:text-white">
                    Download PDF
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="personnel" className="mt-6 space-y-6">
            <Card className="bg-black border-red-900">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Protocol-P1: Personnel Security Clearance</CardTitle>
                    <CardDescription>Access level requirements and verification</CardDescription>
                  </div>
                  <div className="rounded bg-green-900/30 px-2 py-1 text-xs font-medium text-green-500">ACTIVE</div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm">
                  This protocol outlines the security clearance levels within the Foundation and the verification
                  procedures for each level of access.
                </p>
                <div className="space-y-2">
                  <h3 className="text-sm font-medium">Clearance Levels:</h3>
                  <ul className="list-inside list-disc space-y-1 text-sm text-gray-400">
                    <li>Level 1: General facility access, no SCP interaction</li>
                    <li>Level 2: Limited SCP interaction (Safe class only)</li>
                    <li>Level 3: Extended SCP interaction (Safe and Euclid)</li>
                    <li>Level 4: Full access (including Keter with approval)</li>
                    <li>Level 5: O5 Council and designated personnel only</li>
                  </ul>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    className="bg-red-950 text-white border-red-800 hover:bg-red-900 hover:text-white"
                  >
                    View Full Protocol
                  </Button>
                  <Button variant="ghost" className="text-gray-400 hover:text-white">
                    Download PDF
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="emergency" className="mt-6 space-y-6">
            <Card className="bg-black border-red-900">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Protocol-E1: Site Evacuation Procedures</CardTitle>
                    <CardDescription>Emergency evacuation of foundation facilities</CardDescription>
                  </div>
                  <div className="rounded bg-red-900/30 px-2 py-1 text-xs font-medium text-red-500">CRITICAL</div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm">
                  This protocol details the procedures for the orderly evacuation of foundation facilities in the event
                  of a catastrophic containment breach or other emergency.
                </p>
                <div className="space-y-2">
                  <h3 className="text-sm font-medium">Key Procedures:</h3>
                  <ul className="list-inside list-disc space-y-1 text-sm text-gray-400">
                    <li>Activation of site-wide evacuation alarm (code RED-EVAC)</li>
                    <li>Secure lockdown of all SCP containment chambers</li>
                    <li>Personnel evacuation via designated evacuation routes</li>
                    <li>Implementation of on-site nuclear warhead if necessary (O5 approval required)</li>
                  </ul>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    className="bg-red-950 text-white border-red-800 hover:bg-red-900 hover:text-white"
                  >
                    View Full Protocol
                  </Button>
                  <Button variant="ghost" className="text-gray-400 hover:text-white">
                    Download PDF
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="general" className="mt-6 space-y-6">
            <Card className="bg-black border-red-900">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Protocol-G1: Information Security</CardTitle>
                    <CardDescription>Protection of classified foundation information</CardDescription>
                  </div>
                  <div className="rounded bg-green-900/30 px-2 py-1 text-xs font-medium text-green-500">ACTIVE</div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm">
                  This protocol outlines the procedures for maintaining the security of classified foundation
                  information and preventing unauthorized disclosure.
                </p>
                <div className="space-y-2">
                  <h3 className="text-sm font-medium">Key Requirements:</h3>
                  <ul className="list-inside list-disc space-y-1 text-sm text-gray-400">
                    <li>All digital communications must be encrypted using Foundation encryption standards</li>
                    <li>Physical documents must be stored in secure locations with appropriate access controls</li>
                    <li>Regular security audits of all information systems</li>
                    <li>Strict enforcement of "need-to-know" basis for all classified information</li>
                  </ul>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    className="bg-red-950 text-white border-red-800 hover:bg-red-900 hover:text-white"
                  >
                    View Full Protocol
                  </Button>
                  <Button variant="ghost" className="text-gray-400 hover:text-white">
                    Download PDF
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

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
