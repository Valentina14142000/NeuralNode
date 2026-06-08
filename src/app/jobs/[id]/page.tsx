"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { BrainCircuit, Loader2, Sparkles, Send, CheckCircle2, DollarSign, Clock, Calendar } from "lucide-react";
import { generateCustomProposal, GenerateCustomProposalOutput } from "@/ai/flows/generate-custom-proposal";
import { useToast } from "@/hooks/use-toast";

export default function JobDetailPage() {
  const { id } = useParams();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [proposal, setProposal] = useState<GenerateCustomProposalOutput | null>(null);

  const mockJob = {
    id,
    title: "Develop Autonomous Coding Agent",
    description: "Looking for an expert to build an autonomous agent using GPT-4o that can analyze a codebase, suggest fixes, and commit code via GitHub API. The agent should be able to reason about multi-file dependencies and follow existing coding standards. We need a robust RAG system to help the agent navigate the large codebase (100k+ LOC).",
    budget: "$4,500 - $6,000",
    client: "AI Forge Labs",
    skills: ["Autonomous Agents", "GitHub API", "Node.js", "RAG", "LLM Reasoning"],
    postedDate: "Oct 24, 2024"
  };

  const freelancerProfile = {
    skills: ["TypeScript", "Python", "LLMs", "Vector DBs", "LangChain"],
    workHistory: ["Built a code-generation tool for a SaaS company", "Implemented RAG for a documentation site"],
    specializations: ["Autonomous Agents", "Code LLMs"]
  };

  async function handleGenerateProposal() {
    setLoading(true);
    try {
      const result = await generateCustomProposal({
        jobDescription: mockJob.description,
        freelancerProfile: freelancerProfile
      });
      setProposal(result);
      toast({
        title: "Proposal Generated",
        description: "AI has drafted a custom proposal for you.",
      });
    } catch (error) {
      toast({
        title: "Generation Failed",
        description: "Could not generate proposal. Please try again.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Column: Job Info */}
        <div className="flex-1 space-y-6">
          <Card className="bg-card border-border/50">
            <CardHeader>
              <div className="flex justify-between items-start mb-2">
                <Badge className="bg-accent/10 text-accent border-accent/20">Active Node</Badge>
                <span className="text-xs text-muted-foreground flex items-center"><Calendar className="h-3 w-3 mr-1" /> Posted {mockJob.postedDate}</span>
              </div>
              <CardTitle className="text-3xl font-headline font-bold">{mockJob.title}</CardTitle>
              <div className="flex items-center space-x-4 mt-2">
                <div className="flex items-center text-sm font-medium"><DollarSign className="h-4 w-4 text-emerald-500 mr-1" /> {mockJob.budget}</div>
                <div className="flex items-center text-sm text-muted-foreground"><Clock className="h-4 w-4 mr-1" /> 3-month duration</div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <h3 className="font-headline font-bold">About the project</h3>
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base">{mockJob.description}</p>
              </div>
              <Separator className="bg-border/50" />
              <div className="space-y-3">
                <h3 className="font-headline font-bold">Required Nodes (Skills)</h3>
                <div className="flex flex-wrap gap-2">
                  {mockJob.skills.map(skill => (
                    <Badge key={skill} variant="secondary" className="bg-primary/10 text-primary border-primary/20 px-3">{skill}</Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-border/50">
            <CardHeader>
              <CardTitle className="text-lg font-headline">Client Performance</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-3 gap-4 text-center">
              <div className="p-3 rounded-lg bg-secondary/30">
                <p className="text-xs text-muted-foreground">Rating</p>
                <p className="text-lg font-bold">4.9/5</p>
              </div>
              <div className="p-3 rounded-lg bg-secondary/30">
                <p className="text-xs text-muted-foreground">Hire Rate</p>
                <p className="text-lg font-bold">88%</p>
              </div>
              <div className="p-3 rounded-lg bg-secondary/30">
                <p className="text-xs text-muted-foreground">Total Spent</p>
                <p className="text-lg font-bold">$450k+</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column: Bidding Interface */}
        <div className="w-full md:w-[400px] space-y-6">
          <Card className="border-primary/30 shadow-lg shadow-primary/5 bg-background overflow-hidden relative">
            <div className="absolute top-0 right-0 p-2">
               <div className="h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
            </div>
            <CardHeader className="pb-4">
              <CardTitle className="text-xl font-headline flex items-center">
                <BrainCircuit className="h-5 w-5 text-primary mr-2" /> 
                AI Pitch Assistant
              </CardTitle>
              <CardDescription>Generate a tailored proposal instantly using your verified neural profile.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {!proposal ? (
                <Button 
                  onClick={handleGenerateProposal} 
                  disabled={loading}
                  className="w-full bg-primary hover:bg-primary/90 h-12 text-md font-semibold"
                >
                  {loading ? (
                    <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Analyzing Requirements...</>
                  ) : (
                    <><Sparkles className="mr-2 h-4 w-4" /> Generate AI Proposal</>
                  )}
                </Button>
              ) : (
                <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2">
                  <div className="p-4 rounded-lg bg-primary/5 border border-primary/20 space-y-3">
                    <h4 className="font-bold text-sm text-primary">{proposal.proposalTitle}</h4>
                    <p className="text-xs text-muted-foreground line-clamp-3 italic">"{proposal.introduction}"</p>
                  </div>
                  <Button variant="outline" className="w-full border-primary/50 text-primary" onClick={() => setProposal(null)}>
                    Start Over
                  </Button>
                </div>
              )}
              
              <div className="space-y-2">
                <Label htmlFor="bid-amount" className="text-xs">Your Bid Amount</Label>
                <div className="relative">
                  <span className="absolute left-3 top-2.5 text-muted-foreground">$</span>
                  <input 
                    id="bid-amount" 
                    type="number" 
                    placeholder="5000" 
                    className="w-full h-10 bg-secondary/50 border border-border rounded-md pl-7 text-sm focus:ring-2 focus:ring-primary outline-none" 
                  />
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex-col space-y-3 pt-0">
               <Button className="w-full bg-accent hover:bg-accent/90">
                 <Send className="h-4 w-4 mr-2" /> Submit Proposal
               </Button>
               <p className="text-[10px] text-center text-muted-foreground">
                 By submitting, funds will be secured in Neural Escrow upon hire.
               </p>
            </CardFooter>
          </Card>
        </div>
      </div>

      {proposal && (
        <Card className="border-border/50 bg-card max-w-4xl mx-auto animate-in fade-in zoom-in-95">
          <CardHeader className="border-b border-border/50">
            <CardTitle className="font-headline flex items-center">
              <CheckCircle2 className="h-5 w-5 text-emerald-500 mr-2" />
              Custom Draft Proposal
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8 space-y-8 prose prose-invert max-w-none">
            <section>
              <h3 className="text-primary font-bold">Introduction</h3>
              <p className="text-muted-foreground">{proposal.introduction}</p>
            </section>
            <section>
              <h3 className="text-primary font-bold">Understanding of the Nodes</h3>
              <p className="text-muted-foreground">{proposal.understanding}</p>
            </section>
            <section>
              <h3 className="text-primary font-bold">Strategic Approach</h3>
              <p className="text-muted-foreground">{proposal.approach}</p>
            </section>
            <section>
              <h3 className="text-primary font-bold">Neural Legacy (Experience)</h3>
              <p className="text-muted-foreground">{proposal.relevantExperience}</p>
            </section>
          </CardContent>
          <CardFooter className="justify-end p-6 border-t border-border/50">
             <Button variant="outline" className="mr-2">Copy to Clipboard</Button>
             <Button className="bg-primary">Use This Draft</Button>
          </CardFooter>
        </Card>
      )}
    </div>
  );
}
