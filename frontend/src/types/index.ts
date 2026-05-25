// Shared types for the aiteam landing page
export interface Agent {
  role: string;
  name: string;
  responsibilities: string[];
}

export interface PipelineStep {
  step: number;
  title: string;
  description: string;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}
