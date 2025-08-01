# FHIR Mini Aggregator Web

FHIR Mini Aggregator React app that displays various health metrics for a given patient ID. It aggregates and visualizes patient-specific 
data fetched from [FHIR Mini Aggregator](https://github.com/dalipidrin/fhir-mini-aggregator).

## Getting Started

### Prerequisites

- Node.js
- npm or yarn package manager
- FHIR Mini Aggregator API should be running

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/dalipidrin/fhir-mini-aggregator-web
   cd fhir-mini-aggregator-web
   ```

2. Install dependencies:
   ```bash
   npm install
   ``` 

### Configuration

**Note:**  
The `PatientMetricsService` contains a hardcoded JWT token (`HARDCODED_JWT_TOKEN`). You **must** replace this token with the JWT token you 
receive from the `/auth` endpoint before running the app, to ensure authorized access to the metrics API.

Before fetching patient's metrics make sure to send an initial observation request to the `/observation` endpoint. This step is required to 
populate the in-memory data so that patient metrics can be retrieved successfully.


### Running the project

   ```bash
   npm run dev
   ```
