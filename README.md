# **K6 Demo Project**

This project demonstrates how to use K6, an open-source load testing tool, to perform performance testing for web applications. The project includes organized scripts and configurations to help you get started quickly.

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- **[K6](https://k6.io/)** - Open-source load testing tool.

For detailed instructions on how to install K6, please refer to the official **[K6 documentation](https://k6.io/docs/get-started/installation/)**.

## Project Structure

- **main.js** - entry point of the K6 test execution. It defines test configurations and scenarios.
- **common/utils.js** - utility functions used in test scripts.
- **config/test.json** - configuration file specifying test scenarios and their settings.
- **scenarios/** - directory containing individual test scenario scripts.
- **scripts/** - directory containing reusable HTTP request scripts.

## Writing Test Scripts

### Scenario Definitions

Each test scenario is defined in separate files under the `scenarios` directory. For example, `view_the_article.js` contains the `viewTheArticle` function, which navigates through the website and performs specific actions.

### Reusable HTTP Requests

HTTP request scripts, such as `navigate_to_blog_page.js`, are stored in the `scripts` directory. These scripts encapsulate individual HTTP requests and can be reused across different scenarios.

## Running Tests

To run the tests, execute the following command from the project directory:

```bash
k6 run main.js
```

This command runs the `main.js` file, which orchestrates the test scenarios specified in the `test.json` configuration.

## Viewing Results

After running the tests, K6 generates detailed reports about the test run, including response times, requests per second, and more. You can view this information in the console or export it to different formats for further analysis.

---
