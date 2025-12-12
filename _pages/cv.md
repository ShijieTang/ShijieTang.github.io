---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

Education
======
* M.S. in U.S., Carnegie Mellon University, 2026 (expected)
* B.S. in China, Zhejiang University, 2024

Work experience
======
* Peer Learning for NLP shortcut, Carnegie Mellon University (Aug 2025 – present)
  * Supervisor: *Prof. Carl Kingsford*
  * Role: Research Assistant 
    * Developed a LLM-based method to deal with shortcut problem in general NLP model
    * Improved the algorithm’s stability, running speed and increased model inference accuracy from 0.8 to 0.94

* AI-powered Accessibility Validation, Google Inc. (Jun 2025 – Aug 2025)
  * Role: Software Engineering
  * Tittle: AI-powered Accessibility Validation
    * Leveraged Gemini to detect and validate end-to-end real accessibility issue cases and achieved over 0.95 recall rate.
    * Engineered and automated an issue fetcher to enhance efficiency of internal issue collection pipelines.
    * Deployed and integrated 12 accessibility criteria into production and reviewed the performance of 12 criteria.

* mRNA sequence design, Carnegie Mellon University (Dec 2024 – May 2025)
  * Supervisor: *Prof. Carl Kingsford*
  * Role: Research Assistant 
    * Implemented a RNA MFE and CAI parallel computing software, adapting different species codon database.
    * Investigated and developed Minimum Free Energy predictor based on mRNA features includes secondary structure.
    * Contributed to the model and scoring module for controllable mRNA sequence design, leading to the ARCADE paper.

* Protein sequence design, University College London (Jun 2023 – Sep 2023)
  * Supervisor: *Prof. Christine Orengo*
  * Role: Research Assistant 
    * Trained and optimized a deep learning model for protein design in Python by redesigning model’s structure and
    incorporating the SAM algorithm.
    * Augmented datasets and extracted protein embeddings using multiple advanced protein language models.
    * Applied statistical analyses to identify critical issues in deep-learning model training dynamics.

* Protein sequence design with VariPred, University College London (Jun 2023 – Sep 2023)
  * Supervisor: *Prof. Christine Orengo*
  * Role: Research Assistant 
    * Trained and optimized a deep learning model for protein design in Python by redesigning model’s structure and
    incorporating the SAM algorithm.
    * Augmented datasets and extracted protein embeddings using multiple advanced protein language models.
    * Applied statistical analyses to identify critical issues in deep-learning model training dynamics.

* Med12 in pancreatic cancer, Zhejiang University-University of Edinburgh Institute (Jun 2022 – Jun 2023)
  * Supervisor: *Prof. Chaochen Wang & Prof. Xue Jing *
  * Role: Research Assistant 
    * Confirmed role of Med12 to histones by performing integrated statistical analysis on multi-omics datasets.
    * Applied statistical analyses and visualized downstream analysis results in R.
    * Published original research as a Co-First Author in the high-impact journal, Gut (2024)

Skills
======
* Programming Language: Python, R, Java, Linux, MySQL
* AI/ML library: Pytorch, TensorFlow, Keras, Scikit-learn
* Bioinformatics: AlphaFold2, ESM, Seurat, PyMOL, Biopython
* Language skills: English (fluent), Mandarin(native)

Publications
======
  <ul>{% for post in site.publications reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
  
<!-- Talks
======
  <ul>{% for post in site.talks reversed %}
    {% include archive-single-talk-cv.html  %}
  {% endfor %}</ul>
  
Teaching
======
  <ul>{% for post in site.teaching reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
  
Service and leadership
======
* Currently signed in to 43 different slack teams -->
