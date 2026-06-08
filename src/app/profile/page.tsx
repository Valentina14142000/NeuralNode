import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Github, Globe, Linkedin, MessageSquare, BrainCircuit, ShieldCheck, Cpu, Code2 } from "lucide-react";

export default function ProfilePage() {
  const profile = {
    name: "Alex L. Engineer",
    title: "Senior AI Solutions Architect",
    bio: "Specializing in multi-agent systems and large-scale RAG deployments. Expert in fine-tuning Llama-3 and optimizing inference pipelines for production environments.",
    skills: ["PyTorch", "LangChain", "OpenAI API", "Vector Databases", "TypeScript", "Python"],
    badges: ["Prompt Engineering Expert", "LLM Fine-tuner", "Verified Tier 1"],
    specializations: [
      { name: "Autonomous Agents", icon: Cpu, desc: "Building self-correcting agent loops with recursive reasoning." },
      { name: "RAG Systems", icon: BrainCircuit, desc: "High-precision document retrieval using hybrid search." },
      { name: "Code LLMs", icon: Code2, desc: "Specialized tuning for proprietary enterprise codebases." }
    ]
  };

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      {/* Profile Header */}
      <div className="relative rounded-3xl overflow-hidden bg-card border border-border/50">
        <div className="h-32 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/10" />
        <div className="px-8 pb-8 flex flex-col md:flex-row md:items-end md:gap-8 -mt-12">
          <div className="h-32 w-32 rounded-3xl bg-card border-4 border-background flex items-center justify-center overflow-hidden shadow-2xl relative">
             <img src="https://picsum.photos/seed/freelancer1/200/200" alt="Avatar" className="object-cover w-full h-full" />
             <div className="absolute bottom-1 right-1 h-6 w-6 bg-emerald-500 rounded-full border-4 border-background" />
          </div>
          <div className="flex-1 mt-6 md:mt-0 space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <h1 className="text-3xl font-headline font-bold">{profile.name}</h1>
              <Badge className="bg-primary/20 text-primary border-primary/30">Verified Node</Badge>
            </div>
            <p className="text-xl text-muted-foreground">{profile.title}</p>
            <div className="flex flex-wrap gap-4 text-sm">
              <span className="flex items-center text-muted-foreground"><Globe className="h-4 w-4 mr-1 text-primary" /> SF, Remote</span>
              <span className="flex items-center text-muted-foreground"><MessageSquare className="h-4 w-4 mr-1 text-primary" /> Fluent English, German</span>
            </div>
          </div>
          <div className="flex gap-2 mt-6 md:mt-0">
            <Button variant="outline" size="icon" className="rounded-xl border-border/50"><Github className="h-4 w-4" /></Button>
            <Button variant="outline" size="icon" className="rounded-xl border-border/50"><Linkedin className="h-4 w-4" /></Button>
            <Button className="bg-primary hover:bg-primary/90 px-6 font-bold">Hire Agent</Button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="space-y-8">
          <Card className="bg-card border-border/50">
            <CardHeader>
              <CardTitle className="text-lg font-headline">Neural Badges</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {profile.badges.map(badge => (
                <div key={badge} className="flex items-center p-3 rounded-xl bg-secondary/30 border border-white/5 group hover:border-primary/50 transition-colors">
                  <ShieldCheck className="h-5 w-5 text-primary mr-3" />
                  <span className="text-sm font-bold">{badge}</span>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="bg-card border-border/50">
            <CardHeader>
              <CardTitle className="text-lg font-headline">Skill Nodes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {profile.skills.map(skill => (
                  <Badge key={skill} variant="secondary" className="bg-background border-border/50 px-3 py-1">{skill}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-2 space-y-8">
          <Card className="bg-card border-border/50">
            <CardHeader>
              <CardTitle className="text-lg font-headline">Project Legacy (Bio)</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed italic border-l-4 border-primary/30 pl-6 py-2">
                "{profile.bio}"
              </p>
            </CardContent>
          </Card>

          <div className="space-y-4">
            <h3 className="text-xl font-headline font-bold">Specializations</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {profile.specializations.map(spec => (
                <Card key={spec.name} className="bg-card border-border/50 hover:border-accent/50 transition-all cursor-default">
                  <CardHeader className="pb-2">
                    <spec.icon className="h-8 w-8 text-accent mb-2" />
                    <CardTitle className="text-md font-headline font-bold">{spec.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-xs text-muted-foreground">{spec.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <Card className="bg-card border-border/50">
            <CardHeader>
              <CardTitle className="text-lg font-headline">Verification Log</CardTitle>
              <CardDescription>Real-time technical assessment records.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
               <div className="flex items-center justify-between p-4 rounded-xl bg-black/20 border border-white/5">
                  <div className="flex items-center">
                    <Github className="h-5 w-5 text-muted-foreground mr-3" />
                    <div>
                      <p className="text-sm font-bold">Repo: agentic-framework-v3</p>
                      <p className="text-[10px] text-muted-foreground">Scanned 2 weeks ago • A++ Reliability</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="text-xs text-primary">View Report</Button>
               </div>
               <div className="flex items-center justify-between p-4 rounded-xl bg-black/20 border border-white/5">
                  <div className="flex items-center">
                    <Cpu className="h-5 w-5 text-muted-foreground mr-3" />
                    <div>
                      <p className="text-sm font-bold">Assessment: LLM Reasoning</p>
                      <p className="text-[10px] text-muted-foreground">Completed June 12 • Score: 98/100</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="text-xs text-primary">View Report</Button>
               </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
