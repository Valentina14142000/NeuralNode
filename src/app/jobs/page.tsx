import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Search, Filter, Sparkles, MapPin, Briefcase, Clock, DollarSign } from "lucide-react";
import Link from "next/link";

export default function JobsPage() {
  const jobs = [
    {
      id: "1",
      title: "Develop Autonomous Coding Agent",
      description: "Looking for an expert to build an autonomous agent using GPT-4o that can analyze a codebase, suggest fixes, and commit code via GitHub API.",
      budget: "$4,500 - $6,000",
      tags: ["Autonomous Agents", "GitHub API", "Node.js"],
      posted: "3h ago",
      bids: 12
    },
    {
      id: "2",
      title: "Legal Document RAG Implementation",
      description: "Scale our vector database and implement a high-precision RAG pipeline for over 100k legal contracts. High importance on retrieval accuracy.",
      budget: "$8,000 - $12,000",
      tags: ["RAG", "Pinecone", "Python"],
      posted: "5h ago",
      bids: 8
    },
    {
      id: "3",
      title: "Real-time AI Voice Assistant",
      description: "Build a low-latency voice assistant for a customer support application using Whisper for STT and ElevenLabs for TTS.",
      budget: "$3,000 - $4,000",
      tags: ["Whisper", "TTS", "Streaming"],
      posted: "12h ago",
      bids: 24
    }
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-8 p-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="space-y-2">
          <h1 className="text-3xl font-headline font-bold">Project Node Board</h1>
          <p className="text-muted-foreground">Identify high-value AI contracts currently seeking verified talent.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="h-10">
            <Filter className="h-4 w-4 mr-2" /> Filter
          </Button>
          <Link href="/dashboard">
            <Button className="h-10">Post a Job</Button>
          </Link>
        </div>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
        <Input placeholder="Search for 'RAG', 'Prompt Engineering', 'LLM'..." className="pl-10 h-12 bg-card border-border/50 text-lg" />
      </div>

      <div className="grid gap-6">
        {jobs.map((job) => (
          <Card key={job.id} className="bg-card border-border/50 transition-all hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 group overflow-hidden">
            <div className="absolute top-0 right-0 p-4">
               <Badge className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
                 <Sparkles className="h-3 w-3 mr-1" /> Verified Client
               </Badge>
            </div>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <CardTitle className="text-xl font-headline group-hover:text-primary transition-colors">
                    <Link href={`/jobs/${job.id}`}>{job.title}</Link>
                  </CardTitle>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <span className="flex items-center"><DollarSign className="h-4 w-4 mr-1 text-emerald-500" /> {job.budget}</span>
                    <span className="flex items-center"><Briefcase className="h-4 w-4 mr-1" /> {job.bids} Bids</span>
                    <span className="flex items-center"><Clock className="h-4 w-4 mr-1" /> {job.posted}</span>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground line-clamp-2 mb-4">{job.description}</p>
              <div className="flex flex-wrap gap-2">
                {job.tags.map(tag => (
                  <Badge key={tag} variant="secondary" className="font-normal border-border/50">{tag}</Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="bg-secondary/20 border-t border-border/50 py-3 flex justify-between">
              <span className="text-xs text-muted-foreground flex items-center">
                <MapPin className="h-3 w-3 mr-1" /> Global Remote
              </span>
              <Link href={`/jobs/${job.id}`}>
                <Button size="sm" className="bg-accent hover:bg-accent/90">View Project Details</Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
