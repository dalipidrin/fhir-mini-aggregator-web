import type { Code } from './Code';
import type { ValueQuantity } from './ValueQuantity'

/**
 * A model class representing an Observation.
 */
export interface Observation {
  resourceType: string;
  id: string;
  status: string;
  code: Code;
  subject: {
    reference: string;
  };
  effectiveDateTime: string;
  valueQuantity: ValueQuantity;
}
