# Gemini CLI Project (DeepLearning.AI)

A starter project based on the DeepLearning.AI Gemini CLI course.

## Overview
This repository is the working project space for experiments, prompts, and workflows built with the Gemini CLI.

## Supporting Repo
Course resources, prompts, and final examples live here:
https://github.com/https-deeplearning-ai/sc-gemini-cli-files

## Gemini CLI: Code & Create with an Open-Source Agent
This repository contains resources for the DeepLearning.AI short course on Gemini CLI.

### Course Overview
The course teaches Gemini CLI best practices with practical examples:

- Conference planning: research & design (Lessons 3-6)
- Conference planning: implementation (Lessons 7-9)
- Bonus use case: Studying course materials (Lesson 10)

### Course Structure
- Lesson 1: Introduction
- Lesson 2: What is Gemini CLI?
- Lesson 3: A Tour of Gemini CLI
- Lesson 4: Context is Key: GEMINI.md
- Lesson 5: Workflows with Model Context Protocol (MCP)
- Lesson 6: Customization with Gemini CLI Extensions
- Lesson 7: Gemini CLI for Software Development
- Lesson 8: Gemini CLI for Data Analysis
- Lesson 9: Gemini CLI for Content Creation
- Lesson 10: Gemini CLI for Learning
- Lesson 11: Conclusion

## Getting Started
1. Clone the repository.
2. Install Node.js (LTS), then verify:

   ```zsh
   brew install node
   node -v
   ```

3. Install Gemini CLI:

   ```zsh
   npm install -g @google/gemini-cli
   ```

4. Start Gemini CLI:

   ```zsh
   gemini
   ```

5. Authenticate:
   - Choose “Login with Google”.
   - A browser opens for sign-in (use a personal account for free-tier).
   - After success, restart Gemini CLI when prompted.

6. Install the IDE companion inside Gemini CLI:

   ```text
   /ide install
   ```

7. If you see “VS Code CLI not found”, add `code` to PATH:
   - In VS Code: Command Palette → “Shell Command: Install 'code' command in PATH”.
   - Restart your terminal, then verify:

   ```zsh
   command -v code
   ```

8. Optional settings:
   - Preview features: `/settings` → Preview Features = true → TAB to apply
   - Model: `/model` → Auto (Gemini 3)
   - Help: `/help`
   - Hide footer: `/settings` → Hide Footer = true
   - Theme: `/theme`
   - Clear: `/clear`
   - Stats: `/stats`
   - Docs: `/docs`
   - Exit: `/exit`


9. Run the CLI according to your workflow.

## Project Structure
- `README.md` — Project overview and setup notes

## Supporting Repo Structure
- `starter_files/` — Initial starter files
- `final_files/` — Completed final files
- `prompts/` — Prompt templates and lesson prompts
- `materials/` — Course materials (Docs/Sheets/Canva)

## Course Link
```
https://www.deeplearning.ai/short-courses/gemini-cli-code-and-create-with-an-open-source-agent/
```

## License
TBD
