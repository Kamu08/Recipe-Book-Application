import React from 'react';

const NoResultsPage = () => {
    return (
        <div className="flex items-center justify-center bg-slate-100 h-screen">
            <div className="text-center">
                <h1 className="tex sm:text-4xl font-bold mb-4">No Results Found</h1>
                <p className="sm:text-lg text-gray-600">Sorry, we couldn't find any recipes .</p>
            </div>
        </div>
    );
};

export default NoResultsPage;
