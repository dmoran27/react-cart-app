import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <header class="header">
          <div class="container-xl">
            <div class="row justify-content-center justify-content-md-between">

              <div class="col-12 col-md-2 text-center text-md-start">
                <a href="index.html">
                  <img class="img-fluid logo" src="/img/logo.png" alt="imagen logo" />
                </a>
              </div>

              <div class="col-md-8 d-flex align-items-start justify-content-md-end justify-content-center">

                <nav class="">
                  <ul class="nav nav-menu justify-content-md-end justify-content-center">

                    <li class="nav-item">
                      <a class="nav-link active" aria-current="page" href="#">Inicio</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#products">Productos</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#tutorials">Tutoriales</a>
                    </li>

                    <li class="nav-item">
                      <a class="nav-link" href="#offers">Ofertas</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#contact">Contacto</a>
                    </li>

                    <li class="carrito nav-item">
                      <a href="#" class="nav-link">
                        <img class="" src="/img/carrito.png" alt="imagen carrito" />
                      </a>

                      <div id="carrito" class="bg-white p-3">
                        <div class="alert alert-danger d-flex align-items-center justify-content-center d-none" role="alert">
                          <p class="m-0 text-center">No hay productos en el carrito</p>
                        </div>
                        <div class="cart ">

                          <table class="w-100 table">
                            <thead>
                              <tr>
                                <th>Imagen</th>
                                <th>Nombre</th>
                                <th>Precio</th>
                                <th>Cantidad</th>
                                <th></th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>
                                  <img class="img-fluid" src="/img/guitarra_02.jpg" alt="imagen guitarra" />
                                </td>
                                <td>SRV</td>
                                <td class="fw-bold">
                                  $299
                                </td>
                                <td class=" gap-4">
                                  <div class="d-flex align-items-start justify-content-between">
                                    <button type="button"
                                      class="btn btn-primary d-flex align-items-center justify-content-center">
                                      -
                                    </button>
                                    1
                                    <button type="button"
                                      class="btn btn-primary d-flex align-items-center justify-content-center">
                                      +
                                    </button>
                                  </div>
                                </td>
                                <td>
                                  <button class="btn btn-danger" type="button">
                                    X
                                  </button>
                                </td>
                              </tr>
                            </tbody>
                          </table>

                          <p class="text-end">Total pagar: <span class="fw-bold">$899</span></p>
                          <button class="btn btn-primary w-100 mt-3 p-2">Vaciar Carrito</button>
                        </div>

                      </div>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </header>

        <main>

        <section class="banner">
          <div id="carouselBanner" class="carousel slide carousel-fade " data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active ">
                <div class="img d-flex align-items-center bg1">
                  <div class="container ">
                    <div class="row align-items-center">
                      <div class="col-md-6  text-md-start">
                        <div class="banner-container">
                          <h4>Brilla con nuestros nuevos lanzamientos</h4>
                          <p>Descubre las últimas tendencias en maquillaje y encuentra tus productos favoritos en Beautique.
                            ¡No te lo pierdas!</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div class="img d-flex align-items-center bg2">
                  <div class="container ">
                    <div class="row align-items-center justify-content-md-end">
                      <div class="col-md-6  text-md-end">
                        <div class="banner-container">
                          <h4>Ofertas exclusivas esta semana</h4>
                          <p>Aprovecha descuentos irresistibles en productos seleccionados. ¡Renueva tu colección de belleza
                            sin gastar de más!</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div class="img d-flex align-items-center bg3" >
                  <div class="container ">
                    <div class="row align-items-center">
                      <div class="col-md-6  text-md-start">
                        <div class="banner-container">
                          <h4>Tips de belleza de nuestros expertos</h4>
                          <p>Aprende de los profesionales con nuestros consejos y tutoriales. Consigue el look perfecto para
                            cualquier ocasión.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item">


                <div class="img d-flex align-items-center bg4">
                  <div class="container ">
                    <div class="row align-items-center justify-content-md-end">
                      <div class="col-md-6  text-md-end">
                        <div class="banner-container">
                          <h4>Experiencia de compra personalizada</h4>
                          <p>Nuestro equipo está aquí para ayudarte a encontrar los productos ideales para ti. ¡Visítanos y
                            descubre la belleza que te define!</p>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <button class="carousel-control-prev" type="button" data-bs-target="#carouselBanner" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselBanner" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>

          </div>
        </section>

        <section id="products" class="products">
          <div class="container">
            <div class="row">
              <div class="col-12 text-center title ">
                <h2 class="line-effect">Productos</h2>
              </div>
            </div>


            <div class="products-tabs my-5 text-center ">

              <ul class="nav nav-tabs justify-content-center">
                <li class="nav-tabs">
                  <a class="nav-link active" data-toggle="tab" data-bs-toggle="tab" href="#all">Todo</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" data-toggle="tab" data-bs-toggle="tab" href="#base">Bases</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" data-toggle="tab" data-bs-toggle="tab" href="#lips">Labios</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" data-toggle="tab" data-bs-toggle="tab" href="#eyes">Ojos</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" data-toggle="tab" data-bs-toggle="tab" href="#brushes">Brochas</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" data-toggle="tab" data-bs-toggle="tab" href="#blush">Rubores</a>
                </li>
              </ul>


              <div class="tab-content mt-4 mb-3">
                <div class="tab-pane container active" id="all">
                  <div class="row">
                    <div class="col-lg-3 col-sm-6 d-flex flex-column product-item my-3">
                      <div class="product">
                        <img
                          src="https://images.pexels.com/photos/54203/pexels-photo-54203.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                          alt="" class="img-fluid" />

                        <div class="hover-content">
                          <div class=" pt-4 pb-1 w-100">
                            <h4> Winter Sweater </h4>
                            <p class="price w-100">$ 60.0</p>
                          </div>

                          <ul class="d-flex align-items-center justify-content-center list-unstyled icons w-100">
                            <li class="icon"><span class="fas fa-shopping-bag"></span></li>
                          </ul>
                        </div>

                      </div>
                      <div class="tag bg-danger text-write">Nuevo</div>

                    </div>
                  </div>
                </div>
                <div class="tab-pane container fade" id="base">
                </div>
                <div class="tab-pane container fade" id="lips">
                </div>
                <div class="tab-pane container fade" id="eyes">
                </div>
                <div class="tab-pane container fade" id="brushes">
                </div>

              </div>
            </div>
          </div>
        </section>

        <section id="tutorials" class="tutorials">
          <div class="container">
            <div class="row">
              <div class="col-12 text-center title">
                <h2 class="line-effect">Tutoriales</h2>
              </div>
            </div>


            <div class="row">
              <div class="col-md-4 mt-md-0 mt-2">
                <div class="card ">
                  <div class="card-body">
                    <i class="fas fa-sun"></i>
                    <div class="title-tutorial"><p><b>Maquillaje Natural para el Día a Día:</b></p><p>un tutorial simple y
                    rápido para un look fresco y natural, ideal para el trabajo o el uso diario.</p></div>
                    <h3 class="">$10.99</h3>
                    <ul class="">
                      <li><b>Video Tutorial:</b> Instrucciones visuales paso a paso.</li>
                      <li><b>Productos Recomendados:</b> Base ligera, corrector, rubor y bálsamo labial.</li>
                      <li><b>Consejos:</b> Cómo elegir tonos que se adapten a tu piel y técnicas de aplicación rápida.</li>
                    </ul>
                    <a href="#!" class="btn btn-primary">Comprar</a>
                  </div>
                </div>
              </div>
              <div class="col-md-4 mt-md-0 mt-2">
                <div class="card">
                  <div class="card-body">
                    <i class="fas fa-moon"></i>
                    <div class="title-tutorial"><p><b>Transformación de Maquillaje para Noche</b></p><p>Un tutorial que
                    enseña a pasar de un look diurno a uno más dramático para la noche.</p></div>
                    <h3 class="">$14.99</h3>
                    <ul class="">
                      <li><b>Guía Escrita:</b> Paso a paso con imágenes.</li>
                      <li><b>Productos Recomendados:</b> Sombras oscuras, delineador, pestañas postizas y labiales intensos.
                      </li>
                      <li><b>Consejos:</b> Cómo intensificar el maquillaje de ojos y lograr una mayor durabilidad.</li>
                    </ul>
                    <a href="#!" class="btn btn-primary">Comprar</a>
                  </div>
                </div>
              </div>
              <div class="col-md-4 mt-md-0 mt-2">
                <div class="card ">
                  <div class="card-body">
                    <i class="fas fa-video"></i>
                    <div class="title-tutorial"><p><b>Técnicas de Contorno e Iluminación: </b></p><p>Un tutorial que muestra
                    cómo esculpir el rostro utilizando contorno e iluminador.</p></div>
                    <h3 class="">$29.99</h3>
                    <ul class="">
                      <li><b>Video Tutorial:</b> Demostración de técnicas en diferentes tipos de rostro.</li>
                      <li><b>Productos Recomendados:</b> Diferentes fórmulas (cremosas y en polvo) para contorno e
                        iluminador.</li>
                      <li><b>Consejos:</b> Cómo seleccionar los tonos adecuados según tu piel y dónde aplicar cada producto.
                      </li>
                    </ul>
                    <a href="#!" class="btn btn-primary">Comprar</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="offers" class="offers">
          <div class="container">
            <div class="row">
              <div class="col-12 text-center title ">
                <h2 class="line-effect">Ofertas</h2>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-3 col-sm-6 d-flex flex-column product-item my-3">
                <div class="product">
                  <img
                    src="https://images.pexels.com/photos/54203/pexels-photo-54203.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    alt=""/>

                  <div class="hover-content">
                    <div class=" pt-4 pb-1 w-100">
                      <h4> Winter Sweater </h4>
                      <p class="price w-100">$ 60.0</p>
                    </div>

                    <ul class="d-flex align-items-center justify-content-center list-unstyled icons w-100">
                      <li class="icon"><span class="fas fa-shopping-bag"></span></li>
                    </ul>
                  </div>

                </div>
                <div class="tag bg-danger text-write">Nuevo</div>

              </div>
            </div>
          </div>
        </section>
        


        </main>

        <footer>
          <div class="container">
            <div class="row">
              <div class="col-12 col-md-4 text-center text-md-start">
                <h2>Enlaces</h2>
                <ul>
                  <li>
                    <a href="#">Inicio</a>
                  </li>
                  <li>
                    <a href="#products">Productos</a>
                  </li>

                  <li>
                    <a href="#tutorials">Tutoriales</a>
                  </li>
                  <li>
                    <a href="#offers">Ofertas</a>
                  </li>
                  <li>
                    <a href="#contact">Contacto</a>
                  </li>
                </ul>
              </div>


              <div class="col-12 col-md-4 text-center">
                <h2>Beautique</h2>
                <p>Tu destino de belleza favorito en la ciudad. Descubre la más amplia selección de productos y servicios
                  diseñados para resaltar tu belleza única. ¡Te esperamos para que brilles como nunca!</p>
              </div>

              <div class="col-12 col-md-4 text-center text-md-end" id="contact">
                <h2>Contacto</h2>
                <p><a href="#"><i class="fa fa-envelope"></i> email@email.com</a></p>
                <p><a href="#"><i class="fa fa-phone"></i> 1234567890</a></p>
                <div class="social-media">
                  <a href="#"><i class="fab fa-twitter"></i></a>
                  <a href="#"><i class="fab fa-instagram"></i></a>
                  <a href="#"><i class="fab fa-facebook"></i></a>
                </div>
              </div>
            </div>

            <div class="copy">
              <div class="container">
                <div class="row">
                  <div class="col-12 text-center">
                    <p>Beautique &copy; 2024</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </footer>
    </>
  )
}

export default App
