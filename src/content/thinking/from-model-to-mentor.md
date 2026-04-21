---
title: "From Model to Mentor: Embedding Cognitive Apprenticeship in AI Agent Prompts"
description: "A chapter in The Pedagogical Promptbook on designing—and rigorously evaluating—an AI tutor that teaches the way expert mentors do."
type: "note"
topics: ["AI", "learning", "higher education"]
publishedAt: 2026-04-21
updatedAt: 2026-04-21
status: "evergreen"
---

A chapter I co-authored with <a href="https://www.linkedin.com/in/janine-agarwal/" target="_blank" rel="noopener noreferrer">Janine Agarwal</a>, <a href="https://www.linkedin.com/in/anna-hadjiyiannis/" target="_blank" rel="noopener noreferrer">Anna Hadjiyiannis</a>, and <a href="https://www.linkedin.com/in/nthatomoagi/" target="_blank" rel="noopener noreferrer">Nthato Gift Moagi</a> appears in <a href="https://edtechbooks.org/promptbook" target="_blank" rel="noopener noreferrer">The Pedagogical Promptbook</a>, a new open-access book edited by David Wiley and published on the EdTechBooks platform.

Each chapter in the book takes a single evidence-based teaching practice and develops a prompt that enables an LLM to enact it consistently and with high fidelity. Chapters describe the research behind the practice, the iterative process used to develop the prompt, the methodology for evaluating it, and the full text of the prompt itself. The book is licensed CC BY, so the prompts it contains can be freely copied, adapted, and used to improve teaching and learning.

---

## The Chapter

**<a href="https://edtechbooks.org/promptbook/from-model-to-mentor" target="_blank" rel="noopener noreferrer">From Model to Mentor: Embedding Cognitive Apprenticeship in AI Agent Prompts</a>**

Our chapter takes on **cognitive apprenticeship**—a decades-old instructional model (Collins, Brown, and Newman) for making expert thinking visible through modeling, coaching, scaffolding, articulation, reflection, and exploration. It's theoretically robust and empirically supported, but notoriously hard to implement at scale: landscape analyses show that even experienced instructors tend to foreground modeling and coaching while underdeveloping the higher-order methods that produce genuine transfer.

We built **MentorAI**, a prompt-engineered tutoring agent grounded in cognitive apprenticeship, and applied it to a single judgment-rich task: delivering constructive feedback using the Situation-Behavior-Impact (SBI) framework. The prompt separates the pedagogical infrastructure (the CA "toolkit," move-selection logic, conversation rules, affect responsiveness) from a modular **Task Sandbox** so the same tutoring architecture can be pointed at other skills without rewriting the teaching logic.

To evaluate it, we built the evaluation infrastructure alongside the prompt:

- **27 fidelity criteria** (7 critical, 20 quality) across six pedagogical domains, written as precise boolean pass/fail rubrics rather than Likert scales.
- **Six synthetic learner personas**, including deliberately uncooperative archetypes (the overconfident coaster, the defeated learner, the know-it-all novice) designed to stress-test adaptive pacing and expose the "helpful assistant" default in LLM-simulated learners.
- **A distributed LLM-as-judge pipeline** with seven specialized judges, validated against four human raters. Final human–LLM agreement reached 90%, on par with human inter-rater agreement.

Across 60 evaluated conversations, MentorAI passed **100% of critical criteria** and **91.7% of quality criteria**. Failures clustered predictably: visible deliberation during modeling, demonstrating (not just naming) self-checking, fading support after competence was shown, and varied turn structure—each traceable to a specific prompt mechanism. Performance degraded most with disengaged or resistant personas, a pattern that mirrors the well-known "assistance dilemma" in human tutoring.

The <a href="https://github.com/rkoblic/mentorAI" target="_blank" rel="noopener noreferrer">MentorAI prompt, persona prompts, and judge prompts are all open-sourced</a>, along with an <a href="https://rkoblic.github.io/mentorAI/" target="_blank" rel="noopener noreferrer">evaluation dashboard</a>. The synthetic learner methodology we developed became its own tool—see the <a href="/lab/synthetic-learner-generator">Synthetic Learner Generator</a> experiment.

---

## Why this matters

Most conversations about "AI in education" still treat the LLM as a content-delivery shortcut: ask a question, get an answer. The Pedagogical Promptbook is one of the first serious attempts to change that frame—to treat prompts as designed artifacts that can carry pedagogy, and to hold them to the same evidentiary standard we expect of any instructional intervention.

The core argument of our chapter is that **process fidelity has to come before outcome claims**. Before we ask whether an AI tutor improves learning, we need to know whether it's actually *doing the teaching* we claim it's doing. That's what fidelity-based evaluation makes possible—and what turns a prompt from a demo into a deployable pedagogical artifact.

From model to mentor, from answer machine to practice-bearing tool. That's the work.
