import React from 'react';
import 'assets/stylesheets/list-news.scss'

const ListNews: React.FC = () => {
  return (
    <div className='list-content'>
        <div className="card">
            <div className="loader-shimmer-banner shimmer-animation"></div>
            <div className="loader-shimmer-content">
                <div className="loader-shimmer-header">
                <div className="loader-shimmer-title shimmer-animation"></div>
                <div className="loader-shimmer-rating shimmer-animation"></div>
                </div>
                <div className="loader-shimmer-list shimmer-animation"></div>
                <div className="loader-shimmer-info shimmer-animation"></div>
            </div>
        </div>

        <div className="card">
            <div className="loader-shimmer-banner shimmer-animation"></div>
            <div className="loader-shimmer-content">
                <div className="loader-shimmer-header">
                <div className="loader-shimmer-title shimmer-animation"></div>
                <div className="loader-shimmer-rating shimmer-animation"></div>
                </div>
                <div className="loader-shimmer-list shimmer-animation"></div>
                <div className="loader-shimmer-info shimmer-animation"></div>
            </div>
        </div>
    </div>
  );
}

export { ListNews };