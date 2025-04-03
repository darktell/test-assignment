import { apiFetch, BASE_URL } from "@/api/apiFetch";
import {
  AssignmentBody,
  AssignmentResponse,
  CandidatesLevels,
} from "@/api/types";

class Candidates {
  async fetchLevels(): Promise<CandidatesLevels> {
    const data = await apiFetch<CandidatesLevels, undefined>(
      `${BASE_URL}/levels`,
      {
        method: "GET",
      },
    );

    return data;
  }

  async sendAssignment(body: AssignmentBody): Promise<AssignmentResponse> {
    const data = await apiFetch<AssignmentResponse, AssignmentBody>(
      `${BASE_URL}/assignments`,
      {
        method: "POST",
        body,
      },
    );

    return data;
  }
}

export const candidatesApi = new Candidates();
