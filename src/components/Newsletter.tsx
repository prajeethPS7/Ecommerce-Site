import React, { useState } from 'react';

const Newsletter: React.FC = () => {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (email) {
            // TODO: integrate with Supabase
            setSubmitted(true);
            setEmail('');
            setTimeout(() => setSubmitted(false), 3000);
        }
    };

    return (
        <section className="newsletter" id="newsletter-section">
            <div className="newsletter-content">
                <div className="newsletter-text">
                    <h2>Stay In The Loop</h2>
                    <p>Subscribe to our newsletter to receive the latest updates, exclusive offers, and style tips.</p>
                </div>
                <form className="newsletter-form" onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder="Enter your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        id="newsletter-email"
                    />
                    <button type="submit" id="newsletter-submit">
                        {submitted ? 'Subscribed!' : 'Submit'}
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Newsletter;
