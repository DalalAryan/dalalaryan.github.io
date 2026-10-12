---
layout: post
title: "Post's Functional Completeness Theorem: Is Negation Sufficient for Universality?"
date: 2026-10-12 12:00:00
description: Negation is Necessary but not Sufficient for Universality
tags: theoretical-computer-science, logic
categories: general
related_posts: false
---

Hi! I'm Aryan, an undergraduate at UCLA studying mathematics and computer engineering. In this post, I discuss [Post's Functional Completeness Theorem (Emil Post, 1941)](https://en.wikipedia.org/wiki/Functional_completeness). This post was mostly motivated by a question on my CS 181 Theory of Computation Problem Set: 

(Boaz Barak Intro TCS Exercise 3.4) Prove that for every $n$-bit input circuit $C$ that contains only AND and OR gates, as well as gates that compute the constant functions 0 and 1, $C$ is *monotone*, in the sense that if $x, x' \in \lbrace 0, 1 \rbrace^n$ satisfy $x_i \leq x'_i$ for every $i \in [n]$, then $C(x) \leq C(x')$. Conclude that the set $\{\text{AND}, \text{OR}, 0, 1\}$ is *not* universal.

I was attempting this problem and thought about the universality of {AND, NOT} as well as {NAND} (one can show that {AND, NOT} is universal by using the universality of NAND and vice versa). In generally all cases of universality of gate sets, some form of negation ($\neg$) is incorporated even if not explicitly stated in the function definition. For example, the gate set $\mathcal{F} = \lbrace \implies, 0 \rbrace$ is universal even though NOT is not explicitly used. However, one can easily deduce that the following holds: $a \implies 0 = \neg a$. The negation appears both explicitly and implicitly in many such cases of universality of gate sets and I was curious as to whether negation was necessary for universality or if my observations were purely by chance. This led me to learn about Post's Functional Completeness Theorem which I now discuss below!