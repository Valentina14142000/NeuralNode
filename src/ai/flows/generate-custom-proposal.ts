'use server';
/**
 * @fileOverview A Genkit flow for generating tailored project proposals.
 *
 * - generateCustomProposal - A function that handles the custom proposal generation process.
 * - GenerateCustomProposalInput - The input type for the generateCustomProposal function.
 * - GenerateCustomProposalOutput - The return type for the generateCustomProposal function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateCustomProposalInputSchema = z.object({
  jobDescription: z.string().describe('The detailed description of the job or project.'),
  freelancerProfile: z.object({
    skills: z.array(z.string()).describe('A list of the freelancer\u0027s key technical skills.'),
    workHistory: z.array(z.string()).describe('A summary of the freelancer\u0027s relevant past work experience.'),
    specializations: z.array(z.string()).describe('Specific areas of expertise, e.g., LLMs, RAG implementations, autonomous agents.'),
  }).describe('The freelancer\u0027s professional profile details.'),
});
export type GenerateCustomProposalInput = z.infer<typeof GenerateCustomProposalInputSchema>;

const GenerateCustomProposalOutputSchema = z.object({
  proposalTitle: z.string().describe('A concise and engaging title for the project proposal.'),
  introduction: z.string().describe('An introductory paragraph that highlights the freelancer\u0027s interest and immediate fit.'),
  understanding: z.string().describe('A section demonstrating the freelancer\u0027s understanding of the project needs and challenges.'),
  approach: z.string().describe('A description of the proposed methodology, tools, and steps to complete the project.'),
  relevantExperience: z.string().describe('A section detailing specific past experiences that are highly relevant to this project.'),
  callToAction: z.string().describe('A concluding statement or call to action, encouraging the client to proceed with discussions.'),
});
export type GenerateCustomProposalOutput = z.infer<typeof GenerateCustomProposalOutputSchema>;

export async function generateCustomProposal(input: GenerateCustomProposalInput): Promise<GenerateCustomProposalOutput> {
  return generateCustomProposalFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateCustomProposalPrompt',
  input: {schema: GenerateCustomProposalInputSchema},
  output: {schema: GenerateCustomProposalOutputSchema},
  prompt: `You are an expert proposal writer specializing in AI and tech projects. Your goal is to create a highly tailored and compelling project proposal for a freelancer based on a given job description and the freelancer's profile.

Craft a professional, persuasive proposal that demonstrates a deep understanding of the client's needs and highlights how the freelancer's specific skills and experience make them the ideal candidate. The tone should be confident, professional, and client-focused.

--- Job Description ---
{{{jobDescription}}}

--- Freelancer Profile ---
Skills: {{#each freelancerProfile.skills}}- {{{this}}}\n{{/each}}
Work History: {{#each freelancerProfile.workHistory}}- {{{this}}}\n{{/each}}
Specializations: {{#each freelancerProfile.specializations}}- {{{this}}}\n{{/each}}

Generate the proposal in JSON format, adhering to the specified output schema. Focus on connecting the freelancer's capabilities directly to the requirements and benefits outlined in the job description.`,
});

const generateCustomProposalFlow = ai.defineFlow(
  {
    name: 'generateCustomProposalFlow',
    inputSchema: GenerateCustomProposalInputSchema,
    outputSchema: GenerateCustomProposalOutputSchema,
  },
  async (input) => {
    const {output} = await prompt(input);
    if (!output) {
      throw new Error('Failed to generate proposal output.');
    }
    return output;
  }
);
