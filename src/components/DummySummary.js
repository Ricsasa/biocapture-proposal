import React from 'react';

const DummySummary = ({ section }) => {

  const items = []

  for (let i = 0; i < 4; i++) {
    items.push(
      <div>
        <div className="title-div">{`${section} Field ${String.fromCharCode(i+65)}`}</div>
        <div className="content-div">Lorem Ipsum</div>
      </div>
    )
  }

  return (
    <section>
      {items}
    </section>
  );
};

export default DummySummary;