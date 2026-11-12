# Skill: `/trace`

## Overview
Generates a code tracing challenge where the user must trace JavaScript execution line by line, predict variable values, and output without running code.

## Trigger
- `/trace`
- `/trace-code`

## Procedures
1. Generate a small calibrated code snippet based on the user's current level.
2. Instruct the user not to run the code yet.
3. Have the user write out the step-by-step execution order and the exact expected output.
4. Verify the mental model against how the V8 engine evaluates the instructions.

