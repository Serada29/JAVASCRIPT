# Skill: `/quiz`

## Overview
Generates rapid, 3-question active recall quizzes targeting the user's current level or specified topic.

## Trigger
- `/quiz`
- `/quiz <topic>`

## Procedures
1. Identify the topic from command argument or latest completed lesson in `PROGRESS.md`.
2. Present 3 questions:
   - Question 1: Core concept / "Why" question
   - Question 2: Code tracing / prediction question
   - Question 3: Error diagnosis / edge case question
3. Evaluate user responses without giving away answers upfront.
4. Log misconceptions in `MISCONCEPTIONS.md` if detected.

