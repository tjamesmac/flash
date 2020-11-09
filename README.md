# Make a learning reference site

Want to make a quick reference site to help my continued learning

What I want to include in this

- No react
- All typescript
- Tested
- CI/CD (docker, github actions etc)
- Help with system design
- Include a flash card function
- Deploy to Azure because app engine equivalent is free
- Database of mongodb atlas not cosmo - cosmo needs a windows environment to use locally

TODO:

- Read about Deploying to Azure.
- This means finding out how to integrate github repo so I dont have to stick my code in there
- Make a multistage docker file so I can separate my dev and prod environments
- The dev environment needs to spin up a local copy of MongoDB
- The prod envionrment needs to connect to the cloud atlas db

Tasks:
Go a step further
Make a library - a tutorial library
Want to see if I can make a book.

(By this I mean output my the content I want in a similar format to a book)

Cover
Contents
Rest are chapters

Give the option to go to next page

So I have a shelf
|---------------| |---------------|
| | | |
| Algorithms | | Databases |
| | | |
|---------------| |---------------|

There are two books on the shelf

Book {
genre
title
author
created
lastupdated
last reviewed
}

Shelf {
books
last updated
some others things
}
