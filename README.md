A collection of mini backend utilities built using Node.js core modules (⁠ process ⁠, ⁠ http ⁠, ⁠ fs ⁠, ⁠ crypto ⁠) — no external packages used.

•⁠  ⁠*Course:* Web Dev III (Node.js & Express Backend)
•⁠  ⁠*Unit:* Unit-1
•⁠  ⁠*Assignment:* Lab Assignment 1

### 1. ⁠ calculator.js ⁠
CLI-based calculator using ⁠ process.argv ⁠.
Performs addition and subtraction based on command-line arguments.

*Usage:*
⁠ bash
node calculator.js add 5 3
node calculator.js sub 10 4
 ⁠

### 2. ⁠ modules/isEven.js ⁠ & ⁠ modules/logger.js ⁠
Custom reusable modules.
•⁠  ⁠⁠ isEven.js ⁠ — checks whether a number is even or odd.
•⁠  ⁠⁠ logger.js ⁠ — logs messages with timestamps.

### 3. ⁠ app.js ⁠
Imports and uses the custom modules (⁠ isEven ⁠, ⁠ logger ⁠) to demonstrate modular programming.

*Usage:*
⁠ bash
node app.js
 ⁠

### 4. ⁠ server.js ⁠
A basic HTTP server built using the ⁠ http ⁠ module.
Returns different responses on different routes.

*Usage:*
⁠ bash
node server.js
 

### 5. ⁠ fileManager.js ⁠
File management utility using the ⁠ fs ⁠ module.
Supports:
•⁠  ⁠Create file
•⁠  ⁠Read file
•⁠  ⁠Update file
•⁠  ⁠Delete file

*Usage:*
⁠ bash
node fileManager.js create test.txt
node fileManager.js read test.txt
node fileManager.js update test.txt "new content"
node fileManager.js delete test.txt
 ⁠

### 6. ⁠ dice.js ⁠
Random dice number generator (1–6) using the ⁠ crypto ⁠ module for secure randomness.

*Usage:*
⁠ bash
node dice.js
##  Requirements
•⁠  ⁠Node.js installed (v14+ recommended)
•⁠  ⁠No external npm packages required

## How to Run
⁠ bash
node <filename>.js
 ⁠
Run each file individually as per the usage instructions above.

##  Author
•⁠  ⁠Name: [Your Name]
•⁠  ⁠Roll No: [Your Roll No]
•⁠  ⁠Course: Web Dev III (Node.js & Express Backend)
## Project Structure
smart-utility-toolkit/
├── calculator.js
├── app.js
├── server.js
├── fileManager.js
├── dice.js
├── modules/
│   └── isEven.js