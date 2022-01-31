import React from 'react'

const HtmlCssJs = () => {
  return (
    <section classname="ftco-section">

      <div classname="container">
        <div classname="row justify-content-center">
          <div classname="col-md-6 text-center mb-5">
            <h2 classname="heading-section">Table #05</h2>
          </div>
        </div>

        <div classname="row">
          <div classname="col-md-12">
            <div classname="table-wrap">
              <table classname="table table-responsive-xl">
                <thead>
                  <tr>
                    <th>&nbsp;</th>
                    <th>Email</th>
                    <th>Username</th>
                    <th>Status</th>
                    <th>&nbsp;</th>
                  </tr>
                </thead>

                <tbody>
                  <tr classname="alert" role="alert">
                    <td>
                      <label classname="checkbox-wrap checkbox-primary">
                        <input type="checkbox" checked />
                        <span classname="checkmark"></span>
                      </label>
                    </td>
                    <td classname="d-flex align-items-center">
                      <div classname="img" style="background-image: url(images/person_1.jpg);"></div>
                      <div classname="pl-3 email">
                        <span>markotto@email.com</span>
                        <span>Added: 01/03/2020</span>
                      </div>
                    </td>
                    <td>Markotto89</td>
                    <td classname="status"><span classname="active">Active</span></td>
                    <td>
                      <button type="button" classname="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true"><i classname="fa fa-close"></i></span>
                      </button>
                    </td>
                  </tr>

                  <tr classname="alert" role="alert">
                    <td>
                      <label classname="checkbox-wrap checkbox-primary">
                        <input type="checkbox" />
                        <span classname="checkmark"></span>
                      </label>
                    </td>
                    <td classname="d-flex align-items-center">
                      <div classname="img" style="background-image: url(images/person_2.jpg);"></div>
                      <div classname="pl-3 email">
                        <span>jacobthornton@email.com</span>
                        <span>Added: 01/03/2020</span>
                      </div>
                    </td>
                    <td>Jacobthornton</td>
                    <td classname="status"><span classname="waiting">Waiting for Resassignment</span></td>
                    <td>
                      <button type="button" classname="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true"><i classname="fa fa-close"></i></span>
                      </button>
                    </td>
                  </tr>
                  <tr classname="alert" role="alert">
                    <td>
                      <label classname="checkbox-wrap checkbox-primary">
                        <input type="checkbox" />
                        <span classname="checkmark"></span>
                      </label>
                    </td>
                    <td classname="d-flex align-items-center">
                      <div classname="img" style="background-image: url(images/person_3.jpg);"></div>
                      <div classname="pl-3 email">
                        <span>larrybird@email.com</span>
                        <span>Added: 01/03/2020</span>
                      </div>
                    </td>
                    <td>Larry_bird</td>
                    <td classname="status"><span classname="active">Active</span></td>
                    <td>
                      <button type="button" classname="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true"><i classname="fa fa-close"></i></span>
                      </button>
                    </td>
                  </tr>
                  <tr classname="alert" role="alert">
                    <td>
                      <label classname="checkbox-wrap checkbox-primary">
                        <input type="checkbox" />
                        <span classname="checkmark"></span>
                      </label>
                    </td>
                    <td classname="d-flex align-items-center">
                      <div classname="img" style="background-image: url(images/person_4.jpg);"></div>
                      <div classname="pl-3 email">
                        <span>johndoe@email.com</span>
                        <span>Added: 01/03/2020</span>
                      </div>
                    </td>
                    <td>Johndoe1990</td>
                    <td classname="status"><span classname="active">Active</span></td>
                    <td>
                      <button type="button" classname="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true"><i classname="fa fa-close"></i></span>
                      </button>
                    </td>
                  </tr>
                  <tr classname="alert" role="alert">
                    <td classname="border-bottom-0">
                      <label classname="checkbox-wrap checkbox-primary">
                        <input type="checkbox" />
                        <span classname="checkmark"></span>
                      </label>
                    </td>
                    <td classname="d-flex align-items-center border-bottom-0">
                      <div classname="img" style="background-image: url(images/person_1.jpg);"></div>
                      <div classname="pl-3 email">
                        <span>garybird@email.com</span>
                        <span>Added: 01/03/2020</span>
                      </div>
                    </td>
                    <td classname="border-bottom-0">Garybird_2020</td>
                    <td classname="status border-bottom-0"><span classname="waiting">Waiting for Resassignment</span></td>
                    <td classname="border-bottom-0">
                      <button type="button" classname="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true"><i classname="fa fa-close"></i></span>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default HtmlCssJs
