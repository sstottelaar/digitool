<template>
  <div>
    <b-container fluid>
      <b-row>
        <b-col class="post-hero">
          <!-- Empty hero -->
        </b-col>
      </b-row>
    </b-container>

    <b-container>
      <b-row class="justify-content-center mb-5">
        <b-col class="col-12 col-md-10 col-lg-8">
          <div class="post-container">
            <h1 class="post-title mt-3">About us</h1>
            <p>We love digital tools that enables us to work smarter and more efficient. We work with different tools every day in our daily jobs as digital marketers. The experience with different tools brought us into thinking to share these tools with other people, like you. That's where the idea for Digitool was born, and now we are here.</p>

            <p>We are two digital marketers from the Netherlands working for a digital agency. We use tools for project management, data collection and collaborating. Most of the tools you'll find on Digitool are either used or extensively tested by ourselves in one way or another. We face new tools every day and there is just not enough time to sift through all of them, we hope to help you a little into the wild jungle that is the world of digital marketing tools.</p>

            <p>Please, let us know what you think! We love to hear what type of tools you use everyday and how it's benefiting your daily life.</p>

            <p><em>Happy exploring ― <a href="https://www.linkedin.com/in/kevinelfring/" data-new-window="true" target="_blank">Kevin</a> & <a href="https://www.linkedin.com/in/sjoerdstottelaar/" data-new-window="true" target="_blank" rel="noopener noreferrer">Sjoerd</a></em></p>

          </div>
        </b-col>
      </b-row>
    </b-container>

  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "About us | Discover upcoming digital marketing tools",
      meta: [
        { hid: "description", name: "description", content: "We face new tools everyday in our daily digital marketing lives, we found the need to share the tools and our experiences with the world. Read more about why we started Digitool." }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.post-hero{
  background: $primary-color;
  background-image: url('../static/hero-bg.svg');
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: 100% 250px;
  min-height: 400px;
}

.post-container {
  .post-title {
    font-weight: 700;
    color: #495057;
  }

  p {
    font-size: 1.1rem;
    color: #6c757d;
    line-height: 1.7;
    margin-bottom: 2rem;
  }
}
</style>
