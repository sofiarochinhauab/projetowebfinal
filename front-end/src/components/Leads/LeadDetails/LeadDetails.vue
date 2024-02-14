<template>
  <div class="row">
    <div class="col-lg-5 col-xl-4">
      <LeadsInformation :data="currentClient" />
    </div>
    <div class="col-lg-7 col-xl-8">
      <div class="leads-details-tabs">
        <div class="leads-details-tabs">
          <ul class="nav nav-tabs border-0 mb-25" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                  class="nav-link fs-md-15 fs-lg-16 fw-medium border-0 rounded-0 d-block text-center w-100 active"
                  id="tasks-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#deals-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="deals-tab-pane"
                  aria-selected="true"
              >
                Propostas
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                  class="nav-link fs-md-15 fs-lg-16 fw-medium border-0 rounded-0 d-block text-center w-100"
                  id="deals-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#notes-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="notes-tab-pane"
                  aria-selected="false"
              >
                Notas
              </button>
            </li>
          </ul>
        </div>
        <div class="tab-content" id="myTabContent">

          <div
              class="tab-pane fade show active"
              id="deals-tab-pane"
              role="tabpanel"
              tabindex="0">
            <div
                class="card mb-25 border-0 rounded-0 bg-white to-do-list-box letter-spacing"
            >
              <div
                  class="card-head bg-white d-md-flex align-items-center justify-content-between pt-15 pb-15 ps-15 pe-15 ps-sm-20 pe-sm-20 ps-md-25 pe-md-25 ps-lg-30 pe-lg-30"
              >
                <h5 class="card-title fw-bold mb-0">Deals</h5>
                <div class="d-flex align-items-center mt-10 mt-md-0">
                  <form class="search-box position-relative me-15">
                    <input
                        type="text"
                        class="form-control shadow-none text-black rounded-0 border-0"
                        placeholder="Search task"
                    />
                    <button
                        type="submit"
                        class="bg-transparent text-primary transition p-0 border-0"
                    >
                      <i class="flaticon-search-interface-symbol"></i>
                    </button>
                  </form>
                  <button
                      class="dot-btn lh-1 position-relative top-3 bg-transparent border-0 shadow-none p-0 transition d-inline-block mt-10 mt-sm-0"
                      type="button"
                  >
                    <i class="flaticon-dots"></i>
                  </button>
                </div>
              </div>
              <div
                  class="card-body pt-0 pb-15 pb-sm-20 pb-md-25 pb-lg-30 ps-15 pe-15 ps-sm-20 pe-sm-20 ps-md-25 pe-md-25 ps-lg-30 pe-lg-30"
              >
                <div class="table-responsive">
                  <table class="table text-nowrap align-middle mb-0">
                    <thead>
                    <tr>
                      <th
                          scope="col"
                          class="text-uppercase fw-medium shadow-none text-body-tertiary fs-13 pt-0 ps-0"
                      >
                        Deal Name
                      </th>
                      <th
                          scope="col"
                          class="text-uppercase fw-medium shadow-none text-body-tertiary fs-13 pt-0"
                      >
                        Amout
                      </th>
                      <th
                          scope="col"
                          class="text-uppercase fw-medium shadow-none text-body-tertiary fs-13 pt-0"
                      >
                        Status
                      </th>
                      <th
                          scope="col"
                          class="text-uppercase fw-medium shadow-none text-body-tertiary fs-13 pt-0"
                      >
                        Probability
                      </th>
                      <th
                          scope="col"
                          class="text-uppercase fw-medium shadow-none text-body-tertiary fs-13 pt-0"
                      >
                        Closing Date
                      </th>
                      <th
                          scope="col"
                          class="text-uppercase fw-medium shadow-none text-body-tertiary fs-13 pt-0 text-end pe-0"
                      ></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                      <th
                          class="shadow-none lh-1 fw-medium text-black-emphasis title ps-0"
                      >
                        <div
                            class="form-check d-flex align-items-center mb-0"
                        >
                          <input
                              class="form-check-input shadow-none me-8 mt-0"
                              type="checkbox"
                          />
                          J. Ronan
                        </div>
                      </th>
                      <td
                          class="shadow-none lh-1 fw-medium text-black-emphasis"
                      >
                        $ 6,400,000.00
                      </td>
                      <td class="shadow-none lh-1 fw-medium">
                          <span class="badge text-outline-success"
                          >Won Deal</span
                          >
                      </td>
                      <td
                          class="shadow-none lh-1 fw-medium text-black-emphasis"
                      >
                        ronanjohnny@gmail.com
                      </td>
                      <td
                          class="shadow-none lh-1 fw-medium text-black-emphasis"
                      >
                        13 Apr, 2023
                      </td>
                      <td
                          class="shadow-none lh-1 fw-medium text-body-tertiary text-end pe-0"
                      >
                        <div class="dropdown">
                          <button
                              class="dropdown-toggle lh-1 bg-transparent border-0 shadow-none p-0 transition"
                              type="button"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                          >
                            <i class="flaticon-dots"></i>
                          </button>
                          <ul class="dropdown-menu">
                            <li>
                              <a
                                  class="dropdown-item d-flex align-items-center"
                                  href="javascript:void(0);"
                              ><i
                                  class="flaticon-view lh-1 me-8 position-relative top-1"
                              ></i>
                                View</a
                              >
                            </li>
                            <li>
                              <a
                                  class="dropdown-item d-flex align-items-center"
                                  href="javascript:void(0);"
                              ><i
                                  class="flaticon-pen lh-1 me-8 position-relative top-1"
                              ></i>
                                Edit</a
                              >
                            </li>
                            <li>
                              <a
                                  class="dropdown-item d-flex align-items-center"
                                  href="javascript:void(0);"
                              ><i
                                  class="flaticon-delete lh-1 me-8 position-relative top-1"
                              ></i>
                                Delete</a
                              >
                            </li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th
                          class="shadow-none lh-1 fw-medium text-black-emphasis title ps-0"
                      >
                        <div
                            class="form-check d-flex align-items-center mb-0"
                        >
                          <input
                              class="form-check-input shadow-none me-8 mt-0"
                              type="checkbox"
                          />
                          J. Pinkman
                        </div>
                      </th>
                      <td
                          class="shadow-none lh-1 fw-medium text-black-emphasis"
                      >
                        $ 100,000.00
                      </td>
                      <td class="shadow-none lh-1 fw-medium">
                        <span class="badge text-outline-info">New Deal</span>
                      </td>
                      <td
                          class="shadow-none lh-1 fw-medium text-black-emphasis"
                      >
                        pinky321@gmail.com
                      </td>
                      <td
                          class="shadow-none lh-1 fw-medium text-black-emphasis"
                      >
                        12 Apr, 2023
                      </td>
                      <td
                          class="shadow-none lh-1 fw-medium text-body-tertiary text-end pe-0"
                      >
                        <div class="dropdown">
                          <button
                              class="dropdown-toggle lh-1 bg-transparent border-0 shadow-none p-0 transition"
                              type="button"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                          >
                            <i class="flaticon-dots"></i>
                          </button>
                          <ul class="dropdown-menu">
                            <li>
                              <a
                                  class="dropdown-item d-flex align-items-center"
                                  href="javascript:void(0);"
                              ><i
                                  class="flaticon-view lh-1 me-8 position-relative top-1"
                              ></i>
                                View</a
                              >
                            </li>
                            <li>
                              <a
                                  class="dropdown-item d-flex align-items-center"
                                  href="javascript:void(0);"
                              ><i
                                  class="flaticon-pen lh-1 me-8 position-relative top-1"
                              ></i>
                                Edit</a
                              >
                            </li>
                            <li>
                              <a
                                  class="dropdown-item d-flex align-items-center"
                                  href="javascript:void(0);"
                              ><i
                                  class="flaticon-delete lh-1 me-8 position-relative top-1"
                              ></i>
                                Delete</a
                              >
                            </li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th
                          class="shadow-none lh-1 fw-medium text-black-emphasis title ps-0"
                      >
                        <div
                            class="form-check d-flex align-items-center mb-0"
                        >
                          <input
                              class="form-check-input shadow-none me-8 mt-0"
                              type="checkbox"
                          />
                          A. Carter
                        </div>
                      </th>
                      <td
                          class="shadow-none lh-1 fw-medium text-black-emphasis"
                      >
                        $ 1,840,000.00
                      </td>
                      <td class="shadow-none lh-1 fw-medium">
                          <span class="badge text-outline-danger"
                          >Cancelled</span
                          >
                      </td>
                      <td
                          class="shadow-none lh-1 fw-medium text-black-emphasis"
                      >
                        ronanjohnny@gmail.com
                      </td>
                      <td
                          class="shadow-none lh-1 fw-medium text-black-emphasis"
                      >
                        13 Apr, 2023
                      </td>
                      <td
                          class="shadow-none lh-1 fw-medium text-body-tertiary text-end pe-0"
                      >
                        <div class="dropdown">
                          <button
                              class="dropdown-toggle lh-1 bg-transparent border-0 shadow-none p-0 transition"
                              type="button"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                          >
                            <i class="flaticon-dots"></i>
                          </button>
                          <ul class="dropdown-menu">
                            <li>
                              <a
                                  class="dropdown-item d-flex align-items-center"
                                  href="javascript:void(0);"
                              ><i
                                  class="flaticon-view lh-1 me-8 position-relative top-1"
                              ></i>
                                View</a
                              >
                            </li>
                            <li>
                              <a
                                  class="dropdown-item d-flex align-items-center"
                                  href="javascript:void(0);"
                              ><i
                                  class="flaticon-pen lh-1 me-8 position-relative top-1"
                              ></i>
                                Edit</a
                              >
                            </li>
                            <li>
                              <a
                                  class="dropdown-item d-flex align-items-center"
                                  href="javascript:void(0);"
                              ><i
                                  class="flaticon-delete lh-1 me-8 position-relative top-1"
                              ></i>
                                Delete</a
                              >
                            </li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th
                          class="shadow-none lh-1 fw-medium text-black-emphasis title ps-0"
                      >
                        <div
                            class="form-check d-flex align-items-center mb-0"
                        >
                          <input
                              class="form-check-input shadow-none me-8 mt-0"
                              type="checkbox"
                          />
                          V. Loper
                        </div>
                      </th>
                      <td
                          class="shadow-none lh-1 fw-medium text-black-emphasis"
                      >
                        $ 6,400,000.00
                      </td>
                      <td class="shadow-none lh-1 fw-medium">
                          <span class="badge text-outline-success"
                          >Won Deal</span
                          >
                      </td>
                      <td
                          class="shadow-none lh-1 fw-medium text-black-emphasis"
                      >
                        lopervic@gmail.com
                      </td>
                      <td
                          class="shadow-none lh-1 fw-medium text-black-emphasis"
                      >
                        13 Apr, 2023
                      </td>
                      <td
                          class="shadow-none lh-1 fw-medium text-body-tertiary text-end pe-0"
                      >
                        <div class="dropdown">
                          <button
                              class="dropdown-toggle lh-1 bg-transparent border-0 shadow-none p-0 transition"
                              type="button"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                          >
                            <i class="flaticon-dots"></i>
                          </button>
                          <ul class="dropdown-menu">
                            <li>
                              <a
                                  class="dropdown-item d-flex align-items-center"
                                  href="javascript:void(0);"
                              ><i
                                  class="flaticon-view lh-1 me-8 position-relative top-1"
                              ></i>
                                View</a
                              >
                            </li>
                            <li>
                              <a
                                  class="dropdown-item d-flex align-items-center"
                                  href="javascript:void(0);"
                              ><i
                                  class="flaticon-pen lh-1 me-8 position-relative top-1"
                              ></i>
                                Edit</a
                              >
                            </li>
                            <li>
                              <a
                                  class="dropdown-item d-flex align-items-center"
                                  href="javascript:void(0);"
                              ><i
                                  class="flaticon-delete lh-1 me-8 position-relative top-1"
                              ></i>
                                Delete</a
                              >
                            </li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th
                          class="shadow-none lh-1 fw-medium text-black-emphasis title ps-0"
                      >
                        <div
                            class="form-check d-flex align-items-center mb-0"
                        >
                          <input
                              class="form-check-input shadow-none me-8 mt-0"
                              type="checkbox"
                          />
                          W. White
                        </div>
                      </th>
                      <td
                          class="shadow-none lh-1 fw-medium text-black-emphasis"
                      >
                        $ 100,000.00
                      </td>
                      <td class="shadow-none lh-1 fw-medium">
                        <span class="badge text-outline-info">New Deal</span>
                      </td>
                      <td
                          class="shadow-none lh-1 fw-medium text-black-emphasis"
                      >
                        whitespace@gmail.com
                      </td>
                      <td
                          class="shadow-none lh-1 fw-medium text-black-emphasis"
                      >
                        10 Apr, 2023
                      </td>
                      <td
                          class="shadow-none lh-1 fw-medium text-body-tertiary text-end pe-0"
                      >
                        <div class="dropdown">
                          <button
                              class="dropdown-toggle lh-1 bg-transparent border-0 shadow-none p-0 transition"
                              type="button"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                          >
                            <i class="flaticon-dots"></i>
                          </button>
                          <ul class="dropdown-menu">
                            <li>
                              <a
                                  class="dropdown-item d-flex align-items-center"
                                  href="javascript:void(0);"
                              ><i
                                  class="flaticon-view lh-1 me-8 position-relative top-1"
                              ></i>
                                View</a
                              >
                            </li>
                            <li>
                              <a
                                  class="dropdown-item d-flex align-items-center"
                                  href="javascript:void(0);"
                              ><i
                                  class="flaticon-pen lh-1 me-8 position-relative top-1"
                              ></i>
                                Edit</a
                              >
                            </li>
                            <li>
                              <a
                                  class="dropdown-item d-flex align-items-center"
                                  href="javascript:void(0);"
                              ><i
                                  class="flaticon-delete lh-1 me-8 position-relative top-1"
                              ></i>
                                Delete</a
                              >
                            </li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th
                          class="shadow-none lh-1 fw-medium text-black-emphasis title ps-0"
                      >
                        <div
                            class="form-check d-flex align-items-center mb-0"
                        >
                          <input
                              class="form-check-input shadow-none me-8 mt-0"
                              type="checkbox"
                          />
                          T. Skyler
                        </div>
                      </th>
                      <td
                          class="shadow-none lh-1 fw-medium text-black-emphasis"
                      >
                        $ 400,000.00
                      </td>
                      <td class="shadow-none lh-1 fw-medium">
                          <span class="badge text-outline-danger"
                          >Cancelled</span
                          >
                      </td>
                      <td
                          class="shadow-none lh-1 fw-medium text-black-emphasis"
                      >
                        ronanjohnny@gmail.com
                      </td>
                      <td
                          class="shadow-none lh-1 fw-medium text-black-emphasis"
                      >
                        13 Apr, 2023
                      </td>
                      <td
                          class="shadow-none lh-1 fw-medium text-body-tertiary text-end pe-0"
                      >
                        <div class="dropdown">
                          <button
                              class="dropdown-toggle lh-1 bg-transparent border-0 shadow-none p-0 transition"
                              type="button"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                          >
                            <i class="flaticon-dots"></i>
                          </button>
                          <ul class="dropdown-menu">
                            <li>
                              <a
                                  class="dropdown-item d-flex align-items-center"
                                  href="javascript:void(0);"
                              ><i
                                  class="flaticon-view lh-1 me-8 position-relative top-1"
                              ></i>
                                View</a
                              >
                            </li>
                            <li>
                              <a
                                  class="dropdown-item d-flex align-items-center"
                                  href="javascript:void(0);"
                              ><i
                                  class="flaticon-pen lh-1 me-8 position-relative top-1"
                              ></i>
                                Edit</a
                              >
                            </li>
                            <li>
                              <a
                                  class="dropdown-item d-flex align-items-center"
                                  href="javascript:void(0);"
                              ><i
                                  class="flaticon-delete lh-1 me-8 position-relative top-1"
                              ></i>
                                Delete</a
                              >
                            </li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                    </tbody>
                  </table>
                </div>
                <div
                    class="d-md-flex mt-15 mt-md-25 mb-0 justify-content-between align-items-center"
                >
                  <a
                      href="#"
                      class="card-link-btn text-decoration-none text-primary fw-medium position-relative d-inline-block"
                      data-bs-toggle="modal"
                      data-bs-target="#createNewDealModal"
                  >Add A New Deal</a
                  >
                  <div
                      class="pagination-area d-md-flex align-items-center mt-10 mt-md-0"
                  >
                    <p class="mb-0 text-paragraph">
                      Showing <span class="fw-bold">11</span> out of
                      <span class="fw-bold">134</span> results
                    </p>
                    <nav class="mt-12 mt-md-0 ms-md-20">
                      <ul class="pagination mb-0">
                        <li class="page-item">
                          <a class="page-link" href="#" aria-label="Previous">
                            <i class="flaticon-chevron-1"></i>
                          </a>
                        </li>
                        <li class="page-item">
                          <a class="page-link active" href="#">1</a>
                        </li>
                        <li class="page-item">
                          <a class="page-link" href="#">2</a>
                        </li>
                        <li class="page-item">
                          <a class="page-link" href="#">3</a>
                        </li>
                        <li class="page-item">
                          <a class="page-link" href="#" aria-label="Next">
                            <i class="flaticon-chevron"></i>
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>

              </div>
            </div>
          </div>

          <div
              class="tab-pane fade"
              id="notes-tab-pane"
              role="tabpanel"
              tabindex="0">
            <div class="card mb-25 border-0 rounded-0 bg-white letter-spacing">
              <div
                  class="card-head bg-white d-md-flex align-items-center justify-content-between pt-15 pb-15 ps-15 pe-15 ps-sm-20 pe-sm-20 ps-md-25 pe-md-25 ps-lg-30 pe-lg-30"
              >
                <div
                    class="card mb-25 border-0 rounded-0 bg-white letter-spacing lead-info-box"
                >
                  <div class="card-body p-15 p-sm-20 p-md-25 p-lg-30">
                    <div class="tab-content">
                      <div class="row">
                        <div>
                          <div class="content">
                            <p class="text-paragraph fs-md-10 fs-xxxl-16">
                              {{ currentClient.notes }}
                            </p>

                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import LeadsInformation from "./LeadsInformation.vue";
import ClientDataService from "/src/services/ClientDataService.js";

export default defineComponent({
  name: "LeadDetails",
  components: {
    LeadsInformation,
  },
  data() {
    return {
      currentClient: [],
      message: "",
    };
  },
  methods: {
    getClient(id) {
      ClientDataService.get(id)
          .then((response) => {
            this.currentClient = response.data;
            console.log(response.data);
          })
          .catch((e) => {
            console.log(e);
          });
    },
  },
  mounted() {
    this.message = "";
    this.getClient(this.$route.params.id);
  },
});
</script>