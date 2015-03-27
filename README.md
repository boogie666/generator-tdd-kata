# generator-tdd-kata [![Build Status](https://secure.travis-ci.org/boogie666/generator-tdd-kata.png?branch=master)](https://travis-ci.org/boogie666/generator-tdd-kata)

> [Yeoman](http://yeoman.io) generator

## What's a kata?

A code kata is an exercise in programming which helps a programmer hone their skills through practice and repetition.

This generator holds ( or will hold :P ) several template katas to help you get started with TDD.

Once generated, a kata project will contain a very simple gulp file with two commands: gulp watch and gulp test

gulp watch will run all the tests in the project on every file change (this is also the default gulp task, so feel free to just run 'gulp').
gulp test will run a single test.

Mocha is used as the test runner.

Along with the gulp file you'll get src/ folder with two files (a test file with a single failing test, and a 'main' file ) and a README.MD file with the specs you'll have to implement for the kata you've selected.

Now go forth a practice your katas 


## Getting Started

### What is Yeoman?

Trick question. It's not a thing. It's this guy:

![](http://i.imgur.com/JHaAlBJ.png)

Basically, he wears a top hat, lives in your computer, and waits for you to tell him what kind of application you wish to create.

Not every new computer comes with a Yeoman pre-installed. He lives in the [npm](https://npmjs.org) package repository. You only have to ask for him once, then he packs up and moves into your hard drive. *Make sure you clean up, he likes new and shiny things.*

```bash
npm install -g yo
```

### Yeoman Generators

Yeoman travels light. He didn't pack any generators when he moved in. You can think of a generator like a plug-in. You get to choose what type of application you wish to create, such as a Backbone application or even a Chrome extension.

To install generator-tdd-kata from npm, run:

```bash
npm install -g generator-tdd-kata
```

Finally, initiate the generator:

```bash
yo tdd-kata
```

### Getting To Know Yeoman

Yeoman has a heart of gold. He's a person with feelings and opinions, but he's very easy to work with. If you think he's too opinionated, he can be easily convinced.

If you'd like to get to know Yeoman better and meet some of his friends, [Grunt](http://gruntjs.com) and [Bower](http://bower.io), check out the complete [Getting Started Guide](https://github.com/yeoman/yeoman/wiki/Getting-Started).


## License

MIT
