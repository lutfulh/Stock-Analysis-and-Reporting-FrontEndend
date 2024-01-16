# Stock Analysis Tool

This project is a React-based frontend application for analyzing stock performance using a custom-built API. It fetches financial data for specified stocks, calculates simple returns, and generates insightful stock performance analyses.

## Features

- **Stock Symbol Translation**: Translates company names to their stock symbols.
- **Financial Data Fetching**: Retrieves financial data for stocks using an API.
- **Return Calculation**: Calculates the simple return of a stock over a given period.
- **Automated Analysis**: Generates a natural language analysis of stock performance.
- **User-Friendly Interface**: Provides a simple and intuitive UI for interacting with the service.

## How It Works

1. **Symbol Resolution**: Users can query the application with a company name. The application translates this into the corresponding stock symbol.
2. **Data Retrieval**: It then fetches the financial data for the specified stock symbol.
3. **Analysis Preparation**: The application processes this data to calculate the simple return and prepares a prompt for analysis.
4. **Display Results**: Using the frontend interface, users can view detailed analysis reports based on the stock's performance.

## Technologies Used

- React
- Material-UI
- Vite
- Axios

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

This project uses npm as a package manager. If you haven't installed it yet, follow these [instructions](https://www.npmjs.com/get-npm).

### Installation

1. Clone the repository:

   git clone https://github.com/lutfulh/Stock-Analysis-and-Reporting-FrontEndend.git

   cd your-repo-name

   npm install

   npm run dev

### Environment Variables

VITE_API_ENDPOINT=your_api_endpoint_here

### Final Result 

## Final Result

Here's what the Stock Analysis Tool looks like after performing an analysis:


### License

Distributed under the MIT License. See LICENSE for more information.