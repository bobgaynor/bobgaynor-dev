# bobgaynor.dev - Personal Portfolio

This repository contains the source code for my personal portfolio website, deployed and hosted on Firebase. The site showcases my skills and projects, with a focus on combining security expertise with machine learning.

**Live Site:** [https://bobgaynor.dev](https://bobgaynor.dev)

---

## Description

Combining security expertise with machine learning to reveal hidden threat patterns and move detection toward predictive intelligence.

---

## Technology Stack

*   **Frontend:** React with TypeScript
*   **Backend:** Firebase Cloud Functions
*   **Build Tool:** Vite
*   **Hosting:** Firebase Hosting
*   **AI Integration:** Google Gemini API
*   **Deployment:** Automated via GitHub Actions

---

## Local Development

To run this project locally, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/bobgaynor/bobgaynor-dev.git
    cd bobgaynor-dev
    ```

2.  **Install dependencies:**
    This project has two separate `package.json` files. You'll need to install dependencies for both the root directory (for the frontend) and the `functions` directory (for the backend).
    ```bash
    # Install frontend dependencies
    npm install

    # Install backend dependencies
    cd functions
    npm install
    cd ..
    ```

3.  **Set up environment variables:**
    You will need to set your Gemini API key as an environment variable for the Cloud Function. You can do this by running the following command in your terminal, replacing `your-api-key-here` with your actual Gemini API key:
    ```bash
    firebase functions:config:set gemini.key="your-api-key-here"
    ```
    You will also need to get the runtime configuration for your functions to be able to run the emulator.
    ```bash
    firebase functions:config:get > functions/.runtimeconfig.json
    ```

4.  **Run the development server:**
    It's recommended to use the Firebase emulator suite to run the frontend and backend locally.
    ```bash
    firebase emulators:start
    ```
    The site will be available at `http://localhost:4000`.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
