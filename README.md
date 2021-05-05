# Bookmarkifie 🔖

<hr>
<p>
<a href="https://www.npmjs.org/package/bookmarkifie"><img src="https://img.shields.io/npm/v/bookmarkifie?style=flat-square&logo=npm&label=npm"></a>
<a href="https://www.npmjs.org/package/bookmarkifie"><img alt="npm" src="https://img.shields.io/npm/dt/bookmarkifie?label=npm%20downloads&style=flat-square"></a>
<a href="https://www.npmjs.org/package/bookmarkifie"><img alt="npm bundle size" src="https://img.shields.io/bundlephobia/min/bookmarkifie?color=brightgreen&label=package%20size&style=flat-square"></a>

<br>
<a href="https://www.npmjs.com/package/"><img src="https://nodei.co/npm/bookmarkifie.png?downloads=true&downloadRank=true&stars=true"></a>
</p>

Bookmarkifie is an CLI tool which helps you to bookmark your favourite projects and open it with a simple command in your favourite code editor.

---
### Installation
If you have <strong>NodeJS</strong> installed in your machine. 
```shell
npm install bookmarkifie
```
---
### Commands
`bm` is an alias for the bookmarkifie CLI

#### Add your project
Go to the directory you want to bookmark and run this command. The default name would be the name of the directory or else you can give a name of your choice as well.
```shell
bm add [projectName]
```
Now the name of the directory is saved in the list of bookmarks

#### Open bookmarked project
The Direcotry name is saved as the project name.
```shell
bm open <dirName>
```
The project will open in VSCode (default editor)

#### Remove project from List
To remove the project from the list
```shell
bm remove <dirName>
```
---
### Contributing to Bookmarkifie
[![contributions welcome to bookmarkifie](https://img.shields.io/badge/contributions-welcome-brightgreen?style=flat-square&logo=github)](https://github.com/imrishabh18/bookmarkifie/)

I would be extremely happy to have people contribute to Bookmarkifie. You can read Contribution guidelines in **[CONTRIBUTING.md](CONTRIBUTING.md)**