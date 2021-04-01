import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {Pagination} from 'react-bootstrap';

Paginator.propTypes = {
  totalCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  activePage: PropTypes.number.isRequired,
  setActivePage: PropTypes.func.isRequired,
};

function Paginator({totalCount, pageSize, activePage, setActivePage}) {
  const [numberOfPages, setNumberOfPages] = useState(0);
  const [pages, setPages] = useState<number[]>([]);

  useEffect(() => {
    const numberOfPages = Math.ceil(totalCount / pageSize);
    let pages: number[] = [];

    for (let i = 1; i <= numberOfPages; i++) {
      pages.push(i);
    }

    setPages(pages);
    setNumberOfPages(numberOfPages);
  }, [totalCount]);

  function render() {
    return (
      <>
        <div>
          Page {activePage} of {numberOfPages}
        </div>
        <br />
        <Pagination size="sm">
          <Pagination.First />
          {pages.map((page) => {
            return (
              <Pagination.Item onClick={() => setActivePage(page)} active={page === activePage} key={page}>
                {page}
              </Pagination.Item>
            );
          })}
          <Pagination.Last />
        </Pagination>
      </>
    );
  }
  return render();
}
export default Paginator;
