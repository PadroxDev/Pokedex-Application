import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import "../App.js"

function Footer() {
  return (
    <div className='footer-z-index'>
      <div className='pokedex-style-gradient-upward '>
        <div className='pokedex-bot-part-shape'></div>
      </div>
      <MDBFooter className='white-text text-center text-lg-start text-muted color-red'>
        <section>
          <MDBContainer className='text-center text-md-start'>
            <MDBRow className='mt-3'>
              <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4 center-text white-text'>
                <h6 className='text-uppercase fw-bold mb-4'>
                  <MDBIcon className="me-3" />
                  Aled Sauvé Nou
                </h6>
                <p>
                  Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit.
                </p>
              </MDBCol>
              <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4 center-text white-text'>
                <h6 className='text-uppercase fw-bold mb-4'>Antoine Di Roberto</h6>
                <p>
                  <a href='https://www.linkedin.com/in/antoine-di-roberto-8aa93768/'>
                    LinkedIn
                  </a>
                </p>
                <p>
                  <a href='https://mobile.twitter.com/pestfps'>
                    Twitter
                  </a>
                </p>
                <p>
                  <a href='https://snowball.gg'>
                  snowball.gg
                  </a>
                </p>
              </MDBCol>
              <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4 center-text white-text'>
                <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                <p>
                  <MDBIcon className="me-3" />
                  avollet@gaming.tech
                </p>
                <p>
                  <MDBIcon className="me-3" />
                  wbailleul@gaming.tech
                </p>
                <p>
                  <MDBIcon className="me-3" /> +33 6 32 11 86 50
                </p>
                <p>
                  <MDBIcon className="me-3" /> +33 7 67 42 90 08
                </p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>
        <div className='text-center p-4 color-dark-red white-text' >
          © 2022 Copyright: Antoine Vollet - William Bailleul
        </div>
      </MDBFooter>
    </div>
  );
}

export default Footer;