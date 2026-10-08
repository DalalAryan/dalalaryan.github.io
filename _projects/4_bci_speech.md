---
layout: page
title: Brain-Computer Interface Speech Decoding
description: GRU phoneme decoder for the EvalAI Brain-to-Text Benchmark
importance: 4
category: projects
---

Designed a unidirectional GRU decoder in PyTorch to predict phonemes from intracranial neural recordings, trained with CTC loss and mixed precision on Google Cloud Platform. Adding LayerNorm, post-GRU projection layers, and temporal masking cut Phoneme Error Rate from 22.7% to 19.0% at equal per-batch cost.
