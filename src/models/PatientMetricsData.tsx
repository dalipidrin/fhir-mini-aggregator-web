import type { Observation } from "./Observation";

/**
 * A model class representing patient metrics data.
 */
export interface PatientMetricsData {
  patientId: string;
  observationCount: number;
  latest: Observation;
  averageByCode: Record<string, number>;
}

