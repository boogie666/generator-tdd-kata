# generator-multistack-tdd-kata

[![Build Status](https://secure.travis-ci.org/prometheas/generator-multistack-tdd-kata.png?branch=develop)](https://travis-ci.org/prometheas/generator-multistack-tdd-kata)

This project started as a fork of [boogie666](https://github.com/boogie666)'s
[generator-tdd-kata](https://github.com/boogie666/generator-tdd-kata) project,
which helps you whip up a clean TDD kata project in JavaScript, and using
[Mocha](http://mochajs.org/) for its testing.

I thought this was super convenient, but immediately I work with various
languages at work and for hobby, so I immediately wanted to be able to have
the option to do these katas in the language of my choosing at the moment.

I'm also working on a team that is in the midst of evaluating a variety of
options to introduce automated testing into a legacy codebase, so we're trying
to get a feel for what different testing solutions are like to use.

And so this fork was born.


## What's a kata?

A code kata is an exercise in programming which helps a programmer hone their skills through practice and repetition.

From [codekata.com](http://codekata.com):

> What makes a good practice session? You need time without interruptions, and a simple thing you want to try. You need to try it as many times as it takes, and be comfortable making mistakes. You need to look for feedback each time so you can work to improve. There needs to be no pressure: this is why it is hard to practice in a project environment. it helps to keep it fun: make small steps forward when you can. Finally, you’ll recognize a good practice session because you’ll came out of it knowing more than when you went in.
>
> Code Kata is an attempt to bring this element of practice to software development. A kata is an exercise in karate where you repeat a form many, many times, making little improvements in each. The intent behind code kata is similar. Each is a short exercise (perhaps 30 minutes to an hour long). Some involve programming, and can be coded in many different ways. Some are open ended, and involve thinking about the issues behind programming. These are unlikely to have a single correct answer. I add a new kata every week or so. Invest some time in your craft and try them.
>
> Remember that the point of the kata is not arriving at a correct answer. The point is the stuff you learn along the way. The goal is the practice, not the solution.

Watch a few people performing some common code katas with various languages and frameworks:

- [JavaScript Prime Factors code kata using JsTestDriver with Zach Leatherman](https://www.youtube.com/watch?v=zsCYkmAJBAY)
- [Bowling kata in PHPSpec with Shawn McCool](https://www.youtube.com/watch?v=1-o1VAzOQiI)
- [Bowling kata in PHPSpec with Kacper Gunia](https://www.youtube.com/watch?v=W-BuKLpUaR0)
- [FizzBuzz kata in RSpec (Ruby) from Makers Academy](https://www.youtube.com/watch?v=CHTep2zQVAc)
- [Char Counter kata in RSpec (Ruby) with Pablo Logioco](https://www.youtube.com/watch?v=2dC7iOyDuN8)
- [Calculator kata in PHPUnit with Pablo Morales](https://www.youtube.com/watch?v=rjYtqjp9_Zs) (Spanish)
- [Tony Messias, FizzBuzz with PHPUnit via Composer](https://www.youtube.com/watch?v=CD4T22qpfUg) (Portugese)

You'll note they go about it rather differently, and that's the whole point.  They will also have performed this kata several times before making these screencasts, and quite likely many times again since.


## Getting Started

Apart from whatever development tools you like to use to write code in your favorite language(s), you'll also need to ensure you've got [npm](https://www.npmjs.com) and [Yeoman](http://yeoman.io) installed.


### What is npm?

In case you haven't already heard, `npm` is the package manager for JavaScript software packages.  It's used by [Node.js](https://nodejs.com/) (and depends on it), but also by Angular, Grunt, Gulp, and countless other JS-based projects.

The important thing is you gotta make sure it's all [installed in your system](https://docs.npmjs.com/getting-started/installing-node).


### What is Yeoman?

[Yeoman](http://yeoman.io) is self-described by the project team as "the Web's scaffolding tool for modern webapps".  There are thousands of scaffolding generators for all sorts of projects, from Symfony to Sails to Rails and Spring — and that's hardly even the tip of the iceberg.

The `generator-multistack-tdd-kata` project is a Yeoman generator, which will scaffold empty kata projects for you.

If you haven't got Yeoman, you can install it with `npm` like so:

```bash
npm install -g yo
```

### Yeoman Generators

Yeoman travels light.  He didn't pack any generators when he moved in.  You can think of a generator like a plug-in. You get to choose what type of application you wish to create, such as a Backbone application or even a Chrome extension.

To install `generator-multistack-tdd-kata` on your system (see the "Contributing" section below for instructions to install it in a manner that allows you to actively develop it):

```bash
$ npm install --global generator-multistack-tdd-kata
```

Now you've got your system set up and are ready to dive into performing your katas!


### More About Yeoman

Yeoman has a heart of gold. He's a person with feelings and opinions, but he's very easy to work with. If you think he's too opinionated, he can be easily convinced.

If you'd like to get to know Yeoman better and meet some of his friends, [Grunt](http://gruntjs.com) and [Bower](http://bower.io), check out the complete [Getting Started Guide](https://github.com/yeoman/yeoman/wiki/Getting-Started).


## Performing Your Katas

Once you've got Yeoman and this generator installed on your system, initiate the generator like so:

```bash
$ cd ~/path/to/projects
$ yo multistack-tdd-kata
```

This generator holds several template katas to help you get started with TDD.

Once generated, a kata project will contain a very simple gulp file with two commands: `gulp watch` and `gulp test`.

`gulp watch` will run all the tests in the project on every file change (this is also the default gulp task, so feel free to just run `gulp`) and `gulp test` will run the test exactly once.

Along with the gulp file you'll get a `src/` folder a code file.  Additionally, there will also be a test file with a single failing test, and a 'main' file ) and a README.MD file with the specs you'll have to implement for the kata you've selected.

Now go forth a practice your katas.

## Stay updated

I'll be adding more Katas as I find them, which means I'd love to hear from anyone that finds new ones (or that has created their own new ones).  Star this repo to get notifications of any updates.


## License

MIT


## Contributing

Contributions welcome!  To get started, fork this project and clone it to your system like so:

```bash
$ cd ~/path/to/projects
$ git clone git@github.com:<your_username>/generator-multistack-tdd-kata.git
$ cd generator-multistack-tdd-kata
$ npm link
```


### Add a Kata

You'll need to add a new markdown-formatted file with instructions for the kata into `app/template/katas`.  Please use lowercase names with hyphens for kata file names, like these: `some-kata.md`, `lengthier-kata-name.md`, etc.


### Add a Stack Template

The main reason I created this fork is to support an extensible array of kata stacks.  The first ones I'd added are for `php-phpspec` and `php-phpunit`, where the stack is named for `{$language}-{$testing_framework}`.  Perhaps someone (maybe you?) might one day submit `ruby-cucumber` or `python-pyunit` stack templates.  I don't have a generator set up to scaffold the process, but it's pretty easy to do.

#### Creating a New Stack

First, you'll need to create a directory for your stack at `stacks/{$language}-{$testing_framework}`; all your files will go in here.

At minimum, you'll want your code and test files (more on this in a bit, as their naming and directory locations can vary by language and testing framework), a `__package.json` file that declares any node dependencies, and any additional package manager configuration files necessary to allow your testing dependencies to be installed.  You'll notice, for example, that the `php-phpspec` and `php-phpunit` stacks contain a `_composer.json` file which identifies their unit testing framework dependencies.  If you're using RSpec, you'll likely want a `_Gemfile` in there, a `requirements.txt` file if you're using a Python testing framework, and so on.

Please also add a `__gitignore` file which is configured to ignore whatever directory locations your dependency manager(s) use to install their files, as some people like to version their katas to enforce the frequent commit habit.

*Note*: if there is a `gulp` wrapper that can drive your testing framework, you are encouraged to add a `_gulpfile.js` as well, which basically has `test` and `watch` tasks that can automatically run your testing harness.

So, remember when I'd promised to return to the matter of the code and test files?  Here we are again.  The thing to note here is that could be called whatever you like, but you should use `{kata_name}` in the filename.  Typically, the code file is `_{kata_name}.ext` and the test file is called `_{kata_name}Test.ext`, where `ext` is whatever file extension your language likes to use.  You are further encouraged to use whatever convention is appropriate for the test file names in your testing framework.

Just to help drive the point home, let's compare the code and testing files from the `js-mocha` stack:

```
src/{kata_name}.js
tests/{kata_name}.test.js
```

To the files in the `php-phpspec` stack:

```
src/{kata_name}.php
spec/{kata_name}Spec.php
```

#### Stack Template Files and Variables

One more thing to keep in mind is that the files in your stack directory are _templates_.  That is to say that they undergo transformation during the generation process.

The following variables are available for interpolation within your text files:

- `version`
- `name` (the person performing the kata)
- `kata.slug` a slug version of the kata (e.g., `fizz-buzz`) derived directly from the kata file names
- `kata.pascalized` a Pascal cased version of the kata name (e.g., `FizzBuzz`)

Additionally, the names of files in the stack all start with at least one underscore (it gets removed from the generated files).  This is mostly just to help stack developers recognize source template files versus the files the generator creates… trust me, when you're going back and forth, it can get confusing quickly.

Files whose name start with _two_ leading underscores (e.g., `__gitignore`) will be output as "dot-files" by the generator.

Finally, you can use `{kata_name}` anywhere in a file name to use the Pascal cased name of the kata in an filename (mostly useful for the code and testing files, but it works for any files).


### Worfklow & Pull Requests

Please be aware that this project employs the [Gitflow](http://jeffkreeftmeijer.com/2010/why-arent-you-using-git-flow/) branching model.  Its main branch is `develop`, and work is done in "feature" branches.  Also, unless we have explicilty spoken about the matter and agreed otherwise in advance, I will _only_ consider merging PRs with _targeted changes_.
