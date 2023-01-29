import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
//b3e9a92e720a40d0ad0f024ee65300b3

export class News extends Component {
  capitalizeFirstLetter=(string) =>{
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  static defaultProps = {
    country : 'in',
    pageSize : 20,
    category : 'general'
  }
  static propTypes={
    country : PropTypes.string,
    pageSize : PropTypes.number,
    category : PropTypes.string
  }
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      page: 1,
      loading: false,
      totalResults:0
    };
    document.title=`MyNews(${this.capitalizeFirstLetter(this.props.category)})`;
  }
  //  async Updatepage (){
  //    const url = `https:newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=b3e9a92e720a40d0ad0f024ee65300b3&page=${this.state.page}&pageSize=${this.props.pageSize}`;
  //    this.setState({loading:true})
  //    let data = await fetch(url);
  //    let parseddata = await data.json();
  //    this.setState({                                         Bug in this function form going to next or previous page
  //      articles: parseddata.articles,
  //      totalResults: parseddata.totalResults,
  //      loading:false
  //    });
  //  }
  async componentDidMount() {
    this.props.setProgress(10) 
    let url = `https:newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=${this.props.apiKey}&page=1&pageSize=${this.props.pageSize}`;
     this.setState({loading:true})
     let data = await fetch(url);
     this.props.setProgress(50) 
     let parseddata = await data.json();    
     this.props.setProgress(70) 
     this.setState({
       articles: parseddata.articles,
       totalResults: parseddata.totalResults,
       loading:false
     });
     this.props.setProgress(100);
    //  this.Updatepage()
  }
  // prevpagebtn = async () => {

  //      let url = `https:newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=b3e9a92e720a40d0ad0f024ee65300b3&page=${
  //      this.state.page - 1
  //    }&pageSize=${this.props.pageSize}`;
  //    this.setState({loading:true})
  //    let data = await fetch(url);
  //    let parseddata = await data.json();
  //    this.setState({ page: this.state.page - 1, articles: parseddata.articles,loading:false });
  //    this.setState({page : this.state.page-1})
  //    this.Updatepage()
  // }
  // nextpagebtn = async () => {
  //      if (this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)) {
  //    }
  //     else {
  //      let url = `https:newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=b3e9a92e720a40d0ad0f024ee65300b3&page=${
  //        this.state.page + 1
  //      }&pageSize=${this.props.pageSize}`;
  //      this.setState({loading:true})
  //      let data = await fetch(url);
  //      let parseddata = await data.json();
  //      this.setState({
  //        page: this.state.page + 1,
  //        articles: parseddata.articles,
  //        loading: false
  //      });
  //    }
  //   this.setState({page : this.state.page+1})
  //   this.Updatepage()
  // };
  fetchMoreData=async()=>{
    let url = `https:newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=${this.props.apiKey}&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
    this.setState({page :this.state.page+1})
    // this.setState({loading:true})
    let data = await fetch(url);
    let parseddata = await data.json();
    this.setState({
      articles: this.state.articles.concat(parseddata.articles),
      totalResults: parseddata.totalResults/*,
      loading:*/
    });

  }
  render() {
    return (
      <>
          <h1 className="text-center" style={{margin: '35px 0px',marginTop:'90px'}}>MyNews -- Top {this.capitalizeFirstLetter(this.props.category)} headline</h1>
          {this.state.loading && <Spinner/>}
          <InfiniteScroll
  dataLength={this.state.articles.length} //This is important field to render the next data
  next={this.fetchMoreData}
  hasMore={this.state.articles.length!==this.state.totalResults}
  loader={<Spinner/>}>
        
          <div className="container">
          < div className="row ">  
            {
            /*!this.state.loading && */this.state.articles.map((element) => {
              return (
                <div className="col-md-4 my-4" key={element.url}>
                  <Newsitem
                    title={element.title ? element.title : ""}
                    description={element.description ? element.description : ""}
                    imageurl={element.urlToImage}
                    newsurl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          
          </div>
          </div>
          </InfiniteScroll>
          {/* <div className="container d-flex justify-content-between">
            <button
              disabled={this.state.page <= 1}
              type="button"
              className="btn btn-dark"
              onClick={this.prevpagebtn}
              >
              &larr; Previous
              </button>
              <button
              disabled={(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))}
              type="button"
              className="btn btn-dark"
              onClick={this.nextpagebtn}
              >
              Next &rarr;
              </button>
            </div> */}
            
        
      </>
    );
  }
}

export default News;
