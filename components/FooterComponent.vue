<template>
  <footer class="footer">
    <b-container>
      <b-row class="footer-inner">
        <b-col class="col-12 text-center mb-1">
          <span class="footer-text text-light">
            <i class="logo-text">Digitool</i>
            | 👨‍💻 with 💖 in The Netherlands |
            <a href="https://instagram.com/digitool.io" title="Follow on Instagram" target="_blank" class="text-light">Follow on Instagram</a> 📷
          </span>
        </b-col>
        <b-col class="col-12 text-center">
          <span class="footer-text text-light">
            <small>© 2018 - All rights reserved</small>
          </span>
        </b-col>
      </b-row>
    </b-container>
  </footer>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.footer {
  background-image: url('../static/footer-bg.svg');
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: 100% 250px;

  .footer-inner {
    padding: 200px 0 15px;

    .footer-text {
      font-size: 1rem;
      vertical-align: top;
      opacity: 0.8;

      .logo-text {
        font-family: Poppins,sans-serif;
        font-weight: 600;
        font-style: normal;
        letter-spacing: 1px;
      }

      small {
        opacity: 0.75;
      }
    }
  }
}
</style>
