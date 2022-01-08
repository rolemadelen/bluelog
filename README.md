# Blue Blog

## Progress
- 2022-01-05
  + Inital blog created by following [this](https://nextjs.org/learn/basics/create-nextjs-app) tutorial from Next.js <br /><img src="./public/readme/20220105-initial.jpg" width="500" alt="Initial blog" />
  + url modified --> `/posts/<post-language>/<slug>/`
- 2022-01-06
  + Attempted to add 'prism' for syntax highlighting but it didn't go well. After parsing markdown files, no classes were added to tags.
  + Started implementing the blog home UI
- 2022-01-07
  + Overall theme (blue-ish) defined. Utilized SASS's variable to set color schemes.
  + Finished posts (card style) UI using tailwindcss.
  + post's show (contents) UI done for now. Markdown not yet added but simply added a background color to differenciate with normal texts.<br/><img src="./public/readme/20220107-show.jpg" width="500" alt="Post's content UI" />
  + Each post's language is labeled with a circle with an animation.<br/><img src="./public/readme/20220107-5.webp" width="500" alt="Post's content UI" />
    * Korean => Red + Blue + White
    * English => Blue
    * Japan => Red
  + Modified transition's to a keyframe animation.<br/><img src="./public/readme/20220107-keyframe.webp" width="150" alt="keyframe animation">
  + Footer added
  + Language selection added. I can click a lang to view only posts in that language.
    + I can also check available languages within a post.
- 2022-01-08
  + tagging added <br/><img src="./public/readme/20220108-tagging.webp" width="500" alt="tagging">