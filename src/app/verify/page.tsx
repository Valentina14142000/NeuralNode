"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { 
  Github, 
  Terminal, 
  Loader2, 
  ShieldCheck, 
  Award, 
  BrainCircuit, 
  ExternalLink,
  ChevronRight
} from "lucide-react";
import { verifyFreelancerSkills, VerifyFreelancerSkillsOutput } from "@/ai/flows/verify-freelancer-skills";
import { useToast } from "@/hooks/use-toast";

export default function VerifyPage() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [githubUrl, setGithubUrl] = useState("");
  const [topic, setTopic] = useState("");
  const [result, setResult] = useState<VerifyFreelancerSkillsOutput | null>(null);

  async function handleVerify(type: "github" | "assessment") {
    setLoading(true);
    try {
      const data = await verifyFreelancerSkills({
        githubRepoUrl: type === "github" ? githubUrl : undefined,
        assessmentTopic: type === "assessment" ? topic : undefined
      });
      setResult(data);
      toast({
        title: "Verification Complete",
        description: "Your neural skills have been analyzed.",
      });
    } catch (error) {
      toast({
        title: "Analysis Failed",
        description: "Could not analyze the provided input.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-4xl mx-auto space-y-12 p-6 md:p-12">
      <div className="text-center space-y-4">
        <div className="inline-flex p-3 rounded-full bg-primary/10 border border-primary/20 mb-2">
          <ShieldCheck className="h-10 w-10 text-primary" />
        </div>
        <h1 className="text-4xl font-headline font-bold tracking-tight">Skill <span className="text-primary">Verification</span> Node</h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          NeuralNode uses LLMs to objectively verify your technical competence. 
          Gain badges and rank higher in job matching.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <Card className="bg-card border-border/50 relative overflow-hidden group">
           <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
           <CardHeader>
             <div className="p-2 w-fit rounded-lg bg-black/40 mb-2">
               <Github className="h-6 w-6 text-foreground" />
             </div>
             <CardTitle className="font-headline">GitHub Node Analysis</CardTitle>
             <CardDescription>Verify your skills by analyzing code quality and patterns in a public repository.</CardDescription>
           </CardHeader>
           <CardContent className="space-y-4">
             <div className="space-y-2">
               <Label htmlFor="repo-url" className="text-xs uppercase tracking-wider text-muted-foreground">Repository URL</Label>
               <Input 
                 id="repo-url" 
                 placeholder="https://github.com/username/ai-project" 
                 value={githubUrl}
                 onChange={(e) => setGithubUrl(e.target.value)}
                 className="bg-secondary/30 border-border/50 h-10"
               />
             </div>
           </CardContent>
           <CardFooter>
             <Button 
               onClick={() => handleVerify("github")} 
               disabled={loading || !githubUrl} 
               className="w-full bg-primary hover:bg-primary/90"
             >
               {loading ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : <ChevronRight className="h-4 w-4 mr-2" />} 
               Initiate Repo Scan
             </Button>
           </CardFooter>
        </Card>

        <Card className="bg-card border-border/50 relative overflow-hidden group">
           <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
           <CardHeader>
             <div className="p-2 w-fit rounded-lg bg-black/40 mb-2">
               <Terminal className="h-6 w-6 text-accent" />
             </div>
             <CardTitle className="font-headline">Technical Assessment</CardTitle>
             <CardDescription>Select a specialized topic for a time-boxed LLM-driven technical evaluation.</CardDescription>
           </CardHeader>
           <CardContent className="space-y-4">
             <div className="space-y-2">
               <Label htmlFor="topic" className="text-xs uppercase tracking-wider text-muted-foreground">Topic of Expertise</Label>
               <Input 
                 id="topic" 
                 placeholder="e.g. Prompt Engineering, RAG Architectures" 
                 value={topic}
                 onChange={(e) => setTopic(e.target.value)}
                 className="bg-secondary/30 border-border/50 h-10"
               />
             </div>
           </CardContent>
           <CardFooter>
             <Button 
               onClick={() => handleVerify("assessment")} 
               disabled={loading || !topic} 
               className="w-full bg-accent hover:bg-accent/90"
             >
               {loading ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : <Terminal className="h-4 w-4 mr-2" />} 
               Start Evaluation
             </Button>
           </CardFooter>
        </Card>
      </div>

      {result && (
        <Card className="border-primary/50 bg-primary/5 animate-in fade-in slide-in-from-bottom-4 shadow-2xl">
          <CardHeader className="border-b border-primary/20 pb-6">
            <div className="flex justify-between items-center">
              <CardTitle className="text-2xl font-headline flex items-center">
                <Award className="h-6 w-6 text-primary mr-2" />
                Verification Protocol Complete
              </CardTitle>
              <Badge className="bg-primary text-primary-foreground px-4 py-1">Tier 1 Verified</Badge>
            </div>
          </CardHeader>
          <CardContent className="p-8 space-y-8">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-widest text-primary mb-4">Neural Badges Earned</h3>
                  <div className="flex flex-wrap gap-3">
                    {result.badges.map(badge => (
                      <div key={badge} className="flex items-center bg-card border border-primary/30 rounded-full px-4 py-2 text-sm font-bold animate-in zoom-in shadow-lg">
                        <BrainCircuit className="h-4 w-4 text-primary mr-2" />
                        {badge}
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-widest text-primary mb-4">Verified Skill Map</h3>
                  <div className="flex flex-wrap gap-2">
                    {result.verifiedSkills.map(skill => (
                      <Badge key={skill} variant="secondary" className="bg-secondary/50 text-foreground border-border/50">{skill}</Badge>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-6 bg-black/20 p-6 rounded-2xl border border-white/5">
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-widest text-accent mb-2">Neural Summary</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{result.summary}</p>
                </div>
                {result.assessmentFeedback && (
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-widest text-accent mb-2">Assessment Feedback</h3>
                    <p className="text-xs text-muted-foreground/80 leading-relaxed italic">{result.assessmentFeedback}</p>
                  </div>
                )}
              </div>
            </div>
          </CardContent>
          <CardFooter className="justify-center border-t border-primary/20 pt-6">
             <Button className="bg-primary hover:bg-primary/90 text-white font-bold px-8">
               Sync to Profile Node
             </Button>
          </CardFooter>
        </Card>
      )}
    </div>
  );
}
