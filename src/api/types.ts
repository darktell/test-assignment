export interface CandidatesLevels {
  levels: string[];
}

export enum RESPONSE_STATUS {
  SUCCESS = "success",
  ERROR = "error",
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
  status: RESPONSE_STATUS;
  errors?: string[];
}
