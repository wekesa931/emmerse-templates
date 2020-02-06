<template>
  <div>
    <Header />
    <Breadcrumbs title="Profile" />
    <!-- personal deatail section start -->
    <section class="contact-page register-page">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <h3>{{ title1 }}</h3>
            <form class="theme-form" method="post" @submit="checkForm1">
              <div v-if="errors.length">
                <ul class="validation-error mb-3">
                  <li v-for="(error, index) in errors" :key="index">
                    {{ error }}
                  </li>
                </ul>
              </div>
              <div class="form-row">
                <div class="col-md-6">
                  <label for="fname">First Name</label>
                  <input
                    id="fname"
                    v-model="fname"
                    type="text"
                    class="form-control"
                    placeholder="First Name"
                    name="fname"
                    required
                  >
                </div>
                <div class="col-md-6">
                  <label for="lname">Last Name</label>
                  <input
                    id="lname"
                    v-model="lname"
                    type="text"
                    class="form-control"
                    placeholder="Last Name"
                    name="lname"
                    required
                  >
                </div>
                <div class="col-md-6">
                  <label for="phone">Phone number</label>
                  <input
                    id="phone"
                    v-model="phone"
                    type="tel"
                    class="form-control"
                    placeholder="Enter your number"
                    name="phone"
                    required
                  >
                </div>
                <div class="col-md-6">
                  <label for="email">Email</label>
                  <input
                    id="email"
                    v-model="email"
                    type="text"
                    class="form-control"
                    placeholder="Email"
                    name="email"
                    required
                  >
                </div>
                <div class="col-md-12">
                  <label for="message">Write Your Message</label>
                  <textarea
                    id="message"
                    v-model="message"
                    class="form-control"
                    placeholder="Write Your Message"
                    name="message"
                    rows="6"
                  />
                </div>
                <div class="col-md-12">
                  <input
                    type="submit"
                    class="btn btn-solid"
                    value="Save"
                  >
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    <!-- Section ends -->

    <!-- address section start -->
    <section class="contact-page register-page section-b-space">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <h3>{{ title2 }}</h3>
            <form class="theme-form" method="post" @submit="checkForm2">
              <div class="form-row">
                <div class="col-md-6">
                  <label for="name">flat / plot</label>
                  <input
                    id="home-ploat"
                    type="text"
                    class="form-control"
                    placeholder="company name"
                    required
                  >
                </div>
                <div class="col-md-6">
                  <label for="name">Address *</label>
                  <input
                    id="address-two"
                    type="text"
                    class="form-control"
                    placeholder="Address"
                    required
                  >
                </div>
                <div class="col-md-6">
                  <label for="email">Zip Code *</label>
                  <input
                    id="zip-code"
                    type="text"
                    class="form-control"
                    placeholder="zip-code"
                    required
                  >
                </div>
                <div class="col-md-6 select_input">
                  <label for="review">Country *</label>
                  <select class="form-control" size="1">
                    <option value="India">
                      India
                    </option>
                    <option value="UAE">
                      UAE
                    </option>
                    <option value="U.K">
                      U.K
                    </option>
                    <option value="US">
                      US
                    </option>
                  </select>
                </div>
                <div class="col-md-6">
                  <label for="review">City *</label>
                  <input id="city" type="text" class="form-control" placeholder="City" required>
                </div>
                <div class="col-md-6">
                  <label for="review">Region/State *</label>
                  <input
                    id="region-state"
                    type="text"
                    class="form-control"
                    placeholder="Region/state"
                    required
                  >
                </div>
                <div class="col-md-12">
                  <button class="btn btn-sm btn-solid" type="submit">
                    Save setting
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    <!-- Section ends -->
    <Footer />
  </div>
</template>
<script>
import Header from '../../../components/header/header1'
import Footer from '../../../components/footer/footer1'
import Breadcrumbs from '../../../components/widgets/breadcrumbs'
export default {
  components: {
    Header,
    Footer,
    Breadcrumbs
  },
  data() {
    return {
      title1: 'personal detail',
      title2: 'shipping address',
      errors: [],
      fname: null,
      lname: null,
      email: null,
      phone: null,
      message: null
    }
  },
  methods: {
    checkForm1: function (e) {
      this.errors = []
      if (!this.fname) {
        this.errors.push('First name required.')
      }
      if (!this.lname) {
        this.errors.push('Last name required.')
      }
      if (!this.email) {
        this.errors.push('Email required.')
      } else if (!this.validEmail(this.email)) {
        this.errors.push('Valid email required.')
      }
      if (!this.phone) {
        this.errors.push('Phone Number required.')
      }
      if (!this.message) {
        this.errors.push('Message required.')
      }
      if (!this.errors.length) return true
      e.preventDefault()
    },
    validEmail: function (email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(email)
    }
  }
}
</script>
