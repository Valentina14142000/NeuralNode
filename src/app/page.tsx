import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { BrainCircuit, Cpu, Zap, ShieldCheck, ArrowRight, Network } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-16 flex items-center border-b border-border/50 sticky top-0 bg-background/80 backdrop-blur-md z-50">
        <Link className="flex items-center justify-center space-x-2" href="/">
          <Network className="h-6 w-6 text-primary" />
          <span className="font-headline font-bold text-xl tracking-tighter">NeuralNode</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:text-primary transition-colors" href="/jobs">
            Find Projects
          </Link>
          <Link className="text-sm font-medium hover:text-primary transition-colors" href="/verify">
            Skill Verification
          </Link>
          <Link href="/dashboard">
            <Button variant="outline" size="sm">Dashboard</Button>
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 px-4 overflow-hidden relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(121,102,226,0.15),transparent_70%)]" />
          <div className="container mx-auto relative z-10">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none max-w-4xl mx-auto">
                  The Command Center for <span className="text-primary glow-pulse rounded-lg px-2">AI Talent</span>
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl font-body">
                  Connect with elite Prompt Engineers, LLM Developers, and Automation Specialists. Scalable intelligence, verified by AI.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Link href="/jobs">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 h-12">
                    Browse Projects <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/verify">
                  <Button size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10 font-semibold px-8 h-12">
                    Verify Your Skills
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-20 bg-secondary/30 border-y border-border/50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center space-y-4 text-center p-6 rounded-xl bg-card border border-border/50 transition-all hover:border-primary/50 group">
                <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <BrainCircuit className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-headline font-bold">AI-Powered Proposals</h3>
                <p className="text-muted-foreground">Generate hyper-customized project pitches tailored to your specific work history and job requirements.</p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center p-6 rounded-xl bg-card border border-border/50 transition-all hover:border-primary/50 group">
                <div className="p-3 rounded-full bg-accent/10 group-hover:bg-accent/20 transition-colors">
                  <ShieldCheck className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-headline font-bold">Smart Verification</h3>
                <p className="text-muted-foreground">LLM-analyzed GitHub repos and time-boxed assessments ensure only the best talent enters the node.</p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center p-6 rounded-xl bg-card border border-border/50 transition-all hover:border-primary/50 group">
                <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Cpu className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-headline font-bold">Escrow Payments</h3>
                <p className="text-muted-foreground">Funds are held securely via Stripe Connect and released instantly upon project milestone approval.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-24 px-4 bg-background">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="flex-1 space-y-6">
                <h2 className="text-3xl md:text-5xl font-headline font-bold">Engineered for the <br/><span className="text-accent">AI Economy</span></h2>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <Zap className="h-6 w-6 text-primary shrink-0" />
                    <div>
                      <h4 className="font-bold text-lg">Real-time Bidding</h4>
                      <p className="text-muted-foreground">Dynamic marketplace interface for tracking project rates and active competition.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Zap className="h-6 w-6 text-primary shrink-0" />
                    <div>
                      <h4 className="font-bold text-lg">Expert Profiles</h4>
                      <p className="text-muted-foreground">Showcase RAG implementations, autonomous agents, and fine-tuning expertise.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 w-full max-w-lg aspect-video rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30 flex items-center justify-center p-4">
                 <div className="w-full h-full bg-card rounded-xl border border-border shadow-2xl flex flex-col p-4 space-y-3">
                    <div className="h-4 w-1/3 bg-muted rounded animate-pulse" />
                    <div className="h-8 w-2/3 bg-muted rounded animate-pulse" />
                    <div className="grid grid-cols-2 gap-4">
                      <div className="h-24 bg-muted/50 rounded animate-pulse" />
                      <div className="h-24 bg-muted/50 rounded animate-pulse" />
                    </div>
                    <div className="h-32 bg-primary/5 rounded border border-primary/20 animate-pulse" />
                 </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t border-border/50 py-6 px-4">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">© 2024 NeuralNode Systems. All data encrypted via neural sharding.</p>
          <div className="flex gap-4">
            <Link className="text-xs hover:text-primary" href="#">Terms</Link>
            <Link className="text-xs hover:text-primary" href="#">Privacy</Link>
            <Link className="text-xs hover:text-primary" href="#">Docs</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
