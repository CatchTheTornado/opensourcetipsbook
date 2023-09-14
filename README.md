# Open Source Tips & Tricks Book

Welcome to **Open Source: Tips and Tricks book**  - a comprehensive guide intended to empower both **startups and established enterprises** to successfully navigate the world of open source software and **build a successfull OSS product**.

This is an open source book on open source so everyone is invited to:
<table>
    <tr>
        <td valign="top" width="50%">📣 Give us some feedback by <a href="https://github.com/CatchTheTornado/opensourcetipsbook/issues">creating a Github issue</a> in the book's repository</td>
        <td valign="top" width="50%">👩‍💻 Contribute to the book by <a href="https://github.com/CatchTheTornado/opensourcetipsbook/pulls">creating a pull request</a> with any kind of improvements, amendments or new content.</td>
    </tr>
</table>

## ... for practicioners and for business

This guide is *definitely for you* if you are:
- **an innovator, CTO or manager** at a software company thinking on OSS benefits for your organization
- **a startup founder** running a tech business, developer product etc.
- **a developer** contributing to, being part of any OS project.

In this rapidly evolving digital era, open source software has emerged as a powerful tool for businesses, fostering innovation, collaboration, and transparency. However, effectively leveraging open source to drive business success requires a nuanced understanding of its principles, best practices, and pitfalls. That's where this guide comes in.

We'll start by examining the concept of open source software, its benefits, and key considerations before diving into the when, why, and how of open sourcing. You'll gain practical insights on how to launch, maintain, and market your open source project, building a vibrant, engaged community around it.

## Open Sourcing a product

Further, you'll find detailed discussions on topics such as:
- The importance of **being genuinely committed** to the open source ethos
- How to create an **inclusive community** around your project
- Strategies for releasing **early and often**, and why it's essential
- **Managing and governing** successful open source projects
- The value of **transparent communication**
- Making **onboarding** easy and fun, and much more!

This guide is your roadmap to navigating the open source landscape, whether you're a seasoned professional looking to sharpen your skills or a budding entrepreneur starting your journey. By the end, you'll have the knowledge and tools you need to effectively leverage open source software for your business success.

Here's to your open source journey - may it be filled with discovery, innovation, and growth 

## ... and contributting

We're true open source belivers - and more over, we belive open source project can and even should coexist and mutually support business endevours.

We're sure this guide will be **way better including your own hints** and what worked for your projects 🙌

Everyone is invited to contribute, comment or provide a feedback to this book via our [Github repository](https://github.com/CatchTheTornado/opensourcetipsbook). Please **[create an issue](https://github.com/CatchTheTornado/opensourcetipsbook/issues/new)** with your comments or a **[pull request](https://github.com/CatchTheTornado/opensourcetipsbook/pulls)** for some contribution or fixes. After merging, your changes will be automatically updated to this page.

## Authors

This book is a community effort started by Piotr Karwatka, an open source enthusiast, developer and [co-founder and investor at Catch The Tornado](https://www.catchthetornado.com/portfolio). 

## How to contribute

This book is published in the form of a Node.js (Astro) webpage. If you're thinking of adding or tweaking some content you might want to first check if there's already an [issue for it](https://github.com/CatchTheTornado/opensourcetipsbook/issues) (If not create one to avoid the duplication of your work) or maybe even a ready [pull request](https://github.com/CatchTheTornado/opensourcetipsbook/pulls) waiting to be merged. 

Then - the best way to contribute is one of the following two. 

### Install and test the website locally

0. Make sure you have `git` and `node` (14.x) installed
1. Clone the repository locally with: `mkdir opensourcetipsbook; cd opensourcetipsbook` and then `git clone https://github.com/CatchTheTornado/opensourcetipsbook.git .`
2. Install all the dependencies with `npm install`
3. Start the dev preview: `npm run dev`
4. Edit the files inside the `src/content/docs` folder.
5. To include a new chapter in the ToC please edit the [`astro.config.mjs`](https://github.com/CatchTheTornado/opensourcetipsbook/blob/4828a42339b7f0a9f02c9419a4a70472cb02df74/astro.config.mjs#L21)

### Just edit the `*.mdx` files

If you don't want to mess up your environment with a local instance of the webpage just edit the files online, using the Github editor, create a Pull Request, and use the Vercel preview.

0. Create the fork of this repo if you like (preferred).
1. Open the [`src/content/docs/chapters`](https://github.com/CatchTheTornado/opensourcetipsbook/tree/main/src/content/docs/chapters) folder on GitHub and use the `Edit` or `Create new file option`
2. If this is a new chapter you can include it in ToC by editing the [`astro.config.mjs`](https://github.com/CatchTheTornado/opensourcetipsbook/blob/4828a42339b7f0a9f02c9419a4a70472cb02df74/astro.config.mjs#L21) file
3. Commit changes under a new branch and create a Pull Request.

That's it! In case of any troubles don't hesitate to create a new issue with your questions.

