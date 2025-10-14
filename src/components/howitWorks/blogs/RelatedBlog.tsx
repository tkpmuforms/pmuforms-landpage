import "./relatedblogs.scss";

interface BlogPost {
  id: number;
  image: string;
  date: string;
  author: string;
  title: string;
  excerpt: string;
  slug: string;
}

interface RelatedBlogsProps {
  posts: BlogPost[];
}

const RelatedBlogs = ({ posts }: RelatedBlogsProps) => {
  return (
    <section className="related-blogs-section">
      <div className="related-blogs-container">
        <h2 className="related-blogs-title">Recent Insights</h2>
        <div className="related-blogs-grid">
          {posts.map((post) => (
            <article key={post.id} className="related-blog-card">
              <div className="related-blog-image">
                <img src={post.image || "/placeholder.svg"} alt={post.title} />
              </div>
              <div className="related-blog-content">
                <div className="related-blog-meta">
                  <span className="related-blog-date">{post.date}</span>
                  <span className="related-blog-divider">|</span>
                  <span className="related-blog-author">{post.author}</span>
                </div>
                <h3 className="related-blog-title">{post.title}</h3>
                <p className="related-blog-excerpt">{post.excerpt}</p>
                <button className="related-blog-read-more">Read more</button>
              </div>
            </article>
          ))}
        </div>
        <div className="load-more-container">
          <button className="load-more-btn">Load more</button>
        </div>
      </div>
    </section>
  );
};

export default RelatedBlogs;
