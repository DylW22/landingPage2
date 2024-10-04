export const BlogList = ({ blogList }) => {
  return (
    <div>
      <ul>
        {blogList.map((blogData) => (
          <li>
            <Blog blogData={blogData} />
          </li>
        ))}
      </ul>
    </div>
  );
};
