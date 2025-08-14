/* eslint-disable @next/next/no-img-element */
// app/products/page.js
export default async function ProductsPage() {
  const res = await fetch(" https://ca535besvd.execute-api.us-east-1.amazonaws.com/pdata", {
    cache: "no-store", // always fetch fresh data
  });

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  const data = await res.json();

  // Check if your API returns { items: [...] } or just [...]
  const products = Array.isArray(data) ? data : data.items || [];

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Products</h1>
      <div className="row">
        {products.length > 0 ? (
          products.map((product) => (
            <div className="col-md-4 mb-4" key={product.pid}>
              <div className="card h-100 shadow-sm">
                <img
                  src={product.image}
                  className="card-img-top"
                  alt={product.title}
                  style={{ objectFit: "cover", height: "200px" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">{product.description}</p>
                  <p className="card-text fw-bold">${product.price}</p>
                  <p className="card-text">Stock: {product.stock}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No products found</p>
        )}
      </div>
    </div>
  );
}
