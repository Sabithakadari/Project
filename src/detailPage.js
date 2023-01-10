import React, { useState } from "react";
import {useSearchParams,useLocation,Link} from 'react-router-dom';
import './App.scss'

const DetailPage = (props) => {
    const location = useLocation();
    const detArr = location.state.detailArr;
    const addInfoArr = location.state.addInfoArr;
    const imgData = location.state.imageStr;
    const[clicked, setClicked] = useState(false);

    const addToWishlist = (event) =>{
        setClicked(true);
        let items = {
            imgStr: imgData,
            imgDet: detArr,
            imgAddData: addInfoArr
        }

        let arr = [];
        let wishListArr = sessionStorage.getItem("wishListArr");
        if(wishListArr === 'undefined' || wishListArr === null || wishListArr === ""){
            arr.push(items);
            wishListArr = arr;
        }else{
            wishListArr = JSON.parse(wishListArr.toString());
            if(wishListArr.filter((x)=>x.imgStr === imgData).length === 0){
                wishListArr.push(items);
            }
        }
        sessionStorage.setItem("wishListArr",JSON.stringify(wishListArr));
    };

        return(
            <div > 
                <header className="App-header">
                    <h3>MYTHERESA</h3>
                    <Link to="wishlistPage">
                        <button disabled={!clicked}>Wishlist Items</button>
                    </Link>
                </header>
                <table rows={2} cols={2}>
                    <tr>

                        <td>
                            <img style={{height:"400px",width:"600px"}} srcSet={require("./assets/"+imgData)}/>
                        </td>
                        <td style={{verticalAlign:"top"}}>
                            <div style={{border: "1px solid grey",padding:"10px",height: "375px"}}>
                                <div>
                                    <button onClick={addToWishlist}>Add to Wishlist</button>
                                </div>
                                <br/><br/>
                                <div>
                                    <div className="descCls">Decription</div>
                                    {detArr.map(function(element,index,arr){
                                    return(
                                        <div className="textCls">{element}</div>
                                    )
                                    })}
                                </div>
                            </div>
                           
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2}>
                            <div style={{border: "1px solid grey",padding:"10px"}}>
                                <div className="descCls">Additional Info:</div>
                                {addInfoArr.map(function(element,index,arr){
                                        return(
                                            <div className="textCls">{element}</div>
                                        )
                                        })};
                            </div>
                        </td>
                    </tr>
                </table>
            </div>
        );
}

export default DetailPage;