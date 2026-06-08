import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrendingUp, Clock, DollarSign, Activity, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function DashboardPage() {
  const activeBids = [
    { id: 1, title: "RAG Pipeline Optimization", client: "CogniTech", amount: "$2,500", status: "Active", deadline: "2 days" },
    { id: 2, title: "LLM Fine-tuning for Law", client: "LexisAI", amount: "$5,000", status: "Shortlisted", deadline: "5 days" },
    { id: 3, title: "Voice Agent Deployment", client: "Verba", amount: "$1,800", status: "Reviewing", deadline: "Today" },
  ];

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-headline font-bold">Command Center</h1>
          <p className="text-muted-foreground">Neural performance and project overview.</p>
        </div>
        <Link href="/jobs">
          <Button className="bg-primary hover:bg-primary/90">Find New Nodes</Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="bg-card border-border/50">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-xs font-medium text-muted-foreground">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold font-headline">$12,450.00</div>
            <p className="text-xs text-muted-foreground">+20.1% from last month</p>
          </CardContent>
        </Card>
        <Card className="bg-card border-border/50">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-xs font-medium text-muted-foreground">Active Nodes</CardTitle>
            <Activity className="h-4 w-4 text-accent" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold font-headline">4</div>
            <p className="text-xs text-muted-foreground">Projects in execution</p>
          </CardContent>
        </Card>
        <Card className="bg-card border-border/50">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-xs font-medium text-muted-foreground">Success Rate</CardTitle>
            <TrendingUp className="h-4 w-4 text-emerald-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold font-headline">98%</div>
            <p className="text-xs text-muted-foreground">Top 1% of community</p>
          </CardContent>
        </Card>
        <Card className="bg-card border-border/50">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-xs font-medium text-muted-foreground">Pending Payouts</CardTitle>
            <Clock className="h-4 w-4 text-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold font-headline">$3,200.00</div>
            <p className="text-xs text-muted-foreground">Escrow release in 3 days</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Card className="lg:col-span-2 border-border/50">
          <CardHeader>
            <CardTitle className="text-xl font-headline">Active Project Bids</CardTitle>
            <CardDescription>Track your outgoing project proposals.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {activeBids.map((bid) => (
                <div key={bid.id} className="flex items-center justify-between p-4 rounded-xl border border-border bg-background/50 group transition-all hover:bg-primary/5 hover:border-primary/30">
                  <div className="space-y-1">
                    <p className="font-bold text-sm">{bid.title}</p>
                    <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                      <span>{bid.client}</span>
                      <span>•</span>
                      <span className="flex items-center"><Clock className="h-3 w-3 mr-1" /> {bid.deadline} left</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <p className="font-bold text-sm">{bid.amount}</p>
                      <Badge variant={bid.status === "Shortlisted" ? "default" : "secondary"} className={bid.status === "Shortlisted" ? "bg-accent" : ""}>
                        {bid.status}
                      </Badge>
                    </div>
                    <Button variant="ghost" size="icon" className="group-hover:text-primary">
                      <ArrowUpRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="border-border/50">
          <CardHeader>
            <CardTitle className="text-xl font-headline">Market Pulse</CardTitle>
            <CardDescription>Trending AI skills demand.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>RAG Systems</span>
                <span className="text-primary font-bold">+45%</span>
              </div>
              <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                <div className="h-full bg-primary w-[85%] rounded-full" />
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Agentic Workflows</span>
                <span className="text-accent font-bold">+32%</span>
              </div>
              <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                <div className="h-full bg-accent w-[60%] rounded-full" />
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Llama-3 Fine-tuning</span>
                <span className="text-emerald-500 font-bold">+28%</span>
              </div>
              <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                <div className="h-full bg-emerald-500 w-[45%] rounded-full" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
