import { PostMetadata } from "../components/PostMetadata";
import Link from "next/link";

const PostPreview =(props: PostMetadata) =>{
    return (  
    <div className="border border-violet-600 p-4 rounded-mshadow-md bg-white">
        <Link href ={`posts/${props.slug}`}>
            <h2 className="font-bold text-violet-600 hover:underline">{props.title}</h2>
        </Link>
        <p>{props.subtitle}</p>
        <p>{props.date}</p>
    </div>
    
    );
    };

export default PostPreview;