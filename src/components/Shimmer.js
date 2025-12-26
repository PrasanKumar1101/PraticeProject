const Shimmer = () => {
  return (
    <div className="shimmer-container">
      {Array(8)
        .fill("")
        .map((_, index) => (
          <div className="shimmer-card" key={index}>
            <div className="shimmer-img"></div>
            <div className="shimmer-line title"></div>
            <div className="shimmer-line subtitle"></div>
            <div className="shimmer-line rating"></div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;
