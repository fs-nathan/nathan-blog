import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import _ from 'lodash';
import Layout from '../components/Layout';
import Thumbnail from '../components/Thumbnail';
import { IPost } from '../types/post';
import { SITE_NAME } from '../utils/constants';
import { getAllPosts } from '../utils/mdxUtils';

type Props = {
  posts: IPost[];
};

const Home: React.FC<Props> = ({ posts }: Props) => {
  return (
    <Layout>
      <Head>
        <title>{SITE_NAME}</title>
      </Head>

      <h1 className="text-4xl font-bold mb-4">Posts</h1>

      <div className="space-y-12">
        {posts.map((post) => (
          <div key={post.slug}>
            {!_.isEmpty(post.thumbnail) && <div className="mb-4">
              <Thumbnail
                slug={post.slug}
                title={post.title}
                src={post.thumbnail}
              />
            </div>}


            <h2 className="text-2xl font-bold mb-4">
              <Link href={`/posts/${post.slug}`}>
                <a>{post.title}</a>
              </Link>
            </h2>

            <p>{post.description}</p>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts([
    'slug',
    'date',
    'thumbnail',
    'title',
    'description',
  ]);

  return { props: { posts } };
};