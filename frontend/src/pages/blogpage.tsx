import React from "react";
import { useParams } from "react-router-dom";
import { vData } from "@/mockData/valorantMockData";
import Navbar from "@/components/ui/navbar";

/**
 * 
 * Use an API to fetch the blog post data
 */

const BlogPage: React.FC = () => {
  const { topic } = useParams<{ topic: string }>();
  const post = vData.find((d) => d.title === topic);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="">
      <Navbar />
      <div className="w-full pt-20 flex items-center justify-center">
        <div className="w-[50%]">
          <span className="flex justify-between items-center">
            <h1 className="font-bold text-[2.5rem] p-4">{post.title}</h1>
            <p>{new Date(post.date).toDateString()}</p>
          </span>
          <img className="" src={post.banner.url} alt={post.title} />
          <div className="p-4">
            <p>{post.description}</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe vel at sapiente aliquid ipsam est necessitatibus porro temporibus iusto minus, consequatur id velit quidem! Accusamus sequi itaque perspiciatis error quo!
            Ipsa placeat blanditiis unde facere optio minus iusto maxime! Reprehenderit temporibus dolorum eum repellat in maxime rerum consequatur facere dolor totam, expedita voluptatibus sapiente, possimus fugiat iusto facilis aliquam alias.
            Commodi quod itaque nemo et doloribus repellendus voluptatem at cum? Nam illo laborum soluta earum harum excepturi voluptatem commodi deserunt! Accusantium dicta ex quo est atque ducimus deleniti non sunt.
            Aliquam tempora facilis porro maiores iste dolorem recusandae hic error, minus eius possimus asperiores quos odit id! Quos facere eum a quo, autem laudantium perspiciatis consectetur voluptatibus nam dolorem similique?
            Tempora molestiae maxime itaque provident accusamus eos, labore voluptatum asperiores fugiat exercitationem odio ipsum saepe voluptate quisquam repellendus culpa! Nostrum porro adipisci totam ex accusamus. Ea, magnam? Perspiciatis, fugit beatae?
            Quidem laborum iure facilis ratione similique, maiores aliquam saepe maxime magni nobis molestiae quisquam nisi perferendis laboriosam. Saepe labore nesciunt minima dicta molestias! Architecto aspernatur recusandae dolorem amet mollitia culpa?
            Fuga possimus vel blanditiis assumenda iusto eveniet quam voluptatem. Quis iure fugit perspiciatis sequi necessitatibus nulla dicta mollitia ut molestias corrupti quo, iste voluptas non vel dolores? Hic, ipsum aut.
            Deserunt tempore odit magnam provident maiores officiis, tempora animi et dicta, recusandae minus repudiandae error assumenda distinctio, fugiat voluptate eveniet. Quis, dicta. Tempore quia nisi illo rerum, amet architecto sit.
            Debitis illum ipsum, possimus amet tenetur ab tempore tempora sequi in reiciendis consequatur inventore unde. Est quod fugit vel rem? Perspiciatis labore ea dicta dignissimos, recusandae aliquid officiis alias dolorum.
            Laborum numquam iure nihil nam, vel ipsum doloremque a suscipit quibusdam unde, veritatis autem illo itaque corrupti qui natus porro reiciendis. Suscipit blanditiis repellat molestiae debitis aut illum facilis amet!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
