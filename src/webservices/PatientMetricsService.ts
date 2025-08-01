import axios from "axios";

// Base API URL
const BASE_URL = "http://127.0.0.1:8000";

// Hardcoded JWT token. Change the value with the token that you get from `/auth` endpoint.
const JWT_TOKEN = "HARDCODED_JWT_TOKEN";

/**
 * Fetches patient metrics from the backend API.
 * @param {string} patientId - The ID of the patient to fetch metrics for.
 * @returns {Promise<Object>} - Patient metrics JSON from the API.
 * @throws an error if the request fails.
 */
export async function fetchPatientMetrics(patientId: any) {
  try {
    const response = await axios.get(`${BASE_URL}/patients/${patientId}/metrics`, {
      headers: {
        Authorization: `Bearer ${JWT_TOKEN}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Failed to fetch patient metrics:", error.message);
    throw error;
  }
}
