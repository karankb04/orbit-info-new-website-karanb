# Blog post route (parked)

The `_` prefix keeps this folder out of routing. A static export (`output: "export"`)
refuses a dynamic route whose `generateStaticParams()` returns no pages, and
`content/blog` has no posts yet.

When the first post is added to `content/blog`, move the route back:

    git mv "app/blog/_post-template/[slug]" "app/blog/[slug]"
