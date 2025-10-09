import { useState, useEffect } from "react";
import '../scss/Blog.scss'

export default function Blog() {
    const [blogFetch, setBlogFetch] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [activePost, setActivePost] = useState(null);

    useEffect(() => {
        fetch('data/Blog.json')
            .then(res => res.json())
            .then(data => setBlogFetch(data));
    }, []);

    const openModal = (post) => {
        setActivePost(post);
        setModalOpen(true);
    };

    const closeModal = () => {
        setActivePost(null);
        setModalOpen(false);
    };

    return (
        <section id="blog">
            <h2>Дізнайтесь більше про Web</h2>
            <div className="blog-list">
                {blogFetch.slice(0, 10).map((post, idx) => (
                    <div className="blog-card" key={idx}>
                        <div className="blog-img"><img src={post.image} alt={post.title} className="blog-thumb" /></div>

                        <div className="blog-info">
                            <span className="blog-date">{post.date}</span>
                            <h3>{post.title}</h3>
                            <p>{post.shortDescription}</p>
                            <button className="read-btn" onClick={() => openModal(post)}>
                                Читати
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {modalOpen && activePost && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-window" onClick={e => e.stopPropagation()}>
                        <button className="modal-close" onClick={closeModal}>×</button>
                        <img src={activePost.image} alt={activePost.title} className="modal-img" />
                        <span className="modal-date">{activePost.date}</span>
                        <h2 className="modal-titile">{activePost.title}</h2>
                        <div className="modal-article">
                            {activePost.article.map((para, i) => (
                                <p key={i}>{para}</p>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}