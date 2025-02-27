import "./App.css"
import logo from "../assets/logo.png"
import User from "../assets/user.svg?react"
import Cart from "../assets/cart.svg?react"
import ad from "../assets/advert.jpg"
import product from "../assets/product.jpg"
import oils from "../assets/categories/new-essential-oil.jpg"
import fragrance from "../assets/categories/fragrance-category-banner.jpg"
import butters from "../assets/categories/body-butter-3.jpg"
import soap from "../assets/categories/black-soap-liquid.jpg"
import wax from "../assets/categories/wax-and-paraphin-2.jpg"
import incense from "../assets/categories/incense-sticks.jpg"
import moss from "../assets/arrivals/Ginger_sea_moss_jar__76239.1738928788.1280.1280__11275.jpg"
import unscentedSoap from "../assets/arrivals/unscented_soap-removebg-preview__20222.webp"
import conditioner from "../assets/arrivals/Conditiner_bucket__84152.webp"
import shampoo from "../assets/arrivals/shampoo_base_bucket__21274.jpg"
import blackSoap from "../assets/products/BLACK_SOAP-02-1__42217_1__11561.1724651725.1280.1280__95803.jpg"
import gingOil from "../assets/products/Ginger-Essential-Oil__04043.jpg"
import sunOil from "../assets/products/sunflower.jpg"
import pepOil from "../assets/products/peppermint.jpg"
const navOptions = [
  "Seamoss Products",
  "Fragrance Oils",
  "Butters",
  "African Black Soap",
  "Plant/Vegetable Oils",
  "Hair Foods",
  "Essential Oils",
  "African Bitters",
  "Waxes",
  "Turmeric Body Care",
  "Natural Soaps",
  "Sea Salts",
  "Incenses & Spirituality",
  "Documentation",
]

const categories: Array<{ name: string; image: string }> = [
  { name: "Essential Oils", image: oils },
  { name: "Fragrance Oils", image: fragrance },
  { name: "Premium Butters", image: butters },
  { name: "African Soaps", image: soap },
  { name: "Wax and Paraffins", image: wax },
  { name: "Incenses and Spirituality", image: incense },
]

const arrivals = [
  {
    name: "Raw Organic Sea Moss Gel Superfood Wildcrafted",
    price: "$18.99 - $1,150.00",
    image: moss,
  },
  {
    name: "Unscented Turmeric Soap With Honey And Ginger, Kojic Soap, 100% Natural Organic Face Soap, Face Wash, Body Wash Bulk Wholesale",
    price: "$9.95 - $2,950.00",
    image: unscentedSoap,
  },
  {
    name: "Conditioner Base Bulk Wholesale, All Natural, Customizable for DIY & Resale",
    price: "$49.95 - $1,600.00",
    image: conditioner,
  },
  {
    name: "Body Wash Bulk Wholesale, Clear Shower Gel, Facial Wash, Hair Shampoo, Customizable For DIY & Resale",
    price: "$39.95 - $1,650.00",
    image: shampoo,
  },
]

const products = [
  {
    name: "Raw African Black Soap Bar From Ghana For Face, Acne, Eczema, Dark Spots Remover Buy 2 Get 1 Free",
    price: "$7.95 - $15.95",
    image: blackSoap,
  },
  {
    name: "Ginger Essential Oil 100% Pure Natural Therapeutic Grade For Soap, Body, Skin, Hair, Diffuser and Candle Bulk Wholesale",
    price: "$7.45 - $500.00",
    image: gingOil,
  },
  {
    name: "Sunflower Seed Oil, 100% Pure Natural Organic Cold Pressed Carrier Oil, Moisturizer For Face, Body, Hair, Skin, Soap and Massage",
    price: "$5.95 - $71.99",
    image: sunOil,
  },
  {
    name: "Peppermint Essential Oil, 100% Pure Natural Therapeutic Grade For Skin, Soap, Body Butter, Candle Bulk Wholesale",
    price: "$7.32 - $254.95",
    image: pepOil,
  },
]

export function AfroCos() {
  return (
    <div className="clone" style={{ width: "100%", overflow: "hidden" }}>
      {
        // Promotion
      }
      <div
        className="promotion"
        style={{
          color: "white",
          backgroundColor: "#f2791e",
          textAlign: "center",
        }}
      >
        Looking for the perfect gift?
      </div>
      {
        // Navigation
      }
      <div className="navigation" style={{ borderBottom: "grey 1px solid" }}>
        <div
          className="header"
          style={{
            display: "flex",
            alignItems: "center",
            padding: "0 16px",
          }}
        >
          <img
            className="logo"
            alt="logo"
            src={logo}
            style={{ marginRight: "auto" }}
          />
          {/* phone number with icon
          <span
            style={{
              marginRight: "auto",
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <img
              style={{
                height: "20px",
                width: "20px",
                marginRight: "4px",
              }}
              alt="phone"
              src={phone}
            />
            404-698-8509
          </span> */}
          <input
            style={{
              backgroundColor: "white",
              padding: "8px",
              color: "black",
              borderRadius: "30px",
              border: "1px solid black",
            }}
            placeholder="Search catalogue"
          />

          <div style={{ display: "flex" }}>
            <span style={{ display: "flex", alignItems: "center" }}>
              <User /> Sign in
            </span>
            <span style={{ display: "flex", alignItems: "center" }}>
              <Cart />
              (0)
            </span>
          </div>
        </div>
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "wrap",
            padding: "0 20px",
          }}
        >
          {navOptions.map((item) => (
            <p
              style={{
                padding: "0 12px",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              {item}
            </p>
          ))}
        </nav>
      </div>
      {
        // Introduction
      }
      <div style={{ width: "100%", display: "flex", padding: "8px 16px" }}>
        <img
          style={{
            objectFit: "fill",
            width: "400px",
            height: "500px",
            flexBasis: "50%",
          }}
          src={product}
          alt="ad"
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginLeft: "8px",
            flexBasis: "50%",
            padding: "0 12px",
          }}
        >
          <p style={{ fontSize: "2rem", margin: "0", color: "#4B1E13" }}>
            Welcome to
          </p>
          <h1
            style={{
              fontSize: "3rem",
              margin: "0",
              color: "#4B1E13",
            }}
          >
            ShopAfrocosmetics
          </h1>
          <div
            style={{
              width: "40%",
              borderBottom: "dotted #f2791e 4px",
              margin: "16px 0",
            }}
          />
          <p style={{ paddingTop: "12px" }}>
            We are ShopAfrocosmetics, a small, family-owned business based in
            Atlanta, Georgia, passionate about providing affordable,
            high-quality personal care products. We take pride in being
            black-owned and actively support other businesses like ours.
          </p>
          <button>Read more</button>
          <div
            style={{
              display: "flex",
              marginTop: "62px",
            }}
          >
            <button style={{ backgroundColor: "#f2791e" }}>Collections</button>
            <button style={{ backgroundColor: "#f2791e", margin: "0 12px" }}>
              New Arrivals
            </button>
            <button style={{ backgroundColor: "#f2791e" }}>Products</button>
          </div>
        </div>
      </div>
      {
        // Advertisement
      }
      <div style={{ width: "100%" }}>
        <img style={{ objectFit: "fill", width: "100%" }} src={ad} alt="ad" />
      </div>
      {
        // Collections
      }
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          paddingBottom: "20px",
        }}
      >
        <h2
          style={{
            fontSize: "3rem",
            margin: "0",
            color: "#4B1E13",
            padding: "20px 0 0 0",
          }}
        >
          Collections
        </h2>
        <div
          style={{
            width: "40%",
            borderBottom: "dotted #f2791e 4px",
            margin: "8px 0 20px 0 ",
          }}
        />
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            width: "100%",
            gap: "1rem",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {categories.map((cat) => (
            <div
              style={{
                position: "relative",
                display: "flex",
                height: "20rem",
                width: "20rem",
                flexBasis: "25% ",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <img
                style={{
                  position: "absolute",
                  objectFit: "cover",
                  width: "384px",
                  height: "296px",
                  borderRadius: "30px",
                }}
                src={cat.image}
              />
              <div
                style={{
                  zIndex: "100",
                  position: "absolute",
                  width: "100%",
                  textAlign: "center",
                  bottom: 0,
                  fontSize: "1.25rem",
                  fontWeight: "bold",
                  backgroundColor: "white",
                }}
              >
                {cat.name}
              </div>
            </div>
          ))}
        </div>
      </div>
      {
        // New arrivals
      }
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          paddingBottom: "20px",
        }}
      >
        <h2
          style={{
            fontSize: "3rem",
            margin: "0",
            color: "#4B1E13",
            padding: "20px 0 0 0",
          }}
        >
          New Arrivals
        </h2>
        <div
          style={{
            width: "40%",
            borderBottom: "dotted #f2791e 4px",
            margin: "8px 0 20px 0 ",
          }}
        />
        <div
          style={{
            display: "flex",
            width: "100%",
            gap: "1rem",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {arrivals.map((cat) => (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  position: "relative",
                  width: "20rem",
                  cursor: "pointer",
                }}
                className="arrival-container"
              >
                <img
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    height: "20rem",
                    borderRadius: "30px",
                  }}
                  src={cat.image}
                />
                <p
                  style={{
                    width: "100%",
                    textAlign: "center",
                    fontSize: "1.25rem",
                    fontWeight: "bold",
                  }}
                  className="prod-name"
                  title={cat.name}
                >
                  {cat.name}
                </p>
                <p style={{ textAlign: "center" }}>{cat.price}</p>
              </div>
              <button style={{ backgroundColor: "black" }}>Add to cart</button>
            </div>
          ))}
        </div>
      </div>
      {
        // Products
      }
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          paddingBottom: "20px",
        }}
      >
        <h2
          style={{
            fontSize: "3rem",
            margin: "0",
            color: "#4B1E13",
            padding: "20px 0 0 0",
          }}
        >
          Featured Products
        </h2>
        <div
          style={{
            width: "40%",
            borderBottom: "dotted #f2791e 4px",
            margin: "8px 0 20px 0 ",
          }}
        />
        <div
          style={{
            display: "flex",
            width: "100%",
            gap: "1rem",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {products.map((cat) => (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  position: "relative",
                  width: "20rem",
                  cursor: "pointer",
                }}
                className="arrival-container"
              >
                <img
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    height: "20rem",
                    borderRadius: "30px",
                  }}
                  src={cat.image}
                />
                <p
                  style={{
                    width: "100%",
                    textAlign: "center",
                    fontSize: "1.25rem",
                    fontWeight: "bold",
                  }}
                  className="prod-name"
                  title={cat.name}
                >
                  {cat.name}
                </p>
                <p style={{ textAlign: "center" }}>{cat.price}</p>
              </div>
              <button style={{ backgroundColor: "black" }}>Add to cart</button>
            </div>
          ))}
        </div>
      </div>
      {
        // Footer
      }
      <footer
        style={{
          backgroundColor: "#E77817",
          color: "#fff",
          padding: "40px 20px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <h2
          style={{
            fontSize: "20px",
            marginBottom: "10px",
            textAlign: "center",
          }}
        >
          Looking for bulk products with discount pricing?
        </h2>
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: "4rem",
          }}
        >
          <p style={{ fontSize: "16px", fontWeight: "bold" }}>
            Call{" "}
            <a
              href="tel:4046988509"
              style={{ color: "#fff", textDecoration: "none" }}
            >
              (404) 698-8509
            </a>
          </p>
          <p>Monday - Friday 7:30 AM to 5:00 PM CST</p>
          <p>
            After hours pick up available by calling{" "}
            <a
              href="tel:4046988509"
              style={{ color: "#fff", textDecoration: "none" }}
            >
              (404) 698-8509
            </a>
          </p>
        </div>

        <div
          style={{
            maxWidth: "1200px",
            margin: "30px auto 0",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          <div style={{ flex: "1", minWidth: "200px", marginBottom: "20px" }}>
            <h3 style={{ fontSize: "16px", fontWeight: "bold" }}>Contact</h3>
            <p>
              1691 Sands Place SE, Suite G<br />
              Marietta, GA 30067, USA
            </p>
            <p>
              Call us:{" "}
              <a
                href="tel:4046988509"
                style={{ color: "#fff", textDecoration: "none" }}
              >
                404-698-8509
              </a>
            </p>
            <p>
              Email:{" "}
              <a
                href="mailto:shopafrocosmetics@gmail.com"
                style={{ color: "#fff", textDecoration: "none" }}
              >
                shopafrocosmetics@gmail.com
              </a>
            </p>
          </div>

          <div style={{ flex: "1", minWidth: "200px", marginBottom: "20px" }}>
            <h3 style={{ fontSize: "16px", fontWeight: "bold" }}>SHOP</h3>
            <p>
              Seamoss Products
              <br />
              Fragrance Oils
              <br />
              Butters
              <br />
              African Black Soap
              <br />
              Plant/Vegetable Oils
              <br />
              Hair Foods
              <br />
              Essential Oils
              <br />
              African Bitters
              <br />
              Waxes
              <br />
              Turmeric Body Care
              <br />
              Natural Soaps
              <br />
              Sea Salts
              <br />
              Incenses & Spirituality
            </p>
          </div>

          <div style={{ flex: "1", minWidth: "200px", marginBottom: "20px" }}>
            <h3 style={{ fontSize: "16px", fontWeight: "bold" }}>
              INFORMATION
            </h3>
            <p>
              Gift Certificates
              <br />
              Documentation
              <br />
              Fragrance Disclaimer
              <br />
              Mobile Terms of Service
              <br />
              Wholesale Application Form
              <br />
              About us
              <br />
              FAQ
              <br />
              Terms and Conditions
              <br />
              Privacy policy
              <br />
              Shipping & Returns
              <br />
              Contact Us
              <br />
              Blog
            </p>
          </div>

          <div style={{ flex: "1", minWidth: "200px", marginBottom: "20px" }}>
            <h3 style={{ fontSize: "16px", fontWeight: "bold" }}>
              CUSTOMER SERVICE
            </h3>
            <p>
              My Account
              <br />
              Customer Care
              <br />
              Contact Us
              <br />
              FAQs
            </p>
          </div>

          <div style={{ flex: "1", minWidth: "200px", marginBottom: "20px" }}>
            <h3 style={{ fontSize: "16px", fontWeight: "bold" }}>
              NEWSLETTER SIGN UP
            </h3>
            <p>Receive our latest updates about our products and promotions.</p>
            <div style={{ display: "flex", gap: "5px" }}>
              <input
                type="email"
                placeholder="Enter your email address"
                style={{
                  padding: "10px",
                  flex: "1",
                  border: "none",
                  borderRadius: "4px",
                  backgroundColor: "white",
                  color: "black",
                }}
              />
              <button
                style={{
                  backgroundColor: "#F7A500",
                  color: "#fff",
                  border: "none",
                  padding: "10px 15px",
                  cursor: "pointer",
                  borderRadius: "4px",
                }}
              >
                SUBMIT
              </button>
            </div>
          </div>
        </div>

        <div
          style={{ textAlign: "center", marginTop: "20px", fontSize: "14px" }}
        >
          <p>© 2025 Afro Cosmetics. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
