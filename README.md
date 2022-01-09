# GenTeamPro

## Description

A command-line application that takes in information about a software engineering team and generates an HTML webpage with a summary for each person.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Tests](#tests)
- [License](#license)

## Installation

1. If you don't already have it, download and install the latest version of [Node](https://nodejs.org/en/).
1. Download the source code or clone it to your local machine.
1. Navigate to the root of the downloaded code.
1. Open a command line at that location and type `npm install`.

Now you're ready to move on to using the app!

## Usage

Follow these steps or watch the walkthrough video below.

1. In the root directory of the downloaded code, type `npm start`.
2. Answer the prompts by typing the respective information into the command line.
3. Once you've added all your team members, select `I'm done` when prompted.
4. The HTML page along with it's stylesheet, `styles.css`, can be found in the `dist` folder.
5. Open the HTML page with your browser to view the results.

### Walkthrough Video

[![a walkthrough for the application](./assets/images/walkthrough/walkthrough_First_Frame.png)](./assets/images/walkthrough/walkthrough.html)

## Tests

Several tests and tests suites are included in this application. To run them, follow the [installation instructions](#installation) above, then in the command line, type `npm test`.

The following tests are available:

- Employee
  - constructor
    - ✓ should create an Employee object
  - getName
    - ✓ shuould return the Employee object's name
  - getId
    - ✓ should return the Employee object's ID
  - getEmail
    - ✓ should return the Employee object's email
- Manager
  - constructor
    - ✓ should create a Manager object
  - getOfficeNumber
    - ✓ should return 405
  - getRole
    - ✓ should return "Manager"
- Engineer
  - constructor
    - ✓ should create an Engineer object
  - getGitHub
    - ✓ should return "thomasAndFriends"
  - getRole
    - ✓ should return "Engineer"
- Intern
  - constructor
    - ✓ should create an Intern object
  - getSchool
    - ✓ should return "Creme University"
  - getRole
    - ✓ should return "Intern"

## License

[![License MIT](https://img.shields.io/badge/license-MIT-informational)](https://choosealicense.com/licenses/mit/)

Copyright (c) 2022 Jake Pasternak

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
