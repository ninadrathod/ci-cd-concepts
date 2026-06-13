// ─────────────────────────────────────────────────────────────────────────────
// CI/CD Concepts Tutorial — Interactive Quiz & UI Logic
// 100 MCQs distributed across 10 sections (10 per section)
// ─────────────────────────────────────────────────────────────────────────────

// ─── Quiz Data ───────────────────────────────────────────────────────────────

const quizData = {

  // ── Section 1: What is CI/CD? (Q1–Q10) ────────────────────────────────────
  intro: [
    {
      id: 1,
      question: 'What does "CI" stand for in the context of software development?',
      options: ['Compiled Interface', 'Continuous Integration', 'Continuous Inspection', 'Code Inspection'],
      answer: 'B. Continuous Integration',
      explanation: 'CI stands for Continuous Integration — the practice of frequently merging every developer\'s code changes into a shared repository. Each merge triggers an automated build and test run, catching conflicts and bugs immediately rather than months later when a large merge would be painful.'
    },
    {
      id: 2,
      question: 'What does "CD" stand for in CI/CD?',
      options: ['Continuous Development', 'Continuous Delivery or Continuous Deployment', 'Code Distribution', 'Compiled Distribution'],
      answer: 'B. Continuous Delivery or Continuous Deployment',
      explanation: 'CD stands for both Continuous Delivery and Continuous Deployment. Continuous Delivery means always keeping software in a deployable state, with a human deciding when to release. Continuous Deployment is more automated — every change that passes all tests is automatically released to production without human intervention.'
    },
    {
      id: 3,
      question: 'Which of the following best describes the primary goal of CI/CD?',
      options: [
        'To permanently eliminate all software bugs',
        'To replace human developers with automated robots',
        'To make software development more expensive and complex',
        'To automate and streamline the process of delivering software changes reliably and quickly'
      ],
      answer: 'D. To automate and streamline the process of delivering software changes reliably and quickly',
      explanation: 'The primary goal of CI/CD is to automate the software delivery process so that teams can ship changes reliably, safely, and frequently — often multiple times per day. It reduces manual effort, catches bugs early, and gives teams confidence in their releases.'
    },
    {
      id: 4,
      question: 'Which real-world analogy best describes a CI/CD pipeline?',
      options: [
        'A marketplace where software licenses are sold to customers',
        'A factory assembly line where raw materials are transformed into finished products through automated stations',
        'A classroom where students learn programming fundamentals',
        'A library where books are stored and catalogued'
      ],
      answer: 'B. A factory assembly line where raw materials are transformed into finished products through automated stations',
      explanation: 'A CI/CD pipeline is like a car factory assembly line. Code (raw material) enters one end and passes through automated stations — build, test, security scan, deploy — with defects caught at each station before they can compound. At the other end, a quality-assured, deployable application comes out. It is automated, consistent, and repeatable every time.'
    },
    {
      id: 5,
      question: 'CI/CD practices are a core component of which broader methodology?',
      options: ['DevOps', 'The Agile Manifesto principles', 'Test-Driven Development (TDD)', 'Waterfall development model'],
      answer: 'A. DevOps',
      explanation: 'CI/CD is a core practice of DevOps, the cultural and technical movement that bridges the traditional gap between development and operations teams. DevOps emphasizes collaboration, automation, continuous feedback, and shared responsibility for delivering and running software. CI/CD provides the automation backbone that makes DevOps practices possible.'
    },
    {
      id: 6,
      question: 'What famous developer pain point does CI/CD primarily help eliminate?',
      options: [
        'The "It works on my machine" syndrome — code that works locally but breaks in other environments or for other developers',
        'Unclear project requirements from stakeholders',
        'Slow internet connections when downloading packages',
        'Expensive hardware and cloud computing costs'
      ],
      answer: 'A. The "It works on my machine" syndrome — code that works locally but breaks in other environments or for other developers',
      explanation: 'One of CI/CD\'s biggest benefits is eliminating the "works on my machine" problem. By running every code change in a clean, consistent, automated environment (the CI runner), CI ensures code is built and tested under the same conditions every time — not just on one developer\'s specific laptop configuration.'
    },
    {
      id: 7,
      question: 'How does CI/CD typically affect a development team\'s ability to release software?',
      options: [
        'It requires software to be released only once per quarter',
        'It has no measurable effect on release frequency or speed',
        'It slows releases down significantly due to increased automation overhead',
        'It enables more frequent, smaller, and safer releases — sometimes multiple times per day'
      ],
      answer: 'D. It enables more frequent, smaller, and safer releases — sometimes multiple times per day',
      explanation: 'CI/CD enables teams to release much more frequently because the automation provides confidence that each change is safe to deploy. Instead of risky quarterly releases packed with months of changes, teams can ship small increments daily. Smaller releases mean smaller blast radius if something goes wrong, and faster delivery of value to users.'
    },
    {
      id: 8,
      question: 'Before CI/CD became common, what was a typical software integration process like for large teams?',
      options: [
        'Always done by a single designated developer to avoid conflicts',
        'Instant and effortless using early automation tools',
        'Painful and time-consuming — developers worked in isolation for weeks/months, then attempted to merge all code together in a chaotic event called "integration hell"',
        'Fully automated using punch cards and mainframe computers'
      ],
      answer: 'C. Painful and time-consuming — developers worked in isolation for weeks/months, then attempted to merge all code together in a chaotic event called "integration hell"',
      explanation: 'Before CI, developers would work in complete isolation for weeks or months on their own branches. When the release date arrived, everyone would try to merge their code together — a process that could take days or weeks to resolve due to massive, contradictory changes. This miserable experience was nicknamed "integration hell." CI solves this by integrating code continuously, making each merge tiny and manageable.'
    },
    {
      id: 9,
      question: 'A CI/CD "pipeline" is best described as:',
      options: [
        'A technical document that describes the software architecture',
        'A weekly meeting where developers manually review code changes',
        'A physical tube that carries data between servers in a data center',
        'A series of automated steps that code passes through, from commit to deployment'
      ],
      answer: 'D. A series of automated steps that code passes through, from commit to deployment',
      explanation: 'A CI/CD pipeline is a series of automated stages and jobs (e.g., build → lint → unit tests → integration tests → security scan → deploy to staging → deploy to production) that code flows through after every commit. Each step is a quality gate. If any step fails, the pipeline stops and the team is notified, preventing broken code from advancing further.'
    },
    {
      id: 10,
      question: 'Which of the following statements about CI/CD is FALSE?',
      options: [
        'CI/CD can significantly speed up software delivery',
        'CI/CD improves team confidence when deploying changes to production',
        'CI/CD completely eliminates the need for human code reviews',
        'CI/CD requires automated testing to be truly effective'
      ],
      answer: 'C. CI/CD completely eliminates the need for human code reviews',
      explanation: 'This statement is FALSE. CI/CD automates the build, test, and deployment process, but it does NOT eliminate the need for human code reviews (pull requests/merge requests). Code review by peers remains a critical practice for catching logic errors, sharing knowledge, enforcing coding standards, and mentoring team members — things automated tools cannot fully replicate.'
    },
  ],

  // ── Section 2: Version Control & Git (Q11–Q20) ────────────────────────────
  'version-control': [
    {
      id: 11,
      question: 'What is a version control system (VCS)?',
      options: [
        'A system for managing software licenses and version numbers',
        'An IDE plugin that helps developers write code faster',
        'A tool that tracks changes to code over time, allowing collaboration and the ability to revert to any previous state',
        'A calendar scheduling tool for planning software release dates'
      ],
      answer: 'C. A tool that tracks changes to code over time, allowing collaboration and the ability to revert to any previous state',
      explanation: 'A Version Control System (like Git) records every change made to code files: what changed, who changed it, and when. Multiple developers can work simultaneously, and you can always "time travel" back to any previous state of the code. Without VCS, CI/CD is impossible — the pipeline needs a source of truth to check code out from.'
    },
    {
      id: 12,
      question: 'In Git, what does the command `git init` do?',
      options: [
        'Downloads and installs Git on your computer',
        'Creates a new feature branch from the main branch',
        'Downloads a copy of a remote repository to your machine',
        'Creates a new empty Git repository in the current directory by creating a hidden .git folder'
      ],
      answer: 'D. Creates a new empty Git repository in the current directory by creating a hidden .git folder',
      explanation: '`git init` initializes a new Git repository in your current directory. It creates a hidden `.git` folder that stores all version history, configuration, and metadata for the project. After running `git init`, you can start committing files. This is the starting point for any new Git-managed project.'
    },
    {
      id: 13,
      question: 'What does the `git push` command do?',
      options: [
        'Uploads your local commits to the remote repository (e.g., GitHub), triggering CI/CD pipelines',
        'Downloads the latest changes from the remote repository',
        'Creates a new commit with all staged changes',
        'Merges two branches together on the local machine'
      ],
      answer: 'A. Uploads your local commits to the remote repository (e.g., GitHub), triggering CI/CD pipelines',
      explanation: '`git push` uploads your local commits to a remote repository (GitHub, GitLab, Bitbucket). This is the action that typically triggers CI/CD pipelines — when GitHub receives a push, it fires a webhook to your CI system, which then starts the automated build and test process. Always push to share your work and get CI feedback.'
    },
    {
      id: 14,
      question: 'What is a "branch" in Git?',
      options: [
        'A separate, isolated line of development that diverges from the main codebase without affecting it',
        'A network connection linking two different Git repositories together',
        'A tag that permanently marks a specific important version of the code',
        'A complete backup copy of your entire repository stored on a different server'
      ],
      answer: 'A. A separate, isolated line of development that diverges from the main codebase without affecting it',
      explanation: 'A branch is an independent line of development. You create a branch to work on a feature or fix a bug in complete isolation — your changes don\'t affect the main branch or other developers\' work until you deliberately merge. In CI/CD, each branch often has its own pipeline run, giving developers instant feedback on their isolated changes before merging.'
    },
    {
      id: 15,
      question: 'What is a "Pull Request" (GitHub) or "Merge Request" (GitLab)?',
      options: [
        'A Git command used to download code changes from a remote server',
        'A formal proposal to merge code from one branch into another, enabling code review, discussion, and CI checks before the merge',
        'A type of automated end-to-end test that runs against a live environment',
        'A request sent to the npm registry to pull all package dependencies'
      ],
      answer: 'B. A formal proposal to merge code from one branch into another, enabling code review, discussion, and CI checks before the merge',
      explanation: 'A Pull Request (PR) or Merge Request (MR) is the cornerstone of collaborative development. When you open a PR, it: (1) Shows exactly what changed, (2) Triggers CI pipeline to run all checks on your branch, (3) Enables team members to review, comment, and request changes, (4) Provides a discussion thread for the changes. Nothing merges to main until the PR is approved and CI is green.'
    },
    {
      id: 16,
      question: 'What is "trunk-based development"?',
      options: [
        'Storing code in a tree-like hierarchical data structure for better performance',
        'A branching strategy where all developers work on short-lived branches or commit directly to the main branch (trunk) very frequently — often multiple times per day',
        'A method of organizing code files in nested directory trees',
        'A database storage technique used by Git internally for efficiency'
      ],
      answer: 'B. A branching strategy where all developers work on short-lived branches or commit directly to the main branch (trunk) very frequently — often multiple times per day',
      explanation: 'Trunk-based development (TBD) is the branching strategy most compatible with true CI/CD. Developers either commit directly to main or use very short-lived feature branches (hours to 1-2 days max). This avoids the divergence that causes integration problems. Feature flags are often used alongside TBD to deploy incomplete features safely. Elite DevOps teams typically practice TBD.'
    },
    {
      id: 17,
      question: 'What is a "merge conflict" in Git?',
      options: [
        'A professional disagreement between two developers about code style or architecture',
        'An error that occurs when trying to connect to an unavailable remote repository',
        'A situation where Git cannot automatically merge two branches because both modified the same lines of a file in incompatible ways',
        'A warning that appears when you forget to include a commit message'
      ],
      answer: 'C. A situation where Git cannot automatically merge two branches because both modified the same lines of a file in incompatible ways',
      explanation: 'A merge conflict occurs when two branches both changed the same part of a file, and Git cannot decide which version to keep. The developer must manually open the conflicted file, review both versions (marked with `<<<<<<`, `=======`, `>>>>>>>`), choose what to keep, and then commit the resolution. Frequent integration (CI) dramatically reduces the size and frequency of merge conflicts.'
    },
    {
      id: 18,
      question: 'Why is version control essential for CI/CD pipelines?',
      options: [
        'It provides the trigger event (code push/PR) that starts the pipeline, stores pipeline configuration files, and tracks exactly what changed in each run',
        'It replaces the need for automated testing by tracking who made which changes',
        'Version control is not actually essential; CI/CD can function without it in some configurations',
        'It only stores the compiled binaries and Docker images produced by the pipeline'
      ],
      answer: 'A. It provides the trigger event (code push/PR) that starts the pipeline, stores pipeline configuration files, and tracks exactly what changed in each run',
      explanation: 'Version control is the foundation of CI/CD for three reasons: (1) A push/PR event triggers the pipeline via webhooks; (2) Pipeline configuration files (`.github/workflows/*.yml`, `Jenkinsfile`) are stored in the repo alongside code — "pipeline as code"; (3) Every pipeline run is associated with a specific commit, so you always know exactly what code was tested and deployed.'
    },
    {
      id: 19,
      question: 'What is a `.gitignore` file and why is it important in CI/CD?',
      options: [
        'A configuration file listing file/directory patterns that Git should not track — preventing secrets, build artifacts, and noise from being committed',
        'An automatically generated log file where Git records all operations performed',
        'A file that lists developers who have been given read-only (ignore) access to the repository',
        'A Git command that tells the system to temporarily ignore all recent unstaged changes'
      ],
      answer: 'A. A configuration file listing file/directory patterns that Git should not track — preventing secrets, build artifacts, and noise from being committed',
      explanation: '`.gitignore` is critical for keeping your repository clean and secure. Common entries: `node_modules/` (huge dependency folder — reinstalled by CI), `.env` (secrets should NEVER be committed), `*.log`, `dist/`, `build/`. In CI/CD, accidentally committing secrets (API keys, passwords) is a major security risk. A good `.gitignore` is your first line of defense.'
    },
    {
      id: 20,
      question: 'In a CI/CD workflow, what typically happens when a developer pushes code to a feature branch?',
      options: [
        'Nothing happens until someone manually clicks "Run Build" on the CI dashboard',
        'The CI/CD pipeline is automatically triggered via a webhook, running configured build and test jobs on that branch',
        'The code is immediately and automatically deployed directly to production for live testing',
        'The repository is automatically locked so no other developer can push until a review is complete'
      ],
      answer: 'B. The CI/CD pipeline is automatically triggered via a webhook, running configured build and test jobs on that branch',
      explanation: 'When a developer pushes to any branch (or opens a PR), GitHub/GitLab fires a webhook to the CI system. The CI system checks out the code, and runs the configured pipeline jobs: install dependencies, run lint, run unit tests, run integration tests, build Docker image, etc. The developer receives a notification (Slack, email, or PR comment) within minutes showing pass or fail — critical fast feedback.'
    },
  ],

  // ── Section 3: Continuous Integration (Q21–Q30) ───────────────────────────
  ci: [
    {
      id: 21,
      question: 'How often should developers commit and push code in a true Continuous Integration practice?',
      options: [
        'Only when a feature is 100% complete, documented, and tested manually',
        'Multiple times per day — at minimum once every working day, with small, focused commits',
        'Once a week, during the Friday afternoon deployment window',
        'Once at the end of each month, after the feature is completely polished'
      ],
      answer: 'B. Multiple times per day — at minimum once every working day, with small, focused commits',
      explanation: 'True CI means committing and integrating multiple times per day. Small, frequent commits are the key: they are easier to review, easier to test, and drastically easier to debug when something breaks. The shorter the integration cycle, the smaller the merge, the less painful the conflict resolution, and the faster you get feedback from the CI system.'
    },
    {
      id: 22,
      question: 'In CI, what does a "build" specifically refer to?',
      options: [
        'A Docker container that is currently running in the staging environment',
        'The automated process of compiling source code, running checks, and producing deployable output — verifying the code can actually be packaged',
        'A sprint planning meeting where developers estimate upcoming development tasks',
        'The physical server machine that runs your application in production'
      ],
      answer: 'B. The automated process of compiling source code, running checks, and producing deployable output — verifying the code can actually be packaged',
      explanation: 'A "build" in CI is the automated pipeline run triggered by a code push. For compiled languages (Java, C#, Go), it means compiling the source. For all projects, it typically includes: installing dependencies, running the compiler/bundler, executing linters, running tests, and producing an artifact. The build proves the code is syntactically valid and functional before it can go further.'
    },
    {
      id: 23,
      question: 'What should happen immediately when a CI build fails?',
      options: [
        'The build failure is logged and scheduled for review at the end-of-sprint retrospective',
        'The failing commit is silently and automatically reverted to restore the green build without any notification',
        'The team is notified immediately, all new work pauses, and fixing the broken build becomes the highest-priority task',
        'The team ignores it and continues working on new features — the build can be fixed later'
      ],
      answer: 'C. The team is notified immediately, all new work pauses, and fixing the broken build becomes the highest-priority task',
      explanation: 'A broken main branch build is a team emergency. When CI is red, the main branch is in an unknown, potentially broken state — which blocks everyone from confidently pushing code, deploying, or releasing. The golden CI rule: never leave a broken build unattended. Stop what you\'re doing. Fix it now. Then continue. Some teams even have a "broken build" alarm that sounds in the office.'
    },
    {
      id: 24,
      question: 'What was the painful phenomenon known as "integration hell" (pre-CI)?',
      options: [
        'A mandatory all-hands meeting held before any software release to review every change manually',
        'A type of server hardware that overheated frequently, causing data center outages',
        'A build tool from the early 2000s that was notoriously difficult to configure and maintain',
        'The agonizing experience of merging weeks or months of parallel, isolated development — resulting in massive conflicts and broken code that could take longer to fix than to write'
      ],
      answer: 'D. The agonizing experience of merging weeks or months of parallel, isolated development — resulting in massive conflicts and broken code that could take longer to fix than to write',
      explanation: '"Integration hell" was the dark reality before CI. Developers would work on separate branches for weeks or months. Merge day was dreaded. Every developer\'s changes had diverged significantly, causing hundreds of conflicts, incompatible changes, and mysterious broken functionality. Fixing the merge could take days. CI kills this problem by integrating continuously — making each merge a tiny, manageable, daily event.'
    },
    {
      id: 25,
      question: 'What is a "CI server" or "CI runner"?',
      options: [
        'The primary production server where your live application is hosted and serving users',
        'A specialized version of Git designed specifically for very large engineering teams',
        'A senior developer whose full-time role is to manually test every code commit before it is merged',
        'A dedicated machine or cloud service (GitHub Actions, Jenkins) that monitors the repo and automatically executes build, test, and other pipeline jobs when triggered'
      ],
      answer: 'D. A dedicated machine or cloud service (GitHub Actions, Jenkins) that monitors the repo and automatically executes build, test, and other pipeline jobs when triggered',
      explanation: 'A CI server/runner is the compute engine that powers your pipeline. When you push code, the CI platform (GitHub Actions, Jenkins, GitLab CI, CircleCI) picks up the event, provisions a clean environment (virtual machine or container), checks out your code, and executes each job defined in your pipeline configuration file. After all jobs complete, it reports results back to the developer.'
    },
    {
      id: 26,
      question: 'What does "fast feedback" mean in the context of CI, and why does it matter?',
      options: [
        'A performance optimization technique for reducing application response times',
        'Quickly knowing (within minutes of a commit) whether a code change broke something — rather than finding out hours, days, or weeks later',
        'Having a high-speed internet connection for faster package downloads during builds',
        'Automatically sending customer satisfaction surveys after every software deployment'
      ],
      answer: 'B. Quickly knowing (within minutes of a commit) whether a code change broke something — rather than finding out hours, days, or weeks later',
      explanation: 'Fast feedback is one of CI\'s most transformative benefits. Research shows that a bug found within 15 minutes of its introduction takes minutes to fix. The same bug found 3 weeks later (when the developer has moved on and context is lost) can take days. CI\'s goal is to make the feedback loop as short as possible — ideally under 10 minutes for the full pipeline, so developers get results before they context-switch to something else.'
    },
    {
      id: 27,
      question: 'What is a "green build" in CI terminology?',
      options: [
        'A CI build that exclusively uses renewable, environmentally sustainable energy sources',
        'A build that is currently running and processing pipeline jobs',
        'A special build run only for development/debug environments, not for staging or production',
        'A build where all automated checks — compile, lint, tests, security scans — completed successfully with zero failures'
      ],
      answer: 'D. A build where all automated checks — compile, lint, tests, security scans — completed successfully with zero failures',
      explanation: 'A "green build" means every single pipeline check passed: code compiled without errors, all tests passed, linting checks passed, security scans clear. A green main branch means the codebase is in a known-good state and is safe to develop on top of, deploy, or release. Teams strive to keep the main branch green at all times as a fundamental CI discipline.'
    },
    {
      id: 28,
      question: 'What is the "fail fast" principle in CI pipeline design?',
      options: [
        'Structuring the pipeline to run cheapest/quickest checks first, detect failures early, and stop subsequent steps when a failure is found',
        'Permanently removing slow tests from the test suite to speed up pipeline execution',
        'Writing application code that crashes quickly with a helpful error instead of hanging',
        'Deploying code to production as rapidly as possible without any quality checks'
      ],
      answer: 'A. Structuring the pipeline to run cheapest/quickest checks first, detect failures early, and stop subsequent steps when a failure is found',
      explanation: '"Fail fast" means if something is wrong, find out as quickly and cheaply as possible. In practice: (1) Run the fastest checks first — lint takes 10 seconds, unit tests take 2 minutes; (2) If lint fails, don\'t start the 20-minute E2E test suite — stop immediately; (3) Each failed check provides immediate, actionable feedback. This saves compute time and gives developers faster signal.'
    },
    {
      id: 29,
      question: 'What is "continuous feedback" in a CI context?',
      options: [
        'User behavior analytics collected passively from the production application',
        'Weekly one-on-one meetings between developers and their engineering manager',
        'Automated notifications (Slack alerts, email, PR comments, dashboards) that keep the team instantly informed about the status of each pipeline run',
        'Customer satisfaction feedback collected from users on a continuous, ongoing basis'
      ],
      answer: 'C. Automated notifications (Slack alerts, email, PR comments, dashboards) that keep the team instantly informed about the status of each pipeline run',
      explanation: 'Continuous feedback is the communication layer of CI. When a build runs, the CI system integrates with team communication tools: posting a Slack message, updating the PR status check with pass/fail, sending email alerts when main breaks, and maintaining a dashboard showing build health over time. This ensures that the right people always know the current state of the codebase without having to check manually.'
    },
    {
      id: 30,
      question: 'Which of the following is a BAD CI practice that undermines the goals of Continuous Integration?',
      options: [
        'Merging large batches of uncommitted code directly to main without running any automated checks',
        'Using automated Slack/email notifications to alert the team when builds fail',
        'Committing small, focused code changes multiple times per day',
        'Having automated tests run on every single commit to every branch'
      ],
      answer: 'A. Merging large batches of uncommitted code directly to main without running any automated checks',
      explanation: 'This violates every principle of CI. True CI requires: (1) Frequent, small commits — not large batches; (2) Every merge to main must pass automated checks — skipping this defeats the entire purpose; (3) The main branch must always be in a known, tested state. Bypassing CI creates exactly the "integration hell" that CI was designed to prevent. It is a shortcut that always costs more time later.'
    },
  ],

  // ── Section 4: Automated Testing (Q31–Q40) ────────────────────────────────
  testing: [
    {
      id: 31,
      question: 'What are "unit tests" in software development?',
      options: [
        'Tests that measure server performance and response times under heavy load',
        'Tests that verify individual, isolated units of code (a single function, method, or class) work correctly in isolation',
        'Tests conducted by real users in a live production environment',
        'Tests that verify an entire application works correctly from start to finish'
      ],
      answer: 'B. Tests that verify individual, isolated units of code (a single function, method, or class) work correctly in isolation',
      explanation: 'Unit tests are the most granular level of testing. They test a single function or method in complete isolation from everything else — external services, databases, and other classes are replaced with "mocks" or "stubs." Example: a test for `add(2, 3)` verifying it returns `5`. Unit tests are extremely fast (milliseconds each), easy to debug, and form the foundation of a reliable test suite.'
    },
    {
      id: 32,
      question: 'What is the "testing pyramid" and what does it recommend?',
      options: [
        'A pyramid-shaped conference venue where the annual software testing summit is held',
        'A ranked list of the best and most popular testing frameworks by category',
        'A model recommending many fast unit tests at the base, a moderate number of integration tests in the middle, and few slow E2E tests at the top — balancing speed, cost, and coverage',
        'A physical pyramid-shaped server rack where each level runs different types of tests'
      ],
      answer: 'C. A model recommending many fast unit tests at the base, a moderate number of integration tests in the middle, and few slow E2E tests at the top — balancing speed, cost, and coverage',
      explanation: 'The testing pyramid (by Mike Cohn) visualizes the ideal test distribution. A wide base of unit tests: fast, cheap, many. A narrower middle of integration tests: slower, more realistic. A tiny tip of E2E tests: slowest, most realistic. Inverting the pyramid (many E2E, few unit tests) creates a "testing ice cream cone" — extremely slow, brittle, and expensive to maintain. Build from the bottom up.'
    },
    {
      id: 33,
      question: 'What are "integration tests"?',
      options: [
        'Tests that verify how two or more components, services, or systems work correctly together — testing their interactions and interfaces',
        'Tests that verify a single function works correctly in complete isolation',
        'Tests that visually check user interface elements look exactly right',
        'Tests that are run exclusively in the production environment on real user data'
      ],
      answer: 'A. Tests that verify how two or more components, services, or systems work correctly together — testing their interactions and interfaces',
      explanation: 'Integration tests go beyond individual functions to test how components collaborate. Examples: does the User Service correctly write to and read from the database? Does the Order Service correctly call the Payment Service API? Do two microservices communicate via the correct message format? They\'re slower than unit tests (they often require real databases or services) but catch a different category of bugs — interface mismatches and integration issues.'
    },
    {
      id: 34,
      question: 'What are "end-to-end (E2E) tests"?',
      options: [
        'Tests that run from Monday through Friday on a scheduled basis',
        'Tests that simulate real user scenarios from start to finish through the complete system — browser UI, API, backend services, and database — as a real user would experience it',
        'Tests that measure network latency from the client browser to the server',
        'Tests that only test the very first and very last line of a specific function'
      ],
      answer: 'B. Tests that simulate real user scenarios from start to finish through the complete system — browser UI, API, backend services, and database — as a real user would experience it',
      explanation: 'E2E tests simulate actual user journeys through the full application stack. Example: a Playwright or Cypress test that opens a browser, navigates to the homepage, clicks "Sign Up," fills out the form, submits it, and verifies the user lands on their dashboard. These tests catch issues that unit and integration tests miss (UX flows, cross-service bugs) but are the slowest and most brittle tests to maintain.'
    },
    {
      id: 35,
      question: 'What is "code coverage" in testing?',
      options: [
        'The total number of lines of code written across all files in the application',
        'The percentage of your source code that is actually executed (covered) when the test suite runs',
        'The percentage of planned features that have been successfully implemented so far',
        'The number of developers currently working on and contributing to the codebase'
      ],
      answer: 'B. The percentage of your source code that is actually executed (covered) when the test suite runs',
      explanation: 'Code coverage measures what fraction of your code is executed during tests. 80% coverage means 80% of lines ran at least once during the test suite. In CI pipelines, you can configure a coverage threshold (e.g., "fail if coverage drops below 80%"). Important caveat: 100% coverage doesn\'t guarantee bug-free code — a line can be executed without being meaningfully tested. Coverage is a useful indicator, not an absolute measure of quality.'
    },
    {
      id: 36,
      question: 'What is Test-Driven Development (TDD)?',
      options: [
        'A development approach where tests are written after the feature code is complete',
        'Using automated tests to completely replace peer code reviews',
        'A method where dedicated QA testers drive all development priorities and planning',
        'A methodology where you write a failing test first, then write only enough code to make it pass, then refactor — the "red-green-refactor" cycle'
      ],
      answer: 'D. A methodology where you write a failing test first, then write only enough code to make it pass, then refactor — the "red-green-refactor" cycle',
      explanation: 'TDD follows a strict cycle: (1) RED — write a failing test for the behavior you want; (2) GREEN — write the minimum code to make the test pass (no more); (3) REFACTOR — clean up the code while keeping tests green. Repeat. TDD naturally produces highly testable code, excellent test coverage, and forces you to think about API design before implementation. It aligns perfectly with CI because the test suite is always up-to-date.'
    },
    {
      id: 37,
      question: 'What is a "flaky test" and why is it harmful in CI?',
      options: [
        'A test that inconsistently passes sometimes and fails other times without any code changes — due to timing issues, external dependencies, or random data',
        'A test with intentionally incorrect expected values used to verify error handling',
        'A test written using outdated, deprecated APIs that should be updated',
        'A test that only runs on a very slow, under-resourced build machine'
      ],
      answer: 'A. A test that inconsistently passes sometimes and fails other times without any code changes — due to timing issues, external dependencies, or random data',
      explanation: 'Flaky tests are a serious CI/CD problem. They produce inconsistent results — the same code, same test, but sometimes green, sometimes red. This erodes trust in the test suite: developers start ignoring failures thinking "it\'s probably just flaky." Common causes: race conditions (async timing), external API calls, test order dependencies, random data, and sleep/wait commands. Fix or quarantine flaky tests immediately — they poison the CI feedback loop.'
    },
    {
      id: 38,
      question: 'In a CI pipeline, what is the correct order to run different test types for maximum efficiency?',
      options: [
        'Tests should always run in strict alphabetical order of their file names',
        'All tests must always run simultaneously in parallel regardless of type and speed',
        'E2E tests first (most realistic), then integration tests, then unit tests last',
        'Unit tests first (fastest), then integration tests, then E2E tests last (slowest) — fail fast at the cheapest level first'
      ],
      answer: 'D. Unit tests first (fastest), then integration tests, then E2E tests last (slowest) — fail fast at the cheapest level first',
      explanation: 'Order tests from fastest/cheapest to slowest/most expensive. Unit tests run in milliseconds and catch syntax/logic errors immediately. If they fail, stop — don\'t waste time running 20-minute E2E tests on code with a basic bug. This "fail fast" ordering minimizes compute cost and gives developers the fastest possible feedback at the earliest stage. Run E2E tests only after all faster tests pass.'
    },
    {
      id: 39,
      question: 'What is "smoke testing" in the context of CI/CD?',
      options: [
        'A security scan specifically targeting malicious code or vulnerabilities in the codebase',
        'Testing physical server hardware for overheating by monitoring temperature sensors',
        'Testing conducted while a developer is taking a smoking break — informal, casual testing',
        'A minimal set of quick, broad tests that verify the application\'s most critical functionality works — a basic "does it start and do the main things?" sanity check'
      ],
      answer: 'D. A minimal set of quick, broad tests that verify the application\'s most critical functionality works — a basic "does it start and do the main things?" sanity check',
      explanation: 'Smoke testing (also "build verification testing") is a lightweight pass/fail check run before the full test suite. It asks: "Does the app start? Do the login, home page, and core API endpoints respond?" If smoke tests fail, there\'s no point running the full 2-hour regression suite. Like checking if a device powers on before running full diagnostics — fast elimination of the most obvious failures first.'
    },
    {
      id: 40,
      question: 'What is "regression testing" and why is it critical in CI/CD?',
      options: [
        'Tests that execute in reverse order to verify backwards compatibility',
        'Tests measuring how much application performance has "regressed" over time',
        'Tests targeting exclusively the newest features just added in this sprint',
        'Tests verifying that previously working functionality still works correctly after new code changes — ensuring new code doesn\'t break old features'
      ],
      answer: 'D. Tests verifying that previously working functionality still works correctly after new code changes — ensuring new code doesn\'t break old features',
      explanation: 'Regression testing ensures new code doesn\'t break existing functionality. In CI/CD, your entire test suite serves as a regression test suite — every commit runs all tests. This is the safety net that gives teams confidence to deploy frequently. Without regression testing, every deployment is a gamble: "Did we break anything?" With it, you have a definitive automated answer to that question within minutes of every commit.'
    },
  ],

  // ── Section 5: Build Systems & Artifacts (Q41–Q50) ────────────────────────
  build: [
    {
      id: 41,
      question: 'What is a "build artifact" in CI/CD?',
      options: [
        'The output files produced by the build process — such as a compiled binary, a JAR file, a Docker image, or a zip archive — ready to be deployed',
        'An antique computer or old piece of hardware from the early days of programming',
        'A bug accidentally introduced into the code during the build process',
        'A temporary log file generated during testing and automatically deleted afterward'
      ],
      answer: 'A. The output files produced by the build process — such as a compiled binary, a JAR file, a Docker image, or a zip archive — ready to be deployed',
      explanation: 'A build artifact is the tangible output of your CI build — the thing you actually deploy. Examples: a `.jar` (Java), `.exe` (Windows app), `dist/` folder (React build), or a Docker image tagged with the commit SHA. The key principle: "build once, deploy everywhere" — create the artifact in CI, store it, and promote the exact same artifact from dev to staging to production. Never rebuild for each environment.'
    },
    {
      id: 42,
      question: 'What is Docker?',
      options: [
        'A brand of high-performance solid-state drives (SSDs) used in CI build servers',
        'A physical shipping company that transports server hardware internationally',
        'A containerization platform that packages applications and all their dependencies into lightweight, isolated containers that run identically on any machine',
        'A specialized version of Linux used exclusively inside data centers'
      ],
      answer: 'C. A containerization platform that packages applications and all their dependencies into lightweight, isolated containers that run identically on any machine',
      explanation: 'Docker packages your application code, runtime, libraries, and configuration into a self-contained "container" that can run on any machine — developer laptop, CI server, staging, or production — with identical behavior. This is the ultimate solution to "works on my machine." Docker images are the most common build artifact in modern CI/CD pipelines, making deployment and scaling dramatically simpler.'
    },
    {
      id: 43,
      question: 'What is a "Docker image"?',
      options: [
        'The Docker company logo and branding assets used in marketing materials',
        'An immutable, layered blueprint containing everything needed to create a running container: code, runtime, system libraries, and configuration',
        'A compressed backup archive of all running Docker containers on a server',
        'A screenshot or visual snapshot of the Docker Desktop application interface'
      ],
      answer: 'B. An immutable, layered blueprint containing everything needed to create a running container: code, runtime, system libraries, and configuration',
      explanation: 'A Docker image is a read-only template (built from a Dockerfile) consisting of stacked filesystem layers. When you run an image, Docker creates a writable container layer on top, giving you a running instance. Images are immutable — once built, they never change, making them perfect artifacts. The same image (e.g., `myapp:v1.2.3`) can spin up thousands of identical containers simultaneously.'
    },
    {
      id: 44,
      question: 'What is a container registry?',
      options: [
        'A configuration file listing all the containers required for a specific project',
        'A government database where software containers must be officially registered',
        'A storage and distribution service for Docker images — analogous to npm for packages or GitHub for code',
        'A list displaying all currently running containers on a specific server'
      ],
      answer: 'C. A storage and distribution service for Docker images — analogous to npm for packages or GitHub for code',
      explanation: 'A container registry is where Docker images are stored, versioned, and shared. Your CI pipeline builds an image and pushes it to the registry (e.g., `docker push myrepo/myapp:v1.2.3`). Then your CD pipeline pulls it from the registry to deploy (e.g., to Kubernetes). Examples: Docker Hub (public), Amazon ECR, Google Artifact Registry, GitHub Container Registry, and Azure Container Registry.'
    },
    {
      id: 45,
      question: 'What is semantic versioning (SemVer) and what does `2.4.1` mean?',
      options: [
        'A database versioning methodology used exclusively for managing schema migrations',
        'A versioning scheme that uses full English sentences as version identifiers for human readability',
        'A versioning standard using MAJOR.MINOR.PATCH — where 2 is the major version (breaking changes), 4 is the minor version (new features), and 1 is the patch version (bug fixes)',
        'A proprietary versioning system invented and trademarked by Semantic Inc.'
      ],
      answer: 'C. A versioning standard using MAJOR.MINOR.PATCH — where 2 is the major version (breaking changes), 4 is the minor version (new features), and 1 is the patch version (bug fixes)',
      explanation: 'SemVer (semver.org) is the industry-standard version numbering format. MAJOR: increment when you make incompatible API changes (1.x.x → 2.0.0 — users must update their code). MINOR: new backwards-compatible features (1.2.x → 1.3.0 — safe to upgrade). PATCH: backwards-compatible bug fixes only (1.2.3 → 1.2.4 — always upgrade). In CI/CD, artifact versions often use the Git commit SHA or SemVer tags from Git releases.'
    },
    {
      id: 46,
      question: 'What is a Dockerfile?',
      options: [
        'A Docker command that outputs information and statistics about all running containers',
        'A configuration file for managing Docker container networking and service discovery',
        'A log file that records all Docker activity and operations on a server',
        'A text file containing sequential instructions telling Docker exactly how to build a Docker image for your application step-by-step'
      ],
      answer: 'D. A text file containing sequential instructions telling Docker exactly how to build a Docker image for your application step-by-step',
      explanation: 'A Dockerfile is the recipe for building a Docker image. Key instructions: `FROM node:20` (base image), `WORKDIR /app` (set directory), `COPY package*.json ./` (copy files), `RUN npm ci` (install deps), `COPY . .` (copy source), `EXPOSE 3000` (document port), `CMD ["node","server.js"]` (startup command). Running `docker build -t myapp:latest .` reads this file and produces an image.'
    },
    {
      id: 47,
      question: 'What is "build caching" in CI/CD, and what is the main benefit?',
      options: [
        'Storing the application\'s data in an in-memory cache to speed up runtime performance',
        'A technique for caching frequently executed database queries to improve application performance',
        'Saving and reusing intermediate build results (like installed dependencies) between separate pipeline runs, dramatically reducing build times',
        'Storing static assets (images, CSS) in a CDN cache for faster delivery to users'
      ],
      answer: 'C. Saving and reusing intermediate build results (like installed dependencies) between separate pipeline runs, dramatically reducing build times',
      explanation: 'Build caching saves expensive, repeated work between pipeline runs. Example: if `package.json` hasn\'t changed, the CI system restores `node_modules/` from a cache rather than re-running `npm install` (which downloads hundreds of packages from the internet). This can turn a 10-minute build into a 2-minute build. GitHub Actions, GitLab CI, and CircleCI all have built-in caching mechanisms that save and restore directories between runs.'
    },
    {
      id: 48,
      question: 'What does it mean for a build to be "reproducible" (also called "idempotent")?',
      options: [
        'The build process repairs itself automatically when unexpected errors occur',
        'The build process can only run successfully one time and must be reset before running again',
        'The build intentionally generates different output each time to prevent unauthorized copying',
        'Running the build multiple times with identical source code and dependencies always produces byte-for-byte identical output artifacts'
      ],
      answer: 'D. Running the build multiple times with identical source code and dependencies always produces byte-for-byte identical output artifacts',
      explanation: 'Reproducibility is a foundational CI/CD principle. Given the same inputs (source code, dependency versions, environment), the build must always produce the same output. Non-reproducible builds are dangerous: you can\'t be certain what you\'re deploying, debugging becomes a nightmare, and auditing is impossible. Lock dependency versions (`package-lock.json`, `Pipfile.lock`), pin Docker base image versions, and avoid timestamps or random data in build outputs.'
    },
    {
      id: 49,
      question: 'What is the "build once, deploy many" principle in CI/CD?',
      options: [
        'Creating the artifact a single time in CI and promoting that exact same artifact through all environments (dev → staging → production), never rebuilding for each environment',
        'Assigning only one developer to be responsible for running all build processes',
        'Running the build process only once per week to conserve CI compute resources',
        'Using a single monolithic build system for all projects across the entire engineering organization'
      ],
      answer: 'A. Creating the artifact a single time in CI and promoting that exact same artifact through all environments (dev → staging → production), never rebuilding for each environment',
      explanation: '"Build once, deploy many" is critical for deployment confidence. If you build different artifacts for staging and production, you can never be sure that the artifact you tested in staging is what went to production — environment-specific build steps could introduce differences. Build the Docker image once (tag it with the Git commit SHA), test it in staging, and deploy that exact image to production. What you test is what you ship.'
    },
    {
      id: 50,
      question: 'What is an "artifact repository" and how does it differ from a source code repository?',
      options: [
        'A specialized storage system (JFrog Artifactory, Nexus, AWS CodeArtifact) for storing and distributing versioned build outputs — distinct from GitHub which stores source code',
        'The GitHub repository where the project\'s source code is version-controlled and stored',
        'A museum of historical software versions for archival and nostalgic purposes',
        'A temporary folder on the CI build server that is automatically purged after each pipeline run'
      ],
      answer: 'A. A specialized storage system (JFrog Artifactory, Nexus, AWS CodeArtifact) for storing and distributing versioned build outputs — distinct from GitHub which stores source code',
      explanation: 'Source code repositories (GitHub) store `.java`, `.py`, `.js` files. Artifact repositories store the compiled outputs: `.jar`, `.whl`, Docker images, npm packages. Artifact repositories provide versioning, access control, retention policies, and act as the authoritative source for deployments. Examples: JFrog Artifactory (universal), Sonatype Nexus, AWS CodeArtifact, Docker Hub (specifically for images). Separating them is a security and operational best practice.'
    },
  ],

  // ── Section 6: Continuous Delivery (Q51–Q60) ──────────────────────────────
  delivery: [
    {
      id: 51,
      question: 'What is Continuous Delivery (CD)?',
      options: [
        'A practice ensuring software is always in a deployable state, with the ability to release to production at any time via an automated pipeline — though the actual release requires deliberate human approval',
        'Sending automated change log emails to customers after every new software deployment',
        'Automatically deploying every single code commit directly to production for all users immediately',
        'A food delivery service that continuously brings meals to software developers'
      ],
      answer: 'A. A practice ensuring software is always in a deployable state, with the ability to release to production at any time via an automated pipeline — though the actual release requires deliberate human approval',
      explanation: 'Continuous Delivery means your software is always production-ready. The CI pipeline extends into a full delivery pipeline: build, test, security scan, deploy to staging, run acceptance tests. At the end, a human can click "Deploy to Production" at any time — even at 5 PM on a Friday — with full confidence. The key distinction from Continuous Deployment: a human consciously decides when to release. Deployment is a business decision, not a technical bottleneck.'
    },
    {
      id: 52,
      question: 'What is the KEY difference between Continuous Delivery and Continuous Deployment?',
      options: [
        'Continuous Deployment is only for mobile applications; Continuous Delivery is for web apps',
        'Continuous Delivery requires a manual human approval before production deployment; Continuous Deployment automatically deploys every passing commit to production without human intervention',
        'Continuous Delivery has automated tests; Continuous Deployment does not require tests',
        'They are exactly the same thing — just different names used by different companies'
      ],
      answer: 'B. Continuous Delivery requires a manual human approval before production deployment; Continuous Deployment automatically deploys every passing commit to production without human intervention',
      explanation: 'The crucial distinction: both automate everything up to production, but Continuous Delivery pauses and waits for human approval before the final production deploy (good for regulatory environments or when business timing matters). Continuous Deployment removes that human gate entirely — every commit that passes all automated checks goes straight to production automatically. CD (Deployment) requires a very mature, highly trusted test suite and excellent monitoring.'
    },
    {
      id: 53,
      question: 'What is a "staging environment" in a CD pipeline?',
      options: [
        'A theatre stage used to present live software demos to potential customers',
        'A temporary server automatically spun up exclusively during CI build runs',
        'The development environment running on an individual developer\'s local laptop',
        'A pre-production environment that closely mirrors production infrastructure, used for final testing and validation before releasing to real users'
      ],
      answer: 'D. A pre-production environment that closely mirrors production infrastructure, used for final testing and validation before releasing to real users',
      explanation: 'Staging is the final checkpoint before production. It should mirror production as closely as possible: same cloud infrastructure, same OS, same resource sizes, same configuration (with staging-specific credentials). The goal: catch any environment-specific issues that passed all automated tests but only manifest in a production-like setup. Stakeholders also use staging for UAT (User Acceptance Testing) before approving the release.'
    },
    {
      id: 54,
      question: 'What is "environment promotion" in a CD pipeline?',
      options: [
        'Giving a junior developer a promotion to manage the staging environment',
        'Upgrading an environment\'s server hardware to better specifications',
        'The controlled process of moving (promoting) a tested, approved artifact from one environment to the next: development → staging → production',
        'Copying live production data down into development environments for testing'
      ],
      answer: 'C. The controlled process of moving (promoting) a tested, approved artifact from one environment to the next: development → staging → production',
      explanation: 'Environment promotion is how you systematically advance software through your delivery pipeline. An artifact (e.g., `myapp:v1.2.3`) is built once, deployed to dev (automated), tested, promoted to staging (automated), tested further, then promoted to production (with approval gate in Continuous Delivery). At no point is the artifact rebuilt — the same image travels through every environment, ensuring consistency.'
    },
    {
      id: 55,
      question: 'What is a "deployment pipeline" in Continuous Delivery?',
      options: [
        'An automated system that defines and orchestrates every step required to take code from version control to running in production — making the delivery process visible, repeatable, and automated',
        'A printed PDF document outlining the manual deployment procedure for operations teams',
        'Physical pipes in a data center that carry network traffic between servers',
        'A dedicated Slack channel where deployment status announcements are posted'
      ],
      answer: 'A. An automated system that defines and orchestrates every step required to take code from version control to running in production — making the delivery process visible, repeatable, and automated',
      explanation: 'A deployment pipeline (as defined by Jez Humble and Dave Farley in "Continuous Delivery") is the complete automated system from commit to production: build → unit test → integration test → security scan → performance test → staging deploy → acceptance test → manual approval → production deploy. It makes the entire delivery process transparent (visible dashboard), consistent (same steps every time), and auditable (who approved what, when).'
    },
    {
      id: 56,
      question: 'What is a "manual approval gate" in a CD pipeline?',
      options: [
        'A physical security door at the data center entrance that requires badge access',
        'An automated security scanner that gates deployments based on vulnerability thresholds',
        'A code review checkpoint that blocks a pull request from merging',
        'A required human review and sign-off step that pauses the pipeline, requiring an authorized person to click "Approve" before it continues to the next stage (typically production)'
      ],
      answer: 'D. A required human review and sign-off step that pauses the pipeline, requiring an authorized person to click "Approve" before it continues to the next stage (typically production)',
      explanation: 'A manual approval gate is the human decision point in Continuous Delivery. After all automated tests pass and staging looks good, the pipeline pauses and notifies stakeholders. An authorized person (tech lead, product manager, release manager) reviews the staging environment, test results, and business readiness, then clicks "Approve" to trigger production deployment. This gives organizations control over release timing while keeping everything else automated.'
    },
    {
      id: 57,
      question: 'What is "configuration management" in the context of CI/CD environments?',
      options: [
        'Managing the configuration files on individual developer laptops',
        'A tool for managing and versioning CI/CD pipeline configurations themselves',
        'Managing the settings and permissions of the source code repository',
        'The practice of managing environment-specific settings (database URLs, feature flags, API endpoints) separately from application code, injecting them at deploy time'
      ],
      answer: 'D. The practice of managing environment-specific settings (database URLs, feature flags, API endpoints) separately from application code, injecting them at deploy time',
      explanation: 'Configuration management separates "what the app does" (code) from "how it behaves in this environment" (config). The same Docker image should connect to a test database in staging and the real database in production. The `12-Factor App` methodology mandates storing config in environment variables. Values like DB_HOST, API_KEYS, FEATURE_FLAGS are injected at deploy time — never baked into the image.'
    },
    {
      id: 58,
      question: 'What is the best practice for managing secrets (API keys, passwords) in a CD pipeline?',
      options: [
        'Use a dedicated secrets manager (GitHub Secrets, HashiCorp Vault, AWS Secrets Manager) that stores them encrypted and injects them securely at runtime — never in logs or code',
        'Hardcode them directly in the source code for easy developer access',
        'Email the secrets to all developers so everyone has access for local testing',
        'Store them as plain-text environment variables that are printed in all build logs for debugging'
      ],
      answer: 'A. Use a dedicated secrets manager (GitHub Secrets, HashiCorp Vault, AWS Secrets Manager) that stores them encrypted and injects them securely at runtime — never in logs or code',
      explanation: 'Secrets management is critical for security. NEVER hardcode secrets in code (they end up in Git history forever). NEVER print them in logs (logs are often accessible to many people). The correct approach: store secrets encrypted in a secrets manager (GitHub Actions encrypted secrets, HashiCorp Vault, AWS SSM Parameter Store). Inject them as environment variables at runtime. CI systems automatically mask known secret values in log output to prevent accidental exposure.'
    },
    {
      id: 59,
      question: 'What is a "release candidate" (RC) in Continuous Delivery?',
      options: [
        'A beta version distributed to all users simultaneously for large-scale public testing',
        'The very first working version of a new software project or feature',
        'A developer who is interviewing for the role of Release Manager',
        'A version of the software that has passed all automated CI/CD gates and is considered potentially ready for production release, pending final validation'
      ],
      answer: 'D. A version of the software that has passed all automated CI/CD gates and is considered potentially ready for production release, pending final validation',
      explanation: 'A release candidate is a build that "could be the release" — it has passed every automated check in the pipeline (build, all tests, security scans, staging deployment, performance tests). In Continuous Delivery, the RC sits at the approval gate awaiting a human go/no-go decision. If approved, it becomes the production release. If a bug is found during staging UAT, the RC is rejected, the bug is fixed, and a new RC is generated.'
    },
    {
      id: 60,
      question: 'What does "always be in a deployable state" mean in Continuous Delivery?',
      options: [
        'The main branch should always contain working, fully-tested code that could be safely and confidently deployed to production at any moment — not just at planned release times',
        'The application must be actively deployed and re-deployed to production every single day',
        'Only one specific version of the application can be deployed at any given time',
        'Developers must be available 24/7, 365 days a year to perform deployments'
      ],
      answer: 'A. The main branch should always contain working, fully-tested code that could be safely and confidently deployed to production at any moment — not just at planned release times',
      explanation: '"Always deployable" is both a technical discipline and a cultural commitment. Every commit to main must pass all CI checks before it can be merged. The main branch is treated as sacred — it represents what is currently in production or is ready to go. This discipline means that when a critical security patch is needed at 11 PM on a Sunday, you can deploy it in minutes with full confidence, without scrambling to "stabilize the release."'
    },
  ],

  // ── Section 7: Continuous Deployment (Q61–Q70) ────────────────────────────
  deployment: [
    {
      id: 61,
      question: 'What is Continuous Deployment (the most advanced form of CD)?',
      options: [
        'Deployment triggered only by customer complaints or critical bug reports',
        'A method of deploying software on a fixed quarterly schedule',
        'A fully automated process where every code change that passes all automated quality gates is automatically deployed to production with no human intervention required',
        'A practice where code is continuously reviewed and sent back to developers for improvement'
      ],
      answer: 'C. A fully automated process where every code change that passes all automated quality gates is automatically deployed to production with no human intervention required',
      explanation: 'Continuous Deployment is CI/CD at its most mature. Every commit that passes the complete automated pipeline (build, all tests, security scans, staging deploy and tests) is automatically released to production — no human approval step. Amazon deploys thousands of times per day; Netflix has hundreds of developers deploying independently. This requires elite automated testing, excellent monitoring, fast rollback capabilities, and a culture of trust in the automation.'
    },
    {
      id: 62,
      question: 'What is a "feature flag" (also called a feature toggle)?',
      options: [
        'A flag emoji used in pull request comments to mark important review items',
        'A warning flag in the CI dashboard indicating a high-risk or potentially dangerous deployment',
        'A configuration switch that allows teams to enable or disable specific application features without deploying new code — decoupling deployment from release',
        'A Git tag marking the successful completion and merge of a feature branch'
      ],
      answer: 'C. A configuration switch that allows teams to enable or disable specific application features without deploying new code — decoupling deployment from release',
      explanation: 'Feature flags are powerful tools for Continuous Deployment. You can deploy code containing a new feature to production but keep it hidden behind a flag (disabled). Then enable it for: internal users first (dogfooding), a % of users (canary release via flag), or all users at a planned time — all without a new deployment. LaunchDarkly, AWS AppConfig, and similar tools manage flags. They also allow instant "kill switches" if a new feature causes issues.'
    },
    {
      id: 63,
      question: 'What is a "canary deployment" and where does the name come from?',
      options: [
        'A strategy releasing new code to a small percentage of users first — monitoring for errors before gradually expanding to all users. Named after miners who used canary birds as early warning systems for dangerous gas',
        'A deployment pattern specific to the Canary Islands tech community, now used globally',
        'Using canary yellow-colored servers exclusively for deployment testing purposes',
        'Deploying software only during the spring season when traffic is lower'
      ],
      answer: 'A. A strategy releasing new code to a small percentage of users first — monitoring for errors before gradually expanding to all users. Named after miners who used canary birds as early warning systems for dangerous gas',
      explanation: 'Like miners who sent canary birds into mines to detect dangerous gas (if the canary died, miners stayed out), canary deployments release to a small "canary" slice of traffic (1-5%) first. Monitor error rates, latency, and business metrics. If healthy — expand to 10%, 25%, 50%, 100%. If the canary "dies" (error spike, crashes) — roll back before most users are impacted. This is how Google, Netflix, and Amazon reduce deployment risk significantly.'
    },
    {
      id: 64,
      question: 'What is "blue-green deployment"?',
      options: [
        'A CI/CD pipeline color theme with blue stages and green stages for visual distinction',
        'Color-coding deployments assigned to different teams — blue team and green team',
        'Deploying to blue-colored servers in the morning and switching to green servers at night',
        'A deployment strategy maintaining two identical production environments (blue=current live, green=new version), switching all traffic from blue to green instantly when ready'
      ],
      answer: 'D. A deployment strategy maintaining two identical production environments (blue=current live, green=new version), switching all traffic from blue to green instantly when ready',
      explanation: 'Blue-green deployment keeps two full production environments: Blue is currently serving all traffic. Deploy the new version to Green and test it thoroughly. When confident, update the load balancer to route 100% of traffic to Green in milliseconds. If something is wrong, instantly flip back to Blue — zero-downtime rollback in seconds. The downside: doubles infrastructure costs temporarily. Widely used by companies needing near-zero downtime deployments.'
    },
    {
      id: 65,
      question: 'What is a "rolling deployment"?',
      options: [
        'A strategy that gradually replaces old running instances of the application with new ones, one at a time or in batches, without taking the entire service offline',
        'Deploying to servers randomly without any predetermined plan or order',
        'A Kubernetes deployment using rolling (append-only, log-structured) storage',
        'A deployment that occurs on a regular rolling weekly or monthly schedule'
      ],
      answer: 'A. A strategy that gradually replaces old running instances of the application with new ones, one at a time or in batches, without taking the entire service offline',
      explanation: 'A rolling deployment updates instances incrementally. For a 10-instance fleet: take instance 1 out of the load balancer, update it to the new version, add it back, then do instance 2, and so on. At any point during the rollout, the service is partially old version and partially new version — users may hit either. Zero downtime, but API compatibility between old and new must be maintained during the rollout window. Kubernetes does rolling deployments natively.'
    },
    {
      id: 66,
      question: 'What is a "rollback" in deployment and why must it be fast?',
      options: [
        'Reverting the application to a previous, known-good version after a bad deployment causes problems in production',
        'Rolling a bowling ball back to its starting position after missing all the pins',
        'A Git command that undoes all uncommitted changes in the working directory',
        'A backwards compatibility test ensuring old API endpoints still function'
      ],
      answer: 'A. Reverting the application to a previous, known-good version after a bad deployment causes problems in production',
      explanation: 'A rollback is your emergency brake for bad deployments. Even with excellent testing, production surprises happen. Fast rollback capability is non-negotiable: every second of degraded production costs revenue and user trust. Best practices: (1) Always have the previous version\'s artifact readily available; (2) Practice rollbacks — test them before you need them; (3) With Docker: `kubectl rollout undo deployment/myapp`; (4) With blue-green: flip the load balancer back to blue. Aim for rollbacks in under 5 minutes.'
    },
    {
      id: 67,
      question: 'What is "zero-downtime deployment"?',
      options: [
        'A deployment approach where the application remains continuously available and responsive to users throughout the entire deployment process, with no service interruption',
        'A deployment technique that writes zero data to disk during the process',
        'Deploying an application that has zero features or functionality',
        'Deploying software only between midnight and 3 AM when usage is lowest'
      ],
      answer: 'A. A deployment approach where the application remains continuously available and responsive to users throughout the entire deployment process, with no service interruption',
      explanation: 'Zero-downtime deployment means users experience no outages, errors, or service degradation during a release. Techniques: blue-green (instant traffic switch), rolling (gradual instance replacement), canary (partial traffic routing). Essential for modern web applications and APIs where any downtime directly translates to lost revenue, broken user flows, and reputational damage. Kubernetes, AWS, and most cloud platforms have built-in zero-downtime deployment primitives.'
    },
    {
      id: 68,
      question: 'What is "Infrastructure as Code" (IaC)?',
      options: [
        'Writing Python scripts to automate the process of purchasing server hardware online',
        'A coding style used specifically for writing operating system kernels and drivers',
        'Managing and provisioning infrastructure (servers, networks, databases, load balancers) through machine-readable declarative code files stored in version control — rather than manual GUI clicks',
        'A network protocol for communicating between different infrastructure components'
      ],
      answer: 'C. Managing and provisioning infrastructure (servers, networks, databases, load balancers) through machine-readable declarative code files stored in version control — rather than manual GUI clicks',
      explanation: 'IaC treats infrastructure the same as application code: written in files (Terraform `.tf`, AWS CloudFormation `.yaml`, Pulumi TypeScript), version-controlled in Git, peer-reviewed in PRs, and applied automatically by CI/CD pipelines. Benefits: reproducible environments (no more "snowflake servers"), auditable history of all infrastructure changes, disaster recovery (rebuild everything from code), and consistent dev/staging/production environments.'
    },
    {
      id: 69,
      question: 'What is "immutable infrastructure"?',
      options: [
        'Infrastructure that is extremely expensive and therefore financially impossible to change',
        'A pattern where instead of modifying existing running servers, you always build and deploy brand-new server instances with the change baked in, then destroy the old ones',
        'Infrastructure protected by multiple layers of authentication that cannot be changed without special approval',
        'Legacy servers that have been running so long they cannot be safely updated'
      ],
      answer: 'B. A pattern where instead of modifying existing running servers, you always build and deploy brand-new server instances with the change baked in, then destroy the old ones',
      explanation: 'Immutable infrastructure follows the principle: "Don\'t modify, replace." Instead of SSH-ing into a server and running `apt update && deploy.sh`, you build a completely new machine image or Docker container with the new code baked in, deploy it, and terminate the old one. Benefits: no configuration drift (servers don\'t accumulate manual changes that aren\'t in code), completely reproducible deployments, and easy rollbacks (just deploy the previous image).'
    },
    {
      id: 70,
      question: 'What are "deployment windows" and why might some teams still use them even with good CI/CD?',
      options: [
        'Graphical user interface windows in deployment management dashboards',
        'Pre-scheduled time periods (often off-peak hours) during which deployments are permitted — used by teams building confidence in zero-downtime techniques, in regulated industries, or when coordinating with business schedules',
        'Browser windows used by operations teams to monitor deployment dashboards',
        'Windows Server instances dedicated exclusively to running deployment automation scripts'
      ],
      answer: 'B. Pre-scheduled time periods (often off-peak hours) during which deployments are permitted — used by teams building confidence in zero-downtime techniques, in regulated industries, or when coordinating with business schedules',
      explanation: 'While mature CI/CD teams can deploy any time with confidence (even peak hours), deployment windows still serve purposes: (1) Regulated industries (banking, healthcare) may require change management windows; (2) Teams transitioning to zero-downtime techniques may use low-traffic windows as a safety buffer; (3) Business coordination (don\'t deploy before a major marketing campaign). The goal of mature CI/CD is to make deployment so safe and fast that windows become unnecessary.'
    },
  ],

  // ── Section 8: Pipeline Architecture (Q71–Q80) ────────────────────────────
  pipeline: [
    {
      id: 71,
      question: 'What is a pipeline "stage" in CI/CD?',
      options: [
        'A partition of a distributed database used by the CI server for state management',
        'The staging environment where the application is deployed before production',
        'A logical grouping of related jobs within a pipeline that represents a phase of work (e.g., Build stage, Test stage, Deploy stage) — later stages only run if earlier stages pass',
        'A physical location in a data center where the pipeline software is installed'
      ],
      answer: 'C. A logical grouping of related jobs within a pipeline that represents a phase of work (e.g., Build stage, Test stage, Deploy stage) — later stages only run if earlier stages pass',
      explanation: 'Stages represent the major phases of your pipeline. Common stages: Source (checkout) → Build → Test → Scan → Deploy Staging → Acceptance → Deploy Production. Jobs within a stage often run in parallel. Stages run sequentially — the Test stage only starts if the Build stage passes. This enforces quality gates: don\'t deploy if tests didn\'t pass. Stages make the pipeline\'s progress visible and its logic easy to understand.'
    },
    {
      id: 72,
      question: 'What is the difference between a pipeline "stage" and a pipeline "job"?',
      options: [
        'Jobs are exclusively for testing tasks; stages are only for deployment tasks',
        'A stage is a logical grouping of one or more related jobs; a job is a single unit of work that runs on one runner machine and executes a specific task (e.g., "run unit tests")',
        'Stages always run sequentially; jobs always run in parallel — they cannot be configured otherwise',
        'They are complete synonyms — stage and job mean exactly the same thing'
      ],
      answer: 'B. A stage is a logical grouping of one or more related jobs; a job is a single unit of work that runs on one runner machine and executes a specific task (e.g., "run unit tests")',
      explanation: 'The hierarchy is: Pipeline → Stages → Jobs → Steps. A "Test" stage might contain three jobs: `unit-tests` (runs on Ubuntu runner), `lint` (runs on Ubuntu runner), `security-scan` (runs on Ubuntu runner) — all in parallel. Each job is an independent unit of work on a single runner. Jobs in the same stage run in parallel; stages run sequentially. Steps are the individual commands within a job (e.g., `npm install`, `npm test`).'
    },
    {
      id: 73,
      question: 'What is parallelism in CI/CD pipelines and what is its main benefit?',
      options: [
        'A configuration setting that intentionally slows the pipeline for increased reliability',
        'Having two completely separate pipeline configuration files that operate independently',
        'Running the exact same pipeline simultaneously on multiple different projects at once',
        'Running multiple independent jobs at the same time simultaneously, which significantly reduces total pipeline execution time'
      ],
      answer: 'D. Running multiple independent jobs at the same time simultaneously, which significantly reduces total pipeline execution time',
      explanation: 'Parallelism is one of the most impactful pipeline optimizations. Instead of: lint (30s) + unit tests (2min) + security scan (1min) = 3.5 minutes sequential — run all three simultaneously and finish in 2 minutes (the longest job). For large test suites, you can split tests into shards and run them in parallel across many runners, turning a 40-minute test run into a 5-minute one. Always identify which jobs are independent (have no dependency on each other) and run them in parallel.'
    },
    {
      id: 74,
      question: 'What is a pipeline "trigger"?',
      options: [
        'The very first step or job executed at the start of every pipeline run',
        'A physical hardware button on the CI server that initiates a build',
        'An event or condition (code push, pull request, scheduled time, manual button, API call) that causes the pipeline to start executing',
        'A test that verifies the pipeline configuration file itself is valid and correct'
      ],
      answer: 'C. An event or condition (code push, pull request, scheduled time, manual button, API call) that causes the pipeline to start executing',
      explanation: 'Triggers define what starts a pipeline run. Common triggers: push to any branch (runs CI checks), push to `main` branch (runs deployment pipeline), pull request opened or updated (runs PR validation pipeline), scheduled cron (e.g., `0 2 * * *` for nightly full regression), manual button (for release pipelines), API webhook (from another system). Different triggers can run different pipeline configurations — e.g., PRs don\'t deploy, only main branch does.'
    },
    {
      id: 75,
      question: 'What is "pipeline as code" (PaC)?',
      options: [
        'The practice of defining your pipeline configuration in version-controlled files stored alongside application code — rather than configuring pipelines through a web UI',
        'A programming language specifically designed for writing CI/CD pipelines',
        'Pipelines that can automatically generate application code using AI',
        'A pipeline that analyzes source code quality and suggests architectural improvements'
      ],
      answer: 'A. The practice of defining your pipeline configuration in version-controlled files stored alongside application code — rather than configuring pipelines through a web UI',
      explanation: 'Pipeline as Code is a fundamental principle. Store your pipeline in files: `.github/workflows/ci.yml` (GitHub Actions), `.gitlab-ci.yml` (GitLab), `Jenkinsfile` (Jenkins). These files live in the repository alongside the application code. Benefits: (1) Version history — you can see when and why pipeline changes were made; (2) Code review — pipeline changes go through PR review; (3) Reproducibility — anyone can recreate the exact pipeline; (4) Branches can have different pipeline versions.'
    },
    {
      id: 76,
      question: 'What is the difference between a "cloud-hosted runner" and a "self-hosted runner"?',
      options: [
        'There is no meaningful practical difference between the two types of runners',
        'Self-hosted runners use satellite internet; cloud runners use terrestrial fiber networks',
        'Cloud runners are for commercial projects; self-hosted runners are only for personal side projects',
        'A cloud runner is a machine managed and provided by the CI/CD platform (e.g., GitHub\'s Ubuntu machines); a self-hosted runner is a machine you own, configure, and maintain yourself'
      ],
      answer: 'D. A cloud runner is a machine managed and provided by the CI/CD platform (e.g., GitHub\'s Ubuntu machines); a self-hosted runner is a machine you own, configure, and maintain yourself',
      explanation: 'Cloud runners (GitHub Actions\' `ubuntu-latest`, `windows-latest`, `macos-latest`) are zero-maintenance — provisioned automatically, updated by the platform, billed per-minute. Self-hosted runners are machines you register with the CI platform and maintain yourself. Use self-hosted when: you need specific hardware (GPUs, ARM, custom specs), access to internal networks (databases behind a firewall), specific pre-installed software, or cost reduction at very high build volume.'
    },
    {
      id: 77,
      question: 'What is a "matrix build" in CI/CD?',
      options: [
        'A build that uses mathematical matrix operations for complex scientific computing',
        'A build configuration that runs the same job multiple times in parallel with different parameter combinations — such as multiple language versions, OSes, or dependency versions',
        'A build strategy from the Matrix movie running in a fully simulated test environment',
        'A CI technique that tests every possible combination of all features simultaneously'
      ],
      answer: 'B. A build configuration that runs the same job multiple times in parallel with different parameter combinations — such as multiple language versions, OSes, or dependency versions',
      explanation: 'Matrix builds are perfect for libraries and tools that must work across multiple environments. Example (GitHub Actions): `matrix: { node: [18, 20, 22], os: [ubuntu-latest, windows-latest, macos-latest] }` generates 9 parallel jobs — testing all Node versions on all OSes simultaneously. What would take 9 sequential runs now takes the time of a single run. Ideal for npm packages, Python libraries, and CLI tools that claim cross-platform compatibility.'
    },
    {
      id: 78,
      question: 'What does "pipeline caching" do, and how does it differ from "build caching"?',
      options: [
        'Pipeline caching stores the complete pipeline execution history for compliance auditing',
        'Build caching applies only to Docker-based projects; pipeline caching is for non-containerized apps',
        'Pipeline caching saves and restores files (dependencies, compiled code) between separate pipeline RUNS; build caching (Docker layer cache) reuses layers within a single build step',
        'They are identical — the two terms are fully interchangeable with no distinction'
      ],
      answer: 'C. Pipeline caching saves and restores files (dependencies, compiled code) between separate pipeline RUNS; build caching (Docker layer cache) reuses layers within a single build step',
      explanation: 'Pipeline caching (e.g., `actions/cache` in GitHub Actions) saves a directory (like `~/.npm` or `node_modules/`) from one pipeline run and restores it in the next, avoiding re-downloading packages. Docker layer caching (during `docker build`) reuses unchanged image layers within a single build. Both dramatically improve speed, but they operate at different levels. Good pipelines use both: cache dependencies between runs AND optimize Dockerfile layer ordering for build cache hits.'
    },
    {
      id: 79,
      question: 'What is a "scheduled pipeline" (cron job pipeline) and when is it useful?',
      options: [
        'A pipeline that can only be triggered by a designated project manager during business hours',
        'A pipeline automatically scheduled for deletion after a defined period of inactivity',
        'A pipeline that automatically runs on a configured time schedule (e.g., nightly at 2 AM) regardless of any code changes',
        'A pipeline that waits for a specific number of commits to accumulate before running'
      ],
      answer: 'C. A pipeline that automatically runs on a configured time schedule (e.g., nightly at 2 AM) regardless of any code changes',
      explanation: 'Scheduled pipelines (configured with cron syntax like `0 2 * * *` = 2 AM daily) run on time, not on code events. Useful for: (1) Nightly full regression test suites that are too slow to run on every commit; (2) Weekly automated dependency updates (Dependabot-style); (3) Daily security vulnerability scans; (4) Nightly performance benchmark tests; (5) Periodic integration tests against external third-party APIs that change independently of your code.'
    },
    {
      id: 80,
      question: 'What are "pipeline artifacts" vs. "application artifacts"?',
      options: [
        'Pipeline artifacts are system diagrams of the pipeline; application artifacts are the compiled code',
        'Pipeline artifacts are intermediate files passed between jobs within a single pipeline run (e.g., compiled code, test reports); application artifacts are the final deployable outputs (Docker images, binaries)',
        'They are the same thing — both terms describe the same concept',
        'Pipeline artifacts are always temporary and ephemeral; application artifacts are permanently stored forever'
      ],
      answer: 'B. Pipeline artifacts are intermediate files passed between jobs within a single pipeline run (e.g., compiled code, test reports); application artifacts are the final deployable outputs (Docker images, binaries)',
      explanation: 'Pipeline artifacts are the "hand-offs" between jobs. Example: the `build` job compiles code to `dist/` and uploads it as a pipeline artifact. The `test` job downloads those artifacts and runs tests on the compiled output — avoiding a rebuild. The `lint` job downloads a coverage report artifact. Application artifacts (Docker images, JAR files) are the end product — versioned, stored in artifact repositories, and promoted through environments.'
    },
  ],

  // ── Section 9: CI/CD Tools & Platforms (Q81–Q90) ─────────────────────────
  tools: [
    {
      id: 81,
      question: 'What is GitHub Actions?',
      options: [
        'A separate company acquired by GitHub that provides third-party testing services',
        'A set of physical button clicks and mouse movements a developer makes when using GitHub',
        'GitHub\'s built-in CI/CD and workflow automation platform where pipelines are defined in YAML files under `.github/workflows/` and triggered by GitHub events',
        'A browser extension that adds CI/CD visualization capabilities to the GitHub website'
      ],
      answer: 'C. GitHub\'s built-in CI/CD and workflow automation platform where pipelines are defined in YAML files under `.github/workflows/` and triggered by GitHub events',
      explanation: 'GitHub Actions is GitHub\'s native automation platform launched in 2019. Workflows are YAML files in `.github/workflows/`. They\'re triggered by GitHub events (push, pull_request, release, schedule, etc.). Actions (reusable units, e.g., `actions/checkout@v4`, `docker/build-push-action@v5`) from the Marketplace allow composing complex pipelines easily. Free for public repos; GitHub Free plan includes 2,000 minutes/month for private repos. The go-to choice for GitHub-hosted projects.'
    },
    {
      id: 82,
      question: 'What is Jenkins?',
      options: [
        'A legendary developer named Jenkins who invented the concept of CI/CD in the 1990s',
        'A JavaScript testing framework commonly used alongside CI/CD pipelines',
        'A commercial CI/CD subscription service offered by Jenkins Corporation',
        'An open-source, self-hosted automation server — the most widely deployed CI/CD tool — with 1,800+ plugins for extensibility and pipelines defined in a Jenkinsfile'
      ],
      answer: 'D. An open-source, self-hosted automation server — the most widely deployed CI/CD tool — with 1,800+ plugins for extensibility and pipelines defined in a Jenkinsfile',
      explanation: 'Jenkins (originally Hudson, created by Kohsuke Kawaguchi in 2004) is the most deployed CI/CD tool in the world, especially in enterprises. It is self-hosted (you manage the server), open-source (free, infinitely customizable), and has over 1,800 plugins for every conceivable integration. Pipelines are defined in a `Jenkinsfile` (Groovy DSL). The tradeoff: powerful and flexible, but requires operational overhead — installing plugins, upgrading, configuring agents, and managing backups.'
    },
    {
      id: 83,
      question: 'What file format do GitHub Actions, GitLab CI, and CircleCI all use for pipeline configuration?',
      options: [
        'TOML (Tom\'s Obvious Minimal Language) with `.toml` file extension',
        'YAML (YAML Ain\'t Markup Language) with `.yml` or `.yaml` file extension',
        'XML (Extensible Markup Language) with `.xml` file extension',
        'JSON (JavaScript Object Notation) with `.json` file extension'
      ],
      answer: 'B. YAML (YAML Ain\'t Markup Language) with `.yml` or `.yaml` file extension',
      explanation: 'YAML has become the de facto standard for CI/CD pipeline configuration. GitHub Actions (`.github/workflows/*.yml`), GitLab CI (`.gitlab-ci.yml`), CircleCI (`.circleci/config.yml`), and most modern CI/CD tools use YAML. Its human-readable, indentation-based format makes pipeline definitions relatively clear and maintainable. Common pitfall for beginners: YAML is whitespace-sensitive — incorrect indentation causes cryptic errors. Use a YAML linter to validate.'
    },
    {
      id: 84,
      question: 'What is a "Jenkinsfile"?',
      options: [
        'A Jenkins plugin that adds advanced file management capabilities to the server',
        'A text file (written in Declarative or Scripted Groovy syntax) stored in the repository root that defines the complete Jenkins pipeline — following pipeline-as-code principles',
        'A binary file automatically generated by Jenkins after every successful build',
        'A Jenkins server configuration file stored on the server itself, not in any repository'
      ],
      answer: 'B. A text file (written in Declarative or Scripted Groovy syntax) stored in the repository root that defines the complete Jenkins pipeline — following pipeline-as-code principles',
      explanation: 'A Jenkinsfile brings pipeline-as-code to Jenkins. It lives in the repo root and defines stages, steps, agents, and conditions. Two syntaxes: Declarative (recommended for most, structured, strict) and Scripted (full Groovy, maximum flexibility, harder to read). Example: `pipeline { agent any; stages { stage("Build") { steps { sh "npm install && npm run build" } } } }`. Jenkins reads this file and executes the pipeline when triggered.'
    },
    {
      id: 85,
      question: 'What is GitLab CI/CD?',
      options: [
        'A paid enterprise add-on feature exclusive to GitLab Ultimate subscribers',
        'A separate third-party CI/CD service that integrates with GitLab via an API',
        'A GitLab browser plugin that enables basic CI capabilities for small teams',
        'GitLab\'s natively built-in CI/CD system, configured via `.gitlab-ci.yml`, tightly integrated with GitLab\'s repositories, Container Registry, Security scanning, and Environments feature'
      ],
      answer: 'D. GitLab\'s natively built-in CI/CD system, configured via `.gitlab-ci.yml`, tightly integrated with GitLab\'s repositories, Container Registry, Security scanning, and Environments feature',
      explanation: 'GitLab CI/CD is built directly into GitLab (both GitLab.com SaaS and self-hosted). Configuration is in `.gitlab-ci.yml`. The key advantage: GitLab provides the complete DevOps platform in one product — source code, CI/CD, container registry, security scanning (SAST, DAST, dependency scanning), package registry, and deployment environments. Many enterprises choose GitLab self-hosted because they get everything in one place with full control.'
    },
    {
      id: 86,
      question: 'What is CircleCI?',
      options: [
        'A cloud-native CI/CD platform (with self-hosted option) known for fast parallelism, excellent Docker support, and configuration via `.circleci/config.yml` with reusable "Orbs"',
        'A CI/CD tool designed exclusively for microservices with circular (event-driven) architectures',
        'The historically first CI/CD tool ever created, now maintained by JetBrains',
        'A mathematical visualization tool for calculating and graphing circular code dependencies'
      ],
      answer: 'A. A cloud-native CI/CD platform (with self-hosted option) known for fast parallelism, excellent Docker support, and configuration via `.circleci/config.yml` with reusable "Orbs"',
      explanation: 'CircleCI is a popular cloud-first CI/CD platform. Key features: first-class Docker support (run jobs inside Docker containers), easy parallelism for fast test splitting, "Orbs" (reusable YAML config packages like npm packages for pipelines), SSH access to debug failing builds live, and a generous free tier. Configuration in `.circleci/config.yml`. Popular with startups and teams that want fast, well-supported cloud CI without managing infrastructure.'
    },
    {
      id: 87,
      question: 'What is ArgoCD?',
      options: [
        'A command-line utility for manually managing Kubernetes resources from CI pipelines',
        'A specialized CI tool built specifically for building and testing applications written in Go',
        'A declarative, GitOps continuous delivery tool for Kubernetes that watches Git for changes and automatically syncs the cluster\'s state to match the desired state defined in Git',
        'A CD tool that only supports deploying to Amazon Web Services (AWS)'
      ],
      answer: 'C. A declarative, GitOps continuous delivery tool for Kubernetes that watches Git for changes and automatically syncs the cluster\'s state to match the desired state defined in Git',
      explanation: 'ArgoCD is the leading GitOps CD tool for Kubernetes. It runs inside your Kubernetes cluster and continuously monitors a Git repository. When it detects changes to Kubernetes manifests (Helm charts, Kustomize, raw YAML), it automatically applies those changes to the cluster. Git becomes the single source of truth for desired cluster state. This creates a perfect audit trail and enables declarative drift detection — ArgoCD alerts you if the cluster drifts from what Git says it should be.'
    },
    {
      id: 88,
      question: 'What is Kubernetes (K8s) and what role does it play in CI/CD?',
      options: [
        'A programming language used for writing CI/CD pipeline configuration files',
        'A GitOps deployment tool similar to ArgoCD, made by Google',
        'An open-source container orchestration platform that automates deploying, scaling, and managing containerized applications — commonly the target deployment environment for CD pipelines',
        'A specialized type of Docker container pre-configured for running CI pipeline jobs'
      ],
      answer: 'C. An open-source container orchestration platform that automates deploying, scaling, and managing containerized applications — commonly the target deployment environment for CD pipelines',
      explanation: 'Kubernetes (K8s, created by Google, now CNCF) manages containerized applications across clusters of machines. In a CI/CD pipeline: CI builds and pushes a Docker image to a registry, then CD (often ArgoCD or Helm) deploys that image to Kubernetes. K8s provides: rolling updates (zero downtime), automatic scaling, self-healing (restarts crashed containers), service discovery, load balancing, and health checks. It is the dominant production platform for cloud-native CI/CD.'
    },
    {
      id: 89,
      question: 'What is Helm and what problem does it solve in Kubernetes deployments?',
      options: [
        'A CLI command for creating new Kubernetes clusters in cloud environments',
        'The safety helmet regulation required for all engineers working in physical data centers',
        'A Kubernetes dashboard web application for visually monitoring deployment status',
        'The package manager for Kubernetes — it packages all Kubernetes YAML manifests for an application into versioned, configurable "charts" that can be installed, upgraded, and rolled back with single commands'
      ],
      answer: 'D. The package manager for Kubernetes — it packages all Kubernetes YAML manifests for an application into versioned, configurable "charts" that can be installed, upgraded, and rolled back with single commands',
      explanation: 'Deploying to Kubernetes requires many YAML manifests (Deployment, Service, Ingress, ConfigMap, Secret). Helm packages all of these into a "chart" with templating for environment-specific values. In CD pipelines: `helm upgrade --install myapp ./chart --set image.tag=$VERSION --set replicas=3` deploys a new version with one command. Helm also manages releases and enables easy rollbacks: `helm rollback myapp 2` rolls back to revision 2.'
    },
    {
      id: 90,
      question: 'What is Terraform and how does it fit into a CI/CD pipeline?',
      options: [
        'An open-source Infrastructure as Code tool (by HashiCorp) that provisions cloud resources using declarative `.tf` files — often run as pipeline stages for automated infrastructure management',
        'A relational database management system optimized for CI build server metadata',
        'A code quality and style analysis tool for detecting security vulnerabilities',
        'A Kubernetes-alternative container orchestration system with a different architecture'
      ],
      answer: 'A. An open-source Infrastructure as Code tool (by HashiCorp) that provisions cloud resources using declarative `.tf` files — often run as pipeline stages for automated infrastructure management',
      explanation: 'Terraform lets you define cloud infrastructure declaratively: `resource "aws_instance" "web" { ami = "ami-abc" instance_type = "t3.micro" }`. In CI/CD pipelines: a `terraform plan` job (in a PR) shows what infrastructure will change and posts the plan as a PR comment for review. On merge to main, `terraform apply` automatically provisions the infrastructure. This makes infrastructure changes auditable, reviewable, and automated — just like application code changes.'
    },
  ],

  // ── Section 10: Best Practices, Security & DevOps Culture (Q91–Q100) ──────
  practices: [
    {
      id: 91,
      question: 'What does "shift left" mean in the context of CI/CD and software quality?',
      options: [
        'Shifting all team meetings to the morning (left side of the calendar)',
        'Moving testing, security checks, and quality validation earlier (to the "left") in the development lifecycle — catching problems closer to when they were introduced, when they are cheapest to fix',
        'A Git branching strategy where commits are moved to earlier branches in the timeline',
        'Physically moving your CI server to a different location in the data center'
      ],
      answer: 'B. Moving testing, security checks, and quality validation earlier (to the "left") in the development lifecycle — catching problems closer to when they were introduced, when they are cheapest to fix',
      explanation: '"Shift left" visualizes the development lifecycle as a left-to-right timeline from coding to production. Traditional QA happened late (right), making bugs expensive — the IBM Systems Sciences Institute found bugs are 100x more expensive to fix post-release vs. at design time. Shift left: developers run tests locally before pushing, CI runs checks on every commit, security scans run in PRs, code quality gates block merges. Find bugs at the left = fix in minutes. Find bugs at the right = fix in days.'
    },
    {
      id: 92,
      question: 'What is DevSecOps?',
      options: [
        'A hardened, classified version of the DevOps methodology used exclusively by defense and intelligence agencies',
        'The integration of security practices, automated security tools, and security thinking into every stage of the DevOps/CI/CD process — making security everyone\'s shared responsibility',
        'A team structure where developers, security specialists, and operations engineers work in entirely separate departments with documented hand-off processes',
        'A government-issued security certification required for using cloud-based DevOps tools'
      ],
      answer: 'B. The integration of security practices, automated security tools, and security thinking into every stage of the DevOps/CI/CD process — making security everyone\'s shared responsibility',
      explanation: 'DevSecOps (Development + Security + Operations) breaks down the traditional model where security was a separate team that reviewed code once before release. In DevSecOps, security tools run automatically in every pipeline: SAST (static code analysis), DAST (runtime vulnerability scanning), SCA (open-source dependency vulnerabilities), secret detection (catches committed API keys), and container image scanning. Developers receive security feedback in minutes, not weeks.'
    },
    {
      id: 93,
      question: 'What are "secrets" in CI/CD pipelines and what is the critical rule about them?',
      options: [
        'Undocumented pipeline features that only senior DevOps engineers know about',
        'The encrypted output artifacts generated by security scanning tools in the pipeline',
        'Private GitHub/GitLab repositories used to store sensitive CI/CD configurations',
        'Sensitive configuration values (API keys, passwords, tokens, certificates) that pipelines need at runtime — and must NEVER be hardcoded in source code or printed in logs'
      ],
      answer: 'D. Sensitive configuration values (API keys, passwords, tokens, certificates) that pipelines need at runtime — and must NEVER be hardcoded in source code or printed in logs',
      explanation: 'Pipeline secrets are sensitive values needed to operate: AWS access keys, Stripe API keys, database passwords, Docker registry tokens. The rules: (1) NEVER commit to code — secrets in Git history live forever, even after deletion; (2) NEVER print in logs — logs are widely accessible; (3) Store in a secrets manager: GitHub Encrypted Secrets, HashiCorp Vault, AWS SSM Parameter Store, 1Password Secrets Automation; (4) Rotate them regularly. CI systems automatically redact known secret values from log output.'
    },
    {
      id: 94,
      question: 'What is SAST (Static Application Security Testing)?',
      options: [
        'Testing the stability and uptime of a static website under simulated user load',
        'A type of stable server used for running static (unchanging) websites securely',
        'An automated security testing method that analyzes source code, bytecode, or binaries for security vulnerabilities without actually executing the application',
        'A security audit performed by a dedicated, non-rotating (static) security team'
      ],
      answer: 'C. An automated security testing method that analyzes source code, bytecode, or binaries for security vulnerabilities without actually executing the application',
      explanation: 'SAST analyzes code statically (without running it) to find security flaws: SQL injection patterns, cross-site scripting (XSS), insecure deserialization, hardcoded credentials, use of vulnerable functions, and improper input validation. It runs early in CI (shift left), giving developers security feedback within minutes of committing code. Popular SAST tools: SonarQube, Semgrep, Checkmarx, Veracode, Snyk Code, and GitHub Advanced Security (CodeQL).'
    },
    {
      id: 95,
      question: 'What is DAST (Dynamic Application Security Testing)?',
      options: [
        'A rapid application development framework for building security-focused web applications',
        'A static code analysis tool that has configurable, dynamic rule sets',
        'Testing the dynamic typing and runtime type-checking features of programming languages',
        'An automated security testing method that tests a running application by actively sending malicious inputs and observing responses — simulating real attacker behavior against a live system'
      ],
      answer: 'D. An automated security testing method that tests a running application by actively sending malicious inputs and observing responses — simulating real attacker behavior against a live system',
      explanation: 'DAST "attacks" the running application from the outside, just like a real attacker would. It sends SQL injection strings, XSS payloads, authentication bypass attempts, and path traversal attacks to web endpoints and observes responses for signs of vulnerability. DAST finds runtime vulnerabilities that SAST misses (business logic flaws, authentication issues, server misconfigurations). Run DAST against the staging environment in the CD pipeline. Popular tools: OWASP ZAP, Burp Suite Enterprise, Nikto.'
    },
    {
      id: 96,
      question: 'What are the four DORA metrics used to measure DevOps and CI/CD performance?',
      options: [
        'Deployment Frequency, Lead Time for Changes, Change Failure Rate, and Mean Time to Recovery (MTTR)',
        'Developer Output, Repository Activity, Operations Cost, Automation Percentage',
        'Deploy Rate, Object Coverage, Runtime Stability, Application Availability',
        'Docker Usage Rate, On-Call Rotation Time, Release Approval Cycles, Automation Tooling Count'
      ],
      answer: 'A. Deployment Frequency, Lead Time for Changes, Change Failure Rate, and Mean Time to Recovery (MTTR)',
      explanation: 'DORA (DevOps Research and Assessment by Nicole Forsgren, Jez Humble, and Gene Kim) identified four statistically validated metrics that predict organizational performance: (1) Deployment Frequency — how often you deploy to production; (2) Lead Time for Changes — time from code commit to production; (3) Change Failure Rate — % of deployments causing production incidents; (4) MTTR — how fast you recover from failures. Elite teams deploy multiple times/day, have <1hr lead time, <5% failure rate, and <1hr MTTR.'
    },
    {
      id: 97,
      question: 'What is "Mean Time to Recovery" (MTTR)?',
      options: [
        'The average time it takes for a new engineer to become fully productive on the team',
        'The average time it takes to restore service after a production incident or failed deployment — a key measure of operational resilience',
        'The time required to fully recover all data from a backup after a data loss incident',
        'The average time elapsed between consecutive production deployments'
      ],
      answer: 'B. The average time it takes to restore service after a production incident or failed deployment — a key measure of operational resilience',
      explanation: 'MTTR is one of DORA\'s four key metrics. Elite DevOps teams measure MTTR in minutes — they detect issues instantly (observability), roll back automatically or manually in seconds (fast rollback), and have practiced incident runbooks. Poor MTTR (hours or days) signals gaps in: monitoring (slow detection), deployment automation (slow rollback), on-call processes (slow response), and documentation (slow diagnosis). Improving MTTR reduces the cost and user impact of production incidents.'
    },
    {
      id: 98,
      question: 'What is "deployment frequency" as a DORA metric and what does it measure?',
      options: [
        'The rate at which new deployment infrastructure resources are provisioned',
        'How frequently the CI/CD pipeline configuration file itself is updated and changed',
        'How often an organization successfully deploys code to production — ranging from less than once per month (low performers) to multiple times per day (elite performers)',
        'A mandatory minimum number of deployments each developer must complete per day'
      ],
      answer: 'C. How often an organization successfully deploys code to production — ranging from less than once per month (low performers) to multiple times per day (elite performers)',
      explanation: 'Deployment frequency is the first DORA metric. It measures organizational agility: how often can you deliver value to users? DORA\'s 2023 State of DevOps Report segments teams: Elite (multiple deploys/day), High (1/day to 1/week), Medium (1/week to 1/month), Low (<1/month). Higher frequency (paired with low Change Failure Rate) indicates mature CI/CD practices, small batch sizes, robust automated testing, and a psychologically safe engineering culture.'
    },
    {
      id: 99,
      question: 'What is "observability" in the context of production systems and CI/CD?',
      options: [
        'The visibility settings (public or private) of a repository on a hosting platform',
        'The ability to understand the internal state and behavior of a system by examining its external outputs — specifically: logs, metrics, and distributed traces',
        'A GitHub feature that allows repository administrators to observe all developer activity',
        'Management\'s practice of monitoring developer productivity and keyboard activity'
      ],
      answer: 'B. The ability to understand the internal state and behavior of a system by examining its external outputs — specifically: logs, metrics, and distributed traces',
      explanation: 'Observability (the three pillars: Logs, Metrics, Traces) is the prerequisite for confident Continuous Deployment. If you deploy frequently, you must know immediately when something goes wrong. Logs tell you what happened, metrics tell you how the system is performing (latency, error rate, throughput), and distributed traces show you request flows across microservices. Tools: Datadog, Prometheus + Grafana, OpenTelemetry, Jaeger, Elastic. Without observability, frequent deployments are reckless gambles.'
    },
    {
      id: 100,
      question: 'According to DevOps principles, what is the most important cultural transformation a team needs to successfully adopt CI/CD?',
      options: [
        'Appointing a dedicated "CI/CD Manager" who has exclusive control over all deployments and pipeline changes',
        'Purchasing the most expensive enterprise-grade CI/CD tooling available on the market',
        'Fostering a culture of shared ownership, psychological safety, blameless learning, and breaking down the wall between development, security, and operations',
        'Having development and operations teams work in completely separate silos with well-documented hand-off processes between them'
      ],
      answer: 'C. Fostering a culture of shared ownership, psychological safety, blameless learning, and breaking down the wall between development, security, and operations',
      explanation: 'The most important insight from DORA research: culture and team structure predict performance more strongly than any specific tool or practice. The highest-performing teams have: (1) Psychological safety — people report failures without fear of blame; (2) Shared ownership — Dev and Ops together own the full lifecycle; (3) Blameless post-mortems — incidents are learning opportunities; (4) Continuous improvement mindset. A team with the right culture and basic tools will outperform a blame-driven, siloed team with the world\'s best tooling every time.'
    },
  ]

};
// ─── Quiz Renderer ────────────────────────────────────────────────────────────

function renderQuiz(sectionKey, questions) {
  const container = document.getElementById(`quiz-${sectionKey}`);
  if (!container || !questions) return;

  const questionsHtml = questions.map((q) => `
    <div class="bg-white rounded-xl border border-slate-100 shadow-sm p-5 mb-4 last:mb-0">
      <div class="flex items-start gap-3 mb-4">
        <span class="flex-shrink-0 w-7 h-7 bg-indigo-100 text-indigo-700 rounded-lg flex items-center justify-center text-xs font-extrabold">
          ${q.id}
        </span>
        <p class="text-slate-800 font-semibold leading-relaxed text-sm sm:text-base">${q.question}</p>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4 pl-10">
        ${q.options.map((opt, i) => `
          <div class="flex items-start gap-2.5 p-3 bg-slate-50 rounded-lg border border-slate-100 text-sm text-slate-600 leading-relaxed">
            <span class="flex-shrink-0 w-5 h-5 rounded-full border-2 border-slate-300 bg-white flex items-center justify-center text-xs font-bold text-slate-500 mt-0.5">${['A','B','C','D'][i]}</span>
            <span>${opt}</span>
          </div>
        `).join('')}
      </div>
      <details class="pl-10 group">
        <summary class="flex items-center gap-2 text-indigo-600 font-semibold text-sm cursor-pointer hover:text-indigo-700 select-none list-none w-fit">
          <svg class="chevron w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"/>
          </svg>
          Reveal Answer &amp; Explanation
        </summary>
        <div class="mt-3 bg-emerald-50 border border-emerald-200 rounded-xl p-4">
          <div class="flex items-center gap-2.5 mb-2.5">
            <span class="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center text-white text-xs font-black flex-shrink-0">✓</span>
            <span class="font-bold text-emerald-900 text-sm">Correct Answer: ${q.answer}</span>
          </div>
          <p class="text-sm text-emerald-800 leading-relaxed">${q.explanation}</p>
        </div>
      </details>
    </div>
  `).join('');

  container.innerHTML = `
    <div class="mt-12">
      <div class="flex items-center gap-3 mb-6">
        <div class="flex-1 h-px bg-gradient-to-r from-transparent via-indigo-200 to-transparent"></div>
        <div class="flex items-center gap-2.5 px-5 py-2.5 bg-gradient-to-r from-indigo-600 to-violet-600 rounded-full text-white text-sm font-bold shadow-lg shadow-indigo-500/30">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
          Section Quiz &nbsp;·&nbsp; ${questions.length} Questions
        </div>
        <div class="flex-1 h-px bg-gradient-to-r from-transparent via-indigo-200 to-transparent"></div>
      </div>
      <div class="bg-gradient-to-br from-indigo-50/70 via-slate-50 to-violet-50/50 border border-indigo-100 rounded-2xl p-5 sm:p-6">
        <div class="flex items-center gap-2 mb-5 pb-4 border-b border-indigo-100">
          <span class="text-lg">💡</span>
          <p class="text-xs text-indigo-700 font-medium">Click <strong>"Reveal Answer"</strong> under each question to see the correct answer and a detailed explanation.</p>
        </div>
        ${questionsHtml}
      </div>
    </div>
  `;
}

function renderAllQuizzes() {
  Object.entries(quizData).forEach(([key, questions]) => {
    renderQuiz(key, questions);
  });
}

// ─── Mobile Navigation ────────────────────────────────────────────────────────

const sidebar       = document.getElementById('sidebar');
const overlay       = document.getElementById('sidebar-overlay');
const menuToggle    = document.getElementById('menu-toggle');
const hamburgerIcon = document.getElementById('hamburger-icon');
const closeIcon     = document.getElementById('close-icon');
let   menuOpen      = false;

function openMobileMenu() {
  menuOpen = true;
  sidebar.classList.remove('-translate-x-full');
  overlay.classList.remove('opacity-0', 'pointer-events-none');
  overlay.classList.add('opacity-100');
  hamburgerIcon.classList.add('hidden');
  closeIcon.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeMobileMenu() {
  menuOpen = false;
  sidebar.classList.add('-translate-x-full');
  overlay.classList.remove('opacity-100');
  overlay.classList.add('opacity-0', 'pointer-events-none');
  hamburgerIcon.classList.remove('hidden');
  closeIcon.classList.add('hidden');
  document.body.style.overflow = '';
}

menuToggle.addEventListener('click', () => {
  menuOpen ? closeMobileMenu() : openMobileMenu();
});

overlay.addEventListener('click', closeMobileMenu);

// Close mobile menu when a sidebar link is clicked
document.querySelectorAll('.sidebar-link').forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth < 1024) closeMobileMenu();
  });
});

// ─── Scroll Progress ──────────────────────────────────────────────────────────

const progressBar         = document.getElementById('progress-bar');
const sidebarProgressBar  = document.getElementById('sidebar-progress-bar');
const sidebarProgressLabel = document.getElementById('sidebar-progress-label');
const backToTopBtn        = document.getElementById('back-to-top');

function updateScrollProgress() {
  const scrollTop    = window.scrollY;
  const docHeight    = document.documentElement.scrollHeight - window.innerHeight;
  const progress     = docHeight > 0 ? Math.round((scrollTop / docHeight) * 100) : 0;
  const pct          = progress + '%';

  progressBar.style.width             = pct;
  sidebarProgressBar.style.width      = pct;
  sidebarProgressLabel.textContent    = pct;

  // Back-to-top button visibility
  if (scrollTop > 400) {
    backToTopBtn.classList.remove('opacity-0', 'pointer-events-none');
    backToTopBtn.classList.add('opacity-100');
  } else {
    backToTopBtn.classList.add('opacity-0', 'pointer-events-none');
    backToTopBtn.classList.remove('opacity-100');
  }
}

// ─── Active Section Tracking ──────────────────────────────────────────────────

const sectionIds = [
  'prerequisites',
  'intro',
  'version-control',
  'continuous-integration',
  'automated-testing',
  'build-artifacts',
  'continuous-delivery',
  'continuous-deployment',
  'pipeline-architecture',
  'cicd-tools',
  'best-practices'
];

const sectionTitles = {
  'prerequisites':          'Prerequisites',
  'intro':                  'What is CI/CD?',
  'version-control':        'Version Control & Git',
  'continuous-integration': 'Continuous Integration',
  'automated-testing':      'Automated Testing',
  'build-artifacts':        'Build Systems & Artifacts',
  'continuous-delivery':    'Continuous Delivery',
  'continuous-deployment':  'Continuous Deployment',
  'pipeline-architecture':  'Pipeline Architecture',
  'cicd-tools':             'CI/CD Tools',
  'best-practices':         'Best Practices & DevOps'
};

const currentSectionTitleEl = document.getElementById('current-section-title');

function updateActiveSection() {
  const scrollY = window.scrollY + 120; // offset for sticky header
  let activeId  = sectionIds[0];

  for (const id of sectionIds) {
    const el = document.getElementById(id);
    if (el && el.offsetTop <= scrollY) {
      activeId = id;
    }
  }

  // Update breadcrumb
  if (currentSectionTitleEl && sectionTitles[activeId]) {
    currentSectionTitleEl.textContent = sectionTitles[activeId];
  }

  // Update sidebar links
  document.querySelectorAll('.sidebar-link').forEach(link => {
    const href = link.getAttribute('href');
    const id   = href ? href.replace('#', '') : '';
    if (id === activeId) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

// ─── Scroll Event (throttled) ─────────────────────────────────────────────────

let ticking = false;

window.addEventListener('scroll', () => {
  if (!ticking) {
    requestAnimationFrame(() => {
      updateScrollProgress();
      updateActiveSection();
      ticking = false;
    });
    ticking = true;
  }
}, { passive: true });

// ─── Init ─────────────────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
  renderAllQuizzes();
  updateScrollProgress();
  updateActiveSection();
});
