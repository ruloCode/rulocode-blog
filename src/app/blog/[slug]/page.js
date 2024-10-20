


import { getPosts } from "../../../servicies/notion-client/getPosts";
import { filterPosts } from "../../../utils/notion/filterPosts";

import { getRecordMap } from "../../../servicies/notion-client/getRecordMap";


import BlogPage from "@/components/blog/blog-page/BlogPage";

export const dynamic = "force-dynamic";

const filter = {
  acceptStatus: ["Public", "PublicOnDetail"],
  acceptType: ["Paper", "Post", "Page"],
};

export default async function page({ params: { slug } }) {
  const posts = await getPosts();
  const detailPosts = filterPosts(posts, filter);
  const postDetail = detailPosts.find((t) => t.slug === slug);
  const recordMap = await getRecordMap(postDetail?.id);

  // console.log(postDetail, "postDetail");

  return (
    <BlogPage postDetail={postDetail} recordMap={recordMap} />
  );
}
