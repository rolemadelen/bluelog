---
title:  "GitHub - Signing Commits using GPG"
subtitle: "How do you sign commits locally using git on OSX?"
date:   "2022-01-29"
lang: "en"
tags:
- github
- gpg
---

## Create a new key pair

First download [GPG Suite](https://gpgtools.org/) to create and store your GPG key passphrase (you don't need to download this app to generate a new key pair, but it makes your life easier -- *maybe*).

Open `GPG Keychain` and click `New` on the top to create a new key pair.
Fill out the form and press `Create Key` to generate one.

![GPG Keychain](/images/in-post/gpg/step1.gif)

Now right click on your newly created key pair and click `Copy`. 
![Created key pair](/images/in-post/gpg/step2.gif)

We'll use this copied key to add a new GPG key on GitHub.

## Adding a new GPG key 

Navigate to your GitHub account -> `Setting` -> `Access` -> `SSH and GPG keys` and click `New GPG Key` on the bottom.

![Add a new GPG key](/images/in-post/gpg/step3.jpg)

Now paste your key here and click `Add GPG Key` and you're ready to go.

## Sigining commits

Use `-S` flag when committing changes:

```shell
$ git commit -S -m "signing commits :)"
```

If you get a passphrase is unmatched error, you need to [tell git which GPG key you're using](https://docs.github.com/en/authentication/managing-commit-signature-verification/telling-git-about-your-signing-key).


If succeeded, push your commits.
```shell
$ git push
```

And check your commits from GitHub repo and you'll see a label `Verified` attached next to your commit.
![Verified](/images/in-post/gpg/step4.jpg)

If it says `Unverified`, make sure you've added the right GPG keys from the setting.

## Tips

If you want every commits to be a signed commit by default, set `commit.gpgsign` to be `true`:

```shell
# local
 $ git config commit.gpgsign true

 # global
 $ git config --global commit.gpgsign true
```

## Reference
- [https://docs.github.com/en/authentication/managing-commit-signature-verification/signing-commits](https://docs.github.com/en/authentication/managing-commit-signature-verification/signing-commits)