# Lesson 3

These lessons are linear, so please make sure you have completed Lesson 2 before beginning this lesson. You should: 
- have pushed code to a feature branch in the origin repo
- created a PR (pull request)
- merged your PR once it was approved

## The Single Source of Truth

A common paradigm in the programming world is to have a single source of truth (SST). This means having a single point of reference that everyone agrees is the standard. In this case, the codebase in our [origin repo](https://github.com/C-STYR/GitHubTrainer) is going to be our SST. If we have an SST, we do away with confusion about the state of code as well as the need to maintain multiple sources of truth and have them synced or linked. We have only one standard.

### Data Flows in One Direction

In practice this creates a single-direction, circular flow of data. We started with the origin repo (specifically the `main` branch of it) and cloned it to our computer (our `local` with its own `main` branch).  We don't modify the our local `main` branch directly, instead we create a copy that we can manipulate, which is a `feature` branch. When work on it is complete, we then `push` our feature branch up to a separate branch in the origin repo, where it is checked and validated during the `pull request` process and it is eventually `merged` into the `main` branch and becomes part of the codebase SST.

But what about our local version of `main`? It's now out of date. To update it, we need to `pull` down a fresh copy from the origin repo. Once we do that, the SST is again replicated locally and we can create a new feature branch for a new task, starting the cycle all over again. 

This circular dataflow is specific to GitHub and remote repos. If you weren't using a remote repo of course you would just create feature branches off your `main` branch and then merge them directly back into main locally. This can even be done with multiple people working on a codebase at the same time and without touching GitHub at all. But GitHub provides extra level of visibility and funtionality and organizations not using it are increasingly rare, so we'll focus on the GitHub dataflow.


## Pulling Code

At the end of the last lesson we merged our PR.  What happens now?

In order to get a fresh copy of of our SST, we need to `git pull` it from the origin repo.

To do this we need to first check which branch we're working in locally with `git branch`. If we are still in a feature branch, we need to switch back to `main` by running `git checkout main`.  

Next, we run a new command:
```bash
git pull origin main
```
This will bring our `main` branch up to date with the origin repo. We are now free to create a new feature branch for future work. 


## Switching between branches

When you create a new branch, you use the `git checkout` command with the `-b` flag, for example `git checkout -b cole/new-branch`.

When you switch between existing branches, you don't need the `-b` flag: `git checkout main`

However, if you have uncommitted changes in a branch, you cannot switch to a different branch. You must either `stash` or `commit` them. `Stashing` is akin to discarding for the purposes of this tutorial, so if you ever just want to get back to your main branch and don't need the changes you've made in your current branch, just run 
```bash
git stash
```
Let's talk about what happens when you create a new branch. When you use the `git checkout -b [branch name]` command, you are creating a copy of the _branch you are currently in_.  Changes you make in the new branch do not affect the current branch you branched off of from. For example if our current branch is `main` and we create a new branch called `A` and check it out (switch into it), changes we make in `A` do not affect `main`.  If we work in `A` for a while, but want to try something experimental that we might not keep, we would commit our work in `A`, then create a new branch `B` using `git checkout -b B`.  This creates a copy of `A`, NOT a copy of `main`.  All the changes we made in `A` are preserved. Any changes we make in `B` do not affect either `A` or `main` until we merge them later (if at all). If we decide we want to keep the experimental changes in `B`, we can stay in that branch or merge it into `A`.  If we don't want to keep the changes in `B`, we can run `git stash` and then `git checkout A` and the changes in `B` will be discarded.

## A new PR

In order to practice what we've learned so far, we're going to create a new PR. See if you can do all this from memory.  If you can't the instructions are replicated further down the page with the git commands included.

1. From your updated local `main` branch, create a new branch called `new-branch`.
2. Add a new file under your personal directory in Users, called `goals.js`.
3. Copy this code into `goals.js`:
```js
const circularDataFlow = (existingCode, newCode) => {
  let singleSourceOfTruth = existingCode;
  let localCopy = singleSourceOfTruth;
  let featureBranch = localCopy + newCode;
  singleSourceOfTruth += featureBranch;
  return singleSoureOfTruth;
} 
```
4. Then, add in a comment underneath using `//` telling me what your personal goals are in using `GitHubTrainer`.
5. Add and commit this file
6. Push it to the origin repo
7. Create a PR (and merge it once it's approved)

*
*
*
*
*
*
*
*
*
*
*
*
*
*
*

OK, here are the git commands for the instructions above.  If you need help with the PR, refer to [Lesson 2](https://github.com/C-STYR/GitHubTrainer/Lesson-2)

1. From `main`, run `git checkout -b new-branch`
2. Add the new file by right-clicking on your directory and selecting `New file` from the dropdown menu
5. `git add Users/goals.js` and `git commit -m "added my goals"`
6. `git push origin new-branch`


