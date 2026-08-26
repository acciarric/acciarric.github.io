---
layout: page
permalink: /publications/
title: publications
description: publications in reversed chronological order, preprints shown with the label Preprint-arXiv.
nav: true
nav_order: 2
---

<!-- _pages/publications.md -->
See also my <a href="https://arxiv.org/search/?searchtype=author&query=Acciarri%2C+C"> arXiv record <i class="ai ai-arxiv" style="color:var(--global-theme-color)"> </i> </a>

<!-- Bibsearch Feature -->

{% include bib_search.liquid %}

<div class="publications">

<h1>Preprints</h1>

{% bibliography -f preprints %}

<h1>Peer-Reviewed Journal Articles</h1>

{% bibliography -f papers%}

</div>
