import React from "react";
import "./SearchPage.css";
import { useStateValue } from "./StateProvider";
// import Response from "./Response";
import useGoogleSearch from "./useGoogleSearch";
import { Link } from "react-router-dom";
import Search from "./pages/Search";
import SearchIcon from "@material-ui/icons/Search";
import DescriptionIcon from "@material-ui/icons/Description";
import ImageIcon from "@material-ui/icons/Image";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import RoomIcon from "@material-ui/icons/Room";
import MoreVertIcon from "@material-ui/icons/MoreVert";
function SearchPage() {
  const [{ term }, dispatch] = useStateValue();
  const  {data} = useGoogleSearch(term);

  // const data = Response;
  console.log(data);
  return (
    <div className="SearchPage">
      <div className="searchpage_header">
        <Link to="/">
          <img className="Searchpage_logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStH4rERyVrBJXWF8nLkevCnpwq40CFKUu3Zf0zl0mJu3dBxjrM6X4zeVORMZAObeYkwZ8&usqp=CAU" />
        </Link>
        <div className="searchpage_headerbody">
          <Search hideButtons />
          <div className="searchpage_options">
            <div className="searchpage_optionsLeft">
              <div className="searchpage_option">
                <SearchIcon />
                <Link to="/all">All</Link>
              </div>
              <div className="searchpage_option">
                <DescriptionIcon />
                <Link to="/news">News</Link>
              </div>
              <div className="searchpage_option">
                <ImageIcon />
                <Link to="/images">Images</Link>
              </div>
              <div className="searchpage_option">
                <LocalOfferIcon />
                <Link to="/shopping">Shopping</Link>
              </div>
              <div className="searchpage_option">
                <RoomIcon />
                <Link to="/maps">Maps</Link>
              </div>
              <div className="searchpage_option">
                <MoreVertIcon />
                <Link to="/more">More</Link>
              </div>

            </div>
            <div className="searchpage_optionsRight">
              <div className="searchpage_option">
                <Link to="/settings">Settings</Link>
              </div>
              <div className="searchpage_option">
                <Link to="/tools">Tools</Link>
              </div>
            </div>

          </div>
        </div>
      </div>
      {term &&
        (<div className="searchpage_results">
          <p className="searchpage_resultsCount">
            About {data?.searchInformation.formattedTotalResults} results({ data?.searchInformation.formattedSearchTime} seconds) for {term}
          </p>
          {data?.items.map(item =>(
            <div className="searchPage_result"> <a href={item.link}>
            {item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src && (
              <img className="searchPage_resultImage" src={
                item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src
              }
              alt=""/>
            )
              
            }
              {item.displayLink}
            </a>
            <a className="searchPage_resultTitle" href={item.link}>
             <h2> {item.title}</h2>
            </a>
            <p className="searchPage_resultSnippet">
                {item.snippet}
            </p>
            </div>
          ))
            
          }

        </div>)}
    </div>
  )

};

export default SearchPage;