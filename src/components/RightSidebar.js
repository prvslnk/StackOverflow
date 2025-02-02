import React from 'react';

const RightSidebar = () => {
    return (
        <aside className="right-sidebar">

            <div className="section">
                <h3>Featured & Meta </h3>
                <ul>
                    <li>
                        <span className="hot-meta-votes"><i class="bi bi-pencil-square"></i></span>
                        <span className="hot-meta-text">
                            The unexpected benefits of mentoring others.
                        </span>
                    </li>
                    <li>
                        <span className="hot-meta-votes"><i class="bi bi-pencil-square"></i></span>
                        <span className="hot-meta-text">
                            Podcast 354: Building for AR with Niantic Labs' augmented reality SDK.
                        </span>
                    </li>
                </ul>
            </div>

            <div className="section">
                <h3>Featured & Meta </h3>
                <ul>
                    <li>
                        <span className="hot-meta-votes"><i class="bi bi-stack-overflow"></i></span>
                        <span className="hot-meta-text">
                            Beta release of Collectives™ On Stack Overflow
                        </span>
                    </li>
                </ul>
            </div>

            <div className="hot-meta-container">
                <h3 className="hot-meta-title">Hot meta post</h3>
                <ul className="hot-meta-list">
                    <li className="hot-meta-item">
                        <span className="hot-meta-votes">8</span>
                        <span className="hot-meta-text">
                            Tags [driver] and [device-driver] appear to be redundant
                        </span>
                    </li>
                    <li className="hot-meta-item">
                        <span className="hot-meta-votes">27</span>
                        <span className="hot-meta-text">
                            How to handle dupes where A is closed as dup of B but I have an
                            answer that…
                        </span>
                    </li>
                    <li className="hot-meta-item">
                        <span className="hot-meta-votes">27</span>
                        <span className="hot-meta-text">Ambiguous tag [containers]</span>
                    </li>
                </ul>
            </div>

            <div className="section">
                <h3>Custom Filter</h3>
                <button>Add Custom Filters</button>
            </div>
        </aside>
    );
};

export default RightSidebar;
