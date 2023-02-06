
import Link from "next/link";
import getPostMetadata from "@/components/GetPostMetadata";
import PostPreview from "@/components/PostPreview";

/* const getPostMetadata = ():PostMetadata[] =>{
  const folder = "posts/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter ((file) => file.endsWith(".md"));

  const posts = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`posts/${fileName}`, 'utf8');
    const matterResult = matter(fileContents);
     return{
      title:matterResult.data.title,
      date: matterResult.data.date,
      subtitle: matterResult.data.subtitle,
      slug:fileName.replace(".md", ""),
     };
  });
  return posts
 };*/

const HomePage = () => {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) =>(
    /*<div>
      <Link href ={`posts/${post.slug}`}>
      <h2>{post.title}</h2>
      </Link>
      <p>{post.subtitle}</p>
      <p>{post.date}</p>
    </div>  */
     <PostPreview key ={post.slug}{...post} />

  ));

  return <div>{postPreviews}</div>;
 
};
export default HomePage;