import React from "react";
import {
  Container,
  Desc,
  H1,
  H11,
  HR,
  Wrapper,
} from "../pagesElements/BlogElement";
import BlogList from "../components/BlogList";

const Blog = () => {
  return (
    <Container>
      <Desc>
        <H11>Blog</H11>
        <HR />
      </Desc>
      <Wrapper>
        <BlogList />
        <BlogList />
        <BlogList />
        <BlogList />
        <BlogList />
        <BlogList />
        <BlogList />
        <BlogList />
        <BlogList />
        <BlogList />
        <BlogList />
        <BlogList />
      </Wrapper>
    </Container>
  );
};

export default Blog;
