export interface CandidatesLevels {
  levels: string[];
}

export interface AssignmentBody {
  name: string;
  email: string;
  assignment_description: string;
  github_repo_url: string;
  candidate_level: string;
}

export interface AssignmentResponse {
  message: string;
  errors?: string[];
}
