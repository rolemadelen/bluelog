---
title:  "GPG 'failed to write commit object'?"
subtitle: "What to do when gpg fails to signed the data."
date:   "2022-01-30"
lang: "en"
tags:
- gpg
---

My commits are signed by default:

```shell
$ git config --global commit.gpgsign true
```

After making changes, I was trying to make a commit and I encountered this error:

![Verified](/images/in-post/gpg-error/gpg-error-1.jpg)

I double checked my name and email on git to make sure that it's the one I used to register the key:

```shell
$ git config --global user.name
 $ git config --global user.email
```

I also let git know about my gpg (which I've done it already - but did it again anyway)

```shell 
$ gpg --list-secret-keys --keyid-format=long # get your key from here 
 $ git config --global user.signingkey <YOUR_KEY>
```

but no luck.

---

Some told me about installing(?) `gpg1` and other stuff but didn't wanted to do that. It worked literally 30 minutes ago and all of sudden `gpg` is deprecated or something? No. I should be able to solve it without installing anything.

So what do you do. You google ofc.

Thanks to stack overflow like always, I tried a solution from this [post](https://stackoverflow.com/questions/55037637/gpg-failed-to-write-commit-object) and it worked like magic. Although I don't know why it works because they didn't explained it.

So here's what you do.

```shell
$ gpg --sign .
```

that's it. It will ask for your passphrases and once you type that in, try to commit again and it should work.