# Lesson 2

These lessons are linear, so please make sure you have completed Lesson 1 before beginning this lesson. You should: 
- have added a directory to the Users directory whose title is specific to you, e.g. YourName
- have added a `hello.js` file to that directory with a comment in it
- successfully committed both directory and file

## Pushing and Pulling 

One of the fundamental operations in git is moving our code from place to another. We can `git push` the code on our local machine to a remote repository (somewhere else besides our machine), and we can `git pull` code from other branches or entire repos to our machine.  

Let's try it. You should still be in your feature branch (make sure by running `git branch` -- the star should be next to your feature branch). Now remember that you cloned this repo from one on GitHub? That repo is now known as the `origin`.  The origin repo has its own branches too. Before we `push` to `origin` we want to specify a branch to push to, or create one. We're going to choose the latter option. 

My local feature branch is called `cole/GHT`.  I want to create a mirror of that branch in the origin repo and push my code there.  The syntax is `git push origin [feature branch name]`, so I'm going to run
```bash
git push origin cole/GHT
```

I got this: 

![push](../../assets/push-to-origin.png)

## Merging and Pull Requests

Now the code that I created (a new directory and a new file) are in the origin repo, in a feature branch called `cole/GHT` just like on my machine. Since we want to make these changes part of the codebase, we need to pull them into the `main` branch in the origin repo.  Why can't we `push` them there? Because the `main` branch is protected. We don't want just anyone adding code to our `main` branch by `pushing` willy-nilly.  We want to vet which code comes in very carefully, so we require that anyone that wants to `merge` code into our `main` branch ask very nicely by submitting a `pull request`. So instead of pushing code to `main`, we pushed our code to another feature branch in the origin repo and we'll make our PR (pull request) from there. 

Merging is taking the changes, additions, and deletions from one branch and combining them with another. When we want to merge the code from a feature branch into the main branch in our origin repo, we need to make a `pull request`. Pull requests can be approved or denied. Only if they're approved can the code from the feature branch be merged. 

Point your browser to [the origin repo: github.com/C-STYR/GitHubTrainer](https://github.com/C-STYR/GitHubTrainer). Since you just pushed code to a feature branch in this repo, you should see a message across the top of the screen inviting you to submit a PR. 