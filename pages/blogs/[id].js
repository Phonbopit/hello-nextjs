import Link from 'next/link';
import { useRouter } from 'next/router';

import blogs from '../../mock/blogs';

export default () => {
  const router = useRouter();
  const { id } = router.query;

  const blog = blogs.find(blog => blog.id === parseInt(id));

  if (!blog) {
    return (
      <div>
        <p>No Data</p>
        <Link href="/">
          <a>Back to Home</a>
        </Link>
      </div>
    );
  }

  return (
    <div>
      <p>This is blog #{blog.id}</p>
      <p>{blog.title}</p>
      <p>{blog.content}</p>
    </div>
  );
};
