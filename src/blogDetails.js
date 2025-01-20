const blogs = [
    {
        name: "blog1",
        tag: "AI",
        postBanner: "assets/img/blog/blog-1.jpg",
        title: "Dolorum optio tempore voluptas dignissimos cumque fuga qui quibusdam quia",
        publishDate: "Jan 1, 2022",
        sortDesc: "Similique neque nam consequuntur ad non maxime aliquam quas. Quibusdam animi praesentium. Aliquam et laboriosam eius aut nostrum quidem aliquid dicta. Et eveniet enim. Qui velit est ea dolorem doloremque deleniti aperiam unde soluta. Est cum et quod quos aut ut et sit sunt. Voluptate porro consequatur assumenda perferendis dolore.",
        section: `
                  <p>
                    Similique neque nam consequuntur ad non maxime aliquam quas. Quibusdam animi praesentium. Aliquam et
                    laboriosam eius aut nostrum quidem aliquid dicta.
                    Et eveniet enim. Qui velit est ea dolorem doloremque deleniti aperiam unde soluta. Est cum et quod
                    quos aut ut et sit sunt. Voluptate porro consequatur assumenda perferendis dolore.
                  </p>

                  <p>
                    Sit repellat hic cupiditate hic ut nemo. Quis nihil sunt non reiciendis. Sequi in accusamus harum
                    vel aspernatur. Excepturi numquam nihil cumque odio. Et voluptate cupiditate.
                  </p>

                  <blockquote>
                    <p>
                      Et vero doloremque tempore voluptatem ratione vel aut. Deleniti sunt animi aut. Aut eos aliquam
                      doloribus minus autem quos.
                    </p>
                  </blockquote>

                  <p>
                    Sed quo laboriosam qui architecto. Occaecati repellendus omnis dicta inventore tempore provident
                    voluptas mollitia aliquid. Id repellendus quia. Asperiores nihil magni dicta est suscipit
                    perspiciatis. Voluptate ex rerum assumenda dolores nihil quaerat.
                    Dolor porro tempora et quibusdam voluptas. Beatae aut at ad qui tempore corrupti velit quisquam
                    rerum. Omnis dolorum exercitationem harum qui qui blanditiis neque.
                    Iusto autem itaque. Repudiandae hic quae aspernatur ea neque qui. Architecto voluptatem magni. Vel
                    magnam quod et tempora deleniti error rerum nihil tempora.
                  </p>

                  <h3>Et quae iure vel ut odit alias.</h3>
                  <p>
                    Officiis animi maxime nulla quo et harum eum quis a. Sit hic in qui quos fugit ut rerum atque. Optio
                    provident dolores atque voluptatem rem excepturi molestiae qui. Voluptatem laborum omnis ullam
                    quibusdam perspiciatis nulla nostrum. Voluptatum est libero eum nesciunt aliquid qui.
                    Quia et suscipit non sequi. Maxime sed odit. Beatae nesciunt nesciunt accusamus quia aut ratione
                    aspernatur dolor. Sint harum eveniet dicta exercitationem minima. Exercitationem omnis asperiores
                    natus aperiam dolor consequatur id ex sed. Quibusdam rerum dolores sint consequatur quidem ea.
                    Beatae minima sunt libero soluta sapiente in rem assumenda. Et qui odit voluptatem. Cum quibusdam
                    voluptatem voluptatem accusamus mollitia aut atque aut.
                  </p>
                  <img src="assets/img/blog/blog-inside-post.jpg" class="img-fluid" alt="">

                  <h3>Ut repellat blanditiis est dolore sunt dolorum quae.</h3>
                  <p>
                    Rerum ea est assumenda pariatur quasi et quam. Facilis nam porro amet nostrum. In assumenda quia
                    quae a id praesentium. Quos deleniti libero sed occaecati aut porro autem. Consectetur sed excepturi
                    sint non placeat quia repellat incidunt labore. Autem facilis hic dolorum dolores vel.
                    Consectetur quasi id et optio praesentium aut asperiores eaque aut. Explicabo omnis quibusdam esse.
                    Ex libero illum iusto totam et ut aut blanditiis. Veritatis numquam ut illum ut a quam vitae.
                  </p>
                  <p>
                    Alias quia non aliquid. Eos et ea velit. Voluptatem maxime enim omnis ipsa voluptas incidunt. Nulla
                    sit eaque mollitia nisi asperiores est veniam.
                  </p>
        `,
        authoDetails: {
            name: "prince raj",
            socialMedia: {
                "instagram": "/",
                "twitter-x": "/",
                "facebook": "/"
            },
            bio: "Itaque quidem optio quia voluptatibus dolorem dolor. Modi eum sed possimus accusantium. Quas repellat voluptatem officia numquam sint aspernatur voluptas. Esse et accusantium ut unde voluptas.",
            profile: "assets/img/blog/blog-author.jpg"
        }
    }
]

const renderBlogDetails = (queryPrompt) => {
    const blog = blogs.find(p => p.name === queryPrompt);

    if (!blog) {
        window.location.href = "/blog.html";
        return;
    }

    const blogAuthorDetails = document.getElementById("blog-author-deatils");
    const banner = document.getElementById("postBanner");
    const title = document.getElementById("title");
    const authorName = document.getElementById("authorName");
    const publishDate = document.getElementById("publishDate");
    const articleContent = document.getElementById("articleContent");

    if (banner) {
        banner.setAttribute("src", blog.postBanner);
    }

    if (title) {
        title.textContent = blog.title;
    }

    if (authorName) {
        authorName.textContent = blog.authoDetails.name;
    }

    if (publishDate) {
        publishDate.textContent = blog.publishDate;
    }

    if (articleContent) {
        articleContent.innerHTML = blog.section;
    }

    if (blogAuthorDetails) {
        const { name, socialMedia, bio, profile } = blog.authoDetails;

        const socialLinks = Object.entries(socialMedia)
            .map(([key, url]) => url
                ? `<a href="${url}" target="_blank"><i class="bi bi-${key}"></i></a>`
                : ''
            )
            .join('');

        blogAuthorDetails.innerHTML = `
            <img src="${profile}" class="rounded-circle flex-shrink-0" alt="${name}">
            <div>
                <h4>${name}</h4>
                <div class="social-links" style="display: flex;gap: 6px;m;margin: 6px 0;">${socialLinks}</div>
                <p>${bio}</p>
            </div>
        `;
    }
    renderRecentPostDetailsPage();
};

const renderRecentPostDetailsPage = () => {
    const recentPostsContainer = document.getElementById("recent-posts");
    if (recentPostsContainer) {
        const sortedBlogs = blogs.sort((a, b) => new Date(b.publishDate) - new Date(a.publishDate));
        const recentPostList = sortedBlogs.slice(0, 6)
            .map(blog => `
                <div class="post-item">
                    <img src="${blog.postBanner}" alt="${blog.title}" class="flex-shrink-0 img-fluid">
                    <div>
                        <h4 style="
                            font-size: 1rem;
                            font-weight: bold;
                            line-height: 1.4;
                            display: -webkit-box;
                            -webkit-line-clamp: 2;
                            -webkit-box-orient: vertical;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            margin: 0;
                        ">
                            <a href="blog-details.html?name=${blog.name}" title="${blog.title}">${blog.title}</a>
                        </h4>
                        <time datetime="${blog.publishDate}" style="font-size: 0.875rem; color: #888;">${blog.publishDate}</time>
                    </div>
                </div>
            `)
            .join('');

        recentPostsContainer.innerHTML = `
            <h3 class="widget-title" style="font-size: 1.25rem; font-weight: bold; margin-bottom: 16px;">Recent Posts</h3>
            ${recentPostList}
        `;
    }

}

const renderHome = () => {

}
if (window.location.pathname == '/index.html') {
    renderPortfoliPage()
} else if (window.location.pathname == '/blog.html') {
    renderHome();
} else {
    const fullUrl = window.location.href;
    const queryString = fullUrl.split('?')[1];
    renderBlogDetails("blog1");
}