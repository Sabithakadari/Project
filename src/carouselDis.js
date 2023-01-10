import * as React from "react";
import {Link,createSearchParams} from 'react-router-dom';
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './App.scss';


const IndicatorCarousel = () => {
 
   const clothsDetArr = ["Made in France from wool that imitates the plush texture of fur, this russet brown jacket from Yves Salomon's Meteo range has a funnel neck and relaxed, short silhouette",
                        "material: 100% wool",
                        "lining: 100% polyester, partially lined",
                        "lining II: 85% cotton, 15% polyester, partially lined",
                        "care instructions: dry clean",
                        "slit pockets"];
    const clothsAdditionalInfo = ["Fits large to size - we recommend trying one size smaller",
                                "Oversized",
                                "Mid-weight material",
                                "Thick material",
                                "Falls below the hip",
                                "The model seen in the picture is 178cm-5'10inch and wearing a size FR 34"];
    const bagDetArr = ["Jil Sander’s minimalist designs are enhanced by clean lines and monochrome colors. Made in Italy from cotton and linen, this tote features a leather front pocket in a contrast tone and a detachable leather strap.",
                        "material: fabric",
                        "trim: leather",
                        "internal details: fabric lining, internal slot pockets",
                        "detachable, adjustable shoulder strap, top handles"
                    ];
    const bagAddArr = ["Height 33cm-13",
                        "Max. width 51cm-20",
                        "Max. depth 21cm-8.5",
                        "Length of handles 36cm-14",
                        "Min. length shoulder strap 70cm-27.5",
                        "Max. length shoulder strap 100cm-39.5"
                    ];

    const jewlDetArr = ["Magda Butrym is shaping a new identity for modern womenswear, demonstrated by these multifaceted hoop earrings. Presented with rows of cubic crystal embellishments, this style has a clasp fastening that’s suitable for pierced lobes.",
                        "material: brass",
                        "clasp fastening",
                        "Made in Poland",
                        "for pierced ears"];
    const jewlAddArr = ['Length 6cm-2.5"',
                        'Width 1,3cm-0.5"'];
  return (
    <div className="mainPage">
    <Carousel showIndicators={false} showArrows={false} showStatus={false} showThumbs={false} >  
        <Link to="detailsPage" state= {{detailArr: bagDetArr,addInfoArr: bagAddArr,imageStr: 'bag.jpg'}}>
            <div className="carouselDiv">  
                <img srcSet={require("./assets/Bags1.jpeg")} alt={"Bags"}></img>  
            </div>  
        </Link>
    </Carousel> 
    <Carousel showIndicators={false} showArrows={false} showStatus={false} showThumbs={false}  >  
        <Link to="detailsPage" state= {{detailArr: clothsDetArr,addInfoArr: clothsAdditionalInfo,imageStr: 'cloth.jpg'}}>
            <div className="carouselDiv">  
                <img srcSet={require("./assets/Fashion.jpeg")} alt={"Cloths"}></img>  
            </div> 
        </Link>
    </Carousel> 
    <Carousel showIndicators={false} showArrows={false} showStatus={false} showThumbs={false}  >
        <Link to="detailsPage" state= {{detailArr: jewlDetArr,addInfoArr: jewlAddArr,imageStr: 'jewel.jpg'}}>
            <div className="carouselDiv">  
                <img srcSet={require("./assets/fashionJew.jpeg")} alt={"Jewllery"}></img>  
            </div> 
        </Link>  
    </Carousel>  
    </div>
  );
};

export default IndicatorCarousel;