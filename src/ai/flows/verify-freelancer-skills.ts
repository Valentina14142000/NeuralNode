'use server';
/**
 * @fileOverview A Genkit flow for verifying freelancer skills, either by analyzing GitHub repositories
 * or by conducting LLM-powered technical assessments.
 *
 * - verifyFreelancerSkills - A function that handles the skill verification process.
 * - VerifyFreelancerSkillsInput - The input type for the verifyFreelancerSkills function.
 * - VerifyFreelancerSkillsOutput - The return type for the verifyFreelancerSkills function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

// Input Schema
const VerifyFreelancerSkillsInputSchema = z.object({
  githubRepoUrl: z.string().url().optional().describe('URL of the freelancer\'s GitHub repository to analyze.'),
  assessmentTopic: z.string().optional().describe('Topic for a technical assessment if no GitHub repository is provided.'),
});
export type VerifyFreelancerSkillsInput = z.infer<typeof VerifyFreelancerSkillsInputSchema>;

// Output Schema
const VerifyFreelancerSkillsOutputSchema = z.object({
  verifiedSkills: z.array(z.string()).describe('List of skills verified by the system.'),
  badges: z.array(z.string()).describe('List of skill badges earned based on verification.'),
  assessmentFeedback: z.string().optional().describe('Detailed feedback from the technical assessment, if conducted or simulated.'),
  summary: z.string().describe('A summary of the verification process and its outcome.'),
});
export type VerifyFreelancerSkillsOutput = z.infer<typeof VerifyFreelancerSkillsOutputSchema>;

// Tool Definition (mocked implementation for now)
const fetchGithubRepoSummary = ai.defineTool(
  {
    name: 'fetchGithubRepoSummary',
    description: 'Fetches a summary of the content of a GitHub repository (e.g., README, file structure, key technologies).',
    inputSchema: z.object({
      repoUrl: z.string().url().describe('The URL of the GitHub repository.'),
    }),
    outputSchema: z.string().describe('A summarized overview of the repository\'s content and potential tech stack.'),
  },
  async (input) => {
    // In a real application, this function would interact with the GitHub API
    // or a specialized service to fetch and summarize repository content.
    // For this example, we provide a mock summary based on the URL.
    if (input.repoUrl.includes('machine-learning') || input.repoUrl.includes('ai-algorithms')) {
      return `Repository at ${input.repoUrl} contains implementations of machine learning models, neural networks, and AI algorithms using Python and TensorFlow/PyTorch.`;
    } else if (input.repoUrl.includes('prompt-engineering') || input.repoUrl.includes('genai-apps')) {
        return `Repository at ${input.repoUrl} focuses on prompt engineering, GenAI application development, and LLM integration, likely using Python/JavaScript.`;
    } else if (input.repoUrl.includes('automation-scripts')) {
        return `Repository at ${input.repoUrl} features automation scripts and tools, potentially involving RPA or script-based task automation.`;
    }
    return `Repository at ${input.repoUrl} appears to be a general software development project. No specific AI-related content identified in the mock summary.`;
  }
);


// Prompt Definition
const skillVerificationPrompt = ai.definePrompt({
  name: 'skillVerificationPrompt',
  input: {schema: VerifyFreelancerSkillsInputSchema},
  output: {schema: VerifyFreelancerSkillsOutputSchema},
  tools: [fetchGithubRepoSummary], // Make the tool available to the prompt
  prompt: `You are an AI skill verification agent for a freelancer marketplace named NeuralNode. Your goal is to identify and verify AI-related skills and assign appropriate badges based on the provided input. You should always strive to identify relevant skills and award badges if sufficient evidence or a topic is provided.\n\nOutput the verified skills as a list of strings, a list of badges earned (e.g., "Prompt Engineering Expert", "ML Practitioner"), detailed assessment feedback (if an assessment was performed or if clarification is needed), and an overall summary of the verification process and its outcome.\n\n---\nUser Input for Skill Verification:\n\n{{#if githubRepoUrl}}\n  The freelancer has provided a GitHub repository URL: {{{githubRepoUrl}}}.\n  You MUST use the 'fetchGithubRepoSummary' tool to obtain a summary of its contents.\n  Then, analyze this summary carefully to identify and verify the AI-related technical skills demonstrated in the repository. Assign relevant badges based on the identified skills. Ensure the identified skills and badges directly relate to the content of the repository summary.\n\n  {{#tool_code 'fetchGithubRepoSummary' repoUrl=githubRepoUrl}}\n    {{#tool_code_result}}\n      Repository Content Summary:\n      ```\n      {{{this}}}\n      ```\n      Based on this summary, identify specific AI/ML/Automation skills and relevant badges.\n    {{/tool_code_result}}\n  {{/tool_code}}\n\n{{else if assessmentTopic}}\n  The freelancer has requested a technical assessment on the topic: "{{{assessmentTopic}}}".\n  Based on this topic, provide a concise and direct assessment of hypothetical skills a freelancer would demonstrate for this area. Assume the freelancer has a solid understanding of fundamental concepts but may lack expertise in highly specialized or advanced sub-topics within "{{{assessmentTopic}}}".\n  Formulate "assessmentFeedback" that highlights strengths and areas for growth within the context of "{{{assessmentTopic}}}". Identify and list the verified skills and assign appropriate badges (e.g., "Foundational AI", "Intermediate ML") based on this hypothetical assessment.\n\n{{else}}\n  No specific verification method was provided. You must instruct the user to provide either a GitHub repository URL or an assessment topic to proceed with skill verification.\n  In this case, the 'verifiedSkills' and 'badges' arrays should be empty, 'assessmentFeedback' should clearly state that input is missing, and the 'summary' should explain that verification could not proceed without proper input.\n\n{{/if}}\n---\nExpected Output Format (JSON):\n{\n  "verifiedSkills": ["skill1", "skill2"],\n  "badges": ["Badge Name 1", "Badge Name 2"],\n  "assessmentFeedback": "Detailed feedback if an assessment was conducted or simulated, or instructions for missing input.",\n  "summary": "Overall summary of the verification process and its outcome."\n}\n`,
});

// Flow Definition
const verifyFreelancerSkillsFlow = ai.defineFlow(
  {
    name: 'verifyFreelancerSkillsFlow',
    inputSchema: VerifyFreelancerSkillsInputSchema,
    outputSchema: VerifyFreelancerSkillsOutputSchema,
  },
  async (input) => {
    // The prompt template and tool definition will handle the conditional logic
    // based on whether githubRepoUrl or assessmentTopic is present.
    const {output} = await skillVerificationPrompt(input);
    return output!;
  }
);

// Wrapper function for external calls
export async function verifyFreelancerSkills(input: VerifyFreelancerSkillsInput): Promise<VerifyFreelancerSkillsOutput> {
  return verifyFreelancerSkillsFlow(input);
}
