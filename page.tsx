import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Shield,
  AlertTriangle,
  Bell,
  FileText,
  User,
  Lock,
  Eye,
  Clock,
  Calendar,
  BarChart4,
  ShieldAlert,
  UserX,
} from "lucide-react"

export default function Dashboard() {
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

      <div className="container mx-auto flex flex-1 gap-6 px-4 py-6">
        <aside className="hidden w-64 flex-shrink-0 md:block">
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <img
                  src="/placeholder.svg?height=80&width=80"
                  alt="Security Badge"
                  className="h-12 w-12 rounded-full border-2 border-red-900"
                />
                <div>
                  <p className="font-bold">Agent Smith</p>
                  <p className="text-xs text-gray-400">Security Level 4</p>
                </div>
              </div>
              <Button
                variant="outline"
                className="w-full justify-start bg-red-950 text-white border-red-800 hover:bg-red-900 hover:text-white"
              >
                <Bell className="mr-2 h-4 w-4" /> Alerts (3)
              </Button>
            </div>
            <div className="space-y-1">
              <p className="text-xs font-medium text-gray-400">NAVIGATION</p>
              <Button variant="ghost" className="w-full justify-start text-white">
                <Eye className="mr-2 h-4 w-4" /> Dashboard
              </Button>
              <Button variant="ghost" className="w-full justify-start text-gray-400 hover:text-white">
                <Shield className="mr-2 h-4 w-4" /> Containment Status
              </Button>
              <Button variant="ghost" className="w-full justify-start text-gray-400 hover:text-white">
                <FileText className="mr-2 h-4 w-4" /> Incident Reports
              </Button>
              <Button variant="ghost" className="w-full justify-start text-gray-400 hover:text-white">
                <User className="mr-2 h-4 w-4" /> Personnel Management
              </Button>
              <Button variant="ghost" className="w-full justify-start text-gray-400 hover:text-white">
                <Lock className="mr-2 h-4 w-4" /> Access Control
              </Button>
            </div>
          </div>
        </aside>
        <main className="flex-1 space-y-6">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold tracking-tight">Security Dashboard</h1>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-gray-400" />
              <span className="text-sm text-gray-400">Last updated: 10 minutes ago</span>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <Card className="bg-black border-red-900">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Containment Status</CardTitle>
                <CardDescription>Current facility status</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="text-3xl font-bold text-green-500">SECURE</div>
                  <ShieldAlert className="h-8 w-8 text-green-500" />
                </div>
                <p className="mt-2 text-xs text-gray-400">All containment systems operational</p>
              </CardContent>
            </Card>
            <Card className="bg-black border-red-900">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Active Incidents</CardTitle>
                <CardDescription>Last 24 hours</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="text-3xl font-bold text-yellow-500">3</div>
                  <AlertTriangle className="h-8 w-8 text-yellow-500" />
                </div>
                <p className="mt-2 text-xs text-gray-400">2 minor, 1 moderate severity</p>
              </CardContent>
            </Card>
            <Card className="bg-black border-red-900">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Personnel On Duty</CardTitle>
                <CardDescription>Security staff</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="text-3xl font-bold">42</div>
                  <User className="h-8 w-8 text-blue-500" />
                </div>
                <p className="mt-2 text-xs text-gray-400">87% of required staffing</p>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="alerts">
            <TabsList className="bg-black border border-red-900 grid w-full grid-cols-3">
              <TabsTrigger value="alerts" className="data-[state=active]:bg-red-900">
                Active Alerts
              </TabsTrigger>
              <TabsTrigger value="breaches" className="data-[state=active]:bg-red-900">
                Recent Breaches
              </TabsTrigger>
              <TabsTrigger value="schedule" className="data-[state=active]:bg-red-900">
                Patrol Schedule
              </TabsTrigger>
            </TabsList>
            <TabsContent value="alerts" className="border border-red-900 bg-black p-4">
              <div className="space-y-4">
                <div className="flex items-start gap-4 rounded border border-yellow-900 bg-yellow-950/20 p-3">
                  <AlertTriangle className="h-5 w-5 flex-shrink-0 text-yellow-500" />
                  <div>
                    <h3 className="font-medium text-yellow-500">Anomalous Energy Readings</h3>
                    <p className="text-sm text-gray-400">
                      Sector 7G showing unusual energy patterns. Investigation team dispatched.
                    </p>
                    <div className="mt-2 flex items-center gap-2 text-xs text-gray-500">
                      <Clock className="h-3 w-3" /> 47 minutes ago
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-4 rounded border border-red-900 bg-red-950/20 p-3">
                  <AlertTriangle className="h-5 w-5 flex-shrink-0 text-red-500" />
                  <div>
                    <h3 className="font-medium text-red-500">Unauthorized Access Attempt</h3>
                    <p className="text-sm text-gray-400">
                      Multiple failed login attempts at Terminal B-12. Security team alerted.
                    </p>
                    <div className="mt-2 flex items-center gap-2 text-xs text-gray-500">
                      <Clock className="h-3 w-3" /> 2 hours ago
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-4 rounded border border-blue-900 bg-blue-950/20 p-3">
                  <Bell className="h-5 w-5 flex-shrink-0 text-blue-500" />
                  <div>
                    <h3 className="font-medium text-blue-500">Scheduled Containment Check</h3>
                    <p className="text-sm text-gray-400">
                      Routine inspection of SCP-173 containment chamber scheduled in 30 minutes.
                    </p>
                    <div className="mt-2 flex items-center gap-2 text-xs text-gray-500">
                      <Calendar className="h-3 w-3" /> Today, 15:30
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="breaches" className="border border-red-900 bg-black p-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-gray-800 pb-2">
                  <div className="flex items-center gap-2">
                    <UserX className="h-5 w-5 text-red-500" />
                    <div>
                      <p className="font-medium">Class D Personnel Escape Attempt</p>
                      <p className="text-xs text-gray-400">Sector 19-B</p>
                    </div>
                  </div>
                  <div className="text-xs text-gray-400">3 days ago</div>
                </div>
                <div className="flex items-center justify-between border-b border-gray-800 pb-2">
                  <div className="flex items-center gap-2">
                    <ShieldAlert className="h-5 w-5 text-yellow-500" />
                    <div>
                      <p className="font-medium">Minor Containment Failure</p>
                      <p className="text-xs text-gray-400">SCP-914 Chamber</p>
                    </div>
                  </div>
                  <div className="text-xs text-gray-400">1 week ago</div>
                </div>
                <div className="flex items-center justify-between border-b border-gray-800 pb-2">
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-red-500" />
                    <div>
                      <p className="font-medium">Unauthorized Network Access</p>
                      <p className="text-xs text-gray-400">Admin Terminal 5</p>
                    </div>
                  </div>
                  <div className="text-xs text-gray-400">2 weeks ago</div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="schedule" className="border border-red-900 bg-black p-4">
              <div className="space-y-4">
                <div className="grid grid-cols-3 gap-4 text-xs font-medium text-gray-400">
                  <div>TIME</div>
                  <div>SECTOR</div>
                  <div>PERSONNEL</div>
                </div>
                <div className="grid grid-cols-3 gap-4 border-b border-gray-800 pb-2">
                  <div className="text-sm">08:00 - 12:00</div>
                  <div className="text-sm">Sector A (Euclid)</div>
                  <div className="text-sm">Team Alpha (4)</div>
                </div>
                <div className="grid grid-cols-3 gap-4 border-b border-gray-800 pb-2">
                  <div className="text-sm">12:00 - 16:00</div>
                  <div className="text-sm">Sector B (Safe)</div>
                  <div className="text-sm">Team Bravo (3)</div>
                </div>
                <div className="grid grid-cols-3 gap-4 border-b border-gray-800 pb-2">
                  <div className="text-sm">16:00 - 20:00</div>
                  <div className="text-sm">Sector C (Keter)</div>
                  <div className="text-sm">Team Charlie (6)</div>
                </div>
                <div className="grid grid-cols-3 gap-4 border-b border-gray-800 pb-2">
                  <div className="text-sm">20:00 - 00:00</div>
                  <div className="text-sm">All Sectors</div>
                  <div className="text-sm">Team Delta (8)</div>
                </div>
              </div>
            </TabsContent>
          </Tabs>

          <Card className="bg-black border-red-900">
            <CardHeader>
              <CardTitle>Security Incidents Overview</CardTitle>
              <CardDescription>Last 30 days activity</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[200px] w-full">
                <div className="flex h-full items-end gap-2">
                  <div className="flex h-full flex-1 flex-col justify-end">
                    <div className="bg-red-900 h-[20%] w-full"></div>
                    <div className="mt-2 text-center text-xs">Week 1</div>
                  </div>
                  <div className="flex h-full flex-1 flex-col justify-end">
                    <div className="bg-red-900 h-[60%] w-full"></div>
                    <div className="mt-2 text-center text-xs">Week 2</div>
                  </div>
                  <div className="flex h-full flex-1 flex-col justify-end">
                    <div className="bg-red-900 h-[40%] w-full"></div>
                    <div className="mt-2 text-center text-xs">Week 3</div>
                  </div>
                  <div className="flex h-full flex-1 flex-col justify-end">
                    <div className="bg-red-900 h-[30%] w-full"></div>
                    <div className="mt-2 text-center text-xs">Week 4</div>
                  </div>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <BarChart4 className="h-4 w-4 text-gray-400" />
                  <span>Total Incidents: 47</span>
                </div>
                <Button
                  variant="outline"
                  className="h-8 bg-red-950 text-white border-red-800 hover:bg-red-900 hover:text-white"
                >
                  View Full Report
                </Button>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>

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
