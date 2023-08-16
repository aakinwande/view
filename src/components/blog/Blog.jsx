import React, { useState} from "react";
import "./blog.css";
import NewsLetter from "../home/subscribenewsletter/NewsLetter";
import AllCategories from "./AllCategories";
import BlogBlog from "./BlogBlog";
import ChildrenBlog from "./ChildrenBlog";
import FictionBlog from "./FictionBlog";
import GhostwritingBlog from "./GhostwritingBlog";
import HelpForWritersBlog from "./HelpForWritersBlog";
import YoungAdultBlog from "./YoungAdultBlog";
const Blog = () => {
  const [selectedPage, setSelectedPage] = useState("All Categories");

  const handlePageChange = (event) => {
    setSelectedPage(event.target.value);
  };
  return (
    <>
      <div class="container-fluid">
        <div class="row">
          <div class="col background-image-blog" />
          <div className="blog-text">
            <p>
              Our team of #1 New York Times-bestselling editors, ghostwriters,
              and publishing executives collaborates with authors to develop
              powerful books and navigate the entire publishing journeyOur team
              of #1 New York Times-bestselling editors, ghostwriters, and
              publishing executives collaborates with authors to develop
              powerful books and navigate the entire publishing journey
            </p>
          </div>





          <div className="blog-container">
        <div class="row">
          <div class="col blog-headersss">
            <h1 className="">{selectedPage}</h1>
            </div>
            <div class="col blog-drop">
            <select className="blog-select" onChange={handlePageChange}>
              <option className="blog-value" value="All Categories">
                All Categories
              </option>
              <option className="blog-value" value="Blog">
                Blog
              </option>
              <option className="blog-value" value="Children's Books">
                Children's Books
              </option>
              <option className="blog-value" value="Fiction">
                Fiction
              </option>
              <option className="blog-value" value="Ghostwriting Services">
                Ghostwriting Services
              </option>
              <option className="blog-value" value="Help For Writer">
                Help for Writers
              </option>
              <option className="blog-value" value="Young Adult">
                Young Adult
              </option>
            </select>
            </div>
            
            <div className="row">
              {selectedPage === "All Categories" && <AllCategories />}
            {selectedPage === "Blog" && <BlogBlog />}
            {selectedPage === "Children's Books" && <ChildrenBlog />}
            {selectedPage === "Fiction" && <FictionBlog />}
            {selectedPage === "Ghostwriting Services" && <GhostwritingBlog />}
            {selectedPage === "Help For Writer" && <HelpForWritersBlog />}
            {selectedPage === "Young Adult" && <YoungAdultBlog />}
            </div>

            
            
          </div>
        </div>
  
        </div>
      </div>
      <NewsLetter />
    </>
  );
};

export default Blog;
