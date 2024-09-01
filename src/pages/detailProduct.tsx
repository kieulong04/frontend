import { getProductById } from "@/services/product";
import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import {  Icon21, Icon22, Icon23, Icon24, ChevronRightIcon, IconEvaluate, ImageDetailIcon, ImageDescriptionA, ImageDescriptionB } from "@/components/icons";

const DetailProductPage = () => {
  const { id } = useParams();
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["product_key", id],
    queryFn: async () => {
    return await getProductById(id as string);
    },
  });



  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>{error.message}</div>;
  return (
    <div>
      <section className="nav">
        <div className="container">
          <div className="nav__list">
            <div className="nav-item">
              <div className="nav-item-fil">
                <Link to={`/`}><span>Home</span></Link>
                <img src={ChevronRightIcon} alt="" />
              </div>
              <div className="nav-item-fil">
                <Link to={`/shop`}><span>Shop</span></Link>
                <img src={ChevronRightIcon} alt="" />
              </div>
            </div>
            <div className="nav-item">
              <div className="nav-item-fil nav-name">
                <span>{data.name}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End .nav */}
      <section className="detail">
        <div className="container">
          <div className="container">
            <div className="detail-list">
              <div className="detail-img">
                <div className="detail-image">
                  <div className="detail-image-big">
                    <img src={ImageDetailIcon} alt="" />
                  </div>
                </div>
              </div>
              {/*End .detail-item*/}
              <div className="detail-item">
                <div className="detail-item-name">
                  <span>{data.name}</span>
                </div>
                <div className="detail-item-price">
                  <span className="detail-item-price__new">{data.price-data.price*(data.discount/100)}</span>
                  <span className="detail-item-price__old">{data.price}</span>
                </div>
                <div className="detail-item-evaluate">
                  <img src={IconEvaluate} alt="" />
                  <img src={IconEvaluate} alt="" />
                  <img src={IconEvaluate} alt="" />
                  <img src={IconEvaluate} alt="" />
                  <img src={IconEvaluate} alt="" />
                  <span>5 Customer Review</span>
                </div>
                <div className="detail-item-introduce">
                  <p>
                    Setting the bar as one of the loudest speakers in its class,
                    the Kilburn is a compact, stout-hearted hero with a
                    well-balanced audio which boasts a clear midrange and
                    extended highs for a sound.
                  </p>
                </div>
                <div className="detail-item-size">
                  <span>Size</span>
                  <div className="detail-item-type">
                    <span>L</span>
                    <span>XL</span>
                    <span>XS</span>
                  </div>
                </div>
                <div className="detail-item-color">
                  <span>Color</span>
                  <div className="detail-item-colors">
                    <div className="detail-item-blue" />
                    <div className="detail-item-black" />
                    <div className="detail-item-brown" />
                  </div>
                </div>
                <div className="detail-item-cart">
                  <div className="detail-item-quantity">
                    <button>-</button>
                    <button>1</button>
                    <button>+</button>
                  </div>
                  <div className="detail-item-addtocart">
                    <button>Add To Cart</button>
                  </div>
                  <div className="detail-item-Compare">
                    <button>+</button>
                    <button>Compare</button>
                  </div>
                </div>
              </div>
              {/*End .product-item*/}
            </div>
          </div>
          {/*End .detail */}
        </div>
      </section>
      <section className="detail__description">
        <div className="container">
          <div className="detail__description__title">
            <span>
              <a href="#">Description</a>
            </span>
            <span>
              <a href="#">Additional Information</a>
            </span>
            <span>
              <a href="#">Reviews [5]</a>
            </span>
          </div>
          <div className="detail__description__excerpt">
            <p>
              Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
              portable active stereo speaker takes the unmistakable look and
              sound of Marshall, unplugs the chords, and takes the show on the
              road.
            </p>
            <p>
              Weighing in under 7 pounds, the Kilburn is a lightweight piece of
              vintage styled engineering. Setting the bar as one of the loudest
              speakers in its class, the Kilburn is a compact, stout-hearted
              hero with a well-balanced audio which boasts a clear midrange and
              extended highs for a sound that is both articulate and pronounced.
              The analogue knobs allow you to fine tune the controls to your
              personal preferences while the guitar-influenced leather strap
              enables easy and stylish travel.
            </p>
          </div>
          <div className="detail__description__image">
            <img src={ImageDescriptionA} alt="" />
            <img src={ImageDescriptionB} alt="" />
          </div>
        </div>
      </section>
      <section className="Related">
        <div className="container">
          <div className="section-heading">
            <h2 className="section-heading__title">Related Products</h2>
          </div>
          <div className="section-body">
            <div className="product-list">
              <div className="product-item">
                <div className="product-image">
                  <img
                    src={Icon21}
                    alt=""
                    className="product__thumbnail"
                  />
                </div>
                <div className="product-info">
                  <h3 className="product__name">
                    <a href="#" className="product__link">
                      Syltherine
                    </a>
                  </h3>
                  <a href="#" className="product__category">
                    Stylish cafe chair
                  </a>
                  <div className="product-price">
                    <span className="product-price__new">2.500.000đ</span>
                    <del>
                      <span className="product-price__old">3.500.000đ</span>
                    </del>
                  </div>
                </div>
              </div>
              {/*End .product-item*/}
              <div className="product-item">
                <div className="product-image">
                  <img
                    src={Icon22}
                    alt=""
                    className="product__thumbnail"
                  />
                </div>
                <div className="product-info">
                  <h3 className="product__name">
                    <a href="#" className="product__link">
                      Syltherine
                    </a>
                  </h3>
                  <a href="#" className="product__category">
                    Stylish cafe chair
                  </a>
                  <div className="product-price">
                    <span className="product-price__new">2.500.000đ</span>
                    <del>
                      <span className="product-price__old">3.500.000đ</span>
                    </del>
                  </div>
                </div>
              </div>
              {/*End .product-item*/}
              <div className="product-item">
                <div className="product-image">
                  <img
                    src={Icon23}
                    alt=""
                    className="product__thumbnail"
                  />
                </div>
                <div className="product-info">
                  <h3 className="product__name">
                    <a href="#" className="product__link">
                      Syltherine
                    </a>
                  </h3>
                  <a href="#" className="product__category">
                    Stylish cafe chair
                  </a>
                  <div className="product-price">
                    <span className="product-price__new">2.500.000đ</span>
                    <del>
                      <span className="product-price__old">3.500.000đ</span>
                    </del>
                  </div>
                </div>
              </div>
              {/*End .product-item*/}
              <div className="product-item">
                <div className="product-image">
                  <img
                    src={Icon24}
                    alt=""
                    className="product__thumbnail"
                  />
                </div>
                <div className="product-info">
                  <h3 className="product__name">
                    <a href="#" className="product__link">
                      Syltherine
                    </a>
                  </h3>
                  <a href="#" className="product__category">
                    Stylish cafe chair
                  </a>
                  <div className="product-price">
                    <span className="product-price__new">2.500.000đ</span>
                    <del>
                      <span className="product-price__old">3.500.000đ</span>
                    </del>
                  </div>
                </div>
              </div>
              {/*End .product-item*/}
            </div>
          </div>
        </div>
      </section>
      <section className="show">
        <button className="show-more">Show More</button>
      </section>
    </div>
  );
};

export default DetailProductPage;
