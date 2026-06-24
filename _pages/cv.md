---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

[Download CV (PDF)](/files/CV_Shijie_Tang_CMU.pdf)

Education
======
* **M.S. in Computational Biology**, Carnegie Mellon University, Pittsburgh, PA (2024 - May 2026)
* **B.S. in Bioinformatics**, Zhejiang University - University of Edinburgh Joint Institute (2020 - 2024)

Industry Experience
======
* **Software Engineer**, Google (July 2026 - present)
  * AI platform for Android 

* **Software Engineering Intern**, Google Inc. (Jun - Aug 2025)
  * Leveraged Gemini to detect and validate end-to-end accessibility issues, achieving >0.95 recall rate
  * Engineered and automated an issue fetcher to enhance efficiency of internal issue collection pipelines
  * Deployed and integrated 12 accessibility criteria into production and evaluated their performance

Research Experience
======
* **Peer Learning for NLP Shortcut Mitigation**, Carnegie Mellon University (Aug 2025 - May 2026)
  * Advisor: *Prof. Carl Kingsford*
  * Developed an LLM-based method to address shortcut learning in general NLP models
  * Improved algorithm stability and increased model inference accuracy from 0.80 to 0.94

* **Controllable mRNA Sequence Design (ARCADE)**, Carnegie Mellon University (Dec 2024 - May 2025)
  * Advisor: *Prof. Carl Kingsford*
  * Implemented parallel computing software for RNA MFE and CAI optimization across multiple species codon databases
  * Developed a Minimum Free Energy predictor based on mRNA secondary structure features
  * Contributed to the model and scoring module for the ARCADE paper on controllable mRNA sequence design

* **Protein Sequence Design**, University College London (Jun - Sep 2023)
  * Advisor: *Prof. Christine Orengo*
  * Trained and optimized deep learning models for enzyme design by redesigning model architecture and incorporating the SAM optimizer
  * Extracted protein embeddings using advanced protein language models (ESM, AlphaFold2)
  * Applied statistical analyses to characterize training dynamics and identify critical failure modes

* **MED12 in Pancreatic Cancer**, ZJU-Edinburgh Joint Institute (Jun 2022 - Jun 2023)
  * Advisors: *Dr. Chaochen Wang & Dr. Jing Xue*
  * Performed integrated multi-omics analysis to characterize MED12's role in histone regulation and immune evasion
  * Applied statistical analyses and visualized downstream results in R
  * Published as **co-first author** in *Gut* (IF: 24.5, 2024)

Skills
======
* **Programming**: Python, R, Java, SQL, Bash/Linux
* **ML/DL Frameworks**: PyTorch, TensorFlow, Keras, Scikit-learn
* **Bioinformatics Tools**: AlphaFold2, ESM, Seurat, PyMOL, Biopython
* **Languages**: English (fluent), Mandarin (native)

Publications
======
  <ul>{% for post in site.publications reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
