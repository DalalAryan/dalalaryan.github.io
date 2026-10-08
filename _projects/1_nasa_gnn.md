---
layout: page
title: GNN Surrogate for Circuit Simulation
description: Attention-based graph neural network predicting 4-port impedance spectra at NASA
importance: 1
category: research
---

Built an attention-based graph neural network in PyTorch as a fast surrogate for SPICE simulation, predicting 4-port impedance spectra (501 frequency points) of randomized circuit topologies. Reached common-mode R² of 0.986 and differential-mode R² of 0.978 across 100,000 simulated netlists, using Optuna and MLflow for model iteration. Also ran readout ablations (node-level, mean, attention pooling) and a data-scaling study from 1K to 95K examples.
