---
title: "The Win Condition Problem"
description: "Why specifying what learning looks like is harder than it seems."
type: "essay"
topics: ["AI", "learning", "design"]
publishedAt: 2026-02-26
updatedAt: 2026-02-26
status: "growing"
---

Here's a scene most learning designers will recognize.

You've written a rubric. It's clear, well-structured, aligned to the objectives. Two experienced evaluators sit down with the same student response. One scores it proficient. The other scores it developing. They're both reasonable. And they're both right, given how they read the criteria.

The rubric isn't broken. But something important is living outside it.

That something, the interpretive judgment that expert evaluators bring, is exactly what we need AI to develop if we want it to teach well. In my [previous essay](/thinking/designing-for-the-machine-learner), I argued that learning designers increasingly need to design *for* the AI: not just use it as a tool, but treat it as a learner that needs to develop teaching expertise. If that's the frame, the first design challenge is this: how does the AI learn to recognize what learning actually looks like?

I'm calling this the win condition problem. And it's harder than it appears.

## What we already have (and where it stops)

Learning designers have been specifying outcomes for decades. Rubrics, learning objectives, outcomes frameworks, competency maps. These are genuinely good technology. They do important work: they make expectations visible, they create shared language, they enable consistency at scale. I don't want to dismiss any of that.

But they hit a ceiling. And not where you might expect.

The obvious version of this problem is the vague rubric — "demonstrates critical thinking" — where the criterion is so broad that it means whatever the evaluator wants it to mean. But that's a writing problem with a writing solution. Good rubric design has known this for decades: use observable, specific language.

The harder version is what happens when the rubric *is* well-written — and expert evaluators still disagree.

Take a criterion like "evaluates evidence from multiple perspectives." That's specific. It's observable. It's the kind of language rubric design guides recommend. And two experienced evaluators can still look at the same student response and split on whether it qualifies. Not because one of them is wrong, but because the criterion still requires judgment: What counts as genuinely engaging a different perspective versus just mentioning that one exists? Is the student actually weighing the evidence, or just laying out what different sources say? When a response technically meets the criterion but feels shallow, what's missing?

That interpretive layer is where the real win condition lives. Not in the rubric. In the expert. The rubric can be excellent and the gap still exists, because expert judgment operates at a resolution that language alone doesn't reach. Steven Pinker made a version of this argument in [*The Stuff of Thought*](https://stevenpinker.com/publications/stuff-thought-language-window-human-nature): some of what we know resists direct linguistic encoding, not because we haven't found the right words yet, but because the knowledge itself is richer than language can fully capture. A rubric is always pointing at something it can't quite say.

There's also a spectrum problem. The easy cases (clearly got it, clearly didn't) aren't where judgment matters. It's the middle that's interesting. The student who uses the right vocabulary but applies it slightly wrong. The student who can't articulate the concept but demonstrates it in practice. The student whose response looks thin on a rubric but reveals, to an experienced eye, that something has genuinely clicked. These are the cases where expertise earns its keep, and where a rubric alone will always fall short.

And there's a context problem. The same response might indicate understanding in one situation and mere performance in another. An experienced teacher reads context. What has this student struggled with before? What was the question really asking? What does this particular wrong answer reveal about the student's mental model? That contextual sensitivity isn't something you can write into a specification. It's something you develop.

None of this means rubrics are useless. It means they're a starting point, not a finish line. The expert judgment that fills the gaps between criteria and cases has never been fully captured in a document.

So how does that kind of judgment actually develop?

## How humans learn to see

Not through criteria. Through cases.

A new teacher reads a rubric and applies it literally. "The student mentioned three examples — that's proficient." An experienced teacher has read hundreds of student responses and developed something more fluid. They don't just count examples; they read for the quality of the thinking behind them. They've seen enough near-misses to recognize the difference between a student who understands and a student who's assembled the right pieces without quite knowing why.

This kind of expertise develops through exposure, feedback, and calibration. Teachers grade together. They argue about borderline cases. They encounter the student who breaks their rubric and forces them to articulate what they actually meant. Over time, they build a kind of pattern recognition that goes well beyond anything written down.

Cognitive scientists call this perceptual expertise, the ability developed through practice to see meaningful distinctions that novices can't. A chess master sees board positions differently than a beginner, not because they know more rules but because they've internalized thousands of patterns. An experienced radiologist spots anomalies that a resident misses, not from a better checklist but from calibrated vision.

This matters because it suggests the path forward for AI isn't better specification. It's better *experience*. If human experts learn judgment through cases and calibration rather than criteria, then designing for AI judgment might follow the same logic — not telling it what mastery looks like, but showing it.

## This isn't a new step in the old process

At this point, it's tempting to reach for familiar frameworks. Is this just backwards design with better tools?

Backwards design starts in the right place: before you design activities or choose materials, define what understanding looks like. That insight still holds. But backwards design assumes the designer can answer that question. That a thoughtful team, working carefully, can specify what understanding looks like well enough to design toward it. And the path from specification to learning experience is one the designer authors, step by step.

The win condition problem says: actually, you can't specify it fully. Not because you're not skilled enough, but because expert judgment is partly tacit — and as we've just seen, it develops through cases, not criteria. Backwards design treats the win condition as a starting input. This frame treats it as a design outcome — something that gets refined through the process itself, with AI as a participant in that refinement.

That's the departure. Not a new step bolted onto an existing workflow. A different relationship to the question of what learning looks like. One where the designer isn't the sole author of the definition, but the architect of a process through which a better definition emerges.

## Two approaches

So what does that process actually look like? I see two approaches. Different in method, complementary in practice.

### Pattern inference

Instead of defining mastery in language, show it.

Curate a collection of student work. Strong, weak, and the messy middle. Annotate it. Not just scores, but *reasoning*: here's why this response looks proficient but isn't. Here's what this student is getting right that isn't captured in the rubric. Here's the subtle thing that distinguishes surface-level understanding from the real thing.

The AI induces patterns across these cases, building a model of what distinguishes levels of understanding. Done well, this model captures distinctions more nuanced than any rubric could articulate. It's working from the same kind of input that develops human expertise. Cases, in context, with expert judgment attached.

Here's what makes this especially promising with large language models. Earlier I said that expert judgment operates at a resolution language alone doesn't reach. That a rubric always points at something it can't quite say. That's true of any single document. But expert judgment, even when tacit, leaves traces every time it gets expressed in language: in the way an evaluator explains why one response is stronger than another, in the distinctions they reach for, in the reasoning they use without fully formalizing. Across enough instances of expert interpretation, those traces form patterns. An LLM doesn't read the rubric better. It reads *through* a large body of expert judgment to surface the implicit structure that the rubric was always pointing at.

There's a practical question here: how do you build that collection? One powerful method is to use AI to stress-test your own definitions. Bring your rubric, and let the AI generate edge cases that expose where your criteria break down. What happens when a learner meets every stated criterion but something still feels off? When following your rubric to the letter produces the wrong result? Working through these cases forces you to externalize the implicit knowledge that lives in the gap between your rubric and your judgment. That externalized reasoning becomes exactly the kind of annotated material the AI can learn from. The interrogation isn't the end product. It's a way to produce richer inputs for the AI's learning experience.

More broadly, the quality of the AI's judgment will depend on the quality of this curation. The collection isn't a random sample. It's *designed*, chosen to represent the range of ways learners demonstrate (or fail to demonstrate) understanding, including the surprises that push the boundaries of the rubric. That's learning design work.

### Transfer prediction

Pattern inference gives the AI a curated collection to learn from. But there's another source of input for the AI's learning: the ongoing data learners generate through the experience itself and beyond it.

With enough data across enough learners over enough time, AI might discover that certain early signals predict long-term retention and real-world application. And that these signals aren't the ones we've been measuring.

Maybe the best predictor of genuine understanding isn't the quality of the final assessment response. Maybe it's the pattern of mistakes the learner made along the way, the kinds of questions they asked, where they hesitated, or something else entirely that we haven't thought to look at.

Learning designers have always struggled with this. The most important evidence of learning often emerges after the experience ends, and traditional courses have no way to see it. Did the learning transfer? Did behavior actually change? That data has historically been out of reach.

AI changes those conditions. Within a learning experience, AI can surface patterns in learner behavior at a resolution that wasn't possible before. And beyond the experience, AI-mediated learning creates longer data trails than traditional courses ever could. The AI system that helps someone learn to give feedback in January might also be the one they turn to for help with a difficult conversation in June. The data doesn't end when the course does. Designing for this means building feedback loops that take advantage of that extended relationship. That's a design challenge in itself, but it's a newly possible one.

It's also uncomfortable territory. It suggests that the win condition we've been carefully specifying might not be the win condition that actually matters. It opens the possibility that expert human judgment, for all its richness, has its own blind spots — patterns that no individual teacher encounters enough cases to see, but that emerge at scale.

I don't think this undermines human expertise. I think it extends it. Teachers have always known that the things they care about most are hard to measure. Genuine curiosity, the ability to transfer knowledge to new situations, the capacity for self-correction. Transfer prediction doesn't replace that intuition. It offers a way to finally test it.

## Giving feedback, revisited

In the previous essay, I used giving effective feedback as a concrete example of the design-for-AI frame. It's worth returning to it here, briefly, to show what each approach looks like in practice.

**Pattern inference:** You assemble recordings of feedback conversations rated by experienced coaches. High-quality, mediocre, counterproductive, with annotations about why. The AI learns to distinguish performative directness ("I'm just being honest") from genuine helpfulness. It picks up patterns the coaches recognize but struggle to name: the moment when a feedback-giver shifts from describing impact to making attributions about intent. The pause that signals the receiver has actually heard something versus the pause that signals shutdown. And in building the collection, you use AI to stress-test your rubric. You generate a scenario where a new manager gives technically specific, technically actionable feedback to a direct report in the middle of a confidence crisis. The feedback is correct. It's also harmful. That edge case, and your reasoning about why it breaks the rubric, becomes part of what the AI learns from.

**Transfer prediction:** Across a large dataset, the AI discovers that the best predictor of improved feedback skills isn't rubric scores on practice exercises. It's whether the learner starts voluntarily seeking feedback from others in the weeks that follow. The real win condition wasn't "can give feedback well in a structured exercise." It was "has internalized feedback as a practice." Nobody wrote that into the rubric, but it turns out to be what matters.

## What this means for the learning designer

The learning designer's role in win condition design isn't to write a perfect specification. It's to design the process through which the specification gets better over time.

That means curating the right cases. Selecting examples that represent the full range of what understanding looks like, including the edge cases and surprises that break the rubric. It means annotating those cases with your reasoning, not just your scores, because the way you talk about why one response is stronger than another is itself data the AI can learn from. Your expert judgment may resist being captured in a document, but expressed across enough cases, it leaves patterns a language model can surface.

It also means designing feedback loops that extend beyond the learning experience itself. If the real win condition turns out to be something that only becomes visible weeks or months later — whether the learner actually changed their practice, not just their performance on an exercise — then someone has to design the infrastructure that makes that visible. That's new work. But it's newly possible work, for reasons that didn't exist five years ago.

And it means accepting that the win condition you start with probably isn't the one you end with. If you do this well, the AI's emerging judgment will surface things you didn't see. Not because it's smarter, but because it's working across more cases than any individual teacher encounters in a career. Your understanding of what mastery looks like deepens through the process of designing for a different kind of learner.

This is still design work. It still requires deep domain knowledge and pedagogical expertise. But the designer's relationship to the win condition has changed. You're not the author of a definition. You're the architect of a process — one that starts with your expertise and grows beyond it.

That's one design challenge addressed — or at least, mapped out. But defining what winning looks like is only half the problem. The other half is how the AI learns to produce it. How does it develop the contextual, domain-specific teaching moves that get learners to that win condition?

That's a different kind of design problem. And it's where things get genuinely uncomfortable for anyone who's built a career on designing for the human learner.

More on that next.

---

*Author's note:* This essay was written with the help of generative AI, used as a thinking partner to explore framings, surface assumptions, and refine language. AI-generated outputs were treated as provisional material, not authoritative conclusions; all judgment and final decisions remain my own.
