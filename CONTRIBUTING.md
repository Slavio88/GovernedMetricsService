# Contributing to Governed Metrics Service (GMS)

:heart_eyes: We love feedback and contributions! :heart_eyes:

The following is a set of guidelines for contributing to the Governed Metrics Service, which is hosted in the eapowertools Organization on GitHub. These are just guidelines, not rules. Use your best judgment, and feel free to propose changes to this document in a pull request.

#### Table Of Contents

[What should I know before I get started?](#what-should-i-know-before-i-get-started)
  * [Code of Conduct](#code-of-conduct)


## What should I know before I get started?

### Code of Conduct

This project adheres to the Contributor Covenant [code of conduct](CODE_OF_CONDUCT.md).
By participating, you are expected to uphold this code.
Please report unacceptable behavior to [eapowertools@gmail.com](mailto:eapowertools@gmail.com).

### Governed Metrics Service (GMS) and Packages

The GMS is a standalone component of the Governed Self-Service Reference Deployment.
When you consider contributing to GMS, keep in mind that GMS is packaged into a default distribution installer.  The contributions you make may not be deployed widely until the GMS installer is updated.

The GMS installer will be updated every six weeks except in the case of a critical upgrade which may happen at any time.

### Design Decisions

When we make a significant change or decision in how we maintain the project and what we can or cannot support, we will document it in the release notes for the latest release the change or decision has been made.

## How Can I Contribute?

### Reporting Bugs

This section guides you through submitting a bug report for GMS. Following these guidelines helps maintainers and the community understand your report :pencil:, reproduce the behavior :computer: :computer:, and find related reports :mag_right:.

Before creating bug reports, please check [this list](#before-submitting-a-bug-report) as you might find out that you don't need to create one. When you are creating a bug report, please [include as many details as possible](#how-do-i-submit-a-good-bug-report). Fill out [the required template](issue_template.md), the information it asks for helps us resolve issues faster.

#### Before Submitting A Bug Report

* **Check the [debugging guide](http://eapowertools.github.io/GovernedMetricsService/user-guide/troubleshoot/).** You might be able to find the cause of the problem and fix things yourself. Most importantly, check if you can reproduce the problem [in the latest version of Governed Metrics Service](https://github.com/eapowertools/GovernedMetricsService/releases/latest).
* **Perform a [cursory search](https://github.com/issues?q=+is:issue+repo:eapowertools/governedmetricsservice)** to see if the problem has already been reported. If it has, add a comment to the existing issue instead of opening a new one.

#### How Do I Submit A (Good) Bug Report?

Bugs are tracked as [GitHub issues](https://guides.github.com/features/issues/). After you've determined [which repository](#Governed-Metrics-Service-(GMS)-and-Packages) your bug is related to, create an issue on that repository and provide the following information by filling in [the template](ISSUE_TEMPLATE.md).

Explain the problem and include additional details to help maintainers reproduce the problem:

* **Use a clear and descriptive title** for the issue to identify the problem.
* **Describe the exact steps which reproduce the problem** in as many details as possible. For example, start by explaining how you used GMS, e.g. which button on the test page or REST endpoint. 
* **Provide the log file generated when the problem appeared**. Include the file located in _%program files%\qlik\sense\eapowertools\governedmetricsservice\log_.
* **Describe the behavior you observed after following the steps** and point out what exactly is the problem with that behavior.
* **Explain which behavior you expected to see instead and why.**

Provide more context by answering these questions:

* **Did the problem start happening recently** (e.g. after updating to a new version of GMS) or was this always a problem?
* If the problem started happening recently, **can you reproduce the problem in an older version of GMS?** What's the most recent version in which the problem doesn't happen? You can download older versions of GMS from [the releases page](https://github.com/eapowertools/governedmetricsservice/releases).
* **Can you reliably reproduce the issue?** If not, provide details about how often the problem happens and under which conditions it normally happens.

Include details about your configuration and environment:

* **Which version of GMS are you using?** You can get the exact version by looking on the GMS test page or the config.js file located in the config directory of the distribution.
* **What's the name and version of the OS you're using**?

### Suggesting Enhancements

This section guides you through submitting an enhancement suggestion for Governed Metrics Service, including completely new features and minor improvements to existing functionality. Following these guidelines helps maintainers and the community understand your suggestion :pencil: and find related suggestions :mag_right:.

Before creating enhancement suggestions, please check [this list](#before-submitting-an-enhancement-suggestion) as you might find out that you don't need to create one. When you are creating an enhancement suggestion, please [include as many details as possible](#how-do-i-submit-a-good-enhancement-suggestion). Fill in [the template](ISSUE_TEMPLATE.md), including the steps that you imagine you would take if the feature you're requesting existed.

#### Before Submitting An Enhancement Suggestion

* **Check the [troubleshooting guide](http://eapowertools.github.io/GovernedMetricsService/user-guide/troubleshoot/)** for tips — you might discover that the enhancement is already available. Most importantly, check if you're using [the latest version of GMS](https://github.com/eapowertools/GovernedMetricsService/releases/latest).
* **Perform a [cursory search](https://github.com/issues?q=+is:issue+repo:eapowertools/governedmetricsservice)** to see if the enhancement has already been suggested. If it has, add a comment to the existing issue instead of opening a new one.

#### How Do I Submit A (Good) Enhancement Suggestion?

Enhancement suggestions are tracked as [GitHub issues](https://guides.github.com/features/issues/). After you've determined [which repository](#Governed-Metrics-Service-(GMS)-and-Packages) your enhancement suggestion is related to, create an issue on that repository and provide the following information:

* **Use a clear and descriptive title** for the issue to identify the suggestion.
* **Provide a step-by-step description of the suggested enhancement** in as many details as possible.
* **Provide specific examples to demonstrate the steps**. Include copy/pasteable snippets which you use in those examples, as [Markdown code blocks](https://help.github.com/articles/markdown-basics/#multiple-lines).
* **Describe the current behavior** and **explain which behavior you expected to see instead** and why.
* **Explain why this enhancement would be useful** to most Governed Metrics Service users and isn't something that can or should be implemented.
* **Which version of GMS are you using?** You can get the exact version by looking on the GMS test page or the config.js file located in the config directory of the distribution.
* **Specify the name and version of the OS you're using.**

### Your First Code Contribution

Unsure where to begin contributing to GMS? You can start by looking through these `beginner` and `help-wanted` issues:

* [Beginner issues][beginner] - issues which should only require a few lines of code, and a test or two.
* [Help wanted issues][help-wanted] - issues which should be a bit more involved than `beginner` issues.

Both issue lists are sorted by total number of comments. While not perfect, number of comments is a reasonable proxy for impact a given change will have.

### Pull Requests

* Fill in [the required template](PULL_REQUEST_TEMPLATE.md)
* Include screenshots and animated GIFs in your pull request whenever possible.


[beginner]:https://github.com/issues?utf8=%E2%9C%93&q=is%3Aopen+is%3Aissue+label%3Abeginner+repo%3Aeapowertools/governedmetricsservice+sort%3Acomments-desc
[help-wanted]:https://github.com/issues?q=is%3Aopen+is%3Aissue+label%3Ahelp-wanted+repo%3Aeapowertools/governedmetricsservice+sort%3Acomments-desc