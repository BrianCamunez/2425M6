import movies from "../movies.js";
import { useState } from "react";

export function MovieCard() {
  console.log(movies);
  const [numero, setNumero] = useState(0);
  const [tituloPeli, setTituloPeli] = useState(null);
  return (
    <>
      <main>
        <section className="py-5 text-center container">
          <div className="row py-lg-5">
            <div className="col-lg-6 col-md-8 mx-auto">
              <h1 className="font-weight-light">Album example</h1>
              <p className="lead text-muted">
                Something short and leading about the collection below—its
                contents, the creator, etc. Make it short and sweet, but not too
                short so folks don’t simply skip over it entirely.
              </p>
              <p>
                <a href="#" className="btn btn-primary my-2">
                  Main call to action
                </a>
                <a href="#" className="btn btn-secondary my-2">
                  Secondary action
                </a>
              </p>
            </div>
          </div>
        </section>
        <div className="album py-5 bg-light">
          <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              {movies.map(function (item, index) {
                return (
                  <div
                    className="col"
                    key={item.id}
                    onClick={() => setTituloPeli(item.title)}
                  >
                    <div className="card shadow-sm">
                      <img
                        src={item.poster}
                        className="card-img-top"
                        alt="Imagen de la tarjeta"
                        style={{
                          width: "100%",
                          height: "225px",
                          objectFit: "cover",
                        }}
                      />
                      <div className="card-body">
                        <p className="card-text">{item.title}</p>
                        <p className="card-text">{item.description}</p>
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="btn-group">
                            <button
                              type="button"
                              className="btn btn-sm btn-outline-secondary"
                            >
                              View
                            </button>
                            <button
                              type="button"
                              className="btn btn-sm btn-outline-secondary"
                            >
                              Edit
                            </button>
                          </div>
                          <small className="text-muted">9 mins</small>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <button onClick={() => setNumero((numero) => numero + 1)}>+</button>
            <button
              onClick={() => setNumero(numero !== 0 ? numero - 1 : numero)}
            >
              {" "}
              -{" "}
            </button>
            <p className="border">
              {numero} {tituloPeli}
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
