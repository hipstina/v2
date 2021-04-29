# christinapadilla.com

## Status: Launched April 29, 2021


## About
This is the second version of my portfolio site. It is built with React and currently hosted on nearlyfreespeech.net. The source code for the previous version of my site can be viewed [here](https://github.com/hipstina/christinapadilla). 

I wanted to build my portfolio in a way that made it easy to update with new projects over time. Inspired by static site generators like 11ty which accept Markdown documents as source files, this is my implementation in React. To accomplish this, I use `react-markdown` to parse the markdown and `gray-matter` to handle the frontmatter. 
## Getting started

Fork and clone:
```sh
git clone https://github.com/hipstina/v2.git
```


Install client dependencies:
```sh
npm i
```

Start the development server:
```sh
npm start
```

When you are ready to deploy run the deployment script to get the static files:
```sh
npm run build
```



## Contributing
Would you like to make my portfolio better? Pull requests are welcome. 