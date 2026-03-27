---
layout: book-review
title: Introduction to Machine Learning Systems
author: Vijay Janapa Reddi
cover: assets/img/book_covers/ml_systems.png
olid:  # use Open Library ID to fetch cover (if no `cover` is provided)
isbn:  # use ISBN to fetch cover (if no `olid` is provided, dashes are optional)
categories: machine-learning
tags: top-100
buy_link: 
date: 2025-01-01
started: 2025-01-01
finished: 
released: 2025
stars: 5
goodreads_review: 
status: reading # options: abandoned,finished,interested,paused,queued,reading,reread
---
Access free via [Github dev branch](https://github.com/harvard-edge/cs249r_book) or on web [mlsysbook.ai](https://mlsysbook.ai/).

## Abstract
Machine Learning Systems provides a systematic framework for understanding and engineering machine learning (ML) systems. This textbook bridges the gap between theoretical foundations and practical engineering, emphasizing the systems perspective required to build effective AI solutions. Unlike resources that focus primarily on algorithms and model architectures, this book highlights the broader context in which ML systems operate, including data engineering, model optimization, hardware-aware training, and inference acceleration. Readers will develop the ability to reason about ML system architectures and apply enduring engineering principles for building flexible, efficient, and robust machine learning systems.

## What You Will Learn
This textbook teaches you to think at the intersection of machine learning and systems engineering. Each chapter bridges algorithmic concepts with the infrastructure that makes them work in practice.

| You know... | | You will learn... |
|-------------|-|-------------------|
| How to train a model | → | How training scales across GPU clusters |
| That quantization shrinks models | → | How INT8 math maps to silicon |
| What a transformer is | → | Why KV-cache dominates memory at inference |
| Models run on GPUs | → | How schedulers balance latency vs throughput |
| Edge devices have limits | → | How to co-design models and hardware |

### Book Structure
The textbook follows the Hennessy & Patterson pedagogical model across two volumes:

| | Volume | Theme | Scope |
|-|--------|-------|-------|
|📗| Volume I | Build, Optimize, Deploy | Single-machine ML systems (1–8 GPUs). Foundations, optimization, and deployment on one node. |
|📘| Volume II | Scale, Distribute, Govern | Distributed systems at production scale. Multi-machine infrastructure, fault tolerance, and governance. |

## Quick Start
1. Read the textbook. Start with the current edition. It's the foundation for everything else.
1. Pick a hands-on path. Build a framework (TinyTorch), explore trade-offs (Labs), or deploy to real hardware (Kits).
1. Test yourself. Drill the interview playbook: 1,000+ systems design questions across cloud, edge, mobile, and TinyML.
1. Teach it. Adopt the curriculum with the AI Engineering Blueprint and lecture slides.