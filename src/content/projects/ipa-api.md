---
metadata:  
  - id: 2 
  - version: '1.0.0' 
  - featured: false 
  - date_launched: 'September 4 2020' 
details: 
  - source_code: 'https://github.com/hipstina/ipa-api'
  - demo: ['https://hipstina.github.io/ipa-api/']
  - roles: ['Front-end Development', 'Visual Design']
  - status: 'Launched'
  - organization: 'Personal'
  - collaborators: []
  - images: ['https://raw.githubusercontent.com/hipstina/v2/main/src/assets/ipa-api.png']
  - description: "A web app that allows the user to generate a custom beer menu by filtering beers by style, ABV, and IBU. Key feature: Client side tools fetch and filter beers styles from an API."
title: 'IPA API'
summary: 'A digital beer menu that filters beers by style, ABV, and IBU.'
tech_stack: ['JavaScript', 'HTML', 'CSS']
thumbnail: "https://plchldr.co/i/200x200?&bg=efefef&fc=444444"
---

## Overview

A web app that allows the user to generate a custom beer menu by filtering beers by style, ABV, and IBU. Key feature: Client side tools fetch and filter beers styles from an API.

## Purpose & Goal

I was charmed by [Tania Rascia's](https://www.taniarascia.com/) simple exercise for [connecting to an API with plain Javascript](https://tania.dev/how-to-connect-to-an-api-with-javascript), and so I decided to expand upon her tutorial and make my web app interactive, too. To keep things simple, I picked a free, open-source API that didn't require authentication or a password to connect to the data. I also chose this API as it happened to be related to a passion of mine: craft beer.

Building this web app gave me experience working with the XMLHttpRequest object and the opportunity to build a client-side tool for rendering filtered API data. It also gave me a chance to create the kind of tool that I'd like to see on a beer site or digital bar menus: visually informative and targeting amateur or less experienced beer drinkers.

## Thought process

An issue I faced during development was in constructing a new XMLHttpRequest based on user triggered events. I needed to chain together one or multiple parameters and update the rendered data everytime a filter changed states. I solved this by storing the user input value and then using a separate function to check the current state of the other filter types.

Another issue I faced was repainting an updated Menu everytime a new search filter was (de)selected. I am particularly proud of a simple little function I wrote wipeMenu for recursively removing HTML elements when a filter was updated.

## Takeaways

This project gave me a lot of insight into how powerful APIs can be, and also that a web app is only as robust as its API. The API I used capped each data request at no more than 80 beers at a time, and lacked methods for searching within many of the beer properties. In the future, I know better what I should look for the next time I get to work with an API of my choice.

As this is the biggest project I've worked on so far, I also got a taste of just how important my code structure is for development. As my web app grew more complex with each feature, I iterated through my scripts quite a bit until I realized that I needed to just break up my 3-4 giant functions into smaller pieces. This step toward modularity improved my code's readabilty and made adding new features more efficient because it allowed me to introduce complexity quickly.

A project is never truly finished, there is always something that can be improved. To improve this project, there are 2 features I may add on later:

  * A button on each card that triggers an overlay of the beer description.
  
  * Make the side toolbar toggle in-to and out-of view, so that the app holds up better on smaller devices.
