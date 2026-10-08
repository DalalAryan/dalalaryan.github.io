---
layout: page
title: Robustness to Spurious Correlations
description: A 3-stage GEORGE pipeline on SpuCoMNIST
importance: 3
category: research
---

Built a 3-stage GEORGE pipeline (Sohoni et al.) in PyTorch and SpuCo to make a CNN robust to spurious background cues. Clustering baseline classifier outputs surfaces hidden subgroups without labels; retraining on balanced batches raised worst-group accuracy above 98%.
