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
