import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
    };
  }

  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=d1de964db4be496d99bf6770a459e7e0";
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);

    this.setState({articles: parsedData.articles})
  }

  render() {
    return (
      <div className="container my-3">
        <h1>NewZphere - Top Headlines</h1>
        <div className="row my-5">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-3 my-4" key={element.url}>
                <NewsItem
                  title={element.title?element.title.slice(0,40) + "....." : " "}
                  description={element.description?element.description.slice(0, 65) + "....." : " "}
                  imageUrl={element.urlToImage?element.urlToImage:"https://demofree.sirv.com/nope-not-here.jpg"}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default News;
