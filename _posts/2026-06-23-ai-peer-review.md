---
title: "Building an AI Peer Review Assistant: Useful, but Not Yet Trustworthy by Default"
date: 2026-06-23
categories:
  - AI
  - Research
  - Peer Review
tags:
  - AI peer review
  - LLM
  - multi-agent systems
  - research tools
  - prompt injection
---

Peer review is one of the most important quality-control systems in science, but it is also under pressure. Submission volume keeps growing, reviewers are overloaded, and many authors wait months for feedback. At the same time, large language models are becoming much better at reading papers, summarizing arguments, checking structure, and generating detailed critiques.

This makes AI-assisted peer review feel almost inevitable. But I do not think the key question is simply whether AI can review papers. A more serious question is: under what conditions can AI feedback be useful, fair, and safe enough to trust?

Recently, I have been working on a small project around this question: [paper_reviewer](https://github.com/ShijieTang/paper_reviewer). The goal is not to replace human reviewers, but to explore whether a multi-agent AI system can help authors receive earlier, more structured, and more diverse feedback before formal submission.

## 1. The growth of AI use in peer review

AI is already entering the peer-review workflow, even when it is not always formally acknowledged. A recent arXiv paper, "Can We Trust AI Referees? On the Security and Reliability of AI Peer Review," summarizes a broader trend: scientific output is increasing, reviewer capacity is limited, and LLMs are attractive because they can quickly summarize papers, identify weaknesses, and generate review-style feedback.[^1]

The same paper also points out that AI use in reviewing is no longer just hypothetical. Some conferences and research communities are experimenting with AI-assisted reviewing, while other venues are tightening their policies because of confidentiality, reliability, and misuse concerns.[^1]

From an author's perspective, this is understandable. Before submitting to a conference or journal, it is useful to ask:

- Is my motivation clear?
- Are the experiments convincing?
- Are the limitations obvious?
- Would a reviewer see a fatal weakness?
- Is my rebuttal likely to address the actual concern?

These are exactly the kinds of questions where an AI assistant can be helpful, especially for early-stage drafts. However, once AI is used in formal review or business settings, the problem becomes much more sensitive.

## 2. Security and bias concerns in AI peer-review systems

The paper that caught my attention focuses on the security and reliability risks of AI peer review. It describes how AI referees can be vulnerable across the review lifecycle, including manuscript processing, deep review, rebuttal handling, and meta-review synthesis.[^1]

Several risks are especially relevant:

- **Prompt injection:** authors may hide instructions inside a manuscript to manipulate an AI reviewer.
- **Authority bias:** an AI system may give more favorable reviews when a paper appears to come from a prestigious institution or famous author.
- **Assertion strength bias:** confident writing may make weak claims appear stronger than they are.
- **Rebuttal sycophancy:** an AI reviewer may be overly persuaded by an author's rebuttal, even when the rebuttal does not fully answer the criticism.
- **Context poisoning:** retrieved context or supporting material may distort the final review.

These problems do not mean AI peer review is useless. Instead, they show that AI peer-review systems should be treated as evaluative infrastructure, not just chatbots with a review prompt.

My current view is that the risk level depends heavily on the use case. For **personal use**, such as an author uploading their own draft to get suggestions, strong adversarial defenses may not be the first priority. If the author simply wants honest feedback, there is little reason for them to attack their own review assistant. Basic checks and transparent warnings may be enough.

For **business use**, journal platforms, or critical conference workflows, the standard must be much higher. In those settings, incentives change. People may try to influence the review, protect reputation, or gain acceptance. Security guardrails, anonymization, audit logs, and stress tests become necessary rather than optional.

## 3. Introducing our GitHub project

Our project, [paper_reviewer](https://github.com/ShijieTang/paper_reviewer), is a lightweight multi-agent system for AI-assisted manuscript feedback. The core idea is to simulate several reviewer perspectives instead of relying on a single generic review.

At a high level, the system is designed to:

- read a manuscript or paper draft,
- generate structured review feedback,
- identify strengths and weaknesses,
- provide scores or recommendation-style judgments,
- help authors understand what to improve before submission.

I see this project mainly as an author-support tool. It can help researchers, especially students or early-career authors, get an initial sense of how their manuscript may be received. It should not be treated as a final decision-maker.

The most valuable direction is to make the feedback more reliable, more evidence-grounded, and easier to evaluate against real peer-review data.

## 4. Observation: author rights and manuscript safety

One concern I want to add is about author rights. If authors upload unpublished manuscripts into AI systems, they may worry about leakage, model training, or unintended reuse.

A practical suggestion is that, when appropriate, authors can first submit a manuscript draft to a public preprint server such as arXiv. This creates a public timestamp and makes authorship clearer before using external AI tools for feedback. This does not solve every confidentiality issue, and it may not fit all fields or conference policies, but it is a useful protection for some research workflows.

For private or high-stakes manuscripts, local-first tools or clearly documented data policies are important. AI peer-review tools should tell users what happens to uploaded manuscripts, whether data is stored, and whether it may be used for model training.

## 5. Our next steps

Based on the recent literature and our current project stage, I would rank the next steps as follows.

### Step 1: Build and update the evaluation dataset

This should be the first priority. Before improving the system, we need a better way to measure whether it is improving.

The dataset should include papers with real or realistic peer-review information, such as:

- paper ID,
- accept or reject decision,
- review scores,
- reviewer strengths,
- reviewer weaknesses,
- optional rebuttal text,
- optional metadata after anonymization.

A useful target format could be:

```json
{
  "paper_id": "icml_reject_003",
  "accept_or_not": "reject",
  "score": 3,
  "reviews": [
    {
      "reviewer_id": "reviewer_1",
      "strengths": ["..."],
      "weaknesses": ["..."]
    }
  ]
}
```

The goal is not only to collect more papers, but also to create a benchmark where we can compare AI-generated reviews with human reviews in a structured way.

### Step 2: Implement bias and fairness checks

Authority bias is one of the most important problems to test. My current idea is to use an agent or preprocessing method to remove author identity, affiliation, and other prestige-related information before sending the manuscript to the AI reviewer.

This could include:

- removing author names,
- removing institutional affiliations,
- masking acknowledgements,
- hiding funding or lab identity when not needed,
- checking whether review scores change before and after anonymization.

If the same paper receives a much stronger review only because of famous names or institutions, the system is not reliable enough.

### Step 3: Integrate security guardrails

Security guardrails should depend on the deployment scenario.

For personal use, the system can start with lightweight checks:

- warn users that AI feedback is advisory,
- scan for obvious hidden instructions,
- avoid treating manuscript text as system instructions,
- show which parts of the paper influenced the review.

For business, journal, or conference use, the system should be much stricter:

- detect hidden prompt injection in PDFs or source files,
- separate manuscript content from model instructions,
- log review pipeline steps,
- use adversarial test cases,
- prevent rebuttals from automatically overriding earlier criticism,
- require human oversight for final decisions.

This distinction matters because not every version of the tool needs the same level of defense, but high-stakes use cases absolutely do.

### Step 4: Expand reviewer perspectives

Expanding reviewer personas should come after the dataset and evaluation pipeline are stronger.

The goal is not just to add more names or roles. The goal is to make the review process cover different kinds of concerns, such as:

- technical correctness,
- novelty,
- experimental design,
- clarity,
- ethics,
- reproducibility,
- real-world usefulness.

More reviewer perspectives are only useful if we can test whether they improve feedback quality. Otherwise, adding more agents may simply create longer reviews without better judgment.

## Closing thoughts

AI peer review is exciting because it can make feedback faster and more accessible. It may help authors improve drafts before submission, reduce the burden on human reviewers, and provide structured criticism for early-stage ideas.

But AI peer review is also risky because reviewing is not just text generation. It involves judgment, fairness, confidentiality, and incentives. A system that works well for personal draft feedback may still be unsafe for formal conference decisions.

For our project, the next stage is therefore not just "make the AI smarter." It is to build the dataset, evaluate the system, reduce bias, and add security according to the real use case.

That is the direction I want [paper_reviewer](https://github.com/ShijieTang/paper_reviewer) to move toward: a useful research assistant first, and a more reliable peer-review simulation system over time.

## References

[^1]: "Can We Trust AI Referees? On the Security and Reliability of AI Peer Review." arXiv, 2026. https://arxiv.org/html/2604.23593v1

[^2]: Zhicheng Lin. "Hidden Prompts in Manuscripts Exploit AI-Assisted Peer Review." arXiv, 2025. https://arxiv.org/abs/2507.06185

[^3]: Changjia Zhu, Junjie Xiong, Renkai Ma, Zhicong Lu, Yao Liu, and Lingyao Li. "When Your Reviewer is an LLM: Biases, Divergence, and Prompt Injection Risks in Peer Review." arXiv, 2025. https://arxiv.org/abs/2509.09912

[^4]: Shijie Tang, Thu Vu. "paper_reviewer." GitHub repository. https://github.com/ShijieTang/paper_reviewer
