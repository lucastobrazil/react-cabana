import React from 'react';
import Pagination from '.';

export default function PaginationDocs() {
    return (
        <div>
            <Pagination />
            <Pagination size={16} />
            <Pagination size={32} />
            <Pagination type="numbers" />
        </div>
    );
}
