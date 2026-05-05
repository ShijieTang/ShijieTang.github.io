---
title: "Models Know Their Shortcuts: Deployment-Time Shortcut Mitigation"
collection: publications
category: Preprint
venue: "arXiv preprint arXiv:2604.12277"
permalink: /publications/2026-shortcuts
date: 2026-04-14
paperurl: 'https://arxiv.org/abs/2604.12277'
citation: 'Li J, Tang S, Kaynar G, Du S, Kingsford C. Models Know Their Shortcuts: Deployment-Time Shortcut Mitigation. <i>arXiv preprint arXiv:2604.12277</i>. 2026.'
---

This paper addresses shortcut learning in pretrained language models, where superficial token-level patterns fail to generalize under distribution shifts. "Shortcut Guardrail" is a deployment-time framework that requires no access to original training data or advance knowledge of shortcut types. It identifies problematic shortcuts through gradient-based attribution and employs a lightweight LoRA-based module trained with Masked Contrastive Learning to maintain consistent representations regardless of individual tokens. The approach improves performance across sentiment classification, toxicity detection, and natural language inference tasks under distribution shift.
