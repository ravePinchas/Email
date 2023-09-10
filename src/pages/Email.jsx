export function Email() {
  return (
    <section>
      <div className="email">
        <div className="item item-1">
          compose
          <hr />
        </div>
        <div className="item item-2">
          <input type="search" placeholder="search" />
        </div>
        <div className="item item-3">
          <button>inbox</button>
          <button>starred</button>
          <button>sent</button>
          <button>draft</button>
          <button>trash</button>
        </div>
        <div className="item item-4">
          <button>Date</button>
          <button>Subject</button>
          <button>All</button>
        </div>
      </div>
    </section>
  );
}
