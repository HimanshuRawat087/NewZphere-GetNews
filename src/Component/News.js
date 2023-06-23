import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  
  constructor() {
    super();
    this.state = [];
  }

  render() {
    return (
      <div className="container my-3">
        <h1>NewZphere - Top Headlines</h1>
        <div className="row my-5">
          <div className="col-md-3">
            <NewsItem
              title="mytitle"
              description="MyDescription"
              imageUrl="https://i.cbc.ca/1.6881589.1687203301!/fileImage/httpImage/image.jpeg_gen/derivatives/16x9_620/mormon-crickets-nevada-01.jpeg"
            />
          </div>
          <div className="col-md-3">
            <NewsItem title="mytitle" description="MyDescription" />
          </div>
          <div className="col-md-3">
            <NewsItem title="mytitle" description="MyDescription" />
          </div>
          <div className="col-md-3">
            <NewsItem title="mytitle" description="MyDescription" />
          </div>
        </div>
      </div>
    );
  }
}

export default News;
