---
title: "Designing for the Machine Learner"
description: "A new frame for learning design in the age of artificial intelligence."
type: "essay"
topics: ["AI", "learning design", "design"]
publishedAt: 2026-02-03
updatedAt: 2026-02-03
status: "evergreen"
---

For most of the history of learning design, the job was clear: design for our human learner.

Understand how people build knowledge and skills. Create pathways that guide them there. The designer's work reached the learner directly, through a course, a module, an experience built for human hands and minds.

But something is shifting. Increasingly, the designer's work reaches the human learner through a new intermediary: a "machine" learner.

As AI becomes a primary interface between curriculum and learner, the big question for our field isn't how to use AI as a tool within the models and processes we've relied on for decades. It's something more fundamental:

What if a big part of the learning designer's job is now to design *for* the AI?

By that I mean expanding your concept of audience, entirely. This goes well beyond speeding up design and development with prompt engineering, it requires us to shift the frame. Instead of asking "how do I help this learner understand?" you're asking "what does the AI need to develop the kind of nuanced expertise that a great human teacher brings?"

This kind of design problem may be new to us. But it isn't new to everyone.

## Designing a learning experience for a machine

When researchers at <a href="https://www.deepmind.com/research/highlighted-research/alphago/the-challenge-match" target="_blank" rel="noopener noreferrer">DeepMind</a> set out to build the world's best Go player, they didn't program strategies. They designed a learning experience for an AI.

They gave it the rules of the game: what moves are legal, how pieces interact. They gave it a clear win condition: control more territory than your opponent. They gave it a database of human-played games to review. And then they created an environment where it could practice: playing against itself, millions of times, learning from each iteration.

The result was AlphaGo, which beat one of the greatest human Go players in history. It played moves that stunned commentators, strategies no human had imagined, that initially looked like mistakes but turned out to be brilliant.

The important thing here isn't the AI's performance. It's that *someone designed conditions under which the AI developed expertise beyond what most humans could have taught it.* They didn't teach it Go. They built the environment (rules, success criteria, examples, space for practice) and the AI developed expertise within it.

That's a design problem. And it's remarkably close to what learning designers already do, just pointed at a different audience.

## The game of learning doesn't come with rules built in

Go arrived with its rules and win condition already defined. The board, the pieces, the scoring, all unambiguous enough to hand-code. The only hard problem was strategy — figuring out which moves, in which situations, would lead to a win. That's the part DeepMind gave to the AI.

Fostering learning is different. Not because it's more complex in some vague sense, but for a specific reason: the rules and win conditions themselves can't be handed off so cleanly.

You could sketch a reasonable set of generic rules or potential moves: explain, ask questions, give examples, stay silent, prompt the learner to try something. But an expert teacher of a specific subject carries something more than a standard list of available moves. They know how *this particular content* tends to confuse learners in *this particular way*, and they've developed specific responses to that. They're also constantly reading signals from the learner and the context, adjusting the move space in real time. The pedagogy is shaped by the subject matter, the learner, and the moment. That contextual judgment lives in the expert, not in any framework. How do we help the AI learn all that?

And when it comes to the win condition, what does it actually look like when the learner has learned? Go has an unambiguous answer. Learning almost never does. Articulating and identifying this is no easy task even for the trained eye. Rubrics and learning objectives are a good start, but there's always a gap between what's written down and what a skilled evaluator sees. Expert teachers read criteria through years of accumulated judgment. They can differentiate between a response that technically meets a rubric and one that reflects genuine understanding. What kind of experience would help an AI learn to do the same?

So the design problem shifts earlier in the chain. With Go, humans handled the easy parts (rules, win conditions) and the AI tackled the hard part (strategy). With teaching, getting the rules and win conditions right is also the hard part, at least at the level of sophistication that expert human teachers operate at. The learning designer's job isn't just to define the game and let the AI figure out strategy. It's to design the conditions under which the AI can learn the game itself.

## Two design challenges

That work splits into two design challenges.

**The first: designing an experience in which the AI learns to recognize what winning looks like.** What does it actually look like when this learner has learned this skill in this context? Not a proxy. The real thing, with all the nuance that expert teachers bring when they evaluate understanding.

The design challenge isn't to write a more detailed rubric. It's to create the conditions for AI to develop that same expert judgment, to learn to *see* mastery the way an experienced teacher does.

**The second: designing an experience in which the AI learns the right moves.** Given a sense of what winning looks like, how does the AI develop the contextual, domain-specific teaching expertise that great teachers carry?

Of course, the AI already has ideas about how to teach. It's trained on pedagogical theory, tutoring transcripts, educational content. But those priors are the accumulated conventional wisdom of how humans have taught humans, shaped by particular populations and contexts. They represent approaches that tend to work for many people, much of the time. They don't capture the specificity that great teaching requires: *this learner, at this moment, with this subject.*

The design challenge isn't to encode best practices. It's to create conditions where effective teaching strategies can emerge through variation, testing, and iteration, optimized for outcomes rather than intuitions.

I'll develop both challenges in depth in subsequent essays. But the shape of the new work is this: the learning designer designs the conditions under which the AI can learn both what winning looks like and how to produce it.

You're still designing learning experiences. You're just designing them for a different kind of learner.

## What this looks like, concretely

Consider something most professionals encounter: learning to give effective feedback. In management training, peer review, design critique, academic advising, feedback is everywhere, and most people are bad at it in predictable ways.

In a traditional learning design approach, you might gather input on your learner audience, design a sequence of content and activities around a relevant framework, build in practice scenarios, and provide the instructor with a rubric that says something like "mentions a specific situation" or "describes an observable behavior." You check the data afterward and adjust for the next cohort.

Now shift the frame. Instead of designing that experience yourself, design for an AI that might interact with any learner, in any scenario, at any moment. Design for a learner that doesn't build understanding the way humans do, one that needs different inputs, different conditions, different feedback loops. What does *that* learner need to understand the rules of this game and the win conditions?

The win condition is a learner who gives effective feedback. But what that looks like varies enormously depending on context. One situation may call for warmth and encouragement. Another may require directness. A learner who over-explains needs different guidance than one who avoids the hard part entirely. You can't specify all of this in advance.

The rules are just as contextual. The AI needs to recognize common misconceptions, like confusing "being nice" with "being helpful," and detect how this particular learner tends to approach difficult conversations. The move space is shaped by the domain, the learner, and the moment.

Describing every nuance yourself would take forever. But if you design the right conditions, the AI can learn them.

## What the learning designer becomes

Many of the skills learning designers already have will serve them well in this new frame. But some new ones are needed too. You need to understand how your learner learns — and this learner runs on large language models, not mental models. That means understanding how AI systems process information, how to evaluate what they're producing, and how to read the data that comes back.

It's systems design. It's evaluation design. It's knowing when to encode and when to let go.

And yes, for many learning designers, this may feel like a loss. The craft of designing beautiful materials and precise pathways, the professional identity built around touching the learner directly. Letting a system rove a domain of knowledge and discover teaching strategies might feel like giving something up.

That tension is real. But it's worth being precise about what's actually changing. What the designer gives up is exactitude — the ability to control every strategy, every sequence, every interaction. What the designer keeps is something more fundamental: the *values*. What counts as learning in the first place. What we're optimizing for. What constraints the system operates within. What trade-offs are acceptable and which aren't.

Those aren't questions an algorithm can answer. They're human judgments about what matters.

The learning designer's authority doesn't disappear. It moves upstream.

## The question ahead

We're not in a future where all of this is fully built. But the pieces exist and are rapidly coming together: knowledge graphs, agent architectures, evaluation frameworks, approaches from other fields where machines learn to solve problems humans designed the conditions for.

The question isn't whether learning designers need to learn to work with AI. We already are, in numerous ways, every day.

The real question is whether we have the courage to set down old frames and tools that may no longer apply and reimagine what learning design means in an AI-mediated world. The shift isn't from human-driven learning design to machine-assisted learning design. It's from designing narrow paths for human learners to designing expansive environments for AI ones.

That's the work ahead.

---

*Author's note:* This essay was written with the help of generative AI, used as a thinking partner to explore framings, surface assumptions, and refine language. AI-generated outputs were treated as provisional material, not authoritative conclusions; all judgment and final decisions remain my own.
