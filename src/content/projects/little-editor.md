---
metadata:  
  - id: 1 
  - version: '1.0.0' 
  - featured: false 
  - date_launched: 'August 16 2020' 
details: 
  - source_code: 'https://github.com/hipstina/little-editor'
  - demo: ['https://hipstina.github.io/little-editor/']
  - roles: ['front-end development', 'visual design']
  - status: 'Launched'
  - organization: 'Personal'
  - collaborators: ['']
  - images: ['https://raw.githubusercontent.com/hipstina/v2/main/src/assets/little-editor.png']
  - description: "My Little Editor is a tool for editing and previewing simple HTML markup. Key feature: Raw text can be edited and preview window will automatically display the rendered HTML."
title: 'My Little Editor'
summary: 'A tool for editing and previewing simple HTML markup.'
tech_stack: ['JavaScript', 'HTML', 'CSS']
thumbnail: "https://plchldr.co/i/200x200?&bg=efefef&fc=444444"
---

## Overview

My Little Editor is a tool for editing and previewing simple HTML markup. Key feature: Raw text can be edited and preview window will automatically display the rendered HTML.

## Purpose & Goal

The Little Editor is a project I designed and developed when I first started learning about the DOM and event handlers. The idea for this project came about because I wanted to create a tool for my hard coded website that would let me write and export short notes or posts. I also wanted to reinforce my understanding of browser events and event handlers, so I knew I'd be developing this tool from scratch to really exercise my DOM manipulation skills.

## Thought process

This project was a good way for me to get some practical experience with some simple yet powerful DOM navigation methods and properties. To make the user experience as frictionless as possible, I decided to focus on building a tool that was as intuitive as any other text editor (like WordPress)--albeit on a much smaller scale.

I had a persisting problem in which the rendering window omitted the last character from the text output. I relied on Firefox dev tools to debug the source of the problem: the key event before value assigned. I also experienced noticeable rendering delays, which created a clunky user experience. Improving the performance of the rendering output was a matter of refactoring my code and trying other DOM creation methods.


## Takeaways

I learned quite a bit while developing this tool. I learned the hard way that defining a project's scope is crucial to the development process, no matter how simple the initial idea seems; it's quite easy to let a project run away from you if you're making it up as you go. On a technical level, I gained a lot of insight into how the browser interprets events.