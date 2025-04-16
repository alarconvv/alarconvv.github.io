---
layout: page
title: Paleosize
description: PaleoSize is a research-package project exploring body size evolution in extinct vertebrates.
img: assets/img/7.jpg
importance: 3
category: work
---

<<<<<<< HEAD
# 🦖 PaleoSize

=======
---
layout: page
title: Paleosize
description: PaleoSize is a research-package project exploring body size evolution in extinct vertebrates.
img: assets/img/7.jpg
importance: 3
category: work
---

# 🦖 PaleoSize

>>>>>>> baed0bd (vs 0.1)
**PaleoSize** is a research project exploring body size evolution in extinct vertebrates—particularly dinosaurs and other large-bodied taxa. This repository includes data, analysis scripts, and visualizations for studying body size evolution in bipeds and quadrupeds using phylogenetic comparative methods.

## 📚 Project Goals

- Analyze the evolution of body size across extinct lineages.
- Compare body size trends in bipedal vs. quadrupedal species.
- Apply phylogenetic methods to control for shared ancestry.
- Visualize results in a reproducible and dynamic report.

---

As a package, **PaleoSize** is an R package designed to predict body size in extinct bipedal species using morphometric proxies derived from extant taxa. Body size plays a central role in physiology, ecology, and extinction vulnerability, but cannot be directly observed in fossils. `PaleoSize` addresses this by providing multiple estimation methods (OLS, mixed models, Bayesian inference) and digitizing classical methods from historical literature not yet implemented in software.

The package includes a Shiny interface for interactive modeling, a comprehensive morphometric database (including femur length, shaft cross-section, and tarsus length in modern birds), and functionality for users to export reproducible scripts for scientific reporting. Its flexible structure allows researchers to load custom data, apply different models, and obtain confidence and prediction intervals.

**PaleoSize** contributes to the open science ecosystem by improving accessibility, reproducibility, and methodological rigor in macroevolutionary and paleobiological research.

## 📚 Package Goals

- Enables inference of ecological and evolutionary traits (body size)
- Provides access to digitized morphometric data from historical sources
- Facilitates open, reproducible workflows for scientific publication

---

## 📁 Repository Structure

```
PaleoSize/
├── Bipeds/             # Data and analysis for bipedal species
├── Quadrupeds/         # Data and analysis for quadrupedal species
├── DinosSize/          # Datasets related to dinosaur body size
├── phylo/              # Phylogenetic trees and related files
├── pilot/              # Exploratory and pilot analyses
├── Draft/              # Final analysis Quarto document (.qmd)
```

## 🔍 Key File

- [`Draft/Final_analysis.qmd`](Draft/Final_analysis.qmd):  
  Main Quarto analysis document combining R code, narrative, and visualization for the final body size study.

## 🛠️ Built With

- [R](https://www.r-project.org/)
- [Quarto](https://quarto.org/)
- R packages:  
  `tidyverse`, `ape`, `phytools`, `geiger`, `ggtree`, `ggplot2`

## ▶️ Getting Started

### Prerequisites

Make sure you have the following installed:

- R and RStudio
- Quarto (`install quarto` from [quarto.org](https://quarto.org/))

### Render the Analysis

```bash
# Clone the repository
git clone https://github.com/alarconvv/PaleoSize.git
cd PaleoSize

# Render the Quarto analysis
quarto render Draft/Final_analysis.qmd
```

## 🚧 Project Status

This is a work in progress. Results and interpretations are subject to change as the analysis evolves.

## 📬 Contact

For questions or collaborations, feel free to reach out:

- GitHub: [@alarconvv](https://github.com/alarconvv)
- Email: [add-your-email@example.com]

## ⚠️ License

This project does not yet have a license. Please do not reuse or redistribute without permission.
