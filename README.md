# 🚀 Project Name: Personalized Multi-Agent Education Mentor

## 🌟 Overview

The **Personalized Multi-Agent Education Mentor** is a cutting-edge platform designed to revolutionize competitive exam preparation (e.g., CBSE, SSC, JEE/JEE Advance) using the Google Agent Development Kit (ADK). This project leverages a sophisticated **multi-agent system** to provide a personalized, adaptive, and structured learning experience that mimics a dedicated human mentor.

The core deliverable is a barebones, scalable web application focused on **structured syllabus mastery and progress tracking** via tool-enabled agents.

## 🎯 Problem Statement

Competitive exam preparation is often generic, rigid, and lacks personalized feedback on micro-topics. Students need a dynamic system that can:
1.  Visually map complex syllabi to foundational concepts (Mind Map).
2.  Provide continuous assessment and calculate granular mastery scores.
3.  Track incremental progress across various subject areas.

## 🧠 Multi-Agent Architecture (The Core)

Our solution uses a hierarchy of specialized agents managed by a **Superior Agent** (The Mentor).

| Agent Role | Primary Responsibility | Key Tools Used |
| :--- | :--- | :--- |
| **Superior Agent (The Mentor)** | **Orchestration & State Management.** Receives user goal, dispatches tasks, and maintains the student's global learning state (progress, grades, next steps). | **Session Service** (for state persistence), **Progress Tracker Tool**. |
| **Subject Agent (The Expert)** | **Domain Knowledge & Assessment.** Generates structured content and custom quizzes based on subject expertise and difficulty level. | **Mind Map Generator Tool**, **Quiz Generation Tool**, **Grade Calculator Tool**. |
| **Content Agent (The Producer)** | *[Stretch Goal]* Generates multimedia content for specific topics. | **Video Generation Tool**, **Text-to-Speech (TTS) Tool**. |

## 🛠️ Key Barebones Features & Tools

The capstone's core implementation will focus on the following features and the custom tools that enable them:

### 1. Structured Mind Map Generation
* **Mechanism:** The **Mind Map Generator Tool** reads a structured syllabus source (e.g., JSON/YAML data) to create a visual hierarchy of topics, sub-topics, and foundational prerequisites for any given chapter.
* **Value:** Helps students visualize required groundwork and conceptual connections.

### 2. Incremental Assessment & Grading
* **Mechanism:** The **Quiz Generation Tool** creates targeted practice problems based on current student mastery and difficulty (e.g., "JEE Level 2"). The **Grade Calculator Tool** processes the results and updates the mastery score.

### 3. Progress Tracking
* **Mechanism:** The **Progress Tracker Tool** updates the student's mastery score for specific concepts, stored and persisted via the **ADK Session Service**.

## ✨ Future Extensions (Scalability & Impact)

The architecture is designed to easily integrate powerful generative features, extending its functionality:

* **Multimedia Generation:** Automatically generate short, focused **byte-sized videos** or **audiobook summaries** for challenging topics on demand, utilizing services like Google's Video Generation APIs.
* **Admin/Curator Mode:** Allow course administrators to **version and lock** specific syllabus versions and content, ensuring quality control and consistency across all students.

## 📌 Capstone Relevance

This project directly addresses the core themes of the Agents Intensive Capstone by demonstrating:
* A functional **multi-agent system** leveraging communication and role specialization.
* Effective **tool use** for complex logic (grading, structured generation, state management).
* Integration with **asynchronous operations** (like the MCP toolset for external content).

---

## 💻 Technical Stack

This project is built around the modern asynchronous Python ecosystem, leveraging Google's AI infrastructure and specialized libraries to create a robust agent system.

| Component | Technology / Tool | Purpose in Project |
| :--- | :--- | :--- |
| **Agent Framework** | **Google Agent Development Kit (ADK)** | Core framework for agent definition, tool binding, and multi-agent orchestration. |
| **Agent LLM** | **Gemini API** (or other Google LLM) | Powers the agents' reasoning, planning, and content generation (e.g., generating quiz questions). |
| **Language** | **Python** (AsyncIO) | Primary development language, enabling efficient, non-blocking I/O operations for agent communication. |
| **Tool Communication** | **Model Context Protocol (MCP)** | Used for standardizing communication between the ADK agents and external tools (like the Mind Map Generator). |
| **Deployment & UI** | **FastAPI** / **Streamlit** (or similar) | Used to create the barebones web service API and a simple front-end interface for student interaction. |
| **State Persistence** | **ADK Session Service** (Cloud Firestore/Database) | Stores the student's progress, mastery scores, and chat history persistently across sessions. |
| **Data Storage** | **JSON/YAML** Files | Initial storage for structured syllabus data that the Mind Map Generator Tool reads. |

## 🗓️ Capstone Timeline & Milestones

This timeline outlines a phased approach, focusing on the core multi-agent and tool capabilities first, followed by integration and extension.

| Phase | Milestone | Focus / Deliverable | Capstone Relevance |
| :--- | :--- | :--- | :--- |
| **Phase 1: Foundation (30%)** | **Agent Setup & Tool Binding** | Define the **Superior Agent** and **Subject Agent** classes. Implement the **Grade Calculator Tool** (a simple function) and bind it to the Subject Agent. Establish basic chat session with state management via the Session Service. | Multi-Agent Architecture, ADK Setup. |
| **Phase 2: Core Functionality (40%)** | **Mind Mapping & Assessment Loop** | Implement the **Mind Map Generator Tool** to read syllabus data and output structured content. Implement the **Quiz Generation Tool** (LLM call). Demonstrate the Superior Agent dispatching a request that results in a quiz, grading, and a mastery score update. | Custom Tool Development, State Persistence. |
| **Phase 3: Integration & UI (20%)** | **Barebones Web App & Demo** | Implement the `run_session` runner and wrap the agent in a simple **FastAPI** endpoint. Create a basic front-end (e.g., Streamlit) to interact with the API, showcasing the mind map output and progress tracking. | Scalability & User Interface. |
| **Phase 4: Polish & Extension (10%)** | **Refinement & Extension Planning** | Final code cleanup, README completion, and documentation of the **Content Agent** and its planned **Video Generation Tool** (e.g., providing sample API calls and integration points). | Professionalism, Future Scalability. |
