const ReservationList = () => {
  return (
    <div className="container-fluid bg-secondary">
      <div className="row vh-100 justify-content-center align-items-center">
        <div className="col-lg-8">
          <section className="base-template">
            <div className="wrapper base-template__wrapper">
              <div className="base-template__content">
                <div className="table-view">
                  <div id="filter" className="filter">
                    <div id="filter-search" className="filter-search">
                      <input type="text" name="search" placeholder="Search" />
                      <img
                        src="https://bato-web-agency.github.io/bato-shared/table-view/img/search.svg"
                        alt="Search"
                      />
                    </div>

                    <div className="filter__controls">
                      <div className="filter-selection">
                        <div className="filter-selection__label">Status</div>

                        <div id="filter-select" className="filter-select">
                          <input
                            readOnly
                            type="text"
                            name="status"
                            value="All"
                          />
                          <img
                            src="https://bato-web-agency.github.io/bato-shared/table-view/img/select.svg"
                            alt="Search"
                          />

                          <ul className="filter-select__options">
                            <li tabindex="0" data-option className="selected">
                              All
                            </li>
                            <li tabindex="0" data-option>
                              Success
                            </li>
                            <li tabindex="0" data-option>
                              Pending
                            </li>
                            <li tabindex="0" data-option>
                              Rejected
                            </li>
                          </ul>
                        </div>
                      </div>

                      <a
                        title="Export JSON"
                        href="https://bato-web-agency.github.io/bato-shared/table-view/assets/data.json"
                        target="_blank"
                        className="filter-export"
                      >
                        <span>JSON</span>
                        <img
                          src="https://bato-web-agency.github.io/bato-shared/table-view/img/export.svg"
                          alt="Export JSON"
                        />
                      </a>
                    </div>
                  </div>

                  <div style={{ overflow: "scrollX" }}>
                    <table id="table" className="table">
                      <thead id="head" className="table__head">
                        <tr className="table__tr">
                          {/* <th className="table__td table__th fixed bg-transparent">
                          <div
                            data-control="checkbox"
                            data-select="all"
                            className="table-checkbox"
                          >
                            <label title="Select all rows" tabindex="0">
                              <input hidden type="checkbox" />
                            </label>
                          </div>
                        </th>
                        <th className="table__td table__th link fixed bg-transparent">
                          <div
                            title="Sort"
                            tabindex="0"
                            data-control="invoice"
                            data-sort="desc"
                            className="table-control"
                          >
                            <img
                              src="https://bato-web-agency.github.io/bato-shared/table-view/img/sort.svg"
                              alt="Sort"
                            />
                            <span>Invoice ID</span>
                          </div>
                        </th> */}
                          <th className="table__td table__th contact bg-transparent">
                            <div
                              title="Sort"
                              tabindex="0"
                              data-control="contact"
                              data-sort="desc"
                              className="table-control"
                            >
                              <img
                                src="https://bato-web-agency.github.io/bato-shared/table-view/img/sort.svg"
                                alt="Sort"
                              />
                              <span>Initiator</span>
                            </div>
                          </th>
                          <th className="table__td table__th bg-transparent">
                            <div
                              title="Sort"
                              tabindex="0"
                              data-control="company"
                              data-sort="desc"
                              className="table-control"
                            >
                              <img
                                src="https://bato-web-agency.github.io/bato-shared/table-view/img/sort.svg"
                                alt="Sort"
                              />
                              <span>Company</span>
                            </div>
                          </th>

                          <th className="table__td table__th bg-transparent">
                            <div className="table-control">
                              <span>Details</span>
                            </div>
                          </th>
                          <th className="table__td table__th datetime bg-transparent">
                            <div
                              title="Sort"
                              tabindex="0"
                              data-control="datetime"
                              data-sort="desc"
                              className="table-control"
                            >
                              <img
                                src="https://bato-web-agency.github.io/bato-shared/table-view/img/sort.svg"
                                alt="Sort"
                              />
                              <span>Invoice Date</span>
                            </div>
                          </th>
                          <th className="table__td table__th status bg-transparent">
                            <div
                              title="Sort"
                              tabindex="0"
                              data-control="status"
                              data-sort="desc"
                              className="table-control"
                            >
                              <img
                                src="https://bato-web-agency.github.io/bato-shared/table-view/img/sort.svg"
                                alt="Sort"
                              />
                              <span>Status</span>
                            </div>
                          </th>
                        </tr>
                      </thead>

                      <tbody id="body" className="table__body">
                        <tr className="table__tr animate">
                          <td className="table__td bg-transparent">
                            <a
                              title="Natalie Adams"
                              href="mailto:natalieadams@company.io"
                              className="table-contact"
                            >
                              <img
                                src="https://bato-web-agency.github.io/bato-shared/table-view/img/avatars/natalieadams.jpg"
                                alt="Natalie Adams"
                                className="table-contact__image"
                              />
                              <div className="table-contact__data">
                                <div className="table-contact__name">
                                  Natalie Adams
                                </div>
                                <div className="table-contact__email">
                                  natalieadams@company.io
                                </div>
                              </div>
                            </a>
                          </td>
                          <td className="table__td bg-transparent">
                            <div className="table-text">
                              Innovate Web Solutions
                            </div>
                          </td>
                          <td className="table__td bg-transparent">
                            <div className="table-progress">
                              <div className="table-progress__bar">
                                <span></span>
                              </div>
                              <div className="table-progress__value">92%</div>
                            </div>
                          </td>
                          <td className="table__td bg-transparent">
                            <div className="table-text details">
                              Praesent condimentum orci quis nibh.
                            </div>
                          </td>
                          
                          <td className="table__td bg-transparent">
                            <div className="table-status success">success</div>
                          </td>
                          
                        </tr>
                      </tbody>

                      <tfoot className="table__footer">
                        {/* <div className="table-counter">
                    <span className="table-counter__label">Showing</span>
                    <span data-limit>0</span>/<span data-total>0</span>
                  </div>

                  <div
                    title="Load more"
                    tabindex="0"
                    className="load-more"
                    data-load-more
                  >
                    <span>Load more</span>
                    <img
                      src="https://bato-web-agency.github.io/bato-shared/table-view/img/arrow-down.svg"
                      alt="Load more"
                    />
                  </div>

                  <div className="table-counter"></div> */}
                      </tfoot>

                      {/* <template id="empty">
                  <div className="table-empty">
                    <img
                      src="https://bato-web-agency.github.io/bato-shared/table-view/img/empty.svg"
                      alt="Empty"
                    />
                    <div className="table-empty__data">
                      <div className="table-empty__title">
                        Nothing was found for your request.
                      </div>
                      <div className="table-empty__text">
                        Expand your search parameters.
                      </div>
                    </div>
                  </div>
                </template> */}
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ReservationList;
