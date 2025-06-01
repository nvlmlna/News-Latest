import { posts as aiposts } from "../data/posts-AI";
import { posts as cybersecurityposts } from "../data/posts-Cybersecurity";
import { posts as edtechposts } from "../data/posts-EdTech";
import { posts as iotposts } from "../data/posts-IOT";
import { posts as latestnewsposts } from "../data/posts-LatestNews";
import { posts as roboticposts} from "../data/posts-Robotic";
import { posts as trendingposts} from "../data/posts-Trending";

const allposts = [...aiposts, ...cybersecurityposts, ...edtechposts, ...iotposts, ...latestnewsposts, ...roboticposts, ...trendingposts];

export default allposts;